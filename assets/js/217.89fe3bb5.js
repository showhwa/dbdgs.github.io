(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{776:function(e,s,t){"use strict";t.r(s);var r=t(21),v=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_207-课程表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_207-课程表"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://leetcode-cn.com/problems/course-schedule",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("207. 课程表"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0207.Course%20Schedule/README_EN.md",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("English Version"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[e._v("#")]),e._v(" 题目描述")]),e._v(" "),t("p",[e._v("你这个学期必须选修 "),t("code",[e._v("numCourses")]),e._v(" 门课程，记为 "),t("code",[e._v("0")]),e._v(" 到 "),t("code",[e._v("numCourses - 1")]),e._v(" 。")]),e._v(" "),t("p",[e._v("在选修某些课程之前需要一些先修课程。 先修课程按数组 "),t("code",[e._v("prerequisites")]),e._v(" 给出，其中 "),t("code",[e._v("prerequisites[i] = [a"),t("sub",[e._v("i")]),e._v(", b"),t("sub",[e._v("i")]),e._v("]")]),e._v(" ，表示如果要学习课程 "),t("code",[e._v("a"),t("sub",[e._v("i")])]),e._v(" 则 "),t("strong",[e._v("必须")]),e._v(" 先学习课程  "),t("code",[e._v("b"),t("sub",[e._v("i")])]),t("sub"),e._v("。")]),e._v(" "),t("ul",[t("li",[e._v("例如，先修课程对 "),t("code",[e._v("[0, 1]")]),e._v(" 表示：想要学习课程 "),t("code",[e._v("0")]),e._v(" ，你需要先完成课程 "),t("code",[e._v("1")]),e._v(" 。")])]),e._v(" "),t("p",[e._v("请你判断是否可能完成所有课程的学习？如果可以，返回 "),t("code",[e._v("true")]),e._v(" ；否则，返回 "),t("code",[e._v("false")]),e._v(" 。")]),e._v(" "),t("p"),e._v(" "),t("p",[t("strong",[e._v("示例 1：")])]),e._v(" "),t("pre",[t("strong",[e._v("输入：")]),e._v("numCourses = 2, prerequisites = [[1,0]]\n"),t("strong",[e._v("输出：")]),e._v("true\n"),t("strong",[e._v("解释：")]),e._v("总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。")]),e._v(" "),t("p",[t("strong",[e._v("示例 2：")])]),e._v(" "),t("pre",[t("strong",[e._v("输入：")]),e._v("numCourses = 2, prerequisites = [[1,0],[0,1]]\n"),t("strong",[e._v("输出：")]),e._v("false\n"),t("strong",[e._v("解释：")]),e._v("总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。")]),e._v(" "),t("p"),e._v(" "),t("p",[t("strong",[e._v("提示：")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("1 <= numCourses <= 10"),t("sup",[e._v("5")])])]),e._v(" "),t("li",[t("code",[e._v("0 <= prerequisites.length <= 5000")])]),e._v(" "),t("li",[t("code",[e._v("prerequisites[i].length == 2")])]),e._v(" "),t("li",[t("code",[e._v("0 <= a"),t("sub",[e._v("i")]),e._v(", b"),t("sub",[e._v("i")]),e._v(" < numCourses")])]),e._v(" "),t("li",[t("code",[e._v("prerequisites[i]")]),e._v(" 中的所有课程对 "),t("strong",[e._v("互不相同")])])]),e._v(" "),t("h2",{attrs:{id:"解法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[e._v("#")]),e._v(" 解法")]),e._v(" "),t("h3",{attrs:{id:"python3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python3"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Python3")])]),e._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"java"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Java")])]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")]),e._v(" "),t("strong",[e._v("...")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}),[],!1,null,null,null);s.default=v.exports}}]);