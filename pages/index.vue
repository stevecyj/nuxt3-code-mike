<script setup lang="ts">
import Home from "@/components/Home.vue";
const { count, addCount } = useAddCount();
const store = useHomeStore();
</script>

<template>
  <div>Home: {{ count }}</div>
  <button @click="addCount">home add count</button>
  <div>Store: {{ store.count }}</div>
  <button @click="store.add">store add count</button>
  <Home />
  <Box />
</template>

<style lang="scss" scoped></style>
