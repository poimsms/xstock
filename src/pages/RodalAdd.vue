<template>
  <div style="padding:10px">
    <!-- <div style="margin-bottom:20px;display:flex;justify-content:space-between;align-items:center">
      <div style="font-size:20px;font-weight:700;color:#444">Especies Forestales</div>
      <div
        v-ripple
        style="background:#70A83B;border-radius:50%;width:35px;height:35px;display:flex;align-items:center;justify-content:center"
      >
        <v-icon style="color:white">mdi-plus</v-icon>
      </div>
    </div>-->
    <div style="color:#555;margin-bottom:10px;font-size:20px;font-weight:700">Predio y Rodal</div>
    <div style="display:flex;align-items:center">
      <div
        @click="openSelect"
        style="margin-right:10px;border-radius:4px;width:80%;background:whitesmoke;padding:10px;display:flex;align-items:center;justify-content:space-between"
      >
        <div style="color:#555">ID de rodal</div>
        <v-icon style="color:#555">mdi-menu-down</v-icon>
      </div>
      <v-btn icon @click="openAdd('rodal')">
        <v-icon style="font-size:30px;color:#bbb">mdi-plus-circle</v-icon>
      </v-btn>
    </div>

    <div style="margin-top:10px;display:flex;align-items:center">
      <div
        @click="openSelect"
        style="margin-right:10px;border-radius:4px;width:80%;background:whitesmoke;padding:10px;display:flex;align-items:center;justify-content:space-between"
      >
        <div style="color:#555">ID de parcela</div>
        <v-icon style="color:#555">mdi-menu-down</v-icon>
      </div>
      <v-btn icon @click="openAdd('rodal')">
        <v-icon style="font-size:30px;color:#bbb">mdi-plus-circle</v-icon>
      </v-btn>
    </div>

    <div style="color:#555;margin-top:10px;margin-bottom:10px;padding:10px 0">Ubicación</div>

    <v-text-field color="#70A83B" type="number" label="Latitud" prepend-icon="mdi-map-marker"></v-text-field>

    <v-text-field
      type="number"
      style="margin-top:-10px"
      color="#70A83B"
      label="Longitud"
      prepend-icon="mdi-map-marker"
    ></v-text-field>

    <div style="color:#555;margin-top:10px;margin-bottom:10px;padding:10px 0">General</div>

    <div
      v-ripple
      @click="openDatePicker"
      style="border-bottom:1px solid #eee;padding: 15px 5px;width:100%;display:flex;align-items:center;justify-content:space-between"
    >
      <div style="display:flex;align-items:center">
        <v-icon>mdi-calendar</v-icon>
        <div id="showOnIphone" style="color:#888;margin-left:10px">
          <span class="showOnIphone">Fecha</span>
          <span class="showOnAndroid">Fecha de evaluación</span>
        </div>
      </div>
      <div style="display:flex">
        <div>16/6/2020</div>
        <v-icon style="color:#888">mdi-chevron-right</v-icon>
      </div>
    </div>

    <v-text-field
      style="margin-top:0px"
      color="#70A83B"
      label="Área basal"
      type="number"
      prepend-icon="mdi-ruler"
      append-icon="mdi-information-outline"
    ></v-text-field>

    <div
      v-ripple
      @click="openSearch('rodal-especies')"
      style="margin-top:-20px;border-bottom:1px solid #eee;padding: 15px 5px;width:100%;display:flex;align-items:center;justify-content:space-between"
    >
      <div style="display:flex;align-items:center">
        <v-icon>mdi-tree</v-icon>
        <div style="color:#888;margin-left:10px">Especie principal</div>
      </div>
      <div style="display:flex">
        <v-icon style="color:#888">mdi-chevron-right</v-icon>
      </div>
    </div>

    <div v-if="normalButton" style="display:flex;justify-content:center">
      <v-btn style="background:#70A83B;color:white;margin-top:30px" outlined>Agregar</v-btn>
    </div>

    <UISelect />
    <UIAdd />
    <UISearch />
    <UIGPS />

    <div
      v-if="footerButton"
      @click="openPage('rodal-resultados')"
      style="position:fixed;bottom:0;left:0;width:100%;padding:15px;background:white;box-shadow: 0 -5px 5px -5px #999"
    >
      <v-btn depressed block style="margin-top:0px">Agregar</v-btn>
    </div>

    <div style="width:100%;height:100px"></div>

    <v-btn v-if="fabButton" fab style="position:fixed;bottom:20px;right:15px;background:whitesmoke">
      <v-icon style="color:#666">mdi-check-bold</v-icon>
    </v-btn>

    <v-bottom-sheet v-model="rodalAddUI.date">
      <v-sheet class="text-center" height="270px">
        <v-date-picker v-model="myDate" no-title></v-date-picker>
      </v-sheet>
    </v-bottom-sheet>

    <div
      v-if="false"
      style="position:fixed;bottom:0;left:0;width:100%;background:white;padding:15px"
    >
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div
          style="background:#70A83B;border-radius:50%;width:35px;height:35px;display:flex;align-items:center;justify-content:center"
        >
          <v-icon style="color:white">mdi-map-marker</v-icon>
        </div>
        <div style="margin-left:20px;margin-right:10px">
          <div style="font-weight:500">Ubicación GPS</div>
          <div style="font-size:14px">Necesitamos tener acceso a tu Ubicación</div>
        </div>
        <v-icon style="color:#666;margin-bottom:10px">mdi-close</v-icon>
      </div>
      <div style="margin-top:10px;display:flex;justify-content:flex-end">
        <div
          style="background:blue;font-size:13px;color:white;padding:5px 15px;border-radius:5px"
        >PERMITIR</div>
      </div>
    </div>
  </div>
</template>


<script>
import UISearch from "@/components/UISearch";
import UISelect from "@/components/UISelect";
import UIAdd from "@/components/UIAdd";
import UIGPS from "@/components/UIGPS";

import router from "@/router";

import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    normalButton: false,
    footerButton: true,
    fabButton: false,
    tabs: null,
    myDate: null,
    options: ["Castaños", "Manzanos", "Arrayán"]
  }),
  methods: {
    withAnimation(payload) {
      setTimeout(() => this.updateSharedUI(payload), 150);
    },
    openAdd() {
      this.withAnimation({ add: true });
    },
    openDatePicker() {
      this.updateRodalAddUI({ date: true });
    },
    openSearch() {
      this.withAnimation({ search: true });
    },
    openSelect() {
      this.withAnimation({
        select: true,
        selectTitle: "Seleccinar rodal",
        selectData: this.options
      });
    },
    openPage(page) {
      setTimeout(() => router.push(page), 200);
    },
    ...mapActions([
      "updateHeaderUI",
      "updateRodalAddUI",
      "updateSharedUI",
      "openSelectUI"
    ])
  },
  mounted() {
    this.withAnimation({ gps: true });
    this.updateHeaderUI({
      title: "Ingreso de Rodal",
      back: true,
      blankSpace: true,
      txtRight: false,
      btnRight: false
    });
  },
  computed: {
    ...mapState(["rodalAddUI", "sharedUI"])
  },
  components: {
    UISelect,
    UIAdd,
    UISearch,
    UIGPS
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