<template>
    <div>
        <div class="mt-6">
            <h2 class="text-1xl font-bold text-amber-950 text-left" id="slide-over-title">History Order</h2>
        </div>

        <section class="relative">
            <div v-for="order in orders" :key="order.id" class="w-full max-w-7xl mx-auto">
                <div class="main-box border border-gray-200 rounded-xl mt-6 max-w-xl max-lg:mx-auto lg:max-w-full bg-white">
                    <div class="flex flex-col lg:flex-row lg:items-center justify-between border-b border-gray-200 p-4">
                        <div class="text-left">
                            <p class="font-semibold text-base text-black">
                                Order ID : <span class="text-amber-600 font-medium">#0{{ order.id }}</span>
                            </p>
                            <p class="font-semibold text-base text-black mt-3">
                                Date : <span class="text-gray-400 font-medium"> 18th march 2021</span>
                            </p>
                            <p class="font-semibold text-base text-black mt-3">
                                Status :
                                <span v-if="trim(order.status) == 'N'" class="font-medium bg-amber-500 px-3 py-1 rounded-full text-white">Created</span>
                                <span v-else-if="order.status == 'R'" class="font-medium bg-green-500 px-3 py-1 rounded-full text-white">Ready to Pick</span>
                            </p>
                        </div>
                    </div>

                    <div v-for="orderDetail in order.order_details" :key="orderDetail.product_id" class="w-full px-3 min-[400px]:px-6">
                        <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                            <div class="img-box max-lg:w-full">
                                <img :src="orderDetail.product.image" class="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover">
                            </div>
                            <div class="flex flex-row items-center w-full ">
                                <div class="flex justify-between items-start w-full">
                                    <div class="flex items-center">
                                        <div class="">
                                            <h2 class="font-semibold text-xl text-black text-left">
                                                {{ orderDetail.product.name }}
                                            </h2>
                                            <p class="font-normal text-sm text-gray-500 mb-3 text-left">
                                                Price : Rp {{ orderDetail.product.price }}
                                            </p>
                                            <div class="flex items-center ">
                                                <p class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                    Qty : <span class="text-gray-500">{{ orderDetail.qty }}</span>
                                                </p>
                                                <p class="font-medium text-base leading-7 text-black ">
                                                    Sub Total : <span class="text-gray-500">Rp {{ orderDetail.sub_total }}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                        <p class="font-semibold text-lg text-black py-6">Total : <span class="text-amber-950">Rp {{ order.total }}</span></p>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {getOrder} from "@/service/OrderService";
import {trim} from "core-js/internals/string-trim";

export default {
    name: "OrderHistoryPage",
    data() {
        return {
            orders: [],
        }
    },
    computed: {
        totalPrice() {
            return 0
        }
    },
    methods: {
        trim,
        async getData() {
            try {
                let res = await getOrder({ user_id: 1 })
                this.orders = res.data.data
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