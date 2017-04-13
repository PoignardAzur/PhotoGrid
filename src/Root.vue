<template>
  <div id="app">
    <h1>Bananas</h1>
    <h2>Apple Library</h2>
    <image-grid :images=apple_images></image-grid>
    <h2>Orange Library</h2>
    <image-grid :images=orange_images></image-grid>
  </div>
</template>

<script>
import ImageGrid from './components/ImageGrid'

export default {
  components: {
    ImageGrid
  },
  data: function () {
    let apple_images = [];
    for (let i = 0; i < 30; i++) {
      apple_images.push("http://placehold.it/300x300");
    }
    let orange_images = [];
    for (let i = 0; i < 8; i++) {
      orange_images.push("http://loremflickr.com/320/240/orange?random=" + i);
      // Je mets pas beaucoup d'images parce que loremflickr met longtemps
      // à charger les images
    }
    return { apple_images, orange_images };    
  }
}
</script>

<style>
/*
* {
  border: 1px solid black;
  box-sizing: border-box;
}
*/

* {
  background-color: Black;
}

h1, h2 {
  background-color: White;
}

h3 {
  color: White;
  background-color: #333;
  height: 2em;
  line-height: 2em;
  width: 30em;
  margin-left: auto;
  margin-right: auto;
}

h1, h2, h3, p {
  text-align: center;
}

.image-grid {
  display: grid;
  grid-auto-columns: 100px;
  grid-auto-rows: 100px;
  grid-gap: 15px;
}

.grid_item {
  border-radius: 5%;
  background-repeat: 'no-repeat';
  background-position: 'center';
  background-size: 'cover';
}

p {
  padding: 0px;
  margin: 0px;
  font-size: 5em;
  
  background-color: Gray;
  text-align: center;
}
</style>

