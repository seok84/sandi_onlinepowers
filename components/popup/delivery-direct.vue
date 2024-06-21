<template>
    <div class="modal modal_basic modal_m modal_full" id="deliveryDirectView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'직배지역 보기'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div id="direct_delivery" class=" direct_delivery">
                        <div class="direct_delivery_img">
                            <img src="../../static/img/main/img_main_slide_02.png" alt="img">
                        </div>
                        <div class="threeline_table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="td_bg w130">서울</td>
                                        <td>서울 전 지역</td>
                                    </tr>
                                    <tr>
                                        <td class="td_bg w130">경기</td>
                                        <td>
                                            고양, 과천, 광명, 구리, 군포, 김포(일부), 남양주(일부), 부천,
                                            성남, 수원, 시흥, 안산, 안양, 오산, 용인 기흥구, 용인 수지구,
                                            의왕, 의정부, 파주(일부), 하남, 화성(일부)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="td_bg w130">인천</td>
                                        <td>영종도, 강화군, 옹진군 등 일부 지역 제외</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- 버튼 -->
                <div class="btn-wrap">
                    <button class="btn btn-middle btn-attention" id="">확인</button>
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
    data() {
        return {
            popupHeadTitle: "팝업타이틀",
        }
    },
    components: {
        popupHead,
        popupButton,
    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');
</style>