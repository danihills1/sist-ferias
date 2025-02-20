import Cadastro from '../models/cadastro';

export const getAllCadastros = async () => {
  return await Cadastro.findAll();
};

export const createCadastro = async (data: Cadastro) => {
  return await Cadastro.create(data);
};
export const getCadastroById = async (matricula: number) => {
  return await Cadastro.findByPk(matricula);
};

export const updateCadastro = async (matricula: number, data: Partial<Cadastro>) => {
  await Cadastro.update(data, { where: { matricula } });
  return await getCadastroById(matricula);
};

export const deleteCadastro = async (matricula: number) => {
  return await Cadastro.destroy({ where: { matricula } });
};
