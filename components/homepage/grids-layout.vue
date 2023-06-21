<template>
    <section>
        <div class="container">
            <h1 class="section-title">{{ title }}</h1>
            <ul>
                <li v-for="(index, i) in 5" :key="index">
                    <div class="card">
                        <div class="card-image">
                            <img src="../../assets/images/img-06.jpg" alt="">
                        </div>
                        <div class="card-content">
                            <p class="tag-list">
                                <span>Learning</span>
                                <span>SME & Startup</span>
                            </p>
                            <h3>Home / NETWORK (Wireless) / Range extender & mesh wifi / Whole-home mesh tp-link (deco e4)
                                wireless ac1200 dual band (pack 2)</h3>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script setup>

const props = defineProps(['title'])


</script>
<style lang="scss" scoped>
ul {
    display: grid;
    grid-template-columns: repeat(17, 1fr);
    gap: 20px;

    @include mobile {
        grid-template-columns: 1fr;
    }

    li {
        &:first-child {
            grid-row: span 2;
            grid-column: span 8;

            @include mobile {
                grid-column: span 17;
                grid-template-columns: 1fr;
            }
        }

        &:not(:first-child) {
            grid-column: span 4;

            @include mobile {
                grid-template-columns: 1fr;
                grid-column: span 17;
            }
        }


        .card {
            .card-image {
                img {
                    aspect-ratio: 1.9;
                    object-fit: cover;
                    display: block;
                }
            }

            .card-content {
                .tag-list {
                    display: flex;
                    padding: 5px 0;
                    margin: 5px 0;

                    @include mobile {
                        padding: 0;
                    }

                    &:not(:last-child) {
                        span {
                            display: flex;
                            align-items: center;

                            &::after {
                                content: '';
                                width: 1px;
                                height: 15px;
                                border-left: 1px solid $grey-color;
                                display: block;
                                margin: 0 8px;
                            }
                        }
                    }

                    span {
                        display: flex;
                        align-items: center;
                        @include xsm-font;
                    }
                }

                h3 {
                    font-weight: 700;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    @include md-font;
                }
            }

            // card-content
        }
    }
}
</style>