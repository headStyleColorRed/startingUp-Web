(function(e){function n(n){for(var r,i,a=n[0],c=n[1],u=n[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(n);while(p.length)p.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==s[c]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},s={app:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var l=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0282":function(e,n,t){function r(e){var n={isError:!1,errorMessage:new String};return o(e.username).length>1?(n.isError=!0,n.errorMessage=o(e.username),n):i(e.password).length>1?(n.isError=!0,n.errorMessage=i(e.password),n):n}function s(e){var n={isError:!1,errorMessage:new String};return o(e.username).length>1?(n.isError=!0,n.errorMessage=o(e.username),n):i(e.password).length>1?(n.isError=!0,n.errorMessage=i(e.password),n):e.password!==e.passwordConfirmation?(n.isError=!0,n.errorMessage="Passwords do not match",n):n}function o(e){var n="";return e?""==e?n="Email error: Empty username":e.length<5||e.length>40?(console.log(e.length),n="Email error: Email must have 5-40 characters"):n=e.includes("@")?e.includes(".com")?"":"Email error: Email is not valid, missing .com":"Email error: Email is not valid, missing @":n="Email error: Email field missing",n}function i(e){if(!e)return"Password error: Password field missing";var n=/[a-z]/g;if(!e.match(n))return"Password error: There are no lowercase letter";var t=/[A-Z]/g;if(!e.match(t))return"Password error: There are no upercase letter";var r=/[0-9]/g;return e.match(r)?!e.length>=8?"Password error: Password is not long enough":"":"Password error: There are no numbers"}t("caad"),t("ac1f"),t("2532"),t("466d"),e.exports={validateLoginData:r,validateRegisterData:s}},"0373":function(e,n,t){},"09a8":function(e,n,t){},2078:function(e,n,t){e.exports=t.p+"img/linkedinIcon.6c8f5a24.svg"},"56d7":function(e,n,t){"use strict";t.r(n);t("b0c0"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("router-view")],1)},o=[],i={name:"App",components:{},data:function(){return{}}},a=i,c=t("2877"),u=t("6544"),l=t.n(u),d=t("7496"),p=Object(c["a"])(a,s,o,!1,null,null,null),g=p.exports;l()(p,{VApp:d["a"]});var m=t("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=t("8c4f"),h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("h1",[e._v("Hello home!")]),t("v-btn",{attrs:{color:"green"},on:{click:function(n){return e.logOut()}}},[e._v("Log Out")])],1)},v=[],w=t("9814"),C=(t("d3b7"),t("96cf"),t("1da1")),b=t("bc3a"),A=t.n(b),_={local:"localhost",dev:"15.236.191.15",pro:""},S=_.dev;function y(e,n){return T.apply(this,arguments)}function T(){return T=Object(C["a"])(regeneratorRuntime.mark((function e(n,t){var r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={username:n,password:t},s=new Promise((function(e,n){A.a.post("http://".concat(S,":8888/login/log_user"),r).then((function(n){e(n.data)})).catch((function(e){n(e.data)}))})),e.next=4,s;case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function E(e,n,t){return x.apply(this,arguments)}function x(){return x=Object(C["a"])(regeneratorRuntime.mark((function e(n,t,r){var s,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={username:n,password:t,passwordConfirmation:r},o=new Promise((function(e,n){A.a.post("http://".concat(S,":8888/register/register_user"),s).then((function(n){e(n.data)})).catch((function(e){n(e.data)}))})),e.next=4,o;case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function O(e,n){return P.apply(this,arguments)}function P(){return P=Object(C["a"])(regeneratorRuntime.mark((function e(n,t){var r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={username:n,password:t},s=new Promise((function(e,n){A.a.post("http://".concat(S,":8888/logout/logout_user"),r).then((function(n){e(n.data)})).catch((function(e){n(e.data)}))})),e.next=4,s;case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function L(){A.a.post("http://localhost:8888/auth/google").then((function(e){return console.log(e),!0})).catch((function(e){return console.log(e),!1}))}var k={logUser:y,registerUser:E,logWithGoogle:L,logOut:O},j={name:"Home",data:function(){return{}},mounted:function(){},methods:{logOut:function(){var e=this,n={username:this.$store.getters.user,password:this.$store.getters.password};k.logOut(n.username,n.password).then((function(n){e.$store.commit("resetAuthState"),window.localStorage.clear(),e.$router.push("/login")}))}},components:{}},M=j,$=t("8336"),U=Object(c["a"])(M,h,v,!1,null,"0295b896",null),N=U.exports;l()(U,{VBtn:$["a"]});var R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login"},[t("div",{staticClass:"leftContainer"},[t("div",{staticClass:"leftContainer-top"},[e.isShowingLogin?t("p",[e._v(" "+e._s(e.Strings.notAMemberYet)+" "),t("b",{staticClass:"header_login",on:{click:function(n){return e.changeLoginScreen()}}},[e._v(e._s(e.Strings.signUp))])]):t("p",[e._v(" "+e._s(e.Strings.alreadyAMember)+" "),t("b",{staticClass:"header_login",on:{click:function(n){return e.changeLoginScreen()}}},[e._v(e._s(e.Strings.signIn))])])]),t("div",{staticClass:"leftContainer-medium"},[t("h2",{staticClass:"leftContainer-medium-title"},[e._v(e._s(e.isShowingLogin?e.Strings.signIn:e.Strings.signUp))]),t("login-form",{attrs:{loginStatus:e.isShowingLogin},on:{launchLoginProcess:e.processUserInputData}})],1),e._m(0)]),e._m(1)])},D=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"leftContainer-bottom"},[r("div",{staticClass:"divisorsContainer"},[r("hr",{staticClass:"divisors"}),r("p",{attrs:{id:"divisorText"}},[e._v("Or")]),r("hr",{staticClass:"divisors"})]),r("div",{staticClass:"externalLoginButtons"},[r("div",{staticClass:"externalLogin"},[r("img",{attrs:{src:t("803a"),alt:""}}),r("span",[e._v("Sign up with Google")])]),r("div",{staticClass:"externalLogin"},[r("img",{attrs:{src:t("2078"),alt:""}}),r("span",[e._v("Sign up with Linkedin")])])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"rightContainer"},[t("p",{staticClass:"inspirationalQuote"},[e._v(" CREATE A "),t("span",{staticClass:"inspirationalQuoteEnding"},[e._v("PROJECT")]),t("br"),e._v("FIND A "),t("span",{staticClass:"inspirationalQuoteEnding"},[e._v("TEAM")]),t("br"),e._v("LAUNCH YOUR "),t("span",{staticClass:"inspirationalQuoteEnding"},[e._v("STARTUP")])])])}],I=(t("caad"),t("2532"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"loginForm"},[t("div",{staticClass:"inputWrapper inputEmail"},[t("label",[e._v(e._s(e.Strings.email))]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"inputFields shadow",attrs:{type:"text"},domProps:{value:e.user.username},on:{input:function(n){n.target.composing||e.$set(e.user,"username",n.target.value)}}})]),t("div",{staticClass:"inputWrapper inputPassword"},[t("label",[e._v(e._s(e.Strings.password))]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"inputFields shadow",attrs:{type:"password"},domProps:{value:e.user.password},on:{input:function(n){n.target.composing||e.$set(e.user,"password",n.target.value)}}})]),e.loginStatus?e._e():t("div",{staticClass:"inputWrapper inputConfirmPassword"},[t("label",[e._v(e._s(e.Strings.passwordConfirmation))]),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.passwordConfirmation,expression:"user.passwordConfirmation"}],staticClass:"inputFields shadow",attrs:{placeholder:e.Strings.moreThanNCharacters,type:"password"},domProps:{value:e.user.passwordConfirmation},on:{input:function(n){n.target.composing||e.$set(e.user,"passwordConfirmation",n.target.value)}}})]),e.loginStatus?e._e():t("div",{staticClass:"termsAndConditions"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isTermsAndConditionsAccepted,expression:"isTermsAndConditionsAccepted"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isTermsAndConditionsAccepted)?e._i(e.isTermsAndConditionsAccepted,null)>-1:e.isTermsAndConditionsAccepted},on:{click:function(n){return e.checkTermsAndConditions()},change:function(n){var t=e.isTermsAndConditionsAccepted,r=n.target,s=!!r.checked;if(Array.isArray(t)){var o=null,i=e._i(t,o);r.checked?i<0&&(e.isTermsAndConditionsAccepted=t.concat([o])):i>-1&&(e.isTermsAndConditionsAccepted=t.slice(0,i).concat(t.slice(i+1)))}else e.isTermsAndConditionsAccepted=s}}}),t("span",{staticClass:"termsAndConditionsText"},[e._v(" "+e._s(e.Strings.termsAndConditionsAgree)+" "),t("b",{staticClass:"termsOfService",on:{click:function(n){return e.goToTermsAndConditions()}}},[e._v(e._s(e.Strings.termsAndConditionsPage))])])]),t("div",{staticClass:"buttonWrapper"},[t("div",{staticClass:"buttonContainer",on:{click:function(n){return e.parseInput()}}},[e.loginStatus?t("p",{staticClass:"buttonText"},[e._v(e._s(e.Strings.signIn))]):t("p",{staticClass:"buttonText"},[e._v(e._s(e.Strings.createAccount))])])])])}),F=[],W={props:{loginStatus:{type:Boolean,required:!0}},name:"loginForm",data:function(){return{isTermsAndConditionsAccepted:!1,Strings:new Object,user:{username:"irlandesmajere@gmail.com",password:"Navidad1",passwordConfirmation:"Navidad1",role:"user"}}},mounted:function(){this.Strings=w.screen_login},methods:{changeLoginScreen:function(){this.loginStatus=!this.loginStatus},checkTermsAndConditions:function(){this.isTermsAndConditionsAccepted=!this.isTermsAndConditionsAccepted,console.log(this.isTermsAndConditionsAccepted)},goToTermsAndConditions:function(){},parseInput:function(){this.loginStatus||this.isTermsAndConditionsAccepted?this.$emit("launchLoginProcess",this.user):alert("You must accept terms and conditions")}},components:{}},B=W,H=(t("8ff8"),Object(c["a"])(B,I,F,!1,null,"f4f5b6e4",null)),J=H.exports,Q=t("0282"),Y=t.n(Q),q={name:"login",data:function(){return{isShowingLogin:!0,Strings:new Object}},mounted:function(){this.Strings=w.screen_login},methods:{changeLoginScreen:function(){this.isShowingLogin=!this.isShowingLogin},processUserInputData:function(e){this.isShowingLogin?this.parseLoginData(e):this.parseRegisteringData(e)},parseLoginData:function(e){var n=this,t=Y.a.validateLoginData(e);t.isError?console.log(t.errorMessage):k.logUser(e.username,e.password).then((function(t){"200"==t.code||t.includes("already")?n.logUser(e):console.log("server: "+t)}))},parseRegisteringData:function(e){var n=Y.a.validateRegisterData(e);n.isError?console.log(n.errorMessage):k.registerUser(e.username,e.password,e.passwordConfirmation).then((function(e){"200"==e.code?location.reload():console.log("server: "+e)}))},logUser:function(e){this.$store.commit("setUserLoginData",e),this.$router.push("/")}},components:{"login-form":J}},G=q,V=(t("8655"),Object(c["a"])(G,R,D,!1,null,"7e4dd59c",null)),z=V.exports;r["a"].use(f["a"]);var Z=[{path:"/",name:"Home",component:N,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:z},{path:"*",redirect:"/login"}],K=new f["a"]({mode:"history",base:"/",routes:Z}),X=K,ee=t("2f62"),ne={state:{user:null,password:null,role:"user",logged:!1},mutations:{setUserLoginData:function(e,n){e.user=n.username,e.password=n.password,e.role=n.role,e.logged=!0},resetAuthState:function(e){e.user=null,e.password=null,e.role=null,e.logged=!1}},getters:{logged:function(e){return e.logged},role:function(e){return e.role},user:function(e){return e.user},password:function(e){return e.password}}},te=t("bfa9"),re=new te["a"]({key:"my-app",storage:localStorage});r["a"].use(ee["a"]);var se=new ee["a"].Store({state:{},mutations:{},actions:{},modules:{authModule:ne},plugins:[re.plugin]}),oe=t("f309");r["a"].use(oe["a"]);var ie=new oe["a"]({});r["a"].config.productionTip=!1,X.beforeEach((function(e,n,t){se.getters.logged||"Login"==e.name?t():t("/login")})),new r["a"]({router:X,store:se,vuetify:ie,render:function(e){return e(g)}}).$mount("#app")},"803a":function(e,n,t){e.exports=t.p+"img/googleIcon.10c25a60.svg"},8655:function(e,n,t){"use strict";var r=t("09a8"),s=t.n(r);s.a},"8ff8":function(e,n,t){"use strict";var r=t("0373"),s=t.n(r);s.a},9814:function(e){e.exports=JSON.parse('{"screen_login":{"alreadyAMember":"Already a member?","notAMemberYet":"Not a member yet?","signIn":"Log in","signUp":"Sign up","createAccount":"Create Account","email":"Email","password":"Password","passwordConfirmation":"Confirm password","moreThanNCharacters":"At least 8 characters","termsAndConditionsAgree":"I agree to all the statements included in the ","termsAndConditionsPage":"terms of service"}}')}});
//# sourceMappingURL=app.2e8019f2.js.map