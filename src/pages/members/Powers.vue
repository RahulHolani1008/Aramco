<template>
  <div>
    <div class="d-flex ml-4 mb-2">
      <button
        class="btn primary--bg btn-no-border btn-lg white rounded-50 ml-100 mb-2"
        data-toggle="modal"
        data-target="#newDeptModal"
      >
        <i class="fas fa-plus white--bg rounded-100 mr-2 transparent"></i>
        New role
      </button>
    </div>
    <div
      class="width-90 d-flex violet--bg ml-5 my-3 pl-4 rounded-50 py-3 vertical-centered"
    >
      <i class="fas fa-3x red fa-exclamation-circle"></i
      ><span class="vertical-centered pl-4">
        The amendment to the powers will be reflected on all users of the
        system, according to the modified rile, to modify powers individually,
        you can go to members option</span
      >
    </div>
    <nav aria-label="Departments Pagination">
      <div class="position-relative">
        <div
          class="card width-90 rounded-100px centered mb-3 none--bg border--none shadow--none"
        >
          <div class="card-body d-grid grid-de-la-powers py-2 none--bg px-5">
            <span class="vertical-centered">The name of the role</span>
            <span class="vertical-centered">Modified date</span>
            <span class="vertical-centered">Date created</span>
            <div></div>
          </div>
        </div>
      </div>
      <div
        class="position-relative"
        v-for="(power, index) in powers"
        :key="index"
      >
        <span class="position-absolute left-30 bottom-30p">#</span>
        <div class="card width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid grid-de-la-powers py-2 px-5">
            <span class="vertical-centered">{{ power.role }}</span>
            <span class="vertical-centered">{{ power.startDate }}</span>
            <span class="vertical-centered">{{ power.endDate }}</span>
            <div
              class="rounded-50 width-100 py-2 lightGray--bg height-100 d-flex justify-space-around"
            >
              <button
                type="button"
                class="btn btn-no-border green--bg btn-md px-4 py-3 white rounded-50"
              >
                Activated
              </button>
              <div
                class="rounded-100 pt-2 pb-2 px-2 vertical-centered black--bg"
                style="fill: white;"
              >
                <svg width="30" height="30" viewBox="0 0 17 19">
                  <path
                    d="M7.872 17.71h.716c.962-.003 1.805-.63 2.065-1.536.107-.374-.116-.761-.498-.866-.382-.104-.779.114-.886.488-.089.312-.385.523-.716.511h-.717c-.331.012-.628-.2-.717-.511l-.33-1.172c-.093-.385-.348-.713-.702-.904-.115-.05-.23-.112-.344-.175-.115-.064-.223-.134-.33-.204-.343-.243-.78-.325-1.19-.224l-1.212.301c-.31.077-.635-.058-.795-.33l-.344-.581c-.162-.273-.118-.617.107-.842l.875-.862c.28-.3.413-.705.365-1.108-.021-.264-.021-.529 0-.793.037-.406-.11-.808-.401-1.1l-.875-.87c-.224-.225-.268-.57-.107-.842l.344-.582c.16-.274.49-.41.803-.33l1.211.302c.406.099.835.02 1.176-.217.227-.15.467-.281.717-.393.356-.185.616-.508.716-.89l.337-1.186c.09-.312.386-.523.717-.512h.717c.331-.011.628.2.717.512l.287 1.171c.117.406.414.738.81.905.114.056.236.112.344.175.107.064.222.134.33.204.343.243.778.325 1.19.224l1.197-.301c.31-.077.635.058.795.33l.344.581c.162.273.118.617-.107.842l-.875.862c-.293.294-.44.7-.401 1.108.022.264.022.529 0 .793-.037.406.11.808.401 1.1l.882.877c.225.225.269.57.107.842l-.344.582c-.16.274-.49.41-.802.33-.384-.098-.776.129-.875.504-.099.376.132.759.516.856.937.236 1.92-.169 2.402-.989l.344-.59c.47-.813.336-1.832-.33-2.503l-.875-.87c.032-.34.032-.682 0-1.023l.875-.912c.673-.672.808-1.7.33-2.517l-.344-.582c-.484-.815-1.462-1.216-2.395-.982l-1.211.302c-.146-.104-.296-.2-.452-.288-.148-.084-.3-.161-.459-.231l-.35-1.171C10.365 1.512 9.518.88 8.552.88h-.717c-.962.003-1.805.63-2.065 1.536L5.434 3.6c-.32.141-.627.31-.917.505L3.305 3.81c-.934-.233-1.913.172-2.394.989l-.344.582c-.482.819-.347 1.85.33 2.525l.889.876c-.031.34-.031.683 0 1.024l-.868.89c-.68.675-.815 1.712-.33 2.532l.345.582c.483.815 1.461 1.216 2.394.982l1.211-.302c.146.104.296.2.452.288.15.084.3.161.459.231l.344 1.171c.264.908 1.113 1.533 2.079 1.529zM4.653 9.295c0-1.936 1.605-3.506 3.584-3.506 1.98 0 3.584 1.57 3.584 3.506 0 1.936-1.604 3.506-3.584 3.506s-3.584-1.57-3.584-3.506zm1.434 0c0 1.162.962 2.104 2.15 2.104s2.15-.942 2.15-2.104c0-1.162-.962-2.104-2.15-2.104s-2.15.942-2.15 2.104z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="pagination pagination-lg justify-content-center pb-0 mb-0">
        <li class="page-item hidden">
          <a
            class="page-link gray px-5"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >PREVIOUS</a
          >
        </li>
        <li class="page-item">
          <a class="page-link primary--bg white" href="#">1</a>
        </li>
        <li class="page-item"><a class="page-link gray" href="#">2</a></li>
        <li class="page-item"><a class="page-link gray" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link gray px-5" href="#">NEXT</a>
        </li>
      </ul>
    </nav>

    <div class="modal fade mt-0" id="newDeptModal" role="dialog">
      <div class="modal-dialog ">
        <!-- Modal content-->
        <div class="modal-content mt-0">
          <div class="modal-body d-flex justify-space-around mt-0">
            <div class="group maxwidth-350">
              <input type="text" class="pl-4" required />
              <span class="highlight"></span>
              <label>template name</label>
            </div>
          </div>

          <div class="modal-body d-flex justify-space-around">
            <textarea
              placeholder="Notice text"
              class="border-radius-12 border-on-focus gray--border-2 width-75 height-170 outine-none pt-2 pb-2 pl-2 pr-2"
            >
            </textarea>
          </div>

          <div class="modal-body d-flex justify-space-around">
            <input
              type="file"
              name="file"
              id="file"
              class="rounded-20 inputfile gray--border width-90 text-wrap height-100px px-5"
            />
            <label
              for="file"
              class="text-wrap gray-dashed-border px-5 py-4 text-center rounded-20"
            >
              <i class="fas fa-upload mb-2" style="font-size: 50px;"></i>
              <BR />
              Upload the template file from your device here
            </label>
          </div>
          <div class="d-flex justify-space-around mb-5 mt-2">
            <button
              type="button"
              class="btn white rounded-20 btn-no-border width-33 primary--bg btn-lg"
              data-dismiss="modal"
            >
              Add
            </button>
            <button
              type="button"
              class="btn white--bg rounded-20 width-33 btn-lg gray--border"
              style="outline: none;"
              data-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Slider from "../../components/Slider.vue";

@Component({
  components: {
    Slider
  }
})
export default class Powers extends Vue {
  powers = [
    {
      role: "Administrator",
      startDate: "2019-11-18",
      endDate: "2019-12-18",
      enabled: true
    },
    {
      role: "General Supervisor",
      startDate: "2019-11-18",
      endDate: "2019-12-18",
      enabled: true
    },
    {
      role: "Scientific site supervisor",
      startDate: "2019-11-18",
      endDate: "2019-12-18",
      enabled: true
    },
    {
      role: "Live broadcast supervisor",
      startDate: "2019-11-18",
      endDate: "2019-12-18",
      enabled: true
    },
    {
      role: "Content officer",
      startDate: "2019-11-18",
      endDate: "2019-12-18",
      enabled: true
    }
  ];
}
</script>
