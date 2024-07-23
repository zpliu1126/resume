<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 16:10:31
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-23 19:55:33
 * @@param: 
-->
<template>
  <el-row justify="center" :gutter="10" align="top" class="itemDat" id="skill">
    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="item-title">
      <h2>Skills</h2>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="item-content">
      <ul>
        <li>
          <div>
            <h3>Programme</h3>
            <ul>
              <li><p>Linux</p></li>
              <li><p>Python</p></li>
              <li><p>R</p></li>
              <li><p>snakemake</p></li>
            </ul>
          </div>
        </li>
        <div>
          <h3>Bioinformatics training</h3>
          <ul>
            <li>
              <p>
                <span>population genetics: </span
                >Identify domestication selection regions through population resequencing, identify eQTL/sQTL by integrating transcriptome data, and prioritize candidate genes for QTL using methods such as TWAS.
              </p>
            </li>
            <li>
              <p>
                <span>Comparative genomics: </span
                >Conduct pan-genome analysis between a single or multiple species based on high-quality reference genome data.
              </p>
            </li>
            <li>
              <p><span>Transcriptome: </span>Routine RNA-seq analysis and identification of differentially expressed genes.</p>
            </li>
            <li>
              <p>
                <span>Epigenome: </span>DNA methylation, ATAC and Hi-C analysis
              </p>
            </li>
            <li>
              <p>
                <span>Genome assembly and annotation: </span
                >Genome assembly, gene structure annotation, and transcript assembly.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Research literacy</h3>
          <ul>
            <li><p>Efficient workflow for literature classification, management, and retrieval.</p></li>
            <li>
              <p>Proficient in writing scientific papers in English and has some experience in peer review of papers.</p>
            </li>
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