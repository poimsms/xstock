<template>
  <v-app>
    <v-sheet
      height="100vh"
      class="overflow-hidden"
      style="position:fixed;z-index:999;height:100vh;width:100vw;overflow-y:auto !important;height:100%;padding:10px"
    >
      <Header />
      <div style="height:60px;width:100%"></div>
      <router-view />
      <v-navigation-drawer v-model="sharedUI.drawer" absolute temporary width="300">
        <v-list-item style="padding: 20px 15px">
          <div style="margin-right:20px">

          <v-img src="https://randomuser.me/api/portraits/men/78.jpg" style="width:50px;height:50px;border-radius:50%;object-fit:cover"></v-img>
          </div>
          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            <div>johonleider@gmail.com</div>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense style="margin-top:30px">
          <v-list-item @click="openPage(item.page)" v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-weight:400;font-size:16px;color:#444">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <div v-if="false" style="padding:15px;padding-left:5px;background:rgb(112, 168, 59)">
          <div style="display:flex;align-items:center">
            <v-img src="@/assets/logo.png" style="width:40px"></v-img>
            <div style="margin-left:10px">
              <div style="color:white">Encuenta lo que necesitas más rapido con nuesta app!</div>
            </div>
          </div>

          <div style="margin-top:10px;display:flex;align-items:center;justify-content:flex-end">
            <div style="margin-right:25px;opacity:0.5;color:white">Más tarde</div>
            <div
              style="padding:5px 15px;font-size:15px;background:white;color:rgb(112, 168, 59);border-radius:20px;font-weight:500"
            >Instalar</div>
          </div>
        </div>

        <v-list dense style="position:absolute;bottom:20px">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-login-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title style="font-weight:400;font-size:16px;color:#444">Cerrar sesión</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
  </v-app>
</template>




<script>
import Header from "@/pages/Header"
import router from "@/router"
import { mapState, mapActions } from "vuex"

export default {
  name: "App",

  components: {
    Header
  },

  data: () => ({
    items: [
      { title: "Inicio", icon: "mdi-home", page: "home" },
      { title: "Catálogo", icon: "mdi-book-open-variant", page: "catalogo" },
      { title: "Ayuda", icon: "mdi-help-circle-outline",  page: "rodal-ingreso" },
      { title: "Idioma", icon: "mdi-translate", page: "rodal-ingreso" },
      { title: "Patrocinadores", icon: "mdi-hand-heart", page: "rodal-ingreso" }
    ]
  }),
  methods: {
    openPage(page) {
      setTimeout(() => {
        this.updateSharedUI({drawer: false})
        router.push(page);
      }, 100);
    },
    ...mapActions(["updateSharedUI"])
  },
  computed: {
    ...mapState(["sharedUI"])
  }
};
</script>
