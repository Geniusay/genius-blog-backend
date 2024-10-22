package io.github.geniusay.pojo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BlogDTO {

    private String title;

    private String cover;

    private String content;

    private String tags;

}
