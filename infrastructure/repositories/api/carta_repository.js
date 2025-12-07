import axiosClient from "~/infrastructure/http/axiosClient";

export class CartaRepository {
    constructor(httpClient = axiosClient){
        this.httpClient = httpClient
    }

    async get(){
        try{
            const response = await this.httpClient.get('/carta')
            return response.data
        }
        catch (error){
            throw this.handleError(error)
        }
    }


    
}