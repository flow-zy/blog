import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as t,b as e,a as n,f as i}from"./app-BGAn4IFu.js";const l={},p=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"此部分在初步学习小程序的时候直接略过即可。")],-1),c=n("p",null,"WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。",-1),o=n("ol",null,[n("li",null,"WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。"),n("li",null,"WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。"),n("li",null,"WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。"),n("li",null,"WXS 函数不能作为组件的事件回调。"),n("li",null,"由于运行环境的差异，在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 Android 设备上二者运行效率无差异。")],-1),r=i(`<p>以下是一些使用 WXS 的简单示例，要完整了解 WXS 语法，请参考 WXS 语法参考。</p><h2 id="页面渲染" tabindex="-1"><a class="header-anchor" href="#页面渲染"><span>页面渲染</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
const msg = &quot;hello world&quot;;

module.exports.message = msg;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- &lt;view&gt; {{m1.message}} &lt;/view&gt; --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面输出:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理"><span>数据处理</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// page.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--wxml--&gt;</span>
<span class="token comment">&lt;!-- 下面的 getMax 函数，接受一个数组，且返回数组中最大的元素的值 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
const getMax = array =&gt; {
  let max = undefined;
  for (let i = 0; i &lt; array.length; ++i) {
    max = max === undefined ?
      array[i] :
      (max &gt;= array[i] ? max : array[i]);
  }

  return max;
};

module.exports.getMax = getMax;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 调用 wxs 里面的 getMax 函数，参数为 page.js 里面的 array --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span> {{m1.getMax(array)}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面输出:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function u(d,m){return s(),t("div",null,[p,c,o,e(" more "),r])}const k=a(l,[["render",u],["__file","wxs.html.vue"]]),b=JSON.parse('{"path":"/mini-app/guide/view/wxs.html","title":"WXS","lang":"zh-CN","frontmatter":{"title":"WXS","icon":"script","category":"小程序","description":"提示 此部分在初步学习小程序的时候直接略过即可。 WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。 WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。 WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。 WXS 的运行环境和其他 Jav...","head":[["meta",{"property":"og:url","content":"https://github.com/newNotes/mini-app/guide/view/wxs.html"}],["meta",{"property":"og:site_name","content":"ZY 学习笔记"}],["meta",{"property":"og:title","content":"WXS"}],["meta",{"property":"og:description","content":"提示 此部分在初步学习小程序的时候直接略过即可。 WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。 WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。 WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。 WXS 的运行环境和其他 Jav..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:28:05.000Z"}],["meta",{"property":"article:author","content":"flow-zy"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:28:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WXS\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T14:28:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"flow-zy\\",\\"url\\":\\"https://flow-zy.github.io/newNotes/\\"}]}"]]},"headers":[{"level":2,"title":"页面渲染","slug":"页面渲染","link":"#页面渲染","children":[]},{"level":2,"title":"数据处理","slug":"数据处理","link":"#数据处理","children":[]}],"git":{"createdTime":1719152885000,"updatedTime":1719152885000,"contributors":[{"name":"overflow_z","email":"wz19121@eyeah.net","commits":1}]},"readingTime":{"minutes":1.24,"words":373},"filePathRelative":"mini-app/guide/view/wxs.md","localizedDate":"2024年6月23日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>此部分在初步学习小程序的时候直接略过即可。</p>\\n</div>\\n<p>WXS (WeiXin Script) 是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构。</p>\\n<ol>\\n<li>WXS 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行。</li>\\n<li>WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。</li>\\n<li>WXS 的运行环境和其他 JavaScript 代码是隔离的，WXS 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。</li>\\n<li>WXS 函数不能作为组件的事件回调。</li>\\n<li>由于运行环境的差异，在 iOS 设备上小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍。在 Android 设备上二者运行效率无差异。</li>\\n</ol>\\n","autoDesc":true}');export{k as comp,b as data};