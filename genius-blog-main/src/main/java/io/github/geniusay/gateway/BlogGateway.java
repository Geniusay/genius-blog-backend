package io.github.geniusay.gateway;

import com.baomidou.mybatisplus.core.metadata.IPage;
import io.github.geniusay.pojo.bean.BlogDO;

public interface BlogGateway {

    IPage<BlogDO> getPageList(int page, int limit);

    BlogDO queryById(Long blogId);
}
