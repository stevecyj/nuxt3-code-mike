<script setup lang="ts">
import Home from "@/components/Home.vue";
const { data, error, refresh } = await useFetch("VsWeb/api/GetLstDicCinema");
if (error) await refresh();
console.log(data);
</script>

<template>
  <div>Home</div>
  <code>{{ data }}</code>
  <Home />
  <Box />
</template>

<style lang="scss" scoped></style>
