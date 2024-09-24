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
                                Order ID : <span class="text-indigo-600 font-medium">#10234987</span>
                            </p>
                            <p class="font-semibold text-base text-black">
                                Order Payment : <span class="text-gray-400 font-medium"> 18th march 2021</span>
                            </p>
                        </div>
                        <button
                            class="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">Track
                            Your Order
                        </button>
                    </div>

                    <div class="w-full px-3 min-[400px]:px-6">
                        <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                            <div class="img-box max-lg:w-full">
                                <img src="https://pagedone.io/asset/uploads/1701167607.png" alt="Premium Watch image" class="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover">
                            </div>
                            <div class="flex flex-row items-center w-full ">
                                <div class="flex justify-between items-start w-full">
                                    <div class="flex items-center">
                                        <div class="">
                                            <h2 class="font-semibold text-xl text-black text-left">
                                                Premium Quality Dust Watch
                                            </h2>
                                            <p class="font-normal text-lg text-gray-500 mb-3 text-left">
                                                By: Dust Studios
                                            </p>
                                            <div class="flex items-center ">
                                                <p class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                    Size: <span class="text-gray-500">100 ml</span>
                                                </p>
                                                <p class="font-medium text-base leading-7 text-black ">
                                                    Qty: <span class="text-gray-500">2</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lg:block">
                                        <p class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full bg-emerald-50 text-emerald-600">
                                            Ready for Delivery
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                            <div class="img-box max-lg:w-full">
                                <img src="https://pagedone.io/asset/uploads/1701167621.png" alt="Diamond Watch image" class="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover">
                            </div>
                            <div class="flex flex-row items-center w-full ">
                                <div class="flex justify-between items-start w-full">
                                    <div class="flex items-center">
                                        <div class="">
                                            <h2 class="font-semibold text-xl text-black text-left">
                                                Premium Quality Dust Watch
                                            </h2>
                                            <p class="font-normal text-lg text-gray-500 mb-3 text-left">
                                                By: Dust Studios
                                            </p>
                                            <div class="flex items-center ">
                                                <p class="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                                    Size: <span class="text-gray-500">100 ml</span>
                                                </p>
                                                <p class="font-medium text-base leading-7 text-black ">
                                                    Qty: <span class="text-gray-500">2</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lg:block">
                                        <p class="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full bg-emerald-50 text-emerald-600">
                                            Ready for Delivery
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                        <div class="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                            <button
                                class="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600">
                                <svg class="stroke-black transition-all duration-500 group-hover:stroke-indigo-600" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                     fill="none">
                                    <path d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5" stroke="" stroke-width="1.6"
                                          stroke-linecap="round" />
                                </svg>
                                Cancel Order
                            </button>
                            <p class="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">Paid using Credit Card <span class="text-gray-500">ending with 8822</span></p>
                        </div>
                        <p class="font-semibold text-lg text-black py-6">Total Price: <span class="text-indigo-600"> $200.00</span></p>
                    </div>

                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: "OrderSummaryPage"
}
</script>

<style scoped>

</style>