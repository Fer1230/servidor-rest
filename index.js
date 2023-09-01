const express = require('express');
const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Datos simulados (en lugar de una base de datos real)
const recursos = [
  { id: 1, nombre: 'Eduardo ' },
  { id: 2, nombre: 'David ' },
  { id: 3, nombre: 'Luis ' },
  { id: 4, nombre: 'Lurdes ' },
  { id: 5, nombre: 'Reyna ' },
  { id: 6, nombre: 'Teresa ' },
  { id: 7, nombre: 'Ines ' },
  { id: 8, nombre: 'Efren ' },
  { id: 9, nombre: 'Leonor ' },

];

// Endpoint para obtener todos los recursos
app.get('/api/recursos', (req, res) => {
  res.json(recursos);
});

// Endpoint para obtener un recurso por ID
app.get('/api/recursos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const recurso = recursos.find(r => r.id === id);

  if (!recurso) {
    res.status(404).json({ mensaje: 'Recurso no encontrado' });
  } else {
    res.json(recurso);
  }
});

// Endpoint para crear un nuevo recurso
app.post('/api/recursos', (req, res) => {
  const nuevoRecurso = req.body;
  recursos.push(nuevoRecurso);
  res.status(201).json(nuevoRecurso);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor REST escuchando en http://localhost:${port}`);
});
