/* __placeholder__ */
import { computed, onBeforeUnmount, ref } from "vue";
import dayjs from "dayjs";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const props = defineProps({
        // Card content to display
        needWeekDay: {
            type: Boolean,
            default: () => true,
        },
    });
    // const store = useStore();
    const weekNames = {
        "en-US": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        "zh-CN": [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期日",
        ],
    };
    const time = ref(dayjs().format("YYYY/MM/DD HH:mm:ss"));
    const text = computed(() => {
        //   const lang: 'en-US' | 'zh-CN' = store.state.lang;
        const lang = "en-US";
        const weekday = dayjs().day();
        return (`${time.value}` +
            (props.needWeekDay
                ? ` ${weekNames[lang][weekday > 0 ? weekday - 1 : 6]}`
                : ``));
    });
    const timerId = setInterval(() => {
        time.value = dayjs().format("YYYY/MM/DD HH:mm:ss");
    }, 1_000);
    onBeforeUnmount(() => {
        clearInterval(timerId);
    });
    const __VLS_fnComponent = (await import('vue')).defineComponent({
        props: {
            // Card content to display
            needWeekDay: {
                type: Boolean,
                default: () => true,
            },
        },
    });
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (__VLS_ctx.text);
        // @ts-ignore
        [text,];
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {};
        const __VLS_name = "TimeNow";
        const __VLS_internalComponent = (await import('vue')).defineComponent({
            setup() {
                return {
                    text: text,
                };
            },
            props: {
                // Card content to display
                needWeekDay: {
                    type: Boolean,
                    default: () => true,
                },
            },
            name: "TimeNow",
        });
    }
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {
            // Card content to display
            needWeekDay: {
                type: Boolean,
                default: () => true,
            },
        },
        name: "TimeNow",
    });
})();
;
