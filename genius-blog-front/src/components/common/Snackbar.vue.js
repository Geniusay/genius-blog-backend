import { useSnackbarStore } from "@/stores/snackbarStore";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const snackbarStore = useSnackbarStore();
const getIcon = (type) => {
    const icon = {
        info: "mdi-information",
        success: "mdi-check-circle",
        error: "mdi-alert-circle",
        warning: "mdi-alert",
    };
    return icon[type];
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}.VSnackbar;
    ({}.VSnackbar);
    ({}.VSnackbar);
    __VLS_components.VSnackbar;
    __VLS_components.vSnackbar;
    __VLS_components.VSnackbar;
    __VLS_components.vSnackbar;
    // @ts-ignore
    [VSnackbar, VSnackbar,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.snackbarStore.isShow)), timeout: ("2000"), color: ((__VLS_ctx.snackbarStore.type)), ...{ class: ("elevation-10") }, location: ("top"), multiLine: (true), }));
    const __VLS_2 = __VLS_1({ modelValue: ((__VLS_ctx.snackbarStore.isShow)), timeout: ("2000"), color: ((__VLS_ctx.snackbarStore.type)), ...{ class: ("elevation-10") }, location: ("top"), multiLine: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ modelValue: ((__VLS_ctx.snackbarStore.isShow)), timeout: ("2000"), color: ((__VLS_ctx.snackbarStore.type)), ...{ class: ("elevation-10") }, location: ("top"), multiLine: (true), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex align-center") }, });
    const __VLS_6 = {}.VIcon;
    ({}.VIcon);
    ({}.VIcon);
    __VLS_components.VIcon;
    __VLS_components.vIcon;
    __VLS_components.VIcon;
    __VLS_components.vIcon;
    // @ts-ignore
    [VIcon, VIcon,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("mr-2") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("mr-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("mr-2") }, }));
    (__VLS_ctx.getIcon(__VLS_ctx.snackbarStore.type));
    // @ts-ignore
    [snackbarStore, snackbarStore, snackbarStore, getIcon,];
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.snackbarStore.message);
    // @ts-ignore
    [snackbarStore,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).actions;
        const __VLS_12 = {}.VBtn;
        ({}.VBtn);
        ({}.VBtn);
        __VLS_components.VBtn;
        __VLS_components.vBtn;
        __VLS_components.VBtn;
        __VLS_components.vBtn;
        // @ts-ignore
        [VBtn, VBtn,];
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onClick': {} }, icon: (true), variant: ("text"), }));
        const __VLS_14 = __VLS_13({ ...{ 'onClick': {} }, icon: (true), variant: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ ...{ 'onClick': {} }, icon: (true), variant: ("text"), }));
        let __VLS_18;
        const __VLS_19 = {
            onClick: (...[$event]) => {
                __VLS_ctx.snackbarStore.isShow = false;
                // @ts-ignore
                [snackbarStore,];
            }
        };
        const __VLS_20 = {}.VIcon;
        ({}.VIcon);
        ({}.VIcon);
        __VLS_components.VIcon;
        __VLS_components.vIcon;
        __VLS_components.VIcon;
        __VLS_components.vIcon;
        // @ts-ignore
        [VIcon, VIcon,];
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({}));
        const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({}));
        (__VLS_25.slots).default;
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
        (__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        let __VLS_15;
        let __VLS_16;
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['elevation-10'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-center'];
        __VLS_styleScopedClasses['mr-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                snackbarStore: snackbarStore,
                getIcon: getIcon,
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
