const express = require('express');
const cors = require('cors');
const app = express();

const productosRoutes = require('./routes/productosRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

app.use(cors());
app.use(express.json());

// Rutas
app.use('/productos', productosRoutes); 
app.use('/usuarios', usuariosRoutes);

//servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});