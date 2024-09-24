<template>
    <div>
        <div class="mx-auto max-w-2xl lg:max-w-none pt-12">
            <div class="relative h-50 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
                <img src="@/assets/banner-img-1.jpg" class="h-full w-full object-cover object-center">
            </div>
        </div>

        <div>
            <div class="">
                <div class="mx-auto max-w-2xl lg:max-w-7xl py-16">
                    <h2 class="text-2xl font-bold text-amber-950 text-left">Goods</h2>

                    <div class="mt-6">
                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
                            <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                                <input type="radio" name="size-choice" value="XS" class="sr-only">
                                <span>All</span>
                                <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>

                            <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                                <input type="radio" name="size-choice" value="XS" class="sr-only">
                                <span>Stationary</span>
                                <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>

                            <label class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                                <input type="radio" name="size-choice" value="XS" class="sr-only">
                                <span>Drawing Tools</span>
                                <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-4 gap-y-7 grid-cols-2 lg:grid-cols-3 mt-6">
                        <a href="#" class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
                        </a>
                        <a href="#" class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75">
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
                        </a>
                        <a href="#" class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75">
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
                        </a>
                        <a href="#" class="group">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodsPage"
}
</script>

<style scoped>

</style>