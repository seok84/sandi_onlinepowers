(window.webpackJsonp=window.webpackJsonp||[]).push([[11,44,45,159],{291:function(t,e,n){t.exports=n.p+"img/sample_item3.6b8e0b9.png"},292:function(t,e,n){t.exports=n.p+"img/sample_img.0ef4986.jpg"},295:function(t,e,n){},296:function(t,e,n){},297:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this._self._c;return t("div",{staticClass:"sold-out-wrap"},[t("span",[t("img",{attrs:{src:n(301),alt:"품절"}})])])}],r={props:{item:{type:Object,default:{thumbnail:n(300),soldOut:Boolean,rank:!1,time:!1}}},data:function(){return{}},mounted:function(){},methods:{}},o=(n(302),n(11)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"item-thumbnail",class:{"sold-out":t.item.soldOut}},[t.item.rank?e("div",{staticClass:"rank"},[t._v(t._s(t.item.rank))]):t._e(),t._v(" "),t.item.time?e("div",{staticClass:"time"},[t._v("D-DAY")]):t._e(),t._v(" "),t._m(0),t._v(" "),e("img",{staticClass:"thumbnail",attrs:{src:t.item.thumbnail,alt:"썸네일"}})])}),l,!1,null,"ea8e9570",null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);var l={props:{item:{type:Object,default:{showContact:!1,brand:"브랜드명",title:"상품명",option:"",optionSet:"",gift:"",sale:"138,000",price:"108,000",discounted:"27",quantity:"",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}}},data:function(){return{attention:!1,basket:!1}},computed:{},methods:{addToWishList:function(){this.attention=!this.attention},addToBasketList:function(){this.basket=!this.basket}}},r=(n(303),n(11)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"item-info"},[e("div",{staticClass:"item-title-wrap",class:t.item.brand?"":"on"},[e("div",{staticClass:"item-brand-area",class:t.item.brand?"":"none-brand"},[t.item.brand?e("nuxt-link",{attrs:{to:"/"}},[e("p",{staticClass:"brand"},[t._v(t._s(t.item.brand))])]):t._e(),t._v(" "),e("div",{staticClass:"user-action"},[e("span",{staticClass:"user-ico user-attention",class:{active:this.attention},on:{click:function(e){return t.addToWishList()}}}),t._v(" "),e("span",{staticClass:"user-ico user-basket",class:{active:this.basket},on:{click:function(e){return t.addToBasketList()}}})])],1),t._v(" "),e("nuxt-link",{staticClass:"title-pr",attrs:{to:"/"}},[e("p",{staticClass:"title"},[t._v(t._s(t.item.title))])]),t._v(" "),t.item.option?e("div",{staticClass:"item-option"},[t._v("\n            "+t._s(t.item.option)+"\n        ")]):t._e(),t._v(" "),t.item.optionSet?e("div",{staticClass:"item-set-option"},[t._v("\n            "+t._s(t.item.optionSet)+"\n        ")]):t._e(),t._v(" "),t.item.gift?e("div",{staticClass:"item-gift"},[t._v("\n            "+t._s(t.item.gift)+"\n        ")]):t._e(),t._v(" "),t.item.rpq?e("button",{staticClass:"btn-rpq",attrs:{type:"button"}},[t._v("견적문의")]):t._e()],1),t._v(" "),t.item.showContact?e("div",{staticClass:"btn-estimate"},[t._v("견적문의")]):t._e(),t._v(" "),e("div",{staticClass:"item-price"},[t.item.sale?e("p",{staticClass:"discounted"},[e("span",[t._v(t._s(t.item.sale))]),t._v("원")]):t._e(),t._v(" "),t.item.price?e("p",{staticClass:"price"},[e("span",[t._v(t._s(t.item.price))]),t._v("원")]):t._e(),t._v(" "),t.item.quantity?e("p",{staticClass:"quantity"},[t._v("/ 수량 "),e("span",[t._v(t._s(t.item.quantity))]),t._v("개")]):t._e(),t._v(" "),t.item.discounted?e("p",{staticClass:"sale"},[e("span",[t._v(t._s(t.item.discounted))]),t._v("%")]):t._e()]),t._v(" "),t.item.tag?e("ul",{staticClass:"item-tag"},[t.item.tag.tag1?e("li",{staticClass:"tag tag1"},[e("span",[t._v("태그1")])]):t._e(),t._v(" "),t.item.tag.tag2?e("li",{staticClass:"tag tag2"},[e("span",[t._v("태그2")])]):t._e(),t._v(" "),t.item.tag.tag3?e("li",{staticClass:"tag tag3"},[e("span",[t._v("태그3")])]):t._e(),t._v(" "),t.item.tag.tag4?e("li",{staticClass:"tag tag4"},[e("span",[t._v("태그4")])]):t._e(),t._v(" "),t.item.tag.tag5?e("li",{staticClass:"tag tag5"},[e("span",[t._v("태그5")])]):t._e()]):t._e()])}),[],!1,null,"77d37089",null);e.default=component.exports},300:function(t,e,n){t.exports=n.p+"img/thumb.52d1f94.png"},301:function(t,e,n){t.exports=n.p+"img/sold-out.956360d.png"},302:function(t,e,n){"use strict";n(295)},303:function(t,e,n){"use strict";n(296)},326:function(t,e,n){t.exports=n.p+"img/sample_item2.1d29591.png"},330:function(t,e,n){t.exports=n.p+"img/sample_item1.3c5f3c5.png"},392:function(t,e,n){t.exports=n.p+"img/sample_exhibition.41448a1.png"},393:function(t,e,n){t.exports=n.p+"img/sample_banner.9466042.png"},401:function(t,e,n){t.exports=n.p+"img/img_main_slide_01.e6ea236.png"},447:function(t,e,n){},588:function(t,e,n){"use strict";n(447)},706:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("a",{attrs:{href:"javascript:void(0);"}},[e("img",{attrs:{src:n(401),alt:"banner"}})])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("a",{attrs:{href:"javascript:void(0);"}},[e("img",{attrs:{src:n(401),alt:"banner"}})])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("a",{attrs:{href:"javascript:void(0);"}},[e("img",{attrs:{src:n(401),alt:"banner"}})])])])},function(){var t=this._self._c;return t("div",{staticClass:"swiper_inner pc"},[t("div",{staticClass:"swiper-button-prev"}),this._v(" "),t("div",{staticClass:"swiper-button-next"})])},function(){var t=this._self._c;return t("div",{staticClass:"swiper_inner pc"},[t("div",{staticClass:"swiper-button-prev"}),this._v(" "),t("div",{staticClass:"swiper-button-next"})])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"item-tag"},[e("li",{staticClass:"tag tag1"},[e("span",[t._v("태그1")])]),t._v(" "),e("li",{staticClass:"tag tag2"},[e("span",[t._v("태그2")])]),t._v(" "),e("li",{staticClass:"tag tag3"},[e("span",[t._v("태그3")])]),t._v(" "),e("li",{staticClass:"tag tag4"},[e("span",[t._v("태그4")])]),t._v(" "),e("li",{staticClass:"tag tag5"},[e("span",[t._v("태그5")])])])},function(){var t=this._self._c;return t("div",{staticClass:"swiper_inner pc"},[t("div",{staticClass:"swiper-button-prev none-bg"}),this._v(" "),t("div",{staticClass:"swiper-button-next none-bg"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"timedeal-timer"},[e("div",{staticClass:"timedeal-sail"},[t._v("\n                            TIME"),e("br"),t._v("SALE\n                        ")]),t._v(" "),e("div",{staticClass:"timedeal-time"},[e("p",[t._v("09:38~11:59")]),t._v(" "),e("p",[t._v("월·화·수·목·금·토·일")])])])},function(){var t=this._self._c;return t("div",{staticClass:"swiper_inner pc"},[t("div",{staticClass:"swiper-button-prev"}),this._v(" "),t("div",{staticClass:"swiper-button-next"})])},function(){var t=this._self._c;return t("div",{staticClass:"swiper_inner pc"},[t("div",{staticClass:"swiper-button-prev"}),this._v(" "),t("div",{staticClass:"swiper-button-next"})])},function(){var t=this._self._c;return t("div",{staticClass:"swiper_inner pc"},[t("div",{staticClass:"swiper-button-prev none-bg"}),this._v(" "),t("div",{staticClass:"swiper-button-next none-bg"})])},function(){var t=this._self._c;return t("div",{staticClass:"swiper_inner pc"},[t("div",{staticClass:"swiper-button-prev none-bg"}),this._v(" "),t("div",{staticClass:"swiper-button-next none-bg"})])}],r=n(290),o=(n(134),n(286)),c=n(287),d=n(288),v=n(289);r.a.use([o.a,c.a,d.a,v.a]);var m={name:"Main",components:{},setup:function(){return{modules:[o.a,c.a,d.a,v.a]}},data:function(){return{mainSwiper:null,bulletSwiper:null,bestSwiper:null,timedealSwiper:null,MDSwiper:null,exhibitionSwiper:null,adBannerSwiper1:null,adBannerSwiper2:null,bullet:["전체","메뉴1","메뉴2","메뉴3","메뉴4","메뉴5","메뉴6","메뉴7","메뉴8"],activeIndex:0,itemsBest:[{thumbnail:{thumbnail:n(292),soldOut:!1,rank:"01"},info:{title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(292),soldOut:!1,rank:"01"},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",showContact:!0,tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(292),soldOut:!1,rank:"01"},info:{title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",showContact:!0,tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(292),soldOut:!1,rank:"01"},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(292),soldOut:!1,rank:"01"},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(330),soldOut:!0,rank:"01"},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(326),soldOut:!1,rank:"01"},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}}],itemsNew:[{thumbnail:{thumbnail:n(330),soldOut:!1},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{}}},{thumbnail:{thumbnail:n(326),soldOut:!0},info:{title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{}}},{thumbnail:{thumbnail:n(292),soldOut:!1},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{}}}],itemsMD:[{thumbnail:{thumbnail:n(292),soldOut:!1},info:{brand:"브랜드명",title:"상품명이 출력되는",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(291),soldOut:!1},info:{title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(326),soldOut:!0},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(291),soldOut:!1},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(291),soldOut:!0},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(291),soldOut:!1},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(291),soldOut:!0},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}}],itemsTimedeal:[{thumbnail:{thumbnail:n(291),soldOut:!1,time:"1"},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(291),soldOut:!1,time:"1"},info:{title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(291),soldOut:!1,time:"1"},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}},{thumbnail:{thumbnail:n(291),soldOut:!0,time:"1"},info:{brand:"브랜드명",title:"상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다 상품명이 출력되는 공간입니다",sale:"138,000",price:"108,000",discounted:"27",tag:{tag1:!0,tag2:!0,tag3:!0,tag4:!0,tag5:!0}}}],itemsEvent:[n(292),n(292),n(292),n(292)],itemsExhibition:[n(392),n(392),n(392),n(392)],itemsBanner:[n(393),n(393),n(393),n(393)],eventMore:!1}},beforeDestroy:function(){},mounted:function(){this.mainSwiper=new r.a(".mainSwiper",{slidesPerView:"auto",spaceBetween:30,loop:!0,loopAdditionalSlides:1,autoplay:{delay:3e3},autoplayDisableOnInteraction:!1,pagination:{el:".mainSwiper .swiper-pagination",type:"fraction"},navigation:{nextEl:".mainSwiper .swiper-button-next",prevEl:".mainSwiper .swiper-button-prev"},autoHeight:!0,breakpoints:{768:{centeredSlides:!0}}}),this.setSwiper(),window.addEventListener("scroll",this.handleScroll)},methods:{setSwiper:function(){this.bulletSwiper=new r.a(".bulletSwiper",{slidesPerView:4,spaceBetween:15,pagination:{el:".bulletSwiper .swiper-pagination",clickable:!0},navigation:{prevEl:".bulletSwiper .swiper-button-prev",nextEl:".bulletSwiper .swiper-button-next"},breakpoints:{768:{slidesPerView:6,spaceBetween:30}}}),this.bestSwiper=new r.a(".bestSwiper",{slidesPerView:1.2,spaceBetween:15,pagination:{el:".bestSwiper .swiper-pagination",clickable:!0},navigation:{prevEl:".bestSwiper .swiper-button-prev",nextEl:".bestSwiper .swiper-button-next"},scrollbar:{el:".bestSwiper .swiper-scrollbar",hide:!0},breakpoints:{768:{slidesPerView:2.5,spaceBetween:30}}}),this.timedealSwiper=new r.a(".timedealSwiper",{slidesPerView:1.2,spaceBetween:15,pagination:{el:".timedealSwiper .swiper-pagination",clickable:!0},navigation:{prevEl:".timedealSwiper .swiper-button-prev",nextEl:".timedealSwiper .swiper-button-next"},breakpoints:{768:{slidesPerView:3,spaceBetween:30}}}),this.MDSwiper=new r.a(".MDSwiper",{slidesPerView:1,spaceBetween:15,loop:!0,autoplayDisableOnInteraction:!1,pagination:{el:".MDSwiper .swiper-pagination",type:"fraction",clickable:!0},navigation:{prevEl:".MDSwiper .swiper-button-prev",nextEl:".MDSwiper .swiper-button-next"},breakpoints:{768:{slidesPerView:4,slidesPerGroup:4,spaceBetween:30,autoplay:{delay:4e3}}}}),this.exhibitionSwiper=new r.a(".exhibitionSwiper",{slidesPerView:1.2,spaceBetween:15,pagination:{el:".exhibitionSwiper .swiper-pagination",clickable:!0},navigation:{prevEl:".exhibitionSwiper .swiper-button-prev",nextEl:".exhibitionSwiper .swiper-button-next"},breakpoints:{768:{slidesPerView:1,spaceBetween:30,autoplay:{delay:4e3}}}}),this.adBannerSwiper1=new r.a(".adBannerSwiper1",{slidesPerView:1,loop:!0,autoplay:{delay:3e3},pagination:{el:".adBannerSwiper1 .swiper-pagination",clickable:!0},navigation:{prevEl:".adBannerSwiper1 .swiper-button-prev",nextEl:".adBannerSwiper1 .swiper-button-next"}}),this.adBannerSwiper2=new r.a(".adBannerSwiper2",{slidesPerView:1,loop:!0,autoplay:{delay:3e3},pagination:{el:".adBannerSwiper1 .swiper-pagination",clickable:!0},navigation:{prevEl:".adBannerSwiper2 .swiper-button-prev",nextEl:".adBannerSwiper2 .swiper-button-next"}})},autoplaySlide:function(t,e,n){this.flag=!this.flag,this.flag?(t.target.classList.add("on"),n.autoplay.stop()):(t.target.classList.remove("on"),n.autoplay.start())},autoplaySlideMain:function(t){this.autoplaySlide(t,true,this.mainSwiper)},autoplaySlideMD:function(t){this.autoplaySlide(t,true,this.MDSwiper)},setActive:function(t){this.activeIndex=t}}},_=(n(588),n(11)),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"MainView"}},[e("section",{staticClass:"main-mainBanner"},[e("div",{staticClass:"swiper mainSwiper"},[t._m(0),t._v(" "),e("span",{staticClass:"swiper-pause",on:{click:function(e){return e.preventDefault(),t.autoplaySlideMain(e)}}}),t._v(" "),e("div",{staticClass:"swiper-button swiper-button-prev"}),t._v(" "),e("div",{staticClass:"swiper-button swiper-button-next"}),t._v(" "),e("div",{staticClass:"swiper-pagination"})])]),t._v(" "),e("section",{staticClass:"main-best inner"},[e("h2",{staticClass:"title-main"},[e("span",[t._v("베스트")]),t._v(" "),e("nuxt-link",{staticClass:"more",attrs:{to:"/"}},[t._v("더보기")])],1),t._v(" "),e("div",{staticClass:"swiper bulletSwiper bullet-container visible_swiper swiper_hidden_side"},[e("ul",{staticClass:"swiper-wrapper bullet-wrap"},t._l(t.bullet,(function(n,l){return e("li",{key:l,staticClass:"swiper-slide bullet",class:{on:t.activeIndex===l},on:{click:function(e){return t.setActive(l)}}},[t._v("\n                    "+t._s(n)+"\n                ")])})),0),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"pc"},[e("div",{staticClass:"item-list-container pc"},t._l(t.itemsBest,(function(n,l){return e("div",{key:l,staticClass:"item-list vert"},[e("item-part-thumbnail",{attrs:{item:n.thumbnail}}),t._v(" "),e("item-part-info",{attrs:{item:n.info}})],1)})),0)]),t._v(" "),e("div",{staticClass:"mobile"},[e("div",{staticClass:"swiper bestSwiper visible_swiper swiper_hidden_side"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.itemsBest,(function(n,l){return e("div",{key:l,staticClass:"item-list vert swiper-slide"},[e("item-part-thumbnail",{attrs:{item:n.thumbnail}}),t._v(" "),e("item-part-info",{attrs:{item:n.info}})],1)})),0),t._v(" "),t._m(2)])])]),t._v(" "),e("section",{staticClass:"main-new inner"},[e("h2",{staticClass:"title-main"},[e("span",[t._v("신상품")]),t._v(" "),e("nuxt-link",{staticClass:"more",attrs:{to:"/"}},[t._v("더보기")])],1),t._v(" "),e("div",{staticClass:"item-list-container list2"},t._l(t.itemsNew,(function(n,l){return e("div",{key:l,staticClass:"item-list horizon"},[e("item-part-thumbnail",{attrs:{item:n.thumbnail}}),t._v(" "),e("item-part-info",{attrs:{item:n.info}}),t._v(" "),t._m(3,!0)],1)})),0)]),t._v(" "),e("section",{staticClass:"main-ad-banner main-ad-banner1"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"swiper adBannerSwiper1"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.itemsBanner,(function(t,n){return e("div",{key:n,staticClass:"swiper-slide"},[e("div",{staticClass:"banner-img"},[e("img",{attrs:{src:t,alt:"배너 이미지"}})])])})),0),t._v(" "),t._m(4)])])]),t._v(" "),e("section",{staticClass:"main-timedeal inner"},[e("h2",{staticClass:"title-main"},[e("span",[t._v("타임딜")]),t._v(" "),e("nuxt-link",{staticClass:"more",attrs:{to:"/"}},[t._v("더보기")])],1),t._v(" "),e("div",{staticClass:"swiper timedealSwiper visible_swiper swiper_hidden_side"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.itemsTimedeal,(function(n,l){return e("div",{key:l,staticClass:"item-list vert swiper-slide"},[t._m(5,!0),t._v(" "),e("item-part-thumbnail",{attrs:{item:n.thumbnail}}),t._v(" "),e("item-part-info",{attrs:{item:n.info}})],1)})),0),t._v(" "),t._m(6)])]),t._v(" "),e("section",{staticClass:"main-MD inner"},[e("h2",{staticClass:"title-main"},[e("span",[t._v("샌디추천")]),t._v(" "),e("nuxt-link",{staticClass:"more",attrs:{to:"/"}},[t._v("더보기")])],1),t._v(" "),e("div",{staticClass:"swiper MDSwiper visible_swiper swiper_hidden_side"},[e("span",{staticClass:"swiper-pause",on:{click:function(e){return e.preventDefault(),t.autoplaySlideMD(e)}}}),t._v(" "),e("div",{staticClass:"swiper-pagination"}),t._v(" "),e("div",{staticClass:"swiper-wrapper"},t._l(t.itemsMD,(function(n,l){return e("div",{key:l,staticClass:"swiper-slide"},[e("div",{staticClass:"item-list vert"},[e("item-part-thumbnail",{attrs:{item:n.thumbnail}}),t._v(" "),e("item-part-info",{attrs:{item:n.info}})],1),t._v(" "),e("div",{staticClass:"item-list vert mobile"},[e("item-part-thumbnail",{attrs:{item:n.thumbnail}}),t._v(" "),e("item-part-info",{attrs:{item:n.info}})],1),t._v(" "),e("div",{staticClass:"item-list vert mobile"},[e("item-part-thumbnail",{attrs:{item:n.thumbnail}}),t._v(" "),e("item-part-info",{attrs:{item:n.info}})],1),t._v(" "),e("div",{staticClass:"item-list vert mobile"},[e("item-part-thumbnail",{attrs:{item:n.thumbnail}}),t._v(" "),e("item-part-info",{attrs:{item:n.info}})],1)])})),0),t._v(" "),t._m(7)])]),t._v(" "),e("section",{staticClass:"main-ad-banner main-ad-banner2"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"swiper adBannerSwiper2"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.itemsBanner,(function(t,n){return e("div",{key:n,staticClass:"swiper-slide"},[e("div",{staticClass:"banner-img"},[e("img",{attrs:{src:t,alt:"배너 이미지"}})])])})),0),t._v(" "),t._m(8)])])]),t._v(" "),e("section",{staticClass:"main-event inner"},[e("h2",{staticClass:"title-main"},[e("span",[t._v("기획전")]),t._v(" "),e("nuxt-link",{staticClass:"more",attrs:{to:"/"}},[t._v("더보기")])],1),t._v(" "),e("div",{staticClass:"event-wrap"},t._l(t.itemsExhibition,(function(t,n){return e("div",{key:"itemsExhibition"+n,staticClass:"event-item"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:t,alt:"eventImg"}})])],1)})),0)]),t._v(" "),e("section",{staticClass:"main-exhibition"},[e("div",{staticClass:"inner"},[e("h2",{staticClass:"title-main"},[e("span",[t._v("이벤트")]),t._v(" "),e("nuxt-link",{staticClass:"more",attrs:{to:"/"}},[t._v("더보기")])],1),t._v(" "),e("div",{staticClass:"swiper exhibitionSwiper visible_swiper swiper_hidden_side"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.itemsEvent,(function(t,n){return e("div",{key:n,staticClass:"swiper-slide exhibition-list"},[e("div",{staticClass:"exhibition-img"},[e("img",{attrs:{src:t,alt:"기획전 이미지"}})])])})),0),t._v(" "),t._m(9)])])])])}),l,!1,null,"153f4224",null);e.default=component.exports;installComponents(component,{ItemPartThumbnail:n(297).default,ItemPartInfo:n(298).default})}}]);