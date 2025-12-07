import axiosClient from "~/infrastructure/http/axiosClient";


export class UsuarioRepository {
    constructor(httpClient = axiosClient){
        this.httpClient = httpClient
    }


    async get(){
        try{
            console.log("USERS|REPOSITORY|GET")
            const response = await this.httpClient.get('/usuarios')
            return response.data
        }
        catch(error){
            throw error
        }
    }


    async create(user){
        console.log("USER|REPOSITORY|CREATE|" + user)
        try{
            const response = await this.httpClient.post('/usuarios', user)
            return response.data
        }
        catch(error){
            throw error
        }
    }

    async update(user){
        console.log("USER|REPOSITORY|UPDATE|" + user)
        try{
            const response = await this.httpClient.put(`/usuarios/${user.id}`, user)
            return response.data
        }
        catch(error){
            throw error
        }
    }

    async delete(userId){
        console.log("USER|REPOSITORY|DELETE|" + userId)
        try{
            const response = await this.httpClient.delete(`/usuarios/${userId}`)
            return response.data
        }
        catch(error){
            throw error
        }
    }
}