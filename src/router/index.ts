/*
 * @Author: lyq
 * @Date: 2021-01-26 16:33:21
 * @LastEditTime: 2021-02-07 14:45:50
 * @LastEditors: lyq
 * @Description:
 * @FilePath: /cs122b-fe-temp/src/router/index.ts
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
          redirect: '/search',
        },
        {
          path: '/welcome',
          name: '欢迎',
          icon: 'smile',
          component: './Welcome',
        },
        // example routers
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
