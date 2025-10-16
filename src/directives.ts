import { App } from 'vue';

const myDirectives: any = {
  // 登录检查
  // needLogin: {
  //   mounted(el: any) {
  //   },
  // },
};

export const install = (app: App) => {
  for (let dirctiveName in myDirectives) {
    app.directive(dirctiveName, myDirectives[dirctiveName]);
  }
};
