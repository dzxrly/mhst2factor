<template>
  <router-view />
</template>
<script>
import { defineComponent, onMounted } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "App",
  setup() {
    const $q = useQuasar();
    onMounted(() => {
      console.info(`Quasar Version: ${$q.version}`);
    });
  },
});
</script>

<style lang="sass">
::-webkit-scrollbar, ::-webkit-scrollbar-track, ::-webkit-scrollbar-track-piece
  display: none
</style>
