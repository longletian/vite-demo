<template>
  <div class="container-content">
    <div class="content-box">
      <p>{{msg}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const msg = "hello world";
    return { msg: msg };
  },
});
</script>

<style scoped>
</style>
