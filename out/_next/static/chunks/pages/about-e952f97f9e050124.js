(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{6887:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(9231)}])},9231:function(e,t,n){"use strict";n.r(t),n.d(t,{about_height:function(){return h}});var a=n(1527),r=n(7032),i=n.n(r),o=n(9557),c=n(6326),s=n(959),d=n(4712),_=n.n(d),l=n(8129),u=n(2629),h=0;let p=()=>{let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{h=e.current.offsetHeight}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(_(),{children:[(0,a.jsx)("title",{children:"Empower"}),(0,a.jsx)("meta",{name:"description",content:"Empower Website"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"})]}),(0,a.jsx)(l.default,{selected_tab:"about"}),(0,a.jsx)("div",{ref:e,className:i().container,children:o.X.map((e,t)=>(0,a.jsx)("div",{className:"".concat(i().container_text," ").concat(t%2==0?i().container_text_left:i().container_text_right),children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{role:"term",children:(0,a.jsx)(c.Z,{word:e.title})}),(0,a.jsx)("p",{role:"definition",children:e.details})]})},t))}),(0,a.jsx)(u.default,{})]})};t.default=p},2629:function(e,t,n){"use strict";n.r(t),n.d(t,{footer_height:function(){return c}});var a=n(1527),r=n(959),i=n(7690),o=n.n(i),c=0;let s=()=>{let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{c=e.current.offsetHeight}),(0,a.jsxs)("div",{ref:e,className:o().footer_container,children:[(0,a.jsx)("span",{children:"Empower"}),(0,a.jsx)("span",{children:"2023 \xa9"})]})};t.default=s},8129:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x},header_height:function(){return h}});var a=n(1527),r=n(8051),i=n.n(r),o=n(1149),c=n.n(o),s={src:"/_next/static/media/menu.85318559.svg",height:48,width:48},d={src:"/_next/static/media/close.bae43e2c.svg",height:48,width:48},_=n(959),l=n(1574);let u=["home","about","services","logourl","team","enroll","contact"];var h=0;let p=e=>{let{selected_tab:t}=e,n=(0,l.useRouter)(),r=(0,_.useRef)(null),[o,h]=(0,_.useState)(!1);return(0,a.jsxs)("div",{ref:r,className:i().header_container,children:[(0,a.jsxs)("div",{className:i().header_phone,children:[(0,a.jsxs)("div",{className:i().header_phone_display,children:[(0,a.jsx)("h1",{children:"Empower."}),(0,a.jsx)("button",{"aria-label":"open menu",type:"button",onClick:()=>{h(!0)},children:(0,a.jsx)(c(),{src:s,alt:"open menu",className:i().header_menu_icon})})]}),(0,a.jsxs)("div",{className:"".concat(i().header_phone_expanded," ").concat(o?i().header_phone_expanded_opened:i().header_phone_expanded_closed),children:[(0,a.jsx)("div",{className:"".concat(i().header_phone_expanded_controls),children:(0,a.jsx)("button",{"aria-label":"close menu",tabIndex:-1,type:"button",onClick:()=>{h(!1)},children:(0,a.jsx)(c(),{src:d,alt:"close menu",className:i().header_menu_icon})})}),(0,a.jsx)("div",{className:i().header_phone_expanded_tabs,children:u.map((e,n)=>{if(3!==n)return(0,a.jsx)("button",{tabIndex:-1,"aria-label":e,type:"button","aria-pressed":"false",className:"".concat(i().header_buttons," ").concat(t==e?i().header_buttons_active:""),onClick:()=>{h(!1)},children:(0,a.jsx)("p",{children:e})},n)})})]})]}),(0,a.jsx)("div",{className:i().header_tablet,children:u.map((e,r)=>3===r?(0,a.jsx)("p",{children:"LOGO"},r):(0,a.jsx)("button",{tabIndex:1,"aria-label":e,type:"button",className:"".concat(i().header_buttons," ").concat(t==e?i().header_buttons_active:""),onClick:()=>{"home"==e?n.push("/"):n.push(e)},children:(0,a.jsx)("span",{children:e})},r))})]})};var x=p},6326:function(e,t,n){"use strict";var a=n(1527),r=n(4271);let i=e=>{let{word:t}=e,n=t.text.split(" "),i=t.italics;return(0,a.jsx)("span",{children:n.map((e,t)=>{if(e!==r.p)return" ".concat(e);{let n=i[0];return(0,a.jsxs)("i",{children:[" ",n," "]},t)}})})};t.Z=i},9557:function(e,t,n){"use strict";n.d(t,{X:function(){return i},i:function(){return r}});var a=n(4271);let r="Lorem ipsum dolor sit amet, consectetur adipiscing elit,   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut   enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur     sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt     mollit anim id est laborum.",i=[{title:{text:"About ".concat(a.p),italics:["Empower"]},details:r},{title:{text:"Our ".concat(a.p),italics:["Vision"]},details:r},{title:{text:"Our ".concat(a.p),italics:["Mission"]},details:r}]},4271:function(e,t,n){"use strict";n.d(t,{p:function(){return a}});let a="$"},7032:function(e){e.exports={container:"About_container__ZgaQ_",container_text:"About_container_text__rSF_l",container_text_left:"About_container_text_left__YtnDw",container_text_right:"About_container_text_right__xeuOx"}},7690:function(e){e.exports={footer_container:"Footer_footer_container__G0NsT"}},8051:function(e){e.exports={header_container:"Header_header_container__UHhEh",header_phone:"Header_header_phone__tpzrO",header_phone_display:"Header_header_phone_display__cukww",header_phone_expanded:"Header_header_phone_expanded__hWpo3",header_phone_expanded_closed:"Header_header_phone_expanded_closed__Kkdid",header_phone_expanded_opened:"Header_header_phone_expanded_opened__Qzhkx",header_phone_expanded_controls:"Header_header_phone_expanded_controls__Wfvd6",header_phone_expanded_tabs:"Header_header_phone_expanded_tabs__c5Kwg",header_tablet:"Header_header_tablet__qSEVR",header_menu_icon:"Header_header_menu_icon__mdXyK",header_buttons:"Header_header_buttons__F0u5E",header_buttons_active:"Header_header_buttons_active__tG1NZ"}},4712:function(e,t,n){e.exports=n(9357)}},function(e){e.O(0,[579,774,888,179],function(){return e(e.s=6887)}),_N_E=e.O()}]);