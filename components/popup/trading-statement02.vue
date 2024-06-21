<template>
    <div class="modal modal_basic modal_lg" id="tradingStatement02View">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'거래 명세서02'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div class="top_box">
                        <div class="order_stamp">
                            <img src="~/assets/img/cart/order_stamp.png" alt="" />
                        </div>
                        <table>
                            <tr>
                                <td class="td_bg">주문일</td>
                                <td>2023.05.30</td>
                                <td rowspan="6" class="td_bg w50">공급자</td>
                                <td class="td_bg">등록번호</td>
                                <td colspan="3">2000-0000-3000</td>
                            </tr>
                            <tr>
                                <td class="td_bg">주문인</td>
                                <td>이세희 귀하</td>
                                <td class="td_bg">상호</td>
                                <td>대상에프앤비(주)</td>
                                <td class="td_bg">대표자</td>
                                <td>유윤상</td>
                            </tr>
                            <tr>
                                <td class="td_bg">수령인</td>
                                <td>이세희</td>
                                <td class="td_bg">사업장<br/>주소</td>
                                <td colspan="3">서울특별시 서초구 방배로 208 3층 대상다이브스㈜ (06585)</td>
                            </tr>
                            <tr>
                                <td class="td_bg">주문번호</td>
                                <td>1245751801</td>
                                <td class="td_bg">업태</td>
                                <td>도소매/도매</td>
                                <td class="td_bg">종목</td>
                                <td>식잡/주방용품</td>
                            </tr>
                            <tr>
                                <td class=".modal_content table td:last-child">결제일시</td>
                                <td>2022년 02월 17일</td>
                                <td class="td_bg">전화번호</td>
                                <td colspan="3">1599-7751</td>
                            </tr>
                            <tr>
                                <td class="td_bg">합계금액</td>
                                <td>72,460</td>
                                <td class=""></td>
                                <td colspan="3"></td>
                            </tr>
                        </table>
                    </div>
                    <!-- 주문견적서 동일 -->
                    <div class="line_table twoline_table">
                        <table>
                            <thead>
                                <tr>
                                    <th>품명</th>
                                    <th class="w70">수량</th>
                                    <th class="w70">단가</th>
                                    <th class="w70">공급가액</th>
                                    <th class="w70">세액</th>
                                    <th class="w70">비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>제품명</td>
                                    <td>1</td>
                                    <td>21,000</td>
                                    <td>19,091</td>
                                    <td>1,909</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>제품명</td>
                                    <td>2</td>
                                    <td>4,900</td>
                                    <td>9,800</td>
                                    <td></td>
                                    <td>면세</td>
                                </tr>
                                <tr>
                                    <td>제품명</td>
                                    <td>1</td>
                                    <td>41,800</td>
                                    <td>38,000</td>
                                    <td>3,800</td>
                                    <td></td>
                                </tr>
                                <tr class="fixed_tr">
                                    <td>배송비</td>
                                    <td></td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td></td>
                                </tr>
                                <tr class="fixed_tr">
                                    <td>총 할인금액</td>
                                    <td></td>
                                    <td>-140</td>
                                    <td>-140</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="fixed_tr">
                                    <td>즉시할인</td>
                                    <td></td>
                                    <td>-140</td>
                                    <td>-140</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr class="fixed_tr">
                                    <td colspan="3">총합계</td>
                                    <td>66,751</td>
                                    <td>5,709</td>
                                    <td>72,460</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
