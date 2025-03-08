import express from 'express';



const app = express();

app.route('/').get((req, res) => {
  res.send('Rota da página inicial chamada!');
});

export default app;
