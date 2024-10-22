"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6477],{582:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var t=s(5893),l=s(1151);const r={title:"\u8981\u4ef6"},d=void 0,i={id:"installation/requirements",title:"\u8981\u4ef6",description:"K3s\u306f\u975e\u5e38\u306b\u8efd\u91cf\u3067\u3059\u304c\u3001\u4ee5\u4e0b\u306b\u793a\u3059\u6700\u4f4e\u8981\u4ef6\u304c\u3042\u308a\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/installation/requirements.md",sourceDirName:"installation",slug:"/installation/requirements",permalink:"/ja/installation/requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/requirements.md",tags:[],version:"current",lastUpdatedAt:172958706e4,frontMatter:{title:"\u8981\u4ef6"},sidebar:"mySidebar",previous:{title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/ja/installation/"},next:{title:"\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3",permalink:"/ja/installation/configuration"}},c={},h=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",level:2},{value:"\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0",id:"\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0",level:2},{value:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2",id:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2",level:2},{value:"\u30c7\u30a3\u30b9\u30af",id:"\u30c7\u30a3\u30b9\u30af",level:4},{value:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0",id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0",level:2},{value:"K3s\u30ce\u30fc\u30c9\u306e\u30a4\u30f3\u30d0\u30a6\u30f3\u30c9\u30eb\u30fc\u30eb",id:"k3s\u30ce\u30fc\u30c9\u306e\u30a4\u30f3\u30d0\u30a6\u30f3\u30c9\u30eb\u30fc\u30eb",level:3},{value:"\u5927\u898f\u6a21\u30af\u30e9\u30b9\u30bf\u30fc",id:"\u5927\u898f\u6a21\u30af\u30e9\u30b9\u30bf\u30fc",level:2},{value:"CPU\u3068\u30e1\u30e2\u30ea",id:"cpu\u3068\u30e1\u30e2\u30ea",level:3},{value:"\u30c7\u30a3\u30b9\u30af",id:"\u30c7\u30a3\u30b9\u30af-1",level:3},{value:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",level:3},{value:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9",id:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9",level:3}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{TabItem:s,Tabs:r}=n;return s||a("TabItem",!0),r||a("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"K3s\u306f\u975e\u5e38\u306b\u8efd\u91cf\u3067\u3059\u304c\u3001\u4ee5\u4e0b\u306b\u793a\u3059\u6700\u4f4e\u8981\u4ef6\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"K3s\u3092\u30b3\u30f3\u30c6\u30ca\u5185\u3067\u5b9f\u884c\u3059\u308b\u5834\u5408\u3067\u3082\u3001\u30cd\u30a4\u30c6\u30a3\u30d6\u306eLinux\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u5b9f\u884c\u3059\u308b\u5834\u5408\u3067\u3082\u3001K3s\u3092\u5b9f\u884c\u3059\u308b\u5404\u30ce\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u6700\u4f4e\u8981\u4ef6\u3092\u6e80\u305f\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u8981\u4ef6\u306fK3s\u304a\u3088\u3073\u305d\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u305f\u3081\u306e\u30d9\u30fc\u30b9\u30e9\u30a4\u30f3\u3067\u3042\u308a\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u81ea\u4f53\u306b\u3088\u3063\u3066\u6d88\u8cbb\u3055\u308c\u308b\u30ea\u30bd\u30fc\u30b9\u306f\u542b\u307e\u308c\u3066\u3044\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"2\u3064\u306e\u30ce\u30fc\u30c9\u306f\u540c\u3058\u30db\u30b9\u30c8\u540d\u3092\u6301\u3064\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u8907\u6570\u306e\u30ce\u30fc\u30c9\u304c\u540c\u3058\u30db\u30b9\u30c8\u540d\u3092\u6301\u3064\u5834\u5408\u3001\u307e\u305f\u306f\u30db\u30b9\u30c8\u540d\u304c\u81ea\u52d5\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u306b\u3088\u3063\u3066\u518d\u5229\u7528\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u5834\u5408\u306f\u3001",(0,t.jsx)(n.code,{children:"--with-node-id"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u5404\u30ce\u30fc\u30c9\u306b\u30e9\u30f3\u30c0\u30e0\u306a\u30b5\u30d5\u30a3\u30c3\u30af\u30b9\u3092\u8ffd\u52a0\u3059\u308b\u304b\u3001",(0,t.jsx)(n.code,{children:"--node-name"}),"\u307e\u305f\u306f",(0,t.jsx)(n.code,{children:"$K3S_NODE_NAME"}),"\u3067\u4e00\u610f\u306e\u540d\u524d\u3092\u6e21\u3057\u3066\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u8ffd\u52a0\u3059\u308b\u5404\u30ce\u30fc\u30c9\u306b\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",children:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"}),"\n",(0,t.jsx)(n.p,{children:"K3s\u306f\u4ee5\u4e0b\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3067\u5229\u7528\u53ef\u80fd\u3067\u3059:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"x86_64"}),"\n",(0,t.jsx)(n.li,{children:"armhf"}),"\n",(0,t.jsx)(n.li,{children:"arm64/aarch64"}),"\n",(0,t.jsx)(n.li,{children:"s390x"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"ARM64 \u30da\u30fc\u30b8\u30b5\u30a4\u30ba",type:"warning",children:(0,t.jsxs)(n.p,{children:["2023\u5e745\u6708\u4ee5\u524d\u306e\u30ea\u30ea\u30fc\u30b9\uff08v1.24.14+k3s1\u3001v1.25.10+k3s1\u3001v1.26.5+k3s1\u3001v1.27.2+k3s1\uff09\u3067\u306f\u3001",(0,t.jsx)(n.code,{children:"aarch64/arm64"}),"\u30b7\u30b9\u30c6\u30e0\u3067\u30ab\u30fc\u30cd\u30eb\u304c4k\u30da\u30fc\u30b8\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,t.jsx)(n.strong,{children:"RHEL9"}),"\u3001",(0,t.jsx)(n.strong,{children:"Ubuntu"}),"\u3001",(0,t.jsx)(n.strong,{children:"Raspberry PI OS"}),"\u3001\u304a\u3088\u3073",(0,t.jsx)(n.strong,{children:"SLES"}),"\u306f\u3059\u3079\u3066\u3053\u306e\u8981\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u307e\u3059\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0",children:"\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0"}),"\n",(0,t.jsx)(n.p,{children:"K3s\u306f\u307b\u3068\u3093\u3069\u306e\u6700\u65b0\u306eLinux\u30b7\u30b9\u30c6\u30e0\u3067\u52d5\u4f5c\u3059\u308b\u3053\u3068\u304c\u671f\u5f85\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u90e8\u306eOS\u306b\u306f\u8ffd\u52a0\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u8981\u4ef6\u304c\u3042\u308a\u307e\u3059:"}),"\n",(0,t.jsxs)(r,{queryString:"os",children:[(0,t.jsxs)(s,{value:"suse",label:"SUSE Linux Enterprise / openSUSE",children:[(0,t.jsx)(n.p,{children:"firewalld\u3092\u30aa\u30d5\u306b\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl disable firewalld --now\n"})}),(0,t.jsx)(n.p,{children:"firewalld\u3092\u6709\u52b9\u306b\u3057\u305f\u307e\u307e\u306b\u3057\u305f\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u4ee5\u4e0b\u306e\u30eb\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"firewall-cmd --permanent --add-port=6443/tcp #apiserver\nfirewall-cmd --permanent --zone=trusted --add-source=10.42.0.0/16 #pods\nfirewall-cmd --permanent --zone=trusted --add-source=10.43.0.0/16 #services\nfirewall-cmd --reload\n"})}),(0,t.jsxs)(n.p,{children:["\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u5fdc\u3058\u3066\u8ffd\u52a0\u306e\u30dd\u30fc\u30c8\u3092\u958b\u304f\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f",(0,t.jsx)(n.a,{href:"#inbound-rules-for-k3s-nodes",children:"\u30a4\u30f3\u30d0\u30a6\u30f3\u30c9\u30eb\u30fc\u30eb"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30dd\u30c3\u30c9\u3084\u30b5\u30fc\u30d3\u30b9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8CIDR\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306f\u3001\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u30eb\u30fc\u30eb\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})]}),(0,t.jsxs)(s,{value:"rhel",label:"Red Hat Enterprise Linux / CentOS / Fedora",children:[(0,t.jsx)(n.p,{children:"firewalld\u3092\u30aa\u30d5\u306b\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl disable firewalld --now\n"})}),(0,t.jsx)(n.p,{children:"firewalld\u3092\u6709\u52b9\u306b\u3057\u305f\u307e\u307e\u306b\u3057\u305f\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u4ee5\u4e0b\u306e\u30eb\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"firewall-cmd --permanent --add-port=6443/tcp #apiserver\nfirewall-cmd --permanent --zone=trusted --add-source=10.42.0.0/16 #pods\nfirewall-cmd --permanent --zone=trusted --add-source=10.43.0.0/16 #services\nfirewall-cmd --reload\n"})}),(0,t.jsxs)(n.p,{children:["\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u5fdc\u3058\u3066\u8ffd\u52a0\u306e\u30dd\u30fc\u30c8\u3092\u958b\u304f\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f",(0,t.jsx)(n.a,{href:"#inbound-rules-for-k3s-nodes",children:"\u30a4\u30f3\u30d0\u30a6\u30f3\u30c9\u30eb\u30fc\u30eb"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30dd\u30c3\u30c9\u3084\u30b5\u30fc\u30d3\u30b9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8CIDR\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306f\u3001\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u30eb\u30fc\u30eb\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),(0,t.jsx)(n.p,{children:"\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001nm-cloud-setup\u3092\u7121\u52b9\u306b\u3057\u3066\u30ce\u30fc\u30c9\u3092\u518d\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl disable nm-cloud-setup.service nm-cloud-setup.timer\nreboot\n"})})]}),(0,t.jsxs)(s,{value:"debian",label:"Ubuntu / Debian",children:[(0,t.jsxs)(n.p,{children:["\u53e4\u3044Debian\u30ea\u30ea\u30fc\u30b9\u306b\u306f\u65e2\u77e5\u306eiptables\u30d0\u30b0\u304c\u3042\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,t.jsx)(n.a,{href:"/ja/known-issues#iptables",children:"\u65e2\u77e5\u306e\u554f\u984c"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),(0,t.jsx)(n.p,{children:"ufw\uff08uncomplicated firewall\uff09\u3092\u30aa\u30d5\u306b\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ufw disable\n"})}),(0,t.jsx)(n.p,{children:"ufw\u3092\u6709\u52b9\u306b\u3057\u305f\u307e\u307e\u306b\u3057\u305f\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u4ee5\u4e0b\u306e\u30eb\u30fc\u30eb\u304c\u5fc5\u8981\u3067\u3059:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ufw allow 6443/tcp #apiserver\nufw allow from 10.42.0.0/16 to any #pods\nufw allow from 10.43.0.0/16 to any #services\n"})}),(0,t.jsxs)(n.p,{children:["\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u5fdc\u3058\u3066\u8ffd\u52a0\u306e\u30dd\u30fc\u30c8\u3092\u958b\u304f\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f",(0,t.jsx)(n.a,{href:"#inbound-rules-for-k3s-nodes",children:"\u30a4\u30f3\u30d0\u30a6\u30f3\u30c9\u30eb\u30fc\u30eb"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30dd\u30c3\u30c9\u3084\u30b5\u30fc\u30d3\u30b9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8CIDR\u3092\u5909\u66f4\u3059\u308b\u5834\u5408\u306f\u3001\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u30eb\u30fc\u30eb\u3092\u66f4\u65b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})]}),(0,t.jsxs)(s,{value:"pi",label:"Raspberry Pi",children:[(0,t.jsxs)(n.p,{children:["Raspberry Pi OS\u306fDebian\u30d9\u30fc\u30b9\u3067\u3042\u308a\u3001\u65e2\u77e5\u306eiptables\u30d0\u30b0\u304c\u3042\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,t.jsx)(n.a,{href:"/ja/known-issues#iptables",children:"\u65e2\u77e5\u306e\u554f\u984c"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),(0,t.jsxs)(n.p,{children:["\u6a19\u6e96\u306eRaspberry Pi OS\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u306f\u3001",(0,t.jsx)(n.code,{children:"cgroups"}),"\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u305b\u3093\u3002",(0,t.jsx)(n.strong,{children:"K3S"}),"\u306fsystemd\u30b5\u30fc\u30d3\u30b9\u3092\u958b\u59cb\u3059\u308b\u305f\u3081\u306b",(0,t.jsx)(n.code,{children:"cgroups"}),"\u3092\u5fc5\u8981\u3068\u3057\u307e\u3059\u3002",(0,t.jsx)(n.code,{children:"cgroups"}),"\u306f",(0,t.jsx)(n.code,{children:"/boot/cmdline.txt"}),"\u306b",(0,t.jsx)(n.code,{children:"cgroup_memory=1 cgroup_enable=memory"}),"\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3067\u6709\u52b9\u306b\u3067\u304d\u307e\u3059\u3002"]}),(0,t.jsx)(n.p,{children:"\u4f8b\u306ecmdline.txt:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"console=serial0,115200 console=tty1 root=PARTUUID=58b06195-02 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait cgroup_memory=1 cgroup_enable=memory\n"})}),(0,t.jsx)(n.p,{children:"Ubuntu 21.10\u4ee5\u964d\u3001Raspberry Pi\u3067\u306evxlan\u30b5\u30dd\u30fc\u30c8\u306f\u5225\u306e\u30ab\u30fc\u30cd\u30eb\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u79fb\u52d5\u3055\u308c\u307e\u3057\u305f\u3002"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install linux-modules-extra-raspi\n"})})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Rancher\u7ba1\u7406\u306eK3s\u30af\u30e9\u30b9\u30bf\u30fc\u3067\u30c6\u30b9\u30c8\u3055\u308c\u305fOS\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"https://rancher.com/support-maintenance-terms/",children:"Rancher\u306e\u30b5\u30dd\u30fc\u30c8\u3068\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u306e\u6761\u4ef6"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2",children:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2"}),"\n",(0,t.jsx)(n.p,{children:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u8981\u4ef6\u306f\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u306e\u898f\u6a21\u306b\u5fdc\u3058\u3066\u30b9\u30b1\u30fc\u30eb\u3057\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u6700\u4f4e\u9650\u306e\u63a8\u5968\u4e8b\u9805\u3092\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u30b9\u30da\u30c3\u30af"}),(0,t.jsx)(n.th,{children:"\u6700\u4f4e\u9650"}),(0,t.jsx)(n.th,{children:"\u63a8\u5968"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CPU"}),(0,t.jsx)(n.td,{children:"1\u30b3\u30a2"}),(0,t.jsx)(n.td,{children:"2\u30b3\u30a2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RAM"}),(0,t.jsx)(n.td,{children:"512 MB"}),(0,t.jsx)(n.td,{children:"1 GB"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/ja/reference/resource-profiling",children:"\u30ea\u30bd\u30fc\u30b9\u30d7\u30ed\u30d5\u30a1\u30a4\u30ea\u30f3\u30b0"}),"\u3067\u306f\u3001K3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u6301\u3064K3s\u30b5\u30fc\u30d0\u30fc\u3001\u304a\u3088\u30731\u3064\u306e\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u6301\u3064K3s\u30b5\u30fc\u30d0\u30fc\u306e\u6700\u5c0f\u30ea\u30bd\u30fc\u30b9\u8981\u4ef6\u3092\u6c7a\u5b9a\u3059\u308b\u305f\u3081\u306e\u30c6\u30b9\u30c8\u7d50\u679c\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001K3s\u30b5\u30fc\u30d0\u30fc\u3068\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u5229\u7528\u306b\u6700\u3082\u5927\u304d\u306a\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u8981\u56e0\u306b\u3064\u3044\u3066\u306e\u5206\u6790\u3084\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3084\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u304b\u3089\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3092\u4fdd\u8b77\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3082\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.admonition,{title:"Raspberry Pi\u3068\u7d44\u307f\u8fbc\u307fetcd",type:"info",children:(0,t.jsx)(n.p,{children:"Raspberry Pi\u3067\u7d44\u307f\u8fbc\u307fetcd\u3092\u4f7f\u7528\u3057\u3066K3s\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308b\u5834\u5408\u3001\u5916\u90e8SSD\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002etcd\u306f\u66f8\u304d\u8fbc\u307f\u304c\u591a\u304f\u3001SD\u30ab\u30fc\u30c9\u306fIO\u8ca0\u8377\u306b\u8010\u3048\u3089\u308c\u307e\u305b\u3093\u3002"})}),"\n",(0,t.jsx)(n.h4,{id:"\u30c7\u30a3\u30b9\u30af",children:"\u30c7\u30a3\u30b9\u30af"}),"\n",(0,t.jsx)(n.p,{children:"K3s\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002\u6700\u9069\u306a\u901f\u5ea6\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u3001\u53ef\u80fd\u3067\u3042\u308c\u3070SSD\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002ARM\u30c7\u30d0\u30a4\u30b9\u3067SD\u30ab\u30fc\u30c9\u3084eMMC\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u30c7\u30a3\u30b9\u30af\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306f\u7570\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0",children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0"}),"\n",(0,t.jsx)(n.p,{children:"K3s\u30b5\u30fc\u30d0\u30fc\u306f\u30dd\u30fc\u30c86443\u304c\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9\u304b\u3089\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30ce\u30fc\u30c9\u306f\u3001Flannel VXLAN\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306fUDP\u30dd\u30fc\u30c88472\u3092\u4ecb\u3057\u3066\u3001Flannel WireGuard\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306fUDP\u30dd\u30fc\u30c851820\uff08IPv6\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f51821\uff09\u3092\u4ecb\u3057\u3066\u4ed6\u306e\u30ce\u30fc\u30c9\u306b\u5230\u9054\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30ce\u30fc\u30c9\u306f\u4ed6\u306e\u30dd\u30fc\u30c8\u3067\u30ea\u30c3\u30b9\u30f3\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002K3s\u306f\u30ea\u30d0\u30fc\u30b9\u30c8\u30f3\u30cd\u30ea\u30f3\u30b0\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ce\u30fc\u30c9\u304c\u30b5\u30fc\u30d0\u30fc\u306b\u5bfe\u3057\u3066\u30a2\u30a6\u30c8\u30d0\u30a6\u30f3\u30c9\u63a5\u7d9a\u3092\u884c\u3044\u3001\u3059\u3079\u3066\u306ekubelet\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u304c\u305d\u306e\u30c8\u30f3\u30cd\u30eb\u3092\u901a\u3058\u3066\u5b9f\u884c\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\u305f\u3060\u3057\u3001Flannel\u3092\u4f7f\u7528\u305b\u305a\u306b\u72ec\u81ea\u306e\u30ab\u30b9\u30bf\u30e0CNI\u3092\u63d0\u4f9b\u3059\u308b\u5834\u5408\u306f\u3001Flannel\u304c\u5fc5\u8981\u3068\u3059\u308b\u30dd\u30fc\u30c8\u306fK3s\u306b\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30e1\u30c8\u30ea\u30af\u30b9\u30b5\u30fc\u30d0\u30fc\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9\u304c\u30dd\u30fc\u30c810250\u3067\u76f8\u4e92\u306b\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7d44\u307f\u8fbc\u307fetcd\u3092\u4f7f\u7528\u3057\u3066\u9ad8\u53ef\u7528\u6027\u3092\u5b9f\u73fe\u3059\u308b\u4e88\u5b9a\u304c\u3042\u308b\u5834\u5408\u3001\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306f\u30dd\u30fc\u30c82379\u304a\u3088\u30732380\u3067\u76f8\u4e92\u306b\u30a2\u30af\u30bb\u30b9\u53ef\u80fd\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.admonition,{title:"\u91cd\u8981",type:"tip",children:(0,t.jsx)(n.p,{children:"\u30ce\u30fc\u30c9\u306eVXLAN\u30dd\u30fc\u30c8\u306f\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u8ab0\u3067\u3082\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u305f\u3081\u3001\u5916\u90e8\u306b\u516c\u958b\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002\u30dd\u30fc\u30c88472\u3078\u306e\u30a2\u30af\u30bb\u30b9\u3092\u7121\u52b9\u306b\u3059\u308b\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb/\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30b0\u30eb\u30fc\u30d7\u306e\u80cc\u5f8c\u3067\u30ce\u30fc\u30c9\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["Flannel\u306f\u3001\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u3092\u30b9\u30a4\u30c3\u30c1\u30f3\u30b0\u3059\u308bL2\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b",(0,t.jsx)(n.a,{href:"https://www.cni.dev/plugins/current/main/bridge/",children:"Bridge CNI\u30d7\u30e9\u30b0\u30a4\u30f3"}),"\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u3002",(0,t.jsx)(n.code,{children:"NET_RAW"}),"\u6a5f\u80fd\u3092\u6301\u3064\u4e0d\u6b63\u306a\u30dd\u30c3\u30c9\u306f\u3001\u305d\u306eL2\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u60aa\u7528\u3057\u3066",(0,t.jsx)(n.a,{href:"https://static.sched.com/hosted_files/kccncna19/72/ARP%20DNS%20spoof.pdf",children:"ARP\u30b9\u30d7\u30fc\u30d5\u30a3\u30f3\u30b0"}),"\u306a\u3069\u306e\u653b\u6483\u3092\u958b\u59cb\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/",children:"Kubernetes\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u306b\u3001\u4fe1\u983c\u3067\u304d\u306a\u3044\u30dd\u30c3\u30c9\u3067",(0,t.jsx)(n.code,{children:"NET_RAW"}),"\u3092\u7121\u52b9\u306b\u3059\u308b\u5236\u9650\u4ed8\u304d\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,t.jsx)(n.h3,{id:"k3s\u30ce\u30fc\u30c9\u306e\u30a4\u30f3\u30d0\u30a6\u30f3\u30c9\u30eb\u30fc\u30eb",children:"K3s\u30ce\u30fc\u30c9\u306e\u30a4\u30f3\u30d0\u30a6\u30f3\u30c9\u30eb\u30fc\u30eb"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u30d7\u30ed\u30c8\u30b3\u30eb"}),(0,t.jsx)(n.th,{children:"\u30dd\u30fc\u30c8"}),(0,t.jsx)(n.th,{children:"\u30bd\u30fc\u30b9"}),(0,t.jsx)(n.th,{children:"\u5b9b\u5148"}),(0,t.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TCP"}),(0,t.jsx)(n.td,{children:"2379-2380"}),(0,t.jsx)(n.td,{children:"\u30b5\u30fc\u30d0\u30fc"}),(0,t.jsx)(n.td,{children:"\u30b5\u30fc\u30d0\u30fc"}),(0,t.jsx)(n.td,{children:"\u7d44\u307f\u8fbc\u307fetcd\u3092\u4f7f\u7528\u3057\u305fHA\u306e\u5834\u5408\u306e\u307f\u5fc5\u8981"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TCP"}),(0,t.jsx)(n.td,{children:"6443"}),(0,t.jsx)(n.td,{children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"}),(0,t.jsx)(n.td,{children:"\u30b5\u30fc\u30d0\u30fc"}),(0,t.jsx)(n.td,{children:"K3s\u30b9\u30fc\u30d1\u30fc\u30d0\u30a4\u30b6\u30fc\u304a\u3088\u3073Kubernetes API\u30b5\u30fc\u30d0\u30fc"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"UDP"}),(0,t.jsx)(n.td,{children:"8472"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"Flannel VXLAN\u306e\u5834\u5408\u306e\u307f\u5fc5\u8981"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TCP"}),(0,t.jsx)(n.td,{children:"10250"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"Kubelet\u30e1\u30c8\u30ea\u30af\u30b9"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"UDP"}),(0,t.jsx)(n.td,{children:"51820"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"Flannel Wireguard\u3092IPv4\u3067\u4f7f\u7528\u3059\u308b\u5834\u5408\u306e\u307f\u5fc5\u8981"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"UDP"}),(0,t.jsx)(n.td,{children:"51821"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"Flannel Wireguard\u3092IPv6\u3067\u4f7f\u7528\u3059\u308b\u5834\u5408\u306e\u307f\u5fc5\u8981"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TCP"}),(0,t.jsx)(n.td,{children:"5001"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"\u7d44\u307f\u8fbc\u307f\u5206\u6563\u30ec\u30b8\u30b9\u30c8\u30ea\uff08Spegel\uff09\u306e\u5834\u5408\u306e\u307f\u5fc5\u8981"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TCP"}),(0,t.jsx)(n.td,{children:"6443"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9"}),(0,t.jsx)(n.td,{children:"\u7d44\u307f\u8fbc\u307f\u5206\u6563\u30ec\u30b8\u30b9\u30c8\u30ea\uff08Spegel\uff09\u306e\u5834\u5408\u306e\u307f\u5fc5\u8981"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u5e38\u3001\u3059\u3079\u3066\u306e\u30a2\u30a6\u30c8\u30d0\u30a6\u30f3\u30c9\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u306f\u8a31\u53ef\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u3059\u308bOS\u306b\u5fdc\u3058\u3066\u3001\u30d5\u30a1\u30a4\u30a2\u30a6\u30a9\u30fc\u30eb\u306b\u8ffd\u52a0\u306e\u5909\u66f4\u304c\u5fc5\u8981\u306a\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5927\u898f\u6a21\u30af\u30e9\u30b9\u30bf\u30fc",children:"\u5927\u898f\u6a21\u30af\u30e9\u30b9\u30bf\u30fc"}),"\n",(0,t.jsx)(n.p,{children:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u8981\u4ef6\u306fK3s\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u898f\u6a21\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u304a\u3088\u3073\u5927\u898f\u6a21\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u5834\u5408\u3001\u5916\u90e8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f7f\u7528\u3057\u305f\u9ad8\u53ef\u7528\u6027\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u3067\u306e\u5916\u90e8\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u306f\u4ee5\u4e0b\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u63a8\u5968\u3055\u308c\u307e\u3059:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MySQL"}),"\n",(0,t.jsx)(n.li,{children:"PostgreSQL"}),"\n",(0,t.jsx)(n.li,{children:"etcd"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"cpu\u3068\u30e1\u30e2\u30ea",children:"CPU\u3068\u30e1\u30e2\u30ea"}),"\n",(0,t.jsx)(n.p,{children:"\u9ad8\u53ef\u7528\u6027K3s\u30b5\u30fc\u30d0\u30fc\u306e\u30ce\u30fc\u30c9\u306b\u5fc5\u8981\u306a\u6700\u5c0fCPU\u304a\u3088\u3073\u30e1\u30e2\u30ea\u8981\u4ef6\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u898f\u6a21"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u30ce\u30fc\u30c9\u6570"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"VCPUS"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"RAM"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u5c0f\u898f\u6a21"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u6700\u592710"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"4 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u4e2d\u898f\u6a21"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u6700\u5927100"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"4"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"8 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u5927\u898f\u6a21"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u6700\u5927250"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"8"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"16 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u8d85\u5927\u898f\u6a21"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u6700\u5927500"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"16"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"32 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u8d85\u8d85\u5927\u898f\u6a21"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"500+"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"32"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"64 GB"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"\u30c7\u30a3\u30b9\u30af-1",children:"\u30c7\u30a3\u30b9\u30af"}),"\n",(0,t.jsx)(n.p,{children:"\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306f\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002\u6700\u9069\u306a\u901f\u5ea6\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u3001\u5e38\u306bSSD\u30c7\u30a3\u30b9\u30af\u3092\u4f7f\u7528\u3057\u3066K3s\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u30af\u30e9\u30a6\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u3067\u306f\u3001\u6700\u5927IOPS\u3092\u8a31\u53ef\u3059\u308b\u6700\u5c0f\u30b5\u30a4\u30ba\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af",children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af"}),"\n",(0,t.jsxs)(n.p,{children:["\u30af\u30e9\u30b9\u30bf\u30fcCIDR\u306e\u30b5\u30d6\u30cd\u30c3\u30c8\u30b5\u30a4\u30ba\u3092\u5897\u3084\u3057\u3066\u3001\u30dd\u30c3\u30c9\u306eIP\u304c\u4e0d\u8db3\u3057\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u304f\u3060\u3055\u3044\u3002K3s\u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3059\u308b\u969b\u306b",(0,t.jsx)(n.code,{children:"--cluster-cidr"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6e21\u3059\u3053\u3068\u3067\u305d\u308c\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9",children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9"}),"\n",(0,t.jsxs)(n.p,{children:["K3s\u306fMySQL\u3001PostgreSQL\u3001MariaDB\u3001\u304a\u3088\u3073etcd\u306a\u3069\u306e\u3055\u307e\u3056\u307e\u306a\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f",(0,t.jsx)(n.a,{href:"/ja/datastore/",children:"\u30af\u30e9\u30b9\u30bf\u30fc\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5927\u898f\u6a21\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30ea\u30bd\u30fc\u30b9\u306e\u30b5\u30a4\u30ba\u30ac\u30a4\u30c9\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8\u898f\u6a21"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u30ce\u30fc\u30c9\u6570"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"VCPUS"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"RAM"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u5c0f\u898f\u6a21"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u6700\u592710"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"1"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"2 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u4e2d\u898f\u6a21"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u6700\u5927100"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"8 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u5927\u898f\u6a21"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u6700\u5927250"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"4"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"16 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u8d85\u5927\u898f\u6a21"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u6700\u5927500"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"8"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"32 GB"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u8d85\u8d85\u5927\u898f\u6a21"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"500+"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"16"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"64 GB"})]})]})]})]})}function j(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}function a(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>d});var t=s(7294);const l={},r=t.createContext(l);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);