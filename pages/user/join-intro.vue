<template>
    <div id="joinIdentifyView" class="userPages" >
        <div class="inner">
            <h2 class="title-h2">회원가입</h2>
            <div class="tab_container">
                <div class="tab_wrapper">
                    <a href="javascript:void(0)" class="btn btn_tab " :class="{'active': !isActive }" @click="isActive = !isActive">
                        <span>일반 회원</span>
                    </a>
                    <a href="javascript:void(0)" class="btn btn_tab " :class="{'active': isActive }" @click="isActive = !isActive">
                        <span>사업자 회원</span>
                    </a>
                </div>
                <div class="box">
                    <p class="intro"><strong class="text_primary">샌디</strong> 가입을 환영합니다.</p>
                    <p>
                        샌디 회원으로 가입하실 경우 각종 <strong>이벤트 및</strong><br class="pc"><strong> 더 많은 혜택과 편리한 서비스</strong>를 받으실 수 있습니다.
                    </p>
                </div>
                <a href="javascript:void(0);" v-show="!isActive">
                    <button class="btn btn-attention">사업자 회원 본인인증</button>
                </a>
                <a href="javascript:void(0);" v-show="isActive">
                    <button class="btn btn-attention">회원 본인인증</button>
                </a>
            </div>
    
        </div>
    </div>
</template>

<script>
export default {
    name: 'joinIdentifyView',
    components: {
    },
    data() {
        return {
            isActive : false,
        };
    },
}
</script>

<style>
@import url('~/assets/css/pages/users.css');

#joinIdentifyView .box {
    padding: 4.5rem  1.5rem 4rem;
    background: var(--color-lightblue);
    font-size: 1.6rem;
    letter-spacing: -.05rem;
    line-height: 2.4rem;
    border-radius: .8rem;
    text-align: center;
}

#joinIdentifyView .box .intro {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0 0 1rem;
}

#joinIdentifyView .box strong {
    font-weight: bold;
}


/* 
#joinIdentifyView .style_text {
    text-align: center;
}

#joinIdentifyView .style_text p::before {
    content: '';
    position: absolute;
    top: -1.2rem;
    left: -1.2rem;
    width: 5.8rem;
    height: 2.8rem;
    background-image: url('~/assets/img/common/menu_wave_pri.svg');
    background-position: center center;
    background-size: contain;
    z-index: -1;
}

#joinIdentifyView .style_text p {
    display: inline-block;
    position: relative;
    font-size: 2.4rem;
    
}

#joinIdentifyView .style_text2 {
    margin-top: calc(-8rem + 0.6rem);
    text-align: center;
} */
</style>
