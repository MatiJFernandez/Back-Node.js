# Back-Node.js - API REST para Sistema de Gestión

Este proyecto es una API REST desarrollada con Node.js y Express que proporciona los endpoints necesarios para el sistema de gestión de usuarios y productos. Está construida con tecnologías modernas y sigue las mejores prácticas de desarrollo.

## 🚀 Características

- API RESTful para gestión de usuarios y productos
- Almacenamiento de datos en archivos JSON
- Manejo de archivos con sistema de archivos nativo de Node.js
- CORS configurado para desarrollo local
- Estructura modular y organizada

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18.0.0 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- Un editor de código (recomendamos [Visual Studio Code](https://code.visualstudio.com/))
- Git para el control de versiones

## 🔧 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MatiJFernandez/Back-NodeJS.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd Back-NodeJS
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## 🚀 Ejecución del Proyecto

1. Para iniciar el servidor:
   ```bash
   npm start
   ```
   La API estará disponible en `http://localhost:3000`

## 🛠️ Tecnologías Utilizadas

- [Node.js](https://nodejs.org/) - Entorno de ejecución JavaScript
- [Express](https://expressjs.com/) - Framework web para Node.js
- [Cors](https://www.npmjs.com/package/cors) - Middleware para CORS
- Sistema de archivos nativo de Node.js - Para almacenamiento de datos

## 📁 Estructura del Proyecto

```
Back-NodeJS/
├── src/
│   ├── controllers/    # Controladores de la API
│   ├── routes/         # Rutas de la API
│   ├── data/          # Archivos JSON de datos
│   │   ├── usuarios.json
│   │   └── productos.json
│   └── app.js         # Aplicación Express
├── .gitignore         # Archivos ignorados por git
├── package.json       # Dependencias y scripts
└── README.md          # Este archivo
```

## 🔍 Endpoints Disponibles

### Usuarios
- `GET /usuarios` - Obtener todos los usuarios
- `POST /usuarios` - Crear usuario
- `DELETE /usuarios/:id` - Eliminar usuario

### Productos
- `GET /productos` - Obtener todos los productos
- `POST /productos` - Crear producto
- `DELETE /productos/:id` - Eliminar producto

## 📝 Notas Importantes

- La API está configurada para aceptar peticiones desde `http://localhost:5173` (frontend)
- Los datos se almacenan en archivos JSON dentro del directorio `data/`
- Cada entidad (usuarios y productos) tiene su propio archivo JSON
- Los IDs se generan automáticamente usando timestamps

## ✨ Autor

- Matías Fernández - [GitHub](https://github.com/MatiJFernandez)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.