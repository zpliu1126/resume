<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 15:22:58
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-22 16:38:14
 * @@param: 
-->
<template>
   <el-avatar shape="circle" :size="300" :fit="fits" :src="url" />
</template>

<script setup>
import { reactive, toRefs } from "vue";
const state = reactive({
  fits: "cover",
  url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
});

const { fits, url } = toRefs(state);
</script>
<style scoped>

</style>