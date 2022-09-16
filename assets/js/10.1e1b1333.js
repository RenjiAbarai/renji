(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{280:function(a,s,t){"use strict";t.r(s);var e=t(13),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins"}},[a._v("#")]),a._v(" jenkins")]),a._v(" "),s("h2",{attrs:{id:"安装jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装jenkins"}},[a._v("#")]),a._v(" 安装jenkins")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建文件夹/data/jenkins_home 配置一下权限 不然有可能启动失败")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" jenkins "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10086")]),a._v(":8080 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50000")]),a._v(":50000 /\n\t\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /data/jenkins_home:/var/jenkins_home /\n\t\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /etc/localtime:/etc/localtime /\n\t\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_OPTS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Xms1024m -Xmx2048m -XX:PermSize=256m -XX:MaxPermSize=512m"')]),a._v(" /\n\t\t"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root /\n\t\tjenkins/jenkins:lts\n\n")])])]),s("h2",{attrs:{id:"迁移已有的配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迁移已有的配置文件"}},[a._v("#")]),a._v(" 迁移已有的配置文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 迁移步骤为：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1）先关闭新老服务器jenkins，确保迁移时新老机器的jenkins都处于关闭状态。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2）将老服务器jenkins主目录下的config.xml文件以及jobs、users、workspace、plugins四个目录拷贝到新机器的jenkins主目录下。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3）重启新服务器jenkins。")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 老服务执行, targetIp:新服务ip")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 拷贝全部")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ssh -p22"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-avpgolr")]),a._v(" /data/jenkins_home/ root@targetIp:/data/jenkins_home/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ssh -p22"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-avpgolr")]),a._v(" /data/jenkins_home/config.xml root@targetIp:/data/jenkins_home/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ssh -p22"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-avpgolr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--delete")]),a._v(" /data/jenkins_home/users/ root@targetIp:/data/jenkins_home/users/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ssh -p22"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-avpgolr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--delete")]),a._v(" /data/jenkins_home/plugins/ root@targetIp:/data/jenkins_home/plugins/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ssh -p22"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-avpgolr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--delete")]),a._v(" /data/jenkins_home/jobs/ root@targetIp:/data/jenkins_home/jobs/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rsync")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ssh -p22"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-avpgolr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--delete")]),a._v(" /data/jenkins_home/workspace/ root@targetIp:/data/jenkins_home/workspace/\n")])])]),s("h2",{attrs:{id:"批量删除历史构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量删除历史构建"}},[a._v("#")]),a._v(" 批量删除历史构建")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 项目管理 ----》 脚本命令行 ---》放入下面的脚本")]),a._v("\ndef jobName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"QA/cms"')]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 删除的项目名称")]),a._v("\ndef maxNumber "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1200")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 保留的最小编号，意味着小于该编号的构建都将被删除")]),a._v("\nJenkins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getItemByFullName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("jobName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("builds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("findAll "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("number "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<=")]),a._v(" maxNumber\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("each "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);