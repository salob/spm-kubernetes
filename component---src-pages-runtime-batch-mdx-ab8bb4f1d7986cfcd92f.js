(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{xvVm:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return b}));var o=n("wx14"),c=n("zLVn"),a=(n("q1tI"),n("7ljp")),i=n("013z"),r=(n("qKvR"),{}),d={_frontmatter:r},s=i.a;function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)(s,Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Kubernetes object that is being created by using the code in this repository is a Cron job, which is scheduled to run every 15 minutes.\nTherefore, initially no pod is listed, but a pod is started after 15 minutes and is visible when you run the ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl get pods")," command."),Object(a.b)("p",null,"The pod runs the standard command ",Object(a.b)("inlineCode",{parentName:"p"},"build runbatch")," that is described in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.content.doc/Operations/c_COPSGUIDE_Processes2RunningBatchLauncher1.html"}),"Running the Batch Launcher"),"."),Object(a.b)("p",null,"At the end of the execution, the pod stops but is not destroyed and a new pod is created after another 15 minutes. Access the log by running the ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl logs pod/podname")," command."),Object(a.b)("p",null,"You can delete the pod by running the ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl delete pod/podname")," command."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-runtime-batch-mdx-ab8bb4f1d7986cfcd92f.js.map