<template>
    <div id="app" class="relative overflow-hidden bg-custom">
        <div>
            <div class="lg:w-6/12 md:w-8/12 w-full mx-auto mb-32 text-amber-950 text-3xl tracking-wide px-5 lg:p-0">
                <div class="flex items-center justify-between border-b-2 border-amber-950">
                    <router-link to="/">
                        <div class="w-20 lg:w-1/5">
                            <img class="grayscale" src="@/assets/logo-nabila.png">
                        </div>
                    </router-link>

                    <router-link to="cart" class="flex items-center">
                        <p class="text-xl lg:text-2xl"><span><i class="fas fa-shopping-cart"></i></span></p>
                        <span class="rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 ml-1">
                            2
                        </span>
                    </router-link>
                </div>
                
                <router-view/>
            </div>
        </div>

        <div class="bg-custom p-5 text-center absolute bottom-0 w-full border-t-2 border-amber-950">
            <div class="lg:w-6/12 md:w-8/12 w-full mx-auto flex items-center justify-between text-amber-950">
                <p class="lg:text-lg text-sm">&copy; 2024 Leega Store</p>

                <div class="lg:text-xl text-sm">
                    <a href="https://www.instagram.com/majelis_jamiatussholihin/" target="_blank" class="mx-3">
                        <span><i class="fab fa-instagram"></i></span>
                    </a>
                    <a href="https://www.youtube.com/@hadrohjamiatussholihin5392" target="_blank" class="mx-3">
                        <span><i class="fab fa-youtube"></i></span>
                    </a>
                    <a href="https://www.tiktok.com/@hadrohjamiatussholihin" target="_blank" class="mx-3">
                        <span><i class="fab fa-tiktok"></i></span>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="postcss">
#app {
    font-family: Montserrat,sans;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100vh;
}

.font-amiri {
    font-family: Amiri;
}

body {
    background-size: cover;
    background-attachment: fixed;
    background-color: #FCFCFC;
}

html {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}

.container {
    @apply lg:w-6/12 md:w-8/12 w-full mx-auto my-16 mb-32 text-amber-950 text-3xl tracking-wide
}
</style>
