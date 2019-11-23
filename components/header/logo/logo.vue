<template>
  <div class="logo">
    <span class="logo__text">
      <span class="logo__text--accent">F</span>ilip
      <span class="logo__text--accent">W</span>roński
    </span>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  display: inline-block;
  margin: 10px;
  position: relative;
  &__text {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    top: 4px;
    margin-left: 4px;
    line-height: 35px;
    background: #f1f1ff;
    letter-spacing: 1px;
    text-transform: uppercase;
    &--accent {
      color: #7474ff;
    }
    &:after {
      position: absolute;
      top: calc(50% - 12px);
      left: 14px;
      width: 51px;
      height: 24px;
      content: '';
      background: transparent;
      border: #7473fe solid 1px;
      z-index: 0;
    }
  }
}
</style>
