<template>
    <div>
        <div class="offcanvas offcanvas-end" :class="[!isHome ? 'bg-tertiary' : '']" id="offcanvas">
            <div class="offcanvas-header">
                <button type="button" class="btn-close ms-auto"  aria-label="Close" @click="toggle()"></button>
            </div>
            <div class="offcanvas-body">
                <div class="h-100 d-flex align-items-center">
                    <ul class="list-unstyled w-100">
                        <li class="w-100 mb-2">
                            <router-link to="/acerca" class="d-flex justify-content-center p-3">
                                <img src="@/assets/images/acerca-home.png" class="img-fluid" v-if="isHome">
                                <img src="@/assets/images/acerca.png" class="img-fluid" v-else>
                            </router-link>
                        </li>
                        <li class="w-100 mb-2">
                            <router-link to="/proyectos" class="d-flex justify-content-center p-3">
                                <img src="@/assets/images/proyectos-home.png" class="img-fluid" v-if="isHome">
                                <img src="@/assets/images/proyectos.png" class="img-fluid" v-else>
                            </router-link>
                        </li>
                        <li class="w-100 mb-2">
                            <router-link to="/contacto" class="d-flex justify-content-center p-3">
                                <img src="@/assets/images/contacto-home.png" class="img-fluid" v-if="isHome">
                                <img src="@/assets/images/contacto.png" class="img-fluid" v-else>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OffCanvas',
    data() {
        return {
            isHome: false,
            showed: false
        }
    },
    methods: {
        toggle() {
            let offcanvas = document.getElementById('offcanvas');
            if(offcanvas)
            {
                offcanvas.classList.toggle('show');
            }

            let offcanvasBack = document.getElementById('offcanvas-backdrop');
            if(offcanvasBack)
            {
                offcanvasBack.classList.toggle('show');
                offcanvasBack.classList.toggle('d-none');
            }
            
        }
    }
}
</script>