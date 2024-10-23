import { MdEditor, toolbars, Emoji, ExportPDF, Mark } from "./config/mdEditor";
import { addBlog, uploadImg } from "@/api/BlogController.ts";
import { tagList, addTag } from "@/api/BlogTagController.ts";
import { useSnackbarStore } from "@/stores/snackbarStore";
import TimeNow from "@/components/TimeNow/index";
import { useBlogStore } from "./store/BlogStore";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
onMounted(async () => {
    await tagList().then((res) => {
        tags.value = res.data.list.map((item) => ({
            id: item.id,
            tagName: item.tagName,
        }));
    });
});
const tags = ref([]);
const search = ref("");
const uploadDialog = ref(false);
const blogStore = useBlogStore();
const snackbarStore = useSnackbarStore();
const emptyBlogForm = {
    title: "",
    content: "",
    description: "",
    tags: [],
    cover: "",
};
const form = ref({ ...emptyBlogForm });
const file = ref(null);
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
    await addBlog(uploadForm).then((res) => {
        if (res.code == "200") {
            snackbarStore.showSuccessMessage("上传成功");
            form.value = { ...emptyBlogForm };
        }
        else {
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
        }
        else if (rawFile.size / 1024 / 1024 > 10) {
            snackbarStore.showErrorMessage("请上传小于10M的图片");
            return false;
        }
        await uploadImg(rawFile).then((res) => {
            console.log(res);
            if (res.code == "200") {
                snackbarStore.showSuccessMessage("上传成功");
                form.value.cover = res.data.url;
            }
            else {
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
    await addTag(tagForm).then((res) => {
        if (res.code == "200") {
            snackbarStore.showSuccessMessage("添加标签" + search.value + "成功");
            const newTag = {
                tagName: tagForm.tagName,
                id: res.data.result.id,
            };
            form.value.tags.push(newTag);
            form.value.tags = form.value.tags.filter((item) => item != tagForm.tagName);
            console.log(form.value.tags);
            tags.value.push(newTag);
        }
        else {
            snackbarStore.showSuccessMessage("添加标签" + search.value + "失败");
        }
    });
    search.value = "";
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = {}.MdEditor;
    ({}.MdEditor);
    ({}.MdEditor);
    __VLS_components.MdEditor;
    __VLS_components.MdEditor;
    // @ts-ignore
    [MdEditor, MdEditor,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.form.content)), toolbars: ((__VLS_ctx.toolbars)), footers: ((['markdownTotal', '=', 0, 'scrollSwitch'])), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.form.content)), toolbars: ((__VLS_ctx.toolbars)), footers: ((['markdownTotal', '=', 0, 'scrollSwitch'])), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ modelValue: ((__VLS_ctx.form.content)), toolbars: ((__VLS_ctx.toolbars)), footers: ((['markdownTotal', '=', 0, 'scrollSwitch'])), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).defToolbars;
        const __VLS_6 = {}.Mark;
        ({}.Mark);
        ({}.Mark);
        __VLS_components.Mark;
        __VLS_components.Mark;
        // @ts-ignore
        [Mark, Mark,];
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({}));
        // @ts-ignore
        [form, toolbars,];
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        const __VLS_12 = {}.Emoji;
        ({}.Emoji);
        __VLS_components.Emoji;
        // @ts-ignore
        [Emoji,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({}));
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        const __VLS_18 = {}.ExportPDF;
        ({}.ExportPDF);
        __VLS_components.ExportPDF;
        // @ts-ignore
        [ExportPDF,];
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.blogStore.text)), height: ("700px"), }));
        const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.blogStore.text)), height: ("700px"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ modelValue: ((__VLS_ctx.blogStore.text)), height: ("700px"), }));
        // @ts-ignore
        [blogStore,];
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.openUploadDialog();
                    // @ts-ignore
                    [openUploadDialog,];
                } }, ...{ class: ("md-editor-toolbar-item") }, title: ("上传"), });
        const __VLS_24 = {}.VIcon;
        ({}.VIcon);
        ({}.VIcon);
        __VLS_components.VIcon;
        __VLS_components.vIcon;
        __VLS_components.VIcon;
        __VLS_components.vIcon;
        // @ts-ignore
        [VIcon, VIcon,];
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("mdi mdi-cloud-upload") }, }));
        const __VLS_26 = __VLS_25({ ...{ class: ("mdi mdi-cloud-upload") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ ...{ class: ("mdi mdi-cloud-upload") }, }));
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).defFooters;
        const __VLS_30 = {}.TimeNow;
        ({}.TimeNow);
        __VLS_components.TimeNow;
        // @ts-ignore
        [TimeNow,];
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ needWeekDay: ((false)), }));
        const __VLS_32 = __VLS_31({ needWeekDay: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ needWeekDay: ((false)), }));
        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pa-4 text-center") }, });
    const __VLS_36 = {}.VDialog;
    ({}.VDialog);
    ({}.VDialog);
    __VLS_components.VDialog;
    __VLS_components.vDialog;
    __VLS_components.VDialog;
    __VLS_components.vDialog;
    // @ts-ignore
    [VDialog, VDialog,];
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ modelValue: ((__VLS_ctx.uploadDialog)), maxWidth: ("600"), }));
    const __VLS_38 = __VLS_37({ modelValue: ((__VLS_ctx.uploadDialog)), maxWidth: ("600"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ modelValue: ((__VLS_ctx.uploadDialog)), maxWidth: ("600"), }));
    const __VLS_42 = {}.VCard;
    ({}.VCard);
    ({}.VCard);
    __VLS_components.VCard;
    __VLS_components.vCard;
    __VLS_components.VCard;
    __VLS_components.vCard;
    // @ts-ignore
    [VCard, VCard,];
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ prependIcon: ("mdi-account"), title: ("Upload Article"), }));
    const __VLS_44 = __VLS_43({ prependIcon: ("mdi-account"), title: ("Upload Article"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ prependIcon: ("mdi-account"), title: ("Upload Article"), }));
    const __VLS_48 = {}.VCardText;
    ({}.VCardText);
    ({}.VCardText);
    __VLS_components.VCardText;
    __VLS_components.vCardText;
    __VLS_components.VCardText;
    __VLS_components.vCardText;
    // @ts-ignore
    [VCardText, VCardText,];
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({}));
    const __VLS_54 = {}.VRow;
    ({}.VRow);
    ({}.VRow);
    __VLS_components.VRow;
    __VLS_components.vRow;
    __VLS_components.VRow;
    __VLS_components.vRow;
    // @ts-ignore
    [VRow, VRow,];
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ dense: (true), }));
    const __VLS_56 = __VLS_55({ dense: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({ dense: (true), }));
    const __VLS_60 = {}.VCol;
    ({}.VCol);
    ({}.VCol);
    __VLS_components.VCol;
    __VLS_components.vCol;
    __VLS_components.VCol;
    __VLS_components.vCol;
    // @ts-ignore
    [VCol, VCol,];
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ cols: ("12"), sm: ("12"), }));
    const __VLS_62 = __VLS_61({ cols: ("12"), sm: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}({ cols: ("12"), sm: ("12"), }));
    const __VLS_66 = {}.VFileInput;
    ({}.VFileInput);
    ({}.VFileInput);
    __VLS_components.VFileInput;
    __VLS_components.vFileInput;
    __VLS_components.VFileInput;
    __VLS_components.vFileInput;
    // @ts-ignore
    [VFileInput, VFileInput,];
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.file)), prependIcon: ("mdi mdi-image"), accept: ("image/*"), label: ("Blog cover input"), showSize: (true), }));
    const __VLS_68 = __VLS_67({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.file)), prependIcon: ("mdi mdi-image"), accept: ("image/*"), label: ("Blog cover input"), showSize: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}({ ...{ 'onChange': {} }, modelValue: ((__VLS_ctx.file)), prependIcon: ("mdi mdi-image"), accept: ("image/*"), label: ("Blog cover input"), showSize: (true), }));
    let __VLS_72;
    const __VLS_73 = {
        onChange: (...[$event]) => {
            __VLS_ctx.uploadCover();
            // @ts-ignore
            [uploadDialog, file, uploadCover,];
        }
    };
    const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    let __VLS_69;
    let __VLS_70;
    (__VLS_65.slots).default;
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    const __VLS_74 = {}.VCol;
    ({}.VCol);
    ({}.VCol);
    __VLS_components.VCol;
    __VLS_components.vCol;
    __VLS_components.VCol;
    __VLS_components.vCol;
    // @ts-ignore
    [VCol, VCol,];
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ cols: ("12"), md: ("6"), sm: ("12"), }));
    const __VLS_76 = __VLS_75({ cols: ("12"), md: ("6"), sm: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    ({}({ cols: ("12"), md: ("6"), sm: ("12"), }));
    const __VLS_80 = {}.VTextField;
    ({}.VTextField);
    ({}.VTextField);
    __VLS_components.VTextField;
    __VLS_components.vTextField;
    __VLS_components.VTextField;
    __VLS_components.vTextField;
    // @ts-ignore
    [VTextField, VTextField,];
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ modelValue: ((__VLS_ctx.form.title)), label: ("Ttile"), required: (true), }));
    const __VLS_82 = __VLS_81({ modelValue: ((__VLS_ctx.form.title)), label: ("Ttile"), required: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    ({}({ modelValue: ((__VLS_ctx.form.title)), label: ("Ttile"), required: (true), }));
    // @ts-ignore
    [form,];
    const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
    (__VLS_79.slots).default;
    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
    const __VLS_86 = {}.VCol;
    ({}.VCol);
    ({}.VCol);
    __VLS_components.VCol;
    __VLS_components.vCol;
    __VLS_components.VCol;
    __VLS_components.vCol;
    // @ts-ignore
    [VCol, VCol,];
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ cols: ("12"), sm: ("12"), }));
    const __VLS_88 = __VLS_87({ cols: ("12"), sm: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    ({}({ cols: ("12"), sm: ("12"), }));
    const __VLS_92 = {}.VTextarea;
    ({}.VTextarea);
    ({}.VTextarea);
    __VLS_components.VTextarea;
    __VLS_components.vTextarea;
    __VLS_components.VTextarea;
    __VLS_components.vTextarea;
    // @ts-ignore
    [VTextarea, VTextarea,];
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ modelValue: ((__VLS_ctx.form.description)), label: ("Say something for this Blog"), }));
    const __VLS_94 = __VLS_93({ modelValue: ((__VLS_ctx.form.description)), label: ("Say something for this Blog"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    ({}({ modelValue: ((__VLS_ctx.form.description)), label: ("Say something for this Blog"), }));
    // @ts-ignore
    [form,];
    const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
    (__VLS_91.slots).default;
    const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
    const __VLS_98 = {}.VCol;
    ({}.VCol);
    ({}.VCol);
    __VLS_components.VCol;
    __VLS_components.vCol;
    __VLS_components.VCol;
    __VLS_components.vCol;
    // @ts-ignore
    [VCol, VCol,];
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ cols: ("12"), sm: ("12"), }));
    const __VLS_100 = __VLS_99({ cols: ("12"), sm: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    ({}({ cols: ("12"), sm: ("12"), }));
    const __VLS_104 = {}.VCombobox;
    ({}.VCombobox);
    ({}.VCombobox);
    __VLS_components.VCombobox;
    __VLS_components.vCombobox;
    __VLS_components.VCombobox;
    __VLS_components.vCombobox;
    // @ts-ignore
    [VCombobox, VCombobox,];
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ ...{ 'onKeydown': {} }, modelValue: ((__VLS_ctx.form.tags)), search: ((__VLS_ctx.search)), items: ((__VLS_ctx.tags)), itemTitle: ("tagName"), itemValue: ("id"), label: ("Blog Tags"), chips: (true), multiple: (true), }));
    const __VLS_106 = __VLS_105({ ...{ 'onKeydown': {} }, modelValue: ((__VLS_ctx.form.tags)), search: ((__VLS_ctx.search)), items: ((__VLS_ctx.tags)), itemTitle: ("tagName"), itemValue: ("id"), label: ("Blog Tags"), chips: (true), multiple: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    ({}({ ...{ 'onKeydown': {} }, modelValue: ((__VLS_ctx.form.tags)), search: ((__VLS_ctx.search)), items: ((__VLS_ctx.tags)), itemTitle: ("tagName"), itemValue: ("id"), label: ("Blog Tags"), chips: (true), multiple: (true), }));
    let __VLS_110;
    const __VLS_111 = {
        onKeydown: (...[$event]) => {
            __VLS_ctx.onAddTag();
            // @ts-ignore
            [form, search, tags, onAddTag,];
        }
    };
    const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
    let __VLS_107;
    let __VLS_108;
    (__VLS_103.slots).default;
    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
    (__VLS_59.slots).default;
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({ ...{ class: ("text-caption text-medium-emphasis") }, });
    (__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    const __VLS_112 = {}.VDivider;
    ({}.VDivider);
    ({}.VDivider);
    __VLS_components.VDivider;
    __VLS_components.vDivider;
    __VLS_components.VDivider;
    __VLS_components.vDivider;
    // @ts-ignore
    [VDivider, VDivider,];
    const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({}));
    const __VLS_114 = __VLS_113({}, ...__VLS_functionalComponentArgsRest(__VLS_113));
    ({}({}));
    const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114);
    const __VLS_118 = {}.VCardActions;
    ({}.VCardActions);
    ({}.VCardActions);
    __VLS_components.VCardActions;
    __VLS_components.vCardActions;
    __VLS_components.VCardActions;
    __VLS_components.vCardActions;
    // @ts-ignore
    [VCardActions, VCardActions,];
    const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({}));
    const __VLS_120 = __VLS_119({}, ...__VLS_functionalComponentArgsRest(__VLS_119));
    ({}({}));
    const __VLS_124 = {}.VSpacer;
    ({}.VSpacer);
    ({}.VSpacer);
    __VLS_components.VSpacer;
    __VLS_components.vSpacer;
    __VLS_components.VSpacer;
    __VLS_components.vSpacer;
    // @ts-ignore
    [VSpacer, VSpacer,];
    const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({}));
    const __VLS_126 = __VLS_125({}, ...__VLS_functionalComponentArgsRest(__VLS_125));
    ({}({}));
    const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126);
    const __VLS_130 = {}.VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    // @ts-ignore
    [VBtn, VBtn,];
    const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{ 'onClick': {} }, text: ("Close"), variant: ("plain"), }));
    const __VLS_132 = __VLS_131({ ...{ 'onClick': {} }, text: ("Close"), variant: ("plain"), }, ...__VLS_functionalComponentArgsRest(__VLS_131));
    ({}({ ...{ 'onClick': {} }, text: ("Close"), variant: ("plain"), }));
    let __VLS_136;
    const __VLS_137 = {
        onClick: (...[$event]) => {
            __VLS_ctx.uploadDialog = false;
            // @ts-ignore
            [uploadDialog,];
        }
    };
    const __VLS_135 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
    let __VLS_133;
    let __VLS_134;
    const __VLS_138 = {}.VBtn;
    ({}.VBtn);
    ({}.VBtn);
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    __VLS_components.VBtn;
    __VLS_components.vBtn;
    // @ts-ignore
    [VBtn, VBtn,];
    const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ ...{ 'onClick': {} }, color: ("primary"), text: ("Submit"), variant: ("tonal"), }));
    const __VLS_140 = __VLS_139({ ...{ 'onClick': {} }, color: ("primary"), text: ("Submit"), variant: ("tonal"), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
    ({}({ ...{ 'onClick': {} }, color: ("primary"), text: ("Submit"), variant: ("tonal"), }));
    let __VLS_144;
    const __VLS_145 = {
        onClick: (...[$event]) => {
            __VLS_ctx.upload();
            // @ts-ignore
            [upload,];
        }
    };
    const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
    let __VLS_141;
    let __VLS_142;
    (__VLS_123.slots).default;
    const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
    (__VLS_47.slots).default;
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    (__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['md-editor-toolbar-item'];
        __VLS_styleScopedClasses['mdi'];
        __VLS_styleScopedClasses['mdi-cloud-upload'];
        __VLS_styleScopedClasses['pa-4'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-caption'];
        __VLS_styleScopedClasses['text-medium-emphasis'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                MdEditor: MdEditor,
                toolbars: toolbars,
                Emoji: Emoji,
                ExportPDF: ExportPDF,
                Mark: Mark,
                TimeNow: TimeNow,
                tags: tags,
                search: search,
                uploadDialog: uploadDialog,
                blogStore: blogStore,
                form: form,
                file: file,
                openUploadDialog: openUploadDialog,
                upload: upload,
                uploadCover: uploadCover,
                onAddTag: onAddTag,
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
