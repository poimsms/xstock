<template>
  <v-app>
    <v-sheet
      height="100vh"
      class="overflow-hidden"
      style="position:fixed;z-index:999;height:100vh;width:100vw;overflow-y:auto !important;height:100%;padding:10px"
    >
      <Header />
      <div style="height:60px;width:100%"></div>
      <router-view/>

      <v-navigation-drawer v-model="UI.drawer" absolute temporary width="280">
        <v-list-item style="padding: 20px 15px">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg" style="width:40px"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            <div>
              johonleider@gmail.com
            </div>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense style="margin-top:30px">
          <v-list-item @click="openPage" v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-weight:400;font-size:16px;color:#444">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

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
import Header from "./pages/Header"

import router from './router'
import {mapState, mapActions} from 'vuex'

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    items: [
      { title: "Inicio", icon: "mdi-home" },
      { title: "Catálogo", icon: "mdi-book-open-variant" },
      { title: "Ayuda", icon: "mdi-help-circle-outline" },
      { title: "Idioma", icon: "mdi-translate" },
      { title: "Patrocinadores", icon: "mdi-hand-heart" }
    ]
  }),
  methods: {
    openPage() {
      setTimeout(() => {
        router.push('login')
      }, 100);
    },
    ...mapActions([
      'updateUI'
    ])
  },
  computed: {
    ...mapState([
      'UI'
    ])
  }
};
</script>
