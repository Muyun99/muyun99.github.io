(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{552:function(t,a,e){"use strict";e.r(a);var s=e(25),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"a-tutorial-of-transformers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-tutorial-of-transformers"}},[t._v("#")]),t._v(" A Tutorial of Transformers")]),t._v(" "),e("h4",{attrs:{id:"_1、前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、前言"}},[t._v("#")]),t._v(" 1、前言")]),t._v(" "),e("p",[t._v("语言表示学习指的是如何表示语言的语义，发展历程从知识图谱->分布式表示。表示学习将词映射为一个向量，这种向量一般被称为词嵌入（Embeddings）")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210630230310626.png",alt:"image-20210630230310626"}})]),t._v(" "),e("p",[t._v("上下文编码器将上下文编码进词嵌入中，更准确地去体现词的语义。上下文编码器即为 Model 架构的设计，是模型驱动的，而如何基于数据将特征提取得更好，是数据驱动的")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210630230459334.png",alt:"image-20210630230459334"}})]),t._v(" "),e("p",[t._v("这里是机器翻译的一个例子，Decoder是一个自回归模型")]),t._v(" "),e("h4",{attrs:{id:"_2、如何建立远距离的依赖关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、如何建立远距离的依赖关系"}},[t._v("#")]),t._v(" 2、如何建立远距离的依赖关系？")]),t._v(" "),e("p",[t._v("全连接是一个非常简单的方式，但是计算量大以及不够灵活")]),t._v(" "),e("p",[t._v("注意力机制，主要过程有两步")]),t._v(" "),e("ul",[e("li",[t._v("计算注意力分布，并做归一化")]),t._v(" "),e("li",[t._v("对所有的信息进行加权，根据这个注意力分布做输入做期望")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210630231737446.png",alt:"image-20210630231737446"}})]),t._v(" "),e("p",[t._v("如何建模词语之间的依赖关系？上图是一个例子，也被成为 self-attention")]),t._v(" "),e("ul",[e("li",[t._v("如果我们要查询The 的注意力")]),t._v(" "),e("li",[t._v("“The” 这个单词的 Embedding作为q，句子中其他所有词作为v，")]),t._v(" "),e("li",[t._v("将 q 和 v 计算相似度，归一化之后得到权重")]),t._v(" "),e("li",[t._v("最终 “The” 便可以由其他词表示")])]),t._v(" "),e("h4",{attrs:{id:"_3、建模-query-key-value-qkv-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、建模-query-key-value-qkv-model"}},[t._v("#")]),t._v(" 3、建模 Query-Key-Value（QKV）Model")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210630232138507.png",alt:"image-20210630232138507"}})]),t._v(" "),e("p",[t._v("QKV 有三个可学习的矩阵，使得其模型容量更大，可学习能力也更强")]),t._v(" "),e("h4",{attrs:{id:"_4、multi-head-self-attention"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、multi-head-self-attention"}},[t._v("#")]),t._v(" 4、Multi-head Self-Attention")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210630232512864.png",alt:"image-20210630232512864"}})]),t._v(" "),e("p",[t._v("在多个高维空间中去建模他们的关系，类似于卷积中的多通道")]),t._v(" "),e("h4",{attrs:{id:"_5、multi-layer-self-attention"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、multi-layer-self-attention"}},[t._v("#")]),t._v(" 5、Multi-Layer Self-Attention")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210630232637901.png",alt:"image-20210630232637901"}})]),t._v(" "),e("h4",{attrs:{id:"_6、transformer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、transformer"}},[t._v("#")]),t._v(" 6、Transformer")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/image-20210630232923019.png",alt:"image-20210630232923019"}})]),t._v(" "),e("p",[t._v("关键模块：Self-Attention")]),t._v(" "),e("p",[t._v("改进 Self-Attention")]),t._v(" "),e("ul",[e("li",[t._v("传统Self-Attention只和内容相关，和位置没有关系，加入位置信息的编码")]),t._v(" "),e("li",[t._v("Layer Normalization")]),t._v(" "),e("li",[t._v("Skip connection")]),t._v(" "),e("li",[t._v("Position-wise FFN")])]),t._v(" "),e("h4",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料：")]),t._v(" "),e("ul",[e("li",[t._v('Vaswani, Ashish, et al. "Attention is all you need." '),e("em",[t._v("Advances in neural information processing systems")]),t._v(". 2017. "),e("a",{attrs:{href:"https://arxiv.org/abs/1706.03762",target:"_blank",rel:"noopener noreferrer"}},[t._v("arXiv link"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v('Lin, Tianyang, et al. "A Survey of Transformers." '),e("em",[t._v("arXiv preprint arXiv:2106.04554")]),t._v(" (2021). "),e("a",{attrs:{href:"https://arxiv.org/abs/2106.04554",target:"_blank",rel:"noopener noreferrer"}},[t._v("arXiv link"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=i.exports}}]);