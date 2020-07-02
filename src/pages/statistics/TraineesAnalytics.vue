<template>
  <div>
    <div class="d-flex justify-space-around">
      <div class="card card-right fit-content ml-0">
        <div
          class="card-title gray--color pt-2 mx-4 mt-2 px-4 blue-gradient left-rounded"
        >
          <img
            src="@/assets/icons/analytics_2.svg"
            class="pb-3 mr-2 pt-1"
            height="5%"
            width="5%"
          />&nbsp;&nbsp;GENERAL TRAINEES ANALYTICS
        </div>
        <div class="d-flex width-100 mt-4">
          <div
            class="fs--12 pt-3 gray bold d-flex px-4 mb-2 justify-flex-start vertical-centered"
          >
            REGISTERED TRAINERS
          </div>
          <div
            class="fs--28 d-flex px-4 justify-flex-end vertical-centered position-absolute right-0"
          >
            43850
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
            class="fs--12 pt-3 bold gray d-flex px-4 mb-2 justify-flex-start vertical-centered"
          >
            BENEFICIARIES
          </div>
          <div
            class="fs--28 d-flex px-4 justify-flex-end vertical-centered position-absolute right-0"
          >
            42580
          </div>
        </div>
        <div class="progress rounded-50 mx-4" style="height: 10px;">
          <div
            class="progress-bar primary--bg rounded-50"
            role="progressbar"
            style="width: 45%;"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div
        class="card card-right ml-4 fit-content"
        style="height: fit-content;"
      >
        <div
          class="card-title gray--color pt-2 mx-4 mt-2 mb-4 px-4 blue-gradient left-rounded"
          style="height: max-content;"
        >
          <img
            src="@/assets/icons/analytics_2.svg"
            class="pb-3 mr-2 pt-1"
            height="5%"
            width="5%"
          />&nbsp;&nbsp;AVG NUMBER OF COURSES TAKEN BY EACH PARTICIPANT
        </div>
        <div class="d-flex width-100 mt-4 position-relative">
          <div
            class="fs--12 pt-3 gray bold d-flex px-4 mb-2 justify-flex-start vertical-centered"
          ></div>
          <div
            class="fs--28 d-flex px-4 justify-flex-end vertical-centered position-absolute three right-0"
          >
            3
          </div>
        </div>
        <div class="progress rounded-50 mx-4" style="height: 10px;">
          <div
            class="progress-bar primary--bg rounded-50"
            role="progressbar"
            style="width: 60%;"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-space-around mb-0 mx-5">
      <div
        class="card card-left my-4 primary-2-border vertical-centered fit-content ml-0 d-flex fit-content justify-flex-start"
        style="height: 150px"
      >
        <div
          class="rounded-100 pt-2 pb-2 px-2 mt-4 ml-5 primary--bg"
          style="fill: white; height: 5rem; width: 5rem"
        >
          <svg width="60" height="60" viewBox="0 -10 28 61">
            <path
              d="M5.294 10.647c.278-.461.827-.68 1.344-.536.517.145.875.618.875 1.157 0 1.466 1.187 2.659 2.646 2.659 1.458 0 2.645-1.193 2.645-2.659V1.201c0-.486.292-.924.739-1.11.446-.185.96-.083 1.302.26.135.136 3.322 3.358 6.552 8.225 1.904 2.87 3.424 5.718 4.517 8.462C27.298 20.516 28 23.845 28 26.933 28 34.69 21.72 41 14 41S0 34.69 0 26.933c0-4.965 1.781-10.444 5.294-16.286zm.729 15.974c0 .663.535 1.2 1.195 1.2s1.196-.537 1.196-1.2v-2.247l5.952 5.982c.225.225.529.351.846.351.317 0 .62-.126.845-.351l2.776-2.79 1.871 1.88c.467.469 1.224.469 1.691 0 .467-.47.467-1.23 0-1.7l-2.716-2.728c-.467-.47-1.224-.47-1.691 0l-2.776 2.79-5.108-5.132h2.236c.66 0 1.196-.538 1.196-1.202 0-.663-.535-1.2-1.196-1.2H7.218c-.66 0-1.195.537-1.195 1.2v5.147z"
            />
          </svg>
        </div>
        <div class="position-absolute" style="left:140px; top: 55px">
          <ul>
            <li class="list-none">Rank performance according</li>
            <li class="list-none primary bold fs--16">
              To Quizzes Performance
            </li>
          </ul>
        </div>
      </div>
      <div
        class="card card-left my-4 primary-2-border vertical-centered fit-content fit-content ml-5 d-flex justify-flex-start"
        style="height: 150px"
      >
        <div
          class="rounded-100 pt-2 pb-2 px-2 mt-4 ml-5 primary--bg"
          style="fill: white; height: 5rem; width: 5rem"
        >
          <svg width="60" height="60" viewBox="0 -10 28 61">
            <path
              d="M5.294 10.647c.278-.461.827-.68 1.344-.536.517.145.875.618.875 1.157 0 1.466 1.187 2.659 2.646 2.659 1.458 0 2.645-1.193 2.645-2.659V1.201c0-.486.292-.924.739-1.11.446-.185.96-.083 1.302.26.135.136 3.322 3.358 6.552 8.225 1.904 2.87 3.424 5.718 4.517 8.462C27.298 20.516 28 23.845 28 26.933 28 34.69 21.72 41 14 41S0 34.69 0 26.933c0-4.965 1.781-10.444 5.294-16.286zm.729 15.974c0 .663.535 1.2 1.195 1.2s1.196-.537 1.196-1.2v-2.247l5.952 5.982c.225.225.529.351.846.351.317 0 .62-.126.845-.351l2.776-2.79 1.871 1.88c.467.469 1.224.469 1.691 0 .467-.47.467-1.23 0-1.7l-2.716-2.728c-.467-.47-1.224-.47-1.691 0l-2.776 2.79-5.108-5.132h2.236c.66 0 1.196-.538 1.196-1.202 0-.663-.535-1.2-1.196-1.2H7.218c-.66 0-1.195.537-1.195 1.2v5.147z"
            />
          </svg>
        </div>
        <div class="position-absolute" style="left:140px; top: 55px">
          <ul>
            <li class="list-none">Rank Trainees according</li>
            <li class="list-none primary bold fs--16">
              To Assessment performance
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-flex justify-space-around mb-0 mx-5">
      <div
        class="card card-left my-4 primary-2-border vertical-centered fit-content ml-0 d-flex fit-content justify-flex-start"
        style="height: 150px"
      >
        <div
          class="rounded-100 pt-2 pb-2 px-2 mt-4 ml-5 primary--bg"
          style="fill: white; height: 5rem; width: 5rem"
        >
          <svg width="60" height="60" viewBox="0 -10 28 61">
            <path
              d="M5.294 10.647c.278-.461.827-.68 1.344-.536.517.145.875.618.875 1.157 0 1.466 1.187 2.659 2.646 2.659 1.458 0 2.645-1.193 2.645-2.659V1.201c0-.486.292-.924.739-1.11.446-.185.96-.083 1.302.26.135.136 3.322 3.358 6.552 8.225 1.904 2.87 3.424 5.718 4.517 8.462C27.298 20.516 28 23.845 28 26.933 28 34.69 21.72 41 14 41S0 34.69 0 26.933c0-4.965 1.781-10.444 5.294-16.286zm.729 15.974c0 .663.535 1.2 1.195 1.2s1.196-.537 1.196-1.2v-2.247l5.952 5.982c.225.225.529.351.846.351.317 0 .62-.126.845-.351l2.776-2.79 1.871 1.88c.467.469 1.224.469 1.691 0 .467-.47.467-1.23 0-1.7l-2.716-2.728c-.467-.47-1.224-.47-1.691 0l-2.776 2.79-5.108-5.132h2.236c.66 0 1.196-.538 1.196-1.202 0-.663-.535-1.2-1.196-1.2H7.218c-.66 0-1.195.537-1.195 1.2v5.147z"
            />
          </svg>
        </div>
        <div class="position-absolute" style="left:140px; top: 55px">
          <ul>
            <li class="list-none">Rank Trainees according</li>
            <li class="list-none primary bold fs--16">
              To Completing Sessions
            </li>
          </ul>
        </div>
      </div>
      <div
        class="card card-left my-4 primary-2-border vertical-centered fit-content fit-content ml-5 d-flex justify-flex-start"
        style="height: 150px"
      >
        <div
          class="rounded-100 pt-2 pb-2 px-2 mt-4 ml-5 primary--bg"
          style="fill: white; height: 5rem; width: 5rem"
        >
          <svg width="60" height="60" viewBox="0 -10 28 61">
            <path
              d="M5.294 10.647c.278-.461.827-.68 1.344-.536.517.145.875.618.875 1.157 0 1.466 1.187 2.659 2.646 2.659 1.458 0 2.645-1.193 2.645-2.659V1.201c0-.486.292-.924.739-1.11.446-.185.96-.083 1.302.26.135.136 3.322 3.358 6.552 8.225 1.904 2.87 3.424 5.718 4.517 8.462C27.298 20.516 28 23.845 28 26.933 28 34.69 21.72 41 14 41S0 34.69 0 26.933c0-4.965 1.781-10.444 5.294-16.286zm.729 15.974c0 .663.535 1.2 1.195 1.2s1.196-.537 1.196-1.2v-2.247l5.952 5.982c.225.225.529.351.846.351.317 0 .62-.126.845-.351l2.776-2.79 1.871 1.88c.467.469 1.224.469 1.691 0 .467-.47.467-1.23 0-1.7l-2.716-2.728c-.467-.47-1.224-.47-1.691 0l-2.776 2.79-5.108-5.132h2.236c.66 0 1.196-.538 1.196-1.202 0-.663-.535-1.2-1.196-1.2H7.218c-.66 0-1.195.537-1.195 1.2v5.147z"
            />
          </svg>
        </div>
        <div class="position-absolute" style="left:140px; top: 55px">
          <ul>
            <li class="list-none">Rank Trainees according</li>
            <li class="list-none primary bold fs--16">
              To Number of certificates
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-flex justify-space-around mb-4 mx-5">
      <div
        class="card card-left my-4 primary-2-border vertical-centered fit-content ml-0 d-flex fit-content justify-flex-start"
        style="height: 150px"
        data-toggle="modal"
        data-target="#trainees1"
      >
        <div
          class="rounded-100 pt-2 pb-2 px-2 mt-4 ml-5 primary--bg"
          style="fill: white; height: 5rem; width: 5rem"
        >
          <svg width="60" height="60" viewBox="0 -10 28 61">
            <path
              d="M5.294 10.647c.278-.461.827-.68 1.344-.536.517.145.875.618.875 1.157 0 1.466 1.187 2.659 2.646 2.659 1.458 0 2.645-1.193 2.645-2.659V1.201c0-.486.292-.924.739-1.11.446-.185.96-.083 1.302.26.135.136 3.322 3.358 6.552 8.225 1.904 2.87 3.424 5.718 4.517 8.462C27.298 20.516 28 23.845 28 26.933 28 34.69 21.72 41 14 41S0 34.69 0 26.933c0-4.965 1.781-10.444 5.294-16.286zm.729 15.974c0 .663.535 1.2 1.195 1.2s1.196-.537 1.196-1.2v-2.247l5.952 5.982c.225.225.529.351.846.351.317 0 .62-.126.845-.351l2.776-2.79 1.871 1.88c.467.469 1.224.469 1.691 0 .467-.47.467-1.23 0-1.7l-2.716-2.728c-.467-.47-1.224-.47-1.691 0l-2.776 2.79-5.108-5.132h2.236c.66 0 1.196-.538 1.196-1.202 0-.663-.535-1.2-1.196-1.2H7.218c-.66 0-1.195.537-1.195 1.2v5.147z"
            />
          </svg>
        </div>
        <div class="position-absolute" style="left:140px; top: 55px">
          <ul>
            <li class="list-none">Rank Trainees according</li>
            <li class="list-none primary bold fs--16">
              To Continuous learning
            </li>
          </ul>
        </div>
      </div>
      <button
        class="card card-left my-4 primary-2-border vertical-centered fit-content fit-content ml-5 d-flex justify-flex-start"
        style="height: 150px; visibility: hidden;"
      >
        <div
          class="rounded-100 pt-2 pb-2 px-2 mt-4 ml-5 primary--bg"
          style="fill: white; height: 5rem; width: 5rem"
        >
          <svg width="60" height="60" viewBox="0 -10 28 61">
            <path
              d="M5.294 10.647c.278-.461.827-.68 1.344-.536.517.145.875.618.875 1.157 0 1.466 1.187 2.659 2.646 2.659 1.458 0 2.645-1.193 2.645-2.659V1.201c0-.486.292-.924.739-1.11.446-.185.96-.083 1.302.26.135.136 3.322 3.358 6.552 8.225 1.904 2.87 3.424 5.718 4.517 8.462C27.298 20.516 28 23.845 28 26.933 28 34.69 21.72 41 14 41S0 34.69 0 26.933c0-4.965 1.781-10.444 5.294-16.286zm.729 15.974c0 .663.535 1.2 1.195 1.2s1.196-.537 1.196-1.2v-2.247l5.952 5.982c.225.225.529.351.846.351.317 0 .62-.126.845-.351l2.776-2.79 1.871 1.88c.467.469 1.224.469 1.691 0 .467-.47.467-1.23 0-1.7l-2.716-2.728c-.467-.47-1.224-.47-1.691 0l-2.776 2.79-5.108-5.132h2.236c.66 0 1.196-.538 1.196-1.202 0-.663-.535-1.2-1.196-1.2H7.218c-.66 0-1.195.537-1.195 1.2v5.147z"
            />
          </svg>
        </div>
        <div class="position-absolute" style="left:140px; top: 55px">
          <ul>
            <li class="list-none">Rank Trainees according</li>
            <li class="list-none primary bold fs--16">To number of bans</li>
          </ul>
        </div>
      </button>
    </div>
  <div id="trainees1" class="modal fade" role="dialog">
  <div class="modal-dialog position-unset">
    <!-- Modal content-->
    <div class="modal-content position-absolute top-0 left-0" style="width:400px;height:100vh;">
      <button type="button" class="close position-absolute" style="left: 415px; top: 20px;" data-dismiss="modal">&times;</button>
      <div class="modal-body">
        <div style="height: 40vh" class="text-center pt-5">
          <span class="fs--20">Rank participants according to</span><BR/>
          <span class="fs--28 primary">Highest Rating</span>
        </div>
      </div>
    </div>

  </div>
</div>
  </div>
</template>
<style lang="scss" scoped>
.position-unset{
  position: unset !important;
}
.modal-content{
  border-radius: 0px !important;
}
.modal-content,.modal,.modal-dialog{
  margin-top: 0px !important;
}
.left-0{
  left: 0px;
}
.fit-content2 {
  width: 620px;
}
.fit-content {
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
  min-width: 360px;
  width: 40%;
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
.three {
  top: -15px;
}
</style>
