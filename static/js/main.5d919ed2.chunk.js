(this["webpackJsonpreact-chess"]=this["webpackJsonpreact-chess"]||[]).push([[0],{14:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(5),n=s.n(i),r=s(8),o=s.n(r),c=(s(6),s(1)),l=s(4),u=s(3),h=s(2);function b(e){return Object(a.jsx)("button",{className:"square "+e.shade,onClick:e.onClick,style:e.image})}var d=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"renderSquare",value:function(e,t,s){var i=this,n=[e,t];return Object(a.jsx)(b,{image:this.props.squares[e][t]?this.props.squares[e][t].image:null,shade:s,onClick:function(){return i.props.onClick(n)}})}},{key:"render",value:function(){console.log("BOARD UPDATE");for(var e=[],t=0;t<this.props.squares.length;t++){for(var s=[],i=0;i<this.props.squares[t].length;i++){var n=p(t)===p(i)?"light-square":"dark-square";s.push(this.renderSquare(t,i,n))}e.push(Object(a.jsx)("div",{className:"board-row",children:s}))}return Object(a.jsx)("div",{children:e})}}]),s}(n.a.Component);function p(e){return e%2===0}var v=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"renderSquare",value:function(e,t,s){return Object(a.jsx)(b,{keyVal:t,piece:e,style:e.image},t)}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"board-row",children:this.props.whiteFallenSoldiers.map((function(t,s){return e.renderSquare(t,s)}))}),Object(a.jsx)("div",{className:"board-row",children:this.props.blackFallenSoldiers.map((function(t,s){return e.renderSquare(t,s)}))})]})}}]),s}(n.a.Component),j=function e(t,s){Object(c.a)(this,e),this.player=t,this.image={backgroundImage:"url('"+s+"')"}},k=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg":"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg")}return Object(l.a)(s,[{key:"isMovePossible",value:function(e,t){return Math.abs(e-t)%9===0||Math.abs(e-t)%7===0}},{key:"getSrcToDestPath",value:function(e,t){var s,a,i,n=[];e>t?(s=t,a=e):(s=e,a=t),Math.abs(e-t)%9===0?(i=9,s+=9):(i=7,s+=7);for(var r=s;r<a;r+=i)n.push(r);return n}}]),s}(j),g=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg":"https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg")}return Object(l.a)(s,[{key:"isMovePossible",value:function(e,t){return!0}}]),s}(j),f=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg")}return Object(l.a)(s,[{key:"isMovePossible",value:function(e,t){return e-17===t||e-10===t||e+6===t||e+15===t||e-15===t||e-6===t||e+10===t||e+17===t}},{key:"getSrcToDestPath",value:function(){return[]}}]),s}(j),m=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg":"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg")).initialPositions={1:[48,49,50,51,52,53,54,55],2:[8,9,10,11,12,13,14,15]},a}return Object(l.a)(s,[{key:"isMoveLegal",value:function(e,t){var s=e[0],a=e[1],i=t[0],n=t[1];return console.log(s+","+a+" --\x3e "+i+","+n),console.log(i),console.log(s+-1*this.player),i==s- -1*this.player*1&&(console.log("LEGAL MOVE!"),!0)}},{key:"isMovePossible",value:function(e,t,s){if(1===this.player){if(t===e-8&&!s||t===e-16&&-1!==this.initialPositions[1].indexOf(e))return!0;if(s&&(t===e-9||t===e-7))return!0}else if(2===this.player){if(t===e+8&&!s||t===e+16&&-1!==this.initialPositions[2].indexOf(e))return!0;if(s&&(t===e+9||t===e+7))return!0}return!1}},{key:"getSrcToDestPath",value:function(e,t){return t===e-16?[e-8]:t===e+16?[e+8]:[]}}]),s}(j),O=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg")}return Object(l.a)(s,[{key:"isMoveLegal",value:function(e,t){return!0}},{key:"isMovePossible",value:function(e,t){var s=e%8,a=8-s;return Math.abs(e-t)%9===0||Math.abs(e-t)%7===0||Math.abs(e-t)%8===0||t>=e-s&&t<e+a}},{key:"getSrcToDestPath",value:function(e,t){var s,a,i,n=[];e>t?(s=t,a=e):(s=e,a=t),Math.abs(e-t)%8===0?(i=8,s+=8):Math.abs(e-t)%9===0?(i=9,s+=9):Math.abs(e-t)%7===0?(i=7,s+=7):(i=1,s+=1);for(var r=s;r<a;r+=i)n.push(r);return n}}]),s}(j),w=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg")}return Object(l.a)(s,[{key:"isMovePossible",value:function(e,t){var s=e%8,a=8-s;return Math.abs(e-t)%8===0||t>=e-s&&t<e+a}},{key:"getSrcToDestPath",value:function(e,t){var s,a,i,n=[];e>t?(s=t,a=e):(s=e,a=t),Math.abs(e-t)%8===0?(i=8,s+=8):(i=1,s+=1);for(var r=s;r<a;r+=i)n.push(r);return n}}]),s}(j),y=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(c.a)(this,s),t.call(this,e,"rock.png")}return s}((function e(t,s){Object(c.a)(this,e),this.image={backgroundImage:"url("+s+")"},this.player=t}));function S(){for(var e="----------- -RKBQ-XBKR- -PPPP-PPPP- --##------- --#----#--- ----------- -#---##---# -pppp-pppp- -rkbq-xbkr- -----------".split(" "),t=new Array(e.length),s=0;s<t.length;s++){var a=new Array(e[s]).fill(null);t[s]=a;for(var i=e[s].split(""),n=0;n<i.length;n++){switch(i[n]){case"#":t[s][n]=new y(2);break;case"r":t[s][n]=new w(-1);break;case"R":t[s][n]=new w(1);break;case"b":t[s][n]=new k(-1);break;case"B":t[s][n]=new k(1);break;case"k":t[s][n]=new f(-1);break;case"K":t[s][n]=new f(1);break;case"q":t[s][n]=new O(-1);break;case"Q":t[s][n]=new O(1);break;case"x":t[s][n]=new g(-1);break;case"X":t[s][n]=new g(1);break;case"p":t[s][n]=new m(-1);break;case"P":t[s][n]=new m(1);break;default:t[s][n]=null}}}return console.log(t),t}var x=function(e){Object(u.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(c.a)(this,s),(e=t.call(this)).state={squares:S(),whiteFallenSoldiers:[],blackFallenSoldiers:[],player:1,sourceSelection:-1,status:"",turn:"white"},e}return Object(l.a)(s,[{key:"handleClick",value:function(e){var t=e[0],s=e[1];console.log("Click");var a=this.state.squares;-1===this.state.sourceSelection?(console.log("Click: Selection"),console.log(t+","+s),console.log(a[t][s]),a[t][s]&&console.log(a[t][s].player),a[t][s]&&a[t][s].player===this.state.player?this.setState({status:"Select Destination",sourceSelection:e}):this.setState({status:"Wrong Selection"})):(console.log("Destination Click"),a[this.state.sourceSelection[0]][this.state.sourceSelection[1]].isMoveLegal(this.state.sourceSelection,e)?null==a[t][s]?(console.log("Empty click"),a[t][s]=a[this.state.sourceSelection[0]][this.state.sourceSelection[1]],a[this.state.sourceSelection[0]][this.state.sourceSelection[1]]=null,this.setState({status:"Empty click",sourceSelection:-1})):a[t][s].player&&a[t][s].player==-1*this.state.player?console.log("Enemy click"):a[t][s].player&&a[t][s].player==this.state.player?console.log("Invalid click: Self"):a[t][s].player&&2==a[t][s].player?console.log("Invalid click: Obstacle"):console.log("Unknown Click"):(console.log("Your pawn cannot move there, choose another piece"),this.setState({status:"Your pawn cannot move there, choose another piece",sourceSelection:-1})))}},{key:"isMoveLegal",value:function(e){for(var t=!0,s=0;s<e.length;s++)null!==this.state.squares[e[s]]&&(t=!1);return t}},{key:"render",value:function(){var e=this;return console.log("GAME UPDATE"),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"game",children:[Object(a.jsx)("div",{className:"game-board",children:Object(a.jsx)(d,{squares:this.state.squares,onClick:function(t){return e.handleClick(t)}})}),Object(a.jsxs)("div",{className:"game-info",children:[Object(a.jsx)("h3",{children:"Turn"}),Object(a.jsx)("div",{id:"player-turn-box",style:{backgroundColor:this.state.turn}}),Object(a.jsx)("div",{className:"game-status",children:this.state.status}),Object(a.jsx)("div",{className:"fallen-soldier-block",children:Object(a.jsx)(v,{whiteFallenSoldiers:this.state.whiteFallenSoldiers,blackFallenSoldiers:this.state.blackFallenSoldiers})})]})]}),Object(a.jsx)("div",{className:"icons-attribution",children:Object(a.jsxs)("div",{children:[" ",Object(a.jsxs)("small",{children:[" Chess Icons And Favicon (extracted) By en:User:Cburnett [",Object(a.jsx)("a",{href:"http://www.gnu.org/copyleft/fdl.html",children:"GFDL"}),", ",Object(a.jsx)("a",{href:"http://creativecommons.org/licenses/by-sa/3.0/",children:"CC-BY-SA-3.0"}),", ",Object(a.jsx)("a",{href:"http://opensource.org/licenses/bsd-license.php",children:"BSD"})," or ",Object(a.jsx)("a",{href:"http://www.gnu.org/licenses/gpl.html",children:"GPL"}),"], ",Object(a.jsx)("a",{href:"https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces",children:"via Wikimedia Commons"})," "]})]})})]})}}]),s}(n.a.Component);o.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))},6:function(e,t,s){}},[[14,1,2]]]);
//# sourceMappingURL=main.5d919ed2.chunk.js.map