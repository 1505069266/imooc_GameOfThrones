let Koa = require('koa')

let app = new Koa()

const  asyncIO = () => {
    return new Promise(resolve => setTimeout(resolve, 2000))
}

const mid = () => async (ctx, next) => {
    ctx.body = "mark"
    await next()
    ctx.body = ctx.body += " done"
}

app.use(mid())
app.use(async (ctx, next) => {
    await asyncIO()
    ctx.body += " saved"
    await next()
})

app.listen(3000)