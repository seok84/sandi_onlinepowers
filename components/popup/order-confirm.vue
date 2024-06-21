<template>
    <div class="modal modal_basic modal_m modal_full" id="orderConfirmView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'배송지 확인'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div class="modal_txt">배송받을 주소가 맞나요?</div>
                    <div class="modal_table_wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th class="td_bg">배송지 주소</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>배송지 주소 들어가는 곳 배송지 주소 들어가는 곳 배송지 주소 들어가는 곳 배송지 주소 들어가는 곳 배송지 주소 들어가는 곳 배송지 주소 들어가는 곳
                                        배송지 주소 들어가는 곳 배송지 주소 들어가는 곳 배송지 주소 들어가는 곳 </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td class="td_bg w130">받는사람</td>
                                    <td>
                                        ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
                                    </td>
                                </tr>
                                <tr>
                                    <td class="td_bg w130">연락처</td>
                                    <td>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="order_confirm_info">
                        <p class="info_dot">
                            <span>
                                결제가 완료된 내역은 <b>실시간 포장작업</b>이 이루어지기 때문에 <b>주문취소, 주문 변경이 불가할 수 있습니다.</b>
                            </span>
                            <span>
                                주문내역을 꼭 한 번 더 확인 후 결제해주세요.
                            </span>
                        </p>

                    </div>


                </div>
                <!-- 버튼 -->
                <div class="btn-wrap">
                    <button id="" class="btn btn-middle btn-default">취소</button>
                    <button id="" class="btn btn-middle btn-attention">결제하기</button>
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
    },
    mounted() {
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>