<template>
    <div class="modal modal_basic modal_lg" id="tradingStatementView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'거래 명세서'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div class="top_box">
                        <div class="order_stamp">
                            <img src="~/assets/img/cart/order_stamp.png" alt="" />
                        </div>
                        <table>
                            <tr>
                                <td class="td_bg">덤덤</td>
                                <td>덤덤</td>
                                <td class="td_bg">덤덤</td>
                                <td colspan="3">덤덤</td>
                            </tr>
                            <tr>
                                <td class="td_bg">덤덤</td>
                                <td>덤덤</td>
                                <td class="td_bg">덤덤</td>
                                <td>덤덤</td>
                                <td class="td_bg">덤덤</td>
                                <td>덤덤</td>
                            </tr>
                            <tr>
                                <td class="td_bg">덤덤</td>
                                <td>덤덤</td>
                                <td class="td_bg">덤덤</td>
                                <td colspan="3">덤덤</td>
                            </tr>
                            <tr>
                                <td class="td_bg">덤덤</td>
                                <td>덤덤</td>
                                <td class="td_bg">덤덤</td>
                                <td>덤덤</td>
                                <td class="td_bg">덤덤</td>
                                <td>덤덤</td>
                            </tr>
                            <tr>
                                <td class="td_bg">덤덤</td>
                                <td>덤덤</td>
                                <td class="td_bg">덤덤</td>
                                <td colspan="3">덤덤</td>
                            </tr>
                            <tr>
                                <td class="td_bg">덤덤</td>
                                <td colspan="5">덤덤</td>
                            </tr>
                        </table>
                    </div>
                    <!-- 주문견적서 동일 -->
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
                    <div class="threeline_table"></div>
                </div>
                <div class="btn-wrap">
                    <input type="button" class="btn btn-middle btn-attention" value="출력" id="print" onclick="window.print()" />
                </div>
            </div>
            <popupButton class="modal_close_w" />
        </div>
    </div>
</template>

<script>
import popupHead from "~/components/popup/part/popup-basic-head.vue";
import popupButton from "~/components/popup/part/popup-basic-button.vue";
import popupSheet from "~/components/item/popup-sheet.vue";


export default {
    name: 'popupBase',
    components: {
        popupHead,
        popupButton,
        popupSheet
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>
