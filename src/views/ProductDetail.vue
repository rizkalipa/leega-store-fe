<template>
    <div>
        <div v-if="product" class="lg:flex lg:items-center pt-12">
            <div class="h-80 lg:w-3/5 overflow-hidden rounded-lg">
                <img :src="product.image" class="h-full w-full object-cover object-center group-hover:opacity-75">
            </div>
            <div class="lg:w-2/5 mt-6 lg:mt-0 lg:ml-6">
                <div>
                    <div class="text-left">
                        <p class="text-xl text-amber-600">{{ product.type_product.name }}</p>
                        <h2 class="text-4xl font-bold text-amber-950 font-itim">{{ product.name }}</h2>
                        <div class="mt-3 flex items-center">
                            <label for="country" class="block text-sm font-medium leading-6 text-gray-900 mr-3">Qty</label>
                            <div class="">
                                <input v-model="qty" id="qty" name="qty" type="number" class="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-amber-600 text-sm indent-3" />
                            </div>
                        </div>

                        <p class="text-2xl font-semibold mt-5">Rp {{ totalPrice }}</p>
                    </div>
                </div>

                <button @click="addToCart(product.id)" type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-amber-950 px-8 py-3 text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                    Add to Cart
                </button>
            </div>
        </div>
        <div v-else class="pt-12">
            Product not found.
        </div>
    </div>
</template>

<script>
import {showProduct} from "@/service/ProductService";
import {saveToCart} from "@/service/CartService";
import router from "@/router";

export default {
    name: "FoodDetailPage",
    data() {
        return {
            product: null,
            qty: 1
        }
    },
    computed: {
        totalPrice() {
            return this.product.price * this.qty
        }
    },
    methods: {
        async getData() {
            try {
                let res = await showProduct(this.$route.params.id, {})
                this.product = res.data.data
            } catch (e) {
                console.log(e)
            }
        },
        async addToCart(productId) {
            try {
                let params = {
                    user_id: 1,
                    product_id: productId,
                    qty: this.qty
                }
                await saveToCart(params)
                router.push({ name: 'cart' })
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