import{o as s,c as p,F as g,a as $,b as f,e as w,_ as b,f as k,g as C,i as N,j as S,k as V,l as z,m as t,n as m,p as o,q as e,s as v,t as L,w as r,V as R,v as h,x as I,T as x,r as y}from"./main.a51c163a.js";import B from"./Footer.8e444518.js";import E from"./NavbarThemeSwitcher.72fe4bde.js";import H from"./UserProfile.e048d9d3.js";import{V as T}from"./VSpacer.ef833249.js";import"./VBtn.f0de8fd0.js";import"./VBadge.d50646b1.js";import"./VMenu.13c6b98a.js";import"./forwardRefs.54bb1675.js";import"./scopeId.7efb39da.js";import"./VList.d79a7f70.js";import"./index.8a54b518.js";import"./VDivider.ce49beae.js";const W={class:"nav-items"},q={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(u){const i=l=>"children"in l?b:k;return(l,d)=>(s(),p("ul",W,[(s(!0),p(g,null,$(u.navItems,(a,c)=>(s(),f(w(i(a)),{key:c,item:a},null,8,["item"]))),128))]))}},D={class:"layout-navbar"},F={class:"navbar-content-container"},j={class:"layout-horizontal-nav"},P={class:"horizontal-nav-content-container"},Y={class:"layout-page-content"},A={class:"layout-footer"},G={class:"footer-content-container"},J={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(u){const{y:i}=C(),{width:l}=N(),d=S(),a=V(!1);d.beforeEach(()=>{a.value=!0}),d.afterEach(()=>{a.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:_}=z();return(n,O)=>(s(),p("div",{class:v(["layout-wrapper",e(c)(e(l),e(i))])},[t("div",{class:v(["layout-navbar-and-nav-container",e(_)&&"header-blur"])},[t("div",D,[t("div",F,[m(n.$slots,"navbar")])]),t("div",j,[t("div",P,[o(e(q),{"nav-items":u.navItems},null,8,["nav-items"])])])],2),t("main",Y,[n.$slots["content-loading"]?(s(),p(g,{key:0},[e(a)?m(n.$slots,"content-loading",{key:0}):m(n.$slots,"default",{key:1})],64)):m(n.$slots,"default",{key:1})]),t("footer",A,[t("div",G,[m(n.$slots,"footer")])])],2))}},K=[{title:"Home",to:{name:"index"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}}],M={class:"app-title font-weight-bold leading-normal text-xl"},ce={__name:"DefaultLayoutWithHorizontalNav",setup(u){const{appRouteTransition:i}=L();return(l,d)=>{const a=y("RouterLink"),c=y("RouterView");return s(),f(e(J),{"nav-items":e(K)},{navbar:r(()=>[o(a,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:r(()=>[o(e(R),{nodes:e(h).app.logo},null,8,["nodes"]),t("h1",M,I(e(h).app.title),1)]),_:1}),o(T),o(E,{class:"me-2"}),o(H)]),footer:r(()=>[o(B)]),default:r(()=>[o(c,null,{default:r(({Component:_,route:n})=>[o(x,{name:e(i),mode:"out-in"},{default:r(()=>[(s(),f(w(_),{key:n.path}))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{ce as default};
