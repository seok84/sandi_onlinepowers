<template>
    <div id="orderStep01">
        <h2 class="title-h2">주문/결제</h2>
        <div class="inner cart-inner">
            <div class="cart-left-wrapper" ref="cartLeftWrapper">
                <div class="sub-tit-box" @click="orderListToggle = !orderListToggle">
                    <h4>주문상품 <span class="total">(4)</span></h4>
                    <button type="button" class="btn-toggle" :class="{ open: orderListToggle == true }">열기/닫기</button>
                </div>

                <form>
                    <!-- /////////// cart_container ////////// -->
                    <div class="cart-container order" v-show="orderListToggle">
                        <div class="item-list-container">
                            <div class="coupon-area">
                                <button type="button" class="btn-coupon-toggle" @click="offCoupon = !offCoupon">오프라인 쿠폰
                                    등록하기</button>
                                <div class="coupon-input-area" :class="{ hidden: offCoupon == false }">
                                    <input type="text" placeholder="-없이 발급받은 쿠폰번호를 입력해주세요">
                                    <button type="button" class="btn-cancel">취소</button>
                                    <button type="button" class="btn-coupon-reg">등록</button>
                                </div>
                            </div>

                            <div class="item-list vert" v-for="(item, index) in items" :key="index">
                                <item-part-thumbnail :item="item.thumbnail" />
                                <item-part-info :item="item.info" />
                                <item-part-cart :item="item.info" />
                            </div>

                            <div class="package">
                                <div class="item-list vert" v-for="(packageItem, indexA) in packageItems" :key="indexA">
                                    <item-part-thumbnail :item="packageItem.thumbnail" />
                                    <item-part-info :item="packageItem.info" />
                                    <item-part-cart :item="packageItem.info" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- /////////// cart_container ////////// -->

                    <!-- ///////////////////// START OF cart_container //////////////////// -->

                    <div class="user-container">
                        <!-- 주문자 정보 -->
                        <div class="sub-tit-box" @click="userInputAreaToggle = !userInputAreaToggle">
                            <h4>주문자 정보</h4>
                            <button type="button" class="btn-toggle"
                                :class="{ open: userInputAreaToggle == true }">열기/닫기</button>
                        </div>

                        <div class="user-input-area" v-show="userInputAreaToggle">
                            <!-- 이름 -->
                            <div class="form-line">
                                <span class="form-title accent">이름</span>

                                <input type="text" placeholder="김온파" class="form-control" minlength="6"
                                    value="김온파 (가입 시 본인인증 했던 정보/수정가능)" readonly="readonly">

                                <div class="invalid-feedback">
                                    김온파 (가입 시 본인인증 했던 정보/수정가능)
                                </div>

                            </div>

                            <!-- 주소 -->
                            <div class="address-input-area">
                                <div class="form-line">
                                    <label for="input_id01" class="form-title">주소</label>
                                    <input type="text" name="addressId1" placeholder="우편번호"
                                        class="form-control address-input" disabled>
                                    <button class="search-address">주소검색</button>
                                </div>
                                <div class="form-line">
                                    <input type="text" name="addressId2" placeholder="기본주소" class="form-control" disabled>
                                </div>
                                <div class="form-line">
                                    <input type="text" name="addressId3" placeholder="상세주소" class="form-control">
                                </div>
                            </div>

                            <!-- 휴대폰번호 -->
                            <div class="form-line select-wrap">
                                <span class="form-title accent">휴대폰번호</span>
                                <input type="number" placeholder="01012341234" class="form-control" minlength="8" disabled>
                            </div>

                            <!-- 이메일 -->
                            <div class="form-line">
                                <span class="form-title accent">이메일</span>

                                <input type="email" placeholder="이메일" class="form-control" minlength="6" value="이메일">

                                <div class="invalid-feedback">
                                    유효하지 않은 이메일입니다.
                                </div>

                            </div>

                        </div>


                        <!-- 배송지 정보 -->
                        <div class="sub-tit-box" @click="addressListToggle = !addressListToggle">
                            <h4>배송지 정보</h4>
                            <button type="button" class="btn-toggle"
                                :class="{ open: addressListToggle == true }">열기/닫기</button>
                        </div>

                        <div class="address-apply" v-show="addressListToggle">
                            <div class="shipping-select">
                                <div class="col">
                                    <label><input type="radio" name="shipping-select"> 기본 배송지</label>
                                    <label><input type="radio" name="shipping-select"> 새로운 배송지</label>
                                    <label><input type="radio" name="shipping-select"> 주문자와 동일</label>
                                </div>
                                <button type="button" class="btn-shipping-list" @click="addressModal.modalShow = true">배송지
                                    목록</button>

                                <!-- 배송지 목록 -->
                                <modal-default-sandi :modalInfo="addressModal.modalInfo" :modalShow="addressModal.modalShow"
                                    @modalClose="addressModal.modalShow = false" class="address-modal">
                                    <!--20231102 address-content-wrap -->
                                    <div class="address-content-wrap">
                                        <ul class="address-content address-list">
                                            <li class="radio-wrap basic-address">
                                                <label for="">
                                                    <input type="radio" name="address-checked" checked>
                                                </label>
                                                <div class="user-info">
                                                    <p class="address-title"><strong>배송지</strong><span>기본배송지</span></p>
                                                    <p>[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스 주소 여기까지 노출</p>
                                                    <p>010 - 1234 - 5678</p>
                                                </div>
                                            </li>
                                            <li class="radio-wrap">
                                                <label for="">
                                                    <input type="radio" name="address-checked">
                                                </label>
                                                <div class="user-info">
                                                    <p class="address-title">
                                                        <strong>배송지2</strong>
                                                        <!-- <span>기본배송지</span> -->
                                                    </p>
                                                    <p>[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스 주소 여기까지 노출</p>
                                                    <p>010 - 1234 - 5678</p>
                                                </div>
                                            </li>
                                            <li class="radio-wrap">
                                                <label for="">
                                                    <input type="radio" name="address-checked">
                                                </label>
                                                <div class="user-info">
                                                    <p class="address-title">
                                                        <strong>배송지2</strong>
                                                        <!-- <span>기본배송지</span> -->
                                                    </p>
                                                    <p>[08381] 서울특별시 구로구 디지털로27길 24 711 온라인파워스 주소 여기까지 노출</p>
                                                    <p>010 - 1234 - 5678</p>
                                                </div>
                                            </li>
                                        </ul>

                                        <p class="null">
                                            등록된 배송주소록이 없습니다
                                        </p>
                                    </div>
                                    <button type="button" class="btn add-address-item"
                                        @click="addressModal.modalShow = false, addressModal02.modalShow = true">
                                        &nbsp;&nbsp;배송지 추가
                                    </button>
                                    <div class="btn-wrap">
                                        <button type="button" class="btn btn-primary">확인</button>
                                    </div>
                                </modal-default-sandi>

                                <!-- 배송지 추가 -->
                                <modal-default-sandi :modalInfo="addressModal02.modalInfo"
                                    :modalShow="addressModal02.modalShow" @modalClose="addressModal02.modalShow = false"
                                    class="                                                   ">
                                    <form>
                                        <div class="address-content">
                                            <!-- 배송지 -->
                                            <span class="form-line">
                                                <input type="text" placeholder="배송지" class="form-basic">
                                                <span class="feedback" style="display: none;"></span>
                                            </span>
                                            <!-- 이름 입력 -->
                                            <span class="form-line">
                                                <input type="text" placeholder="이름 입력" class="form-basic">
                                                <span class="feedback" style="display: none;"></span>
                                            </span>
                                            <!--  우편번호 -->
                                            <span class="form-line form-address">
                                                <input type="text" class="form-basic" placeholder="우편번호" value="" />
                                                <button class="btn btn-address">우편번호 찾기</button>
                                                <span class="feedback" style="display: none;"></span>
                                            </span>
                                            <!-- 기본 주소 -->
                                            <span class="form-line">
                                                <input type="text" placeholder="기본 주소" class="form-basic">
                                                <span class="feedback" style="display: none;"></span>
                                            </span>
                                            <!-- 상세 주소 -->
                                            <span class="form-line">
                                                <input type="text" placeholder="상세 주소" class="form-basic">
                                                <span class="feedback" style="display: none;"></span>
                                            </span>
                                            <!-- 전화번호 -->
                                            <span class="form-line">
                                                <input type="text" placeholder="전화번호 '-' 없이 숫자만 입력" class="form-basic">
                                                <span class="feedback" style="display: none;"></span>
                                            </span>
                                            <p class="info-dot">3층 이상 상가 또는 사업장이 아닌 가정집일 경우 일반 택배로 배송되오니 원활한 배송을 위해 가능한 영업장
                                                주소를
                                                적어주시기 바랍니다.</p>
                                            <div class="check-area">
                                                <label class="check-wrap">
                                                    <input type="checkbox" checked>
                                                    <span>기본 배송지로 설정</span>
                                                </label>
                                                <label class="check-wrap">
                                                    <input type="checkbox">
                                                    <span>기본 정보 가져오기</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="flex-center btn-wrap">
                                            <button type="button" class="btn width-half btn-primary">확인</button>
                                        </div>
                                    </form>
                                </modal-default-sandi>
                            </div>

                            <div class="form-line">
                                <span class="form-title accent">이름</span>

                                <input type="text" placeholder="김온파" class="form-control" minlength="6"
                                    value="김온파 (가입 시 본인인증 했던 정보/수정가능)">

                                <div class="invalid-feedback">
                                    김온파 (가입 시 본인인증 했던 정보/수정가능)
                                </div>

                            </div>

                            <!-- 주소 -->
                            <div class="address-input-area">
                                <div class="form-line">
                                    <label for="input_id01" class="form-title">주소</label>
                                    <input type="text" name="addressId1" placeholder="우편번호"
                                        class="form-control address-input">
                                    <button class="search-address">주소검색</button>
                                </div>
                                <div class="form-line">
                                    <input type="text" name="addressId2" placeholder="기본주소" class="form-control">
                                </div>
                                <div class="form-line">
                                    <input type="text" name="addressId3" placeholder="상세주소" class="form-control">
                                </div>
                            </div>

                            <div class="form-line select-wrap">
                                <span class="form-title accent">휴대폰번호</span>
                                <input type="number" placeholder="01012341234" class="form-control" minlength="8" disabled>
                            </div>


                            <div class="form-line select-wrap">
                                <span class="form-title">요청사항</span>
                                <div class="input-select-wrap">
                                    <select class="form-control input-select">
                                        <option value="">배송 요청사항을 선택하세요</option>
                                        <option value="">배송 요청사항을 선택하세요02</option>
                                        <option value="">배송 요청사항을 선택하세요03</option>
                                        <option value="">배송 요청사항을 선택하세요04</option>
                                    </select>
                                </div>
                                <input type="text" placeholder="배송요청 사항 입력" class="form-control">
                            </div>

                        </div>


                        <div class="sub-tit-box" @click="pointApplyToggle = !pointApplyToggle">
                            <h4>포인트</h4>
                            <button type="button" class="btn-toggle"
                                :class="{ open: pointApplyToggle == true }">열기/닫기</button>
                        </div>

                        <div class="point-apply" v-show="pointApplyToggle">
                            <p class="retention-point">보유 포인트<span class="point"> 9,999</span></p>
                            <div class="input-area">
                                <input type="text" placeholder="0" value="0" class="form-control">
                                <button type="button" class="btn btn-accent">모두사용</button>
                            </div>
                        </div>

                        <div class="sub-tit-box" @click="paymentMethodToggle = !paymentMethodToggle">
                            <h4>결제방법</h4>
                            <button type="button" class="btn-toggle"
                                :class="{ open: paymentMethodToggle == true }">열기/닫기</button>
                        </div>

                        <div class="payment-method" v-show="paymentMethodToggle">
                            <div class="checkbox-area">
                                <label><input type="checkbox"> 최근 결제 수단으로 결제 : 신용카드</label>
                            </div>
                            <div class="payment-select">
                                <button type="button" class="payment-box" v-for="(paymentMethod, index) in paymentMethods"
                                    :class="[index === pIndex ? 'active' : '']"
                                    @click="paymentActive(index)"><!-- kakao 클래스 추가시 카카오페이 -->
                                    {{ paymentMethod }}
                                </button>
                            </div>

                            <!-- 무통장 입금
                        <ul class="payment-notice dot-list">
                            <li>무통장 입금시 발생하는 수수료는 손님 부담입니다.</li>
                            <li>
                                인터넷 뱅킹 또는 은행창구 입금시 의뢰인(송금인)명은 ‘입금인 입력’란에 입금하신 성함과 동일하게 기재해 주시기 바랍니다.<br>
                                (만약 다를 경우 고객센터 1234-5678로 꼭 연락주시기 바랍니다.)
                            </li>
                            <li>무통장 입금시 입금자와 입금 예정일을 입력해주세요.</li>
                            <li>현금영수증 미신청시 현금영수증 발급이 되지 않습니다.</li>
                        </ul> -->

                            <!-- 신용카드 -->
                            <ul class="payment-notice dot-list">
                                <li>MAC 환경에서도 신용카드 결제가 가능합니다. (ISP 결제 제외)</li>
                                <li>국내 모든 카드 사용이 가능하며 해외에서 발행된 카드는 이용하실수 없습니다.</li>
                                <li>금요일 오후 6시~ 일요일 주문은 결제 완료 후 취소 요청시 고객 센터 &gt; 주문취소를 이용하시면 됩니다.</li>
                            </ul>

                            <!-- 가상계좌 -->
                            <ul class="payment-notice dot-list hidden">
                                <li>가상계좌 입금시 발생하는 수수료는 손님 부담입니다.</li>
                                <li>인터넷 뱅킹 또는 은행창구 입금시 의뢰인(송금인)명은 ‘입금인 입력’란에 입금하신 성함과 동일하게 기재해 주시기 바랍니다. ( 만약 다를 경우 고객센터
                                    1234-5678로 꼭 연락주시기 바랍니다.)</li>
                                <li>가상계좌 입금시 입금자와 입금 예정일을 입력해주세요.</li>
                                <li>현금영수증 미신청시 현금영수증 발급이 되지 않습니다.</li>
                            </ul>

                            <!-- 휴대폰 -->
                            <ul class="payment-notice dot-list hidden">
                                <li>휴대폰으로 결제하신 금액은 익월 휴대폰 요금에 함께 청구되며 별도의 수수료는 부과되지 않습니다.</li>
                                <li>휴대폰 소액결제로 구매하실 경우 현금영수증이 발급되지 않습니다.</li>
                                <li>다음의 경우에는 휴대폰 결제를 이용하실 수 없습니다.
                                    <ul class="sub-list">
                                        <li>- 미납/체납 중인 휴대폰 요금이 있을 경우</li>
                                        <li>- 이동통신사 가입기간(번호이동포함) 6개월 이하인 경우</li>
                                        <li>- 외국인, 미성년자 요금제, 법인휴대폰, 선불요금제인 경우</li>
                                        <li>- LGT 이용자 중 통신사로 [자동결제] 차단 신청하신 경우</li>
                                    </ul>
                                </li>
                                <li>휴대폰으로 결제 가능한 최대 금액은 월 30만원 이며 개인별 한도 금액은 통신사 및 개인 설정에 따라 다를 수 있습니다.</li>
                                <li>휴대폰으로 결제하신 금액은 익월 휴대폰 요금에 함께 청구되며 별도의 수수료는 부과되지 않습니다.
                                    <ul class="sub-list">
                                        <li>- 결제 당월 취소/반품/품절환불 : 휴대폰 이용요금에 부과예정이던 금액이 취소됩니다.</li>
                                        <li>- 결제 당월 지난 후 취소/반품/품절환불 : 환불계좌 확인 후 무통장 계좌로</li>
                                    </ul>
                                </li>
                                <li>휴대폰결제관련 문의사항은 LG유플러스전자결제 고객센터 1544-7772 또는 29CM 1644-0560으로 연락해주시기 바랍니다.</li>
                            </ul>

                            <!-- 계좌이체 -->
                            <ul class="payment-notice dot-list hidden">
                                <li>실시간 이체 결제시 화면 아래 '결제하기'버튼을 클릭하시면 실시간 이체 결제 창이 나타납니다.</li>
                                <li>실시간 이체 결제 창을 통해 입력되는 고객님의 정보는 128bit로 안전하게 암호화되어 전송되며 승인 처리 후 정보는 승인 성공/ 실패 여부에 상관없이 자동
                                    으로 폐기되므로, 안전합니다.</li>
                                <li>실시간 이체 결제 신청시 승인 진행에 다소 시간이 소요될 수 있으므로 '중지', '새로고침'을 누르지 마시고 결과 화면이 나타 날때까지 기다려 주십시오.
                                </li>
                                <li>신용카드/ 실시간 이체는 결제 후, 무통장입금은 입금확인 후 배송이 이루어집니다.</li>
                                <li>금요일 오후 6시 ~ 일요일 주문은 결제완료 후 취소요청시, [고객센터]-[주문취소]를 이용하시면 됩니다. (상품출고는 토요일에도 정상적으로 이루어집니다.)
                                </li>
                                <li>온라인 실시간 계좌 이체 서비스는 은행계좌만 있으면 누구나 이용하실 수 있는 서비스로, 별도의 신청없이 그 대금을 자신의 거래은행의 계좌로부터 바로 지불하는
                                    서비스입니다.<br>
                                    안전한 거래를 위해 결제시 공인인증서가 반드시 필요합니다.<br>
                                    은행 이용가능 서비스 시간은 은행사정에 따라 다소 변동될수 있습니다.</li>
                            </ul>

                            <!-- 카카오페이 -->
                            <ul class="payment-notice dot-list hidden">
                                <li>가상계좌 입금시 발생하는 수수료는 손님 부담입니다.</li>
                                <li>인터넷 뱅킹 또는 은행창구 입금시 의뢰인(송금인)명은 ‘입금인 입력’란에 입금하신 성함과 동일하게 기재해 주시기 바랍니다. ( 만약 다를 경우 고객센터
                                    1234-5678로 꼭 연락주시기 바랍니다.)</li>
                                <li>가상계좌 입금시 입금자와 입금 예정일을 입력해주세요.</li>
                                <li>현금영수증 미신청시 현금영수증 발급이 되지 않습니다.</li>
                            </ul>


                            <div class="form-line">
                                <span class="form-title">입금은행</span>
                                <select class="form-control input-select ">
                                    <option value="null">은행을 선택하세요</option>
                                    <option value="">국민은행</option>
                                    <option value="">기업은행</option>
                                    <option value="">신한은행</option>
                                </select>
                            </div>

                            <div class="form-line">
                                <span class="form-title">입금자명</span>
                                <input type="text" class="form-control" placeholder="입금자명" value="입금자명">
                            </div>

                            <div class="form-line">
                                <span class="form-title">입금예정일</span>
                                <select class="form-control input-select">
                                    <option value="null">2023-10-04</option>
                                    <option value="">2023-10-04</option>
                                    <option value="">2023-10-04</option>
                                    <option value="">2023-10-04</option>
                                </select>
                            </div>

                            <div class="form-line">
                                <span class="form-title  with-radio">에스크로 결제 여부</span>
                                <div class="radio-wrap">
                                    <label><input type="radio"> 예</label>
                                    <label><input type="radio"> 아니요</label>
                                </div>
                            </div>

                            <div class="form-line">
                                <span class="form-title  with-radio">현금 영수증 신청</span>
                                <div class="radio-wrap">
                                    <label><input type="radio"> 신청안함</label>
                                    <label><input type="radio"> 개인 소득공제용</label>
                                    <label><input type="radio"> 사업자 증빙용</label>
                                </div>
                                <input type="text" class="form-control" placeholder="휴대전화 또는 사업자등록번호를 숫자만 입력해 주세요"
                                    value="휴대전화 또는 사업자등록번호를 숫자만 입력해 주세요">
                            </div>


                        </div>

                    </div>

                </form>
                <!-- ///////////////////// END OF cart_container //////////////////// -->


            </div>


            <!-- ///////////////////// cart-bot cart-aside //////////////////// -->
            <order-asideBox />


        </div>

        <!-- ///////////////////// cart-bot cart-bottom-wrapper //////////////////// -->
        <div class="cart-bot cart-bottom-wrapper" ref="cartBottomWrapper">
            <div class="order">
                <h3 class="total-items">선택상품 : <span>6</span> 개</h3>
                <dl class="order-price">
                    <dt>총 상품금액</dt>
                    <dd><span class="price">100,300</span>원</dd>
                </dl>
                <div class="discount">
                    <dl>
                        <dt>세트할인</dt>
                        <dd>0원</dd>
                        <dt>상품할인</dt>
                        <dd>0원</dd>
                        <dt>회원할인(등급)</dt>
                        <dd>0원</dd>
                        <dt>배송비 할인</dt>
                        <dd>0원</dd>
                    </dl>
                    <dl class="user-discount">
                        <dt><strong>쿠폰할인</strong></dt>
                        <dd><strong>1,000원</strong></dd>
                        <dt><strong>포인트 사용</strong></dt>
                        <dd><strong>1,000원</strong></dd>
                    </dl>
                    <p class="text-right">적립예정 포인트 9,999,999P</p>
                </div>

                <dl class="total-order">
                    <dt class="order-amount">최종 결제 금액</dt>
                    <dd class="order-totalprice">100,300원</dd>
                </dl>
            </div>

            <div class="order-agree">
                <label><input type="checkbox"> <span>개인정보 제 3자 제공 동의</span></label> <i @click="isActive = !isActive"></i>
                <div class="box" :class="{ hidden: isActive == false }">
                    개인정보 제 3자 제공 동의 텍스트입니다.<br>
                    개인정보 제 3자 제공 동의 텍스트입니다.<br>
                    개인정보 제 3자 제공 동의 텍스트입니다.
                </div>
                <label><input type="checkbox"> <span>주문할 상품의 상품명, 상품가격, 배송 정보를 확인하였으며, 구매에 동의 하시겠습니까?</span></label>
            </div>

        </div>
    </div>
</template>

<script>
import orderItem from "~/components/order/order-item.vue";
import infoToast from "~/components/popup/cart-delivery-toast.vue";
import companyToast from "~/components/popup/cart-company-toast.vue";
import { asideHeight, observeCartLeftWrapper, titleClose } from "~/assets/js/cart.js";
import inputEmail from "~/components/form/input-email.vue";
import inputPhone from "~/components/form/input-phone.vue";

export default {

    name: 'orderStep01',
    components: {
        orderItem,
        infoToast,
        companyToast,
        inputPhone
    },
    data() {
        return {
            titleMain: "주문/결제",
            modalShow: 0,
            pIndex: 0,
            isActive: false,
            isTabActive: false,
            orderListToggle: true,
            userInputAreaToggle: true,
            addressListToggle: true,
            pointApplyToggle: true,
            paymentMethodToggle: true,
            offCoupon: false,
            items: [
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "1",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        gift: "사은품 내용이 노출되는 공간입니다",
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
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "2",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        gift: "사은품 내용이 노출되는 공간입니다",
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
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "3",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        gift: "사은품 내용이 노출되는 공간입니다",
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
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "4",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        gift: "사은품 내용이 노출되는 공간입니다",
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
            packageItems: [
                {
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "1",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        gift: "사은품 내용이 노출되는 공간입니다",
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
                    checked: false,
                    thumbnail:
                    {
                        thumbnail: require("~/assets/img/sample/sample_item3.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        index: "2",
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        sale: "138,000",
                        price: "108,000",
                        shipping: "2,500",
                        totalPrice: "110,500",
                        discounted: "27",
                        option: "[옵션값] 해당옵션",
                        optionSet: "세트 옵션이 노출되는 공간입니다",
                        gift: "사은품 내용이 노출되는 공간입니다",
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
            paymentMethods: ["신용카드", "가상계좌", "휴대전화", "실시간 계좌이체", "카카오페이"],

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

        };
    },
    methods: {
        paymentActive(index) {
            this.pIndex = index
        }
        /*
        openModal(e) {
            const body = document.querySelector("body");
            const modalId = e.target.getAttribute('id');
            const target = document.getElementById(modalId + "View");
            const modalDim = document.createElement("div");
            body.classList.add("scrollNone");
            target.classList.add("show");
            modalDim.classList.add("dimmed_bg");
            target.appendChild(modalDim);
        },
        closeModalDim() {
            const modalDim = document.querySelector(".dimmed_bg");
            modalDim.remove();
        },
        closeModal() {
            const body = document.querySelector("body");
            const modal = document.querySelectorAll(".modal_basic");
            body.classList.remove("scrollNone");
            modal.forEach((e) => {
                e.classList.remove("show");
            });
            this.closeModalDim();
        },
        */
    },
    mounted() {
        /*
        this.$nextTick(() => {
            const cartLeftWrapper = this.$refs.cartLeftWrapper;
            const cartBottomWrapper = this.$refs.cartBottomWrapper;
            const cartRightWrapper = this.$refs.cartRightWrapper;
            const boardTitles = document.querySelectorAll(".title_closed");
            const cartBtns = document.querySelectorAll(".cart-container-btn");

            asideHeight(cartLeftWrapper, cartBottomWrapper, cartRightWrapper);
            observeCartLeftWrapper(cartLeftWrapper, cartBottomWrapper, cartRightWrapper);
            titleClose(boardTitles, cartBtns);
        });

        let delWay = document.querySelectorAll(".delivery_way");
        let subTabCont = document.querySelectorAll(".delivery_cont");

        delWay.forEach((tab, idx) => {
            tab.addEventListener("click", () => {

                subTabCont.forEach((inner) => {
                    inner.classList.remove("show");
                });

                delWay.forEach((item) => {
                    item.classList.remove("show");
                });

                delWay[idx].classList.add("show");
                subTabCont[idx].classList.add("show");
            });
        });

        let subTabTitle = document.querySelectorAll(".payment_box");
        let payCont = document.querySelectorAll(".payment_cont");

        subTabTitle.forEach((tab, idx) => {
            tab.addEventListener("click", () => {

                payCont.forEach((inner) => {
                    inner.classList.remove("show");
                });

                subTabTitle.forEach((item) => {
                    item.classList.remove("show");
                });

                subTabTitle[idx].classList.add("show");
                payCont[idx].classList.add("show");
            });
        });
        */
    }
}
</script>

<style>@import url('~/assets/css/pages/cart.css');</style>