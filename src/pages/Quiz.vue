<template>
  <div>
    <div class="quiz__title">
      Preguntas
    </div>

    <div v-for="question in questions" :key="question.id">
      <div
        v-if="question.isAnswared"
        @click="openSelect"
        v-ripple
        class="quiz__question-a_box"
      >
        <div>
          <div class="quiz__question-a_label">{{ question.question }}</div>
          <div class="quiz__question-a_answare">{{ question.answare }}</div>
        </div>
        <div>
          <v-icon class="quiz__info-icon">mdi-information-outline</v-icon>
          <v-icon class="quiz__chevron-icon">mdi-chevron-down</v-icon>
        </div>
      </div>

      <div
        v-if="!question.isAnswared"
        @click="openSelect"
        v-ripple
        class="quiz__question-b_box"
      >
        <div class="quiz__question-b_text">{{ question.question }}</div>
        <div>
          <v-icon class="quiz__info-icon">mdi-information-outline</v-icon>
          <v-icon class="quiz__chevron-icon">mdi-chevron-down</v-icon>
        </div>
      </div>
    </div>

    <UIAlert />
    <UISelect />
  </div>
</template>

<script>
import UIAlert from '@/components/UIAlert';
import UISelect from '@/components/UISelect';

import { mapActions } from 'vuex';

export default {
  data: () => ({
    questions: [
      {
        question: 'Estratificación vertical',
        isAnswared: true,
        options: ['Dosel bajo', 'Homogéneo', 'Denso'],
        answare: 'Dosel intermedio'
      },
      {
        question: 'Distribución de la masa',
        isAnswared: true,
        options: ['Dosel bajo', 'Homogéneo', 'Denso'],
        answare: 'Homegénea'
      },
      {
        question: 'Participacion especies tolerantes',
        isAnswared: true,
        options: ['Dosel bajo', 'Homogéneo', 'Denso'],
        answare: 'En dosel intermedio'
      },
      {
        question: 'Cobertura de dosel',
        isAnswared: false,
        options: ['Dosel bajo', 'Homogéneo', 'Denso'],
        answare: ''
      },
      {
        question: 'Calidad de copas',
        isAnswared: false,
        options: ['Dosel bajo', 'Homogéneo', 'Denso'],
        answare: ''
      },
      {
        question: 'Longitud de fuste',
        isAnswared: false,
        options: ['Dosel bajo', 'Homogéneo', 'Denso'],
        answare: ''
      }
    ],
    options: ['Dosel bajo', 'Homogéneo', 'Denso']
  }),
  methods: {
    withAnimation(payload) {
      setTimeout(() => this.updateSharedUI(payload), 150);
    },
    openSelect() {
      this.withAnimation({
        select: true,
        selectTitle: 'Seleccinar rodal',
        selectData: this.options
      });
    },
    ...mapActions(['updateHeaderUI', 'updateSharedUI'])
  },
  mounted() {
    this.updateHeaderUI({
      title: 'Enviar Resultados',
      back: true,
      txtRight: true,
      btnRight: false,
      blankSpace: false
    });
  },
  components: {
    UIAlert,
    UISelect
  }
};
</script>

<style lang="sass">
.quiz__title
  color: #555
  margin-bottom: 10px
  font-size: 20px
  font-weight: 700

.quiz__question-a_box
  border-bottom: 1px solid #eee
  padding: 15px 10px
  display: flex
  align-items: center
  justify-content: space-between

quiz__question-a_label
  font-size: 14px

.quiz__question-a_answare
  font-size: 18px

.quiz__info-icon
  color: #555
  
.quiz__chevron-icon
  color: #555

.quiz__question-b_box
  border-bottom: 1px solid #eee
  padding: 15px 10px
  display: flex
  align-items: center
  justify-content: space-between

.quiz__question-b_text
  font-size: 18px
</style>
