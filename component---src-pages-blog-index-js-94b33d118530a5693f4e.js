"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[524,566],{1046:function(e,t,r){r.d(t,{w_:function(){return i}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},c=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function u(e){return e&&e.map((function(e,t){return a.createElement(e.tag,o({key:t},e.attr),u(e.child))}))}function i(e){return function(t){return a.createElement(s,o({attr:o({},e.attr)},t),u(e.child))}}function s(e){var t=function(t){var r,n=e.attr,l=e.size,u=e.title,i=c(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&a.createElement("title",null,u),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},7939:function(e,t,r){r.d(t,{Z:function(){return _}});var a={};r.r(a),r.d(a,{Mv:function(){return u},NV:function(){return i},Tv:function(){return s},PK:function(){return m}});var n={};r.r(n),r.d(n,{pI:function(){return f},Fs:function(){return v},nP:function(){return p},RV:function(){return E},FV:function(){return h},Le:function(){return g},mx:function(){return N},Md:function(){return y}});var l=r(7294),o=r(1597),c=r(3201),u="footer-module--footer--yUfeg",i="footer-module--footer__contacts--Mg-ID",s="footer-module--footer__contacts__item--W1VXd",m="footer-module--footer__contacts__link--pfDVY",d=function(){return l.createElement("footer",{className:u},l.createElement("div",{className:a.footer__copywrite},"© CheoR ",(new Date).getFullYear().toString()),l.createElement("ul",{className:i},l.createElement("li",{className:s},l.createElement("a",{className:m,href:"https://www.linkedin.com/in/cheo-roman/","aria-label":"LinkIn",target:"_blank",rel:"noreferrer"},l.createElement(c.ltd,null))),l.createElement("li",{className:s},l.createElement("a",{className:m,href:"https://github.com/CheoR","aria-label":"GitHub",target:"_blank",rel:"noreferrer"},l.createElement(c.NML,null))),l.createElement("li",{className:s},l.createElement("a",{className:m,href:"https://www.freecodecamp.org/cheor","aria-label":"Free Code Camp",target:"_blank",rel:"noreferrer"},l.createElement(c.OGM,null))),l.createElement("li",{className:s},l.createElement("a",{className:m,href:"http://codepen.io/CheoR/","aria-label":"Code Pen",target:"_blank",rel:"noreferrer"},l.createElement(c.q25,null)))))},f="layout-module--children--h5iM4",v="layout-module--header--3nJFU",p="layout-module--heading--A3oQj",E="layout-module--navLink--oGbmQ",h="layout-module--navLinks--3lm9W",g="layout-module--navLinksLi--rmeSd",N="layout-module--navbar--W853P",y="layout-module--page--x8gRk",b=[{url:"/",description:"Home"},{url:"/about",description:"About"},{url:"/blog",description:"Blog"},{url:"/contact",description:"Contact"},{url:"/v1",description:"Portfolio V1"}],_=function(e){var t=e.pageTitle,r=e.children,a=(0,o.K2)("3159585216");if(a)return l.createElement("div",{className:n.container},l.createElement("div",{className:n.title},l.createElement("title",null,t," | ",a.site.siteMetadata.title),l.createElement("header",{className:v},a.site.siteMetadata.title)),l.createElement("nav",{className:N},l.createElement("ul",{className:h},b.map((function(e){return l.createElement("li",{key:e.url,className:g},l.createElement("span",{className:n.navLinkSpan},l.createElement(o.rU,{to:e.url,className:E},e.description)))})))),l.createElement("main",{className:y},l.createElement("h1",{className:p},l.createElement("span",null,t)),l.createElement("div",{className:f},r)),l.createElement(d,null))}},9252:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var a=r(7294),n=r(1597),l=function(e){var t,r;return a.createElement("article",{className:"card-module--card--cZ2kz"},a.createElement("div",{className:"card-module--card__image--yJDdX"},"img"),a.createElement("div",{className:"card-module--card__chips--W2y47"},"chips"),a.createElement("div",{className:"card-module--card__description--YMHhR"},"test"),a.createElement("div",{className:"card-module--card__btns--u11NB"},a.createElement(n.rU,{to:"/blog/"+(null===(t=e.data)||void 0===t?void 0:t.slug)},a.createElement("button",{className:"card-module--card__btn--ONb1i"},"Read More . .")),a.createElement("p",null,"Posted: ",null===(r=e.data)||void 0===r?void 0:r.frontmatter.datePublished)))}},1025:function(e,t,r){r.r(t);var a=r(7294),n=r(7939),l=r(9252),o=r(4926);t.default=function(e){var t=e.data.allMdx.nodes,r=(0,a.useRef)(),c=(0,a.useState)(t),u=c[0],i=c[1];return a.createElement(n.Z,{pageTitle:"My Blog Posts"},a.createElement("div",{className:o.lj},a.createElement("div",{className:o.LW},a.createElement("div",null,"Gallery"),a.createElement("input",{className:o.j4,value:r.value,placeholder:"Search . . ",onChange:function(e){return function(e){e||i(t);var r=t.filter((function(t){return t.body.toLowerCase().includes(e.toLowerCase())}));r.length?i(r):i([])}(e.target.value)}})),a.createElement("div",{className:o._u},u.map((function(e){return a.createElement(l.default,{key:e.id,data:e})})))))}},4926:function(e,t,r){r.d(t,{LW:function(){return o},_u:function(){return a},j4:function(){return l},lj:function(){return n}});var a="gallery-module--cards--Eq2Ye",n="gallery-module--gallery--4H2P6",l="gallery-module--gallery__searchbar--gVnqb",o="gallery-module--gallery__title--tnKWK"}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-94b33d118530a5693f4e.js.map