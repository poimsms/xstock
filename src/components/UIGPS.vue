<template>
  <v-row justify="center">
    <v-dialog v-model="sharedUI.gps" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <div v-if="false" style="width:100%;height:100vh;display:flex;align-items:center;justify-content:center">
          <div style="width:200px;text-align:center">
            <v-img
              src="@/assets/location.svg"
              style="margin-bottom:40px;display:inline-block;width:100px"
            ></v-img>
            <div style="font-size:18px;font-weight:500">Acceder localización</div>
            <div
              style="font-size:15px;color:#444;margin-top:10px;margin-bottom:20px"
            >Lorem ipsum dolor sit amet elit. Maiores eum fugit deleniti modi ex fugiat.</div>
            <v-btn @click="request" depressed style="background:#70A83B;color:white">Permitir Acceso</v-btn>
            <div style="margin-top:50px;color:#777">Ahora No</div>
          </div>
        </div>


         <div v-if="true" style="width:100%;height:100vh;display:flex;align-items:center;justify-content:center">
          <div style="width:250px;text-align:center">
            <v-img
              src="@/assets/location.svg"
              style="margin-bottom:40px;display:inline-block;width:100px"
            ></v-img>
            <div style="font-size:18px;font-weight:500;color:#555">Necesitamos tu ubicación</div>
            <div
              style="font-size:15px;color:#777;margin-top:10px;margin-bottom:20px"
            >Lorem ipsum dolor sit amet elit. Maiores eum fugit deleniti modi ex fugiat.</div>
            
            <div style="display:inline-block">
              <div style="margin-top:15px;display:flex;justify-content:space-between;width:200px;align-items:center">
              <div @click="closeDialog" style="color:#f458a6">Denegar</div>
              <div @click="request" style="padding:7px 15px;border-radius:15px;background:#f458a6;color:white">
                Permitir
              </div>
              </div>
            </div>
          </div>
        </div>


        <div v-if="false" style="width:100%;height:100vh;display:flex;align-items:center;justify-content:center">
          <div style="width:250px;text-align:center">
            <!-- <v-img
              src="@/assets/location.svg"
              style="margin-bottom:40px;display:inline-block;width:100px"
            ></v-img> -->
             <v-img
              src="@/assets/pin.svg"
              style="margin-bottom:40px;display:inline-block;width:100px"
            ></v-img>
            <div style="font-size:18px;font-weight:500;color:#444">Necesitamos tu ubicación</div>
            <div
              style="font-size:15px;color:#777;margin-top:10px;margin-bottom:20px"
            >Lorem ipsum dolor sit amet elit. Maiores eum fugit deleniti modi ex fugiat.</div>
            
            <div style="display:inline-block">
              <div style="margin-top:15px;display:flex;justify-content:space-between;width:200px;align-items:center">
              <div @click="closeDialog" style="color:#70A83B">Denegar</div>
              <div @click="request" style="padding:7px 15px;border-radius:15px;background:#70A83B;color:white">
                Permitir
              </div>
              </div>
            </div>
          </div>
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
    request() {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(result => console.log(result), err => console.log({err}))
      navigator.geolocation.getCurrentPosition(position =>
        console.log(position)
      )
      this.closeDialog()
      
    },
    closeDialog() {
      setTimeout(() => {
        this.updateSharedUI({ gps: false })        
      }, 150);
    },
    ...mapActions(["updateSharedUI"])
  },
  computed: {
    ...mapState(["sharedUI"])
  }
};
</script>