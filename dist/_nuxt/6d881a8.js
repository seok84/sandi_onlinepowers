(window.webpackJsonp=window.webpackJsonp||[]).push([[140,30,51,120,123],{304:function(t,e,l){},309:function(t,e,l){"use strict";l(304)},311:function(t,e,l){"use strict";l.r(e);var n={name:"TitleD1",props:{titleMain:{type:[String],required:!0}}},r=(l(309),l(11)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"title_wrap"},[e("h2",{staticClass:"default title_main"},[t._v(t._s(t.titleMain))]),t._v(" "),e("a",{staticClass:"btn_sns",attrs:{href:"javascript:void(0);"}},[t._v("공유하기")])])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,l){"use strict";l.r(e);var n={props:["value"],data:function(){return{}},methods:{}},r=l(11),component=Object(r.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"form_line"},[t("input",{staticClass:"form_control",attrs:{type:"number",name:"",id:"",placeholder:"'-'없이 전화번호 숫자만 입력",minlength:"8"},domProps:{value:this.value}})])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,l){"use strict";l.r(e);var n={name:"TitleMore",props:{titleMain:{type:[String],required:!0},to:String}},r=l(11),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("h3",{staticClass:"sub_tit"},[e("a",{staticClass:"linked_arr",attrs:{href:t.to}},[t._v(t._s(t.titleMain))])])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,l){"use strict";l.r(e);l(107);var n={name:"LNB",data:function(){return{items:[{label:"공지사항",url:"/customer/notice"},{label:"FAQ",url:"/customer/faq"},{label:"Q&A",url:"/customer/apply"},{label:"견적문의",url:"/customer/apply-store"}]}},mounted:function(){if(window.innerWidth<768){var menu=this.$refs.menu,t=menu.querySelector(".active"),e=menu.offsetWidth,l=t.offsetWidth;menu.scrollLeft=t.offsetLeft-(e-l)/2}}},r=l(11),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lnb_wrapper on"},[e("p",{staticClass:"lnb_tit"},[t._v("고객센터")]),t._v(" "),e("ul",{ref:"menu",staticClass:"info_sub_tit scrollNone"},t._l(t.items,(function(l,n){return e("li",{key:n,class:"".concat("customer"+(n+1)," ").concat(t.$route.path===l.url?"active":"")},[e("nuxt-link",{attrs:{to:l.url}},[t._v("\n                "+t._s(l.label)+"\n            ")])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},467:function(t,e,l){},619:function(t,e,l){"use strict";l(467)},736:function(t,e,l){"use strict";l.r(e);var n=l(311),r=l(324),o=l(321),c=l(319),_={name:"apply-store",components:{TitleD1:n.default,Lnb:r.default,TitleMore:o.default,inputPhone:c.default},data:function(){return{titleMain:"고객센터"}},mounted:function(){}},v=(l(619),l(11)),component=Object(v.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"customerPages",attrs:{id:"apply-store"}},[e("TitleD1",{attrs:{"title-main":t.titleMain}}),t._v(" "),e("div",{staticClass:"inner apply_inner"},[e("div",{staticClass:"lnb_content_container"},[e("Lnb",{staticClass:"customer4"}),t._v(" "),e("div",{staticClass:"mypage-content"},[e("TitleMore",{staticClass:"pc",attrs:{to:"javascript:void(0);",titleMain:"제휴/입점문의"}}),t._v(" "),t._m(0)],1)],1)])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"apply_detail_list"},[e("form",{attrs:{action:""}},[e("h4",{staticClass:"form_cont_tit"},[t._v("문의내용")]),t._v(" "),e("div",{staticClass:"form_line select_wrap apply_detail_list_top"},[e("select",{staticClass:"form_control input_select input_select02",attrs:{name:"",id:"select01"}},[e("option",{attrs:{value:""}},[t._v("문의유형선택")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("더미02")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("더미03")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("더미04")])])]),t._v(" "),e("div",{staticClass:"form_line"},[e("input",{staticClass:"form_control",attrs:{type:"text",name:"apply_tit",id:"apply_tit",placeholder:"제목을 입력하세요",value:""}})]),t._v(" "),e("div",{staticClass:"form_line"},[e("input",{staticClass:"form_control",attrs:{type:"text",name:"apply_tit",id:"apply_representative",placeholder:"대표자명을 입력하세요",value:""}})]),t._v(" "),e("div",{staticClass:"form_line"},[e("textarea",{staticClass:"form_control",attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"내용을 입력하세요"}})]),t._v(" "),e("div",{staticClass:"form-group file_area"},[e("input",{attrs:{type:"file",name:"chosen_file",id:"chosen_file"}}),t._v(" "),e("label",{staticClass:"btn btn-default btn-small chosen_file_btn",attrs:{for:"chosen_file"}},[t._v("파일선택")]),t._v(" "),e("span",{staticClass:"chosen_file_name"},[t._v("선택된 파일 없음")]),t._v(" "),e("p",{staticClass:"info_dot"},[t._v("제품리스트를 파일로 첨부하시면 빠른 견적 진행 가능합니다.")]),t._v(" "),e("p",{staticClass:"info_dot"},[t._v("10MB 이내의 jpg, gif, png, pdf 파일만 업로드 가능합니다.")])]),t._v(" "),e("h4",{staticClass:"form_cont_tit"},[t._v("고객정보")]),t._v(" "),e("div",{staticClass:"form_line"},[e("input",{staticClass:"form_control",attrs:{type:"text",name:"input_id01",id:"input_id01",placeholder:"기업명을 입력하세요"}})]),t._v(" "),e("div",{staticClass:"form_line"},[e("input",{staticClass:"form_control",attrs:{type:"text",name:"input_id01",id:"input_id01",placeholder:"대표자명을 입력하세요"}})]),t._v(" "),e("div",{staticClass:"form_line"},[e("input",{staticClass:"form_control",attrs:{type:"number",name:"",id:"",placeholder:"연락가능한 휴대폰번호를 '-'없이 숫자만 입력하세요",minlength:"8"}})]),t._v(" "),e("div",{staticClass:"form_line email_wrap"},[e("input",{staticClass:"form_control",attrs:{type:"text",name:"",id:"",placeholder:"수신가능한 이메일을 입력하세요",value:""}})]),t._v(" "),e("div",{staticClass:"check_wrap"},[e("div",[e("label",[e("input",{staticClass:"input_check",attrs:{type:"checkbox",name:"check07",id:"check07"}}),e("span",[t._v("\n                                        개인정보 수집 · 이용목적 및"),e("span",{staticClass:"divider"}),t._v(" 항목에 동의(필수)")])])]),t._v(" "),e("button",[t._v("약관보기")])]),t._v(" "),e("div",{staticClass:"btn-wrap"},[e("button",{staticClass:"btn btn-middle btn-default btn_cancel",attrs:{type:"button"}},[t._v("취소")]),t._v(" "),e("button",{staticClass:"btn btn-middle btn-attention btn_save",attrs:{type:"button"}},[t._v("저장")])])])])}],!1,null,null,null);e.default=component.exports}}]);