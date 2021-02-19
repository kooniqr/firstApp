

const express = require('express');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

const app = express();
const port = 3000;

class Cliente extends Model {}

Cliente.init({
  nombre:{
    type: DataTypes.STRING,
    allowNull:false
  },
  apellido:{
    type: DataTypes.STRING,
    allowNull:true
   }  
},{
  sequelize,
  modelName:'Cliente'
});




app.get('/', (req, res) => {
  return res.send('Hello.');
});

  app.get('/user', (req, res) => {
    return res.send('Información del usuario.');
  });
 
  app.get('/chat', (req, res) => {
    return res.send('Despliegue del chat');
  });
 
  app.get('/post', (req, res) => {
    return res.send('Despliegue de la publicación');
  });
 
  app.get('/friend', (req, res) => {
    return res.send('Información del amigo');
  });
 
  app.get('/comment', (req, res) => {
    return res.send('Despliegue del comentario');
  });
 
  app.post('/post', (req, res) => {
    return res.send('Post publicado');
  });
 
  app.post('/comment', (req, res) => {
    return res.send('Comentario publicado');
  });
 
  app.post('/friend', (req, res) => {
    return res.send('Amigo agregado');
  });

  app.post('/user', (req, res) => {
    return res.send('Usuario creado');
  });

  app.delete('/post', (req, res) => {
    return res.send('Post eliminado');
  });

  app.delete('/comment', (req, res) => {
    return res.send('Comentario eliminado');
  });

  app.delete('/friend', (req, res) => {
    return res.send('Amigo eliminado');
  });

  app.delete('/user', (req, res) => {
    return res.send('Usuario eliminado');
  });

  app.delete('/chat', (req, res) => {
    return res.send('Chat eliminado');
  });

app.listen(port,() => {
    console.log(`Example app at http://localhost:${port}`)
})
