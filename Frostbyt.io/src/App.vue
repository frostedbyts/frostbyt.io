<template>
    <div id="app">
        <button type="button" class="btn btn-secondary-lg" @click="showModal">OPEN</button>
        <modal v-show="isModalVisible" @close="closeModal"></modal>
        <!--<navigation />
        <Particles />
        <router-view />-->
    </div>
</template>

<script>
    //import Home from './components/Home.vue';
    import Navigation from './components/navigation.vue';
    import Particles from './components/Particles.vue';
    import modal from './components/Contact.vue';
    export default {
        name: 'app',
        components: {
            Navigation,
            Particles,
            modal
        },
        data() {
            return {
                isModalVisible: false
            };
        },
        methods: {
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        }
    };
</script>

<style>
</style>

