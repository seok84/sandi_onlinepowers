(window.webpackJsonp=window.webpackJsonp||[]).push([[166,15,52,120,123],{304:function(t,n,e){},308:function(t,n,e){"use strict";e.r(n);var l={name:"LNB"},r=e(11),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"pc"},[n("div",{staticClass:"lnb_wrapper"},[n("p",{staticClass:"lnb_sub_tit"},[t._v("쇼핑정보")]),t._v(" "),n("ul",{staticClass:"info_sub_tit"},[n("li",[n("nuxt-link",{attrs:{to:"/mypage/inquiry-order"}},[t._v("주문/배송조회")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/mypage/inquiry-order-cancel"}},[t._v("취소/반품/교환 신청")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/mypage/my-interest"}},[t._v("관심상품")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/mypage/product-latest"}},[t._v("최근 본 상품")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/mypage/my-address-book"}},[t._v("배송주소록 관리")])],1)]),t._v(" "),n("p",{staticClass:"lnb_sub_tit"},[t._v("쇼핑혜택")]),t._v(" "),n("ul",{staticClass:"info_sub_tit"},[n("li",[n("nuxt-link",{attrs:{to:"/mypage/list-point"}},[t._v("포인트")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/mypage/list-coupon"}},[t._v("쿠폰")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/mypage/list-coupon-delivery"}},[t._v("배송비 쿠폰")])],1)]),t._v(" "),n("p",{staticClass:"lnb_sub_tit"},[t._v("활동정보")]),t._v(" "),n("ul",{staticClass:"info_sub_tit"},[n("li",[n("nuxt-link",{attrs:{to:"/mypage/my-info-check"}},[t._v("내 정보 관리")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/mypage/my-password-modify"}},[t._v("비밀번호 변경")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/mypage/sns-linked"}},[t._v("sns 연동설정")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/mypage/"}},[t._v("상품문의")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/mypage/my-usage-review"}},[t._v("이용후기")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/mypage/apply-counseling"}},[t._v("견적문의")])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/customer/inquiry"}},[t._v("Q&A")])],1)])])])}),[],!1,null,null,null);n.default=component.exports},309:function(t,n,e){"use strict";e(304)},311:function(t,n,e){"use strict";e.r(n);var l={name:"TitleD1",props:{titleMain:{type:[String],required:!0}}},r=(e(309),e(11)),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"title_wrap"},[n("h2",{staticClass:"default title_main"},[t._v(t._s(t.titleMain))]),t._v(" "),n("a",{staticClass:"btn_sns",attrs:{href:"javascript:void(0);"}},[t._v("공유하기")])])}),[],!1,null,null,null);n.default=component.exports},312:function(t,n,e){t.exports=e.p+"img/grade_fam.e9741ff.png"},313:function(t,n,e){t.exports=e.p+"img/ico_coupon.8a2931b.png"},314:function(t,n,e){t.exports=e.p+"img/ico_point.9f8d331.png"},315:function(t,n,e){"use strict";e.r(n);e(29);var l=[function(){var t=this,n=t._self._c;return n("span",{staticClass:"linked_arr"},[n("img",{attrs:{src:e(313),alt:"icon"}}),t._v(" "),n("span",[t._v("쿠폰")])])},function(){var t=this,n=t._self._c;return n("span",{staticClass:"linked_arr"},[n("img",{attrs:{src:e(314),alt:"icon"}}),t._v(" "),n("span",[t._v("포인트")])])}],r={name:"MypageInfo",props:{},data:function(){return{userInfo:[{user:{type:"business",grade:"welcome",name:"김철수",email:"kcs123@onlinepowers.com"},coupon:{couponCount:"3"},point:{point:"1,234,999"}}]}}},o=e(11),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"my_info on"},[n("div",{staticClass:"info_box user_link"},[n("a",{staticClass:"my_grade",attrs:{href:"javascript:void(0);"}},[n("span",{staticClass:"linked_arr"},[n("img",{attrs:{src:e(312),alt:"icon"}}),t._v(" "),n("b",[t._v(t._s(t.userInfo[0].user.grade))]),t._v("등급입니다!\n            ")])]),t._v(" "),n("p",{staticClass:"welcome"},[n("b",[t._v(t._s(t.userInfo[0].user.name))]),t._v("님 안녕하세요!")]),t._v(" "),n("p",{staticClass:"user_mail"},[t._v(t._s(t.userInfo[0].user.email))])]),t._v(" "),n("div",{staticClass:"info_box coupon_link"},[n("a",{attrs:{href:"javascript:void(0);"}},[t._m(0),t._v(" "),n("p",[n("span",[t._v(t._s(t.userInfo[0].coupon.couponCount))]),t._v("장")])])]),t._v(" "),n("div",{staticClass:"info_box point_link"},[n("a",{attrs:{href:"javascript:void(0);"}},[t._m(1),t._v(" "),n("p",[n("span",[t._v(t._s(t.userInfo[0].point.point)+"P")])])])])])}),l,!1,null,null,null);n.default=component.exports},321:function(t,n,e){"use strict";e.r(n);var l={name:"TitleMore",props:{titleMain:{type:[String],required:!0},to:String}},r=e(11),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("h3",{staticClass:"sub_tit"},[n("a",{staticClass:"linked_arr",attrs:{href:t.to}},[t._v(t._s(t.titleMain))])])}),[],!1,null,null,null);n.default=component.exports},479:function(t,n,e){},640:function(t,n,e){"use strict";e(479)},752:function(t,n,e){"use strict";e.r(n);e(136);var l=e(311),r=e(308),o=e(321),_={name:"mypageIndex",components:{TitleD1:l.default,MypageLnb:r.default,TitleMore:o.default},data:function(){return{titleMain:"마이페이지",counselDatas:[{number:"20000000",date:"2023-10-01",type:!1,typeText:"견적문의",state:"답변완료",stateComplete:!0,qna:{brand:"브랜드명",title:"제목이 노출되는 영역입니다.\n두 줄인 경우 제목이 노출되는 영역입니다",content:"안녕하세요 사이즈가 헷갈려서 관련 문의드립니다.\n포장용기가 200*130*40의 상자인데"},chat:{sandi:"안녕하세요 고객님. SANDI 고객센터 입니다.\n저희 홈페이지를 찾아주신 고객님께 감사의 말씀을 드립니다.\n문의하실 내용이 있으신가요?",user:"안녕하세요.\n회사 청소 견적문의를 드리고 싶습니다.\n규모는 약 100평 정도이며, 견적을 어떻게 내는지 조건등이 다양할 것 같아서요.\n견적 낼 때 체크할 수 있는 것들이 있을까요?"}}]}},computed:{counselData:function(){return this.counselDatas.split("\n").join("<br>")}}},c=(e(640),e(11)),component=Object(c.a)(_,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"myInfo"},[n("TitleD1",{attrs:{titleMain:t.titleMain}}),t._v(" "),n("div",{staticClass:"inner"},[n("etc-mypage-info"),t._v(" "),n("div",{staticClass:"lnb_content_container"},[n("layout-lnb-mypage",{staticClass:"general"}),t._v(" "),n("div",{staticClass:"mypage-content"},[n("h3",{staticClass:"sub_tit"},[n("nuxt-link",{staticClass:"linked_arr",attrs:{to:"/"}},[t._v("견적문의 상세")])],1),t._v(" "),n("div",{staticClass:"counsel-area"},t._l(t.counselDatas,(function(e,l){return n("div",{key:l,staticClass:"list"},[n("div",{staticClass:"counsel-title"},[n("span",{staticClass:"title",class:{easy:1==e.type}},[t._v(t._s(e.typeText))]),t._v(" "),n("span",{staticClass:"num"},[t._v(t._s(e.number))]),t._v(" "),n("span",{staticClass:"date"},[t._v(t._s(e.date))])]),t._v(" "),n("div",{staticClass:"counsel-state",class:{ready:0==e.stateComplete}},[t._v(t._s(e.state))]),t._v(" "),n("div",{staticClass:"counsel-content"},[n("div",{staticClass:"goods"},[n("span",{staticClass:"brand"},[t._v(t._s(e.qna.brand))]),t._v(" "),n("span",{staticClass:"qna"},[t._v(t._s(e.qna.title))])]),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(e.qna.content))])]),t._v(" "),n("div",{staticClass:"chat-box"},[n("div",{staticClass:"row sandi"},[n("div",{staticClass:"bubble"},[n("h3",[t._v("SANDI")]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(e.chat.sandi))])])]),t._v(" "),n("div",{staticClass:"row user"},[n("div",{staticClass:"bubble"},[n("p",{staticClass:"text"},[t._v(t._s(e.chat.sandi))])])])]),t._v(" "),t._m(0,!0)])})),0),t._v(" "),t._m(1)])],1)],1)],1)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"message-area"},[n("textarea",{staticClass:"message-input",attrs:{placeholder:"메세지를 입력하세요",required:"required"}}),t._v(" "),n("button",{staticClass:"btn-submit",attrs:{type:"button"}},[t._v("전송")])])},function(){var t=this._self._c;return t("div",{staticClass:"btn-area"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[this._v("목록으로")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{EtcMypageInfo:e(315).default,LayoutLnbMypage:e(308).default})}}]);