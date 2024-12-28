# Portfolio en React

Este es un proyecto de un portfolio personal desarrollado con **React**. Está diseñado para mostrar información sobre el desarrollador, los proyectos realizados (obtenidos desde una API) y proporcionar un medio de contacto.

## Características

- **React** como framework principal.
- Navegación entre páginas utilizando **React Router DOM**.
- Datos de los proyectos recuperados dinámicamente desde una API.
- Configurado con **Vite** para un desarrollo rápido y eficiente.

## Páginas

1. **Inicio**: Una introducción al portfolio con información breve sobre el desarrollador.
2. **Proyectos**: Muestra una lista de proyectos recuperados desde una API externa.
3. **Contacto**: Un formulario para que los usuarios se pongan en contacto.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/portfolio-frontend.git
   ```

2. Ve al directorio del proyecto:

   ```bash
   cd portfolio-frontend
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Renombra el archivo `.env.example` a `.env` y edítalo según la configuración de tu backend:

   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

## Uso

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

2. Abre tu navegador en [http://localhost:5173](http://localhost:5173) para ver el proyecto.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera una versión optimizada para producción.
- `npm run preview`: Previsualiza la versión de producción.
- `npm run lint`: Ejecuta eslint en busca de errores

## Tecnologías Utilizadas

- React
- React Router DOM
- Vite
- Fetch API para las solicitudes de datos
