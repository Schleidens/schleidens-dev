<template>
    <div class="bg-raisin-black shadow mt-6 py-10 px-4 text-left">
        <h2 class="text-4xl font-black underline">myProjects();</h2>
        <div class="flex-raw md:flex">
            <div 
            v-for="{title, description, image, tags, github, demo} in projects" 
            class="bg-happy-black my-2 md:mx-2 p-2"
            >
                <div class="flex flex-col">
                    <h3 class="text-2xl">{{ title }}</h3>
                    <img :src="image" alt="">
                    <p class="text-xl">{{ description }}</p>
                    <p class="font-black text-pink">{{ tags }}</p>

                    <div class="font-black flex mt-4">
                        <a :href="github" target="blank" class="mr-4">Github</a>
                        <a :href="demo" target="blank">Live demo</a>
                    </div>
                </div>
        </div>
        </div>
    </div>
</template>

<script setup>
    const projects = ref([
        {
            title: "TRYBY",
            description: "Tryby is a jamstack demo project built with Gatsby/Contentful.",
            image: "https://res.cloudinary.com/schleidens/image/upload/v1674275026/tryby.png",
            tags: "Gatsby, Contentful, GraphQL, Gatsby cloud, SCSS",
            github: "https://github.com/Schleidens/tryby",
            demo: "https://tryby.gatsbyjs.io/"
        },
        {
            title: "Youtube redesign",
            description: "Remake of Youtube web version",
            image: "https://res.cloudinary.com/schleidens/image/upload/v1674274740/youtuberedesign.png",
            tags: "React, Vite, Tailwindcss, Netlify",
            github: "https://github.com/Schleidens/youtube-redesign",
            demo: "https://yt-schleidens.netlify.app/"
        },
        {
            title: "Instagram redesign",
            description: "Remake of Instagram web version",
            image: "https://res.cloudinary.com/schleidens/image/upload/v1674274739/instagramredesign.png",
            tags: "React, Vite, Tailwindcss, Netlify",
            github: "https://github.com/Schleidens/instagram-redesign",
            demo: "https://ig-schleidens.netlify.app/"
        }
    ])
</script>

<style scoped>
</style>