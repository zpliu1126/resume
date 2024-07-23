<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 11:54:34
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-23 16:06:52
 * @@param: 
-->
<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>
<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}
.wrapper {
  line-height: 1.5;
  max-height: 100vh;
}

/* @media (min-width: 2400px) {
  #app {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    padding-left: calc(var(--section-gap) / 2);
  }
} */
</style>
