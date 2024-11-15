(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{319:function(n,t,s){n.exports=s.p+"assets/img/nvm.c5c6bbf4.png"},362:function(n,t,s){"use strict";s.r(t);var a=s(14),e=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"nvm管理node版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm管理node版本"}},[n._v("#")]),n._v(" Nvm管理Node版本")]),n._v(" "),t("h2",{attrs:{id:"windows安装nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows安装nvm"}},[n._v("#")]),n._v(" windows安装nvm")]),n._v(" "),t("p",[n._v("nvm介绍")]),n._v(" "),t("blockquote",[t("p",[n._v("由于node版本变化较大，可能同时有几个项目在开发，每次因版本原因重新装node耗费时间，nvm能管理电脑上的node，方便切换和使用。\nnvm官网"),t("a",{attrs:{href:"https://nvm.uihtm.com/",target:"_blank",rel:"noopener noreferrer"}},[n._v("nvm官网"),t("OutboundLink")],1),n._v(","),t("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[n._v("nvm下载地址"),t("OutboundLink")],1)])]),n._v(" "),t("p",[n._v("容易出问题的地方")]),n._v(" "),t("blockquote",[t("p",[n._v("下载前请删除机器上的node和环境变量。")])]),n._v(" "),t("p",[n._v("nvm use xx.xx.xx不起作用")]),n._v(" "),t("blockquote",[t("p",[n._v("nvm安装完后，可能出现nvm不能正常使用node,原因是请先创建空的nvm文件夹，以及在nvm文件夹下创建node文件夹，然后指定root和path为这两个文件夹即可。")])]),n._v(" "),t("p",[n._v("文件夹结构如下\n"),t("img",{attrs:{src:s(319),alt:"nvm"}})]),n._v(" "),t("h2",{attrs:{id:"nvm命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm命令"}},[n._v("#")]),n._v(" nvm命令")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://nodejs.org/en/download/releases",target:"_blank",rel:"noopener noreferrer"}},[n._v("node版本历史"),t("OutboundLink")],1)]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[n._v("nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("ls")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装lts版本")]),n._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" lts\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装最新版本")]),n._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v(" latest\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 使用稳定版本")]),n._v("\nnvm use lts\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 使用最新版本")]),n._v("\nnvm use latest\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 使用指定版本，安装同理")]),n._v("\nnvm use xx.xx.xx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 查看当前版本")]),n._v("\nnvm current\n")])])]),t("h2",{attrs:{id:"环境变量设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境变量设置"}},[n._v("#")]),n._v(" 环境变量设置")]),n._v(" "),t("p",[n._v("如果是windows机器，尽量配置以下全局位置和环境变量，不然经常找不到命令。\n其实可以注意到，每次nvm切换版本后, nvm/node的版本就被替换成了对应版本")]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("set")]),n._v(" prefix "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"D:'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[n._v("\\n")]),n._v("vm"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[n._v("\\n")]),n._v('ode_global"')]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[n._v("set")]),n._v(" cache "),t("span",{pre:!0,attrs:{class:"token string"}},[n._v('"D:'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[n._v("\\n")]),n._v("vm"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[n._v("\\n")]),n._v('ode_cache"')]),n._v("\n")])])]),t("p",[n._v("用户变量path里加上")]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("nvm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("node_global"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n")])])]),t("p",[n._v("系统变量新增NODE_PATH,不要指向具体版本的,指向node文件夹的就ok")]),n._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[n._v("D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("nvm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("\\")]),n._v("node_modules\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);