<template>
  <div class="gene-icon-wrap relative-position">
    <q-avatar
      :class="{ 'rainbow': gene.id === '虹色基因' }"
      :style="`border: solid 2vw ${getSizeColor(gene.id)};`"
      style="box-sizing: content-box;"
      :size="size"
      :color="gene.id !== '虹色基因' ? getEleColor(gene.element) : 'transparent'"
    >
      <img
        style="height: 10vw; width: 10vw;"
        v-if="gene.type !== '无'"
        :src="`${getTypeEngName(gene.type)}.png`"
        :alt="gene.type"
      >
    </q-avatar>
    <div class="star-wrap row justify-center items-center no-wrap">
      <q-icon
        v-if="gene.star && gene.star >= 1"
        :class="{ 'q-mr-xs' : gene.star && gene.star >= 2 }"
        class="star"
        name="star"
        color="warning"
      ></q-icon>
      <q-icon
        v-if="gene.star && gene.star >= 2"
        class="star"
        name="star"
        color="warning"
      ></q-icon>
    </div>
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

  .star-wrap
    position: absolute
    bottom: 1vw
    left: 50%
    transform: translateX(-50%)

    .star
      text-shadow: 1px 0 0 white, 0 1px 0 white, -1px 0 0 white, 0 -1px 0 white
</style>
