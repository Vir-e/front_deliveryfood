<template>
    <div>
        <button type="button" class="btn btn-primary" @click="abrirModalCrearUsuario">Agregar Usuario</button>
        
        <UserModal 
            v-if="modalCrearUsuario" 
            :user="selectedUser"                 @saveUser="guardarUsuario"           @closeModal="cerrarModal"            />
        
        <table-usuarios 
            :items="usuarios" 
            @editUserRequest="handleEditRequest"  @deleteUser="borrarUsuario"          />
    </div>
</template>

<script>
import UserModal from '~/components/modals/UserModal.vue';
import { UsuarioRepository } from '~/infrastructure/repositories/api/usuario_repository';
import { UsuarioService } from '~/application/services/usuario_service';
import  UsuarioDataMapper  from '~/infrastructure/datamappers/UsuarioDataMapper';
import TableUsuarios from './tables/TableUsuarios.vue';

export default {
    name: 'Usuarios',
    components: {
        UserModal,
        TableUsuarios
    },
    data() {
        return {
            modalCrearUsuario: false,   // Controla la visibilidad de la modal
            selectedUser: null,         // 🌟 NUEVO: El usuario a editar. Null para crear.
            usuarioService : null,
            usuarios: []
        }
    },
    created(){
        const usuarioRepository = new UsuarioRepository()
        this.usuarioService = new UsuarioService(usuarioRepository, UsuarioDataMapper)
    },
    async mounted(){
        await this.cargarUsuarios()
    },
    methods: {

        async cargarUsuarios(){
            try{
                this.usuarios = await this.usuarioService.get();
            } catch (error){
                console.error("Error en cargarUsuarios ", error)
            }
        },

        // --- MANEJO DE LA MODAL ---
        
        // 1. Abrir modal para CREAR
        abrirModalCrearUsuario() {
            this.selectedUser = null;        // Importante: Limpiar para modo CREAR
            this.modalCrearUsuario = true;
        },

        // 2. Abrir modal para ACTUALIZAR (Llamado desde TableUsuarios)
        handleEditRequest(usuarioAEditar) {
            this.selectedUser = usuarioAEditar; // Importante: Cargar datos para modo ACTUALIZAR
            this.modalCrearUsuario = true;
        },

        // 3. Cerrar la modal
        cerrarModal() {
            this.modalCrearUsuario = false;
            this.selectedUser = null; // Limpiar el estado
        },
        
        // --- LÓGICA DE LA API (UNIFICADA) ---

        async guardarUsuario(datosUser) {
            console.log("Datos recibidos para guardar:", datosUser)
            try {
                // 🔑 DECISIÓN CLAVE: Si hay ID en los datos, es una Actualización (PUT)
                if (datosUser.id) {
                    await this.usuarioService.update(datosUser)
                } else {
                    // Si no hay ID, es una Creación (POST)
                    await this.usuarioService.create(datosUser)
                }
                
                // Recargar datos y cerrar
                await this.cargarUsuarios()
                this.cerrarModal() // Usamos el método de cierre centralizado
                
            } catch (error) {
                console.error("Error al guardar/actualizar usuario:", error)
                // Aquí podrías mostrar una notificación de error
            }
        },

        // --- MANTENEMOS BORRAR (NO AFECTA A LA MODAL) ---
        async borrarUsuario(usuario){
            try{
                await this.usuarioService.delete(usuario)
                await this.cargarUsuarios()
            }
            catch(error){
                console.error("Error en borrarUsuario ", usuario)
            }
        }
    }
}
</script>

<style scoped>

</style>
