


export class UsuarioService {
    constructor(usuarioRepository, dataMapper = UsuarioDataMapper){
        this.usuarioRepository = usuarioRepository
        this.dataMapper = dataMapper
    }

    async get(){
        try{
            console.log("USERS|SERVICE|GET")
            const data = await this.usuarioRepository.get()
            return this.dataMapper.toDomainList(data)
        } catch (error){
            console.error('Error en UsuarioService.get', error)
            throw error
        }
    }

    async create(usuario){
        console.log("USER|SERVICE|CREATE|" + usuario)
        try{
            const data = await this.usuarioRepository.create(usuario)
            return this.dataMapper.toDomain(data)
        } catch (error){
            console.error('Error en UsuarioService.create', error)
            throw error
        }
    }

    async update(usuario){
        console.log("USER|SERVICE|UPDATE|" + usuario)
        try{
            const data = await this.usuarioRepository.update(usuario)
            return this.dataMapper.toDomain(data)
        } catch (error){
            console.error('Error en UsuarioService.update', error)
            throw error
        }
    }

    async delete(usuario){
        console.log("USER|SERVICE|DELETE|" + usuario)
        try{
            const data = await this.usuarioRepository.delete(usuario.id)
            return this.dataMapper.toDomain(data)
        } catch (error){
            console.error('Error en UsuarioService.delete', error)
            throw error
        }
    }
}