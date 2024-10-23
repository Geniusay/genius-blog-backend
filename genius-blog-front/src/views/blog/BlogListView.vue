<template>
  <v-card class="mx-auto" max-width="600">
    <v-layout>
      <v-main>
        <v-container>
          <v-row dense>
            <v-col v-for="blog in blogList" cols="12" :key="blog.blogId">
              <v-card>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5">
                      {{ blog.title }}
                    </v-card-title>

                    <v-card-subtitle>{{ blog.description }}</v-card-subtitle>

                    <v-card-actions>
                      <v-btn
                        class="ms-2"
                        size="small"
                        text="START RADIO"
                        variant="outlined"
                        @click="viewBlog(blog.blogId)"
                      >
                      </v-btn>
                    </v-card-actions>
                  </div>

                  <v-avatar class="ma-3" rounded="0" size="125">
                    <v-img :src="blog.cover"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { blogPageList } from "@/api/BlogController.ts";
import { Blog } from "./compus/BlogTypes.ts";
import { useRouter } from "vue-router";
const router = useRouter();

const PageInfo = ref({
  page: 0,
  limit: 10,
});

const blogList = ref<Blog[]>([]);

onMounted(async () => {
  getPageList();
});

const nextPage = () => {
  PageInfo.value.page++;
};

const getPageList = async () => {
  await blogPageList(PageInfo.value.page, PageInfo.value.limit).then((res) => {
    blogList.value = res.data.pageList.map((item: any) => {
      return Object.assign({}, item, { createAt: new Date(item.createdAt) });
    });
    console.log(blogList.value);
  });
};

const viewBlog = (blogId: string) => {
  router.push("/blog/view/" + blogId);
};
</script>
