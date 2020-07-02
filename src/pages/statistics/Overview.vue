<template>
  <div>    
      <div class="justify-space-around width-24" v-for="(abovesummary, index) in abovesummarys" v-bind:key="index">
        <div class="card card-left d-flex vertical-centered fit-content m-2 py-3 px-3">
          <div class="card-body">
            <div class="rounded-100 lightBlue--bg-left py-3 px-3 mt-3 height-55px width-55px" style="float:left;">
              <img :src="require('@/assets/icons/' + abovesummary.logo)" height="100%" width="100%" />
            </div>
            <div class="px-3 py-3 justify-flex-end vertical-centered mt-2" style="float: left; width: 120px;">
              <div class="bold primary fs--16 width-100 mt--30 py-1">{{ abovesummary.Number }}</div>
              <div class="bold gray fs--16 width-100 mt--30 uppercase py-1">{{ abovesummary.Type }}</div>
            </div>                        
          </div>
        </div>
      </div>

  <div class="justify-space-around width-48" v-for="(belowsummary, index) in belowsummarys" v-bind:key="index">
        <div class="card rounded-20 fit-content m-2 height-150px py-3 px-3" :class="`primary--bg--${index}`">
          <div class="card-body">
            <div class="rounded-100 bg-light py-3 px-3 height-75px width-75px mt-3" style="float:left;">
              <img :src="require('@/assets/icons/' + belowsummary.logo)" height="100%" width="100%" />
            </div>
            <div class="justify-flex-end vertical-centered py-3 px-3" style="float: left;
    width: 280px;">
              <div class="normal white fs--12 width-100 mt--30 uppercase py-1">{{ belowsummary.subHeading }}</div>
              <div class="bold white fs--16 width-100 mt--30 uppercase py-1">{{ belowsummary.heading }}</div>
              <div class="bold white fs--25 width-100 mt--30 uppercase py-1">{{ belowsummary.number }} <span class="normal fs--12">{{ belowsummary.unit }}</span></div>              
              <div class="normal white fs--12 width-100 mt--30 uppercase small">{{ belowsummary.perRate }}</div>
            </div>                        
          </div>
        </div>
      </div>
      
  </div>
</template>
<style lang="scss" scoped>
.lightBlue--bg-left {
  background-color: #edf9fd;
  border-radius: 40px 20px 20px 20px !important;
}
.height-150px {
  height: 150px;
}
.primary--bg--0 .small {
    font-size: 11px;
    width: 162px !important;
}
.fs--25 {
    font-size: 25px;
}

.fs--15 {
    font-size: 15px;    
}

.fs--12 {
  font-size: 12px;
}
.uppercase {
  text-transform: uppercase;
}

.primary--bg--0 {
    background-image: linear-gradient(287deg, #06e8a7, #0c9ee2) !important;
    border: none;
}
.primary--bg--1 {
    background-image: linear-gradient(287deg, #0dcfda, #06e8a7) !important;
    border: none;
}
.primary--bg--2 {
    background-image: linear-gradient(287deg, #06e8a7, #0c9ee2) !important;
    border: none;
}
.primary--bg--3 {
    background-image: linear-gradient(287deg, #ff7f2e, #fe7452) !important;
    border: none;
}
.width-24 {
    width: 24%;
    float: left;
}
.width-48 {
  width: 48%;
  float: left;
}
.rounded-20 {
  border-radius: 20px;
}
.width-55 {
  width: 55px;
}
.height-55 {
  height: 55px;
}
.bg-light {
  background: #eaf2ff52 !important;
}
</style>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      abovesummarys: [
        {
          logo: "Trainees.svg",
          Number: "42540",
          Type: "Trainees"
        },
        {
          logo: "Trainers.svg",
          Number: "345",
          Type: "Trainers"
        },
        {
         logo: "open_book.svg",
         Number: "1472",
         Type: "Courses"
        },
        {
          logo: "Sessions.svg",
          Number: "13248",
          Type: "Sessions"
        }
      ],
      belowsummarys: [
        {
          logo: "Star.svg",
          subHeading: "Average Completion",
          heading: "Rate",
          number: "98",
          unit: "%",
          perRate: "Of Trainees Completed 100% of Attended Sessions"
        },
        {
          logo: "memebers.svg",
          subHeading: "Average Number",
          heading: "Of Trainers",
          number: "24",
          unit: "Trainer",
          perRate: "Per Session"
        },
        {
          logo: "Certificate.svg",
          subHeading: "Total Number Of",
          heading: "Issued Certificates",
          number: "37650",
          unit: "",
          perRate: "Certificates"
        },
        {
          logo: "timer.svg",
          subHeading: "Cumulative",
          heading: "Training Time",
          number: "794880",
          unit: "Mins",
          perRate: "Until Today"
        }
      ]            
    };
  }
};
</script>
