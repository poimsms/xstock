<template>
  <v-row justify="center">
    <v-dialog v-model="UI.dialog" scrollable max-width="300px">
      <v-card>
        <v-card-title v-if="UI.dialogRodal">Seleccionar rodal</v-card-title>
        <v-card-title v-if="UI.dialogEspecie">Seleccionar especie</v-card-title>
        <v-divider></v-divider>
        <v-card-text v-if="UI.dialogRodal" style="height: 300px;">
          <v-radio-group v-model="dialogm1" column>
            <v-radio label="Rodal 1" value="bahamas"></v-radio>
            <v-radio label="Rodal 2" value="bahrain"></v-radio>
            <v-radio label="Rodal 3" value="bangladesh"></v-radio>
            <v-radio label="Rodal 4" value="bangladesh"></v-radio>
            <v-radio label="Rodal 5" value="bangladesh"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-card-text v-if="UI.dialogEspecie" style="height: 300px;">
          <v-radio-group v-model="dialogm1" column>
            <v-radio label="Coihue" value="bahamas"></v-radio>
            <v-radio label="Manzano" value="bahrain"></v-radio>
            <v-radio label="Radiata" value="bangladesh"></v-radio>
            <v-radio label="Eucalipto" value="barbados"></v-radio>
            <v-radio label="Pino oregon" value="belarus"></v-radio>
            <v-radio label="Arrayán" value="belgium"></v-radio>
            <v-radio label="Castaño" value="belize"></v-radio>
            <v-radio label="Brunei" value="brunei"></v-radio>
            <v-radio label="Bulgaria" value="bulgaria"></v-radio>
            <v-radio label="Burkina Faso" value="burkina"></v-radio>
            <v-radio label="Burma" value="burma"></v-radio>
            <v-radio label="Burundi" value="burundi"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
         <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn color="green darken-1" text @click="dialog = false">Cancelar</v-btn> -->
          <v-btn @click="closeDialog" color="green darken-1" text>Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    data () {
      return {
        dialogm1: '',
      }
    },
    computed: {
      ...mapState([
        'UI'
      ])
    },
    methods: {
      closeDialog() {
        setTimeout(() => {
          this.updateUI({dialog: false})
        }, 100);
      },
      ...mapActions([
        'updateUI'
      ])
    }
  }
</script>