const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/productos.json');

function readData() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

exports.getAll = (req, res) => {
  const productos = readData();
  res.json(productos);
};

exports.create = (req, res) => {
  const productos = readData();
  const nuevo = { id: Date.now(), ...req.body };
  productos.push(nuevo);
  writeData(productos);
  res.status(201).json(nuevo);
};

exports.update = (req, res) => {
  const { id } = req.params;
  const productos = readData();
  const index = productos.findIndex(p => p.id == id);
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });
  productos[index] = { ...productos[index], ...req.body };
  writeData(productos);
  res.json(productos[index]);
};

exports.remove = (req, res) => {
  const { id } = req.params;
  let productos = readData();
  productos = productos.filter(p => p.id != id);
  writeData(productos);
  res.json({ msg: 'Eliminado' });
};
