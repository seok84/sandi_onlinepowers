(window.webpackJsonp=window.webpackJsonp||[]).push([[203,26],{334:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line form_file invalid margin_none business_registration invalid"},[e("p",{staticClass:"form_title"},[t._v("사업자등록증")]),t._v(" "),e("div",{staticClass:"input_option"},[e("input",{staticClass:"form_control on",attrs:{type:"text",id:"fileName",value:"사업자등록증 확인",readonly:""}}),t._v(" "),e("label",{staticClass:"btn_input_add",attrs:{for:"fileUpload"}},[t._v("첨부")]),t._v(" "),e("input",{attrs:{type:"file",name:"file_input",id:"fileUpload"}})]),t._v(" "),e("div",{staticClass:"preview"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:n(335),alt:""}})]),t._v(" "),e("div",{staticClass:"pdf"},[e("img",{attrs:{src:n(336),alt:""}})])]),t._v(" "),e("div",{staticClass:"normal_feedback"},[t._v("10MB 이내의 jpg, gif, png, pdf 파일만 업로드 가능")]),t._v(" "),e("div",{staticClass:"invalid_feedback"},[t._v("파일을 업로드해주세요.")])])}],_={name:"InputFile",props:{},data:function(){return{}},mounted:function(){var t=document.querySelector("#fileUpload"),e=document.querySelector("#fileName");t.addEventListener("change",(function(){var n=t.value;e.value=n,e.classList.add("on")}))},methods:{}},r=n(11),component=Object(r.a)(_,(function(){this._self._c;return this._m(0)}),l,!1,null,null,null);e.default=component.exports},335:function(t,e,n){t.exports=n.p+"img/ic_file_img.5ea582d.svg"},336:function(t,e,n){t.exports=n.p+"img/ic_file_pdf.e8829dd.svg"},515:function(t,e,n){},677:function(t,e,n){"use strict";n(515)},786:function(t,e,n){"use strict";n.r(e);var l={name:"joinBusinessView",data:function(){return{}},mounted:function(){},methods:{}},_=(n(677),n(11)),component=Object(_.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"userPages userPagesJoin",attrs:{id:"joinBusinessView"}},[e("div",{staticClass:"inner"},[e("h2",{staticClass:"title-h2"},[t._v("회원가입")]),t._v(" "),e("div",{staticClass:"tab_container"},[e("form",{staticClass:"form_wrapper",attrs:{action:""}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("form-input-file"),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("회원가입")])],1)])])])}),[function(){var t=this,e=t._self._c;return e("span",{staticClass:"title-area"},[e("h3",[t._v("사업자 정보")]),t._v(" "),e("span",{staticClass:"col-right"},[t._v("필수입력사항")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line disabled bt01"},[e("label",{staticClass:"form_title accent"},[t._v("상호")]),t._v(" "),e("input",{staticClass:"form_control",attrs:{type:"text",placeholder:"상호명"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line disabled bt01"},[e("label",{staticClass:"form_title accent"},[t._v("대표자명")]),t._v(" "),e("input",{staticClass:"form_control",attrs:{type:"text",placeholder:"대표자명"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line invalid margin_none bt04"},[e("label",{staticClass:"form_title accent"},[t._v("사업자등록번호")]),t._v(" "),e("div",{staticClass:"input_option"},[e("input",{staticClass:"form_control",attrs:{type:"text",placeholder:"사업자등록번호(-제외 후 입력)"}}),t._v(" "),e("button",{staticClass:"btn_input_add active",attrs:{type:"button"}},[t._v("확인")])]),t._v(" "),e("div",{staticClass:"invalid_feedback"},[t._v("\n                        유효하지 않은 사업자등록번호입니다.\n                    ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"address-input-area"},[e("div",{staticClass:"form_line bt01"},[e("label",{staticClass:"form-title",attrs:{for:"input_id01"}},[t._v("주소")]),t._v(" "),e("div",{staticClass:"flex"},[e("input",{staticClass:"form-control address-input",attrs:{type:"text",name:"addressId1",placeholder:"우편번호",readonly:"readonly"}}),t._v(" "),e("button",{staticClass:"search-address",attrs:{type:"button"}},[t._v("주소검색")])]),t._v(" "),e("div",{staticClass:"invalid_feedback"},[t._v("\n                            우편번호를 입력해주세요.\n                        ")])]),t._v(" "),e("div",{staticClass:"form-line"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:"addressId2",placeholder:"기본주소",disabled:""}})]),t._v(" "),e("div",{staticClass:"form-line"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:"addressId3",placeholder:"상세주소"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line business-category-area"},[e("label",{staticClass:"form_title accent"},[t._v("업태/업종")]),t._v(" "),e("div",{staticClass:"flex-space-between"},[e("div",{staticClass:"form_line"},[e("input",{staticClass:"form_control required",attrs:{type:"text",placeholder:"업태",name:"businessType"}}),t._v(" "),e("div",{staticClass:"invalid_feedback"},[t._v("\n                                업태를 입력해주세요.\n                            ")])]),t._v(" "),e("div",{staticClass:"form_line"},[e("input",{staticClass:"form_control required",attrs:{type:"text",placeholder:"업종"}}),t._v(" "),e("div",{staticClass:"invalid_feedback"},[t._v("\n                                업종을 입력해주세요.\n                            ")])])])])},function(){var t=this._self._c;return t("span",{staticClass:"title-area"},[t("h3",[this._v("담당자정보")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line invalid margin_none bt04"},[e("label",{staticClass:"form_title accent"},[t._v("아이디")]),t._v(" "),e("div",{staticClass:"input_option"},[e("input",{staticClass:"form_control",attrs:{type:"text",name:"",id:"",placeholder:"아이디(6~12자 이내 영문, 숫자)",minlength:"6",value:""}}),t._v(" "),e("button",{staticClass:"btn_input_add active",attrs:{type:"button"}},[t._v("중복검사")])]),t._v(" "),e("div",{staticClass:"invalid_feedback"},[t._v("\n                        아이디는 영문 대,소문자, 숫자를 이용하여 6~12자로 입력해주세요.\n                    ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line invalid bt04"},[e("label",{staticClass:"form_title accent"},[t._v("비밀번호")]),t._v(" "),e("input",{staticClass:"form_control",attrs:{type:"password",name:"",id:"",placeholder:"비밀번호(8~16자 이내 영문, 숫자, 특수문자)",minlength:"6",value:""}}),t._v(" "),e("div",{staticClass:"invalid_feedback"},[t._v("\n                        비밀번호(8~16자 이내 영문, 숫자, 특수문자)\n                    ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line bt04"},[e("label",{staticClass:"form_title accent"},[t._v("비밀번호 재입력")]),t._v(" "),e("input",{staticClass:"form_control",attrs:{type:"password",name:"",id:"",placeholder:"비밀번호 재입력",minlength:"6",value:""}}),t._v(" "),e("div",{staticClass:"invalid_feedback"},[t._v("\n                        비밀번호(8~16자 이내 영문, 숫자, 특수문자)\n                    ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line disabled bt01"},[e("label",{staticClass:"form_title accent"},[t._v("이름")]),t._v(" "),e("input",{staticClass:"form_control",attrs:{type:"text",name:"input_id01",id:"input_id01",placeholder:"홍길동",minlength:"6"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line disabled bt01"},[e("label",{staticClass:"form_title accent"},[t._v("휴대폰번호")]),t._v(" "),e("input",{staticClass:"form_control",attrs:{type:"number",placeholder:"01012341234"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line email_wrap bt04"},[e("span",{staticClass:"form_title accent"},[t._v("이메일")]),t._v(" "),e("input",{staticClass:"form_control",attrs:{type:"text",name:"",id:"",placeholder:"example@company.com",value:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"radio_wrap select_gen select-area"},[e("label",{staticClass:"form_title"},[t._v("성별")]),t._v(" "),e("input",{staticClass:"input_radio",attrs:{type:"radio",name:"gender",id:"radio02",value:"",checked:""}}),t._v(" "),e("label",{attrs:{for:"radio02"}},[t._v("미선택")]),t._v(" "),e("input",{attrs:{type:"radio",name:"sample02",value:"F",id:"radio03"}}),t._v(" "),e("label",{attrs:{for:"radio03"}},[t._v("여성")]),t._v(" "),e("input",{attrs:{type:"radio",name:"sample02",value:"M",id:"radio04"}}),t._v(" "),e("label",{attrs:{for:"radio04"}},[t._v("남성")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"radio_wrap"},[e("input",{staticClass:"input_radio readonly",attrs:{type:"radio",name:"birth",id:"birth_unselect",checked:""}}),t._v(" "),e("label",{attrs:{for:"birth_unselect"}},[t._v("미선택")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"form_line select_wrap disabled bt04"},[e("select",{staticClass:"form_control input_select bt01",attrs:{name:"",id:"select02"}},[e("option",{attrs:{value:""}},[t._v("1999")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("1998")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("1997")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("1996")])]),t._v(" "),e("select",{staticClass:"form_control input_select bt01",attrs:{name:"",id:"select03"}},[e("option",{attrs:{value:""}},[t._v("01")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("02")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("03")])]),t._v(" "),e("select",{staticClass:"form_control input_select",attrs:{name:"",id:"select04"}},[e("option",{attrs:{value:""}},[t._v("01")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("02")]),t._v(" "),e("option",{attrs:{value:""}},[t._v("03")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"agree-area"},[e("input",{staticClass:"tab_toggle",attrs:{id:"termsAgreeInfo",type:"checkbox"}}),t._v(" "),e("label",{staticClass:"tab_title",attrs:{for:"termsAgreeInfo"}},[e("h3",[t._v("수신동의")])]),t._v(" "),e("div",{staticClass:"tab_contents"},[e("h4",[t._v("E-mail 수신동의")]),t._v(" "),e("div",{staticClass:"box"},[e("p",[t._v("\n                                수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 SMS / E-mail로 받아볼 수 있습니다."),e("br"),t._v("\n                                (단, 회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.)\n                            ")]),t._v(" "),e("div",{staticClass:"radio-wrap"},[e("label",[e("input",{attrs:{type:"radio"}}),t._v("수신")]),t._v(" "),e("label",[e("input",{attrs:{type:"radio"}}),t._v("수신안함")])])]),t._v(" "),e("h4",[t._v("SMS 수신동의")]),t._v(" "),e("div",{staticClass:"box margin_none"},[e("p",[t._v("\n                                수신동의시 쇼핑몰에서 제공하는 이벤트 및 다양한 정보를 SMS / E-mail로 받아볼 수 있습니다."),e("br"),t._v("\n                                (단, 회원가입, 거래정보-결제/배송/교환/환불 등과 같은 운영정보는 수신동의 여부와 관계없이 발송됩니다.)\n                            ")]),t._v(" "),e("div",{staticClass:"radio-wrap"},[e("label",[e("input",{attrs:{type:"radio"}}),t._v("수신")]),t._v(" "),e("label",[e("input",{attrs:{type:"radio"}}),t._v("수신안함")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tab_contents"},[e("div",{staticClass:"check_container invalid"},[e("div",{staticClass:"check_wrap margin_none check_line"},[e("div",[e("label",[e("input",{staticClass:"input_check",attrs:{id:"termsAgreeInfo",type:"checkbox",name:""}}),t._v(" "),e("span",[t._v("모든 약관 동의")])])])]),t._v(" "),e("div",{staticClass:"check_wrap margin_none"},[e("div",[e("label",[e("input",{staticClass:"input_check",attrs:{type:"checkbox",name:"",id:"",checked:""}}),t._v(" "),e("span",[t._v("이용약관 동의(필수)")])])]),t._v(" "),e("button",[t._v("약관보기")])]),t._v(" "),e("div",{staticClass:"check_wrap margin_none"},[e("div",[e("label",[e("input",{staticClass:"input_check",attrs:{id:"termsAgreeInfo",type:"checkbox",name:"",checked:""}}),t._v(" "),e("span",[t._v("개인정보의 수집 항목과 처리 목적(필수)")])])]),t._v(" "),e("button",[t._v("약관보기")])]),t._v(" "),e("div",{staticClass:"check_wrap margin_none"},[e("div",[e("label",[e("input",{staticClass:"input_check",attrs:{id:"termsAgreeInfo",type:"checkbox",name:"",checked:""}}),t._v(" "),e("span",[t._v("개인정보의 수집 항목과 처리 목적(선택)")])])]),t._v(" "),e("button",[t._v("약관보기")])]),t._v(" "),e("div",{staticClass:"check_wrap margin_none"},[e("div",[e("label",[e("input",{staticClass:"input_check",attrs:{id:"termsAgreeInfo",type:"checkbox",name:""}}),t._v(" "),e("span",[t._v("마케팅 이용약관 동의(선택) ")])])]),t._v(" "),e("button",[t._v("약관보기")])]),t._v(" "),e("div",{staticClass:"check_wrap margin_none"},[e("div",[e("label",[e("input",{staticClass:"input_check",attrs:{id:"termsAgreeInfo",type:"checkbox",name:""}}),t._v(" "),e("span",[t._v("광고성 정보 수신 동의(선택)")])])]),t._v(" "),e("button",[t._v("약관보기")])]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"check_wrap"},[e("div",[e("label",[e("input",{staticClass:"input_check",attrs:{type:"checkbox",name:""}}),t._v(" "),e("span",[t._v("sns 수신동의(선택)")])])]),t._v(" "),e("button",[t._v("약관보기")])]),t._v(" "),e("div",{staticClass:"check_wrap margin_none"},[e("div",[e("label",[e("input",{staticClass:"input_check",attrs:{type:"checkbox",name:""}}),t._v(" "),e("span",[t._v("E-mail 수신동의 (선택)")])])]),t._v(" "),e("button",[t._v("약관보기")])])]),t._v(" "),e("div",{staticClass:"invalid_feedback"},[t._v("\n                            필수 약관에 동의해 주세요.\n                        ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormInputFile:n(334).default})}}]);