import axios from 'axios'

// Configuración base de axios
const axiosClient = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:5000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// Interceptor para requests (añadir token, etc.)
axiosClient.interceptors.request.use(
  (config) => {
    // Aquí puedes añadir token de autenticación
    // const token = useCookie('auth-token')
    // if (token.value) {
    //   config.headers.Authorization = `Bearer ${token.value}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor para responses (manejo de errores)
axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Manejo global de errores
    if (error.response) {
      // El servidor respondió con un código de error
      console.error('Error response:', error.response.status, error.response.data)
      
      // Aquí puedes manejar errores específicos
      if (error.response.status === 401) {
        // Redirigir a login
        // navigateTo('/login')
      }
    } else if (error.request) {
      // La petición se hizo pero no hubo respuesta
      console.error('Error request:', error.request)
    } else {
      console.error('Error:', error.message)
    }
    
    return Promise.reject(error)
  }
)

export default axiosClient
