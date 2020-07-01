<template>
  <div>


    <div v-if="false">
      <div style="color:#555;margin-bottom:10px;font-size:20px;font-weight:700">Listado Subtipos</div>
      <div v-for="item in items" :key="item">
        <div style="display:flex;align-items:flex-start;justify-content:space-between">
          <div>
            <div style="font-size:20px;color:#555">Castaño</div>
            <div style="font-size:14px;color:#777">
              <span style="font-weight:500;margin-right:5px">Autor:</span>
              <span>Daniel Fuentes</span>
            </div>
          </div>
          <div style="display:flex">
            <v-icon style="color:#555;font-size:30px;margin-right:10px">mdi-cloud-download-outline</v-icon>
            <v-icon style="color:#555;font-size:30px">mdi-check-bold</v-icon>
          </div>
        </div>
        <div
          style="font-size:14px;color:#999"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat doloribus sequi quisquam quos!</div>
        <hr style="margin-top:10px;margin-bottom:10px" />
      </div>
    </div>



    <div v-if="true">
      <div style="color:#555;margin-bottom:10px;font-size:20px">Listado Subtipos</div>
      <div v-for="subtipo in subtipos" :key="subtipo.id" style="border:1px solid #eee;border-radius:15px;margin-bottom:20px;padding:10px">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;">
          <div>
            <div style="font-size:20px;color:#555">
              {{subtipo.title}}
            </div>
            <div style="font-size:14px;color:#777">
              <span style="font-weight:500;margin-right:5px">Autor:</span>
              <span> {{subtipo.author}} </span>
            </div>
          </div>
          <div style="display:flex">
            <v-icon v-if="subtipo.isOwner" style="color:#999;font-size:27px;margin-right:10px">mdi-share-variant</v-icon>
            <v-icon v-if="!subtipo.isDownloaded" style="color:#999;font-size:30px;margin-right:10px">mdi-cloud-download-outline</v-icon>
            <v-icon v-if="subtipo.isPublished" style="color:#70A83B;font-size:30px">mdi-check-bold</v-icon>
          </div>
        </div>
        <div
          style="font-size:14px;color:#999"
        >Lorem ipsum dolor sit amet consectetur..</div>
      </div>
    </div>



    <div v-if="false">
      <div  v-for="item in items" :key="item" style="margin-bottom:20px;padding:15px;border-radius:10px;border:0px solid #eee">
        <div style="display:flex;">        
          <v-img src="@/assets/user.svg" style="height:35px;width:35px;"></v-img>
          <div style="margin-left:10px">
            <div style="font-weight:500;color:#444">
              Castaño rohinoseros
            </div>
              <div style="font-size:14px;color:#777">
              <span style="font-weight:500;margin-right:5px">Autor:</span>
              <span>Daniel Fuentes</span>
            </div>
            <div style="margin-top:10px;font-size:14px;color:#999">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat doloribus sequi quisquam quos!
            </div>
          </div>
        </div>
        <div style="margin-top:10px;display:flex;justify-content:space-between">
          <div style="padding:5px 15px;border-radius:15px;border:1px solid #eee">
            Descargar
          </div>
          <div style="display:flex">
            <v-icon style="color:#555;font-size:27px;margin-right:10px">mdi-share-variant</v-icon>

            <v-icon style="color:#555;font-size:27px">mdi-check</v-icon>

          </div>
        </div>
        <hr style="margin-top:30px">
      </div>
    </div>



    <div v-if="false">
      <div  v-for="item in items" :key="item" style="margin-bottom:20px;padding:15px;border-radius:10px;border:0px solid #eee">
        <div style="display:flex;">        
          <div>
            <div style="font-weight:500;color:#444">
              Castaño rohinoseros
            </div>
              <div style="font-size:14px;color:#777">
              <span style="font-weight:500;margin-right:5px">Autor:</span>
              <span>Daniel Fuentes</span>
            </div>
            <div style="margin-top:10px;font-size:14px;color:#999">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugiat doloribus sequi quisquam quos!
            </div>
          </div>
        </div>
        <div style="margin-top:10px;display:flex;justify-content:space-between">
          <div style="padding:5px 15px;border-radius:15px;border:1px solid #eee">
            Descargar
          </div>
          <div style="display:flex">
            <v-icon style="color:#555;font-size:27px;margin-right:10px">mdi-share-variant</v-icon>

            <v-icon style="color:#555;font-size:27px">mdi-check</v-icon>

          </div>
        </div>
        <hr style="margin-top:30px">
      </div>
    </div>


 <v-btn  fab elevation="3" style="position:fixed;bottom:20px;right:15px;background:whitesmoke">
      <v-icon style="color:#666">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import router from "@/router";

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
      },
    ]
  }),
  methods: {
    openPage(page) {
      setTimeout(() => router.push(page), 200);
    },
    ...mapActions(["updateHeaderUI"])
  },
  mounted() {
    this.updateHeaderUI({
      title: "Catálogo",
      back: false,
      blankSpace: false,
      txtRight: false,
      btnRight: false,
      filter: true
    });
  },
  destroyed() {
 this.updateHeaderUI({filter: false});
  }
};
</script>