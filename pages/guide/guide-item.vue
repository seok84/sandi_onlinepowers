<template>
  <div class="guide_contents">


    <!-- end of guide tab -->

    <div class="content">
      <p class="guide_txt">장바구니 아이템</p>
      <ul class="cart_item_wrap">
        <li>
          <div class="check_wrap">
            <input type="checkbox" name="" id="" class="input_check" />
          </div>
          <div class="item_wrapper vert">
            <div class="item-list horizon">
              <div class="item_thumbnail">
                <div class="user-action">
                  <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
                  <!-- <a href="javascript:void(0);" class="user-basket user-ico"
                      >장바구니</a
                    > -->
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
                  <img src="~/static/img/sample/thumbnail_img.jpg" />
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
              <div class="shipping_info_wrap">
                <div class="shipping_info">
                  <span>배송정보</span>
                  <a href="javascript:void(0);" class="info_toast"></a>
                  <span class="company">본사</span>
                </div>
                <span class="delivery_condition">무료배송</span>
              </div>
              <div class="etc_control">
                <div class="amt_box">
                  <div class="btn_amt_box form_control">
                    <button type="button" class="btn_minus"></button>
                    <input type="number" title="수량" value="1" class="number" />
                    <button type="button" class="btn_plus"></button>
                  </div>
                </div>
                <button type="button" class="btn btn_done btn-small btn_lm show_product">
                  구성상품보기
                </button>
                <button type="button" class="btn btn_accent btn-small btn_lm buy_now">
                  바로구매
                </button>
                <button type="button" class="btn btn_accent btn-small btn_lm btn_edit">
                  변경
                </button>
              </div>
            </div>
          </div>

          <!-- item_btn_wrapper 추가됨 -->
          <div class="item_btn_wrapper">
            <div class="btn_left_wrap">
              <button class="btn btn-small btn_sub set_open">
                세트상품 펼치기
              </button>
            </div>
            <div class="btn_right_wrap">
              <a class="btn btn-small btn_sm btn-attention btn_confirm"><span>구매확정</span></a>
              <a class="btn btn-small btn-default btn_sm">배송조회</a>
              <a class="btn btn-small btn-default btn_sm">교환신청</a>
              <a class="btn btn-small btn-default btn_sm">주문취소</a>
            </div>
          </div>
        </li>
        <!-- 세트상품아이템은 여기에 추가됨 -->
      </ul>

      <p class="guide_txt">상품상세세트 아이템</p>
      <div class="option-set">
        <div class="item_wrapper vert">
          <div class="item-list horizon">
            <div class="item_thumbnail">
              <a href="javascript:void(0);">
                <img src="~/static/img/sample/thumbnail_img.jpg" />
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
      </div>

      <!-- 
          ////////////////////////////////////////////////
            리뷰 리스트
          ////////////////////////////////////////////////
         -->
      <div class="guide_txt">리뷰 리스트</div>

      <div class="review_list">
        <ul>
          <li class="list_area">
            <div class="rv_prd_sec">
              <div class="rv_prd">
                <div class="user_wrapper">
                  <span class="user_id_info">solibi***</span>
                  <span class="review_score good">만족</span>
                  <span class="review_score normal">보통</span>
                  <span class="review_score notgood">아쉬움</span>
                  <span class="date">2022-12-13</span>
                </div>
              </div>
            </div>
            <div class="list_in">
              <div class="review_open">
                <div class="list_top">
                  <div class="mp_rv_top">
                    <div class="rating_star">
                      <span class="on"></span> <span class="on"></span>
                      <span class="on"></span> <span class="on"></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div class="review_origin">
                  <div class="txt_area">
                    <p class="product_option">
                      선택한 옵션 : 옵션명 - 선택한 옵션 01 / 옵션명 - 선택한
                      옵션 02 / 옵션명 - 선택한 옵션 03 / 옵션명 - 선택한 옵션
                      04 / 옵션명 - 선택한 옵션 05 / 옵션명 - 선택한 옵션 06 /
                      옵션이 두 줄이 됩니다 / 옵션이 두 줄이 됩니다 / 옵션이
                      두 줄이 됩니다
                    </p>
                    <p class="title">
                      사용자가 등록한 상품후기가 3줄까지 노출됩니다. 이미지
                      다수 등록시 4개까지 노출됩니다.
                    </p>
                  </div>
                  <!-- <div class="img_area">
                      <div class="review_thumbnail_wrap">
                        <span class="close">닫기</span>
                        <ul>
                          <li>
                            <img src="~/static/img/sample/thumbnail_img.jpg" alt="" />
                          </li>
                          <li>
                            <img src="~/static/img/sample/thumbnail_img.jpg" alt="" />
                          </li>
                          <li>
                            <img src="~/static/img/sample/thumbnail_img.jpg" alt="" />
                          </li>
                          <li>
                            <img src="~/static/img/sample/thumbnail_img.jpg" alt="" />
                          </li>
                        </ul>
                      </div>
                    </div> -->

                  <!-- 2023.04.10 리뷰썸네일 -->
                  <list-thumbnail-img></list-thumbnail-img>
                  <!--// 2023.04.10 리뷰썸네일 -->

                  <div class="thumbs_up">
                    <span>도움됐어요</span>
                    <div class="thumbs_btn">
                      <span class="thumbs_img"></span>
                      <span class="thumbs_count">99+</span>
                    </div>
                    <a href="javascript:void(0);" class="fr_linked">신고/차단</a>
                  </div>
                  <div class="btn_right_wrap">
                    <button class="btn btn-default btn-small btn_sm">수정</button>
                    <button class="btn btn-default btn-small btn_sm">삭제</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="hide_wrap">
              <div class="administrator_answer">
                <div class="qna_manager">
                  <span class="qa">A.</span>샌디
                </div>
                <div class="text_area">
                  안녕하세요 고객님. 샌디 고객센터 입니다. <br />
                  저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.<br />
                  소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                </div>
                <p class="product_date">
                  답변일&nbsp;&nbsp;:&nbsp;&nbsp;<span>2022-06-14</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- 
          ////////////////////////////////////////////////
            이용후기 아이템리스트
          ////////////////////////////////////////////////
         -->
      <div class="guide_txt">이용후기 아이템리스트</div>
      <div class="order-list-wrap">
        <div class="item_wrapper vert">
          <div class="item-list horizon">
            <div class="item_thumbnail">
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
                <img src="~/static/img/sample/thumbnail_img.jpg" />
              </a>
            </div>
            <div class="item_desc">
              <a href="javascript:void(0);" rel="" class="brand_area">
                <p class="brand">브랜드네임</p>
                <p class="title">
                  당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛
                  (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜
                  호두맛 (30팩)
                </p>
                <p class="product_date">로스팅일자 2022. 11. 25</p>
                <!-- <p class="product_option">
                    [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                    [옵션3] 그린 옵션명 옵션명( +1,000원 )
                  </p> -->
              </a>
              <!-- <div class="price_area">
                  <span class="price"><span class="number">49,900</span><span>원</span></span>
                  <span class="divider">/</span>
                  <span class="item_count">수량<span>999</span>개</span>
                </div> -->
            </div>
          </div>
        </div>
        <div class="usage_review_desc">
          <div class="review_top_wrap">
            <div class="rating_star">
              <span class="on"></span>
              <span class="on"></span>
              <span class="on"></span>
              <span class="on"></span>
              <span class=""></span>
              <p class="counter">5.0</p>
            </div>
            <span class="product_date">2022-12-13</span>
          </div>
          <div class="review_desc_wrap">
            <p class="product_option">
              선택한 옵션 : 옵션명 - 선택한 옵션 01 / 옵션명 - 선택한 옵션 02
              / 옵션명 - 선택한 옵션 03 / 옵션명 - 선택한 옵션 04 / 옵션명 -
              선택한 옵션 05 / 옵션명 - 선택한 옵션 06 / 옵션이 두 줄이 됩니다
              / 옵션이 두 줄이 됩니다 / 옵션이 두 줄이 됩니다
            </p>
            <span class="review_desc">
              잘받았습니다. 감사합니다<br />
              앙버터부쉬맨빵은유통과정때문인지 버터가 깨져서 손님들께서 직접
              받았을경우 아쉬울것같았습니다.
            </span>
          </div>
        </div>
        <div class="btn_right_wrap">
          <button class="btn btn-default btn-small btn_sm">삭제</button>

          <!-- <a class="btn btn-small btn-default btn_sm">주문취소</a> -->
        </div>
      </div>
      <!-- timedeal_item_wrapper -->
      <div class="guide_txt">타임딜</div>
      <div class="timedeal-timer">
        <div class="timedeal-sail">
          TIME<br>SALE
        </div>
        <div class="timedeal-time">
          <p>09:38~11:59</p>
          <p>월·화·수·목·금·토·일</p>
        </div>
      </div>


      <div class="guide_txt">기본아이템 : item-list 만</div>

      <!-- 기본 아이템 -->

      <div class="item-list">
        <div class="item_thumbnail">
          <div class="user-action">
            <a href="javascript:void(0);" class="user-attention user-ico active">관심상품</a>
            <a href="javascript:void(0);" class="user-basket user-ico active">장바구니</a>
          </div>
          <div class="sold_out_wrapper">
            <div class="sold_out_img"></div>
            <p class="sold_out_txt">
              상품이 <span class="receiving_date">1/12</span>에 입고될
              예정입니다.
            </p>
          </div>
          <div class="ranking"><span class="numbering">1</span></div>
          <a href="javascript:void(0);">
            <div class="thumbnail_area">
              <div class="center_center">중간</div>
              <div class="top_left">좌상</div>
              <div class="top_right">우상</div>
              <div class="bottom_left">좌하</div>
              <div class="bottom_right">
                <img src="~/static/img/sample/thumbnail_img_L.png" alt="ico_basket" />
              </div>
            </div>
            <img src="~/static/img/sample/thumbnail_img.jpg" />
          </a>
        </div>
        <div class="item_desc">
          <a href="javascript:void(0);" class="brand_area">
            <p class="brand">브랜드네임</p>
            <p class="title">
              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
            </p>
          </a>
          <p class="production_date">로스팅일자 2023.01.30</p>
          <div class="price_area">
            <p class="discounted"><span>81,000</span>원</p>

            <span class="price"><span class="number">49,900</span><span>원</span></span>
            <span class="sale"><span>38</span>%</span>
          </div>
          <div class="badge_item_wrap">
            <div class="badge_item badge_ice">냉동</div>
            <div class="badge_item badge_quick">무료배송</div>
          </div>
          <div class="badge_tag_wrap">
            <span class="badge_tag badge_new">신상품</span>
            <span class="badge_tag badge_recommend">MD추천</span>

            <span class="badge_tag badge_freedelivery">무료배송</span>
            <span class="badge_tag badge_best">베스트</span>
            <span class="badge_tag badge_onlycnt">ONLY SANDI</span>
            <span class="badge_tag badge_deal">행사상품</span>
            <span class="badge_tag badge_limited">한정수량</span>
          </div>
        </div>
      </div>

      <!-- 기본아이템 : item-list 만 -->

      <div class="guide_txt">기본아이템 : item-list + horizon</div>

      <!-- 기본 아이템 -->

      <div class="item-list horizon">
        <div class="item_thumbnail">
          <div class="user-action">
            <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
            <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
          </div>
          <div class="sold_out_wrapper">
            <div class="sold_out_img"></div>
            <p class="sold_out_txt">
              상품이 <span class="receiving_date">1/12</span>에 입고될
              예정입니다.
            </p>
          </div>
          <div class="ranking"><span class="numbering">1</span></div>
          <a href="javascript:void(0);">
            <div class="thumbnail_area">
              <div class="center_center">중간</div>
              <div class="top_left">좌상</div>
              <div class="top_right">우상</div>
              <div class="bottom_left">좌하</div>
              <div class="bottom_right">
                <img src="~/static/img/sample/thumbnail_img_L.png" alt="ico_basket" />
              </div>
            </div>
            <img src="~/static/img/sample/thumbnail_img.jpg" />
          </a>
        </div>
        <div class="item_desc">
          <a href="javascript:void(0);" class="brand_area">
            <p class="brand">브랜드네임</p>
            <p class="title">
              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
            </p>
          </a>
          <p class="production_date">로스팅일자 2023.01.30</p>
          <div class="price_area">
            <p class="discounted"><span>81,000</span>원</p>

            <span class="price"><span class="number">49,900</span><span>원</span></span>
            <span class="sale"><span>38</span>%</span>
          </div>
          <div class="badge_item_wrap">
            <div class="badge_item badge_ice">냉동</div>
            <div class="badge_item badge_quick">무료배송</div>
          </div>
          <div class="badge_tag_wrap">
            <span class="badge_tag badge_new">신상품</span>
            <span class="badge_tag badge_recommend">MD추천</span>
            <span class="badge_tag badge_freedelivery">무료배송</span>
            <span class="badge_tag badge_best">베스트</span>
            <span class="badge_tag badge_onlycnt">ONLY SANDI</span>
            <span class="badge_tag badge_deal">행사상품</span>
            <span class="badge_tag badge_limited">한정수량</span>
          </div>
        </div>
      </div>

      <div class="guide_txt">
        item_wrapper + horizon <br />
        item-list + vert
      </div>

      <!-- 

        item_wrapper + horizon <-- 여백설정
        item-list + vert <-- 여백 설정

      -->
      <div class="item_wrapper horizon" style="overflow-x: scroll">
        <div class="item-list vert">
          <div class="item_thumbnail">
            <div class="user-action">
              <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
              <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
            </div>
            <!-- <div class="sold_out_wrapper">
                <div class="sold_out">
                  <div class="sold_out_img"></div>
                  <div class="sold_out_txt"></div>
                </div>
              </div> -->
            <div class="ranking"><span class="numbering">1</span></div>

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
              <img src="~/static/img/sample/thumbnail_img.jpg" />
            </a>
          </div>
          <div class="item_desc">
            <a href="javascript:void(0);" rel="" class="brand_area">
              <p class="brand">브랜드네임</p>
              <p class="title">
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
              </p>
            </a>
            <div class="price_area">
              <p class="discounted"><span>81,000</span>원</p>

              <span class="price"><span class="number">49,900</span><span>원</span></span>
              <span class="sale"><span>38</span>%</span>
            </div>
            <div class="badge_item_wrap">
              <div class="badge_item badge_ice">냉동</div>
              <div class="badge_item badge_quick">무료배송</div>
            </div>
          </div>
        </div>
        <div class="item-list vert">
          <div class="item_thumbnail">
            <div class="user-action">
              <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
              <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
            </div>
            <!-- <div class="sold_out_wrapper">
                <div class="sold_out">
                  <div class="sold_out_img"></div>
                  <div class="sold_out_txt"></div>
                </div>
              </div> -->
            <div class="ranking"><span class="numbering">1</span></div>

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
              <img src="~/static/img/sample/thumbnail_img.jpg" />
            </a>
          </div>
          <div class="item_desc">
            <a href="javascript:void(0);" rel="" class="brand_area">
              <p class="brand">브랜드네임</p>
              <p class="title">
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
              </p>
            </a>
            <div class="price_area">
              <p class="discounted"><span>81,000</span>원</p>

              <span class="price"><span class="number">49,900</span><span>원</span></span>
              <span class="sale"><span>38</span>%</span>
            </div>
            <div class="badge_item_wrap">
              <div class="badge_item badge_ice">냉동</div>
              <div class="badge_item badge_quick">무료배송</div>
            </div>
          </div>
        </div>
        <div class="item-list vert">
          <div class="item_thumbnail">
            <div class="user-action">
              <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
              <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
            </div>
            <!-- <div class="sold_out_wrapper">
                <div class="sold_out">
                  <div class="sold_out_img"></div>
                  <div class="sold_out_txt"></div>
                </div>
              </div> -->
            <div class="ranking"><span class="numbering">1</span></div>

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
              <img src="~/static/img/sample/thumbnail_img.jpg" />
            </a>
          </div>
          <div class="item_desc">
            <a href="javascript:void(0);" rel="" class="brand_area">
              <p class="brand">브랜드네임</p>
              <p class="title">
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
              </p>
            </a>
            <div class="price_area">
              <p class="discounted"><span>81,000</span>원</p>

              <span class="price"><span class="number">49,900</span><span>원</span></span>
              <span class="sale"><span>38</span>%</span>
            </div>
            <div class="badge_item_wrap">
              <div class="badge_item badge_ice">냉동</div>
              <div class="badge_item badge_quick">무료배송</div>
            </div>
          </div>
        </div>
        <div class="item-list vert">
          <div class="item_thumbnail">
            <div class="user-action">
              <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
              <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
            </div>
            <!-- <div class="sold_out_wrapper">
                <div class="sold_out">
                  <div class="sold_out_img"></div>
                  <div class="sold_out_txt"></div>
                </div>
              </div> -->
            <div class="ranking"><span class="numbering">1</span></div>

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
              <img src="~/static/img/sample/thumbnail_img.jpg" />
            </a>
          </div>
          <div class="item_desc">
            <a href="javascript:void(0);" rel="" class="brand_area">
              <p class="brand">브랜드네임</p>
              <p class="title">
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
              </p>
            </a>
            <div class="price_area">
              <p class="discounted"><span>81,000</span>원</p>

              <span class="price"><span class="number">49,900</span><span>원</span></span>
              <span class="sale"><span>38</span>%</span>
            </div>
            <div class="badge_item_wrap">
              <div class="badge_item badge_ice">냉동</div>
              <div class="badge_item badge_quick">무료배송</div>
            </div>
          </div>
        </div>
        <div class="item-list vert">
          <div class="item_thumbnail">
            <div class="user-action">
              <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
              <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
            </div>
            <!-- <div class="sold_out_wrapper">
                <div class="sold_out">
                  <div class="sold_out_img"></div>
                  <div class="sold_out_txt"></div>
                </div>
              </div> -->
            <div class="ranking"><span class="numbering">1</span></div>

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
              <img src="~/static/img/sample/thumbnail_img.jpg" />
            </a>
          </div>
          <div class="item_desc">
            <a href="javascript:void(0);" rel="" class="brand_area">
              <p class="brand">브랜드네임</p>
              <p class="title">
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
              </p>
            </a>
            <div class="price_area">
              <p class="discounted"><span>81,000</span>원</p>

              <span class="price"><span class="number">49,900</span><span>원</span></span>
              <span class="sale"><span>38</span>%</span>
            </div>
            <div class="badge_item_wrap">
              <div class="badge_item badge_ice">냉동</div>
              <div class="badge_item badge_quick">무료배송</div>
            </div>
          </div>
        </div>
        <div class="item-list vert">
          <div class="item_thumbnail">
            <div class="user-action">
              <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
              <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
            </div>
            <!-- <div class="sold_out_wrapper">
                <div class="sold_out">
                  <div class="sold_out_img"></div>
                  <div class="sold_out_txt"></div>
                </div>
              </div> -->
            <div class="ranking"><span class="numbering">1</span></div>

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
              <img src="~/static/img/sample/thumbnail_img.jpg" />
            </a>
          </div>
          <div class="item_desc">
            <a href="javascript:void(0);" rel="" class="brand_area">
              <p class="brand">브랜드네임</p>
              <p class="title">
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)
              </p>
            </a>
            <div class="price_area">
              <p class="discounted"><span>81,000</span>원</p>

              <span class="price"><span class="number">49,900</span><span>원</span></span>
              <span class="sale"><span>38</span>%</span>
            </div>
            <div class="badge_item_wrap">
              <div class="badge_item badge_ice">냉동</div>
              <div class="badge_item badge_quick">무료배송</div>
            </div>
          </div>
        </div>
      </div>

      <div class="guide_txt">
        item_wrapper + horizon +grid01 <br />
        item-list + vert
      </div>

      <!-- 

        item_wrapper + horizon
        item-list + vert

      -->
      <div class="item_wrapper horizon grid01">
        <div class="left_box">
          <div class="item-list vert">
            <div class="item_thumbnail">
              <div class="user-action">
                <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
                <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
              </div>

              <div class="sold_out_wrapper">
                <div class="sold_out">
                  <div class="sold_out_img"></div>
                  <div class="sold_out_txt"></div>
                </div>
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
                <img src="~/static/img/sample/thumbnail_img.jpg" />
              </a>
            </div>
            <div class="item_desc">
              <a href="javascript:void(0);" rel="" class="brand_area">
                <p class="brand">브랜드네임</p>
                <p class="title">
                  당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛
                  (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜
                  호두맛 (30팩)
                </p>
              </a>
              <div class="price_area">
                <p class="discounted"><span>81,000</span>원</p>

                <span class="price"><span class="number">49,900</span><span>원</span></span>
                <span class="sale"><span>38</span>%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- E left_box -->
        <div class="right_box">
          <div class="item-list vert">
            <div class="item_thumbnail">
              <div class="user-action">
                <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
                <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
              </div>

              <div class="sold_out_wrapper">
                <div class="sold_out">
                  <div class="sold_out_img"></div>
                  <div class="sold_out_txt"></div>
                </div>
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
                <img src="~/static/img/sample/thumbnail_img.jpg" />
              </a>
            </div>
            <div class="item_desc">
              <a href="javascript:void(0);" rel="" class="brand_area">
                <p class="brand">브랜드네임</p>
                <p class="title">
                  당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛
                  (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜
                  호두맛 (30팩)
                </p>
              </a>
              <div class="price_area">
                <p class="discounted"><span>81,000</span>원</p>

                <span class="price"><span class="number">49,900</span><span>원</span></span>
                <span class="sale"><span>38</span>%</span>
              </div>
            </div>
          </div>
          <div class="item-list vert">
            <div class="item_thumbnail">
              <div class="user-action">
                <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
                <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
              </div>

              <div class="sold_out_wrapper">
                <div class="sold_out">
                  <div class="sold_out_img"></div>
                  <div class="sold_out_txt"></div>
                </div>
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
                <img src="~/static/img/sample/thumbnail_img.jpg" />
              </a>
            </div>
            <div class="item_desc">
              <a href="javascript:void(0);" rel="" class="brand_area">
                <p class="brand">브랜드네임</p>
                <p class="title">
                  당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛
                  (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜
                  호두맛 (30팩)
                </p>
              </a>
              <div class="price_area">
                <p class="discounted"><span>81,000</span>원</p>

                <span class="price"><span class="number">49,900</span><span>원</span></span>
                <span class="sale"><span>38</span>%</span>
              </div>
            </div>
          </div>
          <div class="item-list vert">
            <div class="item_thumbnail">
              <div class="user-action">
                <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
                <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
              </div>

              <div class="sold_out_wrapper">
                <div class="sold_out">
                  <div class="sold_out_img"></div>
                  <div class="sold_out_txt"></div>
                </div>
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
                <img src="~/static/img/sample/thumbnail_img.jpg" />
              </a>
            </div>
            <div class="item_desc">
              <a href="javascript:void(0);" rel="" class="brand_area">
                <p class="brand">브랜드네임</p>
                <p class="title">
                  당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛
                  (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜
                  호두맛 (30팩)
                </p>
              </a>
              <div class="price_area">
                <p class="discounted"><span>81,000</span>원</p>

                <span class="price"><span class="number">49,900</span><span>원</span></span>
                <span class="sale"><span>38</span>%</span>
              </div>
            </div>
          </div>
          <div class="item-list vert">
            <div class="item_thumbnail">
              <div class="user-action">
                <a href="javascript:void(0);" class="user-attention user-ico">관심상품</a>
                <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
              </div>

              <div class="sold_out_wrapper">
                <div class="sold_out">
                  <div class="sold_out_img"></div>
                  <div class="sold_out_txt"></div>
                </div>
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
                <img src="~/static/img/sample/thumbnail_img.jpg" />
              </a>
            </div>
            <div class="item_desc">
              <a href="javascript:void(0);" rel="" class="brand_area">
                <p class="brand">브랜드네임</p>
                <p class="title">
                  당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛
                  (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜
                  호두맛 (30팩)
                </p>
              </a>
              <div class="price_area">
                <p class="discounted"><span>81,000</span>원</p>

                <span class="price"><span class="number">49,900</span><span>원</span></span>
                <span class="sale"><span>38</span>%</span>
              </div>
            </div>
          </div>
        </div>
        <!-- E right_box -->
      </div>

      <div class="guide_txt"></div>

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

<style></style>