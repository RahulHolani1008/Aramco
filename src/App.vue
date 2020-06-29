<template>
  <div class="grid outer-div">
    <Header></Header>
    <NavBar></NavBar>
    <div class="inner-body">
      <router-view />
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
.z-1000 {
  z-index: 1000;
}
.text-center {
  text-align: center;
}
.justify-space-around {
  justify-content: space-evenly !important;
}
.justify-space-between {
  justify-content: space-between !important;
}
.grid-de-la-dept {
  grid-template-columns: 80px auto 225px;
}
.grid-de-la-programs {
  grid-template-columns: 80px auto 150px auto;
}
.grid-de-la-scientific-people {
  grid-template-columns: 60px auto 300px;
}
.grid-de-la-scientific-assessment {
  grid-template-columns: auto 200px 255px;
}
.grid-de-la-scientific-sessions {
  grid-template-columns: auto 180px 220px 50px;
}
.grid-de-la-tnc {
  grid-template-columns: 50px auto auto 200px;
}
.grid-de-la-faq {
  grid-template-columns: 50px auto auto 200px;
}
.grid-de-la-setup {
  grid-template-columns: 50px auto auto auto 200px;
}
.grid-de-la-complaint {
  grid-template-columns: 50px auto auto auto auto 200px;
}
.grid-de-la-logs {
  grid-template-columns: 80px auto auto auto;
}
.grid-de-la-survey {
  grid-template-columns: 50px auto auto auto auto;
}
.yellow--bg {
  background-color: #f6b900;
}
.height-80 {
  height: 80% !important;
}
.bottom-40p {
  bottom: 40%;
}
.max-content {
  width: max-content;
}
.hidden {
  display: none;
}
#button {
  outline: 0px none !important;
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
.page-link{
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
.width-100px {
  width: 100px;
}
.border-radius-50 {
  border-radius: 50px;
}
.btn {
  border: 0px !important;
  outline: none !important;
  height: auto;
}
.btn {
  outline: 0px;
}
.form-control {
  height: auto !important;
}
.search {
  background-color: #e4edfd !important;
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
.modal {
  margin-top: 100px !important;
}
a {
  text-decoration: none;
}
.modal-content {
  margin-top: 50px;
}
.border-radius-20 {
  border-radius: 20px;
}
.width-100 {
  width: 100%;
}
.rounded-100px {
  border-radius: 100px !important;
}
.fs--10 {
  font-size: 10px !important;
}
.fs--16 {
  font-size: 16pt;
}
.fs--28 {
  font-size: 28px;
}
.black {
  color: black;
}
.ml-50 {
  margin-left: 70px;
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
.gray {
  color: #cacaca !important;
}
.fs--10 {
  font-size: 10px;
}
.mt--30 {
  margin-top: -10px;
}
.mt-40 {
  margin-top: 3%;
}
.vertical-centered.centered {
  height: -webkit-fill-available;
  width: -webkit-fill-available;
}
.white {
  color: white !important;
}
.mt--50 {
  margin-top: -50px;
}
.header {
  border-radius: 0px 0px 80px;
  box-shadow: 0 0 49px 0 rgba(16, 29, 113, 0.08);
  background-image: linear-gradient(294deg, #7fbf50, #00aeed);
  width: 275px;
  height: 10vh;
  grid-area: heads;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999999;
}
.left-65 {
  left: 5%;
}
.bottom-60 {
  bottom: 60px;
}
.height-100 {
  height: 100%;
}
.width-100 {
  width: 100%;
}

body {
  opacity: 1;
  font-family: "AJannatLT", sans-serif !important;
  background-image: linear-gradient(to top, #cad9f3, #eaf2ff);
}

.centered {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.btn-group {
  padding-top: 25px;
  padding-bottom: 25px;
  .btn {
    margin-right: 30px;
    padding: 10px 50px 10px 50px;
    box-shadow: 0 0 49px 0 rgba(16, 29, 113, 0.08);
    border-radius: 50px 50px 50px 50px !important;
    border: 0px;
    background-color: #edf9fd;
    color: #0c9ee2;
  }
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
.height-40 {
  height: 40px;
}
.btn.active {
  background-image: linear-gradient(
    287deg,
    rgb(12, 158, 226),
    rgb(6, 232, 167)
  ) !important;
  color: white !important;
}
.primary--bg {
  background-image: linear-gradient(
    287deg,
    rgb(12, 158, 226),
    rgb(6, 232, 167)
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
.header-logo {
  position: absolute;
  left: 20px;
  top: 8vh;
}

.header-text {
  position: absolute;
  left: 50px;
  top: 7.8vh;
  color: white;
  list-style-type: none;
}

.nav {
  grid-area: navigation;
  height: 88vh;
  position: absolute;
  bottom: 0px;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.02);
  background-color: rgb(255, 255, 255);
  border-radius: 0 80px 0 0;
  min-width: 275px;
}

.nav-ul {
  padding-top: 30px;
}
@media screen and (max-height: 630px) {
  .nav-item {
    margin-bottom: 0px !important;
  }
  .nav-ul {
    margin-bottom: 0px !important;
  }
  .inner-body {
    margin-top: 5px !important;
  }
}
@media screen and (max-height: 700px) {
  .mt-40 {
    margin-top: 1%;
  }
  .card-left {
    padding-top: 0.3rem !important;
    padding-bottom: 0.3rem !important;
  }
}
@media screen and (max-height: 660px) {
  .inner-body {
    margin-top: 20px;
  }
  // .mt-40{
  // 	margin-top: 0.2%;
  // }
}
.bottom-15 {
  bottom: 15px;
}
.active {
  color: seagreen !important;
}
.bottom-0 {
  bottom: 0px;
}
.nav-link {
  color: white;
  padding: 0 !important;
  &:hover {
    color: white !important;
  }
}

.nav-link .fa-angle-right {
  float: right;
  margin-right: 15px;
  margin-top: 18px;
  color: #acbbd0;
}

.white--bg {
  background-color: white;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.02);
}

.card-left {
  border-radius: 60px 20px 20px 20px !important;
}

.inner-body {
  grid-area: innerbody;
  height: 100vh;
  padding-left: 20px;
  margin-top: 3rem;
}

.grid {
  display: grid;
}

.outer-div {
  grid-template-columns: 300px auto;
  grid-template-rows: 20vh 80vh;
  grid-template-areas: "heads innerbody" "navigation innerbody";
}

.card {
  width: 20vw;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  border: 0px;
}

.header_main {
  width: 275px;
  height: 15vh;
  border-radius: 0 0 80px 0;
  box-shadow: 0 0 49px 0 rgba(16, 29, 113, 0.08);
  background-image: linear-gradient(294deg, #00aeed, #7fbf50);
  position: absolute;
  top: 0;
  z-index: 999;
  left: 0;
}

.logo_main {
  width: 188px;
  height: 52px;
  margin: auto;
  margin-top: 4vh;
}

.waterdrop_button {
  width: 40px;
  height: 40px;
  transform: rotate(230deg);
  border-radius: 20px;
  border-top-right-radius: 0;
  box-shadow: 0 0 49px 0 rgba(16, 29, 113, 0.08);
  background-image: linear-gradient(315deg, #0c9ee2, #06e8a7);
  position: absolute;
  left: 275px;
  top: 11.5vh;
  z-index: 1000;
}

.waterdrop_button .fa-angle-left {
  transform: rotate(130deg);
  position: absolute;
  top: 5px;
  right: 12px;
}

ul {
  padding-left: 0;
  margin: 20px 20px;
}

li.nav-item {
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 25px;
  position: relative;
  height: 50px;
  transition: ease 0.3s;
}

li.nav-item:hover {
  background-image: linear-gradient(284deg, #0c9ee212, #06e8a712);
  box-shadow: 0 0 37px 0 rgba(16, 29, 113, 0.08);
}

li.nav-item:hover .sub-menu {
  display: block;
}

.menu_icon {
  display: inline-block;
  position: absolute;
  left: -15px;
  width: 50px;
  height: 50px;
  transform: rotate(-45deg);
  border-radius: 25px;
  border-bottom-right-radius: 0;
  transition: ease 0.3s;
}

.menu_icon svg {
  transform: rotate(45deg);
  position: absolute;
  top: 12px;
  right: 8px;
  font-size: 24px;
  fill: #acbbd0;
}

li.nav-item.active .menu_icon,
li.nav-item:hover .menu_icon {
  box-shadow: 0 0 37px 0 rgba(16, 29, 113, 0.08);
  background-image: linear-gradient(130deg, #0c9ee2, #06e8a7);
}

li.nav-item.active .menu_icon svg,
li.nav-item:hover .menu_icon svg {
  fill: #fff;
}

.menu_name {
  display: inline-block;
  padding: 15px 0 0 65px;
  font-size: 14.9px;
  font-weight: bold;
  color: #acbbd0;
}

.sub-menu {
  position: absolute;
  top: 0;
  left: 220px;
  margin: 0;
  padding: 15px !important;
  width: max-content;
  border-radius: 10px;
  background-image: linear-gradient(248deg, #06e8a7bf, #0c9ee2);
  z-index: 999999;
  display: none;
}

.sub-menu::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  left: -8px;
  top: 16px;
  transform: rotate(45deg);
  background: #0c9ee280;
  z-index: -3;
}

.sub-menu li {
  color: #fff;
  padding: 2px 0;
}

.sub-menu li:hover {
  font-weight: bold;
  cursor: pointer;
}

.side_bottom_buttons {
  margin-top: auto;
  margin-left: 20px;
  margin-right: 20px;
}

.side_bottom_buttons a {
  display: block;
  padding: 12px;
  border-radius: 25px;
  text-decoration: none !important;
  color: unset;
  position: relative;
  box-shadow: 0 0 37px 0 rgba(16, 29, 113, 0.08);
  background-image: linear-gradient(284deg, #0c9ee212, #06e8a712);
  margin-bottom: 15px;
  font-size: 14.9px;
  font-weight: bold;
}

.side_bottom_buttons a:hover {
  color: unset;
}

.button_printreport .fa-print {
  color: #0c9ee2;
  font-size: 20px;
}

.button_printreport .button_text {
  background: linear-gradient(284deg, #0c9ee2, #06e8a7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.button_text {
  padding-left: 25px;
}

.button_logout {
  background: #ff004412 !important;
  color: #ff0044 !important;
}

.button_logout .fa-sign-out-alt {
  font-size: 20px;
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
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 8px;
  bottom: 7px;
  background-color: red;
  -webkit-transition: 0.4s;
  transition: 0.4s;
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
// .slider::before{
//   background-color: #24e8a6;
// }

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
  background-color: #24e8a6;
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
  color: red;
}
input + .slider {
  border: 1px solid red;
}
.black--border {
  border: 1px solid black !important;
}
.gray--border {
  border: 1px solid #919191 !important;
}
.gray-dashed-border {
  border: 1px dashed #cacaca;
}
.slider.round {
  border-radius: 34px;
}
.pt-1-5 {
  padding-top: 6px;
}
.width-33 {
  width: 33%;
}
.width-50 {
  width: 50%;
}
.card-left {
  padding-top: 1rem;
  padding-bottom: 1rem;
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
</style>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import NavBar from "./components/NavBar.vue";
import Header from "./components/Header.vue";

@Component({
  components: {
    NavBar,
    Header
  }
})
export default class App extends Vue {}
</script>
