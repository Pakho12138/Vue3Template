import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';
import type { App } from 'vue';

const store = createPinia();
store.use(piniaPluginPersist);

export const setupStore = (app: App<Element>) => {
  app.use(store);
};

export default store;
