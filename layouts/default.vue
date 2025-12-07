<template>
    <div class="app-wrapper d-flex flex-column min-vh-100">
        <header>
            <TopNavMenu/>
        </header>
        <div class="app-container d-flex flex-grow-1">
            <aside class="sidebar bg-light" style="width: 250px; flex-shrink:0;">
                <LeftNavMenu/>
            </aside>

            <main class="main-content flex-grow-1 p-4">
                <slot />
            </main>
        </div>
        
        <footer class="bg-dark text-white p-3">
            <div>
                <label>footer...</label>
            </div>
        </footer>
    </div>
</template>

<script>
import LeftNavMenu from '~/components/navs/LeftNavMenu.vue';
import TopNavMenu from '~/components/navs/TopNavMenu.vue';



export default{
    components: {
        LeftNavMenu,
        TopNavMenu
    }
}

</script>




<style scoped>
.app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.app-container {
    display: flex;
    flex: 1;
}

.sidebar {
    width: 250px;
    flex-shrink: 0;
}

.main-content {
    flex: 1;
}
</style>