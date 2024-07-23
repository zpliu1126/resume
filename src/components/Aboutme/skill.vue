<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 16:10:31
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-23 21:22:58
 * @@param: 
-->
<template>
  <el-row justify="center" :gutter="10" align="top" class="itemDat" id="skill">
    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="item-title">
      <h2>个人技能</h2>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="item-content">
      <ul>
        <div>
          <h3>生物信息学训练</h3>
          <ul>
            <li>
              <p>
                <span>群体遗传学：</span
                >基于群体重测序开展物种驯化选择区间鉴定，结合转录组数据数据鉴定eQT/sQTL，并使用TWAS等方法进行QTL候选基因的定位。
              </p>
            </li>
            <li>
              <p>
                <span>比较基因组学：</span
                >基于高质量参考基因组数据，开展单个或多个物种间的泛基组分析。
              </p>
            </li>
            <li>
              <p><span>转录组：</span>常规RNA-seq分析以及鉴定差异表达基因。</p>
            </li>
            <li>
              <p>
                <span>表观基因组：</span>DNA甲基化、ATAC以及Hi-C等常规分析。
              </p>
            </li>
            <li>
              <p>
                <span>基因组组装与注释：</span
                >三代测序基因组组装、基因结构注释、转录本组装。
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3>科研素养</h3>
          <ul>
            <li><p>高效的文献分类、管理、检索工作流。</p></li>
            <li>
              <p>熟练运用英文进行科研论文写作，并具有一定的论文审稿经验。</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>编程能力</h3>
          <ul>
            <li><p>Linux</p></li>
            <li><p>Python</p></li>
            <li><p>R</p></li>
            <li><p>snakemake</p></li>
          </ul>
        </div>
      </ul>
      <el-row class="Code-progress" justify="center" align="middle">
        <el-col
          v-for="(item, index) in skillProgress"
          :key="index"
          :xs="12"
          :sm="12"
          :md="6"
          :lg="6"
          :xl="6"
        >
          <el-progress
            type="dashboard"
            :percentage="item.percentage"
            :color="item.colors"
          >
            <template #default="{ percentage }">
              <span class="percentage-value">{{ percentage }}%</span>
              <span class="percentage-label">{{ item.language }}</span>
            </template>
          </el-progress>
        </el-col>
      </el-row>
    </el-col>
    <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
      <el-divider />
    </el-col>
  </el-row>
</template>

<script setup>
import { MoreFilled } from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";
const skillProgress = ref([
  {
    language: "Linux",
    corlor: "success",
    percentage: 80,
  },
  {
    language: "Python",
    corlor: "success",
    percentage: 80,
  },
  {
    language: "snakemake",
    corlor: "success",
    percentage: 80,
  },
  {
    language: "R",
    corlor: "success",
    percentage: 60,
  },
]);
</script>
<style lang='scss' scoped>
#skill {
  padding-top: 50px;
}
.item-title {
  display: inherit;
  justify-content: center;
}
.item-content {
  margin-top: 25px;
  h3 {
    font-size: 20px;
    margin-bottom: 5px;
    font-weight: bold;
    display: inline;
  }
  p {
    font-size: 18px;
    margin-bottom: 5px;
    margin-top: 5px;
    span {
      font-weight: bold;
    }
  }
}
h2 {
  border-bottom: solid;
  padding-bottom: 0.25rem;
  border-bottom-width: 10px;
  border-bottom-color: #008f94;
  font-size: 2rem;
  max-width: 150px;
}

.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
.Code-progress {
  margin-top: 40px;
  text-align: center;
}
</style>