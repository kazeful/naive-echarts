# Quick start

## Installation

```bash
npm i naive-echarts
```

## Usage

### Fully import

```js
import Vue from 'vue'
import NaiveEcharts from 'naive-echarts'
import 'naive-echarts/style.css'
Vue.use(NaiveEcharts) // This registers two components, EChart and NChart
```

### On-demand

```js
import { EChart, NChart } from 'naive-echarts'
import 'naive-echarts/style.css'

export default {
  components: {
    EChart,
    NChart,
  },
}
```
