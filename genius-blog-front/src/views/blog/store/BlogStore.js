import { defineStore } from "pinia";
export const useBlogStore = defineStore("blogStore", {
    state: () => {
        return {
            text: ref(""),
            title: ref(""),
            label: ref([]),
        };
    },
    actions: {},
    persist: {
        enabled: true, // 这个配置代表存储生效，而且是整个store都存储
        strategies: [
            { storage: localStorage, paths: ["text", "title", "label"] }, // accessToken字段用 localstorage存储
        ],
    },
});
