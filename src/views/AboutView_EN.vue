<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-23 19:26:24
 * @LastEditors: zpliu
 * @LastEditTime: 2025-01-16 17:59:39
 * @@param: 
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 11:54:34
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-23 16:37:31
 * @@param: 
-->
<template>
  <HeaderNav />
  <el-row justify="center" :gutter="10" align="middle" id="persionInfo">
    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" id="avatar">
      <userAvatar></userAvatar>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <div class="InfoText">
        <div>
          <h1>Zhenping Liu</h1>
        </div>
        <div class="infoIcon">
          <el-icon :size="size" :color="color"> <InfoFilled /></el-icon
          >information
        </div>
        <div>
          <h4>Native place:</h4>
          <span> JiangXi fuzhou</span>
        </div>
        <div>
          <h4>Birth date:</h4>
          <span> 1996/11/26</span>
        </div>
        <div>
          <h4>Corresponding address:</h4>
          <span>
            No.1 Shizishan Street, Hongshan District, Wuhan, Hubei Province,
            China</span
          >
        </div>
        <div>
          <h4>Contact:</h4>
          <ul>
            <li>
              <h5>email:</h5>
              <span> zpliu_x@qq.com</span>
            </li>
            <li>
              <h5>phone:</h5>
              <span> (+86) 15071228394</span>
            </li>
          </ul>
        </div>
      </div>
    </el-col>
  </el-row>
  <div class="infoList">
    <Experience />
    <Skill />
    <Train />
    <Publish />
  </div>
  <Footer></Footer>
  <el-backtop :right="100" :bottom="100"
    ><div
      style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      UP
    </div></el-backtop
  >
</template>

<script setup>
import { ref } from "vue";
import userAvatar from "../components/Aboutme/userAvatar.vue";
import Experience from "../components/Aboutme/Experience_en.vue";
import Publish from "../components/Aboutme/publication_en.vue";
import Skill from "../components/Aboutme/skills_en.vue";
import Train from "../components/Aboutme/train_en.vue";
import HeaderNav from "../components/Aboutme/header_en.vue";
import Footer from "../components/footer.vue";

let color = ref("grey");
let size = ref(24);
</script>

<style lang="scss" scoped>
#avatar {
  display: inherit;
  justify-content: center;
}

@media (max-width: 960px) {
  .InfoText {
    display: inherit;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
  }
  #persionInfo {
    margin-bottom: 50px;
    margin-top: 0px;
    background: #2b2b2b;
    min-height: 600px;
  }
}
@media (min-width: 960px) {
  .InfoText {
    display: inherit;
    justify-content: start;
  }
  #persionInfo {
    margin-bottom: 50px;
    margin-top: 0px;
    background: #2b2b2b;
    min-height: 400px;
  }
}

.infoIcon {
  display: flex;
  margin: auto 0;
}
.InfoText {
  color: white;
  h1 {
    font-size: 40px;
    margin-bottom: 5px;
  }
  h4 {
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: bold;
    display: inline;
  }
  span {
    font-size: 20px;
    margin-bottom: 5px;
  }
  h5 {
    font-size: 20px;
    margin-bottom: 5px;
    display: inline;
  }
}
.infoList {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
