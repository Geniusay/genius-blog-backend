package io.github.geniusay.delegate;

import io.github.common.web.Result;
import io.github.geniusay.pojo.dto.BlogDTO;
import io.github.geniusay.resp.AddResponse;
import io.github.id.snowflake.SnowflakeRegisterException;
import org.springframework.web.multipart.MultipartFile;

public interface BlogDelegate {
    Result<AddResponse> addBlog(BlogDTO blogDTO) throws SnowflakeRegisterException;

    Result uploadImg(MultipartFile file);

    Result blogPageList(int page,int limit);

    Result queryById(Long id);
}
