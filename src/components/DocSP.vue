<template>
  <div class="doc-sp">
    <h2>附則</h2>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DocSP extends Vue {}
</script>
