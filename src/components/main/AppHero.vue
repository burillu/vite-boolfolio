<template>
    <div class="hero ">
        <div class="hero-content h-100">
            <div class="container h-100">
                <div class="row align-content-center h-100">
                    <div class="col-12 col-md-8 col-lg-5 py-5">
                        <span class="text-white">Ciao ! Mi chiamo </span>
                       <h1 class="my-secondary mb-4 fw-bold"> Michele Ebau</h1>
                        <p class="my-secondary fw-light lh-lg">
                            Sono un Full-Stack Web Developer e Mobile App Developer con una passione per creare soluzioni digitali innovative e funzionali. <br>
                            Con anni di esperienza nel settore, mi dedico a trasformare idee in realtà attraverso la programmazione e lo sviluppo di applicazioni web e mobile.<br> 
                            Ogni progetto è per me una nuova sfida e una nuova opportunità per imparare e crescere.<br> 
                            Lavoro con precisione, cura dei dettagli e un occhio sempre attento alle ultime tendenze e tecnologie.
                        </p> 
                    </div>
                    
                </div>
                
            </div>
            
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
</style>