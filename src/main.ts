import './assets/main.css';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import locale from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import router from './router';
import { setupStore } from './stores';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import App from './App.vue';
import * as useDirective from './directives';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 去掉Vue warn警告
app.config.warnHandler = () => null;
setupStore(app);
app.use(router);
app.use(ElementPlus, { locale });
app.use(useDirective);

router.isReady().then(() => {
  app.mount('#app');
});
