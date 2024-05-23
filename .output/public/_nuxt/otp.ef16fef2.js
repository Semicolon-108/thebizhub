import{a as x,d as C,c as b,_ as T}from"./entry.f2dc0412.js";import{j as V,a as c,M as u,N as v,O as e,P as I,Q as N,u as i,x as O,X as y,R as _,U as m,I as P,V as w,W as S}from"./swiper-vue.6a103a73.js";import{I as B}from"./info-box.0d2c1a5a.js";const d=l=>(w("data-v-0fbed77d"),l=l(),S(),l),M={class:"section"},R=d(()=>e("div",{class:"bg is-hidden-mobile"},null,-1)),D={class:"container"},E=d(()=>e("h1",{class:"page-title"},"Verify OTP",-1)),U={class:"grids is-2-desktop is-1-mobile margin-top-30 gap-30"},Y={class:"left"},$={action:"",class:"grids is-1-desktop is-1-mobile gap-20"},j={class:"field"},q=d(()=>e("label",{for:""},[y("Enter OTP code from Inbox "),e("span",null,"*")],-1)),A={class:"control has-addon"},Q=d(()=>e("small",{style:{color:"red"}},"Your OTP will expire in 15 minutes from now",-1)),W={key:0,style:{color:"green"}},X={key:1,style:{color:"red"}},z={class:"right"},F=V({__name:"otp",setup(l){const p=x().$axios,t=c(),o=c(),a=c(),n=C("verifyToken"),h=b(),g=async()=>{if(!n.value)return o.value="Not found your verifyTOken yet";if(!a.value)return o.value="Please fill your verifyCode";await p.post("verify-code",{verifyCode:a.value,verifyToken:n.value}).then(s=>{s.status===201&&(t.value=s.data.message,o.value="",setTimeout(()=>{h.push("/auth/login")},1500))}).catch(s=>{t.value="",s.response.status===501?o.value="Can not verify":o.value=s.response.data.message})},k=async()=>{if(!n.value)return o.value="Not found your verifyTOken yet";await p.post("resend-verify-code",{verifyToken:n.value}).then(s=>{s.status===201&&(n.value=s.data.token,t.value="OTP has sent, Please check your email",o.value="")}).catch(s=>{t.value="",s.response.status===501?o.value="Can not verify":s.response.status===429?o.value="Sorry, You have too many request, please try again after 10 minutes":o.value=s.response.data.message})};return(s,r)=>(u(),v("section",M,[R,e("div",D,[E,e("div",U,[e("div",Y,[e("form",$,[e("div",j,[q,e("div",A,[I(e("input",{type:"text",class:"input","onUpdate:modelValue":r[0]||(r[0]=f=>O(a)?a.value=f:null),placeholder:"1234"},null,512),[[N,i(a)]]),e("a",{onClick:k},"Resend Code")]),y(),Q])]),i(t)?(u(),v("small",W,_(i(t)),1)):m("",!0),i(o)?(u(),v("small",X,_(i(o)),1)):m("",!0),e("button",{class:"button main margin-top-20 margin-bottom-10",onClick:r[1]||(r[1]=f=>g())}," Verify ")]),e("div",z,[P(B)])])])]))}});const K=T(F,[["__scopeId","data-v-0fbed77d"]]);export{K as default};
