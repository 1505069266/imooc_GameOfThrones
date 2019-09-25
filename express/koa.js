let koa = require('koa')

let app = new koa()

let asyncIO = function(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log(2222);
            this.body += "dddd"
            resolve()
        }, 500)
    })
}

let mid = function(){
    return function *(next){
        this.body = 'mark'
        yield next
        this.body += ' done'
    }
}

app.use(mid())
app.use(function *(next){
    yield asyncIO()

    this.body += "saved"

    yield next
})

app.listen(3001)