export class UsuarioDataMapper {
    toDomain(apiData){
        return{
            id: apiData.id,
            nombre: apiData.nombre,
            apellidos: apiData.apellidos,
            email: apiData.email,
            username: apiData.username,
            password: apiData.password,
            admin: apiData.admin
        }
    }

    toApi(domainData){
        return{
            id: domainData.id,
            nombre: domainData.nombre,
            apellidos: domainData.apellidos,
            email: domainData.email,
            username: domainData.username,
            password: domainData.password,
            admin: domainData.admin
        }
    }

    toDomainList(apiDataList){
        if (!Array.isArray(apiDataList)){
            return []
        }
        return apiDataList.map(item => this.toDomain(item))
    }
}


export default new UsuarioDataMapper()