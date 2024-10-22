"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8576],{892:(e,s,c)=>{c.r(s),c.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var r=c(5893),t=c(1151);const n={title:"CLI \u5de5\u5177"},d=void 0,i={id:"cli/cli",title:"CLI \u5de5\u5177",description:"K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\u542b\u4e86\u5f88\u591a\u5de5\u5177\uff0c\u53ef\u5e2e\u52a9\u4f60\u7ba1\u7406\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/cli.md",sourceDirName:"cli",slug:"/cli/",permalink:"/zh/cli/",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/cli.md",tags:[],version:"current",lastUpdatedAt:172958706e4,frontMatter:{title:"CLI \u5de5\u5177"},sidebar:"mySidebar",previous:{title:"self-assessment-1.24",permalink:"/zh/security/self-assessment-1.24"},next:{title:"server",permalink:"/zh/cli/server"}},l={},h=[];function o(e){const s={a:"a",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\u542b\u4e86\u5f88\u591a\u5de5\u5177\uff0c\u53ef\u5e2e\u52a9\u4f60\u7ba1\u7406\u96c6\u7fa4\u3002"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"\u547d\u4ee4"}),(0,r.jsx)(s.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"k3s server"})}),(0,r.jsxs)(s.td,{children:["\u8fd0\u884c K3s Server \u8282\u70b9\uff0c\u8fd9\u5c06\u542f\u52a8 Kubernetes ",(0,r.jsx)(s.code,{children:"apiserver"}),"\u3001",(0,r.jsx)(s.code,{children:"scheduler"}),"\u3001",(0,r.jsx)(s.code,{children:"controller-manager"})," \u548c ",(0,r.jsx)(s.code,{children:"cloud-controller-manager"})," \u7ec4\u4ef6\uff0c\u4ee5\u53ca\u6570\u636e\u5b58\u50a8\u548c Agent \u7ec4\u4ef6\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsxs)(s.a,{href:"/zh/cli/server",children:[(0,r.jsx)(s.code,{children:"k3s server"})," \u547d\u4ee4\u6587\u6863"]}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"k3s agent"})}),(0,r.jsxs)(s.td,{children:["\u8fd0\u884c K3s Agent \u8282\u70b9\uff0c\u8fd9\u5c06\u542f\u52a8 ",(0,r.jsx)(s.code,{children:"containerd"}),"\u3001",(0,r.jsx)(s.code,{children:"flannel"}),"\u3001",(0,r.jsx)(s.code,{children:"kube-router"})," \u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668\u548c Kubernetes ",(0,r.jsx)(s.code,{children:"kubelet"})," \u548c ",(0,r.jsx)(s.code,{children:"kube-proxy"})," \u7ec4\u4ef6\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsxs)(s.a,{href:"/zh/cli/agent",children:[(0,r.jsx)(s.code,{children:"k3s agent"})," \u547d\u4ee4\u6587\u6863"]}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"k3s kubectl"})}),(0,r.jsxs)(s.td,{children:["\u8fd0\u884c\u5d4c\u5165\u5f0f ",(0,r.jsxs)(s.a,{href:"https://kubernetes.io/docs/reference/kubectl",children:[(0,r.jsx)(s.code,{children:"kubectl"})," \u547d\u4ee4"]}),"\u3002\u8fd9\u662f\u7528\u4e8e\u4e0e Kubernetes apiserver \u4ea4\u4e92\u7684 CLI\u3002\u5982\u679c\u672a\u8bbe\u7f6e ",(0,r.jsx)(s.code,{children:"KUBECONFIG"})," \u73af\u5883\u53d8\u91cf\uff0c\u5c06\u81ea\u52a8\u5c1d\u8bd5\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"/etc/rancher/k3s/k3s.yaml"})," \u4e2d\u7684 kubeconfig\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"k3s crictl"})}),(0,r.jsxs)(s.td,{children:["\u8fd0\u884c\u5d4c\u5165\u5f0f ",(0,r.jsxs)(s.a,{href:"https://github.com/kubernetes-sigs/cri-tools/blob/master/docs/crictl.md",children:[(0,r.jsx)(s.code,{children:"crictl"})," \u547d\u4ee4"]}),"\u3002\u8fd9\u662f\u4e00\u4e2a CLI\uff0c\u7528\u4e8e\u4e0e Kubernetes \u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u63a5\u53e3 (CRI) \u4ea4\u4e92\u3002\u5bf9\u8c03\u8bd5\u5f88\u6709\u7528\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"k3s ctr"})}),(0,r.jsxs)(s.td,{children:["\u8fd0\u884c\u5d4c\u5165\u5f0f ",(0,r.jsxs)(s.a,{href:"https://github.com/projectatomic/containerd/blob/master/docs/cli.md",children:[(0,r.jsx)(s.code,{children:"ctr"})," \u547d\u4ee4"]}),"\u3002\u8fd9\u662f\u4e00\u4e2a\u7528\u4e8e containerd \u7684 CLI\uff0ccontainerd \u662f K3s \u4f7f\u7528\u7684\u5bb9\u5668 daemon\u3002\u5bf9\u8c03\u8bd5\u5f88\u6709\u7528\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"k3s token"})}),(0,r.jsxs)(s.td,{children:["\u7ba1\u7406\u5f15\u5bfc Token\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsxs)(s.a,{href:"/zh/cli/token",children:[(0,r.jsx)(s.code,{children:"k3s token"})," \u547d\u4ee4\u6587\u6863"]}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"k3s etcd-snapshot"})}),(0,r.jsxs)(s.td,{children:["\u5bf9 K3s \u96c6\u7fa4\u6570\u636e\u8fdb\u884c\u6309\u9700\u5907\u4efd\u5e76\u4e0a\u4f20\u5230 S3\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsxs)(s.a,{href:"/zh/cli/etcd-snapshot",children:[(0,r.jsx)(s.code,{children:"k3s etcd-snapshot"})," \u547d\u4ee4\u6587\u6863"]}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"k3s secrets-encrypt"})}),(0,r.jsxs)(s.td,{children:["\u5728\u5c06 Secret \u5b58\u50a8\u5230\u96c6\u7fa4\u4e2d\u65f6\u52a0\u5bc6 Secret\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsxs)(s.a,{href:"/zh/cli/secrets-encrypt",children:[(0,r.jsx)(s.code,{children:"k3s secrets-encrypt"})," \u547d\u4ee4\u6587\u6863"]}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"k3s certificate"})}),(0,r.jsxs)(s.td,{children:["\u7ba1\u7406 K3s \u8bc1\u4e66\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsxs)(s.a,{href:"/zh/cli/certificate",children:[(0,r.jsx)(s.code,{children:"k3s certificate"})," \u547d\u4ee4\u6587\u6863"]}),"\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"k3s completion"})}),(0,r.jsx)(s.td,{children:"\u4e3a K3s \u751f\u6210 shell \u8865\u5168\u811a\u672c"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"k3s help"})}),(0,r.jsx)(s.td,{children:"\u663e\u793a\u547d\u4ee4\u5217\u8868\u6216\u67d0\u4e2a\u547d\u4ee4\u7684\u5e2e\u52a9"})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},1151:(e,s,c)=>{c.d(s,{Z:()=>i,a:()=>d});var r=c(7294);const t={},n=r.createContext(t);function d(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);