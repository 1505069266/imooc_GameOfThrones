let express = require('express')

let app = express()

let asyncIO = function(cd){
    setTimeout(function(){
        cd()
    }, 500)
}

let mid = function(req, res, next){
    req.body = "mark"

    next()


}

app.use(mid)

app.use(function(req, res, next){


    asyncIO(function(){
        req.body += "saved"
        next()
        res.send(req.body + ' done')
    })

})

app.listen(3000)