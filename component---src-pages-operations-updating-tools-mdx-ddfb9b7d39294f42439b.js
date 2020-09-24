(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{KhK9:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));var o,r=n("wx14"),a=n("zLVn"),s=(n("q1tI"),n("7ljp")),i=n("013z"),c=(n("qKvR"),{}),l=(o="InlineNotification",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}),b={_frontmatter:c},p=i.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)(p,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In Cloud environments, all the components of the platform must be up-to-date because of the often short maintenance cycles."),Object(s.b)("h2",null,"Kubernetes"),Object(s.b)("p",null,"The Kubernetes project gets minor releases approximately every three months, and it maintains only the three most recent minor releases. This is reflected in the IBM® Cloud Kubernetes Service (IKS) deprecation cycle."),Object(s.b)(l,{mdxType:"InlineNotification"},Object(s.b)("p",null,"Find out more about the Kubernetes project release cycle in ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/setup/release/version-skew-policy/"}),"Kubernetes version and version skew support"),"."),Object(s.b)("p",null,"Find out more about the IBM Cloud Kubernetes Service release and support cycle in ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-cs_versions"}),"IBM Cloud Docs"),".")),Object(s.b)("p",null,"Managed Kubernetes services like IKS have a hands-off upgrade process, whereby the upgrade is performed with the click of a button.\nBefore upgrading, review all the release notes between the source and target versions because Kubernetes features can change over time."),Object(s.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Warning:")," Kubernetes upgrades cannot be rolled back. Always make sure to do the upgrade on a development cluster before proceeding to higher environments.")),Object(s.b)("p",null,"Alongside the upgrade of the Kubernetes service, ensure you upgrade any pipelines and developer tools with a compatible version of ",Object(s.b)("inlineCode",{parentName:"p"},"kubectl"),". The command-line tool must be within one minor version (older or newer) of the Kubernetes service."),Object(s.b)("h2",null,"Helm"),Object(s.b)("p",null,"Starting with Helm v3, there is no server-side component, so the process of upgrading the command-line tool is a case of replacing the binary.\nAs with any software, make sure to review the Helm ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/helm/helm/releases"}),"Release Notes")," before upgrading."),Object(s.b)("h2",null,"Middleware components"),Object(s.b)("p",null,"Because of the immutable nature of containers, when the application middleware (for example, IBM® WebSphere® Liberty) needs to be updated, new application images must be built upon a new base image.\nThe new images should then be promoted throughout the software development lifecycle using the methods outlined in ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/spm-kubernetes/operations/updating_curam"}),"Updating SPM Deployment"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-operations-updating-tools-mdx-ddfb9b7d39294f42439b.js.map