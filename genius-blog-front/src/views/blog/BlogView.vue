<template>
  <MdPreview
    :editorId="id"
    :modelValue="blog?.content"
    previewTheme="arknights"
  />
  <MdCatalog :editorId="id" :scrollElement="scrollElement" />
</template>

<script setup lang="ts">
import { MdPreview, MdCatalog } from "./config/mdEditor";
import { oneBlog } from "@/api/BlogController.ts";
import { Blog } from "./compus/BlogTypes.ts";
import { useRoute } from "vue-router";

const route = useRoute();
const blog = ref<Blog>();
const blogId = ref();
onMounted(async () => {
  blogId.value = route.params.id;
  await oneBlog(blogId.value).then((res) => {
    blog.value = res.data;
  });
});

const id = "preview-only";

const scrollElement = document.documentElement;
</script>

<style lang="scss" scoped></style>
