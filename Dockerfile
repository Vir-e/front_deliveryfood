# Usar una imagen base de Node.js (Nuxt 4 requiere Node.js 18+)
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias primero (para aprovechar la caché de Docker)
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm ci --only=production=false

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación Nuxt para producción
RUN npm run build

# Exponer el puerto por defecto de Nuxt (3000)
EXPOSE 3000

# Variable de entorno para la URL de la API (puede ser sobrescrita)
ENV API_BASE_URL=http://localhost:5000
ENV NODE_ENV=production
ENV NITRO_PORT=3000
ENV NITRO_HOST=0.0.0.0

# Comando para ejecutar la aplicación en modo producción
CMD ["node", ".output/server/index.mjs"]

