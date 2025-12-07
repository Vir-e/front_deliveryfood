

export class CartaService {
    constructor(cartaRepository, dataMapper = CartaDataMapper){
        this.cartaRepository = cartaRepository
        this.dataMapper = dataMapper
    }


    async get(){
        try{
            const data = await this.cartaRepository.get()
            return this.dataMapper.toDomainList(data)
        } catch (error){
            console.error('Error en CartaService.get', error)
            throw error
        }
    }
}