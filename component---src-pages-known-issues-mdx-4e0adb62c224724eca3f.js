(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{qqAJ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));var o=n("wx14"),a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("013z"),s=(n("qKvR"),{}),b={_frontmatter:s},c=r.a;function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Some issues might require product changes to resolve them."),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},Object(i.b)("inlineCode",{parentName:"strong"},"minikube dashboard")," command on Red Hat")),Object(i.b)("p",null,"When you follow the steps “Kubernetes dashboard” in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/spm-kubernetes/runtime/interrogate_runtime"}),"Monitoring the application"),", the ",Object(i.b)("inlineCode",{parentName:"p"},"minikube dashboard")," command might not work on Red Hat operating systems.\nFor more information, see ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/kubernetes/minikube/issues/5815"}),"Minikube issue 5815"),"."),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"Using Helm on Red Hat")),Object(i.b)("p",null,"When you use Helm on Red Hat, you might have to use the Linux® ",Object(i.b)("inlineCode",{parentName:"p"},"yum")," command to install the ",Object(i.b)("inlineCode",{parentName:"p"},"socat")," utility. Otherwise, Tiller does not work properly."),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"“Context Root Not Found” error on the SPM home page, BIRT, or caseload summary pages")),Object(i.b)("p",null,"The “Context Root Not Found” error occurs because the deployment does not install the BIRT application."),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"The logs are filled by repetitions of the ICWWKS4001I message")),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"[1/22/19 8:48:18:272 GMT] 000000ba com.ibm.ws.security.token.internal.TokenManagerImpl ICWWKS4001I: The security token cannot be validated. This can be for the following reasons:\n1. The security token was generated on another server using different keys.\n2. The token configuration or the security keys of the token service that created the token has been changed.\n3. The token service that created the token is no longer available.\n")),Object(i.b)("p",null,"The root cause is users not clearing the browser cache after the application is redeployed. Users might have old, local cookie files."),Object(i.b)("p",null,"However, after a redeployment or an upgrade, the application does not recognize the cookies that are presented to it by the computer, which causes the error messages in the logs."),Object(i.b)("h3",null,Object(i.b)("strong",{parentName:"h3"},"Limitations when using the Minikube ",Object(i.b)("inlineCode",{parentName:"strong"},"none")," driver")),Object(i.b)("p",null,"There are a number of limitations associated with the Minikube none driver that are documented in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://minikube.sigs.k8s.io/docs/reference/drivers/none/"}),"Minikube documentation"),".\nYou must evaluate the impacts of these limitations for your implementation."),Object(i.b)("p",null,"However, the unavailability of the ",Object(i.b)("inlineCode",{parentName:"p"},"minikube ssh")," command might make it difficult to analyze and resolve problems and issues. For example, switching to the kvm2 driver enables the use of ",Object(i.b)("inlineCode",{parentName:"p"},"minikube ssh")," and resolves issues with the Docker Registry."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-known-issues-mdx-4e0adb62c224724eca3f.js.map