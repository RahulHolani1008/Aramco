import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Specializations from "../pages/content/Specializations.vue";
import Departments from "../pages/content/Departments.vue";
import Programs from "../pages/content/Programs.vue";
import ScientificContentPeople from "../pages/content/ScientificContentPeople.vue";
import ScientificContentAssessment from "../pages/content/ScientificContentAssessment.vue";
import ScientificContentSession from "../pages/content/ScientificContentSessions.vue";
import TermsAndConditions from "../pages/service/TermsAndConditions.vue";
import MergingServices from "../pages/service/MergingServices.vue";
import FAQ from "../pages/service/FAQ.vue";
import Setup from "../pages/service/Setup.vue";
import Complaint from "../pages/settings/Complaint.vue";
import Logs from "../pages/settings/Logs.vue";
import Survey from "../pages/communication/Survey.vue";
import Notifications from "../pages/communication/Notifications.vue";
import MailingSystem from "../pages/communication/MailingSystem.vue";
import CourseAnalytics from "../pages/statistics/CourseAnalytics.vue";
import Complaints from "../pages/complaints/Complaints.vue";
import CourseRequests from "../pages/complaints/CourseRequests.vue";
import Powers from "../pages/members/Powers.vue";
import BanLog from "../pages/members/BanLog.vue";
import Trainers from "../pages/members/Trainers.vue";
import Trainees from "../pages/members/Trainees.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/content/specializations",
    name: "Specializations",
    component: Specializations
  },
  {
    path: "/content/departments",
    name: "Departments",
    component: Departments
  },
  {
    path: "/content/programs",
    name: "Programs",
    component: Programs
  },
  {
    path: "/content/specializations/people",
    name: "SpecializationPeople",
    component: ScientificContentPeople
  },
  {
    path: "/content/specializations/assessment",
    name: "SpecializationAssessment",
    component: ScientificContentAssessment
  },
  {
    path: "/content/specializations/session",
    name: "SpecializationSession",
    component: ScientificContentSession
  },
  {
    path: "/services/tnc",
    name: "TermsAndConditions",
    component: TermsAndConditions
  },
  {
    path: "/services/merging",
    name: "MergingServices",
    component: MergingServices
  },
  {
    path: "/services/FAQ",
    name: "FAQ",
    component: FAQ
  },
  {
    path: "/services/setup",
    name: "Setup",
    component: Setup
  },
  {
    path: "/settings/complaint",
    name: "Complaint",
    component: Complaint
  },
  {
    path: "/settings/logs",
    name: "Logs",
    component: Logs
  },
  {
    path: "/communication/survey",
    name: "Survey",
    component: Survey
  },
  {
    path: "/communication/notifications",
    name: "Notifications",
    component: Notifications
  },
  {
    path: "/communication/mailing",
    name: "MailingSystem",
    component: MailingSystem
  },
  {
    path: "/statistics/course-analytics",
    name: "CourseAnalytics",
    component: CourseAnalytics
  },
  {
    path: "/complaints/complaints",
    name: "Complaints",
    component: Complaints
  },
  {
    path: "/complaints/requests",
    name: "CourseRequests",
    component: CourseRequests
  },
  {
    path: "/members/powers",
    name: "Powers",
    component: Powers
  },
  {
    path: "/members/ban-log",
    name: "BanLog",
    component: BanLog
  },
  {
    path: "/members/trainers",
    name: "Trainers",
    component: Trainers
  },
  {
    path: "/members/trainees",
    name: "Trainees",
    component: Trainees
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
