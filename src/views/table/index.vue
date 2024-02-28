<template>
  <div>
    <el-button type="primary" size="default" @click="search">搜索</el-button>

    <el-table :data="tablelist" border stripe>
      <el-table-column type="index" width="50" />
      <el-table-column v-for="col in columns" :prop="col.id" :key="col.id" :label="col.label" :width="col.width">
      </el-table-column>
    </el-table>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
interface tableItem {
  id: String,
  name: String,
  age: Number
}
// const tablelist = reactive<tableItem[]>([])
const tablelist = ref<object[]>([])
const columns = reactive([
  {
    id: 'name',
    label: 'name',
    width: ''
  },
  {
    id: 'id',
    label: 'age',
    width: ''
  },
])
const init = () => {
}
// init()
const data = [{
  id: 'id',
  name: '张三',
  age: 11
}]
function search() {
  tablelist.value = data
}
</script>

<style scoped></style>