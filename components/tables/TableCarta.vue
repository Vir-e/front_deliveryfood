<template>
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <thead class="table-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.nombre }}</td>
                    <td>{{ item.precio }}</td>
                </tr>
                <tr v-if="items.length === 0">
                    <td colspan="3" class="text-center text-muted">
                        No hay elementos en la carta
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default{
    name: 'TableCarta',
    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    }
}

</script>


<style scoped>
.table-responsive {
    border-radius: 0.375rem;
    overflow: hidden;
}
</style>