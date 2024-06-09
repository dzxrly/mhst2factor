<template>
  <div
      v-ripple
      class="gene-item-wrap full-width q-pa-md relative-position"
      @click="showInfoDialog = true"
  >
    <div class="row justify-start items-center">
      <span class="text-h6 text-primary text-bold">{{ gene.id }}</span>
      <q-chip
          :color="getTypeColor(gene.type)"
          outline
      >{{ gene.type }}
      </q-chip>
      <q-chip
          :color="getEleColor(gene.element)"
          text-color="white"
      >{{ gene.element }}
      </q-chip>
    </div>
    <div class="gene-info row justify-start items-center full-width no-wrap">
      <gene-icon :gene="gene"></gene-icon>
      <div class="col-8 column justify-start items-start q-pl-sm">
        <div class="col row justify-start items-center">
          <span class="text-subtitle1 text-primary text-bold">{{ gene.skill }} | 绊值: {{
              gene.cost ? gene.cost : 0
            }}</span>
        </div>
        <div class="col row justify-start items-center">
          <span class="text-body1 text-primary">{{ gene.skill_desc }}</span>
        </div>
      </div>
    </div>

    <q-dialog
        v-model="showInfoDialog"
        class="skill-dialog"
        full-width
    >
      <q-card class="full-width">
        <div class="full-width row justify-end items-center">
          <q-btn
              v-close-popup
              flat
              icon="close"
              round
          ></q-btn>
        </div>
        <skill-info
            :gene="gene"
            class="skill-info-wrap"
        ></skill-info>
        <q-card-actions
            v-if="showOptBtn"
            align="around"
            class="dialog-btn-group full-width bg-white"
        >
          <q-btn
              class="col-5"
              color="primary"
              flat
              icon="add"
              label="添加"
              @click="confirmGene"
          ></q-btn>
          <q-btn
              v-close-popup
              class="col-5"
              flat
              icon="close"
              label="取消"
          ></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
import SkillInfo from 'src/components/SkillInfo.vue'
import GeneIcon from 'src/components/GeneIcon.vue'
import {fetchEleColor, fetchTypeColor} from 'src/utils'

export default defineComponent({
  name: 'GeneListItem',
  components: {GeneIcon, SkillInfo},
  emits: ['confirm-gene'],
  props: {
    gene: {
      type: Object
    },
    showOptBtn: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    const showInfoDialog = ref(false)

    function getTypeColor(type) {
      return fetchTypeColor(type)
    }

    function getEleColor(ele) {
      return fetchEleColor(ele)
    }

    function confirmGene() {
      context.emit('confirm-gene', props.gene)
      showInfoDialog.value = false
    }

    return {
      showInfoDialog,

      getTypeColor,
      getEleColor,
      confirmGene
    }
  }
})
</script>

<style
    lang="sass"
    scoped
>
.skill-dialog
  height: 80vh

  .skill-info-wrap
    height: 65vh
    overflow-y: auto

  .dialog-btn-group
    height: 10vh
</style>
