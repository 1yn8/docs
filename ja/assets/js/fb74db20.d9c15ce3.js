"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7887],{9738:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var s=r(5893),i=r(1151);const c={title:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u8a2d\u5b9a"},d=void 0,l={id:"installation/private-registry",title:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u8a2d\u5b9a",description:"Containerd\u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u63a5\u7d9a\u3057\u3001kubelet\u304c\u5fc5\u8981\u3068\u3059\u308b\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30eb\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/installation/private-registry.md",sourceDirName:"installation",slug:"/installation/private-registry",permalink:"/ja/installation/private-registry",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/private-registry.md",tags:[],version:"current",lastUpdatedAt:172958706e4,frontMatter:{title:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u8a2d\u5b9a"},sidebar:"mySidebar",previous:{title:"\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3",permalink:"/ja/installation/configuration"},next:{title:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc",permalink:"/ja/installation/registry-mirror"}},t={},o=[{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af",level:2},{value:"\u30ec\u30b8\u30b9\u30c8\u30ea\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",id:"\u30ec\u30b8\u30b9\u30c8\u30ea\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",level:2},{value:"\u30df\u30e9\u30fc",id:"\u30df\u30e9\u30fc",level:3},{value:"\u30ea\u30c0\u30a4\u30ec\u30af\u30c8",id:"\u30ea\u30c0\u30a4\u30ec\u30af\u30c8",level:4},{value:"\u30ea\u30e9\u30a4\u30c8",id:"\u30ea\u30e9\u30a4\u30c8",level:4},{value:"\u8a2d\u5b9a",id:"\u8a2d\u5b9a",level:3},{value:"\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u30b5\u30dd\u30fc\u30c8",id:"\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u30b5\u30dd\u30fc\u30c8",level:3},{value:"TLS\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408",id:"tls\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408",level:3},{value:"TLS\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408",id:"tls\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408",level:3},{value:"\u30a4\u30e1\u30fc\u30b8\u30d7\u30eb\u306e\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",id:"\u30a4\u30e1\u30fc\u30b8\u30d7\u30eb\u306e\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",level:2},{value:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3078\u306e\u30a4\u30e1\u30fc\u30b8\u306e\u8ffd\u52a0",id:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3078\u306e\u30a4\u30e1\u30fc\u30b8\u306e\u8ffd\u52a0",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{TabItem:r,Tabs:c}=n;return r||a("TabItem",!0),c||a("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Containerd\u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u63a5\u7d9a\u3057\u3001kubelet\u304c\u5fc5\u8981\u3068\u3059\u308b\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30eb\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u8d77\u52d5\u6642\u306b\u3001K3s\u306f",(0,s.jsx)(n.code,{children:"/etc/rancher/k3s/registries.yaml"}),"\u304c\u5b58\u5728\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u5b58\u5728\u3059\u308b\u5834\u5408\u3001\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u306b\u542b\u307e\u308c\u308b\u30ec\u30b8\u30b9\u30c8\u30ea\u8a2d\u5b9a\u304ccontainerd\u8a2d\u5b9a\u306e\u751f\u6210\u6642\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["docker.io\u306e\u3088\u3046\u306a\u30d1\u30d6\u30ea\u30c3\u30af\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30df\u30e9\u30fc\u3068\u3057\u3066\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u4f7f\u7528\u3057\u305f\u3044\u5834\u5408\u3001\u305d\u306e\u30df\u30e9\u30fc\u3092\u4f7f\u7528\u3059\u308b\u5404\u30ce\u30fc\u30c9\u306b",(0,s.jsx)(n.code,{children:"registries.yaml"}),"\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u8a8d\u8a3c\u3092\u5fc5\u8981\u3068\u3059\u308b\u5834\u5408\u3001\u30ab\u30b9\u30bf\u30e0TLS\u8a3c\u660e\u66f8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u307e\u305f\u306fTLS\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u3001\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30eb\u3059\u308b\u5404\u30ce\u30fc\u30c9\u306b",(0,s.jsx)(n.code,{children:"registries.yaml"}),"\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306b\u6c5a\u67d3\u3092\u8a2d\u5b9a\u3057\u3066\u304a\u3089\u305a\u3001\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u5834\u5408\u306f\u3001\u5404\u30b5\u30fc\u30d0\u30fc\u306b\u3082",(0,s.jsx)(n.code,{children:"registries.yaml"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af",children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af"}),"\n",(0,s.jsxs)(n.p,{children:["Containerd\u306b\u306f\u3059\u3079\u3066\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u5bfe\u3057\u3066\u6697\u9ed9\u306e\u300c\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u300d\u304c\u3042\u308a\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f\u3001",(0,s.jsx)(n.code,{children:"registries.yaml"}),"\u306b\u305d\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u4ed6\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304c\u30ea\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3067\u3082\u3001\u6700\u5f8c\u306e\u624b\u6bb5\u3068\u3057\u3066\u5e38\u306b\u8a66\u3055\u308c\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001",(0,s.jsx)(n.code,{children:"registry.example.com:5000/rancher/mirrored-pause:3.6"}),"\u3092\u30d7\u30eb\u3059\u308b\u5834\u5408\u3001containerd\u306f",(0,s.jsx)(n.code,{children:"https://registry.example.com:5000/v2"}),"\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docker.io"}),"\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f",(0,s.jsx)(n.code,{children:"https://index.docker.io/v2"}),"\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u4ed6\u306e\u3059\u3079\u3066\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306f",(0,s.jsx)(n.code,{children:"https://<REGISTRY>/v2"}),"\u3067\u3059\u3002",(0,s.jsx)(n.code,{children:"<REGISTRY>"}),"\u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30db\u30b9\u30c8\u540d\u3068\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30dd\u30fc\u30c8\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u30ec\u30b8\u30b9\u30c8\u30ea\u3068\u3057\u3066\u8a8d\u8b58\u3055\u308c\u308b\u305f\u3081\u306b\u306f\u3001\u30a4\u30e1\u30fc\u30b8\u540d\u306e\u6700\u521d\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5c11\u306a\u304f\u3068\u30821\u3064\u306e\u30d4\u30ea\u30aa\u30c9\u307e\u305f\u306f\u30b3\u30ed\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u6b74\u53f2\u7684\u306a\u7406\u7531\u304b\u3089\u3001\u540d\u524d\u306b\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u30a4\u30e1\u30fc\u30b8\u306f\u6697\u9ed9\u7684\u306b",(0,s.jsx)(n.code,{children:"docker.io"}),"\u304b\u3089\u306e\u3082\u306e\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--disable-default-registry-endpoint"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u306f2024\u5e741\u6708\u306e\u30ea\u30ea\u30fc\u30b9\u304b\u3089\u5b9f\u9a13\u7684\u6a5f\u80fd\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u3067\u3059\uff1av1.26.13+k3s1\u3001v1.27.10+k3s1\u3001v1.28.6+k3s1\u3001v1.29.1+k3s1"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u30ce\u30fc\u30c9\u306f",(0,s.jsx)(n.code,{children:"--disable-default-registry-endpoint"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3057\u3066\u8d77\u52d5\u3067\u304d\u307e\u3059\u3002\n\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001containerd\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u305b\u305a\u3001\u8a2d\u5b9a\u3055\u308c\u305f\u30df\u30e9\u30fc\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068\u3001\u5206\u6563\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u305d\u308c\u3092\u4f7f\u7528\u3057\u3066\u306e\u307f\u30d7\u30eb\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3053\u308c\u306f\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u304c\u4e0a\u6d41\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u5229\u7528\u3067\u304d\u306a\u3044\u771f\u306e\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u74b0\u5883\u306b\u3042\u308b\u5834\u5408\u3084\u3001\u4e00\u90e8\u306e\u30ce\u30fc\u30c9\u306e\u307f\u304c\u4e0a\u6d41\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30d7\u30eb\u3059\u308b\u3053\u3068\u3092\u5e0c\u671b\u3059\u308b\u5834\u5408\u306b\u671b\u307e\u3057\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u7121\u52b9\u5316\u306f\u3001",(0,s.jsx)(n.code,{children:"registries.yaml"}),"\u3092\u4ecb\u3057\u3066\u8a2d\u5b9a\u3055\u308c\u305f\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u306e\u307f\u9069\u7528\u3055\u308c\u307e\u3059\u3002\n\u30ec\u30b8\u30b9\u30c8\u30ea\u304c",(0,s.jsx)(n.code,{children:"registries.yaml"}),"\u306e\u30df\u30e9\u30fc\u30a8\u30f3\u30c8\u30ea\u3092\u4ecb\u3057\u3066\u660e\u793a\u7684\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u52d5\u4f5c\u306f\u5f15\u304d\u7d9a\u304d\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30ec\u30b8\u30b9\u30c8\u30ea\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb",children:"\u30ec\u30b8\u30b9\u30c8\u30ea\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb"}),"\n",(0,s.jsx)(n.p,{children:"\u30d5\u30a1\u30a4\u30eb\u306f2\u3064\u306e\u30c8\u30c3\u30d7\u30ec\u30d9\u30eb\u30ad\u30fc\u3067\u69cb\u6210\u3055\u308c\u3001\u305d\u308c\u305e\u308c\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u5bfe\u3057\u3066\u30b5\u30d6\u30ad\u30fc\u304c\u3042\u308a\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"mirrors:\n  <REGISTRY>:\n    endpoint:\n      - https://<REGISTRY>/v2\nconfigs:\n  <REGISTRY>:\n    auth:\n      username: <BASIC AUTH USERNAME>\n      password: <BASIC AUTH PASSWORD>\n      token: <BEARER TOKEN>\n    tls:\n      ca_file: <PATH TO SERVER CA>\n      cert_file: <PATH TO CLIENT CERT>\n      key_file: <PATH TO CLIENT KEY>\n      insecure_skip_verify: <SKIP TLS CERT VERIFICATION BOOLEAN>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u30df\u30e9\u30fc",children:"\u30df\u30e9\u30fc"}),"\n",(0,s.jsx)(n.p,{children:"\u30df\u30e9\u30fc\u30bb\u30af\u30b7\u30e7\u30f3\u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u540d\u524d\u3068\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'mirrors:\n  registry.example.com:\n    endpoint:\n      - "https://registry.example.com:5000"\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5404\u30df\u30e9\u30fc\u306b\u306f\u540d\u524d\u3068\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30bb\u30c3\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30eb\u3059\u308b\u969b\u3001containerd\u306f\u3053\u308c\u3089\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8URL\u3068\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u8a66\u3057\u3001\u6700\u521d\u306b\u52d5\u4f5c\u3059\u308b\u3082\u306e\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u30ea\u30c0\u30a4\u30ec\u30af\u30c8",children:"\u30ea\u30c0\u30a4\u30ec\u30af\u30c8"}),"\n",(0,s.jsxs)(n.p,{children:["\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u4ed6\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30df\u30e9\u30fc\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u308b\u5834\u5408\u3001\u4f8b\u3048\u3070",(0,s.jsx)(n.a,{href:"https://docs.docker.com/registry/recipes/mirror/",children:"\u30d7\u30eb\u30b9\u30eb\u30fc\u30ad\u30e3\u30c3\u30b7\u30e5"}),"\u3092\u8a2d\u5b9a\u3059\u308b\u5834\u5408\u3001\n\u30a4\u30e1\u30fc\u30b8\u30d7\u30eb\u306f\u30ea\u30b9\u30c8\u3055\u308c\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u900f\u904e\u7684\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3055\u308c\u307e\u3059\u3002\u5143\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u540d\u306f",(0,s.jsx)(n.code,{children:"ns"}),"\u30af\u30a8\u30ea\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u4ecb\u3057\u3066\u30df\u30e9\u30fc\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u6e21\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u3001",(0,s.jsx)(n.code,{children:"docker.io"}),"\u306e\u30df\u30e9\u30fc\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u5834\u5408\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e\u5834\u5408\u3001",(0,s.jsx)(n.code,{children:"docker.io/rancher/mirrored-pause:3.6"}),"\u3092\u30d7\u30eb\u3059\u308b\u3068\u3001\u900f\u904e\u7684\u306b",(0,s.jsx)(n.code,{children:"registry.example.com:5000/rancher/mirrored-pause:3.6"}),"\u3068\u3057\u3066\u30a4\u30e1\u30fc\u30b8\u304c\u30d7\u30eb\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u30ea\u30e9\u30a4\u30c8",children:"\u30ea\u30e9\u30a4\u30c8"}),"\n",(0,s.jsx)(n.p,{children:"\u5404\u30df\u30e9\u30fc\u306b\u306f\u30ea\u30e9\u30a4\u30c8\u306e\u30bb\u30c3\u30c8\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30ea\u30e9\u30a4\u30c8\u306f\u6b63\u898f\u8868\u73fe\u306b\u57fa\u3065\u3044\u3066\u30a4\u30e1\u30fc\u30b8\u306e\u540d\u524d\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002\n\u3053\u308c\u306f\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u7d44\u7e54/\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u69cb\u9020\u304c\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3057\u3066\u3044\u308b\u30ec\u30b8\u30b9\u30c8\u30ea\u3068\u7570\u306a\u308b\u5834\u5408\u306b\u4fbf\u5229\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u3001\u6b21\u306e\u8a2d\u5b9a\u306f\u3001",(0,s.jsx)(n.code,{children:"docker.io/rancher/mirrored-pause:3.6"}),"\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u900f\u904e\u7684\u306b",(0,s.jsx)(n.code,{children:"registry.example.com:5000/mirrorproject/rancher-images/mirrored-pause:3.6"}),"\u3068\u3057\u3066\u30d7\u30eb\u3057\u307e\u3059\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n    rewrite:\n      "^rancher/(.*)": "mirrorproject/rancher-images/$1"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3068\u30ea\u30e9\u30a4\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3067\u3082\u3001\u30a4\u30e1\u30fc\u30b8\u306f\u5143\u306e\u540d\u524d\u306e\u4e0b\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001",(0,s.jsx)(n.code,{children:"crictl image ls"}),"\u306f\u3001\u30ce\u30fc\u30c9\u4e0a\u3067",(0,s.jsx)(n.code,{children:"docker.io/rancher/mirrored-pause:3.6"}),"\u304c\u5229\u7528\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u307e\u3059\u304c\u3001\u30a4\u30e1\u30fc\u30b8\u306f\u7570\u306a\u308b\u540d\u524d\u3067\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30d7\u30eb\u3055\u308c\u307e\u3057\u305f\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u8a2d\u5b9a",children:"\u8a2d\u5b9a"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"configs"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u306f\u5404\u30df\u30e9\u30fc\u306eTLS\u304a\u3088\u3073\u8a8d\u8a3c\u8a2d\u5b9a\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u5404\u30df\u30e9\u30fc\u306b\u5bfe\u3057\u3066",(0,s.jsx)(n.code,{children:"auth"}),"\u304a\u3088\u3073/\u307e\u305f\u306f",(0,s.jsx)(n.code,{children:"tls"}),"\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tls"}),"\u90e8\u5206\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u69cb\u6210\u3055\u308c\u307e\u3059\uff1a"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30c7\u30a3\u30ec\u30af\u30c6\u30a3\u30d6"}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cert_file"})}),(0,s.jsx)(n.td,{children:"\u30ec\u30b8\u30b9\u30c8\u30ea\u3068\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a3c\u660e\u66f8\u306e\u30d1\u30b9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"key_file"})}),(0,s.jsx)(n.td,{children:"\u30ec\u30b8\u30b9\u30c8\u30ea\u3068\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30ad\u30fc\u306e\u30d1\u30b9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ca_file"})}),(0,s.jsx)(n.td,{children:"\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30b5\u30fc\u30d0\u30fc\u8a3c\u660e\u66f8\u30d5\u30a1\u30a4\u30eb\u3092\u691c\u8a3c\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308bCA\u8a3c\u660e\u66f8\u306e\u30d1\u30b9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"insecure_skip_verify"})}),(0,s.jsx)(n.td,{children:"\u30ec\u30b8\u30b9\u30c8\u30ea\u306eTLS\u691c\u8a3c\u3092\u30b9\u30ad\u30c3\u30d7\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u5b9a\u7fa9\u3059\u308b\u30d6\u30fc\u30eb\u5024"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"auth"}),"\u90e8\u5206\u306f\u30e6\u30fc\u30b6\u30fc\u540d/\u30d1\u30b9\u30ef\u30fc\u30c9\u307e\u305f\u306f\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3\u306e\u3044\u305a\u308c\u304b\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\uff1a"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u30c7\u30a3\u30ec\u30af\u30c6\u30a3\u30d6"}),(0,s.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"username"})}),(0,s.jsx)(n.td,{children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u57fa\u672c\u8a8d\u8a3c\u306e\u30e6\u30fc\u30b6\u30fc\u540d"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"password"})}),(0,s.jsx)(n.td,{children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u57fa\u672c\u8a8d\u8a3c\u306e\u30e6\u30fc\u30b6\u30fc\u30d1\u30b9\u30ef\u30fc\u30c9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"auth"})}),(0,s.jsx)(n.td,{children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u57fa\u672c\u8a8d\u8a3c\u306e\u8a8d\u8a3c\u30c8\u30fc\u30af\u30f3"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f\u3001\u7570\u306a\u308b\u30e2\u30fc\u30c9\u3067\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u4f7f\u7528\u3059\u308b\u57fa\u672c\u7684\u306a\u4f8b\u3067\u3059\uff1a"}),"\n",(0,s.jsx)(n.h3,{id:"\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u30b5\u30dd\u30fc\u30c8",children:"\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u30b5\u30dd\u30fc\u30c8"}),"\n",(0,s.jsx)(n.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,s.jsx)(n.p,{children:"\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u30b5\u30dd\u30fc\u30c8\u306f2024\u5e743\u6708\u306e\u30ea\u30ea\u30fc\u30b9\u304b\u3089\u5229\u7528\u53ef\u80fd\u3067\u3059\uff1av1.26.15+k3s1\u3001v1.27.12+k3s1\u3001v1.28.8+k3s1\u3001v1.29.3+k3s1"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"mirrors"}),"\u304a\u3088\u3073",(0,s.jsx)(n.code,{children:"configs"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3067",(0,s.jsx)(n.code,{children:'"*"'}),"\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u30a8\u30f3\u30c8\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001\u3059\u3079\u3066\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u5bfe\u3059\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u3092\u63d0\u4f9b\u3067\u304d\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a\u306f\u3001\u305d\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u7279\u5b9a\u306e\u30a8\u30f3\u30c8\u30ea\u304c\u306a\u3044\u5834\u5408\u306b\u306e\u307f\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u30a2\u30b9\u30bf\u30ea\u30b9\u30af\u306f\u5fc5\u305a\u5f15\u7528\u7b26\u3067\u56f2\u3080\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u3059\u3079\u3066\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u5bfe\u3057\u3066\u30ed\u30fc\u30ab\u30eb\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002",(0,s.jsx)(n.code,{children:"docker.io"}),"\u3092\u9664\u304f\u3059\u3079\u3066\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u5bfe\u3057\u3066TLS\u691c\u8a3c\u304c\u7121\u52b9\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'mirrors:\n  "*":\n    endpoint:\n      - "https://registry.example.com:5000"\nconfigs:\n  "docker.io":\n  "*":\n    tls:\n      insecure_skip_verify: true\n'})}),"\n",(0,s.jsx)(n.h3,{id:"tls\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408",children:"TLS\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306f\u3001TLS\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306b\u5404\u30ce\u30fc\u30c9\u3067",(0,s.jsx)(n.code,{children:"/etc/rancher/k3s/registries.yaml"}),"\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3059\u4f8b\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)(r,{value:"\u8a8d\u8a3c\u3042\u308a",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    auth:\n      username: xxxxxx # \u3053\u308c\u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3067\u3059\n      password: xxxxxx # \u3053\u308c\u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3067\u3059\n    tls:\n      cert_file: # \u30ec\u30b8\u30b9\u30c8\u30ea\u3067\u4f7f\u7528\u3055\u308c\u308b\u8a3c\u660e\u66f8\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\n      key_file:  # \u30ec\u30b8\u30b9\u30c8\u30ea\u3067\u4f7f\u7528\u3055\u308c\u308b\u30ad\u30fc\u306e\u30d1\u30b9\n      ca_file:   # \u30ec\u30b8\u30b9\u30c8\u30ea\u3067\u4f7f\u7528\u3055\u308c\u308bCA\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\n'})})}),(0,s.jsx)(r,{value:"\u8a8d\u8a3c\u306a\u3057",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    tls:\n      cert_file: # \u30ec\u30b8\u30b9\u30c8\u30ea\u3067\u4f7f\u7528\u3055\u308c\u308b\u8a3c\u660e\u66f8\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\n      key_file:  # \u30ec\u30b8\u30b9\u30c8\u30ea\u3067\u4f7f\u7528\u3055\u308c\u308b\u30ad\u30fc\u306e\u30d1\u30b9\n      ca_file:   # \u30ec\u30b8\u30b9\u30c8\u30ea\u3067\u4f7f\u7528\u3055\u308c\u308bCA\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"tls\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408",children:"TLS\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306f\u3001TLS\u3092\u4f7f\u7528\u3057\u306a\u3044\u5834\u5408\u306b\u5404\u30ce\u30fc\u30c9\u3067",(0,s.jsx)(n.code,{children:"/etc/rancher/k3s/registries.yaml"}),"\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u793a\u3059\u4f8b\u3067\u3059\u3002"]}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)(r,{value:"\u8a8d\u8a3c\u3042\u308a",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "http://registry.example.com:5000"\nconfigs:\n  "registry.example.com:5000":\n    auth:\n      username: xxxxxx # \u3053\u308c\u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3067\u3059\n      password: xxxxxx # \u3053\u308c\u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u3067\u3059\n'})})}),(0,s.jsx)(r,{value:"\u8a8d\u8a3c\u306a\u3057",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "http://registry.example.com:5000"\n'})})})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["TLS\u901a\u4fe1\u304c\u306a\u3044\u5834\u5408\u3001\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b",(0,s.jsx)(n.code,{children:"http://"}),"\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u3046\u3057\u306a\u3044\u3068\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067https\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u5909\u66f4\u3092\u6709\u52b9\u306b\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u5404\u30ce\u30fc\u30c9\u3067K3s\u3092\u518d\u8d77\u52d5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u30a4\u30e1\u30fc\u30b8\u30d7\u30eb\u306e\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",children:"\u30a4\u30e1\u30fc\u30b8\u30d7\u30eb\u306e\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"}),"\n",(0,s.jsx)(n.p,{children:"Kubernetes\u304c\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30eb\u306b\u554f\u984c\u3092\u62b1\u3048\u3066\u3044\u308b\u5834\u5408\u3001kubelet\u306b\u3088\u3063\u3066\u8868\u793a\u3055\u308c\u308b\u30a8\u30e9\u30fc\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u884c\u308f\u308c\u305f\u30d7\u30eb\u8a66\u884c\u304b\u3089\u8fd4\u3055\u308c\u305f\u6700\u7d42\u30a8\u30e9\u30fc\u306e\u307f\u3092\u53cd\u6620\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u3001\u8a2d\u5b9a\u3055\u308c\u305f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304c\u4f7f\u7528\u3055\u308c\u3066\u3044\u306a\u3044\u3088\u3046\u306b\u898b\u3048\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u30ce\u30fc\u30c9\u306e",(0,s.jsx)(n.code,{children:"/var/lib/rancher/k3s/agent/containerd/containerd.log"}),"\u306b\u3042\u308bcontainerd\u30ed\u30b0\u3092\u78ba\u8a8d\u3057\u3066\u3001\u5931\u6557\u306e\u6839\u672c\u539f\u56e0\u306b\u95a2\u3059\u308b\u8a73\u7d30\u60c5\u5831\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3078\u306e\u30a4\u30e1\u30fc\u30b8\u306e\u8ffd\u52a0",children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3078\u306e\u30a4\u30e1\u30fc\u30b8\u306e\u8ffd\u52a0"}),"\n",(0,s.jsx)(n.p,{children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u30a4\u30e1\u30fc\u30b8\u3092\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3059\u308b\u306b\u306f\u3001\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30eb\u304a\u3088\u3073\u30d7\u30c3\u30b7\u30e5\u3067\u304d\u308bDocker\u307e\u305f\u306f\u4ed6\u306e\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3\u30c4\u30fc\u30eb\u3092\u5099\u3048\u305f\u30db\u30b9\u30c8\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u4ee5\u4e0b\u306e\u624b\u9806\u306f\u3001dockerd\u3068docker CLI\u30c4\u30fc\u30eb\u3001\u304a\u3088\u3073docker.io\u3068\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u4e21\u65b9\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u30db\u30b9\u30c8\u304c\u3042\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4f5c\u696d\u3057\u3066\u3044\u308b\u30ea\u30ea\u30fc\u30b9\u306eGitHub\u304b\u3089",(0,s.jsx)(n.code,{children:"k3s-images.txt"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"k3s-images.txt"}),"\u30d5\u30a1\u30a4\u30eb\u306b\u30ea\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u5404K3s\u30a4\u30e1\u30fc\u30b8\u3092docker.io\u304b\u3089\u30d7\u30eb\u3057\u307e\u3059\u3002",(0,s.jsx)(n.br,{}),"\n","\u4f8b\uff1a",(0,s.jsx)(n.code,{children:"docker pull docker.io/rancher/mirrored-pause:3.6"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u518d\u30bf\u30b0\u4ed8\u3051\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b: ",(0,s.jsx)(n.code,{children:"docker tag docker.io/rancher/mirrored-pause:3.6 registry.example.com:5000/rancher/mirrored-pause:3.6"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u30d7\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002",(0,s.jsx)(n.br,{}),"\n","\u4f8b: ",(0,s.jsx)(n.code,{children:"docker push registry.example.com:5000/rancher/mirrored-pause:3.6"})]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function a(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>d});var s=r(7294);const i={},c=s.createContext(i);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);