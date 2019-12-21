<template>
  <div class="doc-note">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DocNote extends Vue {}
</script>
