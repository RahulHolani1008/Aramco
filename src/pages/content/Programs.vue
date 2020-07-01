<template>
  <div>
    <div class="d-flex mb-2 justify-space-around">
      <button
        class="btn rounded-100 search primary--border mt-1"
        style="height:40px; width: 40px;"
      >
        <i
          class="fas fa-2x fa-angle-left primary vertical-centered centered"
        ></i>
      </button>
      <div class="dropdown mt-1">
        <button
          type="button"
          class="btn black-border-solid rounded-20 search"
          style="padding: 5px 20px; outline: none;"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Action <i class="fas fa-angle-down"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Delete</a>
          <a class="dropdown-item" href="#">Edit</a>
        </div>
      </div>
      <div class="dropdown mt-1">
        <button
          type="button"
          class="btn black-border-solid rounded-20 btn-no-border red--bg white"
          style="padding: 5px 20px; outline: none;"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Confirm
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#"
            ><i class="far fa-copy primary"></i> Repeat</a
          >
          <a class="dropdown-item" href="#"
            ><i class="fas fa-share-alt primary"></i> Publish on LMS</a
          >
          <a class="dropdown-item" href="#"
            ><i class="fas fa-download primary"></i> Download</a
          >
          <a class="dropdown-item red" href="#"
            ><i class="fas fa-trash red"></i> Delete</a
          >
        </div>
      </div>
      <button
        class="btn primary--bg btn-no-border white rounded-50"
        style="padding: 5px 20px; outline: none;"
        data-toggle="modal"
        data-target="#newSpecializationModal"
      >
        <i class="fas fa-plus white--bg rounded-100 mr-2 transparent"></i>
        New course
      </button>
      <div class="col-sm-3 position-relative">
        <input
          type="text"
          class="form-control pt-2 pb-2 pr-5 search rounded-50"
          placeholder="Search"
        />
        <i class="fas position-absolute right-30 bottom-15 fa-search"></i>
      </div>
    </div>
    <nav aria-label="Departments Pagination">
      <div class="position-relative">
        <input
          class="form-check-input position-absolute left-65 bottom-40p"
          type="radio"
          name="gridRadios"
          id="gridRadios2"
          value="option2"
        />
        <div class="card width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid grid-de-la-programs py-1 px-1">
            <div class="rounded-100 lightBlue--bg height-75px width-75px">
              <img src="../../assets/atom.png" height="100%" width="100%" />
            </div>
            <span class="vertical-centered">Financial Management</span>
            <ul class="vertical-centered list-none">
              <li><i class="fas fa-user"></i> Rahul Holani</li>
              <li><i class="fas fa-clipboard-list"></i> Program</li>
            </ul>
            <div
              class="rounded-50 width-100 lightGray--bg height-100 d-flex justify-space-around"
            >
              <button
                type="button"
                class="btn btn-no-border vertical-centered rounded-50 height-max primary--bg white"
              >
                <i class="far fa-eye"></i> View Sessions
              </button>
              <div class="vertical-centered"><Slider /></div>
              <div
                class="rounded-100 pt-2 pb-2 px-2 vertical-centered black--bg"
                style="fill: white;"
              >
                <svg width="40" height="40" viewBox="0 0 17 19">
                  <path
                    d="M7.872 17.71h.716c.962-.003 1.805-.63 2.065-1.536.107-.374-.116-.761-.498-.866-.382-.104-.779.114-.886.488-.089.312-.385.523-.716.511h-.717c-.331.012-.628-.2-.717-.511l-.33-1.172c-.093-.385-.348-.713-.702-.904-.115-.05-.23-.112-.344-.175-.115-.064-.223-.134-.33-.204-.343-.243-.78-.325-1.19-.224l-1.212.301c-.31.077-.635-.058-.795-.33l-.344-.581c-.162-.273-.118-.617.107-.842l.875-.862c.28-.3.413-.705.365-1.108-.021-.264-.021-.529 0-.793.037-.406-.11-.808-.401-1.1l-.875-.87c-.224-.225-.268-.57-.107-.842l.344-.582c.16-.274.49-.41.803-.33l1.211.302c.406.099.835.02 1.176-.217.227-.15.467-.281.717-.393.356-.185.616-.508.716-.89l.337-1.186c.09-.312.386-.523.717-.512h.717c.331-.011.628.2.717.512l.287 1.171c.117.406.414.738.81.905.114.056.236.112.344.175.107.064.222.134.33.204.343.243.778.325 1.19.224l1.197-.301c.31-.077.635.058.795.33l.344.581c.162.273.118.617-.107.842l-.875.862c-.293.294-.44.7-.401 1.108.022.264.022.529 0 .793-.037.406.11.808.401 1.1l.882.877c.225.225.269.57.107.842l-.344.582c-.16.274-.49.41-.802.33-.384-.098-.776.129-.875.504-.099.376.132.759.516.856.937.236 1.92-.169 2.402-.989l.344-.59c.47-.813.336-1.832-.33-2.503l-.875-.87c.032-.34.032-.682 0-1.023l.875-.912c.673-.672.808-1.7.33-2.517l-.344-.582c-.484-.815-1.462-1.216-2.395-.982l-1.211.302c-.146-.104-.296-.2-.452-.288-.148-.084-.3-.161-.459-.231l-.35-1.171C10.365 1.512 9.518.88 8.552.88h-.717c-.962.003-1.805.63-2.065 1.536L5.434 3.6c-.32.141-.627.31-.917.505L3.305 3.81c-.934-.233-1.913.172-2.394.989l-.344.582c-.482.819-.347 1.85.33 2.525l.889.876c-.031.34-.031.683 0 1.024l-.868.89c-.68.675-.815 1.712-.33 2.532l.345.582c.483.815 1.461 1.216 2.394.982l1.211-.302c.146.104.296.2.452.288.15.084.3.161.459.231l.344 1.171c.264.908 1.113 1.533 2.079 1.529zM4.653 9.295c0-1.936 1.605-3.506 3.584-3.506 1.98 0 3.584 1.57 3.584 3.506 0 1.936-1.604 3.506-3.584 3.506s-3.584-1.57-3.584-3.506zm1.434 0c0 1.162.962 2.104 2.15 2.104s2.15-.942 2.15-2.104c0-1.162-.962-2.104-2.15-2.104s-2.15.942-2.15 2.104z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <input
          class="form-check-input position-absolute left-65 bottom-40p"
          type="radio"
          name="gridRadios"
          id="gridRadios2"
          value="option2"
        />
        <div class="card width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid grid-de-la-programs py-1 px-1">
            <div class="rounded-100 lightBlue--bg height-75px width-75px">
              <img src="../../assets/atom.png" height="100%" width="100%" />
            </div>
            <span class="vertical-centered">Financial Management</span>
            <ul class="vertical-centered list-none">
              <li><i class="fas fa-user"></i> Rahul Holani</li>
              <li><i class="fas fa-clipboard-list"></i> Program</li>
            </ul>
            <div
              class="rounded-50 width-100 lightGray--bg height-100 d-flex justify-space-around"
            >
              <button
                type="button"
                class="btn btn-no-border vertical-centered rounded-50 height-max primary--bg white"
              >
                <i class="far fa-eye"></i> View Sessions
              </button>
              <div class="vertical-centered"><Slider /></div>
              <div
                class="rounded-100 pt-2 pb-2 px-2 vertical-centered black--bg"
                style="fill: white;"
              >
                <svg width="40" height="40" viewBox="0 0 17 19">
                  <path
                    d="M7.872 17.71h.716c.962-.003 1.805-.63 2.065-1.536.107-.374-.116-.761-.498-.866-.382-.104-.779.114-.886.488-.089.312-.385.523-.716.511h-.717c-.331.012-.628-.2-.717-.511l-.33-1.172c-.093-.385-.348-.713-.702-.904-.115-.05-.23-.112-.344-.175-.115-.064-.223-.134-.33-.204-.343-.243-.78-.325-1.19-.224l-1.212.301c-.31.077-.635-.058-.795-.33l-.344-.581c-.162-.273-.118-.617.107-.842l.875-.862c.28-.3.413-.705.365-1.108-.021-.264-.021-.529 0-.793.037-.406-.11-.808-.401-1.1l-.875-.87c-.224-.225-.268-.57-.107-.842l.344-.582c.16-.274.49-.41.803-.33l1.211.302c.406.099.835.02 1.176-.217.227-.15.467-.281.717-.393.356-.185.616-.508.716-.89l.337-1.186c.09-.312.386-.523.717-.512h.717c.331-.011.628.2.717.512l.287 1.171c.117.406.414.738.81.905.114.056.236.112.344.175.107.064.222.134.33.204.343.243.778.325 1.19.224l1.197-.301c.31-.077.635.058.795.33l.344.581c.162.273.118.617-.107.842l-.875.862c-.293.294-.44.7-.401 1.108.022.264.022.529 0 .793-.037.406.11.808.401 1.1l.882.877c.225.225.269.57.107.842l-.344.582c-.16.274-.49.41-.802.33-.384-.098-.776.129-.875.504-.099.376.132.759.516.856.937.236 1.92-.169 2.402-.989l.344-.59c.47-.813.336-1.832-.33-2.503l-.875-.87c.032-.34.032-.682 0-1.023l.875-.912c.673-.672.808-1.7.33-2.517l-.344-.582c-.484-.815-1.462-1.216-2.395-.982l-1.211.302c-.146-.104-.296-.2-.452-.288-.148-.084-.3-.161-.459-.231l-.35-1.171C10.365 1.512 9.518.88 8.552.88h-.717c-.962.003-1.805.63-2.065 1.536L5.434 3.6c-.32.141-.627.31-.917.505L3.305 3.81c-.934-.233-1.913.172-2.394.989l-.344.582c-.482.819-.347 1.85.33 2.525l.889.876c-.031.34-.031.683 0 1.024l-.868.89c-.68.675-.815 1.712-.33 2.532l.345.582c.483.815 1.461 1.216 2.394.982l1.211-.302c.146.104.296.2.452.288.15.084.3.161.459.231l.344 1.171c.264.908 1.113 1.533 2.079 1.529zM4.653 9.295c0-1.936 1.605-3.506 3.584-3.506 1.98 0 3.584 1.57 3.584 3.506 0 1.936-1.604 3.506-3.584 3.506s-3.584-1.57-3.584-3.506zm1.434 0c0 1.162.962 2.104 2.15 2.104s2.15-.942 2.15-2.104c0-1.162-.962-2.104-2.15-2.104s-2.15.942-2.15 2.104z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <input
          class="form-check-input position-absolute left-65 bottom-40p"
          type="radio"
          name="gridRadios"
          id="gridRadios2"
          value="option2"
        />
        <div class="card width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid grid-de-la-programs py-1 px-1">
            <div class="rounded-100 lightBlue--bg height-75px width-75px">
              <img src="../../assets/atom.png" height="100%" width="100%" />
            </div>
            <span class="vertical-centered">Financial Management</span>
            <ul class="vertical-centered list-none">
              <li><i class="fas fa-user"></i> Rahul Holani</li>
              <li><i class="fas fa-clipboard-list"></i> Program</li>
            </ul>
            <div
              class="rounded-50 width-100 lightGray--bg height-100 d-flex justify-space-around"
            >
              <button
                type="button"
                class="btn btn-no-border vertical-centered rounded-50 height-max primary--bg white"
              >
                <i class="far fa-eye"></i> View Sessions
              </button>
              <div class="vertical-centered"><Slider /></div>
              <div
                class="rounded-100 pt-2 pb-2 px-2 vertical-centered black--bg"
                style="fill: white;"
              >
                <svg width="40" height="40" viewBox="0 0 17 19">
                  <path
                    d="M7.872 17.71h.716c.962-.003 1.805-.63 2.065-1.536.107-.374-.116-.761-.498-.866-.382-.104-.779.114-.886.488-.089.312-.385.523-.716.511h-.717c-.331.012-.628-.2-.717-.511l-.33-1.172c-.093-.385-.348-.713-.702-.904-.115-.05-.23-.112-.344-.175-.115-.064-.223-.134-.33-.204-.343-.243-.78-.325-1.19-.224l-1.212.301c-.31.077-.635-.058-.795-.33l-.344-.581c-.162-.273-.118-.617.107-.842l.875-.862c.28-.3.413-.705.365-1.108-.021-.264-.021-.529 0-.793.037-.406-.11-.808-.401-1.1l-.875-.87c-.224-.225-.268-.57-.107-.842l.344-.582c.16-.274.49-.41.803-.33l1.211.302c.406.099.835.02 1.176-.217.227-.15.467-.281.717-.393.356-.185.616-.508.716-.89l.337-1.186c.09-.312.386-.523.717-.512h.717c.331-.011.628.2.717.512l.287 1.171c.117.406.414.738.81.905.114.056.236.112.344.175.107.064.222.134.33.204.343.243.778.325 1.19.224l1.197-.301c.31-.077.635.058.795.33l.344.581c.162.273.118.617-.107.842l-.875.862c-.293.294-.44.7-.401 1.108.022.264.022.529 0 .793-.037.406.11.808.401 1.1l.882.877c.225.225.269.57.107.842l-.344.582c-.16.274-.49.41-.802.33-.384-.098-.776.129-.875.504-.099.376.132.759.516.856.937.236 1.92-.169 2.402-.989l.344-.59c.47-.813.336-1.832-.33-2.503l-.875-.87c.032-.34.032-.682 0-1.023l.875-.912c.673-.672.808-1.7.33-2.517l-.344-.582c-.484-.815-1.462-1.216-2.395-.982l-1.211.302c-.146-.104-.296-.2-.452-.288-.148-.084-.3-.161-.459-.231l-.35-1.171C10.365 1.512 9.518.88 8.552.88h-.717c-.962.003-1.805.63-2.065 1.536L5.434 3.6c-.32.141-.627.31-.917.505L3.305 3.81c-.934-.233-1.913.172-2.394.989l-.344.582c-.482.819-.347 1.85.33 2.525l.889.876c-.031.34-.031.683 0 1.024l-.868.89c-.68.675-.815 1.712-.33 2.532l.345.582c.483.815 1.461 1.216 2.394.982l1.211-.302c.146.104.296.2.452.288.15.084.3.161.459.231l.344 1.171c.264.908 1.113 1.533 2.079 1.529zM4.653 9.295c0-1.936 1.605-3.506 3.584-3.506 1.98 0 3.584 1.57 3.584 3.506 0 1.936-1.604 3.506-3.584 3.506s-3.584-1.57-3.584-3.506zm1.434 0c0 1.162.962 2.104 2.15 2.104s2.15-.942 2.15-2.104c0-1.162-.962-2.104-2.15-2.104s-2.15.942-2.15 2.104z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="position-relative">
        <input
          class="form-check-input position-absolute left-65 bottom-40p"
          type="radio"
          name="gridRadios"
          id="gridRadios2"
          value="option2"
        />
        <div class="card width-90 rounded-100px centered mb-3">
          <div class="card-body d-grid grid-de-la-programs py-1 px-1">
            <div class="rounded-100 lightBlue--bg height-75px width-75px">
              <img src="../../assets/atom.png" height="100%" width="100%" />
            </div>
            <span class="vertical-centered">Financial Management</span>
            <ul class="vertical-centered list-none">
              <li><i class="fas fa-user"></i> Rahul Holani</li>
              <li><i class="fas fa-clipboard-list"></i> Program</li>
            </ul>
            <div
              class="rounded-50 width-100 lightGray--bg height-100 d-flex justify-space-around"
            >
              <button
                type="button"
                class="btn btn-no-border vertical-centered rounded-50 height-max primary--bg white"
              >
                <i class="far fa-eye"></i> View Sessions
              </button>
              <div class="vertical-centered"><Slider /></div>
              <div
                class="rounded-100 pt-2 pb-2 px-2 vertical-centered black--bg"
                style="fill: white;"
              >
                <svg width="40" height="40" viewBox="0 0 17 19">
                  <path
                    d="M7.872 17.71h.716c.962-.003 1.805-.63 2.065-1.536.107-.374-.116-.761-.498-.866-.382-.104-.779.114-.886.488-.089.312-.385.523-.716.511h-.717c-.331.012-.628-.2-.717-.511l-.33-1.172c-.093-.385-.348-.713-.702-.904-.115-.05-.23-.112-.344-.175-.115-.064-.223-.134-.33-.204-.343-.243-.78-.325-1.19-.224l-1.212.301c-.31.077-.635-.058-.795-.33l-.344-.581c-.162-.273-.118-.617.107-.842l.875-.862c.28-.3.413-.705.365-1.108-.021-.264-.021-.529 0-.793.037-.406-.11-.808-.401-1.1l-.875-.87c-.224-.225-.268-.57-.107-.842l.344-.582c.16-.274.49-.41.803-.33l1.211.302c.406.099.835.02 1.176-.217.227-.15.467-.281.717-.393.356-.185.616-.508.716-.89l.337-1.186c.09-.312.386-.523.717-.512h.717c.331-.011.628.2.717.512l.287 1.171c.117.406.414.738.81.905.114.056.236.112.344.175.107.064.222.134.33.204.343.243.778.325 1.19.224l1.197-.301c.31-.077.635.058.795.33l.344.581c.162.273.118.617-.107.842l-.875.862c-.293.294-.44.7-.401 1.108.022.264.022.529 0 .793-.037.406.11.808.401 1.1l.882.877c.225.225.269.57.107.842l-.344.582c-.16.274-.49.41-.802.33-.384-.098-.776.129-.875.504-.099.376.132.759.516.856.937.236 1.92-.169 2.402-.989l.344-.59c.47-.813.336-1.832-.33-2.503l-.875-.87c.032-.34.032-.682 0-1.023l.875-.912c.673-.672.808-1.7.33-2.517l-.344-.582c-.484-.815-1.462-1.216-2.395-.982l-1.211.302c-.146-.104-.296-.2-.452-.288-.148-.084-.3-.161-.459-.231l-.35-1.171C10.365 1.512 9.518.88 8.552.88h-.717c-.962.003-1.805.63-2.065 1.536L5.434 3.6c-.32.141-.627.31-.917.505L3.305 3.81c-.934-.233-1.913.172-2.394.989l-.344.582c-.482.819-.347 1.85.33 2.525l.889.876c-.031.34-.031.683 0 1.024l-.868.89c-.68.675-.815 1.712-.33 2.532l.345.582c.483.815 1.461 1.216 2.394.982l1.211-.302c.146.104.296.2.452.288.15.084.3.161.459.231l.344 1.171c.264.908 1.113 1.533 2.079 1.529zM4.653 9.295c0-1.936 1.605-3.506 3.584-3.506 1.98 0 3.584 1.57 3.584 3.506 0 1.936-1.604 3.506-3.584 3.506s-3.584-1.57-3.584-3.506zm1.434 0c0 1.162.962 2.104 2.15 2.104s2.15-.942 2.15-2.104c0-1.162-.962-2.104-2.15-2.104s-2.15.942-2.15 2.104z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul class="pagination justify-content-center pb-0 mb-0">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >Prev</a
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    <div class="modal fade" id="newSpecializationModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body d-flex justify-space-around">
            <input
              type="text"
              class="primary--border rounded-20 form-control width-75"
              placeholder="The name of the Scientific Subject"
            />
          </div>
          <div class="modal-body d-flex justify-space-around">
            <div class="dropdown mt-1 width-75 position-relative">
              <button
                type="button"
                class="btn gray--border rounded-20 width-100 text-left white--bg"
                style="padding: 5px 20px; outline: none;"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Select Departments
              </button>
              <i
                class="fas fa-angle-down position-absolute right-20 top-10"
              ></i>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Financial Management</a>
                <a class="dropdown-item" href="#">Computer Sciences</a>
                <a class="dropdown-item" href="#">Economics</a>
                <a class="dropdown-item" href="#">Mathematics</a>
              </div>
            </div>
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
<script>
import Vue from "vue";
import Slider from "../../components/Slider.vue";

export default {
  components: {
    'Slider': Slider
  }
}
</script>
