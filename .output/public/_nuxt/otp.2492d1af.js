import{a as x,c as C,_ as b}from"./entry.900c67b2.js";import{j as T,a as u,L as d,X as p,Y as e,a8 as V,a9 as I,u as i,x as N,_ as y,Z as _,a5 as m,H as w,$ as O,a0 as S}from"./swiper-vue.9087d98d.js";import{u as B}from"./cookie.7ea80450.js";import{I as P}from"./info-box.4bf8db9a.js";const c=n=>(O("data-v-c78feb9c"),n=n(),S(),n),M={class:"section"},R=c(()=>e("div",{class:"bg is-hidden-mobile"},null,-1)),Y={class:"container"},$=c(()=>e("h1",{class:"page-title"},"Verify OTP",-1)),D={class:"grids is-2-desktop is-1-mobile margin-top-30 gap-30"},E={class:"left"},j={action:"",class:"grids is-1-desktop is-1-mobile gap-20"},q={class:"field"},A=c(()=>e("label",{for:""},[y("Enter OTP code from Inbox "),e("span",null,"*")],-1)),H={class:"control has-addon"},L=c(()=>e("small",{style:{color:"red"}},"Your OTP will expire in 15 minutes from now",-1)),U={key:0,style:{color:"green"}},X={key:1,style:{color:"red"}},Z={class:"right"},z=T({__name:"otp",setup(n){const f=x().$axios,t=u(),o=u(),a=u(),l=B("verifyToken"),h=C(),g=async()=>{if(!l.value)return o.value="Not found your verifyTOken yet";if(!a.value)return o.value="Please fill your verifyCode";await f.post("verify-code",{verifyCode:a.value,verifyToken:l.value}).then(s=>{s.status===201&&(t.value=s.data.message,o.value="",setTimeout(()=>{h.push("/auth/login")},1500))}).catch(s=>{t.value="",s.response.status===501?o.value="Can not verify":o.value=s.response.data.message})},k=async()=>{if(!l.value)return o.value="Not found your verifyTOken yet";await f.post("resend-verify-code",{verifyToken:l.value}).then(s=>{s.status===201&&(t.value=s.data.message,o.value="")}).catch(s=>{t.value="",s.response.status===501?o.value="Can not verify":s.response.status===429?o.value="Sorry, You have too many request, please try again after 10 minutes":o.value=s.response.data.message})};return(s,r)=>(d(),p("section",M,[R,e("div",Y,[$,e("div",D,[e("div",E,[e("form",j,[e("div",q,[A,e("div",H,[V(e("input",{type:"text",class:"input","onUpdate:modelValue":r[0]||(r[0]=v=>N(a)?a.value=v:null),placeholder:"1234"},null,512),[[I,i(a)]]),e("a",{onClick:k},"Resend Code")]),y(),L])]),i(t)?(d(),p("small",U,_(i(t)),1)):m("",!0),i(o)?(d(),p("small",X,_(i(o)),1)):m("",!0),e("button",{class:"button main margin-top-20 margin-bottom-10",onClick:r[1]||(r[1]=v=>g())}," Verify ")]),e("div",Z,[w(P)])])])]))}});const Q=b(z,[["__scopeId","data-v-c78feb9c"]]);export{Q as default};
