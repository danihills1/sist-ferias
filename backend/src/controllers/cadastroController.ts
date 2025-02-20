import { Request, Response } from 'express';
import * as cadastroService from '../services/cadastroService';
import Cadastro from '../models/cadastro';

export const login = async (req: Request, res: Response) => {
  const { matricula, senha } = req.body;
  try {
    const user = await Cadastro.findOne({
      where: { matricula, senha }
    });
    if (!user) {
      return res.status(401).json({ message: 'Matrícula ou senha incorretos' });
    }

        // Sucesso no login
        return res.status(200).json({ message: 'Login bem-sucedido', user });
      } catch (error) {
        return res.status(500).json({ message: 'Erro ao processar a solicitação' });
      }
    };

export const getAll = async (req: Request, res: Response) => {
  const cadastros = await cadastroService.getAllCadastros();
  res.json(cadastros);
};

export const create = async (req: Request, res: Response) => {
  const novoCadastro = await cadastroService.createCadastro(req.body);
  res.status(201).json(novoCadastro);
};

export const getById = async (req: Request, res: Response) => {
  const cadastro = await cadastroService.getCadastroById(Number(req.params.id));
  cadastro ? res.json(cadastro) : res.status(404).json({ message: 'Cadastro não encontrado' });
};

export const update = async (req: Request, res: Response) => {
  const cadastroAtualizado = await cadastroService.updateCadastro(Number(req.params.id), req.body);
  res.json(cadastroAtualizado);
};

export const remove = async (req: Request, res: Response) => {
  await cadastroService.deleteCadastro(Number(req.params.id));
  res.status(204).send();
};
