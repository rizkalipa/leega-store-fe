<template>
    <div>
        <div class="mx-auto max-w-2xl lg:max-w-none pt-12">
            <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10 before:rounded-lg">
                <img src="@/assets/banner-img-1.jpg" class="absolute inset-0 w-full h-full object-cover rounded-lg" />

                <div class="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-end items-end text-center text-white p-6">
                    <h2 class="sm:text-4xl font-bold mb-6">
                        <span class="text-3xl mr-2 font-itim">Hi,</span>
                        <span class="bg-gradient-to-r from-amber-100 to-rose-400 bg-clip-text text-transparent font-itim text-5xl">Leega.</span>
                    </h2>

                    <p class="sm:text-lg text-base text-center text-gray-200 font-medium">Happy shopping with us everyday! &#9996;</p>
                </div>
            </div>
        </div>

        <div class="">
            <div class="mx-auto max-w-7xl">
                <div class="mx-auto max-w-2xl py-16 lg:max-w-none">
                    <h2 class="text-2xl font-bold text-amber-950 text-left">Categories</h2>

                    <div class="mt-6 grid grid-cols-2 gap-x-4 lg:grid lg:grid-cols-2 lg:gap-x-4">
                        <router-link to="foods">
                            <div class="group relative">
                                <div class="relative h-40 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img src="@/assets/categories-foods.jpg" class="h-full w-full object-cover object-center">
                                </div>
                                <h3 class="mt-6 text-sm text-amber-700">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        Foods
                                    </a>
                                </h3>
                                <p class="text-base font-semibold text-amber-900 font-itim">Food, Drink and Snacks</p>
                            </div>
                        </router-link>
                        <router-link to="goods">
                            <div class="group relative">
                                <div class="relative h-40 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img src="@/assets/categories-goods.jpg" class="h-full w-full object-cover object-center">
                                </div>
                                <h3 class="mt-6 text-sm text-amber-700">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        Goods
                                    </a>
                                </h3>
                                <p class="text-base font-semibold text-amber-900 font-itim">Stationary and Drawing Tools</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>


        <div class="">
            <div class="mx-auto max-w-2xl lg:max-w-7xl pb-12 lg:pb-12">
                <h2 class="text-2xl font-bold tracking-tight text-amber-950 text-left">Best Seller</h2>

                <div v-if="!isLoading" class="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-2 lg:grid-cols-4">
                    <div v-for="product in productBestSeller" :key="product.id" class="group relative">
                        <div class="relative h-40 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <img :src="product.image" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                        </div>
                        <div class="mt-4 text-left">
                            <div class="mb-2">
                                <p class="text-xs text-amber-700">{{ product.type_product.name }}</p>
                                <h3 class="text-xl text-amber-900 font-itim">
                                    <a href="#">
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        {{ product.name }}
                                    </a>
                                </h3>
                            </div>
                            <div class="bg-gradient-to-r from-amber-500 to-pink-500 px-2 py-1 rounded-b-lg">
                                <p class="text-sm text-white font-bold text-gray-900 ">Rp 50.000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="mt-6 p-6 bg-gray-200 flex justify-center rounded">
                    <LoadingComponent />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getBestSellerProduct} from "@/service/ProductService";
import LoadingComponent from "@/components/LoadingComponent.vue";

export default {
    name: "HomePage",
    components: {LoadingComponent},
    data() {
        return {
            productBestSeller: {},
            isLoading: false
        }
    },
    computed: {

    },
    methods: {
        async getDataBestSeller() {
            this.isLoading = true

            try {
                let res = await getBestSellerProduct({})
                this.productBestSeller = res.data.data
            } catch (e) {
                console.log(e)
            }

            this.isLoading = false
        }
    },
    mounted() {
        this.getDataBestSeller()
    }
}
</script>

<style scoped>

</style>