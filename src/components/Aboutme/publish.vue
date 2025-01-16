<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2024-07-22 16:10:31
 * @LastEditors: zpliu
 * @LastEditTime: 2025-01-16 21:06:05
 * @@param: 
-->
<template>
  <el-row justify="center" :gutter="10" align="top" class="itemDat" id="publication">
    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="item-title">
      <h2>发表论文</h2>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="item-content">
      <ol class="publicationInfo">
        <li
          v-for="(item, index) in publications"
          :key="index"
          class="publicationItem"
        >
          <div v-html="publicationHTML(item)"></div>
        </li>
      </ol>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import publicationJson from "./publication.json";
const publications = ref(publicationJson["item"]);
const publicationHTML = function (dat, queryName) {
  // 基于文献的信息获取html格式信息
  // dat: publications.value[0]
  let firstautorList = dat["firstAuthor"];
  let correspindingAuthorList = dat["correspondingAuthor"];
  let firstAuthorStr = firstautorList.join("<sup>*</sup>, ") + "<sup>*</sup>, ";
  let correspindingStr =
    correspindingAuthorList.join("<sup>#</sup>, ") + "<sup >#</sup>. ";
  let otherAuthor = dat["otherAuthor"];
  let otherAuthorStr = otherAuthor.join(", ") + ", ";
  let title = dat["title"];
  let url = dat["doi"];
  let tileURL = `<a href="${url}" target="_blank">${title}</a>`;
  let volume = dat["volume"];
  let journal = dat["journal"];
  let year = dat["year"];
  let rawStr = `${firstAuthorStr}${otherAuthorStr}${correspindingStr}${tileURL}. <span style="font-style: italic; font-weight:bold;">${journal}. </span>${year}; ${volume}.`;
  // 搜索名字对字符进行修改
  let boldMyName = rawStr.replace(
    "Zhenping Liu",
    `<span style="font-weight:bold;">Zhenping Liu</span>`
  );
  return boldMyName;
};
</script>
<style  scoped>
#publication{
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
.publicationInfo {
  font-size: 20px;
  text-align: justify;
}
.publicationItem {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>