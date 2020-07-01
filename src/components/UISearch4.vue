<template>
  <v-row justify="center">
    <v-dialog
      v-model="sharedUI.search"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <div style="width:100%;height:65px;display:flex;align-items:center;justify-content:space-between;padding: 0 15px">
        <div style="display:flex;align-items:center">
      <v-icon>mdi-arrow-left</v-icon>
      <div style="color:#888;margin-left:15px;font-size:18px">
        Buscar especie
      </div>
      </div>
      <v-icon>mdi-close</v-icon>
        </div>
        <div style="padding:15px">
          <div
            style="margin-bottom:20px;margin-top:20px;font-size:17px"
          >Escriba el nombre del nuevo predio</div>
          <v-text-field label="ID nuevo Predio"></v-text-field>
        </div>
        <div style="width:100%;display:flex;justify-content:center">
          <v-btn depressed @click="closeDialog" color="primary" style>Hecho</v-btn>
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
      widgets: false
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