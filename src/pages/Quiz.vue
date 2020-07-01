<template>
  <div>
    <div style="color:#555;margin-bottom:10px;font-size:20px;font-weight:700">Preguntas</div>
    <div
    @click="openSelect" v-ripple
      style="border-bottom: 1px solid #eee;padding:15px 10px;display:flex;align-items:center;justify-content:space-between"
    >
      <div>
        <div style="font-size:14px">Estratificación vertical</div>
        <div style="font-size:18px">Dosel intermedio</div>
      </div>
      <div>
        <v-icon style="color:#555">mdi-information-outline</v-icon>
        <v-icon style="color:#555">mdi-chevron-down</v-icon>
      </div>
    </div>
    <div
    @click="openSelect" v-ripple
      style="border-bottom: 1px solid #eee;padding:15px 10px;display:flex;align-items:center;justify-content:space-between"
    >
      <div>
        <div style="font-size:14px">Distribución de la masa</div>
        <div style="font-size:18px">Homegénea</div>
      </div>
      <div>
        <v-icon style="color:#555">mdi-information-outline</v-icon>
        <v-icon style="color:#555">mdi-chevron-down</v-icon>
      </div>
    </div>
    <div
    @click="openSelect" v-ripple
      style="border-bottom: 1px solid #eee;padding:15px 10px;display:flex;align-items:center;justify-content:space-between"
    >
      <div>
        <div style="font-size:14px">Participacion especies tolerantes</div>
        <div style="font-size:18px">En dosel intermedio</div>
      </div>
      <div>
        <v-icon style="color:#555">mdi-information-outline</v-icon>
        <v-icon style="color:#555">mdi-chevron-down</v-icon>
      </div>
    </div>
    <div
    @click="openSelect" v-ripple
      style="border-bottom: 1px solid #eee;padding:15px 10px;display:flex;align-items:center;justify-content:space-between"
    >
      <div style="font-size:18px">Cobertura de dosel</div>
      <div>
        <v-icon style="color:#555">mdi-information-outline</v-icon>
        <v-icon style="color:#555">mdi-chevron-down</v-icon>
      </div>
    </div>
    <div
    @click="openSelect" v-ripple
      style="border-bottom: 1px solid #eee;padding:15px 10px;display:flex;align-items:center;justify-content:space-between"
    >
      <div style="font-size:18px">Calidad de copas</div>
      <div>
        <v-icon style="color:#555">mdi-information-outline</v-icon>
        <v-icon style="color:#555">mdi-chevron-down</v-icon>
      </div>
    </div>
    <div
    @click="openSelect" v-ripple
      style="border-bottom: 1px solid #eee;padding:15px 10px;display:flex;align-items:center;justify-content:space-between"
    >
      <div style="font-size:18px">Longitud de fuste</div>
      <div>
        <v-icon style="color:#555">mdi-information-outline</v-icon>
        <v-icon style="color:#555">mdi-chevron-down</v-icon>
      </div>
    </div>
    <div
    @click="openSelect" v-ripple
      style="border-bottom: 1px solid #eee;padding:15px 10px;display:flex;align-items:center;justify-content:space-between"
    >
      <div style="font-size:18px">Calidad de copas</div>
      <div>
        <v-icon style="color:#555">mdi-information-outline</v-icon>
        <v-icon style="color:#555">mdi-chevron-down</v-icon>
      </div>
    </div>
    <UIAlert />
    <UISelect />
  </div>
</template>

<script>
import UIAlert from "@/components/UIAlert";
import UISelect from "@/components/UISelect";

import { mapActions } from "vuex";

export default {
  data: () => ({
    bottomIconsTabs: false,
    options: ['Dosel bajo', 'Homogéneo', 'Denso']
  }),
  methods: {
    withAnimation(payload) {
      setTimeout(() => this.updateSharedUI(payload), 150);
    },
    openSelect() {
      this.withAnimation({
        select: true,
        selectTitle: "Seleccinar rodal",
        selectData: this.options
      });
    },
    ...mapActions(["updateHeaderUI", "updateSharedUI"])
  },
  mounted() {
    this.updateHeaderUI({
      title: "Enviar Resultados",
      back: true,
      txtRight: true,
      btnRight: false,
      blankSpace: false
    });
  },
  components: {
    UIAlert,
    UISelect,
  }
};
</script>