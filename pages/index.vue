<script setup lang="ts">
// import { ref } from "vue";
import Home from "@/components/Home.vue";
let dataShow = ref<unknown>();

const { data, error, refresh } = await useFetch(
  "https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-002233-001",
  {
    server: true,
  }
);
console.log("data =====> ", data);
const handleClick = () => {
  console.log("handleClick");
  dataShow.value = data;
};
</script>

<template>
  <div>Home</div>
  <code>{{ dataShow }}</code>
  <button @click="handleClick">Click</button>
  <Home />
  <Box />
</template>

<style lang="scss" scoped></style>
