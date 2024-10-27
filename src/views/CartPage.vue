<template>
    <div>
        <div class="h-full mt-6">
            <div class="flex-1">
                <h2 class="2xl font-bold text-amber-950 text-left" id="slide-over-title">Cart Item</h2>

                <div v-if="!isLoading" class="mt-8">
                    <div v-if="carts.length" class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <li v-for="cart in carts" :key="cart.id" class="flex py-6">
                                <div class="h-32 lg:h-44 w-1/4 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img :src="cart.product.image" class="h-full w-full object-cover object-center">
                                </div>

                                <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <p class="text-sm text-gray-500 text-left">{{ cart.product.type_product.name }}</p>
                                        <div class="flex justify-between text-base lg:text-xl font-medium text-amber-900">
                                            <h3>
                                                <a href="#">{{ cart.product.name }}</a>
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="flex">
                                        <p class="text-amber-900 font-bold text-base text-left border border-amber-900 px-2 rounded mt-3">Qty {{ cart.qty }}</p>
                                    </div>

                                    <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-amber-900 text-lg text-left font-bold">Rp {{ parseInt(cart.qty) * parseInt(cart.product.price)  }}</p>

                                        <div class="flex">
                                            <button @click="deleteCart(cart.id)" type="button" class="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                                <span><i class="fas fa-trash-alt"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div v-else>
                        <p class="text-xl">
                            No items in cart.
                        </p>
                    </div>
                </div>
                <div v-else class="mt-6 p-6 bg-gray-200 flex justify-center rounded">
                    <LoadingComponent />
                </div>
            </div>

            <div class="border-t border-amber-900 px-4 py-6 mt-12">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>Rp {{ totalPrice }}</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div class="mt-6">
                    <router-link to="checkout" class="flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700">
                        Checkout
                    </router-link>
                </div>
                <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        or
                        <button type="button" class="font-medium text-amber-600 hover:text-amber-500">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getCarts, deleteCart} from "@/service/CartService";
import LoadingComponent from "@/components/LoadingComponent.vue";

export default {
    name: "CartPage",
    components: {LoadingComponent},
    data() {
        return {
            carts: [],
            isLoading: false
        }
    },
    computed: {
        totalPrice() {
            let total = 0

            this.carts.forEach(item => {
                total += parseInt(item.product.price) * parseInt(item.qty)
            })

            return total
        }
    },
    methods: {
        async getData() {
            this.isLoading = true

            try {
                let res = await getCarts({ user_id: 1 })
                this.carts = res.data.data
                console.log(res)
            } catch (e) {
                console.log(e)
            }

            this.isLoading = false
        },
        async deleteCart(cartId) {
            this.isLoading = true

            try {
                let params = {
                    user_id: 1,
                    cart_id: cartId
                }
                await deleteCart(params)
                this.getData()
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