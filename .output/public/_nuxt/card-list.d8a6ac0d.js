import{u as f,e as h,a as k,c as v,_ as y}from"./entry.4b7e5ca5.js";import{j as b,D as t,P as a,Q as s,F as d,X as _,u as p,R as m}from"./swiper-vue.9585ef87.js";function C(n,r){const{title:o,titleTemplate:c,...l}=n;return f({title:o,titleTemplate:c,_flatMeta:l},{...r,transform(e){const i=h({...e._flatMeta});return delete e._flatMeta,{...e,meta:i}}})}const x={class:"grids is-3-desktop is-1-mobile gap-20-desktop margin-top-20"},L=["onClick"],M={class:"card-image"},P=["src"],B={class:"card-content"},R={class:"tag-list"},D=b({__name:"card-list",props:["info"],setup(n){C({title:"TheBIZHub",ogTitle:"Partner for success in business and entrepreneurship",description:"Partner for success in business and entrepreneurship",ogDescription:"Partner for success in business and entrepreneurship"});const r=k().$imageURL,o=v();return(c,l)=>(t(),a("div",null,[s("ul",x,[(t(!0),a(d,null,_(n.info,(e,i)=>(t(),a("li",{key:i},[s("div",{class:"card",onClick:u=>p(o).push(`/blog-detail/${e._id}`)},[s("div",M,[s("img",{src:p(r)+e.coverPage,alt:""},null,8,P)]),s("div",B,[s("ul",R,[(t(!0),a(d,null,_(e.category,(u,g)=>(t(),a("li",{key:g},[s("a",null,m(u.name),1)]))),128))]),s("h3",null,m(e.title),1)])],8,L)]))),128))])]))}});const F=y(D,[["__scopeId","data-v-e0dea387"]]);export{F as C};
