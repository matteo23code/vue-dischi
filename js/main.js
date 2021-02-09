new Vue({
  el: '#app',
  data:{
    selected: '',
    playList:[

    ],
  },
  methods:{
    search: function () {
      console.log("playList", this.playList);
      this.playList.forEach((item) => {
        let musicalGenre = item.genre;
        let searchString = this.selected;
        console.log(this.selected);
        if (musicalGenre.includes(searchString)) {
          item.success = true
        }else {
          item.success = false
        }
      });
    }
  },
  mounted() {
    const self = this;

      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(resp) {
       const disk = resp.data.response
      self.playList = disk;
      console.log(disk);
    });
  }
});
Vue.config.devtools = true
