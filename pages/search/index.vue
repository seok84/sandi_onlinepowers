<template>
    <section id="searchView" class="inner">
        <div>
            <h2 class="title-h2">'{{ searchWord }}' 검색결과</h2>
            <!-- <etc-filter-select /> -->
            <form-filter-select />
            <div class="item-list-container list3">
                <div class="item-list vert" v-for="(item, index) in items" :key="index">
                    <item-part-thumbnail :item="item.thumbnail" />
                    <item-part-info :item="item.info" />
                </div>
            </div>
            <etc-pagination />
        </div>
        <div>
            <div class="search-txt">
                <h2 class="title-h2">
                    <b>'{{ searchWord }}'</b> 검색결과 <br>
                    검색 결과가 없습니다.
                </h2>
                <div class="no-content search-info">
                    <span><img src="@/assets/img/common/search.png" alt="검색아이콘"></span>
                    <p>
                        검색어가 올바르게 입력되었는지 확인 해주세요.<br />
                        두 단어 이상의 검색어인 경우, 띄어쓰기를 확인해 주세요. (예: 일회용식기 → 일회용 식기)
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            searchWord: "ABCDEF",
            items: [
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
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
                        // rank: "01",
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
                        // rank: "01",
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
                        // rank: "01",
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
                        // rank: "01",
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
                        // rank: "01",
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
                        // rank: "01",
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
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>
<style scoped>
.search-txt {
    text-align: center;
    margin: 10rem auto;
}


.search-info span {
    display: block;
    width: 10.2rem;
    height: 10.6rem;
    margin: 6rem auto;
}

.search-info span img {
    width: 100%;
}

.search-info p {
    font-size: 1.6rem;
    color: #9e9e9e;
    line-height: 1.65;
}
</style>
