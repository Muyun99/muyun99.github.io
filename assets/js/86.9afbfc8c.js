(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{508:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"关于fps-gflops-以及-params-的解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于fps-gflops-以及-params-的解释"}},[t._v("#")]),t._v(" 关于FPS，GFLOPs 以及 Params 的解释")]),t._v(" "),a("p",[t._v("衡量一个模型是否轻量，常常使用这三个指标：FPS，GFLOPs，Params(M)")]),t._v(" "),a("ul",[a("li",[t._v("FPS: frames per second,即：每秒帧数，用于衡量模型的实时性能")]),t._v(" "),a("li",[t._v("GFLOPs: 是G floating point operations的缩写（s表复数)，即：10亿次浮点运算，用于衡量模型的计算量")]),t._v(" "),a("li",[t._v("Params(M): 是 Parameters，即：参数量，用于衡量模型的复杂度")])]),t._v(" "),a("p",[t._v("其中flops是容易产生歧义的，解释如下，参考 "),a("a",{attrs:{href:"https://www.zhihu.com/question/65305385/answer/451060549",target:"_blank",rel:"noopener noreferrer"}},[t._v("chen liu的回答"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("FLOPS：注意全大写，是floating point operations per second的缩写，意指每秒浮点运算次数，理解为计算速度。是一个"),a("strong",[t._v("衡量硬件性能")]),t._v("的指标。")]),t._v(" "),a("li",[t._v("FLOPs：注意s小写，是floating point operations的缩写（s表复数），意指浮点运算数，理解为计算量。可以用来衡量算法/模型的复杂度。")]),t._v(" "),a("li",[t._v("1 GFLOPs = 10^9 FLOPs 即：10亿次浮点运算")])]),t._v(" "),a("h4",{attrs:{id:"计算模型的参数量和gflops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算模型的参数量和gflops"}},[t._v("#")]),t._v(" 计算模型的参数量和GFLOPS")]),t._v(" "),a("p",[t._v("参考代码：")]),t._v(" "),a("ul",[a("li",[t._v("https://github.com/Lyken17/pytorch-OpCounter")]),t._v(" "),a("li",[t._v("https://github.com/sovrasov/flops-counter.pytorch")])]),t._v(" "),a("h4",{attrs:{id:"如何准确的计算一个模型的fps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何准确的计算一个模型的fps"}},[t._v("#")]),t._v(" 如何准确的计算一个模型的FPS?")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" img_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" img_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("test_loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cuda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("synchronize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    predict"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model_rgb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有待修改")]),t._v("\n    torch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cuda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("synchronize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    end "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntime_sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    time_sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FPS: %f"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time_sum"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);