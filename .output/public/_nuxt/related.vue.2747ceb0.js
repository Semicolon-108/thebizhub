import{a as m,H as k,l as h,o as s,b as t,F as r,k as c,i as e,u as v,t as l}from"./entry.ec7abcfb.js";const f={class:"grids is-3-desktop gap-20-desktop"},y=["onClick"],x={class:"card-image"},B=["src"],C={class:"card-content"},L={class:"tag-list"},b=m({__name:"related",props:["relate"],setup(i){const d=k().$imageURL,u=h(),_=o=>{u.push(`/blog-detail/${o}`)};return(o,R)=>(s(),t("ul",f,[(s(!0),t(r,null,c(i.relate,(a,p)=>(s(),t("li",{key:p},[e("div",{class:"card",onClick:n=>_(a._id)},[e("div",x,[e("img",{src:v(d)+a.coverPage,alt:""},null,8,B)]),e("div",C,[e("ul",L,[(s(!0),t(r,null,c(a.category,(n,g)=>(s(),t("li",{key:g},l(n.name),1))),128))]),e("h3",null,l(a.title),1)])],8,y)]))),128))]))}});export{b as _};
