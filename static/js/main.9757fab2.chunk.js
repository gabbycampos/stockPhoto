(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(42)},28:function(e,a,t){},29:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),i=(t(28),t(2)),o=t(3),s=t(5),m=t(4),u=t(6),h=t(11),d=t(10),p=(t(29),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light fixed-top"},l.a.createElement(h.b,{className:"navbar-brand",to:"/"},"Stock Photos"),l.a.createElement("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"collapsibleNavId"},l.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0 float-right"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link",to:"/signup"},"Sign Up")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(h.b,{className:"nav-link",to:"/"},"Log Out")))))))}}]),a}(n.Component)),b=t(13),E=(t(38),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={email:"",password:""},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.history.push("/photo")},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-home"},l.a.createElement("h4",null,"Would you like to browse royalty free stock photos?",l.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40")),l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",{className:"input-button"},l.a.createElement("button",{className:"button"},"log in")))))}}]),a}(n.Component)),f=(t(39),t(40),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-img",src:this.props.photo.image,alt:this.props.photo.alt}))}}]),a}(n.Component)),v=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).state={images:[]},e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("./data.json").then(function(e){return e.json()}).then(function(a){e.setState({images:a})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container-photo"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("p",null,"Photos"),l.a.createElement("p",null,"fashion | office work | food"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card-columns"},this.state.images.map(function(e){return l.a.createElement(f,{photo:e,key:e.id,style:{width:"100%"}})}))))))}}]),a}(n.Component),g=(t(41),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={email:"",password:"",firstName:"",lastName:""},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.history.push("/photo")},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},l.a.createElement("h5",{className:"title"},"Sign Up"),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"signInButton"},"Sign Up"))))}}]),a}(n.Component)),N=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement(p,null)),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:E}),l.a.createElement(d.a,{path:"/photo",component:v}),l.a.createElement(d.a,{path:"/signup",component:g}))),l.a.createElement("footer",null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.9757fab2.chunk.js.map