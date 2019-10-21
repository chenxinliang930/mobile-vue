<template>
  <div id="app">
    <div id="nav">
      <div class="left">
        ROOM
      </div>
      <div class="right">
        <router-link to="/">
          <van-icon name="wap-nav" />
        </router-link>
        <router-link to="/about">
          <van-icon name="gem" />
        </router-link>
        <router-link to="/detail">
          <van-icon name="fire" />
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  overflow: hidden;
  .left {
    font-size: 1.5rem;
    font-weight: bold;
    float: left;
    vertical-align: middle;
  }
  .right {
    float: right;
    a {
      margin: 0 0.5rem;
    }
  }
  padding: 1rem 5%;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
