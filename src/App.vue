<template>
<div class="grid outer-div">
  <div class="header_main">
		<!-- logo will come here -->
		<div class="logo_main">
      <img src="./assets/Logo.png" height="100%">
    </div>
	</div>

<div class="waterdrop_button"></div>
<nav class="nav flex-column white--bg">
  <ul class="nav flex-column nav-ul">
    <li class="nav-item">
      <a class="nav-link active" href="#">Analytics</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Members</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Requests</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Content</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Communication</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Services</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Settings</a>
    </li>
  </ul>
  </nav>
  <div class="inner-body">
    <div class="card card-left">
      <div class="card-body">
        <h5 class="card-title">Average training time</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
              <input type="radio" name="options" id="option1" autocomplete="off" checked> Yearly
            </label>
            <label class="btn btn-secondary">
              <input type="radio" name="options" id="option2" autocomplete="off"> Monthly
            </label>
            <label class="btn btn-secondary">
              <input type="radio" name="options" id="option3" autocomplete="off"> Weekly
            </label>
          </div>
        </h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</div>
</template>
<style lang="scss">
.header{
  border-radius: 0px 0px 80px;
  box-shadow: 0 0 49px 0 rgba(16, 29, 113, 0.08);
  background-image: linear-gradient(294deg, #7fbf50, #00aeed);
  width: 250px;
  height: 10vh;
  grid-area: heads;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999999;
}

body{
  opacity: 1;
  background-image: linear-gradient(to top, #cad9f3, #eaf2ff);
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

.btn.active{
    background-image: linear-gradient(287deg, rgb(12, 158, 226), rgb(6, 232, 167)) !important;
    color: white !important;
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
  width: 15%;
  position: absolute;
  bottom: 0px;
  box-shadow: -2px 0 4px 0 rgba(0, 0, 0, 0.02);
  background-color: rgb(255, 255, 255);
  border-radius: 0 80px 0 0;
}

.nav-ul{
  padding-top: 40px;
}

.active{
  color: seagreen !important;
}

.nav-link{
  color: rgba(1,1,1,0.3)
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
  opacity: 0.6;
  height: 100vh;
  padding-top: 6vh;
  padding-left: 5%;
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
  width: 30vw;
}


.header_main {
		  width: 15%;
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
			left: 15%;
			top: 11.5vh;
      z-index: 1000;
		}
</style>
