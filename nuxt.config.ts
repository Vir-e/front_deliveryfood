// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css'

  ],
  app: {
    head: {
      script: []
    }
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:5000'
    }
  },

  // Intentamos la transpilación agresiva de nuevo
  build: {
    transpile: [
        'bootstrap-vue-next'
    ],
  },
  
  // Opcional, pero a veces ayuda con el tree-shaking de Vite
  vite: {
    optimizeDeps: {
      include: ['bootstrap-vue-next'],
    },
  
  },
})



// export default defineNuxtConfig({
//   // ... otras configuraciones
  
//   // Opción 1: Usando la opción top-level 'build'
//   build: {
//     transpile: ['bootstrap-vue-next'],
//   },

//   // O Opción 2: Usando la configuración de Vite si tienes un setup moderno
//   vite: {
//     optimizeDeps: {
//       include: ['bootstrap-vue-next'],
//     },
//   },
  
//   // ... más configuraciones
// })
