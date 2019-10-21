<template>
  <div class="Zhuce">
    <h1>注册</h1>
    <div>
      <p>经营范围:</p>
      <table>
        <thead>
          <th>品名</th>
          <th>品牌</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in List" :key="item + index">
            <td>{{ item.name }}</td>
            <td>{{ item.brandName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Zhuce extends Vue {
  List: Array<Object> = [];
  mounted() {
    let result = this.$route.params.paramsArr;
    if (result && result.length) {
      this.List = Array.from(result);
    }
  }
}
</script>
<style lang="less" scoped>
p {
  text-align: left;
}
table,
thead {
  width: 100%;
}
th,
td {
  border-bottom: 1px solid #ccc;
  width: 50%;
}
</style>
