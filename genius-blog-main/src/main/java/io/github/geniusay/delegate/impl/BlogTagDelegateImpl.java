package io.github.geniusay.delegate.impl;

import io.github.common.logger.CommonLogger;
import io.github.common.web.Result;
import io.github.geniusay.delegate.BlogTagDelegate;
import io.github.geniusay.pojo.bean.BlogTagDO;
import io.github.geniusay.pojo.dto.BlogTagDTO;
import io.github.geniusay.pojo.vo.BlogTagVO;
import io.github.geniusay.resp.AddResponse;
import io.github.geniusay.service.impl.BlogTagServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class BlogTagDelegateImpl implements BlogTagDelegate {

    @Resource
    BlogTagServiceImpl tagService;

    @Resource
    CommonLogger logger;

    @Override
    public Result tagList() {

        List<BlogTagVO> blogTagVOList = tagService.list().stream()
                .map(data -> {
                    BlogTagVO blogTagVO = new BlogTagVO();
                    BeanUtils.copyProperties(data, blogTagVO);
                    return blogTagVO;
                })
                .collect(Collectors.toList());

        return Result.success(
            Map.of(
                    "list", blogTagVOList
            )
        );
    }

    @Override
    public Result<AddResponse> addTag(BlogTagDTO blogTag) {
        logger.info("addTag: %s", blogTag);
        BlogTagDO blogTagDO = BlogTagDO.builder()
                .createAt(LocalDateTime.now())
                .build();
        BeanUtils.copyProperties(blogTag, blogTagDO);
        boolean res = tagService.save(blogTagDO);

        if(res){
            return Result.success(
                    AddResponse.builder()
                            .isAdd(true)
                            .result(Map.of("id", blogTagDO.getId()))
                            .build()
            );
        }else{
            return Result.error(
                    HttpStatus.BAD_REQUEST.name()
                    ,"新增标签失败"
            );
        }

    }

}
