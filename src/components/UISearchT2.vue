<template>
  <v-row justify="center">
    <v-dialog
      v-model="sharedUI.search"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
          <v-toolbar color="light">
          <v-btn icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Especies</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div style="padding:10px">
          <div style="height:10px"></div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div style="font-size:22px;font-weight:700;color:#444">Especies Forestales</div>
            <div
              v-ripple
              style="background:#70A83B;border-radius:50%;width:35px;height:35px;display:flex;align-items:center;justify-content:center"
            >
              <v-icon style="color:white">mdi-plus</v-icon>
            </div>
          </div>
          <div
            style="margin-right:40px;margin-top:10px;padding:10px 15px;border-radius:10px;background:whitesmoke;display:flex;align-items:center;justify-content:space-between"
          >
            <div style="display:flex;align-items:center">
              <v-icon>mdi-magnify</v-icon>
              <div style="color:#888;margin-left:5px">Buscar especie</div>
            </div>
            <v-icon>mdi-close</v-icon>
          </div>
          
          <div style="height:10px"></div>

          <div
            v-for="especie in especies"
            :key="especie"
            v-ripple
            style="border-bottom:1px solid #eee;padding:15px;font-size:17px;color:#444"
          >{{especie}}</div>

           <!-- <v-btn fab style="position:fixed;bottom:20px;right:15px;background:whitesmoke">
      <v-icon style="color:#666">mdi-plus</v-icon>
    </v-btn> -->
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      notifications: false,
      sound: true,
      widgets: false,
      especies: ["Laurel", "Arrayán", "Manzano", "Castaño", "Pino", "Aromo"]
    };
  },
  methods: {
    closeDialog() {
      this.updateSharedUI({ search: false });
    },
    ...mapActions(["updateSharedUI"])
  },
  computed: {
    ...mapState(["sharedUI"])
  }
};
</script>