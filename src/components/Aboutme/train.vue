<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 16:10:31
 * @LastEditors: zpliu
 * @LastEditTime: 2024-07-22 22:02:58
 * @@param: 
-->
<template>
  <el-row justify="center" :gutter="10" align="top" class="itemDat">
    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="item-title">
      <h2>科研&项目</h2>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="item-content">
      <ul>
        <li>
          <span
            >基于群体转录组解析四倍体陆地棉纤维发育过程中基因表达调控网络</span
          >
        </li>
        <li><span>基于多个高质量参考基因组，开展棉属泛基因组研究</span></li>
        <li>
          <span
            >基于群体转录组和Nanopore三代转录组数据，开展基因剪接调控网络分析</span
          >
        </li>
        <li>
          <span>比较基因组揭示棉花多倍化过程中cis调控元件的进化分歧</span>
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