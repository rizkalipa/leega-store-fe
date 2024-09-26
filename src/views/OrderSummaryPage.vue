<template>
    <div>
        <section class="py-12 relative">
            <div class="w-full max-w-7xl mx-auto">
                <h2 class="font-manrope font-bold text-4xl leading-10 text-black text-center">
                    Order Success!
                </h2>
                <p class="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
                    Thanks for your order.
                </p>

                <div class="main-box border border-gray-200 rounded-xl mt-6 max-w-xl max-lg:mx-auto lg:max-w-full bg-white">
                    <div class="flex flex-col lg:flex-row lg:items-center justify-between border-b border-gray-200 p-4">
                        <div class="text-left">
                            <p class="font-semibold text-base text-black">
                                Order ID : <span class="text-amber-600 font-medium">#0{{ orderId }}</span>
                            </p>
                            <p class="font-semibold text-base text-black">
                                Date : <span class="text-gray-400 font-medium">{{ createdAt }}</span>
                            </p>
                        </div>
                        <router-link to="order-history"
                            class="rounded-full py-3 px-7 my-5 shadow-md font-semibold text-sm leading-7 text-white bg-amber-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-amber-700 hover:shadow-amber-400">
                            Check Status Order
                        </router-link>
                    </div>

                    <div class="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                        <p class="font-semibold text-lg text-black py-6">Total Price: <span class="text-amber-950">Rp {{ total }}</span></p>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "OrderSummaryPage",
    data() {
        return {
            orderId: '0',
            createdAt: '',
            total: 0,
        }
    },
    mounted() {
        this.orderId = this.$route.query.order_id
        this.createdAt = this.$route.query.date
        this.total = this.$route.query.total
    }
}
</script>

<style scoped>

</style>