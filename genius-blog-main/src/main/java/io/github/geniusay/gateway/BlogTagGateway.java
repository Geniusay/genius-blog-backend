package io.github.geniusay.gateway;

import io.github.geniusay.pojo.bean.BlogTagDO;
import io.github.geniusay.pojo.vo.BlogTagVO;

import java.util.List;
import java.util.Map;

public interface BlogTagGateway {

    Map<Long, BlogTagDO> queryTagAndGetMap(List<Long> ids);

    List<BlogTagVO> getTagVOList(List<Long> ids);
}
