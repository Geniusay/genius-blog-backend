package io.github.geniusay.gateway.impl;

import io.github.geniusay.gateway.BlogTagGateway;
import io.github.geniusay.pojo.bean.BlogTagDO;
import io.github.geniusay.pojo.vo.BlogTagVO;
import io.github.geniusay.service.impl.BlogTagServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class BlogTagGatewayImpl implements BlogTagGateway {
    @Resource
    BlogTagServiceImpl blogTagService;

    public Map<Long, BlogTagDO>  queryTagAndGetMap(List<Long> ids){
        List<BlogTagDO> tagList = blogTagService.query().select("id", "tag_name", "create_at").in("id", ids).list();

        Map<Long, BlogTagDO> tagMap = tagList.stream()
                .collect(Collectors.toMap(BlogTagDO::getId, blogTagDO -> blogTagDO));

        return tagMap;
    }

    public List<BlogTagVO> getTagVOList(List<Long> ids){
        List<BlogTagDO> tagList = blogTagService.query().select("id", "tag_name", "create_at").in("id", ids).list();
        return tagList.stream().map(blogTagDO -> {
            BlogTagVO blogTagVO = new BlogTagVO();
            BeanUtils.copyProperties(blogTagDO, blogTagVO);
            return blogTagVO;
        }).collect(Collectors.toList());
    }
}
