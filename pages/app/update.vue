<template>
    <div class="inner app_content" id="appUpdateView">
        <h2 class="main_tit">앱 업데이트 안내</h2>
        <p class="desc">
            원활한 서비스 이용을 위해 최신 버전으로 업데이트 해주시기 바랍니다.
        </p>
        <div class="wrap_appstore">
            <div class="android">
                <a href="#">
                    <img src="~/assets/img/common/logo_app_playstore.png" alt="구글플레이스토어">
                </a>
            </div>
            <div class="apple">
                <a href="#">
                    <img src="~/assets/img/common/logo_app_appstore.png" alt="앱스토어">
                </a>
            </div>
        </div>

        <div class="logo">
            <img src="~assets/img/common/logo_b.svg" alt="대상CNT마트">
        </div>
    </div>
</template>

<script>
export default {
    name: 'appUpdateView',
    layout: "basic",
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

.wrap_appstore {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 4rem 0 0;
    text-align: center;
}

.wrap_appstore>div {
    width: 100%;
    margin: 0 3px;
    text-align: center;
    max-width: 168px;
}

h2.main_tit {
    font-size: 2.4rem;
    font-weight: 700;
}

p.desc {
    font-size: 1.8rem;
    text-align: center;
    word-break: keep-all;
}

.logo {
    position: absolute;
    bottom: 4rem;
    max-width: 12rem;
}

@media (max-width:767px) {
    .inner.app_content {
        padding: 3rem 2rem;
    }

}
</style>