"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[70],{9842:function(n,e,t){t.d(e,{r:function(){return s}});var r,i=t(2791),l=["title","titleId"];function o(){return o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},o.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function a(n,e){var t=n.title,a=n.titleId,s=u(n,l);return i.createElement("svg",o({viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":a},s),t?i.createElement("title",{id:a},t):null,r||(r=i.createElement("path",{d:"M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z",strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"})))}var s=i.forwardRef(a);t.p},2070:function(n,e,t){t.r(e);var r=t(2791),i=t(4482),l=t(824),o=t(1917),u=t(56),a=t(6640),s=t(2814),c=t(9640),f=t(7689),d=t(4856),p=t(7857),x=t(9842),v=t(3584),g=t(184);e.default=function(){var n,e=(0,f.UO)().id,t=(0,v.c)(),h=t.toggleIsFavourite,C=t.getIsFavourite,y=(0,r.useMemo)((function(){return!!e&&C(e)}),[C,e]),j=(0,d.OF)({i:null!==e&&void 0!==e?e:""},{query:{enabled:!!e}}),m=j.data,b=j.isError,w=j.isLoading,L=null!==(n=null===m||void 0===m?void 0:m.data)&&void 0!==n?n:{},O=L.Poster,k=L.Title,F=L.Plot,Z=L.Ratings,S=L.Type,M=function(n,e,t){var r=n[e];return r&&"string"===typeof r&&"N/A"!==r?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(i.P,{lineHeight:"1",color:"gray.400",children:[null!==t&&void 0!==t?t:e,":"]}),(0,g.jsx)(i.P,{lineHeight:"1",children:r})]}):null},P=(0,r.useCallback)((function(n,e){return m?M(m.data,n,e):null}),[m]);return b||"False"===(null===m||void 0===m?void 0:m.data.Response)?(0,g.jsx)(l.xu,{children:(0,g.jsx)(l.xu,{children:"Movie not found"})}):w?(0,g.jsx)(p.Z,{}):(0,g.jsx)(o.g,{p:"25px",align:"start",children:(0,g.jsxs)(u.K,{direction:["column",null,"row"],position:"relative",children:[(0,g.jsx)(l.xu,{boxShadow:"base",aspectRatio:2/3,overflow:"hidden",minW:["250px","300px"],w:["full",null,"500px"],maxW:["500px",null,"none"],children:(0,g.jsx)(a.E,{w:"full",h:"full",src:O,objectFit:"cover"})}),(0,g.jsxs)(o.g,{spacing:"3",h:"full",justify:"start",alignSelf:"stretch",align:"start",children:[(0,g.jsx)(l.xu,{w:["full",null,"auto"],fontSize:"32px",textAlign:"center",fontWeight:"bold",lineHeight:"1",children:k}),(0,g.jsxs)(o.g,{align:"start",children:[["Year","Genre","Runtime"].flatMap((function(n){var e=m.data[n];return e&&"N/A"!==e?(0,g.jsx)(l.xu,{lineHeight:"1",children:e}):[]})),(0,g.jsx)(s.r,{templateColumns:"70px 1fr",children:["Director","Actors","Writer"].map((function(n){return P(n)}))}),(0,g.jsx)(l.xu,{maxW:"1000px",lineHeight:"1",children:F})]}),(0,g.jsxs)(o.g,{align:"start",children:[(0,g.jsxs)(s.r,{templateColumns:"120px 1fr",children:[["Country","Language"].map((function(n){return P(n)})),"series"===S&&P("totalSeasons","Seasons")]}),(0,g.jsxs)(o.g,{align:"start",spacing:"0",children:[(0,g.jsx)(l.xu,{children:"Ratings"}),(0,g.jsxs)(s.r,{templateColumns:"120px 1fr",children:[null===Z||void 0===Z?void 0:Z.map((function(n){return M(n,"Value",n.Source)})),["Metascore","imdbRating","imdbVotes"].map((function(n){return P(n)}))]})]})]})]}),(0,g.jsx)(l.xu,{onClick:function(n){n.stopPropagation(),e&&h(e)},position:"absolute",right:"15px",top:"15px",w:"30px",h:"30px",children:(0,g.jsx)(c.J,{w:"full",h:"full",as:x.r,stroke:"#000",opacity:y?"0.85":"0.4",fill:y?"yellow":"white",_hover:{fill:"yellow.300",opacity:"0.85"},_active:{fill:"yellow.400"},transition:"fill 0.25s, stroke 0.25s, opacity 0.25s"})})]})})}},4856:function(n,e,t){t.d(e,{OF:function(){return a}});var r=t(3433),i=t(1413),l=t(1243),o=t(8404),u=function(n,e){var t,o=null!==e&&void 0!==e?e:{},u=o.query,a=o.axios,s=null!==(t=null===u||void 0===u?void 0:u.queryKey)&&void 0!==t?t:function(n){return["/?i"].concat((0,r.Z)(n?[n]:[]))}(n);return(0,i.Z)({queryKey:s,queryFn:function(e){var t=e.signal;return function(n,e){return l.Z.get("/?i",(0,i.Z)((0,i.Z)({},e),{},{params:(0,i.Z)((0,i.Z)({},n),null===e||void 0===e?void 0:e.params)}))}(n,(0,i.Z)({signal:t},a))}},u)},a=function(n,e){var t=u(n,e),r=(0,o.a)(t);return r.queryKey=t.queryKey,r}},3584:function(n,e,t){t.d(e,{c:function(){return u}});var r=t(9439),i=t(5330),l=t(2791),o=t(7601),u=function(){var n=(0,i.FV)(o.M),e=(0,r.Z)(n,2),t=e[0],u=e[1],a=(0,l.useCallback)((function(n){return t.includes(n)}),[t]);return{toggleIsFavourite:function(n){u((function(e){var t=e.indexOf(n);return t>-1?e.slice(0,t).concat(e.slice(t+1)):e.concat(n)}))},favourites:t,getIsFavourite:a}}},7601:function(n,e,t){t.d(e,{M:function(){return l}});var r=t(5330),i=(0,t(9386).J)().persistAtom,l=(0,r.cn)({key:"favouriteMovieListState",default:[],effects_UNSTABLE:[i]})}}]);
//# sourceMappingURL=70.ee9d04e2.chunk.js.map