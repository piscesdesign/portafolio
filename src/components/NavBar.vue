<template>
    <nav class="navbar navbar-expand-lg navbar-dark py-lg-3" :class="[isHome ? 'bg-tertiary' : 'bg-white border-bottom']">
        <div class="container">
            <button class="btn btn-link text-white border border-white ms-auto d-block d-lg-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-2">
                        <router-link class="mx-3" to="/acerca">
                            <img src="@/assets/images/acerca-home.png" class="img-fluid" v-if="isHome">
                            <img src="@/assets/images/acerca.png" class="img-fluid" v-else>
                        </router-link>
                    </li>
                    <li class="nav-item mx-2">
                        <router-link class="mx-3" to="/proyectos">
                            <img src="@/assets/images/proyectos-home.png" class="img-fluid" v-if="isHome">
                            <img src="@/assets/images/acerca.png" class="img-fluid" v-else>
                        </router-link>
                    </li>
                    <li class="nav-item mx-2">
                        <router-link class="mx-3" to="/contacto">
                            <img src="@/assets/images/contacto-home.png" class="img-fluid" v-if="isHome">
                            <img src="@/assets/images/acerca.png" class="img-fluid" v-else>
                        </router-link>
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