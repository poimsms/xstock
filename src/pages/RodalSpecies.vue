<template>
  <div>
    <div style="height:10px"></div>
    <!-- <div style="display:flex;justify-content:space-between">
      <div style="font-size:22px;font-weight:700;color:#444">
        Especies Forestales
      </div>
      <div style="background:#70A83B;border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center">
         <v-icon style="color:white">mdi-plus</v-icon>
      </div>
    </div> -->
    <div style="margin-right:40px;margin-top:10px;padding:10px 15px;border-radius:10px;background:whitesmoke;display:flex;align-items:center;justify-content:space-between">
      <div style="display:flex;align-items:center">
      <v-icon>mdi-magnify</v-icon>
      <div style="color:#888;margin-left:5px">
        Buscar especie
      </div>
      </div>
      <v-icon>mdi-close</v-icon>
    </div>
    <div style="height:10px"></div>

    <div v-for="especie in especies" :key="especie" v-ripple style="border-bottom:1px solid #eee;padding:15px">
      {{especie}}
    </div>

     <v-btn fab style="position:fixed;bottom:20px;right:15px;background:#70A83B">
      <v-icon style="color:white">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data: () => ({
    bottomIconsTabs: false,
    especies: ['Laurel', 'Arrayán', 'Manzano', 'Castaño', 'Pino', 'Aromo']
  }),
  methods: {
 ...mapActions([
      'updateHeaderUI',
      'updateRodalAddUI',
      'updateSharedUI',
    ])
  },
   mounted() {
    this.updateHeaderUI({title: 'Especies', back: true})
  },
};
</script>