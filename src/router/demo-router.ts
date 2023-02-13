/*
 * @Author: lyq
 * @Date: 2021-01-26 16:33:21
 * @LastEditTime: 2021-02-07 16:34:30
 * @LastEditors: lyq
 * @Description:
 * @FilePath: /cs122b-fe-temp/src/router/demo-router.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */

module.exports = {
  router: [
    {
      path: '/login',
      name: 'login page',
      component: './Login',
    },
    {
      path: '/register',
      name: 'registration page',
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
    {
      path: '/detail/:productId',
      name: '电影详情',
      component: './ProductDetail',
    },
    {
      path: '/cart',
      name: '购物车',
      component: './Cart',
    },
    {
      path: '/order',
      name: '订单历史',
      component: './MyOrder',
    },
  ],
};
