import{a as V,d as R,b as S,_ as j}from"./entry.59fd4ef7.js";import{C as q}from"./card-list.c66ff339.js";import{j as Q,a,a8 as C,b as U,D as $,P as w,Q as I,R as N,u as i,a0 as z,A as G}from"./swiper-vue.485cbf8d.js";const H={class:"container"},J={class:"page-title"},K={key:0},M=Q({__name:"index",async setup(O){let n,c;const u=V().$axios,p=R(),B=a(),r=a(),d=a(),E=a(1),b=a(1e4),k=a(""),t=a(""),A=a(0),D=a(),s=a(""),f=a(""),v=a(""),{locale:F}=S(),g=a(),L=async()=>{const e=await u.post("get-reuses-list/Category"),o=e.data.info.filter(l=>!l.groupStatus);B.value=o,r.value=e.data.info},m=async()=>{d.value=[],await u.post(`get-articles?page=${E.value}&perPage=${b.value}&tagId=${k.value}&categoryId=${t.value}&search=${s.value}`).then(e=>{e.status===200&&(d.value=e.data.info,A.value=e.data.total)}).catch(e=>{e&&(D.value="Data empty")})},y=()=>{const e=p.query.is,o="Events ",l="Update";if(e===l)s.value=l,t.value="";else if(e===o)t.value="6514fbff51ce087ae07926dc",s.value="";else{s.value="";const h=r.value.find(_=>_.name===e),x=r.value.find(_=>_.laoName===e);h?(t.value=h._id,s.value=""):x?(t.value=x._id,s.value=""):(t.value="",s.value="")}},P=async()=>{const e=await u.post(`edit-reuse?_id=${t.value}&type=Category&lang=${g.value}`);f.value=e.data.info.name,v.value=e.data.info.detail};return[n,c]=C(()=>L()),await n,c(),y(),[n,c]=C(()=>m()),await n,c(),U(()=>[p.path,F.value],([e,o])=>{g.value=o,y(),m(),P()},{immediate:!0,deep:!0}),(e,o)=>($(),w("section",null,[I("div",H,[I("h1",J,N(i(f)),1),i(v)?($(),w("p",K,N(i(v)),1)):z("",!0),G(q,{info:i(d)},null,8,["info"])])]))}});const Y=j(M,[["__scopeId","data-v-507457e8"]]);export{Y as default};
