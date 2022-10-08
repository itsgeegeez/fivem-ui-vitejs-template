<script setup lang="ts">
import { onMounted } from "vue";
import { fetchNui } from "./utils/fetchNui";
import { Hello } from "@types";

onMounted(async () => {
  console.log("ping | data sent: hello");
  fetchNui<string, Hello>("ping", "hello").then((d) => {
    console.log("pong | data received: ", d);
  });
});
</script>

<template></template>

<style></style>
