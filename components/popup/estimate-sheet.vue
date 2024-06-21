
<template>
    <div class="modal modal_basic modal_m" id="estimateSheetView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'주문견적서'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div id="estimate-sheet" class=" estimate-sheet">
                        <div class="top_box">
                            <div class="order_stamp">
                                <img src="~/assets/img/cart/order_stamp.png" alt="" />
                            </div>

                            <div class="top_left_box">
                                <dl class="est_sheet_list">
                                    <dt>견적일자</dt>
                                    <dd>2023년 01월 01일</dd>
                                </dl>
                                <p class="info_dot">해당 견적서의 유효기간은 7일 입니다.</p>
                                <p class="info_dot">
                                    프로모션 및 재고 유무에 따라 단가 변동이 <br class="print"> 있을 수 있습니다.
                                </p>
                                <p class="info_dot">
                                    상기 견적은 견적당시 상품 구매가격이므로 <br class="print"> 해당상품의 판매금액이
                                    변동 될 수 있습니다.
                                </p>
                            </div>
                            <div class="top_right_box">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td rowspan="7" class="whole_tit txt_center">더미01</td>
                                            <td class="td_bg txt_left">더미02</td>
                                            <td colspan="3">더미03</td>
                                        </tr>
                                        <tr>
                                            <td class="td_bg txt_left">더미02</td>
                                            <td>더미03</td>
                                            <td class="td_bg txt_center">더미04</td>
                                            <td>더미05</td>
                                        </tr>
                                        <tr>
                                            <td class="td_bg txt_left">더미02</td>
                                            <td colspan="3">더미03</td>
                                        </tr>
                                        <tr>
                                            <td class="td_bg txt_left">더미02</td>
                                            <td>더미03</td>
                                            <td class="td_bg txt_center">더미04</td>
                                            <td>더미05</td>
                                        </tr>
                                        <tr>
                                            <td class="td_bg txt_left">더미02</td>
                                            <td>더미03</td>
                                            <td class="td_bg txt_center">더미04</td>
                                            <td>더미05</td>
                                        </tr>
                                        <tr>
                                            <td class="td_bg txt_left">더미02</td>
                                            <td>더미03</td>
                                            <td class="td_bg txt_center">더미04</td>
                                            <td>더미05</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="line_table oneline_table">
                            <table>
                                <tr>
                                    <td class="td_bg w240">더미01</td>
                                    <td>더미02</td>
                                    <td class="td_bg w200">더미03</td>
                                    <td class="w200">더미04</td>
                                </tr>
                            </table>
                        </div>
                        <div class="line_table twoline_table">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="w70">번호</th>
                                        <th class="w70">입점사</th>
                                        <th>사업자 등록번호</th>
                                        <th class="w200">상품코드</th>
                                        <th class="w200">상품명</th>
                                        <th>단가</th>
                                        <th>금액</th>
                                        <th>배송비</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>SANDI</td>
                                        <td>134-81-31110</td>
                                        <td>G1000000001</td>
                                        <td>[냉동][박스]앙버터 부쉬맨 120g 1박스(10개)</td>
                                        <td>5,750원</td>
                                        <td>5,750원</td>
                                        <td>2,500원</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="threeline_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="td_bg w240">덤덤11</td>
                                        <td>덤덤12</td>
                                    </tr>
                                    <tr>
                                        <td class="td_bg w240">덤덤11</td>
                                        <td>덤덤12</td>
                                    </tr>
                                    <tr>
                                        <td class="td_bg w240">덤덤11</td>
                                        <td>덤덤12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <popupButton class="modal_close_w" />
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";


export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>