<template>
  <div class="content-all">
    <ul class=".content-ul">
      <li
        v-for="(item,index) in arr"
        :key="index"
        class="main-li"
        :class="{current:currentIndex===index}"
        @mouseover="changeClass(index)"
        @mouseout="outClass()"
      >
        <span>
          <img :src="item.author.avatar_url" :title="item.author.loginname" />
        </span>

        <span class="span-decoration">
          <span class="span-reply">{{item.reply_count}}</span>
          <span class="span-visit">/{{item.visit_count}}</span>
          <span
            v-show="flag"
            :class="[item.top||item.good?'spangreen' :'spangray'] "
          >{{item | classify}}</span>
        </span>

        <span class="li-title">
          <a class="special-a">{{item.title}}</a>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "pubilc",
  data() {
    return {
      arr: [],
      currentIndex: 0,
      flag: true
    };
  },
  filters: {
    classify: value => {
      if (value.top) {
        return "置顶";
      } else if (value.good) {
        return "精华";
      } else if (value.tab === "ask") {
        return "问答";
      } else if (value.tab === "share") {
        return "分享";
      }
    }
  },
  //------------------------load routers part----------------------//
  created() {
    console.log(this.$route.path);
    if (this.$route.path === "/") {
      //默认首页
      axios
        .get(" https://cnodejs.org/api/v1/topics", {
          params: {
            limit: 19
          }
        })
        .then(res => {
          this.arr = res.data.data;
          console.log(res);
        });
    } else if (this.$route.path === "/good") {
      //good Page section
      axios
        .get(" https://cnodejs.org/api/v1/topics", {
          params: {
            tab: "good",
            limit: 19
          }
        })
        .then(res => {
          this.arr = res.data.data;
          //  console.log(res);
        });
    } else if (this.$route.path === "/share") {
      //share Page section
      axios
        .get(" https://cnodejs.org/api/v1/topics", {
          params: {
            tab: "share",
            limit: 19
          }
        })
        .then(res => {
          this.arr = res.data.data;
          //  console.log(res);
        });
    } else if (this.$route.path === "/ask") {
      //ask Page section
      axios
        .get(" https://cnodejs.org/api/v1/topics", {
          params: {
            tab: "ask",
            limit: 19
          }
        })
        .then(res => {
          this.arr = res.data.data;
          //  console.log(res);
        });
    } else if (this.$route.path === "/job") {
      //job Page section
      axios
        .get(" https://cnodejs.org/api/v1/topics", {
          params: {
            tab: "job",
            limit: 19
          }
        })
        .then(res => {
          if (res) {
            this.arr = res.data.data;
            this.flag = !this.flag;
          }

          //  console.log(res);
        });
    } else if (this.$route.path === "/dev") {
      //dev Page section
      axios
        .get(" https://cnodejs.org/api/v1/topics", {
          params: {
            tab: "dev",
            limit: 19
          }
        })
        .then(res => {
          if (res) {
            this.arr = res.data.data;
            this.flag = !this.flag;
          }

          //  console.log(res);
        });
    }
  },
  methods: {
    changeClass(index) {
      this.currentIndex = index;
      //  console.log("我是鼠标移入事件");
    },
    outClass() {
      this.currentIndex = !this.currentIndex;
      // console.log("我是鼠标移出事件");
    }
  }
};
</script>

<style>
.change1 {
  background: gold;
  width: 80%;
}
.content-ul {
  width: 74%;
  max-height: 900px;
  background: orange;
}
.main-li {
  width: 74%;
  height: 50px;
  line-height: 50px;
  margin: 0;
  text-align: left;
  text-indent: 10px;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: white;
}
.current {
  background: #f6f6f6;
}
.li-title {
  color: black;
  margin: 0 5px;
}
.li-title > a {
  line-height: 40px;
  color: #000;
}

.li-title > a:hover {
  border-bottom: 1px solid black;
}
.span-decoration {
  margin: 8px;
}
.span-visit {
  font-size: 10px;
  color: #ccc;
}
.span-reply {
  color: #9e8dd2;
}
.spangreen,
.spangray {
  padding: 2px;
  border-radius: 4px;
  font-size: 12px;
  background: #80bd01;
  color: #fff;
  margin-left: 8px;
}
.spangray {
  background: #ccc;
}
</style>