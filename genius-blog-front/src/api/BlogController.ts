import request from "@/utils/request";

export function addBlog(blogDTO) {
  return request({
    url: "/app/v1/blog/addBlog/",
    method: "post",
    data:  blogDTO,
  });
}

export function uploadImg(img: File) {
  const formData = new FormData();
  formData.append("img", img);
  return request({
    url: "/app/v1/blog/uploadImg/",
    method: "post",
    data: formData,
  });
}

export function oneBlog(blogId) {
  return request({
    url: "/app/v1/blog/oneBlog",
    method: "get",
    params: {
      blog_id: blogId,
    },
  });
}

export function blogPageList(page, limit) {
  return request({
    url: "/app/v1/blog/blogPageList/",
    method: "get",
    params: {
      page: page,
      limit: limit,
    },
  });
}
