const express = require('express')
const app = express()
const port = 5000
const start_db = require('./manage_db')
const mysql = require('mysql')


const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
};

start_db(config)

app.get('/', (req, res) => {

    start_db(config)

    const connection = mysql.createConnection(config)

    connection.connect((err) => {
        if (err) {
            console.error('Erro ao conectar: ' + err.stack);
            return;
        }

        connection.query('SELECT * FROM people', (err, result) => {
            if (err) console.log(err);    

            let retorno = []
            for (let nome of result) {
                retorno.push(`<li> ${nome.name} </li>`)
            }

            res.send(
                `
                <h1>Full Cycle Rocks!</h1>
                    <ul>
                        ${retorno}
                    </ul>

                `
            )
        
        });
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta '+port)
})