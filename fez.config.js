/* ==================================
 * @ 2017 FEZ 前端模块工程自动化构建工具
 * https://github.com/furic-zhao/fez
 * ================================== */

export default {
  webpack: {
    config: {
      externals: {
        jquery: 'jQuery',
        q: 'Q'
      }
    }
  },
  useInject: {
    vendor: {
      js: [{
        target: "a-vendor-jquery-bootstrap.js",
        contain: ["**/jquery.js", "**/bootstrap.js"]
      }],
      css: [{
        target: "vendor-bootstrap-fontawesome.css",
        contain: ["**/bootstrap.css", "**/font-awesome.css"]
      }]
    }
  },
  svgSymbol: {
    available: true,
    autoInject: true
  }
}
