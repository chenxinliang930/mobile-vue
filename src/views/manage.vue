<template>
  <div class="about">
    <ManageChild
      ref="courseList"
      v-for="(item, index) in list"
      :key="index"
      :model="item"
    ></ManageChild>
    <div class="add" @click="addList">
      添加经营范围
    </div>
    <button @click="submit">
      提交
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ManageChild from "@/components/ManageChild.vue"; // @ is an alias to /src

@Component({
  components: {
    ManageChild
  }
})
export default class baojia extends Vue {
  /* data */
  paramsArr: any = [];
  form: any = {
    name: "",
    brand: ""
  };
  list: any = [];
  addList() {
    this.list.push(JSON.parse(JSON.stringify(this.form)));
  }
  submit() {
    let courseList: Array<any> = this.$refs.courseList as Array<any>;

    courseList.forEach(item => {
      let data = item.save && item.save();
      this.paramsArr.push({
        name: data.name,
        brandName: data.brandName
      });
    });
    console.log(this.paramsArr);
    this.$router.push({
      name: "zhuce",
      params: { paramsArr: this.paramsArr }
    });
  }
}
</script>
<style lang="less" scoped>
.add {
  padding: 10px 0;
  width: 80%;
  margin: 2rem auto;
  border: 5px dashed #ef9831;
}
</style>
