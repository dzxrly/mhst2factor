<template>
  <div
    class="type-icon-wrap shadow-4 bg-primary relative-position"
    v-ripple
  >
    <q-avatar
      class="avatar"
      :size="size"
      color="primary"
    >
      <img
        :src="src"
        :alt="type"
      >
    </q-avatar>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref, toRef} from 'vue'
import {typeNameTranslate} from 'src/utils.js'

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
  border: solid 2px $primary
  border-radius: 100%
</style>
