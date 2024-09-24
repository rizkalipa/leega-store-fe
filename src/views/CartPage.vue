<template>
    <div>
        <div class="h-full mt-6">
            <div class="flex-1">
                <h2 class="2xl font-bold text-amber-950 text-left" id="slide-over-title">Cart Item</h2>

                <div class="mt-8">
                    <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <li class="flex py-6">
                                <div class="w-1/4 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                                </div>

                                <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <a href="#">Throwback Hip Bag</a>
                                            </h3>
                                            <p class="ml-4">$90.00</p>
                                        </div>
                                        <p class="text-sm text-gray-500 text-left">Salmon</p>
                                    </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500">Qty 1</p>

                                        <div class="flex">
                                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="flex py-6">
                                <div class="w-1/4 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                                </div>

                                <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <a href="#">Throwback Hip Bag</a>
                                            </h3>
                                            <p class="ml-4">$90.00</p>
                                        </div>
                                        <p class="text-sm text-gray-500 text-left">Salmon</p>
                                    </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500">Qty 1</p>

                                        <div class="flex">
                                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="flex py-6">
                                <div class="w-1/4 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                                </div>

                                <div class="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <a href="#">Throwback Hip Bag</a>
                                            </h3>
                                            <p class="ml-4">$90.00</p>
                                        </div>
                                        <p class="text-sm text-gray-500 text-left">Salmon</p>
                                    </div>
                                    <div class="flex flex-1 items-end justify-between text-sm">
                                        <p class="text-gray-500">Qty 1</p>

                                        <div class="flex">
                                            <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="border-t border-amber-900 px-4 py-6 mt-12">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$262.00</p>
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
export default {
    name: "CartPage"
}
</script>

<style scoped>

</style>