<template>
  <v-row justify="center">
    <v-dialog v-model="UI.fullDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar color="light">
          <v-btn icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Nuevo Predio</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <v-toolbar-items>
            <v-btn text @click="closeDialog">Listo</v-btn>
          </v-toolbar-items> -->
        </v-toolbar>
        <div style="padding:15px">
          <div style="margin-bottom:20px;margin-top:20px;font-size:17px">
            Escriba el nombre del nuevo predio
          </div>
          <v-text-field
            label="ID nuevo Predio"
          ></v-text-field>
        </div>
        <div style="width:100%;display:flex;justify-content:center">
          <v-btn depressed @click="closeDialog" color="primary" style="">Hecho</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {mapState, mapActions} from 'vuex'
  export default {
    data () {
      return {
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
    methods: {
      closeDialog() {
        this.updateUI({fullDialog: false})
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
  }
</script>