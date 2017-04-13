<template>
    <div class="image-grid">
      <template v-for="(item, i) of items">

        <div class="grid_item"
             :style="{
                     'grid-column': get_pos(item.x, item.w),
                     'grid-row': get_pos(item.y, item.h),
                     'background-image': 'url(' + item.url + ')'
                     }">
        </div>

      </template>
    </div>
</template>

<script>
function* get_xy_wh()
{
  let x = 0;

  while (true)
  {
    yield [x + 0, 0, 1, 1];
    yield [x + 0, 1, 2, 1];
    yield [x + 1, 0, 2, 1];
    yield [x + 2, 1, 2, 1];
    yield [x + 3, 0, 1, 1];

    yield [x + 4, 0, 2, 2];

    x += 6;

    yield [x + 0, 1, 1, 1];
    yield [x + 0, 0, 2, 1];
    yield [x + 1, 1, 2, 1];
    yield [x + 2, 0, 2, 1];
    yield [x + 3, 1, 1, 1];

    yield [x + 4, 0, 2, 2];

    x += 6;
  }
}

export default {
  props: ['images'],  

  computed: {
    items: function() {
      let xy_wh = get_xy_wh();
      let displayed_items = [];
      let max_x = 0;

      for (let image of this.images) {
        let [x, y, w, h] = xy_wh.next().value;
        max_x = Math.max(max_x, x + w);
        displayed_items.push( {url: image, x, y, w, h} );
      }

      return displayed_items;
    }
  },

  data: () => ({
    get_pos: (x, w) => (x + 1) + " / " + (x + w + 1)
  })
}
</script>

<style>
.grid_item {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
