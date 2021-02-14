/*
 * @Author: lyq
 * @Date: 2021-01-26 16:33:21
 * @LastEditTime: 2021-02-07 14:45:50
 * @LastEditors: lyq
 * @Description:
 * @FilePath: /cs122b-fe-temp/src/router/index.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
const { router: demoRouter } = require('./demo-router');

module.exports = {
  routes: [
    {
      path: '/',
      component: '../layouts/CommonLayout',
      routes: [
        {
          path: '/',
          redirect: '/login',
        },
        {
          path: '/welcome',
          name: '欢迎',
          icon: 'smile',
          component: './Welcome',
        },
        // 示例路由
        ...demoRouter,
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
};
