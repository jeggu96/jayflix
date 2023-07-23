import { createStore } from 'vuex'
import { getData } from './../api_layer';

export default createStore({
  state: {
    searchResults: null,
    mediaType: 'movies',
    latestMediaData: null,
    tamilMoviesData: [
      {
        release_date: "2023-07-14",
        name: "Maaveran",
        overview:"A cartoonist for a local Tamil newspaper is reluctant to face violence. Despite his fears, he is compelled to confront a corrupt politician. But the scared cartoonist has more to him than meets the eye.",
        id: 987895,
        poster_path: "/8w59pbhQRvLXuKNdBaKu51iJzoP.jpg",
        backdrop_path: "/c8UbDSvpMNUdLGCFkSF3mjJsu8c.jpg",
        video_url: 'https://ww1.akstream.xyz/v/tt22543326-tamil',
        quality: 'CAM'
      },
      {
        release_date: "2023-05-12",
        name: "Good Night",
        overview: "Mohan, an IT youngster with a snoring issue starts his life with Anu, the girl of his dreams, hiding his issue. However, trouble begins, when his snoring starts affecting his life and the health of his partner.",
        id: 1090969,
        poster_path: "/aFTO0tCTxXazstWfhOQHPb3kcMT.jpg",
        backdrop_path: "/vuwEQmvlcJbMkBNxb84yq3Ov43C.jpg",
        video_url: 'https://ww1.akstream.xyz/v/tt26691319-tamil',
        quality: 'HD'
      },
      {
        release_date: "2023-06-23",
        name: "Thandatti",
        overview: "A constable, takes up a case that requires him to find a pair of gold earrings that belonged to a dead woman.",
        id: 1143279,
        poster_path: "/avhTPLXG3Gedvu5nc7nFt2eXTNy.jpg",
        backdrop_path: "/abSVptR8SeXNj02Oke4gU5FPkqk.jpg",
        video_url: 'https://ww1.akstream.xyz/v/tt26733340-tamil',
        quality: 'HD'
      },
      {
        release_date: "2023-06-02",
        name: "Veeran",
        overview: "Kumaran has had a troubled childhood after getting hit by lightning, comes back to his village to fight evil elements and provide hope through indigenous deities.",
        id: 979801,
        poster_path: "/9iRNyiT0dlRyaMWOBO1Hc6kaOcc.jpg",
        backdrop_path: "/qCngtESag1ruH0oLHIMix4zybM3.jpg",
        video_url: 'https://ww1.akstream.xyz/v/tt15163636-tamil',
        quality: 'HD'
      }
    ]
  },
  getters: {
  },
  mutations: {
    SetMovieSearchResults (state, results) {
      state.searchResults = results.data;
    },
    SetMediaType (state, type) {
      state.mediaType = type;
    },
    SetLatestMediaData (state, data) {
      state.latestMediaData = data;
    }
  },
  actions: {
    getLatestSeries() {
      return getData('https://api.themoviedb.org/3/trending/tv/day');
    },
    getLatestMovies() {
      return getData('https://api.themoviedb.org/3/trending/movie/day');
    },
    async getLatestMedia ({commit, dispatch}, type) {
      let data = type === 'movies' ? await dispatch('getLatestMovies') :  await dispatch('getLatestSeries');
      if (type === 'movies') {
        data = data.results.map(media => {
          return {
            release_date: media.release_date,
            name: media.title,
            overview: media.overview,
            id: media.id,
            poster_path: media.poster_path,
            backdrop_path: media.backdrop_path
          };
        })
      } else {
        data = data.results.map(media => {
          return {
            release_date: media.release_date,
            name: media.name,
            overview: media.overview,
            id: media.id,
            poster_path: media.poster_path,
            backdrop_path: media.backdrop_path
          };
        })
      }
      commit('SetLatestMediaData', data);
    },
    getMovieSearchResults(query) {
      return getData(`https://api.themoviedb.org/3/search/movie?query=${query}`);
    },
    getTVSearchResults(query) {
      return getData(`https://api.themoviedb.org/3/search/tv?query=${query}`);
    }
  },
  modules: {
  }
})
