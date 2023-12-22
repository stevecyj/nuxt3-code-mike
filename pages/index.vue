<script setup lang="ts">
import Home from "@/components/Home.vue";
const { count, addCount } = useAddCount();
// let dataShow = ref<unknown>();

// const { data, error, refresh } = await useFetch(
//   "https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-002233-001",
//   {
//     server: true,
//   }
// );
// console.log("data =====> ", data);
// const handleClick = () => {
//   console.log("handleClick");
//   dataShow.value = data;
// };
</script>

<template>
  <div>Home: {{ count }}</div>
  <button @click="addCount">Click</button>
  <!-- <code>{{ dataShow }}</code>
  <button @click="handleClick">Click</button> -->
  <Home />
  <Box />
</template>

<style lang="scss" scoped></style>
