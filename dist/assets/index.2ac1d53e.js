const Dc=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}};Dc();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vo="139";const Ic=0,Xo=1,Fc=2,Tl=1,Nc=2,Xi=3,er=0,Be=1,vi=2,Al=1,_n=0,xi=1,Yo=2,jo=3,Zo=4,zc=5,ui=100,Bc=101,Oc=102,Jo=103,$o=104,Uc=200,kc=201,Hc=202,Vc=203,Cl=204,Ll=205,Gc=206,Wc=207,qc=208,Xc=209,Yc=210,jc=0,Zc=1,Jc=2,oo=3,$c=4,Kc=5,Qc=6,th=7,ls=0,eh=1,nh=2,an=0,ih=1,rh=2,sh=3,oh=4,ah=5,Rl=300,Mi=301,wi=302,ao=303,lo=304,cs=306,co=1e3,Ne=1001,ho=1002,he=1003,Ko=1004,Qo=1005,Me=1006,lh=1007,hs=1008,kn=1009,ch=1010,hh=1011,nr=1012,uh=1013,Jr=1014,zn=1015,_i=1016,dh=1017,fh=1018,yi=1020,ph=1021,mh=1022,ze=1023,gh=1024,xh=1025,On=1026,bi=1027,_h=1028,yh=1029,vh=1030,Mh=1031,wh=1033,Ms=33776,ws=33777,bs=33778,Ss=33779,ta=35840,ea=35841,na=35842,ia=35843,bh=36196,ra=37492,sa=37496,oa=37808,aa=37809,la=37810,ca=37811,ha=37812,ua=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,xa=37819,_a=37820,ya=37821,va=36492,Sh=2200,Eh=2201,Th=2202,ts=2300,es=2301,Es=2302,fi=2400,pi=2401,ns=2402,Mo=2500,Pl=2501,Ah=0,ln=3e3,Jt=3001,Ch=3200,Lh=3201,Ti=0,Rh=1,sn="srgb",Bn="srgb-linear",Ts=7680,Ph=519,ir=35044,is=35048,Ma="300 es",uo=1035;class Hn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const de=[];for(let r=0;r<256;r++)de[r]=(r<16?"0":"")+r.toString(16);let wa=1234567;const $i=Math.PI/180,rr=180/Math.PI;function Oe(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[r&255]+de[r>>8&255]+de[r>>16&255]+de[r>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function fe(r,t,e){return Math.max(t,Math.min(e,r))}function wo(r,t){return(r%t+t)%t}function Dh(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Ih(r,t,e){return r!==t?(e-r)/(t-r):0}function Ki(r,t,e){return(1-e)*r+e*t}function Fh(r,t,e,n){return Ki(r,t,1-Math.exp(-e*n))}function Nh(r,t=1){return t-Math.abs(wo(r,t*2)-t)}function zh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Bh(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Oh(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Uh(r,t){return r+Math.random()*(t-r)}function kh(r){return r*(.5-Math.random())}function Hh(r){r!==void 0&&(wa=r);let t=wa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vh(r){return r*$i}function Gh(r){return r*rr}function fo(r){return(r&r-1)===0&&r!==0}function Wh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function qh(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),p=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*p,a*l);break;case"YXY":r.set(c*p,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xh(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yh(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var jh=Object.freeze({__proto__:null,DEG2RAD:$i,RAD2DEG:rr,generateUUID:Oe,clamp:fe,euclideanModulo:wo,mapLinear:Dh,inverseLerp:Ih,lerp:Ki,damp:Fh,pingpong:Nh,smoothstep:zh,smootherstep:Bh,randInt:Oh,randFloat:Uh,randFloatSpread:kh,seededRandom:Hh,degToRad:Vh,radToDeg:Gh,isPowerOfTwo:fo,ceilPowerOfTwo:Wh,floorPowerOfTwo:rs,setQuaternionFromProperEuler:qh,normalize:Yh,denormalize:Xh});class ${constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}$.prototype.isVector2=!0;class pe{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],m=i[0],f=i[3],x=i[6],w=i[1],T=i[4],E=i[7],v=i[2],R=i[5],I=i[8];return s[0]=o*m+a*w+c*v,s[3]=o*f+a*T+c*R,s[6]=o*x+a*E+c*I,s[1]=l*m+h*w+u*v,s[4]=l*f+h*T+u*R,s[7]=l*x+h*E+u*I,s[2]=d*m+p*w+g*v,s[5]=d*f+p*T+g*R,s[8]=d*x+p*E+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,p=l*s-o*c,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=u*m,t[1]=(i*l-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=d*m,t[4]=(h*e-i*c)*m,t[5]=(i*s-a*e)*m,t[6]=p*m,t[7]=(n*c-l*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],a=i[6],c=i[1],l=i[4],h=i[7];return i[0]=e*s+n*c,i[3]=e*o+n*l,i[6]=e*a+n*h,i[1]=-n*s+e*c,i[4]=-n*o+e*l,i[7]=-n*a+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}pe.prototype.isMatrix3=!0;function Dl(r){for(let t=r.length-1;t>=0;--t)if(r[t]>65535)return!0;return!1}function sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Un(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $r(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const As={[sn]:{[Bn]:Un},[Bn]:{[sn]:$r}},Pe={legacyMode:!0,get workingColorSpace(){return Bn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.legacyMode||t===e||!t||!e)return r;if(As[t]&&As[t][e]!==void 0){const n=As[t][e];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oe={r:0,g:0,b:0},De={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Cs(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function gr(r,t){return t.r=r.r,t.g=r.g,t.b=r.b,t}class pt{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Bn){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Bn){if(t=wo(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Cs(o,s,t+1/3),this.g=Cs(o,s,t),this.b=Cs(o,s,t-1/3)}return Pe.toWorkingColorSpace(this,i),this}setStyle(t,e=sn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Pe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Pe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(c,l,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Pe.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Pe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=sn){const n=Il[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return Pe.fromWorkingColorSpace(gr(this,oe),t),fe(oe.r*255,0,255)<<16^fe(oe.g*255,0,255)<<8^fe(oe.b*255,0,255)<<0}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Bn){Pe.fromWorkingColorSpace(gr(this,oe),e);const n=oe.r,i=oe.g,s=oe.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Bn){return Pe.fromWorkingColorSpace(gr(this,oe),e),t.r=oe.r,t.g=oe.g,t.b=oe.b,t}getStyle(t=sn){return Pe.fromWorkingColorSpace(gr(this,oe),t),t!==sn?`color(${t} ${oe.r} ${oe.g} ${oe.b})`:`rgb(${oe.r*255|0},${oe.g*255|0},${oe.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(De),De.h+=t,De.s+=e,De.l+=n,this.setHSL(De.h,De.s,De.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(De),t.getHSL(mr);const n=Ki(De.h,mr.h,e),i=Ki(De.s,mr.s,e),s=Ki(De.l,mr.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}pt.NAMES=Il;pt.prototype.isColor=!0;pt.prototype.r=1;pt.prototype.g=1;pt.prototype.b=1;let Yn;class Vn{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=sr("canvas")),Yn.width=t.width,Yn.height=t.height;const n=Yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Un(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Fl{constructor(t=null){this.uuid=Oe(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ls(i[o].image)):s.push(Ls(i[o]))}else s=Ls(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ls(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Vn.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Fl.prototype.isSource=!0;let Zh=0;class ue extends Hn{constructor(t=ue.DEFAULT_IMAGE,e=ue.DEFAULT_MAPPING,n=Ne,i=Ne,s=Me,o=hs,a=ze,c=kn,l=1,h=ln){super(),Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Oe(),this.name="",this.source=new Fl(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case co:t.x=t.x-Math.floor(t.x);break;case Ne:t.x=t.x<0?0:1;break;case ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case co:t.y=t.y-Math.floor(t.y);break;case Ne:t.y=t.y<0?0:1;break;case ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ue.DEFAULT_IMAGE=null;ue.DEFAULT_MAPPING=Rl;ue.prototype.isTexture=!0;class Wt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],m=c[2],f=c[6],x=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,E=(p+1)/2,v=(x+1)/2,R=(h+d)/4,I=(u+m)/4,X=(g+f)/4;return T>E&&T>v?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=R/n,s=I/n):E>v?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=R/i,s=X/i):v<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(v),n=I/s,i=X/s),this.set(n,i,s,e),this}let w=Math.sqrt((f-g)*(f-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(u-m)/w,this.z=(d-h)/w,this.w=Math.acos((l+p+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Wt.prototype.isVector4=!0;class Te extends Hn{constructor(t,e,n={}){super(),this.width=t,this.height=e,this.depth=1,this.scissor=new Wt(0,0,t,e),this.scissorTest=!1,this.viewport=new Wt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Me,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0,this.texture.image=Object.assign({},t.texture.image),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Te.prototype.isWebGLRenderTarget=!0;class us extends ue{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}us.prototype.isDataArrayTexture=!0;class Jh extends Te{constructor(t,e,n){super(t,e),this.depth=n,this.texture=new us(null,t,e,n),this.texture.isRenderTargetTexture=!0}}Jh.prototype.isWebGLArrayRenderTarget=!0;class bo extends ue{constructor(t=null,e=1,n=1,i=1){super(null),this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}bo.prototype.isData3DTexture=!0;class $h extends Te{constructor(t,e,n){super(t,e),this.depth=n,this.texture=new bo(null,t,e,n),this.texture.isRenderTargetTexture=!0}}$h.prototype.isWebGL3DRenderTarget=!0;class Kh extends Te{constructor(t,e,n,i={}){super(t,e,i);const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone();return this}}Kh.prototype.isWebGLMultipleRenderTargets=!0;class we{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(u!==m||c!==d||l!==p||h!==g){let f=1-a;const x=c*d+l*p+h*g+u*m,w=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){const v=Math.sqrt(T),R=Math.atan2(v,x*w);f=Math.sin(f*R)/v,a=Math.sin(a*R)/v}const E=a*w;if(c=c*f+d*E,l=l*f+p*E,h=h*f+g*E,u=u*f+m*E,f===1-a){const v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),p=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}we.prototype.isQuaternion=!0;class S{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,h=c*n+a*e-s*i,u=c*i+s*n-o*e,d=-s*e-o*n-a*i;return this.x=l*c+d*-s+h*-a-u*-o,this.y=h*c+d*-o+u*-s-l*-a,this.z=u*c+d*-a+l*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rs.copy(this).projectOnVector(t),this.sub(Rs)}reflect(t){return this.sub(Rs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}S.prototype.isVector3=!0;const Rs=new S,ba=new we;class ke{constructor(t=new S(1/0,1/0,1/0),e=new S(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const h=t[c],u=t[c+1],d=t[c+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const h=t.getX(c),u=t.getY(c),d=t.getZ(c);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Pn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Pn)}else n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox),Ps.applyMatrix4(t.matrixWorld),this.union(Ps);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),xr.subVectors(this.max,Oi),jn.subVectors(t.a,Oi),Zn.subVectors(t.b,Oi),Jn.subVectors(t.c,Oi),hn.subVectors(Zn,jn),un.subVectors(Jn,Zn),Dn.subVectors(jn,Jn);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Dn.z,Dn.y,hn.z,0,-hn.x,un.z,0,-un.x,Dn.z,0,-Dn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Dn.y,Dn.x,0];return!Ds(e,jn,Zn,Jn,xr)||(e=[1,0,0,0,1,0,0,0,1],!Ds(e,jn,Zn,Jn,xr))?!1:(_r.crossVectors(hn,un),e=[_r.x,_r.y,_r.z],Ds(e,jn,Zn,Jn,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Pn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}ke.prototype.isBox3=!0;const Ke=[new S,new S,new S,new S,new S,new S,new S,new S],Pn=new S,Ps=new ke,jn=new S,Zn=new S,Jn=new S,hn=new S,un=new S,Dn=new S,Oi=new S,xr=new S,_r=new S,In=new S;function Ds(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){In.fromArray(r,s);const a=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),c=t.dot(In),l=e.dot(In),h=n.dot(In);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Qh=new ke,Sa=new S,yr=new S,Is=new S;class Ai{constructor(t=new S,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(Is.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?yr.set(0,0,1).multiplyScalar(t.radius):yr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Sa.copy(t.center).add(yr)),this.expandByPoint(Sa.copy(t.center).sub(yr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qe=new S,Fs=new S,vr=new S,dn=new S,Ns=new S,Mr=new S,zs=new S;class Ci{constructor(t=new S,e=new S(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qe.copy(this.direction).multiplyScalar(e).add(this.origin),Qe.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fs.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),dn.copy(this.origin).sub(Fs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(vr),a=dn.dot(this.direction),c=-dn.dot(vr),l=dn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const m=1/h;u*=m,d*=m,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(vr).multiplyScalar(d).add(Fs),p}intersectSphere(t,e){Qe.subVectors(t.center,this.origin);const n=Qe.dot(this.direction),i=Qe.dot(Qe)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qe)!==null}intersectTriangle(t,e,n,i,s){Ns.subVectors(e,t),Mr.subVectors(n,t),zs.crossVectors(Ns,Mr);let o=this.direction.dot(zs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,t);const c=a*this.direction.dot(Mr.crossVectors(dn,Mr));if(c<0)return null;const l=a*this.direction.dot(Ns.cross(dn));if(l<0||c+l>o)return null;const h=-a*dn.dot(zs);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,o,a,c,l,h,u,d,p,g,m,f){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=h,x[10]=u,x[14]=d,x[3]=p,x[7]=g,x[11]=m,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/$n.setFromMatrixColumn(t,0).length(),s=1/$n.setFromMatrixColumn(t,1).length(),o=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,m=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-m*l,e[9]=-a*c,e[2]=m-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,m=l*u;e[0]=d+m*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=m+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,m=l*u;e[0]=d-m*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=m-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,m=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+m,e[1]=c*u,e[5]=m*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,m=a*l;e[0]=c*h,e[4]=m-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-m*u}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,m=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+m,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tu,t,eu)}lookAt(t,e,n){const i=this.elements;return Se.subVectors(t,e),Se.lengthSq()===0&&(Se.z=1),Se.normalize(),fn.crossVectors(n,Se),fn.lengthSq()===0&&(Math.abs(n.z)===1?Se.x+=1e-4:Se.z+=1e-4,Se.normalize(),fn.crossVectors(n,Se)),fn.normalize(),wr.crossVectors(Se,fn),i[0]=fn.x,i[4]=wr.x,i[8]=Se.x,i[1]=fn.y,i[5]=wr.y,i[9]=Se.y,i[2]=fn.z,i[6]=wr.z,i[10]=Se.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],x=n[14],w=n[3],T=n[7],E=n[11],v=n[15],R=i[0],I=i[4],X=i[8],ht=i[12],H=i[1],_=i[5],C=i[9],j=i[13],P=i[2],U=i[6],N=i[10],B=i[14],L=i[3],W=i[7],J=i[11],K=i[15];return s[0]=o*R+a*H+c*P+l*L,s[4]=o*I+a*_+c*U+l*W,s[8]=o*X+a*C+c*N+l*J,s[12]=o*ht+a*j+c*B+l*K,s[1]=h*R+u*H+d*P+p*L,s[5]=h*I+u*_+d*U+p*W,s[9]=h*X+u*C+d*N+p*J,s[13]=h*ht+u*j+d*B+p*K,s[2]=g*R+m*H+f*P+x*L,s[6]=g*I+m*_+f*U+x*W,s[10]=g*X+m*C+f*N+x*J,s[14]=g*ht+m*j+f*B+x*K,s[3]=w*R+T*H+E*P+v*L,s[7]=w*I+T*_+E*U+v*W,s[11]=w*X+T*C+E*N+v*J,s[15]=w*ht+T*j+E*B+v*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],m=t[7],f=t[11],x=t[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*p-n*c*p)+m*(+e*c*p-e*l*d+s*o*d-i*o*p+i*l*h-s*c*h)+f*(+e*l*u-e*a*p-s*o*u+n*o*p+s*a*h-n*l*h)+x*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],m=t[13],f=t[14],x=t[15],w=u*f*l-m*d*l+m*c*p-a*f*p-u*c*x+a*d*x,T=g*d*l-h*f*l-g*c*p+o*f*p+h*c*x-o*d*x,E=h*m*l-g*u*l+g*a*p-o*m*p-h*a*x+o*u*x,v=g*u*c-h*m*c-g*a*d+o*m*d+h*a*f-o*u*f,R=e*w+n*T+i*E+s*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return t[0]=w*I,t[1]=(m*d*s-u*f*s-m*i*p+n*f*p+u*i*x-n*d*x)*I,t[2]=(a*f*s-m*c*s+m*i*l-n*f*l-a*i*x+n*c*x)*I,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*p-n*c*p)*I,t[4]=T*I,t[5]=(h*f*s-g*d*s+g*i*p-e*f*p-h*i*x+e*d*x)*I,t[6]=(g*c*s-o*f*s-g*i*l+e*f*l+o*i*x-e*c*x)*I,t[7]=(o*d*s-h*c*s+h*i*l-e*d*l-o*i*p+e*c*p)*I,t[8]=E*I,t[9]=(g*u*s-h*m*s-g*n*p+e*m*p+h*n*x-e*u*x)*I,t[10]=(o*m*s-g*a*s+g*n*l-e*m*l-o*n*x+e*a*x)*I,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*p-e*a*p)*I,t[12]=v*I,t[13]=(h*m*i-g*u*i+g*n*d-e*m*d-h*n*f+e*u*f)*I,t[14]=(g*a*i-o*m*i-g*n*c+e*m*c+o*n*f-e*a*f)*I,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,p=s*h,g=s*u,m=o*h,f=o*u,x=a*u,w=c*l,T=c*h,E=c*u,v=n.x,R=n.y,I=n.z;return i[0]=(1-(m+x))*v,i[1]=(p+E)*v,i[2]=(g-T)*v,i[3]=0,i[4]=(p-E)*R,i[5]=(1-(d+x))*R,i[6]=(f+w)*R,i[7]=0,i[8]=(g+T)*I,i[9]=(f-w)*I,i[10]=(1-(d+m))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=$n.set(i[0],i[1],i[2]).length();const o=$n.set(i[4],i[5],i[6]).length(),a=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ie.copy(this);const l=1/s,h=1/o,u=1/a;return Ie.elements[0]*=l,Ie.elements[1]*=l,Ie.elements[2]*=l,Ie.elements[4]*=h,Ie.elements[5]*=h,Ie.elements[6]*=h,Ie.elements[8]*=u,Ie.elements[9]*=u,Ie.elements[10]*=u,e.setFromRotationMatrix(Ie),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,c=1/(e-t),l=1/(n-i),h=1/(o-s),u=(e+t)*c,d=(n+i)*l,p=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}gt.prototype.isMatrix4=!0;const $n=new S,Ie=new gt,tu=new S(0,0,0),eu=new S(1,1,1),fn=new S,wr=new S,Se=new S,Ea=new gt,Ta=new we;class Gn{constructor(t=0,e=0,n=0,i=Gn.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ea.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ea,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ta.setFromEuler(this),this.setFromQuaternion(Ta,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Gn.prototype.isEuler=!0;Gn.DefaultOrder="XYZ";Gn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Nl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nu=0;const Aa=new S,Kn=new we,tn=new gt,br=new S,Ui=new S,iu=new S,ru=new we,Ca=new S(1,0,0),La=new S(0,1,0),Ra=new S(0,0,1),su={type:"added"},Pa={type:"removed"};class Vt extends Hn{constructor(){super(),Object.defineProperty(this,"id",{value:nu++}),this.uuid=Oe(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DefaultUp.clone();const t=new S,e=new Gn,n=new we,i=new S(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new gt},normalMatrix:{value:new pe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Vt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(Ca,t)}rotateY(t){return this.rotateOnAxis(La,t)}rotateZ(t){return this.rotateOnAxis(Ra,t)}translateOnAxis(t,e){return Aa.copy(t).applyQuaternion(this.quaternion),this.position.add(Aa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ca,t)}translateY(t){return this.translateOnAxis(La,t)}translateZ(t){return this.translateOnAxis(Ra,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Ui,br,this.up):tn.lookAt(br,Ui,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(tn),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(su)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pa)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Pa)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,iu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Vt.DefaultUp=new S(0,1,0);Vt.DefaultMatrixAutoUpdate=!0;Vt.prototype.isObject3D=!0;const Fe=new S,en=new S,Bs=new S,nn=new S,Qn=new S,ti=new S,Da=new S,Os=new S,Us=new S,ks=new S;class re{constructor(t=new S,e=new S,n=new S){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Fe.subVectors(t,e),i.cross(Fe);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Fe.subVectors(i,e),en.subVectors(n,e),Bs.subVectors(t,e);const o=Fe.dot(Fe),a=Fe.dot(en),c=Fe.dot(Bs),l=en.dot(en),h=en.dot(Bs),u=o*l-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,nn),nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,nn),c.set(0,0),c.addScaledVector(s,nn.x),c.addScaledVector(o,nn.y),c.addScaledVector(a,nn.z),c}static isFrontFacing(t,e,n,i){return Fe.subVectors(n,e),en.subVectors(t,e),Fe.cross(en).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Fe.cross(en).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return re.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return re.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return re.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return re.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return re.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Qn.subVectors(i,n),ti.subVectors(s,n),Os.subVectors(t,n);const c=Qn.dot(Os),l=ti.dot(Os);if(c<=0&&l<=0)return e.copy(n);Us.subVectors(t,i);const h=Qn.dot(Us),u=ti.dot(Us);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Qn,o);ks.subVectors(t,s);const p=Qn.dot(ks),g=ti.dot(ks);if(g>=0&&p<=g)return e.copy(s);const m=p*l-c*g;if(m<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ti,a);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return Da.subVectors(s,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Da,a);const x=1/(f+m+d);return o=m*x,a=d*x,e.copy(n).addScaledVector(Qn,o).addScaledVector(ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let ou=0;class le extends Hn{constructor(){super(),Object.defineProperty(this,"id",{value:ou++}),this.uuid=Oe(),this.name="",this.type="Material",this.fog=!0,this.blending=xi,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cl,this.blendDst=Ll,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Al;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==er&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}le.prototype.isMaterial=!0;le.fromType=function(){return null};class Li extends le{constructor(t){super(),this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ls,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Li.prototype.isMeshBasicMaterial=!0;const ie=new S,Sr=new $;class ae{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=ir,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new pt),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new $),e[n++]=o.x,e[n++]=o.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new S),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Wt),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix3(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ir&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}ae.prototype.isBufferAttribute=!0;class zl extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bl extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class au extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}au.prototype.isFloat16BufferAttribute=!0;class Kt extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let lu=0;const Ae=new gt,Hs=new Vt,ei=new S,Ee=new ke,ki=new ke,ce=new S;class Yt extends Hn{constructor(){super(),Object.defineProperty(this,"id",{value:lu++}),this.uuid=Oe(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dl(t)?Bl:zl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ae.makeRotationFromQuaternion(t),this.applyMatrix4(Ae),this}rotateX(t){return Ae.makeRotationX(t),this.applyMatrix4(Ae),this}rotateY(t){return Ae.makeRotationY(t),this.applyMatrix4(Ae),this}rotateZ(t){return Ae.makeRotationZ(t),this.applyMatrix4(Ae),this}translate(t,e,n){return Ae.makeTranslation(t,e,n),this.applyMatrix4(Ae),this}scale(t,e,n){return Ae.makeScale(t,e,n),this.applyMatrix4(Ae),this}lookAt(t){return Hs.lookAt(t),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ee.setFromBufferAttribute(s),this.morphTargetsRelative?(ce.addVectors(this.boundingBox.min,Ee.min),this.boundingBox.expandByPoint(ce),ce.addVectors(this.boundingBox.max,Ee.max),this.boundingBox.expandByPoint(ce)):(this.boundingBox.expandByPoint(Ee.min),this.boundingBox.expandByPoint(Ee.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new S,1/0);return}if(t){const n=this.boundingSphere.center;if(Ee.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(ce.addVectors(Ee.min,ki.min),Ee.expandByPoint(ce),ce.addVectors(Ee.max,ki.max),Ee.expandByPoint(ce)):(Ee.expandByPoint(ki.min),Ee.expandByPoint(ki.max))}Ee.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ce.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ce));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ce.fromBufferAttribute(a,l),c&&(ei.fromBufferAttribute(t,l),ce.add(ei)),i=Math.max(i,n.distanceToSquared(ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let H=0;H<a;H++)l[H]=new S,h[H]=new S;const u=new S,d=new S,p=new S,g=new $,m=new $,f=new $,x=new S,w=new S;function T(H,_,C){u.fromArray(i,H*3),d.fromArray(i,_*3),p.fromArray(i,C*3),g.fromArray(o,H*2),m.fromArray(o,_*2),f.fromArray(o,C*2),d.sub(u),p.sub(u),m.sub(g),f.sub(g);const j=1/(m.x*f.y-f.x*m.y);!isFinite(j)||(x.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(j),w.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(j),l[H].add(x),l[_].add(x),l[C].add(x),h[H].add(w),h[_].add(w),h[C].add(w))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let H=0,_=E.length;H<_;++H){const C=E[H],j=C.start,P=C.count;for(let U=j,N=j+P;U<N;U+=3)T(n[U+0],n[U+1],n[U+2])}const v=new S,R=new S,I=new S,X=new S;function ht(H){I.fromArray(s,H*3),X.copy(I);const _=l[H];v.copy(_),v.sub(I.multiplyScalar(I.dot(_))).normalize(),R.crossVectors(X,_);const j=R.dot(h[H])<0?-1:1;c[H*4]=v.x,c[H*4+1]=v.y,c[H*4+2]=v.z,c[H*4+3]=j}for(let H=0,_=E.length;H<_;++H){const C=E[H],j=C.start,P=C.count;for(let U=j,N=j+P;U<N;U+=3)ht(n[U+0]),ht(n[U+1]),ht(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new S,s=new S,o=new S,a=new S,c=new S,l=new S,h=new S,u=new S;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),m=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const o=n[i].array,a=t.attributes[i],c=a.array,l=a.itemSize*e,h=Math.min(c.length,o.length-l);for(let u=0,d=l;u<h;u++,d++)o[d]=c[u]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ce.fromBufferAttribute(t,e),ce.normalize(),t.setXYZ(e,ce.x,ce.y,ce.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let m=0,f=c.length;m<f;m++){a.isInterleavedBufferAttribute?p=c[m]*a.data.stride+a.offset:p=c[m]*h;for(let x=0;x<h;x++)d[g++]=l[p++]}return new ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Yt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Yt.prototype.isBufferGeometry=!0;const Ia=new gt,ni=new Ci,Vs=new Ai,pn=new S,mn=new S,gn=new S,Gs=new S,Ws=new S,qs=new S,Er=new S,Tr=new S,Ar=new S,Cr=new $,Lr=new $,Rr=new $,Xs=new S,Pr=new S;class Xt extends Vt{constructor(t=new Yt,e=new Li){super(),this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),t.ray.intersectsSphere(Vs)===!1)||(Ia.copy(s).invert(),ni.copy(t.ray).applyMatrix4(Ia),n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const x=p[m],w=i[x.materialIndex],T=Math.max(x.start,g.start),E=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let v=T,R=E;v<R;v+=3){const I=a.getX(v),X=a.getX(v+1),ht=a.getX(v+2);o=Dr(this,w,t,ni,c,l,h,u,d,I,X,ht),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let x=m,w=f;x<w;x+=3){const T=a.getX(x),E=a.getX(x+1),v=a.getX(x+2);o=Dr(this,i,t,ni,c,l,h,u,d,T,E,v),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const x=p[m],w=i[x.materialIndex],T=Math.max(x.start,g.start),E=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let v=T,R=E;v<R;v+=3){const I=v,X=v+1,ht=v+2;o=Dr(this,w,t,ni,c,l,h,u,d,I,X,ht),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(c.count,g.start+g.count);for(let x=m,w=f;x<w;x+=3){const T=x,E=x+1,v=x+2;o=Dr(this,i,t,ni,c,l,h,u,d,T,E,v),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Xt.prototype.isMesh=!0;function cu(r,t,e,n,i,s,o,a){let c;if(t.side===Be?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side!==vi,a),c===null)return null;Pr.copy(a),Pr.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Pr);return l<e.near||l>e.far?null:{distance:l,point:Pr.clone(),object:r}}function Dr(r,t,e,n,i,s,o,a,c,l,h,u){pn.fromBufferAttribute(i,l),mn.fromBufferAttribute(i,h),gn.fromBufferAttribute(i,u);const d=r.morphTargetInfluences;if(s&&d){Er.set(0,0,0),Tr.set(0,0,0),Ar.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const f=d[g],x=s[g];f!==0&&(Gs.fromBufferAttribute(x,l),Ws.fromBufferAttribute(x,h),qs.fromBufferAttribute(x,u),o?(Er.addScaledVector(Gs,f),Tr.addScaledVector(Ws,f),Ar.addScaledVector(qs,f)):(Er.addScaledVector(Gs.sub(pn),f),Tr.addScaledVector(Ws.sub(mn),f),Ar.addScaledVector(qs.sub(gn),f)))}pn.add(Er),mn.add(Tr),gn.add(Ar)}r.isSkinnedMesh&&(r.boneTransform(l,pn),r.boneTransform(h,mn),r.boneTransform(u,gn));const p=cu(r,t,e,n,pn,mn,gn,Xs);if(p){a&&(Cr.fromBufferAttribute(a,l),Lr.fromBufferAttribute(a,h),Rr.fromBufferAttribute(a,u),p.uv=re.getUV(Xs,pn,mn,gn,Cr,Lr,Rr,new $)),c&&(Cr.fromBufferAttribute(c,l),Lr.fromBufferAttribute(c,h),Rr.fromBufferAttribute(c,u),p.uv2=re.getUV(Xs,pn,mn,gn,Cr,Lr,Rr,new $));const g={a:l,b:h,c:u,normal:new S,materialIndex:0};re.getNormal(pn,mn,gn,g.normal),p.face=g}return p}class Ri extends Yt{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(m,f,x,w,T,E,v,R,I,X,ht){const H=E/I,_=v/X,C=E/2,j=v/2,P=R/2,U=I+1,N=X+1;let B=0,L=0;const W=new S;for(let J=0;J<N;J++){const K=J*_-j;for(let Q=0;Q<U;Q++){const lt=Q*H-C;W[m]=lt*w,W[f]=K*T,W[x]=P,l.push(W.x,W.y,W.z),W[m]=0,W[f]=0,W[x]=R>0?1:-1,h.push(W.x,W.y,W.z),u.push(Q/I),u.push(1-J/X),B+=1}}for(let J=0;J<X;J++)for(let K=0;K<I;K++){const Q=d+K+U*J,lt=d+K+U*(J+1),Ft=d+(K+1)+U*(J+1),wt=d+(K+1)+U*J;c.push(Q,lt,wt),c.push(lt,Ft,wt),L+=6}a.addGroup(p,L,ht),p+=L,d+=B}}static fromJSON(t){return new Ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Si(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ge(r){const t={};for(let e=0;e<r.length;e++){const n=Si(r[e]);for(const i in n)t[i]=n[i]}return t}const hu={clone:Si,merge:ge};var uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ue extends le{constructor(t){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}Ue.prototype.isShaderMaterial=!0;class So extends Vt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}So.prototype.isCamera=!0;class ye extends So{constructor(t=50,e=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($i*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}ye.prototype.isPerspectiveCamera=!0;const ii=90,ri=1;class Eo extends Vt{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new ye(ii,ri,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new S(1,0,0)),this.add(i);const s=new ye(ii,ri,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new S(-1,0,0)),this.add(s);const o=new ye(ii,ri,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new S(0,1,0)),this.add(o);const a=new ye(ii,ri,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new S(0,-1,0)),this.add(a);const c=new ye(ii,ri,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new S(0,0,1)),this.add(c);const l=new ye(ii,ri,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new S(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,h=t.getRenderTarget(),u=t.outputEncoding,d=t.toneMapping,p=t.xr.enabled;t.outputEncoding=ln,t.toneMapping=an,t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.outputEncoding=u,t.toneMapping=d,t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ds extends ue{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Mi,super(t,e,n,i,s,o,a,c,l,h),this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}ds.prototype.isCubeTexture=!0;class Ol extends Te{constructor(t,e={}){super(t,t,e);const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ds(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Me}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ri(5,5,5),s=new Ue({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:_n});s.uniforms.tEquirect.value=e;const o=new Xt(i,s),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=Me),new Eo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}Ol.prototype.isWebGLCubeRenderTarget=!0;const Ys=new S,fu=new S,pu=new pe;class on{constructor(t=new S(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ys.subVectors(n,e).cross(fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(Ys),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pu.getNormalMatrix(t),i=this.coplanarPoint(Ys).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}on.prototype.isPlane=!0;const si=new Ai,Ir=new S;class fs{constructor(t=new on,e=new on,n=new on,i=new on,s=new on,o=new on){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],p=n[9],g=n[10],m=n[11],f=n[12],x=n[13],w=n[14],T=n[15];return e[0].setComponents(a-i,u-c,m-d,T-f).normalize(),e[1].setComponents(a+i,u+c,m+d,T+f).normalize(),e[2].setComponents(a+s,u+l,m+p,T+x).normalize(),e[3].setComponents(a-s,u-l,m-p,T-x).normalize(),e[4].setComponents(a-o,u-h,m-g,T-w).normalize(),e[5].setComponents(a+o,u+h,m+g,T+w).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ir.x=i.normal.x>0?t.max.x:t.min.x,Ir.y=i.normal.y>0?t.max.y:t.min.y,Ir.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ul(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function mu(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const d=h.array,p=h.updateRange;r.bindBuffer(u,l),p.count===-1?r.bufferSubData(u,0,d):(e?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class To extends Yt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],m=[],f=[];for(let x=0;x<h;x++){const w=x*d-o;for(let T=0;T<l;T++){const E=T*u-s;g.push(E,-w,0),m.push(0,0,1),f.push(T/a),f.push(1-x/c)}}for(let x=0;x<c;x++)for(let w=0;w<a;w++){const T=w+l*x,E=w+l*(x+1),v=w+1+l*(x+1),R=w+1+l*x;p.push(T,E,R),p.push(E,v,R)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(m,3)),this.setAttribute("uv",new Kt(f,2))}static fromJSON(t){return new To(t.width,t.height,t.widthSegments,t.heightSegments)}}var gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wu="vec3 transformed = vec3( position );",bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Su=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Eu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Nu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Uu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ju=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ku=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Qu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,id=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,cd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,fd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Cd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ud=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Yd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$d=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nf=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,rf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,sf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,of=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,af=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,lf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,cf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,hf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ff=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_f=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Df=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Uf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Vf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,It={alphamap_fragment:gu,alphamap_pars_fragment:xu,alphatest_fragment:_u,alphatest_pars_fragment:yu,aomap_fragment:vu,aomap_pars_fragment:Mu,begin_vertex:wu,beginnormal_vertex:bu,bsdfs:Su,bumpmap_pars_fragment:Eu,clipping_planes_fragment:Tu,clipping_planes_pars_fragment:Au,clipping_planes_pars_vertex:Cu,clipping_planes_vertex:Lu,color_fragment:Ru,color_pars_fragment:Pu,color_pars_vertex:Du,color_vertex:Iu,common:Fu,cube_uv_reflection_fragment:Nu,defaultnormal_vertex:zu,displacementmap_pars_vertex:Bu,displacementmap_vertex:Ou,emissivemap_fragment:Uu,emissivemap_pars_fragment:ku,encodings_fragment:Hu,encodings_pars_fragment:Vu,envmap_fragment:Gu,envmap_common_pars_fragment:Wu,envmap_pars_fragment:qu,envmap_pars_vertex:Xu,envmap_physical_pars_fragment:id,envmap_vertex:Yu,fog_vertex:ju,fog_pars_vertex:Zu,fog_fragment:Ju,fog_pars_fragment:$u,gradientmap_pars_fragment:Ku,lightmap_fragment:Qu,lightmap_pars_fragment:td,lights_lambert_vertex:ed,lights_pars_begin:nd,lights_toon_fragment:rd,lights_toon_pars_fragment:sd,lights_phong_fragment:od,lights_phong_pars_fragment:ad,lights_physical_fragment:ld,lights_physical_pars_fragment:cd,lights_fragment_begin:hd,lights_fragment_maps:ud,lights_fragment_end:dd,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:xd,map_pars_fragment:_d,map_particle_fragment:yd,map_particle_pars_fragment:vd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:wd,morphcolor_vertex:bd,morphnormal_vertex:Sd,morphtarget_pars_vertex:Ed,morphtarget_vertex:Td,normal_fragment_begin:Ad,normal_fragment_maps:Cd,normal_pars_fragment:Ld,normal_pars_vertex:Rd,normal_vertex:Pd,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Id,clearcoat_normal_fragment_maps:Fd,clearcoat_pars_fragment:Nd,output_fragment:zd,packing:Bd,premultiplied_alpha_fragment:Od,project_vertex:Ud,dithering_fragment:kd,dithering_pars_fragment:Hd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:Gd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:qd,shadowmap_vertex:Xd,shadowmask_pars_fragment:Yd,skinbase_vertex:jd,skinning_pars_vertex:Zd,skinning_vertex:Jd,skinnormal_vertex:$d,specularmap_fragment:Kd,specularmap_pars_fragment:Qd,tonemapping_fragment:tf,tonemapping_pars_fragment:ef,transmission_fragment:nf,transmission_pars_fragment:rf,uv_pars_fragment:sf,uv_pars_vertex:of,uv_vertex:af,uv2_pars_fragment:lf,uv2_pars_vertex:cf,uv2_vertex:hf,worldpos_vertex:uf,background_vert:df,background_frag:ff,cube_vert:pf,cube_frag:mf,depth_vert:gf,depth_frag:xf,distanceRGBA_vert:_f,distanceRGBA_frag:yf,equirect_vert:vf,equirect_frag:Mf,linedashed_vert:wf,linedashed_frag:bf,meshbasic_vert:Sf,meshbasic_frag:Ef,meshlambert_vert:Tf,meshlambert_frag:Af,meshmatcap_vert:Cf,meshmatcap_frag:Lf,meshnormal_vert:Rf,meshnormal_frag:Pf,meshphong_vert:Df,meshphong_frag:If,meshphysical_vert:Ff,meshphysical_frag:Nf,meshtoon_vert:zf,meshtoon_frag:Bf,points_vert:Of,points_frag:Uf,shadow_vert:kf,shadow_frag:Hf,sprite_vert:Vf,sprite_frag:Gf},rt={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new pe},uv2Transform:{value:new pe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pe}}},Ye={basic:{uniforms:ge([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:ge([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.fog,rt.lights,{emissive:{value:new pt(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:ge([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:ge([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:ge([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new pt(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:ge([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:ge([rt.points,rt.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:ge([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:ge([rt.common,rt.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:ge([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:ge([rt.sprite,rt.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null}},vertexShader:It.background_vert,fragmentShader:It.background_frag},cube:{uniforms:ge([rt.envmap,{opacity:{value:1}}]),vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:ge([rt.common,rt.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:ge([rt.lights,rt.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Ye.physical={uniforms:ge([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};function Wf(r,t,e,n,i,s){const o=new pt(0);let a=i===!0?0:1,c,l,h=null,u=0,d=null;function p(m,f){let x=!1,w=f.isScene===!0?f.background:null;w&&w.isTexture&&(w=t.get(w));const T=r.xr,E=T.getSession&&T.getSession();E&&E.environmentBlendMode==="additive"&&(w=null),w===null?g(o,a):w&&w.isColor&&(g(w,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),w&&(w.isCubeTexture||w.mapping===cs)?(l===void 0&&(l=new Xt(new Ri(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:Si(Ye.cube.uniforms),vertexShader:Ye.cube.vertexShader,fragmentShader:Ye.cube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(h!==w||u!==w.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,d=r.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Xt(new To(2,2),new Ue({name:"BackgroundMaterial",uniforms:Si(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,d=r.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){e.buffers.color.setClear(m.r,m.g,m.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),a=f,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function qf(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=f(null);let l=c,h=!1;function u(P,U,N,B,L){let W=!1;if(o){const J=m(B,N,U);l!==J&&(l=J,p(l.object)),W=x(B,L),W&&w(B,L)}else{const J=U.wireframe===!0;(l.geometry!==B.id||l.program!==N.id||l.wireframe!==J)&&(l.geometry=B.id,l.program=N.id,l.wireframe=J,W=!0)}P.isInstancedMesh===!0&&(W=!0),L!==null&&e.update(L,34963),(W||h)&&(h=!1,X(P,U,N,B),L!==null&&r.bindBuffer(34963,e.get(L).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,U,N){const B=N.wireframe===!0;let L=a[P.id];L===void 0&&(L={},a[P.id]=L);let W=L[U.id];W===void 0&&(W={},L[U.id]=W);let J=W[B];return J===void 0&&(J=f(d()),W[B]=J),J}function f(P){const U=[],N=[],B=[];for(let L=0;L<i;L++)U[L]=0,N[L]=0,B[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:B,object:P,attributes:{},index:null}}function x(P,U){const N=l.attributes,B=P.attributes;let L=0;for(const W in B){const J=N[W],K=B[W];if(J===void 0||J.attribute!==K||J.data!==K.data)return!0;L++}return l.attributesNum!==L||l.index!==U}function w(P,U){const N={},B=P.attributes;let L=0;for(const W in B){const J=B[W],K={};K.attribute=J,J.data&&(K.data=J.data),N[W]=K,L++}l.attributes=N,l.attributesNum=L,l.index=U}function T(){const P=l.newAttributes;for(let U=0,N=P.length;U<N;U++)P[U]=0}function E(P){v(P,0)}function v(P,U){const N=l.newAttributes,B=l.enabledAttributes,L=l.attributeDivisors;N[P]=1,B[P]===0&&(r.enableVertexAttribArray(P),B[P]=1),L[P]!==U&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),L[P]=U)}function R(){const P=l.newAttributes,U=l.enabledAttributes;for(let N=0,B=U.length;N<B;N++)U[N]!==P[N]&&(r.disableVertexAttribArray(N),U[N]=0)}function I(P,U,N,B,L,W){n.isWebGL2===!0&&(N===5124||N===5125)?r.vertexAttribIPointer(P,U,N,L,W):r.vertexAttribPointer(P,U,N,B,L,W)}function X(P,U,N,B){if(n.isWebGL2===!1&&(P.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;T();const L=B.attributes,W=N.getAttributes(),J=U.defaultAttributeValues;for(const K in W){const Q=W[K];if(Q.location>=0){let lt=L[K];if(lt===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),lt!==void 0){const Ft=lt.normalized,wt=lt.itemSize,G=e.get(lt);if(G===void 0)continue;const Ot=G.buffer,Tt=G.type,At=G.bytesPerElement;if(lt.isInterleavedBufferAttribute){const et=lt.data,Dt=et.stride,V=lt.offset;if(et.isInstancedInterleavedBuffer){for(let Y=0;Y<Q.locationSize;Y++)v(Q.location+Y,et.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Y=0;Y<Q.locationSize;Y++)E(Q.location+Y);r.bindBuffer(34962,Ot);for(let Y=0;Y<Q.locationSize;Y++)I(Q.location+Y,wt/Q.locationSize,Tt,Ft,Dt*At,(V+wt/Q.locationSize*Y)*At)}else{if(lt.isInstancedBufferAttribute){for(let et=0;et<Q.locationSize;et++)v(Q.location+et,lt.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let et=0;et<Q.locationSize;et++)E(Q.location+et);r.bindBuffer(34962,Ot);for(let et=0;et<Q.locationSize;et++)I(Q.location+et,wt/Q.locationSize,Tt,Ft,wt*At,wt/Q.locationSize*et*At)}}else if(J!==void 0){const Ft=J[K];if(Ft!==void 0)switch(Ft.length){case 2:r.vertexAttrib2fv(Q.location,Ft);break;case 3:r.vertexAttrib3fv(Q.location,Ft);break;case 4:r.vertexAttrib4fv(Q.location,Ft);break;default:r.vertexAttrib1fv(Q.location,Ft)}}}}R()}function ht(){C();for(const P in a){const U=a[P];for(const N in U){const B=U[N];for(const L in B)g(B[L].object),delete B[L];delete U[N]}delete a[P]}}function H(P){if(a[P.id]===void 0)return;const U=a[P.id];for(const N in U){const B=U[N];for(const L in B)g(B[L].object),delete B[L];delete U[N]}delete a[P.id]}function _(P){for(const U in a){const N=a[U];if(N[P.id]===void 0)continue;const B=N[P.id];for(const L in B)g(B[L].object),delete B[L];delete N[P.id]}}function C(){j(),h=!0,l!==c&&(l=c,p(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:C,resetDefaultState:j,dispose:ht,releaseStatesOfGeometry:H,releaseStatesOfProgram:_,initAttributes:T,enableAttribute:E,disableUnusedAttributes:R}}function Xf(r,t,e,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,h){r.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,l,h,u),e.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function Yf(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),f=r.getParameter(36347),x=r.getParameter(36348),w=r.getParameter(36349),T=d>0,E=o||t.has("OES_texture_float"),v=T&&E,R=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:T,floatFragmentTextures:E,floatVertexTextures:v,maxSamples:R}}function jf(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new on,a=new pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const g=u.length!==0||d||n!==0||i;return i=d,e=h(u,p,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,d,p){const g=u.clippingPlanes,m=u.clipIntersection,f=u.clipShadows,x=r.get(u);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{const w=s?0:n,T=w*4;let E=x.clippingState||null;c.value=E,E=h(g,d,T,p);for(let v=0;v!==T;++v)E[v]=e[v];x.clippingState=E,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const m=u!==null?u.length:0;let f=null;if(m!==0){if(f=c.value,g!==!0||f===null){const x=p+m*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<x)&&(f=new Float32Array(x));for(let T=0,E=p;T!==m;++T,E+=4)o.copy(u[T]).applyMatrix4(w,a),o.normal.toArray(f,E),f[E+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,f}}function Zf(r){let t=new WeakMap;function e(o,a){return a===ao?o.mapping=Mi:a===lo&&(o.mapping=wi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ao||a===lo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ol(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ao extends So{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}Ao.prototype.isOrthographicCamera=!0;const mi=4,Fa=[.125,.215,.35,.446,.526,.582],Nn=20,js=new Ao,Na=new pt;let Zs=null;const Fn=(1+Math.sqrt(5))/2,oi=1/Fn,za=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Fn,oi),new S(0,Fn,-oi),new S(oi,0,Fn),new S(-oi,0,Fn),new S(Fn,oi,0),new S(-Fn,oi,0)];class Ba{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zs),t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zs=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize-32,n={magFilter:Me,minFilter:Me,generateMipmaps:!1,type:_i,format:ze,encoding:ln,depthBuffer:!1},i=Oa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oa(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(s)),this._blurMaterial=$f(s,t,e)}return i}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,js)}_sceneToCubeUV(t,e,n,i){const a=new ye(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Na),h.toneMapping=an,h.autoClear=!1;const p=new Li({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Xt(new Ri,p);let m=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,m=!0):(p.color.copy(Na),m=!0);for(let x=0;x<6;x++){const w=x%3;w===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):w===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const T=this._cubeSize;Fr(i,w*T,x>2?T:0,T,T),h.setRenderTarget(i),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Mi||t.mapping===wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ua());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Fr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=za[(i-1)%za.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xt(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Nn-1),m=s/g,f=isFinite(s)?1+Math.floor(h*m):Nn;f>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Nn}`);const x=[];let w=0;for(let I=0;I<Nn;++I){const X=I/m,ht=Math.exp(-X*X/2);x.push(ht),I===0?w+=ht:I<f&&(w+=2*ht)}for(let I=0;I<x.length;I++)x[I]=x[I]/w;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const E=this._sizeLods[i],v=3*E*(i>T-mi?i-T+mi:0),R=4*(this._cubeSize-E);Fr(e,v,R,3*E,2*E),c.setRenderTarget(e),c.render(u,js)}}function Jf(r){const t=[],e=[],n=[];let i=r;const s=r-mi+1+Fa.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-mi?c=Fa[o-r+mi-1]:o===0&&(c=0),n.push(c);const l=1/(a-1),h=-l/2,u=1+l/2,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,m=3,f=2,x=1,w=new Float32Array(m*g*p),T=new Float32Array(f*g*p),E=new Float32Array(x*g*p);for(let R=0;R<p;R++){const I=R%3*2/3-1,X=R>2?0:-1,ht=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];w.set(ht,m*g*R),T.set(d,f*g*R);const H=[R,R,R,R,R,R];E.set(H,x*g*R)}const v=new Yt;v.setAttribute("position",new ae(w,m)),v.setAttribute("uv",new ae(T,f)),v.setAttribute("faceIndex",new ae(E,x)),t.push(v),i>mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oa(r,t,e){const n=new Te(r,t,e);return n.texture.mapping=cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function $f(r,t,e){const n=new Float32Array(Nn),i=new S(0,1,0);return new Ue({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ua(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function ka(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kf(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ao||c===lo,h=c===Mi||c===wi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Ba(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Ba(r));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Qf(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tp(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const p=u.morphAttributes;for(const g in p){const m=p[g];for(let f=0,x=m.length;f<x;f++)t.update(m[f],34962)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let m=0;if(p!==null){const w=p.array;m=p.version;for(let T=0,E=w.length;T<E;T+=3){const v=w[T+0],R=w[T+1],I=w[T+2];d.push(v,R,R,I,I,v)}}else{const w=g.array;m=g.version;for(let T=0,E=w.length/3-1;T<E;T+=3){const v=T+0,R=T+1,I=T+2;d.push(v,R,R,I,I,v)}}const f=new(Dl(d)?Bl:zl)(d,1);f.version=m;const x=s.get(u);x&&t.remove(x),s.set(u,f)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ep(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,p){r.drawElements(s,p,a,d*c),e.update(p,s,1)}function u(d,p,g){if(g===0)return;let m,f;if(i)m=r,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,p,a,d*c,g),e.update(p,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function np(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ip(r,t){return r[0]-t[0]}function rp(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Js(r,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(e)}function sp(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new Wt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u,d){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=m!==void 0?m.length:0;let x=s.get(h);if(x===void 0||x.count!==f){let N=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",N)};var g=N;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],X=h.morphAttributes.normal||[],ht=h.morphAttributes.color||[];let H=0;E===!0&&(H=1),v===!0&&(H=2),R===!0&&(H=3);let _=h.attributes.position.count*H,C=1;_>t.maxTextureSize&&(C=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const j=new Float32Array(_*C*4*f),P=new us(j,_,C,f);P.type=zn,P.needsUpdate=!0;const U=H*4;for(let B=0;B<f;B++){const L=I[B],W=X[B],J=ht[B],K=_*C*4*B;for(let Q=0;Q<L.count;Q++){const lt=Q*U;E===!0&&(o.fromBufferAttribute(L,Q),L.normalized===!0&&Js(o,L),j[K+lt+0]=o.x,j[K+lt+1]=o.y,j[K+lt+2]=o.z,j[K+lt+3]=0),v===!0&&(o.fromBufferAttribute(W,Q),W.normalized===!0&&Js(o,W),j[K+lt+4]=o.x,j[K+lt+5]=o.y,j[K+lt+6]=o.z,j[K+lt+7]=0),R===!0&&(o.fromBufferAttribute(J,Q),J.normalized===!0&&Js(o,J),j[K+lt+8]=o.x,j[K+lt+9]=o.y,j[K+lt+10]=o.z,j[K+lt+11]=J.itemSize===4?o.w:1)}}x={count:f,texture:P,size:new $(_,C)},s.set(h,x),h.addEventListener("dispose",N)}let w=0;for(let E=0;E<p.length;E++)w+=p[E];const T=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(r,"morphTargetBaseInfluence",T),d.getUniforms().setValue(r,"morphTargetInfluences",p),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const m=p===void 0?0:p.length;let f=n[h.id];if(f===void 0||f.length!==m){f=[];for(let v=0;v<m;v++)f[v]=[v,0];n[h.id]=f}for(let v=0;v<m;v++){const R=f[v];R[0]=v,R[1]=p[v]}f.sort(rp);for(let v=0;v<8;v++)v<m&&f[v][1]?(a[v][0]=f[v][0],a[v][1]=f[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(ip);const x=h.morphAttributes.position,w=h.morphAttributes.normal;let T=0;for(let v=0;v<8;v++){const R=a[v],I=R[0],X=R[1];I!==Number.MAX_SAFE_INTEGER&&X?(x&&h.getAttribute("morphTarget"+v)!==x[I]&&h.setAttribute("morphTarget"+v,x[I]),w&&h.getAttribute("morphNormal"+v)!==w[I]&&h.setAttribute("morphNormal"+v,w[I]),i[v]=X,T+=X):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),w&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const E=h.morphTargetsRelative?1:1-T;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function op(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const kl=new ue,Hl=new us,Vl=new bo,Gl=new ds,Ha=[],Va=[],Ga=new Float32Array(16),Wa=new Float32Array(9),qa=new Float32Array(4);function Pi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ha[i];if(s===void 0&&(s=new Float32Array(i),Ha[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ve(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ps(r,t){let e=Va[t];e===void 0&&(e=new Int32Array(t),Va[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function ap(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function lp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;r.uniform2fv(this.addr,t),xe(e,t)}}function cp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;r.uniform3fv(this.addr,t),xe(e,t)}}function hp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;r.uniform4fv(this.addr,t),xe(e,t)}}function up(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;qa.set(n),r.uniformMatrix2fv(this.addr,!1,qa),xe(e,n)}}function dp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Wa.set(n),r.uniformMatrix3fv(this.addr,!1,Wa),xe(e,n)}}function fp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Ga.set(n),r.uniformMatrix4fv(this.addr,!1,Ga),xe(e,n)}}function pp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function mp(r,t){const e=this.cache;ve(e,t)||(r.uniform2iv(this.addr,t),xe(e,t))}function gp(r,t){const e=this.cache;ve(e,t)||(r.uniform3iv(this.addr,t),xe(e,t))}function xp(r,t){const e=this.cache;ve(e,t)||(r.uniform4iv(this.addr,t),xe(e,t))}function _p(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function yp(r,t){const e=this.cache;ve(e,t)||(r.uniform2uiv(this.addr,t),xe(e,t))}function vp(r,t){const e=this.cache;ve(e,t)||(r.uniform3uiv(this.addr,t),xe(e,t))}function Mp(r,t){const e=this.cache;ve(e,t)||(r.uniform4uiv(this.addr,t),xe(e,t))}function wp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||kl,i)}function bp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vl,i)}function Sp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gl,i)}function Ep(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hl,i)}function Tp(r){switch(r){case 5126:return ap;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return xp;case 5125:return _p;case 36294:return yp;case 36295:return vp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ep}}function Ap(r,t){r.uniform1fv(this.addr,t)}function Cp(r,t){const e=Pi(t,this.size,2);r.uniform2fv(this.addr,e)}function Lp(r,t){const e=Pi(t,this.size,3);r.uniform3fv(this.addr,e)}function Rp(r,t){const e=Pi(t,this.size,4);r.uniform4fv(this.addr,e)}function Pp(r,t){const e=Pi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Dp(r,t){const e=Pi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Ip(r,t){const e=Pi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Fp(r,t){r.uniform1iv(this.addr,t)}function Np(r,t){r.uniform2iv(this.addr,t)}function zp(r,t){r.uniform3iv(this.addr,t)}function Bp(r,t){r.uniform4iv(this.addr,t)}function Op(r,t){r.uniform1uiv(this.addr,t)}function Up(r,t){r.uniform2uiv(this.addr,t)}function kp(r,t){r.uniform3uiv(this.addr,t)}function Hp(r,t){r.uniform4uiv(this.addr,t)}function Vp(r,t,e){const n=t.length,i=ps(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2D(t[s]||kl,i[s])}function Gp(r,t,e){const n=t.length,i=ps(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||Vl,i[s])}function Wp(r,t,e){const n=t.length,i=ps(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTextureCube(t[s]||Gl,i[s])}function qp(r,t,e){const n=t.length,i=ps(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||Hl,i[s])}function Xp(r){switch(r){case 5126:return Ap;case 35664:return Cp;case 35665:return Lp;case 35666:return Rp;case 35674:return Pp;case 35675:return Dp;case 35676:return Ip;case 5124:case 35670:return Fp;case 35667:case 35671:return Np;case 35668:case 35672:return zp;case 35669:case 35673:return Bp;case 5125:return Op;case 36294:return Up;case 36295:return kp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return qp}}function Yp(r,t,e){this.id=r,this.addr=e,this.cache=[],this.setValue=Tp(t.type)}function Wl(r,t,e){this.id=r,this.addr=e,this.cache=[],this.size=t.size,this.setValue=Xp(t.type)}Wl.prototype.updateCache=function(r){const t=this.cache;r instanceof Float32Array&&t.length!==r.length&&(this.cache=new Float32Array(r.length)),xe(t,r)};function ql(r){this.id=r,this.seq=[],this.map={}}ql.prototype.setValue=function(r,t,e){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(r,t[o.id],e)}};const $s=/(\w+)(\])?(\[|\.)?/g;function Xa(r,t){r.seq.push(t),r.map[t.id]=t}function jp(r,t,e){const n=r.name,i=n.length;for($s.lastIndex=0;;){const s=$s.exec(n),o=$s.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Xa(e,l===void 0?new Yp(a,r,t):new Wl(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new ql(a),Xa(e,u)),e=u}}}function yn(r,t){this.seq=[],this.map={};const e=r.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=r.getActiveUniform(t,n),s=r.getUniformLocation(t,i.name);jp(i,s,this)}}yn.prototype.setValue=function(r,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(r,e,n)};yn.prototype.setOptional=function(r,t,e){const n=t[e];n!==void 0&&this.setValue(r,e,n)};yn.upload=function(r,t,e,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],a=e[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};yn.seqWithValue=function(r,t){const e=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in t&&e.push(s)}return e};function Ya(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Zp=0;function Jp(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++)n.push(o+1+": "+e[o]);return n.join(`
`)}function $p(r){switch(r){case ln:return["Linear","( value )"];case Jt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ja(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=parseInt(/ERROR: 0:(\d+)/.exec(i)[1]);return e.toUpperCase()+`

`+i+`

`+Jp(r.getShaderSource(t),s)}function Kp(r,t){const e=$p(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Qp(r,t){let e;switch(t){case ih:e="Linear";break;case rh:e="Reinhard";break;case sh:e="OptimizedCineon";break;case oh:e="ACESFilmic";break;case ah:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function tm(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function em(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nm(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Yi(r){return r!==""}function Za(r,t){return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ja(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const im=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(r){return r.replace(im,rm)}function rm(r,t){const e=It[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return po(e)}const sm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $a(r){return r.replace(om,Xl).replace(sm,am)}function am(r,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Xl(r,t,e,n)}function Xl(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ka(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Tl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Nc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function cm(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Mi:case wi:t="ENVMAP_TYPE_CUBE";break;case cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hm(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wi:t="ENVMAP_MODE_REFRACTION";break}return t}function um(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ls:t="ENVMAP_BLENDING_MULTIPLY";break;case eh:t="ENVMAP_BLENDING_MIX";break;case nh:t="ENVMAP_BLENDING_ADD";break}return t}function dm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t/32+1)+3,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fm(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=lm(e),l=cm(e),h=hm(e),u=um(e),d=dm(e),p=e.isWebGL2?"":tm(e),g=em(s),m=i.createProgram();let f,x,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(Yi).join(`
`),f.length>0&&(f+=`
`),x=[p,g].filter(Yi).join(`
`),x.length>0&&(x+=`
`)):(f=[Ka(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),x=[p,Ka(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==an?"#define TONE_MAPPING":"",e.toneMapping!==an?It.tonemapping_pars_fragment:"",e.toneMapping!==an?Qp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.encodings_pars_fragment,Kp("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yi).join(`
`)),o=po(o),o=Za(o,e),o=Ja(o,e),a=po(a),a=Za(a,e),a=Ja(a,e),o=$a(o),a=$a(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",e.glslVersion===Ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=w+f+o,E=w+x+a,v=Ya(i,35633,T),R=Ya(i,35632,E);if(i.attachShader(m,v),i.attachShader(m,R),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const ht=i.getProgramInfoLog(m).trim(),H=i.getShaderInfoLog(v).trim(),_=i.getShaderInfoLog(R).trim();let C=!0,j=!0;if(i.getProgramParameter(m,35714)===!1){C=!1;const P=ja(i,v,"vertex"),U=ja(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+ht+`
`+P+`
`+U)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(H===""||_==="")&&(j=!1);j&&(this.diagnostics={runnable:C,programLog:ht,vertexShader:{log:H,prefix:f},fragmentShader:{log:_,prefix:x}})}i.deleteShader(v),i.deleteShader(R);let I;this.getUniforms=function(){return I===void 0&&(I=new yn(i,m)),I};let X;return this.getAttributes=function(){return X===void 0&&(X=nm(i,m)),X},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=Zp++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=R,this}let pm=0;class mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new gm(t);e.set(t,n)}return e.get(t)}}class gm{constructor(t){this.id=pm++,this.code=t,this.usedTimes=0}}function xm(r,t,e,n,i,s,o){const a=new Nl,c=new mm,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.floatVertexTextures,p=i.maxVertexUniforms,g=i.vertexTextures;let m=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){const j=_.skeleton.bones;if(d)return 1024;{const U=Math.floor((p-20)/4),N=Math.min(U,j.length);return N<j.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+j.length+" bones. This GPU supports "+N+"."),0):N}}function w(_,C,j,P,U){const N=P.fog,B=U.geometry,L=_.isMeshStandardMaterial?P.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||L),J=!!W&&W.mapping===cs?W.image.height:null,K=f[_.type],Q=U.isSkinnedMesh?x(U):0;_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const lt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ft=lt!==void 0?lt.length:0;let wt=0;B.morphAttributes.position!==void 0&&(wt=1),B.morphAttributes.normal!==void 0&&(wt=2),B.morphAttributes.color!==void 0&&(wt=3);let G,Ot,Tt,At;if(K){const tt=Ye[K];G=tt.vertexShader,Ot=tt.fragmentShader}else G=_.vertexShader,Ot=_.fragmentShader,c.update(_),Tt=c.getVertexShaderID(_),At=c.getFragmentShaderID(_);const et=r.getRenderTarget(),Dt=_.alphaTest>0,V=_.clearcoat>0;return{isWebGL2:h,shaderID:K,shaderName:_.type,vertexShader:G,fragmentShader:Ot,defines:_.defines,customVertexShaderID:Tt,customFragmentShaderID:At,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:U.isInstancedMesh===!0,instancingColor:U.isInstancedMesh===!0&&U.instanceColor!==null,supportsVertexTextures:g,outputEncoding:et===null?r.outputEncoding:et.isXRRenderTarget===!0?et.texture.encoding:ln,map:!!_.map,matcap:!!_.matcap,envMap:!!W,envMapMode:W&&W.mapping,envMapCubeUVHeight:J,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Rh,tangentSpaceNormalMap:_.normalMapType===Ti,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Jt,clearcoat:V,clearcoatMap:V&&!!_.clearcoatMap,clearcoatRoughnessMap:V&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:V&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===xi,alphaMap:!!_.alphaMap,alphaTest:Dt,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!B.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!N,useFog:_.fog,fogExp2:N&&N.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0&&Q>0,maxBones:Q,useVertexTexture:d,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:wt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:an,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vi,flipSided:_.side===Be,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function T(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const j in _.defines)C.push(j),C.push(_.defines[j]);return _.isRawShaderMaterial===!1&&(E(C,_),v(C,_),C.push(r.outputEncoding)),C.push(_.customProgramCacheKey),C.join()}function E(_,C){_.push(C.precision),_.push(C.outputEncoding),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.combine),_.push(C.vertexUvs),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.maxBones),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection)}function v(_,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.displacementMap&&a.enable(18),C.specularMap&&a.enable(19),C.roughnessMap&&a.enable(20),C.metalnessMap&&a.enable(21),C.gradientMap&&a.enable(22),C.alphaMap&&a.enable(23),C.alphaTest&&a.enable(24),C.vertexColors&&a.enable(25),C.vertexAlphas&&a.enable(26),C.vertexUvs&&a.enable(27),C.vertexTangents&&a.enable(28),C.uvsVertexOnly&&a.enable(29),C.fog&&a.enable(30),_.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.useVertexTexture&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.depthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),_.push(a.mask)}function R(_){const C=f[_.type];let j;if(C){const P=Ye[C];j=hu.clone(P.uniforms)}else j=_.uniforms;return j}function I(_,C){let j;for(let P=0,U=l.length;P<U;P++){const N=l[P];if(N.cacheKey===C){j=N,++j.usedTimes;break}}return j===void 0&&(j=new fm(r,C,_,s),l.push(j)),j}function X(_){if(--_.usedTimes===0){const C=l.indexOf(_);l[C]=l[l.length-1],l.pop(),_.destroy()}}function ht(_){c.remove(_)}function H(){c.dispose()}return{getParameters:w,getProgramCacheKey:T,getUniforms:R,acquireProgram:I,releaseProgram:X,releaseShaderCache:ht,programs:l,dispose:H}}function _m(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ym(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Qa(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function tl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,m,f){let x=r[t];return x===void 0?(x={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:m,group:f},r[t]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=p,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=m,x.group=f),t++,x}function a(u,d,p,g,m,f){const x=o(u,d,p,g,m,f);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):e.push(x)}function c(u,d,p,g,m,f){const x=o(u,d,p,g,m,f);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):e.unshift(x)}function l(u,d){e.length>1&&e.sort(u||ym),n.length>1&&n.sort(d||Qa),i.length>1&&i.sort(d||Qa)}function h(){for(let u=t,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function vm(){let r=new WeakMap;function t(n,i){let s;return r.has(n)===!1?(s=new tl,r.set(n,[s])):i>=r.get(n).length?(s=new tl,r.get(n).push(s)):s=r.get(n)[i],s}function e(){r=new WeakMap}return{get:t,dispose:e}}function Mm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new S,color:new pt};break;case"SpotLight":e={position:new S,direction:new S,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new S,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new S,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new S,halfWidth:new S,halfHeight:new S};break}return r[t.id]=e,e}}}function wm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let bm=0;function Sm(r,t){return(t.castShadow?1:0)-(r.castShadow?1:0)}function Em(r,t){const e=new Mm,n=wm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new S);const s=new S,o=new gt,a=new gt;function c(h,u){let d=0,p=0,g=0;for(let ht=0;ht<9;ht++)i.probe[ht].set(0,0,0);let m=0,f=0,x=0,w=0,T=0,E=0,v=0,R=0;h.sort(Sm);const I=u!==!0?Math.PI:1;for(let ht=0,H=h.length;ht<H;ht++){const _=h[ht],C=_.color,j=_.intensity,P=_.distance,U=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)d+=C.r*j*I,p+=C.g*j*I,g+=C.b*j*I;else if(_.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(_.sh.coefficients[N],j);else if(_.isDirectionalLight){const N=e.get(_);if(N.color.copy(_.color).multiplyScalar(_.intensity*I),_.castShadow){const B=_.shadow,L=n.get(_);L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=U,i.directionalShadowMatrix[m]=_.shadow.matrix,E++}i.directional[m]=N,m++}else if(_.isSpotLight){const N=e.get(_);if(N.position.setFromMatrixPosition(_.matrixWorld),N.color.copy(C).multiplyScalar(j*I),N.distance=P,N.coneCos=Math.cos(_.angle),N.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),N.decay=_.decay,_.castShadow){const B=_.shadow,L=n.get(_);L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=U,i.spotShadowMatrix[x]=_.shadow.matrix,R++}i.spot[x]=N,x++}else if(_.isRectAreaLight){const N=e.get(_);N.color.copy(C).multiplyScalar(j),N.halfWidth.set(_.width*.5,0,0),N.halfHeight.set(0,_.height*.5,0),i.rectArea[w]=N,w++}else if(_.isPointLight){const N=e.get(_);if(N.color.copy(_.color).multiplyScalar(_.intensity*I),N.distance=_.distance,N.decay=_.decay,_.castShadow){const B=_.shadow,L=n.get(_);L.shadowBias=B.bias,L.shadowNormalBias=B.normalBias,L.shadowRadius=B.radius,L.shadowMapSize=B.mapSize,L.shadowCameraNear=B.camera.near,L.shadowCameraFar=B.camera.far,i.pointShadow[f]=L,i.pointShadowMap[f]=U,i.pointShadowMatrix[f]=_.shadow.matrix,v++}i.point[f]=N,f++}else if(_.isHemisphereLight){const N=e.get(_);N.skyColor.copy(_.color).multiplyScalar(j*I),N.groundColor.copy(_.groundColor).multiplyScalar(j*I),i.hemi[T]=N,T++}}w>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const X=i.hash;(X.directionalLength!==m||X.pointLength!==f||X.spotLength!==x||X.rectAreaLength!==w||X.hemiLength!==T||X.numDirectionalShadows!==E||X.numPointShadows!==v||X.numSpotShadows!==R)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=w,i.point.length=f,i.hemi.length=T,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=v,i.spotShadowMatrix.length=R,X.directionalLength=m,X.pointLength=f,X.spotLength=x,X.rectAreaLength=w,X.hemiLength=T,X.numDirectionalShadows=E,X.numPointShadows=v,X.numSpotShadows=R,i.version=bm++)}function l(h,u){let d=0,p=0,g=0,m=0,f=0;const x=u.matrixWorldInverse;for(let w=0,T=h.length;w<T;w++){const E=h[w];if(E.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),d++}else if(E.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),g++}else if(E.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),a.identity(),o.copy(E.matrixWorld),o.premultiply(x),a.extractRotation(o),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const v=i.point[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(x),p++}else if(E.isHemisphereLight){const v=i.hemi[f];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(x),v.direction.normalize(),f++}}}return{setup:c,setupView:l,state:i}}function el(r,t){const e=new Em(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Tm(r,t){let e=new WeakMap;function n(s,o=0){let a;return e.has(s)===!1?(a=new el(r,t),e.set(s,[a])):o>=e.get(s).length?(a=new el(r,t),e.get(s).push(a)):a=e.get(s)[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Lo extends le{constructor(t){super(),this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}Lo.prototype.isMeshDepthMaterial=!0;class Ro extends le{constructor(t){super(),this.type="MeshDistanceMaterial",this.referencePosition=new S,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}Ro.prototype.isMeshDistanceMaterial=!0;const Am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yl(r,t,e){let n=new fs;const i=new $,s=new $,o=new Wt,a=new Lo({depthPacking:Lh}),c=new Ro,l={},h=e.maxTextureSize,u={0:Be,1:er,2:vi},d=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:Am,fragmentShader:Cm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Xt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl,this.render=function(E,v,R){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;const I=r.getRenderTarget(),X=r.getActiveCubeFace(),ht=r.getActiveMipmapLevel(),H=r.state;H.setBlending(_n),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let _=0,C=E.length;_<C;_++){const j=E[_],P=j.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const U=P.getFrameExtents();if(i.multiply(U),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/U.x),i.x=s.x*U.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/U.y),i.y=s.y*U.y,P.mapSize.y=s.y)),P.map===null&&!P.isPointLightShadow&&this.type===Xi&&(P.map=new Te(i.x,i.y),P.map.texture.name=j.name+".shadowMap",P.mapPass=new Te(i.x,i.y),P.camera.updateProjectionMatrix()),P.map===null){const B={minFilter:he,magFilter:he,format:ze};P.map=new Te(i.x,i.y,B),P.map.texture.name=j.name+".shadowMap",P.camera.updateProjectionMatrix()}r.setRenderTarget(P.map),r.clear();const N=P.getViewportCount();for(let B=0;B<N;B++){const L=P.getViewport(B);o.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),H.viewport(o),P.updateMatrices(j,B),n=P.getFrustum(),T(v,R,P.camera,j,this.type)}!P.isPointLightShadow&&this.type===Xi&&x(P,R),P.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(I,X,ht)};function x(E,v){const R=t.update(m);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(v,null,R,d,m,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(v,null,R,p,m,null)}function w(E,v,R,I,X,ht){let H=null;const _=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(_!==void 0?H=_:H=R.isPointLight===!0?c:a,r.localClippingEnabled&&v.clipShadows===!0&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const C=H.uuid,j=v.uuid;let P=l[C];P===void 0&&(P={},l[C]=P);let U=P[j];U===void 0&&(U=H.clone(),P[j]=U),H=U}return H.visible=v.visible,H.wireframe=v.wireframe,ht===Xi?H.side=v.shadowSide!==null?v.shadowSide:v.side:H.side=v.shadowSide!==null?v.shadowSide:u[v.side],H.alphaMap=v.alphaMap,H.alphaTest=v.alphaTest,H.clipShadows=v.clipShadows,H.clippingPlanes=v.clippingPlanes,H.clipIntersection=v.clipIntersection,H.displacementMap=v.displacementMap,H.displacementScale=v.displacementScale,H.displacementBias=v.displacementBias,H.wireframeLinewidth=v.wireframeLinewidth,H.linewidth=v.linewidth,R.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(H.referencePosition.setFromMatrixPosition(R.matrixWorld),H.nearDistance=I,H.farDistance=X),H}function T(E,v,R,I,X){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&X===Xi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const _=t.update(E),C=E.material;if(Array.isArray(C)){const j=_.groups;for(let P=0,U=j.length;P<U;P++){const N=j[P],B=C[N.materialIndex];if(B&&B.visible){const L=w(E,B,I,R.near,R.far,X);r.renderBufferDirect(R,null,_,L,E,N)}}}else if(C.visible){const j=w(E,C,I,R.near,R.far,X);r.renderBufferDirect(R,null,_,j,E,null)}}const H=E.children;for(let _=0,C=H.length;_<C;_++)T(H[_],v,R,I,X)}}function Lm(r,t,e){const n=e.isWebGL2;function i(){let A=!1;const st=new Wt;let it=null;const yt=new Wt(0,0,0,0);return{setMask:function(ut){it!==ut&&!A&&(r.colorMask(ut,ut,ut,ut),it=ut)},setLocked:function(ut){A=ut},setClear:function(ut,vt,nt,bt,jt){jt===!0&&(ut*=bt,vt*=bt,nt*=bt),st.set(ut,vt,nt,bt),yt.equals(st)===!1&&(r.clearColor(ut,vt,nt,bt),yt.copy(st))},reset:function(){A=!1,it=null,yt.set(-1,0,0,0)}}}function s(){let A=!1,st=null,it=null,yt=null;return{setTest:function(ut){ut?wt(2929):G(2929)},setMask:function(ut){st!==ut&&!A&&(r.depthMask(ut),st=ut)},setFunc:function(ut){if(it!==ut){if(ut)switch(ut){case jc:r.depthFunc(512);break;case Zc:r.depthFunc(519);break;case Jc:r.depthFunc(513);break;case oo:r.depthFunc(515);break;case $c:r.depthFunc(514);break;case Kc:r.depthFunc(518);break;case Qc:r.depthFunc(516);break;case th:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);it=ut}},setLocked:function(ut){A=ut},setClear:function(ut){yt!==ut&&(r.clearDepth(ut),yt=ut)},reset:function(){A=!1,st=null,it=null,yt=null}}}function o(){let A=!1,st=null,it=null,yt=null,ut=null,vt=null,nt=null,bt=null,jt=null;return{setTest:function(Nt){A||(Nt?wt(2960):G(2960))},setMask:function(Nt){st!==Nt&&!A&&(r.stencilMask(Nt),st=Nt)},setFunc:function(Nt,He,Ve){(it!==Nt||yt!==He||ut!==Ve)&&(r.stencilFunc(Nt,He,Ve),it=Nt,yt=He,ut=Ve)},setOp:function(Nt,He,Ve){(vt!==Nt||nt!==He||bt!==Ve)&&(r.stencilOp(Nt,He,Ve),vt=Nt,nt=He,bt=Ve)},setLocked:function(Nt){A=Nt},setClear:function(Nt){jt!==Nt&&(r.clearStencil(Nt),jt=Nt)},reset:function(){A=!1,st=null,it=null,yt=null,ut=null,vt=null,nt=null,bt=null,jt=null}}}const a=new i,c=new s,l=new o;let h={},u={},d=new WeakMap,p=[],g=null,m=!1,f=null,x=null,w=null,T=null,E=null,v=null,R=null,I=!1,X=null,ht=null,H=null,_=null,C=null;const j=r.getParameter(35661);let P=!1,U=0;const N=r.getParameter(7938);N.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(N)[1]),P=U>=1):N.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),P=U>=2);let B=null,L={};const W=r.getParameter(3088),J=r.getParameter(2978),K=new Wt().fromArray(W),Q=new Wt().fromArray(J);function lt(A,st,it){const yt=new Uint8Array(4),ut=r.createTexture();r.bindTexture(A,ut),r.texParameteri(A,10241,9728),r.texParameteri(A,10240,9728);for(let vt=0;vt<it;vt++)r.texImage2D(st+vt,0,6408,1,1,0,6408,5121,yt);return ut}const Ft={};Ft[3553]=lt(3553,3553,1),Ft[34067]=lt(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),wt(2929),c.setFunc(oo),tt(!1),dt(Xo),wt(2884),V(_n);function wt(A){h[A]!==!0&&(r.enable(A),h[A]=!0)}function G(A){h[A]!==!1&&(r.disable(A),h[A]=!1)}function Ot(A,st){return u[A]!==st?(r.bindFramebuffer(A,st),u[A]=st,n&&(A===36009&&(u[36160]=st),A===36160&&(u[36009]=st)),!0):!1}function Tt(A,st){let it=p,yt=!1;if(A)if(it=d.get(st),it===void 0&&(it=[],d.set(st,it)),A.isWebGLMultipleRenderTargets){const ut=A.texture;if(it.length!==ut.length||it[0]!==36064){for(let vt=0,nt=ut.length;vt<nt;vt++)it[vt]=36064+vt;it.length=ut.length,yt=!0}}else it[0]!==36064&&(it[0]=36064,yt=!0);else it[0]!==1029&&(it[0]=1029,yt=!0);yt&&(e.isWebGL2?r.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function At(A){return g!==A?(r.useProgram(A),g=A,!0):!1}const et={[ui]:32774,[Bc]:32778,[Oc]:32779};if(n)et[Jo]=32775,et[$o]=32776;else{const A=t.get("EXT_blend_minmax");A!==null&&(et[Jo]=A.MIN_EXT,et[$o]=A.MAX_EXT)}const Dt={[Uc]:0,[kc]:1,[Hc]:768,[Cl]:770,[Yc]:776,[qc]:774,[Gc]:772,[Vc]:769,[Ll]:771,[Xc]:775,[Wc]:773};function V(A,st,it,yt,ut,vt,nt,bt){if(A===_n){m===!0&&(G(3042),m=!1);return}if(m===!1&&(wt(3042),m=!0),A!==zc){if(A!==f||bt!==I){if((x!==ui||E!==ui)&&(r.blendEquation(32774),x=ui,E=ui),bt)switch(A){case xi:r.blendFuncSeparate(1,771,1,771);break;case Yo:r.blendFunc(1,1);break;case jo:r.blendFuncSeparate(0,769,0,1);break;case Zo:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case xi:r.blendFuncSeparate(770,771,1,771);break;case Yo:r.blendFunc(770,1);break;case jo:r.blendFuncSeparate(0,769,0,1);break;case Zo:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,T=null,v=null,R=null,f=A,I=bt}return}ut=ut||st,vt=vt||it,nt=nt||yt,(st!==x||ut!==E)&&(r.blendEquationSeparate(et[st],et[ut]),x=st,E=ut),(it!==w||yt!==T||vt!==v||nt!==R)&&(r.blendFuncSeparate(Dt[it],Dt[yt],Dt[vt],Dt[nt]),w=it,T=yt,v=vt,R=nt),f=A,I=null}function Y(A,st){A.side===vi?G(2884):wt(2884);let it=A.side===Be;st&&(it=!it),tt(it),A.blending===xi&&A.transparent===!1?V(_n):V(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);const yt=A.stencilWrite;l.setTest(yt),yt&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),St(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?wt(32926):G(32926)}function tt(A){X!==A&&(A?r.frontFace(2304):r.frontFace(2305),X=A)}function dt(A){A!==Ic?(wt(2884),A!==ht&&(A===Xo?r.cullFace(1029):A===Fc?r.cullFace(1028):r.cullFace(1032))):G(2884),ht=A}function at(A){A!==H&&(P&&r.lineWidth(A),H=A)}function St(A,st,it){A?(wt(32823),(_!==st||C!==it)&&(r.polygonOffset(st,it),_=st,C=it)):G(32823)}function _t(A){A?wt(3089):G(3089)}function mt(A){A===void 0&&(A=33984+j-1),B!==A&&(r.activeTexture(A),B=A)}function Qt(A,st){B===null&&mt();let it=L[B];it===void 0&&(it={type:void 0,texture:void 0},L[B]=it),(it.type!==A||it.texture!==st)&&(r.bindTexture(A,st||Ft[A]),it.type=A,it.texture=st)}function qt(){const A=L[B];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function b(){try{r.compressedTexImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function y(){try{r.texSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function O(){try{r.texSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Z(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ot(){try{r.texStorage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(){try{r.texStorage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xt(){try{r.texImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function k(){try{r.texImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ct(A){K.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),K.copy(A))}function Rt(A){Q.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),Q.copy(A))}function ft(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},B=null,L={},u={},d=new WeakMap,p=[],g=null,m=!1,f=null,x=null,w=null,T=null,E=null,v=null,R=null,I=!1,X=null,ht=null,H=null,_=null,C=null,K.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:wt,disable:G,bindFramebuffer:Ot,drawBuffers:Tt,useProgram:At,setBlending:V,setMaterial:Y,setFlipSided:tt,setCullFace:dt,setLineWidth:at,setPolygonOffset:St,setScissorTest:_t,activeTexture:mt,bindTexture:Qt,unbindTexture:qt,compressedTexImage2D:b,texImage2D:xt,texImage3D:k,texStorage2D:ot,texStorage3D:ct,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:Z,scissor:Ct,viewport:Rt,reset:ft}}function Rm(r,t,e,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,y){return x?new OffscreenCanvas(b,y):sr("canvas")}function T(b,y,O,Z){let ot=1;if((b.width>Z||b.height>Z)&&(ot=Z/Math.max(b.width,b.height)),ot<1||y===!0)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap){const ct=y?rs:Math.floor,xt=ct(ot*b.width),k=ct(ot*b.height);m===void 0&&(m=w(xt,k));const Ct=O?w(xt,k):m;return Ct.width=xt,Ct.height=k,Ct.getContext("2d").drawImage(b,0,0,xt,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+xt+"x"+k+")."),Ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function E(b){return fo(b.width)&&fo(b.height)}function v(b){return a?!1:b.wrapS!==Ne||b.wrapT!==Ne||b.minFilter!==he&&b.minFilter!==Me}function R(b,y){return b.generateMipmaps&&y&&b.minFilter!==he&&b.minFilter!==Me}function I(b){r.generateMipmap(b)}function X(b,y,O,Z,ot=!1){if(a===!1)return y;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ct=y;return y===6403&&(O===5126&&(ct=33326),O===5131&&(ct=33325),O===5121&&(ct=33321)),y===33319&&(O===5126&&(ct=33328),O===5131&&(ct=33327),O===5121&&(ct=33323)),y===6408&&(O===5126&&(ct=34836),O===5131&&(ct=34842),O===5121&&(ct=Z===Jt&&ot===!1?35907:32856),O===32819&&(ct=32854),O===32820&&(ct=32855)),(ct===33325||ct===33326||ct===33327||ct===33328||ct===34842||ct===34836)&&t.get("EXT_color_buffer_float"),ct}function ht(b,y,O){return R(b,O)===!0||b.isFramebufferTexture&&b.minFilter!==he&&b.minFilter!==Me?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function H(b){return b===he||b===Ko||b===Qo?9728:9729}function _(b){const y=b.target;y.removeEventListener("dispose",_),j(y),y.isVideoTexture&&g.delete(y)}function C(b){const y=b.target;y.removeEventListener("dispose",C),U(y)}function j(b){const y=n.get(b);if(y.__webglInit===void 0)return;const O=b.source,Z=f.get(O);if(Z){const ot=Z[y.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&P(b),Object.keys(Z).length===0&&f.delete(O)}n.remove(b)}function P(b){const y=n.get(b);r.deleteTexture(y.__webglTexture);const O=b.source,Z=f.get(O);delete Z[y.__cacheKey],o.memory.textures--}function U(b){const y=b.texture,O=n.get(b),Z=n.get(y);if(Z.__webglTexture!==void 0&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++)r.deleteFramebuffer(O.__webglFramebuffer[ot]),O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[ot]);else r.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer&&r.deleteRenderbuffer(O.__webglColorRenderbuffer),O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer);if(b.isWebGLMultipleRenderTargets)for(let ot=0,ct=y.length;ot<ct;ot++){const xt=n.get(y[ot]);xt.__webglTexture&&(r.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(y[ot])}n.remove(y),n.remove(b)}let N=0;function B(){N=0}function L(){const b=N;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),N+=1,b}function W(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.encoding),y.join()}function J(b,y){const O=n.get(b);if(b.isVideoTexture&&Qt(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(O,b,y);return}}e.activeTexture(33984+y),e.bindTexture(3553,O.__webglTexture)}function K(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Tt(O,b,y);return}e.activeTexture(33984+y),e.bindTexture(35866,O.__webglTexture)}function Q(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Tt(O,b,y);return}e.activeTexture(33984+y),e.bindTexture(32879,O.__webglTexture)}function lt(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){At(O,b,y);return}e.activeTexture(33984+y),e.bindTexture(34067,O.__webglTexture)}const Ft={[co]:10497,[Ne]:33071,[ho]:33648},wt={[he]:9728,[Ko]:9984,[Qo]:9986,[Me]:9729,[lh]:9985,[hs]:9987};function G(b,y,O){if(O?(r.texParameteri(b,10242,Ft[y.wrapS]),r.texParameteri(b,10243,Ft[y.wrapT]),(b===32879||b===35866)&&r.texParameteri(b,32882,Ft[y.wrapR]),r.texParameteri(b,10240,wt[y.magFilter]),r.texParameteri(b,10241,wt[y.minFilter])):(r.texParameteri(b,10242,33071),r.texParameteri(b,10243,33071),(b===32879||b===35866)&&r.texParameteri(b,32882,33071),(y.wrapS!==Ne||y.wrapT!==Ne)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,10240,H(y.magFilter)),r.texParameteri(b,10241,H(y.minFilter)),y.minFilter!==he&&y.minFilter!==Me&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Z=t.get("EXT_texture_filter_anisotropic");if(y.type===zn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===_i&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Ot(b,y){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",_));const Z=y.source;let ot=f.get(Z);ot===void 0&&(ot={},f.set(Z,ot));const ct=W(y);if(ct!==b.__cacheKey){ot[ct]===void 0&&(ot[ct]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ot[ct].usedTimes++;const xt=ot[b.__cacheKey];xt!==void 0&&(ot[b.__cacheKey].usedTimes--,xt.usedTimes===0&&P(y)),b.__cacheKey=ct,b.__webglTexture=ot[ct].texture}return O}function Tt(b,y,O){let Z=3553;y.isDataArrayTexture&&(Z=35866),y.isData3DTexture&&(Z=32879);const ot=Ot(b,y),ct=y.source;if(e.activeTexture(33984+O),e.bindTexture(Z,b.__webglTexture),ct.version!==ct.__currentVersion||ot===!0){r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const xt=v(y)&&E(y.image)===!1;let k=T(y.image,xt,!1,h);k=qt(y,k);const Ct=E(k)||a,Rt=s.convert(y.format,y.encoding);let ft=s.convert(y.type),A=X(y.internalFormat,Rt,ft,y.encoding,y.isVideoTexture);G(Z,y,Ct);let st;const it=y.mipmaps,yt=a&&y.isVideoTexture!==!0,ut=b.__version===void 0,vt=ht(y,k,Ct);if(y.isDepthTexture)A=6402,a?y.type===zn?A=36012:y.type===Jr?A=33190:y.type===yi?A=35056:A=33189:y.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===On&&A===6402&&y.type!==nr&&y.type!==Jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=nr,ft=s.convert(y.type)),y.format===bi&&A===6402&&(A=34041,y.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=yi,ft=s.convert(y.type))),yt&&ut?e.texStorage2D(3553,1,A,k.width,k.height):e.texImage2D(3553,0,A,k.width,k.height,0,Rt,ft,null);else if(y.isDataTexture)if(it.length>0&&Ct){yt&&ut&&e.texStorage2D(3553,vt,A,it[0].width,it[0].height);for(let nt=0,bt=it.length;nt<bt;nt++)st=it[nt],yt?e.texSubImage2D(3553,nt,0,0,st.width,st.height,Rt,ft,st.data):e.texImage2D(3553,nt,A,st.width,st.height,0,Rt,ft,st.data);y.generateMipmaps=!1}else yt?(ut&&e.texStorage2D(3553,vt,A,k.width,k.height),e.texSubImage2D(3553,0,0,0,k.width,k.height,Rt,ft,k.data)):e.texImage2D(3553,0,A,k.width,k.height,0,Rt,ft,k.data);else if(y.isCompressedTexture){yt&&ut&&e.texStorage2D(3553,vt,A,it[0].width,it[0].height);for(let nt=0,bt=it.length;nt<bt;nt++)st=it[nt],y.format!==ze?Rt!==null?yt?e.compressedTexSubImage2D(3553,nt,0,0,st.width,st.height,Rt,st.data):e.compressedTexImage2D(3553,nt,A,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?e.texSubImage2D(3553,nt,0,0,st.width,st.height,Rt,ft,st.data):e.texImage2D(3553,nt,A,st.width,st.height,0,Rt,ft,st.data)}else if(y.isDataArrayTexture)yt?(ut&&e.texStorage3D(35866,vt,A,k.width,k.height,k.depth),e.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,Rt,ft,k.data)):e.texImage3D(35866,0,A,k.width,k.height,k.depth,0,Rt,ft,k.data);else if(y.isData3DTexture)yt?(ut&&e.texStorage3D(32879,vt,A,k.width,k.height,k.depth),e.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,Rt,ft,k.data)):e.texImage3D(32879,0,A,k.width,k.height,k.depth,0,Rt,ft,k.data);else if(y.isFramebufferTexture)yt&&ut?e.texStorage2D(3553,vt,A,k.width,k.height):e.texImage2D(3553,0,A,k.width,k.height,0,Rt,ft,null);else if(it.length>0&&Ct){yt&&ut&&e.texStorage2D(3553,vt,A,it[0].width,it[0].height);for(let nt=0,bt=it.length;nt<bt;nt++)st=it[nt],yt?e.texSubImage2D(3553,nt,0,0,Rt,ft,st):e.texImage2D(3553,nt,A,Rt,ft,st);y.generateMipmaps=!1}else yt?(ut&&e.texStorage2D(3553,vt,A,k.width,k.height),e.texSubImage2D(3553,0,0,0,Rt,ft,k)):e.texImage2D(3553,0,A,Rt,ft,k);R(y,Ct)&&I(Z),ct.__currentVersion=ct.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function At(b,y,O){if(y.image.length!==6)return;const Z=Ot(b,y),ot=y.source;if(e.activeTexture(33984+O),e.bindTexture(34067,b.__webglTexture),ot.version!==ot.__currentVersion||Z===!0){r.pixelStorei(37440,y.flipY),r.pixelStorei(37441,y.premultiplyAlpha),r.pixelStorei(3317,y.unpackAlignment),r.pixelStorei(37443,0);const ct=y.isCompressedTexture||y.image[0].isCompressedTexture,xt=y.image[0]&&y.image[0].isDataTexture,k=[];for(let nt=0;nt<6;nt++)!ct&&!xt?k[nt]=T(y.image[nt],!1,!0,l):k[nt]=xt?y.image[nt].image:y.image[nt],k[nt]=qt(y,k[nt]);const Ct=k[0],Rt=E(Ct)||a,ft=s.convert(y.format,y.encoding),A=s.convert(y.type),st=X(y.internalFormat,ft,A,y.encoding),it=a&&y.isVideoTexture!==!0,yt=b.__version===void 0;let ut=ht(y,Ct,Rt);G(34067,y,Rt);let vt;if(ct){it&&yt&&e.texStorage2D(34067,ut,st,Ct.width,Ct.height);for(let nt=0;nt<6;nt++){vt=k[nt].mipmaps;for(let bt=0;bt<vt.length;bt++){const jt=vt[bt];y.format!==ze?ft!==null?it?e.compressedTexSubImage2D(34069+nt,bt,0,0,jt.width,jt.height,ft,jt.data):e.compressedTexImage2D(34069+nt,bt,st,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?e.texSubImage2D(34069+nt,bt,0,0,jt.width,jt.height,ft,A,jt.data):e.texImage2D(34069+nt,bt,st,jt.width,jt.height,0,ft,A,jt.data)}}}else{vt=y.mipmaps,it&&yt&&(vt.length>0&&ut++,e.texStorage2D(34067,ut,st,k[0].width,k[0].height));for(let nt=0;nt<6;nt++)if(xt){it?e.texSubImage2D(34069+nt,0,0,0,k[nt].width,k[nt].height,ft,A,k[nt].data):e.texImage2D(34069+nt,0,st,k[nt].width,k[nt].height,0,ft,A,k[nt].data);for(let bt=0;bt<vt.length;bt++){const Nt=vt[bt].image[nt].image;it?e.texSubImage2D(34069+nt,bt+1,0,0,Nt.width,Nt.height,ft,A,Nt.data):e.texImage2D(34069+nt,bt+1,st,Nt.width,Nt.height,0,ft,A,Nt.data)}}else{it?e.texSubImage2D(34069+nt,0,0,0,ft,A,k[nt]):e.texImage2D(34069+nt,0,st,ft,A,k[nt]);for(let bt=0;bt<vt.length;bt++){const jt=vt[bt];it?e.texSubImage2D(34069+nt,bt+1,0,0,ft,A,jt.image[nt]):e.texImage2D(34069+nt,bt+1,st,ft,A,jt.image[nt])}}}R(y,Rt)&&I(34067),ot.__currentVersion=ot.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function et(b,y,O,Z,ot){const ct=s.convert(O.format,O.encoding),xt=s.convert(O.type),k=X(O.internalFormat,ct,xt,O.encoding);n.get(y).__hasExternalTextures||(ot===32879||ot===35866?e.texImage3D(ot,0,k,y.width,y.height,y.depth,0,ct,xt,null):e.texImage2D(ot,0,k,y.width,y.height,0,ct,xt,null)),e.bindFramebuffer(36160,b),mt(y)?d.framebufferTexture2DMultisampleEXT(36160,Z,ot,n.get(O).__webglTexture,0,_t(y)):r.framebufferTexture2D(36160,Z,ot,n.get(O).__webglTexture,0),e.bindFramebuffer(36160,null)}function Dt(b,y,O){if(r.bindRenderbuffer(36161,b),y.depthBuffer&&!y.stencilBuffer){let Z=33189;if(O||mt(y)){const ot=y.depthTexture;ot&&ot.isDepthTexture&&(ot.type===zn?Z=36012:ot.type===Jr&&(Z=33190));const ct=_t(y);mt(y)?d.renderbufferStorageMultisampleEXT(36161,ct,Z,y.width,y.height):r.renderbufferStorageMultisample(36161,ct,Z,y.width,y.height)}else r.renderbufferStorage(36161,Z,y.width,y.height);r.framebufferRenderbuffer(36160,36096,36161,b)}else if(y.depthBuffer&&y.stencilBuffer){const Z=_t(y);O&&mt(y)===!1?r.renderbufferStorageMultisample(36161,Z,35056,y.width,y.height):mt(y)?d.renderbufferStorageMultisampleEXT(36161,Z,35056,y.width,y.height):r.renderbufferStorage(36161,34041,y.width,y.height),r.framebufferRenderbuffer(36160,33306,36161,b)}else{const Z=y.isWebGLMultipleRenderTargets===!0?y.texture[0]:y.texture,ot=s.convert(Z.format,Z.encoding),ct=s.convert(Z.type),xt=X(Z.internalFormat,ot,ct,Z.encoding),k=_t(y);O&&mt(y)===!1?r.renderbufferStorageMultisample(36161,k,xt,y.width,y.height):mt(y)?d.renderbufferStorageMultisampleEXT(36161,k,xt,y.width,y.height):r.renderbufferStorage(36161,xt,y.width,y.height)}r.bindRenderbuffer(36161,null)}function V(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const Z=n.get(y.depthTexture).__webglTexture,ot=_t(y);if(y.depthTexture.format===On)mt(y)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,ot):r.framebufferTexture2D(36160,36096,3553,Z,0);else if(y.depthTexture.format===bi)mt(y)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,ot):r.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function Y(b){const y=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");V(y.__webglFramebuffer,b)}else if(O){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(36160,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]=r.createRenderbuffer(),Dt(y.__webglDepthbuffer[Z],b,!1)}else e.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),Dt(y.__webglDepthbuffer,b,!1);e.bindFramebuffer(36160,null)}function tt(b,y,O){const Z=n.get(b);y!==void 0&&et(Z.__webglFramebuffer,b,b.texture,36064,3553),O!==void 0&&Y(b)}function dt(b){const y=b.texture,O=n.get(b),Z=n.get(y);b.addEventListener("dispose",C),b.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=y.version,o.memory.textures++);const ot=b.isWebGLCubeRenderTarget===!0,ct=b.isWebGLMultipleRenderTargets===!0,xt=E(b)||a;if(ot){O.__webglFramebuffer=[];for(let k=0;k<6;k++)O.__webglFramebuffer[k]=r.createFramebuffer()}else if(O.__webglFramebuffer=r.createFramebuffer(),ct)if(i.drawBuffers){const k=b.texture;for(let Ct=0,Rt=k.length;Ct<Rt;Ct++){const ft=n.get(k[Ct]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&b.samples>0&&mt(b)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,O.__webglColorRenderbuffer);const k=s.convert(y.format,y.encoding),Ct=s.convert(y.type),Rt=X(y.internalFormat,k,Ct,y.encoding),ft=_t(b);r.renderbufferStorageMultisample(36161,ft,Rt,b.width,b.height),e.bindFramebuffer(36160,O.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,O.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(36160,null)}if(ot){e.bindTexture(34067,Z.__webglTexture),G(34067,y,xt);for(let k=0;k<6;k++)et(O.__webglFramebuffer[k],b,y,36064,34069+k);R(y,xt)&&I(34067),e.unbindTexture()}else if(ct){const k=b.texture;for(let Ct=0,Rt=k.length;Ct<Rt;Ct++){const ft=k[Ct],A=n.get(ft);e.bindTexture(3553,A.__webglTexture),G(3553,ft,xt),et(O.__webglFramebuffer,b,ft,36064+Ct,3553),R(ft,xt)&&I(3553)}e.unbindTexture()}else{let k=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?k=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(k,Z.__webglTexture),G(k,y,xt),et(O.__webglFramebuffer,b,y,36064,k),R(y,xt)&&I(k),e.unbindTexture()}b.depthBuffer&&Y(b)}function at(b){const y=E(b)||a,O=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Z=0,ot=O.length;Z<ot;Z++){const ct=O[Z];if(R(ct,y)){const xt=b.isWebGLCubeRenderTarget?34067:3553,k=n.get(ct).__webglTexture;e.bindTexture(xt,k),I(xt),e.unbindTexture()}}}function St(b){if(a&&b.samples>0&&mt(b)===!1){const y=b.width,O=b.height;let Z=16384;const ot=[36064],ct=b.stencilBuffer?33306:36096;b.depthBuffer&&ot.push(ct);const xt=n.get(b),k=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;k===!1&&(b.depthBuffer&&(Z|=256),b.stencilBuffer&&(Z|=1024)),e.bindFramebuffer(36008,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,xt.__webglFramebuffer),k===!0&&(r.invalidateFramebuffer(36008,[ct]),r.invalidateFramebuffer(36009,[ct])),r.blitFramebuffer(0,0,y,O,0,0,y,O,Z,9728),p&&r.invalidateFramebuffer(36008,ot),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,xt.__webglMultisampledFramebuffer)}}function _t(b){return Math.min(u,b.samples)}function mt(b){const y=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Qt(b){const y=o.render.frame;g.get(b)!==y&&(g.set(b,y),b.update())}function qt(b,y){const O=b.encoding,Z=b.format,ot=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===uo||O!==ln&&(O===Jt?a===!1?t.has("EXT_sRGB")===!0&&Z===ze?(b.format=uo,b.minFilter=Me,b.generateMipmaps=!1):y=Vn.sRGBToLinear(y):(Z!==ze||ot!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),y}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=lt,this.rebindTextures=tt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=et,this.useMultisampledRTT=mt}function Pm(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===kn)return 5121;if(s===dh)return 32819;if(s===fh)return 32820;if(s===ch)return 5120;if(s===hh)return 5122;if(s===nr)return 5123;if(s===uh)return 5124;if(s===Jr)return 5125;if(s===zn)return 5126;if(s===_i)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ph)return 6406;if(s===ze)return 6408;if(s===gh)return 6409;if(s===xh)return 6410;if(s===On)return 6402;if(s===bi)return 34041;if(s===_h)return 6403;if(s===mh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===uo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===yh)return 36244;if(s===vh)return 33319;if(s===Mh)return 33320;if(s===wh)return 36249;if(s===Ms||s===ws||s===bs||s===Ss)if(o===Jt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ms)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ms)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ws)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ss)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ta||s===ea||s===na||s===ia)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ta)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ea)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===na)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ia)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ra||s===sa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ra)return o===Jt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===sa)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===oa||s===aa||s===la||s===ca||s===ha||s===ua||s===da||s===fa||s===pa||s===ma||s===ga||s===xa||s===_a||s===ya)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===oa)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===aa)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===la)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ca)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ha)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ua)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===da)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fa)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pa)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ma)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ga)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xa)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_a)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ya)return o===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===va)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===va)return o===Jt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===yi)return n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class jl extends ye{constructor(t=[]){super(),this.cameras=t}}jl.prototype.isArrayCamera=!0;class ji extends Vt{constructor(){super(),this.type="Group"}}ji.prototype.isGroup=!0;const Dm={type:"move"};class Ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(a!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dm))),l&&t.hand){o=!0;for(const m of t.hand.values()){const f=e.getJointPose(m,n);if(l.joints[m.jointName]===void 0){const w=new ji;w.matrixAutoUpdate=!1,w.visible=!1,l.joints[m.jointName]=w,l.add(w)}const x=l.joints[m.jointName];f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class Zl extends ue{constructor(t,e,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:On,h!==On&&h!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===On&&(n=nr),n===void 0&&h===bi&&(n=yi),super(null,i,s,o,a,c,h,n,l),this.image={width:t,height:e},this.magFilter=a!==void 0?a:he,this.minFilter=c!==void 0?c:he,this.flipY=!1,this.generateMipmaps=!1}}Zl.prototype.isDepthTexture=!0;class Im extends Hn{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=null,l=null,h=null,u=null,d=null;const p=e.getContextAttributes();let g=null,m=null;const f=[],x=new Map,w=new ye;w.layers.enable(1),w.viewport=new Wt;const T=new ye;T.layers.enable(2),T.viewport=new Wt;const E=[w,T],v=new jl;v.layers.enable(1),v.layers.enable(2);let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let W=f[L];return W===void 0&&(W=new Ks,f[L]=W),W.getTargetRaySpace()},this.getControllerGrip=function(L){let W=f[L];return W===void 0&&(W=new Ks,f[L]=W),W.getGripSpace()},this.getHand=function(L){let W=f[L];return W===void 0&&(W=new Ks,f[L]=W),W.getHandSpace()};function X(L){const W=x.get(L.inputSource);W&&W.dispatchEvent({type:L.type,data:L.inputSource})}function ht(){x.forEach(function(L,W){L.disconnect(W)}),x.clear(),R=null,I=null,t.setRenderTarget(g),u=null,h=null,l=null,i=null,m=null,B.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return l},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",ht),i.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,W),i.updateRenderState({baseLayer:u}),m=new Te(u.framebufferWidth,u.framebufferHeight,{format:ze,type:kn,encoding:t.outputEncoding})}else{let W=null,J=null,K=null;p.depth&&(K=p.stencil?35056:33190,W=p.stencil?bi:On,J=p.stencil?yi:nr);const Q={colorFormat:t.outputEncoding===Jt?35907:32856,depthFormat:K,scaleFactor:s};l=new XRWebGLBinding(i,e),h=l.createProjectionLayer(Q),i.updateRenderState({layers:[h]}),m=new Te(h.textureWidth,h.textureHeight,{format:ze,type:kn,depthTexture:new Zl(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:p.stencil,encoding:t.outputEncoding,samples:p.antialias?4:0});const lt=t.properties.get(m);lt.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),B.setContext(i),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function H(L){const W=i.inputSources;for(let J=0;J<f.length;J++)x.set(W[J],f[J]);for(let J=0;J<L.removed.length;J++){const K=L.removed[J],Q=x.get(K);Q&&(Q.dispatchEvent({type:"disconnected",data:K}),x.delete(K))}for(let J=0;J<L.added.length;J++){const K=L.added[J],Q=x.get(K);Q&&Q.dispatchEvent({type:"connected",data:K})}}const _=new S,C=new S;function j(L,W,J){_.setFromMatrixPosition(W.matrixWorld),C.setFromMatrixPosition(J.matrixWorld);const K=_.distanceTo(C),Q=W.projectionMatrix.elements,lt=J.projectionMatrix.elements,Ft=Q[14]/(Q[10]-1),wt=Q[14]/(Q[10]+1),G=(Q[9]+1)/Q[5],Ot=(Q[9]-1)/Q[5],Tt=(Q[8]-1)/Q[0],At=(lt[8]+1)/lt[0],et=Ft*Tt,Dt=Ft*At,V=K/(-Tt+At),Y=V*-Tt;W.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Y),L.translateZ(V),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const tt=Ft+V,dt=wt+V,at=et-Y,St=Dt+(K-Y),_t=G*wt/dt*tt,mt=Ot*wt/dt*tt;L.projectionMatrix.makePerspective(at,St,_t,mt,tt,dt)}function P(L,W){W===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(W.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;v.near=T.near=w.near=L.near,v.far=T.far=w.far=L.far,(R!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,I=v.far);const W=L.parent,J=v.cameras;P(v,W);for(let Q=0;Q<J.length;Q++)P(J[Q],W);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),L.position.copy(v.position),L.quaternion.copy(v.quaternion),L.scale.copy(v.scale),L.matrix.copy(v.matrix),L.matrixWorld.copy(v.matrixWorld);const K=L.children;for(let Q=0,lt=K.length;Q<lt;Q++)K[Q].updateMatrixWorld(!0);J.length===2?j(v,w,T):v.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(L){h!==null&&(h.fixedFoveation=L),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=L)};let U=null;function N(L,W){if(c=W.getViewerPose(o),d=W,c!==null){const K=c.views;u!==null&&(t.setRenderTargetFramebuffer(m,u.framebuffer),t.setRenderTarget(m));let Q=!1;K.length!==v.cameras.length&&(v.cameras.length=0,Q=!0);for(let lt=0;lt<K.length;lt++){const Ft=K[lt];let wt=null;if(u!==null)wt=u.getViewport(Ft);else{const Ot=l.getViewSubImage(h,Ft);wt=Ot.viewport,lt===0&&(t.setRenderTargetTextures(m,Ot.colorTexture,h.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(m))}const G=E[lt];G.matrix.fromArray(Ft.transform.matrix),G.projectionMatrix.fromArray(Ft.projectionMatrix),G.viewport.set(wt.x,wt.y,wt.width,wt.height),lt===0&&v.matrix.copy(G.matrix),Q===!0&&v.cameras.push(G)}}const J=i.inputSources;for(let K=0;K<f.length;K++){const Q=f[K],lt=J[K];Q.update(lt,W,o)}U&&U(L,W),d=null}const B=new Ul;B.setAnimationLoop(N),this.setAnimationLoop=function(L){U=L},this.dispose=function(){}}}function Fm(r,t){function e(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,x,w,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),h(m,f)):f.isMeshPhongMaterial?(i(m,f),l(m,f)):f.isMeshStandardMaterial?(i(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,T)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?a(m,f,x,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Be&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Be&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const E=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*E}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let w;f.map?w=f.map:f.specularMap?w=f.specularMap:f.displacementMap?w=f.displacementMap:f.normalMap?w=f.normalMap:f.bumpMap?w=f.bumpMap:f.roughnessMap?w=f.roughnessMap:f.metalnessMap?w=f.metalnessMap:f.alphaMap?w=f.alphaMap:f.emissiveMap?w=f.emissiveMap:f.clearcoatMap?w=f.clearcoatMap:f.clearcoatNormalMap?w=f.clearcoatNormalMap:f.clearcoatRoughnessMap?w=f.clearcoatRoughnessMap:f.specularIntensityMap?w=f.specularIntensityMap:f.specularColorMap?w=f.specularColorMap:f.transmissionMap?w=f.transmissionMap:f.thicknessMap?w=f.thicknessMap:f.sheenColorMap?w=f.sheenColorMap:f.sheenRoughnessMap&&(w=f.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let T;f.aoMap?T=f.aoMap:f.lightMap&&(T=f.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uv2Transform.value.copy(T.matrix))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,x,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=w*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T;f.map?T=f.map:f.alphaMap&&(T=f.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix))}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Be&&m.clearcoatNormalScale.value.negate())),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Nm(){const r=sr("canvas");return r.style.display="block",r}function Gt(r={}){const t=r.canvas!==void 0?r.canvas:Nm(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;r.context!==void 0?h=e.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null;const p=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ln,this.physicallyCorrectLights=!1,this.toneMapping=an,this.toneMappingExposure=1;const m=this;let f=!1,x=0,w=0,T=null,E=-1,v=null;const R=new Wt,I=new Wt;let X=null,ht=t.width,H=t.height,_=1,C=null,j=null;const P=new Wt(0,0,ht,H),U=new Wt(0,0,ht,H);let N=!1;const B=new fs;let L=!1,W=!1,J=null;const K=new gt,Q=new $,lt=new S,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function wt(){return T===null?_:1}let G=e;function Ot(M,D){for(let z=0;z<M.length;z++){const F=M[z],q=t.getContext(F,D);if(q!==null)return q}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vo}`),t.addEventListener("webglcontextlost",A,!1),t.addEventListener("webglcontextrestored",st,!1),G===null){const D=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&D.shift(),G=Ot(D,M),G===null)throw Ot(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Tt,At,et,Dt,V,Y,tt,dt,at,St,_t,mt,Qt,qt,b,y,O,Z,ot,ct,xt,k,Ct;function Rt(){Tt=new Qf(G),At=new Yf(G,Tt,r),Tt.init(At),k=new Pm(G,Tt,At),et=new Lm(G,Tt,At),Dt=new np(G),V=new _m,Y=new Rm(G,Tt,et,V,At,k,Dt),tt=new Zf(m),dt=new Kf(m),at=new mu(G,At),Ct=new qf(G,Tt,at,At),St=new tp(G,at,Dt,Ct),_t=new op(G,St,at,Dt),ot=new sp(G,At,Y),y=new jf(V),mt=new xm(m,tt,dt,Tt,At,Ct,y),Qt=new Fm(m,V),qt=new vm,b=new Tm(Tt,At),Z=new Wf(m,tt,et,_t,h,o),O=new Yl(m,_t,At),ct=new Xf(G,Tt,Dt,At),xt=new ep(G,Tt,Dt,At),Dt.programs=mt.programs,m.capabilities=At,m.extensions=Tt,m.properties=V,m.renderLists=qt,m.shadowMap=O,m.state=et,m.info=Dt}Rt();const ft=new Im(m,G);this.xr=ft,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const M=Tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return _},this.setPixelRatio=function(M){M!==void 0&&(_=M,this.setSize(ht,H,!1))},this.getSize=function(M){return M.set(ht,H)},this.setSize=function(M,D,z){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ht=M,H=D,t.width=Math.floor(M*_),t.height=Math.floor(D*_),z!==!1&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(ht*_,H*_).floor()},this.setDrawingBufferSize=function(M,D,z){ht=M,H=D,_=z,t.width=Math.floor(M*z),t.height=Math.floor(D*z),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(P)},this.setViewport=function(M,D,z,F){M.isVector4?P.set(M.x,M.y,M.z,M.w):P.set(M,D,z,F),et.viewport(R.copy(P).multiplyScalar(_).floor())},this.getScissor=function(M){return M.copy(U)},this.setScissor=function(M,D,z,F){M.isVector4?U.set(M.x,M.y,M.z,M.w):U.set(M,D,z,F),et.scissor(I.copy(U).multiplyScalar(_).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(M){et.setScissorTest(N=M)},this.setOpaqueSort=function(M){C=M},this.setTransparentSort=function(M){j=M},this.getClearColor=function(M){return M.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(M=!0,D=!0,z=!0){let F=0;M&&(F|=16384),D&&(F|=256),z&&(F|=1024),G.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",A,!1),t.removeEventListener("webglcontextrestored",st,!1),qt.dispose(),b.dispose(),V.dispose(),tt.dispose(),dt.dispose(),_t.dispose(),Ct.dispose(),mt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",bt),ft.removeEventListener("sessionend",jt),J&&(J.dispose(),J=null),Nt.stop()};function A(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const M=Dt.autoReset,D=O.enabled,z=O.autoUpdate,F=O.needsUpdate,q=O.type;Rt(),Dt.autoReset=M,O.enabled=D,O.autoUpdate=z,O.needsUpdate=F,O.type=q}function it(M){const D=M.target;D.removeEventListener("dispose",it),yt(D)}function yt(M){ut(M),V.remove(M)}function ut(M){const D=V.get(M).programs;D!==void 0&&(D.forEach(function(z){mt.releaseProgram(z)}),M.isShaderMaterial&&mt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,z,F,q,Mt){D===null&&(D=Ft);const Et=q.isMesh&&q.matrixWorld.determinant()<0,Pt=Lc(M,D,z,F,q);et.setMaterial(F,Et);let Lt=z.index;const kt=z.attributes.position;if(Lt===null){if(kt===void 0||kt.count===0)return}else if(Lt.count===0)return;let zt=1;F.wireframe===!0&&(Lt=St.getWireframeAttribute(z),zt=2),Ct.setup(q,F,Pt,z,Lt);let Bt,ee=ct;Lt!==null&&(Bt=at.get(Lt),ee=xt,ee.setIndex(Bt));const Rn=Lt!==null?Lt.count:kt.count,Wn=z.drawRange.start*zt,qn=z.drawRange.count*zt,Ge=Mt!==null?Mt.start*zt:0,Ut=Mt!==null?Mt.count*zt:1/0,Xn=Math.max(Wn,Ge),ne=Math.min(Rn,Wn+qn,Ge+Ut)-1,We=Math.max(0,ne-Xn+1);if(We!==0){if(q.isMesh)F.wireframe===!0?(et.setLineWidth(F.wireframeLinewidth*wt()),ee.setMode(1)):ee.setMode(4);else if(q.isLine){let cn=F.linewidth;cn===void 0&&(cn=1),et.setLineWidth(cn*wt()),q.isLineSegments?ee.setMode(1):q.isLineLoop?ee.setMode(2):ee.setMode(3)}else q.isPoints?ee.setMode(0):q.isSprite&&ee.setMode(4);if(q.isInstancedMesh)ee.renderInstances(Xn,We,q.count);else if(z.isInstancedBufferGeometry){const cn=Math.min(z.instanceCount,z._maxInstanceCount);ee.renderInstances(Xn,We,cn)}else ee.render(Xn,We)}},this.compile=function(M,D){d=b.get(M),d.init(),g.push(d),M.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights(m.physicallyCorrectLights),M.traverse(function(z){const F=z.material;if(F)if(Array.isArray(F))for(let q=0;q<F.length;q++){const Mt=F[q];_s(Mt,M,z)}else _s(F,M,z)}),g.pop(),d=null};let vt=null;function nt(M){vt&&vt(M)}function bt(){Nt.stop()}function jt(){Nt.start()}const Nt=new Ul;Nt.setAnimationLoop(nt),typeof self!="undefined"&&Nt.setContext(self),this.setAnimationLoop=function(M){vt=M,ft.setAnimationLoop(M),M===null?Nt.stop():Nt.start()},ft.addEventListener("sessionstart",bt),ft.addEventListener("sessionend",jt),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(D),D=ft.getCamera()),M.isScene===!0&&M.onBeforeRender(m,M,D,T),d=b.get(M,g.length),d.init(),g.push(d),K.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),B.setFromProjectionMatrix(K),W=this.localClippingEnabled,L=y.init(this.clippingPlanes,W,D),u=qt.get(M,p.length),u.init(),p.push(u),He(M,D,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(C,j),L===!0&&y.beginShadows();const z=d.state.shadowsArray;if(O.render(z,M,D),L===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(u,M),d.setupLights(m.physicallyCorrectLights),D.isArrayCamera){const F=D.cameras;for(let q=0,Mt=F.length;q<Mt;q++){const Et=F[q];Ve(u,M,Et,Et.viewport)}}else Ve(u,M,D);T!==null&&(Y.updateMultisampleRenderTarget(T),Y.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(m,M,D),Ct.resetDefaultState(),E=-1,v=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function He(M,D,z,F){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||B.intersectsSprite(M)){F&&lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);const Et=_t.update(M),Pt=M.material;Pt.visible&&u.push(M,Et,Pt,z,lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Dt.render.frame&&(M.skeleton.update(),M.skeleton.frame=Dt.render.frame),!M.frustumCulled||B.intersectsObject(M))){F&&lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);const Et=_t.update(M),Pt=M.material;if(Array.isArray(Pt)){const Lt=Et.groups;for(let kt=0,zt=Lt.length;kt<zt;kt++){const Bt=Lt[kt],ee=Pt[Bt.materialIndex];ee&&ee.visible&&u.push(M,Et,ee,z,lt.z,Bt)}}else Pt.visible&&u.push(M,Et,Pt,z,lt.z,null)}}const Mt=M.children;for(let Et=0,Pt=Mt.length;Et<Pt;Et++)He(Mt[Et],D,z,F)}function Ve(M,D,z,F){const q=M.opaque,Mt=M.transmissive,Et=M.transparent;d.setupLightsView(z),Mt.length>0&&Ac(q,D,z),F&&et.viewport(R.copy(F)),q.length>0&&pr(q,D,z),Mt.length>0&&pr(Mt,D,z),Et.length>0&&pr(Et,D,z),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Ac(M,D,z){const F=At.isWebGL2;J===null&&(J=new Te(1,1,{generateMipmaps:!0,type:k.convert(_i)!==null?_i:kn,minFilter:hs,samples:F&&s===!0?4:0})),m.getDrawingBufferSize(Q),F?J.setSize(Q.x,Q.y):J.setSize(rs(Q.x),rs(Q.y));const q=m.getRenderTarget();m.setRenderTarget(J),m.clear();const Mt=m.toneMapping;m.toneMapping=an,pr(M,D,z),m.toneMapping=Mt,Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J),m.setRenderTarget(q)}function pr(M,D,z){const F=D.isScene===!0?D.overrideMaterial:null;for(let q=0,Mt=M.length;q<Mt;q++){const Et=M[q],Pt=Et.object,Lt=Et.geometry,kt=F===null?Et.material:F,zt=Et.group;Pt.layers.test(z.layers)&&Cc(Pt,D,z,Lt,kt,zt)}}function Cc(M,D,z,F,q,Mt){M.onBeforeRender(m,D,z,F,q,Mt),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(m,D,z,F,M,Mt),q.transparent===!0&&q.side===vi?(q.side=Be,q.needsUpdate=!0,m.renderBufferDirect(z,D,F,q,M,Mt),q.side=er,q.needsUpdate=!0,m.renderBufferDirect(z,D,F,q,M,Mt),q.side=vi):m.renderBufferDirect(z,D,F,q,M,Mt),M.onAfterRender(m,D,z,F,q,Mt)}function _s(M,D,z){D.isScene!==!0&&(D=Ft);const F=V.get(M),q=d.state.lights,Mt=d.state.shadowsArray,Et=q.state.version,Pt=mt.getParameters(M,q.state,Mt,D,z),Lt=mt.getProgramCacheKey(Pt);let kt=F.programs;F.environment=M.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(M.isMeshStandardMaterial?dt:tt).get(M.envMap||F.environment),kt===void 0&&(M.addEventListener("dispose",it),kt=new Map,F.programs=kt);let zt=kt.get(Lt);if(zt!==void 0){if(F.currentProgram===zt&&F.lightsStateVersion===Et)return qo(M,Pt),zt}else Pt.uniforms=mt.getUniforms(M),M.onBuild(z,Pt,m),M.onBeforeCompile(Pt,m),zt=mt.acquireProgram(Pt,Lt),kt.set(Lt,zt),F.uniforms=Pt.uniforms;const Bt=F.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Bt.clippingPlanes=y.uniform),qo(M,Pt),F.needsLights=Pc(M),F.lightsStateVersion=Et,F.needsLights&&(Bt.ambientLightColor.value=q.state.ambient,Bt.lightProbe.value=q.state.probe,Bt.directionalLights.value=q.state.directional,Bt.directionalLightShadows.value=q.state.directionalShadow,Bt.spotLights.value=q.state.spot,Bt.spotLightShadows.value=q.state.spotShadow,Bt.rectAreaLights.value=q.state.rectArea,Bt.ltc_1.value=q.state.rectAreaLTC1,Bt.ltc_2.value=q.state.rectAreaLTC2,Bt.pointLights.value=q.state.point,Bt.pointLightShadows.value=q.state.pointShadow,Bt.hemisphereLights.value=q.state.hemi,Bt.directionalShadowMap.value=q.state.directionalShadowMap,Bt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Bt.spotShadowMap.value=q.state.spotShadowMap,Bt.spotShadowMatrix.value=q.state.spotShadowMatrix,Bt.pointShadowMap.value=q.state.pointShadowMap,Bt.pointShadowMatrix.value=q.state.pointShadowMatrix);const ee=zt.getUniforms(),Rn=yn.seqWithValue(ee.seq,Bt);return F.currentProgram=zt,F.uniformsList=Rn,zt}function qo(M,D){const z=V.get(M);z.outputEncoding=D.outputEncoding,z.instancing=D.instancing,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Lc(M,D,z,F,q){D.isScene!==!0&&(D=Ft),Y.resetTextureUnits();const Mt=D.fog,Et=F.isMeshStandardMaterial?D.environment:null,Pt=T===null?m.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:ln,Lt=(F.isMeshStandardMaterial?dt:tt).get(F.envMap||Et),kt=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,zt=!!F.normalMap&&!!z.attributes.tangent,Bt=!!z.morphAttributes.position,ee=!!z.morphAttributes.normal,Rn=!!z.morphAttributes.color,Wn=F.toneMapped?m.toneMapping:an,qn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ge=qn!==void 0?qn.length:0,Ut=V.get(F),Xn=d.state.lights;if(L===!0&&(W===!0||M!==v)){const Re=M===v&&F.id===E;y.setState(F,M,Re)}let ne=!1;F.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Xn.state.version||Ut.outputEncoding!==Pt||q.isInstancedMesh&&Ut.instancing===!1||!q.isInstancedMesh&&Ut.instancing===!0||q.isSkinnedMesh&&Ut.skinning===!1||!q.isSkinnedMesh&&Ut.skinning===!0||Ut.envMap!==Lt||F.fog&&Ut.fog!==Mt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==y.numPlanes||Ut.numIntersection!==y.numIntersection)||Ut.vertexAlphas!==kt||Ut.vertexTangents!==zt||Ut.morphTargets!==Bt||Ut.morphNormals!==ee||Ut.morphColors!==Rn||Ut.toneMapping!==Wn||At.isWebGL2===!0&&Ut.morphTargetsCount!==Ge)&&(ne=!0):(ne=!0,Ut.__version=F.version);let We=Ut.currentProgram;ne===!0&&(We=_s(F,D,q));let cn=!1,zi=!1,ys=!1;const me=We.getUniforms(),Bi=Ut.uniforms;if(et.useProgram(We.program)&&(cn=!0,zi=!0,ys=!0),F.id!==E&&(E=F.id,zi=!0),cn||v!==M){if(me.setValue(G,"projectionMatrix",M.projectionMatrix),At.logarithmicDepthBuffer&&me.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),v!==M&&(v=M,zi=!0,ys=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Re=me.map.cameraPosition;Re!==void 0&&Re.setValue(G,lt.setFromMatrixPosition(M.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&me.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||q.isSkinnedMesh)&&me.setValue(G,"viewMatrix",M.matrixWorldInverse)}if(q.isSkinnedMesh){me.setOptional(G,q,"bindMatrix"),me.setOptional(G,q,"bindMatrixInverse");const Re=q.skeleton;Re&&(At.floatVertexTextures?(Re.boneTexture===null&&Re.computeBoneTexture(),me.setValue(G,"boneTexture",Re.boneTexture,Y),me.setValue(G,"boneTextureSize",Re.boneTextureSize)):me.setOptional(G,Re,"boneMatrices"))}const vs=z.morphAttributes;return(vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0&&At.isWebGL2===!0)&&ot.update(q,z,F,We),(zi||Ut.receiveShadow!==q.receiveShadow)&&(Ut.receiveShadow=q.receiveShadow,me.setValue(G,"receiveShadow",q.receiveShadow)),zi&&(me.setValue(G,"toneMappingExposure",m.toneMappingExposure),Ut.needsLights&&Rc(Bi,ys),Mt&&F.fog&&Qt.refreshFogUniforms(Bi,Mt),Qt.refreshMaterialUniforms(Bi,F,_,H,J),yn.upload(G,Ut.uniformsList,Bi,Y)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(yn.upload(G,Ut.uniformsList,Bi,Y),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&me.setValue(G,"center",q.center),me.setValue(G,"modelViewMatrix",q.modelViewMatrix),me.setValue(G,"normalMatrix",q.normalMatrix),me.setValue(G,"modelMatrix",q.matrixWorld),We}function Rc(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Pc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,D,z){V.get(M.texture).__webglTexture=D,V.get(M.depthTexture).__webglTexture=z;const F=V.get(M);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=z===void 0,F.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,D){const z=V.get(M);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,z=0){T=M,x=D,w=z;let F=!0;if(M){const Lt=V.get(M);Lt.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(36160,null),F=!1):Lt.__webglFramebuffer===void 0?Y.setupRenderTarget(M):Lt.__hasExternalTextures&&Y.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture)}let q=null,Mt=!1,Et=!1;if(M){const Lt=M.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture)&&(Et=!0);const kt=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(q=kt[D],Mt=!0):At.isWebGL2&&M.samples>0&&Y.useMultisampledRTT(M)===!1?q=V.get(M).__webglMultisampledFramebuffer:q=kt,R.copy(M.viewport),I.copy(M.scissor),X=M.scissorTest}else R.copy(P).multiplyScalar(_).floor(),I.copy(U).multiplyScalar(_).floor(),X=N;if(et.bindFramebuffer(36160,q)&&At.drawBuffers&&F&&et.drawBuffers(M,q),et.viewport(R),et.scissor(I),et.setScissorTest(X),Mt){const Lt=V.get(M.texture);G.framebufferTexture2D(36160,36064,34069+D,Lt.__webglTexture,z)}else if(Et){const Lt=V.get(M.texture),kt=D||0;G.framebufferTextureLayer(36160,36064,Lt.__webglTexture,z||0,kt)}E=-1},this.readRenderTargetPixels=function(M,D,z,F,q,Mt,Et){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){et.bindFramebuffer(36160,Pt);try{const Lt=M.texture,kt=Lt.format,zt=Lt.type;if(kt!==ze&&k.convert(kt)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=zt===_i&&(Tt.has("EXT_color_buffer_half_float")||At.isWebGL2&&Tt.has("EXT_color_buffer_float"));if(zt!==kn&&k.convert(zt)!==G.getParameter(35738)&&!(zt===zn&&(At.isWebGL2||Tt.has("OES_texture_float")||Tt.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-F&&z>=0&&z<=M.height-q&&G.readPixels(D,z,F,q,k.convert(kt),k.convert(zt),Mt)}finally{const Lt=T!==null?V.get(T).__webglFramebuffer:null;et.bindFramebuffer(36160,Lt)}}},this.copyFramebufferToTexture=function(M,D,z=0){if(D.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const F=Math.pow(2,-z),q=Math.floor(D.image.width*F),Mt=Math.floor(D.image.height*F);Y.setTexture2D(D,0),G.copyTexSubImage2D(3553,z,0,0,M.x,M.y,q,Mt),et.unbindTexture()},this.copyTextureToTexture=function(M,D,z,F=0){const q=D.image.width,Mt=D.image.height,Et=k.convert(z.format),Pt=k.convert(z.type);Y.setTexture2D(z,0),G.pixelStorei(37440,z.flipY),G.pixelStorei(37441,z.premultiplyAlpha),G.pixelStorei(3317,z.unpackAlignment),D.isDataTexture?G.texSubImage2D(3553,F,M.x,M.y,q,Mt,Et,Pt,D.image.data):D.isCompressedTexture?G.compressedTexSubImage2D(3553,F,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,Et,D.mipmaps[0].data):G.texSubImage2D(3553,F,M.x,M.y,Et,Pt,D.image),F===0&&z.generateMipmaps&&G.generateMipmap(3553),et.unbindTexture()},this.copyTextureToTexture3D=function(M,D,z,F,q=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Mt=M.max.x-M.min.x+1,Et=M.max.y-M.min.y+1,Pt=M.max.z-M.min.z+1,Lt=k.convert(F.format),kt=k.convert(F.type);let zt;if(F.isData3DTexture)Y.setTexture3D(F,0),zt=32879;else if(F.isDataArrayTexture)Y.setTexture2DArray(F,0),zt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,F.flipY),G.pixelStorei(37441,F.premultiplyAlpha),G.pixelStorei(3317,F.unpackAlignment);const Bt=G.getParameter(3314),ee=G.getParameter(32878),Rn=G.getParameter(3316),Wn=G.getParameter(3315),qn=G.getParameter(32877),Ge=z.isCompressedTexture?z.mipmaps[0]:z.image;G.pixelStorei(3314,Ge.width),G.pixelStorei(32878,Ge.height),G.pixelStorei(3316,M.min.x),G.pixelStorei(3315,M.min.y),G.pixelStorei(32877,M.min.z),z.isDataTexture||z.isData3DTexture?G.texSubImage3D(zt,q,D.x,D.y,D.z,Mt,Et,Pt,Lt,kt,Ge.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(zt,q,D.x,D.y,D.z,Mt,Et,Pt,Lt,Ge.data)):G.texSubImage3D(zt,q,D.x,D.y,D.z,Mt,Et,Pt,Lt,kt,Ge),G.pixelStorei(3314,Bt),G.pixelStorei(32878,ee),G.pixelStorei(3316,Rn),G.pixelStorei(3315,Wn),G.pixelStorei(32877,qn),q===0&&F.generateMipmaps&&G.generateMipmap(zt),et.unbindTexture()},this.initTexture=function(M){Y.setTexture2D(M,0),et.unbindTexture()},this.resetState=function(){x=0,w=0,T=null,et.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Gt.prototype.isWebGLRenderer=!0;class zm extends Gt{}zm.prototype.isWebGL1Renderer=!0;class Po extends Vt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}Po.prototype.isScene=!0;class hr{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ir,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Oe()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oe()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oe()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}hr.prototype.isInterleavedBuffer=!0;const _e=new S;class or{constructor(t,e,n,i=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new or(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}or.prototype.isInterleavedBufferAttribute=!0;class Do extends le{constructor(t){super(),this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}Do.prototype.isSpriteMaterial=!0;let ai;const Hi=new S,li=new S,ci=new S,hi=new $,Vi=new $,Jl=new gt,Nr=new S,Gi=new S,zr=new S,nl=new $,Qs=new $,il=new $;class Bm extends Vt{constructor(t){if(super(),this.type="Sprite",ai===void 0){ai=new Yt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hr(e,5);ai.setIndex([0,1,2,0,2,3]),ai.setAttribute("position",new or(n,3,0,!1)),ai.setAttribute("uv",new or(n,2,3,!1))}this.geometry=ai,this.material=t!==void 0?t:new Do,this.center=new $(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),li.setFromMatrixScale(this.matrixWorld),Jl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ci.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&li.multiplyScalar(-ci.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Br(Nr.set(-.5,-.5,0),ci,o,li,i,s),Br(Gi.set(.5,-.5,0),ci,o,li,i,s),Br(zr.set(.5,.5,0),ci,o,li,i,s),nl.set(0,0),Qs.set(1,0),il.set(1,1);let a=t.ray.intersectTriangle(Nr,Gi,zr,!1,Hi);if(a===null&&(Br(Gi.set(-.5,.5,0),ci,o,li,i,s),Qs.set(0,1),a=t.ray.intersectTriangle(Nr,zr,Gi,!1,Hi),a===null))return;const c=t.ray.origin.distanceTo(Hi);c<t.near||c>t.far||e.push({distance:c,point:Hi.clone(),uv:re.getUV(Hi,Nr,Gi,zr,nl,Qs,il,new $),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}Bm.prototype.isSprite=!0;function Br(r,t,e,n,i,s){hi.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Vi.x=s*hi.x-i*hi.y,Vi.y=i*hi.x+s*hi.y):Vi.copy(hi),r.copy(t),r.x+=Vi.x,r.y+=Vi.y,r.applyMatrix4(Jl)}const rl=new S,sl=new Wt,ol=new Wt,Om=new S,al=new gt;class $l extends Xt{constructor(t,e){super(t,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new gt,this.bindMatrixInverse=new gt}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Wt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;sl.fromBufferAttribute(i.attributes.skinIndex,t),ol.fromBufferAttribute(i.attributes.skinWeight,t),rl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=ol.getComponent(s);if(o!==0){const a=sl.getComponent(s);al.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Om.copy(rl).applyMatrix4(al),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}$l.prototype.isSkinnedMesh=!0;class Um extends Vt{constructor(){super(),this.type="Bone"}}Um.prototype.isBone=!0;class km extends ue{constructor(t=null,e=1,n=1,i,s,o,a,c,l=he,h=he,u,d){super(null,o,a,c,l,h,i,s,u,d),this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}km.prototype.isDataTexture=!0;class mo extends ae{constructor(t,e,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(t,e,n),this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}mo.prototype.isInstancedBufferAttribute=!0;const ll=new gt,cl=new gt,Or=[],Wi=new Xt;class Hm extends Xt{constructor(t,e,n){super(t,e),this.instanceMatrix=new mo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Wi.geometry=this.geometry,Wi.material=this.material,Wi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,ll),cl.multiplyMatrices(n,ll),Wi.matrixWorld=cl,Wi.raycast(t,Or);for(let o=0,a=Or.length;o<a;o++){const c=Or[o];c.instanceId=s,c.object=this,e.push(c)}Or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new mo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Hm.prototype.isInstancedMesh=!0;class Di extends le{constructor(t){super(),this.type="LineBasicMaterial",this.color=new pt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}Di.prototype.isLineBasicMaterial=!0;const hl=new S,ul=new S,dl=new gt,to=new Ci,Ur=new Ai;class Io extends Vt{constructor(t=new Yt,e=new Di){super(),this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)hl.fromBufferAttribute(e,i-1),ul.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=hl.distanceTo(ul);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=s,t.ray.intersectsSphere(Ur)===!1)return;dl.copy(i).invert(),to.copy(t.ray).applyMatrix4(dl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new S,h=new S,u=new S,d=new S,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,f=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let T=x,E=w-1;T<E;T+=p){const v=g.getX(T),R=g.getX(T+1);if(l.fromBufferAttribute(f,v),h.fromBufferAttribute(f,R),to.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const X=t.ray.origin.distanceTo(d);X<t.near||X>t.far||e.push({distance:X,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),w=Math.min(f.count,o.start+o.count);for(let T=x,E=w-1;T<E;T+=p){if(l.fromBufferAttribute(f,T),h.fromBufferAttribute(f,T+1),to.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(d);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Io.prototype.isLine=!0;const fl=new S,pl=new S;class Fo extends Io{constructor(t,e){super(t,e),this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)fl.fromBufferAttribute(e,i),pl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fl.distanceTo(pl);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Fo.prototype.isLineSegments=!0;class Vm extends Io{constructor(t,e){super(t,e),this.type="LineLoop"}}Vm.prototype.isLineLoop=!0;class No extends le{constructor(t){super(),this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}No.prototype.isPointsMaterial=!0;const ml=new gt,go=new Ci,kr=new Ai,Hr=new S;class Gm extends Vt{constructor(t=new Yt,e=new No){super(),this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=s,t.ray.intersectsSphere(kr)===!1)return;ml.copy(i).invert(),go.copy(t.ray).applyMatrix4(ml);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a;if(n.isBufferGeometry){const l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,m=p;g<m;g++){const f=l.getX(g);Hr.fromBufferAttribute(u,f),gl(Hr,f,c,i,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,m=p;g<m;g++)Hr.fromBufferAttribute(u,g),gl(Hr,g,c,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Gm.prototype.isPoints=!0;function gl(r,t,e,n,i,s,o){const a=go.distanceSqToPoint(r);if(a<e){const c=new S;go.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Wm extends ue{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.minFilter=o!==void 0?o:Me,this.magFilter=s!==void 0?s:Me,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Wm.prototype.isVideoTexture=!0;class qm extends ue{constructor(t,e,n){super({width:t,height:e}),this.format=n,this.magFilter=he,this.minFilter=he,this.generateMipmaps=!1,this.needsUpdate=!0}}qm.prototype.isFramebufferTexture=!0;class Xm extends ue{constructor(t,e,n,i,s,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,s,u,d),this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}Xm.prototype.isCompressedTexture=!0;class Ym extends ue{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.needsUpdate=!0}}Ym.prototype.isCanvasTexture=!0;class Ce{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new $:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new S,i=[],s=[],o=[],a=new S,c=new gt;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new S)}s[0]=new S,o[0]=new S;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(fe(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(fe(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ms extends Ce{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new $,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}ms.prototype.isEllipseCurve=!0;class Kl extends ms{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.type="ArcCurve"}}Kl.prototype.isArcCurve=!0;function zo(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Vr=new S,eo=new zo,no=new zo,io=new zo;class Ql extends Ce{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new S){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Vr.subVectors(i[0],i[1]).add(i[0]),l=Vr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Vr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Vr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);m<1e-4&&(m=1),g<1e-4&&(g=m),f<1e-4&&(f=m),eo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,m,f),no.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,m,f),io.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,m,f)}else this.curveType==="catmullrom"&&(eo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),no.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),io.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(eo.calc(c),no.calc(c),io.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new S().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}Ql.prototype.isCatmullRomCurve3=!0;function xl(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function jm(r,t){const e=1-r;return e*e*t}function Zm(r,t){return 2*(1-r)*r*t}function Jm(r,t){return r*r*t}function Qi(r,t,e,n){return jm(r,t)+Zm(r,e)+Jm(r,n)}function $m(r,t){const e=1-r;return e*e*e*t}function Km(r,t){const e=1-r;return 3*e*e*r*t}function Qm(r,t){return 3*(1-r)*r*r*t}function tg(r,t){return r*r*r*t}function tr(r,t,e,n,i){return $m(r,t)+Km(r,e)+Qm(r,n)+tg(r,i)}class Bo extends Ce{constructor(t=new $,e=new $,n=new $,i=new $){super(),this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,i.x,s.x,o.x,a.x),tr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Bo.prototype.isCubicBezierCurve=!0;class tc extends Ce{constructor(t=new S,e=new S,n=new S,i=new S){super(),this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new S){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(tr(t,i.x,s.x,o.x,a.x),tr(t,i.y,s.y,o.y,a.y),tr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}tc.prototype.isCubicBezierCurve3=!0;class gs extends Ce{constructor(t=new $,e=new $){super(),this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new $;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}gs.prototype.isLineCurve=!0;class eg extends Ce{constructor(t=new S,e=new S){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new S){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oo extends Ce{constructor(t=new $,e=new $,n=new $){super(),this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Qi(t,i.x,s.x,o.x),Qi(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Oo.prototype.isQuadraticBezierCurve=!0;class ec extends Ce{constructor(t=new S,e=new S,n=new S){super(),this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new S){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Qi(t,i.x,s.x,o.x),Qi(t,i.y,s.y,o.y),Qi(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}ec.prototype.isQuadraticBezierCurve3=!0;class Uo extends Ce{constructor(t=[]){super(),this.type="SplineCurve",this.points=t}getPoint(t,e=new $){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(xl(a,c.x,l.x,h.x,u.x),xl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new $().fromArray(i))}return this}}Uo.prototype.isSplineCurve=!0;var nc=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:Ql,CubicBezierCurve:Bo,CubicBezierCurve3:tc,EllipseCurve:ms,LineCurve:gs,LineCurve3:eg,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:ec,SplineCurve:Uo});class ng extends Ce{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new gs(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new nc[i.type]().fromJSON(i))}return this}}class xo extends ng{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new gs(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Oo(this.currentPoint.clone(),new $(t,e),new $(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Bo(this.currentPoint.clone(),new $(t,e),new $(n,i),new $(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){const l=new ms(t,e,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}new S;new S;new S;new re;class ur extends xo{constructor(t){super(t),this.uuid=Oe(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new xo().fromJSON(i))}return this}}const ig={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=ic(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,p;if(n&&(s=lg(r,t,s,e)),r.length>80*e){a=l=r[0],c=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?1/p:0}return ar(s,o,e,a,c,p),o}};function ic(r,t,e,n,i){let s,o;if(i===yg(r,t,e,n)>0)for(s=t;s<e;s+=n)o=_l(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=_l(s,r[s],r[s+1],o);return o&&xs(o,o.next)&&(cr(o),o=o.next),o}function Mn(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(xs(e,e.next)||te(e.prev,e,e.next)===0)){if(cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ar(r,t,e,n,i,s,o){if(!r)return;!o&&s&&fg(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?sg(r,n,i,s):rg(r)){t.push(c.i/e),t.push(r.i/e),t.push(l.i/e),cr(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=og(Mn(r),t,e),ar(r,t,e,n,i,s,2)):o===2&&ag(r,t,e,n,i,s):ar(Mn(r),t,e,n,i,s,1);break}}}function rg(r){const t=r.prev,e=r,n=r.next;if(te(t,e,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(gi(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&te(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function sg(r,t,e,n){const i=r.prev,s=r,o=r.next;if(te(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,c=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,l=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,h=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,u=_o(a,c,t,e,n),d=_o(l,h,t,e,n);let p=r.prevZ,g=r.nextZ;for(;p&&p.z>=u&&g&&g.z<=d;){if(p!==r.prev&&p!==r.next&&gi(i.x,i.y,s.x,s.y,o.x,o.y,p.x,p.y)&&te(p.prev,p,p.next)>=0||(p=p.prevZ,g!==r.prev&&g!==r.next&&gi(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&te(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=u;){if(p!==r.prev&&p!==r.next&&gi(i.x,i.y,s.x,s.y,o.x,o.y,p.x,p.y)&&te(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&gi(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&te(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function og(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!xs(i,s)&&rc(i,n,n.next,s)&&lr(i,s)&&lr(s,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(s.i/e),cr(n),cr(n.next),n=r=s),n=n.next}while(n!==r);return Mn(n)}function ag(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gg(o,a)){let c=sc(o,a);o=Mn(o,o.next),c=Mn(c,c.next),ar(o,t,e,n,i,s),ar(c,t,e,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function lg(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=ic(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(mg(l));for(i.sort(cg),s=0;s<i.length;s++)hg(i[s],e),e=Mn(e,e.next);return e}function cg(r,t){return r.x-t.x}function hg(r,t){if(t=ug(r,t),t){const e=sc(t,r);Mn(t,t.next),Mn(e,e.next)}}function ug(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s){if(s=d,d===n){if(i===e.y)return e;if(i===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===s)return o;const a=o,c=o.x,l=o.y;let h=1/0,u;e=o;do n>=e.x&&e.x>=c&&n!==e.x&&gi(i<l?n:s,i,c,l,i<l?s:n,i,e.x,e.y)&&(u=Math.abs(i-e.y)/(n-e.x),lr(e,r)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&dg(o,e)))&&(o=e,h=u)),e=e.next;while(e!==a);return o}function dg(r,t){return te(r.prev,r,t.prev)<0&&te(t.next,r,r.next)<0}function fg(r,t,e,n){let i=r;do i.z===null&&(i.z=_o(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,pg(i)}function pg(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function _o(r,t,e,n,i){return r=32767*(r-e)*i,t=32767*(t-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function mg(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function gi(r,t,e,n,i,s,o,a){return(i-o)*(t-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(s-a)-(i-o)*(n-a)>=0}function gg(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!xg(r,t)&&(lr(r,t)&&lr(t,r)&&_g(r,t)&&(te(r.prev,r,t.prev)||te(r,t.prev,t))||xs(r,t)&&te(r.prev,r,r.next)>0&&te(t.prev,t,t.next)>0)}function te(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function xs(r,t){return r.x===t.x&&r.y===t.y}function rc(r,t,e,n){const i=Wr(te(r,t,e)),s=Wr(te(r,t,n)),o=Wr(te(e,n,r)),a=Wr(te(e,n,t));return!!(i!==s&&o!==a||i===0&&Gr(r,e,t)||s===0&&Gr(r,n,t)||o===0&&Gr(e,r,n)||a===0&&Gr(e,t,n))}function Gr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Wr(r){return r>0?1:r<0?-1:0}function xg(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&rc(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function lr(r,t){return te(r.prev,r,r.next)<0?te(r,t,r.next)>=0&&te(r,r.prev,t)>=0:te(r,t,r.prev)<0||te(r,r.next,t)<0}function _g(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function sc(r,t){const e=new yo(r.i,r.x,r.y),n=new yo(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function _l(r,t,e,n){const i=new yo(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function cr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function yo(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yg(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class vn{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return vn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];yl(t),vl(n,t);let o=t.length;e.forEach(yl);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,vl(n,e[c]);const a=ig.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function yl(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function vl(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ii extends Yt{constructor(t=new ur([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Kt(i,3)),this.setAttribute("uv",new Kt(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1;let u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const x=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:vg;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=e.amount);let T,E=!1,v,R,I,X;x&&(T=x.getSpacedPoints(h),E=!0,d=!1,v=x.computeFrenetFrames(h,!1),R=new S,I=new S,X=new S),d||(f=0,p=0,g=0,m=0);const ht=a.extractPoints(l);let H=ht.shape;const _=ht.holes;if(!vn.isClockWise(H)){H=H.reverse();for(let V=0,Y=_.length;V<Y;V++){const tt=_[V];vn.isClockWise(tt)&&(_[V]=tt.reverse())}}const j=vn.triangulateShape(H,_),P=H;for(let V=0,Y=_.length;V<Y;V++){const tt=_[V];H=H.concat(tt)}function U(V,Y,tt){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().multiplyScalar(tt).add(V)}const N=H.length,B=j.length;function L(V,Y,tt){let dt,at,St;const _t=V.x-Y.x,mt=V.y-Y.y,Qt=tt.x-V.x,qt=tt.y-V.y,b=_t*_t+mt*mt,y=_t*qt-mt*Qt;if(Math.abs(y)>Number.EPSILON){const O=Math.sqrt(b),Z=Math.sqrt(Qt*Qt+qt*qt),ot=Y.x-mt/O,ct=Y.y+_t/O,xt=tt.x-qt/Z,k=tt.y+Qt/Z,Ct=((xt-ot)*qt-(k-ct)*Qt)/(_t*qt-mt*Qt);dt=ot+_t*Ct-V.x,at=ct+mt*Ct-V.y;const Rt=dt*dt+at*at;if(Rt<=2)return new $(dt,at);St=Math.sqrt(Rt/2)}else{let O=!1;_t>Number.EPSILON?Qt>Number.EPSILON&&(O=!0):_t<-Number.EPSILON?Qt<-Number.EPSILON&&(O=!0):Math.sign(mt)===Math.sign(qt)&&(O=!0),O?(dt=-mt,at=_t,St=Math.sqrt(b)):(dt=_t,at=mt,St=Math.sqrt(b/2))}return new $(dt/St,at/St)}const W=[];for(let V=0,Y=P.length,tt=Y-1,dt=V+1;V<Y;V++,tt++,dt++)tt===Y&&(tt=0),dt===Y&&(dt=0),W[V]=L(P[V],P[tt],P[dt]);const J=[];let K,Q=W.concat();for(let V=0,Y=_.length;V<Y;V++){const tt=_[V];K=[];for(let dt=0,at=tt.length,St=at-1,_t=dt+1;dt<at;dt++,St++,_t++)St===at&&(St=0),_t===at&&(_t=0),K[dt]=L(tt[dt],tt[St],tt[_t]);J.push(K),Q=Q.concat(K)}for(let V=0;V<f;V++){const Y=V/f,tt=p*Math.cos(Y*Math.PI/2),dt=g*Math.sin(Y*Math.PI/2)+m;for(let at=0,St=P.length;at<St;at++){const _t=U(P[at],W[at],dt);Ot(_t.x,_t.y,-tt)}for(let at=0,St=_.length;at<St;at++){const _t=_[at];K=J[at];for(let mt=0,Qt=_t.length;mt<Qt;mt++){const qt=U(_t[mt],K[mt],dt);Ot(qt.x,qt.y,-tt)}}}const lt=g+m;for(let V=0;V<N;V++){const Y=d?U(H[V],Q[V],lt):H[V];E?(I.copy(v.normals[0]).multiplyScalar(Y.x),R.copy(v.binormals[0]).multiplyScalar(Y.y),X.copy(T[0]).add(I).add(R),Ot(X.x,X.y,X.z)):Ot(Y.x,Y.y,0)}for(let V=1;V<=h;V++)for(let Y=0;Y<N;Y++){const tt=d?U(H[Y],Q[Y],lt):H[Y];E?(I.copy(v.normals[V]).multiplyScalar(tt.x),R.copy(v.binormals[V]).multiplyScalar(tt.y),X.copy(T[V]).add(I).add(R),Ot(X.x,X.y,X.z)):Ot(tt.x,tt.y,u/h*V)}for(let V=f-1;V>=0;V--){const Y=V/f,tt=p*Math.cos(Y*Math.PI/2),dt=g*Math.sin(Y*Math.PI/2)+m;for(let at=0,St=P.length;at<St;at++){const _t=U(P[at],W[at],dt);Ot(_t.x,_t.y,u+tt)}for(let at=0,St=_.length;at<St;at++){const _t=_[at];K=J[at];for(let mt=0,Qt=_t.length;mt<Qt;mt++){const qt=U(_t[mt],K[mt],dt);E?Ot(qt.x,qt.y+T[h-1].y,T[h-1].x+tt):Ot(qt.x,qt.y,u+tt)}}}Ft(),wt();function Ft(){const V=i.length/3;if(d){let Y=0,tt=N*Y;for(let dt=0;dt<B;dt++){const at=j[dt];Tt(at[2]+tt,at[1]+tt,at[0]+tt)}Y=h+f*2,tt=N*Y;for(let dt=0;dt<B;dt++){const at=j[dt];Tt(at[0]+tt,at[1]+tt,at[2]+tt)}}else{for(let Y=0;Y<B;Y++){const tt=j[Y];Tt(tt[2],tt[1],tt[0])}for(let Y=0;Y<B;Y++){const tt=j[Y];Tt(tt[0]+N*h,tt[1]+N*h,tt[2]+N*h)}}n.addGroup(V,i.length/3-V,0)}function wt(){const V=i.length/3;let Y=0;G(P,Y),Y+=P.length;for(let tt=0,dt=_.length;tt<dt;tt++){const at=_[tt];G(at,Y),Y+=at.length}n.addGroup(V,i.length/3-V,1)}function G(V,Y){let tt=V.length;for(;--tt>=0;){const dt=tt;let at=tt-1;at<0&&(at=V.length-1);for(let St=0,_t=h+f*2;St<_t;St++){const mt=N*St,Qt=N*(St+1),qt=Y+dt+mt,b=Y+at+mt,y=Y+at+Qt,O=Y+dt+Qt;At(qt,b,y,O)}}}function Ot(V,Y,tt){c.push(V),c.push(Y),c.push(tt)}function Tt(V,Y,tt){et(V),et(Y),et(tt);const dt=i.length/3,at=w.generateTopUV(n,i,dt-3,dt-2,dt-1);Dt(at[0]),Dt(at[1]),Dt(at[2])}function At(V,Y,tt,dt){et(V),et(Y),et(dt),et(Y),et(tt),et(dt);const at=i.length/3,St=w.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);Dt(St[0]),Dt(St[1]),Dt(St[3]),Dt(St[1]),Dt(St[2]),Dt(St[3])}function et(V){i.push(c[V*3+0]),i.push(c[V*3+1]),i.push(c[V*3+2])}function Dt(V){s.push(V.x),s.push(V.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Mg(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new nc[i.type]().fromJSON(i)),new Ii(n,t.options)}}const vg={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new $(s,o),new $(a,c),new $(l,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],p=t[i*3+1],g=t[i*3+2],m=t[s*3],f=t[s*3+1],x=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new $(o,1-c),new $(l,1-u),new $(d,1-g),new $(m,1-x)]:[new $(a,1-c),new $(h,1-u),new $(p,1-g),new $(f,1-x)]}};function Mg(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ko extends Yt{constructor(t=new ur([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Kt(i,3)),this.setAttribute("normal",new Kt(s,3)),this.setAttribute("uv",new Kt(o,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let p=d.shape;const g=d.holes;vn.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,x=g.length;f<x;f++){const w=g[f];vn.isClockWise(w)===!0&&(g[f]=w.reverse())}const m=vn.triangulateShape(p,g);for(let f=0,x=g.length;f<x;f++){const w=g[f];p=p.concat(w)}for(let f=0,x=p.length;f<x;f++){const w=p[f];i.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let f=0,x=m.length;f<x;f++){const w=m[f],T=w[0]+u,E=w[1]+u,v=w[2]+u;n.push(T,E,v),c+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return wg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new ko(n,t.curveSegments)}}function wg(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Le extends Yt{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new S,d=new S,p=[],g=[],m=[],f=[];for(let x=0;x<=n;x++){const w=[],T=x/n;let E=0;x==0&&o==0?E=.5/e:x==n&&c==Math.PI&&(E=-.5/e);for(let v=0;v<=e;v++){const R=v/e;u.x=-t*Math.cos(i+R*s)*Math.sin(o+T*a),u.y=t*Math.cos(o+T*a),u.z=t*Math.sin(i+R*s)*Math.sin(o+T*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),f.push(R+E,1-T),w.push(l++)}h.push(w)}for(let x=0;x<n;x++)for(let w=0;w<e;w++){const T=h[x][w+1],E=h[x][w],v=h[x+1][w],R=h[x+1][w+1];(x!==0||o>0)&&p.push(T,E,R),(x!==n-1||c<Math.PI)&&p.push(E,v,R)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(m,3)),this.setAttribute("uv",new Kt(f,2))}static fromJSON(t){return new Le(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ss extends Yt{constructor(t=1,e=.4,n=8,i=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new S,u=new S,d=new S;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const m=g/i*s,f=p/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(m),u.y=(t+e*Math.cos(f))*Math.sin(m),u.z=e*Math.sin(f),a.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const m=(i+1)*p+g-1,f=(i+1)*(p-1)+g-1,x=(i+1)*(p-1)+g,w=(i+1)*p+g;o.push(m,f,w),o.push(f,x,w)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}static fromJSON(t){return new ss(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class oc extends le{constructor(t){super(),this.type="ShadowMaterial",this.color=new pt(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}oc.prototype.isShadowMaterial=!0;class ac extends Ue{constructor(t){super(t),this.type="RawShaderMaterial"}}ac.prototype.isRawShaderMaterial=!0;class be extends le{constructor(t){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ti,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}be.prototype.isMeshStandardMaterial=!0;class lc extends be{constructor(t){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}lc.prototype.isMeshPhysicalMaterial=!0;class cc extends le{constructor(t){super(),this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ti,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ls,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}cc.prototype.isMeshPhongMaterial=!0;class hc extends le{constructor(t){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ti,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}hc.prototype.isMeshToonMaterial=!0;class uc extends le{constructor(t){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ti,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}uc.prototype.isMeshNormalMaterial=!0;class dc extends le{constructor(t){super(),this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ls,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}dc.prototype.isMeshLambertMaterial=!0;class fc extends le{constructor(t){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ti,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this}}fc.prototype.isMeshMatcapMaterial=!0;class pc extends Di{constructor(t){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}pc.prototype.isLineDashedMaterial=!0;const bg={ShadowMaterial:oc,SpriteMaterial:Do,RawShaderMaterial:ac,ShaderMaterial:Ue,PointsMaterial:No,MeshPhysicalMaterial:lc,MeshStandardMaterial:be,MeshPhongMaterial:cc,MeshToonMaterial:hc,MeshNormalMaterial:uc,MeshLambertMaterial:dc,MeshDepthMaterial:Lo,MeshDistanceMaterial:Ro,MeshBasicMaterial:Li,MeshMatcapMaterial:fc,LineDashedMaterial:pc,LineBasicMaterial:Di,Material:le};le.fromType=function(r){return new bg[r]};const $t={arraySlice:function(r,t,e){return $t.isTypedArray(r)?new r.constructor(r.subarray(t,e!==void 0?e:r.length)):r.slice(t,e)},convertArray:function(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let c=0;c!==t;++c)i[o++]=r[a+c]}return i},flattenJSON:function(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,t,e,n,i=30){const s=r.clone();s.name=t;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],h=l.getValueSize(),u=[],d=[];for(let p=0;p<l.times.length;++p){const g=l.times[p]*i;if(!(g<e||g>=n)){u.push(l.times[p]);for(let m=0;m<h;++m)d.push(l.values[p*h+m])}}u.length!==0&&(l.times=$t.convertArray(u,l.times.constructor),l.values=$t.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,t=0,e=r,n=30){n<=0&&(n=30);const i=e.tracks.length,s=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=r.tracks.find(function(x){return x.name===a.name&&x.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const p=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const g=a.times.length-1;let m;if(s<=a.times[0]){const x=h,w=u-h;m=$t.arraySlice(a.values,x,w)}else if(s>=a.times[g]){const x=g*u+h,w=x+u-h;m=$t.arraySlice(a.values,x,w)}else{const x=a.createInterpolant(),w=h,T=u-h;x.evaluate(s),m=$t.arraySlice(x.resultBuffer,w,T)}c==="quaternion"&&new we().fromArray(m).normalize().conjugate().toArray(m);const f=l.times.length;for(let x=0;x<f;++x){const w=x*p+d;if(c==="quaternion")we.multiplyQuaternionsFlat(l.values,w,m,0,l.values,w);else{const T=p-d*2;for(let E=0;E<T;++E)l.values[w+E]-=m[E]}}}return r.blendMode=Pl,r}};class wn{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,s)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,s,t)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}wn.prototype.beforeStart_=wn.prototype.copySampleValue_;wn.prototype.afterEnd_=wn.prototype.copySampleValue_;class Sg extends wn{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fi,endingEnd:fi}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case pi:s=t,a=2*e-n;break;case ns:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case pi:o=t,c=2*n-e;break;case ns:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),m=g*g,f=m*g,x=-d*f+2*d*m-d*g,w=(1+d)*f+(-1.5-2*d)*m+(-.5+d)*g+1,T=(-1-p)*f+(1.5+p)*m+.5*g,E=p*f-p*m;for(let v=0;v!==a;++v)s[v]=x*o[h+v]+w*o[l+v]+T*o[c+v]+E*o[u+v];return s}}class mc extends wn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class Eg extends wn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Je{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$t.convertArray(e,this.TimeBufferType),this.values=$t.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$t.convertArray(t.times,Array),values:$t.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Eg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ts:e=this.InterpolantFactoryMethodDiscrete;break;case es:e=this.InterpolantFactoryMethodLinear;break;case Es:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ts;case this.InterpolantFactoryMethodLinear:return es;case this.InterpolantFactoryMethodSmooth:return Es}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=$t.arraySlice(n,s,o),this.values=$t.arraySlice(this.values,s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&$t.isTypedArray(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=$t.arraySlice(this.times),e=$t.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Es,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const m=e[u+g];if(m!==e[d+g]||m!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=$t.arraySlice(t,0,o),this.values=$t.arraySlice(e,0,o*n)):(this.times=t,this.values=e),this}clone(){const t=$t.arraySlice(this.times,0),e=$t.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Je.prototype.TimeBufferType=Float32Array;Je.prototype.ValueBufferType=Float32Array;Je.prototype.DefaultInterpolation=es;class Fi extends Je{}Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=ts;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;class gc extends Je{}gc.prototype.ValueTypeName="color";class os extends Je{}os.prototype.ValueTypeName="number";class Tg extends wn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)we.slerpFlat(s,0,o,l-a,o,l,c);return s}}class dr extends Je{InterpolantFactoryMethodLinear(t){return new Tg(this.times,this.values,this.getValueSize(),t)}}dr.prototype.ValueTypeName="quaternion";dr.prototype.DefaultInterpolation=es;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ni extends Je{}Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ts;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;class as extends Je{}as.prototype.ValueTypeName="vector";class Ml{constructor(t,e=-1,n,i=Mo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Oe(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Cg(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Je.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=$t.getKeyframeOrder(c);c=$t.sortedArray(c,1,h),l=$t.sortedArray(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new os(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,m){if(p.length!==0){const f=[],x=[];$t.flattenJSON(p,f,x,g),f.length!==0&&m.push(new u(d,f,x))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let m=0;m<d[g].morphTargets.length;m++)p[d[g].morphTargets[m]]=-1;for(const m in p){const f=[],x=[];for(let w=0;w!==d[g].morphTargets.length;++w){const T=d[g];f.push(T.time),x.push(T.morphTarget===m?1:0)}i.push(new os(".morphTargetInfluence["+m+"]",f,x))}c=p.length*o}else{const p=".bones["+e[u].name+"]";n(as,p+".position",d,"pos",i),n(dr,p+".quaternion",d,"rot",i),n(as,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ag(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return gc;case"quaternion":return dr;case"bool":case"boolean":return Fi;case"string":return Ni}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Cg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Ag(r.type);if(r.times===void 0){const e=[],n=[];$t.flattenJSON(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Ei={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Lg{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Rg=new Lg;class bn{constructor(t){this.manager=t!==void 0?t:Rg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const rn={};class Pg extends bn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Ei.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(rn[t]!==void 0){rn[t].push({onLoad:e,onProgress:n,onError:i});return}rn[t]=[],rn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;const h=rn[t],u=l.body.getReader(),d=l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let m=0;const f=new ReadableStream({start(x){w();function w(){u.read().then(({done:T,value:E})=>{if(T)x.close();else{m+=E.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let R=0,I=h.length;R<I;R++){const X=h[R];X.onProgress&&X.onProgress(v)}x.enqueue(E),w()}})}}});return new Response(f)}else throw Error(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Ei.add(t,l);const h=rn[t];delete rn[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=rn[t];if(h===void 0)throw this.manager.itemError(t),l;delete rn[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class xc extends bn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Ei.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=sr("img");function c(){h(),Ei.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Dg extends bn{constructor(t){super(t)}load(t,e,n,i){const s=new ds,o=new xc(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(t[l],function(h){s.images[l]=h,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return s}}class $e extends bn{constructor(t){super(t)}load(t,e,n,i){const s=new ue,o=new xc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class je extends Vt{constructor(t,e=1){super(),this.type="Light",this.color=new pt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}je.prototype.isLight=!0;class Ig extends je{constructor(t,e,n){super(t,n),this.type="HemisphereLight",this.position.copy(Vt.DefaultUp),this.updateMatrix(),this.groundColor=new pt(e)}copy(t){return je.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}Ig.prototype.isHemisphereLight=!0;const wl=new gt,bl=new S,Sl=new S;class Ho{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(bl),Sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sl),e.updateMatrixWorld(),wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _c extends Ho{constructor(){super(new ye(50,1,.5,500)),this.focus=1}updateMatrices(t){const e=this.camera,n=rr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}_c.prototype.isSpotLightShadow=!0;class Fg extends je{constructor(t,e,n=0,i=Math.PI/3,s=0,o=1){super(t,e),this.type="SpotLight",this.position.copy(Vt.DefaultUp),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new _c}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Fg.prototype.isSpotLight=!0;const El=new gt,qi=new S,ro=new S;class yc extends Ho{constructor(){super(new ye(90,1,.5,500)),this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qi.setFromMatrixPosition(t.matrixWorld),n.position.copy(qi),ro.copy(n.position),ro.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ro),n.updateMatrixWorld(),i.makeTranslation(-qi.x,-qi.y,-qi.z),El.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El)}}yc.prototype.isPointLightShadow=!0;class vc extends je{constructor(t,e,n=0,i=1){super(t,e),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}vc.prototype.isPointLight=!0;class Mc extends Ho{constructor(){super(new Ao(-5,5,5,-5,.5,500))}}Mc.prototype.isDirectionalLightShadow=!0;class Ng extends je{constructor(t,e){super(t,e),this.type="DirectionalLight",this.position.copy(Vt.DefaultUp),this.updateMatrix(),this.target=new Vt,this.shadow=new Mc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Ng.prototype.isDirectionalLight=!0;class zg extends je{constructor(t,e){super(t,e),this.type="AmbientLight"}}zg.prototype.isAmbientLight=!0;class Bg extends je{constructor(t,e,n=10,i=10){super(t,e),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}Bg.prototype.isRectAreaLight=!0;class wc{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new S)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*s),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*s)),e.addScaledVector(o[6],.315392*(3*s*s-1)),e.addScaledVector(o[7],1.092548*(n*s)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*s),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*s),e.addScaledVector(o[6],.743125*s*s-.247708),e.addScaledVector(o[7],2*.429043*n*s),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-i*i)}}wc.prototype.isSphericalHarmonics3=!0;class Vo extends je{constructor(t=new wc,e=1){super(void 0,e),this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}Vo.prototype.isLightProbe=!0;class Og{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Ug extends Yt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}Ug.prototype.isInstancedBufferGeometry=!0;class kg extends bn{constructor(t){super(t),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Ei.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Ei.add(t,c),e&&e(c),s.manager.itemEnd(t)}).catch(function(c){i&&i(c),s.manager.itemError(t),s.manager.itemEnd(t)}),s.manager.itemStart(t)}}kg.prototype.isImageBitmapLoader=!0;let qr;const Hg={getContext:function(){return qr===void 0&&(qr=new(window.AudioContext||window.webkitAudioContext)),qr},setContext:function(r){qr=r}};class Vg extends bn{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Pg(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{const c=a.slice(0);Hg.getContext().decodeAudioData(c,function(h){e(h)})}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}}class Gg extends Vo{constructor(t,e,n=1){super(void 0,n);const i=new pt().set(t),s=new pt().set(e),o=new S(i.r,i.g,i.b),a=new S(s.r,s.g,s.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}}Gg.prototype.isHemisphereLightProbe=!0;class Wg extends Vo{constructor(t,e=1){super(void 0,e);const n=new pt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Wg.prototype.isAmbientLightProbe=!0;class qg extends Vt{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class Xg{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){we.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;we.multiplyQuaternionsFlat(t,o,t,e,t,n),we.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Go="\\[\\]\\.:\\/",Yg=new RegExp("["+Go+"]","g"),Wo="[^"+Go+"]",jg="[^"+Go.replace("\\.","")+"]",Zg=/((?:WC+[\/:])*)/.source.replace("WC",Wo),Jg=/(WCOD+)?/.source.replace("WCOD",jg),$g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wo),Kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wo),Qg=new RegExp("^"+Zg+Jg+$g+Kg+"$"),t0=["material","materials","bones"];class e0{constructor(t,e,n){const i=n||Ht.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Ht{constructor(t,e,n){this.path=e,this.parsedPath=n||Ht.parseTrackName(e),this.node=Ht.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ht.Composite(t,e,n):new Ht(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yg,"")}static parseTrackName(t){const e=Qg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);t0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Ht.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=e0;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class n0{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),c={endingStart:fi,endingEnd:fi};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Eh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*n;if(c<0||n===0)return;this._startTime=null,e=n*c}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Pl:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Mo:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===Th;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===Sh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=pi,i.endingEnd=pi):(t?i.endingStart=this.zeroSlopeAtStart?pi:fi:i.endingStart=ns,e?i.endingEnd=this.zeroSlopeAtEnd?pi:fi:i.endingEnd=ns)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=n,this}}class i0 extends Hn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const m=e&&e._propertyBindings[u].binding.parsedPath;g=new Xg(Ht.create(n,p,m),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new mc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?Ml.findByName(i,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Mo),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new n0(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?Ml.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}i0.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class r0 extends hr{constructor(t,e,n=1){super(t,e),this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}r0.prototype.isInstancedInterleavedBuffer=!0;const xn=new S,Xr=new gt,so=new gt;class s0 extends Fo{constructor(t){const e=bc(t),n=new Yt,i=[],s=[],o=new pt(0,0,1),a=new pt(0,1,0);for(let l=0;l<e.length;l++){const h=e[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new Kt(i,3)),n.setAttribute("color",new Kt(s,3));const c=new Di({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");so.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<e.length;s++){const a=e[s];a.parent&&a.parent.isBone&&(Xr.multiplyMatrices(so,a.matrixWorld),xn.setFromMatrixPosition(Xr),i.setXYZ(o,xn.x,xn.y,xn.z),Xr.multiplyMatrices(so,a.parent.matrixWorld),xn.setFromMatrixPosition(Xr),i.setXYZ(o+1,xn.x,xn.y,xn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function bc(r){const t=[];r.isBone===!0&&t.push(r);for(let e=0;e<r.children.length;e++)t.push.apply(t,bc(r.children[e]));return t}class o0 extends Fo{constructor(t=10,e=10,n=4473924,i=8947848){n=new pt(n),i=new pt(i);const s=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,p=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const m=d===s?n:i;m.toArray(l,p),p+=3,m.toArray(l,p),p+=3,m.toArray(l,p),p+=3,m.toArray(l,p),p+=3}const h=new Yt;h.setAttribute("position",new Kt(c,3)),h.setAttribute("color",new Kt(l,3));const u=new Di({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}const qe=new Uint32Array(512),Xe=new Uint32Array(512);for(let r=0;r<256;++r){const t=r-127;t<-27?(qe[r]=0,qe[r|256]=32768,Xe[r]=24,Xe[r|256]=24):t<-14?(qe[r]=1024>>-t-14,qe[r|256]=1024>>-t-14|32768,Xe[r]=-t-1,Xe[r|256]=-t-1):t<=15?(qe[r]=t+15<<10,qe[r|256]=t+15<<10|32768,Xe[r]=13,Xe[r|256]=13):t<128?(qe[r]=31744,qe[r|256]=64512,Xe[r]=24,Xe[r|256]=24):(qe[r]=31744,qe[r|256]=64512,Xe[r]=13,Xe[r|256]=13)}const Sc=new Uint32Array(2048),fr=new Uint32Array(64),a0=new Uint32Array(64);for(let r=1;r<1024;++r){let t=r<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,Sc[r]=t|e}for(let r=1024;r<2048;++r)Sc[r]=939524096+(r-1024<<13);for(let r=1;r<31;++r)fr[r]=r<<23;fr[31]=1199570944;fr[32]=2147483648;for(let r=33;r<63;++r)fr[r]=2147483648+(r-32<<23);fr[63]=3347054592;for(let r=1;r<64;++r)r!==32&&(a0[r]=1024);Ce.create=function(r,t){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Ce.prototype),r.prototype.constructor=r,r.prototype.getPoint=t,r};xo.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};o0.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};s0.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};bn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Og.extractUrlBase(r)};bn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};ke.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};ke.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ke.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};ke.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};ke.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};Gn.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};Ai.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};fs.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};pe.prototype.flattenToArrayOffset=function(r,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,t)};pe.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};pe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};pe.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};pe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};pe.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};gt.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};gt.prototype.flattenToArrayOffset=function(r,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,t)};gt.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new S().setFromMatrixColumn(this,3)};gt.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};gt.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};gt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};gt.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};gt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};gt.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};gt.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};gt.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};gt.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};gt.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};gt.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};gt.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};gt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};gt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};gt.prototype.makeFrustum=function(r,t,e,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,t,n,e,i,s)};gt.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};on.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};we.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};we.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Ci.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Ci.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};Ci.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};re.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};re.prototype.barycoordFromPoint=function(r,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,t)};re.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};re.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};re.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};re.barycoordFromPoint=function(r,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),re.getBarycoord(r,t,e,n,i)};re.normal=function(r,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),re.getNormal(r,t,e,n)};ur.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};ur.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Ii(this,r)};ur.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ko(this,r)};$.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};$.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};$.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};S.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};S.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};S.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};S.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};S.prototype.getColumnFromMatrix=function(r,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,r)};S.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};S.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};S.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};S.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Wt.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};Wt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Vt.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Vt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Vt.prototype.translate=function(r,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,r)};Vt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Vt.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Vt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Xt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Xt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Ah},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});$l.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ye.prototype.setLens=function(r,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(r)};Object.defineProperties(je.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(ae.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===is},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(is)}}});ae.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?is:ir),this};ae.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ae.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Yt.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Yt.prototype.addAttribute=function(r,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new ae(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(r,t)};Yt.prototype.addDrawCall=function(r,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,t)};Yt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Yt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Yt.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Yt.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Yt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});hr.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?is:ir),this};hr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ii.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Ii.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Ii.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Po.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(le.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new pt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Al}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Ue.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Gt.prototype.clearTarget=function(r,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(t,e,n)};Gt.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Gt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Gt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Gt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Gt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Gt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Gt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Gt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Gt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Gt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Gt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Gt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Gt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Gt.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Gt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Gt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Gt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Gt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Gt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Gt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Gt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Gt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Gt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Gt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Gt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Jt:ln}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(Yl.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Te.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});qg.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new Vg().load(r,function(n){t.setBuffer(n)}),this};Eo.prototype.updateCubeMap=function(r,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,t)};Eo.prototype.clear=function(r,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,t,e,n)};Vn.crossOrigin=void 0;Vn.loadTexture=function(r,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new $e;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,e,void 0,n);return t&&(s.mapping=t),s};Vn.loadTextureCube=function(r,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Dg;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,e,void 0,n);return t&&(s.mapping=t),s};Vn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Vn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);var Kr={Linear:{None:function(r){return r}},Quadratic:{In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}},Cubic:{In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}},Quartic:{In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}},Quintic:{In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}},Sinusoidal:{In:function(r){return 1-Math.cos(r*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.cos(Math.PI*r))}},Exponential:{In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}},Circular:{In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}},Elastic:{In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}},Back:{In:function(r){var t=1.70158;return r*r*((t+1)*r-t)},Out:function(r){var t=1.70158;return--r*r*((t+1)*r+t)+1},InOut:function(r){var t=2.5949095;return(r*=2)<1?.5*(r*r*((t+1)*r-t)):.5*((r-=2)*r*((t+1)*r+t)+2)}},Bounce:{In:function(r){return 1-Kr.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?Kr.Bounce.In(r*2)*.5:Kr.Bounce.Out(r*2-1)*.5+.5}}},Zi;typeof self=="undefined"&&typeof process!="undefined"&&process.hrtime?Zi=function(){var r=process.hrtime();return r[0]*1e3+r[1]/1e6}:typeof self!="undefined"&&self.performance!==void 0&&self.performance.now!==void 0?Zi=self.performance.now.bind(self.performance):Date.now!==void 0?Zi=Date.now:Zi=function(){return new Date().getTime()};var di=Zi,l0=function(){function r(){this._tweens={},this._tweensAddedDuringUpdate={}}return r.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},r.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},r.prototype.update=function(t,e){t===void 0&&(t=di()),e===void 0&&(e=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var s=this._tweens[n[i]],o=!e;s&&s.update(t,o)===!1&&!e&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},r}(),Ji={Linear:function(r,t){var e=r.length-1,n=e*t,i=Math.floor(n),s=Ji.Utils.Linear;return t<0?s(r[0],r[1],n):t>1?s(r[e],r[e-1],e-n):s(r[i],r[i+1>e?e:i+1],n-i)},Bezier:function(r,t){for(var e=0,n=r.length-1,i=Math.pow,s=Ji.Utils.Bernstein,o=0;o<=n;o++)e+=i(1-t,n-o)*i(t,o)*r[o]*s(n,o);return e},CatmullRom:function(r,t){var e=r.length-1,n=e*t,i=Math.floor(n),s=Ji.Utils.CatmullRom;return r[0]===r[e]?(t<0&&(i=Math.floor(n=e*(1+t))),s(r[(i-1+e)%e],r[i],r[(i+1)%e],r[(i+2)%e],n-i)):t<0?r[0]-(s(r[0],r[0],r[1],r[1],-n)-r[0]):t>1?r[e]-(s(r[e],r[e],r[e-1],r[e-1],n-e)-r[e]):s(r[i?i-1:0],r[i],r[e<i+1?e:i+1],r[e<i+2?e:i+2],n-i)},Utils:{Linear:function(r,t,e){return(t-r)*e+r},Bernstein:function(r,t){var e=Ji.Utils.Factorial;return e(r)/e(t)/e(r-t)},Factorial:function(){var r=[1];return function(t){var e=1;if(r[t])return r[t];for(var n=t;n>1;n--)e*=n;return r[t]=e,e}}(),CatmullRom:function(r,t,e,n,i){var s=(e-r)*.5,o=(n-t)*.5,a=i*i,c=i*a;return(2*t-2*e+s+o)*c+(-3*t+3*e-2*s-o)*a+s*i+t}}},c0=function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r}(),Ec=new l0,se=function(){function r(t,e){e===void 0&&(e=Ec),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Kr.Linear.None,this._interpolationFunction=Ji.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=c0.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.to=function(t,e){return this._valuesEnd=Object.create(t),e!==void 0&&(this._duration=e),this},r.prototype.duration=function(t){return this._duration=t,this},r.prototype.start=function(t){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var e in this._valuesStartRepeat)this._swapEndStartRepeatValues(e),this._valuesStart[e]=this._valuesStartRepeat[e]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t!==void 0?typeof t=="string"?di()+parseFloat(t):t:di(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},r.prototype._setupProperties=function(t,e,n,i){for(var s in n){var o=t[s],a=Array.isArray(o),c=a?"array":typeof o,l=!a&&Array.isArray(n[s]);if(!(c==="undefined"||c==="function")){if(l){var h=n[s];if(h.length===0)continue;h=h.map(this._handleRelativeValue.bind(this,o)),n[s]=[o].concat(h)}if((c==="object"||a)&&o&&!l){e[s]=a?[]:{};for(var u in o)e[s][u]=o[u];i[s]=a?[]:{},this._setupProperties(o,e[s],n[s],i[s])}else typeof e[s]=="undefined"&&(e[s]=o),a||(e[s]*=1),l?i[s]=n[s].slice().reverse():i[s]=e[s]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},r.prototype.pause=function(t){return t===void 0&&(t=di()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},r.prototype.resume=function(t){return t===void 0&&(t=di()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},r.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},r.prototype.group=function(t){return this._group=t,this},r.prototype.delay=function(t){return this._delayTime=t,this},r.prototype.repeat=function(t){return this._initialRepeat=t,this._repeat=t,this},r.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},r.prototype.yoyo=function(t){return this._yoyo=t,this},r.prototype.easing=function(t){return this._easingFunction=t,this},r.prototype.interpolation=function(t){return this._interpolationFunction=t,this},r.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},r.prototype.onStart=function(t){return this._onStartCallback=t,this},r.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},r.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},r.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},r.prototype.onStop=function(t){return this._onStopCallback=t,this},r.prototype.update=function(t,e){if(t===void 0&&(t=di()),e===void 0&&(e=!0),this._isPaused)return!0;var n,i,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>s)return!1;e&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),i=(t-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var o=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,c=this._chainedTweens.length;a<c;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(t,e,n,i){for(var s in n)if(e[s]!==void 0){var o=e[s]||0,a=n[s],c=Array.isArray(t[s]),l=Array.isArray(a),h=!c&&l;h?t[s]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(t[s],o,a,i):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(t[s]=o+(a-o)*i))}},r.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},r.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},r}(),Ze=Ec;Ze.getAll.bind(Ze);Ze.removeAll.bind(Ze);Ze.add.bind(Ze);Ze.remove.bind(Ze);var h0=Ze.update.bind(Ze);const Sn=document.querySelector(".planet__title"),Zt=document.querySelector(".section"),En=document.querySelector(".age"),Tn=document.querySelector(".mass"),An=document.querySelector(".distance"),Cn=document.querySelector(".radius"),Ln=document.querySelector(".populated");Zt.classList.add("hidden");function u0(r,t,e){const n=new Le(15,32,16),i=new $e().load("img/2k_earth_daymap.jpg"),s=new be({map:i}),o=new Xt(n,s);o.position.set(0,0,0),r.add(o),document.addEventListener("keydown",c=>{if(c.key==="w"&&t.position.x===0&&o.position.z===0){const l=new se(o.position).to({x:o.position.x-20,y:0,z:-20});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.remove("hidden"),Sn.textContent="Earth",En.textContent="Age: 4.54 billion years",Tn.textContent="Mass: 5.972E24 kg",An.textContent="Distance to Sun: 149.600.000 km",Cn.textContent="Radius: 6.371 km",Ln.textContent="Populated: Yes"}),l.start()}if(c.key==="s"&&t.position.x===0){Zt.classList.add("hidden");const l=new se(o.position).to({x:0,y:0,z:0});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.add("hidden")}),l.start()}});const a=()=>{requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,e.render(r,t,e)};a()}function d0(r,t,e){const n=new Le(15,32,16),i=new $e().load("img/2k_venus_surface.jpg"),s=new be({map:i}),o=new Xt(n,s);o.position.set(200,0,0),r.add(o),document.addEventListener("keydown",c=>{if(c.key==="w"&&t.position.x===200&&o.position.z===0){const l=new se(o.position).to({x:o.position.x-20,y:0,z:-20});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.remove("hidden"),Sn.textContent="Venus",En.textContent="Age: 4.6 billion years",Tn.textContent="Mass: 4,867E24 kg ",An.textContent="Distance to Sun: 108.000.000 km",Cn.textContent="Radius: 6.051,8 km",Ln.textContent="Populated: No"}),l.start()}if(c.key==="s"&&t.position.x===200){Zt.classList.add("hidden");const l=new se(o.position).to({x:200,y:0,z:0});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.add("hidden")}),l.start()}});const a=()=>{requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,e.render(r,t,e)};a()}function f0(r,t,e){const n=new Le(5,32,32),i=new $e().load("img/2k_mercury.jpg"),s=new be({map:i}),o=new Xt(n,s);o.position.set(400,0,0),r.add(o),document.addEventListener("keydown",c=>{if(c.key==="w"&&t.position.x===400&&o.position.z===0){const l=new se(o.position).to({x:o.position.x-5,y:5,z:-5});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.remove("hidden"),Sn.textContent="Mercury",En.textContent="Age: 4.5 billion years",Tn.textContent="Mass: 3,285E23 kg ",An.textContent="Distance to Sun: 57.910.000 km",Cn.textContent="Radius: 2.439,7 km",Ln.textContent="Populated: No"}),l.start()}if(c.key==="s"&&t.position.x===400){Zt.classList.add("hidden");const l=new se(o.position).to({x:400,y:0,z:0});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.add("hidden")}),l.start()}});const a=()=>{requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,e.render(r,t,e)};a()}function p0(r,t,e){const n=new Le(60,32,16),i=new $e().load("img/2k_sun.jpg"),s=new Li({map:i}),o=new Xt(n,s);o.position.set(500,0,0),r.add(o)}function m0(r,t,e){const n=new Le(12,32,16),i=new $e().load("img/2k_mars.jpg"),s=new be({map:i}),o=new Xt(n,s);o.position.set(-200,0,0),r.add(o),document.addEventListener("keydown",c=>{if(c.key==="w"&&t.position.x===-200&&o.position.z===0){const l=new se(o.position).to({x:o.position.x-20,y:0,z:-20});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.remove("hidden"),Sn.textContent="Mars",En.textContent="Age: 4.5 billion years",Tn.textContent="Mass: 6,39E23 kg ",An.textContent="Distance to Sun: 227.900.000 km",Cn.textContent="Radius: 3.389,5 km",Ln.textContent="Populated: No"}),l.start()}if(c.key==="s"&&t.position.x===-200){Zt.classList.add("hidden");const l=new se(o.position).to({x:-200,y:0,z:0});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.add("hidden")}),l.start()}});const a=()=>{requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,e.render(r,t,e)};a()}function g0(r,t,e){const n=new Le(25,32,32),i=new $e().load("img/2k_jupiter.jpg"),s=new be({map:i}),o=new Xt(n,s);o.position.set(-400,0,0),r.add(o),document.addEventListener("keydown",c=>{if(c.key==="w"&&t.position.x===-400&&o.position.z===0){const l=new se(o.position).to({x:o.position.x-20,y:0,z:-30});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.remove("hidden"),Sn.textContent="Jupiter",En.textContent="Age: 4.6 billion years",Tn.textContent="Mass: 1,898E27 kg ",An.textContent="Distance to Sun: 778.500.000 km",Cn.textContent="Radius: 69.911 km",Ln.textContent="Populated: No"}),l.start()}if(c.key==="s"&&t.position.x===-400){Zt.classList.add("hidden");const l=new se(o.position).to({x:-400,y:0,z:0});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.add("hidden")}),l.start()}});const a=()=>{requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,e.render(r,t,e)};a()}function x0(r,t,e){const n=new ss(30,.1,16,100),i=new be({color:16777215}),s=new Xt(n,i);s.rotateX(Math.PI/2);const o=new ss(32,.1,16,100),a=new be({color:16777184}),c=new Xt(o,a);c.rotateX(Math.PI/2);const l=new Le(23,32,16),h=new $e().load("img/2k_saturn.jpg"),u=new be({map:h}),d=new Xt(l,u);d.position.set(-600,0,0),s.position.set(-600,0,0),c.position.set(-600,0,0),r.add(d),r.add(s),r.add(c),document.addEventListener("keydown",g=>{if(g.key==="w"&&t.position.x===-600&&d.position.z===0){const m=new se(d.position).to({x:d.position.x-20,y:0,z:-30});m.onUpdate(f=>{d.position.set(f.x,f.y,f.z),s.position.set(f.x,f.y,f.z),c.position.set(f.x,f.y,f.z)}),m.onComplete(()=>{Zt.classList.remove("hidden"),Sn.textContent="Saturn",En.textContent="Age: 4.5 billion years",Tn.textContent="Mass: 5,683E26 kg ",An.textContent="Distance to Sun: 1.4 billion km",Cn.textContent="Radius: 58.232 km",Ln.textContent="Populated: No"}),m.start()}if(g.key==="s"&&t.position.x===-600){Zt.classList.add("hidden");const m=new se(d.position).to({x:-600,y:0,z:0});m.onUpdate(f=>{d.position.set(f.x,f.y,f.z),s.position.set(f.x,f.y,f.z),c.position.set(f.x,f.y,f.z)}),m.onComplete(()=>{Zt.classList.add("hidden")}),m.start()}});const p=()=>{requestAnimationFrame(p),d.rotation.x+=.01,d.rotation.y+=.01,e.render(r,t,e)};p()}function _0(r,t,e){const n=new Le(18,32,16),i=new $e().load("img/2k_uranus.jpg"),s=new be({map:i}),o=new Xt(n,s);o.position.set(-800,0,0),r.add(o),document.addEventListener("keydown",c=>{if(c.key==="w"&&t.position.x===-800&&o.position.z===0){const l=new se(o.position).to({x:o.position.x-20,y:0,z:-20});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.remove("hidden"),Sn.textContent="Uranus",En.textContent="Age: 4.5 billion years",Tn.textContent="Mass: 8,681E25 kg ",An.textContent="Distance to Sun: 2.8 billion km",Cn.textContent="Radius: 25.362 km",Ln.textContent="Populated: No"}),l.start()}if(c.key==="s"&&t.position.x===-800){Zt.classList.add("hidden");const l=new se(o.position).to({x:-800,y:0,z:0});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.add("hidden")}),l.start()}});const a=()=>{requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,e.render(r,t,e)};a()}function y0(r,t,e){const n=new Le(17,32,16),i=new $e().load("img/2k_neptune.jpg"),s=new be({map:i}),o=new Xt(n,s);o.position.set(-1e3,0,0),r.add(o),document.addEventListener("keydown",c=>{if(c.key==="w"&&t.position.x===-1e3&&o.position.z===0){const l=new se(o.position).to({x:o.position.x-20,y:0,z:-20});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.remove("hidden"),Sn.textContent="Neptune",En.textContent="Age: 4.5 billion years",Tn.textContent="Mass: 1,024E26 kg",An.textContent="Distance to Sun: 4.5 billion km",Cn.textContent="Radius: 24.622 km",Ln.textContent="Populated: No"}),l.start()}if(c.key==="s"&&t.position.x===-1e3){Zt.classList.add("hidden");const l=new se(o.position).to({x:-1e3,y:0,z:0});l.onUpdate(h=>{o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{Zt.classList.add("hidden")}),l.start()}});const a=()=>{requestAnimationFrame(a),o.rotation.x+=.01,o.rotation.y+=.01,e.render(r,t,e)};a()}function v0(r,t,e){p0(r),f0(r,t,e),d0(r,t,e),u0(r,t,e),m0(r,t,e),g0(r,t,e),x0(r,t,e),_0(r,t,e),y0(r,t,e)}const Yr=document.querySelector(".controls");function M0(r,t){const e=document.querySelector(".planet__title"),n=new Ri(0,0,0),i=new be({color:6710067}),s=new Xt(n,i),o=new vc(16777215,1,100);o.position.set(0,8,50),s.position.set(0,8,20),t.position.y=8,r.add(o),r.add(s);let a=!1;document.addEventListener("keydown",c=>{switch(c.key){case"a":if(Yr.textContent="",s.position.x===-1e3||a)break;{a=!0;const l=new se(s.position).to({x:s.position.x-200,y:8,z:20},1e3);l.onUpdate(h=>{e.textContent="",s.position.set(h.x,h.y,h.z),t.position.set(h.x,h.y,t.position.z),o.position.set(h.x,h.y,t.position.z)}).onComplete(()=>{switch(a=!1,s.position.x){case-1e3:e.textContent="Neptune";break;case-800:e.textContent="Uranus";break;case-600:e.textContent="Saturn";break;case-400:e.textContent="Jupiter";break;case-200:e.textContent="Mars";break;case 0:e.textContent="Earth";break;case 200:e.textContent="Venus";break;case 400:e.textContent="Mercury";break}}),l.start()}break;case"d":if(Yr.textContent="",s.position.x===400||a)break;{a=!0;const l=new se(s.position).to({x:s.position.x+200,y:8,z:20},1e3);l.onUpdate(h=>{e.textContent="",s.position.set(h.x,h.y,h.z),t.position.set(h.x,h.y,t.position.z),o.position.set(h.x,h.y,t.position.z)}).onComplete(()=>{switch(a=!1,s.position.x){case-1e3:e.textContent="Neptune";break;case-800:e.textContent="Uranus";break;case-600:e.textContent="Saturn";break;case-400:e.textContent="Jupiter";break;case-200:e.textContent="Mars";break;case 0:e.textContent="Earth";break;case 200:e.textContent="Venus";break;case 400:e.textContent="Mercury";break}}),l.start()}break;case"w":if(Yr.textContent="",s.position.x===0||s.position.x===200||s.position.x===400||s.position.x===-200||s.position.x===-400||s.position.x===-600||s.position.x===-800||s.position.x===-1e3){a=!0;const l=new se(t.position).to({x:s.position.x,y:8,z:0},1e3);l.onUpdate(h=>{t.position.set(h.x,h.y,h.z),o.position.set(h.x,h.y,h.z)}),l.start()}break;case"s":if(Yr.textContent="",s.position.x===0||s.position.x===200||s.position.x===400||s.position.x===-200||s.position.x===-400||s.position.x===-600||s.position.x===-800||s.position.x===-1e3){a=!0;const l=new se(t.position).to({x:s.position.x,y:8,z:50},1e3);l.onUpdate(h=>{t.position.set(h.x,h.y,h.z),o.position.set(h.x,h.y,h.z)}),l.onComplete(()=>{a=!1}),l.start()}break}})}const w0=document.querySelector("#bg"),Qr=new Po,jr=new ye(75,window.innerWidth/window.innerHeight,.1,2e3),Zr=new Gt({canvas:w0});async function b0(){Zr.setPixelRatio(window.devicePixelRatio),Zr.setSize(window.innerWidth,window.innerHeight),jr.position.setZ(50);for(let r=0;r<3e3;r++)S0();M0(Qr,jr),v0(Qr,jr,Zr),Zr.render(Qr,jr)}function S0(){const r=new Le(.25,24,24),t=new Li({color:16777215}),e=new Xt(r,t),[n,i,s]=Array(300).fill().map(()=>jh.randFloatSpread(3e3));e.position.set(n,i,s),Qr.add(e)}function Tc(r){requestAnimationFrame(Tc),h0(r)}requestAnimationFrame(Tc);b0();
