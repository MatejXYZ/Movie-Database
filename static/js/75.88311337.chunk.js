"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[75],{9842:function(e,n,t){t.d(n,{r:function(){return s}});var r,i=t(2791),l=["title","titleId"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function o(e,n){var t=e.title,o=e.titleId,s=a(e,l);return i.createElement("svg",u({viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},s),t?i.createElement("title",{id:o},t):null,r||(r=i.createElement("path",{d:"M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z",strokeWidth:1.25,strokeLinecap:"round",strokeLinejoin:"round"})))}var s=i.forwardRef(o);t.p},2617:function(e,n,t){var r=t(4482),i=t(1917),l=t(824),u=t(6640),a=t(6582),o=t(9640),s=t(2791),c=t(7689),d=t(3584),v=t(9842),f=t(2150),p=t(184);n.Z=function(e){var n=e.imdbID,t=e.isFavourite,m=e.Title,b=e.Poster,h=(0,c.s0)(),x=(0,d.c)(),g=x.getIsFavourite,y=x.toggleIsFavourite,C=(0,s.useMemo)((function(){return null!==t&&void 0!==t?t:g(n)}),[g,n,t]);return(0,p.jsx)(r.P,{p:"5px",w:"200px",h:"300px",children:(0,p.jsxs)(i.g,{bg:"gray.200",w:"full",h:"full",justify:"start",p:"5px",px:"20px",rounded:"5px",cursor:"pointer",onClick:function(){(0,s.startTransition)((function(){h("".concat(f._.detail,"/").concat(n))}))},position:"relative",opacity:"0.95",_hover:{opacity:"1",boxShadow:"0 0 15px #dedede"},transition:"opacity 0.25s, box-shadow 0.25s",children:[(0,p.jsx)(l.xu,{boxShadow:"base",flex:"0.75",aspectRatio:2/3,bg:"lightblue",overflow:"hidden",children:(0,p.jsx)(u.E,{w:"full",h:"full",src:b,objectFit:"cover"})}),(0,p.jsx)(a.k,{flex:"0.25",w:"full",direction:"column",justify:"center",children:(0,p.jsx)(l.xu,{textAlign:"center",fontWeight:"bold",lineHeight:"1",children:m})}),(0,p.jsx)(l.xu,{onClick:function(e){e.stopPropagation(),y(n)},position:"absolute",right:"15px",top:"15px",w:"30px",h:"30px",children:(0,p.jsx)(o.J,{w:"full",h:"full",as:v.r,stroke:"#000",opacity:C?"0.85":"0.4",fill:C?"yellow":"white",_hover:{fill:"yellow.300",opacity:"0.85"},_active:{fill:"yellow.400"},transition:"fill 0.25s, stroke 0.25s, opacity 0.25s"})})]})})}},7075:function(e,n,t){t.r(n),t.d(n,{default:function(){return je}});var r=t(1413),i=t(9439),l=t(1917),u=t(6762),a=t(6460),o=t(4925),s=t(9886),c=t(4591),d=t(5597),v=t(6232),f=t(2996),p=t(6992),m=t(2791),b=t(184),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],x=["getRootProps","htmlProps"],g=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),y=(0,i.Z)(g,2),C=y[0],Z=y[1],k=(0,s.k)({strict:!1,name:"FormControlContext"}),N=(0,i.Z)(k,2),j=N[0],w=N[1];var I=(0,d.G)((function(e,n){var t=(0,v.jC)("Form",e),l=function(e){var n=e.id,t=e.isRequired,l=e.isInvalid,u=e.isDisabled,a=e.isReadOnly,s=(0,o.Z)(e,h),d=(0,m.useId)(),v=n||"field-".concat(d),f="".concat(v,"-label"),b="".concat(v,"-feedback"),x="".concat(v,"-helptext"),g=(0,m.useState)(!1),y=(0,i.Z)(g,2),C=y[0],Z=y[1],k=(0,m.useState)(!1),N=(0,i.Z)(k,2),j=N[0],w=N[1],I=(0,m.useState)(!1),S=(0,i.Z)(I,2),R=S[0],F=S[1],P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:x},e),{},{ref:(0,c.lq)(n,(function(e){e&&w(!0)}))})}),[x]),O=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,"data-focus":(0,p.PB)(R),"data-disabled":(0,p.PB)(u),"data-invalid":(0,p.PB)(l),"data-readonly":(0,p.PB)(a),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:v})}),[v,u,R,l,a,f]),M=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:b},e),{},{ref:(0,c.lq)(n,(function(e){e&&Z(!0)})),"aria-live":"polite"})}),[b]),D=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),s),{},{ref:n,role:"group"})}),[s]),A=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!a,isDisabled:!!u,isFocused:!!R,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:C,setHasFeedbackText:Z,hasHelpText:j,setHasHelpText:w,id:v,labelId:f,feedbackId:b,helpTextId:x,htmlProps:s,getHelpTextProps:P,getErrorMessageProps:M,getRootProps:D,getLabelProps:O,getRequiredIndicatorProps:A}}((0,f.Lr)(e)),u=l.getRootProps,s=(l.htmlProps,(0,o.Z)(l,x)),d=(0,p.cx)("chakra-form-control",e.className);return(0,b.jsx)(j,{value:s,children:(0,b.jsx)(C,{value:t,children:(0,b.jsx)(a.m.div,(0,r.Z)((0,r.Z)({},u({},n)),{},{className:d,__css:t.container}))})})}));I.displayName="FormControl",(0,d.G)((function(e,n){var t=w(),i=Z(),l=(0,p.cx)("chakra-form__helper-text",e.className);return(0,b.jsx)(a.m.div,(0,r.Z)((0,r.Z)({},null==t?void 0:t.getHelpTextProps(e,n)),{},{__css:i.helperText,className:l}))})).displayName="FormHelperText";var S=["isDisabled","isInvalid","isReadOnly","isRequired"],R=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function F(e){var n,t,i,l=w(),u=e.id,a=e.disabled,s=e.readOnly,c=e.required,d=e.isRequired,v=e.isInvalid,f=e.isReadOnly,m=e.isDisabled,b=e.onFocus,h=e.onBlur,x=(0,o.Z)(e,R),g=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==l?void 0:l.hasFeedbackText)&&(null==l?void 0:l.isInvalid)&&g.push(l.feedbackId),(null==l?void 0:l.hasHelpText)&&g.push(l.helpTextId),(0,r.Z)((0,r.Z)({},x),{},{"aria-describedby":g.join(" ")||void 0,id:null!=u?u:null==l?void 0:l.id,isDisabled:null!=(n=null!=a?a:m)?n:null==l?void 0:l.isDisabled,isReadOnly:null!=(t=null!=s?s:f)?t:null==l?void 0:l.isReadOnly,isRequired:null!=(i=null!=c?c:d)?i:null==l?void 0:l.isRequired,isInvalid:null!=v?v:null==l?void 0:l.isInvalid,onFocus:(0,p.v0)(null==l?void 0:l.onFocus,b),onBlur:(0,p.v0)(null==l?void 0:l.onBlur,h)})}var P=["htmlSize"],O=(0,d.G)((function(e,n){var t=e.htmlSize,i=(0,o.Z)(e,P),l=(0,v.jC)("Input",i),u=function(e){var n=F(e),t=n.isDisabled,i=n.isInvalid,l=n.isReadOnly,u=n.isRequired,a=(0,o.Z)(n,S);return(0,r.Z)((0,r.Z)({},a),{},{disabled:t,readOnly:l,required:u,"aria-invalid":(0,p.Qm)(i),"aria-required":(0,p.Qm)(u),"aria-readonly":(0,p.Qm)(l)})}((0,f.Lr)(i)),s=(0,p.cx)("chakra-input",e.className);return(0,b.jsx)(a.m.input,(0,r.Z)((0,r.Z)({size:t},u),{},{__css:l.field,ref:n,className:s}))}));O.displayName="Input",O.id="Input";var M=t(9055),D=t(824),A=t(2814),E=t(9640),q=function(e){return(0,b.jsx)(E.J,(0,r.Z)((0,r.Z)({viewBox:"0 0 24 24"},e),{},{children:(0,b.jsx)("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})}))},T=function(e){return(0,b.jsx)(E.J,(0,r.Z)((0,r.Z)({viewBox:"0 0 24 24"},e),{},{children:(0,b.jsx)("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})}))},_=t(7762);function L(e,n,t,r){(0,m.useEffect)((function(){var i;if(e.current&&r){var l=null!=(i=e.current.ownerDocument.defaultView)?i:window,u=Array.isArray(n)?n:[n],a=new l.MutationObserver((function(e){var n,r=(0,_.Z)(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;"attributes"===i.type&&i.attributeName&&u.includes(i.attributeName)&&t(i)}}catch(l){r.e(l)}finally{r.f()}}));return a.observe(e.current,{attributes:!0,attributeFilter:u}),function(){return a.disconnect()}}}))}var B=t(6367);var W=50,G=300;function z(e,n){var t=(0,m.useState)(!1),r=(0,i.Z)(t,2),l=r[0],u=r[1],a=(0,m.useState)(null),o=(0,i.Z)(a,2),s=o[0],c=o[1],d=(0,m.useState)(!0),v=(0,i.Z)(d,2),f=v[0],p=v[1],b=(0,m.useRef)(null),h=function(){return clearTimeout(b.current)};!function(e,n){var t=(0,B.W)(e);(0,m.useEffect)((function(){var e=null;return null!==n&&(e=window.setInterval((function(){return t()}),n)),function(){e&&window.clearInterval(e)}}),[n,t])}((function(){"increment"===s&&e(),"decrement"===s&&n()}),l?W:null);var x=(0,m.useCallback)((function(){f&&e(),b.current=setTimeout((function(){p(!1),u(!0),c("increment")}),G)}),[e,f]),g=(0,m.useCallback)((function(){f&&n(),b.current=setTimeout((function(){p(!1),u(!0),c("decrement")}),G)}),[n,f]),y=(0,m.useCallback)((function(){p(!0),u(!1),h()}),[]);return(0,m.useEffect)((function(){return function(){return h()}}),[]),{up:x,down:g,stop:y,isSpinning:l}}function H(e,n){var t=function(e){var n=parseFloat(e);return"number"!==typeof n||Number.isNaN(n)?0:n}(e),r=Math.pow(10,null!=n?n:10);return t=Math.round(t*r)/r,n?t.toFixed(n):t.toString()}function K(e){if(!Number.isFinite(e))return 0;for(var n=1,t=0;Math.round(e*n)/n!==e;)n*=10,t+=1;return t}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.onChange,t=e.precision,r=e.defaultValue,l=e.value,u=e.step,a=void 0===u?1:u,o=e.min,s=void 0===o?Number.MIN_SAFE_INTEGER:o,c=e.max,d=void 0===c?Number.MAX_SAFE_INTEGER:c,v=e.keepWithinRange,f=void 0===v||v,p=(0,B.W)(n),b=(0,m.useState)((function(){var e;return null==r?"":null!=(e=J(r,a,t))?e:""})),h=(0,i.Z)(b,2),x=h[0],g=h[1],y="undefined"!==typeof l,C=y?l:x,Z=Q(U(C),a),k=null!=t?t:Z,N=(0,m.useCallback)((function(e){e!==C&&(y||g(e.toString()),null==p||p(e.toString(),U(e)))}),[p,y,C]),j=(0,m.useCallback)((function(e){var n=e;return f&&(n=function(e,n,t){return null==e?e:(t<n&&console.warn("clamp: max cannot be less than min"),Math.min(Math.max(e,n),t))}(n,s,d)),H(n,k)}),[k,f,d,s]),w=(0,m.useCallback)((function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;e=""===C?U(n):U(C)+n,e=j(e),N(e)}),[j,a,N,C]),I=(0,m.useCallback)((function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;e=""===C?U(-n):U(C)-n,e=j(e),N(e)}),[j,a,N,C]),S=(0,m.useCallback)((function(){var e,n;n=null==r?"":null!=(e=J(r,a,t))?e:s,N(n)}),[r,t,a,N,s]),R=(0,m.useCallback)((function(e){var n,t=null!=(n=J(e,a,k))?n:s;N(t)}),[k,a,N,s]),F=U(C);return{isOutOfRange:F>d||F<s,isAtMax:F===d,isAtMin:F===s,precision:k,value:C,valueAsNumber:F,update:N,reset:S,increment:w,decrement:I,clamp:j,cast:R,setValue:g}}function U(e){return parseFloat(e.toString().replace(/[^\w.-]+/g,""))}function Q(e,n){return Math.max(K(n),K(e))}function J(e,n,t){var r=U(e);if(!Number.isNaN(r)){var i=Q(r,n);return H(r,null!=t?t:i)}}var X=t(5280),$=t(9205),Y=["focusInputOnChange","clampValueOnBlur","keepWithinRange","min","max","step","isReadOnly","isDisabled","isRequired","isInvalid","pattern","inputMode","allowMouseWheel","id","onChange","precision","name","aria-describedby","aria-label","aria-labelledby","onFocus","onBlur","onInvalid","getAriaValueText","isValidCharacter","format","parse"],ee=/^[Ee0-9+\-.]$/;function ne(e){return ee.test(e)}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.focusInputOnChange,t=void 0===n||n,l=e.clampValueOnBlur,u=void 0===l||l,a=e.keepWithinRange,s=void 0===a||a,d=e.min,v=void 0===d?Number.MIN_SAFE_INTEGER:d,f=e.max,b=void 0===f?Number.MAX_SAFE_INTEGER:f,h=e.step,x=void 0===h?1:h,g=e.isReadOnly,y=e.isDisabled,C=e.isRequired,Z=e.isInvalid,k=e.pattern,N=void 0===k?"[0-9]*(.[0-9]+)?":k,j=e.inputMode,w=void 0===j?"decimal":j,I=e.allowMouseWheel,S=e.id,R=(e.onChange,e.precision,e.name),F=e["aria-describedby"],P=e["aria-label"],O=e["aria-labelledby"],M=e.onFocus,D=e.onBlur,A=e.onInvalid,E=e.getAriaValueText,q=e.isValidCharacter,T=e.format,_=e.parse,W=(0,o.Z)(e,Y),G=(0,B.W)(M),H=(0,B.W)(D),K=(0,B.W)(A),U=(0,B.W)(null!=q?q:ne),Q=(0,B.W)(E),J=V(e),ee=J.update,te=J.increment,re=J.decrement,ie=(0,m.useState)(!1),le=(0,i.Z)(ie,2),ue=le[0],ae=le[1],oe=!(g||y),se=(0,m.useRef)(null),ce=(0,m.useRef)(null),de=(0,m.useRef)(null),ve=(0,m.useRef)(null),fe=(0,m.useCallback)((function(e){return e.split("").filter(U).join("")}),[U]),pe=(0,m.useCallback)((function(e){var n;return null!=(n=null==_?void 0:_(e))?n:e}),[_]),me=(0,m.useCallback)((function(e){var n;return(null!=(n=null==T?void 0:T(e))?n:e).toString()}),[T]);(0,X.r)((function(){(J.valueAsNumber>b||J.valueAsNumber<v)&&(null==K||K("rangeOverflow",me(J.value),J.valueAsNumber))}),[J.valueAsNumber,J.value,me,K]),(0,$.G)((function(){if(se.current&&se.current.value!=J.value){var e=pe(se.current.value);J.setValue(fe(e))}}),[pe,fe]);var be=(0,m.useCallback)((function(){oe&&te(arguments.length>0&&void 0!==arguments[0]?arguments[0]:x)}),[te,oe,x]),he=(0,m.useCallback)((function(){oe&&re(arguments.length>0&&void 0!==arguments[0]?arguments[0]:x)}),[re,oe,x]),xe=z(be,he);L(de,"disabled",xe.stop,xe.isSpinning),L(ve,"disabled",xe.stop,xe.isSpinning);var ge=(0,m.useCallback)((function(e){if(!e.nativeEvent.isComposing){var n=pe(e.currentTarget.value);ee(fe(n)),ce.current={start:e.currentTarget.selectionStart,end:e.currentTarget.selectionEnd}}}),[ee,fe,pe]),ye=(0,m.useCallback)((function(e){var n,t,r;null==G||G(e),ce.current&&(e.target.selectionStart=null!=(t=ce.current.start)?t:null==(n=e.currentTarget.value)?void 0:n.length,e.currentTarget.selectionEnd=null!=(r=ce.current.end)?r:e.currentTarget.selectionStart)}),[G]),Ce=(0,m.useCallback)((function(e){if(!e.nativeEvent.isComposing){(function(e,n){if(null==e.key)return!0;var t=e.ctrlKey||e.altKey||e.metaKey;return!(1===e.key.length&&!t)||n(e.key)})(e,U)||e.preventDefault();var n=Ze(e)*x,t={ArrowUp:function(){return be(n)},ArrowDown:function(){return he(n)},Home:function(){return ee(v)},End:function(){return ee(b)}}[e.key];t&&(e.preventDefault(),t(e))}}),[U,x,be,he,ee,v,b]),Ze=function(e){var n=1;return(e.metaKey||e.ctrlKey)&&(n=.1),e.shiftKey&&(n=10),n},ke=(0,m.useMemo)((function(){var e=null==Q?void 0:Q(J.value);if(null!=e)return e;var n=J.value.toString();return n||void 0}),[J.value,Q]),Ne=(0,m.useCallback)((function(){var e=J.value;""!==J.value&&(/^[eE]/.test(J.value.toString())?J.setValue(""):(J.valueAsNumber<v&&(e=v),J.valueAsNumber>b&&(e=b),J.cast(e)))}),[J,b,v]),je=(0,m.useCallback)((function(){ae(!1),u&&Ne()}),[u,ae,Ne]),we=(0,m.useCallback)((function(){t&&requestAnimationFrame((function(){var e;null==(e=se.current)||e.focus()}))}),[t]),Ie=(0,m.useCallback)((function(e){e.preventDefault(),xe.up(),we()}),[we,xe]),Se=(0,m.useCallback)((function(e){e.preventDefault(),xe.down(),we()}),[we,xe]);!function(e,n,t,r){var i=(0,B.W)(t);(0,m.useEffect)((function(){var l="function"===typeof e?e():null!=e?e:document;if(t&&l)return l.addEventListener(n,i,r),function(){l.removeEventListener(n,i,r)}}),[n,e,r,i,t])}((function(){return se.current}),"wheel",(function(e){var n,t,r=(null!=(t=null==(n=se.current)?void 0:n.ownerDocument)?t:document).activeElement===se.current;if(I&&r){e.preventDefault();var i=Ze(e)*x,l=Math.sign(e.deltaY);-1===l?be(i):1===l&&he(i)}}),{passive:!1});var Re=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=y||s&&J.isAtMax;return(0,r.Z)((0,r.Z)({},e),{},{ref:(0,c.lq)(n,de),role:"button",tabIndex:-1,onPointerDown:(0,p.v0)(e.onPointerDown,(function(e){0!==e.button||t||Ie(e)})),onPointerLeave:(0,p.v0)(e.onPointerLeave,xe.stop),onPointerUp:(0,p.v0)(e.onPointerUp,xe.stop),disabled:t,"aria-disabled":(0,p.Qm)(t)})}),[J.isAtMax,s,Ie,xe.stop,y]),Fe=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=y||s&&J.isAtMin;return(0,r.Z)((0,r.Z)({},e),{},{ref:(0,c.lq)(n,ve),role:"button",tabIndex:-1,onPointerDown:(0,p.v0)(e.onPointerDown,(function(e){0!==e.button||t||Se(e)})),onPointerLeave:(0,p.v0)(e.onPointerLeave,xe.stop),onPointerUp:(0,p.v0)(e.onPointerUp,xe.stop),disabled:t,"aria-disabled":(0,p.Qm)(t)})}),[J.isAtMin,s,Se,xe.stop,y]),Pe=(0,m.useCallback)((function(){var e,n,t,i,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({name:R,inputMode:w,type:"text",pattern:N,"aria-labelledby":O,"aria-label":P,"aria-describedby":F,id:S,disabled:y},l),{},{readOnly:null!=(e=l.readOnly)?e:g,"aria-readonly":null!=(n=l.readOnly)?n:g,"aria-required":null!=(t=l.required)?t:C,required:null!=(i=l.required)?i:C,ref:(0,c.lq)(se,u),value:me(J.value),role:"spinbutton","aria-valuemin":v,"aria-valuemax":b,"aria-valuenow":Number.isNaN(J.valueAsNumber)?void 0:J.valueAsNumber,"aria-invalid":(0,p.Qm)(null!=Z?Z:J.isOutOfRange),"aria-valuetext":ke,autoComplete:"off",autoCorrect:"off",onChange:(0,p.v0)(l.onChange,ge),onKeyDown:(0,p.v0)(l.onKeyDown,Ce),onFocus:(0,p.v0)(l.onFocus,ye,(function(){return ae(!0)})),onBlur:(0,p.v0)(l.onBlur,H,je)})}),[R,w,N,O,P,me,F,S,y,C,g,Z,J.value,J.valueAsNumber,J.isOutOfRange,v,b,ke,ge,Ce,ye,H,je]);return{value:me(J.value),valueAsNumber:J.valueAsNumber,isFocused:ue,isDisabled:y,isReadOnly:g,getIncrementButtonProps:Re,getDecrementButtonProps:Fe,getInputProps:Pe,htmlProps:W}}var re=["htmlProps"],ie=(0,s.k)({name:"NumberInputStylesContext",errorMessage:"useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<NumberInput />\" "}),le=(0,i.Z)(ie,2),ue=le[0],ae=le[1],oe=(0,s.k)({name:"NumberInputContext",errorMessage:"useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"}),se=(0,i.Z)(oe,2),ce=se[0],de=se[1],ve=(0,d.G)((function(e,n){var t=(0,v.jC)("NumberInput",e),i=te(F((0,f.Lr)(e))),l=i.htmlProps,u=(0,o.Z)(i,re),s=(0,m.useMemo)((function(){return u}),[u]);return(0,b.jsx)(ce,{value:s,children:(0,b.jsx)(ue,{value:t,children:(0,b.jsx)(a.m.div,(0,r.Z)((0,r.Z)({},l),{},{ref:n,className:(0,p.cx)("chakra-numberinput",e.className),__css:(0,r.Z)({position:"relative",zIndex:0},t.root)}))})})}));ve.displayName="NumberInput";var fe=(0,d.G)((function(e,n){var t=ae();return(0,b.jsx)(a.m.div,(0,r.Z)((0,r.Z)({"aria-hidden":!0,ref:n},e),{},{__css:(0,r.Z)({display:"flex",flexDirection:"column",position:"absolute",top:"0",insetEnd:"0px",margin:"1px",height:"calc(100% - 2px)",zIndex:1},t.stepperGroup)}))}));fe.displayName="NumberInputStepper";var pe=(0,d.G)((function(e,n){var t=(0,de().getInputProps)(e,n),i=ae();return(0,b.jsx)(a.m.input,(0,r.Z)((0,r.Z)({},t),{},{className:(0,p.cx)("chakra-numberinput__field",e.className),__css:(0,r.Z)({width:"100%"},i.field)}))}));pe.displayName="NumberInputField";var me=(0,a.m)("div",{baseStyle:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,transitionProperty:"common",transitionDuration:"normal",userSelect:"none",cursor:"pointer",lineHeight:"normal"}}),be=(0,d.G)((function(e,n){var t,i=ae(),l=(0,de().getDecrementButtonProps)(e,n);return(0,b.jsx)(me,(0,r.Z)((0,r.Z)({},l),{},{__css:i.stepper,children:null!=(t=e.children)?t:(0,b.jsx)(q,{})}))}));be.displayName="NumberDecrementStepper";var he=(0,d.G)((function(e,n){var t,i=(0,de().getIncrementButtonProps)(e,n),l=ae();return(0,b.jsx)(me,(0,r.Z)((0,r.Z)({},i),{},{__css:l.stepper,children:null!=(t=e.children)?t:(0,b.jsx)(T,{})}))}));he.displayName="NumberIncrementStepper";var xe=t(6582),ge=t(2577),ye=t(3433),Ce=t(1243),Ze=t(8404),ke=function(e,n){var t,i=null!==n&&void 0!==n?n:{},l=i.query,u=i.axios,a=null!==(t=null===l||void 0===l?void 0:l.queryKey)&&void 0!==t?t:function(e){return["/?s"].concat((0,ye.Z)(e?[e]:[]))}(e);return(0,r.Z)({queryKey:a,queryFn:function(n){var t=n.signal;return function(e,n){return Ce.Z.get("/?s",(0,r.Z)((0,r.Z)({},n),{},{params:(0,r.Z)((0,r.Z)({},e),null===n||void 0===n?void 0:n.params)}))}(e,(0,r.Z)({signal:t},u))}},l)},Ne=t(2617),je=function(){var e,n,t,o,s,c=(0,m.useState)(""),d=(0,i.Z)(c,2),v=d[0],f=d[1],p=(0,m.useState)(""),h=(0,i.Z)(p,2),x=h[0],g=h[1],y=(0,m.useState)(1),C=(0,i.Z)(y,2),Z=C[0],k=C[1],N=(0,m.useState)(!1),j=(0,i.Z)(N,2),w=j[0],I=j[1],S=(0,m.useState)(0),R=(0,i.Z)(S,2),F=R[0],P=R[1],E=function(e,n){var t=ke(e,n),r=(0,Ze.a)(t);return r.queryKey=t.queryKey,r}({s:x,page:Z},{query:{enabled:!!x}}),q=E.data,T=E.isLoading,_=E.isFetching,L=E.isFetched,B=(0,m.useMemo)((function(){var e;return null!==q&&void 0!==q&&null!==(e=q.data)&&void 0!==e&&e.totalResults?Number(q.data.totalResults):null}),[null===q||void 0===q?void 0:q.data.totalResults]),W=(0,m.useMemo)((function(){return B?Math.ceil(B/10):null}),[B]);return(0,b.jsxs)(l.g,{align:"center",p:"5",children:[(0,b.jsxs)(u.U,{id:"search",as:a.m.form,onSubmit:function(e){e.preventDefault(),g(v),k(1)},children:[(0,b.jsx)(O,{w:["200px","250px"],border:"solid 1px",onChange:function(e){return f(e.currentTarget.value)},placeholder:"Type something here..."}),(0,b.jsx)(M.z,{type:"submit",form:"search",isDisabled:!v,isLoading:_,children:"Search"})]}),!(null!==q&&void 0!==q&&null!==(e=q.data)&&void 0!==e&&null!==(n=e.Search)&&void 0!==n&&n.length)&&L&&(0,b.jsx)(D.xu,{p:"20px",children:"No results"}),T&&_?null:(0,b.jsx)(A.r,{templateColumns:"repeat(auto-fit, 200px)",h:"fit-content",w:{base:"full",xl:"1000px"},justifyContent:"center",children:null===q||void 0===q||null===(t=q.data)||void 0===t||null===(o=t.Search)||void 0===o?void 0:o.map((function(e){return(0,b.jsx)(Ne.Z,(0,r.Z)((0,r.Z)({},e),{},{children:e.Title}),e.imdbID)}))}),!(null===q||void 0===q||null===(s=q.data.Search)||void 0===s||!s.length)&&(0,b.jsx)(D.xu,{children:w?(0,b.jsxs)(u.U,{children:[(0,b.jsxs)(ve,{size:"sm",maxW:16,min:0,max:null!==W&&void 0!==W?W:0,value:F,onChange:function(e){return P(Number(e))},children:[(0,b.jsx)(pe,{}),(0,b.jsxs)(fe,{children:[(0,b.jsx)(he,{}),(0,b.jsx)(be,{})]})]}),(0,b.jsxs)(D.xu,{children:[" / ",W]}),(0,b.jsx)(M.z,{size:"sm",onClick:function(){k(F),I(!1)},children:"Go"})]}):(0,b.jsxs)(u.U,{children:[(0,b.jsx)(M.z,{isDisabled:!v||Z<=1,onClick:function(){return k((function(e){return e>1?e-1:e}))},children:"<"}),(0,b.jsx)(xe.k,{justify:"center",minW:"100px",children:_?(0,b.jsx)(ge.$,{}):(0,b.jsx)(M.z,{variant:"link",fontWeight:"normal",color:"black",onClick:function(){P(Z),I((function(e){return!e}))},children:"Page ".concat(Z," / ").concat(W)})}),(0,b.jsx)(M.z,{isDisabled:!v||Z===W,onClick:function(){return k((function(e){return Z===W?e:e+1}))},children:">"})]})})]})}},3584:function(e,n,t){t.d(n,{c:function(){return a}});var r=t(9439),i=t(5330),l=t(2791),u=t(7601),a=function(){var e=(0,i.FV)(u.M),n=(0,r.Z)(e,2),t=n[0],a=n[1],o=(0,l.useCallback)((function(e){return t.includes(e)}),[t]);return{toggleIsFavourite:function(e){a((function(n){var t=n.indexOf(e);return t>-1?n.slice(0,t).concat(n.slice(t+1)):n.concat(e)}))},favourites:t,getIsFavourite:o}}},7601:function(e,n,t){t.d(n,{M:function(){return l}});var r=t(5330),i=(0,t(9386).J)().persistAtom,l=(0,r.cn)({key:"favouriteMovieListState",default:[],effects_UNSTABLE:[i]})}}]);
//# sourceMappingURL=75.88311337.chunk.js.map