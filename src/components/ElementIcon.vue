<template>
  <div
      v-ripple
      :class="{ 'shadow-4' : showShadow, 'border-wrap' : showBorder }"
      class="ele-icon-wrap relative-position"
  >
    <q-avatar
        :size="size"
        class="avatar"
        color="white"
    >
      <img
          :alt="ele"
          :src="src"
      >
    </q-avatar>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref, toRef} from 'vue'
import {eleNameTranslate} from 'src/utils'

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
      default: '8vw'
    },
    showBorder: {
      type: Boolean,
      default: true
    },
    showShadow: {
      type: Boolean,
      default: true
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
  border-radius: 100%

.border-wrap
  border: solid 2px $primary
</style>
