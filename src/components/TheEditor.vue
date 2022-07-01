<script setup>
import { computed, ref, onBeforeMount } from "vue";
import { Codemirror } from "vue-codemirror";

const props = defineProps(["modelValue", "lang", "theme"]);
const emit = defineEmits(["update:modelValue"]);

const code = computed({
  get: () => props.modelValue,
  set: (value) => {
    console.log("set values", value);
    emit("update:modelValue", value);
  },
});

const languages = ref({});
const themes = ref({});

onBeforeMount(async () => {
  let _languages = {};

  await import("@/langs.js").then((result) => {
    _languages = result.default;
  });

  languages.value = {
    ..._languages,
  };
});

const extensions = computed(() => {
  const result = [];
  if (languages.value[props.lang]) {
    result.push(languages.value[props.lang]());
  }

  // if (themes.value[props.config.theme]) {
  //     result.push(themes.value[props.config.theme])
  // }

  return result;
});
</script>

<template>
  <div class="mb-8">
    <codemirror
      v-model="code"
      placeholder="Code goes here..."
      :style="{ height: '400px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="4"
      :extensions="extensions"
    />
  </div>
</template>
