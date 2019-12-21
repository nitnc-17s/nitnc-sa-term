<template>
  <div class="doc">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Doc extends Vue {}
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap")

.doc
  font-family "Noto Serif JP", "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif
  padding-left 10vw
  padding-right 10vw
</style>
