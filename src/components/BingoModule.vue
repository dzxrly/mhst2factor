<template>
  <q-card class="bingo-wrap text-body1">
    <div class="close-btn-row bg-white full-width">
      <div class="row justify-end items-center full-width q-pt-md q-px-md">
        <q-btn v-close-popup flat icon="close" round></q-btn>
      </div>
    </div>
    <q-list>
      <q-item-label class="text-bold" header>宾果列表 </q-item-label>
      <q-separator spaced />
      <q-item v-for="(ele, index) in eleList" :key="index">
        <q-item-section avatar>
          <element-icon
            :ele="ele"
            :show-border="false"
            :show-shadow="false"
          ></element-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ ele }}属性</q-item-label>
          <q-item-label caption>宾果数 x{{ calcBingoNum(ele) }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>x{{ calcBingoRatio(calcBingoNum(ele)) }}%</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced />
      <q-item v-for="(type, index) in typeList" :key="index">
        <q-item-section avatar>
          <type-icon
            :show-border="false"
            :show-shadow="false"
            :type="type"
          ></type-icon>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ type }}技能</q-item-label>
          <q-item-label caption>宾果数 x{{ calcBingoNum(type) }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label
            >x{{ calcBingoRatio(calcBingoNum(type)) }}%</q-item-label
          >
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script>
import { defineComponent, ref, toRef } from "vue";
import ElementIcon from "src/components/ElementIcon.vue";
import TypeIcon from "src/components/TypeIcon.vue";
import { getBingoRatio } from "src/utils";

export default defineComponent({
  name: "BingoModule",
  components: { TypeIcon, ElementIcon },
  props: {
    gene: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const reactiveGene = toRef(props, "gene");
    const eleList = ref(["火", "水", "雷", "冰", "龙", "无"]);
    const typeList = ref(["力量", "技巧", "速度"]);

    function calcBingoNum(bingoName) {
      let count = 0;
      for (let i = 0; i < reactiveGene.value.length; i++) {
        for (let j = 0; j < reactiveGene.value[i].length; j++) {
          if (
            !(
              (i === 1 && (j === 1 || j === 2 || j === 3)) ||
              (i === 2 && (j === 1 || j === 2 || j === 3)) ||
              (i === 3 && (j === 1 || j === 2 || j === 3))
            ) &&
            reactiveGene.value[i][j].value === bingoName
          )
            count++;
        }
      }
      return count;
    }

    function calcBingoRatio(bingoNum) {
      return 100 + getBingoRatio(bingoNum);
    }

    return {
      reactiveGene,
      calcBingoNum,
      eleList,
      typeList,
      calcBingoRatio,
    };
  },
});
</script>

<style lang="sass" scoped>
.bingo-wrap
  height: 80vh

  .close-btn-row
    position: sticky
    position: -webkit-sticky
    top: 0
    z-index: 6010
</style>
