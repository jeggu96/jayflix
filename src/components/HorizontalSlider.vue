<template>
  <div id="horizontal-slider__container">
    <template v-for="(item, index) in items" :key="index">
      <input :id="`dot${index+1}`" type="radio" name="dotGroup" v-bind="index === 0 ? {checked: 'checked'} : {}">
      <label :for="`dot${index+1}`"></label>
      <div :class="`slide background${index}`" :style="`background-image: url(https://image.tmdb.org/t/p/original${item.backdrop_path})`">
        <slot name="sliderItem" :item="item"></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'HorizontalSlider',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "./../assets/styles/horizontal_slider.scss";
</style>