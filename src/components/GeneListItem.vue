<template>
  <div class="gene-item-wrap full-width q-pa-md">
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
          <span class="text-subtitle1 text-primary text-bold">{{ gene.skill }} | 绊值: {{ gene.cost ? gene.cost : 0 }}</span>
        </div>
        <div class="col row justify-start items-center">
          <span class="text-body1 text-primary">{{ gene.skill_desc }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GeneListItem',
  props: {
    gene: {
      type: Object
    }
  },
  setup () {
    function getTypeColor (type) {
      if (type === '力量') return 'red-9'
      else if (type === '技巧') return 'green-7'
      else if (type === '速度') return 'blue-10'
      else return 'grey-6'
    }

    function getEleColor (ele) {
      if (ele === '火') return 'negative'
      else if (ele === '水') return 'blue-8'
      else if (ele === '冰') return 'info'
      else if (ele === '雷') return 'warning'
      else if (ele === '龙') return 'accent'
      else return 'grey-6'
    }

    return {
      getTypeColor,
      getEleColor
    }
  }
})
</script>
