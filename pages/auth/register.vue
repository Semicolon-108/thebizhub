<template>
    <section class="section">
        <div class="bg is-hidden-mobile"></div>
        <div class="container">
            <h1 class="page-title">Register</h1>

            <div class="grids is-2-desktop is-1-mobile margin-top-30 gap-30">
                <div class="left">
                    <form action="" class="grids is-2-desktop is-1-mobile gap-20">
                        <div class="field">
                            <label for="">Name <span>*</span></label>
                            <div class="control">
                                <input type="text" class="input" placeholder="Name">
                            </div>
                        </div>
                        <div class="field">
                            <label for="">Birt Year <span>*</span></label>
                            <div class="control">
                                <input type="text" class="input" placeholder="1999">
                            </div>
                        </div>
                        <div class="field">
                            <label for="">Mobile number (020) <span>*</span></label>
                            <div class="control">
                                <input type="text" class="input" placeholder="123456678">
                            </div>
                        </div>
                        <div class="field">
                            <label for="">Email <span>*</span></label>
                            <div class="control">
                                <input type="text" class="input" placeholder="email@gmail.com">
                            </div>
                        </div>
                        <div class="field">
                            <label for="">Province <span>*</span></label>
                            <div class="control">
                                <div class="select">
                                    <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label for="">Occupation <span>*</span></label>
                            <div class="control">
                                <div class="select">
                                    <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label for="">Password <span>*</span></label>
                            <div class="control">
                                <input type="text" class="input" placeholder="password">
                            </div>
                        </div>
                        <div class="field">
                            <label for="">Confirm Password <span>*</span></label>
                            <div class="control">
                                <input type="text" class="input" placeholder="Re-type password again">
                            </div>
                        </div>
                    </form>
                    <button class="button main margin-top-20 margin-bottom-10">Regsiter</button>

                    <p class="note">Already have an account? <a @click="$router.push({ path: 'login' })">Login</a></p>
                </div>
                <div class="right">
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

.left {}

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