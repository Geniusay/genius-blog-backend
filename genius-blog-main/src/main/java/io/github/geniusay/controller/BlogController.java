package io.github.geniusay.controller;

import io.github.common.web.Result;
import io.github.geniusay.delegate.BlogDelegate;
import io.github.geniusay.pojo.dto.BlogDTO;
import io.github.id.snowflake.SnowflakeRegisterException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.validation.Valid;

@RestController
@RequestMapping("/app/v1/blog")
public class BlogController {

    @Resource
    private BlogDelegate delegate;

    @PostMapping(value = "/addBlog")
    public Result addBlog(@RequestBody BlogDTO blogDTO) throws SnowflakeRegisterException {
        return delegate.addBlog(blogDTO);
    }

    @PostMapping(value = "/uploadImg")
    public Result uploadImg(MultipartFile img) throws SnowflakeRegisterException {
        return delegate.uploadImg(img);
    }

    @GetMapping(value = "/blogPageList")
    public Result blogPageList(@RequestParam("page") int page,@RequestParam("limit") int limit) {
        return delegate.blogPageList(page,limit);
    }

    @GetMapping(value = "/oneBlog")
    public Result oneBlog(@RequestParam("blog_id") Long blogId) {
        return delegate.queryById(blogId);
    }
}
