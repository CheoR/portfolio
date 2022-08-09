"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[613],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{G:function(){return O},L:function(){return f},M:function(){return L},P:function(){return E},S:function(){return z},_:function(){return s},a:function(){return o},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(4811),a(5697)),i=a.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var p,m=["children"],g=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(g,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,h);return r.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},b=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,y),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,o({},c,t,{sizes:u,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],E=function(e){var t=e.fallback,a=s(e,w);return t?r.createElement(b,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(p=b.propTypes)?void 0:p.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var L=function(e){return r.createElement(r.Fragment,null,r.createElement(b,o({},e)),r.createElement("noscript",null,r.createElement(b,o({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=b.propTypes;var C,k,x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:i().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],I=new Set,j=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,p=e.class,m=e.onStartLoad,g=e.onLoad,f=e.onError,h=s(e,T),y=i.width,v=i.height,b=i.layout,w=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,v,b),E=w.style,L=w.className,x=s(w,N),S=(0,r.useRef)(),j=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var O=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=S.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void I.add(j)):k&&I.has(j)?void 0:(C.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;S.current&&(S.current.innerHTML=r(o({isLoading:!0,isLoaded:I.has(j),image:i},h)),I.has(j)||(e=requestAnimationFrame((function(){S.current&&(t=n(S.current,j,I,c,m,g,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){I.has(j)&&k&&(S.current.innerHTML=k(o({isLoading:I.has(j),isLoaded:I.has(j),image:i},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},x,{style:o({},E,c,{backgroundColor:u}),className:L+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));O.propTypes=S,O.displayName="GatsbyImage";var q,A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],_=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:x,width:_,height:_,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},z=(q=O,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,A);return n&&console.warn(n),a?r.createElement(q,o({image:a},i)):(console.warn("Image not loaded",t),null)});z.displayName="StaticImage",z.propTypes=R},8285:function(e,t,a){a.d(t,{Z:function(){return f}});var r={};a.r(r),a.d(r,{Fs:function(){return s},nP:function(){return l},RV:function(){return c},FV:function(){return u},Le:function(){return d},mx:function(){return p},Md:function(){return m}});var n=a(7294),i=a(1597),o=a(7059),s="layout-module--header--R1XBo",l="layout-module--heading--8VjLO",c="layout-module--navLink--FnGTw",u="layout-module--navLinks--d7kp9",d="layout-module--navLinksLi--QBsGm",p="layout-module--navbar--0cBvW",m="layout-module--page--jZGkj",g=[{url:"/",description:"Home"},{url:"/about",description:"About"},{url:"/blog",description:"Blog"},{url:"/contact",description:"Contact"},{url:"/v1",description:"Portfolio V1"}],f=function(e){var t=e.pageTitle,f=e.children,h=(0,i.K2)("3159585216");if(h)return n.createElement("div",{className:r.container},n.createElement("div",{className:r.title},n.createElement("title",null,t," | ",h.site.siteMetadata.title),n.createElement("header",{className:s},h.site.siteMetadata.title)),n.createElement("nav",{className:p},n.createElement("ul",{className:u},g.map((function(e){return n.createElement("li",{key:e.url,className:d},n.createElement("span",{className:r.navLinkSpan},n.createElement(i.rU,{to:e.url,className:c},e.description)))})))),n.createElement("main",{className:m},n.createElement("h1",{className:l},n.createElement("span",null,t)),f,n.createElement(o.S,{src:"https://images.unsplash.com/photo-1632669671776-cefd05baca87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",alt:"Pug by @jamestiono",__imageData:a(9747)})))}},9747:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/portfolio/static/008500a9d1bd6a4d3b275a4885f07610/5b478/photo-1632669671776-cefd05baca87.jpg","srcSet":"/portfolio/static/008500a9d1bd6a4d3b275a4885f07610/2b27b/photo-1632669671776-cefd05baca87.jpg 220w,\\n/portfolio/static/008500a9d1bd6a4d3b275a4885f07610/14c24/photo-1632669671776-cefd05baca87.jpg 440w,\\n/portfolio/static/008500a9d1bd6a4d3b275a4885f07610/5b478/photo-1632669671776-cefd05baca87.jpg 880w","sizes":"(min-width: 880px) 880px, 100vw"},"sources":[{"srcSet":"/portfolio/static/008500a9d1bd6a4d3b275a4885f07610/4c27b/photo-1632669671776-cefd05baca87.webp 220w,\\n/portfolio/static/008500a9d1bd6a4d3b275a4885f07610/262c3/photo-1632669671776-cefd05baca87.webp 440w,\\n/portfolio/static/008500a9d1bd6a4d3b275a4885f07610/1903c/photo-1632669671776-cefd05baca87.webp 880w","type":"image/webp","sizes":"(min-width: 880px) 880px, 100vw"}]},"width":880,"height":880}')}}]);
//# sourceMappingURL=6ceb85f140315f11d9817304d0858520006df9f5-fd4d66737f362aa85c3c.js.map