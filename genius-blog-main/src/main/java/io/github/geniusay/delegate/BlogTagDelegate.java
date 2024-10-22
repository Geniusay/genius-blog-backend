package io.github.geniusay.delegate;

import io.github.common.web.Result;
import io.github.geniusay.pojo.dto.BlogTagDTO;
import io.github.geniusay.resp.AddResponse;

import java.util.List;

public interface BlogTagDelegate {

    Result tagList();

    Result<AddResponse> addTag(BlogTagDTO blogTag);

}
