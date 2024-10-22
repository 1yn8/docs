"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8407],{9087:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var t=n(5893),r=n(1151);const c={title:"\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8\u30ac\u30a4\u30c9"},i=void 0,d={id:"quick-start",title:"\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8\u30ac\u30a4\u30c9",description:"\u3053\u306e\u30ac\u30a4\u30c9\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u8fc5\u901f\u306b\u8d77\u52d5\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001K3s\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/ja/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/quick-start.md",tags:[],version:"current",lastUpdatedAt:172958706e4,frontMatter:{title:"\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8\u30ac\u30a4\u30c9"},sidebar:"mySidebar",previous:{title:"K3s - \u8efd\u91cf\u306aKubernetes",permalink:"/ja/"},next:{title:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/ja/installation/"}},l={},o=[{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["\u3053\u306e\u30ac\u30a4\u30c9\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30af\u30e9\u30b9\u30bf\u30fc\u3092\u8fc5\u901f\u306b\u8d77\u52d5\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002",(0,t.jsx)(s.a,{href:"/ja/installation/",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30bb\u30af\u30b7\u30e7\u30f3"}),"\u3067\u306f\u3001K3s\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8a73\u3057\u304f\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u9032\u3081\u308b\u524d\u306b\u3001\u30ce\u30fc\u30c9\u304c",(0,t.jsx)(s.a,{href:"/ja/installation/requirements",children:"\u8981\u4ef6"}),"\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["K3s\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u3069\u306e\u3088\u3046\u306b\u9023\u643a\u3059\u308b\u304b\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(s.a,{href:"/ja/architecture",children:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u30bb\u30af\u30b7\u30e7\u30f3"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["Kubernetes\u306b\u521d\u3081\u3066\u89e6\u308c\u308b\u65b9\u3078\uff1a\u516c\u5f0f\u306eKubernetes\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u306f\u3001\u57fa\u672c\u3092\u8aac\u660e\u3059\u308b\u7d20\u6674\u3089\u3057\u3044\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u304c",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/",children:"\u3053\u3061\u3089"}),"\u306b\u3042\u308a\u307e\u3059\u3002"]})}),"\n",(0,t.jsx)(s.h2,{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8"}),"\n",(0,t.jsxs)(s.p,{children:["K3s\u306f\u3001systemd\u307e\u305f\u306fopenrc\u30d9\u30fc\u30b9\u306e\u30b7\u30b9\u30c6\u30e0\u306b\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u306e\u4fbf\u5229\u306a\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f ",(0,t.jsx)(s.a,{href:"https://get.k3s.io",children:"https://get.k3s.io"})," \u3067\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002\u3053\u306e\u65b9\u6cd5\u3067K3s\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | sh -\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u3053\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u5b9f\u884c\u3059\u308b\u3068\uff1a"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"K3s\u30b5\u30fc\u30d3\u30b9\u306f\u3001\u30ce\u30fc\u30c9\u306e\u518d\u8d77\u52d5\u5f8c\u3084\u30d7\u30ed\u30bb\u30b9\u304c\u30af\u30e9\u30c3\u30b7\u30e5\u307e\u305f\u306f\u7d42\u4e86\u3057\u305f\u5834\u5408\u306b\u81ea\u52d5\u7684\u306b\u518d\u8d77\u52d5\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059"}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"kubectl"}),"\u3001",(0,t.jsx)(s.code,{children:"crictl"}),"\u3001",(0,t.jsx)(s.code,{children:"ctr"}),"\u3001",(0,t.jsx)(s.code,{children:"k3s-killall.sh"}),"\u3001",(0,t.jsx)(s.code,{children:"k3s-uninstall.sh"}),"\u306a\u3069\u306e\u8ffd\u52a0\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",children:"kubeconfig"}),"\u30d5\u30a1\u30a4\u30eb\u304c",(0,t.jsx)(s.code,{children:"/etc/rancher/k3s/k3s.yaml"}),"\u306b\u66f8\u304d\u8fbc\u307e\u308c\u3001K3s\u306b\u3088\u3063\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u305fkubectl\u304c\u81ea\u52d5\u7684\u306b\u305d\u308c\u3092\u4f7f\u7528\u3057\u307e\u3059"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u5358\u4e00\u30ce\u30fc\u30c9\u306e\u30b5\u30fc\u30d0\u30fc\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306f\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u30dd\u30c3\u30c9\u3092\u30db\u30b9\u30c8\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30d7\u30ec\u30fc\u30f3\u3001kubelet\u3001\u304a\u3088\u3073\u30b3\u30f3\u30c6\u30ca\u30e9\u30f3\u30bf\u30a4\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u542b\u3080\u5b8c\u5168\u306b\u6a5f\u80fd\u3059\u308bKubernetes\u30af\u30e9\u30b9\u30bf\u30fc\u3067\u3059\u3002\u8ffd\u52a0\u306e\u30b5\u30fc\u30d0\u30fc\u3084\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u5bb9\u91cf\u3084\u5197\u9577\u6027\u3092\u8ffd\u52a0\u3059\u308b\u305f\u3081\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3059\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["\u8ffd\u52a0\u306e\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u30ce\u30fc\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u30af\u30e9\u30b9\u30bf\u30fc\u306b\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001",(0,t.jsx)(s.code,{children:"K3S_URL"}),"\u304a\u3088\u3073",(0,t.jsx)(s.code,{children:"K3S_TOKEN"}),"\u74b0\u5883\u5909\u6570\u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u53c2\u52a0\u3055\u305b\u308b\u65b9\u6cd5\u306e\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"K3S_URL"}),"\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u8a2d\u5b9a\u3059\u308b\u3068\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30e9\u30fc\u306fK3s\u3092\u30b5\u30fc\u30d0\u30fc\u3067\u306f\u306a\u304f\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u3057\u3066\u69cb\u6210\u3057\u307e\u3059\u3002K3s\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u3001\u6307\u5b9a\u3055\u308c\u305fURL\u3067\u30ea\u30c3\u30b9\u30f3\u3057\u3066\u3044\u308bK3s\u30b5\u30fc\u30d0\u30fc\u306b\u767b\u9332\u3055\u308c\u307e\u3059\u3002",(0,t.jsx)(s.code,{children:"K3S_TOKEN"}),"\u306b\u4f7f\u7528\u3059\u308b\u5024\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306e",(0,t.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/node-token"}),"\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["\u5404\u30de\u30b7\u30f3\u306b\u306f\u4e00\u610f\u306e\u30db\u30b9\u30c8\u540d\u304c\u5fc5\u8981\u3067\u3059\u3002\u30de\u30b7\u30f3\u306b\u4e00\u610f\u306e\u30db\u30b9\u30c8\u540d\u304c\u306a\u3044\u5834\u5408\u306f\u3001",(0,t.jsx)(s.code,{children:"K3S_NODE_NAME"}),"\u74b0\u5883\u5909\u6570\u3092\u6e21\u3057\u3001\u5404\u30ce\u30fc\u30c9\u306b\u5bfe\u3057\u3066\u6709\u52b9\u3067\u4e00\u610f\u306e\u30db\u30b9\u30c8\u540d\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,t.jsxs)(s.p,{children:["\u8ffd\u52a0\u306e\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306b\u8208\u5473\u304c\u3042\u308b\u5834\u5408\u306f\u3001",(0,t.jsx)(s.a,{href:"/ja/datastore/ha-embedded",children:"\u9ad8\u53ef\u7528\u6027\u57cb\u3081\u8fbc\u307fetcd"}),"\u304a\u3088\u3073",(0,t.jsx)(s.a,{href:"/ja/datastore/ha",children:"\u9ad8\u53ef\u7528\u6027\u5916\u90e8DB"}),"\u30da\u30fc\u30b8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>i});var t=n(7294);const r={},c=t.createContext(r);function i(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);