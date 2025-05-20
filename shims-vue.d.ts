declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  interface ComponentCustomOptions {
    onLoad?: (options?: any) => void;
    onShow?: () => void;
    onReady?: () => void;
    // 添加其他 UniApp 生命周期钩子...
  }
  export default component;
}

declare module '@/uni_modules/uview-plus' {
  import { PluginObject } from 'vue';
  const uviewPlus: PluginObject<any>;
  export default uviewPlus;
}

// 声明图片、字体等静态资源类型
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.webp";
