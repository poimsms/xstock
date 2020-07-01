<template>
  <div style="text-align:center">
    <div></div>
    <div style="color:#666;margin-bottom:0px">Radio medio cuadratico 30.4</div>

    <v-img src="@/assets/chart.jpg"></v-img>
    <div>
      <div style="color:#666;margin-top:20px;margin-bottom:10px">Valores ingresados</div>
      <div style="width:200px">
        <table style="width:100%">
          <tr v-for="item in inputs" :key="item.name">
            <td style="font-weight:500;text-align:center">{{item.name}}</td>
            <td style="color:#666;text-align:center">{{item.value}}</td>
          </tr>
        </table>
      </div>

      <div style="color:#666;margin-top:20px;margin-bottom:10px">Valores calculados</div>
      <div style="width:200px">
        <table style="width:100%">
          <tr v-for="item in inputs" :key="item.name">
            <td style="font-weight:500;text-align:center">{{item.name}}</td>
            <td style="color:#666;text-align:center">{{item.value}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";

export default {
  data: () => ({
    bottomIconsTabs: false,
    inputs: [
      { name: "ID Predio", value: "Mi predio" },
      { name: "ID Rodal", value: "Mi rodal" },
      { name: "Latitud", value: "-38.5042" },
      { name: "Longitud", value: "-70.603" },
      { name: "Fecha", value: "26/07/2020" },
      { name: "NHA", value: "10.4" },
      { name: "Área Basal", value: "125.3" },
      { name: "Especie principal", value: "Manzano" }
    ]
  }),
  methods: {
    openPage(page) {
      setTimeout(() => router.push(page), 100);
    },
    ...mapActions(["updateHeaderUI"])
  },
  mounted() {
    this.updateHeaderUI({
      title: "Resultados",
      back: true,
      txtRight: false,
      btnRight: true,
      blankSpace: false
    });
  }
};
</script>