(this["webpackJsonpclone-netflix"]=this["webpackJsonpclone-netflix"]||[]).push([[0],[,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(1),i=t.n(s),c=t(5),n=t.n(c),o=(t(10),t(4),t(2)),l=(t(11),t(0));function r(e){return Object(l.jsx)("div",{className:"btn-slide",children:Object(l.jsx)("button",{className:e.direction,onClick:e.slide,children:"left"===e.direction?Object(l.jsx)("i",{className:"fas fa-chevron-left"}):Object(l.jsx)("i",{className:"fas fa-chevron-right"})})})}var A=[{img:t.p+"static/media/list-item-1.9f3a1f9c.jpg",reco:"Recommand\xe9 \xe0 98%",ageMax:"16+",duration:"saison 4",category:["Insolite","R\xe9aliste","Drame"]},{img:t.p+"static/media/list-item-2.fe000e52.jpg",reco:"Recommand\xe9 \xe0 92%",ageMax:"16+",duration:"saison 4",category:["Suspense","Palpitant","Thriller"]},{img:t.p+"static/media/list-item-3.b5e9b276.jpg",reco:"Recommand\xe9 \xe0 84%",ageMax:"18+",duration:"saison 10",category:["Dystopique","Gore","Effrayant"]},{img:t.p+"static/media/list-item-4.3a4c4b98.jpg",reco:"Recommand\xe9 \xe0 90%",ageMax:"16+",duration:"saison 5",category:["Violent","Film d'\xe9poque","Drame"]},{img:t.p+"static/media/list-item-5.b7741836.jpg",reco:"Recommand\xe9 \xe0 96%",ageMax:"18+",duration:"saison 3",category:["Sombre","Violent","Drame"]},{img:t.p+"static/media/list-item-6.9e39b1ba.jpg",reco:"Recommand\xe9 \xe0 85%",ageMax:"16+",duration:"mini-s\xe9rie",category:["Psychologique","Intime","Emotion"]},{img:t.p+"static/media/list-item-7.64337f50.jpg",reco:"Recommand\xe9 \xe0 98%",ageMax:"16+",duration:"saison 5",category:["Violent","Sombre","Suspense"]},{img:t.p+"static/media/list-item-8.f4793a73.jpg",reco:"Recommand\xe9 \xe0 85%",ageMax:"13+",duration:"1 h 54",category:["Com\xe9die dramatique","Stoners","Guerre"]},{img:t.p+"static/media/list-item-9.cc773bc4.jpg",reco:"Recommand\xe9 \xe0 98%",ageMax:"16+",duration:"saison 6",category:["Violent","Palpitant"]},{img:t.p+"static/media/list-item-10.0b4a8a90.jpg",reco:"Recommand\xe9 \xe0 88%",ageMax:"16+",duration:"2 h 10",category:["Mont\xe9e d'adr\xe9naline","Explosif","Insolite"]},{img:t.p+"static/media/list-item-11.85d79a21.jpg",reco:"Recommand\xe9 \xe0 85%",ageMax:"16+",duration:"1 h 50",category:["Vibrant","Hip-hop","Musique"]},{img:t.p+"static/media/list-item-12.292db9d9.jpg",reco:"Recommand\xe9 \xe0 84%",ageMax:"16+",duration:"1 h 56",category:["Gore","\xc9pop\xe9e","Action et aventure"]}];function d(){var e=Object(s.useRef)(),a=Object(s.useState)(1),t=Object(o.a)(a,2),i=t[0],c=t[1];return Object(l.jsxs)("div",{className:"container-list",children:[Object(l.jsxs)("h2",{children:["Ma liste",Object(l.jsx)("span",{children:"Tout explorer"}),Object(l.jsx)("span",{children:Object(l.jsx)("i",{className:"fas fa-angle-right"})})]}),2===i?Object(l.jsx)(r,{slide:function(){i>1&&(console.log("left"),c(1),e.current.classList.add("prev"),e.current.classList.remove("next"))},direction:"left"}):Object(l.jsx)(r,{slide:function(){i<2&&(console.log("right"),c(2),e.current.classList.add("next"),e.current.classList.remove("prev"))},direction:"right"}),Object(l.jsx)("div",{className:"list",ref:e,children:A.map((function(e,a){return Object(l.jsxs)("div",{className:"items",children:[Object(l.jsx)("img",{src:e.img,className:"item-img"}),Object(l.jsxs)("div",{className:"items-info",children:[Object(l.jsxs)("div",{className:"item item-buttons",children:[Object(l.jsx)("button",{children:Object(l.jsx)("i",{className:"fas fa-play"})}),Object(l.jsx)("button",{children:Object(l.jsx)("i",{className:"fas fa-check"})}),Object(l.jsx)("button",{children:Object(l.jsx)("i",{className:"far fa-thumbs-up"})}),Object(l.jsx)("button",{children:Object(l.jsx)("i",{className:"far fa-thumbs-down"})}),Object(l.jsx)("button",{children:Object(l.jsx)("i",{className:"fas fa-angle-down"})})]}),Object(l.jsxs)("div",{className:"item item-season",children:[Object(l.jsx)("span",{className:"recomandation",children:e.reco}),Object(l.jsx)("span",{className:"age-limit",children:e.ageMax}),Object(l.jsx)("span",{className:"duration",children:e.duration}),Object(l.jsx)("span",{className:"definition",children:"HD"})]}),Object(l.jsxs)("div",{className:"item item-category",children:[e.category[0]," ",Object(l.jsx)("i",{class:"fas fa-circle"})," ",e.category[1],e.category[2]&&Object(l.jsx)("i",{className:"fas fa-circle"}),e.category[2]&&e.category[2]]})]})]},a)}))})]})}t(13);var j=t.p+"static/media/netflix-big.5787551b.svg",m=t.p+"static/media/top10.e29f652a.jpg";function g(){var e=Object(s.useState)(!1),a=Object(o.a)(e,2),t=a[0],i=a[1],c=Object(s.useState)([{description:"Top 10 d'aujourd'hui :France",name:"regarder tous les titres",date:"Il y a un jour",img:m},{description:"Reprenez la lecture",name:"Peaky Blinders",date:"Il y a deux jours",img:"data:image/jpeg;base64,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"},{description:"Nouveaut\xe9",name:"Vikings Saison 6",date:"Il y a un mois",img:"data:image/jpeg;base64,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"}]),n=Object(o.a)(c,2),r=n[0],A=(n[1],Object(s.useRef)());return Object(s.useEffect)((function(){window.addEventListener("click",(function(e){e.path[1].classList.contains("form")||i(!1)}))}),[]),Object(s.useEffect)((function(){t?A.current.classList.add("active-input"):A.current.classList.remove("active-input")}),[t]),Object(l.jsxs)("nav",{children:[Object(l.jsxs)("div",{className:"categories",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("img",{src:j,alt:"logo-netflix"})}),Object(l.jsx)("a",{href:"#!",children:"Accueil"}),Object(l.jsx)("a",{href:"#!",children:"S\xe9ries"}),Object(l.jsx)("a",{href:"#!",children:"Films"}),Object(l.jsx)("a",{href:"#!",children:"Nouveaut\xe9s les plus regard\xe9es"}),Object(l.jsx)("a",{href:"#!",children:"Ma liste"})]}),Object(l.jsxs)("div",{className:"options",children:[Object(l.jsxs)("form",{className:"form",ref:A,children:[Object(l.jsx)("label",{className:"form",htmlFor:"search",onClick:function(){i(!t)},children:Object(l.jsx)("i",{className:"fas fa-search"})}),Object(l.jsx)("input",{className:"form",type:"text",id:"search",placeholder:"Titres, personnes, genres"})]}),Object(l.jsx)("a",{href:"#!",children:"DIRECT"}),Object(l.jsx)("a",{href:"#!",children:"JEUNESSE"}),Object(l.jsxs)("div",{className:"notification",children:[Object(l.jsx)("i",{className:"fas fa-bell"}),Object(l.jsxs)("div",{className:"notif-active",children:[Object(l.jsx)("i",{className:"fas fa-sort-up"}),Object(l.jsx)("ul",{children:r.map((function(e,a){return Object(l.jsxs)("li",{children:[Object(l.jsx)("img",{src:e.img,alt:"logo de la s\xe9rie"}),Object(l.jsxs)("div",{className:"description",children:[Object(l.jsx)("span",{children:e.description}),Object(l.jsx)("span",{children:e.name}),Object(l.jsx)("span",{className:"time",children:e.date})]})]},a)}))})]})]}),Object(l.jsxs)("div",{className:"profil",children:[Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"photo de profil"}),Object(l.jsx)("i",{className:"fas fa-sort-down"}),Object(l.jsxs)("div",{className:"menu-profil",children:[Object(l.jsxs)("div",{className:"accounts",children:[Object(l.jsxs)("a",{href:"#!",children:[Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"image profil"})," Jeunesse"]}),Object(l.jsx)("a",{href:"#!",children:"G\xe9rer les profils"})]}),Object(l.jsxs)("div",{className:"settings",children:[Object(l.jsx)("a",{href:"#!",children:"Compte"}),Object(l.jsx)("a",{href:"#!",children:"Centre d'aide"}),Object(l.jsx)("a",{href:"#!",children:"Se d\xe9connecter"})]})]})]})]})]})}t(14);var b=[{img:t.p+"static/media/only1.0cfc44ea.WEBP",title:"Black-Mirror",reco:"Recommand\xe9 \xe0 89%",ageMax:"16+",duration:"5 saisons",category:["Hallucinant","Dystopique","Sombre"]},{img:t.p+"static/media/only2.7cbd7b37.WEBP",title:"The Highwaymen",reco:"Recommand\xe9 \xe0 79%",ageMax:"16+",duration:"2 h 12",category:["Sombre","Suspense","Inspir\xe9 de crimes r\xe9els"]},{img:t.p+"static/media/only3.fe438281.WEBP",title:"Narcos",reco:"Recommand\xe9 \xe0 98%",ageMax:"16+",duration:"3 saisons",category:["Sombre","Suspense","Palpitant"]},{img:t.p+"static/media/only4.8a144ba9.WEBP",title:"Ozark",reco:"Recommand\xe9 \xe0 96%",ageMax:"18+",duration:"3 saisons",category:["Sombre","Violent","Drame"]},{img:t.p+"static/media/only5.9ccf1c6a.WEBP",title:"Lupin",reco:"Recommand\xe9 \xe0 98%",ageMax:"13+",duration:"2 parties",category:["Palpitant","S\xe9rie d'intrigue","Action"]},{img:t.p+"static/media/only6.760e2d9d.WEBP",title:"Dardevil",reco:"Recommand\xe9 \xe0 96%",ageMax:"18+",duration:"3 saisons ",category:["Sombre","Palpitant","Super-h\xe9ros"]},{img:t.p+"static/media/only7.b753807b.WEBP",title:"Mind Hunter",reco:"Recommand\xe9 \xe0 95%",ageMax:"16+",duration:"2 saisons",category:["Suspense insoutenable","Psychologique","Effrayant"]},{img:t.p+"static/media/only8.38ba1d14.WEBP",title:"6 Underground",reco:"Recommand\xe9 \xe0 90%",ageMax:"16+",duration:"2 h 8",category:["Mont\xe9e d'adr\xe9naline","Palpitant"]},{img:t.p+"static/media/only9.3a80fa01.WEBP",title:"The witcher",reco:"Recommand\xe9 \xe0 96%",ageMax:"16+",duration:"1 saison",category:["Palpitant","S\xe9rie fantastique","Action"]},{img:t.p+"static/media/only10.b2646388.WEBP",title:"Formula 1",reco:"Recommand\xe9 \xe0 91%",ageMax:"13+",duration:"3 saisons",category:["Captivant","Palpitant","Docu-s\xe9ries"]},{img:t.p+"static/media/only11.946bdae7.WEBP",title:"House of Cards",reco:"Recommand\xe9 \xe0 89%",ageMax:"16+",duration:"6 saisons",category:["Psychologique","Sombre","Thriller"]},{img:t.p+"static/media/only12.30f98d3f.WEBP",title:"En bref",reco:"Recommand\xe9 \xe0 92%",ageMax:"13+",duration:"3 siasons",category:["Captivant","Enqu\xeate","Docu-s\xe9ries"]}];function p(){return Object(l.jsxs)("div",{className:"container-only",children:[Object(l.jsx)("h2",{children:"Seulement sur Netflix"}),Object(l.jsx)("div",{className:"btn-slide-only"}),Object(l.jsx)("div",{className:"container-card",children:b.map((function(e,a){return Object(l.jsxs)("div",{className:"card-only",children:[Object(l.jsx)("img",{className:"bg-card",src:e.img,alt:"image s\xe9rie"}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"btns-only",children:[Object(l.jsx)("button",{children:Object(l.jsx)("i",{className:"fas fa-play"})}),Object(l.jsx)("button",{children:Object(l.jsx)("i",{class:"fas fa-plus"})}),Object(l.jsx)("button",{children:Object(l.jsx)("i",{className:"fas fa-angle-down"})})]}),Object(l.jsx)("h3",{className:"title-only",children:e.title}),Object(l.jsxs)("div",{className:"infos-only",children:[Object(l.jsx)("span",{className:"age-limit",children:e.ageMax}),Object(l.jsx)("span",{className:"duration",children:e.duration})]}),Object(l.jsxs)("div",{className:"category-only",children:[e.category[0],Object(l.jsx)("i",{className:"fas fa-circle"})," ",e.category[1],Object(l.jsx)("i",{className:"fas fa-circle"})," ",e.category[2]]})]})]},a)}))})]})}t(15);var x=t.p+"static/media/logo-trailer.27d39aae.png";function u(){return Object(l.jsxs)("div",{className:"trailer",children:[Object(l.jsxs)("div",{className:"serie",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("img",{src:x,alt:"logo s\xe9rie"})}),Object(l.jsx)("div",{className:"synopsis",children:"Atteint d'un cancer en phase terminale, un prof de chimie se lance dans la fabrication et la vente de m\xe9thamph\xe9tamines pour assurer l'avenir financier de sa famille."}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsxs)("button",{className:"btn btn-play",children:[Object(l.jsx)("i",{className:"fas fa-play"})," ",Object(l.jsx)("span",{children:"Lecture"})]}),Object(l.jsxs)("button",{className:"btn btn-info",children:[Object(l.jsx)("i",{className:"fas fa-info-circle"})," ",Object(l.jsx)("span",{children:"Plus d'infos"})]})]})]}),Object(l.jsxs)("div",{className:"age-replay",children:[Object(l.jsx)("button",{className:"replay",children:Object(l.jsx)("i",{className:"fas fa-redo"})}),Object(l.jsx)("div",{className:"age",children:"16+"})]})]})}var h=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(g,{}),Object(l.jsx)(u,{}),Object(l.jsxs)("main",{children:[Object(l.jsx)(d,{}),Object(l.jsx)(p,{})]})]})};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.550b6d9e.chunk.js.map