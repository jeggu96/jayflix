<template>
  <div class="poster-grid">
    <div 
      class="poster-card"
      :style="`background-image: url(https://image.tmdb.org/t/p/original${item.poster_path})`"
      v-for="(item, index) in items"
      :key="index">
        <div class="poster-content">
          <h3>{{ item.name }}</h3>
          <div class="movie-btns">
            <button @click="$emit('watch', item.video_url || item.id)"><span class="fa fa-play" aria-hidden="true"></span></button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PosterGrid',
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
  @import "./../assets/styles/poster_grid.scss";
</style>