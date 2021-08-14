<template>
  <q-layout view="hHh lpR fff">

    <q-header
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          MHST2 因子配装器
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer class="bg-white text-primary">
      <div class="footer-wrap q-my-md text-grey-6 text-subtitle2 column justify-center items-center">
        <div class="row justify-end items-center q-pa-sm">
          <q-avatar
            class="avatar shadow-4"
            size="md"
          >
            <img
              src="~assets/avatar.jpeg"
              alt="avatar"
            >
          </q-avatar>
        </div>
        <div class="row justify-center items-center q-px-sm">
          <div class="column justify-center items-center">
            <span>Made By 鎧羅突擊弩賊</span>
            <span>Copyright<q-icon name="copyright"></q-icon> {{
                startYear
              }} | <span @click="openLink('https://github.com/dzxrly/mhst2factor')">Github</span></span>
          </div>
        </div>
      </div>
    </q-footer>

  </q-layout>
</template>

<script>

import {computed, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const startYear = ref('2021')

    const getYear = computed(() => {
      return new Date().getFullYear().toString() === startYear.value ? startYear.value : `${startYear.value}-${new Date().getFullYear().toString()}`
    })

    const openLink = (link) => {
      window.open(link)
    }

    return {
      startYear,
      getYear,

      openLink
    }
  }
})
</script>
