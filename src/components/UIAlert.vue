<template>
  <v-row justify="center">
    <v-dialog v-model="sharedUI.alert" scrollable max-width="300px">
      <v-card>
        <v-card-title style="font-size:20px;color:#333">Formulario incompleto</v-card-title>
        <v-card-text>Desea enviar de todas formas?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="closeDialog" color="green darken-1" text>Cancelar</v-btn>
          <v-btn @click="closeDialog" color="green darken-1" text>Envíar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      dialogm1: ""
    };
  },
  computed: {
    ...mapState(["sharedUI"])
  },
  methods: {
    closeDialog() {
      setTimeout(() => this.updateSharedUI({ alert: false }), 100)
    },
    ...mapActions(["updateSharedUI"])
  }
};
</script>