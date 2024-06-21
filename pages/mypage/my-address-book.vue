<template>
    <div id="myAddressBook" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">배송주소록 관리</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <div class="sub_tit">
                        <h3>배송주소록 관리</h3>
                        <div class="btn_right_wrap">
                            <button class="btn btn-small btn-default">기본 배송지 설정</button>
                            <button class="btn btn-small btn-black">배송지 추가</button>
                        </div>
                    </div>
                    <ul class="delivery_list">
                        <!-- 기본 주소록 설정시 default 클래스 추가 -->
                        <li class="default">
                            <div class="radio_wrap">
                                <input type="radio" id="ship_check1" title="선택" name="ship_check" checked>
                                <label for="ship_check1">
                                    <p class="name">집</p>
                                </label>
                            </div>
                            <div class="txt_area">
                                <p class="user">김민석</p>
                                <p class="address"><span class="postal_code">08381</span> 서울특별시 구로구 디지털로27길 24 405
                                    온라인파워스 1동 711호</p>
                                <p class="phone">010-1234-5678</p>
                            </div>
                            <div class="btn_right_wrap">
                                <a href="javascript:void(0);" class="btn btn-small btn-default btn_sm btn_edit">수정</a>
                                <a href="javascript:void(0);" class="btn btn-small btn-default btn_sm btn_delete">삭제</a>
                            </div>
                        </li>
                        <li>
                            <div class="radio_wrap">
                                <input type="radio" id="ship_check2" title="선택" name="ship_check">
                                <label for="ship_check2">
                                    <p class="name">회사</p>
                                </label>
                            </div>
                            <div class="txt_area">
                                <p class="user">김민석</p>
                                <p class="address"><span class="postal_code">12345</span> 서울특별시 구로구 디지털로27길 24 405
                                    온라인파워스 1동 711호</p>
                                <p class="phone">010-1234-5678</p>
                            </div>
                            <div class="btn_right_wrap">
                                <a href="javascript:void(0);" class="btn btn-small btn-default btn_sm btn_edit">수정</a>
                                <a href="javascript:void(0);" class="btn btn-small btn-default btn_sm btn_delete">삭제</a>
                            </div>
                        </li>
                    </ul>

                    <p class="guide_txt02">등록된 배송지가 없는 경우</p>

                    <div class="sub_tit">
                        <h3>배송주소록 관리</h3>
                        <div class="btn_right_wrap">
                            <button class="btn btn-small btn-default">기본 배송지 설정</button>
                            <button class="btn btn-small btn-black">배송지 추가</button>
                        </div>
                    </div>
                    <div class="no_content on">
                        <p>등록된 배송지 정보가 없습니다.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'myAddressBook',
    data() {
        return {
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');
</style>