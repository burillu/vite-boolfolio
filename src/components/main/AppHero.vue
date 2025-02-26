<template>
    <div class="hero ">
        <div class="hero-content h-100">
            <div class="container h-100">
                <div class="row align-content-center h-100">
                    <div class="col-5 ">
                        <span class="text-white">Ciao ! Mi chiamo </span>
                       <h1 class="my-secondary mb-4 fw-light"> Michele Ebau</h1>
                        <p class="my-secondary fw-light lh-lg">
                            Sono un Web Developer Full-Stack e Mobile App Developer con una passione per creare soluzioni digitali innovative e funzionali. <br>
                            Con anni di esperienza nel settore, mi dedico a trasformare idee in realtà attraverso la programmazione e lo sviluppo di applicazioni web e mobile.<br> 
                            Ogni progetto è per me una nuova sfida e una nuova opportunità per imparare e crescere.<br> 
                            Lavoro con precisione, cura dei dettagli e un occhio sempre attento alle ultime tendenze e tecnologie.
                        </p> 
                    </div>
                    
                </div>
                
            </div>
            <svg class="svg-divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path d="M0 0v4s250 96 500 96 500-96 500-96V0H0Z" fill="#FFF" fill-opacity="1"></path></svg>
        </div>

    </div>
</template>
<script>
export default {
    name: 'AppHero',
    props: {
        pageTitle: String
    },
    data() {
        return {
            message: 'tu sorella',

        }
    }
}
</script>
<style lang="scss">
@use '../../assets/partials/variables' as *;
.hero {
  height: 90vh;
  background-image: url('https://as2.ftcdn.net/v2/jpg/05/87/70/63/1000_F_587706354_EkvX6LkLdcUg1G9E8AC0xAzkHhc8X5Dx.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20%;
}

.hero-content {
  background-color: $my-dark-blue;
  opacity: 90%;
  position: relative;
}

</style>
<style lang="css">
.svg-divider{
    transform: rotateX(180deg);
    position:absolute;
    bottom: 0;
    right: 0;
    left: 0;
    color: white;
    opacity: 1;
}
</style>