(function(e){function t(t){for(var r,i,a=t[0],c=t[1],u=t[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0282":function(e,t,n){function r(e){var t={isError:!1,errorMessage:new String};return o(e.username).length>1?(t.isError=!0,t.errorMessage=o(e.username),t):i(e.password).length>1?(t.isError=!0,t.errorMessage=i(e.password),t):t}function s(e){var t={isError:!1,errorMessage:new String};return o(e.username).length>1?(t.isError=!0,t.errorMessage=o(e.username),t):i(e.password).length>1?(t.isError=!0,t.errorMessage=i(e.password),t):e.password!==e.passwordConfirmation?(t.isError=!0,t.errorMessage="Passwords do not match",t):t}function o(e){var t="";return e?""==e?t="Email error: Empty username":e.length<5||e.length>40?(console.log(e.length),t="Email error: Email must have 5-40 characters"):t=e.includes("@")?e.includes(".com")?"":"Email error: Email is not valid, missing .com":"Email error: Email is not valid, missing @":t="Email error: Email field missing",t}function i(e){if(!e)return"Password error: Password field missing";var t=/[a-z]/g;if(!e.match(t))return"Password error: There are no lowercase letter";var n=/[A-Z]/g;if(!e.match(n))return"Password error: There are no upercase letter";var r=/[0-9]/g;return e.match(r)?!e.length>=8?"Password error: Password is not long enough":"":"Password error: There are no numbers"}n("caad"),n("ac1f"),n("2532"),n("466d"),e.exports={validateLoginData:r,validateRegisterData:s}},"0373":function(e,t,n){},"09a8":function(e,t,n){},2078:function(e,t,n){e.exports=n.p+"img/linkedinIcon.6c8f5a24.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},o=[],i={name:"App",components:{},data:function(){return{}}},a=i,c=n("2877"),u=n("6544"),l=n.n(u),d=n("7496"),p=Object(c["a"])(a,s,o,!1,null,null,null),g=p.exports;l()(p,{VApp:d["a"]});var m=n("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("Hello home!")]),n("v-btn",{attrs:{color:"green"},on:{click:function(t){return e.logOut()}}},[e._v("Log Out")])],1)},v=[],w=n("9814"),C=(n("d3b7"),n("96cf"),n("1da1")),b=n("bc3a"),A=n.n(b),_={local:"localhost",dev:"15.236.191.15",pro:""},S=_.dev;function y(e,t){return T.apply(this,arguments)}function T(){return T=Object(C["a"])(regeneratorRuntime.mark((function e(t,n){var r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={username:t,password:n},s=new Promise((function(e,t){A.a.post("http://".concat(S,":8888/login/log_user"),r).then((function(t){e(t.data)})).catch((function(e){t(e.data)}))})),e.next=4,s;case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function E(e,t,n){return x.apply(this,arguments)}function x(){return x=Object(C["a"])(regeneratorRuntime.mark((function e(t,n,r){var s,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={username:t,password:n,passwordConfirmation:r},o=new Promise((function(e,t){A.a.post("http://".concat(S,":8888/register/register_user"),s).then((function(t){e(t.data)})).catch((function(e){t(e.data)}))})),e.next=4,o;case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function O(e,t){return P.apply(this,arguments)}function P(){return P=Object(C["a"])(regeneratorRuntime.mark((function e(t,n){var r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={username:t,password:n},s=new Promise((function(e,t){A.a.post("http://".concat(S,":8888/logout/logout_user"),r).then((function(t){e(t.data)})).catch((function(e){t(e.data)}))})),e.next=4,s;case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function L(){A.a.post("http://localhost:8888/auth/google").then((function(e){return console.log(e),!0})).catch((function(e){return console.log(e),!1}))}var k={logUser:y,registerUser:E,logWithGoogle:L,logOut:O},j={name:"Home",data:function(){return{}},mounted:function(){},methods:{logOut:function(){var e=this,t={username:this.$store.getters.user,password:this.$store.getters.password};k.logOut(t.username,t.password).then((function(t){e.$store.commit("resetAuthState"),window.localStorage.clear(),e.$router.push("/login")}))}},components:{}},M=j,$=n("8336"),U=Object(c["a"])(M,h,v,!1,null,"0295b896",null),N=U.exports;l()(U,{VBtn:$["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"leftContainer"},[n("div",{staticClass:"leftContainer-top"},[e.isShowingLogin?n("p",[e._v(" "+e._s(e.Strings.notAMemberYet)+" "),n("b",{staticClass:"header_login",on:{click:function(t){return e.changeLoginScreen()}}},[e._v(e._s(e.Strings.signUp))])]):n("p",[e._v(" "+e._s(e.Strings.alreadyAMember)+" "),n("b",{staticClass:"header_login",on:{click:function(t){return e.changeLoginScreen()}}},[e._v(e._s(e.Strings.signIn))])])]),n("div",{staticClass:"leftContainer-medium"},[n("h2",{staticClass:"leftContainer-medium-title"},[e._v(e._s(e.isShowingLogin?e.Strings.signIn:e.Strings.signUp))]),n("login-form",{attrs:{loginStatus:e.isShowingLogin},on:{launchLoginProcess:e.processUserInputData}})],1),e._m(0)]),e._m(1)])},D=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"leftContainer-bottom"},[r("div",{staticClass:"divisorsContainer"},[r("hr",{staticClass:"divisors"}),r("p",{attrs:{id:"divisorText"}},[e._v("Or")]),r("hr",{staticClass:"divisors"})]),r("div",{staticClass:"externalLoginButtons"},[r("div",{staticClass:"externalLogin"},[r("img",{attrs:{src:n("803a"),alt:""}}),r("span",[e._v("Sign up with Google")])]),r("div",{staticClass:"externalLogin"},[r("img",{attrs:{src:n("2078"),alt:""}}),r("span",[e._v("Sign up with Linkedin")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rightContainer"},[n("p",{staticClass:"inspirationalQuote"},[e._v(" CREATE A "),n("span",{staticClass:"inspirationalQuoteEnding"},[e._v("PROJECT")]),n("br"),e._v("FIND A "),n("span",{staticClass:"inspirationalQuoteEnding"},[e._v("TEAM")]),n("br"),e._v("LAUNCH YOUR "),n("span",{staticClass:"inspirationalQuoteEnding"},[e._v("STARTUP")])])])}],I=(n("caad"),n("2532"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loginForm"},[n("div",{staticClass:"inputWrapper inputEmail"},[n("label",[e._v(e._s(e.Strings.email))]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"inputFields shadow",attrs:{type:"text"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),n("div",{staticClass:"inputWrapper inputPassword"},[n("label",[e._v(e._s(e.Strings.password))]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"inputFields shadow",attrs:{type:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e.loginStatus?e._e():n("div",{staticClass:"inputWrapper inputConfirmPassword"},[n("label",[e._v(e._s(e.Strings.passwordConfirmation))]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.passwordConfirmation,expression:"user.passwordConfirmation"}],staticClass:"inputFields shadow",attrs:{placeholder:e.Strings.moreThanNCharacters,type:"password"},domProps:{value:e.user.passwordConfirmation},on:{input:function(t){t.target.composing||e.$set(e.user,"passwordConfirmation",t.target.value)}}})]),e.loginStatus?e._e():n("div",{staticClass:"termsAndConditions"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isTermsAndConditionsAccepted,expression:"isTermsAndConditionsAccepted"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isTermsAndConditionsAccepted)?e._i(e.isTermsAndConditionsAccepted,null)>-1:e.isTermsAndConditionsAccepted},on:{click:function(t){return e.checkTermsAndConditions()},change:function(t){var n=e.isTermsAndConditionsAccepted,r=t.target,s=!!r.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);r.checked?i<0&&(e.isTermsAndConditionsAccepted=n.concat([o])):i>-1&&(e.isTermsAndConditionsAccepted=n.slice(0,i).concat(n.slice(i+1)))}else e.isTermsAndConditionsAccepted=s}}}),n("span",{staticClass:"termsAndConditionsText"},[e._v(" "+e._s(e.Strings.termsAndConditionsAgree)+" "),n("b",{staticClass:"termsOfService",on:{click:function(t){return e.goToTermsAndConditions()}}},[e._v(e._s(e.Strings.termsAndConditionsPage))])])]),n("div",{staticClass:"buttonWrapper"},[n("div",{staticClass:"buttonContainer",on:{click:function(t){return e.parseInput()}}},[e.loginStatus?n("p",{staticClass:"buttonText"},[e._v(e._s(e.Strings.signIn))]):n("p",{staticClass:"buttonText"},[e._v(e._s(e.Strings.createAccount))])])])])}),F=[],W={props:{loginStatus:{type:Boolean,required:!0}},name:"loginForm",data:function(){return{isTermsAndConditionsAccepted:!1,Strings:new Object,user:{username:"irlandesmajere@gmail.com",password:"Navidad1",passwordConfirmation:"Navidad1",role:"user"}}},mounted:function(){this.Strings=w.screen_login},methods:{changeLoginScreen:function(){this.loginStatus=!this.loginStatus},checkTermsAndConditions:function(){this.isTermsAndConditionsAccepted=!this.isTermsAndConditionsAccepted,console.log(this.isTermsAndConditionsAccepted)},goToTermsAndConditions:function(){},parseInput:function(){this.loginStatus||this.isTermsAndConditionsAccepted?this.$emit("launchLoginProcess",this.user):alert("You must accept terms and conditions")}},components:{}},B=W,H=(n("8ff8"),Object(c["a"])(B,I,F,!1,null,"f4f5b6e4",null)),J=H.exports,Q=n("0282"),Y=n.n(Q),q={name:"login",data:function(){return{isShowingLogin:!0,Strings:new Object}},mounted:function(){this.Strings=w.screen_login},methods:{changeLoginScreen:function(){this.isShowingLogin=!this.isShowingLogin},processUserInputData:function(e){this.isShowingLogin?this.parseLoginData(e):this.parseRegisteringData(e)},parseLoginData:function(e){var t=this,n=Y.a.validateLoginData(e);n.isError?console.log(n.errorMessage):k.logUser(e.username,e.password).then((function(n){"200"==n.code||n.includes("already")?t.logUser(e):console.log("server: "+n)}))},parseRegisteringData:function(e){var t=Y.a.validateRegisterData(e);t.isError?console.log(t.errorMessage):k.registerUser(e.username,e.password,e.passwordConfirmation).then((function(e){"200"==e.code?location.reload():console.log("server: "+e)}))},logUser:function(e){this.$store.commit("setUserLoginData",e),this.$router.push("/")}},components:{"login-form":J}},G=q,V=(n("8655"),Object(c["a"])(G,R,D,!1,null,"7e4dd59c",null)),z=V.exports;r["a"].use(f["a"]);var Z=[{path:"/",name:"Home",component:N,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:z},{path:"*",redirect:"/"}],K=new f["a"]({mode:"history",base:"/",routes:Z}),X=K,ee=n("2f62"),te={state:{user:null,password:null,role:"user",logged:!1},mutations:{setUserLoginData:function(e,t){e.user=t.username,e.password=t.password,e.role=t.role,e.logged=!0},resetAuthState:function(e){e.user=null,e.password=null,e.role=null,e.logged=!1}},getters:{logged:function(e){return e.logged},role:function(e){return e.role},user:function(e){return e.user},password:function(e){return e.password}}},ne=n("bfa9"),re=new ne["a"]({key:"my-app",storage:localStorage});r["a"].use(ee["a"]);var se=new ee["a"].Store({state:{},mutations:{},actions:{},modules:{authModule:te},plugins:[re.plugin]}),oe=n("f309");r["a"].use(oe["a"]);var ie=new oe["a"]({});r["a"].config.productionTip=!1,X.beforeEach((function(e,t,n){se.getters.logged||"Login"==e.name?n():n("/login")})),new r["a"]({router:X,store:se,vuetify:ie,render:function(e){return e(g)}}).$mount("#app")},"803a":function(e,t,n){e.exports=n.p+"img/googleIcon.10c25a60.svg"},8655:function(e,t,n){"use strict";var r=n("09a8"),s=n.n(r);s.a},"8ff8":function(e,t,n){"use strict";var r=n("0373"),s=n.n(r);s.a},9814:function(e){e.exports=JSON.parse('{"screen_login":{"alreadyAMember":"Already a member?","notAMemberYet":"Not a member yet?","signIn":"Log in","signUp":"Sign up","createAccount":"Create Account","email":"Email","password":"Password","passwordConfirmation":"Confirm password","moreThanNCharacters":"At least 8 characters","termsAndConditionsAgree":"I agree to all the statements included in the ","termsAndConditionsPage":"terms of service"}}')}});
//# sourceMappingURL=app.561d7f6c.js.map