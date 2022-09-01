"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[682],{1046:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),i(e.child))}))}function s(e){return function(t){return r.createElement(u,o({attr:o({},e.attr)},t),i(e.child))}}function u(e){var t=function(t){var n,a=e.attr,l=e.size,i=e.title,s=c(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}},7939:function(e,t,n){n.d(t,{Z:function(){return w}});var r={};n.r(r),n.d(r,{Mv:function(){return i},NV:function(){return s},Tv:function(){return u},PK:function(){return m}});var a={};n.r(a),n.d(a,{pI:function(){return f},nP:function(){return p},RV:function(){return h},FV:function(){return g},Le:function(){return E},mx:function(){return v},Md:function(){return b}});var l=n(7294),o=n(1597),c=n(3201),i="footer-module--footer--yUfeg",s="footer-module--footer__contacts--Mg-ID",u="footer-module--footer__contacts__item--W1VXd",m="footer-module--footer__contacts__link--pfDVY",d=function(){return l.createElement("footer",{className:i},l.createElement("div",{className:r.footer__copywrite},"© CheoR ",(new Date).getFullYear().toString()),l.createElement("ul",{className:s},l.createElement("li",{className:u},l.createElement("a",{className:m,href:"https://www.linkedin.com/in/cheo-roman/","aria-label":"LinkIn",target:"_blank",rel:"noreferrer"},l.createElement(c.ltd,null))),l.createElement("li",{className:u},l.createElement("a",{className:m,href:"https://github.com/CheoR","aria-label":"GitHub",target:"_blank",rel:"noreferrer"},l.createElement(c.NML,null))),l.createElement("li",{className:u},l.createElement("a",{className:m,href:"https://www.freecodecamp.org/cheor","aria-label":"Free Code Camp",target:"_blank",rel:"noreferrer"},l.createElement(c.OGM,null))),l.createElement("li",{className:u},l.createElement("a",{className:m,href:"http://codepen.io/CheoR/","aria-label":"Code Pen",target:"_blank",rel:"noreferrer"},l.createElement(c.q25,null)))))},f="layout-module--children--h5iM4",p="layout-module--heading--A3oQj",h="layout-module--navLink--oGbmQ",g="layout-module--navLinks--3lm9W",E="layout-module--navLinksLi--rmeSd",v="layout-module--navbar--W853P",b="layout-module--page--x8gRk",y=[{url:"/",description:"Home"},{url:"/about",description:"About"},{url:"/blog",description:"Blog"},{url:"/contact",description:"Contact"},{url:"/v1",description:"Portfolio V1"}],w=function(e){var t=e.pageTitle,n=e.children;return l.createElement("div",{className:a.container},l.createElement("nav",{className:v},l.createElement("ul",{className:g},y.map((function(e){return l.createElement("li",{key:e.url,className:E},l.createElement("span",{className:a.navLinkSpan},l.createElement(o.Link,{to:e.url,className:h},e.description)))})))),l.createElement("main",{className:b},l.createElement("h1",{className:p},l.createElement("span",null,t)),l.createElement("div",{className:f},n)),l.createElement(d,null))}},5188:function(e,t,n){n.d(t,{H:function(){return l}});var r=n(7294),a=n(1597),l=function(e){var t=e.title,n=e.description,l=e.image,o=e.pathname,c=e.children,i=(0,a.useStaticQuery)("2762894136").site.siteMetadata,s=i.title,u=i.description,m=i.image,d=i.siteUrl,f={title:t||s,description:n||u,image:""+d+(m||l),url:""+d+(o||"")};return r.createElement(r.Fragment,null,r.createElement("title",null,f.title),r.createElement("meta",{name:"description",content:f.description}),r.createElement("meta",{name:"image",content:f.image}),r.createElement("meta",{property:"og:title",content:f.title}),r.createElement("meta",{property:"og:url",content:f.url}),r.createElement("meta",{property:"og:description",content:f.description}),r.createElement("meta",{property:"og:image",content:f.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),c)}},5465:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var r=n(7294),a=n(7939),l=n(5188);t.default=function(){return r.createElement(a.Z,{pageTitle:"About"},r.createElement("section",{className:"main__content"},r.createElement("p",null,r.createElement("b",null,"Hi")," My name is Cheo. I'm a Nashville-based developer."),r.createElement("p",null,"I have been programming as a hobby on/off for years. I started with C++ in highschool and dabbled with a bit of other languages since then. In college, I used Prolog for a computational linguistics course where we"," ",r.createElement("a",{href:"https://news.ucsc.edu/2008/06/2278.html","aria-label":"University of California - Santa Cruz Computational Linguistics Speech-Operated Roboic Cars"},"drove robotic cars using our voice.")),r.createElement("p",null,"Due to health reasons after graduating, I could no longer do Peace Corp on medical grounds, so I continued learning at a local community college and state school. Doing so taught me to plan, build, and automate tools which eased my workload in the transportation/logistics/freight shipping industries."),r.createElement("p",null,"When I was laid off in December 2020, I decided to enrolled at the"," ",r.createElement("a",{href:"https://nashvillesoftwareschool.com/","aria-label":"Nashville Software School"},"Nashville Software School"),". NSS reinforced my skillset and taught me to use the latest technologies."),r.createElement("p",null,"In my free time I like to catch up on (computational) linguistics, explore, and volunteer."),r.createElement("p",null,"I look forward to collaborating with you on future endeavors.")))};var o=function(){return r.createElement(l.H,{title:"About",description:"About Page"})}}}]);
//# sourceMappingURL=component---src-pages-about-js-402dd3a257b258f7c26f.js.map