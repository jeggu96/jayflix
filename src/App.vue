<style lang="scss">
 @import './assets/styles/app.scss';
 @import './assets/styles/style_guide.scss';
</style>

<template>
  <nav>
    <ul>
      <li>
        <a class="active" href="/">
          <i class="fa fa-home" />
        </a>
      </li>
      <li>
        <router-link to="/movies/tamil">Tamil</router-link>
      </li>
    </ul>
    <div class="media-switch">
      <h3>MOV</h3>
      <label class="switch">
        <input type="checkbox" v-model="mediaTypeSwitch">
        <span class="slider">
            <span class="circle"></span>
        </span>
      </label>
      <h3>TV</h3>
    </div>
    <div class="search" :click-outisde="clickedOutside" v-if="!isMobile">
        <div class="search-bar">
          <input
            type="text" 
            placeholder="Search ..."
            v-model="searchQuery">
          <i class="fa fa-search"></i>
        </div>
        <div v-if="searchResults" class="list-group">
          <li v-for="(result, index) in searchResults" :key="index">
            {{ result.title }}
          </li>
        </div>
      </div>
  </nav>
  <div id="container">
    <router-view/>
  </div>
</template>

<script>
import { getData } from './api_layer';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'App',
  data () {
    return {
      searchQuery: '',
      searchResults: null,
      mediaTypeSwitch: false
    }
  },
  computed: {
    ...mapState({
      mediaType: state => state.mediaType
    }),
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    async searchQuery (query) {
      if (query) {
        const {results} = await getData(`https://api.themoviedb.org/3/search/movie?query=${query}`);
        this.searchResults = results;
      } else {
        this.searchResults = null;
      }
    },
    mediaTypeSwitch (type) {
      const mediaType = type ? 'series' : 'movies';
      this.SetMediaType(mediaType);
      this.getLatestMedia(mediaType);
    }
  },
  mounted () {
    this.getLatestMedia(this.mediaType);
  },
  methods: {
    ...mapMutations(['SetMediaType']),
    ...mapActions(['getLatestMedia']),
    clickedOutside () {
      console.log('Hello');
      this.searchQuery = '';
    }
  }
}
</script>
