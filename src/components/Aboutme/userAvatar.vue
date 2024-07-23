<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 15:22:58
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-23 20:57:45
 * @@param: 
-->
<template>
  <el-avatar
    shape="circle"
    :size="pictureSize"
    :fit="state.fits"
    :src="state.url"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
const state = ref({
  fits: "cover",
  url: "/avatar.png",
});
let pictureSize = ref(300);
onMounted(() => {
  if (window.innerWidth < 600) {
    pictureSize.value = 200;
  } else {
    pictureSize.value = 320;
  }
});
</script>
<style scoped>
</style>