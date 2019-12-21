<template>
  <div class="doc-chapter">
    <h2>第{{ number }}章 {{ name }}</h2>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DocChapter extends Vue {
  @Prop({ type: [Number, String], default: 0 }) readonly number!: number | string;
  @Prop({ type: String, default: "" }) readonly name!: string;
}
</script>
