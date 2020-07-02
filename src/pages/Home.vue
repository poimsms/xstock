<template>
  <div>
    <div class="home__upper-box">
      <div class="home__upper-box_text">
        Herramientas de Apoyo al Manejo del Bosque Nativo
      </div>
      <img class="home__upper-box_logo" src="@/assets/logo_infor.png" />
    </div>

    <v-tabs v-model="tabs" fixed-tabs slider-color="yellow" color="#70A83B">
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#mobile-tabs-5-1">
        <div>
          <v-icon>mdi-pencil</v-icon>
          <div class="home__tabs_text">Ingresos</div>
        </div>
      </v-tab>

      <v-tab href="#mobile-tabs-5-2">
        <div>
          <v-icon>mdi-database-search</v-icon>
          <div class="home__tabs_text">Revisión</div>
        </div>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item
        v-for="tab in mTabs"
        :key="tab.i"
        :value="'mobile-tabs-5-' + tab.i"
      >
        <div
          v-for="item in tab.list"
          :key="item.i"
          v-ripple
          @click="openPage(item.page)"
          class="home__tabs_item"
        >
          <div class="homes_tabs_item_text">{{ item.text }}</div>
          <div
            style="display:flex"
            @click.stop
            @mousedown.stop
            @touchstart.stop
          >
            <v-tooltip top :open-on-hover="false" :open-on-click="true">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon class="home__info-icon"
                    >mdi-information-outline</v-icon
                  >
                </v-btn>
              </template>
              <div class="home__help-box">
                <div>{{ item.help }}</div>
              </div>
            </v-tooltip>
            <v-icon class="home__chevron-icon">mdi-chevron-right</v-icon>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>

  <Install />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import router from '@/router';
import Install from "@/components/Install";

export default {
  data: () => ({
    tabs: null,
    mTabs: [
      {
        i: 1,
        list: [
          {
            i: 1,
            text: 'Ingreso de Rodal',
            page: 'rodal-ingreso',
            help: 'Esto es un texto informativo para orientar al usuario'
          },
          {
            i: 2,
            text: 'Ingreso de Inventario',
            page: 'rodal-ingreso',
            help: 'Esto es un texto informativo para orientar al usuario'
          }
        ]
      },
      {
        i: 2,
        list: [
          {
            i: 1,
            text: 'Revisión de Rodal',
            page: 'rodal-ingreso',
            help: 'Esto es un texto informativo para orientar al usuario'
          },
          {
            i: 2,
            text: 'Revisión de Inventario',
            page: 'rodal-ingreso',
            help: 'Esto es un texto informativo para orientar al usuario'
          }
        ]
      }
    ]
  }),
  methods: {
    openPage(page) {
      setTimeout(() => router.push(page), 200);
    },
    ...mapActions(['updateHeaderUI'])
  },
  mounted() {
    this.updateHeaderUI({
      title: 'XStock',
      back: false,
      blankSpace: true,
      txtRight: false,
      btnRight: false
    });
  },
  components: {
    Install,
  }
};
</script>


<style lang="sass" scoped>
.home__upper-box
  text-align: center
  margin-top: 85px
  color: #555
  margin-bottom: 20px
  padding: 10px

.home__upper-box_text
  margin-bottom: 20px

.home__upper-box_logo
  display: inline-block
  margin-left: 10px
  width: 60px
  height: 60px
  object-fit: cover

.home__tabs_text
  text-transform: Capitalize

.home__tabs_item
  margin-top: 20px
  border-bottom: 1px solid #eee
  padding: 15px 15px
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between

.homes_tabs_item_text
  color: #333
  font-size: 17px

.home__info-icon
  color: #70A83B

.home__chevron-icon
  color: #888

.home__help-box
  width: 200px
</style>