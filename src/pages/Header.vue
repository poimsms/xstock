<template>
  <div>
    <!-- <div v-if="UI.route === 'inicio'" style="position:fixed;top:0;left:0;width:100%;background:#70A83B;display:flex;align-items:center;justify-content:space-between;padding:10px 15px 10px 15px">
    <v-app-bar-nav-icon @click="openDrawer" style="color:white"></v-app-bar-nav-icon>
    <div style="color:white;font-weight:400;font-size:20px">XStock</div>
    <div style="height:10px;width:30px"></div>
    </div>-->

    <div
      style="z-index:1;background:#70A83B;border-bottom:1px solid #e2e2e2;position:fixed;top:0;left:0;width:100%;display:flex;align-items:center;justify-content:space-between;padding:15px"
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
        style="color:white;font-weight::500;font-weight:400;font-size:20px;overflow:hidden;height:30px;text-align:center"
      >
        <span class="showOnIphone">{{headerUI.title}}</span>
        <!-- <span v-if="!shortTitle" class="showOnIphone">{{headerUI.longTitle}}</span> -->
        <span class="showOnAndroid">{{headerUI.longTitle}}</span>
      </div>
      <!-- <div v-if="saveButton" v-ripple style="padding:0 5px;border-radius:3px;color:white;font-weight:400;font-size:17px;">
      Agregar
    </div>
    <v-btn v-if="saveIcon" icon>
      <v-icon style="color:white">mdi-check-bold</v-icon>
      </v-btn>-->
      <div v-if="blankSpace" style="height:10px;width:50px"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    shortTitle: false,
    saveIcon: false,
    saveButton: false,
    blankSpace: true
  }),
  computed: {
    ...mapState(["UI"])
  },
  methods: {
    openDrawer() {
      setTimeout(() => {
        this.updateUI({ drawer: true });
      }, 100);
    },
    goBack() {
      setTimeout(() => {
        this.updateUI({ route: "inicio" });
      }, 100);
    },
    ...mapActions(["updateUI"])
  }
};
</script>

<style lang="sass" scoped>
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

