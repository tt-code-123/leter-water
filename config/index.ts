const accountInfo = uni.getAccountInfoSync();
export const envVersion = accountInfo.miniProgram.envVersion;

// 正式
let config = {
  /** 接口请求地址 */
  requestURL: '',
};
// 开发
if (envVersion === 'develop') {
  config = {
    requestURL: '',
  };
}
// 体验
if (envVersion === 'trial') {
  config = {
    /** 接口请求地址 */
    requestURL: '',
  };
}
console.log(envVersion, '====配置');
export const envConfig = config;
