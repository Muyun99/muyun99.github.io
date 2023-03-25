(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{594:function(a,t,s){"use strict";s.r(t);var i=s(25),e=Object(i.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"opencv-python-03-彩色空间互转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opencv-python-03-彩色空间互转"}},[a._v("#")]),a._v(" Opencv-Python 03 彩色空间互转")]),a._v(" "),s("h3",{attrs:{id:"_1-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[a._v("#")]),a._v(" 1 简介")]),a._v(" "),s("p",[a._v("颜色空间在数字图像领域是一个基础问题，有一些算法也尝试将图像映射到不同的颜色空间中进行处理。相比RGB，其他颜色空间（例如HSV、HSI）更具可分离性和可操作性，所以很多图像算法需要转换颜色空间，我们也有必要进行学习和掌握")]),a._v(" "),s("h3",{attrs:{id:"_2-算法理论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-算法理论"}},[a._v("#")]),a._v(" 2 算法理论")]),a._v(" "),s("h4",{attrs:{id:"_2-1-rgb-与-灰度图互转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-rgb-与-灰度图互转"}},[a._v("#")]),a._v(" 2.1 RGB 与 灰度图互转")]),a._v(" "),s("p",[a._v("RGB是人眼识别的颜色定义出的空间，克表示大部分颜色。它是最通用的面向硬件的彩色模型。RGB颜色空间基于颜色的加法混色原理，从黑色不断叠加Red，Green，Blue的颜色，最终可以得到白色")]),a._v(" "),s("p",[a._v("对于彩色转灰度，有一个很著名的心理学公式：")]),a._v(" "),s("p",{staticClass:"katex-block"},[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[s("semantics",[s("mrow",[s("mi",[a._v("G")]),s("mi",[a._v("r")]),s("mi",[a._v("a")]),s("mi",[a._v("y")]),s("mo",[a._v("=")]),s("mi",[a._v("R")]),s("mo",[a._v("∗")]),s("mn",[a._v("0.299")]),s("mo",[a._v("+")]),s("mi",[a._v("G")]),s("mo",[a._v("∗")]),s("mn",[a._v("0.587")]),s("mo",[a._v("+")]),s("mi",[a._v("B")]),s("mo",[a._v("∗")]),s("mn",[a._v("0.114")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("Gray = R*0.299 + G*0.587 + B*0.114\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathnormal"},[a._v("G")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[a._v("r")]),s("span",{staticClass:"mord mathnormal"},[a._v("a")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[a._v("y")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[a._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.00773em"}},[a._v("R")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[a._v("∗")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"mord"},[a._v("0.299")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[a._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal"},[a._v("G")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[a._v("∗")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"mord"},[a._v("0.587")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[a._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05017em"}},[a._v("B")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[a._v("∗")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[a._v("0.114")])])])])])]),a._v(" "),s("p",[a._v("直接计算因为是浮点型计算，所以复杂度较高，速度较低。所以我们考虑优化，可以将小数转为整数，除法变为移位，乘法也变为移位（整数计算比浮点型快，移位运算和加减法比乘除法快），但是这种方法也会带来一定的精度损失，我们可以根据实际情况选择需要保留的精度位数。")]),a._v(" "),s("h4",{attrs:{id:"_2-2-rgb-与-hsv互转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-rgb-与-hsv互转"}},[a._v("#")]),a._v(" 2.2 RGB 与 HSV互转")]),a._v(" "),s("p",[a._v("HSV是一种将RGB色彩空间中的点在倒圆锥体中的表示方法。HSV即色相(Hue)、饱和度(Saturation)、明度(Value)，又称HSB(B即Brightness)。色相是色彩的基本属性，就是平常说的颜色的名称，如红色、黄色等。饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取0-100%的数值。明度（V），取0-max(计算机中HSV取值范围和存储的长度有关)。HSV颜色空间可以用一个圆锥空间模型来描述。圆锥的顶点处，V=0，H和S无定义，代表黑色。圆锥的顶面中心处V=max，S=0，H无定义，代表白色。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("H是色彩；")])]),a._v(" "),s("li",[s("p",[a._v("S是深浅， S = 0时，只有灰度；")])]),a._v(" "),s("li",[s("p",[a._v("V是明暗，表示色彩的明亮程度，但与光强无直接联系。")])])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://muyun-blog-pic.oss-cn-shanghai.aliyuncs.com/picgo/20200425221321.png#vwid=257&vhei=361",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"_3-代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码实现"}},[a._v("#")]),a._v(" 3 代码实现")])])}),[],!1,null,null,null);t.default=e.exports}}]);