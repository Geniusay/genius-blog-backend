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

import java.time.LocalDateTime;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
@TableName(value = dbTableName.BLOG_TAG)
public class BlogTagDO {

    @TableId(value = "id")
    @TableField(updateStrategy = FieldStrategy.NEVER)
    private Long id;

    private String tagName;

    @TableField(updateStrategy = FieldStrategy.NEVER)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonFormat(pattern = TimeConstant.YMD_HMS, timezone = "GMT+8")
    private LocalDateTime createAt;
}
