<template>
  <div class="ManageChild">
    <ul>
      <li>品名:<input placeholder="请输入名称" v-model="name" /></li>
      <li>品牌:<input placeholder="请输入品牌" v-model="brandName" /></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ManageChild extends Vue {
  name: string = "";
  brandName: string = "";

  @Prop({
    type: Object,
    default: () => {}
  })
  model!: any;
  save() {
    let data: any = {
      name: this.name,
      brandName: this.brandName
    };
    return data;
  }
}
</script>
<style lang="less" scoped>
.ManageChild {
  margin-bottom: 20px;
  ul {
    background-color: #fff;
    width: 90%;
    margin: 0 auto;
    font-size: 0.8rem;
    box-shadow: 0 0 5px #ccc;
    li {
      border-bottom: 1px solid #ccc;
      text-align: left;
      padding: 0.5rem;
    }
    input {
      width: 30%;
      border: none;
      float: right;
    }
  }
}
</style>
