(window.webpackJsonp=window.webpackJsonp||[]).push([[8,58],{317:function(t,v,_){t.exports=_.p+"img/thumbnail_img.b3a2311.jpg"},323:function(t,v,_){t.exports=_.p+"img/thumbnail_img_L.f84ad19.png"},388:function(t,v,_){},438:function(t,v){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iaWNfaW1nX21vcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMzYgMzYiPg0KICA8cmVjdCBpZD0i7IKs6rCB7ZiVXzMwMTE0IiBkYXRhLW5hbWU9IuyCrOqwge2YlSAzMDExNCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwIi8+DQogIDxnIGlkPSLqt7jro7lfMjkyNTYiIGRhdGEtbmFtZT0i6re466O5IDI5MjU2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjg5IC02MDcpIj4NCiAgICA8cGF0aCBpZD0i67m86riwXzEyIiBkYXRhLW5hbWU9Iuu5vOq4sCAxMiIgZD0iTS0yMjUxNiwxM2gtMTRhMywzLDAsMCwxLTIuODI2LTJILTIyNTE3YTIsMiwwLDAsMCwyLTJWLTYuODNBMy4wMDksMy4wMDksMCwwLDEtMjI1MTMtNFYxMEEzLDMsMCwwLDEtMjI1MTYsMTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjgzMiA2MjQpIiBmaWxsPSIjZmZmIi8+DQogICAgPHJlY3QgaWQ9IuyCrOqwge2YlV8zMDExNSIgZGF0YS1uYW1lPSLsgqzqsIHtmJUgMzAxMTUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5NSA2MTMpIiBmaWxsPSIjZmZmIi8+DQogIDwvZz4NCjwvc3ZnPg0K"},439:function(t,v,_){"use strict";_(388)},581:function(t,v,_){"use strict";_.r(v);var c=[function(){var t=this._self._c;return t("span",{staticClass:"mobile show_photo"},[t("img",{attrs:{src:_(438),alt:"사진리뷰 전체보기"}})])},function(){var t=this,v=t._self._c;return v("ul",{staticClass:"swiper-wrapper"},[v("li",{staticClass:"swiper-slide"},[v("img",{attrs:{src:_(317),alt:""}})]),t._v(" "),v("li",{staticClass:"swiper-slide"},[v("img",{attrs:{src:_(317),alt:""}})]),t._v(" "),v("li",{staticClass:"swiper-slide"},[v("img",{attrs:{src:_(317),alt:""}})]),t._v(" "),v("li",{staticClass:"swiper-slide"},[v("img",{attrs:{src:_(317),alt:""}})])])}],e=_(290),l=(_(134),_(286)),r=_(287),n=_(288),d=_(289);e.a.use([l.a,r.a,n.a,d.a]);var C={data:function(){return{isActive:!1,isSwiper:!1,thumbnailSwiper:null}},setup:function(){return{modules:[l.a,r.a,n.a,d.a]}},methods:{modalClose:function(){this.isActive=this.isActive,this.isSwiper=this.isSwiper}},mounted:function(){this.thumbnailSwiper=new e.a(".active .thumbnailSwiper",{slidesPerView:"auto",spaceBetween:30,loop:!0,loopAdditionalSlides:1,autoplay:{delay:3e3},autoplayDisableOnInteraction:!1,navigation:{nextEl:".thumbnailSwiper .swiper-button-next",prevEl:".thumbnailSwiper .swiper-button-prev"},autoHeight:!0,breakpoints:{768:{centeredSlides:!0}}})}},o=(_(439),_(11)),component=Object(o.a)(C,(function(){var t=this,v=t._self._c;return v("div",{staticClass:"img_area",class:{active:t.isActive},on:{click:function(v){t.isActive=!t.isActive}}},[v("div",{staticClass:"review_thumbnail_wrap thumbnailSwiper",on:{click:t.modalClose}},[t._m(0),t._v(" "),v("span",{staticClass:"close"},[t._v("닫기")]),t._v(" "),t._m(1),t._v(" "),v("div",{staticClass:"swiper-button swiper-button-prev"}),t._v(" "),v("div",{staticClass:"swiper-button swiper-button-next"})])])}),c,!1,null,"e1a54d02",null);v.default=component.exports},708:function(t,v,_){"use strict";_.r(v);var c=[function(){var t=this,v=t._self._c;return v("ul",{staticClass:"cart_item_wrap"},[v("li",[v("div",{staticClass:"check_wrap"},[v("input",{staticClass:"input_check",attrs:{type:"checkbox",name:"",id:""}})]),t._v(" "),v("div",{staticClass:"item_wrapper vert"},[v("div",{staticClass:"item-list horizon"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n                  제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄\n                  제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄 제목줄\n                  제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄\n                  제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄\n                  제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄제목줄\n                  제목줄제목줄 제목줄제목줄 제목줄제목줄 제목줄\n                ")]),t._v(" "),v("p",{staticClass:"product_date"},[t._v("로스팅일자 2022. 11. 25")]),t._v(" "),v("p",{staticClass:"product_option"},[t._v("\n                  [옵션1] 그린 옵션명 옵션명 / [옵션2] 그린 옵션명 옵션명 /\n                  [옵션3] 그린 옵션명 옵션명( +1,000원 )\n                ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"divider"},[t._v("/")]),t._v(" "),v("span",{staticClass:"item_count"},[t._v("수량"),v("span",[t._v("999")]),t._v("개")])]),t._v(" "),v("div",{staticClass:"price_area02"},[v("div",{staticClass:"price"},[v("p",{staticClass:"product_price"},[t._v("상품가"),v("span",[t._v("299,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"divider"},[t._v("|")]),t._v(" "),v("p",{staticClass:"sale"},[t._v("할인 "),v("span",[t._v("6,000")]),t._v("원")])]),t._v(" "),v("div",{staticClass:"saled_price"},[v("p",[t._v("할인적용가 "),v("span",[t._v("43,900")]),t._v("원")])])])])]),t._v(" "),v("div",{staticClass:"ect_area"},[v("div",{staticClass:"shipping_info_wrap"},[v("div",{staticClass:"shipping_info"},[v("span",[t._v("배송정보")]),t._v(" "),v("a",{staticClass:"info_toast",attrs:{href:"javascript:void(0);"}}),t._v(" "),v("span",{staticClass:"company"},[t._v("본사")])]),t._v(" "),v("span",{staticClass:"delivery_condition"},[t._v("무료배송")])]),t._v(" "),v("div",{staticClass:"etc_control"},[v("div",{staticClass:"amt_box"},[v("div",{staticClass:"btn_amt_box form_control"},[v("button",{staticClass:"btn_minus",attrs:{type:"button"}}),t._v(" "),v("input",{staticClass:"number",attrs:{type:"number",title:"수량",value:"1"}}),t._v(" "),v("button",{staticClass:"btn_plus",attrs:{type:"button"}})])]),t._v(" "),v("button",{staticClass:"btn btn_done btn-small btn_lm show_product",attrs:{type:"button"}},[t._v("\n                구성상품보기\n              ")]),t._v(" "),v("button",{staticClass:"btn btn_accent btn-small btn_lm buy_now",attrs:{type:"button"}},[t._v("\n                바로구매\n              ")]),t._v(" "),v("button",{staticClass:"btn btn_accent btn-small btn_lm btn_edit",attrs:{type:"button"}},[t._v("\n                변경\n              ")])])])]),t._v(" "),v("div",{staticClass:"item_btn_wrapper"},[v("div",{staticClass:"btn_left_wrap"},[v("button",{staticClass:"btn btn-small btn_sub set_open"},[t._v("\n              세트상품 펼치기\n            ")])]),t._v(" "),v("div",{staticClass:"btn_right_wrap"},[v("a",{staticClass:"btn btn-small btn_sm btn-attention btn_confirm"},[v("span",[t._v("구매확정")])]),t._v(" "),v("a",{staticClass:"btn btn-small btn-default btn_sm"},[t._v("배송조회")]),t._v(" "),v("a",{staticClass:"btn btn-small btn-default btn_sm"},[t._v("교환신청")]),t._v(" "),v("a",{staticClass:"btn btn-small btn-default btn_sm"},[t._v("주문취소")])])])])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"option-set"},[v("div",{staticClass:"item_wrapper vert"},[v("div",{staticClass:"item-list horizon"},[v("div",{staticClass:"item_thumbnail"},[v("a",{attrs:{href:"javascript:void(0);"}},[v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"title"},[t._v("\n                앙버터 부쉬맨 120g 1박스(10개) 앙버터 부쉬맨 120g\n                1박스(10개)\n              ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("span",{staticClass:"price"},[v("span",[t._v("108,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"quantity"},[v("span",[t._v("10")]),t._v("개")])])])])])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"rv_prd_sec"},[v("div",{staticClass:"rv_prd"},[v("div",{staticClass:"user_wrapper"},[v("span",{staticClass:"user_id_info"},[t._v("solibi***")]),t._v(" "),v("span",{staticClass:"review_score good"},[t._v("만족")]),t._v(" "),v("span",{staticClass:"review_score normal"},[t._v("보통")]),t._v(" "),v("span",{staticClass:"review_score notgood"},[t._v("아쉬움")]),t._v(" "),v("span",{staticClass:"date"},[t._v("2022-12-13")])])])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"list_top"},[v("div",{staticClass:"mp_rv_top"},[v("div",{staticClass:"rating_star"},[v("span",{staticClass:"on"}),t._v(" "),v("span",{staticClass:"on"}),t._v(" "),v("span",{staticClass:"on"}),t._v(" "),v("span",{staticClass:"on"}),t._v(" "),v("span")])])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"txt_area"},[v("p",{staticClass:"product_option"},[t._v("\n                    선택한 옵션 : 옵션명 - 선택한 옵션 01 / 옵션명 - 선택한\n                    옵션 02 / 옵션명 - 선택한 옵션 03 / 옵션명 - 선택한 옵션\n                    04 / 옵션명 - 선택한 옵션 05 / 옵션명 - 선택한 옵션 06 /\n                    옵션이 두 줄이 됩니다 / 옵션이 두 줄이 됩니다 / 옵션이\n                    두 줄이 됩니다\n                  ")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n                    사용자가 등록한 상품후기가 3줄까지 노출됩니다. 이미지\n                    다수 등록시 4개까지 노출됩니다.\n                  ")])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"thumbs_up"},[v("span",[t._v("도움됐어요")]),t._v(" "),v("div",{staticClass:"thumbs_btn"},[v("span",{staticClass:"thumbs_img"}),t._v(" "),v("span",{staticClass:"thumbs_count"},[t._v("99+")])]),t._v(" "),v("a",{staticClass:"fr_linked",attrs:{href:"javascript:void(0);"}},[t._v("신고/차단")])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"btn_right_wrap"},[v("button",{staticClass:"btn btn-default btn-small btn_sm"},[t._v("수정")]),t._v(" "),v("button",{staticClass:"btn btn-default btn-small btn_sm"},[t._v("삭제")])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"hide_wrap"},[v("div",{staticClass:"administrator_answer"},[v("div",{staticClass:"qna_manager"},[v("span",{staticClass:"qa"},[t._v("A.")]),t._v("샌디\n              ")]),t._v(" "),v("div",{staticClass:"text_area"},[t._v("\n                안녕하세요 고객님. 샌디 고객센터 입니다. "),v("br"),t._v("\n                저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다."),v("br"),t._v("\n                소중한 경험을 리뷰로 남겨주셔서 감사합니다.\n              ")]),t._v(" "),v("p",{staticClass:"product_date"},[t._v("\n                답변일  :  "),v("span",[t._v("2022-06-14")])])])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"order-list-wrap"},[v("div",{staticClass:"item_wrapper vert"},[v("div",{staticClass:"item-list horizon"},[v("div",{staticClass:"item_thumbnail"},[v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛\n                (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜\n                호두맛 (30팩)\n              ")]),t._v(" "),v("p",{staticClass:"product_date"},[t._v("로스팅일자 2022. 11. 25")])])])])]),t._v(" "),v("div",{staticClass:"usage_review_desc"},[v("div",{staticClass:"review_top_wrap"},[v("div",{staticClass:"rating_star"},[v("span",{staticClass:"on"}),t._v(" "),v("span",{staticClass:"on"}),t._v(" "),v("span",{staticClass:"on"}),t._v(" "),v("span",{staticClass:"on"}),t._v(" "),v("span",{}),t._v(" "),v("p",{staticClass:"counter"},[t._v("5.0")])]),t._v(" "),v("span",{staticClass:"product_date"},[t._v("2022-12-13")])]),t._v(" "),v("div",{staticClass:"review_desc_wrap"},[v("p",{staticClass:"product_option"},[t._v("\n            선택한 옵션 : 옵션명 - 선택한 옵션 01 / 옵션명 - 선택한 옵션 02\n            / 옵션명 - 선택한 옵션 03 / 옵션명 - 선택한 옵션 04 / 옵션명 -\n            선택한 옵션 05 / 옵션명 - 선택한 옵션 06 / 옵션이 두 줄이 됩니다\n            / 옵션이 두 줄이 됩니다 / 옵션이 두 줄이 됩니다\n          ")]),t._v(" "),v("span",{staticClass:"review_desc"},[t._v("\n            잘받았습니다. 감사합니다"),v("br"),t._v("\n            앙버터부쉬맨빵은유통과정때문인지 버터가 깨져서 손님들께서 직접\n            받았을경우 아쉬울것같았습니다.\n          ")])])]),t._v(" "),v("div",{staticClass:"btn_right_wrap"},[v("button",{staticClass:"btn btn-default btn-small btn_sm"},[t._v("삭제")])])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"timedeal-timer"},[v("div",{staticClass:"timedeal-sail"},[t._v("\n        TIME"),v("br"),t._v("SALE\n      ")]),t._v(" "),v("div",{staticClass:"timedeal-time"},[v("p",[t._v("09:38~11:59")]),t._v(" "),v("p",[t._v("월·화·수·목·금·토·일")])])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"item-list"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico active",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico active",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"sold_out_wrapper"},[v("div",{staticClass:"sold_out_img"}),t._v(" "),v("p",{staticClass:"sold_out_txt"},[t._v("\n            상품이 "),v("span",{staticClass:"receiving_date"},[t._v("1/12")]),t._v("에 입고될\n            예정입니다.\n          ")])]),t._v(" "),v("div",{staticClass:"ranking"},[v("span",{staticClass:"numbering"},[t._v("1")])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"ico_basket"}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);"}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n            당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n            당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n          ")])]),t._v(" "),v("p",{staticClass:"production_date"},[t._v("로스팅일자 2023.01.30")]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])]),t._v(" "),v("div",{staticClass:"badge_item_wrap"},[v("div",{staticClass:"badge_item badge_ice"},[t._v("냉동")]),t._v(" "),v("div",{staticClass:"badge_item badge_quick"},[t._v("무료배송")])]),t._v(" "),v("div",{staticClass:"badge_tag_wrap"},[v("span",{staticClass:"badge_tag badge_new"},[t._v("신상품")]),t._v(" "),v("span",{staticClass:"badge_tag badge_recommend"},[t._v("MD추천")]),t._v(" "),v("span",{staticClass:"badge_tag badge_freedelivery"},[t._v("무료배송")]),t._v(" "),v("span",{staticClass:"badge_tag badge_best"},[t._v("베스트")]),t._v(" "),v("span",{staticClass:"badge_tag badge_onlycnt"},[t._v("ONLY SANDI")]),t._v(" "),v("span",{staticClass:"badge_tag badge_deal"},[t._v("행사상품")]),t._v(" "),v("span",{staticClass:"badge_tag badge_limited"},[t._v("한정수량")])])])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"item-list horizon"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"sold_out_wrapper"},[v("div",{staticClass:"sold_out_img"}),t._v(" "),v("p",{staticClass:"sold_out_txt"},[t._v("\n            상품이 "),v("span",{staticClass:"receiving_date"},[t._v("1/12")]),t._v("에 입고될\n            예정입니다.\n          ")])]),t._v(" "),v("div",{staticClass:"ranking"},[v("span",{staticClass:"numbering"},[t._v("1")])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"ico_basket"}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);"}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n            당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n            당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n          ")])]),t._v(" "),v("p",{staticClass:"production_date"},[t._v("로스팅일자 2023.01.30")]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])]),t._v(" "),v("div",{staticClass:"badge_item_wrap"},[v("div",{staticClass:"badge_item badge_ice"},[t._v("냉동")]),t._v(" "),v("div",{staticClass:"badge_item badge_quick"},[t._v("무료배송")])]),t._v(" "),v("div",{staticClass:"badge_tag_wrap"},[v("span",{staticClass:"badge_tag badge_new"},[t._v("신상품")]),t._v(" "),v("span",{staticClass:"badge_tag badge_recommend"},[t._v("MD추천")]),t._v(" "),v("span",{staticClass:"badge_tag badge_freedelivery"},[t._v("무료배송")]),t._v(" "),v("span",{staticClass:"badge_tag badge_best"},[t._v("베스트")]),t._v(" "),v("span",{staticClass:"badge_tag badge_onlycnt"},[t._v("ONLY SANDI")]),t._v(" "),v("span",{staticClass:"badge_tag badge_deal"},[t._v("행사상품")]),t._v(" "),v("span",{staticClass:"badge_tag badge_limited"},[t._v("한정수량")])])])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"guide_txt"},[t._v("\n      item_wrapper + horizon "),v("br"),t._v("\n      item-list + vert\n    ")])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"item_wrapper horizon",staticStyle:{"overflow-x":"scroll"}},[v("div",{staticClass:"item-list vert"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"ranking"},[v("span",{staticClass:"numbering"},[t._v("1")])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n            ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])]),t._v(" "),v("div",{staticClass:"badge_item_wrap"},[v("div",{staticClass:"badge_item badge_ice"},[t._v("냉동")]),t._v(" "),v("div",{staticClass:"badge_item badge_quick"},[t._v("무료배송")])])])]),t._v(" "),v("div",{staticClass:"item-list vert"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"ranking"},[v("span",{staticClass:"numbering"},[t._v("1")])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n            ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])]),t._v(" "),v("div",{staticClass:"badge_item_wrap"},[v("div",{staticClass:"badge_item badge_ice"},[t._v("냉동")]),t._v(" "),v("div",{staticClass:"badge_item badge_quick"},[t._v("무료배송")])])])]),t._v(" "),v("div",{staticClass:"item-list vert"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"ranking"},[v("span",{staticClass:"numbering"},[t._v("1")])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n            ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])]),t._v(" "),v("div",{staticClass:"badge_item_wrap"},[v("div",{staticClass:"badge_item badge_ice"},[t._v("냉동")]),t._v(" "),v("div",{staticClass:"badge_item badge_quick"},[t._v("무료배송")])])])]),t._v(" "),v("div",{staticClass:"item-list vert"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"ranking"},[v("span",{staticClass:"numbering"},[t._v("1")])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n            ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])]),t._v(" "),v("div",{staticClass:"badge_item_wrap"},[v("div",{staticClass:"badge_item badge_ice"},[t._v("냉동")]),t._v(" "),v("div",{staticClass:"badge_item badge_quick"},[t._v("무료배송")])])])]),t._v(" "),v("div",{staticClass:"item-list vert"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"ranking"},[v("span",{staticClass:"numbering"},[t._v("1")])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n            ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])]),t._v(" "),v("div",{staticClass:"badge_item_wrap"},[v("div",{staticClass:"badge_item badge_ice"},[t._v("냉동")]),t._v(" "),v("div",{staticClass:"badge_item badge_quick"},[t._v("무료배송")])])])]),t._v(" "),v("div",{staticClass:"item-list vert"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"ranking"},[v("span",{staticClass:"numbering"},[t._v("1")])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n              당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩)\n            ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])]),t._v(" "),v("div",{staticClass:"badge_item_wrap"},[v("div",{staticClass:"badge_item badge_ice"},[t._v("냉동")]),t._v(" "),v("div",{staticClass:"badge_item badge_quick"},[t._v("무료배송")])])])])])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"guide_txt"},[t._v("\n      item_wrapper + horizon +grid01 "),v("br"),t._v("\n      item-list + vert\n    ")])},function(){var t=this,v=t._self._c;return v("div",{staticClass:"item_wrapper horizon grid01"},[v("div",{staticClass:"left_box"},[v("div",{staticClass:"item-list vert"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"sold_out_wrapper"},[v("div",{staticClass:"sold_out"},[v("div",{staticClass:"sold_out_img"}),t._v(" "),v("div",{staticClass:"sold_out_txt"})])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛\n                (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜\n                호두맛 (30팩)\n              ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])])])])]),t._v(" "),v("div",{staticClass:"right_box"},[v("div",{staticClass:"item-list vert"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"sold_out_wrapper"},[v("div",{staticClass:"sold_out"},[v("div",{staticClass:"sold_out_img"}),t._v(" "),v("div",{staticClass:"sold_out_txt"})])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛\n                (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜\n                호두맛 (30팩)\n              ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])])])]),t._v(" "),v("div",{staticClass:"item-list vert"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"sold_out_wrapper"},[v("div",{staticClass:"sold_out"},[v("div",{staticClass:"sold_out_img"}),t._v(" "),v("div",{staticClass:"sold_out_txt"})])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛\n                (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜\n                호두맛 (30팩)\n              ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])])])]),t._v(" "),v("div",{staticClass:"item-list vert"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"sold_out_wrapper"},[v("div",{staticClass:"sold_out"},[v("div",{staticClass:"sold_out_img"}),t._v(" "),v("div",{staticClass:"sold_out_txt"})])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛\n                (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜\n                호두맛 (30팩)\n              ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])])])]),t._v(" "),v("div",{staticClass:"item-list vert"},[v("div",{staticClass:"item_thumbnail"},[v("div",{staticClass:"user-action"},[v("a",{staticClass:"user-attention user-ico",attrs:{href:"javascript:void(0);"}},[t._v("관심상품")]),t._v(" "),v("a",{staticClass:"user-basket user-ico",attrs:{href:"javascript:void(0);"}},[t._v("장바구니")])]),t._v(" "),v("div",{staticClass:"sold_out_wrapper"},[v("div",{staticClass:"sold_out"},[v("div",{staticClass:"sold_out_img"}),t._v(" "),v("div",{staticClass:"sold_out_txt"})])]),t._v(" "),v("a",{attrs:{href:"javascript:void(0);"}},[v("div",{staticClass:"thumbnail_area"},[v("div",{staticClass:"center_center"},[t._v("중간")]),t._v(" "),v("div",{staticClass:"top_left"},[t._v("좌상")]),t._v(" "),v("div",{staticClass:"top_right"},[t._v("우상")]),t._v(" "),v("div",{staticClass:"bottom_left"},[t._v("좌하")]),t._v(" "),v("div",{staticClass:"bottom_right"},[v("img",{attrs:{src:_(323),alt:"",srcset:""}})])]),t._v(" "),v("img",{attrs:{src:_(317)}})])]),t._v(" "),v("div",{staticClass:"item_desc"},[v("a",{staticClass:"brand_area",attrs:{href:"javascript:void(0);",rel:""}},[v("p",{staticClass:"brand"},[t._v("브랜드네임")]),t._v(" "),v("p",{staticClass:"title"},[t._v("\n                당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛\n                (30팩) 당플랜 호두맛 (30팩) 당플랜 호두맛 (30팩) 당플랜\n                호두맛 (30팩)\n              ")])]),t._v(" "),v("div",{staticClass:"price_area"},[v("p",{staticClass:"discounted"},[v("span",[t._v("81,000")]),t._v("원")]),t._v(" "),v("span",{staticClass:"price"},[v("span",{staticClass:"number"},[t._v("49,900")]),v("span",[t._v("원")])]),t._v(" "),v("span",{staticClass:"sale"},[v("span",[t._v("38")]),t._v("%")])])])])])])}],e={components:{},layout:"basic"},l=_(11),component=Object(l.a)(e,(function(){var t=this,v=t._self._c;return v("div",{staticClass:"guide_contents"},[v("div",{staticClass:"content"},[v("p",{staticClass:"guide_txt"},[t._v("장바구니 아이템")]),t._v(" "),t._m(0),t._v(" "),v("p",{staticClass:"guide_txt"},[t._v("상품상세세트 아이템")]),t._v(" "),t._m(1),t._v(" "),v("div",{staticClass:"guide_txt"},[t._v("리뷰 리스트")]),t._v(" "),v("div",{staticClass:"review_list"},[v("ul",[v("li",{staticClass:"list_area"},[t._m(2),t._v(" "),v("div",{staticClass:"list_in"},[v("div",{staticClass:"review_open"},[t._m(3),t._v(" "),v("div",{staticClass:"review_origin"},[t._m(4),t._v(" "),v("list-thumbnail-img"),t._v(" "),t._m(5),t._v(" "),t._m(6)],1)])]),t._v(" "),t._m(7)])])]),t._v(" "),v("div",{staticClass:"guide_txt"},[t._v("이용후기 아이템리스트")]),t._v(" "),t._m(8),t._v(" "),v("div",{staticClass:"guide_txt"},[t._v("타임딜")]),t._v(" "),t._m(9),t._v(" "),v("div",{staticClass:"guide_txt"},[t._v("기본아이템 : item-list 만")]),t._v(" "),t._m(10),t._v(" "),v("div",{staticClass:"guide_txt"},[t._v("기본아이템 : item-list + horizon")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),v("div",{staticClass:"guide_txt"})])])}),c,!1,null,null,null);v.default=component.exports;installComponents(component,{ListThumbnailImg:_(581).default})}}]);