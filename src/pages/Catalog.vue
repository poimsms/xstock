<template>
  <div>
    <div class="catalog__title">
      Listado Subtipos
    </div>
    <div v-for="subtipo in subtipos" :key="subtipo.id" class="catalog__holder">
      <div class="catalog__box">
        <div>
          <div class="catalog__box_title">
            {{ subtipo.title }}
          </div>
          <div class="catalog__box_author">
            <span class="catalog__box_author_bold">Autor:</span>
            <span> {{ subtipo.author }} </span>
          </div>
        </div>
        <div class="catalog__box_icons">
          <v-icon v-if="subtipo.isOwner" class="catalog__share-icon"
            >mdi-share-variant</v-icon
          >
          <v-icon v-if="!subtipo.isDownloaded" class="catalog__download-icon"
            >mdi-cloud-download-outline</v-icon
          >
          <v-icon v-if="subtipo.isPublished" class="catalog__check-icon"
            >mdi-check-bold</v-icon
          >
        </div>
      </div>
      <div class="catalog__box_desc">
        Lorem ipsum dolor sit amet consectetur..
      </div>
    </div>

    <v-btn fab elevation="3" class="catalog__fab">
      <v-icon style="color:#666">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import router from '@/router';

export default {
  data: () => ({
    tabs: null,
    items: [1, 2, 3, 4, 5],
    subtipos: [
      {
        title: 'Manzano',
        desc: 'Lorem ipsum dolor sit amet consectetur..',
        author: 'Daniel Fuentes',
        isPublished: true,
        isDownloaded: true,
        isOwner: false
      },
      {
        title: 'Arrayán',
        desc: 'Lorem ipsum dolor sit amet consectetur..',
        author: 'Daniel Fuentes',
        isPublished: true,
        isDownloaded: true,
        isOwner: true
      },
      {
        title: 'Laurel',
        desc: 'Lorem ipsum dolor sit amet consectetur..',
        author: 'Daniel Fuentes',
        isPublished: true,
        isDownloaded: false,
        isOwner: false
      },
      {
        title: 'Castaño',
        desc: 'Lorem ipsum dolor sit amet consectetur..',
        author: 'Daniel Fuentes',
        isPublished: false,
        isDownloaded: true,
        isOwner: true
      },
      {
        title: 'Manzano',
        desc: 'Lorem ipsum dolor sit amet consectetur..',
        author: 'Daniel Fuentes',
        isPublished: true,
        isDownloaded: false,
        isOwner: false
      }
    ]
  }),
  methods: {
    openPage(page) {
      setTimeout(() => router.push(page), 200);
    },
    ...mapActions(['updateHeaderUI'])
  },
  mounted() {
    this.updateHeaderUI({
      title: 'Catálogo',
      back: false,
      blankSpace: false,
      txtRight: false,
      btnRight: false,
      filter: true
    });
  },
  destroyed() {
    this.updateHeaderUI({ filter: false });
  }
};
</script>

<style lang="sass" scoped>
.catalog__title
  color: #555
  margin-bottom: 10px
  font-size: 20px

.catalog__holder
  border: 1px solid #eee
  border-radius: 15px
  margin-bottom: 20px
  padding: 10px

.catalog__box
  display: flex
  align-items: flex-start
  justify-content: space-between

.catalog__box_title
  font-size: 18px
  color: #555

.catalog__box_author
  font-size: 14px
  color: #777

.catalog__box_author_bold
  font-weight: 500
  margin-right: 5px

.catalog__box_icons
  display: flex

.catalog__share-icon
  color: #999
  font-size: 27px
  margin-right: 10px

.catalog__download-icon
  color: #999
  font-size: 30px
  margin-right: 10px

.catalog__check-icon
  color: #70A83B
  font-size: 30px

.catalog__box_desc
  font-size: 14px
  color: #999

.catalog__fab
  position: fixed
  bottom: 20px
  right: 15px  
  background: whitesmoke
  
</style>