/**
 * base    : 基础业务API
 * app   : 买家API
 */
// 开发环境
const test = {
  common: "https://common-api.pickmall.cn",
  app: "http://127.0.0.1:8091",

};
// 开发环境
const dev = {
  common: "https://common-api.pickmall.cn",
  app: "http://101.43.137.78:8091",

};
// 生产环境
const prod = {
  common: "https://common-api.pickmall.cn",
  app: "https://ruhamaster.cn",
};

//默认生产环境
let api = dev;
//如果是开发环境
if (process.env.NODE_ENV == "development") {
  api = test;
} else {
  api = test;
}
console.log("----------------------------",process.env.NODE_ENV)
console.log("----------------------------",api)

//微信小程序，app的打包方式建议为生产环境，所以这块直接条件编译赋值
// #ifdef MP-WEIXIN || APP-PLUS
api = test;
// #endif

// api.app += "/ruhamaster";
api.app += "/ruhacoffee";
api.common += "/common";
export default {
  ...api,
};
