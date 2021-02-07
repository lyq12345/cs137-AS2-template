/*
 * @Description: 
 * @Version: 2.0
 * @Autor: gfge
 * @Date: 2020-09-14 10:29:30
 * @LastEditors: lisipeng
 * @LastEditTime: 2020-11-30 10:53:16
 */
function getConfig(name: String) {
  const currentEnvTitle = name === 'prod' ? 'production' : name
  let envConfig = {
    REACT_APP_TITLE: currentEnvTitle,
    REACT_APP_BASIC_API:'/cs122b-fe-temp-api/',
  }
   
  envConfig.USE_LOCAL_PREMISSION = true
  
  // 自定义配置
  const customEnvConfig = {
    dev: {},
    test: {
      // TODO: 测试环境新建应用获取
      REACT_APP_SENTRY_PROJECTID: '10000000',
      REACT_APP_SENTRY_PUBLIC_KEY: '10000000',
    },
    uat: {
      // TODO: 生产环境新建应用获取
      REACT_APP_SENTRY_PROJECTID: '20000000',
      REACT_APP_SENTRY_PUBLIC_KEY: '20000000',
    },
    prod: {
      // TODO: 生产环境新建应用获取
      REACT_APP_SENTRY_PROJECTID: '20000000',
      REACT_APP_SENTRY_PUBLIC_KEY: '20000000',
    },
  }
  return { ...envConfig, ...customEnvConfig[name] }
}
export default getConfig;
