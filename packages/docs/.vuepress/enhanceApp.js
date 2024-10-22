import 'echarts'
import NChart from 'naive-echarts'
import 'naive-echarts/dist/style.css'

export default async ({ Vue }) => {
  Vue.use(NChart)
}
