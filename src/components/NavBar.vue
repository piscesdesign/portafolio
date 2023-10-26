<template>
    <nav class="navbar navbar-expand-lg fixed-top py-3" :class="[isHome ? 'bg-primary' : 'bg-white border-bottom']">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-3" v-if="!isHome">
                        <router-link class="btn btn-sm px-3 rounded-pill" :class="[isHome ? 'bg-white text-primary' : 'bg-primary text-white']" style="min-width: 130px;" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link class="btn btn-sm px-3 rounded-pill" :class="[isHome ? 'bg-white text-primary' : 'bg-primary text-white']" style="min-width: 130px;" to="/acerca">Acerca de mí</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link class="btn btn-sm px-3 rounded-pill" :class="[isHome ? 'bg-white text-primary' : 'bg-primary text-white']" style="min-width: 130px;" to="/proyectos">Proyectos</router-link>
                    </li>
                    <li class="nav-item mx-3">
                        <router-link class="btn btn-sm px-3 rounded-pill" :class="[isHome ? 'bg-white text-primary' : 'bg-primary text-white']" style="min-width: 130px;" to="/contacto">Contacto</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['isHome']
}
</script>