(this.webpackJsonpvhwoodworking=this.webpackJsonpvhwoodworking||[]).push([[0],{100:function(A,e,t){},101:function(A,e,t){},102:function(A,e,t){},103:function(A,e,t){},106:function(A,e,t){"use strict";t.r(e);var c=t(1),n=t(0),a=t.n(n),s=t(22),r=t.n(s),o=(t(63),t(64),t(8)),i=t(49),j=t(50),l=t(56),d=t(55),u=(t(65),t(66),t(7)),b=(t(67),t(12)),m=t.n(b),O="https://vhwoodworking-server.herokuapp.com",p=function(){localStorage.removeItem("currentUser")},g=function(){return JSON.parse(localStorage.getItem("currentUser"))},h=t(9),x=t(111),f=t(112),v=t(113),N=(t(86),t(87),function(A){var e=g(),t="".concat(O,"/products"),a=Object(n.useState)([]),s=Object(u.a)(a,2),r=s[0],o=s[1];Object(n.useEffect)((function(){m.a.get(t).then((function(A){return o(A.data)}))}),[]),console.log(r);var i=r.map((function(e){return"Door"===e.productName||"Counter Top"===e.productName?Object(c.jsxs)("div",{className:"list-container",children:[Object(c.jsx)(h.b,{to:"/product/".concat(e.productName),onClick:function(){return A.isShow(!1)},className:"product-h1-a",children:e.productName}),e.products.map((function(t){return Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:"/product/".concat(e.productName,"/").concat(t.name),onClick:function(){return A.isShow(!1)},className:"product-li",children:t.name})})})}))]}):Object(c.jsx)("div",{className:"list-container",children:e.products.map((function(t){return Object(c.jsx)(h.b,{to:"/product/".concat(e.productName,"/").concat(t.name),onClick:function(){return A.isShow(!1)},className:"product-h1",children:e.productName})}))})}));return Object(c.jsxs)("div",{className:"product-list",onMouseEnter:function(){return A.isShow(!0)},onMouseLeave:function(){return A.isShow(!1)},children:[e&&"admin"===e.role?Object(c.jsx)(h.b,{to:"/addform",className:"product-h1",children:"Add Product"}):"",i]})}),w=function(A){return Object(c.jsx)("div",{className:"products-container",children:Object(c.jsx)(N,{isShow:A.isShow})})},B=function(){var A=g(),e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],s=t[1],r="".concat(O,"/products"),o=Object(n.useState)([]),i=Object(u.a)(o,2),j=i[0],l=i[1],d=Object(n.useState)(void 0),b=Object(u.a)(d,2),N=b[0],B=b[1];Object(n.useEffect)((function(){m.a.get(r).then((function(A){return l(A.data)}));var A=function(){B(window.innerWidth)};return window.addEventListener("resize",A),console.log(""),A(),function(){return window.removeEventListener("resize",B(window.innerWidth))}}),[]);var Q=j.map((function(A){return"Door"===A.productName||"Counter Top"===A.productName?Object(c.jsxs)("div",{className:"list-container",children:[Object(c.jsx)(x.a.Item,{href:"/product/".concat(A.productName),className:"product-h1-a",children:A.productName}),Object(c.jsx)(x.a.Divider,{}),A.products.map((function(e){return Object(c.jsx)(x.a.Item,{href:"/product/".concat(A.productName,"/").concat(e.name),className:"product-li",children:e.name})})),Object(c.jsx)("br",{})]}):Object(c.jsx)("div",{className:"list-container",children:A.products.map((function(e){return Object(c.jsx)(x.a.Item,{href:"/product/".concat(A.productName,"/").concat(e.name),className:"product-h1",children:A.productName})}))})})),C=null!==A?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h3",{className:"a1",children:["Hello ",A.name]}),Object(c.jsx)(h.b,{to:"/signin",onClick:p,children:Object(c.jsx)("img",{src:"data:image/png;base64,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",className:"logout",alt:"Logout"})})]}):Object(c.jsx)(h.b,{to:"/signin",className:"a1",children:"Sign In"});return Object(c.jsxs)("div",{children:[Object(c.jsxs)(f.a,{collapseOnSelect:!0,expand:"lg",fixed:"top",style:{backgroundColor:"#2C1405"},variant:"dark",children:[Object(c.jsx)(f.a.Brand,{href:"/",children:"Logo"}),Object(c.jsx)(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsxs)(f.a.Collapse,{id:"responsive-navbar-nav",children:[Object(c.jsxs)(v.a,{className:"mr-auto",children:[Object(c.jsx)(v.a.Link,{href:"/",children:"Home"}),Object(c.jsx)(v.a.Link,{href:"/about",children:"About Us"}),window.innerWidth>992?Object(c.jsx)(v.a.Link,{href:"#",onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:"Products"}):Object(c.jsx)(x.a,{title:"Products",id:"responsive-navbar-nav",style:{backgroundColor:"#2C1405"},children:Q}),Object(c.jsx)(v.a.Link,{href:"/contact",children:"Contact Us"})]}),Object(c.jsxs)(v.a,{children:[C,Object(c.jsx)("h1",{className:"a1",children:N})]})]})]}),a?Object(c.jsx)(w,{isShow:s}):null]})},Q=function(){return Object(c.jsx)("div",{className:"nav-container",children:Object(c.jsx)(B,{})})},C=(t(96),function(){return Object(c.jsxs)(f.a,{className:"footer",style:{backgroundColor:"#2C1405"},variant:"dark",children:[Object(c.jsx)(f.a.Brand,{href:"#",children:Object(c.jsx)("img",{src:"data:image/png;base64,UklGRqIBAABXRUJQVlA4TJYBAAAvP8APEE/CKJLkNq0EQF/xEn8Yzl4aDNq2EeTegXj+PE8fxm0bOeKm/ou9XxTrSJKV8Ny+yJt8SIFI3OXh3AYSYhs+4QuAju/6AQAvgA8AQPjw4AZwIzIYBgOKgHAwKLSA8LKhQk8x7Awu0tGpuxixzC9p/E6mktaiYkbr+2A2XW2I/P9Vzl9aVGz/pOcLuXP7TzQ63ntzbKAyoCBMw5WxvwozFdq8O7vfFoBu27ayZFMHrk132Z1019Xr+z+SfJfh2bZ/Ivo/AQDQqiaNqDfJ6h3WOiu01gFwCyGeO8AKtUVLyFtVtlqSLWUUxffT8+RefBMjWjPHDxG8jb22H88OPLROn0Lwz2o7iWFTbRfYXNkLyCYxtluQZUJsR2C79+ud1iv5fD6/o2gr6nW+LfpX8O0mhDDrVRLGnE9ol6LiMxC2zo/ashl46TNsBhcUNPC+13SHdEW6MVvYsPWF7Ybuiu5ZQ3kUOPCJjgJnGjwrPh2h/Adl2EySLVVlq7XY7mC5LOAWTHMHwFke67C2VUsZfSZVuwMA",width:"30px",height:"30px",alt:"fblogo"})}),Object(c.jsx)(f.a.Brand,{href:"#",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",width:"30px",height:"30px",alt:"iglogo"})})]})}),D=(t(97),function(A){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(!1),o=Object(u.a)(r,2),i=o[0],j=o[1],l=function(){s((a+1)%A.images.length)},d=function(e){s(e%A.images.length),j(!i)};return Object(n.useEffect)((function(){var A=setInterval(l,5e3);return function(){return clearInterval(A)}}),[a]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"slider",children:[Object(c.jsx)("img",{className:"slideImg",src:A.images[a].img,alt:a}),Object(c.jsx)("a",{className:"prev",onClick:function(){var e=a-1;s(e<0?A.images.length-1:e)},children:"\u276e"}),Object(c.jsx)("a",{className:"next",onClick:l,children:"\u276f"})]}),Object(c.jsxs)("div",{style:{textAlign:"center"},children:[Object(c.jsx)("span",{className:i?"dotActive":"dot",onClick:function(){return d(0)}}),Object(c.jsx)("span",{className:i?"dotActive":"dot",onClick:function(){return d(1)}}),Object(c.jsx)("span",{className:i?"dotActive":"dot",onClick:function(){return d(2)}})]})]})}),k=t.p+"static/media/1.8673ff08.JPG",I=t.p+"static/media/2.c1a84831.JPG",G=t.p+"static/media/3.cd560e3b.jpg",E=t.p+"static/media/dcmm-01.66a4d68a.png",U=(t(98),function(){var A=Object(n.useState)([]),e=Object(u.a)(A,2),t=e[0],a=e[1],s=Object(n.useState)(""),r=Object(u.a)(s,2),o=r[0],i=r[1],j=Object(n.useState)(!1),l=Object(u.a)(j,2),d=l[0],b=l[1],p=g();Object(n.useEffect)((function(){m.a.get(O+"/auth/comment").then((function(A){return a(A.data)}))}),[d]);var h=t.map((function(A){return Object(c.jsx)("div",{className:"card text-white bg-dark",style:{width:"50vw"},children:Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(c.jsxs)("p",{children:[A.text,"."]}),Object(c.jsxs)("footer",{className:"blockquote-footer",children:["Posted on ",A.date," by ",Object(c.jsx)("cite",{title:"Source Title",children:A.user.name})]})]})})})}));return Object(c.jsxs)("div",{className:"comment-container",children:[h,null!==p?Object(c.jsxs)("form",{onSubmit:function(A){var e;A.preventDefault(),e={text:o,userId:p.id},m.a.post(O+"/auth/comment",e).then((function(A){return console.log})).catch((function(A){return console.log(A)})),b(!d)},children:[Object(c.jsx)("textarea",{placeholder:"Leave comment here",className:"text-area",value:o,onChange:function(A){i(A.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Add"})]}):""]})}),W=function(A){Object(l.a)(t,A);var e=Object(d.a)(t);function t(){var A;Object(i.a)(this,t);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(A=e.call.apply(e,[this].concat(n))).state={images:[{img:k,num:1},{img:I,num:2},{img:G,num:3}]},A}return Object(j.a)(t,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"page-container",children:[Object(c.jsxs)("div",{className:"home-container",children:[Object(c.jsx)(Q,{}),Object(c.jsx)("div",{className:"home-upper",children:Object(c.jsx)("img",{className:"VH",src:E,alt:"VH"})}),Object(c.jsx)("div",{className:"home-lower",children:Object(c.jsx)(D,{images:this.state.images})})]}),Object(c.jsx)(U,{}),Object(c.jsx)(C,{})]})}}]),t}(a.a.Component),L=(t(99),t.p+"static/media/123-01.c8ebf788.png"),y=function(){return Object(c.jsxs)("div",{className:"about1",children:[Object(c.jsx)(Q,{}),Object(c.jsxs)("div",{className:"about-container",children:[Object(c.jsxs)("div",{className:"about-1",children:[Object(c.jsx)("div",{className:"container1",children:Object(c.jsx)("div",{className:"block1"})}),Object(c.jsxs)("div",{className:"container2",children:[Object(c.jsx)("h1",{children:"About Us"}),Object(c.jsx)("p",{children:"VH Specialized Woodworking has been in business since 2008"}),Object(c.jsx)("p",{children:"We specialized in designing and building displays, kiosks, kitchen cabinets, vanities, countertops, reception desks, benches, counters and cabinets for medical units, churches, restaurants, cemeteries, and properties management housing in Ontario"})]})]}),Object(c.jsxs)("div",{className:"about-2",children:[Object(c.jsx)("div",{className:"block2"}),Object(c.jsx)("img",{className:"image2",src:L,alt:"SmallVHLogo"})]}),Object(c.jsxs)("div",{className:"about-3",children:[Object(c.jsx)("p",{children:"We create design, delivery and installation. Our client is provided with computer generated floor plans and 3D drawings."}),Object(c.jsx)("p",{children:"We also have wide selections of all colors, patterns and textures. We offer competitive pricing, greate customer service and treated our clients with professionalism and care. Our clients have expressed their satisfaction with the quality of our products can craftmanship."})]})]}),Object(c.jsx)(C,{})]})},V=(t(100),t.p+"static/media/500x450-01.2ed444bb.png"),q=function(){return Object(c.jsxs)("div",{className:"contact-1",children:[Object(c.jsx)(Q,{}),Object(c.jsxs)("div",{className:"contact-container",children:[Object(c.jsxs)("div",{className:"contact1",children:[Object(c.jsx)("h1",{className:"contact-h1",children:"Contact Us"}),Object(c.jsxs)("ul",{className:"contact-list",children:[Object(c.jsx)("li",{children:"Unit 1, 1145 Bellamy Rd North, Scarborough, Ontario, M1H 1H5"}),Object(c.jsx)("li",{children:"Office #: (416) 238-4458"}),Object(c.jsx)("li",{children:"Cell #: (416) 809-2981"}),Object(c.jsx)("li",{children:"E-mail: vhwoodworking@gmail.com"}),Object(c.jsx)("li",{children:"Website: www.vhwoodworking.com"})]})]}),Object(c.jsx)("div",{className:"contact2",children:Object(c.jsx)("img",{className:"contact2-img",src:V,alt:"contactImg"})}),Object(c.jsx)("div",{className:"contact3",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:"VH"})})]}),Object(c.jsx)(C,{})]})},S=(t(101),t.p+"static/media/background-01.10be2190.png"),M=(t(102),function(A){var e,t=A.name.split(" ").join("%20"),a=A.productName.split(" ").join("%20"),s="".concat(O,"/product/").concat(a,"/").concat(t),r=Object(n.useState)(),o=Object(u.a)(r,2),i=o[0],j=o[1];return Object(n.useEffect)((function(){console.log("Get called with",s),m.a.get(s).then((function(A){return j(A.data)}))}),[s]),console.log(s),console.log(i),i&&(e=i.productType.map((function(e){return Object(c.jsxs)("div",{className:"p-container",children:[Object(c.jsx)("h2",{className:"product-h2",children:e.typeName}),e.typeImage.map((function(e){return Object(c.jsxs)("div",{className:"p1-container",children:[Object(c.jsx)("img",{className:"".concat("Solid Wood"===A.name?"p2-container":"product-img"),src:e.img,alt:e.alt}),Object(c.jsx)("h5",{children:e.kind}),Object(c.jsx)("h4",{children:e.alt})]})}))]})}))),Object(c.jsx)("div",{className:"product-container",children:e})}),z=function(A){var e=A.match.params,t="Counter Top"===e.productName?{backgroundColor:"rgb(249, 166, 2)"}:{backgroundImage:"url(".concat(S,")")};return Object(c.jsxs)("div",{className:"productpage-container",style:t,children:[Object(c.jsx)(Q,{}),Object(c.jsx)("div",{className:"product-name",children:Object(c.jsx)("h2",{className:"productname",children:"Door"===e.productName||"Counter Top"===e.productName?e.name:e.productName})}),Object(c.jsxs)("div",{children:[Object(c.jsx)(h.b,{className:"product-link",to:"/",children:"Home"}),"|",Object(c.jsx)(h.b,{className:"product-link",href:"#",children:"Products"}),"|",Object(c.jsx)(h.b,{className:"product-link",to:"/product/".concat(e.productName),children:e.productName}),"|",Object(c.jsx)(h.b,{className:"product-link",to:"/product/".concat(e.productName,"/").concat(e.name),children:e.name})]}),Object(c.jsx)(M,{productName:e.productName,name:e.name,check:!!e.productName}),Object(c.jsx)(C,{})]})},H=t(20),F=t(17),J=t(54),P=t.n(J),R=function(){var A=Object(n.useState)([{}]),e=Object(u.a)(A,2),t=e[0],a=e[1],s=Object(n.useState)({productName:"",name:"",typeName:"",img:"",alt:"",kind:""}),r=Object(u.a)(s,2),o=r[0],i=r[1];Object(n.useEffect)((function(){m.a.get(O+"/products").then((function(A){return a(A.data)}))}),[o]),console.log(t);var j=function(A){i(Object(F.a)(Object(F.a)({},o),{},Object(H.a)({},A.target.name,A.target.value)))},l=t.map((function(A){return Object(c.jsx)("option",{value:A.productName,children:A.productName},A._id)})),d=t.filter((function(A){return A.productName===o.productName})).map((function(A){return A.products.map((function(A){return Object(c.jsx)("option",{value:A.name,children:A.name},A._id)}))}));return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(A){A.preventDefault(),function(A){var e="".concat(O,"/product/").concat(o.productName,"/").concat(o.name);console.log(e),m.a.post(e,A).then((function(A){return console.log(A)})).catch((function(A){return console.log(A)}))}(o)},children:[Object(c.jsx)("h1",{children:"Add new Product"}),Object(c.jsxs)("label",{children:["Product Name:",Object(c.jsx)("select",{name:"productName",onChange:j,value:o.productName,children:l})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Name:",Object(c.jsxs)("select",{name:"name",onChange:j,value:o.name,children:[d,Object(c.jsx)("option",{})]})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Type Name:",Object(c.jsx)("input",{type:"text",name:"typeName",value:o.typeName,onChange:j})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Image Name:",Object(c.jsx)("input",{type:"text",name:"alt",value:o.alt,onChange:j})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Kind:",Object(c.jsx)("input",{type:"text",name:"kind",value:o.kind,onChange:j})]}),Object(c.jsx)("div",{className:"file-input",children:Object(c.jsx)(P.a,{type:"file",multiple:!1,onDone:function(A){var e=A.base64;return i(Object(F.a)(Object(F.a)({},o),{},{img:e}))}})}),Object(c.jsx)("button",{type:"submit",children:"Add"})]})})},X=function(){var A=Object(n.useState)({name:"",password:""}),e=Object(u.a)(A,2),t=e[0],a=e[1],s=Object(n.useState)(""),r=Object(u.a)(s,2),o=r[0],i=r[1],j=Object(n.useState)(!1),l=Object(u.a)(j,2),d=l[0],b=l[1],p=function(A){a(Object(F.a)(Object(F.a)({},t),{},Object(H.a)({},A.target.name,A.target.value)))};return Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsx)("div",{className:"card card-container",children:Object(c.jsxs)("form",{onSubmit:function(A){var e;A.preventDefault(),(e=t,m.a.post(O+"/auth/signup",e,{headers:{"Content-Type":"application/json"}})).then((function(A){i(A.data.message),b(!0)}),(function(A){i(A.response.data.errors),b(!1)}))},children:[Object(c.jsx)("h1",{children:"Sign Up"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Name:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"name",value:t.name,onChange:p,required:!0})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Password:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"password",name:"password",value:t.password,onChange:p,required:!0})]}),o&&Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("div",{className:d?"alert alert-success":"alert alert-danger",role:"alert",children:o})}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",children:"Sign Up"}),Object(c.jsx)("br",{}),Object(c.jsx)(h.b,{to:"/signin",children:"Click here to Sign In"})]})})})},K=(t(103),function(A){var e=Object(o.f)(),t=Object(n.useState)({name:"",password:""}),a=Object(u.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)(""),j=Object(u.a)(i,2),l=j[0],d=j[1],b=function(A){r(Object(F.a)(Object(F.a)({},s),{},Object(H.a)({},A.target.name,A.target.value)))};return Object(c.jsx)("div",{className:"col-md-12",children:Object(c.jsx)("div",{className:"card card-container",children:Object(c.jsxs)("form",{onSubmit:function(A){var t,c;A.preventDefault(),(t=s.name,c=s.password,m.a.post(O+"/auth/signin",{name:t,password:c}).then((function(A){return A.data.token&&localStorage.setItem("currentUser",JSON.stringify(A.data)),A.data}))).then((function(){e.push("/"),window.location.reload()}),(function(A){var e=A.response.data.errors;d(e)}))},children:[Object(c.jsx)("h1",{children:"Sign In"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Name:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"name",value:s.name,onChange:b,required:!0})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Password:"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"password",name:"password",value:s.password,onChange:b,required:!0})]}),l&&Object(c.jsx)("div",{className:"alert alert-danger",children:l}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",children:"Sign In"})]})})})});var T=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/",component:W,exact:!0}),Object(c.jsx)(o.a,{path:"/about",component:y,exact:!0}),Object(c.jsx)(o.a,{path:"/contact",component:q,exact:!0}),Object(c.jsx)(o.a,{path:"/product/:productName/:name",component:z,exact:!0}),Object(c.jsx)(o.a,{path:"/addform",component:R,exact:!0}),Object(c.jsx)(o.a,{path:"/signup",component:X}),Object(c.jsx)(o.a,{path:"/signin",component:K}),Object(c.jsx)(o.a,{path:"/comment",component:U}),Object(c.jsx)(o.a,{render:function(){return Object(c.jsx)("h1",{children:"404 Error"})}})]})})},Z=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,114)).then((function(e){var t=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,s=e.getTTFB;t(A),c(A),n(A),a(A),s(A)}))};t(104),t(105);r.a.render(Object(c.jsx)(h.a,{basename:"",children:Object(c.jsx)(T,{})}),document.getElementById("root")),Z()},63:function(A,e,t){},64:function(A,e,t){},65:function(A,e,t){},66:function(A,e,t){},67:function(A,e,t){},86:function(A,e,t){},87:function(A,e,t){},96:function(A,e,t){},97:function(A,e,t){},98:function(A,e,t){},99:function(A,e,t){}},[[106,1,2]]]);
//# sourceMappingURL=main.7f028ad9.chunk.js.map