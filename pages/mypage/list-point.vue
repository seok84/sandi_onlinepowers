<template>
    <div id="coupon" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">포인트</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <h3 class="sub_tit">포인트</h3>

                    <div class="mypage_tab_wrapper">
                        <ul>
                            <li>
                                <div @click="tabIndex = 0" :class="{ 'active': tabIndex === 0 }">적립</div>
                            </li>
                            <li>
                                <div @click="tabIndex = 1" :class="{ 'active': tabIndex === 1 }">사용완료</div>
                            </li>
                        </ul>
                        <div class="box">
                            <p>
                                회원님의 보유 포인트
                                <span>9,999,999 P</span>
                            </p>
                        </div>
                    </div>

                    <!-- 적립 -->
                    <div class="tab_pane" v-if="tabIndex === 0">
                        <div class="inquiry_wrapper">
                            <div class="form_inner">
                                <div class="form_line select_wrap ">
                                    <!-- 
                                            form_control    공용스타일
                                            input_select    셀렉트 공용스타일
                                            input_select02  셀렉트 화살표 변경
                                            search_area     레이아웃 
                                            -->
                                    <select name="" id="select01"
                                        class="form_control input_select input_select02 search_area">
                                        <option value="">찾고자 하는 날짜를 설정해주세요</option>
                                        <option value="">1주일</option>
                                        <option value="">1달</option>
                                        <option value="">1년</option>
                                    </select>
                                    <button type="button" class="btn btn-small btn_accent btn-black">
                                        조회
                                    </button>
                                </div>
                            </div>

                        </div>



                        <div class="filter_wrapper">
                            <span class="all_counter">총<span class="numbering">123</span>개</span>
                        </div>
                        <ul class="point_list_wrap">
                            <li>
                                <div class="top">
                                    <span class="point_name">포인트명이 들어오는 자리입니다. 포인트 명이 들어옵니다.</span>
                                    <span class="point_score plus">3,000</span>
                                    <p class="point_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <dl>
                                    <dt>잔여포인트</dt>
                                    <dd>9,999,999P</dd>
                                    <dt>적립일</dt>
                                    <dd>2023-01-01</dd>
                                    <dt>소멸예정일</dt>
                                    <dd>2023-12-01</dd>
                                </dl>
                            </li>
                            <li>
                                <div class="top">
                                    <span class="point_name">포인트명이 들어오는 자리입니다. 포인트 명이 들어옵니다.</span>
                                    <span class="point_score plus">3,000</span>
                                    <p class="point_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <dl>
                                    <dt>잔여포인트</dt>
                                    <dd>9,999,999P</dd>
                                    <dt>적립일</dt>
                                    <dd>2023-01-01</dd>
                                    <dt>소멸예정일</dt>
                                    <dd>2023-12-01</dd>
                                </dl>
                            </li>
                            <li>
                                <div class="top">
                                    <span class="point_name">포인트명이 들어오는 자리입니다. 포인트 명이 들어옵니다.</span>
                                    <span class="point_score plus">3,000</span>
                                    <p class="point_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <dl>
                                    <dt>잔여포인트</dt>
                                    <dd>9,999,999P</dd>
                                    <dt>적립일</dt>
                                    <dd>2023-01-01</dd>
                                    <dt>소멸예정일</dt>
                                    <dd>2023-12-01</dd>
                                </dl>
                            </li>
                            <li>
                                <div class="top">
                                    <span class="point_name">포인트명이 들어오는 자리입니다. 포인트 명이 들어옵니다.</span>
                                    <span class="point_score plus">3,000</span>
                                    <p class="point_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <dl>
                                    <dt>잔여포인트</dt>
                                    <dd>9,999,999P</dd>
                                    <dt>적립일</dt>
                                    <dd>2023-01-01</dd>
                                    <dt>소멸예정일</dt>
                                    <dd>2023-12-01</dd>
                                </dl>
                            </li>

                        </ul>

                        <div class="user_use_desc">
                            <p class="tit">포인트 이용안내</p>
                            <p class="info_dot">조회기간 설정 시, 최근 1년까지의 적립 내역이 제공됩니다.</p>
                            <p class="info_dot">한번에 조회 가능한 최대 기간은 6개월 입니다.</p>
                        </div>
                        <etc-pagination />
                    </div>


                    <!-- 사용완료 -->
                    <div class="tab_pane" v-if="tabIndex === 1">
                        <div class="inquiry_wrapper">
                            <div class="form_inner">
                                <div class="form_line select_wrap ">
                                    <!-- 
                    form_control    공용스타일
                    input_select    셀렉트 공용스타일
                    input_select02  셀렉트 화살표 변경
                    search_area     레이아웃 
                    -->
                                    <select name="" id="select01"
                                        class="form_control input_select input_select02 search_area">
                                        <option value="">1주일</option>
                                        <option value="">1개월</option>
                                        <option value="">3개월</option>
                                        <option value="">6개월</option>
                                    </select>
                                    <button type="button" class="btn btn-small btn_accent btn-black">
                                        조회
                                    </button>
                                </div>
                            </div>

                        </div>



                        <div class="filter_wrapper">
                            <span class="all_counter">총<span class="numbering">123</span>개</span>
                        </div>
                        <ul class="point_list_wrap">

                            <li>
                                <div class="top">
                                    <span class="point_name">포인트명이 들어오는 자리입니다. 포인트 명이 들어옵니다.</span>
                                    <span class="point_score minus">200</span>
                                    <p class="point_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <dl>
                                    <!-- <dt>사용일</dt>
                                <dd>2023-01-01</dd> -->
                                    <!-- 사용일 혹은 만료일 로 노출 -->
                                    <dt>만료일</dt>
                                    <dd>2023-12-01</dd>
                                </dl>
                            </li>

                            <li>
                                <div class="top">
                                    <span class="point_name">포인트명이 들어오는 자리입니다. 포인트 명이 들어옵니다.</span>
                                    <span class="point_score minus">200</span>
                                    <p class="point_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <dl>
                                    <dt>사용일</dt>
                                    <dd>2023-01-01</dd>
                                    <!-- 사용일 혹은 만료일 로 노출 -->
                                    <!-- <dt>만료일</dt>
                                <dd>2023-12-01</dd> -->
                                </dl>
                            </li>

                            <li>
                                <div class="top">
                                    <span class="point_name">포인트명이 들어오는 자리입니다. 포인트 명이 들어옵니다.</span>
                                    <span class="point_score minus">200</span>
                                    <p class="point_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <dl>
                                    <!-- <dt>사용일</dt>
                                <dd>2023-01-01</dd> -->
                                    <!-- 사용일 혹은 만료일 로 노출 -->
                                    <dt>만료일</dt>
                                    <dd>2023-12-01</dd>
                                </dl>
                            </li>

                            <li>
                                <div class="top">
                                    <span class="point_name">포인트명이 들어오는 자리입니다. 포인트 명이 들어옵니다.</span>
                                    <span class="point_score minus">200</span>
                                    <p class="point_desc">쿠폰 설명이 들어오는 자리입니다.</p>
                                </div>
                                <dl>
                                    <dt>사용일</dt>
                                    <dd>2023-01-01</dd>
                                    <!-- 사용일 혹은 만료일 로 노출 -->
                                    <!-- <dt>만료일</dt>
                                <dd>2023-12-01</dd> -->
                                </dl>
                            </li>
                        </ul>

                        <div class="user_use_desc">
                            <p class="tit">포인트 이용안내</p>
                            <p class="info_dot">조회기간 설정 시, 최근 1년까지의 적립 내역이 제공됩니다.</p>
                            <p class="info_dot">한번에 조회 가능한 최대 기간은 6개월 입니다.</p>
                        </div>
                        <etc-pagination />
                    </div>


                </div>

                <etc-no-content txt="사용 가능한 포인트가 없습니다." />

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'coupon',
    data() {
        return {
            tabIndex: 0
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/mypage.css');
@import url('~/assets/css/pages/point.css');
</style>