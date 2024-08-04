<template>
  <div
    class="footer-wrap q-my-md text-grey-6 text-subtitle2 column justify-center items-center"
  >
    <span>By 鎧羅突擊弩賊</span>
    <span>Copyright<q-icon name="copyright"></q-icon> {{ startYear }}</span>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "CustomFooter",
  setup() {
    const startYear = ref("2021");

    const getYear = computed(() => {
      return new Date().getFullYear().toString() === startYear.value
        ? startYear.value
        : `${startYear.value}-${new Date().getFullYear().toString()}`;
    });

    const openLink = (link) => {
      window.open(link);
    };

    return {
      startYear,
      getYear,

      openLink,
    };
  },
});
</script>
