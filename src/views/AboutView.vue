<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 11:54:34
 * @LastEditors: zpliu
 * @LastEditTime: 2025-01-16 20:16:17
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
          <h1>刘振平</h1>
        </div>
        <div class="infoIcon">
          <el-icon :size="size" :color="color"> <InfoFilled /></el-icon>个人信息
        </div>
        <div>
          <h4>籍贯：</h4>
          <span> 江西抚州</span>
        </div>
        <div>
          <h4>出生年月：</h4>
          <span> 1996/11/26</span>
        </div>
        <div>
          <h4>通讯地址：</h4>
          <span> 湖北省武汉市洪山区狮子山大道1号，华中农业大学</span>
        </div>
        <div>
          <h4>联系方式：</h4>
          <ul>
            <li>
              <h5>邮箱：</h5>
              <span>zpliu_x@qq.com</span>
            </li>
            <li>
              <h5>微信：</h5>
              <span>15071228394</span>
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
import Experience from "../components/Aboutme/Experience.vue";
import Publish from "../components/Aboutme/publish.vue";
import Skill from "../components/Aboutme/skill.vue";
import Train from "../components/Aboutme/train.vue";
import HeaderNav from "../components/Aboutme/header.vue";
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
