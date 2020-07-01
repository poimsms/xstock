<template>
  <v-row justify="center">
    <v-dialog v-model="sharedUI.select" scrollable max-width="300px">
      <v-card>
        <v-card-title style="text-transform:capitalize"> {{sharedUI.selectTitle}} </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="max-height: 300px;">
          <v-radio-group v-model="dialogm1" column>
            <v-radio v-for="opt in sharedUI.selectData" :key="opt" :label="opt" :value="opt"></v-radio>
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
        'sharedUI'
      ])
    },
    methods: {
      closeDialog() {
        setTimeout(() => {
          this.updateSharedUI({select: false})
        }, 100);
      },
      ...mapActions([
        'updateSharedUI'
      ])
    }
  }
</script>