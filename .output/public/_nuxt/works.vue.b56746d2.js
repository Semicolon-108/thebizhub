import{j as k,a as d,L as a,X as s,G as m,a1 as w,Y as t,Z as h,H as N,N as _,M as g,u as n,a2 as C,a3 as b,a4 as A,a5 as B,a6 as G,a7 as I}from"./swiper-vue.1ec756b2.js";import{a as L}from"./entry.f0c17fd0.js";import P from"./gallery.a84ac82c.js";const V={class:"container"},$={class:"header"},F={class:"body"},j=["src"],D=t("div",{class:"swiper-pagination"},null,-1),R=k({__name:"works",props:["work"],setup(v){const f=L().$imageURL,o=d(!1),c=d(""),S=(e,i)=>{const r=i.find(l=>l==e);c.value=r,o.value=!0};return(e,i)=>{const r=G,l=I;return a(),s("div",V,[(a(!0),s(m,null,w(v.work,(p,y)=>(a(),s("div",{class:"work",key:y},[t("div",$,[t("h3",null,h(p.title),1)]),t("div",F,[N(l,{modules:["SwiperAutoplay"in e?e.SwiperAutoplay:n(C),"SwiperPagination"in e?e.SwiperPagination:n(b),"SwiperNavigation"in e?e.SwiperNavigation:n(A)],"slides-per-view":3,"space-between":20,loop:!1,effect:"creative",navigation:"",pagination:{clickable:!0,el:".swiper-pagination"},autoplay:{delay:5e3,disableOnInteraction:!0}},{default:_(()=>[(a(!0),s(m,null,w(p.image,u=>(a(),g(r,{onClick:E=>S(u,p.image)},{default:_(()=>[t("img",{src:n(f)+u,alt:""},null,8,j)]),_:2},1032,["onClick"]))),256)),D]),_:2},1032,["modules","pagination"])]),n(o)?(a(),g(P,{key:0,data:n(c),onCloseShowGallery:i[0]||(i[0]=u=>o.value=!1)},null,8,["data"])):B("",!0)]))),128))])}}});export{R as _};
