<template>
  <td>
    <button>
      <Icon class="icon" :icon="$attrs.active ? 'pause' :'play'" />
      <span class="number">{{ $attrs.track.track || 1 }}</span>
    </button>
  </td>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({})
</script>
