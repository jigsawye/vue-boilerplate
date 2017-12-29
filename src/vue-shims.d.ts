declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}

declare module 'element-ui/lib/locale' {
    export function use(locale: string): void;
}

declare module 'element-ui/lib/locale/lang/zh-TW' {
    const locale: string;
    export default locale;
}

declare module "*.json" {
    const value: any;
    export default value;
}
