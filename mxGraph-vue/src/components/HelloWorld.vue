<template>
  <div class="hello">
    <div id="graphContainer"></div>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import mxgraph from '../graph/index.js';
  const {mxGraph, mxClient, mxCodec, mxUtils, mxConstants, mxPerimeter} = mxgraph;

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    if (!mxClient.isBrowserSupported()) {
      // 判断是否支持mxgraph
      mxUtils.error('Browser is not supported!', 200, false);
    } else {
      // 再容器中创建图表
      let container = document.getElementById('graphContainer');
      let MxGraph = mxGraph;
      let MxCodec = mxCodec;
      var graph = new MxGraph(container);
      // 生成 Hello world!
      var parent = graph.getDefaultParent();
      graph.getModel().beginUpdate();
      try {
        var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 200, 80, 30);
        var v2 = graph.insertVertex(parent, null, 'World', 200, 150, 80, 30);
        var v3 = graph.insertVertex(parent, null, 'everyBody!', 300, 350, 60, 60);
        graph.insertEdge(parent, null, '', v1, v2);
        graph.insertEdge(parent, null, '', v2, v3);
        graph.insertEdge(parent, null, '', v1, v3);
      } finally {
        // Updates the display
        graph.getModel().endUpdate();
      }
      // 打包XML文件
      let encoder = new MxCodec();
      let xx = encoder.encode(graph.getModel());
      // 保存到getXml参数中
      this.getXml = mxUtils.getXml(xx);
      console.log(this.getXml);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
