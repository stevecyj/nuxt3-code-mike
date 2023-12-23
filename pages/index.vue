<script setup lang="ts">
import Home from "@/components/Home.vue";
const { count, addCount } = useAddCount();
const store = useHomeStore();
const selectedDate = ref(new Date());
/**
 * plugin
 * This code imports the `$hello` function from the `useNuxtApp` module.
 * The `$hello` function is used to perform some specific action in the Nuxt app.
 */
const { $hello } = useNuxtApp();
</script>

<template>
  <div>Home: {{ count }}</div>
  <button @click="addCount">home add count</button>
  <div>Store: {{ store.count }}</div>
  <button @click="store.add">store add count</button>
  <h2>{{ $hello("JOJO") }}</h2>
  <h2 v-timeformat="1703276522231"></h2>
  <VDatePicker v-model="selectedDate" />
  <Home />
  <Box />
</template>

<style lang="scss" scoped></style>
