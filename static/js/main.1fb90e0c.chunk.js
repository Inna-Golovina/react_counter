(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),u=n(3),s=n(4),i=n(6),l=n(5),d=(n(12),function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.state.count%5===0&&t.add100(),t.addOne()},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.count;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"wrapper"},c.a.createElement("h1",{className:"header"},"Count:",t),c.a.createElement("button",{type:"button",className:"counter",onClick:this.addOne},"Add 1"),c.a.createElement("button",{type:"button",className:"counter",onClick:this.add100},"Add 100"),c.a.createElement("button",{type:"button",className:"counter",onClick:this.increase},"Special button *"),c.a.createElement("p",{className:"note"},"*Special button add 100 if count is divisible by 5 and then add 1.")))}}]),n}(c.a.Component));r.a.render(c.a.createElement(d,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.1fb90e0c.chunk.js.map