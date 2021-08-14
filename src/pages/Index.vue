<template>
  <q-page class="index-wrap full-width column justify-start items-center">
    <div class="gene-grid q-my-md relative-position">
      <div
        :class="{ 'hide-gene-item' : !geneGrid[0][0] || JSON.stringify(geneGrid[0][0]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[0][1] || JSON.stringify(geneGrid[0][1]) === '{}'}"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[0][2] || JSON.stringify(geneGrid[0][2]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[0][3] || JSON.stringify(geneGrid[0][3]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[0][4] || JSON.stringify(geneGrid[0][4]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[1][0] || JSON.stringify(geneGrid[1][0]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        class="gene-block shadow-4 text-primary relative-position overflow-hidden"
        @click="showGeneDialog(1, 1)"
        v-ripple
      >
        <span v-if="geneGrid[1][1] && JSON.stringify(geneGrid[1][1]) === '{}'">空位</span>
        <gene-icon
          v-else
          :gene="geneGrid[1][1]"
        ></gene-icon>
      </div>
      <div
        class="gene-block shadow-4 text-primary relative-position overflow-hidden"
        @click="showGeneDialog(1, 2)"
        v-ripple
      >
        <span v-if="geneGrid[1][2] && JSON.stringify(geneGrid[1][2]) === '{}'">空位</span>
        <gene-icon
          v-else
          :gene="geneGrid[1][2]"
        ></gene-icon>
      </div>
      <div
        class="gene-block shadow-4 text-primary relative-position overflow-hidden"
        @click="showGeneDialog(1, 3)"
        v-ripple
      >
        <span v-if="geneGrid[1][3] && JSON.stringify(geneGrid[1][3]) === '{}'">空位</span>
        <gene-icon
          v-else
          :gene="geneGrid[1][3]"
        ></gene-icon>
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[1][4] || JSON.stringify(geneGrid[1][4]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[2][0] || JSON.stringify(geneGrid[2][0]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        class="gene-block shadow-4 text-primary relative-position overflow-hidden"
        @click="showGeneDialog(2, 1)"
        v-ripple
      >
        <span v-if="geneGrid[2][1] && JSON.stringify(geneGrid[2][1]) === '{}'">空位</span>
        <gene-icon
          v-else
          :gene="geneGrid[2][1]"
        ></gene-icon>
      </div>
      <div
        class="gene-block shadow-4 text-primary relative-position overflow-hidden"
        @click="showGeneDialog(2, 2)"
        v-ripple
      >
        <span v-if="geneGrid[2][2] && JSON.stringify(geneGrid[2][2]) === '{}'">空位</span>
        <gene-icon
          v-else
          :gene="geneGrid[2][2]"
        ></gene-icon>
      </div>
      <div
        class="gene-block shadow-4 text-primary relative-position overflow-hidden"
        @click="showGeneDialog(2, 3)"
        v-ripple
      >
        <span v-if="geneGrid[2][3] && JSON.stringify(geneGrid[2][3]) === '{}'">空位</span>
        <gene-icon
          v-else
          :gene="geneGrid[2][3]"
        ></gene-icon>
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[2][4] || JSON.stringify(geneGrid[2][4]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[3][0] || JSON.stringify(geneGrid[3][0]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        class="gene-block shadow-4 text-primary relative-position overflow-hidden"
        @click="showGeneDialog(3, 1)"
        v-ripple
      >
        <span v-if="geneGrid[3][1] && JSON.stringify(geneGrid[3][1]) === '{}'">空位</span>
        <gene-icon
          v-else
          :gene="geneGrid[3][1]"
        ></gene-icon>
      </div>
      <div
        class="gene-block shadow-4 text-primary relative-position overflow-hidden"
        @click="showGeneDialog(3, 2)"
        v-ripple
      >
        <span v-if="geneGrid[3][2] && JSON.stringify(geneGrid[3][2]) === '{}'">空位</span>
        <gene-icon
          v-else
          :gene="geneGrid[3][2]"
        ></gene-icon>
      </div>
      <div
        class="gene-block shadow-4 text-primary relative-position overflow-hidden"
        @click="showGeneDialog(3, 3)"
        v-ripple
      >
        <span v-if="geneGrid[3][3] && JSON.stringify(geneGrid[3][3]) === '{}'">空位</span>
        <gene-icon
          v-else
          :gene="geneGrid[3][3]"
        ></gene-icon>
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[3][4] || JSON.stringify(geneGrid[3][4]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[4][0] || JSON.stringify(geneGrid[4][0]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[4][1] || JSON.stringify(geneGrid[4][1]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[4][2] || JSON.stringify(geneGrid[4][2]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[4][3] || JSON.stringify(geneGrid[4][3]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>
      <div
        :class="{ 'hide-gene-item' : !geneGrid[4][4] || JSON.stringify(geneGrid[4][4]) === '{}' }"
        class="gene-item relative-position"
        v-ripple
      >G
      </div>

      <div class="gene-row gene-row-1"></div>
      <div class="gene-row gene-row-2"></div>
      <div class="gene-row gene-row-3"></div>

      <div class="gene-col gene-col-1"></div>
      <div class="gene-col gene-col-2"></div>
      <div class="gene-col gene-col-3"></div>

      <div class="gene-slanted gene-slanted-1"></div>
      <div class="gene-slanted gene-slanted-2"></div>
    </div>

    <q-dialog
      class="gene-list-dialog"
      v-model="openGeneDialog"
      position="bottom"
      full-width
    >
      <gene-list
        v-model:gene-grid="geneGrid"
        :selected-gene-index="currentSelectedGene"
        @close-dialog="openGeneDialog = false"
      ></gene-list>
    </q-dialog>
  </q-page>
</template>

<script>
import {defineComponent, ref} from 'vue'
import GeneList from 'components/GeneList'
import GeneIcon from 'components/GeneIcon'

export default defineComponent({
  name: 'PageIndex',
  components: {GeneIcon, GeneList},
  setup() {
    const geneGrid = ref([
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
    ])
    const openGeneDialog = ref(false)
    const currentSelectedGene = ref([1, 1])

    function showGeneDialog(geneIndexX, geneIndexY) {
      currentSelectedGene.value = [geneIndexX, geneIndexY]
      openGeneDialog.value = true
    }

    function lineJudge(index1, index2, index3, judgeType) {
      if (judgeType === 'Type') {
        if (geneGrid.value[index1[0]][index1[1]].type === geneGrid.value[index2[0]][index2[1]].type &&
          geneGrid.value[index3[0]][index3[1]].type === geneGrid.value[index2[0]][index2[1]].type) {
          return {
            show: true,
            type: geneGrid.value[index1[0]][index1[1]].type
          }
        } else if (geneGrid.value[index1[0]][index1[1]].type === '虹色' &&
          geneGrid.value[index3[0]][index3[1]].type === geneGrid.value[index2[0]][index2[1]].type) {
          return {
            show: true,
            type: geneGrid.value[index2[0]][index2[1]].type
          }
        } else if (geneGrid.value[index2[0]][index2[1]].type === '虹色' &&
          geneGrid.value[index3[0]][index3[1]].type === geneGrid.value[index1[0]][index1[1]].type) {
          return {
            show: true,
            type: geneGrid.value[index1[0]][index1[1]].type
          }
        } else if (geneGrid.value[index3[0]][index3[1]].type === '虹色' &&
          geneGrid.value[index2[0]][index2[1]].type === geneGrid.value[index1[0]][index1[1]].type) {
          return {
            show: true,
            type: geneGrid.value[index2[0]][index2[1]].type
          }
        } else return {
          show: false
        }
      } else if (judgeType === 'Element') {
        if (geneGrid.value[index1[0]][index1[1]].element === geneGrid.value[index2[0]][index2[1]].element &&
          geneGrid.value[index3[0]][index3[1]].element === geneGrid.value[index2[0]][index2[1]].element) {
          return {
            show: true,
            element: geneGrid.value[index1[0]][index1[1]].element
          }
        } else if (geneGrid.value[index1[0]][index1[1]].element === '虹色' &&
          geneGrid.value[index3[0]][index3[1]].element === geneGrid.value[index2[0]][index2[1]].element) {
          return {
            show: true,
            element: geneGrid.value[index2[0]][index2[1]].element
          }
        } else if (geneGrid.value[index2[0]][index2[1]].element === '虹色' &&
          geneGrid.value[index3[0]][index3[1]].element === geneGrid.value[index1[0]][index1[1]].element) {
          return {
            show: true,
            element: geneGrid.value[index1[0]][index1[1]].element
          }
        } else if (geneGrid.value[index3[0]][index3[1]].element === '虹色' &&
          geneGrid.value[index2[0]][index2[1]].element === geneGrid.value[index1[0]][index1[1]].element) {
          return {
            show: true,
            element: geneGrid.value[index2[0]][index2[1]].element
          }
        } else return {
          show: false
        }
      } else return {
        show: false
      }
    }

    return {
      geneGrid,
      openGeneDialog,
      currentSelectedGene,

      showGeneDialog,
      lineJudge
    }
  }
})
</script>

<style
  scoped
  lang="sass"
>
.index-wrap
  --line-scale: 5

  .gene-grid
    width: 100vw
    height: 100vw
    display: grid
    grid-template-rows: 1fr 2fr 2fr 2fr 1fr
    grid-template-columns: 1fr 2fr 2fr 2fr 1fr
    justify-content: center
    align-items: center

    .gene-block
      width: calc(3.5rem + 2 * 0.4rem + 4px)
      height: calc(3.5rem + 2 * 0.4rem + 4px)
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

    .gene-row
      position: absolute
      left: 50%
      width: 80vw
      height: calc((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale))
      background: $primary
      transform: translateX(-50%)
      z-index: -1

    .gene-row-1
      top: calc(12.5vw + 12.5vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-row-2
      top: calc(12.5vw + 12.5vw + 25vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-row-3
      top: calc(12.5vw + 12.5vw + 25vw * 2 - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-col
      position: absolute
      top: 50%
      width: calc((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale))
      height: 80vw
      background: $primary
      transform: translateY(-50%)
      z-index: -1

    .gene-col-1
      left: calc(12.5vw + 12.5vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-col-2
      left: calc(12.5vw + 12.5vw + 25vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-col-3
      left: calc(12.5vw + 12.5vw + 25vw * 2 - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))
</style>
