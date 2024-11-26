const dbConnection = require('../../config/dbConnection');

module.exports = {
  getAllData: (req, res) => {
    const dbConn = dbConnection(); // Conexão com o banco

    // Consultas SQL para buscar dados de todas as tabelas
    const queries = {
      servicos: 'SELECT * FROM servicos;',
      especialidades: 'SELECT * FROM especialidades;',
      tipos_servico: 'SELECT * FROM tipos_servico;',
      avaliacoes: 'SELECT * FROM avaliacoes;',
      clientes: 'SELECT * FROM clientes;',
      profissionais: 'SELECT * FROM profissionais;',
      administradores: 'SELECT * FROM administradores;'
    };

    // Função para executar todas as consultas de forma assíncrona
    const executeQueries = async () => {
      const results = {};

      for (const [key, query] of Object.entries(queries)) {
        try {
          const [rows] = await dbConn.promise().query(query); // Usa a API promise do MySQL
          results[key] = rows;
        } catch (error) {
          results[key] = { error: `Erro ao buscar dados da tabela ${key}` };
        }
      }

      return results;
    };

    // Executa as consultas e retorna a resposta
    executeQueries()
      .then((data) => {
        res.status(200).json(data); // Retorna os dados em formato JSON
      })
      .catch((error) => {
        res.status(500).json({ error: 'Erro ao buscar os dados' });
      });
  }
};
