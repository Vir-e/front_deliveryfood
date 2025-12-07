<template>
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <thead class="table-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Es Admin</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.apellidos }}</td>
                    <td>{{ item.username }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.admin }}</td>
                    <td>
                        <i 
                            class="bi bi-pencil-square fs-4 me-2 text-primary" 
                            @click="abrirModalUser(item)"
                        ></i>
                        <i 
                            class="bi bi-trash3 fs-4 text-danger" 
                            @click="$emit('deleteUser', item)"
                        ></i>
                    </td>
                    </tr>
                <tr v-if="items.length === 0">
                    <td colspan="7" class="text-center text-muted">
                        No hay usuarios
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default{
    name: 'TableUsuarios',

    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    // eventos que enviaremos al padre
    emits: ['editUserRequest', 'deleteUser'], 

    methods: {
        // Renombramos y simplificamos la solicitud de edición
        abrirModalUser(datosUser){
            // Emitimos la solicitud de edición, subiendo el objeto al padre (Usuarios.vue)
            this.$emit('editUserRequest', datosUser)
        },
        // Mantenemos solo el emit de deleteUser si es necesario, 
        // aunque se puede llamar directo en el template (@click="$emit('deleteUser', item)")
        // borrarUsuario(usuario){
        //     this.$emit('deleteUser', usuario)
        // }
    }
}
</script>

<style scoped>
.table-responsive {
    border-radius: 0.375rem;
    overflow: hidden;
}
</style>