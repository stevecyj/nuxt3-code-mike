<script lang="ts" setup>
const { data, refresh } = await useAsyncData("nuxt3test", () => {
  return $fetch("https://api.artic.edu/api/v1/artworks");
});

const onRefreshClick = async () => {
  // await refresh();
  refreshNuxtData("nuxt3test");
};
</script>

<template>
  <div>
    <button @click="onRefreshClick">Refresh</button>
    <div>useAsyncData</div>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped></style>
