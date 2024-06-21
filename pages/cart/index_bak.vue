<template>
    <div id="cart">
        <TitleD1 :title-main="titleMain" />
        <div class="inner cart_inner">
            <div class="cart_left_wrapper" ref="cartLeftWrapper">
                <div class="check_delete_wrapper">
                    <div class="check_wrap">
                        <input type="checkbox" name="allCheck" id="allCheck" class="input_check">
                        <label for="allCheck">전체</label>
                    </div>
                    <div class="btn-wrap">
                        <!-- <a href="javascript:void(0);" class="btn btn_accent btn-small">관심상품</a> -->
                        <button class="btn btn-default btn-small">삭제</button>
                    </div>
                </div>
                
                <!-- SANDI 배송상품 -->
                <div class="cart_container">
                    <div class="cart_title  ">
                        <div class="check_wrap">
                            <input type="checkbox" name="check05" id="check05" class="input_check">
                            <label for="">
                                <span class="brand_delivery">SANDI 배송상품</span> :
                                <span class="total-count">3</span>개
                            </label>
                        </div>
                        <button type="button" class="arr cart_container_btn">열기/닫기</button>
                    </div>
                    <div class="cart_inner_wrapper">
                        <div class="cart_wrapper normal_item ">
                            <!-- normal_item 으로 타이틀 왼쪽 아이콘 구분지음 -->
                            <div class="cart_item_title title_closed">
                                <div>
                                    <span class="icon_cart"></span>
                                    <h3>일반상품</h3>
                                </div>
                                <div>

                                    <div class="all_count">총<span>2</span>건</div>

                                    <div class="arr">열기</div>


                                </div>
                            </div>
                            <div class="cart_item_wrapper">
                                <div class="cart_item_inner">
                                    <ul class="cart_item_wrap">
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>


                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>

                                                        <button type="button"
                                                            class="btn btn_accent btn_edit active">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <!-- 소분류 = bg_line -->
                                        <!-- <div class="bg_line"></div> -->
                                        <!-- ## 수량만노출 되는 건 주문결제에서만 -->
                                        <!-- <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a>
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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

                                                <div class="ect_area amount_only">
                                                    <div class="quantity_wrapper">
                                                        <div class="btn btn-default btn-small btn_lm">
                                                            수량 : <span class="number">3</span>개
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </li> -->
                                        <li class="cart_item_divider"><!-- 대분류 --></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <p
                                                        style="display:block; color: red; font-size: 1.4rem;  padding: 1rem; border: 1px solid red; margin: 1rem 0;">
                                                        숫자 인풋 변경시 구성상품 보기 off 필요</p>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="2" class="number">
                                                                <button type="button" class="btn_plus"
                                                                    @click="toggleBtnShow"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button" class="btn btn_done show_product" :class="{hide : btnShow == false}"
                                                            v-show="btnShow">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            v-show="!btnShow">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="bg_line"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="bg_line"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <p
                                                        style="display:block; color: red; font-size: 1.4rem;  padding: 1rem; border: 1px solid red; margin: 1rem 0;">
                                                        숫자 인풋 변경시 구성상품 보기 off 필요</p>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="2" class="number">
                                                                <button type="button" class="btn_plus"
                                                                    @click="toggleBtnShow"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button" class="btn btn_done show_product"
                                                            v-if="btnShow">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            v-else>변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="bg_line"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="bg_line"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="bg_line"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                                <div class="product_total">
                                    <strong>일반상품 합계</strong>
                                    <div class="total">
                                        상품 <span>999,999</span> + 배송비 <span>2,500</span> <span class="equal">=</span>
                                        <strong>9,999,999</strong>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="cart_wrapper cold_item ">
                            <!-- normal_item 으로 타이틀 왼쪽 아이콘 구분지음 -->
                            <div class="cart_item_title title_closed">
                                <div>
                                    <span class="icon_cart"></span>
                                    <h3>냉장상품</h3>
                                </div>
                                <div>

                                    <div class="all_count">총<span>2</span>건</div>

                                    <div class="arr">열기</div>


                                </div>
                            </div>
                            <div class="cart_item_wrapper">
                                <div class="cart_item_inner">
                                    <ul class="cart_item_wrap">
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="bg_line"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                                <div class="product_total">
                                    <strong>냉장상품 합계</strong>
                                    <div class="total">
                                        상품 <span>999,999</span> + 배송비 <span>2,500</span> <span class="equal">=</span>
                                        <strong>9,999,999</strong>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cart_wrapper ice_item ">
                            <!-- normal_item 으로 타이틀 왼쪽 아이콘 구분지음 -->
                            <div class="cart_item_title title_closed">
                                <div>
                                    <span class="icon_cart"></span>
                                    <h3>냉동상품</h3>
                                </div>
                                <div>

                                    <div class="all_count">총<span>2</span>건</div>

                                    <div class="arr">열기</div>


                                </div>
                            </div>
                            <div class="cart_item_wrapper">
                                <div class="cart_item_inner">
                                    <ul class="cart_item_wrap">
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="bg_line"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>

                                <div class="product_total">
                                    <strong>냉동상품 합계</strong>
                                    <div class="total">
                                        상품 <span>999,999</span> + 배송비 <span>2,500</span> <span class="equal">=</span>
                                        <strong>9,999,999</strong>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /////////// cart_wrapper /////////// -->
                        <div class="product_total cart_delivery_total">
                            <strong>씨앤티마트 배송상품 합계</strong>
                            <div class="total">
                                상품 <span>999,999</span> + 배송비 <span>2,500</span> <span class="equal">=</span>
                                <strong>9,999,999</strong>

                            </div>
                        </div>
                    </div>



                </div>
                <!-- 업체배송상품 -->
                <div class="cart_container">
                    <div class="cart_title  ">
                        <div class="check_wrap">
                            <input type="checkbox" name="check05" id="check05" class="input_check">
                            <label for="">
                                <span class="brand_delivery">SANDI 배송상품</span> :
                                <span class="total-count">3</span>개
                            </label>
                        </div>
                        <button type="button" class="arr cart_container_btn">열기/닫기</button>
                    </div>
                    <div class="cart_inner_wrapper">
                        <div class="cart_wrapper normal_item ">
                            <!-- normal_item 으로 타이틀 왼쪽 아이콘 구분지음 -->
                            <div class="cart_item_title title_closed">
                                <div>
                                    <span class="icon_cart"></span>
                                    <h3>일반상품</h3>
                                </div>
                                <div>

                                    <div class="all_count">총<span>2</span>건</div>

                                    <div class="arr">열기</div>


                                </div>
                            </div>
                            <div class="cart_item_wrapper">
                                <div class="cart_item_inner">
                                    <ul class="cart_item_wrap">
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="bg_line"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="cart_item_divider"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="bg_line"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="cart_item_divider"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>

                                <div class="product_total">
                                    <strong>일반상품 합계</strong>
                                    <div class="total">
                                        상품 <span>999,999</span> + 배송비 <span>2,500</span> <span class="equal">=</span>
                                        <strong>9,999,999</strong>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cart_wrapper cold_item ">
                            <!-- normal_item 으로 타이틀 왼쪽 아이콘 구분지음 -->
                            <div class="cart_item_title title_closed">
                                <div>
                                    <span class="icon_cart"></span>
                                    <h3>냉장상품</h3>
                                </div>
                                <div>

                                    <div class="all_count">총<span>2</span>건</div>

                                    <div class="arr">열기</div>


                                </div>
                            </div>
                            <div class="cart_item_wrapper">
                                <div class="cart_item_inner">
                                    <ul class="cart_item_wrap">
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="bg_line"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button>
                                                        <button type="button" class="btn btn_accent btn_edit"
                                                            style="display:none;">변경</button>
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>

                                <div class="product_total">
                                    <strong>냉장상품 합계</strong>
                                    <div class="total">
                                        상품 <span>999,999</span> + 배송비 <span>2,500</span> <span class="equal">=</span>
                                        <strong>9,999,999</strong>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cart_wrapper ice_item ">
                            <!-- normal_item 으로 타이틀 왼쪽 아이콘 구분지음 -->
                            <div class="cart_item_title title_closed">
                                <div>
                                    <span class="icon_cart"></span>
                                    <h3>냉동상품</h3>
                                </div>
                                <div>

                                    <div class="all_count">총<span>2</span>건</div>

                                    <div class="arr">열기</div>


                                </div>
                            </div>
                            <div class="cart_item_wrapper">
                                <div class="cart_item_inner">
                                    <ul class="cart_item_wrap">
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <!-- <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button> -->
                                                        <!-- <button type="button" class="btn btn_accent btn_edit" style="display:none;">변경</button> -->
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="cart_item_divider"></li>
                                        <li>
                                            <div class="check_wrap">
                                                <input type="checkbox" name="" id="" class="input_check">
                                            </div>
                                            <div class="item_wrapper vert">
                                                <div class="item-list horizon">
                                                    <div class="item_thumbnail">
                                                        <div class="user-action">
                                                            <a href="javascript:void(0);"
                                                                class="user-attention user-ico">관심상품</a>
                                                            <!-- <a href="javascript:void(0);" class="user-basket user-ico">장바구니</a> -->
                                                        </div>
                                                        <a href="javascript:void(0);">
                                                            <div class="thumbnail_area">
                                                                <div class="center_center">중간</div>
                                                                <div class="top_left">좌상</div>
                                                                <div class="top_right">우상</div>
                                                                <div class="bottom_left">좌하</div>
                                                                <div class="bottom_right">우하</div>
                                                            </div>
                                                            <img src="~/assets/img/sample/sample_img.jpg" />
                                                        </a>
                                                    </div>
                                                    <div class="item_desc">
                                                        <a href="javascript:void(0);" rel="" class="brand_area">
                                                            <p class="brand">브랜드네임</p>
                                                            <p class="title">
                                                                제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                                제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄
                                                                제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄
                                                            </p>
                                                            <p class="product_date">로스팅일자 2022. 11. 25</p>
                                                            <p class="product_option">
                                                                [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /
                                                                [옵션3] 그린 옵션명 옵션명( +1,000원 )
                                                            </p>
                                                        </a>
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
                                                    <p class="guide_txt02">묶음배송시 노출 하지않을때</p>
                                                    <div class="shipping_info_wrap disabled">
                                                        <div class="shipping_info">
                                                            <span>배송 정보</span>
                                                            <!-- <a href="javascript:void(0);" class="info_toast"></a> -->
                                                            <infoToast class="free_delivery" />
                                                            <span class="company">본사</span>
                                                        </div>
                                                        <span class="delivery_condition">무료배송</span>
                                                    </div>
                                                    <div class="etc_control">
                                                        <div class="amt_box">
                                                            <div class="btn_amt_box form_control">
                                                                <button type="button" class="btn_minus"></button>
                                                                <input type="number" title="수량" value="1" class="number">
                                                                <button type="button" class="btn_plus"></button>
                                                            </div>
                                                        </div>
                                                        <!-- <button type="button"
                                                            class="btn btn_done show_product">구성상품보기</button> -->
                                                        <!-- <button type="button" class="btn btn_accent btn_edit" style="display:none;">변경</button> -->
                                                        <button type="button" class="btn btn_accent buy_now">바로구매</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>

                                <div class="product_total">
                                    <strong>냉동상품 합계</strong>
                                    <div class="total">
                                        상품 <span>999,999</span> + 배송비 <span>2,500</span> <span class="equal">=</span>
                                        <strong>9,999,999</strong>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /////////// cart_wrapper /////////// -->
                        <div class="product_total cart_delivery_total">
                            <strong>업체배송 상품 합계</strong>
                            <div class="total">
                                상품 <span>999,999</span> + 배송비 <span>2,500</span> <span class="equal">=</span>
                                <strong>9,999,999</strong>
                                <infoToast class="free_delivery" />
                            </div>
                        </div>
                    </div>



                </div>
                <!-- /////////// cart_container ////////// -->
                <div class="cart_bot cart_bottom_wrapper" ref="cartBottomWrapper">
                    <div class="btn_right_wrap">
                        <a href="javascript:void(0);" class="btn btn-small btn-default btn_sm btn_delete">삭제</a>
                    </div>
                    <dl class="cart_receipt">
                        <dt class="product_amount">상품금액
                        </dt>
                        <dd><span>110,300</span>원</dd>
                        <dt class="delivery_charge">배송비
                        </dt>
                        <dd><span>0</span>원</dd>
                        <dt class="discount_benefits">할인혜택
                        </dt>
                        <dd><span>-10,000</span>원</dd>
                    </dl>
                    <div class="total_order">
                        <dl>
                            <dt class="order_amount">총 주문금액
                            </dt>
                            <dd class="order_amount"><span>100,300</span>원</dd>
                        </dl>
                    </div>
                    <div class="info_txt">
                        <p>장바구니에 담긴 상품은 30일 동안 보관됩니다. 30일이 초과된 상품은 자동으로 삭제됩니다.</p>
                        <p>더 오래 보관하고 싶은 상품은 관심상품으로 전환하시기 바랍니다.</p>
                        <p class="info_star mobile">견적서 출력은 PC에서만 가능합니다.</p>
                    </div>
                    <div class="btn_wrap_basic">
                        <button class="btn btn-attention btn_order">주문하기</button>
                        <button class="btn btn-tertiary btn_print pc">견적서 출력(금액표기)</button>
                        <button class="btn btn-tertiary btn_print pc">견적서 출력(금액 미표기)</button>
                    </div>
                    <p class="guide_txt02">기업버튼</p>
                    <!-- corporation -->
                    <div class="btn_wrap_basic corporation">
                        <button class="btn btn-attention btn_order">여신 주문하기</button>
                        <div class="remaining_money">
                            <div class="remaining">
                                <p>사용가능 여신금액</p>
                                <p class="bank">(신한은행 111 - 1111 - 11111)</p>
                            </div>
                            <p class="used"><span>82,250</span>원</p>
                        </div>
                        <button class="btn btn-tertiary btn_print pc">견적서 출력(금액표기)</button>
                        <button class="btn btn-tertiary btn_print pc">견적서 출력(금액 미표기)</button>
                    </div>

                </div>
            </div>
            <!-- ///////////////////// cart_left_wrapper //////////////////// -->
            <div class="cart_bot cart_right_wrapper" ref="cartRightWrapper">
                <div class="cart_aside_box">
                    <h3 class="total_items">전체상품 : <span>10</span> 개</h3>
                    <dl class="cart_receipt">
                        <dt class="product_amount">상품금액
                        </dt>
                        <dd><span>110,300</span>원</dd>
                        <dt class="delivery_charge">배송비
                        </dt>
                        <dd><span>0</span>원</dd>
                        <dt class="discount_benefits">할인혜택
                        </dt>
                        <dd><span>-10,000</span>원</dd>
                    </dl>
                    <div class="total_order">
                        <dl>
                            <dt class="order_amount">총 주문금액
                            </dt>
                            <dd class="order_amount"><span>100,300</span>원</dd>
                        </dl>
                    </div>
                    <div class="info_txt">
                        <p>장바구니에 담긴 상품은 30일 동안 보관됩니다.</p>
                        <p>30일이 초과된 상품은 자동으로 삭제됩니다. 더 오래 보관하고 싶은 상품은 관심상품으로 전환하시기 바랍니다.</p>

                    </div>
                    <div class="btn_wrap_basic">
                        <button class="btn btn-attention btn_order">주문하기</button>
                        <button class="btn btn-tertiary btn_print pc">견적서 출력(금액표기)</button>
                        <button class="btn btn-tertiary btn_print pc">견적서 출력(금액 미표기)</button>
                    </div>
                    <p class="guide_txt02">기업버튼</p>
                    <!-- corporation -->
                    <div class="btn_wrap_basic corporation">
                        <button class="btn btn-attention btn_order">여신 주문하기</button>
                        <div class="remaining_money">
                            <div class="remaining">
                                <p>사용가능 여신금액</p>
                                <p class="bank">(신한은행 111 - 1111 - 11111)</p>
                            </div>
                            <p class="used"><span>82,250</span>원</p>
                        </div>
                        <button class="btn btn-tertiary btn_print pc">견적서 출력(금액표기)</button>
                        <button class="btn btn-tertiary btn_print pc">견적서 출력(금액 미표기)</button>
                    </div>

                </div>
            </div>
            <!-- ///////////////////// cart_bot cart_aside //////////////////// -->



        </div>
        <!-- 견적서 출력 팝업 위치 -->

    </div>
</template>

<script>
import TitleD1 from "~/components/text/title-default.vue";
import infoToast from "~/components/popup/cart-delivery-toast.vue";
import { asideHeight, observeCartLeftWrapper, titleClose } from "~/assets/js/cart.js";
export default {

    name: 'cart',
    components: {
        TitleD1,
        infoToast,
    },
    data() {
        return {
            titleMain: "장바구니",
            btnShow: true, //세트상품
        };
    },
    mounted() {
        this.$nextTick(() => {
            const cartLeftWrapper = this.$refs.cartLeftWrapper;
            const cartBottomWrapper = this.$refs.cartBottomWrapper;
            const cartRightWrapper = this.$refs.cartRightWrapper;
            const boardTitles = document.querySelectorAll(".title_closed");
            const cartBtns = document.querySelectorAll(".cart_container_btn");

            asideHeight(cartLeftWrapper, cartBottomWrapper, cartRightWrapper);
            observeCartLeftWrapper(cartLeftWrapper, cartBottomWrapper, cartRightWrapper);
            titleClose(boardTitles, cartBtns);
        });
    },
    methods: {
        toggleBtnShow() {
            this.btnShow = !this.btnShow;
        }
    }
}


</script>

<style>
@import url('~/assets/css/pages/cart.css');
</style>