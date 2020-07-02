<template>
  <div class="containerr">
    <div class="header__container">
      <div
        v-if="headerUI.back"
        @click="goBack"
        v-ripple
        class="header__back-btn"
      >
        <v-icon class="header__chevron-icon">mdi-chevron-left</v-icon>Atrás
      </div>
      <v-app-bar-nav-icon
        v-if="!headerUI.back"
        @click="openDrawer"
        class="header__btn-icon"
      ></v-app-bar-nav-icon>
      <div class="header__title">
        <span>{{ headerUI.title }}</span>
      </div>

      <v-btn
        v-if="headerBtn.type === 'BTN_ICON'"
        @click="onButtonRight(headerBtn.action)"
        icon
      >
        <v-icon class="header__btn-icon"> {{ headerBtn.icon }} </v-icon>
      </v-btn>
      <div
        v-if="headerBtn.type === 'BTN_TEXT_AND_ICON'"
        class="header__btn_box"
      >
        <v-btn @click="openPage('rodal-preguntas')" icon>
          <v-icon class="header__btn-icon"> {{ headerBtn.icon }} </v-icon>
        </v-btn>
        <div class="header__btn-text">
          {{ headerBtn.text }}
        </div>
      </div>
      <div
        v-if="headerBtn.type === 'BTN_TEXT'"
        @click="openAlert()"
        v-ripple
        class="header__btn-text"
      >
        {{ headerBtn.text }}
      </div>
      <div v-if="headerUI.blankSpace" class="header__blank-space"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import router from '@/router';

export default {
  data: () => ({
    shortTitle: false,
    saveIcon: false,
    saveButton: false,
    blankSpace: true
  }),
  computed: {
    ...mapState(['headerUI', 'headerBtn'])
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
      setTimeout(() => router.push(page), 100);
    },
    ...mapActions(['updateSharedUI', 'updateHeaderUI'])
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

.header__container
  z-index: 1
  background: #70A83B
  border-bottom: 1px solid #e2e2e2
  position: fixed
  top: 0
  left: 0
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  height: 60px
  padding: 0 15px

.header__back-btn
  padding-right: 5px
  border-radius: 3px
  color: white
  font-weight: 400
  font-size: 18px
  display: flex
  align-items: center

.header__chevron-icon
  color: white
  font-size: 30px !important
  margin-right: -5px

.header__title
  color: white
  font-weight: 500
  font-weight: 400
  font-size: 18.5px
  overflow: hidden
  text-align: center

.header__btn-icon
  color: white !important

.header__btn_box
  display: flex
  align-items: center

.header__btn-text
  color: white
  margin-left: 0px

.header__btn-text
  padding: 0 5px
  border-radius: 3px
  color: white
  font-weight: 400
  font-size: 17px

.header__blank-space
  height: 10px
  width: 50px

</style>

