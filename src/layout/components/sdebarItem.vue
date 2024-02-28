<template>
  <div>
    <template v-if="!submenus.children">
      <el-menu-item :index="rPath(submenus.path)" :key="submenus.path">
        {{ submenus.meta.title }}
      </el-menu-item>
    </template>
    <template v-else-if="submenus.children.length == 1">
      <el-menu-item :index="rPath(submenus.children[0].path)" :key="submenus.children[0].path">
        {{ submenus.children[0].meta.title }}
      </el-menu-item>
    </template>
    <template v-else>
      <el-sub-menu :index="submenus.path" :key="submenus.path">
        <sidebar-item v-for="item in submenus.children" :key="item.path" :base-path="rPath(item.path)"
          :submenus="item"></sidebar-item>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup lang="ts" name="SidebarItem">
import sidebarItem from './sdebarItem.vue';
import { getNormalPath } from '@/utils';
import { toRefs } from 'vue';

const props = defineProps({
  submenus: {
    type: Object,
    default: {},
  },
  basePath: {
    type: String,
    default: '',
  }
})
const { submenus, basePath } = props
function rPath(path: string) {
  return getNormalPath(basePath + '/' + path)
}
</script>

<style scoped></style>