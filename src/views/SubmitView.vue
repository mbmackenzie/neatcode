<script setup>
import { ref, computed } from "vue";
import TheWho from "@/components/TheWho.vue";
import TheWhat from "@/components/TheWhat.vue";
import TheEditor from "@/components/TheEditor.vue";

const pages = ["who", "what", "code"];

const whoValues = ref({
  name: "",
  email: "",
  role: "",
  roleOther: "",
  github: "",
});
const whatValues = ref({ lang: "", langOther: "", description: "" });
const code = ref("");

const role = computed(() => {
  const role = whoValues.value.role;
  const roleOther = whoValues.value.roleOther;

  return role == "other" ? roleOther : role;
});

const lang = computed(() => {
  const lang = whatValues.value.lang;
  const langOther = whatValues.value.langOther;

  return lang == "other" ? langOther : lang;
});

const page = ref("who");

const togglePage = (move) => {
  const index = pages.indexOf(page.value);
  page.value = pages[index + move];
};

const submitSnippet = () => {
  const values = {
    ...whoValues.value,
    ...whatValues.value,
    code: code.value,
  };

  console.log("submit values", values);
};
</script>

<template>
  <div class="view">
    <div class="details">
      <ul>
        <li>name: {{ whoValues.name }}</li>
        <li>email: {{ whoValues.email }}</li>
        <li>role: {{ role }}</li>
        <li>github: {{ whoValues.github }}</li>
        <li>lang: {{ lang }}</li>
      </ul>
    </div>
    <div class="form">
      <div>
        <TheWho v-if="page == 'who'" v-model="whoValues" />
        <TheWhat v-if="page == 'what'" v-model="whatValues" />
        <TheEditor
          v-if="page == 'code'"
          v-model="code"
          :lang="whatValues.lang"
          theme="light"
        />
      </div>
      <div class="buttons text-right">
        <button :disabled="page == 'who'" class="mx-4" @click="togglePage(-1)">
          Back
        </button>
        <span>|</span>
        <button v-if="page != 'code'" class="mx-4" @click="togglePage(1)">
          Next
        </button>
        <button v-else class="mx-4" @click="submitSnippet">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1rem;
  background: linear-gradient(#ccc, #ccc) center/2px 100% no-repeat;
  background-position: 25% 0;
  height: 80vh;
}

button:disabled {
  opacity: 0.5;
}
</style>
