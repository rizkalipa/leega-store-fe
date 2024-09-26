<template>
    <div>
        <div class="mt-6">
            <h2 class="2xl font-bold text-amber-950 text-left" id="slide-over-title">Checkout</h2>
        </div>

        <div class="grid gap-x-4 lg:grid-cols-2 text-xl mt-6">
            <div class="">
                <div class="space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 divide-y divide-gray-300">
                    <p class="text-xl font-medium text-center">Order Summary</p>

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
                        <input type="text" id="email" name="email" value="NABILA" readonly class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="YOUR FULL NAME" />
                    </div>

                    <label for="email" class="mt-4 mb-2 block text-sm font-medium">Class</label>
                    <div class="relative">
                        <input type="text" id="email" name="email" value="IPA - 1" readonly class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="YOUR CLASS" />
                    </div>

                    <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
                    <div class="relative">
                        <input type="text" id="email" name="email" value="nabila@example.com" readonly class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
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

                <button @click="checkoutOrder()" class="mt-8 mb-4 w-full rounded-md bg-amber-600 px-6 py-3 text-base font-medium font-medium text-white">Place Order</button>
            </div>
        </div>

    </div>
</template>

<script>
import {getCarts} from "@/service/CartService";
import {checkoutOrder} from "@/service/OrderService";

export default {
    name: "CheckoutPage",
    data() {
        return {
            carts: [],
            adminFee: 3000
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
            try {
                let res = await getCarts({ user_id: 1 })
                this.carts = res.data.data
                console.log(res)
            } catch (e) {
                console.log(e)
            }
        },
        async checkoutOrder() {
            try {
                let params = {
                    user_id: 1,
                    total: this.totalPrice
                }
                let res = await checkoutOrder(params)
                let completeOrder = res.data.data

                this.$router.push({ name: 'order-summary', query: { order_id: completeOrder.id, date: completeOrder.created_at, total: completeOrder.total } })
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