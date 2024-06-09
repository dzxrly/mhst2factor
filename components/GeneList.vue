<template>
  <q-card class="gene-list-wrap">
    <div class="close-btn-row bg-white full-width">
      <div class="row justify-between items-center full-width q-pt-md q-px-sm">
        <span class="text-subtitle2 text-grey-8">共找到{{ geneMap.length }}个因子</span>
        <q-btn
            v-close-popup
            flat
            icon="close"
            round
        ></q-btn>
      </div>
      <q-slide-transition>
        <div
            v-if="JSON.stringify(refGeneGrid[reactiveGeneIndex[0]][reactiveGeneIndex[1]]) !== '{}'"
            class="column bg-white justify-center items-center full-width"
            style="border: solid #F2F2F2; border-width: 1px 0"
        >
          <div class="row justify-start items-center full-width q-pa-sm">
            <span>已选中<span class="text-bold">{{
                refGeneGrid[reactiveGeneIndex[0]][reactiveGeneIndex[1]].id
              }}</span></span>
          </div>
          <div class="row justify-between items-center full-width no-wrap">
            <q-select
                v-model="geneStars"
                :disable="refGeneGrid[reactiveGeneIndex[0]][reactiveGeneIndex[1]].id === '虹色基因'"
                :options="geneStarsOptions"
                class="col-6 q-pa-sm"
                emit-value
                filled
                label="因子等级"
                map-options
            ></q-select>
            <q-btn
                class="col-6 q-pa-sm"
                color="negative"
                flat
                icon="delete"
                label="清除"
                @click="refGeneGrid[reactiveGeneIndex[0]][reactiveGeneIndex[1]] = {}"
            ></q-btn>
          </div>
        </div>
      </q-slide-transition>
      <div class="row justify-center items-center full-width q-pb-xs">
        <q-select
            v-model="geneType"
            :options="geneTypeOptions"
            class="col-6 q-pa-sm"
            clearable
            filled
            label="因子类型"
        ></q-select>
        <q-select
            v-model="geneEleType"
            :options="geneEleTypeOptions"
            class="col-6 q-pa-sm"
            clearable
            filled
            label="技能属性"
        ></q-select>
      </div>
      <div class="row justify-start items-center full-width q-pb-md">
        <q-select
            v-model="geneSize"
            :options="geneSizeOptions"
            class="col-6 q-pa-sm"
            clearable
            filled
            label="因子大小"
        ></q-select>
        <q-input
            v-model="keyWord"
            class="col-6 q-pa-sm"
            clearable
            filled
            label="搜索"
        ></q-input>
      </div>
    </div>
    <div class="virtual-wrap column justify-start items-center full-width">
      <div
          v-if="loadingGeneList"
          class="row justify-center items-center full-width q-my-xl"
      >
        <q-spinner-pie
            color="primary"
            size="20vw"
        ></q-spinner-pie>
      </div>
      <div
          v-if="geneMap.length === 0 && !loadingGeneList"
          class="full-width q-my-xl column justify-center items-center"
      >
        <q-icon
            color="grey-6"
            name="search_off"
            size="20vw"
        ></q-icon>
        <span class="text-h6 text-bold text-grey-6">什么也没找到 :P</span>
      </div>
      <div
          v-if="!loadingGeneList"
          class="full-width"
      >
        <q-virtual-scroll
            :items="geneMap"
            :items-size="10"
            separator
            style="max-height: 80vh"
        >
          <template v-slot="{ item, index }">
            <q-item
                :key="index"
                :class="{'disabled-item' : isGeneUsed(item)}"
            >
              <q-item-section>
                <gene-list-item
                    :gene="item"
                    @confirm-gene="confirmGene"
                ></gene-list-item>
              </q-item-section>
            </q-item>
          </template>
        </q-virtual-scroll>
      </div>
    </div>
  </q-card>
</template>

<script>
import {defineComponent, onMounted, ref, toRef, watch} from 'vue'
import GeneListItem from 'src/components/GeneListItem.vue'
import {useQuasar} from 'quasar'

export default defineComponent({
  name: 'GeneList',
  components: {GeneListItem},
  emits: ['selected-gene', 'update:gene-grid', 'close-dialog'],
  props: {
    geneGrid: {
      type: Array
    },
    selectedGeneIndex: {
      type: Array,
      default: () => {
        return [1, 1]
      }
    }
  },
  setup(props, context) {
    const $q = useQuasar()
    const loadingGeneList = ref(true)
    const reactiveGeneGrid = toRef(props, 'geneGrid')
    const refGeneGrid = ref(reactiveGeneGrid)
    const reactiveGeneIndex = toRef(props, 'selectedGeneIndex')
    const canNotUseGeneList = ref([])
    const geneMap = ref([])
    const geneStars = ref(0)

    const geneType = ref(null)
    const geneEleType = ref(null)
    const geneSize = ref(null)
    const keyWord = ref(null)

    function initGeneList() {
      for (let i = 0; i < reactiveGeneGrid.value.length; i++) {
        if (i !== 0 && i !== reactiveGeneGrid.value.length - 1) {
          for (let j = 0; j < reactiveGeneGrid.value[i].length; j++) {
            if (j !== 0 && j !== reactiveGeneGrid.value[i].length - 1) {
              canNotUseGeneList.value.push(reactiveGeneGrid.value[i][j])
            }
          }
        }
      }
    }

    function initGeneMap(typeFilter = null, eleFilter = null, sizeFilter = null, nameKey = null) {
      loadingGeneList.value = true
      let geneDataset = () => import('src/gene-dataset')
      geneDataset().then((m) => {
        geneMap.value = m.getGeneMap(typeFilter, eleFilter, sizeFilter, nameKey)
        loadingGeneList.value = false
      }).catch((err) => {
        loadingGeneList.value = false
        $q.notify({
          type: 'negative',
          position: 'top',
          message: err.message
        })
      })
    }

    function getGeneStar() {
      geneStars.value = refGeneGrid.value[reactiveGeneIndex.value[0]][reactiveGeneIndex.value[1]].star ? refGeneGrid.value[reactiveGeneIndex.value[0]][reactiveGeneIndex.value[1]].star : 0
    }

    function isGeneUsed(gene) {
      for (let i = 1; i < refGeneGrid.value.length - 1; i++) {
        for (let j = 1; j < refGeneGrid.value[i].length - 1; j++) {
          if (!(i === reactiveGeneIndex.value[0] &&
                  j === reactiveGeneIndex.value[1]) &&
              refGeneGrid.value[i][j].id === gene.id) {
            return true
          }
        }
      }
      return false
    }

    function confirmGene(gene) {
      refGeneGrid.value[reactiveGeneIndex.value[0]][reactiveGeneIndex.value[1]] = {...gene}
      context.emit('update:gene-grid', refGeneGrid.value)
      context.emit('close-dialog')
    }

    function changeGeneStar() {
      refGeneGrid.value[reactiveGeneIndex.value[0]][reactiveGeneIndex.value[1]].star = geneStars.value
      context.emit('update:gene-grid', refGeneGrid.value)
    }

    initGeneList()

    onMounted(() => {
      initGeneMap()
      getGeneStar()
    })

    watch([geneType, geneEleType, geneSize, keyWord], () => {
      initGeneMap(geneType.value, geneEleType.value, geneSize.value, keyWord.value)
    })

    watch(geneStars, () => {
      changeGeneStar()
    })

    return {
      geneType,
      geneEleType,
      geneTypeOptions: ['力量', '技巧', '速度', '无'],
      geneEleTypeOptions: ['火', '水', '雷', '冰', '龙', '无'],
      geneMap,
      loadingGeneList,
      geneSize,
      geneSizeOptions: ['小', '中', '大', '特大'],
      keyWord,
      refGeneGrid,
      reactiveGeneIndex,
      geneStars,
      geneStarsOptions: [
        {
          value: 0,
          label: '无'
        }, {
          value: 1,
          label: '等级1'
        }, {
          value: 2,
          label: '等级2'
        }
      ],

      isGeneUsed,
      confirmGene
    }
  }
})
</script>

<style
    lang="sass"
    scoped
>
.gene-list-wrap
  height: 90vh

  .close-btn-row
    position: sticky
    position: -webkit-sticky
    top: 0
    z-index: 6010

  .virtual-wrap
    .disabled-item
      position: relative
      pointer-events: none

    .disabled-item::before
      content: '该因子已被使用'
      position: absolute
      top: 0
      left: 0
      width: 100vw
      height: 100%
      display: flex
      justify-content: center
      align-items: center
      color: white
      font-size: 2rem
      font-weight: bold
      background: rgba(0, 0, 0, 0.5)
      z-index: 6009
      pointer-events: none
</style>
