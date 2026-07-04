# E-commerce API - Feature II

## Descripción

Este proyecto consiste en el desarrollo de una API REST para la gestión de productos de un e-commerce utilizando Node.js y Express.

La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los productos mediante diferentes endpoints HTTP.

Además, la documentación de la API se ha realizado utilizando la especificación OpenAPI (Swagger).

---

## Tecnologías utilizadas

* Node.js
* Express.js
* JavaScript (ES Modules)
* Swagger / OpenAPI 3.0
* Postman (para pruebas)

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/13082002-eng/feature-II.git
```

2. Entrar en la carpeta del proyecto:

```bash
cd feature-II
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor:

```bash
npm start
```

Si utilizas nodemon:

```bash
npm run dev
```

---

### Obtener todos los productos

```
GET /api/products
```

### Obtener un producto por ID

```
GET /api/products/:id
```

### Crear un producto

```
POST /api/products
```


### Actualizar un producto

```
PUT /api/products/:id
```

### Eliminar un producto

```
DELETE /api/products/:id
```

---

## Documentación de la API

La documentación sigue el estándar **OpenAPI 3.0** y se encuentra en el archivo:

```
openapi.json
```

Incluye:

* Endpoints
* Parámetros
* Códigos de respuesta
* Esquemas de datos
* Ejemplos de uso

---

## Pruebas

Los endpoints se han probado utilizando Postman verificando:

* Creación de productos.
* Consulta de todos los productos.
* Consulta por ID.
* Actualización de productos.
* Eliminación de productos.
* Respuestas de error cuando corresponde.

