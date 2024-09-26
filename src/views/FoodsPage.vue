<template>
    <div>
        <div class="mx-auto max-w-2xl lg:max-w-none pt-12">
            <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-40 before:z-10 before:rounded-lg">
                <img src="@/assets/categories-foods.jpg" class="absolute inset-0 w-full h-full object-cover rounded-lg" />

                <div class="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 class="sm:text-4xl font-bold mb-6 drop-shadow-xl">
                        <span class="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent text-5xl">
                            Foods.
                        </span>
                    </h2>
                </div>
            </div>
        </div>

        <div>
            <div class="">
                <div class="mx-auto max-w-2xl lg:max-w-7xl pt-12">
                    <div class="">
                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
                            <ButtonFilter title="All" />
                            <ButtonFilter title="Heavy Food" />
                            <ButtonFilter title="Snack" />
                            <ButtonFilter title="Drink" />
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-4 gap-y-7 grid-cols-2 lg:grid-cols-3 mt-12">
<!--                        <a href="#" class="group">-->
<!--                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">-->
<!--                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75">-->
<!--                            </div>-->
<!--                            <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>-->
<!--                            <p class="mt-1 text-lg font-medium text-gray-900">$35</p>-->
<!--                        </a>-->

                        <div v-for="product in products" :key="product.id" class="group relative">
                            <router-link :to="`foods/${product.id}`">
                                <div class="relative h-40 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img :src="product.image" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                                </div>
                                <div class="mt-4 text-left">
                                    <div class="mb-2">
                                        <p class="text-xs text-amber-700">{{ product.type_product.name }}</p>
                                        <h3 class="text-xl text-amber-900 font-itim" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">
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
                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getProducts} from "@/service/ProductService";
import ButtonFilter from "@/components/ButtonFilter.vue";

export default {
    name: "FoodsPage",
    components: {ButtonFilter},
    data() {
        return {
            products: []
        }
    },
    computed: {

    },
    methods: {
        async getData() {
            try {
                let res = await getProducts({ type: 1 })
                this.products = res.data.data
                console.log(res)
            } catch (e) {
                console.log(e)
            }
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style scoped>

</style>