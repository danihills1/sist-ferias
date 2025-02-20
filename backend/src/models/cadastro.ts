import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface CadastroAttributes {
  matricula: number;
  senha: string;
  nome: string;
  email: string;
  id_gerencia: number;
  cpf: string;
  id_tipo_user: number;
  data_criacao: Date;
}

export type CadastroCreationAttributes = Optional<CadastroAttributes, 'matricula'>;

class Cadastro extends Model<CadastroAttributes, CadastroCreationAttributes>
  implements CadastroAttributes { 
  public matricula!: number;
  public senha!: string;
  public nome!: string;
  public email!: string;
  public id_gerencia!: number;
  public cpf!: string;
  public id_tipo_user!: number;
  public data_criacao!: Date;
}

Cadastro.init(
  {
    matricula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    id_gerencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    id_tipo_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data_criacao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'cadastro',
    schema: 'sist_ferias',
    timestamps: false,
  }
);


export default Cadastro;
