<template>
  <div>
    <div
      v-if="true"
      style="box-shadow: 0 5px 5px -5px #777;background:white;z-index:1;position:fixed;top:60px;left:0;width:100%;padding:5px;display:flex;align-items:center;justify-content:space-between"
    >
      <v-icon style="color:#666;font-size:18px;margin-right:5px">mdi-close</v-icon>
      <v-img src="@/assets/logo.png" style="width:40px"></v-img>
      <div style="color:#444;margin-left:7px">
        <div style="font-weight:500">XStock</div>
        <div style="font-size:14px;color:#555;font-size:14px">
          <!-- Lo que necesitas en todo momento! -->
          Encuentra lo que necesitas más rápido
          <!-- Encuentra lo que necesitas más rápido con nuestra web app! -->
          <!-- Accede información offline -->
        </div>
      </div>
      <div
        v-ripple
        style="margin-left:10px;padding:5px 15px;color:white;background:orange;border-radius:15px;font-size:15px"
      >Agregar</div>
    </div>

    <div
      v-if="false"
      style="position:fixed;top:70px;left:0;width:100%;padding:5px;background:#444;display:flex;align-items:center;justify-content:space-between"
    >
      <v-icon style="color:white;font-size:30px;margin-right:10px">mdi-close</v-icon>
      <div style="color:white">
        <div>Your site</div>
        <div>Herramientas de Apoyo al Manejo del Bosque Nativo</div>
      </div>
      <div style="padding:10px 15px;color:#444;background:white;border-radius:15px">Instalar</div>
    </div>

    <div
      style="margin-top:85px;color:#555;margin-bottom:20px;padding:10px;text-align:center"
    >Herramientas de Apoyo al Manejo del Bosque Nativo</div>
    <div style="width:100%;display:flex;justify-content:center;margin-bottom:20px">
      <img
        src="@/assets/logo_infor.png"
        style="margin-left:10px;width:60px;height:60px;object-fit:cover"
      />
    </div>
    <v-tabs v-model="tabs" fixed-tabs slider-color="yellow" color="#70A83B">
      <v-tabs-slider></v-tabs-slider>

      <v-tab v-if="bottomIconsTabs" href="#mobile-tabs-5-1">
        <div style="display:flex">
          <v-icon>mdi-pencil</v-icon>
          <div style="margin-left:10px;text-transform:Capitalize">Ingreso</div>
        </div>
      </v-tab>

      <v-tab v-if="bottomIconsTabs" href="#mobile-tabs-5-2">
        <div style="display:flex">
          <v-icon>mdi-database-search</v-icon>
          <div style="margin-left:10px;text-transform:Capitalize">Revisión</div>
        </div>
      </v-tab>

      <v-tab v-if="sideIconsTabs" href="#mobile-tabs-5-1">
        <div>
          <v-icon>mdi-pencil</v-icon>
          <div style="text-transform:Capitalize">Ingresos</div>
        </div>
      </v-tab>

      <v-tab v-if="sideIconsTabs" href="#mobile-tabs-5-2">
        <div>
          <v-icon>mdi-database-search</v-icon>
          <div style="text-transform:Capitalize">Revisión</div>
        </div>
      </v-tab>

      <v-tab v-if="normalTabs" href="#mobile-tabs-5-1">Ingresos</v-tab>
      <v-tab v-if="normalTabs" href="#mobile-tabs-5-2">Revisión</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item v-for="tab in mTabs" :key="tab.i" :value="'mobile-tabs-5-' + tab.i">
        <div
          v-for="item in tab.list"
          :key="item.i"
          v-ripple
          @click="openPage(item.page)"
          style="margin-top:20px;border-bottom:1px solid #eee;padding: 15px 15px;width:100%;display:flex;align-items:center;justify-content:space-between"
        >
          <div style="color:#333;font-size:17px">{{item.text}}</div>
          <div style="display:flex" @click.stop @mousedown.stop @touchstart.stop>
            <v-tooltip top :open-on-hover="false" :open-on-click="true">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon style="color:#70A83B">mdi-information-outline</v-icon>
                </v-btn>
              </template>
              <div style="width:200px">
                <div>{{item.help}}</div>
              </div>
            </v-tooltip>
            <v-icon style="color:#888">mdi-chevron-right</v-icon>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>

    <div
      v-if="false"
      style="position:fixed;bottom:0;left:0;width:100%;background:rgb(112, 168, 59);color:white;padding:20px;display:flex;justify-content:center;flex-wrap:wrap"
    >
      <div
        style="font-size:18px;width:100%;text-align:center"
      >Accede información offline usando nuestra web app.</div>
      <div
        style="margin-top:10px;padding: 5px 25px;color:rgb(112, 168, 59);background:white;border-radius:15px"
      >Instalar</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "@/router";

export default {
  data: () => ({
    bottomIconsTabs: false,
    sideIconsTabs: true,
    normalTabs: false,
    tabs: null,
    mTabs: [
      {
        i: 1,
        list: [
          {
            i: 1,
            text: "Ingreso de Rodal",
            page: "rodal-ingreso",
            help: "Esto es un texto informativo para orientar al usuario"
          },
          {
            i: 2,
            text: "Ingreso de Inventario",
            page: "rodal-ingreso",
            help: "Esto es un texto informativo para orientar al usuario"
          }
        ]
      },
      {
        i: 2,
        list: [
          {
            i: 1,
            text: "Revisión de Rodal",
            page: "rodal-ingreso",
            help: "Esto es un texto informativo para orientar al usuario"
          },
          {
            i: 2,
            text: "Revisión de Inventario",
            page: "rodal-ingreso",
            help: "Esto es un texto informativo para orientar al usuario"
          }
        ]
      }
    ]
  }),
  methods: {
    openPage(page) {
      setTimeout(() => router.push(page), 200);
    },
    ...mapActions(["updateHeaderUI"])
  },
  mounted() {
    this.updateHeaderUI({
      title: "XStock",
      back: false,
      blankSpace: true,
      txtRight: false,
      btnRight: false
    });
  }
};
</script>