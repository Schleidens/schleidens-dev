<template>
  <div class="bg-raisin-black shadow mt-6 py-10 px-4 text-left">
    <header>
      <h2 class="text-4xl font-black underline">myBlogs();</h2>
      <span class="text-xl"
        >Exploring the world of programming and sharing my discoveries with
        you.</span
      >
    </header>
    <main class="mt-12">
      <div
        v-for="blog in blogs"
        :key="blog._id"
        class="flex flex-col bg-happy-black h-full mx-2 my-4 p-2"
      >
        <NuxtLink :to="blog._path">
          <h3 class="text-3xl underline">{{ blog.title }}</h3>
        </NuxtLink>
        <span class="italic text-xl mb-2">{{ blog.publishedDate }}</span>
        <div class="flex gap-2">
          <span
            v-for="tag in blog.tags"
            :key="tag"
            class="font-black text-pink"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
  const { data: blogs } = await useAsyncData('blogs', () =>
    queryContent('/blog').sort({ _id: -1, $numeric: true }).find()
  );
</script>
