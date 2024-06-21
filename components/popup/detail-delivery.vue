<template>
    <div class="modal modal_basic modal_m modal_full" id="detailDeliveryView">
        <div class="modal_wrapper">
            <popupHead :popupHeadTitle="'제주/도서산간지역'" />
            <div class="modal_body">
                <div class="modal_content">
                    <div class="form_line select_wrap modal_fixed_top">
                        <select name="" id="select02" class="form_control input_select input_select02 input_select_sm">
                            <option value="">더미01</option>
                            <option value="">더미02</option>
                            <option value="">더미03</option>
                            <option value="">더미04</option>
                        </select>
        
                        <input type="text" name="address_01" id="address_01" placeholder="" class="form_control form_search"
                            value="" readonly="" />
                        <a href="javascript:void(0);" class="search_address">주소 검색</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>우편번호/주소</th>
                                <th>제주</th>
                                <th>도서산간</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p class="address">23103</p>
                                    <p>인천 옹진군 백령면 북포리 544-4</p>
                                </td>
                                <td>○</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="address">23103</p>
                                    <p>인천 옹진군 백령면 북포리 544-4</p>
                                </td>
                                <td>○</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="address">23103</p>
                                    <p>인천 옹진군 백령면 북포리 544-4</p>
                                </td>
                                <td>○</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="address">23103</p>
                                    <p>인천 옹진군 백령면 북포리 544-4</p>
                                </td>
                                <td>○</td>
                                <td>○</td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="address">23103</p>
                                    <p>인천 옹진군 백령면 북포리 544-4</p>
                                </td>
                                <td>○</td>
                                <td>○</td>
                            </tr>
                        </tbody>
                    </table>
                    <etc-pagination class="modal_fixed_bottom" />
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
