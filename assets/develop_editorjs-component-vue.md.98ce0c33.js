import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.c4fb31b0.js";const u=JSON.parse('{"title":"editorjs-component-vue","description":"","frontmatter":{},"headers":[],"relativePath":"develop/editorjs-component-vue.md","filePath":"develop/editorjs-component-vue.md","lastUpdated":1703341809000}'),p={name:"develop/editorjs-component-vue.md"},o=l(`<h1 id="editorjs-component-vue" tabindex="-1">editorjs-component-vue <a class="header-anchor" href="#editorjs-component-vue" aria-label="Permalink to &quot;editorjs-component-vue&quot;">​</a></h1><p>editorjs-component-vue 是基于 editor-js-component 封装 Vue3 组件</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># NPM</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">editorjs-component-vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># or Yarn</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">editorjs-component-vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># or Pnpm</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">editorjs-component-vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># NPM</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span><span style="color:#24292E;"> </span><span style="color:#032F62;">editorjs-component-vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># or Yarn</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">editorjs-component-vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># or Pnpm</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">editorjs-component-vue</span></span></code></pre></div><h2 id="组件注册" tabindex="-1">组件注册 <a class="header-anchor" href="#组件注册" aria-label="Permalink to &quot;组件注册&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { </span></span>
<span class="line"><span style="color:#E1E4E8;">  EditorJsVue,</span></span>
<span class="line"><span style="color:#E1E4E8;">  EditorJsParser</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;editorjs-component-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// or 全局注册组件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(EditorJsVue)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { </span></span>
<span class="line"><span style="color:#24292E;">  EditorJsVue,</span></span>
<span class="line"><span style="color:#24292E;">  EditorJsParser</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;editorjs-component-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// or 全局注册组件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(EditorJsVue)</span></span></code></pre></div><h2 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;editor-wrap&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">EditorJsVue</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;editor-left&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;editor&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:messages</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;i18nMessage&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:initialized</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onInitialized&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:tool-config</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;toolConfig&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@changeData</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;editorChange&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;editor-right&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">EditorJsParser</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:block-list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;blockList&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">EditorJsParser</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;editor-wrap&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">EditorJsVue</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;editor-left&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;editor&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:messages</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;i18nMessage&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:initialized</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onInitialized&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:tool-config</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;toolConfig&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@changeData</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;editorChange&quot;</span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;editor-right&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">EditorJsParser</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:block-list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;blockList&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">EditorJsParser</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">blockList</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">([])</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> rangeSelection</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">toolConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  image: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    config: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      customUpload: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">uploadByCallback</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">uploadSuccess</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">uploadSuccess</span><span style="color:#E1E4E8;">({ url: </span><span style="color:#9ECBFF;">&#39;https://editorjs.io/_nuxt/api-image_2x.aa04c3de.jpg&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      uploader: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">uploadByFile</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">uploadImage</span><span style="color:#E1E4E8;">(file)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      endpoints: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        byFile: </span><span style="color:#9ECBFF;">&#39;http://localhost:8008/uploadFile&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Your backend file uploader endpoint</span></span>
<span class="line"><span style="color:#E1E4E8;">        byUrl: </span><span style="color:#9ECBFF;">&#39;http://localhost:8008/fetchUrl&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// Your endpoint that provides uploading by Url</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  link: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    config: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">getSelection</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">selection</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rangeSelection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> selection</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">searchLinkData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">search</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;xx1&#39;</span><span style="color:#E1E4E8;">, href: </span><span style="color:#9ECBFF;">&#39;https://baidu.com&#39;</span><span style="color:#E1E4E8;">, description: </span><span style="color:#9ECBFF;">&#39;链接描述&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;xx2&#39;</span><span style="color:#E1E4E8;">, href: </span><span style="color:#9ECBFF;">&#39;https://baidu.com&#39;</span><span style="color:#E1E4E8;">, description: </span><span style="color:#9ECBFF;">&#39;链接描述&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">          { name: </span><span style="color:#9ECBFF;">&#39;xx3&#39;</span><span style="color:#E1E4E8;">, href: </span><span style="color:#9ECBFF;">&#39;https://baidu.com&#39;</span><span style="color:#E1E4E8;">, description: </span><span style="color:#9ECBFF;">&#39;链接描述&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> list.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.name.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(search))</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">          items: result,</span></span>
<span class="line"><span style="color:#E1E4E8;">          success: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 解决点击链接后，切换内部工具栏不能选中</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onInitialized</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">editor</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  editorInstance.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> editor</span></span>
<span class="line"><span style="color:#E1E4E8;">  editor.state.editorjs.isReady.</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.ce-inline-toolbar__buttons&#39;</span><span style="color:#E1E4E8;">)?.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">ev</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dataSet </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ev.target.dataset</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { target } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ev</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">dataSet.tool </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> target) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        dataSet </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> target.parentNode.dataset</span></span>
<span class="line"><span style="color:#E1E4E8;">        target </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> target.parentNode</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (rangeSelection </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(dataSet.tool)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">rangeSelection</span><span style="color:#E1E4E8;">?.()</span></span>
<span class="line"><span style="color:#E1E4E8;">        rangeSelection </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">editorChange</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">json</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  blockList.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> json.blocks</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">blockList</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">([])</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> rangeSelection</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">toolConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  image: {</span></span>
<span class="line"><span style="color:#24292E;">    config: {</span></span>
<span class="line"><span style="color:#24292E;">      customUpload: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">uploadByCallback</span><span style="color:#24292E;">({ </span><span style="color:#E36209;">uploadSuccess</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">uploadSuccess</span><span style="color:#24292E;">({ url: </span><span style="color:#032F62;">&#39;https://editorjs.io/_nuxt/api-image_2x.aa04c3de.jpg&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      uploader: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">uploadByFile</span><span style="color:#24292E;">(</span><span style="color:#E36209;">file</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">uploadImage</span><span style="color:#24292E;">(file)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      endpoints: {</span></span>
<span class="line"><span style="color:#24292E;">        byFile: </span><span style="color:#032F62;">&#39;http://localhost:8008/uploadFile&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// Your backend file uploader endpoint</span></span>
<span class="line"><span style="color:#24292E;">        byUrl: </span><span style="color:#032F62;">&#39;http://localhost:8008/fetchUrl&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// Your endpoint that provides uploading by Url</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  link: {</span></span>
<span class="line"><span style="color:#24292E;">    config: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">getSelection</span><span style="color:#24292E;">(</span><span style="color:#E36209;">selection</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        rangeSelection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> selection</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">searchLinkData</span><span style="color:#24292E;">(</span><span style="color:#E36209;">search</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">list</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">          { name: </span><span style="color:#032F62;">&#39;xx1&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;https://baidu.com&#39;</span><span style="color:#24292E;">, description: </span><span style="color:#032F62;">&#39;链接描述&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">          { name: </span><span style="color:#032F62;">&#39;xx2&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;https://baidu.com&#39;</span><span style="color:#24292E;">, description: </span><span style="color:#032F62;">&#39;链接描述&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">          { name: </span><span style="color:#032F62;">&#39;xx3&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;https://baidu.com&#39;</span><span style="color:#24292E;">, description: </span><span style="color:#032F62;">&#39;链接描述&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> list.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item.name.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(search))</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">          items: result,</span></span>
<span class="line"><span style="color:#24292E;">          success: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 解决点击链接后，切换内部工具栏不能选中</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onInitialized</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">editor</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  editorInstance.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> editor</span></span>
<span class="line"><span style="color:#24292E;">  editor.state.editorjs.isReady.</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.ce-inline-toolbar__buttons&#39;</span><span style="color:#24292E;">)?.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">ev</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> dataSet </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ev.target.dataset</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { target } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ev</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">dataSet.tool </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> target) {</span></span>
<span class="line"><span style="color:#24292E;">        dataSet </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> target.parentNode.dataset</span></span>
<span class="line"><span style="color:#24292E;">        target </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> target.parentNode</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (rangeSelection </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;link&#39;</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(dataSet.tool)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">rangeSelection</span><span style="color:#24292E;">?.()</span></span>
<span class="line"><span style="color:#24292E;">        rangeSelection </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">editorChange</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">json</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  blockList.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> json.blocks</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,9),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{u as __pageData,g as default};
