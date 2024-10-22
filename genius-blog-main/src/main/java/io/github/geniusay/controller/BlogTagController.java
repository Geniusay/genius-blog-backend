package io.github.geniusay.controller;

import io.github.common.web.Result;
import io.github.geniusay.delegate.BlogTagDelegate;
import io.github.geniusay.pojo.dto.BlogDTO;
import io.github.geniusay.pojo.dto.BlogTagDTO;
import io.github.id.snowflake.SnowflakeRegisterException;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/app/v1/tag")
public class BlogTagController {

    @Resource
    private BlogTagDelegate tagDelegate;

    @GetMapping(value = "/tags")
    public Result tagList(){
        return tagDelegate.tagList();
    }

    @PostMapping(value = "/addTag")
    public Result addTag(@RequestBody BlogTagDTO blogTagDTO){
        return tagDelegate.addTag(blogTagDTO);
    }
}
