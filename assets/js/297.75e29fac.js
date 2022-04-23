(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{884:function(t,s,e){"use strict";e.r(s);var a=e(25),v=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_286-墙与门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_286-墙与门"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://leetcode-cn.com/problems/walls-and-gates",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("286. 墙与门"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0286.Walls%20and%20Gates/README_EN.md",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("English Version"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"题目描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),e("p",[t._v("你被给定一个 "),e("code",[t._v("m × n")]),t._v(" 的二维网格 "),e("code",[t._v("rooms")]),t._v(" ，网格中有以下三种可能的初始化值：")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("-1")]),t._v(" 表示墙或是障碍物")]),t._v(" "),e("li",[e("code",[t._v("0")]),t._v(" 表示一扇门")]),t._v(" "),e("li",[e("code",[t._v("INF")]),t._v(" 无限表示一个空的房间。然后，我们用 "),e("code",[t._v("2"),e("sup",[t._v("31")]),t._v(" - 1 = 2147483647")]),t._v(" 代表 "),e("code",[t._v("INF")]),t._v("。你可以认为通往门的距离总是小于 "),e("code",[t._v("2147483647")]),t._v(" 的。")])]),t._v(" "),e("p",[t._v("你要给每个空房间位上填上该房间到 "),e("strong",[t._v("最近门的距离")]),t._v(" ，如果无法到达门，则填 "),e("code",[t._v("INF")]),t._v(" 即可。")]),t._v(" "),e("p"),t._v(" "),e("p",[e("strong",[t._v("示例 1：")])]),t._v(" "),e("img",{staticStyle:{width:"500px",height:"223px"},attrs:{alt:"",src:"https://cdn.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0286.Walls%20and%20Gates/images/grid.jpg"}}),t._v(" "),e("pre",[e("strong",[t._v("输入：")]),t._v("rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]\n"),e("strong",[t._v("输出：")]),t._v("[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]\n")]),t._v(" "),e("p",[e("strong",[t._v("示例 2：")])]),t._v(" "),e("pre",[e("strong",[t._v("输入：")]),t._v("rooms = [[-1]]\n"),e("strong",[t._v("输出：")]),t._v("[[-1]]\n")]),t._v(" "),e("p",[e("strong",[t._v("示例 3：")])]),t._v(" "),e("pre",[e("strong",[t._v("输入：")]),t._v("rooms = [[2147483647]]\n"),e("strong",[t._v("输出：")]),t._v("[[2147483647]]\n")]),t._v(" "),e("p",[e("strong",[t._v("示例 4：")])]),t._v(" "),e("pre",[e("strong",[t._v("输入：")]),t._v("rooms = [[0]]\n"),e("strong",[t._v("输出：")]),t._v("[[0]]\n")]),t._v(" "),e("p"),t._v(" "),e("p",[e("strong",[t._v("提示：")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("m == rooms.length")])]),t._v(" "),e("li",[e("code",[t._v("n == rooms[i].length")])]),t._v(" "),e("li",[e("code",[t._v("1 <= m, n <= 250")])]),t._v(" "),e("li",[e("code",[t._v("rooms[i][j]")]),t._v(" 是 "),e("code",[t._v("-1")]),t._v("、"),e("code",[t._v("0")]),t._v(" 或 "),e("code",[t._v("2"),e("sup",[t._v("31")]),t._v(" - 1")])])]),t._v(" "),e("h2",{attrs:{id:"解法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),e("h3",{attrs:{id:"python3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python3"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Python3")])]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Java")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),e("strong",[t._v("...")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=v.exports}}]);