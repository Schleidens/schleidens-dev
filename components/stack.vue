<template>
  <div class="bg-pink text-raisin-black shadow mt-6 py-10 px-4 text-left">
    <h2 class="text-4xl font-black underline">myStack();</h2>
    <div class="text-xl">
      <p>
        I spend most of my energy building stuffs with
        <span class="font-black"
          >React.js | Node/Express | Postgres | typeORM | Prisma | Websocket |
          Firebase</span
        >
      </p>
      <div class="mt-2">
        <span class="text-2xl font-black"
          >My stack includes the following technologies:</span
        >

        <div
          class="mt-2"
          v-for="{ title, stack } in stacks"
        >
          <div class="font-black">
            {{ title }}
          </div>
          <div>
            {{ stack }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const stacks = ref([
    {
      title: 'Languages',
      stack: 'Python | Javascript | Typescript',
    },
    {
      title: 'Front End',
      stack:
        'Vue.js | React.js | Nuxt.js | Next.js | Gatsby | Vite | TailwindCss | Bootstrap | SCSS',
    },
    {
      title: 'Back End',
      stack:
        'Django | Nodejs | Express.js | Headless CMS | MongoDB | PostgreSQL | TypeORM | Prisma | Firebase | Supabase',
    },
  ]);
</script>

<style scoped></style>
