<template>
  <div :id="id" class="doc-sp-paragraph">
    <span v-if="number > 1">
      {{ number }}
    </span>
    <p class="doc-sp-paragraph-text">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Provide, Vue } from "vue-property-decorator";

@Component
export default class DocSPParagraph extends Vue {
  @Prop([Number, String]) readonly number: number | string | undefined;

  @Provide() spParagraph = this.number;

  @Inject() readonly spArticle: number | string | undefined;

  get id() {
    return `${this.spArticle || 0}-${this.number || 0}`;
  }
}
</script>

<style lang="stylus">
.doc-sp-paragraph
  margin-top 0
  margin-bottom 1em

.doc-sp-paragraph-text
  margin 0
</style>
