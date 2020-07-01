<template>
  <v-row justify="center">
    <v-dialog v-model="sharedUI.add" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar elevation="3" color="light">
          <v-btn icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title style="color:#444">Nuevo Predio</v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- <v-toolbar-items>
            <v-btn text @click="closeDialog">Listo</v-btn>
          </v-toolbar-items> -->
        </v-toolbar>
        <div style="padding:15px">
          <div style="color:#444;margin-bottom:20px;margin-top:20px;font-size:17px">
            Escribe el nombre del predio
          </div>
          <v-text-field
            label="ID nuevo Predio"
          ></v-text-field>
        </div>
        <div style="width:100%;display:flex;justify-content:center">
          <v-btn depressed @click="closeDialog" style="background:#70A83B;color:white">Hecho</v-btn>
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
        this.updateSharedUI({add: false})
      },
      ...mapActions([
      'updateSharedUI'
      ])
    },
    computed: {
      ...mapState([
        'sharedUI'
      ])
    }
  }
</script>