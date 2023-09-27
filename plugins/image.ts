export default defineNuxtPlugin((nuxtApp) => {
    const imageURL = "https://thebizhub-bucket.s3-ap-southeast-1.amazonaws.com/"
    return {
        provide: {
            imageURL
        },
    };
});