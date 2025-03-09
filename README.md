# Proyecto 7
## API REST AUTH

Una API REST AUTH que te permite interaccionar con un sistemas de gestión de proyectos de investigación. Permite realizar operaciones CRUD (crear, leer, actualizar, eliminar) dependiendo del rol que desempeñes en la organización.


## Endpoints

## Colección Organismos

### 1. **Obtener todos los organismos**
- **URL**: "/api/v1/organisms"
- **Método**: "GET"
- **Descripción**: Obtiene la lista de todos los organismos en la base de datos.
- **Respuesta de ejemplo**: 
```json
[
	{
		"_id": "67cdf2e75f76aaaae1994d26",
		"kingdom": "Monera",
		"specie": "Escherichia coli",
		"bsl": 1,
		"department": "Microbiología",
		"__v": 0,
		"createdAt": "2025-03-09T19:58:31.937Z",
		"updatedAt": "2025-03-09T19:58:31.937Z"
	},
	{
		"_id": "67cdf2e75f76aaaae1994d27",
		"kingdom": "Plantae",
		"specie": "Ginkgo biloba",
		"bsl": 1,
		"department": "Botánica",
		"__v": 0,
		"createdAt": "2025-03-09T19:58:31.939Z",
		"updatedAt": "2025-03-09T19:58:31.939Z"
	},
	{
		"_id": "67cdf2e75f76aaaae1994d28",
		"kingdom": "Animalia",
		"specie": "Ursus arctos",
		"bsl": 1,
		"department": "Zoología",
		"__v": 0,
		"createdAt": "2025-03-09T19:58:31.939Z",
		"updatedAt": "2025-03-09T19:58:31.939Z"
	}
]
```

### 2. **Crear una nuevo organismo**
- **URL**: "/api/v1/organisms"
- **Método**: "POST"
- **Descripción**: Crea un nuevo organismo en la base de datos.
- **Cuerpo de la solicitud**:
    ```json
    {
    "kingdom": "Monera",
    "specie": "Escherichia coli",
    "bsl": 1,
    "department": "Microbiología"
  }
    ```
- **Respuesta de ejemplo**:
    ```json
    {
	"kingdom": "Monera",
	"specie": "Escherichia coli",
	"bsl": 1,
	"department": "Microbiología",
	"_id": "67c6e2f09dd2627fa6e3a760",
	"createdAt": "2025-03-04T11:24:32.684Z",
	"updatedAt": "2025-03-04T11:24:32.684Z",
	"__v": 0
	}
    ```

### 3. **Actualizar un organismo**
- **URL**: "/api/v1/organisms/:id"
- **Método**: "PUT"
- **Descripción**: Actualiza un organismo existente.
- **Parametros**:
    - `id`(requerido): El identificador único del organismo.  
- **Cuerpo de la solicitud**:
    ```json
    {
    "kingdom": "Monera",
    "specie": "Escherichia coli",
    "bsl": 1,
    "department": "Microbiología"
  }
    ```
- **Respuesta de ejemplo**:
    ```json
    {
	"kingdom": "Monera",
	"specie": "Escherichia coli",
	"bsl": 1,
	"department": "Microbiología",
	"_id": "67c6e2f09dd2627fa6e3a760",
	"createdAt": "2025-03-04T11:24:32.684Z",
	"updatedAt": "2025-03-04T11:24:32.684Z",
	"__v": 0
	}
    ```
    
### 4. **Eliminar un organismo**
- **URL**: "/api/v1/organisms/:id"
- **Método**: "DELETE"
- **Descripción**: Elimina un organismo de la base de datos.
- **Parametros**:
    - `id`(requerido): El identificador único del organismo.  
- **Respuesta de ejemplo**:
 ```json
{
	"_id": "67c6e2f09dd2627fa6e3a760",
	"kingdom": "Monera",
	"specie": "E. coli",
	"bsl": 1,
	"department": "Microbiología",
	"createdAt": "2025-03-04T11:24:32.684Z",
	"updatedAt": "2025-03-04T11:25:14.609Z",
	"__v": 0
}
```
    
## **Colección Proyectos**

### 1. **Obtener todos los proyectos**
- **URL**: "/api/v1/projects"
- **Método**: "GET"
- **Descripción**: Obtiene la lista de todos los proyectos en la base de datos.
- **Respuesta de ejemplo**:
 ```json
    [
	{
		"_id": "67cd706890b283127e994423",
		"name": "Salvar Sierra Morena",
		"description": "Recuento de ejemplares de Oso",
		"objectives": "Conocer el estado de las especies de Oso que habitan Sierra Morena",
		"organism": {
			"_id": "67cd706790b283127e994421",
			"kingdom": "Animalia",
			"specie": "Ursus arctos",
			"bsl": 1,
			"department": "Zoología",
			"__v": 0,
			"createdAt": "2025-03-09T10:41:43.907Z",
			"updatedAt": "2025-03-09T10:41:43.907Z"
		},
		"projectFunding": 10400,
		"currency": "EUR",
		"responsable": "Pepito",
		"contact": 789456123,
		"__v": 0,
		"createdAt": "2025-03-09T10:41:44.010Z",
		"updatedAt": "2025-03-09T10:41:44.010Z"
	},
	{
		"_id": "67cd706890b283127e994424",
		"name": "Tóxinas en el medio ambiente",
		"description": "La importancia del analisis medio ambiental",
		"objectives": "Analizar las tóxinas generadas por la bacteria E. coli",
		"organism": {
			"_id": "67cd706790b283127e99441f",
			"kingdom": "Monera",
			"specie": "Escherichia coli",
			"bsl": 1,
			"department": "Microbiología",
			"__v": 0,
			"createdAt": "2025-03-09T10:41:43.905Z",
			"updatedAt": "2025-03-09T10:41:43.905Z"
		},
		"projectFunding": 12000,
		"currency": "USD",
		"responsable": "Luisita",
		"contact": 321654987,
		"__v": 0,
		"createdAt": "2025-03-09T10:41:44.010Z",
		"updatedAt": "2025-03-09T10:41:44.010Z"
	}
	]
```

### 2. **Crear una nuevo proyecto**
- **URL**: "/api/v1/projects"
- **Método**: "POST"
- **Descripción**: Crea una nuevo proyecto en la base de datos.
- **Cuerpo de la solicitud**:
    ```json
   {
    "name": "Mejora Coloracion Aves",
    "description": "Utilización de técnicas de CRISPR para la mejora en el color de mimetismo de las aves acuáticas",
    "objectives": "Identificación de genes",
    "projectFunding": 6000,
    "currency": "EUR",
    "responsable": "Juan Ceballos",
    "contact": "635887722"
  }
    ```
- **Respuesta de ejemplo**:
```json
{
	"name": "Mejora Coloracion Aves",
	"description": "Utilización de técnicas de CRISPR para la mejora en el color de mimetismo de las aves acuáticas",
	"objectives": "Identificación de genes",
	"projectFunding": 6000,
	"currency": "EUR",
	"responsable": "Juan Ceballos",
	"contact": 635887722,
	"_id": "67c6dc7478bc0d405a8d806d",
	"createdAt": "2025-03-04T10:56:52.180Z",
	"updatedAt": "2025-03-04T10:56:52.180Z",
	"__v": 0
}
```

### 3. **Actualizar un proyecto**
- **URL**: "/api/v1/projects/:id"
- **Método**: "PUT"
- **Descripción**: Actualiza un proyecto existente.
- **Parametros**:
    - `id`(requerido): El identificador único del proyecto.  
- **Cuerpo de la solicitud**:
    ```json
    {
	 "organism": "67c82e8a0d917f3632bd4328"
	 }
    ```
- **Respuesta de ejemplo**:
    ```json
   {
	"_id": "67c82e8a0d917f3632bd432e",
	"name": "Tóxinas en el medio ambiente",
	"description": "La importancia del analisis medio ambiental",
	"objectives": "Analizar las tóxinas generadas por la bacteria E. coli",
	"projectFunding": 12000,
	"currency": "USD",
	"responsable": "Luisita",
	"contact": 321654987,
	"__v": 0,
	"createdAt": "2025-03-05T10:59:22.812Z",
	"updatedAt": "2025-03-05T11:25:04.900Z",
	"organism": "67c82e8a0d917f3632bd4328"
	}
    ```
    
### 4. **Eliminar un proyecto**
- **URL**: "/api/v1/projects/:id"
- **Método**: "DELETE"
- **Descripción**: Elimina un proyecto de la base de datos.
- **Parametros**:
    - `id`(requerido): El identificador único del proyecto.  
- **Respuesta de ejemplo**:
    ```json
  {
	"_id": "67c6dc7478bc0d405a8d806d",
	"name": "Mejora Coloracion Aves",
	"description": "Utilización de técnicas de CRISPR para la mejora en el color de mimetismo de las aves acuáticas",
	"objectives": "Identificación de genes",
	"projectFunding": 7000,
	"currency": "EUR",
	"responsable": "Juan Ceballos",
	"contact": 635887722,
	"createdAt": "2025-03-04T10:56:52.180Z",
	"updatedAt": "2025-03-04T10:59:12.524Z",
	"__v": 0
	}
    ```

## **Colección Usuarios**

### 1. **Obtener todos los usuarios**
- **URL**: "/api/v1/users"
- **Método**: "GET"
- **Descripción**: Obtiene la lista de todos los usuarios en la base de datos.
- **Respuesta de ejemplo**:
 ```json
    [
	{
		"_id": "67cdf2e85f76aaaae1994d2d",
		"name": "Juanito",
		"email": "juanito@gmail.com",
		"password": "$2b$10$TWGiWhXzvXkQmxJBoCIB1.AMLcP2y.5cqyaZ2OS9XVGcGUi7XflA2",
		"nameProjects": [],
		"rol": "user",
		"__v": 0,
		"createdAt": "2025-03-09T19:58:32.428Z",
		"updatedAt": "2025-03-09T19:58:32.428Z"
	},
	{
		"_id": "67cdf2e85f76aaaae1994d2e",
		"name": "Pepito",
		"email": "pepito@gmail.com",
		"password": "$2b$10$MoC3SeQH6XnfS8njPeThzuLsD/wjWfg/oh5.p/y.nfrIrh6jw3CfC",
		"nameProjects": [
			{
				"_id": "67cdf2e85f76aaaae1994d2a",
				"name": "Salvar Sierra Morena",
				"description": "Recuento de ejemplares de Oso",
				"objectives": "Conocer el estado de las especies de Oso que habitan Sierra Morena",
				"organism": {
					"_id": "67cdf2e75f76aaaae1994d28",
					"kingdom": "Animalia",
					"specie": "Ursus arctos",
					"bsl": 1,
					"department": "Zoología",
					"__v": 0,
					"createdAt": "2025-03-09T19:58:31.939Z",
					"updatedAt": "2025-03-09T19:58:31.939Z"
				},
				"projectFunding": 10400,
				"currency": "EUR",
				"responsable": "Pepito",
				"contact": 789456123,
				"__v": 0,
				"createdAt": "2025-03-09T19:58:32.128Z",
				"updatedAt": "2025-03-09T19:58:32.128Z"
			}
		],
		"rol": "user",
		"__v": 0,
		"createdAt": "2025-03-09T19:58:32.429Z",
		"updatedAt": "2025-03-09T19:58:32.429Z"
	},
	{
		"_id": "67cdf2e85f76aaaae1994d2f",
		"name": "Luisita",
		"email": "luisita@gmail.com",
		"password": "$2b$10$EoXw3lCTdOS2uWjXzG7rXuj1At0.0MrZDZn0LY1Dtstv6B3ZR1l4C",
		"nameProjects": [
			{
				"_id": "67cdf2e85f76aaaae1994d2b",
				"name": "Tóxinas en el medio ambiente",
				"description": "La importancia del analisis medio ambiental",
				"objectives": "Analizar las tóxinas generadas por la bacteria E. coli",
				"organism": {
					"_id": "67cdf2e75f76aaaae1994d26",
					"kingdom": "Monera",
					"specie": "Escherichia coli",
					"bsl": 1,
					"department": "Microbiología",
					"__v": 0,
					"createdAt": "2025-03-09T19:58:31.937Z",
					"updatedAt": "2025-03-09T19:58:31.937Z"
				},
				"projectFunding": 12000,
				"currency": "USD",
				"responsable": "Luisita",
				"contact": 321654987,
				"__v": 0,
				"createdAt": "2025-03-09T19:58:32.129Z",
				"updatedAt": "2025-03-09T19:58:32.129Z"
			}
		],
		"rol": "user",
		"__v": 0,
		"createdAt": "2025-03-09T19:58:32.430Z",
		"updatedAt": "2025-03-09T19:58:32.430Z"
	}
	]
```

### 2. **Crear un nuevo usuario**
- **URL**: "/api/v1/users"
- **Método**: "POST"
- **Descripción**: Crea un nuevo usuario en la base de datos.
- **Cuerpo de la solicitud**:
 ```json
{
	"name": "Juanito",
    "email": "juanito@gmail.com",
    "password": "juanito123"
}
```

- **Respuesta de ejemplo**:
    ```json
   {
	"name": "Juanito",
	"email": "juanito@gmail.com",
	"password": "$2b$10$Vy0jCyH7JHZZifm5mYEZyOA4TWziyRj4bo0xL/0zcfmmm1w.TmfyW",
	"nameProjects": [],
	"rol": "user",
	"_id": "67cdf316e704c4d9f24605c7",
	"createdAt": "2025-03-09T19:59:18.621Z",
	"updatedAt": "2025-03-09T19:59:18.621Z",
	"__v": 0
	}
	```

### 3. **Actualiza un usuario**
- **URL**: "/api/v1/users/:id"
- **Método**: "PUT"
- **Descripción**: Actualiza un usuario existente.
- **Parametros**:
    - `id`(requerido): El identificador único del usuario.  
- **Cuerpo de la solicitud**:
 ```json
 {
	"name": "Juan"
}
```

- **Respuesta de ejemplo**:
 ```json
   {
	"_id": "67cdf2e85f76aaaae1994d2d",
	"name": "Juan",
	"email": "juanito@gmail.com",
	"password": "$2b$10$TWGiWhXzvXkQmxJBoCIB1.AMLcP2y.5cqyaZ2OS9XVGcGUi7XflA2",
	"nameProjects": [],
	"rol": "user",
	"__v": 0,
	"createdAt": "2025-03-09T19:58:32.428Z",
	"updatedAt": "2025-03-09T20:03:16.380Z"
}
```
    
### 4. **Eliminar un usuario**
- **URL**: "/api/v1/users/:id"
- **Método**: "DELETE"
- **Descripción**: Elimina un usuario de la base de datos.
- **Parametros**:
    - `id`(requerido): El identificador único del usuario.  
- **Respuesta de ejemplo**:
 ```json
    {
	"_id": "67cdeefba2fa1806569802e9",
	"name": "Luisita",
	"email": "luisita@gmail.com",
	"password": "$2b$10$JTJbPyF/VPgzaWlelBq.r.Hr23Erqlsj8B6i0HWJvpLmJmDc/GL0a",
	"nameProjects": [
		"67cdeefba2fa1806569802e5"
	],
	"rol": "user",
	"__v": 0,
	"createdAt": "2025-03-09T19:41:47.540Z",
	"updatedAt": "2025-03-09T19:41:47.540Z"
}
```

### 5. **Loguear un usuario**
- **URL**: "/api/v1/users"
- **Método**: "POST"
- **Descripción**: Loguea un usuario en la base de datos y si está registrado crea un token.
- **Parametros**:
    - `email`(requerido): El email único del usuario.
    - `password`(requerido): La contraseña con la que se registró.  
- **Respuesta de ejemplo**:
 ```json
{
	  "email": "juanito@gmail.com",
    "password": "juanito123"
}
```

## Installation
Sigue estos pasos para instalar y ejecutar la API REST AUTH en tu entorno local:
### 1. Clonar el repositorio
Clona este repositorio en tu maquina local usando el siguiente comando en la consola:
```sh
git clone  https://github.com/Iskoh10/proyecto-7-API-REST-AUTH.git
```

### 2. Acceder al directorio del proyecto
Navega al directorio del proyecto clonado:
```sh
cd proyecto-7-API-REST-AUTH.git
```

### 3. Instalar las dependencias
Instala las dependencias necesarias:
```sh
npm install
```

### 4. Sembrar datos iniciales (opcional)
Incluye un script de seeds para incluir datos iniciales:
```sh
npm run seed
```

### 5. Iniciar el servidor
Ejecuta el servidor con el comando:
```sh
npm run dev
```
El servidor estará disponible en: http://localhost:3000

### 6. Probar la API REST AUTH
Puedes usar la herramienta Insomnia para probar los endpoints de la API REST AUTH.

## License

**Free Software, Hell Yeah!**
