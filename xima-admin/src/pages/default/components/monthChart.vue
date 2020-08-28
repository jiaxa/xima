<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts';
require('echarts/theme/macarons'); // echarts theme
import resize from './mixins/resize';

export default {
  name: 'lineChat',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons');
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        title: {
          text: '快递走势',
          textStyle: {
            color: '#333',
            fontSize: 16
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['环球', '大田', '聚盟', '宅急送', '无锡']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['8.1', '8.2', '8.3', '8.4', '8.5', '8.6', '8.7', '8.8', '8.9', '8.10', '8.11', '8.12', '8.13', '8.14', '8.15']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '环球',
            type: 'line',
            // stack: '总量',
            data: [369, 651, 790, 734, 343, 542, 854, 932, 357, 893, 446, 933, 685, 970, 353]
          },
          {
            name: '大田',
            type: 'line',
            // stack: '总量',
            data: [232, 604, 111, 68, 71, 590, 23, 181, 476, 105, 299, 907, 289, 166, 324]
          },
          {
            name: '聚盟',
            type: 'line',
            // stack: '总量',
            data: [787, 789, 226, 353, 403, 177, 589, 362, 552, 82, 861, 829, 924, 797, 395]
          },
          {
            name: '宅急送',
            type: 'line',
            // stack: '总量',
            data: [199, 907, 659, 271, 717, 389, 985, 365, 329, 415, 850, 511, 368, 718, 413]
          },
          {
            name: '无锡',
            type: 'line',
            // stack: '总量',
            data: [327, 708, 559, 620, 412, 760, 739, 486, 506, 835, 553, 338, 931, 88, 219]
          }
        ]
      });
    }
  }
};
</script>
