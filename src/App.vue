<template>
  <div>
    <div class="grid outer-div" v-if="!isLogin" id="outer_id">
      <Header @clicked="sendDataToNavBar"></Header>
      <NavBar :isSmall="isSmall"></NavBar>
      <div class="inner-body">
        <router-view />
      </div>
    </div>
    <div v-if="isLogin">
      <Login />
    </div>
  </div>
</template>
<style lang="scss">
@font-face {
  font-family: "AJannatLT";
  src: url("./assets/Jannat_LT/light/AJannatLT.eot");
  src: url("./assets/Jannat_LT/light/AJannatLT.ttf");
}
@font-face {
  font-family: "AJannatLT";
  src: url("./assets/Jannat_LT/bold/AJannatLT-Bold.eot");
  src: url("./assets/Jannat_LT/bold/AJannatLT-Bold.ttf");
  font-weight: bold;
}
.justify-space-around {
  justify-content: space-evenly !important;
}
.grid-de-la-complaint {
  grid-template-columns: 50px auto auto auto auto 200px;
}
.grid-de-la-requests {
  grid-template-columns: 50px auto min-content min-content min-content min-content 200px;
}
.grid-de-la-logs {
  grid-template-columns: 80px auto auto 250px;
}
.grid-de-la-survey {
  grid-template-columns: 50px auto auto auto 200px;
}
.grid-de-la-notification {
  grid-template-columns: 50px auto auto max-content 200px;
}
.grid-de-la-mailing {
  grid-template-columns: auto auto auto 200px;
}
.grid-de-la-powers {
  grid-template-columns: 200px auto auto 200px;
}
.grid-de-la-ban {
  grid-template-columns: 40px 70px auto 200px 200px;
}
.grid-de-la-trainers {
  grid-template-columns: 40px 70px auto 200px 200px 200px;
}
.grid-de-la-trainees {
  grid-template-columns: 40px 70px auto 150px 150px 250px;
}
.black--bg {
  background-color: black !important;
}
.height-80 {
  height: 45px !important;
}
.height-50 {
  height: 50px;
}
.bottom-40p {
  bottom: 40%;
}
.max-content {
  width: max-content;
}
.maxwidth-350 {
  max-width: 350px;
}
.hidden {
  display: none;
}
.list-none {
  list-style-type: none;
}
.min-content {
  width: min-content;
}
.d-grid {
  display: grid;
}
.page-link {
  margin: 0px 10px;
  border-radius: 10px;
}
.height-75px {
  height: 75px;
}
.width-75px {
  width: 75px;
}
.height-100px {
  height: 100px;
}
.height-500px {
  height: 500px !important;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.border-radius-50 {
  border-radius: 50px;
}
.border-radius-12 {
  border-radius: 12px;
}
.border-on-focus:focus {
  transition: ease 0.3s;
  border-color: #acbbd0;
}
.btn {
  border: 0px !important;
  outline: none !important;
  height: auto;
}
.form-control {
  height: auto !important;
}
.search {
  background-color: transparent !important;
  border: 2px solid black !important;
}
.col-sm-3.position-relative {
  max-width: 250px !important;
}
.rounded-50 {
  border-radius: 50px !important;
}
.rounded-20 {
  border-radius: 20px !important;
}
.height-max {
  height: max-content !important;
}
.card-body {
  padding: 10px !important;
}
.right--10 {
  right: -10px;
}
.right-20 {
  right: 20px;
}
.bottom-25 {
  bottom: 25px;
}
.top-10 {
  top: 10px;
}

.top-16 {
  top: 16px;
}
.modal {
  margin-top: 100px !important;
  z-index: 999999 !important;
}
a {
  text-decoration: none;
}
.modal-content {
  margin-top: 50px;
}

//please do not use this class
.border-radius-20 {
  border-radius: 25px !important;
  padding-left: 7px;
  padding-top: 4px;
}
.rounded-100px {
  border-radius: 100px !important;
}
.fs--10 {
  font-size: 10px !important;
}
.fs--16 {
  font-size: 16px !important;
}
.fs--20 {
  font-size: 20px !important;
}
.black {
  color: black;
}
.black--bg {
  background-color: black;
}
.bold {
  font-weight: bold;
}
.right-30 {
  right: 30px;
}
.transparent {
  color: #6fdfd4;
}
.rounded-100 {
  border-radius: 100%;
  border-radius: 500000px !important;
}
.lightGray--bg {
  background: #f1f1f1;
}
.red--bg {
  background-image: linear-gradient(75deg, #ff7f2e 0%, #ff0044 133%);
}
.gray {
  color: #cacaca !important;
}
.mt--30 {
  margin-top: -10px;
}
.vertical-centered.centered {
  height: -webkit-fill-available;
  width: -webkit-fill-available;
}
.white {
  color: white !important;
}
.left-65 {
  left: 5%;
}
.height-100 {
  height: 100%;
}
.height-170 {
  height: 170px;
}
.outine-none {
  outline: none;
}
body {
  opacity: 1;
  overflow: overlay;
  font-size: 16px !important;
  font-family: "AJannatLT", sans-serif !important;
  background-image: linear-gradient(to top, #cad9f3, #eaf2ff) !important;
  padding: 0px;
  height: fit-content !important;
}
.centered {
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.lightBlue--bg {
  background-color: #edf9fd;
}
.lightBlue {
  color: #edf9fd;
}
.width-90 {
  width: 90% !important;
}
.primary--bg {
  background-image: linear-gradient(
    287deg,
    rgb(6, 232, 167),
    rgb(12, 158, 226)
  ) !important;
}
.primary--border {
  // border-image: linear-gradient(287deg, rgb(12, 158, 226), rgb(6, 232, 167)) !important;
  border: 1px solid rgb(12, 158, 226) !important;
}
.primary {
  background: linear-gradient(284deg, #0c9ee2, #06e8a7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #0c9ee2;
}
.vertical-centered {
  margin-top: auto;
  margin-bottom: auto;
}
.width-75 {
  width: 75% !important;
}
.width-100 {
  width: 100% !important;
}
.border-dashed {
  border-style: dashed;
  padding: 20px 10px 20px;
}
.user_block {
  font-size: 32px;
}
.mt-5p {
  margin-top: 5%;
}
.user_view {
  font-size: 62px;
  color: #8f8f8f;
}
.modal-dialog.dialog_width {
  width: 430px;
}
.modal-dialog.dialog_width2 {
  width: 380px;
}
@media screen and (max-height: 637px) {
  .nav-item {
    margin-bottom: 0px !important;
  }
  .nav-ul {
    margin-bottom: 0px !important;
  }
  .inner-body {
    padding-top: 5px !important;
  }
}
@media screen and (max-width: 1700px) {
  body {
    font-size: 1vw !important;
  }
  .pl-4,
  .px-4 {
    padding-left: 8px !important;
  }
}
@media screen and (max-width: 1500px) {
  body {
    font-size: 0.75vw !important;
  }
  .pt-3-5 {
    padding-top: 14px !important;
  }
}
@media screen and (max-height: 700px) {
  .card-left {
    padding-top: 0.3rem !important;
    padding-bottom: 0.3rem !important;
  }
  body {
    font-size: 2vh !important;
  }
}
@media screen and (max-height: 660px) {
  .inner-body {
    padding-top: 20px;
  }
}
.bottom-15 {
  bottom: 15px;
}
.white--bg {
  background-color: white;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.02);
}
.card-left {
  border-radius: 60px 20px 20px 20px !important;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.inner-body {
  grid-area: innerbody;
  height: fit-content;
  min-height: 100vh !important;
  padding-left: 20px;
  padding-top: 3rem;
}
.grid {
  display: grid;
}
.outer-div {
  grid-template-columns: 1px auto;
  grid-column-gap: 249px;
  grid-template-rows: 20vh auto;
  grid-template-areas: "heads innerbody" "navigation innerbody";
  transition: 0.3s ease;
}
.primary-2-border {
  border: 3px solid rgb(12, 158, 226) !important;
}
.bigger_outer_div {
  grid-column-gap: 49px;
}
.card {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  z-index: 0 !important;
  border: 0px;
}
input {
  z-index: 0 !important;
}
.pt-3-5 {
  padding-top: 10px;
}
ul {
  padding-left: 0;
  margin: 20px 20px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 120px;
  height: 40px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  font-weight: bold;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 8px;
  bottom: 7px;
  background-image: linear-gradient(51deg, #ff0044 0%, #ff7f2e 124%);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: white;
}
input:focus + .slider {
  box-shadow: 0 0 1px white;
}
input:checked + .slider:before {
  -webkit-transform: translateX(75px);
  -ms-transform: translateX(75px);
  transform: translateX(75px);
  background-image: linear-gradient(130deg, #06e8a7, #0c9ee2) !important;
}
input:checked + .slider {
  border: 1px solid #24e8a6;
}
input:checked + .slider .enabled {
  display: block;
}
input:checked + .slider .disabled {
  display: none;
}
input + .slider .enabled {
  display: none;
}
input + .slider .disabled {
  display: block;
  margin-left: 30px;
  background: linear-gradient(71deg, #ff0044 0%, #ff7f2e 132%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
input + .slider {
  border: 1px solid red;
}
.red--bg {
  background-image: linear-gradient(65deg, #ff0044 0%, #ff7f2e 130%) !important;
}
.red--border {
  border: 1px solid #ff0044 !important;
}
.red {
  background: linear-gradient(65deg, #ff0044 0%, #ff7f2e 130%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  color: #ff0044 !important;
}
.black--border {
  border: 1px solid black !important;
}
.gray--border-1 {
  border: 1.5px solid #919191 !important;
}
.gray--border {
  border: 1px solid #919191 !important;
}
.gray-dashed-border {
  border: 1px dashed #cacaca;
}
.gray--color {
  color: #919191;
}
.slider.round {
  border-radius: 34px;
}
.width-33 {
  width: 33%;
  max-width: 180px;
}
.slider.round:before {
  border-radius: 50%;
}
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfile + label {
  color: darkgray;
  display: inline-block;
}
.inputfile + label {
  cursor: pointer; /* "hand" cursor */
}

input.disabled {
  border: none;
  border-radius: 20px;
  width: 250px;
  height: 50px;
  color: gray;
}

.complaint_view {
  width: 120px;
  font-size: 14px;
  font-weight: bold;
  padding-top: 12px;
}

.mr-97 {
  margin-right: 97px;
}

// css for custom material design input
.group {
  position: relative;
  margin-top: 20px;
  width: 75%;
}

button:focus {
  box-shadow: unset !important;
}

.border--none {
  border: none !important;
}
.shadow--none {
  box-shadow: none !important;
}
.group input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border: 1.5px solid #acbbd0;
  border-radius: 25px;
  outline: none;
}
.group input:focus {
  border-color: #06e8a7;
}
.group label {
  color: #acbbd0;
  font-size: 13.5px;
  position: absolute;
  pointer-events: none;
  left: 17px;
  font-weight: bold;
  top: 16px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}
.group input:focus ~ label,
.group input:valid ~ label {
  top: -9px;
  left: 20px;
  background-color: #fff;
  padding: 0 5px;
  font-size: 14px;
  color: #19bdc1;
}
.group .highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}
.group input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

.modal-body textarea {
  border: 1.5px solid #acbbd0;
  color: #acbbd0;
}

.modal-body select {
  border: 1.5px solid #acbbd0 !important;
  font-size: 13.5px !important;
  font-weight: bold;
  color: #acbbd0;
  -webkit-appearance: none;
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "";
  background: url(/img/chevron.5429b6f7.svg);
  width: 20px;
  height: 20px;
  background-size: 11px;
  background-repeat: no-repeat;
  position: absolute;
  right: 10px;
  top: 18px;
  pointer-events: none;
}

.modal-content {
  border-radius: 20px !important;
}

//scroll background
.aramco-scrollbar::-webkit-scrollbar {
  width: 8px;
  background-color: rgba(37, 74, 93, 0.1);
}

.aramco-scrollbar::-webkit-scrollbar-thumb {
  background-color: #254a5d;
  border-radius: 20px;
}

.banlog_avtar {
  display: inline-block;
  background-color: lightgray;
  height: 58px;
  width: 58px;
  border-radius: 50%;
  text-align: center;
}

.banlog_text {
  position: absolute;
  top: 25px;
}

.banlog_label {
  font-size: 13px;
  width: 140px;
  padding-top: 28px;
}

.avtar_main {
  position: relative;
  width: 250px;
  border-radius: 50px;
  background-image: linear-gradient(
    to left,
    rgba(202, 217, 243, 0.01),
    rgba(234, 242, 255, 0.5)
  );
}

.modal-content button {
  font-size: 14px;
  padding: 12px 16px;
}
</style>
<script>
import NavBar from "./components/NavBar.vue";
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";

export default {
  components: {
    NavBar: NavBar,
    Header: Header,
    Login: Login
  },
  data() {
    return {
      isLogin: false,
      isSmall: false
    };
  },
  methods: {
    sendDataToNavBar(value) {
      this.isSmall = value;
      document.getElementById("outer_id").classList.toggle("bigger_outer_div");
    }
  }
};
</script>
