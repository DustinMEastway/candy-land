(this["webpackJsonpcandy-land"]=this["webpackJsonpcandy-land"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),y=n(10),c=n.n(y),l=(n(17),n(2));function u(e,t,n){if(null==t&&(t=e,e=0),null==n&&(n=t>e?1:-1),0===n||n>0&&t<e||n<0&&t>e)return[];for(var r=[],a=e;n>0?a<t:a>t;a+=n)r.push(a);return r}function i(e){return new Promise((function(t){setTimeout((function(){return t()}),e)}))}var s=n(6),p=n(7),o=function(){function e(t){Object(s.a)(this,e),this._value=t,this._observers=[],this.next=this.next.bind(this)}return Object(p.a)(e,[{key:"value",get:function(){return this._value}},{key:"next",value:function(e){this._value=e,this._observers.forEach((function(t){return t(e)}))}},{key:"subscribe",value:function(e){var t=this;return this._observers.push(e),function(){return t.unsubscribe(e)}}},{key:"unsubscribe",value:function(e){this._observers=this._observers.filter((function(t){return t===e}))}}]),e}();function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},n=Object(r.useState)(e.value),a=Object(l.a)(n,2),y=a[0],c=a[1],u=Object(r.useState)(t(y)),i=Object(l.a)(u,2),s=i[0],p=i[1];Object(r.useEffect)((function(){p(t(y))}),[t,y,p]),Object(r.useEffect)((function(){var t=function(e){return c(e)};return e.subscribe(t),function(){return e.unsubscribe(t)}}),[e]);var o=function(n){var r=t.toString(),a=b.exec(r);if(null==a)throw new Error("`getter` argument of `useSubject` must be a simple property getter (e.g. `x => x.user.name`) in order for setter to work. Received:\n"+r);var c=(a[2]||a[4]).split(/\??\./).filter((function(e){return""!==e.trim()})),l=c.length?d(e.value):n,u=y,i=l;c.forEach((function(e,t){if(null==u||null==i)throw new Error("null reference exception while trying to access x".concat(a[2]," on object:\n")+JSON.stringify(y));i[e]=t===c.length-1?n:d(u[e])})),e.next(l)};return[s,o]}var b=/^\s*\(?(\w+)\)?\s*=>\s*\1((?:\??\.\w+)*);?\s*$|^\s*function\s*\((\w+)\)\s*{\s*return\s+\3((?:\??\.\w+)*);?\s*}\s*$/;function d(e){var t=function(e){return Array.isArray(e)?[]:null!=e&&"object"===typeof e?Object.create(Object.getPrototypeOf(e)):e}(e);return null!=e&&"object"===typeof e&&Object.getOwnPropertyNames(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(t,n,r),t[n]=e[n]})),t}var f=n(9),j=n.n(f),v=n(11),g=n(12),h=n(3),O=[{type:"red",x:19.3,y:84.6},{type:"purple",x:23,y:83},{type:"yellow",x:26,y:80},{type:"blue",x:29,y:78},{type:"orange",x:32.5,y:76.3},{type:"green",x:36,y:75.5},{type:"red",x:40,y:75.8},{type:"purple",x:43,y:77},{type:"candy-heart",x:46.4,y:79},{type:"yellow",x:49.5,y:81.6},{type:"blue",x:53,y:84},{type:"orange",x:56,y:85.5},{type:"green",x:59.8,y:87},{type:"red",x:63.3,y:87.2},{type:"purple",x:67,y:87.5},{type:"yellow",x:70.5,y:87.5},{type:"blue",x:74.3,y:87.5},{type:"candy-cane",x:78,y:86.5},{type:"orange",x:80,y:83.5},{type:"green",x:80,y:78.5},{type:"red",x:77.3,y:75.5},{type:"purple",x:74,y:74.8},{type:"yellow",x:70.5,y:75},{type:"blue",x:67,y:75},{type:"orange",x:63,y:76},{type:"green",x:59.5,y:76.3},{type:"red",x:56,y:76},{type:"purple",x:52.5,y:74.6},{type:"yellow",x:50,y:72},{type:"blue",x:49.5,y:67.5},{type:"orange",x:51,y:63.7},{type:"green",x:54.5,y:61.5},{type:"red",x:58,y:61.8},{type:"purple",x:61.4,y:63.2},{type:"yellow",x:65,y:65.2},{type:"blue",x:68.2,y:67},{type:"orange",x:72,y:68},{type:"green",x:75,y:69},{type:"red",x:79,y:71},{type:"purple",x:83,y:71},{type:"yellow",x:86.3,y:70.3},{type:"blue",x:89.3,y:68.2},{type:"orange",x:90.9,y:64.4},{type:"green",x:91.1,y:59.9},{type:"red",x:89.9,y:55.5},{type:"purple",x:87.1,y:52.3},{type:"yellow",x:83.5,y:51.3},{type:"blue",x:80.3,y:52},{type:"gumdrop",x:76.8,y:53.4},{type:"orange",x:73.4,y:55},{type:"green",x:69.7,y:56.8},{type:"red",x:66.22,y:57.5},{type:"purple",x:62.8,y:57},{type:"yellow",x:59.2,y:55.6},{type:"blue",x:55.8,y:53.6},{type:"orange",x:52.2,y:52.2},{type:"green",x:48.5,y:52.3},{type:"red",x:45.1,y:53.9},{type:"purple",x:42.2,y:56.7},{type:"yellow",x:39,y:59.4},{type:"blue",x:36,y:61.9},{type:"orange",x:32.8,y:63.7},{type:"green",x:29.3,y:65},{type:"red",x:25.8,y:66.2},{type:"purple",x:22.3,y:67.1},{type:"yellow",x:18.7,y:67.6},{type:"blue",x:15,y:67.6},{type:"orange",x:11.6,y:66.1},{type:"green",x:9.7,y:62.8},{type:"red",x:9.4,y:58.4},{type:"purple",x:11.4,y:54.6},{type:"yellow",x:14.5,y:52.9},{type:"blue",x:18.3,y:53.2},{type:"orange",x:21.4,y:54.1},{type:"green",x:24.9,y:55.7},{type:"red",x:28.6,y:56.2},{type:"purple",x:31.7,y:54.8},{type:"yellow",x:32,y:50.4},{type:"blue",x:29,y:48.7},{type:"orange",x:25.5,y:47.5},{type:"peanut-brittle",x:22.6,y:45.2},{type:"green",x:21.3,y:41.8},{type:"red",x:22.27,y:37.7},{type:"purple",x:25.3,y:36.2},{type:"yellow",x:29,y:36.9},{type:"blue",x:32.6,y:38.6},{type:"orange",x:36.2,y:40},{type:"green",x:39.7,y:41.6},{type:"red",x:43.1,y:43.1},{type:"purple",x:46.5,y:44.5},{type:"yellow",x:50.2,y:45.7},{type:"blue",x:53.8,y:46.7},{type:"orange",x:57.4,y:47},{type:"green",x:61.2,y:47.3},{type:"red",x:65,y:47.5},{type:"sucker",x:68.6,y:47.5},{type:"purple",x:72.3,y:46.9},{type:"yellow",x:75.8,y:45.8},{type:"blue",x:79.2,y:44.1},{type:"orange",x:81.8,y:41.3},{type:"green",x:83.2,y:37.2},{type:"red",x:82.2,y:32.7},{type:"purple",x:79.1,y:30.2},{type:"ice-cream",x:75.8,y:28.4},{type:"yellow",x:73.6,y:24.6},{type:"blue",x:70.6,y:21.7},{type:"orange",x:67.1,y:22.2},{type:"green",x:64.1,y:25.4},{type:"red",x:61.7,y:29},{type:"purple",x:59,y:31.9},{type:"yellow",x:55.7,y:33.8},{type:"blue",x:52.1,y:34.3},{type:"orange",x:48.5,y:33.7},{type:"green",x:45.1,y:32},{type:"red",x:41.7,y:30.2},{type:"purple",x:38,y:29.4},{type:"yellow",x:34.4,y:29.2},{type:"blue",x:30.7,y:29.7},{type:"orange",x:27,y:30.2},{type:"green",x:23.4,y:30},{type:"red",x:20,y:28.5},{type:"purple",x:17.9,y:25.1},{type:"yellow",x:17,y:20.8},{type:"blue",x:17.8,y:16.4},{type:"orange",x:20.6,y:13.4},{type:"green",x:24.3,y:13},{type:"red",x:27.7,y:14.5},{type:"purple",x:30.7,y:17},{type:"yellow",x:33.8,y:19.8},{type:"rainbow",x:36.9,y:22.2}],m=new Map([[O[4],O[62]],[O[38],O[49]]]),w=["candy-cane","candy-heart","gumdrop","ice-cream","peanut-brittle","sucker"],k=["blue","green","orange","purple","red","yellow"],N=8*k.length,P=2*k.length,C=(w.length,new Set([O[53],O[85],O[120]])),S=["Pink","Blue","Orange","Purple"].map((function(e){return{name:e,value:"Player-".concat(e.toLowerCase())}})),T=function(){function e(){Object(s.a)(this,e),this.save=new o(e.createNewSave())}return Object(p.a)(e,[{key:"startNewGame",value:function(){this.save.next(e.createNewSave())}},{key:"takeTurn",value:function(){var t,n,r=Object(h.a)({},this.save.value),a=r,y=a.players,c=a.turn,l=y[c],i=(r=e.drawCard(r)).lastCard,s=i.startsWith("2_"),p=i.replace(/^2_/,""),o=O[l.position];t=w.includes(i)?O:O.slice(O.indexOf(o)+1),C.has(o)&&o.type!==p?n=o:(n=e.getNextTile(t,p))&&s&&(n=e.getNextTile(O.slice(O.indexOf(n)+1),p));var x=O.indexOf(n),b=u(x,l.position);n&&m.has(n)?(n=m.get(n),b=[O.indexOf(n)].concat(Object(g.a)(b))):n||(n=O[O.length-1],b=u(O.length,l.position)),r.lastCard=i,n===O[O.length-1]?r.state="complete":r.turn=(c+1)%y.length,this.save.next(r),this.animateToTile(c,b,x<l.position)}},{key:"animateToTile",value:function(){var e=Object(v.a)(j.a.mark((function e(t,n,r){var a,y,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.length){e.next=14;break}if((a=Object(h.a)({},this.save.value)).players=a.players.slice(),a.players[t]=Object(h.a)({},a.players[t]),(y=a.players[t]).position=n.pop(),c=!n.length,y.backwards=!c&&r,this.save.next(a),c){e.next=12;break}return e.next=12,i(300);case 12:e.next=0;break;case 14:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()}],[{key:"createPlayer",value:function(e){var t=e.name,n=e.value;return{backwards:!1,className:n,id:n,name:t.substring(0,1).toUpperCase()+t.substring(1),position:0}}},{key:"createDeck",value:function(){return function(e){for(var t=(e=e.map((function(e){return e}))).length-1;t>1;--t){var n=Math.round(Math.random()*t),r=e[t];e[t]=e[n],e[n]=r}return e}([].concat(u(N).map((function(e){return k[e%k.length]})),u(P).map((function(e){return"2_"+k[e%k.length]})),w))}},{key:"createNewSave",value:function(){return{deck:this.createDeck(),lastCard:null,players:S.slice(0,4).map(this.createPlayer),state:"new",turn:0}}},{key:"drawCard",value:function(e){var t=Object(h.a)({},e),n=t.deck.length?t.deck:this.createDeck();return t.lastCard=n[0],t.deck=n.slice(1),t}},{key:"getNextTile",value:function(e,t){return e.find((function(e){return e.type===t}))}}]),e}();var D={gameService:new T},E=Object(r.createContext)(D),_=(n(19),n(0)),A=function(){var e=Object(r.useContext)(E).gameService,t=x(e.save,(function(e){return e.lastCard})),n=Object(l.a)(t,1)[0];return Object(_.jsxs)("div",{className:"Deck",children:[Object(_.jsx)("button",{className:"Deck-pile Deck-draw-pile",onClick:function(){return e.takeTurn()}}),Object(_.jsx)("div",{className:"Deck-pile Deck-discard-pile"+(n?" Deck-discard-pile--".concat(n):"")})]})},F=(n(21),function(e){var t=e.content;return Object(_.jsx)("div",{className:"Dialog-background",children:Object(_.jsx)("div",{className:"Dialog-foreground",children:t})})}),B=(n(22),function(){var e=Object(r.useContext)(E).gameService,t=x(e.save),n=Object(l.a)(t,1)[0],a=n.players,y=n.state,c=n.turn;return"complete"!==y?null:Object(_.jsx)(F,{content:Object(_.jsxs)("div",{className:"EndGame",children:[Object(_.jsxs)("h2",{className:"EndGame-title",children:["Congratulations ",a[c].name,"!"]}),Object(_.jsx)("div",{className:"EndGame-actions",children:Object(_.jsx)("button",{onClick:function(){return e.startNewGame()},type:"button",children:"Play Again?"})})]})})}),G=(n(23),function(){var e=x(Object(r.useContext)(E).gameService.save),t=Object(l.a)(e,1)[0],n=t.players,a=t.turn,y=n.slice(a+1).concat(n.slice(0,a+1));return Object(_.jsx)(_.Fragment,{children:y.map((function(e){var t=O[e.position],n=t.x,r=t.y,a=O[e.position+1],y="Player ".concat(e.className);return e.backwards!==(null===a||void 0===a?void 0:a.x)<n&&(y+=" Flip"),Object(_.jsx)("div",{className:y,style:{left:"".concat(n,"%"),top:"".concat(r,"%")}},e.id)}))})}),M=(n(24),function(){var e=Object(r.useContext)(E).gameService.save,t=x(e,(function(e){return e.players})),n=Object(l.a)(t,2),a=n[0],y=n[1],c=x(e,(function(e){return e.state})),u=Object(l.a)(c,2),i=u[0],s=u[1],p=function(e,t){y(a.map((function(n,r){return r===t?Object(h.a)(Object(h.a)({},n),e):n})))};return"new"!==i?null:Object(_.jsx)(F,{content:Object(_.jsxs)("div",{className:"PlayerPicker",children:[Object(_.jsx)("h2",{className:"PlayerPicker-title",children:"Select Players"}),Object(_.jsxs)("div",{className:"PlayerPicker-content",children:[a.map((function(e,t){return Object(_.jsxs)("div",{className:"PlayerPicker-player-row",children:[Object(_.jsx)("select",{onChange:function(e){return p({className:e.currentTarget.value},t)},value:e.className,children:S.map((function(e){return Object(_.jsx)("option",{value:e.value,children:e.name},e.value)}))}),Object(_.jsx)("input",{onChange:function(e){return p({name:e.currentTarget.value},t)},value:e.name}),a.length<=2?null:Object(_.jsx)("button",{className:"PlayerPicker-remove-button",onClick:function(){return y(a.slice(0,t).concat(a.slice(t+1)))},type:"button",children:"-"})]},t)})),a.length>=4?null:Object(_.jsx)("button",{className:"PlayerPicker-add-button",onClick:function(){var e=S.find((function(e){return a.every((function(t){return t.className!==e.value}))}))||S[0];y(a.concat(T.createPlayer(e)))},type:"button",children:"+"})]}),Object(_.jsx)("div",{className:"PlayerPicker-actions",children:Object(_.jsx)("button",{onClick:function(){return s("in-progress")},type:"button",children:"Start"})})]})})}),J=(n(25),function(){var e=x(Object(r.useContext)(E).gameService.save),t=Object(l.a)(e,1)[0],n=t.players,a=t.turn;return Object(_.jsxs)("div",{className:"TurnDisplay",children:[n[a].name,"'s Turn"]})}),L=(n(26),function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(M,{}),Object(_.jsx)(B,{}),Object(_.jsxs)("div",{className:"App-TopContent",children:[Object(_.jsx)(J,{}),Object(_.jsx)(A,{})]}),Object(_.jsx)("div",{className:"App-BoardArea",children:Object(_.jsx)("div",{className:"App-Board",children:Object(_.jsx)(G,{})})})]})}),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,y=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),y(e),c(e)}))};c.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(L,{})}),document.getElementById("root")),I()}],[[27,1,2]]]);
//# sourceMappingURL=main.f2325105.chunk.js.map