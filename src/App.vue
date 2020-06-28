<template>
<div class="grid outer-div">
  <div class="header_main">
		<!-- logo will come here -->
		<div class="logo_main">
      <img src="./assets/Logo.png" height="100%">
    </div>
	</div>
<div class="waterdrop_button"><i class="fas fa-angle-left white fs--28"></i></div>
<nav class="nav flex-column white--bg">
  <ul class="nav-ul list-unstyled">
    <li class="nav-item">
      <a class="nav-link active" href="#">
        <span class="menu_icon pl-2"><i class="fas fa-chart-bar"></i></span>
				<span class="menu_name">Statistics</span>
        <i class="fas fa-angle-right"></i>
      </a>
      <ul class="list-unstyled sub-menu">
        <li>Overview</li>
        <li>Trainees Anayltics</li>
        <li>Trainers Anayltics</li>
        <li>Courses/Sessions Anayltics</li>
        <li>Quizzes and Assessments</li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="menu_icon"><i class="fas fa-user-friends"></i></span>
				<span class="menu_name">Members</span>
        <i class="fas fa-angle-right"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <span class="menu_icon"></span>
				<span class="menu_name">Complaints</span>
        <i class="fas fa-angle-right"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">
        <span class="menu_icon"></span>
				<span class="menu_name">Content</span>
        <i class="fas fa-angle-right"></i>
      </a>
      <ul class="list-unstyled sub-menu">
        <li>Departments</li>
        <li>Programs</li>
        <li>Scientific content</li>
      </ul>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">
        <span class="menu_icon"><i class="far fa-comments"></i></span>
				<span class="menu_name">Communication</span>
        <i class="fas fa-angle-right"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">
        <span class="menu_icon"></span>
				<span class="menu_name">Services</span>
        <i class="fas fa-angle-right"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">
        <span class="menu_icon"><i class="fas fa-cog"></i></span>
				<span class="menu_name">Settings</span>
        <i class="fas fa-angle-right"></i>
      </a>
    </li>
  </ul>

  <div class="side_bottom_buttons">
    <a href="#" class="button_printreport">
      <span><i class="fas fa-print"></i></span>
      <span class="button_text">Print reports</span>
    </a>

    <a href="" class="button_logout">
      <span><i class="fas fa-sign-out-alt"></i></span>
      <span class="button_text">Log out</span>
    </a>
	</div>
</nav>
  <div class="inner-body mt-5">
    <router-view />
  </div>
</div>
</template>
<style lang="scss">
.z-1000{
  z-index: 1000;
}
.text-center{
  text-align: center;
}
.justify-space-around{
  justify-content: space-evenly !important;
}
.grid-de-la-dept{
  grid-template-columns: 150px auto 300px;
}
.hidden{
  display: none;
}
.d-grid{
  display: grid;
}
.height-100px{
  height: 100px;
}
.width-100px{
  width: 100px;
}
.border-radius-50{
  border-radius: 50px;
}
.btn{
  border: 0px !important;
  outline: none !important;
  height: auto;
}
.form-control{
  height: auto !important;
}
.rounded-50{
  border-radius: 50px !important;
}
.right--10{
  right: -10px;
}
.bottom-25{
  bottom: 25px;
}
.border-radius-20{
  border-radius: 20px;
}
.width-100{
  width: 100%;
}
.rounded-100px{
  border-radius: 100px !important;
}
.fs--16{
  font-size: 16pt;
}
.fs--28{
  font-size: 28px;
}
.black{
  color: black;
}
.ml-100{
  margin-left: 100px;
}
.black--bg{
  background-color: black;
}
.bold{
  font-weight: bold;
}
.transparent{
  color: #6FDFD4;
}
.rounded-100{
  border-radius: 100%;
}
.lightGray--bg{
  background: #f1f1f1
}
.mt--30{
  margin-top: -30px;
}
.white{
  color: white !important;
}
.mt--50{
  margin-top: -50px;
}
.header{
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
.left-65{
  left: 50px;
}
.bottom-60{
  bottom: 60px;
}
.height-100{
  height: 100%;
}
.width-100{
  width: 100%;
}

body{
  opacity: 1;
  background-image: linear-gradient(to top, #cad9f3, #eaf2ff);
}

.centered{
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.btn-group{
  padding-top: 25px;
  padding-bottom: 25px;
  .btn{
    margin-right: 30px;
    padding: 10px 50px 10px 50px;
    box-shadow: 0 0 49px 0 rgba(16, 29, 113, 0.08);
    border-radius: 50px 50px 50px 50px !important;
    border: 0px;
    background-color: #edf9fd;
    color: #0c9ee2
  }
}

.lightBlue--bg{
  background-color: #edf9fd;
}
.lightBlue{
  color: #edf9fd;
}
.width-90{
  width: 90% !important;
}
.height-40{
  height: 40px;
}
.btn.active{
    background-image: linear-gradient(287deg, rgb(12, 158, 226), rgb(6, 232, 167)) !important;
    color: white !important;
}
.primary--bg{
  background-image: linear-gradient(287deg, rgb(12, 158, 226), rgb(6, 232, 167)) !important;
}
.vertical-centered{
  margin-top: auto;
  margin-bottom: auto;
}

.header-logo{
  position: absolute;
  left: 20px;
  top: 8vh;
}

.header-text{
  position: absolute;
  left: 50px;
  top: 7.8vh;
  color: white;
  list-style-type: none;
}

.nav{
  grid-area: navigation;
  height: 88vh;
  position: absolute;
  bottom: 0px;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.02);
  background-color: rgb(255, 255, 255);
  border-radius: 0 80px 0 0;
  min-width: 275px;
}

.nav-ul{
  padding-top: 40px;
}

.active{
  color: seagreen !important;
}

.nav-link{
  color: rgba(1,1,1,0.3);
  padding: 0 !important;
}

.nav-link .fa-angle-right{
 float: right;
 margin-right: 15px;
 margin-top: 18px;
 color: #acbbd0;
}

.white--bg{
  background-color: white;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.02);
}

.card-left{
  border-radius: 60px 20px 20px 20px !important;
}

.inner-body{
  grid-area: innerbody;
  height: 100vh;
  padding-left: 80px;
}

.grid{
  display: grid;
}

.outer-div{
  grid-template-columns: 15fr 85fr;
  grid-template-rows: 20vh 80vh;
  grid-template-areas: "heads innerbody" "navigation innerbody";
}

.card{
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
      z-index:99999;
		  left: 0;
		}

		.logo_main{
			width: 188px;
			height: 52px;
			background-color: #fff;
			margin: auto;
			margin-top: 4vh;
		}

		.waterdrop_button{
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

    .waterdrop_button .fa-angle-left{
      transform: rotate(130deg);
      position: absolute;
      top: 5px;
      right: 12px;
    }

    ul{
			padding-left: 0;
			margin: 20px 20px;
		}

    li.nav-item{
      margin: auto;
      margin-top: 5px;
      margin-bottom: 5px;
			border-radius: 25px;
			position: relative;
			height: 50px;
      transition: ease .3s;
		}

    li.nav-item:hover{
      background-image: linear-gradient(284deg, #0c9ee212 , #06e8a712);	
      box-shadow: 0 0 37px 0 rgba(16, 29, 113, 0.08);
    }

    li.nav-item:hover .sub-menu{
      display: block;
    }

		.menu_icon{
			display: inline-block;
			position: absolute;
			left: -15px;
			width: 50px;
      height: 50px;
      transform: rotate(-45deg);
      border-radius: 25px;
      border-bottom-right-radius: 0;
      transition: ease .3s;
		}

    .menu_icon svg{
      transform: rotate(45deg);
      position: absolute;
      top: 13px;
      right: 13px;
      font-size: 24px;
      color: #acbbd0;
    }

		li.nav-item.active .menu_icon,
		li.nav-item:hover .menu_icon{
			box-shadow: 0 0 37px 0 rgba(16, 29, 113, 0.08);
			background-image: linear-gradient(130deg, #0c9ee2 , #06e8a7);
		}

    li.nav-item.active .menu_icon svg,
		li.nav-item:hover .menu_icon svg{
			color: #fff;
		}

		.menu_name{
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
      background-image: linear-gradient(248deg, #06e8a7bf, #0c9ee2 );
      z-index: 999999;
      display: none;
    }

    .sub-menu::before{
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

    .sub-menu li{
      color: #fff;
      padding: 2px 0;
    }

    .sub-menu li:hover{
      font-weight: bold;
      cursor: pointer;
    }

    .side_bottom_buttons{
			margin: auto;
      margin-left: 20px;
      margin-right: 20px;
		}

		.side_bottom_buttons a{
			display: block;
      padding: 12px;
      border-radius: 25px;
      text-decoration: none !important;
      color: unset;
      position: relative;
       box-shadow: 0 0 37px 0 rgba(16, 29, 113, 0.08);
      background-image: linear-gradient(284deg, #0c9ee212 , #06e8a712);
      margin-bottom: 15px;
      font-size: 14.9px;
			font-weight: bold;
		}
   

    .side_bottom_buttons a:hover{
      color: unset;
    }

    .button_printreport .fa-print{
      color: #0c9ee2;
      font-size: 20px;
    }

    .button_printreport .button_text,{
       background: linear-gradient(284deg, #0c9ee2 , #06e8a7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .button_text{
      padding-left: 25px;
    }

    .button_logout{
      background: #ff004412 !important;
      color: #ff0044 !important;
    }

    .button_logout .fa-sign-out-alt{
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
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 8px;
  bottom: 7px;
  background-color: red;
  -webkit-transition: .4s;
  transition: .4s;
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
input:checked + .slider{
  border: 1px solid #24e8a6;
}
input:checked + .slider .enabled{
  display: block;
}
input:checked + .slider .disabled{
  display: none;
}
input + .slider .enabled{
  display: none;
  color: #24e8a6;
}
input + .slider .disabled{
  display: block;
  margin-left: 30px;
  color: red;
}
input + .slider{
  border: 1px solid red;
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>