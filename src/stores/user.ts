import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const user = ref({})

  function logout() {
    isLoggedIn.value = false
  }

  function login(userData) {
    isLoggedIn.value = true
    user.value = userData
  }

  return { isLoggedIn, user, login, logout }
})
