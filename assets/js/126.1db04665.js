(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{686:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_115-不同的子序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_115-不同的子序列"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://leetcode-cn.com/problems/distinct-subsequences",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("115. 不同的子序列"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0115.Distinct%20Subsequences/README_EN.md",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("English Version"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"题目描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[t._v("#")]),t._v(" 题目描述")]),t._v(" "),e("p",[t._v("给定一个字符串 "),e("code",[t._v("s")]),e("strong"),t._v("和一个字符串 "),e("code",[t._v("t")]),t._v(" ，计算在 "),e("code",[t._v("s")]),t._v(" 的子序列中 "),e("code",[t._v("t")]),t._v(" 出现的个数。")]),t._v(" "),e("p",[t._v("字符串的一个 "),e("strong",[t._v("子序列")]),t._v(" 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"),e("code",[t._v('"ACE"')]),t._v(" 是 "),e("code",[t._v('"ABCDE"')]),t._v(" 的一个子序列，而 "),e("code",[t._v('"AEC"')]),t._v(" 不是）")]),t._v(" "),e("p",[t._v("题目数据保证答案符合 32 位带符号整数范围。")]),t._v(" "),e("p"),t._v(" "),e("p",[e("strong",[t._v("示例 1：")])]),t._v(" "),e("pre",[e("strong",[t._v("输入：")]),t._v('s = "rabbbit", t = "rabbit"'),e("code",[t._v("\n"),e("strong",[t._v("输出")])]),e("strong",[t._v("：")]),e("code",[t._v("3\n")]),e("strong",[t._v("解释：")]),t._v("\n如下图所示, 有 3 种可以从 s 中得到 "),e("code",[t._v('"rabbit" 的方案')]),t._v("。\n(上箭头符号 ^ 表示选取的字母)\n"),e("code",[t._v("rabbbit")]),t._v("\n^^^^ ^^\n"),e("code",[t._v("rabbbit")]),t._v("\n^^ ^^^^\n"),e("code",[t._v("rabbbit")]),t._v("\n^^^ ^^^\n")]),t._v(" "),e("p",[e("strong",[t._v("示例 2：")])]),t._v(" "),e("pre",[e("strong",[t._v("输入：")]),t._v('s = "babgbag", t = "bag"\n'),e("code",[e("strong",[t._v("输出")])]),e("strong",[t._v("：")]),e("code",[t._v("5\n")]),e("strong",[t._v("解释：")]),t._v("\n如下图所示, 有 5 种可以从 s 中得到 "),e("code",[t._v('"bag" 的方案')]),t._v("。 \n(上箭头符号 ^ 表示选取的字母)\n"),e("code",[t._v("babgbag")]),t._v("\n^^ ^\n"),e("code",[t._v("babgbag")]),t._v("\n^^    ^\n"),e("code",[t._v("babgbag")]),t._v("\n^    ^^\n"),e("code",[t._v("babgbag")]),t._v("\n  ^  ^^\n"),e("code",[t._v("babgbag")]),t._v("\n    ^^^")]),t._v(" "),e("p"),t._v(" "),e("p",[e("strong",[t._v("提示：")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("0 <= s.length, t.length <= 1000")])]),t._v(" "),e("li",[e("code",[t._v("s")]),t._v(" 和 "),e("code",[t._v("t")]),t._v(" 由英文字母组成")])]),t._v(" "),e("h2",{attrs:{id:"解法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),e("h3",{attrs:{id:"python3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python3"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Python3")])]),t._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Java")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" "),e("strong",[t._v("...")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);