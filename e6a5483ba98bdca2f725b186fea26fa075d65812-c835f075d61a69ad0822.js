"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[689],{6410:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{ah:function(){return s}});var a=r(7294);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=a.createContext({});function s(e){var t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):i(i({},t),e)}),[t,e])}},72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var o=e[a];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,n=r,r=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},1046:function(e,t,r){r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,s=e.title,c=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},3723:function(e,t,r){r.d(t,{G:function(){return P},L:function(){return g},M:function(){return C},P:function(){return E},_:function(){return l},a:function(){return i},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return s}});var n=r(7294),a=(r(72),r(5697)),o=r.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r,n,a){return void 0===a&&(a={}),i({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function d(e,t,r,n,a,o,l,s){var c={};o&&(c.backgroundColor=o,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,p=["children"],f=function(e){var t=e.layout,r=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,r=l(e,p);return n.createElement(n.Fragment,null,n.createElement(f,i({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,r=e.srcSet,a=e.loading,o=e.alt,s=void 0===o?"":o,c=e.shouldLoad,u=l(e,h);return n.createElement("img",i({},u,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:s}))},b=function(e){var t=e.fallback,r=e.sources,a=void 0===r?[]:r,o=e.shouldLoad,s=void 0===o||o,c=l(e,y),u=c.sizes||(null==t?void 0:t.sizes),d=n.createElement(v,i({},c,t,{sizes:u,shouldLoad:s}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,sizes:u})})),d):d};v.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var w=["fallback"],E=function(e){var t=e.fallback,r=l(e,w);return t?n.createElement(b,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},r))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(m=b.propTypes)?void 0:m.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var C=function(e){return n.createElement(n.Fragment,null,n.createElement(b,i({},e)),n.createElement("noscript",null,n.createElement(b,i({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=b.propTypes;var O,k,L=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),i=3;i<n;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:o().object.isRequired,alt:L},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],_=new Set,j=function(e){var t=e.as,a=void 0===t?"div":t,o=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,p=e.onStartLoad,f=e.onLoad,g=e.onError,h=l(e,x),y=o.width,v=o.height,b=o.layout,w=function(e,t,r){var n={},a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(y,v,b),E=w.style,C=w.className,L=l(w,S),N=(0,n.useRef)(),j=(0,n.useMemo)((function(){return JSON.stringify(o.images)}),[o.images]);m&&(d=m);var P=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,y,v);return(0,n.useEffect)((function(){O||(O=Promise.all([r.e(774),r.e(217)]).then(r.bind(r,9217)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=N.current.querySelector("[data-gatsby-image-ssr]");return n&&s()?(n.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(j)):k&&_.has(j)?void 0:(O.then((function(r){var n=r.renderImageToString,a=r.swapPlaceholderImage;N.current&&(N.current.innerHTML=n(i({isLoading:!0,isLoaded:_.has(j),image:o},h)),_.has(j)||(e=requestAnimationFrame((function(){N.current&&(t=a(N.current,j,_,c,p,f,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[o]),(0,n.useLayoutEffect)((function(){_.has(j)&&k&&(N.current.innerHTML=k(i({isLoading:_.has(j),isLoaded:_.has(j),image:o},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[o]),(0,n.createElement)(a,i({},L,{style:i({},E,c,{backgroundColor:u}),className:C+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},P=(0,n.memo)((function(e){return e.image?(0,n.createElement)(j,e):null}));P.propTypes=N,P.displayName="GatsbyImage";var I,T=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],R=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),M={src:o().string.isRequired,alt:L,width:R,height:R,sizes:o().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(I=P,function(e){var t=e.src,r=e.__imageData,a=e.__error,o=l(e,T);return a&&console.warn(a),r?n.createElement(I,i({image:r},o)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=M},7939:function(e,t,r){r.d(t,{Z:function(){return C}});var n={};r.r(n),r.d(n,{Mv:function(){return s},NV:function(){return c},Tv:function(){return u},PK:function(){return d}});var a={};r.r(a),r.d(a,{pI:function(){return p},Fs:function(){return f},nP:function(){return g},RV:function(){return h},FV:function(){return y},Le:function(){return v},mx:function(){return b},Md:function(){return w}});var o=r(7294),i=r(1597),l=r(3201),s="footer-module--footer--yUfeg",c="footer-module--footer__contacts--Mg-ID",u="footer-module--footer__contacts__item--W1VXd",d="footer-module--footer__contacts__link--pfDVY",m=function(){return o.createElement("footer",{className:s},o.createElement("div",{className:n.footer__copywrite},"© CheoR ",(new Date).getFullYear().toString()),o.createElement("ul",{className:c},o.createElement("li",{className:u},o.createElement("a",{className:d,href:"https://www.linkedin.com/in/cheo-roman/","aria-label":"LinkIn",target:"_blank",rel:"noreferrer"},o.createElement(l.ltd,null))),o.createElement("li",{className:u},o.createElement("a",{className:d,href:"https://github.com/CheoR","aria-label":"GitHub",target:"_blank",rel:"noreferrer"},o.createElement(l.NML,null))),o.createElement("li",{className:u},o.createElement("a",{className:d,href:"https://www.freecodecamp.org/cheor","aria-label":"Free Code Camp",target:"_blank",rel:"noreferrer"},o.createElement(l.OGM,null))),o.createElement("li",{className:u},o.createElement("a",{className:d,href:"http://codepen.io/CheoR/","aria-label":"Code Pen",target:"_blank",rel:"noreferrer"},o.createElement(l.q25,null)))))},p="layout-module--children--h5iM4",f="layout-module--header--3nJFU",g="layout-module--heading--A3oQj",h="layout-module--navLink--oGbmQ",y="layout-module--navLinks--3lm9W",v="layout-module--navLinksLi--rmeSd",b="layout-module--navbar--W853P",w="layout-module--page--x8gRk",E=[{url:"/",description:"Home"},{url:"/about",description:"About"},{url:"/blog",description:"Blog"},{url:"/contact",description:"Contact"},{url:"/v1",description:"Portfolio V1"}],C=function(e){var t=e.pageTitle,r=e.children;return o.createElement("div",{className:a.container},o.createElement("div",{className:a.title},o.createElement("header",{className:f},"CheoR Portfolio")),o.createElement("nav",{className:b},o.createElement("ul",{className:y},E.map((function(e){return o.createElement("li",{key:e.url,className:v},o.createElement("span",{className:a.navLinkSpan},o.createElement(i.Link,{to:e.url,className:h},e.description)))})))),o.createElement("main",{className:w},o.createElement("h1",{className:g},o.createElement("span",null,t)),o.createElement("div",{className:p},r)),o.createElement(m,null))}},5188:function(e,t,r){r.d(t,{H:function(){return o}});var n=r(7294),a=r(1597),o=function(e){var t=e.title,r=e.description,o=e.image,i=e.pathname,l=e.children,s=(0,a.useStaticQuery)("2762894136").site.siteMetadata,c=s.title,u=s.description,d=s.image,m=s.siteUrl,p={title:t||c,description:r||u,image:""+m+(d||o),url:""+m+(i||"")};return n.createElement(n.Fragment,null,n.createElement("title",null,p.title),n.createElement("meta",{name:"description",content:p.description}),n.createElement("meta",{name:"image",content:p.image}),n.createElement("meta",{property:"og:title",content:p.title}),n.createElement("meta",{property:"og:url",content:p.url}),n.createElement("meta",{property:"og:description",content:p.description}),n.createElement("meta",{property:"og:image",content:p.image}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),l)}}}]);
//# sourceMappingURL=e6a5483ba98bdca2f725b186fea26fa075d65812-c835f075d61a69ad0822.js.map