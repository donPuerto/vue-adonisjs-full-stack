(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"05b0":function(t,e,n){},"17ea":function(t,e,n){"use strict";var o=n("31b8"),s=n.n(o);s.a},"2cfd":function(t,e,n){"use strict";var o=n("e3a0"),s=n.n(o);s.a},"31b8":function(t,e,n){},"56da":function(t,e,n){},"73cf":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs6:"","offset-xs3":""}},[n("h1",[t._v("Register")]),n("v-text-field",{attrs:{label:"Email",placeholder:"Email",value:t.registerEmail},on:{input:t.setRegisterEmail}}),n("v-text-field",{attrs:{label:"Password",placeholder:"Password",type:"password",autocomplete:"new-password",value:t.registerPassword},on:{input:t.setRegisterPassword}}),n("v-alert",{attrs:{type:"error",value:t.registerError}},[t._v("\n        "+t._s(t.registerError)+"\n      ")]),n("v-btn",{attrs:{color:"green",dark:""},on:{click:t.register}},[n("v-icon",{staticClass:"mr-2"},[t._v("account_circle")]),t._v("\n        Register\n      ")],1)],1)],1)],1)},s=[],r=n("c93e"),a=(n("cadf"),n("551c"),n("097d"),n("2f62")),c={computed:Object(r["a"])({},Object(a["e"])("authentication",["registerEmail","registerPassword","registerError"])),methods:Object(r["a"])({},Object(a["d"])("authentication",["setRegisterEmail","setRegisterPassword"]),Object(a["b"])("authentication",["register"]))},i=c,l=(n("2cfd"),n("2877")),u=Object(l["a"])(i,o,s,!1,null,null,null);u.options.__file="Register.vue";e["default"]=u.exports},a55b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs6:"","offset-xs3":""}},[n("h1",[t._v("Login")]),n("v-text-field",{attrs:{label:"Email",placeholder:"Email",value:t.loginEmail},on:{input:t.setLoginEmail}}),n("v-text-field",{attrs:{label:"Password",placeholder:"Password",type:"password",autocomplete:"new-password",value:t.loginPassword},on:{input:t.setLoginPassword}}),n("v-alert",{attrs:{type:"error",value:t.loginError}},[t._v("\n        "+t._s(t.loginError)+"\n      ")]),n("v-btn",{attrs:{color:"green",dark:""},on:{click:t.login}},[n("v-icon",{staticClass:"mr-2"},[t._v("fingerprint")]),t._v("\n        Login\n      ")],1)],1)],1)],1)},s=[],r=n("c93e"),a=(n("cadf"),n("551c"),n("097d"),n("2f62")),c={computed:Object(r["a"])({},Object(a["e"])("authentication",["loginEmail","loginPassword","loginError"])),methods:Object(r["a"])({},Object(a["d"])("authentication",["setLoginEmail","setLoginPassword"]),Object(a["b"])("authentication",["login"]))},i=c,l=(n("d6db"),n("2877")),u=Object(l["a"])(i,o,s,!1,null,null,null);u.options.__file="Login.vue";e["default"]=u.exports},acca:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",[n("v-flex",{attrs:{xs4:""}},[n("Projects")],1),t.currentProject?n("v-flex",{staticClass:"pl-4",attrs:{xs8:""}},[n("Tasks")],1):t._e()],1)],1)},s=[],r=n("c93e"),a=(n("cadf"),n("551c"),n("097d"),n("2f62")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{attrs:{title:"Projects"}},[t._l(t.projects,function(e){return n("div",{key:e.id,staticClass:"project mt-4"},[n("EditableRecord",{attrs:{isEditMode:e.isEditMode,title:e.title},on:{onInput:function(n){t.setProjectTitle({project:e,title:n})},onClick:function(n){t.projectClicked(e)},onEdit:function(n){t.setEditMode(e)},onSave:function(n){t.saveProject(e)},onDelete:function(n){t.deleteProject(e)}}})],1)}),n("CreateRecord",{attrs:{placeholder:"My project name....",value:t.newProjectName},on:{onInput:t.setNewProjectName,create:t.createProject}})],2)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"mt-4",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{placeholder:t.placeholder,value:t.value},on:{input:function(e){t.$emit("onInput",e)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("create")}}})],1),n("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[n("v-btn",{staticClass:"mt-2",attrs:{dark:"",color:"green"},on:{click:function(e){t.$emit("create")}}},[n("v-icon",{staticClass:"mr-2"},[t._v("add_circle")]),t._v("\n      Create\n    ")],1)],1)],1)},u=[],d={props:["placeholder","value"]},f=d,v=(n("da8b"),n("2877")),p=Object(v["a"])(f,l,u,!1,null,null,null);p.options.__file="CreateRecord.vue";var b=p.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-left",attrs:{xs9:""}},[t._t("default"),t.isEditMode?t._e():n("span",{on:{click:function(e){t.$emit("onClick")}}},[t._v("\n      "+t._s(t.title)+"\n    ")]),t.isEditMode?n("v-text-field",{staticClass:"pa-0",attrs:{autofocus:"",value:t.title},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("onSave")},input:function(e){t.$emit("onInput",e)}}}):t._e()],2),n("v-flex",{staticClass:"text-xs-right align-center justify-center",attrs:{xs3:""}},[n("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[t.isEditMode?t._e():n("v-icon",{on:{click:function(e){t.$emit("onEdit")}}},[t._v("\n      edit\n    ")]),t.isEditMode?n("v-icon",{on:{click:function(e){t.$emit("onSave")}}},[t._v("\n      check\n    ")]):t._e(),n("v-icon",{on:{click:function(e){t.$emit("onDelete")}}},[t._v("\n      delete\n    ")])],1)],1)],1)},j=[],m={props:["isEditMode","title","record"]},k=m,h=(n("c93e2"),Object(v["a"])(k,_,j,!1,null,null,null));h.options.__file="EditableRecord.vue";var g=h.exports,E={mounted:function(){this.fetchProjects()},components:{CreateRecord:b,EditableRecord:g},computed:Object(r["a"])({},Object(a["e"])("projects",["newProjectName","projects"])),methods:Object(r["a"])({projectClicked:function(t){this.setCurrentProject(t),this.fetchTasksForProject(t)}},Object(a["d"])("projects",["setNewProjectName","setEditMode","setProjectTitle","setCurrentProject"]),Object(a["b"])("projects",["createProject","fetchProjects","saveProject","deleteProject"]),Object(a["b"])("tasks",["fetchTasksForProject"]))},w=E,x=(n("f6ca"),Object(v["a"])(w,c,i,!1,null,null,null));x.options.__file="Projects.vue";var P=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{attrs:{title:"Tasks"}},[t._l(t.tasks,function(e){return n("div",{key:e.id,staticClass:"tasks mt-2"},[n("EditableRecord",{attrs:{isEditMode:e.isEditMode,title:e.description},on:{onInput:function(n){t.setTaskDescription({task:e,description:n})},onEdit:function(n){t.setEditMode(e)},onSave:function(n){t.saveTask(e)},onDelete:function(n){t.deleteTask(e)}}},[n("v-icon",{on:{click:function(n){t.checkClicked(e)}}},[t._v("\n        "+t._s(e.completed?"check_box":"check_box_outline_blank")+"\n      ")])],1)],1)}),n("CreateRecord",{attrs:{placeholder:"I need to...",value:t.newTaskName},on:{onInput:t.setNewTaskName,create:t.createTask}})],2)},C=[],T={components:{CreateRecord:b,EditableRecord:g},computed:Object(r["a"])({},Object(a["e"])("tasks",["tasks","newTaskName"])),methods:Object(r["a"])({},Object(a["b"])("tasks",["createTask","deleteTask","saveTask"]),Object(a["d"])("tasks",["setNewTaskName","setTaskDescription","setEditMode","toggleCompleted"]),{checkClicked:function(t){this.toggleCompleted(t),this.saveTask(t)}})},y=T,$=(n("17ea"),Object(v["a"])(y,O,C,!1,null,null,null));$.options.__file="Tasks.vue";var R=$.exports,M=n("41cb"),N={components:{Projects:P,Tasks:R},mounted:function(){if(!this.isLoggedIn)return M["a"].push("/login")},computed:Object(r["a"])({},Object(a["e"])("projects",["currentProject"]),Object(a["c"])("authentication",["isLoggedIn"]))},I=N,L=Object(v["a"])(I,o,s,!1,null,null,null);L.options.__file="Projects.vue";e["default"]=L.exports},b9f2:function(t,e,n){},c93e2:function(t,e,n){"use strict";var o=n("56da"),s=n.n(o);s.a},d6db:function(t,e,n){"use strict";var o=n("05b0"),s=n.n(o);s.a},da8b:function(t,e,n){"use strict";var o=n("fea3"),s=n.n(o);s.a},e3a0:function(t,e,n){},f6ca:function(t,e,n){"use strict";var o=n("b9f2"),s=n.n(o);s.a},f820:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],r=n("2877"),a={},c=Object(r["a"])(a,o,s,!1,null,null,null);c.options.__file="About.vue";e["default"]=c.exports},fea3:function(t,e,n){}}]);
//# sourceMappingURL=about.da244ff1.js.map