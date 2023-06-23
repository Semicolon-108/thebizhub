<template>
    <section class="section">
        <div class="bg"></div>
        <div class="container">
            <h1 class="page-title">Login</h1>

            <div class="grids is-5-desktop is-1-mobile margin-top-30">
                <div class="left span-2">
                    <form action="" class="grids is-1-desktop is-1-mobile gap-20">
                        <div class="field">
                            <label for="">Mobile number (020) <span>*</span></label>
                            <div class="control">
                                <input type="text" class="input" placeholder="123456678">
                            </div>
                        </div>
                        <div class="field">
                            <label for="">Password <span>*</span></label>
                            <div class="control">
                                <input type="text" class="input" placeholder="password">
                                <NuxtLink to="password-recovery">Forgot Password</NuxtLink>
                            </div>
                        </div>
                    </form>
                    <button class="button main margin-top-20 margin-bottom-10">Login</button>

                    <p class="note">Don't have an account? <a @click="$router.push({ path: 'register' })">Register</a></p>
                </div>
                <div class="right span-3">
                    <div class="box">
                        <h3 class="box-title margin-bottom-10">Contact Information</h3>
                        <ul>
                            <li>
                                <span><i class="fa-solid fa-mobile"></i></span>
                                <p>020 56463959 | 020 56508160</p>
                            </li>
                            <li>
                                <span><i class="fa-solid fa-mobile"></i></span>
                                <p>thebizhub.info@gmail.com</p>
                            </li>
                            <li>
                                <span><i class="fa-solid fa-mobile"></i></span>
                                <p>CircularX Dongpaina Road, <br>
                                    Saphanthong Village,<br>
                                    Sisattanak District,<br>
                                    Vientiane Capital, Lao PDR.</p>
                            </li>
                        </ul>
                    </div>

                    <p class="social-icons margin-top-10">
                        <span><a><i class="fa-brands fa-youtube"></i></a></span>
                        <span><a><i class="fa-brands fa-facebook"></i></a></span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    position: relative;
}

button {
    width: 100%;
}


.bg {
    content: '';
    width: 30%;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    background-color: $sub-color;
}
.right {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    .box {
        position: relative;
        display: inline-block;
        background-color: $main-color;
        color: #fff;
        border-radius: 10px;
        padding: 30px 40px;

        &::before {
            content: '';
            display: block;
            position: absolute;
            left: -15px;
            top: -15px;
            height: 30px;
            width: 30px;
            background-color: $sub-color;
            border-radius: 5px
        }

        .box-title {
            @include xlg-font;
            font-weight: 700;
            text-transform: uppercase;
        }

        ul {

            li {
                display: flex;
                margin-bottom: 10px;

                span {
                    min-width: 20px;
                    max-width: 20px;
                    color: $sub-color;
                }

                p {
                    line-height: 1.5;
                }
            }
        }
    }

    //box

    .social-icons {
        display: flex;
        gap: 20px;

        a {
            cursor: pointer;

            i {
                color: #fff;
                @include xlg-font;
            }
        }
    }
}

.note {
    a {
        color: $sub-color;
        cursor: pointer;
    }
}
</style>