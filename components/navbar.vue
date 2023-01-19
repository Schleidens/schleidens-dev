<template>
    <div class="sticky top-2 bg-jaune shadow text-raisin-black text-2xl px-2 py-1 flex justify-between w-full">
       <div>
        <h1 class="font-bold">
           <NuxtLink to="/">
             Schleidens.Dev
           </NuxtLink>
        </h1>
       </div>

        <div>
            <ul class="flex">
            <li class="mr-1.5 hover:underline decoration-solid text-gray-700 line-through pointer-events-none">
                <NuxtLink to="/blog">
                    Blog
                </NuxtLink>
            </li>
            <li class="ml-1.5 hover:underline decoration-solid">
                <a href="https://github.com/Schleidens" target="blank">
                    Github
                </a>
            </li>
        </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
</style>