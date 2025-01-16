<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-23 16:11:53
 * @LastEditors: zpliu
 * @LastEditTime: 2025-01-16 20:30:51
 * @@param: 
-->
<template>
  <!-- <el-affix :offset="120">
    <el-button type="primary">Offset top 120px</el-button>
  </el-affix> -->
  <div id="header">
    <!-- <div class="affix-fix"></div> -->
    <!-- <el-affix :offset="10" position="top" :z-index="100"> -->
      <el-row justify="center" align="middle">
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
          <el-anchor :offset="0" direction="horizontal">
            <el-anchor-link href="#persionInfo"> About </el-anchor-link>
            <el-anchor-link href="#experience"> Education </el-anchor-link>
            <el-anchor-link href="#skill"> Skills </el-anchor-link>
            <el-anchor-link href="#project"> Project </el-anchor-link>
            <el-anchor-link href="#publication"> Publications </el-anchor-link>
            <el-anchor-link href="#" @click="PageChange">
              <el-switch
                v-model="language"
                inline-prompt
                active-text="EN"
                inactive-text="CN"
              />
            </el-anchor-link>
          </el-anchor>
        </el-col>
      </el-row>
    <!-- </el-affix> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
import { useWindowStore } from '@/stores/homeStore'
const store = useWindowStore()
const router = useRouter();
let language = ref(true);
const PageChange = function () {
  if (language.value == false) {
    router.push("/cn");
  }
};
</script>
<style lang='scss' scoped>
@media (max-width: 600px) {
  #header {
    display: none;
  }
}
@media (min-width: 600px) {
  #header {
    display: inherit;
  }
}
#header {
  width: 100%;
  position: fixed;
  z-index: 999;
  height: 20px;
  top: 0px;
  .el-row {
    background: #1d191a;
  }
  .el-col {
    display: inherit;
    justify-content: center;
  }
}
// .affix-fix {
//   position: fixed;
//   height: 10px;
//   width: 100%;
//   background: #1d191a;
//   z-index: 100;
// }
:deep(.el-anchor--horizontal) {
  background: #1d191a;
  a {
    font-size: 20px;
  }
}
</style>