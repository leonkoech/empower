(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[403],{8132:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main/home",function(){return t(9184)}])},9184:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var a=t(1527),r=t(8129),o=t(8767),d=t(2629),s=t(959);function _(){let[e,n]=(0,s.useState)();return(0,s.useEffect)(()=>{console.log(e)}),(0,a.jsxs)("main",{children:[(0,a.jsx)(r.default,{selected_tab:"home"}),(0,a.jsx)(o.default,{sendHeight:n}),(0,a.jsx)(d.default,{})]})}},2629:function(e,n,t){"use strict";t.r(n),t.d(n,{footer_height:function(){return s}});var a=t(1527),r=t(959),o=t(7690),d=t.n(o),s=0;let _=()=>{let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{s=e.current.offsetHeight}),(0,a.jsxs)("div",{ref:e,className:d().footer_container,children:[(0,a.jsx)("span",{children:"Empower"}),(0,a.jsx)("span",{children:"2023 \xa9"})]})};n.default=_},8129:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p},header_height:function(){return l}});var a=t(1527),r=t(8051),o=t.n(r),d=t(1149),s=t.n(d),_={src:"/_next/static/media/menu.85318559.svg",height:48,width:48},c={src:"/_next/static/media/close.bae43e2c.svg",height:48,width:48},A=t(959),i=t(1574);let h=["home","about","services","logourl","team","enroll","contact"];var l=0;let u=e=>{let{selected_tab:n}=e,t=(0,i.useRouter)(),r=(0,A.useRef)(null),[d,l]=(0,A.useState)(!1);return(0,a.jsxs)("div",{ref:r,className:o().header_container,children:[(0,a.jsxs)("div",{className:o().header_phone,children:[(0,a.jsxs)("div",{className:o().header_phone_display,children:[(0,a.jsx)("h1",{children:"Empower."}),(0,a.jsx)("button",{"aria-label":"open menu",type:"button",onClick:()=>{l(!0)},children:(0,a.jsx)(s(),{src:_,alt:"open menu",className:o().header_menu_icon})})]}),(0,a.jsxs)("div",{className:"".concat(o().header_phone_expanded," ").concat(d?o().header_phone_expanded_opened:o().header_phone_expanded_closed),children:[(0,a.jsx)("div",{className:"".concat(o().header_phone_expanded_controls),children:(0,a.jsx)("button",{"aria-label":"close menu",tabIndex:-1,type:"button",onClick:()=>{l(!1)},children:(0,a.jsx)(s(),{src:c,alt:"close menu",className:o().header_menu_icon})})}),(0,a.jsx)("div",{className:o().header_phone_expanded_tabs,children:h.map((e,t)=>{if(3!==t)return(0,a.jsx)("button",{tabIndex:-1,"aria-label":e,type:"button","aria-pressed":"false",className:"".concat(o().header_buttons," ").concat(n==e?o().header_buttons_active:""),onClick:()=>{l(!1)},children:(0,a.jsx)("p",{children:e})},t)})})]})]}),(0,a.jsx)("div",{className:o().header_tablet,children:h.map((e,r)=>3===r?(0,a.jsx)("p",{children:"LOGO"},r):(0,a.jsx)("button",{tabIndex:1,"aria-label":e,type:"button",className:"".concat(o().header_buttons," ").concat(n==e?o().header_buttons_active:""),onClick:()=>{"home"==e?t.push("/"):t.push(e)},children:(0,a.jsx)("span",{children:e})},r))})]})};var p=u},8767:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l},home_height:function(){return i}});var a=t(1527),r=t(1818),o=t.n(r),d={src:"/_next/static/media/image.a0f5e74c.jpg",height:4016,width:6016,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAALQV/8QAGRAAAgMBAAAAAAAAAAAAAAAAARIAAiED/9oACAEBAAE/AOJL03Fn/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:5},s=t(4271);let _={text:"I have no idea what to type in here, go ".concat(s.p),italics:["Empower"]};var c=t(6326),A=t(959),i=0;let h=e=>{let{sendHeight:n}=e,t=(0,A.useRef)(null);return(0,A.useEffect)(()=>{i=t.current.offsetHeight,n(t.current.offsetHeight)}),(0,a.jsxs)("div",{ref:t,className:o().home_container,children:[(0,a.jsx)("div",{className:o().home_description,children:(0,a.jsx)("div",{className:o().home_description_text,children:(0,a.jsx)("h1",{children:(0,a.jsx)(c.Z,{word:_})})})}),(0,a.jsx)("div",{className:o().home_image,style:{backgroundImage:"url(".concat(d.src,")"),backgroundSize:"cover",backgroundPositionX:"60%"}})]})};var l=h},6326:function(e,n,t){"use strict";var a=t(1527),r=t(4271);let o=e=>{let{word:n}=e,t=n.text.split(" "),o=n.italics;return(0,a.jsx)("span",{children:t.map((e,n)=>{if(e!==r.p)return" ".concat(e);{let t=o[0];return(0,a.jsxs)("i",{children:[" ",t," "]},n)}})})};n.Z=o},4271:function(e,n,t){"use strict";t.d(n,{p:function(){return a}});let a="$"},7690:function(e){e.exports={footer_container:"Footer_footer_container__G0NsT"}},8051:function(e){e.exports={header_container:"Header_header_container__UHhEh",header_phone:"Header_header_phone__tpzrO",header_phone_display:"Header_header_phone_display__cukww",header_phone_expanded:"Header_header_phone_expanded__hWpo3",header_phone_expanded_closed:"Header_header_phone_expanded_closed__Kkdid",header_phone_expanded_opened:"Header_header_phone_expanded_opened__Qzhkx",header_phone_expanded_controls:"Header_header_phone_expanded_controls__Wfvd6",header_phone_expanded_tabs:"Header_header_phone_expanded_tabs__c5Kwg",header_tablet:"Header_header_tablet__qSEVR",header_menu_icon:"Header_header_menu_icon__mdXyK",header_buttons:"Header_header_buttons__F0u5E",header_buttons_active:"Header_header_buttons_active__tG1NZ"}},1818:function(e){e.exports={home_container:"Home_home_container__zRq5g",home_description:"Home_home_description___J2zE",home_description_text:"Home_home_description_text__1tzvi",home_image:"Home_home_image__kcxxO"}}},function(e){e.O(0,[579,774,888,179],function(){return e(e.s=8132)}),_N_E=e.O()}]);