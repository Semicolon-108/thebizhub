import{a as P,e as S,b as j,_ as q}from"./entry.f0c17fd0.js";import{C as H}from"./card-list.8c95799b.js";import{j as R,a,ae as C,b as U,L as $,X as w,Y as I,Z as N,u as i,a5 as X,H as Y}from"./swiper-vue.1ec756b2.js";const Z={class:"container"},z={class:"page-title"},G={key:0,class:"category-desc"},J=R({__name:"index",async setup(K){let n,c;const u=P().$axios,f=S(),B=a(),r=a(),d=a(),E=a(1),L=a(1e4),b=a(""),t=a(""),k=a(0),F=a(),s=a(""),p=a(""),v=a(""),{locale:V}=j(),g=a(),A=async()=>{const e=await u.post("get-reuses-list/Category"),o=e.data.info.filter(l=>!l.groupStatus);B.value=o,r.value=e.data.info},m=async()=>{d.value=[],await u.post(`get-articles?page=${E.value}&perPage=${L.value}&tagId=${b.value}&categoryId=${t.value}&search=${s.value}`).then(e=>{e.status===200&&(d.value=e.data.info,k.value=e.data.total)}).catch(e=>{e&&(F.value="Data empty")})},y=()=>{const e=f.query.is,o="Events ",l="Update";if(e===l)s.value=l,t.value="";else if(e===o)t.value="6514fbff51ce087ae07926dc",s.value="";else{s.value="";const h=r.value.find(_=>_.name===e),x=r.value.find(_=>_.laoName===e);h?(t.value=h._id,s.value=""):x?(t.value=x._id,s.value=""):(t.value="",s.value="")}},D=async()=>{const e=await u.post(`edit-reuse?_id=${t.value}&type=Category&lang=${g.value}`);p.value=e.data.info.name,v.value=e.data.info.detail};return[n,c]=C(()=>A()),await n,c(),y(),[n,c]=C(()=>m()),await n,c(),U(()=>[f.path,V.value],([e,o])=>{g.value=o,y(),m(),D()},{immediate:!0,deep:!0}),(e,o)=>($(),w("section",null,[I("div",Z,[I("h1",z,N(i(p)),1),i(v)?($(),w("p",G,N(i(v)),1)):X("",!0),Y(H,{info:i(d)},null,8,["info"])])]))}});const T=q(J,[["__scopeId","data-v-6f3a2872"]]);export{T as default};
