<template>
    <section>
        <div class="container">
            <h1 class="section-title">Entrepreneur's Story</h1>
            <ul>
                <li v-for="(i, index) in 3" :key="index">
                    <div class="card">
                        <div class="card-image">
                            <img src="../../assets/images/img-05.jpg" alt="">
                        </div>
                        <div class="card-content">
                            <p class="tag-list">
                                <span>Learning</span>
                                <span>SME & Startup</span>
                            </p>
                            <h3>Home / NETWORK (Wireless) / Range extender & mesh wifi / Whole-home mesh tp-link (deco e4)
                                wireless ac1200 dual band (pack 2)
                            </h3>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    background-image: url('../../assets/images/bg.jpg');
    background-repeat: no-repeat;
    // background-size: cover;
    background-position: top right;

    .section-title {
        color: #fff;
    }

    ul {
        display: flex;
        gap: 20px;

        @include mobile {
            overflow: auto;

            li {
                flex: 0 0 80%;

            }
        }

        li {
            .card {
                .card-image {
                    img {
                        aspect-ratio: 1.9;
                        object-fit: cover;
                        display: block;
                    }
                }

                .card-content {
                    background-color: #fff;
                    padding: 15px;

                    .tag-list {
                        display: flex;
                        padding: 0 0 5px 0;
                        margin: 0 0 5px 0;

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

            // card
        }
    }
}
</style>