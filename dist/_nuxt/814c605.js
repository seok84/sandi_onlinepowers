(window.webpackJsonp=window.webpackJsonp||[]).push([[107,72,73,74,105],{293:function(t,e,o){"use strict";o.r(e);o(21),o(32);var l={name:"popupDesign",components:{},mounted:function(){},methods:{closeModalDim:function(){document.querySelector(".dimmed_bg").remove()},closeModal:function(){var body=document.querySelector("body"),t=document.querySelectorAll(".modal_basic");body.classList.remove("scrollNone"),t.forEach((function(t){t.classList.remove("show")})),this.closeModalDim()}}},n=o(11),component=Object(n.a)(l,(function(){var t=this;return(0,t._self._c)("button",{staticClass:"modal_close",attrs:{type:"button"},on:{click:t.closeModal}},[t._v("닫기")])}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,o){"use strict";o.r(e);var l={name:"popupBase",props:{popupHeadTitle:{type:[String],required:!0}}},n=o(11),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal_header"},[e("h3",{staticClass:"modal_tit"},[t._v(t._s(t.popupHeadTitle))])])}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,o){},423:function(t,e,o){"use strict";o(373)},566:function(t,e,o){"use strict";o.r(e);var l=o(294),n=o(293),c={name:"popupBase",components:{popupHead:l.default,popupButton:n.default}},d=(o(423),o(11)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal modal_basic modal_m",attrs:{id:"reviewBlockView"}},[e("div",{staticClass:"modal_wrapper"},[e("popupHead",{attrs:{popupHeadTitle:"신고/차단"}}),t._v(" "),t._m(0),t._v(" "),e("popupButton",{staticClass:"modal_close_w"})],1)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal_body"},[e("div",{staticClass:"modal_content"},[e("div",{staticClass:"btn-wrap onlyBtn"},[e("button",{staticClass:"btn btn-middle btn-default",attrs:{id:""}},[t._v("후기 신고")]),t._v(" "),e("button",{staticClass:"btn btn-middle btn-attention",attrs:{id:""}},[t._v("회원 차단")])])])])}],!1,null,null,null);e.default=component.exports}}]);