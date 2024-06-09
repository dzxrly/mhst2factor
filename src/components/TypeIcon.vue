<template>
  <div
    v-ripple
    :class="{ 'shadow-4' : showShadow, 'border-wrap' : showBorder }"
    class="type-icon-wrap bg-primary relative-position"
  >
    <q-avatar
      :size="size"
      class="avatar"
      color="primary"
    >
      <img
        :alt="type"
        :src="src"
      >
    </q-avatar>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref, toRef} from 'vue'
import {typeNameTranslate} from 'src/utils'

export default defineComponent({
  name: 'TypeIcon',
  props: {
    type: {
      type: String,
      required: true,
      default: 'power'
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
    const reactiveType = toRef(props, 'type')
    const src = ref('#')

    function getEngTypeName(type) {
      return typeNameTranslate(type)
    }

    function getPath() {
      src.value = `${getEngTypeName(reactiveType.value)}.png`
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
.type-icon-wrap
  border-radius: 100%

.border-wrap
  border: solid 2px $primary
</style>
