// server.ts
import express from 'express';
import cors from 'cors';
import cadastroRoutes from './routes/cadastroRoutes';

const app = express();

// Configuração para aceitar requisições do frontend
app.use(cors());
app.use(express.json());

// Roteamento
app.use('/api/cadastros', cadastroRoutes);

// Iniciar o servidor
app.listen(3001, () => {
  console.log('Backend rodando na porta 3001');
});
