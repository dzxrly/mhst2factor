<template>
  <div class="footer-wrap q-my-md text-grey-6 text-subtitle2 column justify-center items-center">
    <div class="row justify-end items-center q-pa-sm">
      <q-avatar
        class="avatar shadow-4"
        size="md"
        @click="openLink('https://github.com/dzxrly/mhst2factor')"
      >
        <img
          alt="avatar"
          src="~assets/avatar.jpeg"
        >
      </q-avatar>
    </div>
    <div class="row justify-center items-center q-px-sm">
      <div class="column justify-center items-center">
        <span>By 鎧羅突擊弩賊</span>
        <span>Copyright<q-icon name="copyright"></q-icon> {{
            startYear
          }} | <span>访问量<span id="busuanzi_value_site_pv"></span>次</span></span>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CustomFooter',
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
