<template>
    <div id="saleLedgerCheck" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">배송지별 주문통계</h2>
        <div class="inner">
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <form-period-search class="type02" />
                <div class="sub_tit">
                    <h5>배송지별 상품판매액</h5>
                    <button class="btn btn-small btn_excel">
                        <span>엑셀 다운받기</span>
                        <img src="~/assets/img/common/ico_down.svg">
                    </button>
                </div>
                <!-- table start -->
                <div class="stats_table_wrapper">
                    <div class="stats_table_wrap">
                        <table class="stats_table">
                            <colgroup>
                                <col width="44%">
                                <col width="28%">
                                <col width="28%">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th rowspan="2" class="shipping_name">배송지명</th>
                                    <th colspan="2" class="total_payment">결제합계</th>
                                </tr>
                                <tr>
                                    <th>건수</th>
                                    <th>주문금액</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="data in itemInfo">
                                    <tr class="shipping_tr shipping_main" @click="data.childrenShow = !data.childrenShow">
                                
                                        <td class="shipping_main_title" >{{ data.receiveName }}</td>
                                        <td>{{ data.totalOrderCount }}</td>
                                        <td>{{ data.totalAmount }}</td>
                                    </tr>
                                    <tr class="shipping_tr shipping_sub" v-show="data.childrenShow"
                                        v-for="(item, index) in data.sub" :key="index">
                                        <td class="shipping_sub_title"><p>비과세</p><p>{{ item.receiveName }}</p> </td>
                                        <td>{{ item.totalOrderCount }}</td>
                                        <td>{{ item.totalAmount }}</td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                        <table class="total_table">
                            <tbody>
                                <tr>
                                    <td class="total">총 합계</td>
                                    <td>9,999,999</td>
                                    <td>9,999,999</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'saleLedgerCheck',
    data() {
        return {
            itemInfo: [
                {
                    receiveName: "메인1",
                    orderCount: "9,999,999",
                    totalAmount: "9,999,999",
                    childrenShow: false,
                    sub: [
                        {
                            receiveName: "서브",
                            orderCount: "9,999,999",
                            totalAmount: "9,999,999",
                        },
                        {
                            receiveName: "서브",
                            orderCount: "9,999,999",
                            totalAmount: "9,999,999",
                        },
                        {
                            receiveName: "서브",
                            orderCount: "9,999,999",
                            totalAmount: "9,999,999",
                        },
                    ]
                },
                {
                    receiveName: "메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2메인2",
                    orderCount: "9,999,999",
                    totalAmount: "9,999,999",
                    childrenShow: false,
                    sub: [
                        {
                            receiveName: "서브",
                            orderCount: "9,999,999",
                            totalAmount: "9,999,999",
                        },
                        {
                            receiveName: "서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브",
                            orderCount: "9,999,999",
                            totalAmount: "9,999,999",
                        },
                        {
                            receiveName: "서브",
                            orderCount: "9,999,999",
                            totalAmount: "9,999,999",
                        },
                    ]
                },

            ],
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');
</style>