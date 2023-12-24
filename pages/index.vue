<script setup lang="ts">
import Home from "@/components/Home.vue";
const { count, addCount } = useAddCount();
const store = useHomeStore();
const selectedDate = ref(new Date());
const { $hello } = useNuxtApp();

const dataShow = reactive({
  data: "",
});

const { data, refresh } = await useFetch(
  // "https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0005-001?Authorization=rdec-key-123-45678-011121314",
  "https://api.artic.edu/api/v1/artworks",
  {
    server: true,
    onRequest({ request, options }) {
      // 設置 request headers
      // options.headers = options.headers || {};
      options.headers = { authorization: "rdec-key-123-45678-011121314" };
      console.log("options =====> ", options);
    },
    onResponse({ request, response, options }) {
      // 處理回傳資料
      return response._data;
    },
  }
);

const getDataFromUseFetch = async () => {
  await refresh();
};

const getApiData = async () => {
  const res = await fetch("/api/hello").then((res) => res.json());
  console.log(res);
};
</script>

<template>
  <br />
  <button @click="getDataFromUseFetch">refresh data</button>
  <div>Home: {{ count }}</div>
  <button @click="addCount">home add count</button>
  <div>Store: {{ store.count }}</div>
  <button @click="store.add">store add count</button>
  <div>get api data</div>
  <button @click="getApiData">get api data</button>
  <ClientOnly>
    <h2>{{ $hello("JOJO") }}</h2>
  </ClientOnly>
  <NuxtLink to="/user">user</NuxtLink> |
  <NuxtLink to="/async-data">async data</NuxtLink> |
  <NuxtLink to="/alotof-fetch">a lot of fetch</NuxtLink>
  <h2 v-timeformat="1703276522231"></h2>
  <VDatePicker v-model="selectedDate" />
  <div>data</div>
  <pre>{{ data }}</pre>
  <Home />
  <Box />
</template>

<style lang="scss" scoped></style>
