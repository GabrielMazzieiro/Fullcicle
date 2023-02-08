const mysql = require('mysql')

const start_db = (config) => {

    const connection = mysql.createConnection(config)

    connection.connect((err) => {
        if (err) {
            console.error('Erro ao conectar: ' + err.stack);
            return;
        }
        console.log('Conectado com o ID ' + connection.threadId);
    
        // Criação da tabela
        const createTableSql = `CREATE TABLE IF NOT EXISTS people (
            id INT AUTO_INCREMENT PRIMARY KEY, 
            name VARCHAR(255))`;
        
        connection.query(createTableSql, (err, result) => {
            if (err) {
            console.error('Erro ao criar a tabela: ' + err.stack);
            return;
            }
            console.log('Tabela criada com sucesso');
        });
            // Inserção de dados
        const insertDataSql = `INSERT INTO people(name) values('Gabriel')`;
        
        connection.query(insertDataSql, (err, result) => {
            if (err) {
                console.error('Erro ao inserir dados: ' + err.stack);
                return;
            }
            console.log('Dados inseridos com sucesso');
        });

    });
};


const insert_data = (connection) => {

    const insertDataSql = `INSERT INTO people(name) values('Gabriel')`;
        
    connection.query(insertDataSql, (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados: ' + err.stack);
            return;
        }
        console.log('Dados inseridos com sucesso');
    });

}

module.exports = start_db, insert_data;
