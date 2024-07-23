<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 16:10:31
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-23 21:41:49
 * @@param: 
-->
<template>
  <el-row
    justify="center"
    :gutter="10"
    align="top"
    class="itemDat"
    id="experience"
  >
    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="item-title">
      <h2>Education</h2>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="item-content">
      <el-timeline class="timeline">
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
    content: "PhD candidate (Crop Genetics and Breeding), Huazhong agricultural university",
    timestamp: "2021/09/01 - now",
    size: "large",
    type: "primary",
  },
  {
    content: "M.S. (Crop Genetics and Breeding), Huazhong agricultural university",
    timestamp: "2019/09/01 - 2021/09/01",
    color: "#0bbd87",
  },
  {
    content: "B.S. (Plant Science and Technolog), Huazhong agricultural university",
    timestamp: "2015/09/01 - 2019/09/01",
    size: "large",
  },
]);
</script>
<style scoped>
#experience {
  padding-top: 50px;
}
.item-title {
  display: inherit;
  justify-content: center;
}
.item-content {
  margin-bottom: 50px;
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