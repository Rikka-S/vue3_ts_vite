<template>
  <div class="sidebar-content">
    <el-menu mode="vertical" :default-active="activeMenu" @select="" router>
      <sidebar-item v-for="(submenus, index) in menus" :key="submenus.path" :submenus="submenus"
        :base-path="submenus.path"></sidebar-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import { computed, reactive } from 'vue';
import { useCounterStore } from '@/stores/counter';
import sidebarItem from './sdebarItem.vue';
// const menus = reactive<menuItem[]>([])
const store = useCounterStore()
const route = useRoute()
console.log(route);
const menus = store.sidebarList
const activeMenu = computed(() => {
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
</script>

<style scoped></style>