<style lang="scss">
 @import './../assets/styles/grid_page.scss';
</style>

<template>
  <div class="grid_page">
    <ModalComponent v-if="videoPlayer.show" @close="videoPlayer.show = false">
      <template v-slot:body>
        <iframe 
          style="width:100%; height: 500px;"
          :src="`https://vidsrc.me/embed/movie?tmdb=${videoPlayer.videoId}`"
          frameborder="0"
          allowfullscreen />
      </template>
    </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from '@/components/ModalComponent.vue';
import { mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    ModalComponent
  },
  data () {
    return {
      movies: null,
      videoPlayer: {
        show: false,
        videoId: null
      }
    }
  },
  methods: {
    ...mapActions(['getMovieSearchResults']),
    watchMovie (id) {
      this.videoPlayer.show = true;
      this.videoPlayer.videoId = id;
    }
  }
}
</script>
