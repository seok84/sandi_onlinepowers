<template>
    <div class="inner item_detail_inner" id="itemDetailView">
        <lnbCate />
        <div class="content-top">
            <!-- 아이템 썸네일 -->
            <div class="thumbnail-container">
                <div class="thumbnail-wrap">
                    <!-- 썸네일 스와이퍼 -->
                    <div class="swiper thumbnail-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item, index) of itemThumbnail" :key="index" :data-index="index">
                                <div class="item-thumbnail" :class="{ 'sold-out': soldOut }">
                                    <div class="sold-out-wrap">
                                        <span>
                                            <img src="~/assets/img/items/sold-out.png" alt="품절">
                                        </span>
                                    </div>
                                    <img :src="item" alt="상품상세 이미지">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 썸네일 목록 스와이퍼 -->
                    <div class="swiper-disable-wrapper">
                        <div class="swiper thumbnail-list-swiper pc">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) of itemThumbnail" :key="index" :data-index="index"
                                    @click.prevent="activateSlide(index)" :ref="'ThumbsList'">
                                    <div class="item-thumbnail">
                                        <span class="img-wrap">
                                            <img :src="item" alt="썸네일">
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-inner pc">
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 아이템 정보 -->
            <div class="detail-info">
                <!-- 타임딜 카운터 -->
                <div class="timedeal-timer">
                    <div class="timedeal-sail">
                        TIME<br>SALE
                    </div>
                    <div class="timedeal-time">
                        <p>09:38~11:59</p>
                        <p>월·화·수·목·금·토·일</p>
                    </div>
                </div>
                <div class="tit-area">
                    <!-- 태그 -->
                    <ul class="item-tag">
                        <li class="tag tag1"><span>태그1</span></li>
                        <li class="tag tag2"><span>태그2</span></li>
                        <li class="tag tag3"><span>태그3</span></li>
                        <li class="tag tag4"><span>태그4</span></li>
                        <li class="tag tag5"><span>태그5</span></li>
                    </ul>
                    <div class="brand_mall">
                        <div class="brand_mall_txt">
                            <a class="brand"><span>SANDI</span></a>
                            <nuxt-link to="/" class="product-title">
                                <p class="title titleLine02">총무팀 업무에 딱! SANDI APP 샌디 앱 서비스
                                    +전문가 상담 서비스 추가 패키지</p>
                            </nuxt-link>
                        </div>
                        <a href="javascript:void(0);" class="btn-heart" @click="addToWishList($event)"></a>
                        <a href="javascript:void(0);" class="btn-sns"></a>
                    </div>
                    <p class="title2">
                        채널 일원화로 즐기는 손쉬운 민원 관리, 편리하게 즐기는 편의 서비스, 스마트한 데이터 관리까지 한번에!SANDI APP!
                    </p>
                    <!-- <p class="product_each_code">
                                상품코드
                                <span>G2000123456789</span>
                            </p> -->
                    <div class="price-area">
                        <div class="sale_area">
                            <p class="before"><span>500,000</span>원</p>
                            <div class="price_group">
                                <p class="price"><span>250,000</span>원</p>
                                <p class="sale"><span>20</span>%</p>
                                <!-- 2023.04.03 수정 -->
                                <div class="ttip_wrapper" @click="tipOpen = !tipOpen" :class="{ show: tipOpen === true }">
                                    <!-- // 2023.04.F3 수정 -->
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

                            </div>
                        </div>

                        <div class="btn btn-small btn_sm btn-primary coupon_down" @click="downloadCoupon = true"
                            id="downloadCoupon">
                            <span>쿠폰 다운</span>
                            <img src="~/assets/img/common/ico_down.svg">
                        </div>

                    </div>

                </div>
                <div class="info_area">
                    <dl>
                        <dt>상품코드</dt>
                        <dd>
                            <p><b>G2000123456789</b></p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>배송정보</dt>
                        <dd>
                            <p><b>2,500</b>원 (<b>30,000</b>원 이상 무료배송)
                                <!-- <span class="product_status">냉동</span> -->
                            </p>
                            <!-- <span class="delivery_else" @click="openModal($event)" id="detailDelivery">도서산간 지역보기</span> -->
                            <span class="delivery_else" @click="detailDelivery = true">도서산간 지역보기</span>
                        </dd>
                    </dl>

                </div>

                <div class="select-content" :class="{ 'hide-select': showSelectContainer, 'fixed': isMobile }">
                    <div class="select-container">
                        <div class="select-wrap">
                            <!-- 옵션 선택 및 리스트 -->
                            <div class="select-inner">
                                <p class="product-title">
                                    <span class="title">앙버터 부쉬맨 120g 1박스(10개) 앙버터 부쉬맨 120g 1박스(10개)</span>
                                </p>
                                <!-- 옵션 선택 영역 -->
                                <div class="product-option-wrap">
                                    <!-- 옵션 선택 종류 -->
                                    <div class="option-type-wrap">

                                        <!-- 옵션미사용 기본-수량 -->
                                        <div class="option-type option-quantity">
                                            <div class="quantity-box">
                                                <div class="btn-quantity-box">
                                                    <button type="button" class="btn-minus">-</button>
                                                    <input type="number" title="수량" value="1" class="number">
                                                    <button type="button" class="btn-plus">+</button>
                                                </div>
                                            </div>
                                        </div>

                                        <p class="option-txt">*상품을 구매하려면 필수 옵션을 작성하세요.</p>

                                        <!-- 옵션텍스트형 -->
                                        <div class="option-type option-text">
                                            <span class="form-line form-button">
                                                <input type="text" class="form-basic" placeholder="요청문구 - 옵션텍스트형" />
                                                <button class="btn btn-black">추가</button>
                                            </span>
                                            <span class="form-line form-button">
                                                <input type="text" class="form-basic" placeholder="폰트사이즈 - 옵션텍스트형" />
                                                <button class="btn btn-black">추가</button>
                                            </span>
                                        </div>

                                        <!-- 옵션조합형1 -->
                                        <div class="option-type option-dropdown">
                                            <div class="dropdown-box">
                                                <div class="select-type1" @click="openOption($event)">[상품1] 상품 옵션을 선택하세요 -
                                                    옵션조합형1</div>
                                                <div class="option-drop">
                                                    <div class="drop-inner">
                                                        <p class="drop-tit">[상품1] 상품 옵션을 선택하세요</p>
                                                        <div class="dropdown-area">
                                                            <button class="tit" @click="toggleOption($event)">옵션 1</button>
                                                            <div class="option-btn" ref="optionMenu">
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)1</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)2</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)3</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)4</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)5</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)6</button>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown-area">
                                                            <button class="tit" @click="toggleOption($event)">옵션 2</button>
                                                            <div class="option-btn" ref="optionMenu">
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                                            </div>
                                                        </div>
                                                        <button type="button" class="drop-close"
                                                            @click.prevent="closeOption($event)">
                                                            <span class="screen-out">옵션 닫기 버튼</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- 옵션조합형2 -->
                                        <div class="option-type option-dropdown">
                                            <div class="dropdown-box">
                                                <div class="select-type1" @click="openOption($event)">[상품1] 상품 옵션을 선택하세요 -
                                                    옵션조합형2</div>
                                                <div class="option-drop">
                                                    <div class="drop-inner">
                                                        <p class="drop-tit">[상품1] 상품 옵션을 선택하세요</p>
                                                        <div class="dropdown-area">
                                                            <button class="tit" @click="toggleOption($event)">옵션 1</button>
                                                            <div class="option-btn" ref="optionMenu">
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)1</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)2</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)3</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)4</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)5</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)6</button>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown-area">
                                                            <button class="tit" @click="toggleOption($event)">옵션 2</button>
                                                            <div class="option-btn" ref="optionMenu">
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                                            </div>
                                                        </div>
                                                        <div class="dropdown-area">
                                                            <button class="tit" @click="toggleOption($event)">옵션 3</button>
                                                            <div class="option-btn" ref="optionMenu">
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)</button>
                                                            </div>
                                                        </div>
                                                        <button type="button" class="drop-close"
                                                            @click.prevent="closeOption($event)">
                                                            <span class="screen-out">옵션 닫기 버튼</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- 옵션선택형 -->
                                        <div class="option-type option-dropdown">
                                            <div class="dropdown-box">
                                                <div class="select-type1" @click="openOption($event)">[상품1] 상품 옵션을 선택하세요 -
                                                    옵션선택형
                                                </div>
                                                <div class="option-drop">
                                                    <div class="drop-inner">
                                                        <p class="drop-tit">[상품1] 상품 옵션을 선택하세요</p>
                                                        <div class="dropdown-area">
                                                            <button class="tit" @click="toggleOption($event)">옵션 1</button>
                                                            <div class="option-btn" ref="optionMenu">
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)1</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)2</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)3</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)4</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)5</button>
                                                                <button type="button">일러스트 : 심슨 쿠션(쇼파)6</button>
                                                            </div>
                                                        </div>
                                                        <button type="button" class="drop-close"
                                                            @click.prevent="closeOption($event)">
                                                            <span class="screen-out">옵션 닫기 버튼</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- 옵션세트형(구성상품) -->
                                        <div class="option-type option-set">
                                            <div class="set-content">
                                                <div class="set-title" @click="toggleOptionSet">
                                                    <span>구성상품</span>
                                                </div>
                                                <div class="item-list-container set-container" v-show="optionSet">
                                                    <div class="item-list horizon" v-for="(item, index) in itemsSet"
                                                        :key="index">

                                                        <item-part-thumbnail :item="item.thumbnail" />

                                                        <div class="item-info">
                                                            <div class="item-title-wrap">
                                                                <!-- 아이템 타이틀 -->
                                                                <nuxt-link to="/">
                                                                    <p class="title">{{ item.info.title }}</p>
                                                                </nuxt-link>
                                                                <div class="item-option">
                                                                    {{ item.info.option }}
                                                                </div>

                                                                <!-- 아이템 가격 -->
                                                                <div class="item-price set">
                                                                    <span class="price"><span>{{ item.info.price
                                                                    }}</span>원</span>
                                                                    <span class="quantity"><span>{{ choice.item.quantity
                                                                    }}</span>개</span>
                                                                </div>

                                                                <!-- 옵션조합형1 -->
                                                                <div class="option-type option-dropdown">
                                                                    <div class="dropdown-box">
                                                                        <div class="select-type1"
                                                                            @click="openOption($event)">
                                                                            [상품1]
                                                                            상품 옵션을 선택하세요 - 옵션조합형1
                                                                        </div>
                                                                        <div class="option-drop">
                                                                            <div class="drop-inner">
                                                                                <p class="drop-tit">[상품1] 상품 옵션을 선택하세요</p>
                                                                                <div class="dropdown-area">
                                                                                    <button class="tit"
                                                                                        @click="toggleOption($event)">옵션
                                                                                        1</button>
                                                                                    <div class="option-btn"
                                                                                        ref="optionMenu">
                                                                                        <button type="button">일러스트 : 심슨
                                                                                            쿠션(쇼파)1</button>
                                                                                        <button type="button">일러스트 : 심슨
                                                                                            쿠션(쇼파)2</button>
                                                                                        <button type="button">일러스트 : 심슨
                                                                                            쿠션(쇼파)3</button>
                                                                                        <button type="button">일러스트 : 심슨
                                                                                            쿠션(쇼파)4</button>
                                                                                        <button type="button">일러스트 : 심슨
                                                                                            쿠션(쇼파)5</button>
                                                                                        <button type="button">일러스트 : 심슨
                                                                                            쿠션(쇼파)6</button>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="dropdown-area">
                                                                                    <button class="tit"
                                                                                        @click="toggleOption($event)">옵션
                                                                                        2</button>
                                                                                    <div class="option-btn"
                                                                                        ref="optionMenu">
                                                                                        <button type="button">일러스트 : 심슨
                                                                                            쿠션(쇼파)</button>
                                                                                        <button type="button">일러스트 : 심슨
                                                                                            쿠션(쇼파)</button>
                                                                                        <button type="button">일러스트 : 심슨
                                                                                            쿠션(쇼파)</button>
                                                                                    </div>
                                                                                </div>
                                                                                <button type="button" class="drop-close"
                                                                                    @click.prevent="closeOption($event)">
                                                                                    <span class="screen-out">옵션 닫기 버튼</span>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- 옵션 리스트  -->
                                    <div class="option-list">
                                        <ul class="list-in">
                                            <li>
                                                <div class="wrap-tit">
                                                    <p class="option-tit">
                                                        <span class="prd-num">상품<span>03</span></span>
                                                        <span class="prd-name">샌디앱 서비스 샌디앱 서비스 샌디앱 서비스 샌디앱 서비스 샌디앱 서비스 샌디앱
                                                            서비스 샌디앱 서비스 샌디앱 서비스 샌디앱 서비스 샌디앱 서비스 샌디앱 서비스 샌디앱 서비스 샌디앱 서비스 샌디앱
                                                            서비스 샌디앱 서비스 </span>
                                                    </p>
                                                    <div class="btn-item-delete"></div>
                                                </div>
                                                <p class="option">[옵션1] 옵션명이 들어가는 영역 옵션명이 들어가는 영역 +22,000원 추가</p>
                                                <p class="option">[추가상품] 추가상품명이 들어가는 영역</p>
                                                <div class="price-wrap">
                                                    <div class="quantity-box">
                                                        <div class="btn-quantity-box">
                                                            <button type="button" class="btn-minus">-</button>
                                                            <input type="number" title="수량" value="1" class="number">
                                                            <button type="button" class="btn-plus">+</button>
                                                        </div>
                                                    </div>
                                                    <p class="option-price"><span>299,000</span>원</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="wrap-tit">
                                                    <p class="option-tit">
                                                        <span class="prd-num">상품<span>03</span></span>
                                                        <span class="prd-name">샌디앱 서비스</span>
                                                    </p>
                                                    <div class="btn-item-delete"></div>
                                                </div>
                                                <div class="price-wrap">
                                                    <div class="quantity-box">
                                                        <div class="btn-quantity-box">
                                                            <button type="button" class="btn-minus">-</button>
                                                            <input type="number" title="수량" value="1" class="number">
                                                            <button type="button" class="btn-plus">+</button>
                                                        </div>
                                                    </div>
                                                    <p class="option-price"><span>299,000</span>원</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="wrap-tit">
                                                    <p class="option-tit">
                                                        <span class="prd-num">상품<span>03</span></span>
                                                        <span class="prd-name">샌디앱 서비스</span>
                                                    </p>
                                                    <div class="btn-item-delete"></div>
                                                </div>
                                                <div class="price-wrap">
                                                    <div class="quantity-box">
                                                        <div class="btn-quantity-box">
                                                            <button type="button" class="btn-minus">-</button>
                                                            <input type="number" title="수량" value="1" class="number">
                                                            <button type="button" class="btn-plus">+</button>
                                                        </div>
                                                    </div>
                                                    <p class="option-price"><span>299,000</span>원</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 옵션 합계 -->
                                <div class="option-total">
                                    <span class="total">합계</span>
                                    <span class="total-count">
                                        <strong>3,289,000</strong>원
                                    </span>
                                </div>
                            </div>
                            <!-- 화살표 -->
                            <button class="drag_able" @click="showSelectContainer = false">올리기</button>
                            <button class="drag_able shadow"></button>
                        </div>
                        <!-- PC일 때 버튼-->
                        <div class="option-btn-wrap" v-show="!isMobile">
                            <div class="option-btn-inner">
                                <button type="button" class="btn btn-default btn-cart">장바구니</button>
                                <button type="button" class="btn btn-attention btn-buy">바로구매</button>
                                <!-- <button type="button" class="btn btn-disabled btn-soldout">품절</button> -->
                            </div>
                        </div>
                        <!-- mobile일 때 버튼 -->
                        <div class="option-btn-wrap" v-show="isMobile">
                            <!-- 개발 틀어져서 ml-2 임시로 단 거 나중에 떼기 // 20231120 m1-2 제거-->
                            <div class="option-btn-inner" v-show="!showSelectContainer">
                                <button type="button" class="btn btn-buy btn-attention"
                                    @click="showSelectContainer = true">구매하기</button>
                                <!-- <button type="button" class="btn btn-disabled btn-soldout">품절</button> -->
                            </div>
                            <div class="option-btn-inner ml-2" v-show="showSelectContainer">
                                <button type="button" class="btn btn-cart btn-default">장바구니</button>
                                <button type="button" class="btn btn-now btn-attention">바로구매</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 무형 상품일 때-->
                <div class="option-btn-wrap">
                    <div class="option-btn-inner">
                        <button type="button" class="btn btn-default"
                            @click="quoteContactModal.modalShow = true">간편문의</button>
                        <button type="button" class="btn btn-dark">견적요청</button>
                    </div>
                </div>

            </div>
        </div>
        <!-- 연관상품 -->
        <div class="recommend-container">
            <h4 class="sub_tit">다른 고객들이 많이 본 상품</h4>
            <div class="swiper relationSwiper visible_swiper swiper_hidden_side">
                <div class="swiper-wrapper">
                    <div class="item-list vert swiper-slide" v-for="(item, index) in items" :key="index">
                        <item-part-thumbnail :item="item.thumbnail" />
                        <item-part-info :item="item.info" />
                    </div>
                </div>
                <div class="swiper_inner">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </div>

        <!-- item_tab -->
        <div class="item_tab">
            <ul class="nav_tabs">
                <li class="nav_item" @click="tabIndex = 0" :class="{ 'active': tabIndex === 0 }">
                    <div class="nav_link">
                        <span>상세정보</span>
                    </div>
                </li>
                <li class="nav_item" @click="tabIndex = 1" :class="{ 'active': tabIndex === 1 }">
                    <div class="nav_link">
                        <span>기본정보</span>
                    </div>
                </li>
                <li class="nav_item" @click="tabIndex = 2" :class="{ 'active': tabIndex === 2 }">
                    <div class="nav_link">
                        <span>후기</span>
                        <span class="total_number">
                            (<span>1,955</span>)
                        </span>
                    </div>
                </li>
                <li class="nav_item" @click="tabIndex = 3" :class="{ 'active': tabIndex === 3 }">
                    <div class="nav_link">
                        <span>상품문의</span>
                    </div>
                </li>
            </ul>
        </div>
        <!-- tab_content -->
        <div class="tab_content">
            <div id="nav-detail" class="tab_pane" v-if="tabIndex === 0">
                <div class="contents_edit">
                    <div class="photo_area">
                        <img src="~/static/img/sample/sample_product_img.png" alt="">
                    </div>
                    <button class="view_more" @click="viewMore($event)">
                        <span>더보기</span>
                    </button>
                </div>
                <!-- contents_edit -->
                <table class="product_info_table">
                    <caption>상품정보</caption>
                    <colgroup>
                        <col style="width:35%;">
                        <col style="width:65%;">
                    </colgroup>
                    <tbody>
                        <tr>
                            <th scope="row"><span>용량(중량), 수량, 크기</span></th>
                            <td><span>1박스(120gX10ea)</span></td>
                        </tr>
                        <tr>
                            <th scope="row"><span>관련법상 표시사항</span></th>
                            <td><span>해당없음</span></td>

                        </tr>
                        <tr>
                            <th scope="row"><span>소비자상담 관련 전화번호</span></th>
                            <td><span>샌디 고객센터 1599-7751</span></td>

                        </tr>
                        <tr>
                            <th scope="row"><span>주원료명</span></th>
                            <td><span>상세페이지 참고</span></td>
                        </tr>
                        <tr>
                            <th scope="row"><span>식품의 유형</span></th>
                            <td><span>상세페이지 참고</span></td>
                        </tr>
                        <tr>
                            <th scope="row"><span>생산자 및 소재지</span></th>
                            <td><span>상세페이지 참고</span></td>
                        </tr>
                        <tr>
                            <th scope="row"><span>영양성분 표시 대상 여부</span></th>
                            <td><span>Y</span></td>

                        </tr>
                        <tr>
                            <th scope="row"><span>유전자 재조합 식품 여부</span></th>
                            <td><span>N</span></td>

                        </tr>
                        <tr>
                            <th scope="row"><span>특수용도식품 여부</span></th>
                            <td><span>N</span></td>

                        </tr>
                        <tr>
                            <th scope="row"><span>수입식품 여부</span></th>
                            <td><span>N</span></td>

                        </tr>
                        <tr>
                            <th scope="row"><span>표시광고 사전심의필</span></th>
                            <td><span>해당없음</span></td>
                        </tr>
                        <tr>
                            <th scope="row"><span>제조연월일(포장일 또는 생산연도) / 유통기한</span></th>
                            <td><span>생산 제조년월일이 상시 다르므로 소비자 상담번호로 문의주시면 안내해 드리겠습니다.</span></td>
                        </tr>
                    </tbody>
                </table>
                <!-- product_info_table -->
            </div>
            <div id="nav-info" class="tab_pane" v-if="tabIndex === 1">
                <h5 class="sub_tit sub_tit_sm">배송반품교환 상세정보</h5>
                <!-- 배송안내 -->
                <!-- <h5 class="sub_tit sub_tit_sm">배송안내</h5> -->
                <ul class="sub_desc">
                    <li class="tit_sm">배송안내</li>
                    <li class="info_dot">배송기간과 출고방법을 반드시 확인하시고, 여유있게 주문을 부탁드립니다.</li>
                    <li class="info_dot">주문하신 상품은 평일 오후 4시 결제(입금)을 완료하시면 당일출고 됩니다.</li>
                    <li class="info_dot">주문상품이 2개 이상의 박스로 같은날 출고했더라도 택배사 사정에 의해 배송일자가 상이할 수 있습니다.</li>
                    <li class="info_dot">업체직배송 상품등 일부상품은 상품마다 주문마감시간이 다릅니다. 상품 상세페이지에서 마감시간을 반드시 확인해 주세요..</li>
                    <li class="info_dot">냉동,냉장 상품은 선도유지를 위해 토요일과 공휴일 이전일에는 발송되지 않습니다</li>
                    <li class="info_dot">주문하신 상품은 출고일 기준 2~3일 이내 받아보실 수 있습니다. (도서산간 지역은 4~7일 이내에 받아보실 수 있습니다.)</li>
                    <li class="info_dot">일요일 및 공휴일, 천재지변에 의한 기간은 배송기간에서 제외됩니다.</li>
                    <li class="info_dot">토요일, 공휴일 배송 상품 중 품절 상품 발생 시 품절 상품수량 제외 후 출고 됩니다.</li>
                    <li class="info_dot">주말(토요일,일요일) 및 공휴일에도 평일과 동일하게 출고가 진행됨으로 출고시간 이후 주문취소나 주문수정이 불가합니다.</li>
                </ul>

                <!-- 배송비안내 -->
                <!-- <h5 class="sub_tit sub_tit_sm">배송비안내</h5> -->
                <ul class="sub_desc">
                    <li class="tit_sm">배송비안내</li>
                    <li class="info_dot">도서산간지역은 택배사에서 지정된 추가배송비가 발생하는 지역입니다.</li>
                    <li class="info_dot">배송비: 3,000원</li>
                </ul>
                <table class="product_info_table freeDe">
                    <caption>상품정보</caption>
                    <colgroup>
                        <col style="width: 15%;">
                        <col style="width: 20%;">
                        <col style="width: 65%;">
                    </colgroup>
                    <tbody>
                        <tr>
                            <th rowspan="4" text-align="center" class="freeDe">무료배송</th>
                            <td class="freeDe"><span>일반상품</span></td>
                            <td>
                                <span>- 결제금액 기준 5만원(50,000원)이상 구매 시</span> <br>
                                <span>- 도서산간지역 : 결제금액 기준 6만원(60,000원) 이상 구매시</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="freeDe"><span>냉장식품</span></td>
                            <td>
                                <span>- 결제금액 기준 5만원(50,000원)이상 구매 시</span><br>
                                <span>- 도서산간지역 : 결제금액 기준 10만원(100,000원) 이상 구매시</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="freeDe"><span>냉동상품</span></td>
                            <td>
                                <span>- 결제금액 기준 5만원(50,000원)이상 구매 시</span><br>
                                <span>- 도서산간지역 : 결제금액 기준 10만원(100,000원) 이상 구매시</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="freeDe"><span>업체직배송 상품</span></td>
                            <td><span>- 발송처마다 기준이 다릅니다. 상품상세페이지에서 확인해 주세요.</span></td>
                        </tr>
                    </tbody>
                </table>

                <!-- 반품안내 -->
                <!-- <h5 class="sub_tit sub_tit_sm">반품안내</h5> -->
                <ul class="sub_desc">
                    <li class="tit_sm">반품안내</li>
                    <li class="info_dot">주문하신 상품 수령일로부터 “7일 이내에만 반품이 가능” 합니다. ('전자상거래 등에서의 소비자보호에 관한 법률' 제17조)</li>
                    <li class="info_dot">
                        단순 변심으로 인한 반품(사이즈, 색상, 질감, 크기 등)을 하실 경우 박스당 왕복배송비 6,000원을 부담하셔야 합니다.
                        ('전자상거래 등에서의 소비자보호에 관한 법률' 제18조 9항)
                    </li>
                    <li class="info_dot">복수주문 상품 중 일부를 반품하실 경우, 결제 금액이 무료배송 기준을 충족해도 왕복배송비를 부담하셔야 합니다.</li>
                    <li class="info_dot">냉동, 냉장 상품은 선도유지를 위해 토요일과 공휴일 이전일에는 발송되지 않습니다.</li>
                    <li class="info_dot">주문하신 상품은 출고일 기준 2~3일 이내 받아보실 수 있습니다. (도서산간 지역은 4~7일 이내에 받아보실 수 있습니다.)</li>
                    <li class="info_dot">일요일 및 공휴일, 천재지변에 의한 기간은 배송기간에서 제외됩니다.</li>
                    <li class="info_dot">유통기한이 3개월 이상 남은 제품은 정상제품이므로, 반품 및 교환이 불가합니다.</li>
                    <li class="info_dot">배송과정에서 상품 파손 및 변질 등 저희 측 귀책사항으로 반품해야 할 경우 반송비는 저희가 부담합니다.</li>
                    <li class="info_dot">상품이 파손 된 경우, “송장 조회상 물품수령일로부터 3일 이후에는 반품이 불가”합니다.</li>
                    <li class="info_dot">파손된 상품은 고객님 임의대로 처리하지 마시고 반듯이 보관한 상태에서 송장사진, 파손된 상품 사진을 당사에 보내주셔야 반품처리가 가능합니다.</li>
                    <li class="info_dot">불량 또는 파손이라고 여겨지는 상품이라고 해도 당사에서 확인이 필요하다고 판단되는 상품은 당사 확인 후 반품처리가 가능합니다.</li>
                    <li class="info_dot">직배송 제품은 업체에 따라 반품 택배비용에 실비가 첨부됩니다.</li>
                    <li class="info_dot">아래의 경우에는 “상품 수령일로부터 7일 이내라도 반품 및 환불이 불가”합니다.</li>
                    <li class="info_dot none">- 신선도가 중요한 냉동 또는 냉장상품의 변심 반품.</li>
                    <li class="info_dot none">
                        - 상품가치가 훼손되어 판매가 불가능 할 때.
                        <br> 1) 상품 개봉 후 사용 또는 소비된 제품.
                        <br> 2) 상품 내용에 하자가 없음에도 포장 개봉 및 훼손한 경우.
                        <br> 3) 상품의 박스에 운송장을 부착하여 반송한 경우. (반품 시에는 제품박스 이외의 포장을 한번 더 해주세요.
                    </li>


                    <li class="info_dot">상품의 색상은 모니터의 해상도와 종류에 따라 차이가 있을 수 있습니다.</li>
                </ul>

                <!-- 환불 및 교환안내 -->
                <!-- <h5 class="sub_tit sub_tit_sm">환불 및 교환안내</h5> -->
                <ul class="sub_desc">
                    <li class="tit_sm">환불 및 교환안내</li>
                    <li class="info_dot">불량 또는 파손이라고 여기지는 상품이라고 해도 당사에서 확인이 필요하다고 판단되는 상품은 당사 확인 후 교환, 환불처리가 가능합니다.</li>
                    <li class="info_dot">주문하신 상품을 물류센터에서 출고이전에 취소를 하시면 환불(승인취소)해 드립니다.</li>
                    <li class="info_dot">반품하신 상품은 물류센터 도착일로부터 2일 이내에 환불해 드립니다.</li>
                    <li class="info_dot">환불은 고객님의 결제 방식에 따라 온라인계좌입금, 승인 취소 등을 통하여 진행 됩니다.</li>
                    <li class="info_dot">상품 교환은 “① 반품접수 - ② 반품확인 - ③ 환불 - ④ 신규주문” 과정을 거쳐 진행 됩니다.</li>
                    <li class="info_dot">환불 시 사업자회원은 “사업자등록증의 상호명 또는 대표자명” 개인회원은 “가입자 명의 계좌”로만 환불이 가능합니다.</li>
                    <li class="info_dot">주문상태가 배송준비중 이더라도, 상품포장이 완료되어 택배사에 전달 또는 직배 배송 준비가 완료 되었을 경우 주문취소가 불가능합니다.</li>
                    <li class="info_dot">부득이하게 주문취소를 원할 경우 반품과 동일하게 처리되어 1박스당 반품배송비 6,000원이 부과됩니다.</li>
                </ul>
            </div>
            <div id="nav-review" class="tab_pane" v-if="tabIndex === 2">
                <!--       ////////////////////////  체험단 후기 ////////////////////////       -->
                <div class="review_list experience_list">

                    <div class="review_list_tit">
                        <p>체험단후기</p>
                        <div class="wrap_btn_current">
                            <a href="javascript:void(0);" class="overall on">전체</a>

                            <a href="javascript:void(0);" class="latest">최신순</a>

                            <a href="javascript:void(0);" class="recommend">추천순</a>
                        </div>
                    </div>
                    <ul>
                        <li class="list_area">
                            <div class="rv_prd_sec">
                                <div class="rv_prd">
                                    <div class="user_wrapper">
                                        <span class="user_id_info">solibi***</span>
                                        <span class="review_score good">만족</span>
                                        <!--                     <span class="review_score normal">보통</span>
                        <span class="review_score notgood">아쉬움</span> -->
                                        <span class="date">2022-12-13</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list_in">
                                <div class="review_open">
                                    <!--                   <div class="list_top">
                        <div class="mp_rv_top">
                          <div class="rating_star">
                            <span class="on"></span> <span class="on"></span>
                            <span class="on"></span> <span class="on"></span>
                            <span></span>
                          </div>
                        </div>
                      </div> -->


                                    <!-- 
                        2023.05.04 사진리뷰 후기 팝업
                    -->
                                    <div class="review_origin">
                                        <div class="txt_area">
                                            <p class="title">
                                                후기 내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다 후기
                                                내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다 후기 내용이
                                                노출되는 영역입니다 후기 내용이 노출되는 영역입니다
                                            </p>
                                        </div>
                                        <div class="img_area">
                                            <div class="review_thumbnail_wrap">
                                                <!-- <span class="close">닫기</span> -->
                                                <div class="mobile show_review_photo" @click="openModal($event)"
                                                    id="photoThumb">
                                                    사진전체보기
                                                </div>

                                                <ul>
                                                    <li>

                                                        <img src="~/assets/img/sample/sample_img.jpg" alt="상품후기사진" />
                                                    </li>
                                                    <li>
                                                        <img src="~/assets/img/sample/sample_img.jpg" alt="상품후기사진" />
                                                    </li>
                                                    <li>
                                                        <img src="~/assets/img/sample/sample_img.jpg" alt="상품후기사진" />
                                                    </li>
                                                    <li>
                                                        <img src="~/assets/img/sample/thumb.png" alt="상품후기사진" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="thumbs_up">
                                            <!-- <span>도움됐어요</span>
                          <div class="thumbs_btn">
                            <span class="thumbs_img"></span>
                            <span class="thumbs_count">99+</span>
                          </div> -->
                                            <!-- <a href="javascript:void(0);" class="fr_linked">신고/차단</a> -->
                                            <a href="javascript:void(0);" class="btn btn-default btn_sm btn_modify">수정</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list_area">
                            <div class="rv_prd_sec">
                                <div class="rv_prd">
                                    <div class="user_wrapper">
                                        <span class="user_id_info">solibi***</span>
                                        <!-- <span class="review_score good">만족</span> -->
                                        <span class="review_score normal">보통</span>
                                        <!-- <span class="review_score notgood">아쉬움</span> -->
                                        <span class="date">2022-12-13</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list_in">
                                <div class="review_open">
                                    <!--                   <div class="list_top">
                        <div class="mp_rv_top">
                          <div class="rating_star">
                            <span class="on"></span> <span class="on"></span>
                            <span class="on"></span> <span class="on"></span>
                            <span></span>
                          </div>
                        </div>
                      </div> -->
                                    <div class="review_origin">
                                        <div class="txt_area">
                                            <p class="title">
                                                후기 내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다 후기
                                                내용이 노출되는 영역입니다
                                                후기 내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다
                                                후기 내용이 노출되는 영역입니다 후기 내용이 노출되는 영역입니다 </p>
                                        </div>
                                        <!-- <div class="img_area">
                                                <div class="review_thumbnail_wrap">
                                                    <span class="close">닫기</span>
                                                    <ul>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> -->
                                        <div class="thumbs_up">
                                            <!-- <span>도움됐어요</span>
                          <div class="thumbs_btn">
                            <span class="thumbs_img"></span>
                            <span class="thumbs_count">99+</span>
                          </div> -->
                                            <a href="javascript:void(0);" class="fr_linked">신고/차단</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list_area">
                            <div class="rv_prd_sec">
                                <div class="rv_prd">
                                    <div class="user_wrapper">
                                        <span class="user_id_info">solibi***</span>
                                        <!-- <span class="review_score good">만족</span>
                                                                <span class="review_score normal">보통</span> -->
                                        <span class="review_score notgood">아쉬움</span>
                                        <span class="date">2022-12-13</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list_in">
                                <div class="review_open">
                                    <!--                   <div class="list_top">
                        <div class="mp_rv_top">
                          <div class="rating_star">
                            <span class="on"></span> <span class="on"></span>
                            <span class="on"></span> <span class="on"></span>
                            <span></span>
                          </div>
                        </div>
                      </div> -->
                                    <div class="review_origin">
                                        <div class="txt_area">
                                            <p class="title">
                                                신고 후 검토 결과, 게시 중단 되었습니다.
                                            </p>
                                        </div>
                                        <!-- <div class="img_area">
                                                <div class="review_thumbnail_wrap">
                                                    <span class="close">닫기</span>
                                                    <ul>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> -->
                                        <div class="thumbs_up">
                                            <!-- <span>도움됐어요</span>
                          <div class="thumbs_btn">
                            <span class="thumbs_img"></span>
                            <span class="thumbs_count">99+</span>
                          </div> -->
                                            <a href="javascript:void(0);" class="fr_linked">신고/차단</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="list_area">
                            <div class="rv_prd_sec">
                                <div class="rv_prd">
                                    <div class="user_wrapper">
                                        <span class="user_id_info">solibi***</span>
                                        <span class="review_score good">만족</span>
                                        <!--                     <span class="review_score normal">보통</span>
                        <span class="review_score notgood">아쉬움</span> -->
                                        <span class="date">2022-12-13</span>
                                    </div>
                                </div>
                            </div>
                            <div class="list_in">
                                <div class="review_open">
                                    <div class="review_origin">
                                        <div class="txt_area">
                                            <p class="title">
                                                이 회원의 댓글이 숨김 처리되었습니다.
                                            </p>
                                        </div>
                                        <div class="thumbs_up">
                                            <a href="javascript:void(0);" class="fr_linked">신고/차단</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <!-- //////////////////// end of user review lsit ////////////////////-->
                    <etc-pagination />
                </div>
                <!--       ////////////////////////  end of 체험단 후기  ////////////////////////       -->




                <allScoreStar />


                <div class="review_list">

                    <div class="form_title type02 review_list_tit">
                        <p>전체<span class="counter">1,357</span></p>
                        <a href="javascript:void(0);">후기작성하기</a>
                    </div>
                    <div class="review_filter_wrapper">
                        <div class="check_wrap">
                            <input type="checkbox" name="showPhoto" id="showPhoto" class="input_check" checked=""><span>사진후기
                                보기</span>
                        </div>
                        <div class="wrap_btn_current">
                            <a href="javascript:void(0);" class="overall on">전체</a>

                            <a href="javascript:void(0);" class="latest">최신순</a>

                            <a href="javascript:void(0);" class="recommend">추천순</a>
                        </div>
                        <div class="ranking_filter_area">

                            <div class="form_line select_wrap">
                                <select name="" id="select01" class="form_control input_select">
                                    <option value="">별점별 점수 보기</option>
                                    <option value="">★★★★★</option>
                                    <option value="">★★★★☆</option>
                                    <option value="">★★★☆☆</option>
                                    <option value="">★★☆☆☆</option>
                                    <option value="">★☆☆☆☆</option>
                                    <option value="">☆☆☆☆☆</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
                <!--       ////////////////////////  일반 후기  ////////////////////////       -->
                <div class="review_list ">
                    <ul>
                        <li class="list_area">
                            <div class="rv_prd_sec">
                                <div class="rv_prd">
                                    <div class="user_wrapper">
                                        <span class="user_id_info">solibi***</span>
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
                                                선택한 옵션 : 옵션명 - 선택한 옵션 01 / 옵션명 - 선택한 옵션 02 / 옵션명 - 선택한 옵션 03 / 옵션명 - 선택한 옵션
                                                04 / 옵션명 - 선택한 옵션 05 / 옵션명 - 선택한 옵션 06 / 옵션이 두 줄이 됩니다 / 옵션이 두 줄이 됩니다 / 옵션이 두
                                                줄이 됩니다
                                            </p>
                                            <p class="title">
                                                사용자가 등록한 상품후기가 3줄까지 노출됩니다. 이미지 다수 등록시 4개까지 노출됩니다.
                                            </p>
                                        </div>
                                        <div class="img_area">
                                            <div class="review_thumbnail_wrap">
                                                <span class="close">닫기</span>
                                                <ul>
                                                    <li>
                                                        <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                    </li>
                                                    <li>
                                                        <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                    </li>
                                                    <li>
                                                        <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                    </li>
                                                    <li>
                                                        <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="thumbs_up">
                                            <span>도움됐어요</span>
                                            <div class="thumbs_btn">
                                                <span class="thumbs_img"></span>
                                                <span class="thumbs_count">99+</span>
                                            </div>
                                            <a href="javascript:void(0);" class="fr_linked">신고/차단</a>
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
                                        안녕하세요 고객님. 샌디 고객센터 입니다. <br /> 저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.<br /> 소중한 경험을 리뷰로
                                        남겨주셔서 감사합니다.
                                    </div>
                                    <!-- <p class="product_date">
                                        답변일&nbsp;&nbsp;:&nbsp;&nbsp;<span>2022-06-14</span>
                                    </p> -->
                                </div>
                            </div>
                        </li>
                        <li class="list_area">
                            <div class="rv_prd_sec">
                                <div class="rv_prd">
                                    <div class="user_wrapper">
                                        <span class="user_id_info">solibi***</span>
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
                                                선택한 옵션 : 옵션명 - 선택한 옵션 01 / 옵션명 - 선택한 옵션 02 / 옵션명 - 선택한 옵션 03 / 옵션명 - 선택한 옵션
                                                04 / 옵션명 - 선택한 옵션 05 / 옵션명 - 선택한 옵션 06 / 옵션이 두 줄이 됩니다 / 옵션이 두 줄이 됩니다 / 옵션이 두
                                                줄이 됩니다
                                            </p>
                                            <p class="title">
                                                잘받았습니다. 감사합니다<br /> 사용자가 등록한 상품후기가 3줄까지 노출됩니다. 이미지 다수 등록시 4개까지 노출됩니다.
                                            </p>
                                        </div>
                                        <!-- <div class="img_area">
                                                <div class="review_thumbnail_wrap">
                                                    <span class="close">닫기</span>
                                                    <ul>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> -->
                                        <div class="thumbs_up">
                                            <span>도움됐어요</span>
                                            <div class="thumbs_btn on">
                                                <span class="thumbs_img"></span>
                                                <span class="thumbs_count">99+</span>
                                            </div>
                                            <a href="javascript:void(0);" class="fr_linked">신고/차단</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="hide_wrap">
                                    <div class="administrator_answer">
                                        <div class="qna_manager">
                                            <span class="qa">A.</span>샌디
                                        </div>
                                        <div class="text_area">
                                            안녕하세요 고객님. 샌디 고객센터 입니다. <br />
                                            저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.<br />
                                            소중한 경험을 리뷰로 남겨주셔서 감사합니다.
                                        </div>
                                        <p class="product_date">Fql
                                            답변일&nbsp;&nbsp;:&nbsp;&nbsp;<span>2022-06-14</span>
                                        </p>
                                    </div>
                                </div> -->
                        </li>
                        <li class="list_area">
                            <div class="rv_prd_sec">
                                <div class="rv_prd">
                                    <div class="user_wrapper">
                                        <span class="user_id_info">solibi***</span>
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
                                            <p class="title">
                                                신고 후 검토 결과, 게시 중단 되었습니다.
                                            </p>
                                        </div>
                                        <!-- <div class="img_area">
                                                <div class="review_thumbnail_wrap">
                                                    <span class="close">닫기</span>
                                                    <ul>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="~/assets/img/sample/sample_img.jpg" alt="" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> -->
                                        <div class="thumbs_up">
                                            <span>도움됐어요</span>
                                            <div class="thumbs_btn">
                                                <span class="thumbs_img"></span>
                                                <span class="thumbs_count">0</span>
                                            </div>
                                            <a href="javascript:void(0);" class="fr_linked">신고/차단</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </li>
                        <li class="list_area">
                            <div class="rv_prd_sec">
                                <div class="rv_prd">
                                    <div class="user_wrapper">
                                        <span class="user_id_info">solibi***</span>
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
                                            <p class="title">
                                                이 회원의 후기가 숨김 처리되었습니다.
                                            </p>
                                        </div>

                                        <div class="thumbs_up">
                                            <span>도움됐어요</span>
                                            <div class="thumbs_btn">
                                                <span class="thumbs_img"></span>
                                                <span class="thumbs_count">0</span>
                                            </div>
                                            <a href="javascript:void(0);" class="fr_linked">신고/차단</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </ul>
                    <etc-pagination />
                    <etc-no-content txt="작성된 후기가 없습니다." />
                    <!--       ////////////////////////  end of 일반 후기  ////////////////////////       -->
                    <div class="review_list">
                        <div class="form_title type02 review_list_tit">
                            <p>전체<span class="counter">49</span></p> <a href="javascript:void(0);">후기작성하기</a>
                        </div>
                        <div class="txt_wrap02">
                            <p>아직 등록된 이용후기가 없습니다. <br /> 작성해주시는 이용후기는 다른 분의 쇼핑에 소중한 정보가 됩니다.</p>
                        </div>

                    </div>
                </div>


            </div>
            <div id="nav-inquiry" class="tab_pane" v-if="tabIndex === 3">
                <form action="">
                    <div class="form_line select_wrap">
                        <select name="" id="select01" class="form_control input_select">
                            <option value="">문의유형 선택</option>
                        </select>
                    </div>
                    <div class="form_line">
                        <input type="text" name="" id="" placeholder="제목을 입력하세요" class="form_control">
                    </div>
                    <div class="form_line">
                        <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요" class="form_control"></textarea>
                    </div>
                    <!-- 2023.03.3 추가 통테 이슈 98번-->
                    <div class="info_dot">
                        내가 작성한 문의는 <a href="#">마이페이지</a>에서 확인 가능합니다.
                    </div>
                    <div class="info_dot">
                        Q&A 및 후기게시판을 통해 취소나 교환, 반품 등은 처리되지 않습니다.
                    </div>
                    <div class="info_dot">
                        구매한 상품의 취소/교환/반품은 <a href="#">마이페이지</a> - <a href="#">주문내역</a> 에서 신청 가능합니다.
                    </div>
                    <div class="btn-wrap">
                        <button class="btn btn-middle btn-default">취소</button>
                        <button class="btn btn-middle btn-attention">저장</button>
                    </div>
                </form>

            </div>
            <!--       ////////////////////////  end of tab_content  ////////////////////////       -->
            <span class="btn btn-attention btn-now-top" @click="topScroll">바로구매</span>
        </div>
        <!-- <span class="btn btn-attention btn-now-top">바로구매</span> -->
        <!-- 다운로드 가능쿠폰 팝업 -->
        <modal-default class="downloadCoupon" v-if="downloadCoupon" @close="downloadCoupon = false" :title="'다운로드 가능 쿠폰'">
            <div class="btn_top_wrap modal_fixed_top">
                <button type="button" class="btn btn-attention coupon_down">
                    <img src="~/assets/img/common/ico_down.svg" />
                    <span>다운로드 가능쿠폰 모두받기 (15개)</span>
                </button>
            </div>
            <ul class="coupon_list_wrap scrollDesign">
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
            <etc-pagination class="modal_fixed_bottom" />
        </modal-default>

        <!-- 도서산간 지역보기 팝업-->
        <modal-default v-if="detailDelivery" @close="detailDelivery = false" :title="'제주/도서산간지역'">
            <div class="form_line select_wrap modal_fixed_top">
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
            <table>
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
            <etc-pagination class="modal_fixed_bottom" />
        </modal-default>
        <!-- 견적요청 -->
        <modal-default-sandi class="quoteContactModal" :modalInfo="quoteContactModal.modalInfo"
            :modalShow="quoteContactModal.modalShow" @modalClose="quoteContactModal.modalShow = false">
            <div class="modal-content">
                <form action="">
                    <div class="basic-info">
                        <p>브랜드</p>
                        <p>상품의 제목줄이 노출되는 영역입니다</p>
                        <p>상품설명줄 상품설명줄상품설명줄상품설명줄상품설명줄상품설명줄상품설명줄상품설명줄상품설명줄상품설명줄상품설명줄상품설명줄</p>
                    </div>
                    <div class="form_line">
                        <input type="text" name="apply_tit" id="apply_tit" placeholder="제목을 입력하세요" class="form_control"
                            value="">
                    </div>
                    <div class="form_line">
                        <textarea name="" id="" cols="30" rows="10" placeholder="내용을 입력하세요" class="form_control"></textarea>
                    </div>

                    <div class="btn-wrap">
                        <button type="button" class="btn btn-default" @click="quoteContactModal.modalShow = false">
                            취소
                        </button>
                        <button type="button" class="btn btn-attention">저장</button>
                    </div>
                </form>
            </div>
        </modal-default-sandi>
        <!-- <modal-default-sandi class="quoteContactModal" :modalInfo="quoteContactModal.modalInfo"
            :modalShow="quoteContactModal.modalShow" @modalClose="quoteContactModal.modalShow = false">
            <div class="modal-content">
                <div class="basic-info">
                    <p>브랜드</p>
                    <p>상품의 제목줄이 노출되는 영역입니다</p>
                    <p>상품설명줄</p>
                </div>
                <form class="form_wrapper">
                    <div class="form_line">
                        <div>
                            <input placeholder="제목" class="form_control" type="text">
                            <div class="invalid_feedback">
                                제목을 입력하세요
                            </div>
                        </div>
                    </div>
                    <div class="form_line">
                        <div>
                            <textarea placeholder="내용을 입력하세요" class="form_control" type="textarea" />
                            <div class="invalid_feedback">
                                내용을 입력하세요
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="flex-center btn-wrap">
                <button type="button" class="btn width-half btn-default" @click="quoteContactModal.modalShow = false">
                    취소
                </button>
                <button type="button" class="btn width-half btn-attention">저장</button>
            </div>
        </modal-default-sandi> -->

    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
SwiperCore.use([Navigation, Pagination, Autoplay]);

import lnbCate from "~/components/tab/category-navigation.vue";
import allScoreStar from "~/components/item/all-score-star.vue";

// ##########  상품후기 사진 리뷰 팝업 모달
import photoThumb from "~/components/popup/photo-thumbnail.vue";

export default {
    thumbsSrc: "",
    components: {
        lnbCate,
        allScoreStar,
        //상품후기 사진 확대모달
        photoThumb
    },
    data: () => {
        return {
            activeIndex: 0,
            showSelectContainer: false,
            isMobile: false,
            tipOpen: false,
            downloadCoupon: false,
            detailDelivery: false,
            thumbnailSwiper: null,
            thumbnailListSwiper: null,
            relationSwiper: null,
            tabIndex: 0,
            soldOut: true,
            optionSet: false,
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
                        // option: "상품옵션",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
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
                        thumbnail: require("~/assets/img/sample/sample_item1.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        // brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        // option: "상품옵션",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        showContact: true,
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
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        // brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        option: "상품옵션",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
                        showContact: true,
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
                        thumbnail: require("~/assets/img/sample/sample_item2.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        option: "상품옵션",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
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
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        // option: "상품옵션",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
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
                        thumbnail: require("~/assets/img/sample/sample_item2.png"),
                        soldOut: true,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        // option: "상품옵션",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
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
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        // option: "상품옵션",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
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
                        // option: "상품옵션",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
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
            itemsSet: [
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
                        // option: "상품옵션",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
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
                        soldOut: false,
                        // rank: "01",
                        // time: "1"
                    },
                    info:
                    {
                        brand: "브랜드명",
                        title: "상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",
                        // option: "상품옵션",
                        sale: "138,000",
                        price: "108,000",
                        discounted: "27",
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
            itemThumbnail: [
                require("~/assets/img/sample/sample_item1.png"),
                require("~/assets/img/sample/sample_item2.png"),
                require("~/assets/img/sample/sample_item3.png"),
                require("~/assets/img/sample/sample_item1.png"),
                require("~/assets/img/sample/sample_item2.png"),
                require("~/assets/img/sample/sample_item3.png"),
            ],
            choice:
            {
                item:
                {
                    name: "상품명",
                    quantity: "2"
                },
            },
            quoteContactModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "견적문의",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            deliveryModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "견적문의",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },
            couponModal: {
                modalShow: false,
                modalInfo: {
                    modalTitle: "견적문의",
                    modalFull: false,
                    mobileModalFull: true,
                    headerShow: true,
                    headerWhite: true,
                    dimmed: true,
                },
            },

        }
    },
    mounted() {

        this.setSwiper();
        
        /*
        this.thumbnailSwiper = new Swiper(".thumbnail-swiper", {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            visibilityFullFit: true,
            slidesPerView: 1,
            spaceBetween: 0,
            observer: true,
            observeParents: true,
            simulateTouch:true,
            parallax:true,
            on: {
                slideChange: (swiper) => {
                    console.log('1', swiper)
                    this.activeIndex = this.thumbnailSwiper.activeIndex;
                    this.thumbnailListSwiper.slideTo(this.activeIndex, 500, false )
                } 
            }
        });

        this.thumbnailListSwiper = new Swiper(".thumbnail-list-swiper", {
            speed: 500,
            slidesPerView: 5,
            spaceBetween: 5,
            observer: true,
            observeParents: true,
            simulateTouch:true,
            parallax:true,
            centeredSlides: true,
            navigation: {
                nextEl: ".thumbnail-list-swiper .swiper-button-next",
                prevEl: ".thumbnail-list-swiper .swiper-button-prev",
            },
            slideToClickedSlide: true,
            thumbs: {
                swiper: this.thumbnailSwiper
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 6,
                },
                1023: {
                    slidesPerView: 6,
                    spaceBetween: 6,
                },
            },
            on: {
                slideChange: (swiper, index) => {
                    console.log('2', swiper)
                    console.log('2', index)
                    this.activeIndex = this.thumbnailSwiper.activeIndex;
                    console.log('1. activeIndex ::::', this.activeIndex)
                    this.thumbnailListSwiper.slideTo(this.activeIndex);
                } 

            } 
        });
         */
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        setSwiper() {
            this.thumbnailSwiper = new Swiper(".thumbnail-swiper", {
                slidesPerView: 1,
                spaceBetween: 0,
                on: {
                    slideChange: () => {
                        this.activeIndex = this.thumbnailSwiper.activeIndex;
                        //console.log('1. activeIndex ::::', this.activeIndex)
                        this.thumbnailListSwiper.slideTo(this.activeIndex);
                    },
                }
            });

            this.thumbnailListSwiper = new Swiper(".thumbnail-list-swiper", {
                slidesPerView: 5,
                spaceBetween: 16,
                centeredSlides: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                clickable: true,
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 6,
                    },
                    1023: {
                        slidesPerView: 5,
                        spaceBetween: 16,
                    },
                },
                on: {
                    slideChange: () => {
                        this.activeIndex = this.thumbnailListSwiper.activeIndex;
                        //console.log('2. activeIndex ::::', this.activeIndex)
                        this.thumbnailSwiper.slideTo(this.activeIndex);
                    },
                },
            });
            
            
            this.relationSwiper = new Swiper(".relationSwiper", {
                slidesPerView: 2,
                spaceBetween: 15,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
            });
        },


        activateSlide(index) {
            console.log(`this.activeIndex ${this.activeIndex}`);
            this.activeIndex = index;
            this.thumbnailListSwiper.slideTo(index);
            this.thumbnailSwiper.slideTo(index);

            const slideElements = this.$refs.ThumbsList
            slideElements.forEach((element, idx) => {
                if (idx === index) {
                    element.classList.add("swiper-slide-active");
                } else {
                    element.classList.remove("swiper-slide-active");
                }
            });
        },

        viewMore() {
            let viewMore = document.querySelector(".view_more").parentNode;
            viewMore.classList.toggle('open');

            return false;
        },
        toggleCate(e) {
            let btnSiblings = e.parentNode;
            btnSiblings.classList.toggle('on');
        },

        // 드롭다운
        openOption(e) {
            e.target.nextElementSibling.classList.add("on")
        },
        closeOption(e) {
            const optionMenus = this.$refs.optionMenu;
            optionMenus.forEach(optionMenu => {
                optionMenu.classList.remove("on");
            });
            e.target.parentNode.parentNode.classList.remove("on");
        },
        toggleOption(e) {
            const optionMenu = e.target.nextElementSibling
            optionMenu.classList.toggle("on")
        },

        toggleOptionSet() {
            this.optionSet = !this.optionSet;
        },


        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
        },

        addToWishList(e) {
            const toast = document.querySelector(".toast_wrap");
            e.target.classList.toggle("active");
            toast.classList.add("on");
            setTimeout(() => {
                toast.classList.remove("on");
            }, 1500);
        },
        topScroll() {
            if (window.pageYOffset > 0) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        },
        // 모달
        openModal(e) {
            const body = document.querySelector("body");
            const modalId = e.target.getAttribute('id');
            const target = document.getElementById(modalId + "View");
            body.classList.add("scrollNone");
            target.classList.add("show");
            console.log('열림');
            return false

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

    }
}
</script>

<style>
@import url('~/assets/css/pages/items-details.css');
@import url('~/assets/css/pages/review.css');
</style>