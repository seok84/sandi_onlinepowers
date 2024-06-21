<template>
    <div class="inner modalGuide">
        <p class="guide_txt guide_title">########## 샌디 기본 모달 - 가이드</p>

        <!-- 기본 모달 -->
        <!-- 알럿창 -->
        <button type="button" @click="alertModal.alertShow = true">ALERT</button>
        <modal-alert :alertInfo="alertModal.alertInfo" :alertShow="alertModal.alertShow" @alertClose="alertModal.alertShow = false" />

        <!-- 컨펌창 -->
        <button type="button" @click="confirmModal.alertShow = true">CONFIRM</button>
        <modal-alert :alertInfo="confirmModal.alertInfo" :alertShow="confirmModal.alertShow"
            @alertClose="confirmModal.alertShow = false" />

        <!-- 하얀 모달(타이틀O) -->
        <button type="button" @click="whiteModal.modalShow = true">타이틀 있는 모달(하양)</button>
        <modal-default-sandi :modalInfo="whiteModal.modalInfo" :modalShow="whiteModal.modalShow"
            @modalClose="whiteModal.modalShow = false">
            <div class="modal-content">
                <p class="text-center">
                    타이틀이 있는 팝업입니다.
                </p>
            </div>
            <div class="flex-center btn-wrap">
                <button type="button" class="btn width-half btn-default">취소</button>
                <button type="button" class="btn width-half btn-attention">확인</button>
            </div>
        </modal-default-sandi>

        <!-- 헤더 하이드 모달 -->
        <button type="button" @click="hideModal.modalShow = true">타이틀 없는 모달</button>
        <modal-default-sandi :modalInfo="hideModal.modalInfo" :modalShow="hideModal.modalShow"
            @modalClose="hideModal.modalShow = false">
            <div class="modal-content">
                <!-- 텍스트 가운데 정렬 -->
                <div class="only-text">
                    타이틀이 있는 팝업입니다.
                    <b>b 태그</b>를 쓰면 굵어집니다
                </div>
            </div>
        </modal-default-sandi>

        <!-- 풀 사이즈 모달 -->
        <button type="button" @click="fullModal.modalShow = true">풀 사이즈 모달</button>
        <modal-default-sandi :modalInfo="fullModal.modalInfo" :modalShow="fullModal.modalShow"
            @modalClose="fullModal.modalShow = false">
            <div class="modal-content">
                타이틀이 있는 팝업입니다.
            </div>
        </modal-default-sandi>


        <p class="guide_txt guide_title">########## 샌디 디자인 모달</p>
    </div>
</template>

<script>


export default {
    name: 'popupDesign',
    layout: "base",
    data() {
        return {

            // alert
            alertModal: {
                alertShow: false,
                alertInfo: {
                    message: "ALERT 내용",
                    alertType: "ALERT",
                }
            },
            confirmModal: {
                alertShow: false,
                alertInfo: {
                    message: "CONFIRM 내용",
                    alertType: "CONFIRM",
                },
            },

            // 각 모달에 대한 상태를 개별적으로 관리
            // 기본 가이드
            showHeader: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "헤더 활성화 모달",
                    modalFull: false,
                    headerShow: true,
                    dimmed: true,
                },
            },
            whiteModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "하얀 타이틀 모달",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            hideModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "헤더 하이드 모달",
                    modalFull: false,
                    modalWidthSmall: true,
                    headerShow: false,
                    dimmed: true,
                },
            },
            fullModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "풀 사이즈 모달",
                    modalFull: true,
                    headerShow: true,
                    dimmed: false,
                },
            },

            // 
            addressModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "배송지 목록",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            FAQModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "FAQModal 메인FAQ",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            addressInfo: [
                {
                    title: '배송지',
                    checked: true,
                    address: '[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스 주소 여기까지 노출',
                    phoneNumber: '010 - 1234 - 5678',
                    checked: true
                },
                {
                    title: '배송지2',
                    checked: false,
                    address: '[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스 주소 여기까지 노출',
                    phoneNumber: '010 - 2345 - 6789',
                    checked: false
                },
                // 나머지 배송지 데이터들
            ],
            addressModal02: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "배송지 추가",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            agreeModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "알림 수신 동의",
                    modalFull: false,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: false,
                },
            },
            reviewModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "후기작성",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            orderCancelModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "취소신청",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            orderReturnModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "반품신청",
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            productModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "적용상품보기",
                    modalFull: true,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },

        }
    },
    mounted() {
    },
    methods: {

    }
}
</script>

<style>
@import url('~/assets/css/layouts/modal-ui.css');

.guide_txt {
    text-align: center;
}

.guide_title {
    background-color: blueviolet;
    color: white;
}

button[type="button"]:not(.btn) {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background-color: #60a5fa;
    color: #fff;
    padding: 1rem;
    border-radius: .5rem;
}

button[type="button"]:not(.btn):hover {
    background-color: #2563eb;
}
</style>