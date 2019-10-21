<template>
  <div class="about">
    <van-divider content-position="right">Your love</van-divider>
    <div class="list">
      <ul v-for="(item, index) in storeList" :key="index">
        <li>
          <span>
            日期
          </span>
          <span>
            {{ item.date }}
          </span>
        </li>
        <li>
          <span>
            询价人
          </span>
          <span>
            {{ item.person }}
          </span>
        </li>
        <li>
          <span>
            价格
          </span>
          <span>
            {{ item.price }}
          </span>
        </li>
      </ul>
      <table cellpadding="10">
        <thead>
          <th><span>数学</span></th>
          <th><span>数学</span></th>
          <th><span>数学</span></th>
        </thead>
        <tbody>
          <tr>
            <td>2222</td>
            <td>3333</td>
            <td>4444</td>
          </tr>
          <tr>
            <td>2222</td>
            <td>3333</td>
            <td>4444</td>
          </tr>
          <tr>
            <td>2222</td>
            <td>3333</td>
            <td>4444</td>
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
export default class baojia extends Vue {
  storeList: Array<Object> = [
    {
      date: "1999-09-09",
      person: "张三",
      price: 999
    }
  ];
}
</script>
<style lang="less" scoped>
table {
  border-spacing: 0;
  width: 100%;
  thead {
    th {
      border-bottom: 1px solid #ccc;
      span {
        display: inline-block;
        width: 100%;
        border-right: 1px solid #ccc;
      }
      &:last-child span {
        border-right: none;
      }
    }
  }
  tbody {
    tr {
      td {
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 1rem;
  &:first-child {
    border-top: 1px solid #ccc;
  }
}
</style>
