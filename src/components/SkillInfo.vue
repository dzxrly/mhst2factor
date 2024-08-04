<template>
  <div class="skill-info-wrap full-width">
    <div class="full-width row justify-start items-center q-px-md">
      <span class="text-h6 text-primary text-bold">{{ gene.id }}</span>
      <q-chip :color="getTypeColor(gene.type)" outline>{{ gene.type }} </q-chip>
      <q-chip :color="getEleColor(gene.element)" text-color="white"
        >{{ gene.element }}
      </q-chip>
    </div>
    <div
      class="gene-info row justify-start items-center full-width no-wrap q-px-md"
    >
      <gene-icon :gene="gene"></gene-icon>
      <div class="col-8 column justify-start items-start q-pl-sm">
        <div class="col row justify-start items-center">
          <span class="text-subtitle1 text-primary text-bold"
            >{{ gene.skill }} | 绊值: {{ gene.cost ? gene.cost : 0 }}</span
          >
        </div>
        <div class="col row justify-start items-center">
          <span class="text-body1 text-primary">{{ gene.skill_desc }}</span>
        </div>
      </div>
    </div>
    <q-separator spaced="md" />
    <div
      v-if="skillInfoLoading"
      class="full-width row justify-center items-center q-my-xl"
    >
      <q-spinner-pie color="primary" size="20vw"></q-spinner-pie>
    </div>
    <div v-else class="full-width q-px-md text-body1">
      <q-list class="full-width">
        <q-item-label header>技能特点</q-item-label>
        <q-item>
          <q-item-section>
            <q-item-label>{{ skillInfo.sk_type }}技能</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>作用于{{ skillInfo.tar }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-separator spaced="md" />
    <div
      v-if="skillInfo && skillInfo.upgrade_eff_array"
      class="full-width q-px-md text-body1"
    >
      <q-list class="full-width">
        <q-item-label header>技能强化</q-item-label>
        <q-item>
          <q-item-section>
            <q-item-label>
              <q-icon name="label" size="sm"></q-icon>
              {{ skillInfo.upgrade_eff_array }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list class="full-width">
        <q-item-label header>强化等级加成</q-item-label>
        <q-item>
          <q-item-section>
            <q-item-label>
              <q-icon color="warning" name="star" size="sm"></q-icon>
              加成数值: {{ skillInfo.up_n1_array }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>
              <q-icon color="warning" name="star" size="sm"></q-icon>
              <q-icon color="warning" name="star" size="sm"></q-icon>
              加成数值: {{ skillInfo.up_n2_array }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-separator v-if="skillInfo && skillInfo.upgrade_eff_array" spaced="md" />
    <div v-if="gene.fixed_array" class="full-width q-px-md text-body1">
      <q-list class="full-width">
        <q-item-label header>因子出处</q-item-label>
        <q-item
          v-for="(monster, index) in gene.fixed_array.split(',')"
          :key="index"
        >
          <q-item-section>
            <q-item-label>{{ monster }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, toRefs } from "vue";
import { useQuasar } from "quasar";
import GeneIcon from "src/components/GeneIcon.vue";
import { fetchEleColor, fetchTypeColor } from "src/utils";

export default defineComponent({
  name: "SkillInfo",
  components: { GeneIcon },
  props: {
    gene: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const reactiveProps = toRefs(props);
    const skillInfo = ref(null);
    const $q = useQuasar();
    const skillInfoLoading = ref(true);

    function getSkillInfo() {
      skillInfoLoading.value = true;
      let skillDataset = () => import("src/skill-dataset");
      skillDataset()
        .then((m) => {
          skillInfo.value = m.getSkillByGeneName(
            reactiveProps.gene.value.id
          )[0];
          skillInfoLoading.value = false;
        })
        .catch((err) => {
          $q.notify({
            type: "negative",
            position: "top",
            message: err.message,
          });
          skillInfoLoading.value = false;
        });
    }

    function getTypeColor(type) {
      return fetchTypeColor(type);
    }

    function getEleColor(ele) {
      return fetchEleColor(ele);
    }

    onMounted(() => {
      getSkillInfo();
    });

    return {
      skillInfo,
      skillInfoLoading,

      getTypeColor,
      getEleColor,
    };
  },
});
</script>
