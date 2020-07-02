<template>
  <div>
    <div class="d-flex justify-space-around width-100vw mb-4 mx-5">
      <div class="card card-left fit-content ml-4">
        <div
          class="card-title gray--color pt-3 mx-4 mt-2 px-4 blue-gradient left-rounded"
        >
          <img
            src="../../assets/icons/analytics_2.svg"
            class="pb-3 mr-2"
            height="5%"
            width="5%"
          />&nbsp;&nbsp;AVERAGE TRAINING TIME
        </div>
        <h6 class="card-subtitle mb-2 text-muted">
          <div class="btn-group btn-group-toggle px-4" data-toggle="buttons">
            <label class="btn btn-secondary active">
              <input
                type="radio"
                name="options"
                id="option1"
                autocomplete="off"
                checked
              />
              Yearly
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option2"
                autocomplete="off"
              />
              Monthly
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option3"
                autocomplete="off"
              />
              Weekly
            </label>
          </div>
        </h6>
        <div class="fs--28 d-flex px-4 justify-flex-end vertical-centered">
          749880<span class="fs--16 pb-1 vertical-bottom"> mins</span>
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
            src="../../assets/icons/analytics_2.svg"
            class="pb-3 mr-2"
            height="5%"
            width="5%"
          />&nbsp;&nbsp;GENERAL NUMBER OF SESSIONS
        </div>
        <div class="d-flex width-100">
          <div
            class="fs--12 pt-3 gray d-flex px-4 mb-2 justify-flex-start vertical-centered"
          >
            AVERAGE TIME PER SESSION
          </div>
          <div
            class="fs--28 d-flex px-4 justify-flex-end vertical-centered position-absolute right-0"
          >
            60<span class="fs--16 pb-1 vertical-bottom pl-1">mins</span>
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
            NUMBER OF SCHEDULED SESSIONS
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
            NUMBER OF ACTIVE SESSIONS
            <span class="primary bold pl-2"> (LIVE) </span>
          </div>
          <div
            class="fs--28 d-flex px-4 justify-flex-end vertical-centered position-absolute right-0"
          >
            410
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
    </div>
    <div class="d-flex justify-space-around width-100vw mb-4 mx-5">
      <div class="card card-left mt-2 mx-4 fit-content2" style=" height: 521px;">
        <div
          class="card-title gray--color mx-3 mt-2 px-4 blue-gradient left-rounded vertical-centered"
        >
          <img
            src="../../assets/icons/analytics_2.svg"
            class="pb-3 mr-2"
            height="5%"
            width="5%"
          />&nbsp;&nbsp;TIME PERIOD WHERE MOST SESSIONS HAPPENED
          <span
            class="position-absolute right-0 top--10 mr-2 pr-2 blue-gradient-reverse py-3 right-rounded"
            >Past 7 days</span
          >
        </div>
        <chart :options="chartOptions"></chart>
      </div>
      <!-- <div class="card card-right mt-2 fit-content2" style="height: 490px;">
        <div
          class="card-title gray--color pt-3 mx-4 mt-2 px-4 blue-gradient left-rounded"
        >
          <img
            src="../../assets/icons/analytics_2.svg"
            class="pb-3 mr-2"
            height="5%"
            width="5%"
          />&nbsp;&nbsp;TIME PERIOD WHERE MOST SESSIONS HAPPENED
          <span
            class="position-absolute right-0 top--10 mr-2 pr-2 blue-gradient-reverse py-3 right-rounded"
            >Past 7 days</span
          >
        </div>
        <chart :options="chartOptions"></chart>
      </div> -->
    </div>
    <div class="d-flex justify-space-around mb-4 mx-5">
      <div
        class="card card-left my-4 primary-2-border vertical-centered fit-content3 ml-4 d-flex justify-flex-start"
        style="height: 110px"
      >
        <div
          class="rounded-100 pt-2 pb-2 px-2 ml-5 primary--bg"
          style="fill: white; height: 5rem; width: 5rem"
        >
          <svg width="60" height="60" viewBox="0 -10 28 61">
            <path
              d="M5.294 10.647c.278-.461.827-.68 1.344-.536.517.145.875.618.875 1.157 0 1.466 1.187 2.659 2.646 2.659 1.458 0 2.645-1.193 2.645-2.659V1.201c0-.486.292-.924.739-1.11.446-.185.96-.083 1.302.26.135.136 3.322 3.358 6.552 8.225 1.904 2.87 3.424 5.718 4.517 8.462C27.298 20.516 28 23.845 28 26.933 28 34.69 21.72 41 14 41S0 34.69 0 26.933c0-4.965 1.781-10.444 5.294-16.286zm.729 15.974c0 .663.535 1.2 1.195 1.2s1.196-.537 1.196-1.2v-2.247l5.952 5.982c.225.225.529.351.846.351.317 0 .62-.126.845-.351l2.776-2.79 1.871 1.88c.467.469 1.224.469 1.691 0 .467-.47.467-1.23 0-1.7l-2.716-2.728c-.467-.47-1.224-.47-1.691 0l-2.776 2.79-5.108-5.132h2.236c.66 0 1.196-.538 1.196-1.202 0-.663-.535-1.2-1.196-1.2H7.218c-.66 0-1.195.537-1.195 1.2v5.147z"
            />
          </svg>
        </div>
        <div class="position-absolute" style="left:140px; top: 35px">
          <ul>
            <li class="list-none">Rank sessions according to</li>
            <li class="list-none primary bold fs--16">Choose the value:</li>
          </ul>
        </div>
      </div>
      <!-- <div
        class="card card-left my-4 primary-2-border vertical-centered fit-content3 ml-4 d-flex justify-flex-start"
        style="height: 110px"
      >
        <div
          class="rounded-100 pt-2 pb-2 px-2 ml-5 primary--bg"
          style="fill: white; height: 5rem; width: 5rem"
        >
          <svg width="60" height="60" viewBox="0 -10 28 61">
            <path
              d="M5.294 10.647c.278-.461.827-.68 1.344-.536.517.145.875.618.875 1.157 0 1.466 1.187 2.659 2.646 2.659 1.458 0 2.645-1.193 2.645-2.659V1.201c0-.486.292-.924.739-1.11.446-.185.96-.083 1.302.26.135.136 3.322 3.358 6.552 8.225 1.904 2.87 3.424 5.718 4.517 8.462C27.298 20.516 28 23.845 28 26.933 28 34.69 21.72 41 14 41S0 34.69 0 26.933c0-4.965 1.781-10.444 5.294-16.286zm.729 15.974c0 .663.535 1.2 1.195 1.2s1.196-.537 1.196-1.2v-2.247l5.952 5.982c.225.225.529.351.846.351.317 0 .62-.126.845-.351l2.776-2.79 1.871 1.88c.467.469 1.224.469 1.691 0 .467-.47.467-1.23 0-1.7l-2.716-2.728c-.467-.47-1.224-.47-1.691 0l-2.776 2.79-5.108-5.132h2.236c.66 0 1.196-.538 1.196-1.202 0-.663-.535-1.2-1.196-1.2H7.218c-.66 0-1.195.537-1.195 1.2v5.147z"
            />
          </svg>
        </div>
        <div class="position-absolute" style="left:140px; top: 35px">
          <ul>
            <li class="list-none">Rank sessions according to</li>
            <li class="list-none primary bold fs--16">Choose the value:</li>
          </ul>
        </div>
      </div> -->
      <div
        class="card card-left my-4 primary-2-border vertical-centered fit-content3 ml-4 d-flex justify-flex-start"
        style="height: 110px"
      >
        <div
          class="rounded-100 pt-2 pb-2 px-2 ml-5 primary--bg"
          style="fill: white; height: 5rem; width: 5rem"
        >
          <svg width="60" height="60" viewBox="0 -10 28 61">
            <path
              d="M5.294 10.647c.278-.461.827-.68 1.344-.536.517.145.875.618.875 1.157 0 1.466 1.187 2.659 2.646 2.659 1.458 0 2.645-1.193 2.645-2.659V1.201c0-.486.292-.924.739-1.11.446-.185.96-.083 1.302.26.135.136 3.322 3.358 6.552 8.225 1.904 2.87 3.424 5.718 4.517 8.462C27.298 20.516 28 23.845 28 26.933 28 34.69 21.72 41 14 41S0 34.69 0 26.933c0-4.965 1.781-10.444 5.294-16.286zm.729 15.974c0 .663.535 1.2 1.195 1.2s1.196-.537 1.196-1.2v-2.247l5.952 5.982c.225.225.529.351.846.351.317 0 .62-.126.845-.351l2.776-2.79 1.871 1.88c.467.469 1.224.469 1.691 0 .467-.47.467-1.23 0-1.7l-2.716-2.728c-.467-.47-1.224-.47-1.691 0l-2.776 2.79-5.108-5.132h2.236c.66 0 1.196-.538 1.196-1.202 0-.663-.535-1.2-1.196-1.2H7.218c-.66 0-1.195.537-1.195 1.2v5.147z"
            />
          </svg>
        </div>
        <div class="position-absolute" style="left:140px; top: 35px">
          <ul>
            <li class="list-none">Rank sessions according to</li>
            <li class="list-none primary bold fs--16">Choose the value:</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.width-100vw{
  width: 80vw !important;
}
.fit-content2 {
  min-width: 620px;
  width: 60vw;
}
.fit-content3 {
  min-width: 420px;
  width: 24vw;
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
  max-width: 560px;
  min-width: 500px;
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
<script>
import { Chart } from "highcharts-vue";

export default {
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [
              [1, 7],
              [2, 6],
              [3, 5],
              [4, 4],
              [5, 3],
              [6, 4],
              [7, 5]
            ]
          }
        ],
        xAxis: {
          title: { text: "Day of the week" },
          categories: [
            "0",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ]
        },
        yAxis: {
          title: { text: "Time of day" },
          categories: [
            "0",
            "12:00",
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00"
          ],
          padding: 0.1
        },
        chart: {
          padding: 0.1
        },
        title: {
          text: ""
        },
        tooltip: {
          formatter: function() {
            return "Thursday, 3:00";
          }
        },
        padding: 1,
        style: {
          fontFamily: "@AJannatLT"
        }
      }
    };
  },
  components: {
    chart: Chart
<<<<<<< HEAD
=======
  },
  chartOptions : {
    series: [
      {
        data: [
          [1, 7],
          [2, 6],
          [3, 5],
          [4, 4],
          [5, 3],
          [6, 4],
          [7, 5]
        ]
      }
    ],
    xAxis:{
      title: {text: "Day of the week"},
      categories: ["0", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday","Sunday"]
    },
    yAxis:{
      title: {text: "Time of day"},
      categories: ["0", "12:00", "1:00", "2:00", "3:00","4:00", "5:00","6:00","7:00","8:00"],
      padding: 0.1
    },
    chart:{
      padding: 0.1
    },
    title: {
      text: ""
    },
     tooltip: {
                formatter: function() {
                    return "Thursday, 3:00"
                }
            },
    padding: 1,
    style:{
      fontFamily: 'AJannatLT'
    }
>>>>>>> 1f9ccda451886670f423f04f22b2ca251f80a12c
  }
};
</script>
