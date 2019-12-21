<template>
  <ol class="doc-list" :class="typeCSS">
    <slot></slot>
  </ol>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DocList extends Vue {
  @Prop({ type: String, default: "漢数字" }) readonly type!: string;

  get typeCSS() {
    switch (this.type) {
      case "漢数字":
        return "doc-list-type-cjk-ideographic";
      case "イロハ":
        return "doc-list-type-katakana-iroha";
      default:
        return "doc-list-type-cjk-ideographic";
    }
  }
}
</script>

<style lang="stylus">
.doc-list-type-cjk-ideographic
  list-style-type cjk-ideographic
.doc-list-type-katakana-iroha
  list-style-type katakana-iroha
</style>
