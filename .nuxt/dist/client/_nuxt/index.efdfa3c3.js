import{r as a,x as B,y as N,z as R,A,a as x,q as k,l as D,o,b as n,F as m,f as y,j as e,u as f,t as v,k as C,s as E,B as M,C as P,e as T,p as U,i as H}from"./entry.d86015b9.js";function V(c,l){const i=a({});return B(()=>{const p=R(c),{title:u,titleTemplate:s,..._}=p;i.value={title:u,titleTemplate:s,meta:A(_)}}),N(i,l)}const j={class:"grids is-3-desktop is-1-mobile gap-20 margin-top-20"},G=["onClick"],J={class:"card-image"},K=["src"],O={class:"card-content"},Q={class:"tag-list"},W=x({__name:"card-list",props:["info"],setup(c){V({title:"thebizhub",ogTitle:"bizhub",description:"bizhub",ogDescription:"bizhub, thebizhub, Thebizhub"});const l=k().$imageURL,i=D();return(p,u)=>(o(),n("ul",j,[(o(!0),n(m,null,y(c.info,(s,_)=>(o(),n("li",{key:_},[e("div",{class:"card",onClick:r=>f(i).push(`/blog-detail/${s._id}`)},[e("div",J,[e("img",{src:f(l)+s.coverPage,alt:""},null,8,K)]),e("div",O,[e("p",Q,[(o(!0),n(m,null,y(s.tag,(r,h)=>(o(),n("span",{key:h},v(r.name),1))),128)),(o(!0),n(m,null,y(s.category,(r,h)=>(o(),n("span",{key:h},v(r.name),1))),128))]),e("h3",null,v(s.title),1)])],8,G)]))),128))]))}});const X=C(W,[["__scopeId","data-v-da104b76"]]),Y=c=>(U("data-v-07392147"),c=c(),H(),c),Z={class:"container"},tt={class:"page-title"},et={class:"tabs-container"},st={class:"tabs"},at=["onClick"],ot=Y(()=>e("p",null,[e("i",{class:"fa-regular fa-angle-right"})],-1)),nt=x({__name:"index",async setup(c){let l,i;const p=k().$axios,u=E(),s=a(),_=a(),r=a(),h=a(1),I=a(10),w=a(""),b=a(""),z=a(0),S=a(),F=async()=>{const t=await p.post("get-reuses-list/Category"),g=t.data.info.filter(d=>!d.groupStatus);s.value=g,_.value=t.data.info},$=async()=>{await p.post(`get-articles?page=${h.value}&perPage=${I.value}&search=${w.value}&categoryId=${b.value}`).then(t=>{t.status===200&&(r.value=t.data.info,z.value=t.data.total)}).catch(t=>{t&&(S.value="Data empty")})},L=()=>{const t=u.query.is,g=_.value.find(d=>d.name===t);g&&(b.value=g._id)};return[l,i]=M(()=>F()),await l,i(),P(u,t=>{t.query.is&&(L(),$())},{immediate:!0,deep:!0}),(t,g)=>(o(),n("section",null,[e("div",Z,[e("h1",tt,v(f(u).query.is),1),e("div",et,[e("ul",st,[(o(!0),n(m,null,y(f(s),(d,q)=>(o(),n("li",{key:q,onClick:ct=>(b.value=d._id,$())},v(d.name),9,at))),128))]),ot]),T(X,{info:f(r)},null,8,["info"])])]))}});const rt=C(nt,[["__scopeId","data-v-07392147"]]);export{rt as default};
