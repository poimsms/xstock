<template>
  <v-row justify="center">
    <v-dialog
      v-model="sharedUI.search"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <div
          style="border-bottom:1px solid #eee;width:100%;height:80px;display:flex;align-items:center;justify-content:space-between;padding: 0 15px"
        >
        <div style="background:#EAEDF2;border-radius:10px;display:flex;align-items:center;justify-content:space-between;flex-grow:1;padding:7px 15px">
          <div style="display:flex;align-items:center">
            <div style="color:#9B9CA1;font-size:17px">Buscar especie</div>
          </div>
          <v-icon style="color:#C2C3C5;font-size:18px">mdi-close-circle</v-icon>
        </div>
        <div @click="closeDialog" style="color:#70A83B;margin-left:10px">Cancelar</div>
        </div>
        <div
            v-for="especie in especies"
            :key="especie"
            v-ripple
            @click="selectItem"
            style="border-bottom:0px solid #eee;padding:15px;font-size:17px;color:#444"
          >{{especie}}</div>
            <!-- <v-btn fab style="position:fixed;bottom:20px;right:15px;background:#70A83B">
      <v-icon style="color:white">mdi-plus</v-icon>
    </v-btn> -->
       <v-btn fab elevation="3" style="position:fixed;bottom:20px;right:15px;background:whitesmoke">
      <v-icon style="color:#444">mdi-plus</v-icon>
    </v-btn>
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
      this.updateSharedUI({ search: false })   
    },
    selectItem() {
      setTimeout(() => this.updateSharedUI({ search: false }), 200)      
    },
    ...mapActions(["updateSharedUI"])
  },
  computed: {
    ...mapState(["sharedUI"])
  }
};
</script>