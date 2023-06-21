<template>
    <section>
        <div class="container">
            <h1 class="section-title margin-bottom-10">WHO ARE WE?</h1>
            <div class="grids is-2-desktop gap-20 is-1-mobile">
                <div class="left">
                    <ul class="tabs">
                        <li :class="{ open: selectedTab === i.name }" @click="selectTab(i.name)" v-for="(i, index) in tabs"
                            :key="index">
                            <h1>{{ i.name }} <i class="fa-light fa-angle-down"></i></h1>
                            <p>{{ i.desc }}</p>
                        </li>
                        <li>
                            <h1>MORE ABOUT US<i class="fa-light fa-angle-right"></i></h1>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <div class="image">
                        <img src="../../assets/images/about.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

const selectedTab = ref()
const tabs = ref<any>([
    {
        name: 'WHO WE ARE?',
        desc: 'ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ, ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງ ຜູ້ປະກອບການລຸ້ນໃໝ່ ຫຼື ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງການພັດທະນາຕົນເອງ ແລະ ທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງ ບຢຸດຢັ້ງ',
    },
    {
        name: 'VISION',
        desc: 'ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ, ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງ ຜູ້ປະກອບການລຸ້ນໃໝ່ ຫຼື ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງການພັດທະນາຕົນເອງ ແລະ ທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງ ບຢຸດຢັ້ງ',
    },
    {
        name: 'MISSION',
        desc: 'ຄູ່ຮ່ວມງານເພື່ອຄວາມສາເລດໃນດ້ານທຸລະກິດ ແລະ ການເປນຜູ້ ປະກອບການ, ພວກເຮາມຸ່ງໝັ້ນໃນການສົ່ງເສີມ ແລະ ເສີມສ້າງ ຜູ້ປະກອບການລຸ້ນໃໝ່ ຫຼື ຜູ້ທີ່ກາລັງເລີ່ມຕົ້ນເຮດທຸລະກິດທີ່ຕ້ອງການພັດທະນາຕົນເອງ ແລະ ທຸລະກິດໃຫ້ເຕີບໂຕຢ່າງ ບຢຸດຢັ້ງ',
    }
])


const selectTab = async (e: any) => {
    selectedTab.value = e
}



</script>

<style lang="scss" scoped>
section {
    background-color: $light-color;

    .right {
        .image {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                display: block;
                max-height: 300px;
            }
        }
    }
}

.tabs {
    li {
        &:not(:last-child) {
            margin-bottom: 5px;
        }

        h1 {
            cursor: pointer;
            background-color: #fff;
            padding: 10px 15px;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: space-between;

            i {
                @include lg-font;
            }
        }

        p {
            display: none;
            padding: 15px;
            background-color: #fff;
        }

        &.open {
            h1 {
                background-color: $sub-color;
                color: #fff;
            }

            p {
                display: block;
            }
        }

        &:last-child h1 {
            background-color: $light-grey-color;
        }
    }

    //li
}
</style>