˜˜<template>
  <div class="app-container">
    <el-form :inline="true" :rules="srules" :model="sform" ref="sform">
      <el-form-item label="" prop="type">
        <el-select v-model="sform.type" placeholder="快递、物流">
          <el-option label="全部" value=""></el-option>
          <el-option label="快递" value="1"></el-option>
          <el-option label="物流" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="" prop="status">
        <el-select v-model="sform.status" placeholder="配送方式">
          <el-option label="全部" value=""></el-option>
          <el-option label="到站自取" value="0"></el-option>
          <el-option label="送货上门" value="1"></el-option>
          <el-option label="送货上楼" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="" prop="title">
        <el-input v-model="sform.title" placeholder="订单号"></el-input>
      </el-form-item>
      <el-form-item label="" prop="title">
        <el-input v-model="sform.title" placeholder="运单号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button round type="primary" @click="search()">查询</el-button>
        <el-button type="info" round @click="searchReset()">清空条件</el-button>
        <!-- <el-button round @click="addClick">添加</el-button>
        <el-button type="primary" round @click="editClick">修改</el-button> -->
        <el-button type="success" round @click="editorClick">详情</el-button>
        <!-- <el-button type="warning" round @click="onoffClick(1)">上架</el-button>
        <el-button type="danger" round @click="onoffClick(0)">下架</el-button>
        <el-button type="info" round @click="delClick">删除</el-button> -->
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border highlight-current-row @current-change="handleCurrentChange">
      <el-table-column prop="orderNo" label="订单号" width="132"> </el-table-column>
      <el-table-column prop="expressNo" label="运单号" width="132"> </el-table-column>
      <el-table-column prop="receiveCode" label="客户编码" width="85"> </el-table-column>
      <el-table-column prop="receiveName" label="客户名称" width="180" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="receiveContact" label="联系人" width="60" :show-overflow-tooltip="true"> </el-table-column>
      <el-table-column prop="receivePhone" label="联系电话" width="95" :show-overflow-tooltip="true"> </el-table-column>
      <el-table-column prop="sendName" label="运输单位" width="165"> </el-table-column>
      <el-table-column prop="address" label="到货地址" :show-overflow-tooltip="true"> </el-table-column>
      <el-table-column prop="type" label="发货方式" width="70" align="center"> </el-table-column>
      <el-table-column prop="mode" label="配送需求" width="70" align="center"> </el-table-column>
      <el-table-column prop="departCode" label="部门编码" width="70"> </el-table-column>
      <el-table-column prop="departName" label="销售部门" width="106"> </el-table-column>
      <el-table-column prop="sendDate" label="发货日期" width="86"> </el-table-column>
      <el-table-column prop="createDate" label="导入日期" width="135"> </el-table-column>
      <el-table-column prop="num" label="数量" width="72" align="right"> </el-table-column>
      <el-table-column prop="expressFre" label="快递费" width="75" align="right" fixed="right"> </el-table-column>
    </el-table>
    <el-pagination class="my-2" background layout="total, prev, pager, next, jumper" :total="total" :page-size="15" :current-page="sform.page" @current-change="pageChange"> </el-pagination>

    <!-- <article-add :visible="addVisible" @onCancel="addEmit"></article-add>
    <article-edit :id="currentId" :visible="editVisiable" @onCancel="editEmit"></article-edit>
    <edit-blog :id="currentId" :visible="editorVisible" @onCancel="editorVisible = false"></edit-blog> -->
  </div>
</template>

<script>
// import ArticleAdd from './article/articleAdd';
// import ArticleEdit from './article/articleEdit';
// import EditBlog from './component/editBlog';
export default {
  //   components: {
  //     ArticleAdd,
  //     ArticleEdit,
  //     EditBlog
  //   },
  data() {
    return {
      sform: {
        name: '',
        area: '',
        page: 1,
        pagesize: 15
      },
      areaChk: [],
      srules: {},
      ruleForm: {
        username: '',
        roles: []
      },
      total: 0,
      tableData: [
        {
          id: 'TP20082940303930',
          orderNo: '202007200031',
          expressNo: '73133953363330',
          receiveCode:'110021128',
          receiveName: '阿拉善盟盛世华翔财务管理有限公司',
          receiveContact: '周树成 18362057902',
          receivePhone: '周树成 18362057902',
          sendName: '深圳市聚盟物流有限公司',
          sendPhone: '18201081234',
          address: '山东省潍坊市青州市益都西路与仰天山路交汇路口西北角 潍坊骏驰汽车贸易有限公司',
          type: '物流',
          mode: '送货上门',
          departCode: '120105',
          departName: '华东电商单元3',
          sendDate: '2020-08-24',
          createDate: '2020-08-24 13:02:21',
          num: 100,
          expressFre: '231.45'
        },
        {
          id: 'TP20082940303930',
          orderNo: '202007200031',
          expressNo: '73133953363330',
          receiveCode:'110021128',
          receiveName: '阿拉善盟盛世华翔财务管理有限公司',
          receiveContact: '周树成 18362057902',
          receivePhone: '周树成 18362057902',
          sendName: '深圳市聚盟物流有限公司',
          sendPhone: '18201081234',
          address: '山东省潍坊市青州市益都西路与仰天山路交汇路口西北角 潍坊骏驰汽车贸易有限公司',
          type: '物流',
          mode: '送货上门',
          departCode: '120105',
          departName: '华东电商单元3',
          sendDate: '2020-08-24',
          createDate: '2020-08-24 13:02:21',
          num: 100,
          expressFre: '231.45'
        },
        {
          id: 'TP20082940303930',
          orderNo: '202007200031',
          expressNo: '73133953363330',
          receiveCode:'110021128',
          receiveName: '阿拉善盟盛世华翔财务管理有限公司',
          receiveContact: '周树成 18362057902',
          receivePhone: '周树成 18362057902',
          sendName: '深圳市聚盟物流有限公司',
          sendPhone: '18201081234',
          address: '山东省潍坊市青州市益都西路与仰天山路交汇路口西北角 潍坊骏驰汽车贸易有限公司',
          type: '物流',
          mode: '送货上门',
          departCode: '120105',
          departName: '华东电商单元3',
          sendDate: '2020-08-24',
          createDate: '2020-08-24 13:02:21',
          num: 100,
          expressFre: '231.45'
        },
        {
          id: 'TP20082940303930',
          orderNo: '202007200031',
          expressNo: '73133953363330',
          receiveCode:'110021128',
          receiveName: '阿拉善盟盛世华翔财务管理有限公司',
          receiveContact: '周树成 18362057902',
          receivePhone: '周树成 18362057902',
          sendName: '深圳市聚盟物流有限公司',
          sendPhone: '18201081234',
          address: '山东省潍坊市青州市益都西路与仰天山路交汇路口西北角 潍坊骏驰汽车贸易有限公司',
          type: '物流',
          mode: '送货上门',
          departCode: '120105',
          departName: '华东电商单元3',
          sendDate: '2020-08-24',
          createDate: '2020-08-24 13:02:21',
          num: 100,
          expressFre: '231.45'
        },
        {
          id: 'TP20082940303930',
          orderNo: '202007200031',
          expressNo: '73133953363330',
          receiveCode:'110021128',
          receiveName: '阿拉善盟盛世华翔财务管理有限公司',
          receiveContact: '周树成 18362057902',
          receivePhone: '周树成 18362057902',
          sendName: '深圳市聚盟物流有限公司',
          sendPhone: '18201081234',
          address: '山东省潍坊市青州市益都西路与仰天山路交汇路口西北角 潍坊骏驰汽车贸易有限公司',
          type: '物流',
          mode: '送货上门',
          departCode: '120105',
          departName: '华东电商单元3',
          sendDate: '2020-08-24',
          createDate: '2020-08-24 13:02:21',
          num: 100,
          expressFre: '231.45'
        }
      ],
      currentId: '',
      currentRow: {},
      editorVisible: false,
      addVisible: false,
      editVisiable: false,
      areaList: [],
      currentData: {},
      isEdit: false,
      formVisible: false
    };
  },
  mounted() {
    this.initPage();
  },
  methods: {
    pageChange(page) {
      this.sform.page = page;
      this.initPage();
    },
    handleCurrentChange(val) {
      this.currentRow = val;
      this.currentId = val ? val.id : '';
    },
    addClick() {
      this.addVisible = true;
    },
    addEmit() {
      this.addVisible = false;
      this.initPage();
    },
    editClick() {
      if (!this.currentRow.id) {
        this.$message.error('请先选择数据！');
        return;
      }
      this.editVisiable = true;
    },
    editEmit() {
      this.editVisiable = false;
      this.initPage();
    },
    delClick() {
      if (!this.currentRow.id) {
        this.$message.error('请先选择数据！');
        return;
      }
      console.log(this.currentRow);
    },
    editorClick() {
      if (!this.currentRow.id) {
        this.$message.error('请先选择数据！');
        return;
      }
      this.editorVisible = true;
    },
    onoffClick(status) {
      console.log(this.currentRow);
      if (!this.currentRow || !this.currentRow.id) {
        this.$message.error('请先选择数据！');
        return;
      }
      this.$http.post('/article/onoff/' + this.currentRow.id, { status: status }).then(response => {
        if (!response) return;
        this.$message.success('操作成功!');
        this.initPage();
      });
    },
    search() {
      this.sform.page = 1;
      this.initPage();
    },
    searchReset() {
      this.sform.title = '';
      this.sform.type = '';
      this.sform.status = '';
      this.search();
    },
    initPage() {
      //   this.$http.get("/article/list", { params: this.sform }).then(response => {
      //     if (!response) return;
      //     var resData = response.data;
      //     this.currentRow = {};
      //     this.tableData = resData.rows;
      //     this.total = parseInt(resData.total);
      //     // this.currentRow = {};
      //   });
    },
    addBtn() {
      this.resetForm();
      this.formVisible = true;
      this.isEdit = false;
    },
    resetForm() {
      this.ruleForm.username = '';
      this.ruleForm.roles = [];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
