<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 16:10:31
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-23 20:02:31
 * @@param: 
-->
<template>
  <el-row
    justify="center"
    :gutter="10"
    align="top"
    class="itemDat"
    id="project"
  >
    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="item-title">
      <h2>Project</h2>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="item-content">
      <ul>
        <li>
          <span
            >Decipher the gene expression regulatory network during the development of tetraploid upland cotton fibers based on population transcriptome analysis.</span
          >
        </li>
        <li><span>Conduct pan-genome research of the genus Gossypium based on multiple high-quality reference genomes.</span></li>
        <li>
          <span
            >Conduct analysis of gene splicing regulatory networks based on population transcriptome and nanopore sequence data.</span
          >
        </li>
        <li>
          <span>Comparative genomics reveal the evolutionary divergence of cis-regulatory elements during the polyploidization process of cotton.</span>
        </li>
      </ul>
    </el-col>
    <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
      <el-divider />
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
</script>
<style lang='scss' scoped>
#project {
  padding-top: 50px;
}
.item-title {
  display: inherit;
  justify-content: center;
}
.item-content {
  margin-top: 25px;
  span {
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
}
h2 {
  border-bottom: solid;
  padding-bottom: 0.25rem;
  border-bottom-width: 10px;
  border-bottom-color: #008f94;
  font-size: 2rem;
  max-width: 200px;
}
</style>