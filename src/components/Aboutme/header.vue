<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-23 16:11:53
 * @LastEditors: zpliu
 * @LastEditTime: 2025-01-16 20:32:54
 * @@param: 
-->
<template>
  <!-- <el-affix :offset="120">
    <el-button type="primary">Offset top 120px</el-button>
  </el-affix> -->
  <div id="header">
      <el-row justify="center" align="middle">
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
          <el-anchor :offset="0" direction="horizontal">
            <el-anchor-link href="#persionInfo"> 基本信息 </el-anchor-link>
            <el-anchor-link href="#experience"> 教育经历 </el-anchor-link>
            <el-anchor-link href="#skill"> 个人技能 </el-anchor-link>
            <el-anchor-link href="#project"> 科研项目 </el-anchor-link>
            <el-anchor-link href="#publication"> 发表论文 </el-anchor-link>
            <el-anchor-link href="#" @click="PageChange">
              <el-switch
                v-model="language"
                inline-prompt
                active-text="CN"
                inactive-text="EN"
              />
            </el-anchor-link>
          </el-anchor>
        </el-col>
      </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let language = ref(true);
const PageChange = function () {
  if (language.value == false) {
    router.push("/");
  }
};
</script>
<style lang='scss' scoped>
@media (max-width: 600px) {
  #header {
    display: none;
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