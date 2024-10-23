import { blogPageList } from "@/api/BlogController.ts";
import { useRouter } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const PageInfo = ref({
    page: 0,
    limit: 10,
});
const blogList = ref([]);
onMounted(async () => {
    getPageList();
});
const nextPage = () => {
    PageInfo.value.page++;
};
const getPageList = async () => {
    await blogPageList(PageInfo.value.page, PageInfo.value.limit).then((res) => {
        blogList.value = res.data.pageList.map((item) => {
            return Object.assign({}, item, { createAt: new Date(item.createdAt) });
        });
        console.log(blogList.value);
    });
};
const viewBlog = (blogId) => {
    router.push("/blog/view/" + blogId);
};
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
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = {}.VCard;
    ({}.VCard);
    ({}.VCard);
    __VLS_components.VCard;
    __VLS_components.vCard;
    __VLS_components.VCard;
    __VLS_components.vCard;
    // @ts-ignore
    [VCard, VCard,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("mx-auto") }, maxWidth: ("600"), }));
    const __VLS_2 = __VLS_1({ ...{ class: ("mx-auto") }, maxWidth: ("600"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("mx-auto") }, maxWidth: ("600"), }));
    const __VLS_6 = {}.VLayout;
    ({}.VLayout);
    ({}.VLayout);
    __VLS_components.VLayout;
    __VLS_components.vLayout;
    __VLS_components.VLayout;
    __VLS_components.vLayout;
    // @ts-ignore
    [VLayout, VLayout,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    const __VLS_12 = {}.VMain;
    ({}.VMain);
    ({}.VMain);
    __VLS_components.VMain;
    __VLS_components.vMain;
    __VLS_components.VMain;
    __VLS_components.vMain;
    // @ts-ignore
    [VMain, VMain,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({}));
    const __VLS_18 = {}.VContainer;
    ({}.VContainer);
    ({}.VContainer);
    __VLS_components.VContainer;
    __VLS_components.vContainer;
    __VLS_components.VContainer;
    __VLS_components.vContainer;
    // @ts-ignore
    [VContainer, VContainer,];
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    const __VLS_24 = {}.VRow;
    ({}.VRow);
    ({}.VRow);
    __VLS_components.VRow;
    __VLS_components.vRow;
    __VLS_components.VRow;
    __VLS_components.vRow;
    // @ts-ignore
    [VRow, VRow,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ dense: (true), }));
    const __VLS_26 = __VLS_25({ dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ dense: (true), }));
    for (const [blog] of __VLS_getVForSourceType((__VLS_ctx.blogList))) {
        const __VLS_30 = {}.VCol;
        ({}.VCol);
        ({}.VCol);
        __VLS_components.VCol;
        __VLS_components.vCol;
        __VLS_components.VCol;
        __VLS_components.vCol;
        // @ts-ignore
        [VCol, VCol,];
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ cols: ("12"), key: ((blog.blogId)), }));
        const __VLS_32 = __VLS_31({ cols: ("12"), key: ((blog.blogId)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ cols: ("12"), key: ((blog.blogId)), }));
        const __VLS_36 = {}.VCard;
        ({}.VCard);
        ({}.VCard);
        __VLS_components.VCard;
        __VLS_components.vCard;
        __VLS_components.VCard;
        __VLS_components.vCard;
        // @ts-ignore
        [VCard, VCard,];
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
        const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({}));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex flex-no-wrap justify-space-between") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_42 = {}.VCardTitle;
        ({}.VCardTitle);
        ({}.VCardTitle);
        __VLS_components.VCardTitle;
        __VLS_components.vCardTitle;
        __VLS_components.VCardTitle;
        __VLS_components.vCardTitle;
        // @ts-ignore
        [VCardTitle, VCardTitle,];
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ class: ("text-h5") }, }));
        const __VLS_44 = __VLS_43({ ...{ class: ("text-h5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        ({}({ ...{ class: ("text-h5") }, }));
        (blog.title);
        // @ts-ignore
        [blogList,];
        (__VLS_47.slots).default;
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        const __VLS_48 = {}.VCardSubtitle;
        ({}.VCardSubtitle);
        ({}.VCardSubtitle);
        __VLS_components.VCardSubtitle;
        __VLS_components.vCardSubtitle;
        __VLS_components.VCardSubtitle;
        __VLS_components.vCardSubtitle;
        // @ts-ignore
        [VCardSubtitle, VCardSubtitle,];
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
        const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
        ({}({}));
        (blog.description);
        (__VLS_53.slots).default;
        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
        const __VLS_54 = {}.VCardActions;
        ({}.VCardActions);
        ({}.VCardActions);
        __VLS_components.VCardActions;
        __VLS_components.vCardActions;
        __VLS_components.VCardActions;
        __VLS_components.vCardActions;
        // @ts-ignore
        [VCardActions, VCardActions,];
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
        const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
        ({}({}));
        const __VLS_60 = {}.VBtn;
        ({}.VBtn);
        ({}.VBtn);
        __VLS_components.VBtn;
        __VLS_components.vBtn;
        __VLS_components.VBtn;
        __VLS_components.vBtn;
        // @ts-ignore
        [VBtn, VBtn,];
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ 'onClick': {} }, ...{ class: ("ms-2") }, size: ("small"), text: ("START RADIO"), variant: ("outlined"), }));
        const __VLS_62 = __VLS_61({ ...{ 'onClick': {} }, ...{ class: ("ms-2") }, size: ("small"), text: ("START RADIO"), variant: ("outlined"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        ({}({ ...{ 'onClick': {} }, ...{ class: ("ms-2") }, size: ("small"), text: ("START RADIO"), variant: ("outlined"), }));
        let __VLS_66;
        const __VLS_67 = {
            onClick: (...[$event]) => {
                __VLS_ctx.viewBlog(blog.blogId);
                // @ts-ignore
                [viewBlog,];
            }
        };
        const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
        let __VLS_63;
        let __VLS_64;
        (__VLS_59.slots).default;
        const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
        const __VLS_68 = {}.VAvatar;
        ({}.VAvatar);
        ({}.VAvatar);
        __VLS_components.VAvatar;
        __VLS_components.vAvatar;
        __VLS_components.VAvatar;
        __VLS_components.vAvatar;
        // @ts-ignore
        [VAvatar, VAvatar,];
        const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ ...{ class: ("ma-3") }, rounded: ("0"), size: ("125"), }));
        const __VLS_70 = __VLS_69({ ...{ class: ("ma-3") }, rounded: ("0"), size: ("125"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
        ({}({ ...{ class: ("ma-3") }, rounded: ("0"), size: ("125"), }));
        const __VLS_74 = {}.VImg;
        ({}.VImg);
        ({}.VImg);
        __VLS_components.VImg;
        __VLS_components.vImg;
        __VLS_components.VImg;
        __VLS_components.vImg;
        // @ts-ignore
        [VImg, VImg,];
        const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ src: ((blog.cover)), }));
        const __VLS_76 = __VLS_75({ src: ((blog.cover)), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
        ({}({ src: ((blog.cover)), }));
        const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
        (__VLS_73.slots).default;
        const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
        (__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        (__VLS_35.slots).default;
        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    }
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['flex-no-wrap'];
        __VLS_styleScopedClasses['justify-space-between'];
        __VLS_styleScopedClasses['text-h5'];
        __VLS_styleScopedClasses['ms-2'];
        __VLS_styleScopedClasses['ma-3'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                blogList: blogList,
                viewBlog: viewBlog,
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
