(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{698:function(e,t,r){"use strict";r.r(t);var o=r(21),v=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_127-单词接龙"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_127-单词接龙"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://leetcode-cn.com/problems/word-ladder",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("127. 单词接龙"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/doocs/leetcode/blob/main/solution/0100-0199/0127.Word%20Ladder/README_EN.md",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("English Version"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"题目描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[e._v("#")]),e._v(" 题目描述")]),e._v(" "),r("p",[e._v("字典 "),r("code",[e._v("wordList")]),e._v(" 中从单词 "),r("code",[e._v("beginWord")]),r("em"),e._v("和 "),r("code",[e._v("endWord")]),e._v(" 的 "),r("strong",[e._v("转换序列 ")]),e._v("是一个按下述规格形成的序列：")]),e._v(" "),r("ul",[r("li",[e._v("序列中第一个单词是 "),r("code",[e._v("beginWord")]),e._v(" 。")]),e._v(" "),r("li",[e._v("序列中最后一个单词是 "),r("code",[e._v("endWord")]),e._v(" 。")]),e._v(" "),r("li",[e._v("每次转换只能改变一个字母。")]),e._v(" "),r("li",[e._v("转换过程中的中间单词必须是字典 "),r("code",[e._v("wordList")]),e._v(" 中的单词。")])]),e._v(" "),r("p",[e._v("给你两个单词"),r("em"),r("code",[e._v("beginWord")]),r("em"),e._v("和 "),r("code",[e._v("endWord")]),e._v(" 和一个字典 "),r("code",[e._v("wordList")]),e._v(" ，找到从 "),r("code",[e._v("beginWord")]),e._v(" 到 "),r("code",[e._v("endWord")]),e._v(" 的 "),r("strong",[e._v("最短转换序列")]),e._v(" 中的 "),r("strong",[e._v("单词数目")]),e._v(" 。如果不存在这样的转换序列，返回 0。")]),e._v(" "),r("p",[r("strong",[e._v("示例 1：")])]),e._v(" "),r("pre",[r("strong",[e._v("输入：")]),e._v('beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]\n'),r("strong",[e._v("输出：")]),e._v("5\n"),r("strong",[e._v("解释：")]),e._v('一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。\n')]),e._v(" "),r("p",[r("strong",[e._v("示例 2：")])]),e._v(" "),r("pre",[r("strong",[e._v("输入：")]),e._v('beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]\n'),r("strong",[e._v("输出：")]),e._v("0\n"),r("strong",[e._v("解释：")]),e._v('endWord "cog" 不在字典中，所以无法进行转换。')]),e._v(" "),r("p"),e._v(" "),r("p",[r("strong",[e._v("提示：")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("1 <= beginWord.length <= 10")])]),e._v(" "),r("li",[r("code",[e._v("endWord.length == beginWord.length")])]),e._v(" "),r("li",[r("code",[e._v("1 <= wordList.length <= 5000")])]),e._v(" "),r("li",[r("code",[e._v("wordList[i].length == beginWord.length")])]),e._v(" "),r("li",[r("code",[e._v("beginWord")]),e._v("、"),r("code",[e._v("endWord")]),e._v(" 和 "),r("code",[e._v("wordList[i]")]),e._v(" 由小写英文字母组成")]),e._v(" "),r("li",[r("code",[e._v("beginWord != endWord")])]),e._v(" "),r("li",[r("code",[e._v("wordList")]),e._v(" 中的所有字符串 "),r("strong",[e._v("互不相同")])])]),e._v(" "),r("h2",{attrs:{id:"解法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[e._v("#")]),e._v(" 解法")]),e._v(" "),r("h3",{attrs:{id:"python3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#python3"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Python3")])]),e._v(" "),r("div",{staticClass:"language-python line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:"java"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[e._v("#")]),e._v(" "),r("strong",[e._v("Java")])]),e._v(" "),r("div",{staticClass:"language-java line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h3",{attrs:{id:""}},[r("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" "),r("strong",[e._v("...")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])])}),[],!1,null,null,null);t.default=v.exports}}]);