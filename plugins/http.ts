export default defineNuxtPlugin((nuxtApp) => {
    const https = "https://thebizhub.la/"
    return {
        provide: {
            https
        },
    };
});