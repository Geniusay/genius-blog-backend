import request from '@/utils/request';


export function addTag(blogTagDTO ) {
     return request({
        url: '/app/v1/tag/addTag/',
        method: 'post',
        data: {
            blogTagDTO:blogTagDTO,
        }
     });
}
export function tagList() {
     return request({
        url: '/app/v1/tag/tags/',
        method: 'get',
        params: {
        }
     });
}

