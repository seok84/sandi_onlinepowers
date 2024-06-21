<template>
    <div class="guide_contents">
        

        <!-- end of guide tab -->
        <!-- 앵커목록 화면단 확인용 / 백엔드에서 사용되지 않음-->
        <p style="font-size: 2.4rem; color: red; line-height: 6rem">
            해당 팝업으로 이동
        </p>
        <div class="a_link_wrap">
            <a href="#modal-base">모달 기본 구조</a>
            <a href="#experience-review">체험단 팝업</a>
            <a href="#customer-apply">취소/교환/반품</a>
            <a href="#popup_alert">텍스트만 (알림)</a>
            <a href="#direct_delivery">직배지역</a>
            <a href="#transaction-sheet">거래명세표</a>
            <a href="#estimate-sheet">주문견적서</a>
            <a href="#product-coupon">상품쿠폰</a>
            <a href="#address-list">배송지목록</a>
            <a href="#address-add">배송지추가</a>
            <a href="#delivery-else">제주도서산간지역</a>
            <a href="#download-coupon">다운로드가능쿠폰</a>
            <a href="#button-only">버튼만있는팝업</a>
            <a href="#popup-report">신고하기</a>
            <a href="#personal-inquiry">일대일문의하기</a>
        </div>
        <div class="content">
            <p class="guide_txt">팁버튼 - 호버시</p>

            <div class="ttip_wrapper"  @click="tipOpen = !tipOpen" :class="{show : tipOpen === true }">
                <p class="ttip_btn">할인혜택보기</p>

                <div class="price_ttip">
                    <p class="tit">할인혜택</p>
                    <dl class="price_desc">
                        <dt class="top">판매가</dt>
                        <dd class="top"><span>50,000</span>원</dd>
                        <dt class="indent">상품할인</dt>
                        <dd><span>-2,500</span>원</dd>
                        <dt class="indent">세트할인</dt>
                        <dd><span>0</span>원</dd>
                        <dt class="indent">회원할인</dt>
                        <dd><span>0</span>원</dd>
                    </dl>
                    <dl class="price_total">
                        <dt>최대혜택가</dt>
                        <dd><span>47,500</span>원</dd>
                    </dl>
                </div>
            </div>

            <p class="guide_txt">배송비 팝업 - 추가된 클래스 따라서 노출</p>

            <p class="guide_txt02">무료배송</p>
            <div class="shipping_info_wrap">
                <div class="shipping_info">
                    <span>배송정보</span>
                    <infoToast class="free_delivery" />
                    <span class="company">본사</span>
                </div>
                <span class="delivery_condition">무료배송</span>
            </div>

            <p class="guide_txt02">판매자 조건부 무료배송</p>
            <div class="shipping_info_wrap">
                <div class="shipping_info">
                    <span>배송정보</span>
                    <infoToast class="seller_delivery" />
                    <span class="company">본사</span>
                </div>
                <span class="delivery_condition">판매자 조건부 무료배송</span>
            </div>

            <p class="guide_txt02">출고지 조건부 무료배송</p>
            <div class="shipping_info_wrap">
                <div class="shipping_info">
                    <span>배송정보</span>
                    <infoToast class="release_delivery" />
                    <span class="company">본사</span>
                </div>
                <span class="delivery_condition">출고지 조건부 무료배송</span>
            </div>


            <p class="guide_txt">팝업 기본틀 - popup-basic.vue 기본 틀 작성됨</p>
            <p class="guide_txt02">팝업 show 상태 스크립트 확인 필요</p>
            <div class="btn btn-middle btn-attention open_popup" @click="openModal()" style="margin-bottom: 20px">
                팝업띄우기
            </div>


            <!-- modal_w 알럿 팝업 -->
            <br />
            <br />
            <br />
            <!-- 실서버에는 style="display:inline-block; margin:0 auto;" 사용하지 않습니다 -->
            <div class="modal modal_basic modal_w" id="" style="display:inline-block; margin:0 auto;">
                <div class="modal_wrapper modal_white">
                    <div class="modal_body">
                        <div class="modal_content">
                            <div class="modal_txt">
                                텍스트 가운데정렬
                            </div>

                            <div class="btn-wrap">
                                <button id="" class="btn btn-middle btn-default">취소</button>
                                <button id="" class="btn btn-middle btn-attention">저장</button>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="modal_close modal_close_b" @click.stop="closeModal($event)">닫기</button>
                </div>
            </div>
            <br />
            <br />
            <br />
            <!-- modal_basic -->
            <div class="modal modal_basic modal_m modal_full" id="modal-base">
                <div class="modal_wrapper">
                    <div class="modal_header">
                        <h3 class="modal_tit">팝업타이틀</h3>
                    </div>
                    <div class="modal_body">
                        <div class="modal_content">




                            <!-- 체험 팝업 -->
                            <div id="experience-review" class="experience-review"><!-- modal_content  -->
                                <div class="cont_tit">
                                    <h6 class="modal_cont_tit">신청사유</h6>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" class="form_control"
                                    placeholder="내용을 입력하세요"></textarea>
                                <div class="cont_tit">
                                    <h6 class="modal_cont_tit">체험상품 배송지</h6>
                                </div>
                                <div class="col">
                                    <div class="form_line">
                                        <input type="text" name="address_01" id="address_01" placeholder="우편번호 찾기" value=""
                                            readonly="readonly" class="form_control form_search" />
                                        <a href="javascript:void(0);" class="search_address">주소 검색</a>
                                    </div>
                                    <div class="form_line">
                                        <input type="text" name="address_02" id="address_02" placeholder="기본주소" value=""
                                            class="form_control" />
                                    </div>
                                    <div class="form_line">
                                        <input type="text" name="address_02" id="address_02" placeholder="상세주소" value=""
                                            class="form_control" />
                                    </div>
                                    <!-- 전화면호 -->
                                    <!-- 비활성화는 클랙스 disabled 추가 -->
                                    <div class="form_line">
                                        <input type="text" name="" id="" placeholder="01012341234" class="form_control"
                                            minlength="8">
                                    </div>
                                </div>
                                <div class="cont_tit">
                                    <h6 class="modal_cont_tit">상품은 만족 하셨나요?</h6>
                                </div>
                                <div class="radio_wrap">
                                    <input type="radio" name="evaluate" id="evaluate-01" class="input_radio" checked="" />
                                    <label for="evaluate-01">만족</label>
                                    <input type="radio" name="evaluate" id="evaluate-02" class="input_radio" checked="" />
                                    <label for="evaluate-02">보통</label>
                                    <input type="radio" name="evaluate" id="evaluate-02" class="input_radio" checked="" />
                                    <label for="evaluate-02">아쉬움</label>
                                </div>
                                <textarea name="" id="" cols="30" rows="10" class="form_control"
                                    placeholder="내용을 입력하세요"></textarea>
                                <div class="form-group file_area">
                                    <ul>
                                        <li>
                                            <div>
                                                <img src="~/static/img/sample/mc_sample_img_02.png" alt="썸네일"
                                                    class="img_full" />
                                            </div>
                                            <button type="button" class="btn_file_del">
                                                <span class="screen_out">파일삭제</span>
                                            </button>
                                        </li>
                                        <li>
                                            <div>
                                                <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full" />
                                            </div>
                                            <button type="button" class="btn_file_del">
                                                <span class="screen_out">파일삭제</span>
                                            </button>
                                        </li>
                                        <li>
                                            <div>
                                                <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full" />
                                            </div>
                                            <button type="button" class="btn_file_del">
                                                <span class="screen_out">파일삭제</span>
                                            </button>
                                        </li>
                                        <li>
                                            <input type="file" id="file1" />
                                            <label for="file1" class="btn_file_add">
                                                <span class="screen_out">파일추가</span>
                                            </label>
                                        </li>
                                    </ul>
                                    <div class="info_dot">
                                        <p>5MB 이하의 사진 4장까지 첨부 가능</p>
                                    </div>
                                </div>
                                <div class="btn-wrap">
                                    <!-- 가운데정렬 -->
                                    <!-- 개별 사용 가능 -->
                                    <button class="btn btn-middle btn-default" id="">취소</button>
                                    <button class="btn btn-middle btn-attention" id="">등록</button>
                                </div>
                                <div class="txt_center">
                                    <div class="info_dot">
                                        등록하신 체험평은 해당 상품페이지의 체험평 영역에도 함께 노출됩니다.
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <button type="button" class="modal_close modal_close_b" @click.stop="closeModal($event)">닫기</button>
                </div>
            </div>
        </div>

        <p class="guide_txt">체험팝업</p>
        <!-- 체험 팝업 -->
        <div id="experience-review" class="experience-review"><!-- modal_content  -->
            <div class="cont_tit">
                <h6 class="modal_cont_tit">신청사유</h6>
            </div>
            <textarea name="" id="" cols="30" rows="10" class="form_control" placeholder="내용을 입력하세요"></textarea>
            <div class="cont_tit">
                <h6 class="modal_cont_tit">체험상품 배송지</h6>
            </div>
            <div class="col">
                <div class="form_line">
                    <input type="text" name="address_01" id="address_01" placeholder="우편번호 찾기" value="" readonly="readonly"
                        class="form_control form_search" />
                    <a href="javascript:void(0);" class="search_address">주소 검색</a>
                </div>
                <div class="form_line">
                    <input type="text" name="address_02" id="address_02" placeholder="기본주소" value="" class="form_control" />
                </div>
                <div class="form_line">
                    <input type="text" name="address_02" id="address_02" placeholder="상세주소" value="" class="form_control" />
                </div>
                <div class="form_line select_wrap">
                    <select name="" id="select02" class="form_control input_select w150">
                        <option value="">010</option>
                        <option value="">011</option>
                        <option value="">012</option>
                    </select>
                    <input type="text" name="phoneNumber" id="phoneNumber" placeholder="12345678" minlength="6" value=""
                        class="form_control" />
                </div>
            </div>
            <div class="cont_tit">
                <h6 class="modal_cont_tit">상품은 만족 하셨나요?</h6>
            </div>
            <div class="radio_wrap">
                <input type="radio" name="evaluate" id="evaluate-01" class="input_radio" checked="" />
                <label for="evaluate-01">만족</label>
                <input type="radio" name="evaluate" id="evaluate-02" class="input_radio" checked="" />
                <label for="evaluate-02">보통</label>
                <input type="radio" name="evaluate" id="evaluate-02" class="input_radio" checked="" />
                <label for="evaluate-02">아쉬움</label>
            </div>
            <textarea name="" id="" cols="30" rows="10" class="form_control" placeholder="내용을 입력하세요"></textarea>
            <div class="form-group file_area">
                <ul>
                    <li>
                        <div>
                            <img src="~/static/img/sample/mc_sample_img_02.png" alt="썸네일" class="img_full" />
                        </div>
                        <button type="button" class="btn_file_del">
                            <span class="screen_out">파일삭제</span>
                        </button>
                    </li>
                    <li>
                        <div>
                            <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full" />
                        </div>
                        <button type="button" class="btn_file_del">
                            <span class="screen_out">파일삭제</span>
                        </button>
                    </li>
                    <li>
                        <div>
                            <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full" />
                        </div>
                        <button type="button" class="btn_file_del">
                            <span class="screen_out">파일삭제</span>
                        </button>
                    </li>
                    <li>
                        <input type="file" id="file1" />
                        <label for="file1" class="btn_file_add">
                            <span class="screen_out">파일추가</span>
                        </label>
                    </li>
                </ul>
                <div class="info_dot">
                    <p>5MB 이하의 사진 4장까지 첨부 가능</p>
                </div>
            </div>
            <div class="btn-wrap">
                <!-- 가운데정렬 -->
                <!-- 개별 사용 가능 -->
                <button class="btn btn-middle btn-default" id="">취소</button>
                <button class="btn btn-middle btn-attention" id="">등록</button>
            </div>
            <div class="txt_center">
                <div class="info_dot">
                    등록하신 체험평은 해당 상품페이지의 체험평 영역에도 함께 노출됩니다.
                </div>
            </div>
        </div>


        <p class="guide_txt">취소/교환/반품 customer-apply</p>
        <p class="guide_txt">후기작성 review_write</p>
        <div id="customer-apply" class="customer-apply review_write"><!-- modal_content  -->
            <div class="txt_center">
                <h6 class="modal_cont_tit_lg">구매확정해 주셔서 감사합니다.</h6>
                <p class="txt_sub">지금 바로 고객님의 소중한 후기를 남겨주세요.<br />
                    작성해 주시는 이용후기는 다른 분의 쇼핑에 소중한 정보가 됩니다.</p>
            </div>
            <div class="item_wrapper vert">
                <div class="item-list horizon">
                    <div class="item_thumbnail">
                        <div class="user-action">
                            <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
                        </div>
                        <a href="javascript:void(0);">
                            <div class="thumbnail_area">
                                <div class="center_center">중간</div>
                                <div class="top_left">좌상</div>
                                <div class="top_right">우상</div>
                                <div class="bottom_left">좌하</div>
                                <div class="bottom_right">
                                    <img src="~/static/img/sample/thumbnail_img_L.png" alt="" srcset="" />
                                </div>
                            </div>
                            <img src="~/assets/img/sample/sample_img.jpg" />
                        </a>
                    </div>
                    <div class="item_desc">
                        <a href="javascript:void(0);" rel="" class="brand_area">
                            <p class="brand">브랜드네임</p>
                            <p class="title">
                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄 제목줄
                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                            </p>
                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                            <p class="product_option">
                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                            </p>
                        </a>
                        <!-- 구분 필요 -->
                        <div class="price_area">
                            <span class="price"><span class="number">49,900</span><span>원</span></span>
                            <span class="divider">/</span>
                            <span class="item_count">수량<span>999</span>개</span>
                        </div>

                        <!-- 구분 필요 -->
                        <div class="price_area02">
                            <div class="price">
                                <p class="product_price">상품가<span>299,000</span>원</p>
                                <span class="divider">|</span>
                                <p class="sale">할인 <span>6,000</span>원</p>
                            </div>
                            <div class="saled_price">
                                <p>할인적용가 <span>43,900</span>원</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ect_area">
                    <!-- <div class="shipping_info_wrap">
          <div class="shipping_info">
            <span>배송정보</span>
            <a href="javascript:void(0);" class="info_toast"></a>
            <span class="company">본사</span>
          </div>
          <span class="delivery_condition">무료배송</span>
        </div> -->
                    <div class="etc_control">
                        <div class="amt_box">
                            <div class="btn_amt_box form_control">
                                <button type="button" class="btn_minus"></button>
                                <input type="number" title="수량" value="1" class="number" />
                                <button type="button" class="btn_plus"></button>
                            </div>
                        </div>
                        <button type="button" class="btn btn_done btn-small btn_lm show_product" style="display:none;">
                            구성상품보기
                        </button>
                        <button type="button" class="btn btn_accent btn-small btn_lm buy_now" style="display:none;">
                            바로구매
                        </button>
                        <button type="button" class="btn btn_accent btn-small btn_lm btn_edit">
                            변경
                        </button>
                    </div>
                </div>
            </div>
            <!-- 아이템영역 종료 -->
            <div class="check_wrap">
                <input type="checkbox" name="noneOption" id="noneOption" class="input_check">
                <label for="noneOption">상품옵션미노출</label>
            </div>
            <!-- 상품옵션미노출 -->
            <div class="mp_rv_top">
                <div class="rating_star">
                    <span class="on"></span> <span class="on"></span>
                    <span class="on"></span> <span class="on"></span>
                    <span></span>
                </div>
                <span class="count">4</span>
            </div>
            <textarea name="" id="" cols="30" rows="10" class="form_control" placeholder="내용을 입력하세요"></textarea>
            <p class="info_dot">이용후기는 구매확정 된 상품에 한하여 주문일로부터 90일내 작성 가능합니다.</p>
            <p class="info_dot"><span>일반후기 1000P / 포토후기 2000P</span>적립해드립니다.</p>
            <!-- 별점 -->
            <div class="form_line select_wrap">
                <select name="" id="select01" class="form_control input_select modal_style">
                    <option value="">더미01</option>
                    <option value="">더미02</option>
                    <option value="">더미03</option>
                    <option value="">더미04</option>
                </select>
            </div>
            <div class="form_line">
                <input type="text" name="address_02" id="address_02" placeholder="사유를 입력하세요" value=""
                    class="form_control modal_style" />
            </div>
            <!-- 셀렉트 인풋 // -->
            <div class="form-group file_area">
                <ul>
                    <li>
                        <div>
                            <img src="~/static/img/sample/mc_sample_img_02.png" alt="썸네일" class="img_full" />
                        </div>
                        <button type="button" class="btn_file_del">
                            <span class="screen_out">파일삭제</span>
                        </button>
                    </li>
                    <li>
                        <div>
                            <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full" />
                        </div>
                        <button type="button" class="btn_file_del">
                            <span class="screen_out">파일삭제</span>
                        </button>
                    </li>
                    <li>
                        <div>
                            <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full" />
                        </div>
                        <button type="button" class="btn_file_del">
                            <span class="screen_out">파일삭제</span>
                        </button>
                    </li>
                    <li>
                        <input type="file" id="file1" />
                        <label for="file1" class="btn_file_add">
                            <span class="screen_out">파일추가</span>
                        </label>
                    </li>
                </ul>
                <div class="info_dot">
                    <p>5MB 이하의 사진 4장까지 첨부 가능</p>
                </div>
            </div>
            <!-- 첨부사진 영역 // 반품 -->
            <div class="info_dot">안내문영역입니다요</div>
            <div class="info_dot">안내문영역입니다요</div>
            <div class="info_dot">안내문영역입니다요</div>
            <!-- 안내문 영역 // 취소 -->
            <div class="gray_box">
                <dl class="jssp_align">
                    <dt>상품금액</dt>
                    <dd><span>9,999,999</span> 원</dd>
                    <dt>배송비</dt>
                    <dd><span>9,999,999</span> 원</dd>
                    <dt>총 환불금액</dt>
                    <dd><span>9,999,999</span> 원</dd>
                </dl>
            </div>
            <!-- 영수증영역 //  취소 -->
            <h6 class="modal_cont_tit">상품 쿠폰 적용하기</h6>
            <div class="radio_wrap">
                <input type="radio" name="sample" id="radio01" class="input_radio" />
                <label for="radio01">지정택배사 이용하기</label>
            </div>
            <div class="col">
                <div class="form_line">
                    <input type="text" name="address_02" id="address_02" placeholder="상세주소" value="" class="form_control" />
                </div>
                <div class="form_line">
                    <input type="text" name="address_01" id="address_01" placeholder="우편번호 찾기" value="" readonly="readonly"
                        class="form_control form_search" />
                    <a href="javascript:void(0);" class="search_address">주소 검색</a>
                </div>
                <div class="form_line">
                    <input type="text" name="address_02" id="address_02" placeholder="기본주소" value="" class="form_control" />
                </div>
                <div class="form_line">
                    <input type="text" name="address_02" id="address_02" placeholder="상세주소" value="" class="form_control" />
                </div>
                <!-- 전화면호 -->
                <!-- 비활성화는 클랙스 disabled 추가 -->
                <div class="form_line">
                    <input type="text" name="" id="" placeholder="01012341234" class="form_control" minlength="8">
                </div>
            </div>
            <!-- 반송송장영역 // 교환,반품 -->
        </div>

        <p class="guide_txt">텍스트만 / 알림</p>
        <div id="popup_alert" class="popup_alert"><!-- modal_content  -->
            <div class="txt_center">
                업체배송 상품은 방문수령이 불가하여 별도로 발송됩니다.
            </div>
            <!-- 아래는 확인용 -->
            <div class="btn-wrap">
                <!-- 가운데정렬 -->
                <!-- 개별 사용 가능 -->
                <button class="btn btn-middle btn-attention" id="">확인</button>
            </div>
        </div>

        <!-- 직배송지역 -->
        <p class="guide_txt">직배송지역</p>
        <div id="direct_delivery" class="direct_delivery"><!-- modal_content  -->
            <div class="threeline_table">
                <table>
                    <tbody>
                        <tr>
                            <td class="td_bg w130">서울</td>
                            <td>서울 전 지역</td>
                        </tr>
                        <tr>
                            <td class="td_bg w130">경기</td>
                            <td>
                                고양, 과천, 광명, 구리, 군포, 김포(일부), 남양주(일부), 부천,
                                성남, 수원, 시흥, 안산, 안양, 오산, 용인 기흥구, 용인 수지구,
                                의왕, 의정부, 파주(일부), 하남, 화성(일부)
                            </td>
                        </tr>
                        <tr>
                            <td class="td_bg w130">인천</td>
                            <td>영종도, 강화군, 옹진군 등 일부 지역 제외</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 거래명세표 -->
        <p class="guide_txt">거래명세표</p>
        <div id="transaction-sheet" class="transaction-sheet"><!-- modal_content  -->
            <div class="top_box">
                <div class="order_stamp">
                    <img src="~/assets/img/cart/order_stamp.png" alt="" />
                </div>
                <table>
                    <tr>
                        <td class="td_bg">덤덤</td>
                        <td>덤덤</td>
                        <td class="td_bg">덤덤</td>
                        <td colspan="3">덤덤</td>
                    </tr>
                    <tr>
                        <td class="td_bg">덤덤</td>
                        <td>덤덤</td>
                        <td class="td_bg">덤덤</td>
                        <td>덤덤</td>
                        <td class="td_bg">덤덤</td>
                        <td>덤덤</td>
                    </tr>
                    <tr>
                        <td class="td_bg">덤덤</td>
                        <td>덤덤</td>
                        <td class="td_bg">덤덤</td>
                        <td colspan="3">덤덤</td>
                    </tr>
                    <tr>
                        <td class="td_bg">덤덤</td>
                        <td>덤덤</td>
                        <td class="td_bg">덤덤</td>
                        <td>덤덤</td>
                        <td class="td_bg">덤덤</td>
                        <td>덤덤</td>
                    </tr>
                    <tr>
                        <td class="td_bg">덤덤</td>
                        <td>덤덤</td>
                        <td class="td_bg">덤덤</td>
                        <td colspan="3">덤덤</td>
                    </tr>
                    <tr>
                        <td class="td_bg">덤덤</td>
                        <td colspan="5">덤덤</td>
                    </tr>
                </table>
            </div>

            <!-- 주문견적서 동일 -->
            <div class="line_table twoline_table">
                <table>
                    <thead>
                        <tr>
                            <th class="w70">번호</th>
                            <th class="w70">입점사</th>
                            <th>사업자 등록번호</th>
                            <th class="w200">상품코드</th>
                            <th class="w200">상품명</th>
                            <th>단가</th>
                            <th>금액</th>
                            <th>배송비</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SANDI</td>
                            <td>134-81-31110</td>
                            <td>G1000000001</td>
                            <td>[냉동][박스]앙버터 부쉬맨 120g 1박스(10개)</td>
                            <td>5,750원</td>
                            <td>5,750원</td>
                            <td>2,500원</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>SANDI</td>
                            <td>134-81-31110</td>
                            <td>G1000000001</td>
                            <td>[냉동][박스]앙버터 부쉬맨 120g 1박스(10개)</td>
                            <td>5,750원</td>
                            <td>5,750원</td>
                            <td>2,500원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="threeline_table">
                <table>
                    <tbody>
                        <tr>
                            <td class="td_bg w240">덤덤11</td>
                            <td>덤덤12</td>
                        </tr>
                        <tr>
                            <td class="td_bg w240">덤덤11</td>
                            <td>덤덤12</td>
                        </tr>
                        <tr>
                            <td class="td_bg w240">덤덤11</td>
                            <td>덤덤12</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="threeline_table"></div>
        </div>

        <!-- 주문견적서 -->
        <p class="guide_txt">주문견적서</p>
        <div id="estimate-sheet" class="estimate-sheet"><!-- modal_content  -->
            <p class="print-title">주문견적서</p>
            <div class="top_box">
                <div class="order_stamp">
                    <img src="~/assets/img/cart/order_stamp.png" alt="" />
                </div>

                <div class="top_left_box">
                    <dl class="est_sheet_list">
                        <dt>견적일자</dt>
                        <dd>2023년 01월 01일</dd>
                    </dl>
                    <p class="info_dot">해당 견적서의 유효기간은 7일 입니다.</p>
                    <p class="info_dot">
                        프로모션 및 재고 유무에 따라 단가 변동이 <br class="print"> 있을 수 있습니다.
                    </p>
                    <p class="info_dot">
                        상기 견적은 견적당시 상품 구매가격이므로 <br class="print"> 해당상품의 판매금액이
                        변동 될 수 있습니다.
                    </p>
                </div>
                <div class="top_right_box">
                    <table>
                        <tbody>
                            <tr>
                                <td rowspan="7" class="whole_tit txt_center">더미01</td>
                                <td class="td_bg txt_left">더미02</td>
                                <td colspan="3">더미03</td>
                            </tr>
                            <tr>
                                <td class="td_bg txt_left">더미02</td>
                                <td>더미03</td>
                                <td class="td_bg txt_center">더미04</td>
                                <td>더미05</td>
                            </tr>
                            <tr>
                                <td class="td_bg txt_left">더미02</td>
                                <td colspan="3">더미03</td>
                            </tr>
                            <tr>
                                <td class="td_bg txt_left">더미02</td>
                                <td>더미03</td>
                                <td class="td_bg txt_center">더미04</td>
                                <td>더미05</td>
                            </tr>
                            <tr>
                                <td class="td_bg txt_left">더미02</td>
                                <td>더미03</td>
                                <td class="td_bg txt_center">더미04</td>
                                <td>더미05</td>
                            </tr>
                            <tr>
                                <td class="td_bg txt_left">더미02</td>
                                <td>더미03</td>
                                <td class="td_bg txt_center">더미04</td>
                                <td>더미05</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="line_table oneline_table">
                <table>
                    <tr>
                        <td class="td_bg w240">더미01</td>
                        <td>더미02</td>
                        <td class="td_bg w200">더미03</td>
                        <td class="w200">더미04</td>
                    </tr>
                </table>
            </div>
            <div class="line_table twoline_table">
                <table>
                    <thead>
                        <tr>
                            <th class="w70">번호</th>
                            <th class="w70">입점사</th>
                            <th>사업자 등록번호</th>
                            <th class="w200">상품코드</th>
                            <th class="w200">상품명</th>
                            <th>단가</th>
                            <th>금액</th>
                            <th>배송비</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SANDI</td>
                            <td>134-81-31110</td>
                            <td>G1000000001</td>
                            <td>[냉동][박스]앙버터 부쉬맨 120g 1박스(10개)</td>
                            <td>5,750원</td>
                            <td>5,750원</td>
                            <td>2,500원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="threeline_table">
                <table>
                    <tbody>
                        <tr>
                            <td class="td_bg w240">덤덤11</td>
                            <td>덤덤12</td>
                        </tr>
                        <tr>
                            <td class="td_bg w240">덤덤11</td>
                            <td>덤덤12</td>
                        </tr>
                        <tr>
                            <td class="td_bg w240">덤덤11</td>
                            <td>덤덤12</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- 상품쿠폰 -->
        <p class="guide_txt">상품쿠폰</p>
        <div id="product-coupon" class="product-coupon"><!-- modal_content  -->
            <div class="cont_tit">
                <h6 class="modal_cont_tit">상품 쿠폰 적용하기</h6>
                <button class="coupon_regist">오프라인 쿠폰등록</button>
            </div>
            <form action="">
                <div class="inquiry_wrapper type02">
                    <div class="form_inner">
                        <div class="search_area">
                            <input type="text" class="form_control" placeholder="'-' 없이 쿠폰번호 입력" title="'-' 없이 쿠폰번호 입력" />
                        </div>
                        <button type="button" class="btn btn-small btn_accent btn-black">
                            등록
                        </button>
                    </div>
                </div>
                <!-- 아이템 영역 -->
                <div class="item_wrapper vert">
                    <div class="item-list horizon">
                        <div class="item_thumbnail">
                            <a href="javascript:void(0);">
                                <img src="~/assets/img/sample/sample_img.jpg" />
                            </a>
                        </div>
                        <div class="item_desc">
                            <a href="javascript:void(0);" rel="" class="brand_area">
                                <p class="title">
                                    앙버터 부쉬맨 120g 1박스(10개) 앙버터 부쉬맨 120g
                                    1박스(10개)
                                </p>
                            </a>
                            <!-- <p class="product_option">(1개씩 구매되는 상품)</p> -->
                            <div class="price_area">
                                <span class="price"><span>108,000</span>원</span>
                                <span class="quantity"><span>10</span>개</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 아이템 영역 끝 -->
                <div class="form_line select_wrap">
                    <select name="" id="select01" class="form_control input_select input_select02">
                        <option value="">
                            회원가입 전용 쿠폰&nbsp;&nbsp;&nbsp;-1,000원 할인 [1개 수량만]
                        </option>
                        <option value="">더미02</option>
                        <option value="">더미03</option>
                        <option value="">더미04</option>
                    </select>
                </div>
                <p class="use_coupon_tip">1,000원 할인적용</p>
                <!-- select_wrap 끝 -->
                <div class="check_wrap">
                    <input type="checkbox" name="check12" id="check12" class="input_check" />
                    <label for="check12">배송비 : 무료(쿠폰적용)</label>
                </div>
                <!-- checkwrap 끝 -->
                <dl class="saled_list">
                    <dt>상품쿠폰 적용 시 총 할인금액</dt>
                    <dd>-1,000원</dd>
                    <dt>적용한 배송비 쿠폰</dt>
                    <dd>5장</dd>
                    <dt>상품쿠폰 적용 시 총 할인금액</dt>
                    <dd>-1,000원</dd>
                </dl>
            </form>
            <!-- 버튼자리 -->
        </div>

        <!-- 배송지목록 -->
        <p class="guide_txt">배송지목록</p>
        <div id="address-list" class="address-list"><!-- modal_content  -->
            <ul class="delivery_list">
                <li>
                    <div class="radio_wrap">
                        <input type="radio" id="ship_check1" title="선택" name="ship_check" checked="" />
                        <label for="ship_check1">
                            <p class="name"><span>집</span>김민석</p>
                        </label>
                    </div>
                    <div class="txt_area">
                        <p class="user">
                            김민석<span class="basic_address">(기본)</span>
                        </p>
                        <p class="address">
                            서울특별시 구로구 디지털로27길 24 405 온라인파워스 1동 711호
                        </p>
                        <p class="phone">010-1234-5678</p>
                    </div>
                </li>
                <li>
                    <div class="radio_wrap">
                        <input type="radio" id="ship_check2" title="선택" name="ship_check" />
                        <label for="ship_check2">
                            <p class="name"><span>회사</span>김민석</p>
                        </label>
                    </div>
                    <div class="txt_area">
                        <p class="user">김민석</p>
                        <p class="address">
                            서울특별시 구로구 디지털로27길 24 405 온라인파워스 1동 711호
                        </p>
                        <p class="phone">010-1234-5678</p>
                    </div>
                </li>
            </ul>
        </div>

        <!-- 배송지추가 -->
        <p class="guide_txt">배송지추가</p>
        <div id="address-add" class="address-add"><!-- modal_content  -->
            <div class="pop_address_wrap">
                <div class="form_line">
                    <input type="text" name="address_01" id="address_01" placeholder="배송지" class="form_control" value="" />
                </div>
                <div class="form_line">
                    <input type="text" name="address_02" id="address_02" placeholder="받는사람" class="form_control" value="" />
                </div>
                <div class="form_line">
                    <input type="text" name="address_03" id="address_03" placeholder="우편번호 찾기"
                        class="form_control form_search" value="" readonly="" />
                    <a href="javascript:void(0);" class="search_address t50">주소 검색</a>
                </div>
                <div class="form_line">
                    <input type="text" name="address_04" id="address_04" placeholder="기본주소" class="form_control" value=""
                        readonly />
                </div>
                <div class="form_line">
                    <input type="text" name="address_05" id="address_05" placeholder="상세주소" class="form_control" value="" />
                </div>
                <div class="check_wrap active">
                    <label>
                        <input type="checkbox" name="check06" id="check06" class="input_check" /><span>기본 배송지로 설정</span>
                        </label>
                    <label>
                        <input type="checkbox" name="check07" id="check07" class="input_check" /><span>기본 정보로 가져오기</span>
                        </label>
                </div>
            </div>
            <!-- btn-wrap 자리 -->
        </div>

        <!-- 제주도서산간지역 -->
        <p class="guide_txt">제주도서산간지역</p>

        <div id="delivery-else" class="delivery-else"><!-- modal_content  -->
            <!-- 검색줄 -->
            <div class="form_line select_wrap">
                <select name="" id="select02" class="form_control input_select input_select02 input_select_sm">
                    <option value="">더미01</option>
                    <option value="">더미02</option>
                    <option value="">더미03</option>
                    <option value="">더미04</option>
                </select>

                <input type="text" name="address_01" id="address_01" placeholder="" class="form_control form_search"
                    value="" readonly="" />
                <a href="javascript:void(0);" class="search_address">주소 검색</a>
            </div>
            <!-- table 시작 -->
            <!-- table 종료 -->
            <table>
                <colgroup>
                    <col class="w300" />
                </colgroup>
                <thead>
                    <tr>
                        <th>우편번호/주소</th>
                        <th>제주</th>
                        <th>도서산간</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p class="address">23103</p>
                            <p>인천 옹진군 백령면 북포리 544-4</p>
                        </td>
                        <td>○</td>
                        <td>○</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="address">23103</p>
                            <p>인천 옹진군 백령면 북포리 544-4</p>
                        </td>
                        <td>○</td>
                        <td>○</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="address">23103</p>
                            <p>인천 옹진군 백령면 북포리 544-4</p>
                        </td>
                        <td>○</td>
                        <td>○</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="address">23103</p>
                            <p>인천 옹진군 백령면 북포리 544-4</p>
                        </td>
                        <td>○</td>
                        <td>○</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="address">23103</p>
                            <p>인천 옹진군 백령면 북포리 544-4</p>
                        </td>
                        <td>○</td>
                        <td>○</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 다운로드가능쿠폰 -->
        <p class="guide_txt">다운로드가능쿠폰</p>
        <div class="download-coupon" id="download-coupon"><!-- modal_content  -->
            <div class="btn_top_wrap">
                <button type="button" class="btn btn-primary coupon_down">
                    <img src="~/assets/img/common/ico_down_b.svg" />
                    <span>다운로드 가능쿠폰 모두받기 (15개)</span>
                </button>
            </div>
            <ul class="coupon_list_wrap">
                <li>
                    <div class="row">
                        <div class="coupon_img">
                            <span class="primary">2,000</span>
                        </div>
                        <div class="coupon_desc">
                            <p class="tit">
                                CNT마트 홈페이지 리뉴얼 기념 특별 할인 3,000원 쿠폰
                            </p>
                            <p class="sub">30,000원 이상 구매시 사용가능</p>
                        </div>
                        <button class="btn btn-small btn_sm btn-primary coupon_down">
                            <span>쿠폰다운</span>
                            <img src="~/assets/img/common/ico_down.svg" />
                        </button>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="coupon_img">
                            <span class="skyblue">+9</span>
                        </div>
                        <div class="coupon_desc">
                            <p class="tit">
                                CNT마트 홈페이지 리뉴얼 기념 특별 할인 3,000원 쿠폰
                            </p>
                            <p class="sub">30,000원 이상 구매시 사용가능</p>
                        </div>
                        <button class="btn btn-small btn_sm btn-primary coupon_down">
                            <span>쿠폰다운</span>
                            <img src="~/assets/img/common/ico_down.svg" />
                        </button>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="coupon_img">
                            <span class="vvip">5,000</span>
                        </div>
                        <div class="coupon_desc">
                            <p class="tit">
                                CNT마트 홈페이지 리뉴얼 기념 특별 할인 5,000원 쿠폰
                            </p>
                            <p class="sub">50,000원 이상 구매시 사용가능</p>
                        </div>
                        <button class="btn btn-small btn_sm btn-primary coupon_down">
                            <span>쿠폰다운</span>
                            <img src="~/assets/img/common/ico_down.svg" />
                        </button>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="coupon_img">
                            <span class="primary">2,000</span>
                        </div>
                        <div class="coupon_desc">
                            <p class="tit">
                                CNT마트 홈페이지 리뉴얼 기념 특별 할인 3,000원 쿠폰
                            </p>
                            <p class="sub">30,000원 이상 구매시 사용가능</p>
                        </div>
                        <button class="btn btn-small btn_sm btn-primary coupon_down">
                            <span>쿠폰다운</span>
                            <img src="~/assets/img/common/ico_down.svg" />
                        </button>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="coupon_img">
                            <span class="primary">2,000</span>
                        </div>
                        <div class="coupon_desc">
                            <p class="tit">
                                CNT마트 홈페이지 리뉴얼 기념 특별 할인 3,000원 쿠폰
                            </p>
                            <p class="sub">30,000원 이상 구매시 사용가능</p>
                        </div>
                        <button class="btn btn-small btn_sm btn-primary coupon_down">
                            <span>쿠폰다운</span>
                            <img src="~/assets/img/common/ico_down.svg" />
                        </button>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="coupon_img">
                            <span class="primary">2,000</span>
                        </div>
                        <div class="coupon_desc">
                            <p class="tit">
                                CNT마트 홈페이지 리뉴얼 기념 특별 할인 3,000원 쿠폰
                            </p>
                            <p class="sub">30,000원 이상 구매시 사용가능</p>
                        </div>
                        <button class="btn btn-small btn_sm btn-primary coupon_down">
                            <span>쿠폰다운</span>
                            <img src="~/assets/img/common/ico_down.svg" />
                        </button>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="coupon_img">
                            <span class="primary">2,000</span>
                        </div>
                        <div class="coupon_desc">
                            <p class="tit">
                                CNT마트 홈페이지 리뉴얼 기념 특별 할인 3,000원 쿠폰
                            </p>
                            <p class="sub">30,000원 이상 구매시 사용가능</p>
                        </div>
                        <button class="btn btn-small btn_sm btn-primary coupon_down">
                            <span>쿠폰다운</span>
                            <img src="~/assets/img/common/ico_down.svg" />
                        </button>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="coupon_img">
                            <span class="primary">2,000</span>
                        </div>
                        <div class="coupon_desc">
                            <p class="tit">
                                CNT마트 홈페이지 리뉴얼 기념 특별 할인 3,000원 쿠폰
                            </p>
                            <p class="sub">30,000원 이상 구매시 사용가능</p>
                        </div>
                        <button class="btn btn-small btn_sm btn-primary coupon_down">
                            <span>쿠폰다운</span>
                            <img src="~/assets/img/common/ico_down.svg" />
                        </button>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="coupon_img">
                            <span class="primary">2,000</span>
                        </div>
                        <div class="coupon_desc">
                            <p class="tit">
                                CNT마트 홈페이지 리뉴얼 기념 특별 할인 3,000원 쿠폰
                            </p>
                            <p class="sub">30,000원 이상 구매시 사용가능</p>
                        </div>
                        <button class="btn btn-small btn_sm btn-primary coupon_down">
                            <span>쿠폰다운</span>
                            <img src="~/assets/img/common/ico_down.svg" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>

        <!-- 버튼만있는 팝업 -->
        <p class="guide_txt">버튼만있는 팝업</p>
        <div id="button-only" class="button-only"><!-- modal_content  -->
            <!-- ▼▼▼▼▼▼ 이 아랫부분만 사용 ▼▼▼▼▼▼ -->
            <div class="btn-wrap">
                <!-- 가운데정렬 -->
                <!-- 개별 사용 가능 -->
                <button class="btn btn-middle btn-default" id="">취소</button>
                <button class="btn btn-middle btn-attention" id="">저장</button>

                <div class="btn_block">
                    <button class="btn btn_sub">추가</button>
                </div>
            </div>
        </div>

        <!-- 댓글 신고하기 -->
        <p class="guide_txt">댓글 신고하기</p>
        <div class="popup-report modal_content" id="popup-report">
            <div class="cont_tit">
                <h6 class="modal_cont_tit">신고사유</h6>
            </div>
            <div class="radio_wrapper">
                <div class="radio_wrap">
                    <input type="radio" name="report_reason" id="radio01" checked />
                    <label for="radio01">영리목적/홍보성</label>
                </div>
                <div class="radio_wrap">
                    <input type="radio" name="report_reason" id="radio02" />
                    <label for="radio02">개인정보 노출 위험</label>
                </div>
                <div class="radio_wrap">
                    <input type="radio" name="report_reason" id="radio03" />
                    <label for="radio03">욕설/인신공격</label>
                </div>
            </div>
            <!-- 2열 구분 rowline_02-->
            <div class="radio_wrapper rowline_02">
                <div class="radio_wrap">
                    <input type="radio" name="report_reason" id="radio01" checked />
                    <label for="radio01">영리목적/홍보성</label>
                </div>
                <div class="radio_wrap">
                    <input type="radio" name="report_reason" id="radio02" />
                    <label for="radio02">개인정보 노출 위험</label>
                </div>
                <div class="radio_wrap">
                    <input type="radio" name="report_reason" id="radio03" />
                    <label for="radio03">욕설/인신공격</label>
                </div>
                <div class="radio_wrap">
                    <input type="radio" name="report_reason" id="radio04" />
                    <label for="radio04">음란/선정성</label>
                </div>
                <div class="radio_wrap">
                    <input type="radio" name="report_reason" id="radio05" />
                    <label for="radio05">불법정보</label>
                </div>
                <div class="radio_wrap">
                    <input type="radio" name="report_reason" id="radio06" />
                    <label for="radio06">같은 내용 도배</label>
                </div>
                <div class="radio_wrap">
                    <input type="radio" name="report_reason" id="radio07" />
                    <label for="radio07">기타</label>
                </div>
            </div>
            <div class="cont_tit">
                <h6 class="modal_cont_tit">신고 상세사유</h6>
            </div>
            <textarea name="" id="" cols="30" rows="10" class="form_control"
                placeholder="신고하시는 상세이유를 입력해주세요\n(최대글자는 1,000자 입니다)"></textarea>

        </div>

        <!-- 댓글 신고하기 -->
        <div class="personal-inquiry modal_content" id="personal-inquiry">
            <div class="apply_detail_list">
                <form action="">
                    <div class="form_line select_wrap">
                        <select name="" id="select01" class="form_control input_select input_select02">
                            <option value="">문의유형선택</option>
                            <option value="">더미02</option>
                            <option value="">더미03</option>
                            <option value="">더미04</option>
                        </select>
                    </div>
                    <div class="form_line">
                        <input type="text" name="apply_tit" id="apply_tit" placeholder="제목을 입력하세요" class="form_control"
                            value="">
                    </div>
                    <div class="form_line">
                        <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요" class="form_control"></textarea>
                    </div>
                </form>
                <div class="form-group file_area">
                    <ul>
                        <li>
                            <div>
                                <img src="~/assets/img/sample/sample_img.jpg" alt="썸네일" class="img_full">
                            </div>
                            <button type="button" class="btn_file_del"><span class="screen_out">파일삭제</span></button>
                        </li>
                        <li>
                            <div>
                                <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full">
                            </div>
                            <button type="button" class="btn_file_del"><span class="screen_out">파일삭제</span></button>
                        </li>
                        <li>
                            <div>
                                <img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full">
                            </div>
                            <button type="button" class="btn_file_del"><span class="screen_out">파일삭제</span></button>
                        </li>
                        <li><input type="file" id="file1"> <label for="file1" class="btn_file_add"><span
                                    class="screen_out">파일추가</span></label></li>
                    </ul>
                    <div class="info_dot">
                        <p>5MB 이하의 사진 4장까지 첨부 가능</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
;
import infoToast from "~/components/popup/cart-delivery-toast.vue";

export default {
    data(){
        return{
            tipOpen : false,
        }
    },
    components: {
        infoToast
    },
    mounted() {
    },
    methods: {
    }


}
</script>

<style>
.a_link_wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 10;
    border-top: 2px solid red;
}

.a_link_wrap>a {
    flex: unset;
    height: 3rem;
    line-height: 3rem;
    font-size: var(--size-pc-main);
    text-decoration: underline;
    padding: 0 1.4rem;
    color: blue;
    text-align: center;
    width: 20%;
}

.modal_content{/* modal_content  */
    margin-bottom: 5rem;
    /* max-width: 54rem; */
    margin: 0 auto;
}


@media (max-width:480px) {
    .a_link_wrap {
        display: none;
    }

    .content {
        padding: 0 !important;
    }

    /* 가이드에서만 사용됨 */
    .open_popup,
    #estimate-sheet,
    #transaction-sheet {
        display: none;
    }


}
</style>