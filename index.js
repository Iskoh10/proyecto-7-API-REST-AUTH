require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const usersRouter = require('./src/api/routes/users');
const projectsRouter = require('./src/api/routes/projects');
const organismsRouter = require('./src/api/routes/organisms');

const app = express();

app.use(express.json());
connectDB();

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/projects', projectsRouter);
app.use('/api/v1/organisms', organismsRouter);

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found');
});

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000');
});
