<template>
  <div class="containerr">
    <!-- <div v-if="UI.route === 'inicio'" style="position:fixed;top:0;left:0;width:100%;background:#70A83B;display:flex;align-items:center;justify-content:space-between;padding:10px 15px 10px 15px">
    <v-app-bar-nav-icon @click="openDrawer" style="color:white"></v-app-bar-nav-icon>
    <div style="color:white;font-weight:400;font-size:20px">XStock</div>
    <div style="height:10px;width:30px"></div>
    </div>-->

    <div
      style="z-index:1;background:#70A83B;border-bottom:1px solid #e2e2e2;position:fixed;top:0;left:0;width:100%;display:flex;align-items:center;justify-content:space-between;height:60px;padding:0 15px"
    >
      <div
        v-if="headerUI.back"
        @click="goBack"
        v-ripple
        style="padding-right:5px;border-radius:3px;color:white;font-weight:400;font-size:18px;display:flex;align-items:center"
      >
        <v-icon style="color:white;font-size:30px !important;margin-right:-5px">mdi-chevron-left</v-icon>Atrás
      </div>
      <v-app-bar-nav-icon v-if="!headerUI.back" @click="openDrawer" style="color:white"></v-app-bar-nav-icon>
      <div
        style="color:white;font-weight::500;font-weight:400;font-size:18.5px;overflow:hidden;text-align:center"
      >
        <span class="showOnIphone">{{headerUI.title}}</span>
        <!-- <span v-if="!shortTitle" class="showOnIphone">{{headerUI.longTitle}}</span> -->
        <span class="showOnAndroid">{{headerUI.title}}</span>
      </div>
       <div v-if="headerUI.txtRight" @click="openAlert()" v-ripple style="padding:0 5px;border-radius:3px;color:white;font-weight:400;font-size:17px;">
      Listo
    </div>
     <v-btn v-if="headerUI.btnRight" @click="openPage('rodal-preguntas')" icon>
      <v-icon style="color:white">mdi-email-send</v-icon>
      </v-btn>
      <div v-if="headerUI.filter" style="display:flex;align-items:center">
       <v-btn @click="openPage('rodal-preguntas')" icon>
      <v-icon style="color:white">mdi-filter</v-icon>
      </v-btn>
      <div style="color:white;margin-left:0px">
        Filtro
      </div>
      </div>
      <!-- <div v-if="saveButton" v-ripple style="padding:0 5px;border-radius:3px;color:white;font-weight:400;font-size:17px;">
      Agregar
    </div> -->
    <!-- <v-btn v-if="saveIcon" icon>
      <v-icon style="color:white">mdi-check-bold</v-icon>
      </v-btn> -->
      <div v-if="headerUI.blankSpace" style="height:10px;width:50px"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "@/router";

export default {
  data: () => ({
    shortTitle: false,
    saveIcon: false,
    saveButton: false,
    blankSpace: true
  }),
  computed: {
    ...mapState(["headerUI"])
  },
  methods: {
    openDrawer() {
      setTimeout(() => this.updateSharedUI({ drawer: true }), 100);
    },
    openAlert() {
      setTimeout(() => this.updateSharedUI({ alert: true }), 100);
    },
    goBack() {
      setTimeout(() => router.back(), 100);
    },
    openPage(page) {
      setTimeout(() => router.push(page), 100)
    },
    ...mapActions(["updateSharedUI", "updateHeaderUI"])
  }
};
</script>

<style lang="sass" scoped>
.containerr
  -webkit-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  -o-user-select: none
  user-select: none

.showOnIphone
  display: none

.showOnAndroid
  display: none

@media (min-width: 370px) and (max-width: 500px)
  .showOnIphone
    display: none
  .showOnAndroid
    display: inline

@media (min-width: 0px) and (max-width: 360px)
  .showOnIphone
    display: inline
  .showOnAndroid
    display: none

</style>

