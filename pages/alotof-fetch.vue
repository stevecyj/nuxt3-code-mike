<script lang="ts" setup>
// 	https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0016-001?Authorization=rdec-key-123-45678-011121314
// https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=rdec-key-123-45678-011121314

const [{ data: earthQukeSmall }, { data: earthQuakeLarge }] = await Promise.all(
  [
    useFetch(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0016-001?Authorization=rdec-key-123-45678-011121314"
    ),
    useFetch(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=rdec-key-123-45678-011121314"
    ),
  ]
);
</script>

<template>
  <div>
    <div>earthQukeSmall</div>
    <pre>{{ earthQukeSmall }}</pre>
    <div>earthQuakeLarge</div>
    <pre>{{ earthQuakeLarge }}</pre>
  </div>
</template>

<style scoped></style>
