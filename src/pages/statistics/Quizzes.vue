<template>
  <div class="d-flex justify-space-around">
    <div class="card card-right fit-content ml-4">
      <div class="d-flex width-100 mt-2">
        <div
          class="fs--12 pt-3 gray d-flex px-4 mb-2 justify-flex-start vertical-centered"
        >
          Average number of quizzes per session
        </div>
        <div
          class="fs--28 d-flex px-4 justify-flex-end vertical-centered position-absolute right-0"
        >
          360
        </div>
      </div>
      <div class="progress rounded-50 mx-4" style="height: 10px;">
        <div
          class="progress-bar primary--bg rounded-50"
          role="progressbar"
          style="width: 70%;"
          aria-valuenow="70"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="d-flex width-100 mt-2">
        <div
          class="fs--12 pt-3 gray d-flex px-4 mb-2 justify-flex-start vertical-centered"
        >
          Average number of quizzes per course
        </div>
        <div
          class="fs--28 d-flex px-4 justify-flex-end vertical-centered position-absolute right-0"
        >
          220
        </div>
      </div>
      <div class="progress rounded-50 mx-4" style="height: 10px;">
        <div
          class="progress-bar primary--bg rounded-50"
          role="progressbar"
          style="width: 30%;"
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="d-flex width-100 mt-2">
        <div
          class="fs--12 pt-3 gray d-flex px-4 mb-2 justify-flex-start vertical-centered"
        >
          Average grade per Quiz
        </div>
        <div
          class="fs--28 d-flex px-4 justify-flex-end vertical-centered position-absolute right-0"
        >
          420
        </div>
      </div>
      <div class="progress rounded-50 mx-4" style="height: 10px;">
        <div
          class="progress-bar primary--bg rounded-50"
          role="progressbar"
          style="width: 85%;"
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="d-flex width-100 mt-2">
        <div
          class="fs--12 pt-3 gray d-flex px-4 mb-2 justify-flex-start vertical-centered"
        >
          Average time for completion
          <span class="primary bold pl-2"> (for quizzes) </span>
        </div>
        <div
          class="fs--28 d-flex px-4 justify-flex-end vertical-centered position-absolute right-0"
        >
          379
        </div>
      </div>
      <div class="progress rounded-50 mx-4" style="height: 10px;">
        <div
          class="progress-bar primary--bg rounded-50"
          role="progressbar"
          style="width: 70%;"
          aria-valuenow="70"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="card card-right fit-content ml-4">
      <div
        class="card-title gray--color pt-3 mx-4 mt-2 px-4 blue-gradient left-rounded"
      >
        <img
          src="@/assets/icons/analytics_2.svg"
          class="pb-3 mr-2"
          height="5%"
          width="5%"
        />&nbsp;&nbsp;Average scoring difference
      </div>
      <div class="d-flex width-100 mt-4">
        <div
          class="fs--12 pt-3 gray d-flex px-4 mb-2 justify-flex-start vertical-centered"
        >
          Pre Assessment
        </div>
        <div
          class="fs--28 d-flex px-4 justify-flex-end vertical-centered position-absolute right-0"
        >
          240
        </div>
      </div>
      <div class="progress rounded-50 mx-4" style="height: 10px;">
        <div
          class="progress-bar primary--bg rounded-50"
          role="progressbar"
          style="width: 50%;"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="d-flex width-100 mt-4">
        <div
          class="fs--12 pt-3 gray d-flex px-4 mb-2 justify-flex-start vertical-centered"
        >
          Post Assessment
        </div>
        <div
          class="fs--28 d-flex px-4 justify-flex-end vertical-centered position-absolute right-0"
        >
          360
        </div>
      </div>
      <div class="progress rounded-50 mx-4" style="height: 10px;">
        <div
          class="progress-bar primary--bg rounded-50"
          role="progressbar"
          style="width: 80%;"
          aria-valuenow="80"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fit-content2 {
  width: 620px;
}
.fit-content3 {
  width: 420px;
}
.top--10 {
  top: 25px;
}
.right-rounded {
  border-radius: 0px 20px 0px 0px;
}
.justify-space-between {
  justify-content: space-between;
}
.right-0 {
  right: 0px;
}
.fs--12 {
  font-size: 12px;
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
.justify-flex-end {
  justify-content: flex-end !important;
}
.btn.active {
  background-image: linear-gradient(
    287deg,
    rgb(12, 158, 226),
    rgb(6, 232, 167)
  ) !important;
  color: white !important;
}
.left-rounded {
  border-radius: 25px 0px 0px 0px;
}
.blue-gradient {
  background-image: linear-gradient(
    283deg,
    rgba(12, 158, 226, 0) 50%,
    rgba(0, 208, 211, 0.1)
  );
}
.blue-gradient-reverse {
  background-image: linear-gradient(
    283deg,
    rgba(0, 208, 211, 0.1) 0%,
    rgba(12, 158, 226, 0) 100%
  );
}
.gray--color {
  color: #9ba8bb;
}
.fit-content {
  width: 560px;
}
.fs--28 {
  font-size: 28px !important;
}
.vertical-bottom {
  margin-top: auto;
}
.card-right {
  border-radius: 20px 60px 20px 20px !important;
  padding-top: 1rem;
  padding-bottom: 3rem;
}
.card {
  padding-bottom: 3rem;
}
</style>
