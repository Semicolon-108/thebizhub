import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
    // const defaultUrl = "http://localhost:4000/client-api/"
    const defaultUrl = " https://db.thebizhub.la/client-api/"
    
    axios.defaults.baseURL = defaultUrl
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('bizhubToken') || ''

    return {
        provide: {
            axios: axios,
        },
    };
});