package io.github.geniusay.pojo.bean;

import com.baomidou.mybatisplus.annotation.FieldStrategy;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import io.github.constant.TimeConstant;
import io.github.geniusay.constant.dbTableName;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = dbTableName.BLOG)
public class BlogDO {

    @TableId(value = "id")
    @TableField(updateStrategy = FieldStrategy.NEVER)
    private Long id;

    @TableField(updateStrategy = FieldStrategy.NEVER)
    private Long blogId;

    private String title;

    private String cover;

    private String content;

    private String tags;

    private String author;

    private Integer viewNum;

    @TableField(updateStrategy = FieldStrategy.NEVER)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonFormat(pattern = TimeConstant.YMD_HMS, timezone = "GMT+8")
    private LocalDateTime createAt;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonFormat(pattern = TimeConstant.YMD_HMS, timezone = "GMT+8")
    private LocalDateTime updateAt;

    public List<Integer> getTags(){
        List<Integer> tags = new ArrayList<>();
        if(StringUtils.hasText(this.tags)){
            String[] split = this.tags.split(",");
            tags = Arrays.stream(split).map(Integer::parseInt).collect(Collectors.toList());
        }
        return tags;
    }
}
