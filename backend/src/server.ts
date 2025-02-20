import express from 'express';
import cadastroRoutes from './routes/cadastroRoutes';

const app = express();
app.use(express.json());

// Uso correto do router
app.use('/cadastros', cadastroRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3001');
});
