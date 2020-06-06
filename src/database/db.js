// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()
// iniciando o objeto que irá manipular o banco de dados
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db
// utilizar o objeto de banco de dados para nossas operações
/*db.serialize(()=>{
    // construir tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (

            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            city TEXT,
            items TEXT
        );
    `)
    //inserir dados na tabela
    const query = `INSERT INTO places (
        image,
        name,
        address,
        address2, 
        city, 
        items 
    ) VALUES (?,?,?,?,?,?);`

    const values = [`
        "http://www.jnreciclagem.com.br/images/reciclagem.jpg",
        "papersider",
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Catarina",
        "Rio do sul".
        "Papéis e Papelão"

    `]
    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("cadastrado com sucesso")
        console.log(this)   
    }
    //db.run(query, values, afterInsertData)
        
    //consultar dados na tabela

    //deletar um dado da tabela
})*/