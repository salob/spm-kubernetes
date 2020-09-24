(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{p4pE:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return i}));var a,l=t("wx14"),r=t("zLVn"),b=(t("q1tI"),t("7ljp")),m=t("013z"),c=(t("qKvR"),{}),s=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),u={_frontmatter:c},o=m.a;function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(b.b)(o,Object(l.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Social Program Management supports only ",Object(b.b)("strong",{parentName:"p"},"IBM MQ LTS on a VM")," , when running on IKS. The steps below outline how to do this. In this runbook we will outline the steps to create:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.1.0/com.ibm.mq.pro.doc/q003090_.htm"}),"Queues")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.1.0/com.ibm.mq.pro.doc/q003300_.htm"}),"Listeners")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.1.0/com.ibm.mq.pro.doc/q003220_.htm"}),"Channels")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(l.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.1.0/com.ibm.mq.pro.doc/q003320_.htm"}),"Topics"))),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," The MQ version for this runbook verification is  9.1.0 LTS.")),Object(b.b)("p",null,"For the runbook, two standalone VMs were used as MQ nodes."),Object(b.b)("h3",null,"Queue manager names"),Object(b.b)("p",null,"For runbook configuration, the following naming conversion was used throughout the MQ setup: QM_NamingConvention_AppName. This must be unique, but ensure you change the commands used on this page accordingly."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Queue Name:")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"QM_minikube_curam")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Channel Name:")," This value should be all capitals"),Object(b.b)("p",null,"CHL_NamingConvention_AppName"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"CHL_MINIKUBE_CURAM")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Listeners Name:")," This value should be all capitals"),Object(b.b)("p",null,"LS_NamingConvention_AppName"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"LS_MINIKUBE_CURAM")),Object(b.b)("h2",null,"MQ stages"),Object(b.b)("p",null,"On both MQ nodes run the following command as root:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"su - mqm # Changing user into mqm\nexport PATH=/opt/mqm/inst1/bin:$PATH\n")),Object(b.b)(s,{kind:"warning",mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Important!")),Object(b.b)("p",null,"Run the export PATH command on both MQ nodes, this command will be used in further commands in the runbook.")),Object(b.b)("h2",null,"Shared storage"),Object(b.b)("p",null,"Create the shared storage for our nodes."),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," Run the commands as root.")),Object(b.b)("p",null,"On the shared node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"mkdir -p /MQHA/logs\nmkdir -p /MQHA/qmgrs\nmkdir -p /MQHA/scratch\nuseradd mqha -s /sbin/nologin\nchown -R mqha:mqha /MQHA/*\n")),Object(b.b)("p",null,"Verify that the UID and GUID match the owner ID by running the following command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),'echo "/MQHA  MQ.FQDN(rw,sync,no_wdelay,fsid=0,anonuid=1001,anongid=1001)" >> /etc/exports\n')),Object(b.b)("p",null,"Start and enable both the nfs service and rpcbind service by running the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"systemctl start nfs-server.service\nsystemctl enable nfs-server.service\nsystemctl start rpcbind\nsystemctl enable rpcbind\n")),Object(b.b)("p",null,"On MQ nodes run the following commands:"),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," Commands to be run as root.")),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),'echo "SHAREDNODEADDRESS:/MQHA  /MQHA  nfs  defaults  0 0" >> /etc/fstab\nsystemctl start rpcbind\nsystemctl enable rpcbind\nmkdir -p /MQHA\nchmod 1777 /MQHA #Check permissions\nmount /MQHA\n')),Object(b.b)("h2",null,"Create QMs"),Object(b.b)("p",null,"When creating the queue, start on the secondary node first then move to the primary node."),Object(b.b)("p",null,"On the secondary MQ node, run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"crtmqm -ld /MQHA/logs -md /MQHA/qmgrs QM_minikube_curam\ndspmqinf -o command QM_minikube_curam\n")),Object(b.b)("p",null,"Save the output of the above command. It should look like the following."),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"addmqinf -s QueueManager -v Name=QM_minikube_curam -v Directory=QM_minikube_curam -v Prefix=/var/mqm -v DataPath=/MQHA/qmgrs/QM_minikube_curam\n")),Object(b.b)("p",null,"Wait for /MQHA/qmgrs/QM_minikube_curam/qm.ini to appear on other node"),Object(b.b)("p",null,"On the primary MQ node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"addmqinf -s QueueManager -v Name=QM_minikube_curam -v Directory=QM_minikube_curam -v Prefix=/var/mqm -v DataPath=/MQHA/qmgrs/QM_minikube_curam\nstrmqm -x QM_minikube_curam\n")),Object(b.b)("p",null,"On the secondary MQ node run the following command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"strmqm -x QM_minikube_curam\n")),Object(b.b)("h2",null,"Create queues"),Object(b.b)("p",null,"On the primary MQ node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"runmqsc QM_minikube_curam <<-EOS\nDEFINE QLOCAL(QN.CURAMDEADMESSAGEQUEUE) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nDEFINE QLOCAL(QN.WORKFLOWERROR) BOTHRESH(5) BOQNAME(QN.CURAMDEADMESSAGEQUEUE) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nDEFINE QLOCAL(QN.WORKFLOWENACTMENT) BOTHRESH(5) BOQNAME(QN.WORKFLOWERROR) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nDEFINE QLOCAL(QN.WORKFLOWACTIVITY) BOTHRESH(5) BOQNAME(QN.WORKFLOWERROR) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nDEFINE QLOCAL(QN.DPERROR) BOTHRESH(5) BOQNAME(QN.CURAMDEADMESSAGEQUEUE) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nDEFINE QLOCAL(QN.DPENACTMENT) BOTHRESH(5) BOQNAME(QN.DPERROR) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nALTER QMGR CHLAUTH(DISABLED)\nALTER QMGR DEADQ(QN.CURAMDEADMESSAGEQUEUE)\nEOS\n")),Object(b.b)("h2",null,"Create listeners"),Object(b.b)("p",null,"On the primary MQ node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"runmqsc QM_minikube_curam <<-EOS\nDEFINE LISTENER (LS_MINIKUBE_CURAM) TRPTYPE (TCP) CONTROL (QMGR) PORT (1414)\nSTART LISTENER (LS_MINIKUBE_CURAM)\nEOS\n")),Object(b.b)("h2",null,"Create channels"),Object(b.b)("p",null,"On the primary MQ node run the following command:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Enter your MQ node names into the commands below")),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," CERTLABL expects the value to be lower case ibmwebspheremq + Queue Name\nFor this example it will be ibmwebspheremqqm_minikube_curam")),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"runmqsc QM_minikube_curam <<-EOS\nDEFINE CHANNEL(CHL_MINIKUBE_CURAM) CHLTYPE(SVRCONN)  TRPTYPE(TCP) MCAUSER('mqm') SSLCIPH (TLS_RSA_WITH_AES_128_CBC_SHA256)  CERTLABL ('ibmwebspheremqqm_minikube_curam') SSLCAUTH (OPTIONAL) REPLACE\nDEFINE CHANNEL(CHL_MINIKUBE_CURAM) CHLTYPE(CLNTCONN) TRPTYPE(TCP) CONNAME('Node1(1414),Node2(1414)') QMNAME(QM_minikube_curam) SSLCIPH (TLS_RSA_WITH_AES_128_CBC_SHA256) CERTLABL ('ibmwebspheremqqm_minikube_curam') REPLACE\nEOS\n")),Object(b.b)("h2",null,"Create topics"),Object(b.b)("p",null,"On the primary MQ node run the following command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"runmqsc QM_minikube_curam <<-EOS\nDEFINE TOPIC (CURAMCACHEINVALIDATIONTOPIC) TOPICSTR (CURAMCACHEINVALIDATIONTOPIC)\nALTER QMGR CONNAUTH('CHECK.PWD')\nDEFINE AUTHINFO('CHECK.PWD') AUTHTYPE(IDPWOS) CHCKLOCL(OPTIONAL) CHCKCLNT(OPTIONAL)\nEOS\n")),Object(b.b)("h2",null,"Configure security"),Object(b.b)("p",null,"The configuration of security is in four parts"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Setting the object type."),Object(b.b)("li",{parentName:"ul"},"Creating the keystore and certs."),Object(b.b)("li",{parentName:"ul"},"Updating the certs on both nodes."),Object(b.b)("li",{parentName:"ul"},"Refreshing security settings.")),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," The application pods run as a non-root user (default). This non-root user must exist on both MQ nodes.")),Object(b.b)("p",null,"On the secondary MQ node run the following command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"useradd -g 0 -M default && usermod -L default\n")),Object(b.b)("p",null,"On the primary MQ node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"useradd -g 0 -M default && usermod -L default\nrunmqsc QM_minikube_curam <<-EOS\nSET AUTHREC OBJTYPE(QMGR) PRINCIPAL('default') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.DPENACTMENT') PRINCIPAL('default') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.DPERROR') PRINCIPAL('default') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.WORKFLOWACTIVITY') PRINCIPAL('default') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.WORKFLOWENACTMENT') PRINCIPAL('default') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.WORKFLOWERROR') PRINCIPAL('default') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.CURAMDEADMESSAGEQUEUE') PRINCIPAL('default') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(LISTENER) PROFILE('LS_MINIKUBE_CURAM') PRINCIPAL('default') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(CHANNEL) PROFILE('CHL_MINIKUBE_CURAM') PRINCIPAL('default') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(CLNTCONN) PROFILE('CHL_MINIKUBE_CURAM') PRINCIPAL('default') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(TOPIC) PROFILE('CURAMCACHEINVALIDATIONTOPIC') PRINCIPAL('default') AUTHADD(ALL)\nEOS\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),'runmqckm -keydb -create -db /MQHA/qmgrs/QM_minikube_curam/ssl/key.kdb -type cms -pw Passw0rd -stash\nrunmqakm -cert -create -db /MQHA/qmgrs/QM_minikube_curam/ssl/key.kdb -stashed -label ibmwebspheremqqm_minikube_curam -size 2048 -dn "CN=QM_minikube_curam,O=IBM,C=US" -x509version 3 -expire 365 -sig_alg SHA1WithRSA\nrunmqakm -cert -extract -db /MQHA/qmgrs/QM_minikube_curam/ssl/key.kdb -stashed -label ibmwebspheremqqm_minikube_curam -target /MQHA/qmgrs/QM_minikube_curam/ssl/key_QM_minikube_curam.arm\nrunmqakm -cert -export -db /MQHA/qmgrs/QM_minikube_curam/ssl/key.kdb -stashed -label ibmwebspheremqqm_minikube_curam -target /MQHA/qmgrs/QM_minikube_curam/ssl/key_QM_minikube_curam.p12 -target_type pkcs12 -target_pw Passw0rd\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"openssl pkcs12 -in /MQHA/qmgrs/QM_minikube_curam/ssl/key_QM_minikube_curam.p12 -passin pass:Passw0rd -nocerts -nodes | sed -ne '/-BEGIN PRIVATE KEY-/,/-END PRIVATE KEY-/p' > /MQHA/qmgrs/QM_minikube_curam/ssl/tls.key\nopenssl pkcs12 -in /MQHA/qmgrs/QM_minikube_curam/ssl/key_QM_minikube_curam.p12 -passin pass:Passw0rd -clcerts -nokeys | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /MQHA/qmgrs/QM_minikube_curam/ssl/tls.crt\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"runmqsc QM_minikube_curam <<-EOS\nALTER QMGR CONNAUTH('CHECK.PWD')\nDEFINE AUTHINFO('CHECK.PWD') AUTHTYPE(IDPWOS) CHCKLOCL(OPTIONAL) CHCKCLNT(OPTIONAL)\nREFRESH SECURITY TYPE(SSL)\nREFRESH SECURITY TYPE(AUTHSERV)\nREFRESH SECURITY TYPE(CONNAUTH)\nEOS\n")),Object(b.b)("p",null,"After these stages have been run MQ should be configured."),Object(b.b)("h2",null,"Clean up QMs/channels/listeners"),Object(b.b)("p",null,"Used these steps if you are reconfiguring MQ or cleaning up MQ."),Object(b.b)("p",null,"On both MQ nodes run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"endmqm -w QM_minikube_curam\ndltmqm QM_minikube_curam\nrmvmqinf QM_minikube_curam\n")),Object(b.b)("p",null,"On either MQ node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(l.a)({parentName:"pre"},{className:"language-shell"}),"rm -rf /MQHA/qmgrs/**\nrm -rf /MQHA/logs/**\nrm -rf /MQHA/scratch\nendmqm -w QM_minikube_curam\ndltmqm QM_minikube_curam\nrmvmqinf QM_minikube_curam\n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-supporting-infrastructure-mq-mq-on-iks-mdx-d08bc8a409d46f1d8b6a.js.map