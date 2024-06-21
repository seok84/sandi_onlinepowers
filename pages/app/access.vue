<template>
    <div class="inner app_content">
        <div class="desc_wrap">
            <div class="desc">
                <p>
                    샌디 앱 접근 권한 안내
                </p>
                <span>
                    더 나은 SANDI 서비스 사용을 위해<br />
                    다음 권한의 허용이 필요합니다.
                </span>
            </div>
            <div class="desc_02">

                <dl>
                    <dt>
                        <img src="~/assets/img/common/ico_access_01.png" alt="접근권한 - 카메라">
                    </dt>
                    <dd>
                        <p>카메라(선택)</p>
                        <span> Q&A 및 후기작성 시 <b>카메라 촬영</b>을 위한 권한 </span>
                    </dd>
                </dl>

                <dl>
                    <dt>
                        <img src="~/assets/img/common/ico_access_02.png" alt="접근권한 - 사진">
                    </dt>
                    <dd>
                        <p>사진 파일 및 미디어(선택)</p>
                        <span> Q&A 및 후기작성 시 <b>사진첨부</b>를 위한 권한 </span>
                    </dd>
                </dl>

                <dl>
                    <dt>
                        <img src="~/assets/img/common/ico_access_03.png" alt="접근권한 - 푸시알림">
                    </dt>
                    <dd>
                        <p>푸쉬(선택)</p>
                        <span> <b>마케팅 알림</b>등을 위한 권한 </span>
                    </dd>
                </dl>
            </div>
            <div class="info_wrap">
                <p class="info_dot">서비스 제공에 접근 권한이 필요한 경우에만 동의를 받고 있으며, 비허용시에도 서비스 이용이 가능합니다.</p>
                <p class="info_dot"> ‘휴대폰 설정 > SANDI’에서 각 권한 별 변경이 가능합니다.</p>

            </div>

            <div class="btn_group">
                <button type="button" class="btn btn_lg btn-primary"> 확인 </button>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'appAccessView',
    // layout: "basic",
}
</script>
  
<style scoped>


.inner.app_content {
    position: fixed;
    z-index: 3000;
    width: 100%;
    max-width: unset;
    height: 100vh;
    display: flex;
    overflow-y: auto;
    padding: 3rem 6rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
}

.desc_wrap {
    width: auto;
    max-width: 36rem;
}

.desc,
.desc_02 {
    width: 100%;
}

.desc p {
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 700;
    text-align: center;
}

.desc span {
    display: block;
    font-size: 1.4rem;
    line-height: 1.5;
    margin-top: 1rem;
    margin-bottom: 5rem;
    text-align: center;
}

.desc_02 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
}

.desc_02 dl {
    display: flex;
    align-items: center;
    margin: 0 0 3rem;
}

.desc_02 dt {
    width: 4.6rem;
    height: 4.6rem;
    background-color: #f5f5f5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.desc_02 dl:nth-of-type(1) dt img {
    width: 3rem;
}

.desc_02 dl:nth-of-type(2) dt img {
    width: 2.8rem;
}

.desc_02 dl:nth-of-type(3) dt img {
    width: 2.4rem;
}

.desc_02 dl:last-of-type {
    margin: 0;
}

.desc_02 dd {
    margin-left: 1.4rem;
    width: auto;
}

.desc_02 dd p {
    font-size: 1.6rem;
    font-weight: 600;
    color: #333;
    line-height: 1;
    padding: 0;
}


.desc_02 dd span {
    display: block;
    font-size: 1.4rem;
    color: #7c7e80;
    margin-top: 0.5rem;
}

.desc_02 dd span>b {
    font-weight: 700;
}

.info_wrap {
    width: 100%;
    margin: 9.8rem 0 0;
}

.btn_group {
    width: 100%;
}

.btn_group button {
    width: 100%;
    max-width: 50rem;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
    height: 5.4rem;
    line-height: 5.2rem;
    margin: 2rem auto 0;
    border-radius: 0.6rem;
}


@media (max-width:767px) {
    .inner.app_content {
        padding: 4rem 2rem ;
        justify-content: flex-start;
    }

    .desc p {
        font-size: 2.4rem;
    }

    .desc span {
        font-size: 2rem;
    }

    .desc_02 dl {
        margin: 0 0 2.4rem;
    }

    .desc_02 dl:last-of-type {
        margin-bottom: 4rem;
    }

    .desc_02 dd p,
    .desc_02 dd span {
        font-size: 1.8rem;
    }

    .btn_group button {
        font-size: 1.6rem;
        height: 5.4rem;
        line-height: 5.2rem;
    }
    
    .info_wrap{
        margin: 0;
    }


}
</style>