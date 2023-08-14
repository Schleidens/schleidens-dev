<template>
  <div>
    <navbar />
    <div class="mt-6 mb-6">
      <NuxtPage />
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
  const title = ref("Schleidens.Dev - Fullstack Software Developer")
  const description = ref("I'm an experienced Full Stack Software Developer with 5+ years of experience, driven by a deep passion for creating and delivering cutting-edge web solutions.")
  const image = ref("https://res.cloudinary.com/schleidens/image/upload/v1674236203/cover_image_1schleidens_u2wspj.png")

  useHead({
  link: [{ rel: 'icon', type: 'image/png', href: 'favicon.png' }],
  title: title,
  meta: [
    { name: 'description', content: description },
    { property: 'og:title', content: title},
    { property: 'og:description', content: description},
    { property: 'og:image', content: image},
    { name: 'twitter:card', content: 'summary'},
    { name: 'twitter:site', content: '@Schleidens_dev'},
    { name: 'twitter:title', content: title},
    { name: 'twitter:description', content: description},
    { name: 'twitter:image', content: image}
  ],
})
</script>
