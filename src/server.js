const express = require("express")
const server = express()

//pasta publica estatica

server.use(express.static("public"))

// usando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views" , {
    express: server,
    noCache: true 
})
//routes
server.get("/" , (req, res)=>{
    return res.render("index.html" , {
        title: "Seu marketingplace de coleta de resíduos"
    })
})
server.get("/create-point" , (req , res) =>{
    return res.render("create-point.html")
})
server.get("/search" , (req , res) =>{
    return res.render("search-result.html")
})


//on
server.listen(3000)