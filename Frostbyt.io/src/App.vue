<template>
    <div id="app">
        <navigation />
        <Particles />
        <router-view />
    </div>
</template>

<script>
    //import Home from './components/Home.vue';
    import Navigation from './components/navigation.vue';
    import Particles from './components/Particles.vue';
    export default {
        name: 'app',
        components: {
            Navigation,
            Particles
        },

    };
</script>

<style>
</style>

