<template>
  <div class="bg-raisin-black shadow mt-6 py-10 px-4 text-left">
    <h2 class="text-4xl font-black underline">myProjects();</h2>
    <div class="md:flex flex-wrap">
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
  </div>
</template>

<script setup>
  const projects = ref([
    {
      title: 'CLEEP (Google keep clone/redesign)',
      description:
        'Clone/Redesign of google keep note app with all features (Auth, CRUD, ....)',
      image: 'https://ik.imagekit.io/nv2j2amfx9/cleep-note.png',
      tags: 'React, SCSS, Firebase, Netlify',
      github: 'https://github.com/Schleidens/cleep',
      demo: 'https://cleep-note.netlify.app/',
    },
    {
      title: 'TIGINI',
      description:
        'This blog was created as a learning project to explore the various features and capabilities of Django',
      image: 'https://ik.imagekit.io/nv2j2amfx9/tigini1.png',
      tags: 'Django, Bootstrap5, Pythonanywhere, Pillow',
      github: 'https://github.com/Schleidens/tigini',
      demo: 'https://spideralpha8.pythonanywhere.com/',
    },
    {
      title: 'TRYBY',
      description:
        'Tryby is a jamstack demo project built with Gatsby/Contentful.',
      image:
        'https://res.cloudinary.com/schleidens/image/upload/v1674275026/tryby.png',
      tags: 'Gatsby, Contentful, GraphQL, Gatsby cloud, SCSS',
      github: 'https://github.com/Schleidens/tryby',
      demo: 'https://tryby.gatsbyjs.io/',
    },
    {
      title: 'Youtube redesign',
      description: 'Remake of Youtube web version',
      image:
        'https://res.cloudinary.com/schleidens/image/upload/v1674274740/youtuberedesign.png',
      tags: 'React, Vite, Tailwindcss, Netlify',
      github: 'https://github.com/Schleidens/youtube-redesign',
      demo: 'https://yt-schleidens.netlify.app/',
    },
    {
      title: 'Instagram redesign',
      description: 'Remake of Instagram web version',
      image:
        'https://res.cloudinary.com/schleidens/image/upload/v1674274739/instagramredesign.png',
      tags: 'React, Vite, Tailwindcss, Netlify',
      github: 'https://github.com/Schleidens/instagram-redesign',
      demo: 'https://ig-schleidens.netlify.app/',
    },
  ]);
</script>

<style scoped></style>
