import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
interface user {
  name: string
}
interface actions {
  [key: string]: (arg0: any) => void
}
const useIndexStore = defineStore('index', () => {
  const state = reactive({
    count: 1,
    a: '默认值',
    userInfo: {
      name: '默认值',
    },
  })

  const actions: actions = {
    add() {
      state.count++
    },
    newA() {
      state.a = 'a改变了'
    },
    oldA() {
      state.a = 'a还原了'
    },
    setName() {
      state.userInfo.name = '张三'
    },
    changeUserInfo(info: user) {
      state.userInfo = info
    },
  }

  const getters = {
    doubleCount: computed(() => {
      return state.count * 2
    }),
  }

  return { state, actions, getters }
})

export default useIndexStore
