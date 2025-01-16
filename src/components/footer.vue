<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-22 15:09:50
 * @LastEditors: zpliu
 * @LastEditTime: 2025-01-16 21:05:07
 * @@param: 
-->

<script setup>
import { ElContainer, ElRow, ElCol } from "element-plus";
import SvgIcon from "./SvgIcon.vue";
const currentYear = new Date().getFullYear();
import { useWindowStore } from "@/stores/homeStore";
import { computed } from "vue";
import { storeToRefs } from "pinia";
// 修改Store值
const store = useWindowStore();
const { isMobile } = storeToRefs(store);
const isMobileClass = computed(() => {
  return isMobile.value == 0 ? "el-footer-mobile" : "el-footer-desktop";
});
</script>

<template>
  <el-container :class="isMobileClass">
    <el-row justify="center" align="top">
      <el-col :xs="12" :sm="12" :md="3" :lg="3">
        <div class="footer-info">
          <a href="https://orcid.org/0000-0002-3046-8005" target="_blank">
            <SvgIcon name="orcid" width="40" height="40"></SvgIcon>
            <p>ORCID</p>
          </a>
        </div>
        <div>
          <div class="footer-info">
            <a href="https://github.com/zpliu1126" target="_blank">
              <SvgIcon name="github" width="40" height="40"></SvgIcon>
              <p>Github</p>
            </a>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="3" :lg="3">
        <div class="footer-info">
          <a href="mailto:zpliu_x@qq.com" target="_blank">
            <SvgIcon name="email" width="40" height="40"></SvgIcon>
            <p>Email</p>
          </a>
        </div>
        <div class="footer-info">
          <a href="#" target="_blank">
            <SvgIcon name="weichat" width="40" height="40"></SvgIcon>
            <p>Weichat</p>
          </a>
        </div>
      </el-col>
      <el-col :xs="20" :sm="12" :md="8" :lg="8">
        <div class="contact_info">
          <h3><strong>Address:</strong></h3>
          <p>
            No.1 Shizishan Street, Hongshan District, Wuhan, Hubei Province,
            China
          </p>
          <h3><strong>TEL:</strong></h3>
          <p>+86-15071228394</p>
        </div>
      </el-col>
      <el-col :span="24" class="right-info">
        <strong>Copyright © {{ currentYear }} | All rights reserved</strong>
      </el-col>
    </el-row>
  </el-container>
</template>


<style lang='scss' scoped>
.el-footer-desktop {
  background-image: url("https://s21.ax1x.com/2025/01/16/pEFWBut.jpg");
  width: 100%;
  min-height: 25vh;
  padding: 0px 0px;
  .el-row {
    width: 100%;
  }
}
.el-footer-mobile {
  background-image: url("https://s21.ax1x.com/2025/01/16/pEFWBut.jpg");
  width: 100%;
  min-height: 50vh;
  padding: 0px 0px;
  .el-row {
    width: 100%;
  }
}
.footer-info {
  margin-top: 10px;
  text-align: center;
}
.contact_info {
  line-height: 2.8;
  text-align: start;
  strong {
    font-weight: bold;
  }
}
.right-info {
  text-align: center;
}
a {
  text-decoration: none;
  color: grey;
  transition: 0.4s;
  padding: 3px;
}
a:hover {
  text-decoration: none;
  background-color: transparent;
}
</style>