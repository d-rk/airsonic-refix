<template>
  <ContentLoader :loading="items == null">
    <ArtistList :items="items" />
  </ContentLoader>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import ArtistList from './ArtistList.vue'
  import { Artist } from '@/shared/api'

  export default defineComponent({
    components: {
      ArtistList,
    },
    data() {
      return {
        items: null as null | Artist[]
      }
    },
    async created() {
      this.items = await this.$api.getArtists()
    }
  })
</script>
