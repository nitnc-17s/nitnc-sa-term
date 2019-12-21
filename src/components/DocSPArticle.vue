<template>
  <div :id="id" class="doc-sp-article">
    <h4 class="doc-sp-article-title">第{{ number }}条</h4>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";

@Component
export default class DocSPArticle extends Vue {
  @Prop([Number, String]) readonly number: number | string | undefined;

  @Provide() spArticle = this.number;

  get id() {
    return `${this.number || 0}`;
  }
}
</script>

<style lang="stylus">
.doc-sp-article-title
  margin 0
</style>
