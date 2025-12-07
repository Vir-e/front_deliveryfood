export class CartaDataMapper {
    toDomain(apiData){
        return{
            id: apiData.id,
            nombre: apiData.nombre,
            precio: apiData.precio
        }
    }

    toApi(domainData){
        return{
            id: domainData.id,
            nombre: domainData.nombre,
            precio: domainData.precio
        }
    }

    toDomainList(apiDataList){
        if (!Array.isArray(apiDataList)){
            return []
        }
        return apiDataList.map(item => this.toDomain(item))
    }
}

export default new CartaDataMapper()