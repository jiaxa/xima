<template>
  <div class="default-container">
    <el-row :gutter="25" class="def-row">
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="box-card">
          <h4>总计</h4>
          <h3>4536232532 <span class="unit">单</span></h3>
          <h3>10202323453.34 <span class="unit">元</span></h3>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="box-card">
          <h4>本年</h4>
          <h3>85746202 <span class="unit">单</span></h3>
          <h3>234212454.23 <span class="unit">元</span></h3>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="box-card">
          <h4>本月</h4>
          <h3>23415 <span class="unit">单</span></h3>
          <h3>6938604.12 <span class="unit">元</span></h3>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <div class="box-card">
          <h4>昨日</h4>
          <h3>862 <span class="unit">单</span></h3>
          <h3>234173.65 <span class="unit">元</span></h3>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="def-row">
      <el-col :xs="12" :sm="12" :lg="12">
        <div class="box-card">
          <line-chart />
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="12">
        <div class="box-card">
          <pcd-chart />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="def-row">
      <el-col :xs="24" :sm="24" :lg="24">
        <div class="box-card">
          <month-chart />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="def-row">
      <el-col :xs="12" :sm="12" :lg="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>昨日部门</span>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="部门" />
            <el-table-column prop="name" label="总数" align="right" />
            <el-table-column prop="address" label="总额" align="right" />
          </el-table>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span>本月部门</span>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="部门" />
            <el-table-column prop="name" label="总数（单）" align="right" />
            <el-table-column prop="address" label="总额（¥）" align="right" />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import LineChart from './components/lineChart';
import PcdChart from './components/pcdChart';
import MonthChart from './components/monthChart';
export default {
  components: { LineChart, PcdChart, MonthChart },
  data() {
    return {
      content: 'I am Example',
      tableData: [
        {
          date: '北京天猫团队部门',
          name: '56',
          address: '500'
        },
        {
          date: '京东团队部门',
          name: '78',
          address: '1923'
        },
        {
          date: '拼夕夕部门',
          name: '96',
          address: '318'
        },
        {
          date: '微商网红部门',
          name: '23',
          address: '756'
        },
        {
          date: '线下地板流部门',
          name: '12',
          address: '625'
        }
      ]
    };
  },
  computed: {},
  mounted() {},
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {}
};
</script>

<style lang="scss" scoped>
.default-container {
  padding: 25px;
  background-color: rgb(240, 242, 245);
  //   min-height: 80vh;
  .box-card {
    background: #ffffff;
    padding: 10px 20px;
    // box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.05);
    h3 {
      margin: 8px 0;
      color: #666;
      text-align: right;
      .unit {
        font-size: 14px;
      }
    }
    h4 {
      margin: 8px 0;
      color: #999;
    }
  }
  .def-row {
    padding-bottom: 20px;
  }
}
</style>
