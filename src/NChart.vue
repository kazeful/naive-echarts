<template>
  <NEmpty v-if="isEmpty" v-bind="$props">
    <template v-for="slot in Object.keys($scopedSlots)" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </NEmpty>
  <EChart v-else ref="echarts" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
import NEmpty from './NEmpty'
import EChart from './EChart'

export default {
  name: 'NChart',
  components: {
    NEmpty,
    EChart,
  },
  inheritAttrs: false,
  props: {
    isEmpty: Boolean,
    image: {
      type: String,
      default: '',
    },
    imageSize: {
      type: [String, Number],
      default: 160,
    },
    description: {
      type: String,
      default: '暂无数据',
    },
  },
  methods: {
    getEchartsInstance() {
      return this.$refs.echarts && this.$refs.echarts.chart
    },
  },
}
</script>
