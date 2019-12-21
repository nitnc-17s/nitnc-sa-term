<template>
  <li class="doc-list-item">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class DocListItem extends Vue {
  @Prop({ type: [Number, String], default: 0 }) readonly number!: number | string;
}
</script>
