<template>
  <div
    style="margin-top: -100px; background-image: linear-gradient(95deg, rgb(127, 191, 80, 0.8) 0%, rgba(0, 174, 237, 1)); height: 100%">
    <img src="../assets/Logo.svg" height="100%" width="100%" />

    <div class="login_div_main text-center">
      <img src="@/assets/Logo.png" width="72px;" class="mb-3">
      <div  class="login_div rounded-20 white--bg pt-5">
          <div class="group maxwidth-350 mx-auto">
          <input type="email" class="pl-4" required />
          <span class="highlight"></span>
          <label>E-mail</label>
        </div>

        <div class="group maxwidth-350 mx-auto">
          <input type="password" class="pl-4" required />
          <span class="highlight"></span>
          <label>Password</label>
          <i class="fas fa-eye "></i>
        </div>

        <div class="maxwidth-350 mx-auto pt-3">
          <input type="checkbox" id="rememberme" name="rememberme">
          <label for="rememberme" class="pl-2 gray"> Remember me</label>

          <a href="" class=" fs--12 float-right">Forgot you password ?</a>
        </div>

        <div class="maxwidth-350 mx-auto mt-3">
          <button type="button" class="btn white width-100 btn-no-border primary--bg btn-lg">
              LOGIN
          </button>
        </div> 
      </div>
      

    </div>

  </div>
</template>
<style>
.login_div_main{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
}

.login_div{
  width: 454px;
  height: 370px;
}

.login_div .group input{
  border-radius: 10px !important;
}

.login_div button{
  border-radius: 12px;
}

.group .fa-eye{
  position: absolute;
  top: 16px;
  right: 18px;
  color: #acbbd0;
}
</style>
<script>
import Vue from "vue";
export default{}
</script>
