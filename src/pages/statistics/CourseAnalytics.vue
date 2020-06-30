<template>
  <div>
    <card class="card card-left">
      <h5 class="card-title gray">Average training time</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
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
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Slider from "../../components/Slider.vue";
import { Chart } from "highcharts-vue";

@Component({
  components: {
    Slider,
    highcharts: Chart
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
    ]
  };
}
</script>
