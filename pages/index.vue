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
const getApiData = async () => {
  const res = await fetch("/api/hello").then((res) => res.json());
  console.log(res);
};
</script>

<template>
  <div>Home: {{ count }}</div>
  <button @click="addCount">home add count</button>
  <div>Store: {{ store.count }}</div>
  <button @click="store.add">store add count</button>
  <div>get api data</div>
  <button @click="getApiData">get api data</button>
  <ClientOnly>
    <h2>{{ $hello("JOJO") }}</h2>
  </ClientOnly>
  <NuxtLink to="/user">user</NuxtLink>
  <h2 v-timeformat="1703276522231"></h2>
  <VDatePicker v-model="selectedDate" />
  <Home />
  <Box />
</template>

<style lang="scss" scoped></style>
