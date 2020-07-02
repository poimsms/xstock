<template>
  <v-row justify="center">
    <v-dialog
      v-model="sharedUI.gps"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <div class="uigps__container">
          <div class="uigps__box">
            <v-img src="@/assets/location.svg" class="uigps__picture"></v-img>
            <div class="uigps__title">Necesitamos tu ubicación</div>
            <div class="uigps__text">
              Lorem ipsum dolor sit amet elit. Maiores eum fugit deleniti modi
              ex fugiat.
            </div>

            <div class="uigps__btn-box">
              <div class="uigps__btn-box_flex">
                <div @click="closeDialog" class="uigps__btn-box_denied">
                  Denegar
                </div>
                <div @click="request" class="uigps__btn-box_allow">
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
import { mapState, mapActions } from 'vuex';
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
      navigator.permissions.query({ name: 'geolocation' }).then(
        result => console.log(result),
        err => console.log({ err })
      );
      navigator.geolocation.getCurrentPosition(position =>
        console.log(position)
      );
      this.closeDialog();
    },
    closeDialog() {
      setTimeout(() => {
        this.updateSharedUI({ gps: false });
      }, 150);
    },
    ...mapActions(['updateSharedUI'])
  },
  computed: {
    ...mapState(['sharedUI'])
  }
};
</script>


<style lang="sass" scoped>
.uigps__container
  width: 100%
  height: 100vh
  display: flex
  align-items: center
  justify-content: center

.uigps__box
  width: 250px
  text-align: center

.uigps__picture
  margin-bottom: 40px
  display: inline-block
  width: 100px

.uigps__title
  font-size: 18px
  font-weight: 500
  color: #555

.uigps__text
  font-size: 15px
  color: #777
  margin-top: 10px
  margin-bottom: 20px

.uigps__btn-box
  display: inline-block

.uigps__btn-box_flex
  margin-top: 15px
  display: flex
  justify-content: space-between
  width: 200px
  align-items: center

.uigps__btn-box_denied
  color: #f458a6

.uigps__btn-box_allow
  padding: 7px 15px
  border-radius: 15px
  background: #f458a6
  color: white
  
</style>