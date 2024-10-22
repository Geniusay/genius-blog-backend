package io.github.geniusay.constant;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Data
@ConfigurationProperties(prefix = "genius.env")
public class EnvConfig {
    public String author;

    public String apiSavePath;

    public String blogOssPath;
}
