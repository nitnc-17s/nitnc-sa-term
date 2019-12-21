<template>
  <a data-scroll :href="target" class="doc-link"><slot></slot></a>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from "vue-property-decorator";

@Component
export default class DocLink extends Vue {
  @Prop([Number, String]) readonly article: number | string | undefined;
  @Prop([Number, String]) readonly paragraph: number | string | undefined;

  @Inject({ from: "article", default: undefined }) readonly parentArticle: number | string | undefined;
  @Inject({ from: "spArticle", default: undefined }) readonly parentSPArticle: number | string | undefined;

  get target() {
    let article = this.article;
    if (article === undefined) {
      if (this.parentArticle !== undefined) {
        article = this.parentArticle;
      } else if (this.parentSPArticle !== undefined) {
        article = this.parentSPArticle;
      } else {
        return "#";
      }
    }

    if (this.paragraph === undefined) {
      return `#${article}`;
    }
    return `#${article}-${this.paragraph}`;
  }
}
</script>

<style lang="stylus">
.doc-link-target
  background-color #FFC
</style>
