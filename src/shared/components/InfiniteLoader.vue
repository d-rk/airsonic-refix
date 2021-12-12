<template>
  <VueEternalLoading ref="inf" force-use-infinite-wrapper :load="load">
    <template #spinner>
      <div class="d-flex justify-content-center my-4">
        <span class="spinner-border" />
      </div>
    </template>
    <template #no-more>
      <span />
    </template>
    <template #no-results>
      <span />
    </template>
  </VueEternalLoading>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { VueEternalLoading } from '@ts-pro/vue-eternal-loading'

  export default defineComponent({
    components: {
      VueEternalLoading,
    },
    props: {
      loading: { type: Boolean, required: true },
      hasMore: { type: Boolean, required: true },
    },
    data() {
      return {
        callback: null as any
      }
    },
    watch: {
      loading: {
        handler(value: boolean) {
          if (!this.hasMore) {
            this.callback?.noMore()
            // (this.$refs.inf as any).stateChanger.complete()
          } else if (!value) {
            this.callback?.loaded()
            // (this.$refs.inf as any).stateChanger.loaded()
          }
        }
      },
      hasMore: {
        handler(value: boolean) {
          if (!value) {
            // (this.$refs.inf as any).stateChanger.complete()
            this.callback?.loaded()
          }
        }
      }
    },
    methods: {
      load(arg: any) {
        this.callback = arg
        this.$emit('load-more')
      },
    }
  })
</script>
