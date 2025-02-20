import { Sequelize } from 'sequelize';

// Instância do Sequelize
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: '192.168.4.102',
  username: 'postgres',
  password: '123456',
  database: 'db_adm_serec',
  schema: 'sist_ferias',
  logging: false,  // Desative o log para facilitar a leitura dos logs
});

export default sequelize;
