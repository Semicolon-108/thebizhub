<template>
    <section>
        <div class="container">
            <h1 class="section-title">Entrepreneur's Story</h1>
            <ul>
                <li v-for="(i, index) in 3" :key="index">
                    <div class="card dark">
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
    // background-repeat: no-repeat;
    // background-size: cover;
    background-position: center center;

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
    }
}
</style>