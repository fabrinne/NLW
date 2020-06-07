const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db")
//pasta publica estatica

server.use(express.static("public"))

/// habilitar o uso do req.body na aplicação
server.use(express.urlencoded({extended: true}))

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

server.post("/savepoint",(req, res)=>{

    //inserindo dados na tabela

     //inserir dados na tabela
   
     const query = `INSERT INTO places (
        image,
        name,
        address,
        address2, 
        state,
        city, 
        items 
    ) VALUES (?,?,?,?,?,?,?);
    `
         
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items

    ]
    function afterInsertData(err){
        if(err){
            return res.render("create-point.html",{ saved: false})
        }



        return res.render("create-point.html", { saved: true})
    }  
    
    db.run(query, values, afterInsertData)
    
})

server.get("/search" , (req , res) =>{

        const search = req.query.search
 
        if(search == ""){
            return res.render("search-result.html")

        }
        
        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%';`,function(err, rows){
            if(err){
                return console.log(err)
            }
            const total = rows.length
            return res.render("search-result.html" , {places: rows , total})
        })
         


    
})


//on
server.listen(3000)