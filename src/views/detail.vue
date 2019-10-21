<template>
  <div class="about">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item.url" alt="" />
        <p>{{ item.price }}</p>
      </van-swipe-item>
    </van-swipe>
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
  images: Array<Object> = [
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
}
</script>
<style lang="less" scoped>
.about {
  padding: 2rem 0;
  background-color: #efeeee;
  p {
    font-size: 1rem;
    font-weight: bold;
    margin: 1rem 0 2rem;
  }
}
</style>
