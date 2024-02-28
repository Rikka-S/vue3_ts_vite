<template>
  <div>
    <div>
      pinia的使用
    </div>
    <div>
      <el-button type="primary" size="default" @click="chagneA">改变state中的A变量</el-button>
      <el-button type="primary" size="default" @click="reductionA">还原state中的A变量</el-button>
      <p>{{ store.state.a }}</p>
    </div>
    <div>
      <div>
        计算属性
      </div>
      <el-button type="primary" size="default" @click="add">count ++</el-button>
      <p><span>count :{{ store.state.count }}</span> <span>count * 2 :{{ store.getters.doubleCount }}</span></p>
    </div>
    <div>state中的复杂类型</div>
    <el-button type="primary" size="default" @click="setName">改变state.userinfo.name</el-button>
    <p>{{ store.state.userInfo.name }}</p>
    <el-button type="primary" size="default" @click="changeUserInfo">对整个state.uerInfo赋值</el-button>
    <p>{{ store.state.userInfo.name }} state.uesInfo 是否还是响应式 {{ isResponsive }}</p>

  </div>
</template>

<script setup lang="ts">
import useIndexStore from '@/stores';
import { ref } from 'vue';
const store = useIndexStore()
const isResponsive = ref(false)
function add() {
  store.actions.add()
}
function chagneA() {
  store.actions.newA()
}
function reductionA() {
  store.actions.oldA()
}
function setName() {
  store.actions.setName()
}
function changeUserInfo() {
  //后端返回的数据
  const userInfo = {
    name: '李四'
  }
  store.actions.changeUserInfo(userInfo)
  isResponsive.value = store.state.userInfo instanceof Object
}
</script>

<style scoped></style>