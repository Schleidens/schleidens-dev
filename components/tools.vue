<template>
    <div class="bg-pink text-raisin-black shadow mt-6 py-10 px-4 text-left">
        <h2 class="text-4xl font-black underline">myTools();</h2>
        <div class="text-xl">
            <ul v-for="{title, description} in tools">
                <li>
                   <span class="font-black"> {{ title }}</span> : {{ description }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    const tools = ref([
        {
            title: "Git & Github",
            description: "Version control and code hosting."
        },
        {
            title: "Netlify & Vercel",
            description: "PaaS Hosting providers"
        },
        {
            title: "VsCode",
            description: "IDE (Theme: Github Theme, The unnamed)"
        },
        {
            title: "Insomnia",
            description: "REST client, postman alternative for API testing"
        },
        {
            title: "Kali Linux / ParrotOS",
            description: "Main OS"
        },
        {
            title: "Discord",
            description: "Community communication platform"
        }
    ])
</script>

<style scoped>
</style>