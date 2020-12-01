"use strict";

const app = new Vue({
  el: "#myApp",
  data: {
    albums: new Array(),
    selected: null,
  },
  computed: {
    filteredCDs() {
      if (this.selected == null) {
        return this.albums
      } else {
        return this.albums.filter(album => album.genre == this.selected)
      }
    }
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((result) => {
        this.albums = result.data.response;
      })
      .catch((error) => {
        alert(`${error}`);
      });
  },
});