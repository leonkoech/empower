(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{6944:function(e,a,A){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main/sections/header/Header",function(){return A(5242)}])},5242:function(e,a,A){"use strict";A.r(a),A.d(a,{default:function(){return u},header_height:function(){return l}});var o=A(5893),t=A(9645),n=A.n(t),r=A(5675),d=A.n(r),s=A(6118),_=A(7294);function c(e,a){let A=window.pageYOffset,o=e-A,t=performance.now();requestAnimationFrame(function e(n){var r;let d=n-t,s=(r=Math.min(d/a,1))<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1;window.scrollTo(0,A+o*s),d<a&&requestAnimationFrame(e)})}let i=["home","about","services","logourl","treatment","enroll","contact"];var l=0;let h=e=>{let{section_heights:a,loader:A}=e,t=(0,_.useRef)(null),[r,l]=(0,_.useState)(!1),[h,u]=(0,_.useState)(""),[p,m]=(0,_.useState)(!1),[f,g]=(0,_.useState)({home:{from:0,to:0},about:{from:0,to:0},services:{from:0,to:0},treatment:{from:0,to:0},enroll:{from:0,to:0},contact:{from:0,to:0}});function w(e){if(A)for(let[a,o]of Object.entries(e)){let t=window.scrollY;t>=o.from&&t<=o.to&&u(a)}}return(0,_.useEffect)(()=>{if(window.scrollTo(0,0),u("home"),console.log(h),A&&!p){let e={home:{from:0,to:0+a[0]},about:{from:0+a[0],to:0+a[0]+a[1]},services:{from:0+a[0]+a[1],to:0+a[0]+a[1]+a[2]},treatment:{from:0+a[0]+a[1]+a[2],to:0+a[0]+a[1]+a[2]+a[3]},enroll:{from:0+a[0]+a[1]+a[2]+a[3],to:0+a[0]+a[1]+a[2]+a[3]+a[4]},contact:{from:0+a[0]+a[1]+a[2]+a[3]+a[4],to:0+a[0]+a[1]+a[2]+a[3]+a[4]+a[5]}};g(e),m(!0),w(f)}},[A,f]),(0,_.useEffect)(()=>(window.addEventListener("scroll",()=>w(f)),()=>{window.removeEventListener("scroll",()=>w(f))}),[h]),(0,o.jsxs)("div",{ref:t,className:n().header_container,children:[(0,o.jsxs)("div",{className:n().header_phone,children:[(0,o.jsxs)("div",{className:n().header_phone_display,children:[(0,o.jsx)(d(),{src:s.W.wordLogo,alt:"Empower Recovery Center","aria-label":"Empower Recovery Center",onClick:()=>{c(0,1e3)}},"logo"),(0,o.jsx)("button",{"aria-label":"open menu",type:"button",onClick:()=>{l(!0)},children:(0,o.jsx)(d(),{src:s.W.menu,alt:"open menu",className:n().header_menu_icon})})]}),(0,o.jsxs)("div",{className:"".concat(n().header_phone_expanded," ").concat(r?n().header_phone_expanded_opened:n().header_phone_expanded_closed),children:[(0,o.jsx)("div",{className:"".concat(n().header_phone_expanded_controls),children:(0,o.jsx)("button",{"aria-label":"close menu",tabIndex:-1,type:"button",onClick:()=>{l(!1)},children:(0,o.jsx)(d(),{src:s.W.close,alt:"close menu",className:n().header_menu_icon})})}),(0,o.jsx)("div",{className:n().header_phone_expanded_tabs,children:i.map((e,a)=>{if(3!==a)return(0,o.jsx)("button",{tabIndex:-1,"aria-label":e,type:"button","aria-pressed":"false",className:"".concat(n().header_buttons," ").concat(h==e?n().header_buttons_active:""),onClick:()=>{if(e in f){let a=f[e].from;console.log(a),c(a,1e3)}l(!1)},children:(0,o.jsx)("p",{children:e})},a)})})]})]}),(0,o.jsx)("div",{className:n().header_tablet,children:i.map((e,a)=>3===a?(0,o.jsx)(d(),{src:s.W.logo,alt:"Empower Recovery Center","aria-label":"Empower Recovery Center",className:n().header_logo,onClick:()=>{c(0,1e3)}},a):(0,o.jsx)("button",{tabIndex:1,"aria-label":e,type:"button",className:"".concat(n().header_buttons," ").concat(h==e?n().header_buttons_active:""),onClick:()=>{if(e in f){let a=f[e].from;console.log(a),c(a,1e3)}},children:(0,o.jsx)("span",{children:e})},a))})]})};var u=h},6118:function(e,a,A){"use strict";A.d(a,{W:function(){return o}});var o={menu:{src:"/_next/static/media/menu.85318559.svg",height:48,width:48},logo:{src:"/_next/static/media/logo.5ce0964f.png",height:92,width:110,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAG1BMVEUYej0YejxMaXEYej0YejwZeTwZej0Zej0Zejxd0RTpAAAACXRSTlMiFgA1QgVepH9IHnLXAAAACXBIWXMAAAsSAAALEgHS3X78AAAAL0lEQVR4nB3IwQ0AMAjDQCeh0P0nrqhfJ2OrsY3dQ87ijvqDm2MjCZBIhaoU274HE0UAhW5quJ4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},close:{src:"/_next/static/media/close.bae43e2c.svg",height:48,width:48},wordLogo:{src:"/_next/static/media/wordlogo.17d0cf29.png",height:34,width:110,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEUYej0Yej1kTM6OAAAAAnRSTlMpN4po99wAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAATSURBVHicY2BkZGQAIQZGBggAAABtAAixbqlvAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},sample:{src:"/_next/static/media/sample.cfc94e69.jpg",height:4608,width:3456,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAACAwACAwAAAAAAAAAAAAABAgADBAYREjGR/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAEUH/2gAMAwEAAhEDEQA/AJVZwa+HZlrXJiqFykMawzg+JDKWPsE9n5ERB9ZQaX//2Q==",blurWidth:6,blurHeight:8}}},9645:function(e){e.exports={header_container:"Header_header_container__UHhEh",header_phone:"Header_header_phone__tpzrO",header_phone_display:"Header_header_phone_display__cukww",header_phone_expanded:"Header_header_phone_expanded__hWpo3",header_phone_expanded_closed:"Header_header_phone_expanded_closed__Kkdid",header_phone_expanded_opened:"Header_header_phone_expanded_opened__Qzhkx",header_phone_expanded_controls:"Header_header_phone_expanded_controls__Wfvd6",header_phone_expanded_tabs:"Header_header_phone_expanded_tabs__c5Kwg",header_tablet:"Header_header_tablet__qSEVR",header_menu_icon:"Header_header_menu_icon__mdXyK",header_logo:"Header_header_logo__k_X3M",header_buttons:"Header_header_buttons__F0u5E",header_buttons_active:"Header_header_buttons_active__tG1NZ"}}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=6944)}),_N_E=e.O()}]);