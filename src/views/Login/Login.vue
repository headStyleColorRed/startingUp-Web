<template>
  <div class="login">
    <!--- - - L E F T   C O N T A I N E R - - - -->
    <div class="leftContainer">
      <!--- - - left container top - - - -->
      <div class="leftContainer-top">
        <p v-if="isShowingLogin">
          {{Strings.notAMemberYet}}
          <b
            class="header_login"
            v-on:click="changeLoginScreen()"
          >{{Strings.signUp}}</b>
        </p>
        <p v-else>
          {{Strings.alreadyAMember}}
          <b
            class="header_login"
            v-on:click="changeLoginScreen()"
          >{{Strings.signIn}}</b>
        </p>
      </div>

      <!--- - - left container medium - - - -->
      <div class="leftContainer-medium">
        <h2 class="leftContainer-medium-title">{{isShowingLogin ? Strings.signIn : Strings.signUp}}</h2>
        <login-form :loginStatus="isShowingLogin" v-on:launchLoginProcess="processUserInputData" />
      </div>

      <!--- - - left container WEB bottom - - - -->
      <div class="leftContainer-bottom-web">
        <div class="divisorsContainer-web">
          <hr class="divisors-web" />
          <p id="divisorText-web">Or</p>
          <hr class="divisors-web" />
        </div>
        <div class="externalLoginButtons-web">
          <div class="externalLogin-web">
            <img src="../../assets/Photos/googleIcon.svg" alt />
            <span>{{Strings.signInWithGoogle}}</span>
          </div>
          <div class="externalLogin-web">
            <img src="../../assets/Photos/linkedinIcon.svg" alt />
            <span>{{Strings.signInWithLinkedin}}</span>
          </div>
        </div>
      </div>

      <!--- - - left container MOBILE bottom - - - -->
      <div :style="mobileStyle" class="leftContainer-bottom-mobile">
        <div class="divisorsContainer-mobile">
          <hr class="divisors-mobile" />
          <p id="divisorText-mobile">Or</p>
          <hr class="divisors-mobile" />
        </div>
        <div class="externalLoginButtonsMobile">
          <div class="externalLogin-mobile">
            <img src="../../assets/Photos/googleIcon.svg" alt />
          </div>
          <div class="externalLogin-mobile">
            <img src="../../assets/Photos/linkedinIcon.svg" alt />
          </div>
        </div>
      </div>
    </div>

    <!--- - - R I G H T   C O N T A I N E R  - - - -->
    <div class="rightContainer">
      <p class="inspirationalQuote">
        CREATE A
        <span class="inspirationalQuoteEnding">PROJECT</span>
        <br />FIND A
        <span class="inspirationalQuoteEnding">TEAM</span>
        <br />LAUNCH YOUR
        <span class="inspirationalQuoteEnding">STARTUP</span>
      </p>
    </div>
  </div>
</template>

<script>
import stringsImport from "../../assets/Strings_en.json";
import loginForm from "../../components/loginForm.vue";
import validation from "../../functionalities/validation.js";
import login_services from "../../Services/Login/login_services.js";

export default {
  name: "login",
  data() {
    return {
      isShowingLogin: true,
      Strings: new Object(),
      mobileStyle: ""
    };
  },
  mounted() {
    this.Strings = stringsImport.screen_login;
  },
  methods: {
    changeLoginScreen() {
      this.isShowingLogin = !this.isShowingLogin;
    },
    processUserInputData(userData) {
      if (this.isShowingLogin) this.parseLoginData(userData);
      else this.parseRegisteringData(userData);
    },
    parseLoginData(userData) {
      let validationResult = validation.validateLoginData(userData);
      if (!validationResult.isError) {
        login_services
          .logUser(userData.username, userData.password)
          .then(res => {
            if (res.code == "200" || res.includes("already"))
              this.logUser(userData);
            else console.log("server: " + res);
          });
      } else {
        console.log(validationResult.errorMessage);
      }
    },
    parseRegisteringData(userData) {
		this.registerUser()
    //   let validationResult = validation.validateRegisterData(userData);
    //   if (!validationResult.isError) {
    //     login_services
    //       .registerUser(
    //         userData.username,
    //         userData.password,
    //         userData.passwordConfirmation
    //       )
    //       .then(res => {
    //         if (res.code == "200") this.registerUser(userData)
    //         else console.log("server: " + res.errmsg);
    //       });
    //   } else {
    //     console.log(validationResult.errorMessage);
    //   }
    },
    logUser(userData) {
      this.$store.commit("setUserLoginData", userData);
      this.$router.push("/");
    },
    registerUser(userData) {
    //   this.$store.commit("setUserLoginData", userData);
      this.$router.push("/register");
    }
  },
  watch: {
    isShowingLogin(val) {
      if (val == false) this.mobileStyle = "display: none;";
      else this.mobileStyle = "";
    }
  },
  components: {
    "login-form": loginForm
  }
};
</script>

<style scoped>
/*-------------- IPHONE 5 ----------------*/
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait) {
  .login {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1.25fr 0;
    color: #666666;
  }

  /* - - - - - - - - L E F T   C O N T A I N E R - - - - - */
  .leftContainer {
    position: relative;
    background-color: rgb(255, 255, 255);
    height: 100vh;
    display: grid;
    grid-template-rows: 0.5fr 4fr 1fr;
  }
  /* - - - left container top - - - */
  .leftContainer-top p {
    padding: 2rem;
    padding-bottom: 0rem;
    text-align: right;
  }

  .header_login {
    font-weight: 400;
    color: rgb(61, 110, 5);
    cursor: pointer;
  }

  /* - - - left container medium - - - */
  .leftContainer-medium {
    position: relative;
    justify-self: center;
  }

  .leftContainer-medium-title {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  /* - - - left container bottom - - - */
  .leftContainer-bottom-web {
    display: none;
  }

  .leftContainer-bottom-mobile {
    display: grid;
  }

  .divisorsContainer-mobile {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
  }

  .divisors-mobile {
    border: 0.1px solid rgb(223, 223, 223);
  }

  #divisorText-mobile {
    text-align: center;
    margin-top: -0.6rem;
    margin-left: -0.2rem;
    color: rgb(179, 179, 179);
    font-size: 0.9rem;
  }

  .externalLoginButtonsMobile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 3rem;
  }
  .externalLogin-mobile {
    justify-self: center;
  }
  .externalLogin-mobile img {
    height: 2rem;
  }

  /* - - - - - - - R I G H T   C O N T A I N E R - - - - - */
  .rightContainer {
    display: none;
  }
}
/*-------------- IPHONE 6 ----------------*/
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
  .leftContainer {
    grid-template-rows: 1fr 4fr 1fr;
  }
}
/*---------------- IPAD ----------------*/
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .login {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1.25fr 0;
    color: #666666;
  }

  /* - - - - - - - - L E F T   C O N T A I N E R - - - - - */
  .leftContainer {
    position: relative;
    background-color: rgb(255, 255, 255);
    height: 100vh;
    display: grid;
    grid-template-rows: 1.5fr 4fr 1fr;
  }
  /* - - - left container top - - - */
  .leftContainer-top p {
    padding: 2rem;
    padding-bottom: 0rem;
    text-align: right;
  }

  .header_login {
    font-weight: 400;
    color: rgb(61, 110, 5);
    cursor: pointer;
  }

  /* - - - left container medium - - - */
  .leftContainer-medium {
    position: relative;
    justify-self: center;
  }

  .leftContainer-medium-title {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  /* - - - left container bottom - - - */
  .leftContainer-bottom-web {
    display: none;
  }

  .leftContainer-bottom-mobile {
    display: grid;
  }

  .divisorsContainer-mobile {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
  }

  .divisors-mobile {
    border: 0.1px solid rgb(223, 223, 223);
  }

  #divisorText-mobile {
    text-align: center;
    margin-top: -0.6rem;
    margin-left: -0.2rem;
    color: rgb(179, 179, 179);
    font-size: 0.9rem;
  }

  .externalLoginButtonsMobile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 3rem;
  }
  .externalLogin-mobile {
    justify-self: center;
  }
  .externalLogin-mobile img {
    height: 2rem;
  }

  /* - - - - - - - R I G H T   C O N T A I N E R - - - - - */
  .rightContainer {
    display: none;
  }
}
/*-------------- HALF SCREEN ----------------*/
@media only screen and (min-device-width: 500px) and (max-width: 1000px) {
  .login {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1.25fr 0;
    color: #666666;
  }

  /* - - - - - - - - L E F T   C O N T A I N E R - - - - - */
  .leftContainer {
    position: relative;
    background-color: rgb(255, 255, 255);
    height: 100vh;
    display: grid;
    grid-template-rows: 1.5fr 4fr 1fr;
  }
  /* - - - left container top - - - */
  .leftContainer-top p {
    padding: 2rem;
    padding-bottom: 0rem;
    text-align: right;
  }

  .header_login {
    font-weight: 400;
    color: rgb(61, 110, 5);
    cursor: pointer;
  }

  /* - - - left container medium - - - */
  .leftContainer-medium {
    position: relative;
    justify-self: center;
  }

  .leftContainer-medium-title {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  /* - - - left container bottom - - - */
  .leftContainer-bottom-web {
    display: none;
  }

  .leftContainer-bottom-mobile {
    display: grid;
  }

  .divisorsContainer-mobile {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
  }

  .divisors-mobile {
    border: 0.1px solid rgb(223, 223, 223);
  }

  #divisorText-mobile {
    text-align: center;
    margin-top: -0.6rem;
    margin-left: -0.2rem;
    color: rgb(179, 179, 179);
    font-size: 0.9rem;
  }

  .externalLoginButtonsMobile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 3rem;
  }
  .externalLogin-mobile {
    justify-self: center;
  }
  .externalLogin-mobile img {
    height: 2rem;
  }

  /* - - - - - - - R I G H T   C O N T A I N E R - - - - - */
  .rightContainer {
    display: none;
  }
}
/*-------------- FULL SCREEN ----------------*/
@media only screen and (min-width: 1001px) and (max-width: 1450px) {
  .login {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    color: #666666;
  }

  /* - - - - - - - - L E F T   C O N T A I N E R - - - - - */
  .leftContainer {
    position: relative;
    background-color: rgb(255, 255, 255);
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 4fr 1fr;
  }
  /* - - - left container top - - - */
  .leftContainer-top p {
    padding: 2rem;
    text-align: right;
  }

  .header_login {
    font-weight: 400;
    color: rgb(61, 110, 5);
    cursor: pointer;
  }

  /* - - - left container medium - - - */
  .leftContainer-medium {
    position: relative;
    padding: 0 10rem;
  }

  .leftContainer-medium-title {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  /* - - - left container bottom - - - */
  .leftContainer-bottom-mobile {
	  display: none;
  }
  .leftContainer-bottom-web {
    padding: 0 10rem;
  }

  .divisorsContainer-web {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
  }

  .divisors-web {
    border: 0.1px solid rgb(223, 223, 223);
  }

  #divisorText-web {
    text-align: center;
    margin-top: -0.6rem;
    margin-left: -0.2rem;
    color: rgb(179, 179, 179);
    font-size: 0.9rem;
  }

  .externalLoginButtons-web {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  .externalLogin-web {
    display: grid;
    border-radius: 3px;
    grid-template-columns: 1fr 5fr;
    border: 1px solid rgb(175, 175, 175);
    padding: 0.7rem;
    cursor: pointer;
  }

  .externalLogin-web:hover {
    border: none;
    background-color: rgb(221, 221, 221);
  }

  .externalLogin-web img {
    height: 1.3rem;
    justify-self: center;
    align-self: center;
  }

  .externalLogin-web span {
    justify-self: center;
    align-self: center;
  }

  /* - - - - - - - R I G H T   C O N T A I N E R - - - - - */
  .rightContainer {
    background-color: rgb(238, 238, 238);
    height: 100vh;
    position: relative;
  }

  .inspirationalQuote {
    position: absolute;
    top: 20vh;
    left: 2vw;
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .inspirationalQuoteEnding {
    color: rgb(61, 110, 5);
    font-weight: 400;
  }
}
/*-------------- MONITOR SCREEN ----------------*/
@media only screen and (min-width: 1450px)  {
  .login {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1.25fr 1fr;
    color: #666666;
  }

  /* - - - - - - - - L E F T   C O N T A I N E R - - - - - */
  .leftContainer {
    position: relative;
    background-color: rgb(255, 255, 255);
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 4fr 1fr;
  }
  /* - - - left container top - - - */
  .leftContainer-top p {
    padding: 2rem;
    text-align: right;
  }

  .header_login {
    font-weight: 400;
    color: rgb(61, 110, 5);
    cursor: pointer;
  }

  /* - - - left container medium - - - */
  .leftContainer-medium {
	  justify-self: center;
  }

  .leftContainer-medium-title {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  /* - - - left container bottom - - - */
  .leftContainer-bottom-mobile {
	  display: none;
  }
  .leftContainer-bottom-web {
    padding: 0 10rem;
  }

  .divisorsContainer-web {
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
  }

  .divisors-web {
    border: 0.1px solid rgb(223, 223, 223);
  }

  #divisorText-web {
    text-align: center;
    margin-top: -0.6rem;
    margin-left: -0.2rem;
    color: rgb(179, 179, 179);
    font-size: 0.9rem;
  }

  .externalLoginButtons-web {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  .externalLogin-web {
    display: grid;
    border-radius: 3px;
    grid-template-columns: 1fr 5fr;
    border: 1px solid rgb(175, 175, 175);
    padding: 0.7rem 2rem;
    cursor: pointer;
	justify-self: center;
  }

  .externalLogin-web:hover {
    border: none;
    background-color: rgb(221, 221, 221);
  }

  .externalLogin-web img {
    height: 1.3rem;
    justify-self: center;
    align-self: center;
  }

  .externalLogin-web span {
    justify-self: center;
    align-self: center;
  }

  /* - - - - - - - R I G H T   C O N T A I N E R - - - - - */
  .rightContainer {
    background-color: rgb(238, 238, 238);
    height: 100vh;
    position: relative;
  }

  .inspirationalQuote {
    position: absolute;
    top: 15vh;
    left: 4vw;
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .inspirationalQuoteEnding {
    color: rgb(61, 110, 5);
    font-weight: 400;
  }
}
</style>


