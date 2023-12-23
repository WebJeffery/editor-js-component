import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.c4fb31b0.js";const D=JSON.parse('{"title":"editorjs-js-component","description":"","frontmatter":{},"headers":[],"relativePath":"develop/editor-js-component.md","filePath":"develop/editor-js-component.md","lastUpdated":1703341809000}'),p={name:"develop/editor-js-component.md"},o=l(`<h1 id="editorjs-js-component" tabindex="-1">editorjs-js-component <a class="header-anchor" href="#editorjs-js-component" aria-label="Permalink to &quot;editorjs-js-component&quot;">​</a></h1><p>editorjs-js-component 是基于 Editor.js 封装的库，不局限框架，可以用于 Vue 和 React 项目</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># NPM</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">editor-js-component</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># or Yarn</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">editor-js-component</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># or Pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">editor-js-component</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># NPM</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span><span style="color:#24292E;"> </span><span style="color:#032F62;">editor-js-component</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># or Yarn</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">editor-js-component</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># or Pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">editor-js-component</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useEditorjs } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;editor-js-component&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行函数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">editorInstance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useEditorjs</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  holder, </span><span style="color:#6A737D;">// 挂载容器 id</span></span>
<span class="line"><span style="color:#E1E4E8;">  readonly, </span><span style="color:#6A737D;">// 只读页面</span></span>
<span class="line"><span style="color:#E1E4E8;">  autofocus, </span><span style="color:#6A737D;">// 自动聚焦</span></span>
<span class="line"><span style="color:#E1E4E8;">  blockToolbar, </span><span style="color:#6A737D;">// 开启块功能，可以排序，不传默认使用全部插件</span></span>
<span class="line"><span style="color:#E1E4E8;">  customPlugin, </span><span style="color:#6A737D;">// 可以添加新的插件，扩展功能</span></span>
<span class="line"><span style="color:#E1E4E8;">  pluginConfig, </span><span style="color:#6A737D;">// 插件的配置，深度合并，可以修改插件配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  editorConfig, </span><span style="color:#6A737D;">// 编辑器的其他配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  disablePlugin, </span><span style="color:#6A737D;">// 禁用插件功能</span></span>
<span class="line"><span style="color:#E1E4E8;">  data, </span><span style="color:#6A737D;">// 渲染的数据对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  messages, </span><span style="color:#6A737D;">// 国际化</span></span>
<span class="line"><span style="color:#E1E4E8;">  editorjs: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 实例化编辑器 Editorjs 对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onStart</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 开始执行方法，可以修改 state 对象</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onReady</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 实例后执行方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onChange</span><span style="color:#E1E4E8;">: ({ </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// 数据修改后执行方法</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onDestroy</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// editorInstance 实例化后的对象</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  state, </span><span style="color:#6A737D;">// 数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  initEditor, </span><span style="color:#6A737D;">// 初始化方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  start, </span><span style="color:#6A737D;">// 启动方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  update, </span><span style="color:#6A737D;">// 更新方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  refresh, </span><span style="color:#6A737D;">// 刷新方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  destroy </span><span style="color:#6A737D;">// 销毁方法</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实例化编辑器，开启执行</span></span>
<span class="line"><span style="color:#E1E4E8;">editorInstance.</span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useEditorjs } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;editor-js-component&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 执行函数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">editorInstance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useEditorjs</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  holder, </span><span style="color:#6A737D;">// 挂载容器 id</span></span>
<span class="line"><span style="color:#24292E;">  readonly, </span><span style="color:#6A737D;">// 只读页面</span></span>
<span class="line"><span style="color:#24292E;">  autofocus, </span><span style="color:#6A737D;">// 自动聚焦</span></span>
<span class="line"><span style="color:#24292E;">  blockToolbar, </span><span style="color:#6A737D;">// 开启块功能，可以排序，不传默认使用全部插件</span></span>
<span class="line"><span style="color:#24292E;">  customPlugin, </span><span style="color:#6A737D;">// 可以添加新的插件，扩展功能</span></span>
<span class="line"><span style="color:#24292E;">  pluginConfig, </span><span style="color:#6A737D;">// 插件的配置，深度合并，可以修改插件配置</span></span>
<span class="line"><span style="color:#24292E;">  editorConfig, </span><span style="color:#6A737D;">// 编辑器的其他配置</span></span>
<span class="line"><span style="color:#24292E;">  disablePlugin, </span><span style="color:#6A737D;">// 禁用插件功能</span></span>
<span class="line"><span style="color:#24292E;">  data, </span><span style="color:#6A737D;">// 渲染的数据对象</span></span>
<span class="line"><span style="color:#24292E;">  messages, </span><span style="color:#6A737D;">// 国际化</span></span>
<span class="line"><span style="color:#24292E;">  editorjs: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 实例化编辑器 Editorjs 对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onStart</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 开始执行方法，可以修改 state 对象</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onReady</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">state</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 实例后执行方法</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onChange</span><span style="color:#24292E;">: ({ </span><span style="color:#E36209;">data</span><span style="color:#24292E;">, </span><span style="color:#E36209;">event</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// 数据修改后执行方法</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onDestroy</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// editorInstance 实例化后的对象</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  state, </span><span style="color:#6A737D;">// 数据</span></span>
<span class="line"><span style="color:#24292E;">  initEditor, </span><span style="color:#6A737D;">// 初始化方法</span></span>
<span class="line"><span style="color:#24292E;">  start, </span><span style="color:#6A737D;">// 启动方法</span></span>
<span class="line"><span style="color:#24292E;">  update, </span><span style="color:#6A737D;">// 更新方法</span></span>
<span class="line"><span style="color:#24292E;">  refresh, </span><span style="color:#6A737D;">// 刷新方法</span></span>
<span class="line"><span style="color:#24292E;">  destroy </span><span style="color:#6A737D;">// 销毁方法</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实例化编辑器，开启执行</span></span>
<span class="line"><span style="color:#24292E;">editorInstance.</span><span style="color:#6F42C1;">start</span><span style="color:#24292E;">()</span></span></code></pre></div>`,6),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{D as __pageData,F as default};
