var app = new Vue({
    el: '#app',
    data: {
        movies: [
            {
              "film": "Beauty and the Beast (2017)",
              "studio": "Disney",
              "year": 2017
            },
            {
              "film": "Guardians of the Galaxy Vol. 2",
              "studio": "Disney",
              "year": 2017
            },
            {
              "film": "Wonder Woman",
              "studio": "Warner Bros.",
              "year": 2017
            },
            {
              "film": "Rogue One: A Star Wars Story",
              "studio": "Disney",
              "year": 2016
            },
            {
              "film": "Finding Dory",
              "studio": "Disney",
              "year": 2016
            }
        ],
        is3d: false
      },
      methods: {
        change3d(){
            this.is3d = !this.is3d
        },
        clearData(){
            this.movies.splice(0)
        }
      }
})