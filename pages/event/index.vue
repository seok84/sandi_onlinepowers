<template>
    <section id="eventView" class="inner">
            <h2 class="title-h2">이벤트</h2>

            <div>
                <!-- 1차 개발: 이미지형 -->
                <div class="event-wrap">
                    <div class="event-item" v-for="(item, index) in itemsEvent" :key="'itemsEvent' + index">
                         <!-- 1차 개발: 이미지형 -->
                         <nuxt-link to="/">
                            <img :src="item.img" alt="eventImg" />
                        </nuxt-link>
    
                        <!-- 2차 개발: 이미지+텍스트 따로 -->
                        <!-- <nuxt-link to="/">
                            <div class="event-txt">
                                <p class="event-tag ing" v-if="item.status">진행중</p>
                                <p class="event-tag end" v-else>종료</p>
                                <p class="event-title">이벤트명이 노출되는 영역입니다 {{ item.title }}</p>
                                <p class="event-desc">설명글이 노출되고 있습니다. {{ item.desc }}</p>
                            </div>
                            <img class="event-img" :src="item.img" alt="eventImg" />
                        </nuxt-link> -->
                    </div>
                </div>
                <etc-pagination />
            </div>

            <div class="no_content">
                <p>상품이 없습니다.</p>
            </div>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            itemsEvent: [
                {
                    img: require("~/assets/img/sample/sample_exhibition1.png"),
                    status: true,
                    title: "제목",
                    desc: "설명글",
                },
                {

                    img: require("~/assets/img/sample/sample_exhibition1.png"),
                    status: false,
                    title: "제목",
                    desc: "설명글",
                },
                {

                    img: require("~/assets/img/sample/sample_exhibition1.png"),
                    status: false,
                    title: "제목",
                    desc: "설명글",
                },
                {

                    img: require("~/assets/img/sample/sample_exhibition1.png"),
                    status: true,
                    title: "제목",
                    desc: "설명글",
                },
                {

                    img: require("~/assets/img/sample/sample_exhibition1.png"),
                    status: false,
                    title: "제목",
                    desc: "설명글",
                },
                {

                    img: require("~/assets/img/sample/sample_exhibition1.png"),
                    status: true,
                    title: "제목",
                    desc: "설명글",
                },
            ],
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>
<style scoped>
</style>
