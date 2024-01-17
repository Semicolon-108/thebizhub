import content from '../../gql';
<template>
    <div class="gallery-container">
        <div class="close" @click="$emit('closeShowGallery')">
            <i class="fa-regular fa-xmark"></i>
        </div>
        <div class="bg"></div>
        <div class="gallery">
            <!-- <ul> -->
                <!-- <li v-for="(i, index) in data" :key="index"> -->
                    <img :src="showImage + data" alt="" />
                <!-- </li> -->
            <!-- </ul> -->
        </div>
    </div>
</template>
<script setup lang="ts">
const { data } = defineProps(["data"]);
const showImage = useNuxtApp().$imageURL
</script>


<style lang="scss" scoped>
.gallery-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: center;

    .close {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 999;
        color: #fff !important;
        min-width: 40px;
        min-height: 40px;
        max-width: 40px;
        max-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--alert-color);
        border-radius: 0 0 0 10px;
        cursor: pointer;
    }

    .bg {
        content: "";
        background-color: rgba(#000, 0.9);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 8;
    }

    .gallery {
        overflow: auto;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        z-index: 8;

        ul {
            overflow: auto;
            position: relative;
            z-index: 999;
            width: 100%;
            margin-left: auto;
            margin-right: auto;

            li {
                display: block;
                padding-bottom: 20px;
                padding-bottom: 0;
                max-width: 800px;

                img {
                    width: 100%;
                    object-fit: cover;
                    display: block;
                }
            }
        }
    }
}
</style>
