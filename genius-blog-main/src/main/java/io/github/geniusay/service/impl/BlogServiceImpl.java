package io.github.geniusay.service.impl;

import io.github.geniusay.mapper.BlogMapper;
import io.github.geniusay.pojo.bean.BlogDO;
import io.github.geniusay.service.IBlogService;
import io.github.service.AssistantServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class BlogServiceImpl extends AssistantServiceImpl<BlogMapper, BlogDO> implements IBlogService {
}
