<template>
  <q-layout view="hHh lpR fff">

    <q-header
      class="bg-primary text-white"
      elevated
    >
      <q-toolbar>
        <q-toolbar-title>
          MHST2 因子配装器
          <q-badge align="bottom">{{ version }}</q-badge>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const version = ref('v1.0.3')

    return {
      version
    }
  }
})
</script>
