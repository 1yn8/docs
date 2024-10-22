"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9213],{1684:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=n(5893),i=n(1151);const t={title:"\u65e2\u77e5\u306e\u554f\u984c"},a=void 0,o={id:"known-issues",title:"\u65e2\u77e5\u306e\u554f\u984c",description:"\u65e2\u77e5\u306e\u554f\u984c\u306f\u5b9a\u671f\u7684\u306b\u66f4\u65b0\u3055\u308c\u3001\u6b21\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u76f4\u3061\u306b\u5bfe\u51e6\u3055\u308c\u306a\u3044\u53ef\u80fd\u6027\u306e\u3042\u308b\u554f\u984c\u306b\u3064\u3044\u3066\u304a\u77e5\u3089\u305b\u3059\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/known-issues.md",sourceDirName:".",slug:"/known-issues",permalink:"/ja/known-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/known-issues.md",tags:[],version:"current",lastUpdatedAt:172958706e4,frontMatter:{title:"\u65e2\u77e5\u306e\u554f\u984c"},sidebar:"mySidebar",previous:{title:"\u95a2\u9023\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",permalink:"/ja/related-projects"},next:{title:"FAQ",permalink:"/ja/faq"}},c={},l=[{value:"Snap Docker",id:"snap-docker",level:3},{value:"Iptables",id:"iptables",level:3},{value:"\u30eb\u30fc\u30c8\u30ec\u30b9\u30e2\u30fc\u30c9",id:"\u30eb\u30fc\u30c8\u30ec\u30b9\u30e2\u30fc\u30c9",level:3},{value:"v1.24.x\u304b\u3089v1.25.x\u3078\u306e\u30cf\u30fc\u30c9\u30cb\u30f3\u30b0\u3055\u308c\u305f\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9",id:"hardened-125",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u65e2\u77e5\u306e\u554f\u984c\u306f\u5b9a\u671f\u7684\u306b\u66f4\u65b0\u3055\u308c\u3001\u6b21\u306e\u30ea\u30ea\u30fc\u30b9\u3067\u76f4\u3061\u306b\u5bfe\u51e6\u3055\u308c\u306a\u3044\u53ef\u80fd\u6027\u306e\u3042\u308b\u554f\u984c\u306b\u3064\u3044\u3066\u304a\u77e5\u3089\u305b\u3059\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"snap-docker",children:"Snap Docker"}),"\n",(0,r.jsx)(s.p,{children:"K3s\u3092Docker\u3068\u4e00\u7dd2\u306b\u4f7f\u7528\u3059\u308b\u4e88\u5b9a\u304c\u3042\u308b\u5834\u5408\u3001Snap\u30d1\u30c3\u30b1\u30fc\u30b8\u7d4c\u7531\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305fDocker\u306f\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002\u3053\u308c\u306f\u3001K3s\u306e\u5b9f\u884c\u306b\u554f\u984c\u3092\u5f15\u304d\u8d77\u3053\u3059\u3053\u3068\u304c\u77e5\u3089\u308c\u3066\u3044\u308b\u305f\u3081\u3067\u3059\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"iptables",children:"Iptables"}),"\n",(0,r.jsx)(s.p,{children:"iptables v1.6.1\u304a\u3088\u3073\u305d\u308c\u4ee5\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092nftables\u30e2\u30fc\u30c9\u3067\u5b9f\u884c\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u554f\u984c\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u554f\u984c\u3092\u56de\u907f\u3059\u308b\u305f\u3081\u306b\u3001\u65b0\u3057\u3044iptables\uff08\u4f8b\u3048\u30701.6.1+\uff09\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001iptables\u306e\u30ec\u30ac\u30b7\u30fc\u30e2\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"update-alternatives --set iptables /usr/sbin/iptables-legacy\nupdate-alternatives --set ip6tables /usr/sbin/ip6tables-legacy\n"})}),"\n",(0,r.jsxs)(s.p,{children:["iptables\u30d0\u30fc\u30b8\u30e7\u30f31.8.0-1.8.4\u306b\u306f\u3001K3s\u306e\u5931\u6557\u3092\u5f15\u304d\u8d77\u3053\u3059\u65e2\u77e5\u306e\u554f\u984c\u304c\u3042\u308a\u307e\u3059\u3002\u3044\u304f\u3064\u304b\u306e\u4eba\u6c17\u306e\u3042\u308bLinux\u30c7\u30a3\u30b9\u30c8\u30ea\u30d3\u30e5\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3053\u308c\u3089\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u3042\u308b\u30d0\u30b0\u306f\u91cd\u8907\u3057\u305f\u30eb\u30fc\u30eb\u306e\u84c4\u7a4d\u3092\u5f15\u304d\u8d77\u3053\u3057\u3001\u30ce\u30fc\u30c9\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3068\u5b89\u5b9a\u6027\u306b\u60aa\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u3059\u3002\u3053\u306e\u554f\u984c\u306e\u5f71\u97ff\u3092\u53d7\u3051\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/issues/3117",children:"Issue #3117"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["K3s\u306b\u306f\u3001\u6b63\u5e38\u306b\u52d5\u4f5c\u3059\u308biptables\uff08v1.8.8\uff09\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002K3s\u3092",(0,r.jsx)(s.code,{children:"--prefer-bundled-bin"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u8d77\u52d5\u3059\u308b\u304b\u3001\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u304b\u3089iptables/nftables\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3067\u3001K3s\u306b\u30d0\u30f3\u30c9\u30eb\u3055\u308c\u305fiptables\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"--prefer-bundled-bin"}),"\u30d5\u30e9\u30b0\u306f\u30012022-12\u30ea\u30ea\u30fc\u30b9\uff08v1.26.0+k3s1\u3001v1.25.5+k3s1\u3001v1.24.9+k3s1\u3001v1.23.15+k3s1\uff09\u304b\u3089\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"]})}),"\n",(0,r.jsx)(s.h3,{id:"\u30eb\u30fc\u30c8\u30ec\u30b9\u30e2\u30fc\u30c9",children:"\u30eb\u30fc\u30c8\u30ec\u30b9\u30e2\u30fc\u30c9"}),"\n",(0,r.jsxs)(s.p,{children:["K3s\u3092\u30eb\u30fc\u30c8\u30ec\u30b9\u30e2\u30fc\u30c9\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u306f\u5b9f\u9a13\u7684\u3067\u3042\u308a\u3001\u3044\u304f\u3064\u304b\u306e",(0,r.jsx)(s.a,{href:"/ja/advanced#known-issues-with-rootless-mode",children:"\u65e2\u77e5\u306e\u554f\u984c"}),"\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"hardened-125",children:"v1.24.x\u304b\u3089v1.25.x\u3078\u306e\u30cf\u30fc\u30c9\u30cb\u30f3\u30b0\u3055\u308c\u305f\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"}),"\n",(0,r.jsxs)(s.p,{children:["Kubernetes\u306f\u3001Pod Security Standards\u306b\u7f6e\u304d\u63db\u3048\u308b\u305f\u3081\u306bv1.25\u304b\u3089PodSecurityPolicy\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002PSS\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f",(0,r.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/",children:"\u4e0a\u6d41\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002K3S\u306e\u5834\u5408\u3001\u30ce\u30fc\u30c9\u306b",(0,r.jsx)(s.code,{children:"PodSecurityPolicy"}),"\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u3044\u304f\u3064\u304b\u306e\u624b\u52d5\u30b9\u30c6\u30c3\u30d7\u304c\u5fc5\u8981\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9\u3067\u3001",(0,r.jsx)(s.code,{children:"kube-apiserver-arg"}),"\u306e\u5024\u3092\u66f4\u65b0\u3057\u3066",(0,r.jsx)(s.code,{children:"PodSecurityPolicy"}),"\u30a2\u30c9\u30df\u30c3\u30b7\u30e7\u30f3\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u524a\u9664\u3057\u307e\u3059\u3002\u4ee3\u308f\u308a\u306b\u6b21\u306e\u5f15\u6570\u5024\u3092\u8ffd\u52a0\u3057\u307e\u3059\uff1a",(0,r.jsx)(s.code,{children:"'admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml'"}),"\u3001\u305f\u3060\u3057\u3001\u307e\u3060K3S\u3092\u518d\u8d77\u52d5\u307e\u305f\u306f\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u4ee5\u4e0b\u306f\u3001\u3053\u306e\u66f4\u65b0\u5f8c\u306e\u30ce\u30fc\u30c9\u306e\u30cf\u30fc\u30c9\u30cb\u30f3\u30b0\u3055\u308c\u305f\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u4f8b\u3067\u3059\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"protect-kernel-defaults: true\nsecrets-encryption: true\nkube-apiserver-arg:\n  - 'admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml'\n  - 'audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log'\n  - 'audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml'\n  - 'audit-log-maxage=30'\n  - 'audit-log-maxbackup=10'\n  - 'audit-log-maxsize=100'\n  - 'request-timeout=300s'\n  - 'service-account-lookup=true'\nkube-controller-manager-arg:\n  - 'terminated-pod-gc-threshold=10'\n  - 'use-service-account-credentials=true'\nkubelet-arg:\n  - 'streaming-connection-idle-timeout=5m'\n  - 'make-iptables-util-chains=true'\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsxs)(s.li,{children:["\u6b21\u306e\u5185\u5bb9\u3067",(0,r.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/psa.yaml"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3055\u3089\u306b\u591a\u304f\u306e\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u3092\u514d\u9664\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001",(0,r.jsx)(s.code,{children:"kube-system"}),"\uff08\u5fc5\u9808\uff09\u3001",(0,r.jsx)(s.code,{children:"cis-operator-system"}),"\uff08\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u304c\u3001Rancher\u3092\u901a\u3058\u3066\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30b9\u30ad\u30e3\u30f3\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u306b\u4fbf\u5229\uff09\u3001\u304a\u3088\u3073",(0,r.jsx)(s.code,{children:"system-upgrade"}),"\uff08",(0,r.jsx)(s.a,{href:"/ja/upgrades/automated",children:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"}),"\u3092\u884c\u3046\u5834\u5408\u306b\u5fc5\u9808\uff09\u3092\u514d\u9664\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "restricted"\n      enforce-version: "latest"\n      audit: "restricted"\n      audit-version: "latest"\n      warn: "restricted"\n      warn-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: [kube-system, cis-operator-system, system-upgrade]\n'})}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:["\u901a\u5e38\u901a\u308a\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",(0,r.jsx)(s.a,{href:"/ja/upgrades/automated",children:"\u81ea\u52d5\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9"}),"\u3092\u884c\u3046\u5834\u5408\u3001",(0,r.jsx)(s.code,{children:"system-upgrade-controller"}),"\u30dd\u30c3\u30c9\u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u304c",(0,r.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-levels",children:"Pod Security\u30ec\u30d9\u30eb"}),"\u306b\u5f93\u3063\u3066\u7279\u6a29\u3092\u6301\u3064\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: system-upgrade\n  labels:\n    # \u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u30fc\u304c\u6b63\u5e38\u306b\u5b9f\u884c\u3055\u308c\u308b\u305f\u3081\u306b\u306f\u3001\u3053\u306e\u5024\u306f\u7279\u6a29\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n    pod-security.kubernetes.io/enforce: privileged\n    pod-security.kubernetes.io/enforce-version: v1.25\n    # \u3053\u308c\u3089\u306e\u5024\u306f\u3001\u5e0c\u671b\u3059\u308b`enforce`\u30ec\u30d9\u30eb\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u4ee5\u4e0b\u306e\u5024\u306f\u5229\u7528\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u3044\u305a\u308c\u304b\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n    pod-security.kubernetes.io/audit: privileged\n    pod-security.kubernetes.io/audit-version: v1.25\n    pod-security.kubernetes.io/warn: privileged\n    pod-security.kubernetes.io/warn-version: v1.25\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"4",children:["\n",(0,r.jsxs)(s.li,{children:["\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u304b\u3089\u6b8b\u308a\u306ePSP\u30ea\u30bd\u30fc\u30b9\u3092\u524a\u9664\u3057\u307e\u3059\u3002\u591a\u304f\u306e\u5834\u5408\u3001",(0,r.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/manifests/"}),"\u5185\u306e\u30ab\u30b9\u30bf\u30e0\u30d5\u30a1\u30a4\u30eb\u3067\u30cf\u30fc\u30c9\u30cb\u30f3\u30b0\u306b\u4f7f\u7528\u3055\u308c\u308bPodSecurityPolicies\u304a\u3088\u3073\u95a2\u9023\u3059\u308bRBAC\u30ea\u30bd\u30fc\u30b9\u304c\u5b58\u5728\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u524a\u9664\u3059\u308b\u3068\u3001k3s\u306f\u81ea\u52d5\u7684\u306b\u66f4\u65b0\u3055\u308c\u307e\u3059\u3002\u30bf\u30a4\u30df\u30f3\u30b0\u306e\u95a2\u4fc2\u3067\u3001\u3053\u308c\u3089\u306e\u4e00\u90e8\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u6b8b\u308b\u5834\u5408\u304c\u3042\u308b\u305f\u3081\u3001\u305d\u306e\u5834\u5408\u306f\u624b\u52d5\u3067\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,r.jsx)(s.a,{href:"/ja/security/hardening-guide",children:"\u30cf\u30fc\u30c9\u30cb\u30f3\u30b0\u30ac\u30a4\u30c9"}),"\u304c\u4ee5\u524d\u306b\u5f93\u308f\u308c\u3066\u3044\u305f\u5834\u5408\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u524a\u9664\u3067\u304d\u308b\u306f\u305a\u3067\u3059\uff1a"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"# PSP\u306b\u95a2\u9023\u3059\u308b\u30ea\u30bd\u30fc\u30b9\u3092\u53d6\u5f97\n$ kubectl get roles,clusterroles,rolebindings,clusterrolebindings -A | grep -i psp\n\n# \u3053\u308c\u3089\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u524a\u9664\uff1a\n$ kubectl delete clusterrole.rbac.authorization.k8s.io/psp:restricted-psp clusterrole.rbac.authorization.k8s.io/psp:svclb-psp clusterrole.rbac.authorization.k8s.io/psp:system-unrestricted-psp clusterrolebinding.rbac.authorization.k8s.io/default:restricted-psp clusterrolebinding.rbac.authorization.k8s.io/system-unrestricted-node-psp-rolebinding && kubectl delete -n kube-system rolebinding.rbac.authorization.k8s.io/svclb-psp-rolebinding rolebinding.rbac.authorization.k8s.io/system-unrestricted-svc-acct-psp-rolebinding\n"})})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var r=n(7294);const i={},t=r.createContext(i);function a(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);