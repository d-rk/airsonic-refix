<template>
  <BIcon :icon="underlyingIcon" v-bind="$attrs" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { BIcon } from 'bootstrap-vue-3'

  const map = {
    'chevron-right': 'chevron-compact-right',
    discover: 'card-text',
    download: 'download',
    edit: 'pencil-square',
    heart: 'heart',
    'heart-fill': 'heart-fill',
    library: 'collection',
    link: 'box-arrow-up-right',
    list: 'list-ul',
    mute: 'volume-mute-fill',
    nav: 'list',
    pause: 'pause-fill',
    person: 'person-fill',
    play: 'play-fill',
    playlist: 'music-note-list',
    plus: 'plus',
    podcast: 'rss',
    radio: 'broadcast',
    refresh: 'arrow-counterclockwise',
    repeat: 'arrow-repeat',
    shuffle: 'shuffle',
    'skip-end': 'skip-end-fill',
    'skip-start': 'skip-start-fill',
    'three-dots-vertical': 'three-dots-vertical',
    volume: 'volume-up-fill',
    x: 'x',
  } as any

  export default defineComponent({
    components: {
      BIcon,
    },
    props: {
      icon: { type: String, required: true }
    },
    computed: {
      underlyingIcon() {
        return map[this.icon]
      }
    }
  })
</script>
