import{bw as x,cr as i,bJ as C,bK as P,u as V,aL as c,a3 as p,b5 as l,aD as u,a6 as n,d as r,bx as _,a5 as v,aJ as k,F as S,a4 as N,ar as D}from"./index.d66dd298.js";import{Q as M}from"./QTimeline.267491c4.js";import{Q as q}from"./QPage.a9a1ce60.js";import{S as J}from"./SkeletonSinglePage.295b2fa1.js";import{u as U}from"./member.d1589e32.js";import"./QSkeleton.c55841a8.js";const g={},Q={components:{SkeletonSinglePage:J},data(){return{default:i.exports.cloneDeep(g),member:i.exports.cloneDeep(g),isPwd:!0,isConfPwd:!0,loaded:!1,submited:!1}},methods:{...C(U,["store","show","update","notes"]),onSubmit(o){console.func("pages/admins/members/MemberPage:methods.onSubmit()",arguments),this.submited=!0,(this.creating?this.store:this.update)(this.member).then(({data:a,message:h})=>{this.submited=!1,this.$q.notify(h),this.member=a,this.default=i.exports.cloneDeep(a),this.$router.push({name:"Single Member",params:{id:a.id},query:{action:"edit"}})}).catch(a=>{this.submited=!1,this.$core.error(a,{title:"Error"})})},onReset(o){console.func("pages/admins/members/MemberPage:methods.onReset()",arguments),this.loaded=!1,this.$nextTick(()=>{this.member=i.exports.cloneDeep(this.default),this.loaded=!0})},onCancel(o){console.func("pages/admins/members/MemberPage:methods.onCancel()",arguments),this.$router.go(-1)},onCreateNote(o){console.func("pages/admins/members/MemberPage:methods.onCreateNote()",arguments),o?(this.member.logs.splice(0,0,i.exports.cloneDeep(o)),this.default.logs.splice(0,0,i.exports.cloneDeep(o))):this.show(this.id).then(s=>{this.member=s,this.default=i.exports.cloneDeep(s)})}},async mounted(){this.creating?this.loaded=!0:this.show(this.id).then(o=>{this.member=o,this.default=i.exports.cloneDeep(o),this.loaded=!0}).catch(o=>{this.$emit("error",o)})},computed:{...P(V,["user"]),edit(){return["add","edit"].includes(this.action)||this.id==="add"},creating(){return this.id==="add"},id(){return this.$route.params.id},action(){return this.$route.query.action},disable(){return this.default&&JSON.stringify(this.member)===JSON.stringify(this.default)},resetable(){return this.default&&JSON.stringify(this.member)!==JSON.stringify(this.default)},hasClasses(){return!this.creating&&!this.member.is_enquiry}}},R={class:"q-gutter-md"},B={class:"col-xs-12 col-sm-4"},O=n("div",{class:"text-label"},"First Name",-1),A={class:"col-xs-12 col-sm-4"},E=n("div",{class:"text-label"},"Surname",-1),F={class:"col-xs-12 col-sm-4"},z=n("div",{class:"text-label"},"Email Address",-1),L={class:"col-xs-12 col-sm-4"},T=n("div",{class:"text-label"},"Phone Number",-1),G={class:"col-xs-12 col-sm-4"},I=n("div",{class:"text-label"},"Password",-1),K={class:"col-xs-12 col-sm-4"},W=n("div",{class:"text-label"},"Confirm Password",-1);function j(o,s,a,h,e,m){const d=c("base-input"),b=c("base-section"),f=c("base-note-card"),y=c("base-form"),w=c("skeleton-single-page");return u(),p(q,{padding:""},{default:l(()=>[e.loaded?(u(),p(y,{key:0,onSubmit:m.onSubmit,onCancel:m.onCancel,onReset:m.onReset,resetable:m.resetable,disable:m.disable,submited:e.submited},{default:l(()=>[n("div",R,[r(b,{title:"General information",description:"Member information forms provide key data on member that can be used to keep track of who worked for the company, when, and in what positions."},{default:l(()=>[n("div",B,[O,r(d,{modelValue:e.member.first_name,"onUpdate:modelValue":s[0]||(s[0]=t=>e.member.first_name=t)},null,8,["modelValue"])]),n("div",A,[E,r(d,{modelValue:e.member.last_name,"onUpdate:modelValue":s[1]||(s[1]=t=>e.member.last_name=t)},null,8,["modelValue"])]),n("div",F,[z,r(d,{modelValue:e.member.email,"onUpdate:modelValue":s[2]||(s[2]=t=>e.member.email=t)},null,8,["modelValue"])]),n("div",L,[T,r(d,{modelValue:e.member.phone_number,"onUpdate:modelValue":s[3]||(s[3]=t=>e.member.phone_number=t)},null,8,["modelValue"])])]),_:1}),r(b,{title:"Security",description:"Security to make your accounts unbreakable."},{default:l(()=>[n("div",G,[I,r(d,{type:e.isPwd?"password":"text",modelValue:e.member.password,"onUpdate:modelValue":s[5]||(s[5]=t=>e.member.password=t),color:"blue-grey-14"},{append:l(()=>[r(_,{name:e.isPwd?"fal fa-eye-slash":"fal fa-eye",class:"cursor-pointer",onClick:s[4]||(s[4]=t=>e.isPwd=!e.isPwd),size:"16px"},null,8,["name"])]),_:1},8,["type","modelValue"])]),n("div",K,[W,r(d,{type:e.isConfPwd?"password":"text",modelValue:e.member.password_confirmation,"onUpdate:modelValue":s[7]||(s[7]=t=>e.member.password_confirmation=t),color:"blue-grey-14"},{append:l(()=>[r(_,{name:e.isConfPwd?"fal fa-eye-slash":"fal fa-eye",class:"cursor-pointer",onClick:s[6]||(s[6]=t=>e.isConfPwd=!e.isConfPwd),size:"16px"},null,8,["name"])]),_:1},8,["type","modelValue"])])]),_:1}),m.creating?N("",!0):(u(),p(b,{key:0,title:"Notes",description:"With activity, you can view detailed histories and write notes for member.","no-row":"","body-class":"q-px-lg"},{default:l(()=>[r(M,{class:"comments",color:"secondary"},{default:l(()=>[r(f,{"module-action":o.notes,"module-id":e.member.id,class:"comment",creating:"",onCreate:m.onCreateNote},null,8,["module-action","module-id","onCreate"]),(u(!0),v(S,null,k(e.member.logs,t=>(u(),p(f,D({class:"comment",key:t.id},t,{"module-id":e.member.id,user:t.admin}),null,16,["module-id","user"]))),128))]),_:1})]),_:1}))])]),_:1},8,["onSubmit","onCancel","onReset","resetable","disable","submited"])):(u(),p(w,{key:1}))]),_:1})}var se=x(Q,[["render",j]]);export{se as default};