<template>
  <div class="fullscreen bg-white text-primary text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 10rem">
        404
      </div>

      <div class="text-h3" style="opacity:.4">
        :( 页面走丢了...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>
