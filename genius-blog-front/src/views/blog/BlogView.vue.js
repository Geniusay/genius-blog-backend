import { MdPreview, MdCatalog } from "./config/mdEditor";
import { oneBlog } from "@/api/BlogController.ts";
import { useRoute } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const blog = ref();
const blogId = ref();
onMounted(async () => {
    blogId.value = route.params.id;
    await oneBlog(blogId.value).then((res) => {
        blog.value = res.data;
    });
});
const id = "preview-only";
const scrollElement = document.documentElement;
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
let __VLS_modelEmitsType;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = {}.MdPreview;
    ({}.MdPreview);
    __VLS_components.MdPreview;
    // @ts-ignore
    [MdPreview,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ editorId: ((__VLS_ctx.id)), modelValue: ((__VLS_ctx.blog?.content)), previewTheme: ("arknights"), }));
    const __VLS_2 = __VLS_1({ editorId: ((__VLS_ctx.id)), modelValue: ((__VLS_ctx.blog?.content)), previewTheme: ("arknights"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ editorId: ((__VLS_ctx.id)), modelValue: ((__VLS_ctx.blog?.content)), previewTheme: ("arknights"), }));
    // @ts-ignore
    [id, blog,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = {}.MdCatalog;
    ({}.MdCatalog);
    __VLS_components.MdCatalog;
    // @ts-ignore
    [MdCatalog,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ editorId: ((__VLS_ctx.id)), scrollElement: ((__VLS_ctx.scrollElement)), }));
    const __VLS_8 = __VLS_7({ editorId: ((__VLS_ctx.id)), scrollElement: ((__VLS_ctx.scrollElement)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ editorId: ((__VLS_ctx.id)), scrollElement: ((__VLS_ctx.scrollElement)), }));
    // @ts-ignore
    [id, scrollElement,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                MdPreview: MdPreview,
                MdCatalog: MdCatalog,
                blog: blog,
                id: id,
                scrollElement: scrollElement,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
