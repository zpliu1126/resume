<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 15:22:58
 * @LastEditors: zpliu
 * @LastEditTime: 2025-01-16 17:39:07
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
  url: "https://s21.ax1x.com/2025/01/16/pEF64R1.jpg",
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