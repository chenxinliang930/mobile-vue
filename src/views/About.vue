<template>
  <div class="about">
    <van-divider content-position="right">Your love</van-divider>
    <div class="list">
      <ul>
        <li v-for="item in storeList" :key="item.id">
          <div class="top">
            <img :src="item.url" alt="" />
          </div>
          <p class="type">
            {{ item.type }}
            <van-icon name="gem" />
          </p>
          <p class="name">{{ item.name }}</p>
          <p class="price">{{ item.price }}</p>
        </li>
      </ul>
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
export default class About extends Vue {
  storeList: Array<Object> = [];
  mounted() {
    this.storeList = this.$store.state.collectThing;
  }
}
</script>
<style lang="less" scoped>
body,
html {
  background-color: #ccc;
}
.about {
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
