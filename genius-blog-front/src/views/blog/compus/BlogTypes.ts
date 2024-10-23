interface Blog {
  blogId: string;
  title: string;
  cover: string;
  content: string;
  tags: string;
  description: string;
  tagNames: Array<Tag>;
  author: string;
  viewNum: number;
  createdAt: string;
  updatedAt: string;
}


interface Tag {
  id: number;
  tagName: string;
}

export {
    Blog,Tag
}