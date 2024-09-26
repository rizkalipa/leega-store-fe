<template>
    <div class="cursor-pointer flex items-center justify-center">
        <div class="h-12 w-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
            <div class="flex h-full w-full items-center justify-center rounded-full bg-gray-900 back">
                <input type="radio" name="size-choice" value="XS" class="sr-only">
                <span class="text-sm text-white font-bold">{{ title }}</span>
                <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ButtonFilter",
    props: {
        title: String
    }
}
</script>

<style scoped>

</style>