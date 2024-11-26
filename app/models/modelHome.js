module.exports = {
    getProfissionais: (dbConnection, callback) => {
        const sql = 'SELECT * FROM profissionais;';
        dbConnection.query(sql, callback);
    },

    getClientes: (dbConnection, callback) => {
        const sql = 'SELECT * FROM clientes;';
        dbConnection.query(sql, callback);
    },

    Agendar: (dbConnection, agendamento, callback) => {
        // Pega a data e hora atuais
        const dataHora = new Date().toISOString().slice(0, 19).replace('T', ' '); // Formato: 'YYYY-MM-DD HH:MM:SS'

        const sql = `INSERT INTO servicos (tipo, datahora, idcliente, idprofissional) 
                     VALUES (${agendamento.tipo}, '${dataHora}', ${agendamento.idCliente}, ${agendamento.idProfissional});`;
        
        dbConnection.query(sql, callback);
    }
}
