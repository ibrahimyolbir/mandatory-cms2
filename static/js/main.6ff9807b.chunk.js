(window.webpackJsonpshoppingapp=window.webpackJsonpshoppingapp||[]).push([[0],{104:function(e,t,a){e.exports=a(314)},109:function(e,t,a){},25:function(e,t,a){e.exports={modalHeader:"cart_modalHeader__rNDzK",closeButton:"cart_closeButton__2PALx",deleteItem:"cart_deleteItem__3zv1d",cartFooter:"cart_cartFooter__2nBJ0"}},27:function(e,t,a){e.exports={checkoutForm:"checkout_checkoutForm__snOt1",formStyle:"checkout_formStyle__10xy6",formButton:"checkout_formButton__lx_xZ"}},313:function(e,t,a){},314:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),l=a.n(r),o=(a(109),a(14)),m=a(18),i=a(4),s=a(17),u=a.n(s),d=a(98),p=a.n(d),E=a(39),_=a.n(E),f=(a(130),a(6)),h=a.n(f);var v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),m=Object(i.a)(l,2),s=m[0],d=m[1],E=Object(n.useState)([]),f=Object(i.a)(E,2),v=f[0],b=f[1],g=Object(n.useState)([]),N=Object(i.a)(g,2),O=(N[0],N[1],Object(n.useState)(0)),j=Object(i.a)(O,2),C=(j[0],j[1]),y=Object(n.useState)(1),S=Object(i.a)(y,2),k=S[0],I=S[1],w=Object(n.useState)(0),x=Object(i.a)(w,2),B=x[0],P=x[1];return Object(n.useEffect)((function(){var e=3*(k-1),t="http://localhost:8082/api/collections/get/products?sort[".concat(v,"]=1&filter[name][$regex]=").concat(s,"&limit=").concat(3,"&skip=").concat(e);u.a.get(t).then((function(e){P(e.data.total),r(e.data.entries),console.log(e.data.entries)})).catch((function(e){return console.log(e)}))}),[s,v,k]),Object(n.useEffect)((function(){I(1)}),[s]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:h.a.selectSort},c.a.createElement("span",null," About ",a.length," results "),c.a.createElement("div",{className:h.a.sortProduct},c.a.createElement("span",null," Sort By "),c.a.createElement("select",{onChange:function(e){return b(e.target.value)}},c.a.createElement("option",{value:"name"},"Name"),c.a.createElement("option",{value:"price"},"Price")))),c.a.createElement("div",{className:h.a.productsContent},c.a.createElement("div",{className:h.a.filtering},c.a.createElement("div",{className:h.a.search},c.a.createElement("input",{type:"text",className:"input",value:s,onChange:function(e){return d(e.target.value)},placeholder:"Search..."}))),c.a.createElement("div",{className:h.a.container},a.map((function(e){return c.a.createElement("div",{className:h.a.cardContent,key:e._id},c.a.createElement("div",{className:h.a.imgContent},c.a.createElement("img",{className:h.a.images,src:"http://localhost:8082/"+e.image.path,alt:e.name})),c.a.createElement("div",{className:h.a.colorTag},e.color.map((function(e){return c.a.createElement("div",{key:e,className:h.a.clrsDiv},c.a.createElement("img",{className:h.a.colors,style:{backgroundColor:e}}))}))),c.a.createElement("div",{className:h.a.productName},c.a.createElement(o.b,{className:h.a.name,to:"/productdetails/"+e._id},e.name)),c.a.createElement("div",{className:h.a.productDescription},c.a.createElement(_.a,{interactive:!1,total:5,rating:e.rating}),c.a.createElement("span",{className:h.a.price},"$",e.price,".00")),c.a.createElement("div",{className:h.a.deliveryInfo},c.a.createElement("span",null,"Free delivery"),c.a.createElement("span",null,"Free pickup")))})))),c.a.createElement(p.a,{totalRecords:B,pageLimit:2,pageNeighbours:2,setOffset:C,currentPage:k,setCurrentPage:I}))},b=new(a(321).a)(JSON.parse(window.localStorage.getItem("cart")||"[]"));function g(e){e?window.localStorage.setItem("cart",JSON.stringify(e)):window.localStorage.removeItem("cart"),b.next(e)}var N=a(58),O=a.n(N),j=a(24),C=a(25),y=a.n(C);var S=function(){var e=Object(n.useState)(b.value),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(j.b)((function(){return c.a.createElement(O.a,{isOpen:!0,style:{height:"fit-content;"}},c.a.createElement("div",{className:y.a.modalHeader},c.a.createElement("h3",null," ",c.a.createElement("i",{className:"fas fa-shopping-cart"})," Shopping Cart  "),"(",a.length," item in cart)",c.a.createElement("button",{className:y.a.closeButton,onClick:u},c.a.createElement("i",{className:"fas fa-times"}))),c.a.createElement("table",{className:"table"}),a.map((function(e){return console.log(e),c.a.createElement("div",{key:e._id},c.a.createElement("table",{className:"table"},c.a.createElement("tbody",{className:"item"},c.a.createElement("tr",null,c.a.createElement("td",{style:{width:"100px"}},c.a.createElement("img",{style:{width:"100%"},src:"http://localhost:8082/"+e.img.path,alt:e.name})),c.a.createElement("td",{style:{height:"auto",width:"56vh"},className:"item_description"},c.a.createElement("h5",null,e.name)),c.a.createElement("td",null,c.a.createElement("div",{className:"dropdown"},c.a.createElement("span",null,e.amount))),c.a.createElement("td",null,c.a.createElement("p",null,e.price)),c.a.createElement("td",null,c.a.createElement("p",null,e.price*e.amount)),c.a.createElement("td",{className:"delete_item"},c.a.createElement("button",{className:y.a.deleteItem,onClick:function(){return function(e){g(a.filter((function(t){return t!==e})))}(e)}},c.a.createElement("i",{className:"fas fa-trash-alt"})))))))})),c.a.createElement("div",{className:y.a.cartFooter},c.a.createElement("button",{onClick:u}," Cancel "),c.a.createElement(o.b,{to:"/checkout",onClick:u},"Checkout")))}),[a]),m=Object(i.a)(l,2),s=m[0],u=m[1];return Object(n.useEffect)((function(){var e=b.subscribe((function(e){r(e)}));return function(){e.unsubscribe()}}),[]),Object(n.useEffect)((function(){O.a.setAppElement("body")}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"shopping-cart",onClick:s},c.a.createElement("i",{className:"fas fa-shopping-cart"}),"Cart(",a.length,")"))},k=a(26),I=a(103);var w=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),s=m[0],d=m[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),_=E[0],f=E[1],h=e.product;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},c.a.createElement("input",{type:"number",title:s,onChange:function(e){return d(e.target.value)},min:"1",max:"5",value:s,required:!0}),c.a.createElement("input",{type:"text",onChange:function(e){return l(e.target.value)},value:r,required:!0}),c.a.createElement("textarea",{onChange:function(e){return f(e.target.value)},value:_,required:!0}),c.a.createElement("input",{type:"submit",onClick:function(){u.a.post("http://localhost:8082/api/collections/save/reviews",{data:{title:r,body:_,rating:s,product:{_id:h._id,link:"products",display:h.name}}}).then((function(e){}))},value:"Send"})))},x=a(101),B=a.n(x),P=a(317),D=a(318),q=a(322),F=a(319),A=a(320),W=a(5),T=a.n(W);var H=function(e){var t,a,r=Object(n.useState)(0),l=Object(i.a)(r,2),o=l[0],m=l[1],s=Object(n.useState)(b.value),d=Object(i.a)(s,2),p=d[0],E=d[1],f=Object(n.useState)(null),h=Object(i.a)(f,2),v=h[0],N=h[1],O=Object(n.useState)("1"),j=Object(i.a)(O,2),C=j[0],y=j[1],S=e.match.params.id;return Object(n.useEffect)((function(){var e=b.subscribe((function(e){E(e)}));return u.a.get("http://localhost:8082/api/collections/get/products/?filter[_id]=".concat(S)).then((function(e){N(e.data.entries[0]),console.log(e.data.entries)})).catch((function(e){return console.log(e)})),function(){e.unsubscribe()}}),[]),v?c.a.createElement("div",null,c.a.createElement("div",{className:T.a.container},c.a.createElement("div",{className:T.a.cardContent},c.a.createElement("div",{className:T.a.imgContent},c.a.createElement("img",{className:T.a.images,src:"http://localhost:8082/"+v.image.path,alt:v.name}),c.a.createElement("div",{className:T.a.imgGallery},v.gallery.map((function(e){return c.a.createElement("img",{key:e.meta.assets,className:T.a.images,src:"http://localhost:8082/"+e.path})})))),c.a.createElement("div",{className:T.a.productInfo},c.a.createElement("h2",{className:T.a.productName},v.name),c.a.createElement(_.a,{interactive:!1,total:5,rating:v.rating}),c.a.createElement("h2",{className:T.a.productPrice},"$",v.price,".00"),c.a.createElement("div",{className:T.a.productColors},v.color.map((function(e){return c.a.createElement("div",{key:e,className:T.a.clrsDiv},c.a.createElement("img",{className:T.a.colors,style:{backgroundColor:e}}))}))),c.a.createElement("div",{className:T.a.addItem},c.a.createElement("div",{className:T.a.quantity},c.a.createElement("input",{onChange:function(e){return m(parseInt(e.target.value))},placeholder:"0",type:"number",value:o,min:"1",max:"100"})),c.a.createElement("div",{className:T.a.addItemButton},c.a.createElement("button",{onClick:function(){var e=Object(I.a)(p),t=e.findIndex((function(e){return e._id===v._id}));-1!==t?e[t].amount=e[t].amount+o:e.push({_id:v._id,name:v.name,amount:o,price:v.price,img:v.image}),g(e),console.log(e)}},"Add to Cart"))))),c.a.createElement("div",{className:T.a.productBottomInfo},c.a.createElement(P.a,{tabs:!0},c.a.createElement(D.a,null,c.a.createElement(q.a,(t={className:T.a.tabsPointer},Object(k.a)(t,"className","1"==C?"active":""),Object(k.a)(t,"onClick",(function(){return y("1")})),t),"Description")),c.a.createElement(D.a,null,c.a.createElement(q.a,(a={className:T.a.tabsPointer},Object(k.a)(a,"className","2"==C?"active":""),Object(k.a)(a,"onClick",(function(){return y("2")})),a),"REVIEWS"))),c.a.createElement(F.a,{activeTab:C},c.a.createElement(A.a,{tabId:"1"}," ",c.a.createElement(B.a,{className:T.a.descriptionText,text:v.description})),c.a.createElement(A.a,{tabId:"2"},c.a.createElement("h1",null,"REVIEWS"),c.a.createElement(w,{product:v})))))):c.a.createElement("p",null,"Loading...")},J=a(27),G=a.n(J);var L=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),s=o[0],d=o[1],p=Object(n.useState)(!1),E=Object(i.a)(p,2),_=E[0],f=E[1],h=Object(n.useState)([]),v=Object(i.a)(h,2),g=v[0],N=v[1];return console.log(g),Object(n.useEffect)((function(){var e=b.subscribe(N);return function(){return e.unsubscribe()}}),[]),_?c.a.createElement(m.a,{to:"/done"}):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:G.a.checkoutForm},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();for(var t=0,n=0;n<b.value.length;n++){t+=parseInt(b.value.amount)*parseInt(b.value.price)}var c={name:a,address:s,total:t,order:g.map((function(e){return{value:{product:e.name,amount:e.amount}}}))};console.log(b),u.a.post("http://localhost:8082/api/collections/save/orders",{data:c}).then((function(e){console.log(c),f(!0)}))}},c.a.createElement("p",null,"Name"),c.a.createElement("input",{type:"text",required:!0,onChange:function(e){return r(e.target.value)},value:a,className:G.a.formStyle}),c.a.createElement("p",null,"Adress"),c.a.createElement("input",{type:"text",required:!0,onChange:function(e){return d(e.target.value)},value:s,className:G.a.formStyle}),c.a.createElement("input",{className:G.a.formButton,type:"submit",value:"Order"}))))};var R=function(){return c.a.createElement("div",null,c.a.createElement("p",null,"Your order is complete!"),c.a.createElement("p",null,"Thank you for order!"),c.a.createElement("button",null,c.a.createElement(o.b,{to:"/"},"Back")))};a(313);var V=function(){return c.a.createElement(o.a,null,c.a.createElement(j.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("h2",null,c.a.createElement("i",{className:"fab fa-apple"})," APPLE"),c.a.createElement(S,null),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"}," Home ")))),c.a.createElement(m.b,{exact:!0,path:"/",component:v}),c.a.createElement(m.b,{path:"/productdetails/:id",component:H}),c.a.createElement(m.b,{path:"/checkout",component:L}),c.a.createElement(m.b,{path:"/done",component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports={container:"productdetails_container__3XkBl",cardContent:"productdetails_cardContent__3Y4Ox",imgContent:"productdetails_imgContent__2ev5S",images:"productdetails_images__2IDcS",imgGallery:"productdetails_imgGallery__1bGlk",productInfo:"productdetails_productInfo__2Xzl1",productName:"productdetails_productName__3B29m",productRating:"productdetails_productRating__2ukwO",productPrice:"productdetails_productPrice__11CkN",productColors:"productdetails_productColors__1W9ct",colors:"productdetails_colors__2Goao",addItem:"productdetails_addItem__2avCr",quantity:"productdetails_quantity__1OPy9",addItemButton:"productdetails_addItemButton__ANbqc",productBottomInfo:"productdetails_productBottomInfo__svUT5",tabsPointer:"productdetails_tabsPointer__1ZOw-"}},6:function(e,t,a){e.exports={productsContent:"home_productsContent__yKanc",filtering:"home_filtering__DgtyB",selectSort:"home_selectSort__36OCL",sortProduct:"home_sortProduct__1oua_",search:"home_search__3qIpf",container:"home_container__CWhJn",cardContent:"home_cardContent__2P76V",imgContent:"home_imgContent__14lzE",colorTag:"home_colorTag__lWYs0",clrsDiv:"home_clrsDiv__1lsQ1",colors:"home_colors__uvIEH",images:"home_images__8bh1O",productName:"home_productName__3n-Wv",name:"home_name__3-o5C",productDescription:"home_productDescription__3eb5t",price:"home_price__1Bwh4",deliveryInfo:"home_deliveryInfo__WAVCV",pagination:"home_pagination__2E1Y1",active:"home_active__3xHoq"}}},[[104,1,2]]]);
//# sourceMappingURL=main.6ff9807b.chunk.js.map