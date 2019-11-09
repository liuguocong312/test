<template>
  <div id="app">
    <!-- 我是主页内容 不会跳转的 同时其他router是依懒我的 -->

    <div class="nav-outside">
      <!-- 导航内 -->
      <div class="nav-inside">
        <!-- 导航左 -->
        <div class="nav-l">
          <img src="../assets/nodeloggo.png" />
          <form action>
            <input type="text" class="input" />
          </form>
        </div>
        <!-- 导航右 -->
        <div class="nav-r">
          <ul>
            <li v-for="(item,index) in headerArr" :key="index">
              <a href>{{item}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 主内容部分 -->
    <div class="main">
      <!-- 固定切换主题 -->
      <div class="title">
        <ul class="title-ul">
          <li :class="{'active':index == 1}" @click="changeclass(1)">
            <a href="javascript:;" @click="clickall('/')">全部</a>
          </li>
          <li :class="{'active':index == 2}" @click="changeclass(2)">
            <a href="javascript:;" @click="clickgood('/good')">精华</a>
          </li>
          <li :class="{'active':index == 3}" @click="changeclass(3)">
            <a href="javascript:;" @click="clickshare('/share')">分享</a>
          </li>
          <li :class="{'active':index == 4}" @click="changeclass(4)">
            <a href="javascript:;" @click="clickask('/ask')">问答</a>
          </li>
          <li :class="{'active':index == 5}" @click="changeclass(5)">
            <a href="javascript:;" @click="clickjob('/job')">招聘</a>
          </li>
          <li :class="{'active':index == 6}" @click="changeclass(6)">
            <a href="javascript:;"  @click="clickdev('/dev')">客户端测试</a>
          </li>
        </ul>
      </div>
      <!-- 广告部分 -->
      <div class="main-r">
        <div class="banner1">
          <p>CNode：Node.js专业中文社区</p>
          <p>
            您可以
            <a href="javascript:;">登录</a> 或
            <a href="javascript:;">注册</a> , 也可以
          </p>
          <span class="banner1-login">通过 GitHub 登录</span>
        </div>
        <div class="banner2">
          <img src="../assets/banner2.png" width="100%" />
        </div>
        <div class="banner3">
          <p class="p-top">无人回复的话题</p>
          <p>libuv的定时器原理源码解析</p>
          <p>nodejs之setTimeout源码解析</p>
          <p>libuv之async.c源码解析</p>
          <p>nodejs解析http协议源码解析</p>
          <p>nodejs之js调用c++初探</p>
        </div>
      </div>
      <!-- 一开始加载全部的渲染的部分 -->
      <!-- 中间切换内容 -->
      <router-view></router-view>
      <!-- 底部部分 -->
    </div>
    <div class="footer">
      <p>
        RSS
        <span>|</span> 源码地址
      </p>
      <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>

      <p>
        服务器赞助商为
        <a
          href="http://www.ucloud.cn/?utm_source=zanzhu&amp;utm_campaign=cnodejs&amp;utm_medium=display&amp;utm_content=yejiao&amp;ytag=cnodejs_logo"
          target="_blank"
          class="sponsor_outlink"
          data-label="ucloud_bottom"
        >
          <img
            src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9"
            title="ucloud"
            alt="ucloud"
            width="92px"
          />
        </a>
        ，存储赞助商为
        <a
          href="https://www.aliyun.com/product/nodejs?ref=cnode"
          target="_blank"
          class="sponsor_outlink"
          data-label="alinode_bottom"
        >
          <img
            src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX"
            title="七牛云存储"
            alt="七牛云存储"
            width="115px"
          />
        </a> ，由
        <a
          href="https://www.aliyun.com/product/nodejs?ref=cnode"
          target="_blank"
          class="sponsor_outlink"
          data-label="alinode_bottom"
        >
          <img
            src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD"
            title="alinode"
            alt="alinode"
            height="54px"
            width="166px"
          />
        </a>
        提供应用性能服务。
      </p>
      <p>
        新手搭建 Node.js 服务器，推荐使用无需备案的
        <a
          href="https://www.digitalocean.com/?refcode=eba02656eeb3"
        >DigitalOcean(https://www.digitalocean.com/)</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      arr: [],
      headerArr: ["首页", "新手入门", "API", "关于", "注册", "登录"],
      currentIndex: 0,
      index: "1"
    };
  },
  methods: {
    changeclass(index) {
      this.index = index;
    },
    //跳转路由部分
    clickall(path) {
      this.$router.replace(path);
    },
    clickgood(path) {
      this.$router.replace(path);
    },
    clickshare(path) {
      this.$router.replace(path);
    },
    clickask(path) {
      this.$router.replace(path);
    },
    clickjob(path) {
      this.$router.replace(path);
    },
    clickdev(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style lang='less' >
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

body {
  background: #e1e1e1;
}
span > img {
  width: 30px;
  vertical-align: middle;
}
a {
  text-decoration: none;
  color: #ccc;
  cursor:pointer
}
#app {
  width: 100%;
  height: 100%;
}
/* 导航部分---------------------- */

.nav-outside {
  width: 100%;
  height: 55px;
  background: #444444;
}
.nav-inside {
  width: 1350px;
  height: 55px;
  margin: 0 auto;
}
.nav-l {
  width: 480px;
  height: 55px;
  float: left;
}
.nav-r {
  width: 420px;
  height: 55px;
  float: right;
}
form {
  float: right;
  margin: 12px 30px;
}
.input {
  outline: none;
  width: 250px;
  height: 30px;
  border-radius: 20px;
  border: none;
  background: url("../assets/1.png") 5px 5px no-repeat #888888;
  text-indent: 30px;
}
.input:hover {
  background: url("../assets/1.png") 5px 5px no-repeat #fff;
  transition: all 0.5s ease-in-out;
}
li {
  float: left;
  text-align: center;
  margin: 16px;
  font-size: 14px;
}
a:hover {
  color: #fff;
}
/* main内容部分 */
.main {
  height: 1000px;
  padding: 20px 90px;
}
/* 固定切换主题部分---------- */
.title-ul .active a {
  background: #80bd01;
  color: #fff;
  padding: 3px;
  border-radius: 3px;
  box-sizing: content-box;
}
.title {
  width: 74%;
  height: 40px;
  background: #f6f6f6;
  float: left;
}
.title-ul {
  float: left;
  line-height: 40px;
  margin-left: 10px;
}
.title-ul li {
  display: inline-block;
  margin: 0 15px;
}
.title-ul li a {
  font-size: 14px;
  color: #80bd01;
}
.title-ul li a:hover {
  color: #08c;
}
/* 右面固定广告页面 -------------------*/
.main-r {
  width: 25%;
  float: right;
  margin-right: 0 60px;
}
.banner1 {
  width: 100%;
  background: #fff;
  padding: 20px 10px;
  box-sizing: border-box;
}
.banner1 p {
  margin: 0 0 10px;
  font-size: 13.5px;
}
.banner1-login {
  padding: 10px;
  background: #5bc0de;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.banner1-login:hover {
  background: #2f96b4;
}
.banner2 {
  margin: 12px auto;
  cursor: pointer;
}
.banner3 {
  background: #fff;
  font-size: 14px;
  color: #778087;
  height: auto;
  padding-bottom: 10px;
  box-sizing: border-box;
}
.banner3 p {
  margin: 6px 0;
  padding: 5px 6px;
  cursor: pointer;
}
.p-top {
  height: 30px;
  background: #eee;
  color: #000;
  line-height: 30px;
}
/* 底部样式 */

.footer {
  background: #fff;
  padding: 19px 50px;
  p {
    color: #aeaeb3;
    font-size: 14px;
    margin: 10px 2px;
     a {
      color: #08c;
    }
    a:hover{
      color:#005580
    }
  }
  p:first-child {
    color: rgb(78, 76, 76);
    font-size: 13px;
    span {
      color: #b5b5bb;
    }
  }
}
</style>