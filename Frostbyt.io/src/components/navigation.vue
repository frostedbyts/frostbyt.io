<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Frostbyt.io</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://frostbyt.com">My Blog</a>
                </li>
                <li class="nav-item">
                    <router-link  class="nav-link" to="/portfolio">Portfolio</router-link>
                </li>
            </ul>
            <!--<form class="form-inline my-2 my-lg-0">
                <button class="btn btn-secondary my-2 my-sm-0" @click="showModal">Contact</button>
                <modal v-show="isModalVisible" @close="closeModal"/>
            </form>-->
        </div>
    </nav>
</template>

<script>
</script>

<style scoped>
</style>