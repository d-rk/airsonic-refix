<template>
  <Tiles>
    <Tile v-for="item in items" :key="item.id"
          :image="item.image"
          :to="{name: 'genre', params: { id: item.id } }"
          :title="item.name">
      <template #text>
        <strong>{{ item.albumCount }}</strong> albums •
        <strong>{{ item.trackCount }}</strong> tracks
      </template>
    </Tile>
  </Tiles>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      return {
        items: [],
      }
    },
    async created() {
      this.items = await this.$api.getGenres()
    },
  })
</script>
