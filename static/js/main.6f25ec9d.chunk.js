(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{112:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(11),c=i.n(a),r=(i(98),i(5)),l=i(15),s=i(32),o=i(12),j=i(1);var d=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("h2",{children:["Hi! It`s a simple CV maker",Object(j.jsx)("br",{}),"Click next step to start"]})})},u=i(45),b=i.n(u),O=i(59),h=i(26),x=i(155),f=i(146),g=i(28),m=i.n(g),p=i(144),v=i(145),S=i(64),k=i.n(S);var _=function(e){var t=e.update,i=e.profile,a=Object(n.useState)({FullName:i.FullName,img:i.img,Position:i.Position,Location:i.Location,Phone:i.Phone,Email:i.Email,Git:i.Git,LinkedIn:i.LinkedIn}),c=Object(l.a)(a,2),s=c[0],o=c[1],d=function(){return s.FullName&&s.Position&&s.Location&&s.Phone&&s.Email},u=Object(n.useState)(!d()),g=Object(l.a)(u,2),S=g[0],_=g[1],C=function(e){o((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(h.a)({},e.target.id,e.target.value))}))},E=function(){var e=Object(O.a)(b.a.mark((function e(t){var i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(i=new FileReader).onload=function(){o((function(e){return Object(r.a)(Object(r.a)({},e),{},{img:i.result})}))},i.readAsDataURL(t.target.files[0]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{className:k.a.form,children:[s.img&&Object(j.jsx)("img",{className:k.a.img,alt:"User",src:null===s||void 0===s?void 0:s.img}),Object(j.jsxs)("div",{className:k.a.full,children:[Object(j.jsx)(x.a,{required:!0,defaultValue:s.FullName||"",onChange:C,error:""===s.FullName,id:"FullName",label:"Full name"}),Object(j.jsx)("input",{accept:"image/*",id:"img",onChange:E,type:"file"}),Object(j.jsx)("label",{htmlFor:"img",children:Object(j.jsx)(p.a,{color:"primary","aria-label":"upload picture",component:"span",children:Object(j.jsx)(v.a,{})})})]}),Object(j.jsx)(x.a,{required:!0,defaultValue:s.Position||"",onChange:C,error:""===s.Position,id:"Position",label:"Position"}),Object(j.jsx)(x.a,{required:!0,defaultValue:s.Location||"",onChange:C,error:""===s.Location,id:"Location",label:"Location"}),Object(j.jsx)(x.a,{required:!0,defaultValue:s.Phone||"",onChange:C,error:""===s.Phone,id:"Phone",label:"Phone"}),Object(j.jsx)(x.a,{required:!0,defaultValue:s.Email||"",onChange:C,error:""===s.Email,id:"Email",label:"Email"}),Object(j.jsx)(x.a,{id:"Git",defaultValue:s.Git||"",onChange:C,label:"Git"}),Object(j.jsx)(x.a,{id:"LinkedIn",defaultValue:s.LinkedIn||"",onChange:C,label:"LinkedIn"}),Object(j.jsx)(f.a,{onClick:function(){if(_(!d()),S){var e=function(e){s[e]||o((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(h.a)({},e,""))}))};for(var i in s)e(i)}else t(s);t(s)},variant:"contained",color:"primary",size:"small",startIcon:Object(j.jsx)(m.a,{}),children:"Save"})]})},C=i(13),E=i(147),N=i(156),L=i(157),P=i(154),y=i(159),F=i(158),I=i(55),D=i.n(I);var A=function(e){var t=e.update,i=e.profile,a=Object(n.useState)({Education:i.Education instanceof Array?Object(C.a)(i.Education):[]}),c=Object(l.a)(a,2),s=c[0],o=c[1],d={id:performance.now().toString(),Degree:"",Finished:!0,Graduation:"PRESENT"},u=Object(n.useState)(d),b=Object(l.a)(u,2),O=b[0],g=b[1],p=Object(n.useState)(!1),v=Object(l.a)(p,2),S=v[0],k=v[1],_=function(e){g((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(h.a)({},e.target.id,e.target.value))})),k(!1)},I=function(e){o((function(t){var i=t.Education.filter((function(t){return t.id!==e.target.id}));return Object(r.a)(Object(r.a)({},t),{},{Education:Object(C.a)(i)})}))};return Object(j.jsxs)("div",{className:D.a.edu,children:[Object(j.jsxs)("form",{className:D.a.form,children:[Object(j.jsx)(x.a,{onChange:_,value:(null===O||void 0===O?void 0:O.Institute)||"",error:S,id:"Institute",label:"Institute"}),Object(j.jsx)(x.a,{onChange:_,value:(null===O||void 0===O?void 0:O.Speciality)||"",error:S,id:"Speciality",label:"Speciality"}),Object(j.jsxs)("div",{className:D.a.select,children:[Object(j.jsx)(N.a,{id:"lDegree",children:"Degree"}),Object(j.jsxs)(P.a,{error:S,labelId:"lDegree",id:"Degree",value:O.Degree,onChange:function(e){g((function(t){return Object(r.a)(Object(r.a)({},t),{},{Degree:e.target.value})})),k(!1)},children:[Object(j.jsx)(L.a,{value:"Junior bachelor",children:"Junior bachelor"}),Object(j.jsx)(L.a,{value:"Bachelor",children:"Bachelor"}),Object(j.jsx)(L.a,{value:"Master",children:"Master"}),Object(j.jsx)(L.a,{value:"Ph.D",children:"Ph.D"})]})]}),Object(j.jsx)(x.a,{onChange:_,error:S,value:(null===O||void 0===O?void 0:O.Admission)||"",id:"Admission",label:"Admission",type:"number",InputLabelProps:{shrink:!0}}),Object(j.jsx)(F.a,{control:Object(j.jsx)(y.a,{checked:O.Finished,onChange:function(e){g((function(t){return Object(r.a)(Object(r.a)({},t),{},{Finished:e.target.checked})})),!e.target.checked&&g((function(e){return Object(r.a)(Object(r.a)({},e),{},{Graduation:"PRESENT"})})),k(!1)},name:"checkedB",id:"Finished",color:"primary"}),label:"Finished"}),Object(j.jsx)(x.a,{disabled:!O.Finished,onChange:_,value:(null===O||void 0===O?void 0:O.Graduation)||"",id:"Graduation",label:"Graduation",type:"number",error:S,InputLabelProps:{shrink:!0}}),Object(j.jsx)(f.a,{variant:"outlined",color:"primary",size:"small",startIcon:Object(j.jsx)(E.a,{}),onClick:function(){""!==O.Institute&&""!==O.Speciality&&""!==O.Degree&&O.Admission>=1940&&O.Admission<=(new Date).getFullYear()&&(O.Graduation>O.Admission||"PRESENT"===O.Graduation)?(o((function(e){return Object(r.a)(Object(r.a)({},e),{},{Education:[].concat(Object(C.a)(e.Education),[O])})})),g(Object(r.a)(Object(r.a)({},d),{},{id:performance.now()}))):k(!0)},children:"Add"})]}),Object(j.jsxs)("div",{className:D.a.rightSide,children:[Object(j.jsx)("h3",{children:"Education"}),Object(j.jsx)("ul",{children:s.Education.map((function(e){return Object(j.jsxs)("li",{children:[e.Institute,"  -",e.Speciality,Object(j.jsx)("br",{}),e.Degree," :",e.Admission," - ",e.Graduation,Object(j.jsx)("span",{id:e.id,onClick:I,children:"\u2718"})]},e.id)}))}),Object(j.jsx)(f.a,{variant:"contained",color:"primary",size:"small",onClick:function(){t(s)},startIcon:Object(j.jsx)(m.a,{}),children:"Save"})]})]})},w=i(65),G=i.n(w);var z=function(e){var t=e.update,i=e.profile,a=Object(n.useState)({Experience:i.Experience instanceof Array?Object(C.a)(i.Experience):[]}),c=Object(l.a)(a,2),s=c[0],o=c[1],d={id:performance.now().toString(),StillWorking:!1},u=Object(n.useState)(d),b=Object(l.a)(u,2),O=b[0],g=b[1],p=Object(n.useState)(!1),v=Object(l.a)(p,2),S=v[0],k=v[1],_=function(e){g((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(h.a)({},e.target.id,e.target.value))})),k(!1)},N=function(e){o((function(t){var i=t.Experience.filter((function(t){return t.id!==e.target.id}));return Object(r.a)(Object(r.a)({},t),{},{Experience:Object(C.a)(i)})}))};return Object(j.jsxs)("div",{className:G.a.exp,children:[Object(j.jsxs)("form",{className:G.a.form,children:[Object(j.jsx)(x.a,{required:!0,value:(null===O||void 0===O?void 0:O.Position)||"",onChange:_,error:S,id:"Position",label:"Position"}),Object(j.jsx)(x.a,{required:!0,value:(null===O||void 0===O?void 0:O.Company)||"",onChange:_,error:S,id:"Company",label:"Company"}),Object(j.jsx)(x.a,{id:"Description",value:(null===O||void 0===O?void 0:O.Description)||"",onChange:_,label:"Description"}),Object(j.jsx)(x.a,{value:(null===O||void 0===O?void 0:O.Start)||"",id:"Start",label:"Start",type:"date",onChange:_,error:S,InputLabelProps:{shrink:!0}}),Object(j.jsx)(F.a,{control:Object(j.jsx)(y.a,{checked:O.StillWorking,onChange:function(e){g((function(t){return Object(r.a)(Object(r.a)({},t),{},{StillWorking:e.target.checked})})),e.target.checked&&g((function(e){return Object(r.a)(Object(r.a)({},e),{},{Finish:"PRESENT"})})),k(!1)},id:"StillWorking",name:"checkedB",color:"primary"}),label:"Still Working"}),Object(j.jsx)(x.a,{disabled:O.StillWorking,value:(null===O||void 0===O?void 0:O.Finish)||"",id:"Finish",label:"Finish",type:"date",onChange:_,error:!O.StillWorking&&S,InputLabelProps:{shrink:!0}}),Object(j.jsx)(f.a,{variant:"outlined",color:"primary",size:"small",onClick:function(){""!==O.Company&&""!==O.Position&&new Date(O.Start).getFullYear()>=1950&&new Date(O.Start)<=new Date&&(new Date(O.Finish)>new Date(O.Start)||"PRESENT"===O.Finish)?(o((function(e){return Object(r.a)(Object(r.a)({},e),{},{Experience:[].concat(Object(C.a)(e.Experience),[O])})})),g(Object(r.a)(Object(r.a)({},d),{},{id:performance.now()}))):k(!0)},startIcon:Object(j.jsx)(E.a,{}),children:"Add"})]}),Object(j.jsxs)("div",{className:G.a.rightSide,children:[Object(j.jsx)("h3",{children:"Experience"}),Object(j.jsx)("ul",{children:s.Experience.map((function(e){return Object(j.jsxs)("li",{children:[e.Position,"  -",e.Company,Object(j.jsx)("br",{}),e.Start," - ",e.Finish,Object(j.jsx)("span",{id:e.id,onClick:N,children:"\u2718"})]},e.id)}))}),Object(j.jsx)(f.a,{variant:"contained",color:"primary",size:"small",onClick:function(){t(s)},startIcon:Object(j.jsx)(m.a,{}),children:"Save"})]})]})},V=i(66),B=i.n(V);var q=function(e){var t,i,a=e.update,c=e.profile,s=Object(n.useState)({ProfSkills:c.ProfSkills instanceof Array?Object(C.a)(c.ProfSkills):[],SoftSkills:c.SoftSkills instanceof Array?Object(C.a)(c.SoftSkills):[]}),o=Object(l.a)(s,2),d=o[0],u=o[1],b=Object(n.useState)({}),O=Object(l.a)(b,2),g=O[0],p=O[1],v=function(e){p((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(h.a)({},e.target.id,{id:performance.now(),string:e.target.value}))}))},S=function(e){u((function(t){var i=t.ProfSkills.filter((function(t){return t.id.toString()!==e.target.id})),n=t.SoftSkills.filter((function(t){return t.id.toString()!==e.target.id}));return Object(r.a)(Object(r.a)({},t),{},{ProfSkills:Object(C.a)(i),SoftSkills:Object(C.a)(n)})}))};return Object(j.jsxs)("div",{className:B.a.skill,children:[Object(j.jsxs)("form",{className:B.a.form,children:[Object(j.jsx)(x.a,{value:(null===g||void 0===g||null===(t=g.ProfSkills)||void 0===t?void 0:t.string)||"",onChange:v,id:"ProfSkills",label:"Professional skills"}),Object(j.jsx)(x.a,{value:(null===g||void 0===g||null===(i=g.SoftSkills)||void 0===i?void 0:i.string)||"",onChange:v,id:"SoftSkills",label:"Soft skill"}),Object(j.jsx)(f.a,{onClick:function(){u((function(e){var t,i;return Object(r.a)(Object(r.a)({},e),{},{ProfSkills:(null===(t=g.ProfSkills)||void 0===t?void 0:t.string)?[].concat(Object(C.a)(e.ProfSkills),[g.ProfSkills]):Object(C.a)(e.ProfSkills),SoftSkills:(null===(i=g.SoftSkills)||void 0===i?void 0:i.string)?[].concat(Object(C.a)(e.SoftSkills),[g.SoftSkills]):Object(C.a)(e.SoftSkills)})})),p({})},variant:"outlined",color:"primary",size:"small",startIcon:Object(j.jsx)(E.a,{}),children:"Add"})]}),Object(j.jsxs)("div",{className:B.a.rightSide,children:[Object(j.jsx)("h3",{children:"Professional Skills"}),Object(j.jsx)("ul",{children:d.ProfSkills.map((function(e){return Object(j.jsxs)("li",{children:[e.string,Object(j.jsx)("span",{id:e.id,onClick:S,children:"\u2718"})]},e.id)}))}),Object(j.jsx)("h3",{children:"Soft Skills"}),Object(j.jsx)("ul",{children:d.SoftSkills.map((function(e){return Object(j.jsxs)("li",{children:[e.string,Object(j.jsx)("span",{id:e.id,onClick:S,children:"\u2718"})]},e.id)}))}),Object(j.jsx)(f.a,{onClick:function(){a(d)},variant:"contained",color:"primary",size:"small",startIcon:Object(j.jsx)(m.a,{}),children:"Save"})]})]})},R=i(56),W=i.n(R);var U=function(e){var t=e.update,i=e.profile,a=Object(n.useState)({Languages:i.Languages instanceof Array?Object(C.a)(i.Languages):[]}),c=Object(l.a)(a,2),s=c[0],o=c[1],d=Object(n.useState)({}),u=Object(l.a)(d,2),b=u[0],O=u[1],h=Object(n.useState)(!1),g=Object(l.a)(h,2),p=g[0],v=g[1],S=function(e){o((function(t){var i=t.Languages.filter((function(t){return t.id.toString()!==e.target.id}));return Object(r.a)(Object(r.a)({},t),{},{Languages:Object(C.a)(i)})}))};return Object(j.jsxs)("div",{className:W.a.lang,children:[Object(j.jsxs)("form",{className:W.a.form,children:[Object(j.jsx)(x.a,{required:!0,error:p,value:b.Language||"",onChange:function(e){!e.target.value&&v(!0),O((function(t){return Object(r.a)(Object(r.a)({},t),{},{id:performance.now().toString(),Language:e.target.value})}))},id:"Languages",label:"Languages"}),Object(j.jsxs)("div",{className:W.a.select,children:[Object(j.jsx)(N.a,{required:!0,id:"demo-simple-select-label",children:"Level"}),Object(j.jsxs)(P.a,{value:b.Level||"",error:p,disabled:!b.Language,labelId:"demo-simple-select-label",id:"Level",onChange:function(e){O((function(t){return Object(r.a)(Object(r.a)({},t),{},{Level:e.target.value})})),v(!1)},children:[Object(j.jsx)(L.a,{value:"Beginner(A1)",children:"Beginner (A1)"}),Object(j.jsx)(L.a,{value:"Elementary(A2)",children:"Elementary (A2)"}),Object(j.jsx)(L.a,{value:"Intermediate(B1)",children:"Intermediate (B1)"}),Object(j.jsx)(L.a,{value:"UpperIntermediate(B2)",children:"Upper Intermediate (B2)"}),Object(j.jsx)(L.a,{value:"Advanced(C1)",children:"Advanced (C1)"}),Object(j.jsx)(L.a,{value:"Fluent(C2)",children:"Fluent (C2)"})]})]}),Object(j.jsx)(f.a,{variant:"outlined",color:"primary",size:"small",onClick:function(){""!==b.Language&&""!==b.Level&&b.Level?(o((function(e){return Object(r.a)(Object(r.a)({},e),{},{Languages:[].concat(Object(C.a)(e.Languages),[Object(r.a)({},b)])})})),O({})):v(!0)},startIcon:Object(j.jsx)(E.a,{}),children:"Add"})]}),Object(j.jsxs)("div",{className:W.a.rightSide,children:[Object(j.jsx)("h3",{children:"Languages"}),Object(j.jsx)("ul",{children:s.Languages.map((function(e){return Object(j.jsxs)("li",{children:[e.Language,": ",e.Level,Object(j.jsx)("span",{id:e.id,onClick:S,children:"\u2718"})]},e.id)}))}),Object(j.jsx)(f.a,{onClick:function(){t(s)},variant:"contained",color:"primary",size:"small",startIcon:Object(j.jsx)(m.a,{}),children:"Save"})]})]})},T=i(81),H=i.n(T),J=i(148),M=i(149),X=i(150),K=i(151),Y=i(152),Z=i(153),Q=i(18),$=i.n(Q);var ee=function(e){var t=e.profile,i=Object(n.createRef)(),a={filename:"CV_".concat(null===t||void 0===t?void 0:t.FullName,"_").concat(null===t||void 0===t?void 0:t.Date)},c=function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H()().from(i.current).set(a).save();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[t.FullName?Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h2",{children:"Preview:"}),Object(j.jsx)("section",{className:$.a.preview,children:Object(j.jsxs)("div",{ref:i,className:$.a.cv,children:[Object(j.jsxs)("header",{children:[t.img&&Object(j.jsx)("img",{alt:"user",className:$.a.img,src:null===t||void 0===t?void 0:t.img}),Object(j.jsxs)("div",{className:$.a.title,children:[Object(j.jsx)("h1",{children:t.FullName}),Object(j.jsx)("h2",{className:$.a.light,children:t.Position})]}),Object(j.jsxs)("div",{className:$.a.contacts,children:[Object(j.jsxs)("p",{children:[Object(j.jsx)(J.a,{}),t.Location]}),Object(j.jsxs)("p",{children:[Object(j.jsx)(M.a,{}),t.Phone]}),Object(j.jsxs)("p",{children:[Object(j.jsx)(X.a,{}),t.Email]}),t.Git&&Object(j.jsxs)("p",{children:[Object(j.jsx)(K.a,{}),t.Git]}),t.LinkedIn&&Object(j.jsxs)("p",{children:[Object(j.jsx)(Y.a,{}),t.LinkedIn]})]})]}),t.ProfSkills&&t.ProfSkills.length>0&&Object(j.jsxs)("div",{className:$.a.skill,children:[Object(j.jsx)("h2",{children:"Professional Skills:"}),Object(j.jsx)("ul",{children:t.ProfSkills.map((function(e){return Object(j.jsx)("li",{children:e.string},e.id)}))})]}),t.SoftSkills&&t.SoftSkills.length>0&&Object(j.jsxs)("div",{className:$.a.skill,children:[Object(j.jsx)("h2",{children:"Soft Skills:"}),Object(j.jsx)("ul",{children:t.SoftSkills.map((function(e){return Object(j.jsx)("li",{children:e.string},e.id)}))})]}),t.Experience&&t.Experience.length>0&&Object(j.jsxs)("div",{className:$.a.exp,children:[Object(j.jsx)("h2",{children:"Work Experience:"}),Object(j.jsx)("ul",{children:t.Experience.sort((function(e,t){return new Date(t.Start)-new Date(e.Start)})).map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:e.Position})," ",Object(j.jsxs)("h3",{className:$.a.light,children:[e.Start," - ",e.Finish]})]}),Object(j.jsx)("h3",{className:$.a.light,children:e.Company}),Object(j.jsx)("p",{children:e.Description})]},e.id)}))})]}),t.Education&&(null===t||void 0===t?void 0:t.Education.length)>0&&Object(j.jsxs)("div",{className:$.a.exp,children:[Object(j.jsx)("h2",{children:"Education:"}),Object(j.jsx)("ul",{children:t.Education.sort((function(e,t){return new Date(t.Admission)-new Date(e.Admission)})).map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h3",{children:e.Institute})," ",Object(j.jsxs)("h3",{className:$.a.light,children:[e.Admission," - ",e.Graduation]})]}),Object(j.jsx)("h3",{className:$.a.light,children:e.Degree}),Object(j.jsx)("p",{children:e.Speciality})]},e.id)}))})]}),t.Languages&&t.Languages.length>0&&Object(j.jsxs)("div",{className:$.a.skill,children:[Object(j.jsx)("h2",{children:"Languages:"}),Object(j.jsx)("ul",{children:t.Languages.map((function(e){return Object(j.jsxs)("li",{children:[e.Language," - ",e.Level]},e.id)}))})]}),Object(j.jsx)("footer",{children:Object(j.jsx)("h2",{children:t.Date})})]})})]}):Object(j.jsx)("h2",{children:"CV is not filled"}),Object(j.jsx)(f.a,{disabled:!t.FullName,variant:"contained",color:"primary",size:"small",onClick:c,startIcon:Object(j.jsx)(Z.a,{}),children:"Download"})]})},te=i(29),ie=i.n(te);var ne=function(){var e=Object(n.useState)({Date:(new Date).toLocaleDateString("en-US",{month:"long",year:"numeric"})}),t=Object(l.a)(e,2),i=t[0],a=t[1],c=0,u=function(){(c+=30)>=360&&(c=0),document.body.style.backgroundColor="hsl(".concat(c,",70%,60%)")},b=function(e){a((function(t){return Object(r.a)(Object(r.a)({},t),e)}))};return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("div",{className:ie.a.container,children:Object(j.jsxs)(s.a,{children:[Object(j.jsxs)("nav",{className:ie.a.nav,children:[Object(j.jsx)(s.b,{exact:!0,to:"/",onClick:u,activeClassName:ie.a.selected,children:"Start"}),Object(j.jsx)(s.b,{to:"/info",activeClassName:ie.a.selected,onClick:u,children:"User"}),Object(j.jsx)(s.b,{to:"/edu",activeClassName:ie.a.selected,onClick:u,children:"Education"}),Object(j.jsx)(s.b,{to:"/exp",activeClassName:ie.a.selected,onClick:u,children:"Experience"}),Object(j.jsx)(s.b,{to:"/skill",activeClassName:ie.a.selected,onClick:u,children:"Skills"}),Object(j.jsx)(s.b,{to:"/lang",activeClassName:ie.a.selected,onClick:u,children:"Languages"}),Object(j.jsx)(s.b,{to:"/end",activeClassName:ie.a.selected,onClick:u,children:"Finish"})]}),Object(j.jsx)("section",{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(d,{update:b,profile:i})}),Object(j.jsx)(o.a,{path:"/info",children:Object(j.jsx)(_,{update:b,profile:i})}),Object(j.jsx)(o.a,{path:"/edu",children:Object(j.jsx)(A,{update:b,profile:i})}),Object(j.jsx)(o.a,{path:"/exp",children:Object(j.jsx)(z,{update:b,profile:i})}),Object(j.jsx)(o.a,{path:"/skill",children:Object(j.jsx)(q,{update:b,profile:i})}),Object(j.jsx)(o.a,{path:"/lang",children:Object(j.jsx)(U,{update:b,profile:i})}),Object(j.jsx)(o.a,{path:"/end",children:Object(j.jsx)(ee,{profile:i})})]})})]})})})};c.a.render(Object(j.jsx)(ne,{}),document.getElementById("root"))},18:function(e,t,i){e.exports={preview:"Finish_preview__51RR7",cv:"Finish_cv__1LKLH",light:"Finish_light__lAsdG",title:"Finish_title__2g0kR",img:"Finish_img__RZogS",contacts:"Finish_contacts__WzgxB",skill:"Finish_skill__2llvx",exp:"Finish_exp__1-xna"}},29:function(e,t,i){e.exports={container:"App_container__nm3zV",nav:"App_nav__3SDJt",selected:"App_selected__1SAFn"}},55:function(e,t,i){e.exports={edu:"Education_edu__3gpQL",form:"Education_form__4xIT3",rightSide:"Education_rightSide__anA9a",select:"Education_select__1xwzM"}},56:function(e,t,i){e.exports={lang:"Languages_lang__XMk2S",form:"Languages_form__19bHA",rightSide:"Languages_rightSide__2s6VH",select:"Languages_select__3y9Uq"}},64:function(e,t,i){e.exports={form:"Info_form__HUUBX",full:"Info_full__7JTqG",exp:"Info_exp__1z457",img:"Info_img__12oWc"}},65:function(e,t,i){e.exports={exp:"Experience_exp__2O75i",form:"Experience_form__1NVSD",rightSide:"Experience_rightSide__6q3Vb",select:"Experience_select__2EyZo"}},66:function(e,t,i){e.exports={skill:"Skills_skill__35uHS",form:"Skills_form__hCaoK",rightSide:"Skills_rightSide__EXGgX",select:"Skills_select__vND55"}},98:function(e,t,i){}},[[112,1,2]]]);
//# sourceMappingURL=main.6f25ec9d.chunk.js.map