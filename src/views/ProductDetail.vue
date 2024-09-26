<template>
    <div>
        <div class="lg:flex lg:items-center pt-12">
            <div class="lg:w-3/5 overflow-hidden rounded-lg">
                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
            </div>
            <div class="lg:w-2/5 mt-6 lg:mt-0 lg:ml-6">
                <div>
                    <div class="text-left">
                        <h2 class="text-4xl font-bold text-amber-950">Teh Botol Sosro</h2>
                        <p class="text-2xl">Rp. 25.000</p>

                        <p class="text-sm mt-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ad aspernatur blanditiis dicta dignissimos dolorum esse incidunt, nemo,
                            numquam quaerat quasi qui ratione repudiandae tempora unde ut! Et explicabo iste iusto.
                        </p>
                    </div>
                </div>

                <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-amber-950 px-8 py-3 text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {getProducts} from "@/service/ProductService";

export default {
    name: "FoodDetailPage",
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

    }
}
</script>

<style scoped>

</style>