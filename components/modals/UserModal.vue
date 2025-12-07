<template>
    <div class="modal-fade p-3">
        <div class="modal-dialog modal-sm">
            <div class="modal-content shadow-lg rounded-3 d-flex flex-column align-items-center">
                
                <div class="mb-3 mt-3">
                    <label class="col-form-label">Nombre:</label>
                    <input type="text" v-model="name" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="col-form-label">Apellido:</label>
                    <input type="text" v-model="lastname" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="col-form-label">Email:</label>
                    <input type="email" v-model="email" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="col-form-label">Username:</label>
                    <input type="text" v-model="username" class="form-control" :readonly="!!user" />
                </div>
                <div class="mb-3">
                    <label class="col-form-label">Password:</label>
                    <input type="password" v-model="password" class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="col-form-label">Rol:</label>
                    <select v-model="role" class="form-select">
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div class="d-flex justify-content-between w-100 px-4">
                    <button type="button" class="btn btn-secondary mb-3" @click="$emit('closeModal')">Cancelar</button>
                    <button type="button" class="btn btn-primary mb-3" @click="guardarUser">
                        {{ user ? 'Actualizar' : 'Crear' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserModal',
    // Unificamos a 'saveUser' para la acción y añadimos 'closeModal'
    emits: ['saveUser', 'closeModal'], 
    data() {
        return {
            // Nuevo: Para almacenar el ID de forma invisible
            userId: null, 
            name: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            role: ''
        }
    },
    props: {
        user:{
            type: Object,
            required: false,
            default: null
        }
    },
    // Usamos watch con immediate para inicializar al montar y si el prop cambia
    watch: {
        user: {
            handler(){
                this.inicializarForm();
            },
            immediate: true,
        }
    },
    methods: {
        inicializarForm(){
            if(this.user){
                // Modo UPDATE: Rellenar y almacenar el ID
                this.userId = this.user.id; 
                this.name = this.user.nombre || '';
                this.lastname = this.user.apellidos || '';
                this.email = this.user.email || '';
                this.username = this.user.username || '';
                this.password = ''; // Nunca rellenar la contraseña por seguridad
                this.role = this.user.admin ? 'admin': 'user'
            } else{
                // Modo CREATE
                this.resetForm();
            }
        },
        resetForm(){
            this.userId = null;
            this.name = '';
            this.lastname = '';
            this.email = '';
            this.username = '';
            this.password = '';
            this.role = 'user';
        },
        guardarUser() {
            let isAdmin = this.role === "admin";
            
            const datosUser = {
                // Incluimos el ID si está presente (para el modo Actualizar)
                id: this.userId, 
                nombre: this.name,
                apellidos: this.lastname,
                username: this.username,
                password: this.password,
                email: this.email,
                admin: isAdmin
            }
            
            // Emitimos el evento de guardar
            this.$emit("saveUser", datosUser)
        },
    }
}
</script>