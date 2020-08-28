<template>
  <div class="app-container">
    <el-row type="flex" justify="center" align="middle">
      <el-col :xs="12" :sm="12" :lg="12">
        <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
      </el-col>
       <el-col :xs="12" :sm="12" :lg="12">
        <el-button type="primary" size="large">确定导入</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column type="index" width="50" v-if="tableHeader.length > 0"> </el-table-column>
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue';

export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: []
    };
  },
  methods: {
    beforeUpload(file) {
      console.log(222);
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (isLt1M) {
        return true;
      }

      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      });
      return false;
    },
    handleSuccess({ results, header }) {
      console.log(JSON.stringify(results));
      this.tableData = results;
      this.tableHeader = header;
      console.log(JSON.stringify(header));
    },

    submit(){
      
    }
  }
};
</script>
