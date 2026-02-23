import{r as _t,a as ut,g as mt,k as dt,b as U,j as M,L as ct}from"./index-Caw1tP4e.js";var q={exports:{}},A={},B={exports:{}},$,J;function wt(){if(J)return $;J=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return $=t,$}var V,Q;function yt(){if(Q)return V;Q=1;var t=wt();function c(){}function i(){}return i.resetWarningCache=c,V=function(){function a(w,m,W,h,D,s){if(s!==t){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}a.isRequired=a;function S(){return a}var o={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:S,element:a,elementType:a,instanceOf:S,node:a,objectOf:S,oneOf:S,oneOfType:S,shape:S,exact:S,checkPropTypes:i,resetWarningCache:c};return o.PropTypes=o,o},V}var Z;function ft(){return Z||(Z=1,B.exports=yt()()),B.exports}var F={exports:{}},tt;function vt(){if(tt)return F.exports;tt=1;function t(i){var a,S,o="";if(typeof i=="string"||typeof i=="number")o+=i;else if(typeof i=="object")if(Array.isArray(i)){var w=i.length;for(a=0;a<w;a++)i[a]&&(S=t(i[a]))&&(o&&(o+=" "),o+=S)}else for(S in i)i[S]&&(o&&(o+=" "),o+=S);return o}function c(){for(var i,a,S=0,o="",w=arguments.length;S<w;S++)(i=arguments[S])&&(a=t(i))&&(o&&(o+=" "),o+=a);return o}return F.exports=c,F.exports.clsx=c,F.exports}var N={},H={},et;function L(){if(et)return H;et=1,Object.defineProperty(H,"__esModule",{value:!0}),H.dontSetMe=S,H.findInArray=t,H.int=a,H.isFunction=c,H.isNum=i;function t(o,w){for(let m=0,W=o.length;m<W;m++)if(w.apply(w,[o[m],m,o]))return o[m]}function c(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Function]"}function i(o){return typeof o=="number"&&!isNaN(o)}function a(o){return parseInt(o,10)}function S(o,w,m){if(o[w])return new Error(`Invalid prop ${w} passed to ${m} - do not set this, set it on the child.`)}return H}var k={},nt;function bt(){if(nt)return k;nt=1,Object.defineProperty(k,"__esModule",{value:!0}),k.browserPrefixToKey=i,k.browserPrefixToStyle=a,k.default=void 0,k.getPrefix=c;const t=["Moz","Webkit","O","ms"];function c(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const w=window.document?.documentElement?.style;if(!w||o in w)return"";for(let m=0;m<t.length;m++)if(i(o,t[m])in w)return t[m];return""}function i(o,w){return w?`${w}${S(o)}`:o}function a(o,w){return w?`-${w.toLowerCase()}-${o}`:o}function S(o){let w="",m=!0;for(let W=0;W<o.length;W++)m?(w+=o[W].toUpperCase(),m=!1):o[W]==="-"?m=!0:w+=o[W];return w}return k.default=c(),k}var ot;function G(){if(ot)return N;ot=1,Object.defineProperty(N,"__esModule",{value:!0}),N.addClassName=g,N.addEvent=w,N.addUserSelectStyles=_,N.createCSSTransform=d,N.createSVGTransform=x,N.getTouch=l,N.getTouchIdentifier=u,N.getTranslation=y,N.innerHeight=D,N.innerWidth=s,N.matchesSelector=S,N.matchesSelectorAndParentsTo=o,N.offsetXYFromParent=r,N.outerHeight=W,N.outerWidth=h,N.removeClassName=b,N.removeEvent=m,N.scheduleRemoveUserSelectStyles=f;var t=L(),c=i(bt());function i(e,n){if(typeof WeakMap=="function")var p=new WeakMap,P=new WeakMap;return(i=function(T,E){if(!E&&T&&T.__esModule)return T;var C,R,Y={__proto__:null,default:T};if(T===null||typeof T!="object"&&typeof T!="function")return Y;if(C=E?P:p){if(C.has(T))return C.get(T);C.set(T,Y)}for(const O in T)O!=="default"&&{}.hasOwnProperty.call(T,O)&&((R=(C=Object.defineProperty)&&Object.getOwnPropertyDescriptor(T,O))&&(R.get||R.set)?C(Y,O,R):Y[O]=T[O]);return Y})(e,n)}let a="";function S(e,n){return a||(a=(0,t.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(p){return(0,t.isFunction)(e[p])})),(0,t.isFunction)(e[a])?e[a](n):!1}function o(e,n,p){let P=e;do{if(S(P,n))return!0;if(P===p)return!1;P=P.parentNode}while(P);return!1}function w(e,n,p,P){if(!e)return;const T={capture:!0,...P};e.addEventListener?e.addEventListener(n,p,T):e.attachEvent?e.attachEvent("on"+n,p):e["on"+n]=p}function m(e,n,p,P){if(!e)return;const T={capture:!0,...P};e.removeEventListener?e.removeEventListener(n,p,T):e.detachEvent?e.detachEvent("on"+n,p):e["on"+n]=null}function W(e){let n=e.clientHeight;const p=e.ownerDocument.defaultView.getComputedStyle(e);return n+=(0,t.int)(p.borderTopWidth),n+=(0,t.int)(p.borderBottomWidth),n}function h(e){let n=e.clientWidth;const p=e.ownerDocument.defaultView.getComputedStyle(e);return n+=(0,t.int)(p.borderLeftWidth),n+=(0,t.int)(p.borderRightWidth),n}function D(e){let n=e.clientHeight;const p=e.ownerDocument.defaultView.getComputedStyle(e);return n-=(0,t.int)(p.paddingTop),n-=(0,t.int)(p.paddingBottom),n}function s(e){let n=e.clientWidth;const p=e.ownerDocument.defaultView.getComputedStyle(e);return n-=(0,t.int)(p.paddingLeft),n-=(0,t.int)(p.paddingRight),n}function r(e,n,p){const T=n===n.ownerDocument.body?{left:0,top:0}:n.getBoundingClientRect(),E=(e.clientX+n.scrollLeft-T.left)/p,C=(e.clientY+n.scrollTop-T.top)/p;return{x:E,y:C}}function d(e,n){const p=y(e,n,"px");return{[(0,c.browserPrefixToKey)("transform",c.default)]:p}}function x(e,n){return y(e,n,"")}function y(e,n,p){let{x:P,y:T}=e,E=`translate(${P}${p},${T}${p})`;if(n){const C=`${typeof n.x=="string"?n.x:n.x+p}`,R=`${typeof n.y=="string"?n.y:n.y+p}`;E=`translate(${C}, ${R})`+E}return E}function l(e,n){return e.targetTouches&&(0,t.findInArray)(e.targetTouches,p=>n===p.identifier)||e.changedTouches&&(0,t.findInArray)(e.changedTouches,p=>n===p.identifier)}function u(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function _(e){if(!e)return;let n=e.getElementById("react-draggable-style-el");n||(n=e.createElement("style"),n.type="text/css",n.id="react-draggable-style-el",n.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,n.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(n)),e.body&&g(e.body,"react-draggable-transparent-selection")}function f(e){window.requestAnimationFrame?window.requestAnimationFrame(()=>{v(e)}):v(e)}function v(e){if(e)try{if(e.body&&b(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const n=(e.defaultView||window).getSelection();n&&n.type!=="Caret"&&n.removeAllRanges()}}catch{}}function g(e,n){e.classList?e.classList.add(n):e.className.match(new RegExp(`(?:^|\\s)${n}(?!\\S)`))||(e.className+=` ${n}`)}function b(e,n){e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp(`(?:^|\\s)${n}(?!\\S)`,"g"),"")}return N}var j={},rt;function ht(){if(rt)return j;rt=1,Object.defineProperty(j,"__esModule",{value:!0}),j.canDragX=S,j.canDragY=o,j.createCoreData=m,j.createDraggableData=W,j.getBoundPosition=i,j.getControlPosition=w,j.snapToGrid=a;var t=L(),c=G();function i(s,r,d){if(!s.props.bounds)return[r,d];let{bounds:x}=s.props;x=typeof x=="string"?x:h(x);const y=D(s);if(typeof x=="string"){const{ownerDocument:l}=y,u=l.defaultView;let _;if(x==="parent"?_=y.parentNode:_=y.getRootNode().querySelector(x),!(_ instanceof u.HTMLElement))throw new Error('Bounds selector "'+x+'" could not find an element.');const f=_,v=u.getComputedStyle(y),g=u.getComputedStyle(f);x={left:-y.offsetLeft+(0,t.int)(g.paddingLeft)+(0,t.int)(v.marginLeft),top:-y.offsetTop+(0,t.int)(g.paddingTop)+(0,t.int)(v.marginTop),right:(0,c.innerWidth)(f)-(0,c.outerWidth)(y)-y.offsetLeft+(0,t.int)(g.paddingRight)-(0,t.int)(v.marginRight),bottom:(0,c.innerHeight)(f)-(0,c.outerHeight)(y)-y.offsetTop+(0,t.int)(g.paddingBottom)-(0,t.int)(v.marginBottom)}}return(0,t.isNum)(x.right)&&(r=Math.min(r,x.right)),(0,t.isNum)(x.bottom)&&(d=Math.min(d,x.bottom)),(0,t.isNum)(x.left)&&(r=Math.max(r,x.left)),(0,t.isNum)(x.top)&&(d=Math.max(d,x.top)),[r,d]}function a(s,r,d){const x=Math.round(r/s[0])*s[0],y=Math.round(d/s[1])*s[1];return[x,y]}function S(s){return s.props.axis==="both"||s.props.axis==="x"}function o(s){return s.props.axis==="both"||s.props.axis==="y"}function w(s,r,d){const x=typeof r=="number"?(0,c.getTouch)(s,r):null;if(typeof r=="number"&&!x)return null;const y=D(d),l=d.props.offsetParent||y.offsetParent||y.ownerDocument.body;return(0,c.offsetXYFromParent)(x||s,l,d.props.scale)}function m(s,r,d){const x=!(0,t.isNum)(s.lastX),y=D(s);return x?{node:y,deltaX:0,deltaY:0,lastX:r,lastY:d,x:r,y:d}:{node:y,deltaX:r-s.lastX,deltaY:d-s.lastY,lastX:s.lastX,lastY:s.lastY,x:r,y:d}}function W(s,r){const d=s.props.scale;return{node:r.node,x:s.state.x+r.deltaX/d,y:s.state.y+r.deltaY/d,deltaX:r.deltaX/d,deltaY:r.deltaY/d,lastX:s.state.x,lastY:s.state.y}}function h(s){return{left:s.left,top:s.top,right:s.right,bottom:s.bottom}}function D(s){const r=s.findDOMNode();if(!r)throw new Error("<DraggableCore>: Unmounted during event!");return r}return j}var X={},I={},it;function pt(){if(it)return I;it=1,Object.defineProperty(I,"__esModule",{value:!0}),I.default=t;function t(){}return I}var at;function St(){if(at)return X;at=1,Object.defineProperty(X,"__esModule",{value:!0}),X.default=void 0;var t=W(_t()),c=m(ft()),i=m(ut()),a=G(),S=ht(),o=L(),w=m(pt());function m(y){return y&&y.__esModule?y:{default:y}}function W(y,l){if(typeof WeakMap=="function")var u=new WeakMap,_=new WeakMap;return(W=function(f,v){if(!v&&f&&f.__esModule)return f;var g,b,e={__proto__:null,default:f};if(f===null||typeof f!="object"&&typeof f!="function")return e;if(g=v?_:u){if(g.has(f))return g.get(f);g.set(f,e)}for(const n in f)n!=="default"&&{}.hasOwnProperty.call(f,n)&&((b=(g=Object.defineProperty)&&Object.getOwnPropertyDescriptor(f,n))&&(b.get||b.set)?g(e,n,b):e[n]=f[n]);return e})(y,l)}function h(y,l,u){return(l=D(l))in y?Object.defineProperty(y,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):y[l]=u,y}function D(y){var l=s(y,"string");return typeof l=="symbol"?l:l+""}function s(y,l){if(typeof y!="object"||!y)return y;var u=y[Symbol.toPrimitive];if(u!==void 0){var _=u.call(y,l);if(typeof _!="object")return _;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(y)}const r={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let d=r.mouse,x=class extends t.Component{constructor(){super(...arguments),h(this,"dragging",!1),h(this,"lastX",NaN),h(this,"lastY",NaN),h(this,"touchIdentifier",null),h(this,"mounted",!1),h(this,"handleDragStart",l=>{if(this.props.onMouseDown(l),!this.props.allowAnyClick&&typeof l.button=="number"&&l.button!==0)return!1;const u=this.findDOMNode();if(!u||!u.ownerDocument||!u.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:_}=u;if(this.props.disabled||!(l.target instanceof _.defaultView.Node)||this.props.handle&&!(0,a.matchesSelectorAndParentsTo)(l.target,this.props.handle,u)||this.props.cancel&&(0,a.matchesSelectorAndParentsTo)(l.target,this.props.cancel,u))return;l.type==="touchstart"&&!this.props.allowMobileScroll&&l.preventDefault();const f=(0,a.getTouchIdentifier)(l);this.touchIdentifier=f;const v=(0,S.getControlPosition)(l,f,this);if(v==null)return;const{x:g,y:b}=v,e=(0,S.createCoreData)(this,g,b);(0,w.default)("DraggableCore: handleDragStart: %j",e),(0,w.default)("calling",this.props.onStart),!(this.props.onStart(l,e)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,a.addUserSelectStyles)(_),this.dragging=!0,this.lastX=g,this.lastY=b,(0,a.addEvent)(_,d.move,this.handleDrag),(0,a.addEvent)(_,d.stop,this.handleDragStop))}),h(this,"handleDrag",l=>{const u=(0,S.getControlPosition)(l,this.touchIdentifier,this);if(u==null)return;let{x:_,y:f}=u;if(Array.isArray(this.props.grid)){let b=_-this.lastX,e=f-this.lastY;if([b,e]=(0,S.snapToGrid)(this.props.grid,b,e),!b&&!e)return;_=this.lastX+b,f=this.lastY+e}const v=(0,S.createCoreData)(this,_,f);if((0,w.default)("DraggableCore: handleDrag: %j",v),this.props.onDrag(l,v)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const e=document.createEvent("MouseEvents");e.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}return}this.lastX=_,this.lastY=f}),h(this,"handleDragStop",l=>{if(!this.dragging)return;const u=(0,S.getControlPosition)(l,this.touchIdentifier,this);if(u==null)return;let{x:_,y:f}=u;if(Array.isArray(this.props.grid)){let e=_-this.lastX||0,n=f-this.lastY||0;[e,n]=(0,S.snapToGrid)(this.props.grid,e,n),_=this.lastX+e,f=this.lastY+n}const v=(0,S.createCoreData)(this,_,f);if(this.props.onStop(l,v)===!1||this.mounted===!1)return!1;const b=this.findDOMNode();b&&this.props.enableUserSelectHack&&(0,a.scheduleRemoveUserSelectStyles)(b.ownerDocument),(0,w.default)("DraggableCore: handleDragStop: %j",v),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,b&&((0,w.default)("DraggableCore: Removing handlers"),(0,a.removeEvent)(b.ownerDocument,d.move,this.handleDrag),(0,a.removeEvent)(b.ownerDocument,d.stop,this.handleDragStop))}),h(this,"onMouseDown",l=>(d=r.mouse,this.handleDragStart(l))),h(this,"onMouseUp",l=>(d=r.mouse,this.handleDragStop(l))),h(this,"onTouchStart",l=>(d=r.touch,this.handleDragStart(l))),h(this,"onTouchEnd",l=>(d=r.touch,this.handleDragStop(l)))}componentDidMount(){this.mounted=!0;const l=this.findDOMNode();l&&(0,a.addEvent)(l,r.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const l=this.findDOMNode();if(l){const{ownerDocument:u}=l;(0,a.removeEvent)(u,r.mouse.move,this.handleDrag),(0,a.removeEvent)(u,r.touch.move,this.handleDrag),(0,a.removeEvent)(u,r.mouse.stop,this.handleDragStop),(0,a.removeEvent)(u,r.touch.stop,this.handleDragStop),(0,a.removeEvent)(l,r.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,a.scheduleRemoveUserSelectStyles)(u)}}findDOMNode(){return this.props?.nodeRef?this.props?.nodeRef?.current:i.default.findDOMNode(this)}render(){return t.cloneElement(t.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};return X.default=x,h(x,"displayName","DraggableCore"),h(x,"propTypes",{allowAnyClick:c.default.bool,allowMobileScroll:c.default.bool,children:c.default.node.isRequired,disabled:c.default.bool,enableUserSelectHack:c.default.bool,offsetParent:function(y,l){if(y[l]&&y[l].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:c.default.arrayOf(c.default.number),handle:c.default.string,cancel:c.default.string,nodeRef:c.default.object,onStart:c.default.func,onDrag:c.default.func,onStop:c.default.func,onMouseDown:c.default.func,scale:c.default.number,className:o.dontSetMe,style:o.dontSetMe,transform:o.dontSetMe}),h(x,"defaultProps",{allowAnyClick:!1,allowMobileScroll:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1}),X}var st;function Dt(){return st||(st=1,(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return W.default}}),t.default=void 0;var c=s(_t()),i=D(ft()),a=D(ut()),S=vt(),o=G(),w=ht(),m=L(),W=D(St()),h=D(pt());function D(u){return u&&u.__esModule?u:{default:u}}function s(u,_){if(typeof WeakMap=="function")var f=new WeakMap,v=new WeakMap;return(s=function(g,b){if(!b&&g&&g.__esModule)return g;var e,n,p={__proto__:null,default:g};if(g===null||typeof g!="object"&&typeof g!="function")return p;if(e=b?v:f){if(e.has(g))return e.get(g);e.set(g,p)}for(const P in g)P!=="default"&&{}.hasOwnProperty.call(g,P)&&((n=(e=Object.defineProperty)&&Object.getOwnPropertyDescriptor(g,P))&&(n.get||n.set)?e(p,P,n):p[P]=g[P]);return p})(u,_)}function r(){return r=Object.assign?Object.assign.bind():function(u){for(var _=1;_<arguments.length;_++){var f=arguments[_];for(var v in f)({}).hasOwnProperty.call(f,v)&&(u[v]=f[v])}return u},r.apply(null,arguments)}function d(u,_,f){return(_=x(_))in u?Object.defineProperty(u,_,{value:f,enumerable:!0,configurable:!0,writable:!0}):u[_]=f,u}function x(u){var _=y(u,"string");return typeof _=="symbol"?_:_+""}function y(u,_){if(typeof u!="object"||!u)return u;var f=u[Symbol.toPrimitive];if(f!==void 0){var v=f.call(u,_);if(typeof v!="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return(_==="string"?String:Number)(u)}class l extends c.Component{static getDerivedStateFromProps(_,f){let{position:v}=_,{prevPropsPosition:g}=f;return v&&(!g||v.x!==g.x||v.y!==g.y)?((0,h.default)("Draggable: getDerivedStateFromProps %j",{position:v,prevPropsPosition:g}),{x:v.x,y:v.y,prevPropsPosition:{...v}}):null}constructor(_){super(_),d(this,"onDragStart",(f,v)=>{if((0,h.default)("Draggable: onDragStart: %j",v),this.props.onStart(f,(0,w.createDraggableData)(this,v))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),d(this,"onDrag",(f,v)=>{if(!this.state.dragging)return!1;(0,h.default)("Draggable: onDrag: %j",v);const g=(0,w.createDraggableData)(this,v),b={x:g.x,y:g.y,slackX:0,slackY:0};if(this.props.bounds){const{x:n,y:p}=b;b.x+=this.state.slackX,b.y+=this.state.slackY;const[P,T]=(0,w.getBoundPosition)(this,b.x,b.y);b.x=P,b.y=T,b.slackX=this.state.slackX+(n-b.x),b.slackY=this.state.slackY+(p-b.y),g.x=b.x,g.y=b.y,g.deltaX=b.x-this.state.x,g.deltaY=b.y-this.state.y}if(this.props.onDrag(f,g)===!1)return!1;this.setState(b)}),d(this,"onDragStop",(f,v)=>{if(!this.state.dragging||this.props.onStop(f,(0,w.createDraggableData)(this,v))===!1)return!1;(0,h.default)("Draggable: onDragStop: %j",v);const b={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:n,y:p}=this.props.position;b.x=n,b.y=p}this.setState(b)}),this.state={dragging:!1,dragged:!1,x:_.position?_.position.x:_.defaultPosition.x,y:_.position?_.position.y:_.defaultPosition.y,prevPropsPosition:{..._.position},slackX:0,slackY:0,isElementSVG:!1},_.position&&!(_.onDrag||_.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.state.dragging&&this.setState({dragging:!1})}findDOMNode(){return this.props?.nodeRef?.current??a.default.findDOMNode(this)}render(){const{axis:_,bounds:f,children:v,defaultPosition:g,defaultClassName:b,defaultClassNameDragging:e,defaultClassNameDragged:n,position:p,positionOffset:P,scale:T,...E}=this.props;let C={},R=null;const O=!!!p||this.state.dragging,z=p||g,K={x:(0,w.canDragX)(this)&&O?this.state.x:z.x,y:(0,w.canDragY)(this)&&O?this.state.y:z.y};this.state.isElementSVG?R=(0,o.createSVGTransform)(K,P):C=(0,o.createCSSTransform)(K,P);const gt=(0,S.clsx)(v.props.className||"",b,{[e]:this.state.dragging,[n]:this.state.dragged});return c.createElement(W.default,r({},E,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),c.cloneElement(c.Children.only(v),{className:gt,style:{...v.props.style,...C},transform:R}))}}t.default=l,d(l,"displayName","Draggable"),d(l,"propTypes",{...W.default.propTypes,axis:i.default.oneOf(["both","x","y","none"]),bounds:i.default.oneOfType([i.default.shape({left:i.default.number,right:i.default.number,top:i.default.number,bottom:i.default.number}),i.default.string,i.default.oneOf([!1])]),defaultClassName:i.default.string,defaultClassNameDragging:i.default.string,defaultClassNameDragged:i.default.string,defaultPosition:i.default.shape({x:i.default.number,y:i.default.number}),positionOffset:i.default.shape({x:i.default.oneOfType([i.default.number,i.default.string]),y:i.default.oneOfType([i.default.number,i.default.string])}),position:i.default.shape({x:i.default.number,y:i.default.number}),className:m.dontSetMe,style:m.dontSetMe,transform:m.dontSetMe}),d(l,"defaultProps",{...W.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(A)),A}var lt;function xt(){if(lt)return q.exports;lt=1;const{default:t,DraggableCore:c}=Dt();return q.exports=t,q.exports.default=t,q.exports.DraggableCore=c,q.exports}var Wt=xt();const Pt=mt(Wt);function Tt({children:t,width:c,height:i,x:a,y:S,zIndex:o,name:w,to:m,onMove:W}){const h=dt(),D=U.useRef(null),s=(r,d)=>{W(d.x,d.y)};return M.jsx(Pt,{nodeRef:D,defaultPosition:{x:a,y:S},grid:[h.fontWidth,h.fontHeight],onStop:s,handle:"strong",children:M.jsxs("div",{ref:D,className:"ascii-border ascii-text absolute ascii-shadow-bl",style:{width:c,height:i,zIndex:o},children:[M.jsx("strong",{className:"pointer-events-auto cursor-grab react-draggable-dragging:cursor-grabbing",children:M.jsxs("div",{className:"w-full h-8 ascii ascii-border-b whitespace-pre flex justify-end px-2 space-x-2",children:[M.jsx("div",{className:"absolute left-5",children:w}),M.jsx("div",{children:"-"}),M.jsx("div",{children:"□"}),M.jsx("div",{children:"×"})]})}),M.jsx("div",{className:"absolute whitespace-pre pl-5 top-4",children:M.jsx(ct,{to:m,children:t})})]})})}function Nt(t,c,i,a,S,o,w,m){return t+i>=S&&t<=S+w&&c+a>=o&&c<=o+m}function Mt(t,c,i){const a=[{width:t.windowWidth>=1440?t.fontWidth*32:t.windowWidth>=1280?t.fontWidth*29:t.windowWidth>=768?t.fontWidth*26:t.fontWidth*16,height:t.windowWidth>=1440?t.fontHeight*17:t.windowWidth>=1280?t.fontHeight*16:t.windowWidth>=768?t.fontHeight*14:t.fontHeight*10,x:0,y:0,zIndex:10,name:"cv.txt"},{width:t.windowWidth>=1440?t.fontWidth*22:t.windowWidth>=1280?t.fontWidth*20:t.windowWidth>=768?t.fontWidth*18:t.fontWidth*12,height:t.windowWidth>=1440||t.windowWidth>=1280?t.fontHeight*14:t.windowWidth>=768?t.fontHeight*13:t.fontHeight*9,x:0,y:0,zIndex:10,name:t.windowWidth>=768?"me.txt":"me.."},{width:t.windowWidth>=1440?t.fontWidth*31:t.windowWidth>=1280?t.fontWidth*29:t.windowWidth>=768?t.fontWidth*25:t.fontWidth*20,height:t.windowWidth>=1440?t.fontHeight*14:t.windowWidth>=1280?t.fontHeight*13:t.windowWidth>=768?t.fontHeight*12:t.fontHeight*9,x:0,y:0,zIndex:10,name:"art.txt"},{width:t.windowWidth>=1440?t.fontWidth*32:t.windowWidth>=1280?t.fontWidth*29:t.windowWidth>=768?t.fontWidth*23:t.fontWidth*18,height:t.windowWidth>=1440?t.fontHeight*16:t.windowWidth>=1280?t.fontHeight*15:t.windowWidth>=768?t.fontHeight*12:t.fontHeight*9,x:0,y:0,zIndex:10,name:"work.txt"}],S=[];let o=0,w=Math.min(568,t.windowHeight-i-t.fontHeight);for(;a.length>0;){o++;const m=a.pop();let W=Math.random()*(c-m.width)+(t.windowWidth/2-c/2),h=Math.random()*(w-m.height)+i;m.x=Math.round(W/t.fontWidth)*t.fontWidth,m.y=Math.round(h/t.fontHeight)*t.fontHeight;const D={x:m.x+m.width/8,y:m.y+m.height/8,width:m.width-m.width/4,height:m.height-m.height/4};let s=!1;for(const r of S){const d={x:r.x+r.width/8,y:r.y+r.height/8,width:r.width-r.width/4,height:r.height-r.height/4};if(Nt(D.x,D.y,D.width,D.height,d.x,d.y,d.width,d.height)){s=!0;break}}!s||o>1e4?S.push(m):a.unshift(m)}return S}function jt(){const t=dt(),[c,i]=U.useState([]),[a,S]=U.useState(0),o=h=>{sessionStorage.setItem("rects",JSON.stringify({rects:h,windowWidth:t.windowWidth,windowHeight:t.windowHeight}))},w=()=>{if(!t.windowWidth||!t.windowHeight)return;let h=0;t.windowWidth>=1440?h=1440:t.windowWidth>=1280?h=1280:t.windowWidth>=1024?h=1024:t.windowWidth>=768?h=768:t.windowWidth>=640&&(h=640);let D=0;t.windowWidth>=1536?D=256+t.fontHeight*3:t.windowWidth>=1280?D=192+t.fontHeight*3:D=128+t.fontHeight*3,S(D-t.fontHeight);const s=sessionStorage.getItem("rects");if(s)i(JSON.parse(s).rects);else{const r=Mt(t,h,D);i(r),o(r)}},m=(h,D,s)=>{const r=c.map(d=>d.name===h?{...d,x:D,y:s}:d);i(r),o(r)};U.useEffect(()=>{if(t.windowWidth&&t.windowHeight){const h=sessionStorage.getItem("rects"),D=h?JSON.parse(h):null;D&&(D.windowWidth!==t.windowWidth||D.windowHeight!==t.windowHeight)&&sessionStorage.removeItem("rects"),w()}},[t.windowWidth,t.windowHeight]);const W=[{name:"cv",to:"/",content:t.windowWidth>=1440?String.raw`
   ______________________
 / \        __  _    _   \
|   |      /  )' )  /    |
 \_ |     /     (  /     |
    |    (__/    \/      |
    |                    |
    | ########           |
    |  . ~~~~~~~~~~~~~~~ |
    |  . ~~~~~~~         |
    | ###### ####        |
    |  . ~~~~~~~~~~~     |
    |  __________________|__
    \_/____________________/ 
`:t.windowWidth>=1280?String.raw`
   ____________________
 / \       __  _    _  \
|   |     /  )' )  /   |
 \_ |    /     (  /    |
    |   (__/    \/     |
    |                  |
    | ########         |
    |  . ~~~~~~~~~~~~  |
    |  . ~~~~~~~       |
    | ###### ####      |
    |  ________________|__
    \_/__________________/
`:t.windowWidth>=768?String.raw`
   _________________
 / \     __  _    _ \
|   |   /  )' )  /  |
 \_ |  /     (  /   |
    | (__/    \/    |
    |               |
    | ########      |
    |  . ~~~~~~~~~~ |
    |  _____________|__
    \_/_______________/
`:String.raw`
 __________
/\  _. , _ \
\| (__ \/  |
 | . ~~~~~ |
 | ________|_
 \/_________/
`},{name:"me",to:"/about",content:t.windowWidth>=1440?String.raw`
      _.--’”\
     /   ,__.)
    / -.’   / \
    |/,=. .=.\|
    || 6 , 6 ||
   (q   /_.   p)
    ,\  ._,  /,
    /)\     /(\
      |’...’| 
 _.''’._ v _.’''._
/       '''       \
`:t.windowWidth>=1280?String.raw`
     _.--’”\
    /   ,__.)
   / -.’   / \
   |/,=. .=.\|
   || 6 , 6 ||
  (q   /_.   p)
   ,\  ._,  /,
   /)\     /(\
     |’...’| 
_.''’._ . _.’''._
`:t.windowWidth>=768?String.raw`
    .--"'")
   / ,.-'{ \
   |/_   _\|
   | 6 , 6 |
  (q  /_.  p)
   ,\ ._, /,
   /)\___/(\
   _ |   | _
.-” ’--.--’ ”-.
`:String.raw`
 .-''").
 |/"''\|
 d ^L^ b
 )\ -'/(
_.-'-'-._
`},{name:"art",to:"/",content:t.windowWidth>=1440?String.raw`
             o\
   _________/__\_________
  |       ."_____) ---(  |
 ,'-._               .'"-|
(_____".            '   ||
  |            _.-.      |
  |   _      _/ /  \   _-|
  |__/_\-___/_______\_/  |
  | '  , /|\ ^   .  ,  ^ |
  |_____/_|_\____________|
`:t.windowWidth>=1280?String.raw`
            o\
   ________/__\________
  |     ."_____) ---(  |
 ,'-.              .'"-|
(____".        ._ '   ||
  |   _      _/  \   _-|
  |__/_\.___/_____\_/  |
  | '  , /|\   .  ,  ^ |
  |_____/_|_\__________|
`:t.windowWidth>=768?String.raw`
          o\
  _______/__\_______
 |__    "--'    --(_|
(___".       _  .' ||
 |   _     _/ \   _-|
 |__/_\___/____\_/  |
 | '  , /|\  . ,  ^ |
 |_____/_|_\________|
`:String.raw`
  _____/"\_____
 |_   "-'   -(_|
(__".    _. ' '|
 |_,-___/__\_-.|
 |____/|\______|
`},{name:"work",to:"/work",content:t.windowWidth>=1440?String.raw`
  ________________   _____
 |.--------------.|/|||||||
 ||              || |||||||
 || ~#           || |||||||
 ||              || |||||||
 ||______________|| |||||||
-|______________._| |||||||--
      /__||__   / \ |||||||
   .-' \____/   \_ \|:::::|
  _\______________'-.__
 /:::::::::':::'::\ .\\\---.
/::::====::::.:.:::\ \\_)   \
'=================='  '-----'
`:t.windowWidth>=1280?String.raw`
  ______________   ____
 |.------------.|/||||||
 ||            || ||||||
 || ~#         || ||||||
 ||____________|| ||||||
-|____________._| ||||||--
     /__||__  / \ ||||||
  .-' \____/  \_ \|::::|
  _\____________'-.__
 /::::::::':::':\ .\\\--.
/:::====::::.:.::\ \\_)  \
'================'  '----'
`:t.windowWidth>=768?String.raw`
  __________   ___
 |.--------.|/|||||
 || ~#     || |||||
 ||________|| |||||
-'----,,----' |||||-
   . (__)  / \|:::|
  _/________\._
 /::;;::.:.:\.\)-.
 '==========' '---'
`:String.raw`
  _______   __
 |:""""":|/||||
 ||_____|| ||||
-'---_---'\|::|-
 /:;;:.:.\ \D\
 '"""""""'  "'
`}];return M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"w-full ascii-border-b ascii-b-_ ascii-no-fill absolute overflow-hidden",style:{top:a-t.fontHeight}}),M.jsx("div",{className:"w-full ascii-border-b ascii-b-◡ ascii-no-fill absolute overflow-hidden",style:{top:a}}),M.jsx("div",{className:"flex justify-center w-full absolute top-0 left-0",children:M.jsx(ct,{to:"/",children:M.jsx("div",{className:"whitespace-pre ascii-text ascii-no-fill",children:t.windowWidth>=1536?String.raw`
      ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
     ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
    ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
   ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
  ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
 ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
            ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
            ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
           ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
          ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
         ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
        ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼
      `:t.windowWidth>=1280?String.raw`
    ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
   ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
  ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
 ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
         ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
        ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
       ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
      ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
     ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼     ┼┼┼┼┼┼┼┼┼┼
      `:String.raw`
  ┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼┼  ┼┼┼┼┼┼
 ┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼┼  ┼┼┼┼┼┼
┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼┼  ┼┼┼┼┼┼
     ┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼
    ┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼
   ┼┼┼┼┼┼┼┼┼┼┼   ┼┼┼┼┼
      `})})}),W.flatMap(({name:h,to:D,content:s})=>{const r=c.find(d=>d.name.startsWith(h));return r?[{rect:r,to:D,content:s}]:[]}).sort((h,D)=>h.rect.zIndex-D.rect.zIndex).map(({rect:h,to:D,content:s})=>M.jsx(Tt,{to:D,...h,onMove:(r,d)=>m(h.name,r,d),children:s},h.name))]})}export{jt as component};
