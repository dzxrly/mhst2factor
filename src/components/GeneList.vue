<template>
  <q-card class="gene-list-wrap">
    <div class="close-btn-row bg-white full-width">
      <div class="row justify-between items-center full-width q-pt-md q-px-md">
        <span class="text-subtitle2 text-grey-8">共找到{{ geneMap.length }}个因子</span>
        <q-btn
          icon="close"
          v-close-popup
          round
          flat
        ></q-btn>
      </div>
      <div class="row justify-center items-center full-width q-pb-md">
        <q-select
          class="col-6 q-pa-sm"
          label="因子类型"
          v-model="geneType"
          :options="geneTypeOptions"
          filled
          clearable
        ></q-select>
        <q-select
          class="col-6 q-pa-sm"
          label="技能属性"
          v-model="geneEleType"
          :options="geneEleTypeOptions"
          filled
          clearable
        ></q-select>
      </div>
    </div>
    <div class="column justify-start items-center full-width">
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
        v-else
        class="full-width"
      >
        <div
          class="full-width"
          v-for="(gene, index) in geneMap"
          :key="index"
        >
          <gene-list-item :gene="gene"></gene-list-item>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRef, watch } from 'vue'
import GeneListItem from './GeneListItem.vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'GeneList',
  components: { GeneListItem },
  emits: ['selected-gene'],
  props: {
    geneGrid: {
      type: Array
    }
  },
  setup (props) {
    const $q = useQuasar()
    const loadingGeneList = ref(true)
    const selectedGene = ref('')
    const reactiveGeneList = toRef(props, 'geneGrid')
    const canNotUseGeneList = ref([])
    const geneMap = ref([])

    const geneType = ref(null)
    const geneEleType = ref(null)

    function initGeneList () {
      for (let i = 0; i < reactiveGeneList.value.length; i++) {
        if (i !== 0 && i !== reactiveGeneList.value.length - 1) {
          for (let j = 0; j < reactiveGeneList.value[i].length; j++) {
            if (j !== 0 && j !== reactiveGeneList.value[i].length - 1) {
              canNotUseGeneList.value.push(reactiveGeneList.value[i][j])
            }
          }
        }
      }
    }

    function initGeneMap (typeFilter = null, eleFilter = null) {
      loadingGeneList.value = true
      let geneDataset = () => import('src/gene-dataset')
      geneDataset().then((e) => {
        loadingGeneList.value = true
        geneMap.value = e.getGeneMap(typeFilter, eleFilter)
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

    initGeneList()

    onMounted(() => {
      initGeneMap()
    })

    watch(geneType, () => {
      initGeneMap(geneType.value, geneEleType.value)
    })

    watch(geneEleType, () => {
      initGeneMap(geneType.value, geneEleType.value)
    })

    return {
      selectedGene,
      geneType,
      geneEleType,
      geneTypeOptions: ['力量', '技巧', '速度', '无'],
      geneEleTypeOptions: ['火', '水', '雷', '冰', '龙', '无'],
      geneMap,
      loadingGeneList
    }
  }
})
</script>

<style
  lang="sass"
  scoped
>
.gene-list-wrap
  height: 85vh

  .close-btn-row
    position: sticky
    position: -webkit-sticky
    top: 0
    z-index: 6010
</style>
