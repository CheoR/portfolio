"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[678],{2265:function(e,t,n){var r=n(7462),a=n(7294),o=n(6981),i=n(1128),l=n(5893),c=function(e,t){return(0,r.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&{colorScheme:e.palette.mode})},m=function(e){return(0,r.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};t.ZP=function(e){var t=(0,o.Z)({props:e,name:"MuiCssBaseline"}),n=t.children,s=t.enableColorScheme,u=void 0!==s&&s;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(i.Z,{styles:function(e){return function(e){var t,n,a={html:c(e,arguments.length>1&&void 0!==arguments[1]&&arguments[1]),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,r.Z)({margin:0},m(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},o=null==(t=e.components)||null==(n=t.MuiCssBaseline)?void 0:n.styleOverrides;return o&&(a=[a,o]),a}(e,u)}}),n]})}},1128:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=(n(7294),n(3431)),o=n(5893);function i(e){var t=e.styles,n=e.defaultTheme,r=void 0===n?{}:n,i="function"==typeof t?function(e){return t(null==(n=e)||0===Object.keys(n).length?r:e);var n}:t;return(0,o.jsx)(a.xB,{styles:i})}var l=n(7193);var c=function(e){return(0,o.jsx)(i,(0,r.Z)({},e,{defaultTheme:l.Z}))}},5188:function(e,t,n){n.d(t,{H:function(){return o}});var r=n(7294),a=n(1597),o=function(e){var t=e.title,n=e.description,o=e.image,i=e.pathname,l=e.children,c=(0,a.useStaticQuery)("2762894136").site.siteMetadata,m=c.title,s=c.description,u=c.image,d=c.siteUrl,p={title:t||m,description:n||s,image:""+d+(u||o),url:""+d+(i||"")};return r.createElement(r.Fragment,null,r.createElement("title",null,p.title),r.createElement("meta",{name:"description",content:p.description}),r.createElement("meta",{name:"image",content:p.image}),r.createElement("meta",{property:"og:title",content:p.title}),r.createElement("meta",{property:"og:url",content:p.url}),r.createElement("meta",{property:"og:description",content:p.description}),r.createElement("meta",{property:"og:image",content:p.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),r.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),r.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),r.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"}),l)}},5046:function(e,t,n){n.r(t),n.d(t,{Head:function(){return B},default:function(){return H}});var r=n(7294),a=n(2265),o=n(8945),i=n(9299),l=n(2751),c=n(643),m=n(8333),s=n(892),u=n(1739),d=n(1357),p=n(3366),g=n(7462),f=n(5505),v=n(9236),h=n(6981),y=n(8379),Z=n(1351);function E(e){return(0,Z.Z)("MuiCardMedia",e)}(0,n(9508).Z)("MuiCardMedia",["root","media","img"]);var b=n(5893),x=["children","className","component","image","src","style"],w=(0,y.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,r=n.isMediaComponent,a=n.isImageComponent;return[t.root,r&&t.media,a&&t.img]}})((function(e){var t=e.ownerState;return(0,g.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),k=["video","audio","picture","iframe","img"],C=["picture","img"],M=r.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiCardMedia"}),r=n.children,a=n.className,o=n.component,i=void 0===o?"div":o,l=n.image,c=n.src,m=n.style,s=(0,p.Z)(n,x),u=-1!==k.indexOf(i),d=!u&&l?(0,g.Z)({backgroundImage:'url("'.concat(l,'")')},m):m,y=(0,g.Z)({},n,{component:i,isMediaComponent:u,isImageComponent:-1!==C.indexOf(i)}),Z=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,v.Z)(n,E,t)}(y);return(0,b.jsx)(w,(0,g.Z)({className:(0,f.Z)(Z.root,a),as:i,role:!u&&l?"img":void 0,ref:t,style:d,ownerState:y,src:u?l||c:void 0},s,{children:r}))})),S=n(6147),j=n(3854),P=function(e){return r.createElement(s.Z,{sx:{width:345,maxHeight:400}},r.createElement(M,{component:"img",height:"140",image:e.data.preview,alt:""}),r.createElement(d.Z,{sx:{height:250,display:"flex",flexDirection:"column",justifyContent:"space-between"}},r.createElement(i.Z,null,r.createElement(j.Z,{gutterBottom:!0,variant:"h5",component:"div"},e.data.label)),r.createElement(i.Z,null,r.createElement(j.Z,{variant:"body2",color:"text.secondary"},e.data.description))),r.createElement(u.Z,null,r.createElement(S.Z,{size:"small",href:e.data.link,target:"_blank",rel:"noopener"},"demo"),r.createElement(S.Z,{size:"small",href:e.data.repo,target:"_blank",rel:"noopener"},"GitHub")))},F=n(6928),z=function(){var e=(0,r.useRef)(),t=(0,r.useState)(F.Fw),n=t[0],a=t[1];return r.createElement(i.Z,null,r.createElement(l.ZP,{container:!0},r.createElement(l.ZP,{item:!0,xs:12,md:10},r.createElement(i.Z,{sx:{display:"flex",alignItems:"center",height:"100%"}},"Gallery")),r.createElement(l.ZP,{item:!0,xs:12,md:2,sx:{display:"flex",alignItems:"center"}},r.createElement(c.Z,{value:e.value,label:"Search",onChange:function(e){return function(e){e||a(F.Fw);var t=F.Fw.filter((function(t){return t.description.toLowerCase().includes(e.toLowerCase())}));t.length?a(t):a([])}(e.target.value)}}),r.createElement(m.Z,null))),r.createElement(l.ZP,{container:!0,sx:{display:"flex",justifyContent:"center"},gap:2,p:1},n.map((function(e,t){return r.createElement(l.ZP,{item:!0},r.createElement(P,{key:t,data:e}))}))))},I=n(5188),H=function(){return r.createElement(r.Fragment,null,r.createElement(a.ZP,null),r.createElement(o.Z,{pageTitle:""},r.createElement(z,null)))},B=function(){return r.createElement(I.H,{title:"Home",description:"Home Page"})}}}]);
//# sourceMappingURL=component---src-pages-index-js-0c2649b9209053b08695.js.map