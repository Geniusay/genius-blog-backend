<template>
  <MdEditor
    v-model="form.content"
    :toolbars="toolbars"
    :footers="['markdownTotal', '=', 0, 'scrollSwitch']"
  >
    <template #defToolbars>
      <Mark></Mark>
      <Emoji />
      <ExportPDF :modelValue="blogStore.text" height="700px" />
      <div
        class="md-editor-toolbar-item"
        @click="openUploadDialog()"
        title="上传"
      >
        <v-icon class="mdi mdi-cloud-upload"></v-icon>
      </div>
    </template>
    <template #defFooters>
      <TimeNow :needWeekDay="false" />
    </template>
  </MdEditor>

  <div class="pa-4 text-center">
    <v-dialog v-model="uploadDialog" max-width="600">
      <v-card prepend-icon="mdi-account" title="Upload Article">
        <v-card-text>
          <v-row dense>
            <v-col cols="12" sm="12">
              <v-file-input
                v-model="file"
                prepend-icon="mdi mdi-image"
                accept="image/*"
                label="Blog cover input"
                show-size
                @change="uploadCover()"
              ></v-file-input>
            </v-col>

            <v-col cols="12" md="6" sm="12">
              <v-text-field
                v-model="form.title"
                label="Ttile"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12">
              <v-textarea
                v-model="form.description"
                label="Say something for this Blog"
              >
              </v-textarea>
            </v-col>
            <v-col cols="12" sm="12">
              <v-combobox
                v-model="form.tags"
                v-model:search="search"
                :items="tags"
                item-title="tagName"
                item-value="id"
                label="Blog Tags"
                chips
                multiple
                @keydown.enter.prevent="onAddTag()"
              >
              </v-combobox>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis"
            >*please check your Title,Description,Label</small
          >
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="plain"
            @click="uploadDialog = false"
          ></v-btn>

          <v-btn
            color="primary"
            text="Submit"
            variant="tonal"
            @click="upload()"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { MdEditor, toolbars, Emoji, ExportPDF, Mark } from "./config/mdEditor";
import { addBlog, uploadImg } from "@/api/BlogController.ts";
import { tagList, addTag } from "@/api/BlogTagController.ts";
import { useSnackbarStore } from "@/stores/snackbarStore";
import TimeNow from "@/components/TimeNow/index";
import { useBlogStore } from "./store/BlogStore";
import { Tag } from "./compus/BlogTypes.ts";

interface BlogForm {
  title: string;
  content: string;
  description: string;
  tags: Array<Tag>;
  cover: string;
}

onMounted(async () => {
  await tagList().then((res) => {
    tags.value = res.data.list.map((item) => ({
      id: item.id,
      tagName: item.tagName,
    }));
  });
});

const tags = ref<Tag[]>([]);
const search = ref("");
const uploadDialog = ref(false);
const blogStore = useBlogStore();
const snackbarStore = useSnackbarStore();
const emptyBlogForm: BlogForm = {
  title: "",
  content: "",
  description: "",
  tags: [],
  cover: "",
};

const form = ref<BlogForm>({ ...emptyBlogForm });

const file = ref<File | null>(null);

const openUploadDialog = () => {
  uploadDialog.value = true;
};

const upload = async () => {
  const uploadForm = {
    title: form.value.title,
    content: form.value.content,
    description: form.value.description,
    tags: form.value.tags.map((tag) => tag.id).join(";"),
    cover: form.value.cover,
  };

  await addBlog(uploadForm).then((res: any) => {
    if (res.code == "200") {
      snackbarStore.showSuccessMessage("上传成功");
      form.value = { ...emptyBlogForm };
    } else {
      snackbarStore.showErrorMessage("上传失败，问题详情:" + res.msg);
    }
  });
  uploadDialog.value = false;
};

const uploadCover = async () => {
  if (file.value != null && file.value?.size != 0) {
    const rawFile = file.value[0];
    console.log(rawFile);
    if (rawFile.type !== "image/jpeg") {
      return false;
    } else if (rawFile.size / 1024 / 1024 > 10) {
      snackbarStore.showErrorMessage("请上传小于10M的图片");
      return false;
    }
    await uploadImg(rawFile).then((res: any) => {
      console.log(res);
      if (res.code == "200") {
        snackbarStore.showSuccessMessage("上传成功");
        form.value.cover = res.data.url;
      } else {
        snackbarStore.showErrorMessage("上传失败，问题详情:" + res.msg);
      }
    });
  }
};

const onAddTag = async () => {
  if (!search.value) {
    return;
  }
  const tagForm = {
    tagName: search.value,
  };

  await addTag(tagForm).then((res: any) => {
    if (res.code == "200") {
      snackbarStore.showSuccessMessage("添加标签" + search.value + "成功");
      const newTag = {
        tagName: tagForm.tagName,
        id: res.data.result.id,
      };
      form.value.tags.push(newTag);
      form.value.tags = form.value.tags.filter(
        (item) => item != tagForm.tagName
      );
      console.log(form.value.tags);
      tags.value.push(newTag);
    } else {
      snackbarStore.showSuccessMessage("添加标签" + search.value + "失败");
    }
  });
  search.value = "";
};
</script>

<style lang="scss" scoped>

</style>
