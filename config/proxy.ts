/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    // 当前应用
    '/cs122b-fe-temp-api': {
      target: 'http://localhost:12345/api/movies/',
      changeOrigin: true,
      pathRewrite: { '^/cs122b-fe-temp-api': '' },
    },
    // idm
    '/idm': {
      target: 'http://localhost:2954/api/idm/',
      changeOrigin: true,
      pathRewrite: { '^/idm': '' },
    },
    
  },
  test: {
    '/cs122b-fe-temp-api': {
      target: 'http://localhost:12345/api/movies/',
      changeOrigin: true,
      pathRewrite: { '^/cs122b-fe-temp-api': '' },
    },
    // idm
    '/idm': {
      target: 'http://localhost:2954/api/idm/',
      changeOrigin: true,
      pathRewrite: { '^/idm': '' },
    },
    
    
  },
};
