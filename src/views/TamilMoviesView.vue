<style lang="scss">
 @import './../assets/styles/grid_page.scss';
</style>

<template>
  <div class="grid_page">
    <div class="grid_page--container">
      <PosterGrid
        v-if="tamilMoviesData && tamilMoviesData.length"
        :items="tamilMoviesData"
        @watch="watchMovie" />
      <ModalComponent v-if="videoPlayer.show" @close="videoPlayer.show = false">
        <template v-slot:body>
          <iframe 
            style="width:100%; height: 500px;"
            :src="videoPlayer.videoUrl"
            frameborder="0"
            allowfullscreen />
        </template>
      </ModalComponent>
    </div>
  </div>
</template>

<script>
import PosterGrid from '@/components/PosterGrid.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    ModalComponent,
    PosterGrid
  },
  data () {
    return {
      movies: null,
      videoPlayer: {
        show: false,
        videoUrl: null
      }
    }
  },
  computed: {
    ...mapState(['tamilMoviesData']),
  },
  methods: {
    ...mapActions(['getMovieSearchResults']),
    watchMovie (url) {
      this.videoPlayer.show = true;
      this.videoPlayer.videoUrl = url;
    }
  }
}
</script>
