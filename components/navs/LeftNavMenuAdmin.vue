<template>
    <div class="d-flex flex-column align-items-start p-3">
        <ul class="nav flex-column w-100">
            <li class="nav-item mb-2">
                <nuxt-link to="/admin" class="nav-link">Dashboard</nuxt-link>
            </li>
            <li class="nav-item mb-2">
                <nuxt-link to="/admin" class="nav-link">Usuarios</nuxt-link>
            </li>
            <li class="nav-item mb-2">
                <nuxt-link to="/admin" class="nav-link">Personal</nuxt-link>
            </li>
            <li class="nav-item mb-2">
                <nuxt-link to="/admin" class="nav-link">Proveedores</nuxt-link>
            </li>
            <li class="nav-item mb-2">
                <nuxt-link to="/admin" class="nav-link">Clientes</nuxt-link>
            </li>
            <li class="nav-item mb-2">
                <nuxt-link to="/admin" class="nav-link">Recetas</nuxt-link>
            </li>
            <li class="nav-item mb-2">
                <nuxt-link to="/admin" class="nav-link">Configuración</nuxt-link>
            </li>
            <li class="nav-item mb-2 mt-4">
                <hr class="w-100">
            </li>
            <li class="nav-item mb-2">
                <nuxt-link to="/" class="nav-link">Volver al sitio</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'LeftNavMenuAdmin'
}
</script>

<style scoped>
.logo {
    width: 100px;
    height: 140px;
}

.nav-link {
    color: #333;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    transition: all 0.2s;
}

.nav-link:hover {
    background-color: #e9ecef;
    color: #007bff;
}

.nav-link.router-link-active {
    background-color: #007bff;
    color: white;
}
</style>