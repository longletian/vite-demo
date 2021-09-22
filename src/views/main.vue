<template>
  <div class="container">
    <login-view></login-view>
  </div>
</template>

<script lang="ts">
import LoginView from "./LoginView.vue";
import { reactive, toRefs } from "vue";
export default {
  components: {
    "login-view": LoginView,
  },
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
</style>
