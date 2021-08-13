<template>
  <q-page class="index-wrap full-width column justify-start items-center">
    <div class="gene-grid q-my-md">
      <div
        :class="{ 'hide-gene-item' : !geneGrid[0][0] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[0][1] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[0][2] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[0][3] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[0][4] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[1][0] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        class="gene-block text-primary relative-position"
        @click="showGeneDialog(1, 1)"
        v-ripple
      >因子
      </div>
      <div
        class="gene-block text-primary relative-position"
        @click="showGeneDialog(1, 2)"
        v-ripple
      >因子
      </div>
      <div
        class="gene-block text-primary relative-position"
        @click="showGeneDialog(1, 3)"
        v-ripple
      >因子
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[1][4] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[2][0] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        class="gene-block text-primary relative-position"
        @click="showGeneDialog(2, 1)"
        v-ripple
      >因子
      </div>
      <div
        class="gene-block text-primary relative-position"
        @click="showGeneDialog(2, 2)"
        v-ripple
      >因子
      </div>
      <div
        class="gene-block text-primary relative-position"
        @click="showGeneDialog(2, 3)"
        v-ripple
      >因子
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[2][4] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[3][0] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        class="gene-block text-primary relative-position"
        @click="showGeneDialog(3, 1)"
        v-ripple
      >因子
      </div>
      <div
        class="gene-block text-primary relative-position"
        @click="showGeneDialog(3, 2)"
        v-ripple
      >因子
      </div>
      <div
        class="gene-block text-primary relative-position"
        @click="showGeneDialog(3, 3)"
        v-ripple
      >因子
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[3][4] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[4][0] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[4][1] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[4][2] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[4][3] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[4][4] }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
    </div>

    <q-dialog
      class="gene-list-dialog"
      v-model="openGeneDialog"
      position="bottom"
      full-width
    >
      <gene-list :gene-grid="geneGrid"></gene-list>
    </q-dialog>
  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue'
import GeneList from 'components/GeneList'

export default defineComponent({
  name: 'PageIndex',
  components: {GeneList},
  setup() {
    const geneGrid = ref([
      ['', '', '', '', ''],
      ['', 'a', 'b', 'c', ''],
      ['', 'd', '', '', ''],
      ['', '', '', 'e', ''],
      ['', '', '', '', ''],
    ])
    const openGeneDialog = ref(false)
    const currentSelectedGene = ref([1, 1])

    function showGeneDialog(geneIndexX, geneIndexY) {
      openGeneDialog.value = true
      currentSelectedGene.value = [geneIndexX, geneIndexY]
    }

    return {
      geneGrid,
      openGeneDialog,

      showGeneDialog
    }
  }
})
</script>

<style
  scoped
  lang="sass"
>
.index-wrap
  .gene-grid
    width: 100vw
    height: 100vw
    display: grid
    grid-template-rows: 1fr 2fr 2fr 2fr 1fr
    grid-template-columns: 1fr 2fr 2fr 2fr 1fr
    justify-content: center
    align-items: center

    .gene-block
      width: calc((100vw - 32px) * 0.25)
      height: calc((100vw - 32px) * 0.25)
      box-sizing: border-box
      margin: 8px
      display: flex
      justify-content: center
      align-items: center
      border: solid 2px $primary
      border-radius: 100%
      background: white
      cursor: pointer

    .hide-gene-item
      opacity: 0
      cursor: default
</style>
