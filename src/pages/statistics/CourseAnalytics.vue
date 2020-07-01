<template>
<div>
  <div class="d-flex justify-space-around">
    <div class="card card-left fit-content ml-4" style="height: max-content">
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
  <div class="d-flex justify-space-around">
    <div class="card card-left ml-5 mt-2" style="width: 35%; height: 490px;">
      <div
        class="card-title gray--color pt-3 mx-4 mt-2 px-4 blue-gradient left-rounded"
      >
        <img
          src="../../assets/icons/analytics_2.svg"
          class="pb-3 mr-2"
          height="5%"
          width="5%"
        />&nbsp;&nbsp;TIME PERIOD WHERE MOST SESSIONS HAPPENED
        <span class="position-absolute right-0 top--10 mr-2 pr-2 blue-gradient-reverse py-3 right-rounded">Past 7 days</span>
      </div>
      <chart :options="chartOptions"></chart>
    </div>
  <div class="card card-left ml-5 mt-2" style="width: 35%; height: 490px;">
      <div
        class="card-title gray--color pt-3 mx-4 mt-2 px-4 blue-gradient left-rounded"
      >
        <img
          src="../../assets/icons/analytics_2.svg"
          class="pb-3 mr-2"
          height="5%"
          width="5%"
        />&nbsp;&nbsp;TIME PERIOD WHERE MOST SESSIONS HAPPENED
        <span class="position-absolute right-0 top--10 mr-2 pr-2 blue-gradient-reverse py-3 right-rounded">Past 7 days</span>
      </div>
      <chart :options="chartOptions"></chart>
    </div>
  </div>
  </div>
</template>
<style lang="scss" scoped>
.top--10{
  top: 25px;
}
.right-rounded{
  border-radius: 0px 20px 0px 0px;
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
    rgba(12, 158, 226, 0)100%
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
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Slider from "../../components/Slider.vue";
import { Chart } from "highcharts-vue";

@Component({
  components: {
    Slider,
    chart: Chart
  }
})
export default class CourseAnalytics extends Vue {
  chartOptions = {
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
      fontFamily: '@AJannatLT'
    }
  }
}
</script>
