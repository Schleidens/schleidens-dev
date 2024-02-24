<template>
  <div class="bg-raisin-black shadow mt-6 py-10 px-4 text-left">
    <h2 class="text-4xl font-black underline">myProjects();</h2>
    <div class="md:flex">
      <div
        v-for="{ title, description, image, tags, github, demo } in projects"
        class="my-2 w-full md:w-1/3"
      >
        <div class="flex flex-col bg-happy-black h-full mx-2 p-2">
          <h3 class="text-2xl">{{ title }}</h3>
          <img
            :src="image"
            :alt="title"
          />
          <p class="text-xl">{{ description }}</p>
          <p class="font-black text-pink">{{ tags }}</p>

          <div class="font-black flex mt-4">
            <a
              v-if="github != ''"
              :href="github"
              target="blank"
              class="mr-4"
              >Github</a
            >
            <a
              v-if="demo != ''"
              :href="demo"
              target="blank"
              >Live demo</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <NuxtLink to="/projects">
        <div class="bg-raisin-black shadow p-2 mt-4 mr-1">
          See more projects
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const projects = ref([
    {
      title: 'We Just Chat',
      description:
        'A real-time chat application with user authentication, messaging functionality, and a user list feature.',
      image: 'https://ik.imagekit.io/nv2j2amfx9/we-just-chat.png',
      tags: 'React, Signal, SCSS, Boostrap5, Figma, Firebase, Nodejs, Express, Websocket, Postgres, Netlify, Heroku',
      github: '',
      demo: 'https://we-just-chat.netlify.app/',
    },
    {
      title: 'SuperBlaBlaLand',
      description:
        'Work as a full-stack developer, implementing amazing features with an incredible team.',
      image: 'https://ik.imagekit.io/nv2j2amfx9/superblablaland.png',
      tags: 'React, Node.js, Express, Prisma, PostgreSQL, websocket,  SCSS, tailwind, Figma',
      github: '',
      demo: 'https://www.superblablaland.com/',
    },
    {
      title: 'CLEEP (Google keep clone/redesign)',
      description:
        'Clone/Redesign of google keep note app with all features (Auth, CRUD, ....)',
      image: 'https://ik.imagekit.io/nv2j2amfx9/cleep-note.png',
      tags: 'React, SCSS, Firebase, Netlify',
      github: 'https://github.com/Schleidens/cleep',
      demo: 'https://cleep-note.netlify.app/',
    },
  ]);
</script>

<style scoped></style>
