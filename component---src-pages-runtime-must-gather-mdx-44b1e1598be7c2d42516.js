(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"E/UN":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n("wx14"),l=n("zLVn"),r=(n("q1tI"),n("7ljp")),o=n("013z"),i=(n("qKvR"),{}),b={_frontmatter:i},c=o.a;function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)(c,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Collecting MustGather data for SPM on Kubernetes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#collecting-mustgather-data-for-spm-on-kubernetes"}),"Collecting MustGather data for SPM on Kubernetes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#collecting-mustgather-data"}),"Collecting MustGather data")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#basic-mustgather-information"}),"Basic MustGather information"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#platform-and-version-information"}),"Platform and version information")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#build-systems"}),"Build systems"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#operating-system-and-platform"}),"Operating system and platform")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#spm-and-base-third-party-software-versions"}),"SPM and base third party software versions")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#runtime-systems"}),"Runtime systems"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#operating-systems-and-platforms"}),"Operating systems and platforms")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#kubernetes-and-related-software-versions"}),"Kubernetes and related software versions")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#kubernetes-deployment-information"}),"Kubernetes deployment information"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#verify-helm-chart-correctness"}),"Verify Helm Chart correctness")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#helm-chart-rendering"}),"Helm Chart rendering")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#helm-chart-installation"}),"Helm Chart installation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#verify-helm-chart-installation"}),"Verify Helm Chart installation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#enquiring-a-kubernetes-environment"}),"Enquiring a Kubernetes environment")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#detailed-mustgather-for-logs-and-other-artifacts"}),"Detailed MustGather for logs and other artifacts"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#externalizing-logs-and-artifacts-inside-a-kubernetes-pod"}),"Externalizing logs and artifacts inside a Kubernetes pod")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#minikube-logs"}),"Minikube logs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#stdout-logs-from-pods"}),"stdout logs from pods")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#third-party-software-logs-and-artifacts"}),"Third party software logs and artifacts")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#additional-log-files-and-artifacts"}),"Additional log files and artifacts"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#websphere-liberty-stdout-logs"}),"WebSphere Liberty stdout logs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#websphere-liberty-configuration-information"}),"WebSphere Liberty configuration information")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#mq-logs-and-artifacts"}),"MQ logs and artifacts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#curam-xml-server-logs-and-artifacts"}),"Cúram XML Server logs and artifacts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#curam-batch-logs-and-artifacts"}),"Cúram batch logs and artifacts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#http-server-logs-and-artifacts"}),"HTTP Server logs and artifacts")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#ldap"}),"LDAP"))))),Object(r.b)("h2",null,"Introduction"),Object(r.b)("p",null,"The information laid out in this section details the information needed when raising a support case. Note that not all information detailed is necessary when\nraising an issue on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/IBM/spm-kubernetes/issues"}),"GitHub"),"."),Object(r.b)("p",null,"What information should I collect for issues with IBM Cúram Social Program Management (SPM) in a Kubernetes environment to assist IBM Support with their investigations?"),Object(r.b)("p",null,"First, a comprehensive description of the problem along with answers to the following questions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Can you recreate the issue and provide the steps for IBM Support to do same?"),Object(r.b)("li",{parentName:"ul"},"What is the impact of the issue; for instance, frequency of occurrence and pervasiveness?"),Object(r.b)("li",{parentName:"ul"},"Have you identified any workarounds or mitigations?"),Object(r.b)("li",{parentName:"ul"},"What investigation have you already performed; for example, via the IBM Support site, Google, etc.?")),Object(r.b)("p",null,"Beyond the above you will need to collect general third party software information (for example, versions) and more specific diagnostic, log, and other information for the areas where you are seeing the issue.\nThis general information is described in the sections that follow.\nFor issues with the following third party software you should consult their external MustGather links as appropriate:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ibm.com/support/pages/collecting-data-c%C3%BAram-social-program-management-issues"}),"SPM")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ibm.com/support/pages/mustgather-read-first-websphere-application-server"}),"Liberty")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ibm.com/support/pages/collecting-data-read-first-db2-linux-unix-and-windows-products"}),"Db2")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.ibm.com/support/pages/read-first-collect-ibm-mq-mustgather-data-linux-unix-windows-and-ibm-i"}),"MQ"))),Object(r.b)("p",null,"The following sections describe how to gather information specific to SPM running on Kubernetes and provide information relating to where logs and traces reside relating to the MustGather."),Object(r.b)("h2",null,"Collecting MustGather data"),Object(r.b)("p",null,"In general:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Do not provide any unanonymized data or information."),Object(r.b)("li",{parentName:"ul"},"Save all output to text files or files of appropriate formats. Include the command that created the output file."),Object(r.b)("li",{parentName:"ul"},"Logs and other artifacts can only be obtained from a Kubernetes pod if the pod is running; the two exceptions are:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"stdout is still available via ",Object(r.b)("inlineCode",{parentName:"li"},"kubectl logs")," (see below for detail) even if the pod is in a non-running state such as completed"),Object(r.b)("li",{parentName:"ul"},"logs (see below) that are stored persistently are available over the lifetime of that storage medium"))),Object(r.b)("li",{parentName:"ul"},"Regarding command examples that follow:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"In commands with variable information, such as namespaces, these are represented below by angle brackets, which you must replace."),Object(r.b)("li",{parentName:"ul"},"Commands where additional options are possible are indicated by an ellipses: …")))),Object(r.b)("h2",null,"Basic MustGather information"),Object(r.b)("p",null,"The sections that follow identify basic information that should be obtained for any issue.\nHowever, you only need to follow the sections insofar as they apply to the issue you are encountering.\nFor instance, if you are having a problem building then deployment or runtime information would not apply."),Object(r.b)("h3",null,"Platform and version information"),Object(r.b)("p",null,"This section identifies the commands to use to obtain platform and version information.\nBecause there are many layers of software and interdependencies the following reflects only the most important, basic information."),Object(r.b)("h2",null,"Build systems"),Object(r.b)("h3",null,"Operating system and platform"),Object(r.b)("p",null,"Include this information for the relevant platform where you build Cúram SPM."),Object(r.b)("p",null,"On most systems the following command provides basic platform and operating system information:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"uname -a\n")),Object(r.b)("h3",null,"SPM and base third party software versions"),Object(r.b)("p",null,"In a SPM environment the Ant ",Object(r.b)("inlineCode",{parentName:"p"},"configreport")," target includes the following versions in its generated zip file:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"SPM version -  available in the ",Object(r.b)("inlineCode",{parentName:"li"},"Installerlogs/Installhistory.txt")," file within the resulting ",Object(r.b)("inlineCode",{parentName:"li"},"$SERVER_DIR/config_report.zip")," file"),Object(r.b)("li",{parentName:"ul"},"Inside the ConfigReporter*.log file of the config folder within the resulting ",Object(r.b)("inlineCode",{parentName:"li"},"$SERVER_DIR/config_report.zip")," file you will find the:"),Object(r.b)("li",{parentName:"ul"},"Java version",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Application server version"),Object(r.b)("li",{parentName:"ul"},"Database version"),Object(r.b)("li",{parentName:"ul"},"Ant version")))),Object(r.b)("p",null,"To generate the ",Object(r.b)("inlineCode",{parentName:"p"},"$SERVER_DIR/config_report.zip")," file run the Ant ",Object(r.b)("inlineCode",{parentName:"p"},"configreport")," target:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd $SERVER_DIR\n./build.sh configreport\n")),Object(r.b)("p",null,"Please provide the ",Object(r.b)("inlineCode",{parentName:"p"},"config_report.zip")," file."),Object(r.b)("h2",null,"Runtime systems"),Object(r.b)("h3",null,"Operating systems and platforms"),Object(r.b)("p",null,"Include this information for all relevant platforms used for deployment, where you run the IBM Cloud CLI or Minikube."),Object(r.b)("p",null,"On most systems the following command provides basic platform and operating system information:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"uname -a\n")),Object(r.b)("h3",null,"Kubernetes and related software versions"),Object(r.b)("p",null,"The following commands display the relevant versions for Docker, Helm, the IBM Cloud CLI (IKS), and Kubernetes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"  docker version # Provides version information for the Docker client and server\n  docker info    # Provides general runtime information about Docker\n\n  helm version   # Provides Helm version information\n\n  # Depending on your environment, obtain the appropriate Kubernetes version information:\n  minikube version   # If applicable\n  ibmcloud version   # If applicable (IKS)\n  oc version         # If applicable (CRC)\n  kubectl version    # Applies to Minikube, IKS, and CRC environments\n")),Object(r.b)("p",null,"For Helm use the command appropriate to your Helm version to list the deployments in the environment, which provides the release and chart names needed in later Helm commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"helm list -a --namespace <name_space>\n")),Object(r.b)("h2",null,"Kubernetes deployment information"),Object(r.b)("p",null,"For deployments, gather information relevant or appropriate to your environment and the issue faced."),Object(r.b)("h3",null,"Verify Helm Chart correctness"),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"helm lint")," command to verify the correctness of your Helm Charts (prior to installation), for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd $SPM_HOME/helm-charts/spm\nhelm lint .\n")),Object(r.b)("p",null,"You should receive successful output from the ",Object(r.b)("inlineCode",{parentName:"p"},"helm lint")," command like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"==> Linting .\nLint OK\n\n1 chart(s) linted, no failures\n")),Object(r.b)("p",null,"If you encounter any errors, correct these, and recreate your issue."),Object(r.b)("h3",null,"Helm Chart rendering"),Object(r.b)("p",null,"Running the ",Object(r.b)("inlineCode",{parentName:"p"},"helm template")," command processes the chart and generates output similar to what would be generated during deployment;\nhowever, the ",Object(r.b)("inlineCode",{parentName:"p"},"helm install")," command (see below) provides additional information; notably overrides provided via the install.\nSo, where possible, the output from ",Object(r.b)("inlineCode",{parentName:"p"},"helm install")," is preferable to that of ",Object(r.b)("inlineCode",{parentName:"p"},"helm template"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"helm template <release_name> <chart_name> ...\n")),Object(r.b)("p",null,"Check the output to verify that the expected values appear as intended."),Object(r.b)("h3",null,"Helm Chart installation"),Object(r.b)("p",null,"If you encounter errors when installing Helm Charts use the ",Object(r.b)("inlineCode",{parentName:"p"},"helm install")," command with the following options to generate additional information"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--debug")," - checks the generated manifests of a release without installing the chart"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"--dry-run")," - produces output similar to ",Object(r.b)("inlineCode",{parentName:"li"},"helm template")," but additionally executes the secrets and verifies the objects")),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"helm install <release_name> <chart_name> --debug --dry-run ...\n")),Object(r.b)("h3",null,"Verify Helm Chart installation"),Object(r.b)("p",null,"The following command provides more information about what has been deployed or is running in Kubernetes."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"helm get all")," command provides information equivalent to ",Object(r.b)("inlineCode",{parentName:"p"},"helm install --debug --dry-run"),". For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"helm get all <release-name> ...\n")),Object(r.b)("h3",null,"Enquiring a Kubernetes environment"),Object(r.b)("p",null,"If running in a Minikube environment use the following command to confirm its status:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"minikube status\n")),Object(r.b)("p",null,"Use the following commands to get information about the running Kubernetes environment."),Object(r.b)("p",null,"Display basic information about the cluster configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl config view --namespace <name_space> ...\n")),Object(r.b)("p",null,"Display basic information about the nodes and pods in the cluster:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get nodes -o wide --namespace <name_space> ...\nkubectl get pods -o wide --namespace <name_space> ...\n")),Object(r.b)("p",null,"For each of the pods displayed by the ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl get pods")," command use the pod name as input to the following command to get more detailed information about that pod, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe pod <pod_name> --namespace <name_space> ...\n")),Object(r.b)("p",null,"A convenient way to run the above command for all the pods in a namespace:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"mkdir pod\npods=`kubectl get pods -o name --namespace <name_space>`\nfor p in $pods ; do kubectl describe $p --namespace <name_space> > $p.txt ; done\n")),Object(r.b)("p",null,"The results will be in the ",Object(r.b)("inlineCode",{parentName:"p"},"pod")," folder created above."),Object(r.b)("h2",null,"Detailed MustGather for logs and other artifacts"),Object(r.b)("p",null,"The following sections identify how to obtain logs and artifacts for specific areas of Kubernetes."),Object(r.b)("h3",null,"Externalizing logs and artifacts inside a Kubernetes pod"),Object(r.b)("p",null,"Externalizing logs and artifacts from a Kubernetes pod varies by the type of pod.\nThe sections that follow identify locations for this information.\nThe ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#cp"}),"kubectl command reference")," gives several examples of how to externalize files from within a pod, such as:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl cp <name_space>/<pod_name>:/logs /tmp/logs\nkubectl exec -n <name_space> <pod_name> -- tar cf - /logs | tar xf - -C /tmp\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Both of the above command formats produce the following spurious, benign error which you can ignore:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"tar: Removing leading `/' from member names\n")),Object(r.b)("h3",null,"Minikube logs"),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"minikube logs")," command to obtain logs for the Minikube environment."),Object(r.b)("p",null,"You can set the logging level when starting Minikube via the ",Object(r.b)("inlineCode",{parentName:"p"},"--v")," option of the ",Object(r.b)("inlineCode",{parentName:"p"},"minikube start")," command.\nFor instance, and to conveniently save the output at the same time:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"minikube start --alsologtostderr --v=3 2>&1 | tee /tmp/minikube-start.log\n")),Object(r.b)("p",null,"Noting that the log output at startup differs from the output from the runtime log content via ",Object(r.b)("inlineCode",{parentName:"p"},"minikube logs"),"."),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://minikube.sigs.k8s.io/docs/"}),"Minikube documentation")," for more information."),Object(r.b)("h3",null,"stdout logs from pods"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl logs")," provides the stdout logs for a specified Kubernetes pod; so the log data provided is specific to the type of pod or software running within it.\nFor instance, if a pod is running WebSphere Liberty this command provides the equivalent of the contents of the WebSphere Liberty ",Object(r.b)("inlineCode",{parentName:"p"},"console.log")," file\nand for other pods will provide stdout log output specific to that pod’s context; for instance MQ, Cúram XML Server, or Cúram batch."),Object(r.b)("p",null,"The command has various options, such as ",Object(r.b)("inlineCode",{parentName:"p"},"--follow"),", ",Object(r.b)("inlineCode",{parentName:"p"},"--tail"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"--since")," to control and display the log output.\nSee the ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl help logs")," command for option details."),Object(r.b)("h3",null,"Third party software logs and artifacts"),Object(r.b)("p",null,"Beyond basic stdout logging from a pod there may be additional logging or artifacts needed for investigating an issue.\nThese logs and artifacts will be available within the pod’s Docker file system or; additionally, in the case of IKS cloud object storage, in the persistent storage location you specified in\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/spm-kubernetes/supporting-infrastructure/COS"}),"Cloud Object Storage"),"."),Object(r.b)("p",null,"Further, the specific logs, artifacts, and their locations vary depending on the software running within the pod."),Object(r.b)("p",null,"The following sections identify these various locations."),Object(r.b)("h2",null,"Additional log files and artifacts"),Object(r.b)("h3",null,"WebSphere Liberty stdout logs"),Object(r.b)("p",null,"WebSphere Liberty pods are identified by the pod naming pattern beginning with: ",Object(r.b)("inlineCode",{parentName:"p"},"<helm_release_name>-apps-")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<helm_release_name>-uawebapp-"),"."),Object(r.b)("p",null,"Thus, if your Helm release was named “purpleclown” you would find pod names like these from a ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl get pods")," command:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purpleclown-apps-curam-consumer-7c578b9b59-t487n")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purpleclown-apps-curam-producer-6794fc9b94-4srxr")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purpleclown-apps-rest-producer-6858d55bd-x6z6s")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purpleclown-apps-rest-consumer-5567ddc4cd-qpwp7")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purpleclown-uawebapp-54b56d5866-2mnk5"))),Object(r.b)("p",null,"where the number of pods may vary depending on the applications deployed and the number of replicas specified."),Object(r.b)("p",null,"The default log location for WebSphere Liberty is the ",Object(r.b)("inlineCode",{parentName:"p"},"/logs")," folder of the pod’s file system and, for example, can be accessed with the following command"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl exec --namespace <name_space> -it <pod_name> -- ls -l /logs\n")),Object(r.b)("p",null,"which would produce output like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"-rw-r----- 1 default root 62334 Apr 14 06:01 messages.log\n-rw-r--r-- 1 default root  2134 Mar 19 06:44 messages_20.04.14_06.00.47.0.log\n-rw-r----- 1 default root   973 Apr 14 06:00 trace.log\n")),Object(r.b)("p",null,"When using IKS cloud object storage the WebSphere Liberty logs, JVM dumps and garbage collection logs, and Cúram JMX statistics are symbolically linked to the pod’s file system in ",Object(r.b)("inlineCode",{parentName:"p"},"/tmp/logs")," and available in your COS bucket."),Object(r.b)("h3",null,"WebSphere Liberty configuration information"),Object(r.b)("p",null,"WebSphere Liberty configuration information can be found in the pod’s file system in ",Object(r.b)("inlineCode",{parentName:"p"},"/liberty/wlp/usr/servers/defaultServer"),", which contains:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"server.xml\njvm.options\nserver.env\nbootstrap.properties\nadc_conf/\n")),Object(r.b)("p",null,"The WebSphere Liberty ",Object(r.b)("inlineCode",{parentName:"p"},"server package")," command can be used to zip up the server; but, the logs folder, being stored separately, must be handled directly from the ",Object(r.b)("inlineCode",{parentName:"p"},"/logs")," folder (see above)."),Object(r.b)("h3",null,"MQ logs and artifacts"),Object(r.b)("p",null,"MQ pods are identified by the pod naming pattern beginning with: ",Object(r.b)("inlineCode",{parentName:"p"},"<helm_release_name>-mqserverapps-"),"."),Object(r.b)("p",null,"So, if your Helm release was named “purpleclown” you would find pod names like the following from a ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl get pods")," command:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purpleclown-mqserver-curam-557d64c76-7sm8r")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purpleclown-mqserver-rest-dbb994dc8-4p5cv"))),Object(r.b)("p",null,"where the number of pods may vary depending on the Cúram SPM applications deployed."),Object(r.b)("p",null,"The location of MQ logs is inside the MQ pods is as documented in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.1.0/com.ibm.mq.tro.doc/q039570_.htm"}),"MQ Knowledge Center"),".\nYou can interrogate the various log, error, and trace locations identified in the MQ Knowledge Center (and its MustGather) by accessing the MQ pod’s shell; for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl exec --namespace <name_space> -it <mq_pod_name> -- /bin/bash\n")),Object(r.b)("h3",null,"Cúram XML Server logs and artifacts"),Object(r.b)("p",null,"Cúram XML Server pods are identified by the pod naming pattern beginning with: ",Object(r.b)("inlineCode",{parentName:"p"},"<helm_release_name>-xmlserver-"),"."),Object(r.b)("p",null,"So, if your Helm release was named “purpleclown” you would find pods named like the following from a ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl get pods")," command:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purpleclown-xmlserver-86b588c784-z76mz"))),Object(r.b)("p",null,"where the number of pods may vary depending on the number of replicas specified."),Object(r.b)("p",null,"Using the ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl exec")," command as illustrated will place you into the default XML Server directory ",Object(r.b)("inlineCode",{parentName:"p"},"/opt/ibm/Curam/xmlserver"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl exec --namespace <name_space> -it <xmlserver_pod_name> -- /bin/bash\n")),Object(r.b)("p",null,"The log file in ",Object(r.b)("inlineCode",{parentName:"p"},"/opt/ibm/Curam/xmlserver/tmp/xmlserver.log")," is the same as the stdout produced by the ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl logs")," command."),Object(r.b)("p",null,"There are additional XML Server tracing and logging options identified in\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.content.doc/XMLInfrastructure/c_XMLINF_Server1ConfiguringXmlServer1.html"}),"Configuring the XML server"),",\nbut gathering this data is beyond the scope of this document."),Object(r.b)("h3",null,"Cúram batch logs and artifacts"),Object(r.b)("p",null,"Cúram batch pods are identified by the pod naming pattern beginning with: ",Object(r.b)("inlineCode",{parentName:"p"},"<helm_release_name>-batch-"),"."),Object(r.b)("p",null,"So, if your Helm release was named “purpleclown” you would find pods named like the following from a kubectl get pods command:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purpleclown-batch-1587036600-9rrnw"))),Object(r.b)("p",null,"where the number of pods may vary depending on the number of replicas specified."),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"kubctl logs")," command to view the batch pod’s stdout."),Object(r.b)("h3",null,"HTTP Server logs and artifacts"),Object(r.b)("p",null,"The Apache HTTP Server is only used for hosting SPM static content this information would only be of interest for issues relating specifically to static content."),Object(r.b)("p",null,"HTTP Server pods are identified by the pod naming pattern beginning with: ",Object(r.b)("inlineCode",{parentName:"p"},"<helm_release_name>-web-"),"."),Object(r.b)("p",null,"So, if your Helm release was named “purpleclown” you would find pods named like the following from a ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl get pods")," command:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purpleclown-web-5c9cf5d868-ncdqk"))),Object(r.b)("p",null,"where the number of pods may vary depending on the number of replicas specified."),Object(r.b)("p",null,"For these pods the relevant log files can be found within the ",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/httpd")," folder of the pod’s file system.\nFor instance:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl exec --namespace <name_space> -it <pod_name> -- ls -l /var/log/httpd/error_log /var/log/httpd/access_log\n")),Object(r.b)("p",null,"would show the relevant logs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"-rw-r--r-- 1 default root    7826 Jul 28 09:32 /var/log/httpd/access_log\n-rw-r--r-- 1 default root    3297 Jul 28 09:25 /var/log/httpd/error_log\n")),Object(r.b)("h3",null,"LDAP"),Object(r.b)("p",null,"LDAP pods are identified by the pod naming pattern beginning with: ",Object(r.b)("inlineCode",{parentName:"p"},"<helm_release_name>-openldap-"),"."),Object(r.b)("p",null,"So, if your Helm release was named “purpleclown” you would find pods named like the following from a ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl get pods")," command:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"purpleclown-openldap-7b4b5855cc-b9j5z"))),Object(r.b)("p",null,"where the number of pods may vary depending on the number of replicas specified."),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"kubctl logs")," command to view the LDAP pod’s stdout."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-runtime-must-gather-mdx-44b1e1598be7c2d42516.js.map