(window.webpackJsonp=window.webpackJsonp||[]).push([[74,72,73,105],{293:function(e,o,t){"use strict";t.r(o);t(21),t(32);var l={name:"popupDesign",components:{},mounted:function(){},methods:{closeModalDim:function(){document.querySelector(".dimmed_bg").remove()},closeModal:function(){var body=document.querySelector("body"),e=document.querySelectorAll(".modal_basic");body.classList.remove("scrollNone"),e.forEach((function(e){e.classList.remove("show")})),this.closeModalDim()}}},n=t(11),component=Object(n.a)(l,(function(){var e=this;return(0,e._self._c)("button",{staticClass:"modal_close",attrs:{type:"button"},on:{click:e.closeModal}},[e._v("닫기")])}),[],!1,null,null,null);o.default=component.exports},294:function(e,o,t){"use strict";t.r(o);var l={name:"popupBase",props:{popupHeadTitle:{type:[String],required:!0}}},n=t(11),component=Object(n.a)(l,(function(){var e=this,o=e._self._c;return o("div",{staticClass:"modal_header"},[o("h3",{staticClass:"modal_tit"},[e._v(e._s(e.popupHeadTitle))])])}),[],!1,null,null,null);o.default=component.exports}}]);