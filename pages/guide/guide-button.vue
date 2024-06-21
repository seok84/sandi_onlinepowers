<template>
    <div class="guide_contents">
        

        <!-- end of guide tab -->


        <div class="content">
            <!-- 조건필터 -->
            <div class="guide_txt">조건필터</div>

            <div class="right_wrap">
                <button class="ico_inner " id="filterBtn">
                    <span class="ico ico_filter">조건필터</span>
                </button>
            </div>

            <!-- 초기화버튼 -->
            <div class="guide_txt">초기화버튼</div>

            <div class="right_wrap">
                <a class="ico_inner" id="resetBtn">
                    <span class="ico ico_reset">초기화</span>
                </a>
            </div>


            <div class="guide_txt">버튼 스타일</div>

            <button class="btn btn-default">기본 버튼</button>
            <button class="btn btn_accent">기본 버튼</button>
            <br />
            <br />
            <div class="btn-wrap">
                <!-- 개별 사용 가능 -->
                <button class="btn btn-middle btn-default">기본 버튼</button>
                <button class="btn btn-middle btn-black">기본 버튼</button>
                <div class="btn_feedback">
                    * SMS로 전체 아이디 받기시, 등록된 회원정보의 휴대전화번호로 메시지가
                    발송됩니다.
                </div>
            </div>
            <br />
            <br />
            <button class="btn btn_lm btn-small btn-default">기본 버튼</button>
            <button class="btn btn_lm btn-small btn_accent">기본 버튼</button>
            <button class="btn btn_lm btn-small btn-attention">기본 버튼</button>
            <br />
            <br />
            <button class="btn btn-attention">컬러 버튼</button>
            <button class="btn btn_secondary">컬러 버튼</button>
            <button class="btn btn_sub">컬러 버튼</button>
            <button class="btn btn_secondary readonly">컬러 버튼</button>
            <button class="btn btn_done">컬러 버튼</button>
            <button class="btn btn-tertiary">컬러 버튼</button>
            <br />
            <br />

            <div class="guide_txt">버튼 종류</div>
            <!-- coupon_down -->
            <button class="btn btn-small btn_lm btn-attention coupon_down">
                <span>모든 쿠폰 다운</span>
                <img src="~/assets/img/common/ico_down.svg" />
            </button>
            <button class="btn btn-small btn_sm btn-primary coupon_down">
                <span>쿠폰</span>
                <img src="~/assets/img/common/ico_down.svg" />
            </button>
            <button class="btn btn-small btn_sm btn-attention btn_confirm">
                <span>구매확정</span>
            </button>
            <button class="btn btn-small btn-default btn_sm">삭제</button>

            <hr style="margin: 15px 0" />

            <button type="button" class="btn btn-tertiary btn-heart user-attention"></button>
            <button type="button" class="btn btn-tertiary btn-heart user-attention active"></button>

            <hr style="margin: 15px 0" />

            <div class="thumbs_up">
                <span>도움됐어요</span>
                <button class="thumbs_btn">
                    <span class="thumbs_img"></span>
                    <span class="thumbs_count">99+</span>
                </button>
                <button class="thumbs_btn on">
                    <span class="thumbs_img"></span>
                    <span class="thumbs_count">8</span>
                </button>
            </div>

            <hr style="margin: 15px 0" />

            <button class="view_more">
                <span>더보기</span>
            </button>
        </div>

        <hr style="margin: 15px 0" />

        <div class="wrap_btn_slide">
            <input type="checkbox" name="btn_slide01" id="btn_slide01" class="btn_slide btn_slide01">
            <label for="btn_slide01" class="btn_slide btn_slide01">버튼01</label>
        </div>
    </div>
</template>

<script>


export default {
    components: {
    },
    layout: "basic",

}
</script>

<style>

</style>