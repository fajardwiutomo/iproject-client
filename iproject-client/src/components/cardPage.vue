<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">title</div>
    <p class="text-gray-700 text-base">
      Description
    </p>
  </div>
  <h1>{{news.title}}</h1>
</div>
</template>


<script>
export default {
  props: ["news"],
    name: 'cardPage'
}
</script>