<template>
    <div class="list_board list_corner" id="event-detail">

        <div class="inner">
            <div class="title_wrap">
                <h2 class="default title_main">{{ eventTitle }}</h2>
                <a href="javascript:void(0);" class="btn_sns">공유하기</a>
            </div>
            
            <div class="event_date">{{ eventDate }}</div>
            <hr class="pc">
        </div>

        <div class="content_container">
            <!-- 에디터 컨텐츠 -->
            <div class="content_wrapper edit_content_wrapper ">
                <div class="contents_edit"><img src="~/static/img/sample/pc_1194x400.png" alt="에디터에 등록한 내용 들어갈 곳"></div>
            </div>

            <!-- 기본 리스트 -->
            <div class="content_wrapper">
                <div class="item-list-container list4">
                    <div class="item-list" v-for="(item, index) in items" :key="index">
                        <item-part-thumbnail :item="item.thumbnail" />
                        <item-part-info :item="item.info" />
                    </div>
                </div>
                <div class="bg_line"></div>
            </div>

            <!-- 서브타이틀 있을 때 -->
            <div class="content_wrapper">
                <div class="title_wrap sub_title_wrap">
                    <h2 class="default title_sub">{{ subTitle }}</h2>
                </div>
                <div class="item-list-container list4">
                    <div class="item-list" v-for="(item, index) in items" :key="index">
                        <item-part-thumbnail :item="item.thumbnail" />
                        <item-part-info :item="item.info" />
                    </div>
                </div>
                <div class="bg_line"></div>
            </div>

            <!-- 옵션 있을 때 -->
            <div class="content_wrapper">
                <div class="form_line select_wrap">
                    <selectOne />
                </div>
                <div class="item-list-container list4">
                    <div class="item-list" v-for="(item, index) in items" :key="index">
                        <item-part-thumbnail :item="item.thumbnail" />
                        <item-part-info :item="item.info" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import selectOne from "~/components/form/select-one.vue";

export default {
    components: {
        selectOne
    },
    data() {
        return {
            eventTitle: "이벤트 타이틀",
            eventDate: "2023.01.01 ~ 2023.03.31",
            subTitle: "서브 타이틀",
            items: [
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        rank: "01",
                        // time: "1",
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
            ],
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/event.css');

@media (max-width:480px) {

    .title_wrap .default.title_sub {
        height: 6rem;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }


}
</style>