<script setup lang="ts">
import Home from "@/components/Home.vue";
const { data, error, refresh } = await useFetch(
  "https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-002233-001",
  {
    server: true,
  }
);
// if (error) refresh();
console.log("data =====> ", data);
</script>

<template>
  <div>Home</div>
  <code>{{ data }}</code>
  <Home />
  <Box />
</template>

<style lang="scss" scoped></style>
