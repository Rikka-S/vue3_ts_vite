import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { routes } from '@/router'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const state = reactive({
    a: '',
  })
  const a = ref('')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const sidebarList = ref(routes)
  const actions = {
    newA() {
      console.log(state.a, 3333)
      // a.value = 'a改变了'
      state.a = 'a改变了'
    },
    oldA() {
      // a.value = 'a还原了'
      state.a = 'a还原了'
    },
  }
  return { count, doubleCount, a, state, increment, sidebarList, actions }
})
