<template>
    <div class="bg-raisin-black  shadow mt-6 py-10 px-4 text-left">
        <h2 class="text-4xl font-black underline">getInTouch();</h2>
        <p class="text-xl">Stay updated on my latest activities and connect with me on social media by following these links.</p>

        <div class="flex flex-wrap mt-2">
            <div 
            v-for="{title, link} in links" 
            class="font-black text-pink"
            >
                <a class="mr-4" :href="link" target="blank">{{ title }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>
    const links = ref([
        {
            title: "X (Twitter)",
            link: "https://twitter.com/schleidens_dev"
        },
        {
            title: "Linkedin",
            link: "https://www.linkedin.com/in/alectineschleidens/"
        },
        {
            title: "Instagram",
            link: "https://www.instagram.com/schleidens.dev/"
        },
        {
            title: "Showwcase",
            link: "https://www.showwcase.com/schleidens"
        },
        {
            title: "DEV.TO",
            link: "https://dev.to/schleidens"
        }
    ])
</script>

<style scoped>
</style>