package io.github.geniusay.service.impl;

import io.github.geniusay.mapper.BlogTagMapper;
import io.github.geniusay.pojo.bean.BlogTagDO;
import io.github.geniusay.service.IBlogTagService;
import io.github.service.AssistantServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class BlogTagServiceImpl extends AssistantServiceImpl<BlogTagMapper, BlogTagDO> implements IBlogTagService{
}
