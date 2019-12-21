<template>
  <h1 class="doc-title">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DocTitle extends Vue {}
</script>

<style lang="stylus">
h1
  font-weight bold
</style>
