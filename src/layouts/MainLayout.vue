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
      <div class="footer-wrap q-my-md text-grey-6 text-subtitle2 row full-width justify-center items-center">
        <div class="col-4 row justify-end items-center q-px-sm">
          <q-avatar
            class="avatar shadow-4"
            size="sm"
          >
            <img
              src="~assets/avatar.jpeg"
              alt="avatar"
            >
          </q-avatar>
        </div>
        <div class="col-8 row justify-start items-center q-px-sm">
          <div class="column justify-center items-start">
            <span>Made By 鎧羅突擊弩賊&nbsp;&nbsp;</span>
            <span>HeyBox ID: 1310911</span>
          </div>
        </div>
      </div>
    </q-footer>

  </q-layout>
</template>

<script>

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup() {
  }
})
</script>
