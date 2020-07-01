<template>
  <div>
    <div class="d-flex mt-4 ml-4 mb-2">
      <button
        class="btn primary--bg btn-no-border btn-lg white rounded-50 ml-100 mb-2"
        data-toggle="modal"
        data-target="#teacherEdit"
      >
        <i class="fas fa-plus white--bg rounded-100 mr-2 transparent"></i>
        New role
      </button>
    </div>
    <div class="width-90 d-flex violet--bg ml-5 my-3 pl-4 rounded-50 py-3 vertical-centered">
      <i class="fas fa-3x red fa-exclamation-circle"></i>
      <span class="vertical-centered pl-4">
        The amendment to the powers will be reflected on all users of the
        system, according to the modified rile, to modify powers individually,
        you can go to members option
      </span>
    </div>
    <nav aria-label="Departments Pagination" class="mt-4">
      <div class="position-relative">
        <div class="card width-90 rounded-100px centered mb-3 none--bg border--none shadow--none">
          <div class="card-body d-grid grid-de-la-powers py-2 none--bg px-5">
            <span class="vertical-centered">The name of the role</span>
            <span class="vertical-centered">Modified date</span>
            <span class="vertical-centered">Date created</span>
            <div></div>
          </div>
        </div>
      </div>
      <div class="position-relative" v-for="(power, index) in powers" :key="index">
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
              >Activated</button>
              <div
                class="rounded-100 pt-2 pb-2 px-2 vertical-centered black--bg"
                style="fill: white;"
                data-toggle="modal"
                data-target="#teacherView"
              >
                <svg width="30" height="30" viewBox="0 0 17 19">
                  <path
                    d="M7.872 17.71h.716c.962-.003 1.805-.63 2.065-1.536.107-.374-.116-.761-.498-.866-.382-.104-.779.114-.886.488-.089.312-.385.523-.716.511h-.717c-.331.012-.628-.2-.717-.511l-.33-1.172c-.093-.385-.348-.713-.702-.904-.115-.05-.23-.112-.344-.175-.115-.064-.223-.134-.33-.204-.343-.243-.78-.325-1.19-.224l-1.212.301c-.31.077-.635-.058-.795-.33l-.344-.581c-.162-.273-.118-.617.107-.842l.875-.862c.28-.3.413-.705.365-1.108-.021-.264-.021-.529 0-.793.037-.406-.11-.808-.401-1.1l-.875-.87c-.224-.225-.268-.57-.107-.842l.344-.582c.16-.274.49-.41.803-.33l1.211.302c.406.099.835.02 1.176-.217.227-.15.467-.281.717-.393.356-.185.616-.508.716-.89l.337-1.186c.09-.312.386-.523.717-.512h.717c.331-.011.628.2.717.512l.287 1.171c.117.406.414.738.81.905.114.056.236.112.344.175.107.064.222.134.33.204.343.243.778.325 1.19.224l1.197-.301c.31-.077.635.058.795.33l.344.581c.162.273.118.617-.107.842l-.875.862c-.293.294-.44.7-.401 1.108.022.264.022.529 0 .793-.037.406.11.808.401 1.1l.882.877c.225.225.269.57.107.842l-.344.582c-.16.274-.49.41-.802.33-.384-.098-.776.129-.875.504-.099.376.132.759.516.856.937.236 1.92-.169 2.402-.989l.344-.59c.47-.813.336-1.832-.33-2.503l-.875-.87c.032-.34.032-.682 0-1.023l.875-.912c.673-.672.808-1.7.33-2.517l-.344-.582c-.484-.815-1.462-1.216-2.395-.982l-1.211.302c-.146-.104-.296-.2-.452-.288-.148-.084-.3-.161-.459-.231l-.35-1.171C10.365 1.512 9.518.88 8.552.88h-.717c-.962.003-1.805.63-2.065 1.536L5.434 3.6c-.32.141-.627.31-.917.505L3.305 3.81c-.934-.233-1.913.172-2.394.989l-.344.582c-.482.819-.347 1.85.33 2.525l.889.876c-.031.34-.031.683 0 1.024l-.868.89c-.68.675-.815 1.712-.33 2.532l.345.582c.483.815 1.461 1.216 2.394.982l1.211-.302c.146.104.296.2.452.288.15.084.3.161.459.231l.344 1.171c.264.908 1.113 1.533 2.079 1.529zM4.653 9.295c0-1.936 1.605-3.506 3.584-3.506 1.98 0 3.584 1.57 3.584 3.506 0 1.936-1.604 3.506-3.584 3.506s-3.584-1.57-3.584-3.506zm1.434 0c0 1.162.962 2.104 2.15 2.104s2.15-.942 2.15-2.104c0-1.162-.962-2.104-2.15-2.104s-2.15.942-2.15 2.104z"
                  />
                </svg>
              </div>

              <!-- Modal dashboard_members_teacher_view -->

              <div class="modal fade" id="teacherView" role="dialog">
                <div class="modal-dialog">
                  <!-- Modal content-->
                  <div class="modal-content" style="border-radius: 30px;">
                    <div class="modal-body d-flex ml-4">
                      <span class="user_view mt-5p position-relative"
                        ><i class="fas fa-user-circle"></i
                      ></span>
                      <span class="ml-2 data">
                        <p>
                          Zaid Al-Suleiman<br />
                          <span class="trainee_color">trainee</span><br />
                          <span class="join_date">Join Date 2020-03-15</span>
                        </p>
                      </span>
                    </div>

                    <div class="modal-body d-flex justify-space-around">
                      <span class="information">
                        <p class="communication_info">
                          Communication <br />information
                          <span class="mail_info"
                            ><i class="far fa-envelope"></i>
                            &nbsp;nini.great@academi.sa</span
                          >
                          <span class="phone_info"
                            ><i class="fas fa-phone"></i>597889553</span
                          >
                        </p>
                      </span>
                    </div>
                    <div class="modal-body d-flex justify-space-around">
                      <span class="information">
                        <p class="depart_info">
                          Departments
                          <span class="mail_info">Mechanical Engineering</span>
                        </p>
                      </span>
                    </div>

                    <div class="d-flex justify-space-around mb-5 mt-2">
                      <button
                        type="button"
                        class="btn white rounded-50 btn-no-border width-30 red--bg white btn-sm py-1"
                        data-dismiss="modal"
                      >
                        Membership ban
                      </button>

                      <button
                        type="button"
                        class="btn white--bg rounded-50 btn-no-border width-30 black--border btn-sm py-1"
                        data-dismiss="modal"
                      >
                        <svg
                          width="28"
                          height="28"
                           viewBox="7 7 17 19"
                          style="fill: white;"
                          class="white black--bg p-1 border-100 rounded-50 mr-2"
                        >
                          <path 
                          d="M21.23088,16.85856 L22.44984,18.6 L21.71088,18.6 L21.71088,19.8 C21.71088,21.52032 20.3112,22.92 18.59088,22.92 L18.59088,22.92 L12.11088,22.92 C10.4712,22.92 9.12312,21.64872 9,20.04 L9,20.04 L9.96432,20.04 C10.08408,21.11856 11.00088,21.96 12.11088,21.96 L12.11088,21.96 L18.59088,21.96 C19.782,21.96 20.75088,20.99088 20.75088,19.8 L20.75088,19.8 L20.75088,18.6 L20.01192,18.6 L21.23088,16.85856 Z M14.60136,16.57512 L15.6396,20.52024 L15.34608,20.52024 L14.55408,19.53024 L14.84904,18.94008 L14.05056,18.67392 L14.25696,16.81776 C14.36448,16.72752 14.4804,16.6476 14.60136,16.57512 L14.60136,16.57512 Z M13.70232,17.46384 L13.53096,19.00632 L14.17248,19.22016 L13.98744,19.59 L14.73144,20.52 L13.31088,20.52 L13.31088,18.84 C13.31088,18.33528 13.4556,17.86512 13.70232,17.46384 L13.70232,17.46384 Z M18.19944,17.46384 C18.44616,17.86512 18.59088,18.33528 18.59088,18.84 L18.59088,18.84 L18.59088,20.52 L17.17032,20.52 L17.91432,19.59 L17.72928,19.22016 L18.3708,19.00632 Z M17.30016,16.57488 C17.42112,16.64736 17.53704,16.72728 17.64456,16.81752 L17.64456,16.81752 L17.85096,18.67368 L17.05248,18.93984 L17.34744,19.53 L16.55544,20.52 L16.26216,20.52 Z M15.95088,16.2 C16.27056,16.2 16.5756,16.26 16.85952,16.3644 L16.85952,16.3644 L15.95088,19.81728 L15.04224,16.3644 C15.32616,16.26 15.6312,16.2 15.95088,16.2 Z M15.95088,11.88 C17.0112667,11.88 17.87088,12.7396133 17.87088,13.8 C17.87088,14.8603867 17.0112667,15.72 15.95088,15.72 C14.8904933,15.72 14.03088,14.8603867 14.03088,13.8 C14.03088,12.7396133 14.8904933,11.88 15.95088,11.88 Z M19.79088,9 C21.43056,9 22.77864,10.27128 22.90176,11.88 L22.90176,11.88 L21.93744,11.88 C21.81768,10.80144 20.90088,9.96 19.79088,9.96 L19.79088,9.96 L13.31088,9.96 C12.11976,9.96 11.15088,10.92912 11.15088,12.12 L11.15088,12.12 L11.15088,13.32 L11.88984,13.32 L10.67088,15.06144 L9.45192,13.32 L10.19088,13.32 L10.19088,12.12 C10.19088,10.39968 11.59056,9 13.31088,9 L13.31088,9 Z M19.79088,10.92 C20.45256,10.92 20.99088,11.45832 20.99088,12.12 L20.99088,12.12 L20.99088,12.36 L20.51088,12.36 L20.51088,12.12 C20.51088,11.72304 20.18784,11.4 19.79088,11.4 L19.79088,11.4 L19.07088,11.4 L19.07088,10.92 Z M18.59088,10.92 L18.59088,11.4 L18.11088,11.4 L18.11088,10.92 L18.59088,10.92 Z"
                          />
                        </svg>
                        Permissions
                      </button>

                      <button
                        type="button"
                        class="btn white rounded-50 width-20 btn-sm black--bg py-1"
                        style="outline: none;"
                        data-dismiss="modal"
                      >
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 17 19"
                          class="white--bg p-1 border-100 rounded-50 mr-2"
                        >
                          <path
                            d="M7.872 17.71h.716c.962-.003 1.805-.63 2.065-1.536.107-.374-.116-.761-.498-.866-.382-.104-.779.114-.886.488-.089.312-.385.523-.716.511h-.717c-.331.012-.628-.2-.717-.511l-.33-1.172c-.093-.385-.348-.713-.702-.904-.115-.05-.23-.112-.344-.175-.115-.064-.223-.134-.33-.204-.343-.243-.78-.325-1.19-.224l-1.212.301c-.31.077-.635-.058-.795-.33l-.344-.581c-.162-.273-.118-.617.107-.842l.875-.862c.28-.3.413-.705.365-1.108-.021-.264-.021-.529 0-.793.037-.406-.11-.808-.401-1.1l-.875-.87c-.224-.225-.268-.57-.107-.842l.344-.582c.16-.274.49-.41.803-.33l1.211.302c.406.099.835.02 1.176-.217.227-.15.467-.281.717-.393.356-.185.616-.508.716-.89l.337-1.186c.09-.312.386-.523.717-.512h.717c.331-.011.628.2.717.512l.287 1.171c.117.406.414.738.81.905.114.056.236.112.344.175.107.064.222.134.33.204.343.243.778.325 1.19.224l1.197-.301c.31-.077.635.058.795.33l.344.581c.162.273.118.617-.107.842l-.875.862c-.293.294-.44.7-.401 1.108.022.264.022.529 0 .793-.037.406.11.808.401 1.1l.882.877c.225.225.269.57.107.842l-.344.582c-.16.274-.49.41-.802.33-.384-.098-.776.129-.875.504-.099.376.132.759.516.856.937.236 1.92-.169 2.402-.989l.344-.59c.47-.813.336-1.832-.33-2.503l-.875-.87c.032-.34.032-.682 0-1.023l.875-.912c.673-.672.808-1.7.33-2.517l-.344-.582c-.484-.815-1.462-1.216-2.395-.982l-1.211.302c-.146-.104-.296-.2-.452-.288-.148-.084-.3-.161-.459-.231l-.35-1.171C10.365 1.512 9.518.88 8.552.88h-.717c-.962.003-1.805.63-2.065 1.536L5.434 3.6c-.32.141-.627.31-.917.505L3.305 3.81c-.934-.233-1.913.172-2.394.989l-.344.582c-.482.819-.347 1.85.33 2.525l.889.876c-.031.34-.031.683 0 1.024l-.868.89c-.68.675-.815 1.712-.33 2.532l.345.582c.483.815 1.461 1.216 2.394.982l1.211-.302c.146.104.296.2.452.288.15.084.3.161.459.231l.344 1.171c.264.908 1.113 1.533 2.079 1.529zM4.653 9.295c0-1.936 1.605-3.506 3.584-3.506 1.98 0 3.584 1.57 3.584 3.506 0 1.936-1.604 3.506-3.584 3.506s-3.584-1.57-3.584-3.506zm1.434 0c0 1.162.962 2.104 2.15 2.104s2.15-.942 2.15-2.104c0-1.162-.962-2.104-2.15-2.104s-2.15.942-2.15 2.104z"
                          />
                        </svg>
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <ul class="pagination pagination-lg justify-content-center pb-0 mb-0">
        <li class="page-item hidden">
          <a class="page-link gray px-5" href="#" tabindex="-1" aria-disabled="true">PREVIOUS</a>
        </li>
        <li class="page-item">
          <a class="page-link primary--bg white" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link gray" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link gray" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link gray px-5" href="#">NEXT</a>
        </li>
      </ul>
    </nav>

    <div class="modal fade mt-0" id="teacherEdit" role="dialog">
      <div class="modal-dialog ">
        <!-- Modal content-->
        <div class="modal-content mt-0">
        <div class="modal-body modal_pdng d-flex justify-space-around">
            <input
              type="file"
              name="file"
              id="file"
              class="rounded-20 inputfile gray--border width-90 text-wrap height-100px"
            />
            <label
              for="file"
              class="text-wrap gray-dashed-border text-center rounded-50 width-75"
            >
              <span class="span_display"><i class="fas fa-user-circle mt-2" style="font-size: 60px;"></i></span>
             <span class="span_display ml-3 mt-0 mb-2"> Upload your avatar</span>
           <span class="span_display"><button
              type="button"
              class="btn white rounded-20 btn-no-border width-75 primary--bg btn-sm ml-4 mb-4"
              data-dismiss="modal"
            >
              Upload
            </button>
            </span>
            </label>
          </div>

          <div class="modal-body modal_pdng d-flex justify-space-around mt-0">
            <div class="group maxwidth-350">
              <input type="text" class="pl-4" required />
              <span class="highlight"></span>
              <label>Trainer name</label>
            </div>
            </div>
          <div class="modal-body modal_pdng d-flex justify-space-around mt-0">
             <div class="group maxwidth-350">
              <input type="text" class="pl-4" required />
              <span class="highlight"></span>
              <label>Email</label>
            </div>
            </div>

            <div class="modal-body modal_pdng d-flex justify-space-around mt-0">
               <div class="group maxwidth-350">
              <input type="text" class="pl-4" required />
              <span class="highlight"></span>
              <label>Mobile number</label>
            </div>
          </div>
       <div class="d-flex justify-space-around mb-5 mt-4">
            <button
              type="button"
              class="btn white rounded-20 btn-no-border width-33 primary--bg btn-sm"
              data-dismiss="modal"
            >
              Save settings
            </button>
            <button
              type="button"
              class="btn white--bg rounded-20 width-33 btn-sm gray--border"
              style="outline: none;"
              data-dismiss="modal"
            >Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bottom-30p {
  bottom: 30%;
}
.none--bg {
  background: none !important;
}
.violet--bg {
  background-image: linear-gradient(
    90deg,
    rgba(172, 187, 208, 0.2) 20%,
    rgba(172, 187, 208, 0) 100%
  ) !important;
}
.green--bg {
  background-color: #6dd400 !important;
}
.left-30 {
  left: 3%;
}
.modal-body.modal_pdng{
    padding: .5rem;
}
.span_display{
  display: inline-block;
}
.information {
  width: 85%;
}
.width-30 {
  width: 30%;
  size: 20px;
}
.trainee_color {
  color: #06e8a7;
  font-weight: 600;
}
.join_date {
  color: #929191;
  font-weight: 200;
  font-size: 10px;
}
.depart_info {
  font-size: 12px;
  font-weight: 700;
}
.width-20 {
  width: 20%;
}
.width-30 {
  width: 30%;
}

.mail_info {
  color: #929191;
  font-weight: 200;
  font-size: 12px;
  margin-left: 15%;
}
.phone_info {
  color: #929191;
  font-weight: 200;
  font-size: 12px;
  margin-left: 5%;
}
.communication_info {
  font-size: 12px;
  font-weight: 700;
}
.data {
    margin-top: 8%;
}

</style>
<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

export default {
  data() {
    return {
      powers: [
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
      ]
    };
  }
};
</script>
