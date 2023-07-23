<template>
  <div>
    <HorizontalSlider
      v-if="latestMediaData && latestMediaData.length"
      :items="latestMediaData.slice(0, 5)">
      <template v-slot:sliderItem="{item}">
        <div class="popular-movie-slider">
            <img :src="`https://image.tmdb.org/t/p/original${item.poster_path}`" class="poster">
            <div class="popular-movie-slider-content">
              <p class="release">{{item.release_date}}</p>
              <h2 class="movie-name">{{item.name}}</h2>
              <p class="desc">{{item.overview}}</p>
              <div class="movie-btns mt-2">
                <button @click="watchMovie(item.id)">
                  <span class="fa fa-play" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
      </template>
    </HorizontalSlider>

    <PosterGrid
      v-if="latestMediaData && latestMediaData.length"
      :items="latestMediaData.slice(0, 10)"
      class="mt-10"
      @watch="watchMovie" />

    <ModalComponent v-if="videoPlayer.show" @close="videoPlayer.show = false">
      <template v-slot:body>
        <iframe 
          style="width:100%; height: 500px;"
          :src="videoPlayer.url"
          frameborder="0"
          allowfullscreen />
      </template>
    </ModalComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalComponent from '@/components/ModalComponent.vue';
import HorizontalSlider from '@/components/HorizontalSlider.vue';
import PosterGrid from '@/components/PosterGrid.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    ModalComponent,
    HorizontalSlider,
    PosterGrid
  },
  data () {
    return {
      posts: null,
      videoPlayer: {
        show: false,
        videoId: null
      }
    }
  },
  computed: {
    ...mapState({
      mediaType: state => state.mediaType,
      latestMediaData: state => state.latestMediaData
    }),

  },
  methods: {
    ...mapActions(['getLatestMovies', 'getLatestSeries']),
    watchMovie (id) {
      this.videoPlayer.show = true;
      this.videoPlayer.url = this.mediaType === 'movies' ?
        `https://www.2embed.cc/embed/${id}` : ` https://www.2embed.cc/embedtv/${id}&s=1&e=1`;
    }
  }
}
</script>
