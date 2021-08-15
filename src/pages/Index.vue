<template>
  <q-page class="index-wrap full-width column justify-start items-center">
    <div class="gene-grid q-my-md relative-position">
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <element-icon
          v-if="lineJudge([1, 1], [2, 2], [3, 3], 'Element').show"
          :ele="lineJudge([1, 1], [2, 2], [3, 3], 'Element').element"
        ></element-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <element-icon
          v-if="lineJudge([1, 1], [2, 1], [3, 1], 'Element').show"
          :ele="lineJudge([1, 1], [2, 1], [3, 1], 'Element').element"
        ></element-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <element-icon
          v-if="lineJudge([1, 2], [2, 2], [3, 2], 'Element').show"
          :ele="lineJudge([1, 2], [2, 2], [3, 2], 'Element').element"
        ></element-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <element-icon
          v-if="lineJudge([1, 3], [2, 3], [3, 3], 'Element').show"
          :ele="lineJudge([1, 3], [2, 3], [3, 3], 'Element').element"
        ></element-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <type-icon
          v-if="lineJudge([1, 3], [2, 2], [3, 1], 'Type').show"
          :type="lineJudge([1, 3], [2, 2], [3, 1], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <element-icon
          v-if="lineJudge([1, 1], [1, 2], [1, 3], 'Element').show"
          :ele="lineJudge([1, 1], [1, 2], [1, 3], 'Element').element"
        ></element-icon>
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
        class="gene-item relative-position"
        v-ripple
      >
        <type-icon
          v-if="lineJudge([1, 1], [1, 2], [1, 3], 'Type').show"
          :type="lineJudge([1, 1], [1, 2], [1, 3], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <element-icon
          v-if="lineJudge([2, 1], [2, 2], [2, 3], 'Element').show"
          :ele="lineJudge([2, 1], [2, 2], [2, 3], 'Element').element"
        ></element-icon>
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
        class="gene-item relative-position"
        v-ripple
      >
        <type-icon
          v-if="lineJudge([2, 1], [2, 2], [2, 3], 'Type').show"
          :type="lineJudge([2, 1], [2, 2], [2, 3], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <element-icon
          v-if="lineJudge([3, 1], [3, 2], [3, 3], 'Element').show"
          :ele="lineJudge([3, 1], [3, 2], [3, 3], 'Element').element"
        ></element-icon>
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
        class="gene-item relative-position"
        v-ripple
      >
        <type-icon
          v-if="lineJudge([3, 1], [3, 2], [3, 3], 'Type').show"
          :type="lineJudge([3, 1], [3, 2], [3, 3], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <element-icon
          v-if="lineJudge([3, 1], [2, 2], [1, 3], 'Element').show"
          :ele="lineJudge([3, 1], [2, 2], [1, 3], 'Element').element"
        ></element-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <type-icon
          v-if="lineJudge([1, 1], [2, 1], [3, 1], 'Type').show"
          :type="lineJudge([1, 1], [2, 1], [3, 1], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <type-icon
          v-if="lineJudge([1, 2], [2, 2], [3, 2], 'Type').show"
          :type="lineJudge([1, 2], [2, 2], [3, 2], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <type-icon
          v-if="lineJudge([1, 3], [2, 3], [3, 3], 'Type').show"
          :type="lineJudge([1, 3], [2, 3], [3, 3], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
        v-ripple
      >
        <type-icon
          v-if="lineJudge([1, 1], [2, 2], [3, 3], 'Type').show"
          :type="lineJudge([1, 1], [2, 2], [3, 3], 'Type').type"
        ></type-icon>
      </div>

      <div
        v-if="lineJudge([1, 1], [1 ,2], [1, 3], 'Element').show"
        class="gene-row gene-row-1"
      ></div>
      <div
        v-if="lineJudge([2, 1], [2 ,2], [2, 3], 'Element').show"
        class="gene-row gene-row-2"
      ></div>
      <div
        v-if="lineJudge([3, 1], [3 ,2], [3, 3], 'Element').show"
        class="gene-row gene-row-3"
      ></div>
      <div
        v-if="lineJudge([1, 1], [1 ,2], [1, 3], 'Type').show"
        class="gene-row gene-row-4"
      ></div>
      <div
        v-if="lineJudge([2, 1], [2 ,2], [2, 3], 'Type').show"
        class="gene-row gene-row-5"
      ></div>
      <div
        v-if="lineJudge([3, 1], [3 ,2], [3, 3], 'Type').show"
        class="gene-row gene-row-6"
      ></div>

      <div
        v-if="lineJudge([1, 1], [2, 1], [3, 1], 'Element').show"
        class="gene-col gene-col-1"
      ></div>
      <div
        v-if="lineJudge([1, 2], [2, 2], [3, 2], 'Element').show"
        class="gene-col gene-col-2"
      ></div>
      <div
        v-if="lineJudge([1, 3], [2, 3], [3, 3], 'Element').show"
        class="gene-col gene-col-3"
      ></div>
      <div
        v-if="lineJudge([1, 1], [2, 1], [3, 1], 'Type').show"
        class="gene-col gene-col-4"
      ></div>
      <div
        v-if="lineJudge([1, 2], [2, 2], [3, 2], 'Type').show"
        class="gene-col gene-col-5"
      ></div>
      <div
        v-if="lineJudge([1, 3], [2, 3], [3, 3], 'Type').show"
        class="gene-col gene-col-6"
      ></div>

      <div
        v-if="lineJudge([1, 1], [2, 2], [3, 3], 'Element').show"
        class="gene-row gene-row-slanted-1"
      ></div>
      <div
        v-if="lineJudge([1, 3], [2, 2], [3, 1], 'Type').show"
        class="gene-row gene-row-slanted-2"
      ></div>
      <div
        v-if="lineJudge([1, 1], [2, 2], [3, 3], 'Type').show"
        class="gene-row gene-row-slanted-3"
      ></div>
      <div
        v-if="lineJudge([1, 3], [2, 2], [3, 1], 'Element').show"
        class="gene-row gene-row-slanted-4"
      ></div>
    </div>

    <q-separator class="full-width" spaced="md"/>

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
import {computed, defineComponent, ref} from 'vue'
import GeneList from 'components/GeneList'
import GeneIcon from 'components/GeneIcon'
import ElementIcon from 'components/ElementIcon'
import TypeIcon from 'components/TypeIcon'

export default defineComponent({
  name: 'PageIndex',
  components: {TypeIcon, ElementIcon, GeneIcon, GeneList},
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

    const lineJudge = computed(() => (index1, index2, index3, judgeType) => {
      if (judgeType === 'Type') {
        if (!geneGrid.value[index1[0]][index1[1]].type || !geneGrid.value[index3[0]][index3[1]].type || !geneGrid.value[index2[0]][index2[1]].type) {
          return {
            show: false
          }
        } else if (geneGrid.value[index1[0]][index1[1]].type === geneGrid.value[index2[0]][index2[1]].type &&
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
        if (!geneGrid.value[index1[0]][index1[1]].element || !geneGrid.value[index3[0]][index3[1]].element || !geneGrid.value[index2[0]][index2[1]].element) {
          return {
            show: false
          }
        } else if (geneGrid.value[index1[0]][index1[1]].element === geneGrid.value[index2[0]][index2[1]].element &&
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
    })

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
  --line-scale: 6

  .gene-grid
    width: 100vw
    height: 100vw
    display: grid
    grid-template-rows: 1fr 2fr 2fr 2fr 1fr
    grid-template-columns: 1fr 2fr 2fr 2fr 1fr
    justify-items: center
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

    .gene-row
      position: absolute
      width: calc(5 * 12.5vw + 6.25vw)
      height: calc((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale))
      background: $primary
      z-index: -1

    .gene-row-1
      left: 6.25vw
      top: calc(12.5vw + 12.5vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-row-2
      left: 6.25vw
      top: calc(12.5vw + 12.5vw + 25vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-row-3
      left: 6.25vw
      top: calc(12.5vw + 12.5vw + 25vw * 2 - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-row-4
      right: 6.25vw
      top: calc(12.5vw + 12.5vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-row-5
      right: 6.25vw
      top: calc(12.5vw + 12.5vw + 25vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-row-6
      right: 6.25vw
      top: calc(12.5vw + 12.5vw + 25vw * 2 - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-col
      position: absolute
      width: calc((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale))
      height: calc(5 * 12.5vw + 6.25vw)
      background: $primary
      z-index: -1

    .gene-col-1
      top: 6.25vw
      left: calc(12.5vw + 12.5vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-col-2
      top: 6.25vw
      left: calc(12.5vw + 12.5vw + 25vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-col-3
      top: 6.25vw
      left: calc(12.5vw + 12.5vw + 25vw * 2 - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-col-4
      bottom: 6.25vw
      left: calc(12.5vw + 12.5vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-col-5
      bottom: 6.25vw
      left: calc(12.5vw + 12.5vw + 25vw - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-col-6
      bottom: 6.25vw
      left: calc(12.5vw + 12.5vw + 25vw * 2 - ((3.5rem + 2 * 0.4rem + 4px) / var(--line-scale) / 2))

    .gene-row-slanted-1
      top: 6.25vw
      left: 6.25vw
      width: calc(7.1 * 12.5vw + 6.25vw)
      transform-origin: 0 50%
      transform: translateY(-50%) rotate(45deg)

    .gene-row-slanted-2
      top: 6.25vw
      left: calc(100vw / 16 * 15)
      width: calc(7.1 * 12.5vw + 6.25vw)
      transform-origin: 0 50%
      transform: translateY(-50%) rotate(135deg)

    .gene-row-slanted-3
      top: calc(6.25vw + 18.75vw)
      left: calc(6.25vw + 18.75vw)
      width: calc(7.1 * 12.5vw + 6.25vw)
      transform-origin: 0 50%
      transform: translateY(-50%) rotate(45deg)

    .gene-row-slanted-4
      top: calc(6.25vw + 18.75vw)
      left: calc(100vw / 16 * 15 - 18.75vw)
      width: calc(7.1 * 12.5vw + 6.25vw)
      transform-origin: 0 50%
      transform: translateY(-50%) rotate(135deg)
</style>
