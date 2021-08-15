<template>
  <q-page class="index-wrap full-width column justify-start items-center">
    <div class="gene-grid q-my-md relative-position">
      <div
        class="gene-item relative-position"
      >
        <element-icon
          v-if="lineJudge([1, 1], [2, 2], [3, 3], 'Element', [0, 0]).show"
          :ele="lineJudge([1, 1], [2, 2], [3, 3], 'Element').element"
        ></element-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <element-icon
          v-if="lineJudge([1, 1], [2, 1], [3, 1], 'Element', [0, 1]).show"
          :ele="lineJudge([1, 1], [2, 1], [3, 1], 'Element').element"
        ></element-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <element-icon
          v-if="lineJudge([1, 2], [2, 2], [3, 2], 'Element', [0, 2]).show"
          :ele="lineJudge([1, 2], [2, 2], [3, 2], 'Element').element"
        ></element-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <element-icon
          v-if="lineJudge([1, 3], [2, 3], [3, 3], 'Element', [0, 3]).show"
          :ele="lineJudge([1, 3], [2, 3], [3, 3], 'Element').element"
        ></element-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <type-icon
          v-if="lineJudge([1, 3], [2, 2], [3, 1], 'Type', [0, 4]).show"
          :type="lineJudge([1, 3], [2, 2], [3, 1], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <element-icon
          v-if="lineJudge([1, 1], [1, 2], [1, 3], 'Element', [1, 0]).show"
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
          :size="geneIconSize"
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
          :size="geneIconSize"
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
          :size="geneIconSize"
          :gene="geneGrid[1][3]"
        ></gene-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <type-icon
          v-if="lineJudge([1, 1], [1, 2], [1, 3], 'Type', [1, 4]).show"
          :type="lineJudge([1, 1], [1, 2], [1, 3], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <element-icon
          v-if="lineJudge([2, 1], [2, 2], [2, 3], 'Element', [2, 0]).show"
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
          :size="geneIconSize"
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
          :size="geneIconSize"
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
          :size="geneIconSize"
          :gene="geneGrid[2][3]"
        ></gene-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <type-icon
          v-if="lineJudge([2, 1], [2, 2], [2, 3], 'Type', [2, 4]).show"
          :type="lineJudge([2, 1], [2, 2], [2, 3], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <element-icon
          v-if="lineJudge([3, 1], [3, 2], [3, 3], 'Element', [3, 0]).show"
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
          :size="geneIconSize"
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
          :size="geneIconSize"
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
          :size="geneIconSize"
          :gene="geneGrid[3][3]"
        ></gene-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <type-icon
          v-if="lineJudge([3, 1], [3, 2], [3, 3], 'Type', [3, 4]).show"
          :type="lineJudge([3, 1], [3, 2], [3, 3], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <element-icon
          v-if="lineJudge([3, 1], [2, 2], [1, 3], 'Element', [4, 0]).show"
          :ele="lineJudge([3, 1], [2, 2], [1, 3], 'Element').element"
        ></element-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <type-icon
          v-if="lineJudge([1, 1], [2, 1], [3, 1], 'Type', [4, 1]).show"
          :type="lineJudge([1, 1], [2, 1], [3, 1], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <type-icon
          v-if="lineJudge([1, 2], [2, 2], [3, 2], 'Type', [4, 2]).show"
          :type="lineJudge([1, 2], [2, 2], [3, 2], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <type-icon
          v-if="lineJudge([1, 3], [2, 3], [3, 3], 'Type', [4, 3]).show"
          :type="lineJudge([1, 3], [2, 3], [3, 3], 'Type').type"
        ></type-icon>
      </div>
      <div
        class="gene-item relative-position"
      >
        <type-icon
          v-if="lineJudge([1, 1], [2, 2], [3, 3], 'Type', [4, 4]).show"
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

    <q-separator
      class="full-width"
      spaced="md"
    />

    <div class="full-width row justify-center items-center">
      <q-btn
        class="full-width"
        icon="search"
        label="查看宾果列表"
        @click="openBingoDialog = true"
        flat
      ></q-btn>
    </div>

    <q-separator
      class="full-width"
      spaced="md"
    />

    <q-list class="full-width">
      <q-item>
        <q-item-section class="text-bold">因子列表</q-item-section>
        <q-item-section side>
          <q-btn
            icon="share"
            @click="saveAsImg"
            round
            flat
          ></q-btn>
        </q-item-section>
      </q-item>
      <q-item
        v-for="(gene, index) in getSkillGeneList"
        :key="index"
      >
        <gene-list-item
          :gene="gene"
          :show-opt-btn="false"
        ></gene-list-item>
      </q-item>
      <q-item
        v-if="getSkillGeneList.length === 0"
        class="full-width row justify-center items-center"
      >
        <div class="column justify-center items-center">
          <q-icon
            name="list_alt"
            size="xl"
            color="grey-6"
          ></q-icon>
          <span class="text-h6 text-bold text-grey-6">还没有选择因子~</span>
        </div>
      </q-item>
    </q-list>

    <q-separator
      class="full-width"
      spaced="md"
    />

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
    <q-dialog
      v-model="openBingoDialog"
      full-width
    >
      <bingo :gene="geneGrid"></bingo>
    </q-dialog>
    <q-space/>
    <custom-footer></custom-footer>
  </q-page>
</template>

<script>
import {computed, defineComponent, ref} from 'vue'
import GeneList from 'components/GeneList'
import GeneIcon from 'components/GeneIcon'
import ElementIcon from 'components/ElementIcon'
import TypeIcon from 'components/TypeIcon'
import GeneListItem from 'components/GeneListItem'
import {exportFile, useQuasar} from 'quasar'
import html2canvas from 'html2canvas'
import CustomFooter from 'components/CustomFooter'
import Bingo from 'components/Bingo'

export default defineComponent({
  name: 'PageIndex',
  components: {Bingo, CustomFooter, GeneListItem, TypeIcon, ElementIcon, GeneIcon, GeneList},
  setup() {
    const $q = useQuasar()
    const geneIconSize = ref('16vw')
    const geneGrid = ref([
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
    ])
    const openGeneDialog = ref(false)
    const openBingoDialog = ref(false)
    const currentSelectedGene = ref([1, 1])

    function showGeneDialog(geneIndexX, geneIndexY) {
      currentSelectedGene.value = [geneIndexX, geneIndexY]
      openGeneDialog.value = true
    }

    function setGeneTypeOrEle(index, value) {
      geneGrid.value[index[0]][index[1]] = {
        value: value
      }
    }

    function saveAsImg() {
      html2canvas(document.querySelector('.index-wrap'), {
        allowTaint: true,
        useCORS: true
      }).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob) {
            const imgStatus = exportFile('我的因子配装.png', blob, {
              mimeType: 'image/png'
            })
            if (imgStatus === true) {
              $q.notify({
                type: 'positive',
                icon: 'save',
                message: '保存成功',
                position: 'top'
              })
            } else {
              $q.notify({
                type: 'negative',
                icon: 'error',
                message: '保存失败，请尝试重新保存',
                position: 'top'
              })
            }
          } else {
            $q.notify({
              type: 'negative',
              icon: 'error',
              message: '保存失败，请尝试重新保存',
              position: 'top'
            })
          }
        })
      }).catch((err) => {
        $q.notify({
          type: 'negative',
          message: `生成图片失败，err: ${err.message}`
        })
      })
    }

    const lineJudge = computed(() => (index1, index2, index3, judgeType, targetIndex = null) => {
      if (judgeType === 'Type') {
        if (!geneGrid.value[index1[0]][index1[1]].type || !geneGrid.value[index3[0]][index3[1]].type || !geneGrid.value[index2[0]][index2[1]].type) {
          return {
            show: false
          }
        } else if (geneGrid.value[index1[0]][index1[1]].type === geneGrid.value[index2[0]][index2[1]].type &&
          geneGrid.value[index3[0]][index3[1]].type === geneGrid.value[index2[0]][index2[1]].type) {
          if (targetIndex) setGeneTypeOrEle(targetIndex, geneGrid.value[index1[0]][index1[1]].type)
          return {
            show: true,
            type: geneGrid.value[index1[0]][index1[1]].type
          }
        } else if (geneGrid.value[index1[0]][index1[1]].type === '虹色' &&
          geneGrid.value[index3[0]][index3[1]].type === geneGrid.value[index2[0]][index2[1]].type) {
          if (targetIndex) setGeneTypeOrEle(targetIndex, geneGrid.value[index2[0]][index2[1]].type)
          return {
            show: true,
            type: geneGrid.value[index2[0]][index2[1]].type
          }
        } else if (geneGrid.value[index2[0]][index2[1]].type === '虹色' &&
          geneGrid.value[index3[0]][index3[1]].type === geneGrid.value[index1[0]][index1[1]].type) {
          if (targetIndex) setGeneTypeOrEle(targetIndex, geneGrid.value[index1[0]][index1[1]].type)
          return {
            show: true,
            type: geneGrid.value[index1[0]][index1[1]].type
          }
        } else if (geneGrid.value[index3[0]][index3[1]].type === '虹色' &&
          geneGrid.value[index2[0]][index2[1]].type === geneGrid.value[index1[0]][index1[1]].type) {
          if (targetIndex) setGeneTypeOrEle(targetIndex, geneGrid.value[index2[0]][index2[1]].type)
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
          if (targetIndex) setGeneTypeOrEle(targetIndex, geneGrid.value[index1[0]][index1[1]].element)
          return {
            show: true,
            element: geneGrid.value[index1[0]][index1[1]].element
          }
        } else if (geneGrid.value[index1[0]][index1[1]].element === '虹色' &&
          geneGrid.value[index3[0]][index3[1]].element === geneGrid.value[index2[0]][index2[1]].element) {
          if (targetIndex) setGeneTypeOrEle(targetIndex, geneGrid.value[index2[0]][index2[1]].element)
          return {
            show: true,
            element: geneGrid.value[index2[0]][index2[1]].element
          }
        } else if (geneGrid.value[index2[0]][index2[1]].element === '虹色' &&
          geneGrid.value[index3[0]][index3[1]].element === geneGrid.value[index1[0]][index1[1]].element) {
          if (targetIndex) setGeneTypeOrEle(targetIndex, geneGrid.value[index1[0]][index1[1]].element)
          return {
            show: true,
            element: geneGrid.value[index1[0]][index1[1]].element
          }
        } else if (geneGrid.value[index3[0]][index3[1]].element === '虹色' &&
          geneGrid.value[index2[0]][index2[1]].element === geneGrid.value[index1[0]][index1[1]].element) {
          if (targetIndex) setGeneTypeOrEle(targetIndex, geneGrid.value[index2[0]][index2[1]].element)
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

    const getSkillGeneList = computed(() => {
      const filterGeneList = []
      for (let i = 1; i < geneGrid.value.length - 1; i++) {
        for (let j = 1; j < geneGrid.value[i].length - 1; j++) {
          if (geneGrid.value[i][j] && JSON.stringify(geneGrid.value[i][j]) !== '{}')
            filterGeneList.push(geneGrid.value[i][j])
        }
      }
      return filterGeneList
    })

    return {
      geneGrid,
      openGeneDialog,
      currentSelectedGene,
      geneIconSize,
      openBingoDialog,

      showGeneDialog,
      lineJudge,
      getSkillGeneList,
      saveAsImg
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
  --gene-block-size: 16vw

  .gene-grid
    width: 100vw
    height: 100vw
    display: grid
    grid-template-rows: 1fr 2fr 2fr 2fr 1fr
    grid-template-columns: 1fr 2fr 2fr 2fr 1fr
    justify-items: center
    align-items: center

    .gene-block
      width: calc(var(--gene-block-size) + 4vw)
      height: calc(var(--gene-block-size) + 4vw)
      box-sizing: content-box
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
      height: calc(var(--gene-block-size) / var(--line-scale))
      background: $primary
      z-index: -1

    .gene-row-1
      left: 6.25vw
      top: calc(12.5vw * 2 - var(--gene-block-size) / var(--line-scale) / 2)

    .gene-row-2
      left: 6.25vw
      top: calc(12.5vw * 4 - var(--gene-block-size) / var(--line-scale) / 2)

    .gene-row-3
      left: 6.25vw
      top: calc(12.5vw * 6 - var(--gene-block-size) / var(--line-scale) / 2)

    .gene-row-4
      right: 6.25vw
      top: calc(12.5vw * 2 - var(--gene-block-size) / var(--line-scale) / 2)

    .gene-row-5
      right: 6.25vw
      top: calc(12.5vw * 4 - var(--gene-block-size) / var(--line-scale) / 2)

    .gene-row-6
      right: 6.25vw
      top: calc(12.5vw * 6 - var(--gene-block-size) / var(--line-scale) / 2)

    .gene-col
      position: absolute
      width: calc(var(--gene-block-size) / var(--line-scale))
      height: calc(5 * 12.5vw + 6.25vw)
      background: $primary
      z-index: -1

    .gene-col-1
      top: 6.25vw
      left: calc(12.5vw * 2 - var(--gene-block-size) / var(--line-scale) / 2)

    .gene-col-2
      top: 6.25vw
      left: calc(12.5vw * 4 - var(--gene-block-size) / var(--line-scale) / 2)

    .gene-col-3
      top: 6.25vw
      left: calc(12.5vw * 6 - var(--gene-block-size) / var(--line-scale) / 2)

    .gene-col-4
      bottom: 6.25vw
      left: calc(12.5vw * 2 - var(--gene-block-size) / var(--line-scale) / 2)

    .gene-col-5
      bottom: 6.25vw
      left: calc(12.5vw * 4 - var(--gene-block-size) / var(--line-scale) / 2)

    .gene-col-6
      bottom: 6.25vw
      left: calc(12.5vw * 6 - var(--gene-block-size) / var(--line-scale) / 2)

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
