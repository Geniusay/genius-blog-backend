import request from '@/utils/request';


export function uploadImg(img ) {
     return request({
        url: '/app/v1/blog/uploadImg/',
        method: 'post',
        data: {
            img:img,
        }
     });
}
export function addBlog(blogDTO ) {
     return request({
        url: '/app/v1/blog/addBlog/',
        method: 'post',
        data: {
            blogDTO:blogDTO,
        }
     });
}
export function oneBlog(blogId ) {
     return request({
        url: '/app/v1/blog/oneBlog/',
        method: 'get',
        params: {
            blogId:blogId,
        }
     });
}
export function blogPageList(page, limit ) {
     return request({
        url: '/app/v1/blog/blogPageList/',
        method: 'get',
        params: {
            page:page,
            limit:limit,
        }
     });
}

