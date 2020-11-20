(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{25:function(t,e,s){},26:function(t,e,s){},44:function(t,e,s){},45:function(t,e,s){},47:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(2),r=s(13),i=s.n(r),l=(s(25),s(14)),c=s(15),o=s(19),u=s(17),h=(s(26),s(16)),m=s.n(h),f=function(){return m.a.get("https://randomuser.me/api/?results=20&inc=name,email,location&nat=us")},j=s(3);var d=function(t){return Object(a.jsx)("div",Object(j.a)({className:"container".concat(t.fluid?"-fluid":"")},t))};s(44);var b=function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.first}),Object(a.jsx)("td",{children:t.last}),Object(a.jsx)("td",{children:t.email}),Object(a.jsx)("td",{children:t.state})]})};s(45);var p=function(t){return Object(a.jsx)("main",Object(j.a)({className:"wrapper"},t))},O=s(18);var v=function(t){return Object(a.jsx)("form",{className:"search",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"filter",children:"Filter:"}),Object(a.jsx)("input",{onChange:t.handleInputChange,value:t.value,name:"filter",list:"states",type:"text",className:"form-control",placeholder:"Filter by State",id:"state"}),Object(a.jsx)("datalist",{id:"states",children:Object(O.a)(new Set(t.results.map((function(t){return t.location.state})))).map((function(t){return Object(a.jsx)("option",{value:t},t)}))}),Object(a.jsx)("button",{type:"submit",onClick:t.handleFormSubmit,"data-value":"filter",className:"btn btn-success",children:"Filter"}),Object(a.jsx)("button",{type:"submit",onClick:t.handleFormSubmit,"data-value":"unfilter",className:"btn btn-danger",children:"Remove Filter"})]})})},x=function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).state={original:[],results:[],filter:""},t.getEmployees=function(){f().then((function(e){console.log(e),t.setState({results:e.data.results,original:e.data.results})})).catch((function(t){return console.log(t)}))},t.handleInputChange=function(e){t.setState({filter:e.target.value})},t.handleFormSubmit=function(e){e.preventDefault();var s=e.target.getAttribute("data-value");t.filterList(t.state.filter,s)},t}return Object(c.a)(s,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"sortEmployees",value:function(t){if("first"===t){var e=this.state.results.sort((function(t,e){return t.name.first>e.name.first||t.name.first===e.name.first&&t.name.last>e.name.last?1:-1}));this.setState({results:e})}else if("last"===t){var s=this.state.results.sort((function(t,e){return t.name.last>e.name.last||t.name.last===e.name.last&&t.name.first>e.name.first?1:-1}));this.setState({results:s})}else if("email"===t){var a=this.state.results.sort((function(t,e){return t.email>e.email?1:-1}));this.setState({results:a})}else{var n=this.state.results.sort((function(t,e){return t.location.state>e.location.state?1:-1}));this.setState({results:n})}}},{key:"filterList",value:function(t,e){if("filter"===e){var s=this.state.results.filter((function(e){return e.location.state===t}));console.log(s),this.setState({results:s})}else{var a=this.state.original;this.setState({results:a})}}},{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{children:Object(a.jsx)(p,{children:Object(a.jsxs)(d,{style:{minHeight:"100vh"},children:[Object(a.jsx)("h1",{className:"text-center",children:"Directory of Employees"}),Object(a.jsx)(v,{value:this.state.filter,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,results:this.state.results}),Object(a.jsxs)("table",{className:"table table-striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsxs)("th",{scope:"col",children:["First",Object(a.jsx)("i",{className:"fas fa-sort",onClick:function(){return t.sortEmployees("first")}})]}),Object(a.jsxs)("th",{scope:"col",children:["Last",Object(a.jsx)("i",{className:"fas fa-sort",onClick:function(){return t.sortEmployees("last")}})]}),Object(a.jsxs)("th",{scope:"col",children:["Email",Object(a.jsx)("i",{className:"fas fa-sort",onClick:function(){return t.sortEmployees("email")}})]}),Object(a.jsxs)("th",{scope:"col",children:["State",Object(a.jsx)("i",{className:"fas fa-sort",onClick:function(){return t.sortEmployees("state")}})]})]})}),Object(a.jsx)("tbody",{children:this.state.results.map((function(t){return Object(a.jsx)(b,{first:t.name.first,last:t.name.last,email:t.email,state:t.location.state})}))})]})]})})})}}]),s}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s(46);i.a.render(Object(a.jsx)(x,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.88023e57.chunk.js.map