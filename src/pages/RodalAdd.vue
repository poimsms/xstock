<template>
  <div class="rodal-add__container">
    <div class="rodal-add__title">Predio y Rodal</div>
    <div class="rodal-add__select">
      <div @click="openSelect" class="rodal-add__select_box">
        <div class="rodal-add__select_text">ID de rodal</div>
        <v-icon class="rodal-add__select_icon">mdi-menu-down</v-icon>
      </div>
      <v-btn icon @click="openAdd('rodal')">
        <v-icon class="rodal-add__plus-icon">mdi-plus-circle</v-icon>
      </v-btn>
    </div>

    <div class="rodal-add__select-10">
      <div @click="openSelect" class="rodal-add__select_box">
        <div class="rodal-add__select_text">ID de parcela</div>
        <v-icon class="rodal-add__select_icon">mdi-menu-down</v-icon>
      </div>
      <v-btn icon @click="openAdd('rodal')">
        <v-icon class="rodal-add__plus-icon">mdi-plus-circle</v-icon>
      </v-btn>
    </div>

    <div class="rodal-add__subtitle">Ubicación</div>

    <v-text-field
      color="#70A83B"
      type="number"
      label="Latitud"
      prepend-icon="mdi-map-marker"
    ></v-text-field>

    <v-text-field
      type="number"
      style="margin-top:-10px"
      color="#70A83B"
      label="Longitud"
      prepend-icon="mdi-map-marker"
    ></v-text-field>

    <div class="rodal-add__subtitle">General</div>

    <div v-ripple @click="openDatePicker" class="rodal-add__drop-box">
      <div class="rodal-add__drop-box_flex">
        <v-icon>mdi-calendar</v-icon>
        <div
          id="showOnIphone"
          class="rodal-add__drop-box_left-text"
          style="color:#888;margin-left:10px"
        >
          <span class="showOnIphone">Fecha</span>
          <span class="showOnAndroid">Fecha de evaluación</span>
        </div>
      </div>
      <div class="rodal-add__drop-box_flex">
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
      class="rodal-add__drop-box"
    >
      <div class="rodal-add__drop-box_flex">
        <v-icon>mdi-tree</v-icon>
        <div class="rodal-add__drop-box_left-text">Especie principal</div>
      </div>
      <div class="rodal-add__drop-box_flex">
        <div>16/6/2020</div>
        <v-icon style="color:#888">mdi-chevron-right</v-icon>
      </div>
    </div>

    <UISelect />
    <UIAdd />
    <UISearch />
    <UIGPS />

    <div @click="openPage('rodal-resultados')" class="rodal-add__footer-btn">
      <v-btn depressed block>Agregar</v-btn>
    </div>

    <div class="rodal-add__footer-spacer"></div>

    <v-bottom-sheet v-model="rodalAddUI.date">
      <v-sheet class="text-center" height="270px">
        <v-date-picker v-model="myDate" no-title></v-date-picker>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>


<script>
import UISearch from '@/components/UISearch';
import UISelect from '@/components/UISelect';
import UIAdd from '@/components/UIAdd';
import UIGPS from '@/components/UIGPS';

import router from '@/router';

import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    normalButton: false,
    footerButton: true,
    fabButton: false,
    tabs: null,
    myDate: null,
    options: ['Castaños', 'Manzanos', 'Arrayán']
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
        selectTitle: 'Seleccinar rodal',
        selectData: this.options
      });
    },
    openPage(page) {
      setTimeout(() => router.push(page), 200);
    },
    ...mapActions([
      'updateHeaderUI',
      'updateRodalAddUI',
      'updateSharedUI',
      'openSelectUI'
    ])
  },
  mounted() {
    this.withAnimation({ gps: true });
    this.updateHeaderUI({
      title: 'Ingreso de Rodal',
      back: true,
      blankSpace: true,
      txtRight: false,
      btnRight: false
    });
  },
  computed: {
    ...mapState(['rodalAddUI', 'sharedUI'])
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
.rodal-add__container
  padding: 10px

.rodal-add__title
  color: #555
  margin-bottom: 10px
  font-size: 20px
  font-weight: 700

.rodal-add__select
  display: flex
  align-items: center

.rodal-add__select_box
  margin-right: 10px
  border-radius: 4px
  width: 80%
  background: whitesmoke
  padding: 10px
  display: flex
  align-items: center
  justify-content: space-between

.rodal-add__select_text
  color: #555

.rodal-add__select_icon
  color: #555 !important

.rodal-add__plus-icon
  font-size: 30px !important
  color: #bbb !important

.rodal-add__select-10
  margin-top: 10px
  display: flex
  align-items: center

.rodal-add__subtitle
  color: #555
  margin-top: 10px
  margin-bottom: 10px
  padding: 10px 0

.rodal-add__drop-box
  border-bottom: 1px solid #eee
  padding: 15px 5px
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between

.rodal-add__drop-box_flex
  display: flex
  align-items: center

.rodal-add__drop-box_left-text
  color: #888
  margin-left: 10px

.rodal-add__footer-btn
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  padding: 15px
  background: white
  box-shadow: 0 -5px 5px -5px #999

.rodal-add__footer-spacer
  width: 100%
  height: 100px

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