import axios from "axios";
import { useAuthStore } from '@/stores/store'
import { apiURL } from '@/global-url'

export default defineNuxtPlugin((nuxtApp) => {
  const authStore = useAuthStore();
  axios.defaults.baseURL = apiURL;
  axios.defaults.headers.common['Authorization'] = authStore.token ? `Bearer ${authStore.token}` : ''
  return {
    provide: {
      axios: axios,
    },
  }
})
