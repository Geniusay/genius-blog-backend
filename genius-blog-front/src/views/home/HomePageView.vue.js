/* __placeholder__ */
import { gsap } from "gsap";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
onMounted(() => {
    gsap.set(".img", { y: 500 });
    gsap.set(".loader-imgs", { x: 500 });
    gsap.set(".nav-item", { y: 25, opacity: 0 });
    gsap.set("h1, .item, footer", { y: 200 });
    const tl = gsap.timeline({ delay: 1 });
    tl.to(".img", {
        y: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "power3.inOut",
    })
        .to(".loader-imgs", {
        x: 0,
        duration: 3,
        ease: "power3.inOut",
    }, "-=2.5")
        .to(".img:not(#loader-logo)", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
    }, "-=1")
        .to(".loader", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.inOut",
    }, "-=0.5")
        .to(".nav-item, h1, footer, .item", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.inOut",
    }, "-=0.5");
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("loader") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("loader-imgs") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/img1.jpg"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/img2.jpg"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/img3.jpg"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img") }, id: ("loader-logo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/logo2.png"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/img4.jpg"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/img5.jpg"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/img6.jpg"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("website-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("nav-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("nav-item") }, id: ("logo"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("nav-item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hero") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/img7.jpg"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/img8.jpg"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/img9.jpg"), alt: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("item") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("@/assets/images/img10.jpg"), alt: (""), });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['loader'];
        __VLS_styleScopedClasses['loader-imgs'];
        __VLS_styleScopedClasses['img'];
        __VLS_styleScopedClasses['img'];
        __VLS_styleScopedClasses['img'];
        __VLS_styleScopedClasses['img'];
        __VLS_styleScopedClasses['img'];
        __VLS_styleScopedClasses['img'];
        __VLS_styleScopedClasses['img'];
        __VLS_styleScopedClasses['website-content'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['nav-item'];
        __VLS_styleScopedClasses['hero'];
        __VLS_styleScopedClasses['h1'];
        __VLS_styleScopedClasses['h1'];
        __VLS_styleScopedClasses['h1'];
        __VLS_styleScopedClasses['item'];
        __VLS_styleScopedClasses['item'];
        __VLS_styleScopedClasses['item'];
        __VLS_styleScopedClasses['item'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {};
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
