<template>
  <div>
    <div v-if="true" class="install__box">
      <v-icon class="install__close-icon">mdi-close</v-icon>
      <v-img src="@/assets/logo.png" class="install__logo"></v-img>
      <div class="install__text-box">
        <div class="install__text-box_title">XStock</div>
        <div class="install__text-box_desc">
          Encuentra lo que necesitas más rápido
        </div>
      </div>
      <div class="install__btn" v-ripple>Agregar</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bottomIconsTabs: false
  })
};
</script>

<style lang="sass" scoped>
.install__box
  box-shadow: 0 5px 5px -5px #777
  background: white
  z-index: 1
  position: fixed
  top: 60px
  left: 0
  width: 100%
  padding: 5px
  display: flex
  align-items: center
  justify-content: space-between

.install__close-icon
  color: #666
  font-size: 18px
  margin-right: 5px

.install__logo
  width: 40px
  height:40px
  object-fit: cover

.install__text-box
  color: #444
  margin-left:7px

.install__text-box_title
  font-weight: 500

.install__text-box_desc
  font-size: 14px
  color: #555
  font-size: 14px

.install__btn
  margin-left: 10px
  padding: 5px 15px
  color: white
  background: orange
  border-radius: 15px
  font-size: 15px

</style>