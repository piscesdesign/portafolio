<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-lg-3" :class="[isHome ? 'bg-tertiary' : 'bg-white']">
        <div class="container">
            <button type="button" class="btn btn-link ms-auto d-block d-lg-none" :class="[isHome ? 'text-white' : 'text-tertiary']" @click="open()">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                    <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"/>
                </svg>
            </button>
            <div class="collapse navbar-collapse">
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
                            <img src="@/assets/images/proyectos.png" class="img-fluid" v-else>
                        </router-link>
                    </li>
                    <li class="nav-item mx-2">
                        <router-link class="mx-3" to="/contacto">
                            <img src="@/assets/images/contacto-home.png" class="img-fluid" v-if="isHome">
                            <img src="@/assets/images/contacto.png" class="img-fluid" v-else>
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
    props: ['isHome'],
    methods: {
        open() {
            let offcanvas = document.getElementById('offcanvas');
            if(offcanvas && !offcanvas.classList.contains('show'))
            {
                offcanvas.classList.add('show');
            }

            let offcanvasBack = document.getElementById('offcanvas-backdrop');
            if(offcanvasBack && !offcanvasBack.classList.contains('show'))
            {
                offcanvasBack.classList.remove('d-none');
                setTimeout(() => offcanvasBack.classList.add('show'));
            }
            
        }
    }
}
</script>