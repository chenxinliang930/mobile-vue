<template>
  <div class="home">
    <div class="top">
      <div class="left">
        <van-icon name="wap-nav" />
      </div>
      <div class="right">
        interior store
      </div>
      <div class="list">
        <ul>
          <li v-for="item in storeList" :key="item.id">
            <div class="top">
              <img :src="item.url" alt="" />
            </div>
            <p class="type">
              {{ item.type }}
              <van-icon @click="collect(item)" name="gem" />
            </p>
            <p class="name">{{ item.name }}</p>
            <p class="price">{{ item.price }}</p>
          </li>
        </ul>
      </div>
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
export default class Home extends Vue {
  storeList: Array<Object> = [
    {
      id: 1,
      url: require("../img/6.png"),
      name: "Mordern",
      type: "chair",
      price: "$12.00"
    },
    {
      id: 2,
      url: require("../img/7.png"),
      name: "Mordern",
      type: "chair",
      price: "$666.00"
    },
    {
      id: 3,
      url: require("../img/8.png"),
      name: "Mordern",
      type: "chair",
      price: "$65.00"
    },
    {
      id: 4,
      url: require("../img/9.png"),
      name: "Mordern",
      type: "chair",
      price: "$99.00"
    }
  ];
  // methods
  collect(item: Object) {
    this.$notify({
      background: "#ffe1e1",
      message: "收藏成功",
      duration: 1000
    });
    this.$store.commit("saveCollect", item);
  }
  mounted() {}
}
</script>
<style lang="less" scoped>
.home {
  padding: 0 10%;
  overflow: hidden;
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .list {
    padding-top: 2rem;
    ul {
      overflow: hidden;
      li {
        width: 48%;
        float: left;
        margin-right: 2%;
        &:nth-child(2n) {
          margin-right: 0;
        }
        p {
          margin: 0.3rem 0;
          text-align: left;
          font-size: 1rem;
          i {
            float: right;
          }
          &.type {
            font-size: 0.6rem;
            color: #bababa;
          }
          &.name {
            font-weight: bold;
            color: #434446;
          }
          &.price {
            font-size: 0.8rem;
            color: #8b8b8b;
          }
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
