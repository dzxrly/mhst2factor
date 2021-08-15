<template>
  <div class="ele-icon-wrap shadow-4">
    <q-avatar
      class="avatar"
      :size="size"
      color="white"
    >
      <img
        :src="src"
        :alt="ele"
      >
    </q-avatar>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref, toRef} from 'vue'
import {eleNameTranslate} from 'src/utils.js'

export default defineComponent({
  name: 'ElementIcon',
  props: {
    ele: {
      type: String,
      required: true,
      default: '火'
    },
    size: {
      type: String,
      default: '2rem'
    }
  },
  setup(props) {
    const reactiveEle = toRef(props, 'ele')
    const src = ref('#')

    function getEngEleName(ele) {
      return eleNameTranslate(ele)
    }

    function getPath() {
      src.value = `${getEngEleName(reactiveEle.value)}.png`
    }

    onMounted(() => {
      getPath()
    })

    return {
      src
    }
  }
})
</script>

<style
  lang="sass"
  scoped
>
.ele-icon-wrap
  border: solid 2px $primary
  border-radius: 100%
</style>
