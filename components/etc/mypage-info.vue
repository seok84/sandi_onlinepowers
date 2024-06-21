<template>
    <!-- on붙으면 등급 노출 -->
    <div class="my_info on">
        <div class="info_box user_link">
            <a href="javascript:void(0);" class="my_grade">
                <span class="linked_arr">
                    <img src="~/assets/img/mypage/grade_fam.png" alt="icon">
                    <b>{{ userInfo[0].user.grade }}</b>등급입니다!
                </span>
            </a>
            <p class="welcome"><b>{{ userInfo[0].user.name }}</b>님 안녕하세요!</p>
            <p class="user_mail">{{ userInfo[0].user.email }}</p>
        </div>
        <div class="info_box coupon_link">
            <a href="javascript:void(0);">
                <span class="linked_arr">
                    <img src="~/assets/img/mypage/ico_coupon.png" alt="icon">
                    <span>쿠폰</span>
                </span>
                <p><span>{{ userInfo[0].coupon.couponCount }}</span>장</p>
            </a>
        </div>
        <!-- 여신현황정보만 표시될 경우: only-finance_link붙이기 -->
        <!-- 여신현황정보가 포인트랑 같이 표시될 경우: only-finance_link클래스 지우기 -->
        <!-- <div class="info_box finance_link only-finance_link">
            <a href="javascript:void(0);">
                <span class="linked_arr">
                    <img src="~/assets/img/mypage/ico_point.png" alt="icon">
                    <span>여신현황</span>
                </span>
                <p>텍스트 항목</p>
            </a>
        </div> -->
        <div class="info_box point_link">
            <a href="javascript:void(0);">
                <span class="linked_arr">
                    <img src="~/assets/img/mypage/ico_point.png" alt="icon">
                    <span>포인트</span>
                </span>
                <p><span>{{ userInfo[0].point.point }}P</span></p>
            </a>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'MypageInfo',
    props: {
    },
    data: () => {
        return {
            userInfo: [
                {
                    user:
                    {
                        type: "business",
                        grade: "welcome",
                        name: "김철수",
                        email: "kcs123@onlinepowers.com",
                    },
                    coupon:
                    {
                        couponCount: "3",
                    },
                    point:
                    {
                        point: "1,234,999",
                    },
                }
            ]



        }
    }
}
</script>