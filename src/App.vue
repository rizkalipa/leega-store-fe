<template>
    <div id="app" class="relative overflow-hidden bg-custom">
        <div>
            <div class="lg:w-6/12 md:w-8/12 w-full mx-auto mb-24 text-amber-950 text-3xl tracking-wide px-5 lg:p-0">
                <div class="flex items-center justify-between border-b-2 border-amber-950">
                    <router-link to="/">
                        <div class="w-20 lg:w-1/5">
                            <img class="grayscale" src="@/assets/logo-nabila.png">
                        </div>
                    </router-link>

                    <div class="flex">
                        <router-link to="cart" class="flex items-center mr-4 cursor-pointer">
                            <p class="text-lg lg:text-1xl"><span><i class="fas fa-shopping-cart"></i></span></p>
<!--                        <span class="rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 ml-1">-->
<!--                            2-->
<!--                        </span>-->
                        </router-link>

                        <router-link to="order-history" class="flex items-center bg-amber-950 py-2 px-3 rounded-full text-white cursor-pointer">
                            <p class="text-sm lg:text-1xl"><span><i class="fas fa-receipt"></i></span></p>
                        </router-link>
                    </div>
                </div>
                
                <router-view/>
            </div>
        </div>

        <div class="bg-custom p-5 text-center absolute bottom-0 w-full border-t-2 border-amber-950">
            <div class="lg:w-6/12 md:w-8/12 w-full mx-auto flex items-center justify-between text-amber-950">
                <p class="lg:text-lg text-sm">&copy; 2024 Leega Store</p>
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
    @apply lg:w-6/12 md:w-8/12 w-full mx-auto my-16 mb-14 text-amber-950 text-3xl tracking-wide
}
</style>
