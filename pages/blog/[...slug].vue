<template>
  <div class="mt-8 md:mt-6 py-8 px-2 md:px-36 bg-raisin-black shadow">
    <ContentRenderer
      :value="blog"
      class="w-full max-w-full prose prose-invert prose-h1:text-6xl prose-h1:text-jaune prose-p:text-2xl prose-p:text-justify"
    />
  </div>
</template>

<script setup>
  const { path } = useRoute();
  const { data: blog } = await useAsyncData('blogPost', () =>
    queryContent().where({ _path: path }).findOne()
  );

  //   SEO META

  const title = 'Schleidens Blog' + ' | ' + blog.value.title;
  const description = blog.value.description;
  const image = blog.value.cover
    ? blog.value.cover
    : 'https://res.cloudinary.com/schleidens/image/upload/v1674236203/cover_image_1schleidens_u2wspj.png';

  useHead({
    link: [{ rel: 'icon', type: 'image/png', href: 'favicon.png' }],
    title: title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@Schleidens_dev' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
  });
</script>
