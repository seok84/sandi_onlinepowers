<template>
    <div id="orderDetails" class="myInfo">
        <h2 class="title-h2 pc">마이페이지</h2>
        <h2 class="title-h2 mobile">주문/배송 상세조회</h2>
        <div class="inner">
            <etc-mypage-info />
            <!-- lnb_content_container -->
            <div class="lnb_content_container">
                <layout-lnb-mypage class="general" />
                <!-- mypage-content -->
                <div class="mypage-content">
                    <div class="sub_tit">
                        <h3>주문/배송 상세조회</h3>
                    </div>
                    <div class="lnb_content_wrapper_top">
                        <div class="gray_box">
                            <h6 class="order-number">주문번호<span>K12345678901349</span></h6>
                            <p class="date">2019-12-17 12:00:00</p>
                        </div>
                    </div>
                    <div class="order-list-container">
                        <!-- 단일 상품 -->
                        <div class="order-list-wrap">
                            <div v-for="(item, index) in itemsPurchase" :key="index" class="order-list-item">
                                <div class="condition-wrap">
                                    <!-- 배송준비중 -->
                                    <!-- 배송중 -->
                                    <!-- 취소처리중 -->
                                    <!-- 취소완료 -->
                                    <!-- 입금대기중 -->
                                    <div class="condition-item">입금대기중</div>
                                    <div class="condition-delivery">롯데택배 123 123 123 123</div>
                                </div>
                                <div class="item-list horizon">
                                    <item-part-thumbnail :item="item.thumbnail" />
                                    <item-part-info :item="item.info" />
                                </div>
                                <!-- <div class="btn_right_wrap">
                                    <a class="btn btn-small btn-default btn_sm btn_lg">주문상세 보기</a>
                                </div> -->
                                <div class="btn_right_wrap">
                                    <a class="btn btn-small btn_sm btn-primary btn_confirm"><span>구매확정</span></a>
                                    <a class="btn btn-small btn-default btn_sm">배송조회</a>
                                    <a class="btn btn-small btn-default btn_sm">교환신청</a>
                                    <a class="btn btn-small btn-default btn_sm">주문취소</a>
                                </div>
                            </div>
                        </div>

                        <!-- 세트 상품 -->
                        <div class="order-list-wrap set">
                            <div v-for="(item, index) in itemsPurchaseSet" :key="index" class="order-list-item">
                                <div class="condition-wrap">
                                    <div class="condition-item">입금대기중</div>
                                    <div class="condition-delivery">롯데택배 123 123 123 123</div>
                                </div>
                                <div class="item-list horizon">
                                    <item-part-thumbnail :item="item.item.thumbnail" />
                                    <item-part-info :item="item.item.info" />
                                </div>
                                <div class="btn_right_wrap">
                                    <a class="btn btn-small btn_sm btn-primary btn_confirm"><span>구매확정</span></a>
                                    <a class="btn btn-small btn-default btn_sm">배송조회</a>
                                    <a class="btn btn-small btn-default btn_sm">교환신청</a>
                                    <a class="btn btn-small btn-default btn_sm">주문취소</a>
                                </div>

                                <!-- 세트상품 구조 -->
                                <div class="set_wrapper">
                                    <!-- hide 로 on/off -->
                                    <button type="button" class="btn btn-default btn-small btn_lm set_box_btn"
                                        @click="item.isHide = !item.isHide" :class="{ hide: item.isHide }">
                                        세트 구성상품 보기
                                        <span class="arr"></span>
                                    </button>

                                    <!-- hide 로 on/off -->
                                    <div class="order-list-container" :class="{ hide: item.isHide }">
                                        <div class="order-list-wrap">
                                            <div v-for="(item, index) in item.items" :key="index" class="order-list-item">
                                                <div class="condition-wrap">
                                                    <div class="condition-item">입금대기중</div>
                                                    <div class="condition-delivery">롯데택배 123 123 123 123</div>
                                                </div>
                                                <div class="item-list horizon">
                                                    <item-part-thumbnail :item="item.thumbnail" />
                                                    <item-part-info :item="item.info" />
                                                </div>
                                                <div class="btn_right_wrap">
                                                    <a
                                                        class="btn btn-small btn_sm btn-primary btn_confirm"><span>구매확정</span></a>
                                                    <a class="btn btn-small btn-default btn_sm">배송조회</a>
                                                    <a class="btn btn-small btn-default btn_sm">교환신청</a>
                                                    <a class="btn btn-small btn-default btn_sm">주문취소</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <!--  전체 주문취소 -->
                        <div class="order_all_cancel">
                            <div class="btn btn-default">
                                전체 주문취소
                            </div>
                        </div>
                    </div>

                    <div class="payment_info_wrap">
                        <div class="payment_info justifyB">
                            <div class="info_tit">
                                <h6>결제정보</h6>
                                <div class="btn_right_wrap pc">
                                    <button class="btn btn-small btn-black">거래명세서</button>
                                    <button class="btn btn-small btn-default">구매영수증 발급</button>
                                </div>
                            </div>
                            <dl>
                                <dt>결제수단</dt>
                                <dd>신용카드</dd>
                                <dt>결제상태</dt>
                                <dd>결제완료</dd>
                                <dt>결제일</dt>
                                <dd>2023-01-01 12:00:00</dd>
                            </dl>
                        </div>
                        <!-- 2023.04.05 psh 수정-->
                        <p class="guide_txt02">
                            포인트 결제 시
                        </p>
                        <div class="payment_info justifyB">
                            <div class="info_tit">
                                <h6>결제정보</h6>
                                <div class="btn_right_wrap pc">
                                    <button class="btn btn-small btn-black">거래명세서</button>
                                    <button class="btn btn-small btn-default">구매영수증 발급</button>
                                </div>
                            </div>
                            <dl>
                                <dt>결제수단</dt>
                                <dd>포인트</dd>
                                <dt>결제상태</dt>
                                <dd>결제완료</dd>
                                <dt>결제일</dt>
                                <dd>2023-01-01 12:00:00</dd>
                            </dl>
                        </div>
                        <p class="guide_txt02">
                            가상계좌 결제 시
                        </p>
                        <div class="payment_info justifyB">
                            <div class="info_tit">
                                <h6>결제정보</h6>
                                <div class="btn_right_wrap pc">
                                    <button class="btn btn-small btn-black">거래명세서</button>
                                    <button class="btn btn-small btn-default">구매영수증 발급</button>
                                </div>
                            </div>
                            <dl>
                                <dt>결제수단</dt>
                                <dd>가상계좌</dd>
                                <dt>계좌번호</dt>
                                <dd>111-1111-11111</dd>
                                <dt>예금주</dt>
                                <dd>김엔티</dd>
                                <dt>결제수단</dt>
                                <dd>미결제</dd>
                                <dt>결제일</dt>
                                <dd>2023-01-01 12:00:00</dd>
                            </dl>
                        </div>
                        <p class="guide_txt02">
                            결제수단이 두가지 이상
                        </p>
                        <div class="payment_info justifyB">
                            <div class="info_tit">
                                <h6>결제정보</h6>
                                <div class="btn_right_wrap pc">
                                    <button class="btn btn-small btn-black">거래명세서</button>
                                    <button class="btn btn-small btn-default">구매영수증 발급</button>
                                </div>
                            </div>
                            <dl>
                                <dt>결제수단</dt>
                                <dd>가상계좌</dd>
                                <dt>계좌번호</dt>
                                <dd>111-1111-11111</dd>
                                <dt>예금주</dt>
                                <dd>김엔티</dd>
                                <dt>결제수단</dt>
                                <dd>미결제</dd>
                                <dt>결제일</dt>
                                <dd>2023-01-01 12:00:00</dd>
                            </dl>
                            <dl>
                                <dt>결제수단</dt>
                                <dd>포인트</dd>
                                <dt>결제상태</dt>
                                <dd>결제완료</dd>
                                <dt>결제일</dt>
                                <dd>2023-01-01 12:00:00</dd>
                            </dl>
                        </div>
                        <div class="payment_info payment_info_02 justifyB">
                            <div class="info_tit">
                                <h6>결제금액</h6>
                            </div>
                            <dl>
                                <dt class="font700">상품금액</dt>
                                <dd> <span>9,999,999</span>원</dd>
                                <dt class="indent">상품할인</dt>
                                <dd> <span>-500</span>원</dd>
                                <!-- <dt class="indent">등급할인</dt>
                                <dd> <span>0</span>원</dd> -->
                            </dl>
                            <dl class="delivery_charge">
                                <dt>배송비</dt>
                                <dd>0 원</dd>
                            </dl>
                            <dl>
                                <dt>쿠폰할인</dt>
                                <dd>0 원</dd>
                                <dt class="indent">상품쿠폰</dt>
                                <dd> <span>-2,500</span> 원</dd>
                                <dt class="indent">배송비 쿠폰</dt>
                                <dd> <span>-2,500</span> 원</dd>
                            </dl>
                            <dl class="use_point">
                                <dt>포인트 사용</dt>
                                <dd><span>0</span>P</dd>
                            </dl>
                            <dl class="payment_charge">
                                <dt class="tit">총 결제금액</dt>
                                <dd>
                                    <span>9,999,999</span>원
                                </dd>
                            </dl>
                        </div>
                        <!-- 2023.04.05 psh 수정 -->
                        <p class="guide_txt02">사업자 등급할인</p>
                        <div class="payment_info payment_info_02 justifyB">
                            <div class="info_tit">
                                <h6>결제금액</h6>
                            </div>
                            <dl>
                                <dt class="font700">상품금액</dt>
                                <dd> <span>9,999,999</span>원</dd>
                                <dt class="indent">상품할인</dt>
                                <dd> <span>-500</span>원</dd>
                                <dt class="indent">등급할인</dt>
                                <dd> <span>0</span>원</dd>
                            </dl>
                            <dl class="delivery_charge">
                                <dt>배송비</dt>
                                <dd>0 원</dd>
                            </dl>
                            <dl>
                                <dt>쿠폰할인</dt>
                                <dd>0 원</dd>
                                <dt class="indent">상품쿠폰</dt>
                                <dd> <span>-2,500</span> 원</dd>
                                <dt class="indent">배송비 쿠폰</dt>
                                <dd> <span>-2,500</span> 원</dd>
                            </dl>
                            <dl class="use_point">
                                <dt>포인트 사용</dt>
                                <dd><span>0</span>P</dd>
                            </dl>
                            <dl class="payment_charge">
                                <dt class="tit">총 결제금액</dt>
                                <dd><span>9,999,999</span>원</dd>
                            </dl>
                        </div>
                        <!-- // 사업자 등급할인 -->
                        <div class="payment_info">
                            <div class="info_tit">
                                <h6>주문자 정보</h6>

                            </div>
                            <dl>
                                <dt>이름</dt>
                                <dd>김엔티</dd>
                                <dt>연락처</dt>
                                <dd>010-1234-5678</dd>
                                <dt>이메일</dt>
                                <dd>cntmart1@naver.com</dd>
                            </dl>
                        </div>
                        <div class="payment_info">
                            <div class="info_tit">
                                <h6>배송지 정보</h6>

                            </div>
                            <dl>
                                <dt>받는분</dt>
                                <dd>김엔티</dd>
                                <dt>배송방식</dt>
                                <dd>택배</dd>
                                <dt>주소</dt>
                                <dd>[08381] 서울 구로구 디지털로27길 24(벽산디지털밸리) 711호 온라인파워스</dd>
                                <dt>연락처</dt>
                                <dd>010-1234-5678</dd>
                                <dt>배송메시지</dt>
                                <dd>경비실에 맡겨주세요.</dd>

                            </dl>
                        </div>
                    </div>
                    <a class="btn btn-primary back_list">목록으로</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'orderDetails',
    data() {
        return {
            // 세트상품
            itemsPurchaseSet: [
                {
                    isHide: false,
                    // 세트 메인상품
                    item:
                    {
                        thumbnail:
                        {
                            thumbnail: require("~/assets/img/sample/sample_item3.png"),
                            soldOut: false,
                            // rank: "01",
                            // time: "1"
                        },
                        info:
                        {
                            brand: "브랜드명",
                            title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                            option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                            optionSet: "세트 옵션이 노출되는 공간입니다",
                            // sale: "138,000",
                            price: "108,000",
                            // discounted: "27",
                            quantity: "2",
                            tag: {
                                tag1: true,
                                tag2: true,
                                tag3: true,
                                tag4: true,
                                tag5: true,
                            }
                        },
                    },
                    // 세트 구성상품
                    items: [
                        {
                            thumbnail:
                            {
                                thumbnail: require("~/assets/img/sample/sample_item3.png"),
                                soldOut: false,
                                // rank: "01",
                                // time: "1"
                            },
                            info:
                            {
                                brand: "브랜드명",
                                title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                                option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                                optionSet: "세트 옵션이 노출되는 공간입니다",
                                // sale: "138,000",
                                price: "108,000",
                                // discounted: "27",
                                quantity: "2",
                                tag: {
                                    tag1: true,
                                    tag2: true,
                                    tag3: true,
                                    tag4: true,
                                    tag5: true,
                                }
                            },
                        },
                        {
                            thumbnail:
                            {
                                thumbnail: require("~/assets/img/sample/sample_item3.png"),
                                soldOut: true,
                                // rank: "01",
                                // time: "1"
                            },
                            info:
                            {
                                brand: "브랜드명",
                                title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                                option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                                optionSet: "세트 옵션이 노출되는 공간입니다",
                                // sale: "138,000",
                                price: "108,000",
                                // discounted: "27",
                                quantity: "2",
                                tag: {
                                    tag1: true,
                                    tag2: true,
                                    tag3: true,
                                    tag4: true,
                                    tag5: true,
                                }
                            },
                        },
                    ],
                },
            ],
            // 단일상품
            itemsPurchase: [
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        // sale: "138,000",
                        price: "108,000",
                        // discounted: "27",
                        quantity: "2",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
                {
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        option: "[옵션값] 해당옵션 / [옵션값] 해당옵션 / [옵션값] 해당옵션 (+1,000원)",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        // sale: "138,000",
                        price: "108,000",
                        // discounted: "27",
                        quantity: "2",
                        tag: {
                            tag1: true,
                            tag2: true,
                            tag3: true,
                            tag4: true,
                            tag5: true,
                        }
                    },
                },
            ],
        };
    },
    methods: {}
}
</script>

<style>
@import url('~/assets/css/pages/order.css');
@import url('~/assets/css/pages/mypage.css');
</style>