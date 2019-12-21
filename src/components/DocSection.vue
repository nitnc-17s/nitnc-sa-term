<template>
  <div class="doc-section">
    <h3>第{{ number }}節 {{ name }}</h3>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DocSection extends Vue {
  @Prop({ type: [Number, String], default: 0 }) readonly number!: number | string;
  @Prop({ type: String, default: "" }) readonly name!: string;
}
</script>
