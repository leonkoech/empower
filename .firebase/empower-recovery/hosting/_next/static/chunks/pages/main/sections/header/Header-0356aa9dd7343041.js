(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{6944:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main/sections/header/Header",function(){return a(5242)}])},5242:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return m},header_height:function(){return u}});var o=a(5893),t=a(9645),r=a.n(t),d=a(5675),_=a.n(d),s=a(118),c=a(7294),l=a(1163);function h(e,n){let a=window.pageYOffset,o=e-a,t=performance.now();requestAnimationFrame(function e(r){var d;let _=r-t,s=(d=Math.min(_/n,1))<.5?4*d*d*d:(d-1)*(2*d-2)*(2*d-2)+1;window.scrollTo(0,a+o*s),_<n&&requestAnimationFrame(e)})}let i=["home","about","services","logourl","treatment","enroll","contact"];var u=0;let p=e=>{let{section_heights:n,loader:a}=e;(0,l.useRouter)();let t=(0,c.useRef)(null),[d,u]=(0,c.useState)(!1),[p,m]=(0,c.useState)(""),[f,A]=(0,c.useState)(!1),[x,b]=(0,c.useState)({home:{from:0,to:0},about:{from:0,to:0},services:{from:0,to:0},treatment:{from:0,to:0},enroll:{from:0,to:0},contact:{from:0,to:0}});function w(e){if(a)for(let[n,o]of Object.entries(e)){let t=window.scrollY;t>=o.from&&t<=o.to&&m(n)}}return(0,c.useEffect)(()=>{if(window.scrollTo(0,0),m("home"),console.log(p),a&&!f){let e={home:{from:0,to:0+n[0]},about:{from:0+n[0],to:0+n[0]+n[1]},services:{from:0+n[0]+n[1],to:0+n[0]+n[1]+n[2]},treatment:{from:0+n[0]+n[1]+n[2],to:0+n[0]+n[1]+n[2]+n[3]},enroll:{from:0+n[0]+n[1]+n[2]+n[3],to:0+n[0]+n[1]+n[2]+n[3]+n[4]},contact:{from:0+n[0]+n[1]+n[2]+n[3]+n[4],to:0+n[0]+n[1]+n[2]+n[3]+n[4]+n[5]}};b(e),A(!0),w(x)}},[a,x]),(0,c.useEffect)(()=>(window.addEventListener("scroll",()=>w(x)),()=>{window.removeEventListener("scroll",()=>w(x))}),[p]),(0,o.jsxs)("div",{ref:t,className:r().header_container,children:[(0,o.jsxs)("div",{className:r().header_phone,children:[(0,o.jsxs)("div",{className:r().header_phone_display,children:[(0,o.jsx)("h1",{children:"Empower."}),(0,o.jsx)("button",{"aria-label":"open menu",type:"button",onClick:()=>{u(!0)},children:(0,o.jsx)(_(),{src:s.W.menu,alt:"open menu",className:r().header_menu_icon})})]}),(0,o.jsxs)("div",{className:"".concat(r().header_phone_expanded," ").concat(d?r().header_phone_expanded_opened:r().header_phone_expanded_closed),children:[(0,o.jsx)("div",{className:"".concat(r().header_phone_expanded_controls),children:(0,o.jsx)("button",{"aria-label":"close menu",tabIndex:-1,type:"button",onClick:()=>{u(!1)},children:(0,o.jsx)(_(),{src:s.W.close,alt:"close menu",className:r().header_menu_icon})})}),(0,o.jsx)("div",{className:r().header_phone_expanded_tabs,children:i.map((e,n)=>{if(3!==n)return(0,o.jsx)("button",{tabIndex:-1,"aria-label":e,type:"button","aria-pressed":"false",className:"".concat(r().header_buttons," ").concat(p==e?r().header_buttons_active:""),onClick:()=>{if(e in x){let n=x[e].from;console.log(n),h(n,1e3)}u(!1)},children:(0,o.jsx)("p",{children:e})},n)})})]})]}),(0,o.jsx)("div",{className:r().header_tablet,children:i.map((e,n)=>3===n?(0,o.jsx)(_(),{src:s.W.logo,alt:"Empower Recovery Center","aria-label":"Empower Recovery Center",className:r().header_logo,onClick:()=>{h(0,1e3)}},n):(0,o.jsx)("button",{tabIndex:1,"aria-label":e,type:"button",className:"".concat(r().header_buttons," ").concat(p==e?r().header_buttons_active:""),onClick:()=>{if(e in x){let n=x[e].from;console.log(n),h(n,1e3)}},children:(0,o.jsx)("span",{children:e})},n))})]})};var m=p},118:function(e,n,a){"use strict";a.d(n,{W:function(){return o}});var o={menu:{src:"/_next/static/media/menu.85318559.svg",height:48,width:48},logo:{src:"/_next/static/media/logo.5ce0964f.png",height:92,width:110,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAG1BMVEUYej0YejxMaXEYej0YejwZeTwZej0Zej0Zejxd0RTpAAAACXRSTlMiFgA1QgVepH9IHnLXAAAACXBIWXMAAAsSAAALEgHS3X78AAAAL0lEQVR4nB3IwQ0AMAjDQCeh0P0nrqhfJ2OrsY3dQ87ijvqDm2MjCZBIhaoU274HE0UAhW5quJ4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},close:{src:"/_next/static/media/close.bae43e2c.svg",height:48,width:48}}},9645:function(e){e.exports={header_container:"Header_header_container__UHhEh",header_phone:"Header_header_phone__tpzrO",header_phone_display:"Header_header_phone_display__cukww",header_phone_expanded:"Header_header_phone_expanded__hWpo3",header_phone_expanded_closed:"Header_header_phone_expanded_closed__Kkdid",header_phone_expanded_opened:"Header_header_phone_expanded_opened__Qzhkx",header_phone_expanded_controls:"Header_header_phone_expanded_controls__Wfvd6",header_phone_expanded_tabs:"Header_header_phone_expanded_tabs__c5Kwg",header_tablet:"Header_header_tablet__qSEVR",header_menu_icon:"Header_header_menu_icon__mdXyK",header_logo:"Header_header_logo__k_X3M",header_buttons:"Header_header_buttons__F0u5E",header_buttons_active:"Header_header_buttons_active__tG1NZ"}},1163:function(e,n,a){e.exports=a(880)}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=6944)}),_N_E=e.O()}]);