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

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
