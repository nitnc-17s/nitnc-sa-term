<template>
  <div :id="id" class="doc-paragraph">
    <span v-if="number > 1">
      {{ number }}
    </span>
    <p class="doc-paragraph-text">
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Provide, Vue } from "vue-property-decorator";

@Component
export default class DocParagraph extends Vue {
  @Prop([Number, String]) readonly number: number | string | undefined;

  @Provide() paragraph = this.number;

  @Inject() readonly article: number | string | undefined;

  get id() {
    return `${this.article || 0}-${this.number || 0}`;
  }
}
</script>

<style lang="stylus">
.doc-paragraph
  margin-top 0
  margin-bottom 1em

.doc-paragraph-text
  margin 0
</style>
