<script lang="ts" setup>
const { data, refresh } = await useAsyncData("nuxt3test", () => {
  return $fetch(
    "https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0005-001?Authorization=rdec-key-123-45678-011121314"
  );
});

const onRefreshClick = async () => {
  // await refresh();
  refreshNuxtData("nuxt3test");
};
</script>

<template>
  <div>
    <div>useAsyncData</div>
    <button @click="onRefreshClick">Refresh</button>
    {{ data }}
  </div>
</template>

<style scoped></style>
