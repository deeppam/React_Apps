(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),r=i(7),u=i.n(r),l=i(1),o=i(2),s=i(4),m=i(3),c=(i(13),function(e){Object(s.a)(i,e);var t=Object(m.a)(i);function i(){var e;return Object(l.a)(this,i),(e=t.call(this)).handleChange=function(t){e.setState({keyword:t.target.value?t.target.value:"User Text Here"}),e.props.userText(t.target.value)},e.state={title:"My React App",keyword:"User Text Here"},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this.state.title;return n.a.createElement(a.Fragment,null,n.a.createElement("header",null,n.a.createElement("div",{className:"logo"},e),n.a.createElement("center",null,n.a.createElement("input",{type:"text",onChange:this.handleChange}),n.a.createElement("div",{style:{color:"white"}},this.state.keyword))),n.a.createElement("hr",null))}}]),i}(a.Component)),d=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",null),n.a.createElement("center",null,n.a.createElement("h3",null,"\xa9 Developer Funnel ",e.year," ",e.month)))},p=i(5),v=function(e){console.log("props in newslist",e);var t=e.newsdata.map((function(e){return n.a.createElement("div",{key:e.id},n.a.createElement("h3",null,e.title),n.a.createElement("p",null,e.feed))}));return n.a.createElement("div",null,t)},f=function(e){Object(s.a)(i,e);var t=Object(m.a)(i);function i(){var e;return Object(l.a)(this,i),(e=t.call(this)).filterNews=function(t){var i=e.state.news.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>-1}));e.setState({filtered:i})},e.state={news:p,filtered:p},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{userText:function(t){e.filterNews(t)}}),n.a.createElement(v,{newsdata:this.state.filtered}),n.a.createElement(d,{year:"2020",month:"Oct"}))}}]),i}(a.Component);u.a.render(n.a.createElement(f,null),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"id":1,"title":"New ES6 upgrade available $","feed":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"},{"id":2,"title":"The importance of & REACT in the development","feed":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"},{"id":3,"title":"REACT developers going on strike","feed":"It is propaganda: India on social media posts alleging harassment of Muslims"},{"id":4,"title":"Say what again. I dare you,...x","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":5,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":6,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"},{"id":7,"title":"REACT developers going on strike","feed":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}]')},8:function(e,t,i){e.exports=i(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.fc82b326.chunk.js.map