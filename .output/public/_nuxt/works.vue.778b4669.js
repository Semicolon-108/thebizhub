import{j as S,a as f,D as a,P as i,F as p,X as u,Q as n,R as y,A as k,G as d,E as c,u as t,Z as h,_ as N,$ as A,a0 as C,a1 as b,a2 as B}from"./swiper-vue.9585ef87.js";import{a as G}from"./entry.0e48903a.js";import P from"./gallery.f4fc60a6.js";const $={class:"container"},V={class:"header"},D={class:"body"},E=["src"],F=n("div",{class:"swiper-pagination"},null,-1),O=S({__name:"works",props:["work"],setup(m){const w=G().$imageURL,s=f(!1);return(e,o)=>{const _=b,g=B;return a(),i("div",$,[(a(!0),i(p,null,u(m.work,(r,v)=>(a(),i("div",{class:"work",key:v},[n("div",V,[n("h3",null,y(r.title),1)]),n("div",D,[k(g,{modules:["SwiperAutoplay"in e?e.SwiperAutoplay:t(h),"SwiperPagination"in e?e.SwiperPagination:t(N),"SwiperNavigation"in e?e.SwiperNavigation:t(A)],"slides-per-view":3,"space-between":20,loop:!1,effect:"creative",navigation:"",pagination:{clickable:!0,el:".swiper-pagination"},autoplay:{delay:5e3,disableOnInteraction:!0}},{default:d(()=>[(a(!0),i(p,null,u(r.image,l=>(a(),c(_,{onClick:o[0]||(o[0]=I=>s.value=!0)},{default:d(()=>[n("img",{src:t(w)+l,alt:""},null,8,E)]),_:2},1024))),256)),F]),_:2},1032,["modules","pagination"])]),t(s)?(a(),c(P,{key:0,data:r.image,onCloseShowGallery:o[1]||(o[1]=l=>s.value=!1)},null,8,["data"])):C("",!0)]))),128))])}}});export{O as _};
