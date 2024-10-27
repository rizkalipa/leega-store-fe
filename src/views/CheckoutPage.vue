<template>
    <div>
        <div class="mt-6">
            <h2 class="2xl font-bold text-amber-950 text-left" id="slide-over-title">Checkout</h2>
        </div>

        <div class="grid gap-x-4 lg:grid-cols-2 text-xl mt-6">
            <div class="">
                <div class="space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 divide-y divide-gray-300">
                    <p class="text-xl font-medium text-center">Order Summary</p>

                    <div v-if="!isLoading">
                        <div v-for="cart in carts" :key="cart.id" class="flex flex-col items-center bg-white sm:flex-row py-2">
                            <div class="rounded-md border mx-2 h-44 w-full">
                                <img class="h-full w-full object-cover object-center rounded-md" :src="cart.product.image" />
                            </div>

                            <div class="flex w-full flex-col px-4 py-4 text-left">
                                <p class="text-lg font-bold">{{ cart.product.name }}</p>
                                <p class="text-gray-500 text-sm mb-1">Qty. {{ cart.qty }}</p>
                                <p class="text-lg font-medium">Rp {{ cart.qty * cart.product.price }}</p>
                            </div>
                        </div>
                    </div>
                    <div v-else class="mt-6 p-6 bg-gray-200 flex justify-center rounded">
                        <LoadingComponent />
                    </div>
                </div>

<!--                <p class="mt-8 font-medium text-left">Delivery Method</p>-->
<!--                <form class="mt-5 grid gap-6">-->
<!--                    <div class="relative">-->
<!--                        <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />-->
<!--                        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>-->
<!--                        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">-->
<!--                            <img class="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />-->
<!--                            <div class="ml-5">-->
<!--                                <span class="mt-2 font-semibold">Fedex Delivery</span>-->
<!--                                <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>-->
<!--                            </div>-->
<!--                        </label>-->
<!--                    </div>-->
<!--                    <div class="relative">-->
<!--                        <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />-->
<!--                        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>-->
<!--                        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">-->
<!--                            <img class="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />-->
<!--                            <div class="ml-5">-->
<!--                                <span class="mt-2 font-semibold">Fedex Delivery</span>-->
<!--                                <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>-->
<!--                            </div>-->
<!--                        </label>-->
<!--                    </div>-->
<!--                </form>-->
            </div>

            <div class="mt-10 bg-gray-50 p-4 lg:mt-0 rounded-lg">
                <p class="text-xl font-medium">Payment Details</p>

                <div class="text-left">
                    <label for="email" class="mt-4 mb-2 block text-sm font-medium">Name</label>
                    <div class="relative">
                        <input type="text" id="email" name="email" value="LEEGA" readonly class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="YOUR FULL NAME" />
                    </div>

                    <label for="email" class="mt-4 mb-2 block text-sm font-medium">Class</label>
                    <div class="relative">
                        <input type="text" id="email" name="email" value="IPA - 1" readonly class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="YOUR CLASS" />
                    </div>

                    <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
                    <div class="relative">
                        <input type="text" id="email" name="email" value="leega_shop@example.com" readonly class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </div>
                    </div>

                    <!-- Total -->
                    <div class="mt-6 border-t border-b py-2">
                        <div class="flex items-center justify-between">
                            <p class="text-sm font-medium text-gray-900">Subtotal</p>
                            <p class="font-semibold text-gray-900">{{ totalPrice }}</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <p class="text-sm font-medium text-gray-900">Admin Fee</p>
                            <p class="font-semibold text-gray-900">{{ adminFee }}</p>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center justify-between">
                        <p class="text-sm font-medium text-gray-900">Total</p>
                        <p class="text-2xl font-semibold text-gray-900">Rp {{ totalPrice + adminFee }}</p>
                    </div>
                </div>

                <button
                    v-if="!isSubmitCheckout"
                    @click="checkoutOrder()"
                    class="mt-8 mb-4 w-full rounded-md bg-amber-600 px-6 py-3 text-base font-medium font-medium text-white"
                >
                    Place Order
                </button>
                <button
                    v-else
                    class="mt-8 mb-4 w-full rounded-md bg-amber-600 px-6 py-3 text-base font-medium font-medium text-white flex justify-center"
                    disabled
                >
                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-amber-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </button>
            </div>
        </div>

    </div>
</template>

<script>
import {getCarts} from "@/service/CartService";
import {checkoutOrder} from "@/service/OrderService";
import LoadingComponent from "@/components/LoadingComponent.vue";

export default {
    name: "CheckoutPage",
    components: {LoadingComponent},
    data() {
        return {
            carts: [],
            adminFee: 3000,
            isLoading: false,
            isSubmitCheckout: false
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
        async checkoutOrder() {
            this.isSubmitCheckout = true

            try {
                let params = {
                    user_id: 1,
                    total: this.totalPrice
                }
                let res = await checkoutOrder(params)
                let completeOrder = res.data.data

                this.$router.push({ name: 'order-summary', query: { order_id: completeOrder.id, date: completeOrder.created_at, total: completeOrder.total } })
            } catch (e) {
                this.isSubmitCheckout = false
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