const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/usuarios.json');

function readData() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

exports.getAll = (req, res) => {
  const usuarios = readData();
  res.json(usuarios);
};

exports.create = (req, res) => {
  const usuarios = readData();
  const nuevo = { id: Date.now(), ...req.body };
  usuarios.push(nuevo);
  writeData(usuarios);
  res.status(201).json(nuevo);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const usuarios = readData();
  const index = usuarios.findIndex(p => p.id == id);
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });
  usuarios[index] = { ...usuarios[index], ...req.body };
  writeData(usuarios);
  res.json(usuarios[index]);
};

exports.remove = (req, res) => {
  const { id } = req.params;
  let usuarios = readData();
  usuarios = usuarios.filter(p => p.id != id);
  writeData(usuarios);
  res.json({ msg: 'Eliminado' });
};
