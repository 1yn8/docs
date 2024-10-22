"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[2860],{1731:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=r(5893),s=r(1151);const l={title:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc"},d=void 0,c={id:"installation/registry-mirror",title:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc",description:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u306f\u30012024\u5e741\u6708\u306e\u30ea\u30ea\u30fc\u30b9\u304b\u3089\u5b9f\u9a13\u7684\u306a\u6a5f\u80fd\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u3067\u3059\uff1av1.26.13+k3s1\u3001v1.27.10+k3s1\u3001v1.28.6+k3s1\u3001v1.29.1+k3s1",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/installation/registry-mirror.md",sourceDirName:"installation",slug:"/installation/registry-mirror",permalink:"/ja/installation/registry-mirror",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/registry-mirror.md",tags:[],version:"current",lastUpdatedAt:172958706e4,frontMatter:{title:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc"},sidebar:"mySidebar",previous:{title:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u8a2d\u5b9a",permalink:"/ja/installation/private-registry"},next:{title:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",permalink:"/ja/installation/airgap"}},t={},o=[{value:"\u5206\u6563OCI\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u306e\u6709\u52b9\u5316",id:"\u5206\u6563oci\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u306e\u6709\u52b9\u5316",level:2},{value:"\u8981\u4ef6",id:"\u8981\u4ef6",level:3},{value:"\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u306e\u6709\u52b9\u5316",id:"\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u306e\u6709\u52b9\u5316",level:2},{value:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af",id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af",level:3},{value:"\u6700\u65b0\u30bf\u30b0",id:"\u6700\u65b0\u30bf\u30b0",level:3},{value:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",id:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",level:2},{value:"\u8a8d\u8a3c",id:"\u8a8d\u8a3c",level:3},{value:"\u6f5c\u5728\u7684\u306a\u61f8\u5ff5",id:"\u6f5c\u5728\u7684\u306a\u61f8\u5ff5",level:3},{value:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u307e\u305f\u306f\u624b\u52d5\u3067\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u306e\u5171\u6709",id:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u307e\u305f\u306f\u624b\u52d5\u3067\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u306e\u5171\u6709",level:2},{value:"\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30c3\u30b7\u30e5",id:"\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30c3\u30b7\u30e5",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,i.jsx)(n.p,{children:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u306f\u30012024\u5e741\u6708\u306e\u30ea\u30ea\u30fc\u30b9\u304b\u3089\u5b9f\u9a13\u7684\u306a\u6a5f\u80fd\u3068\u3057\u3066\u5229\u7528\u53ef\u80fd\u3067\u3059\uff1av1.26.13+k3s1\u3001v1.27.10+k3s1\u3001v1.28.6+k3s1\u3001v1.29.1+k3s1"})}),"\n",(0,i.jsxs)(n.p,{children:["K3s\u306f\u3001Kubernetes\u30af\u30e9\u30b9\u30bf\u30fc\u5185\u306e\u30ce\u30fc\u30c9\u9593\u3067\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u3092\u30d4\u30a2\u30c4\u30fc\u30d4\u30a2\u3067\u5171\u6709\u3067\u304d\u308b\u3001\u30b9\u30c6\u30fc\u30c8\u30ec\u30b9\u306a\u5206\u6563OCI\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u3067\u3042\u308b",(0,i.jsx)(n.a,{href:"https://github.com/spegel-org/spegel",children:"Spegel"}),"\u3092\u57cb\u3081\u8fbc\u3093\u3067\u3044\u307e\u3059\u3002\n\u5206\u6563\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5206\u6563oci\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u306e\u6709\u52b9\u5316",children:"\u5206\u6563OCI\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u306e\u6709\u52b9\u5316"}),"\n",(0,i.jsxs)(n.p,{children:["\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u3092",(0,i.jsx)(n.code,{children:"--embedded-registry"}),"\u30d5\u30e9\u30b0\u3092\u4ed8\u3051\u3066\u8d77\u52d5\u3059\u308b\u304b\u3001\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306b",(0,i.jsx)(n.code,{children:"embedded-registry: true"}),"\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u3053\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u5185\u306e\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9\u3067\u57cb\u3081\u8fbc\u307f\u30df\u30e9\u30fc\u304c\u4f7f\u7528\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30af\u30e9\u30b9\u30bf\u30fc\u5168\u4f53\u3067\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9\u306f\u30dd\u30fc\u30c86443\u3067\u30ed\u30fc\u30ab\u30ebOCI\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u30db\u30b9\u30c8\u3057\u3001\u30dd\u30fc\u30c85001\u3067\u30d4\u30a2\u30c4\u30fc\u30d4\u30a2\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4ecb\u3057\u3066\u5229\u7528\u53ef\u80fd\u306a\u30a4\u30e1\u30fc\u30b8\u306e\u30ea\u30b9\u30c8\u3092\u516c\u958b\u3057\u307e\u3059\u3002\n\u4efb\u610f\u306e\u30ce\u30fc\u30c9\u306econtainerd\u30a4\u30e1\u30fc\u30b8\u30b9\u30c8\u30a2\u306b\u3042\u308b\u30a4\u30e1\u30fc\u30b8\u306f\u3001\u5916\u90e8\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u30a2\u30af\u30bb\u30b9\u305b\u305a\u306b\u4ed6\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30e1\u30f3\u30d0\u30fc\u306b\u3088\u3063\u3066\u30d7\u30eb\u3055\u308c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n",(0,i.jsx)(n.a,{href:"/ja/installation/airgap#manually-deploy-images-method",children:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u30a4\u30e1\u30fc\u30b8tar\u30d5\u30a1\u30a4\u30eb"}),"\u3092\u4ecb\u3057\u3066\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u306f\u3001Kubelet\u306e\u30ac\u30d9\u30fc\u30b8\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306b\u3088\u3063\u3066\u524a\u9664\u3055\u308c\u306a\u3044\u3088\u3046\u306bcontainerd\u306b\u56fa\u5b9a\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30d4\u30a2\u30c4\u30fc\u30d4\u30a2\u30dd\u30fc\u30c8\u306f\u3001K3s\u30b5\u30fc\u30d3\u30b9\u306e\u74b0\u5883\u5909\u6570",(0,i.jsx)(n.code,{children:"K3S_P2P_PORT"}),"\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u30675001\u304b\u3089\u5909\u66f4\u3067\u304d\u307e\u3059\u3002\u30dd\u30fc\u30c8\u306f\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9\u3067\u540c\u3058\u5024\u306b\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u30dd\u30fc\u30c8\u306e\u5909\u66f4\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u304a\u3089\u305a\u3001\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u8981\u4ef6",children:"\u8981\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u3059\u3079\u3066\u306e\u30ce\u30fc\u30c9\u306f\u5185\u90e8IP\u30a2\u30c9\u30ec\u30b9\u3092\u4ecb\u3057\u3066\u3001TCP\u30dd\u30fc\u30c85001\u304a\u3088\u30736443\u3067\u76f8\u4e92\u306b\u63a5\u7d9a\u3067\u304d\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u30ce\u30fc\u30c9\u304c\u76f8\u4e92\u306b\u63a5\u7d9a\u3067\u304d\u306a\u3044\u5834\u5408\u3001\u5206\u6563\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u6700\u521d\u306b\u8a66\u3055\u308c\u3001\u305d\u306e\u5f8c\u4ed6\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3059\u308b\u305f\u3081\u3001\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30eb\u306b\u6642\u9593\u304c\u304b\u304b\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u306e\u6709\u52b9\u5316",children:"\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u306e\u6709\u52b9\u5316"}),"\n",(0,i.jsx)(n.p,{children:"\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3092\u6709\u52b9\u306b\u3059\u308b\u3068\u3001\u30ce\u30fc\u30c9\u306f\u4ed6\u306e\u30ce\u30fc\u30c9\u304b\u3089\u305d\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30eb\u3057\u3001\u305d\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u4ed6\u306e\u30ce\u30fc\u30c9\u3068\u5171\u6709\u3067\u304d\u307e\u3059\u3002\n\u4e00\u90e8\u306e\u30ce\u30fc\u30c9\u3067\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u304c\u3001\u4ed6\u306e\u30ce\u30fc\u30c9\u3067\u306f\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u30ce\u30fc\u30c9\u306e\u307f\u304c\u305d\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a4\u30e1\u30fc\u30b8\u3092\u4ea4\u63db\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0a\u6d41\u306e\u30b3\u30f3\u30c6\u30ca\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u306e\u30a4\u30e1\u30fc\u30b8\u306e\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u30ce\u30fc\u30c9\u306f\u305d\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306e",(0,i.jsx)(n.code,{children:"registries.yaml"}),"\u306e",(0,i.jsx)(n.code,{children:"mirrors"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u30a8\u30f3\u30c8\u30ea\u3092\u6301\u3063\u3066\u3044\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u306f\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u30ea\u30b9\u30c8\u3059\u308b\u5fc5\u8981\u306f\u306a\u304f\u3001\u5b58\u5728\u3059\u308b\u3060\u3051\u3067\u5341\u5206\u3067\u3059\u3002\n\u4f8b\u3048\u3070\u3001",(0,i.jsx)(n.code,{children:"docker.io"}),"\u304a\u3088\u3073",(0,i.jsx)(n.code,{children:"registry.k8s.io"}),"\u304b\u3089\u306e\u30a4\u30e1\u30fc\u30b8\u306e\u5206\u6563\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001\u3059\u3079\u3066\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30ce\u30fc\u30c9\u3067\u4ee5\u4e0b\u306e\u5185\u5bb9\u3067",(0,i.jsx)(n.code,{children:"registries.yaml"}),"\u3092\u8a2d\u5b9a\u3057\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"mirrors:\n  docker.io:\n  registry.k8s.io:\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3082\u901a\u5e38\u901a\u308a\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\n\u4ee5\u4e0b\u306e\u8a2d\u5b9a\u3067\u306f\u3001\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30eb\u306f\u6700\u521d\u306b\u57cb\u3081\u8fbc\u307f\u30df\u30e9\u30fc\u3092\u8a66\u3057\u3001\u305d\u306e\u5f8c",(0,i.jsx)(n.code,{children:"mirror.example.com"}),"\u3001\u6700\u5f8c\u306b",(0,i.jsx)(n.code,{children:"docker.io"}),"\u3092\u8a66\u307f\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"mirrors:\n  docker.io:\n    endpoint:\n      - https://mirror.example.com\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u76f4\u63a5\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u4e0a\u6d41\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u30df\u30e9\u30fc\u3068\u3057\u3066\u3067\u306f\u306a\u304f\u3001\u30d1\u30d6\u30ea\u30c3\u30af\u30ec\u30b8\u30b9\u30c8\u30ea\u3068\u540c\u69d8\u306b\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3092\u6709\u52b9\u306b\u3067\u304d\u307e\u3059 - \u30df\u30e9\u30fc\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u30ea\u30b9\u30c8\u3059\u308b\u3053\u3068\u3067\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"mirrors:\n  mirror.example.com:\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b2\u30fc\u30c8",type:"info",children:(0,i.jsx)(n.p,{children:"\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u30b5\u30dd\u30fc\u30c8\u306f\u30012024\u5e743\u6708\u306e\u30ea\u30ea\u30fc\u30b9\u304b\u3089\u5229\u7528\u53ef\u80fd\u3067\u3059\uff1av1.26.15+k3s1\u3001v1.27.12+k3s1\u3001v1.28.8+k3s1\u3001v1.29.3+k3s1"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"*"'}),"\u30ef\u30a4\u30eb\u30c9\u30ab\u30fc\u30c9\u30df\u30e9\u30fc\u30a8\u30f3\u30c8\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001\u3059\u3079\u3066\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u5206\u6563\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u3092\u6709\u52b9\u306b\u3067\u304d\u307e\u3059\u3002\u30a2\u30b9\u30bf\u30ea\u30b9\u30af\u306f\u5fc5\u305a\u5f15\u7528\u7b26\u3067\u56f2\u3080\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'mirrors:\n  "*":\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u30ce\u30fc\u30c9\u3067\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u30ec\u30b8\u30b9\u30c8\u30ea\u304c\u306a\u3044\u5834\u5408\u3001\u305d\u306e\u30ce\u30fc\u30c9\u306f\u5206\u6563\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u4e00\u5207\u53c2\u52a0\u3057\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"registries.yaml"}),"\u30d5\u30a1\u30a4\u30eb\u306e\u69cb\u9020\u306b\u95a2\u3059\u308b\u8a73\u7d30\u306f\u3001",(0,i.jsx)(n.a,{href:"/ja/installation/private-registry",children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u306e\u8a2d\u5b9a"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af",children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af"}),"\n",(0,i.jsxs)(n.p,{children:["\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001containerd\u306f\u30df\u30e9\u30fc\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30d7\u30eb\u3059\u308b\u969b\u306b\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3057\u307e\u3059\u3002\u3053\u308c\u3092\u7121\u52b9\u306b\u3057\u3001\n\u8a2d\u5b9a\u3055\u308c\u305f\u30df\u30e9\u30fc\u304a\u3088\u3073/\u307e\u305f\u306f\u57cb\u3081\u8fbc\u307f\u30df\u30e9\u30fc\u304b\u3089\u306e\u307f\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30eb\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u8a2d\u5b9a\u306e",(0,i.jsx)(n.a,{href:"/ja/installation/private-registry#default-endpoint-fallback",children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306e\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--disable-default-endpoint"}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u3066\u3001\u7279\u5b9a\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u76f4\u63a5\u30d7\u30eb\u3092\u8a31\u53ef\u3057\u3001\u4ed6\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u306f\u8a31\u53ef\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u660e\u793a\u7684\u306b\u6307\u5b9a\u3057\u3066\u30a4\u30e1\u30fc\u30b8\u30d7\u30eb\u304c\u305d\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u81ea\u4f53\u306b\u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3059\u308b\u3088\u3046\u306b\u3067\u304d\u307e\u3059\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"mirrors:\n  docker.io:           # \u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306a\u3057\u3001\u30ce\u30fc\u30c9\u3067\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u30d7\u30eb\u306b\u5931\u6557\n  registry.k8s.io:     # \u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306a\u3057\u3001\u30ce\u30fc\u30c9\u3067\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u30d7\u30eb\u306b\u5931\u6557\n  mirror.example.com:  # \u660e\u793a\u7684\u306a\u30c7\u30d5\u30a9\u30eb\u30c8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3001\u30ce\u30fc\u30c9\u3067\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u4e0a\u6d41\u304b\u3089\u30d7\u30eb\u53ef\u80fd\n    endpoint:\n      - https://mirror.example.com\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u6700\u65b0\u30bf\u30b0",children:"\u6700\u65b0\u30bf\u30b0"}),"\n",(0,i.jsxs)(n.p,{children:["\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u306b\u30bf\u30b0\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u6697\u9ed9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30bf\u30b0\u306f",(0,i.jsx)(n.code,{children:"latest"}),"\u3067\u3059\u3002\u3053\u306e\u30bf\u30b0\u306f\u983b\u7e41\u306b\u66f4\u65b0\u3055\u308c\u3001\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u6307\u3057\u307e\u3059\u3002\u3053\u306e\u30bf\u30b0\u306f\u30d7\u30eb\u3055\u308c\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u306b\u3088\u3063\u3066\u7570\u306a\u308b\u30ea\u30d3\u30b8\u30e7\u30f3\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u6307\u3059\u305f\u3081\u3001\u5206\u6563\u30ec\u30b8\u30b9\u30c8\u30ea\u306f\u4ed6\u306e\u30ce\u30fc\u30c9\u304b\u3089",(0,i.jsx)(n.code,{children:"latest"}),"\u30bf\u30b0\u3092\u30d7\u30eb",(0,i.jsx)(n.strong,{children:"\u3057\u307e\u305b\u3093"}),"\u3002\u3053\u308c\u306b\u3088\u308a\u3001containerd\u306f\u4e00\u8cab\u3057\u305f\u30d3\u30e5\u30fc\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306b\u4e0a\u6d41\u30ec\u30b8\u30b9\u30c8\u30ea\u307e\u305f\u306f\u30ec\u30b8\u30b9\u30c8\u30ea\u30df\u30e9\u30fc\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u3092\u5f37\u5236\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u308c\u306f\u3001\u30b3\u30f3\u30c6\u30ca\u30a4\u30e1\u30fc\u30b8\u306b",(0,i.jsx)(n.code,{children:"latest"}),"\u30bf\u30b0\u3092\u4f7f\u7528\u3059\u308b\u969b\u306bKubernetes\u304c\u89b3\u5bdf\u3059\u308b",(0,i.jsxs)(n.a,{href:"https://kubernetes.io/docs/concepts/containers/images/#imagepullpolicy-defaulting",children:["\u7279\u5225\u306a",(0,i.jsx)(n.code,{children:"imagePullPolicy"}),"\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u8a2d\u5b9a"]}),"\u3068\u4e00\u81f4\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"latest"}),"\u30bf\u30b0\u306e\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u306f\u3001K3s\u30b5\u30fc\u30d3\u30b9\u306e\u74b0\u5883\u5909\u6570",(0,i.jsx)(n.code,{children:"K3S_P2P_ENABLE_LATEST=true"}),"\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u6709\u52b9\u306b\u3067\u304d\u307e\u3059\u3002\u4e0a\u8a18\u306e\u7406\u7531\u304b\u3089\u3001\u3053\u308c\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u304a\u3089\u305a\u3001\u63a8\u5968\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",children:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"}),"\n",(0,i.jsx)(n.h3,{id:"\u8a8d\u8a3c",children:"\u8a8d\u8a3c"}),"\n",(0,i.jsx)(n.p,{children:"\u57cb\u3081\u8fbc\u307f\u30df\u30e9\u30fc\u306e\u30ec\u30b8\u30b9\u30c8\u30eaAPI\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306b\u306f\u3001\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a3c\u660e\u66f8\u8a8d\u8a3c\u5c40\u306b\u3088\u3063\u3066\u7f72\u540d\u3055\u308c\u305f\u6709\u52b9\u306a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a3c\u660e\u66f8\u304c\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5206\u6563\u30cf\u30c3\u30b7\u30e5\u30c6\u30fc\u30d6\u30eb\u306e\u30d4\u30a2\u30c4\u30fc\u30d4\u30a2\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u306e\u30a2\u30af\u30bb\u30b9\u306b\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30ce\u30fc\u30c9\u306b\u3088\u3063\u3066\u5236\u5fa1\u3055\u308c\u308b\u4e8b\u524d\u5171\u6709\u30ad\u30fc\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u30ce\u30fc\u30c9\u306f\u3001\u4e8b\u524d\u5171\u6709\u30ad\u30fc\u3068\u30af\u30e9\u30b9\u30bf\u30fc\u8a3c\u660e\u66f8\u8a8d\u8a3c\u5c40\u306b\u3088\u3063\u3066\u7f72\u540d\u3055\u308c\u305f\u8a3c\u660e\u66f8\u306e\u4e21\u65b9\u3092\u4f7f\u7528\u3057\u3066\u76f8\u4e92\u306b\u8a8d\u8a3c\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6f5c\u5728\u7684\u306a\u61f8\u5ff5",children:"\u6f5c\u5728\u7684\u306a\u61f8\u5ff5"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"\u5206\u6563\u30ec\u30b8\u30b9\u30c8\u30ea\u306f\u30d4\u30a2\u30c4\u30fc\u30d4\u30a2\u306e\u539f\u5247\u306b\u57fa\u3065\u3044\u3066\u69cb\u7bc9\u3055\u308c\u3066\u304a\u308a\u3001\u3059\u3079\u3066\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u30e1\u30f3\u30d0\u30fc\u9593\u3067\u540c\u7b49\u306e\u7279\u6a29\u3068\u4fe1\u983c\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002\n\u3053\u308c\u304c\u30af\u30e9\u30b9\u30bf\u30fc\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30dd\u30ea\u30b7\u30fc\u306b\u4e00\u81f4\u3057\u306a\u3044\u5834\u5408\u3001\u57cb\u3081\u8fbc\u307f\u5206\u6563\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u6709\u52b9\u306b\u3059\u3079\u304d\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:["\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u306f\u3001\u30ce\u30fc\u30c9\u304c\u901a\u5e38\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u30a4\u30e1\u30fc\u30b8\u3092\u5229\u7528\u53ef\u80fd\u306b\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u3001\u4e00\u90e8\u306e\u30a4\u30e1\u30fc\u30b8\u304cKubernetes\u30a4\u30e1\u30fc\u30b8\u30d7\u30eb\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3084",(0,i.jsx)(n.code,{children:"registries.yaml"}),"\u306e\u8cc7\u683c\u60c5\u5831\u3092\u4ecb\u3057\u3066\u8a8d\u8a3c\u304c\u5fc5\u8981\u306a\u30ec\u30b8\u30b9\u30c8\u30ea\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3001\u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30d7\u30eb\u3055\u308c\u308b\u5834\u5408\u3001\u5206\u6563\u30ec\u30b8\u30b9\u30c8\u30ea\u306f\u4ed6\u306e\u30ce\u30fc\u30c9\u304c\u3053\u308c\u3089\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u8cc7\u683c\u60c5\u5831\u306a\u3057\u3067\u5171\u6709\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u3042\u308b\u30ce\u30fc\u30c9\u306econtainerd\u30a4\u30e1\u30fc\u30b8\u30b9\u30c8\u30a2\u306b\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u6a29\u9650\u3092\u6301\u3064\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u4ed6\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u30ce\u30fc\u30c9\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u300c\u6bd2\u3059\u308b\u300d\u3053\u3068\u304c\u3067\u304d\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u4ed6\u306e\u30ce\u30fc\u30c9\u306f\u305d\u306e\u30ce\u30fc\u30c9\u304c\u5e83\u544a\u3059\u308b\u30bf\u30b0\u3092\u4fe1\u983c\u3057\u3001\u4e0a\u6d41\u30ec\u30b8\u30b9\u30c8\u30ea\u3092\u78ba\u8a8d\u305b\u305a\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u30a4\u30e1\u30fc\u30b8\u306e\u6574\u5408\u6027\u304c\u91cd\u8981\u306a\u5834\u5408\u306f\u3001\u30bf\u30b0\u306e\u4ee3\u308f\u308a\u306b\u30a4\u30e1\u30fc\u30b8\u30c0\u30a4\u30b8\u30a7\u30b9\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3079\u304d\u3067\u3059\u3002\u30c0\u30a4\u30b8\u30a7\u30b9\u30c8\u306f\u3053\u306e\u65b9\u6cd5\u3067\u6bd2\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u307e\u305f\u306f\u624b\u52d5\u3067\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u306e\u5171\u6709",children:"\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7\u307e\u305f\u306f\u624b\u52d5\u3067\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u306e\u5171\u6709"}),"\n",(0,i.jsxs)(n.p,{children:["\u30a4\u30e1\u30fc\u30b8\u306e\u5171\u6709\u306f\u3001\u30bd\u30fc\u30b9\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u57fa\u3065\u3044\u3066\u5236\u5fa1\u3055\u308c\u307e\u3059\u3002\n\u30a8\u30a2\u30ae\u30e3\u30c3\u30d7tar\u30dc\u30fc\u30eb\u3092\u4ecb\u3057\u3066\u76f4\u63a5containerd\u306b\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u3001\u307e\u305f\u306f",(0,i.jsx)(n.code,{children:"ctr"}),"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066containerd\u306e\u30a4\u30e1\u30fc\u30b8\u30b9\u30c8\u30a2\u306b\u76f4\u63a5\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u306f\u3001\u30df\u30e9\u30fc\u30ea\u30f3\u30b0\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u30ec\u30b8\u30b9\u30c8\u30ea\u3068\u3057\u3066\u30bf\u30b0\u4ed8\u3051\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30ce\u30fc\u30c9\u9593\u3067\u5171\u6709\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30a4\u30e1\u30fc\u30b8\u304c\u5b9f\u969b\u306b\u5b58\u5728\u3059\u308b\u5fc5\u8981\u306f\u306a\u304f\u3001\u5230\u9054\u53ef\u80fd\u3067\u3042\u308b\u5fc5\u8981\u3082\u3042\u308a\u307e\u305b\u3093\u3002\n\u4f8b\u3048\u3070\u3001\u67b6\u7a7a\u306e\u4e0a\u6d41\u30ec\u30b8\u30b9\u30c8\u30ea\u3068\u3057\u3066\u30a4\u30e1\u30fc\u30b8\u3092\u30bf\u30b0\u4ed8\u3051\u3057\u3001\u305d\u306e\u30a4\u30e1\u30fc\u30b8\u3092containerd\u306e\u30a4\u30e1\u30fc\u30b8\u30b9\u30c8\u30a2\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u305d\u306e\u30ec\u30b8\u30b9\u30c8\u30ea\u304c",(0,i.jsx)(n.code,{children:"registries.yaml"}),"\u306b\u30ea\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u9650\u308a\u3001\u3059\u3079\u3066\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u30e1\u30f3\u30d0\u30fc\u304b\u3089\u305d\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30eb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30c3\u30b7\u30e5",children:"\u30a4\u30e1\u30fc\u30b8\u306e\u30d7\u30c3\u30b7\u30e5"}),"\n",(0,i.jsxs)(n.p,{children:["\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u306f\u8aad\u307f\u53d6\u308a\u5c02\u7528\u3067\u3042\u308a\u3001",(0,i.jsx)(n.code,{children:"docker push"}),"\u3084\u4ed6\u306e\u4e00\u822c\u7684\u306aOCI\u30ec\u30b8\u30b9\u30c8\u30ea\u3068\u5bfe\u8a71\u3059\u308b\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u76f4\u63a5\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30a4\u30e1\u30fc\u30b8\u306f\u3001",(0,i.jsx)(n.code,{children:"ctr -n k8s.io image pull"}),"\u3092\u5b9f\u884c\u3057\u3066\u30a4\u30e1\u30fc\u30b8\u3092\u30d7\u30eb\u3059\u308b\u304b\u3001",(0,i.jsx)(n.code,{children:"docker save"}),"\u3067\u4f5c\u6210\u3055\u308c\u305f\u30a4\u30e1\u30fc\u30b8\u30a2\u30fc\u30ab\u30a4\u30d6\u3092",(0,i.jsx)(n.code,{children:"ctr -n k8s.io image import"}),"\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3066\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u3001\u624b\u52d5\u3067\u57cb\u3081\u8fbc\u307f\u30ec\u30b8\u30b9\u30c8\u30ea\u3067\u5229\u7528\u53ef\u80fd\u306b\u3067\u304d\u307e\u3059\u3002\n",(0,i.jsx)(n.code,{children:"ctr"}),"\u3092\u4f7f\u7528\u3057\u3066\u30a4\u30e1\u30fc\u30b8\u3092\u7ba1\u7406\u3059\u308b\u969b\u306b\u306f\u3001kubelet\u306b\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b",(0,i.jsx)(n.code,{children:"k8s.io"}),"\u540d\u524d\u7a7a\u9593\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>d});var i=r(7294);const s={},l=i.createContext(s);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);