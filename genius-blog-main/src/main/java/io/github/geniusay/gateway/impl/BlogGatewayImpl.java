package io.github.geniusay.gateway.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import io.github.geniusay.gateway.BlogGateway;
import io.github.geniusay.pojo.bean.BlogDO;
import io.github.geniusay.service.impl.BlogServiceImpl;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component
public class BlogGatewayImpl implements BlogGateway {

    @Resource
    BlogServiceImpl blogService;

    private static final List<String> PAGE_PARAMS =List.of("blog_id","title","cover","tags","author","view_num","create_at","update_at");

    @Override
    public IPage<BlogDO> getPageList(int page, int limit) {
        return blogService.BeanPageList(page, limit, PAGE_PARAMS, List.of("update_at"), true);
    }

    @Override
    public BlogDO queryById(Long blogId) {
        return blogService.query().eq("blog_id", blogId).one();
    }
}
