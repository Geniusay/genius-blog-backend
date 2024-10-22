package io.github.geniusay.delegate.impl;

import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.model.PutObjectRequest;
import com.baomidou.mybatisplus.core.metadata.IPage;
import io.github.common.PageVO;
import io.github.common.logger.CommonLogger;
import io.github.common.web.Result;
import io.github.geniusay.config.AliyunConfig;
import io.github.geniusay.delegate.BlogDelegate;
import io.github.geniusay.gateway.impl.BlogGatewayImpl;
import io.github.geniusay.pojo.bean.BlogDO;
import io.github.geniusay.pojo.bean.BlogTagDO;
import io.github.geniusay.pojo.dto.BlogDTO;
import io.github.geniusay.pojo.vo.BlogTagVO;
import io.github.geniusay.pojo.vo.BlogVO;
import io.github.geniusay.resp.AddResponse;
import io.github.geniusay.service.impl.BlogServiceImpl;

import io.github.geniusay.gateway.impl.BlogTagGatewayImpl;
import io.github.geniusay.util.BlogUtil;
import io.github.id.snowflake.SnowflakeGenerator;
import io.github.id.snowflake.SnowflakeRegisterException;
import io.github.geniusay.constant.EnvConfig;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Component
public class BlogDelegateImpl implements BlogDelegate {

    @Resource
    BlogServiceImpl blogService;

    @Resource
    BlogGatewayImpl blogGateway;

    @Resource
    SnowflakeGenerator snowflakeGenerator;

    @Resource
    BlogTagGatewayImpl blogTagGateway;

    @Resource
    EnvConfig envConfig;

    @Resource
    AliyunConfig aliyunConfig;

    @Resource
    CommonLogger logger;
    @Override
    public Result<AddResponse> addBlog(BlogDTO blogDTO) throws SnowflakeRegisterException {
        BlogDO blogDO = BlogDO.builder()
                .blogId(snowflakeGenerator.generate())
                .author(envConfig.author)
                .createAt(LocalDateTime.now())
                .updateAt(LocalDateTime.now())
                .viewNum(0)
                .build();
        // 复制属性
        BeanUtils.copyProperties(blogDTO, blogDO);
        boolean save = blogService.save(blogDO);

        return Result.success(AddResponse.builder()
                .isAdd(save)
                .build()
        );
    }

    @Override
    public Result uploadImg(MultipartFile file) {
        OSS cilent = new OSSClientBuilder().build(aliyunConfig.getEndpoints(),
                aliyunConfig.getAccessKeyId(),
                aliyunConfig.getAccessKeySecret());
        String filePath = envConfig.blogOssPath + file.getOriginalFilename();

        logger.info("Upload ImgFile:%s",filePath);

        try {
            cilent.putObject(
                    new PutObjectRequest(aliyunConfig.getBuckets(), filePath, file.getInputStream())
            );
            return Result.success(
                    Map.of(
                            "url",String.format("https://%s.oss-cn-shanghai.aliyuncs.com/%s",aliyunConfig.getBuckets(),filePath)
                    )
            );
        }catch (Exception e){
            return Result.error(HttpStatus.BAD_REQUEST.name(), e.getMessage());
        }finally {
            cilent.shutdown();
        }
    }

    @Override
    public Result blogPageList(int page, int limit) {
        IPage<BlogDO> beanPageList = blogGateway.getPageList(page, limit);

        Set<Long> idSet = new TreeSet<>();
        for (BlogDO record : beanPageList.getRecords()) {
            idSet.addAll(record.longTags());
        }

        Map<Long, BlogTagDO> tagMap = blogTagGateway.queryTagAndGetMap(new ArrayList<>(idSet));

        List<BlogVO> blogVOS = beanPageList.getRecords().stream().map(blogDO -> {

            BlogVO blogVO = BlogUtil.BlogDo2Vo(blogDO);

            List<BlogTagVO> blogTagList = blogDO.longTags().stream().map(item -> {
                BlogTagVO blogTagVO = new BlogTagVO();
                BeanUtils.copyProperties(tagMap.get(item), blogTagVO);
                return blogTagVO;
            }).collect(Collectors.toList());
            blogVO.setTagNames(blogTagList);

            return blogVO;
        }).collect(Collectors.toList());

        PageVO<BlogVO> pageVO = new PageVO<>(blogVOS,beanPageList.getPages(),beanPageList.getSize(),beanPageList.getTotal());

        return Result.success(pageVO);
    }

    @Override
    public Result queryById(Long id) {
        BlogDO blogDO = blogGateway.queryById(id);
        if(Objects.isNull(blogDO)){
            return Result.error("400","博客不存在");
        }

        BlogVO blogVO = BlogUtil.BlogDo2Vo(blogDO);

        blogVO.setTagNames(blogTagGateway.getTagVOList(blogDO.longTags()));
        return Result.success(blogVO);
    }
}
