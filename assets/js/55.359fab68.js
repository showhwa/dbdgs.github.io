(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{644:function(a,t,s){"use strict";s.r(t);var n=s(25),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_44-通配符匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_44-通配符匹配"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://leetcode-cn.com/problems/wildcard-matching",target:"_blank",rel:"nofollow noopener noreferrer"}},[a._v("44. 通配符匹配"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/doocs/leetcode@main/solution/0000-0099/0044.Wildcard%20Matching/README_EN.md",target:"_blank",rel:"nofollow noopener noreferrer"}},[a._v("English Version"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"题目描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[a._v("#")]),a._v(" 题目描述")]),a._v(" "),s("p",[a._v("给定一个字符串 ("),s("code",[a._v("s")]),a._v(") 和一个字符模式 ("),s("code",[a._v("p")]),a._v(") ，实现一个支持 "),s("code",[a._v("'?'")]),a._v(" 和 "),s("code",[a._v("'*'")]),a._v(" 的通配符匹配。")]),a._v(" "),s("pre",[a._v("'?' 可以匹配任何单个字符。\n'*' 可以匹配任意字符串（包括空字符串）。\n")]),a._v(" "),s("p",[a._v("两个字符串"),s("strong",[a._v("完全匹配")]),a._v("才算匹配成功。")]),a._v(" "),s("p",[s("strong",[a._v("说明:")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("s")]),a._v(" 可能为空，且只包含从 "),s("code",[a._v("a-z")]),a._v(" 的小写字母。")]),a._v(" "),s("li",[s("code",[a._v("p")]),a._v(" 可能为空，且只包含从 "),s("code",[a._v("a-z")]),a._v(" 的小写字母，以及字符 "),s("code",[a._v("?")]),a._v(" 和 "),s("code",[a._v("*")]),a._v("。")])]),a._v(" "),s("p",[s("strong",[a._v("示例 1:")])]),a._v(" "),s("pre",[s("strong",[a._v("输入:")]),a._v('\ns = "aa"\np = "a"\n'),s("strong",[a._v("输出:")]),a._v(" false\n"),s("strong",[a._v("解释:")]),a._v(' "a" 无法匹配 "aa" 整个字符串。')]),a._v(" "),s("p",[s("strong",[a._v("示例 2:")])]),a._v(" "),s("pre",[s("strong",[a._v("输入:")]),a._v('\ns = "aa"\np = "*"\n'),s("strong",[a._v("输出:")]),a._v(" true\n"),s("strong",[a._v("解释:")]),a._v(" '*' 可以匹配任意字符串。\n")]),a._v(" "),s("p",[s("strong",[a._v("示例 3:")])]),a._v(" "),s("pre",[s("strong",[a._v("输入:")]),a._v('\ns = "cb"\np = "?a"\n'),s("strong",[a._v("输出:")]),a._v(" false\n"),s("strong",[a._v("解释:")]),a._v(" '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。\n")]),a._v(" "),s("p",[s("strong",[a._v("示例 4:")])]),a._v(" "),s("pre",[s("strong",[a._v("输入:")]),a._v('\ns = "adceb"\np = "*a*b"\n'),s("strong",[a._v("输出:")]),a._v(" true\n"),s("strong",[a._v("解释:")]),a._v(" 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 \"dce\".\n")]),a._v(" "),s("p",[s("strong",[a._v("示例 5:")])]),a._v(" "),s("pre",[s("strong",[a._v("输入:")]),a._v('\ns = "acdcb"\np = "a*c?b"\n'),s("strong",[a._v("输出:")]),a._v(" false")]),a._v(" "),s("h2",{attrs:{id:"解法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[a._v("#")]),a._v(" 解法")]),a._v(" "),s("h3",{attrs:{id:"python3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python3"}},[a._v("#")]),a._v(" "),s("strong",[a._v("Python3")])]),a._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[a._v("#")]),a._v(" "),s("strong",[a._v("Java")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")]),a._v(" "),s("strong",[a._v("...")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);