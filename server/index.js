const Koa = require('koa')
// 引入koa-router 并实例化(省略new写法)
const router = require('koa-router')()
const app = new Koa()
const TeslaData = require('./Data/teslaData/TeslaData.json')
const cors = require('koa2-cors')

app.use(
    // 允许跨域
    cors({
        origin: function (ctx) { //设置允许来自指定域名请求
            // if (ctx.url === '/test') {
            return '*'; // 允许来自所有域名请求
            // }
            // return 'http://localhost:3000'; //只允许http://localhost:8080这个域名的请求
        },
        maxAge: 5, //指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
)

router.get('/tesla', async (ctx) => {
    ctx.response.body = {
        success: true,
        data: TeslaData
    }
})

app
    .use(router.routes())// 启动路由
    .use(router.allowedMethods())// 可以配置路由

app.listen(9000, () => {
    console.log('server is running 9000');
})