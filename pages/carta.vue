<template>
    <div>
        <h3>Carta</h3>
        <button type="button" class="btn-success">Añadir plato</button>
        <table-carta :items="carta"/>
    </div>
    
</template>


<script>
import { CartaRepository } from '~/infrastructure/repositories/api/carta_repository';
import { CartaService } from '~/application/services/carta_service';
import CartaDataMapper from '~/infrastructure/datamappers/CartaDataMapper';

import TableCarta from '~/components/tables/TableCarta.vue';

export default{
    components: {
        TableCarta
    },
    data(){
        return {
            carta: [],
            cartaService: null
        }
    },
    created() {
        const cartaRepository = new CartaRepository()
        this.cartaService = new CartaService(cartaRepository, CartaDataMapper)
    },
    async mounted(){
        await this.cargarCarta()
        console.log("Carta: ", this.carta)
    },
    methods: {
        async cargarCarta(){
            try{
                this.carta = await this.cartaService.get()
            }catch (error){
                console.log("Error en cargaCarta ", error)
            }
        }
    }

}

</script>