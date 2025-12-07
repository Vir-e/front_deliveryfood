<template>
    <div class="admin-container">
        <div v-if="!seccionActiva">
            <h1 class="mb-4">Panel de Administración</h1>
        
            <div class="row g-4">
                <!-- Usuarios -->
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="admin-card-link" @click="seleccionarSeccion('usuarios')">
                        <div class="admin-card">
                            <div class="admin-card-icon">
                                <i class="bi bi-people"></i>
                            </div>
                            <h3 class="admin-card-title">Usuarios</h3>
                        </div>
                    </div>
                </div>

                <!-- Personal -->
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="admin-card-link" @click="seleccionarSeccion('personal')">
                        <div class="admin-card">
                            <div class="admin-card-icon">
                                <i class="bi bi-person-vcard"></i>
                            </div>
                            <h3 class="admin-card-title">Personal</h3>
                        </div>
                    </div>
                </div>

                <!-- Configuración -->
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="admin-card-link" @click="seleccionarSeccion('configuracion')">
                        <div class="admin-card">
                            <div class="admin-card-icon">
                                <i class="bi bi-gear"></i>
                            </div>
                            <h3 class="admin-card-title">Configuración</h3>
                        </div>
                    </div>
                </div>

                <!-- Proveedores -->
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="admin-card-link" @click="seleccionarSeccion('proveedores')">
                        <div class="admin-card">
                            <div class="admin-card-icon">
                                <i class="bi bi-basket"></i>
                            </div>
                            <h3 class="admin-card-title">Proveedores</h3>
                        </div>
                    </div>
                </div>

                <!-- Clientes -->
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="admin-card-link" @click="seleccionarSeccion('clientes')">
                        <div class="admin-card">
                            <div class="admin-card-icon">
                                <i class="bi bi-house"></i>
                            </div>
                            <h3 class="admin-card-title">Clientes</h3>
                        </div>
                    </div>
                </div>

                <!-- Recetas -->
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="admin-card-link" @click="seleccionarSeccion('recetas')">
                        <div class="admin-card">
                            <div class="admin-card-icon">
                                <i class="bi bi-card-list"></i>
                            </div>
                            <h3 class="admin-card-title">Recetas</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1>{{ getTituloSeccion() }}</h1>
                <button class="btn btn-secondary" @click="volverAlInicio">
                    <span>←</span> Volver
                </button>
            </div>
            <!-- Componente Usuarios -->
            <Usuarios v-if="seccionActiva === 'usuarios'" />
            
            <!-- Otros componentes (se crearán después) -->
            <div v-else class="alert alert-info">
                <p>Sección "{{ getTituloSeccion() }}" en desarrollo...</p>
            </div>
        </div>
    </div>
</template>

<script>

import Usuarios from '~/components/Usuarios.vue'


export default {
    name: 'AdminPage',
    components: {
        Usuarios
    },
    data(){
        return {
            seccionActiva: null
        }
    },
    created(){
        definePageMeta({
            layout: 'admin' // Esto anula el layout por defecto.
});
    },
    methods: {
        seleccionarSeccion(seccion){
            this.seccionActiva = seccion
        },
        volverAlInicio() {
            this.seccionActiva = null
        },
        getTituloSeccion() {
            const titulos = {
                'usuarios': 'Gestión de Usuarios',
                'personal': 'Gestión de Personal',
                'configuracion': 'Configuración',
                'proveedores': 'Gestión de Proveedores',
                'clientes': 'Gestión de Clientes',
                'recetas': 'Gestión de Recetas'
            }
            return titulos[this.seccionActiva] || 'Administración'
        }
    }
}
</script>

<style scoped>
.admin-container {
    padding: 2rem;
}

.admin-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.admin-card {
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    height: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    aspect-ratio: 1; /* Mantiene forma cuadrada */
}

.admin-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    border-color: #007bff;
    background: #f8f9fa;
}

.admin-card-icon {
    font-size: 3rem;
    color: #007bff;
    margin-bottom: 1rem;
}

.admin-card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin: 0;
}

/* Responsive: Asegurar que los cards se vean bien en móviles */
@media (max-width: 576px) {
    .admin-card {
        min-height: 150px;
        padding: 1.5rem;
    }
    
    .admin-card-icon {
        font-size: 2.5rem;
    }
    
    .admin-card-title {
        font-size: 1.1rem;
    }
}
</style>