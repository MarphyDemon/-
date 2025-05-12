# csrf

跨域请求伪造。攻击者通过恶意链接，引导用户点击发送，游览器自动会携带 cookie 访问被攻击服务器，从而导致用户非本意的行为，例如转账。

如何避免：
用户登录时，返回唯一的 token，后续请求时，携带 token。
服务端校验 token 是否有效。
referer 是否正确（referer 会被伪造）。
根据 sameSite 属性校验。如果为严格模式，则必须为同一网站下才会携带 cookie。如果为宽松模式，会判断是否从其他网站链接过来的 get 请求会携带 cookie，通过脚本发起的 get 请求不会携带 cookie。post 请求不会携带 cookie。
校验通过则返回，反之拦截。

token 如何存储？
1）调用登录接口，服务端返回 token，并将其存在 cookie 中，设置 httpOnly 和 secure 属性，下次请求可携带 cookie。
2）在调用登录后，前端可以将 token 存储在 storage 中，可以在全局请求中封装，将 token 带入请求数据中。
