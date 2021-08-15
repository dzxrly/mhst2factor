<template>
  <div class="gene-icon-wrap">
    <q-avatar
      :class="{ 'rainbow': gene.id === '虹色基因' }"
      :style="`border: solid 0.4rem ${getSizeColor(gene.id)};`"
      style="box-sizing: content-box;"
      :size="size"
      :color="gene.id !== '虹色基因' ? getEleColor(gene.element) : 'transparent'"
    >
      <img
        style="height: 2rem; width: 2rem;"
        v-if="gene.type !== '无'"
        :src="`${getTypeEngName(gene.type)}.png`"
        :alt="gene.type"
      >
    </q-avatar>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {fetchEleColor, fetchTypeColor, getGeneSizeBorderColor, getGeneSizeByName, typeNameTranslate} from 'src/utils.js'

export default defineComponent({
  name: 'GeneIcon',
  props: {
    gene: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      default: '3.5rem'
    }
  },
  setup() {
    function getTypeColor(type) {
      return fetchTypeColor(type)
    }

    function getEleColor(ele) {
      return fetchEleColor(ele)
    }

    function getTypeEngName(name) {
      return typeNameTranslate(name)
    }

    function getSizeColor(name) {
      return getGeneSizeBorderColor(getGeneSizeByName(name))
    }

    return {
      getSizeColor,
      getTypeEngName,
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
.gene-icon-wrap
  .rainbow
    background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red) !important
</style>
