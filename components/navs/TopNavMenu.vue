<template>
    <div class="d-flex justify-content-between align-items-center p-1 bg-light border-bottom">
        <div class="d-flex align-items-center">
            <img class="logo ml-3" src="/burger.png" alt="logo"/>
            <div class="d-flex flex-column align-items-start pt-2 justify-content-center">
                <h6>FOOCkING</h6>
                <h6>FOOD!!!</h6>
            </div>
        </div>
        <div class="d-flex">
            <nuxt-link to="/admin" class="btn btn-primary me-2">Admin</nuxt-link>
            <button type="button" class="btn btn-success">Usuario</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'TopNavMenu'
}
</script>


<style scoped>

.logo{
    width: 65px;
    height: 50px;
}

</style>