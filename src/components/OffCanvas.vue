<template>
    <div>
        <div class="offcanvas offcanvas-end" :class="[!isHome ? 'bg-tertiary' : '']" id="offcanvas">
            <div class="offcanvas-header">
                <button type="button" class="btn-close ms-auto"  aria-label="Close" @click="close()"></button>
            </div>
            <div class="offcanvas-body">
                <div class="h-100 d-flex justify-content-center align-items-center">
                    <ul class="list-unstyled w-75">
                        <li class="mb-2">
                            <router-link to="/acerca" class="d-flex justify-content-center p-3">
                                <img src="@/assets/images/acerca-home.png" class="img-fluid" v-if="isHome">
                                <img src="@/assets/images/acerca.png" class="img-fluid" v-else>
                            </router-link>
                        </li>
                        <li class="mb-2">
                            <router-link to="/proyectos" class="d-flex justify-content-center p-3">
                                <img src="@/assets/images/proyectos-home.png" class="img-fluid" v-if="isHome">
                                <img src="@/assets/images/proyectos.png" class="img-fluid" v-else>
                            </router-link>
                        </li>
                        <li class="mb-2">
                            <router-link to="/contacto" class="d-flex justify-content-center p-3">
                                <img src="@/assets/images/contacto-home.png" class="img-fluid" v-if="isHome">
                                <img src="@/assets/images/contacto.png" class="img-fluid" v-else>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="offcanvas-backdrop fade d-none" id="offcanvas-backdrop" @click="close()"></div>
    </div>
</template>

<script>
export default {
    name: 'OffCanvas',
    data() {
        return {
            isHome: false
        }
    },
    methods: {
        close() {
            let offcanvas = document.getElementById('offcanvas');
            if(offcanvas && offcanvas.classList.contains('show'))
            {
                offcanvas.classList.add('hiding');
                setTimeout(() => {
                    offcanvas.classList.remove('hiding');
                    offcanvas.classList.remove('show');
                }, 900)
            }

            let offcanvasBack = document.getElementById('offcanvas-backdrop');
            if(offcanvasBack && offcanvasBack.classList.contains('show'))
            {
                offcanvasBack.classList.remove('show');
                setTimeout(() => offcanvasBack.classList.add('d-none'), 900);
            }
            
        }
    },
    watch:{
        $route(to, from){
            this.close();
            this.isHome = to.name == 'home';
        }
    } 
}
</script>