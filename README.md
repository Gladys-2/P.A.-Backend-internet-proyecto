# Albergue Huellitas - Backend
Este repositorio contiene la parte backend del proyecto Albergue Huellitas, que se encarga de la lógica, base de datos y servicios de la aplicación web para gestión de un albergue de mascotas.

La API permite:

1. Gestionar usuarios con roles diferenciados (administrador y usuario).
2. Gestionar animales disponibles para adopción.
3. Registrar y hacer seguimiento de adopciones y voluntarios.
4. Gestionar donaciones.
5. Gestionar refugios.
6. Proteger rutas mediante autenticación JWT.

# Tecnologías utilizadas

-Node.js v18 o superior
-TypeScript
-Express.js
-PostgreSQL
-TypeORM
-JWT (JSON Web Token)
-bcrypt para cifrado de contraseñas
-dotenv para variables de entorno
-cors para permitir conexiones desde el frontend

# Estructura de backend
backend
├── 📁 src
│   ├── 📁 @types   ← Tipos personalizados para Express
│   │   └── 📁 express
│   │       └── 📄 index.d.ts
│   ├── 📁 config   ← Configuración de base de datos, JWT
│   │   ├── 📄 basedatos.ts
│   │   ├── 📄 config.ts
│   │   └── 📄 jwt.ts
│   ├── 📁 core     ← Middleware, interceptores, utilidades
│   │   ├── 📁 entidades
│   │   │   ├── 📄 auditoria.entity.ts
│   │   │   └── 📄 registrarAuditoria.ts
│   │   ├── 📁 interceptores
│   │   │   └── 📄 respuesta.interceptor.ts
│   │   ├── 📁 middleware
│   │   │   ├── 📄 auth.middleware.ts
│   │   │   ├── 📄 logger.middleware.ts
│   │   │   └── 📄 manejadorErrores.middleware.ts
│   │   └── 📁 utilidades
│   │       ├── 📄 encriptarContraseña.ts
│   │       ├── 📄 generarToken.ts
│   │       └── 📄 validarCorreo.ts
│   ├── 📁 modulos   ← Todos los módulos: usuarios, animales, adopciones, etc.
│   │   ├── 📁 adopciones
│   │   │   ├── 📁 DTOS
│   │   │   │   ├── 📁 actualizar
│   │   │   │   │   └── 📄 actualizarAdopcion.dto.ts
│   │   │   │   ├── 📁 crear
│   │   │   │   │   └── 📄 crearAdopcion.dto.ts
│   │   │   │   └── 📁 filtro
│   │   │   │       └── 📄 filtrarAdopcion.dto.ts
│   │   │   ├── 📁 contoladores
│   │   │   │   └── 📄 adopciones.controller.ts
│   │   │   ├── 📁 entidades
│   │   │   │   └── 📄 adopcion.entity.ts
│   │   │   ├── 📁 repositorios
│   │   │   │   └── 📄 adopciones.repository.ts
│   │   │   ├── 📁 rutas
│   │   │   │   └── 📄 adopciones.routes.ts
│   │   │   └── 📁 servicios
│   │   │       └── 📄 adopciones.service.ts
│   │   ├── 📁 animales
│   │   │   ├── 📁 DTOS
│   │   │   │   ├── 📁 actualizar
│   │   │   │   │   └── 📄 actualizarAnimal.dto.ts
│   │   │   │   ├── 📁 crear
│   │   │   │   │   └── 📄 crearAnimal.dto.ts
│   │   │   │   └── 📁 filtro
│   │   │   │       └── 📄 filtrarAnimal.dto.ts
│   │   │   ├── 📁 controladores
│   │   │   │   └── 📄 animales.controller.ts
│   │   │   ├── 📁 entidades
│   │   │   │   └── 📄 animal.entity.ts
│   │   │   ├── 📁 repositorios
│   │   │   │   └── 📄 animales.repository.ts
│   │   │   ├── 📁 rutas
│   │   │   │   └── 📄 animales.routes.ts
│   │   │   └── 📁 servicios
│   │   │       └── 📄 animales.service.ts
│   │   ├── 📁 donaciones
│   │   │   ├── 📁 DTOS
│   │   │   │   ├── 📁 actualizar
│   │   │   │   │   └── 📄 actualizarDonacion.dto.ts
│   │   │   │   ├── 📁 crear
│   │   │   │   │   └── 📄 crearDonacion.dto.ts
│   │   │   │   └── 📁 filtro
│   │   │   │       └── 📄 filtrarDonacion.dto.ts
│   │   │   ├── 📁 controladores
│   │   │   │   └── 📄 donaciones.controller.ts
│   │   │   ├── 📁 entidades
│   │   │   │   └── 📄 donacion.entity.ts
│   │   │   ├── 📁 repositorios
│   │   │   │   └── 📄 donaciones.repository.ts
│   │   │   ├── 📁 rutas
│   │   │   │   └── 📄 donaciones.routes.ts
│   │   │   └── 📁 servicios
│   │   │       └── 📄 donaciones.service.ts
│   │   ├── 📁 refugios
│   │   │   ├── 📁 DTOS
│   │   │   │   ├── 📁 actualizar
│   │   │   │   │   └── 📄 actualizarRefugio.dto.ts
│   │   │   │   ├── 📁 crear
│   │   │   │   │   └── 📄 crearRefugio.dto.ts
│   │   │   │   └── 📁 filtro
│   │   │   │       └── 📄 filtrarRefugio.dto.ts
│   │   │   ├── 📁 controladores
│   │   │   │   └── 📄 refugios.controller.ts
│   │   │   ├── 📁 entidades
│   │   │   │   └── 📄 refugio.entity.ts
│   │   │   ├── 📁 repositorios
│   │   │   │   └── 📄 refugios.repository.ts
│   │   │   ├── 📁 rutas
│   │   │   │   └── 📄 refugios.routes.ts
│   │   │   └── 📁 servicios
│   │   │       └── 📄 refugios.service.ts
│   │   ├── 📁 usuarios
│   │   │   ├── 📁 DTOS
│   │   │   │   ├── 📁 actualizar
│   │   │   │   │   ├── 📄 actualizarRol.dto.ts
│   │   │   │   │   └── 📄 actualizarUsuario.dto.ts
│   │   │   │   ├── 📁 asignar
│   │   │   │   │   └── 📄 asignarUsuarioRol.dto.ts
│   │   │   │   ├── 📁 crear
│   │   │   │   │   ├── 📄 crearRol.dto.ts
│   │   │   │   │   └── 📄 crearUsuario.dto.ts
│   │   │   │   └── 📁 login
│   │   │   │       └── 📄 loginUsuario.dto.ts
│   │   │   ├── 📁 controladores
│   │   │   │   ├── 📄 auth.controller.ts
│   │   │   │   ├── 📄 roles.controller.ts
│   │   │   │   └── 📄 usuarios.controller.ts
│   │   │   ├── 📁 entidades
│   │   │   │   ├── 📄 rol.entity.ts
│   │   │   │   ├── 📄 usuario.entity.ts
│   │   │   │   └── 📄 usuarioRol.entity.ts
│   │   │   ├── 📁 repositorios
│   │   │   │   ├── 📄 rol.repository.ts
│   │   │   │   ├── 📄 usuario.repository.ts
│   │   │   │   └── 📄 usuarioRol.repository.ts
│   │   │   ├── 📁 rutas
│   │   │   │   ├── 📄 auth.routes.ts
│   │   │   │   ├── 📄 test.routes.ts
│   │   │   │   ├── 📄 usuarioRol.routes.ts
│   │   │   │   └── 📄 usuarios.routes.ts
│   │   │   └── 📁 servicios
│   │   │       ├── 📄 auth.service.ts
│   │   │       ├── 📄 roles.service.ts
│   │   │       ├── 📄 usuarioRol.service.ts
│   │   │       └── 📄 usuarios.service.ts
│   │   └── 📁 voluntarios
│   │       ├── 📁 DTOS
│   │       │   ├── 📁 actualizar
│   │       │   │   └── 📄 actualizarVoluntario.dto.ts
│   │       │   ├── 📁 crear
│   │       │   │   └── 📄 crearVoluntario.dto.ts
│   │       │   └── 📁 filtro
│   │       │       └── 📄 filtrarVoluntario.dto.ts
│   │       ├── 📁 controladores
│   │       │   └── 📄 voluntarios.controller.ts
│   │       ├── 📁 entidades
│   │       │   └── 📄 voluntario.entity.ts
│   │       ├── 📁 repositorios
│   │       │   └── 📄 voluntarios.repository.ts
│   │       ├── 📁 rutas
│   │       │   └── 📄 voluntarios.routes.ts
│   │       └── 📁 servicios
│   │           └── 📄 voluntarios.service.ts
│   ├── 📁 seeds            ← Archivos para poblar datos iniciales
│   │   ├── 📄 seedAdopciones.ts
│   │   ├── 📄 seedAnimales.ts
│   │   ├── 📄 seedDonaciones.ts
│   │   ├── 📄 seedRefugios.ts
│   │   ├── 📄 seedRoles.ts
│   │   ├── 📄 seedUsuarioRoles.ts
│   │   ├── 📄 seedUsuarios.ts
│   │   └── 📄 seedVoluntarios.ts
│   └── 📄 main.ts  ← Entrada principal de la API
├── ⚙️ .gitignore   ← Variables de entorno
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── ⚙️ tsconfig.json

# Requisitos previos
1. Node.js v18 o superior:
https://nodejs.org/

2. PostgreSQL:
Crea una base de datos llamada --"alb_huellitas"-- (puedes cambiar el nombre pero también actualizarlo en .env).

3. Verificar instalaciones:

node -v
npm -v
psql --version

# Configuración de variables de entorno

Archivo .env en la raíz del proyecto:

DB_NAME=alb_huellitas
DB_USER=postgres
DB_PASSWORD=POSTGRESQL
DB_HOST=localhost
DB_PORT=5432
PORT=5000
JWT_SECRET=miclave123
VITE_API_URL=http://localhost:5000/api

Cambia DB_PASSWORD y JWT_SECRET por valores seguros según tu entorno.

# Instalación de dependencias
Dentro de la carpeta del proyecto:

npm install

Esto instalará todas las librerías necesarias para que el backend funcione correctamente.

# Ejecución del backend
1. Modo desarrollo (con reinicio automático al cambiar archivos):

npm run dev

La API iniciará en http://localhost:5000 según tu .env.

# Conexión con frontend
Asegúrate de que el frontend tenga en su .env:

VITE_API_URL=http://localhost:5000/api


Rutas disponibles

| Recurso     | Ruta             | Método | Descripción                 |
| --------    | ---------------  | ------ | --------------------------- |
| Animales    | /api/animales    | GET    | Listar animales disponibles |
| Refugios    | /api/refugios    | GET    | Listar refugios             |
| Usuarios    | /api/usuarios    | GET    | Listar usuarios             |
| UsuarioRol  | /api/usuario-rol | POST   | Asignar rol a usuario       |
| Animales    | /api/animales    | POST   | Crear animal                |
| Adopciones  | /api/adopciones  | GET    | Listar adopciones           |
| Adopciones  | /api/adopciones  | POST   | Registrar adopción          |
| Voluntarios | /api/voluntarios | GET    | Listar voluntarios          |
| Donaciones  | /api/donaciones  | POST   | Registrar donación          |


# Instalación y ejecución
1. Clonar el repositorio:
git clone https://github.com/Gladys-2/P.A.-Backend-internet-proyecto.git

2. Entrar a la carpeta del proyecto:
cd P.A.-Backend-internet-proyecto

3. Instalar dependencias:
npm install

4. Ejecutar en modo desarrollo:
npm run dev
El servidor se ejecutará en: http://localhost:5000