<template>
  <div :id="id" class="doc-article">
    <span v-if="name !== undefined" class="doc-article-name">{{ name }}</span>
    <h4 class="doc-article-number">第{{ number }}条</h4>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Provide, Vue } from "vue-property-decorator";

@Component
export default class DocArticle extends Vue {
  @Prop([Number, String]) readonly number: number | string | undefined;
  @Prop(String) readonly name: string | undefined;

  @Provide() article = this.number;

  get id() {
    return `${this.number || 0}`;
  }
}
</script>

<style lang="stylus">
.doc-article-number
  margin 0

.doc-article-name::before
  content "("
.doc-article-name::after
  content ")"
</style>
