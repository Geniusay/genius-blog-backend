package io.github.geniusay.util;

import io.github.geniusay.pojo.bean.BlogDO;
import io.github.geniusay.pojo.vo.BlogVO;
import org.springframework.beans.BeanUtils;

public class BlogUtil {

    public static BlogVO BlogDo2Vo(BlogDO blogDO){
        BlogVO blogVO = new BlogVO();
        BeanUtils.copyProperties(blogDO, blogVO);
        blogVO.setBlogId(blogDO.getBlogId().toString());
        return blogVO;
    }
}
