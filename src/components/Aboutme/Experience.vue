<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 16:10:31
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-22 22:10:23
 * @@param: 
-->
<template>
  <el-row justify="center" :gutter=10 align="top" class="itemDat">
    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="item-title">
      <h2>教育经历</h2>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="item-content">
      <el-timeline  class="timeline">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
          :hollow="activity.hollow"
          placement="top"
        >
          <el-card>
            <h4>{{ activity.content }}</h4>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-col>
    <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
      <el-divider />
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
const activities = ref([
  {
    content: "华中农业大学-博士研究生",
    timestamp: "2021/09/01",
    size: "large",
    type: "primary",
  },
  {
    content: "华中农业大学-硕士研究生",
    timestamp: "2019/09/01",
    color: "#0bbd87",
  },
  {
    content: "华中农业大学-本科",
    timestamp: "2015/09/01",
    size: "large",
  },
]);
</script>
<style scoped>
.item-title {
  display: inherit;
  justify-content: center;
}
.item-content {
  margin-top: 50px;
}
h2 {
  border-bottom: solid;
  padding-bottom: 0.25rem;
  border-bottom-width: 10px;
  border-bottom-color: #008f94;
  font-size: 2rem;
  max-width: 150px;
}
h4 {
  font-size: 18px;
}

@media (max-width: 960px) {
  .timeline {
    max-width: 400px;
  }
}

@media (min-width: 960px) {
  .timeline {
    max-width: 800px;
  }
}
</style>