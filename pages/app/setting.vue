<template>
    <div id="appSettingView">
        <TitleD1 :title-main="titleMain" />
        <div class="inner">
            <ul class="setting_wrap">
                <li>
                    <div>
                        <p>광고성 정보 수신 동의</p>
                        <div class="wrap_btn_slide">
                            <input type="checkbox" name="btn_slide01" id="btn_slide01" class="btn_slide btn_slide01" @click="flagMotion($event)">
                            <label for="btn_slide01" class="btn_slide btn_slide01">버튼01</label>
                        </div>
                    </div>
                    <div>
                        <p>쿠폰 지급 등 혜택에 관한 알림을 받을 수 있습니다.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>야간 수신 동의</p>
                        <div class="wrap_btn_slide">
                            <input type="checkbox" name="btn_slide01" id="btn_slide01" class="btn_slide btn_slide01" @click="flagMotion($event)">
                            <label for="btn_slide01" class="btn_slide btn_slide01">버튼01</label>
                        </div>
                    </div>
                    <div>
                        <p>야간(오후 9시~오전 8시)에 재입고 알림 등의 정보성 푸시 알림을 받을 수 있습니다.</p>
                    </div>
                </li>
            </ul>
            <hr>
            <div class="setting_txt">
                <p class="on">정보성 푸시 알림은 위 설정 여부와 무관하게 받을 수 있습니다. 기기의 알림 설정은 휴대폰 설정 > 애플리케이션 > 샌디몰에서 변경할 수 있습니다.</p>
                <p>정보성 푸시 알림은 위 설정 여부와 무관하게 받을 수 있습니다. 기기의 알림 설정은 휴대폰 설정 > 알림 > 샌디몰에서 변경할 수 있습니다.</p>
            </div>
        </div>

        <!-- 토스트기능 넣기 -->
    </div>
</template>

<script>
import TitleD1 from "~/components/text/title-default.vue";
export default {
  name: 'appSettingView',
  layout: "base",
  components: {
    TitleD1,
  },
  data() {
    return {
      titleMain: "앱 설정",
    };
  },
  methods: {
    flagMotion(e) {
        if(e.target.checked){
            const toast = document.querySelector('.toast_wrap')
            e.target.classList.toggle('active')
            toast.classList.add('on')
            setTimeout(() => {
                toast.classList.remove('on');
            }, 1500)
        }else{
            const toast = document.querySelector('.toast_wrap')
            e.target.classList.toggle('active')
            toast.classList.add('on')
            setTimeout(() => {
                toast.classList.remove('on');
            }, 1500)
        }
    }
  }
}
</script>

<style>

@import url('~/assets/css/pages/app.css');
</style>