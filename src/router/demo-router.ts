/*
 * @Author: lyq
 * @Date: 2021-01-26 16:33:21
 * @LastEditTime: 2021-02-07 16:34:30
 * @LastEditors: lyq
 * @Description:
 * @FilePath: /cs122b-fe-temp/src/router/demo-router.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
/**
 * TODO: 仅示例使用 建议删除或重命名
 */
module.exports = {
  router: [
    {
      path: '/login',
      name: '登录页',
      component: './Login',
    },
    {
      path: '/register',
      name: '注册页',
      component: './Register',
    },
    {
      path: '/home',
      name: '主页',
      component: './Home',
    },
    {
      path: '/search',
      name: '搜索页',
      component: './Search',
    },
  ],
};
