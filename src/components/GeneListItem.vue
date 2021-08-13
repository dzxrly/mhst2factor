<template>
  <div
    class="gene-item-wrap full-width q-pa-md relative-position"
    @click="showInfoDialog = true"
    v-ripple
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
      <q-avatar
        size="xl"
      >
        <img
          :src="gene.icon"
          :alt="gene.id"
        >
      </q-avatar>
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
      class="skill-dialog"
      v-model="showInfoDialog"
      full-width
    >
      <q-card class="full-width">
        <div class="full-width row justify-end items-center">
          <q-btn
            icon="close"
            round
            flat
            v-close-popup
          ></q-btn>
        </div>
        <skill-info :gene="gene"></skill-info>
        <q-card-actions
          class="dialog-btn-group full-width bg-white"
          align="around"
        >
          <q-btn
            class="col-5"
            label="添加"
            icon="add"
            color="primary"
            flat
          ></q-btn>
          <q-btn
            class="col-5"
            label="取消"
            icon="close"
            v-close-popup
            flat
          ></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
import SkillInfo from 'components/SkillInfo'

export default defineComponent({
  name: 'GeneListItem',
  components: {SkillInfo},
  props: {
    gene: {
      type: Object
    }
  },
  setup() {
    const showInfoDialog = ref(false)

    function getTypeColor(type) {
      if (type === '力量') return 'red-9'
      else if (type === '技巧') return 'green-7'
      else if (type === '速度') return 'blue-10'
      else return 'grey-6'
    }

    function getEleColor(ele) {
      if (ele === '火') return 'negative'
      else if (ele === '水') return 'blue-8'
      else if (ele === '冰') return 'info'
      else if (ele === '雷') return 'warning'
      else if (ele === '龙') return 'accent'
      else return 'grey-6'
    }

    return {
      showInfoDialog,

      getTypeColor,
      getEleColor
    }
  }
})
</script>

<style
  scoped
  lang="sass"
>
.skill-dialog
  height: 80vh

  .skill-info-wrap
    height: 65vh
    overflow-y: auto

  .dialog-btn-group
    height: 10vh
</style>
