// 同源协议 协议、地址、端口不同都会引起跨域

// 跨域的解决方案
// 1 jsonp 利用src属性不受跨域限制实现跨域
// 2 后台设置across-control-allow-origin：*实现跨域
// 3 nginx反向代理 a.com请求b.com  a.com请求接口，接口去请求b.com然后返回内容
// 4 postMessage 入参为url及传递的信息即可实现跨域，不需要后台接入，移动端兼容性好
// 5 window.name 同一个window窗口下，刷新也不会改变window.name属性，可用来实现跨域
