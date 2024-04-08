"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[940],{2921:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=s(5893),r=s(1151);const c={title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",weight:10},i=void 0,l={id:"quick-start",title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",description:"\u672c\u6307\u5357\u5e2e\u52a9\u4f60\u4f7f\u7528\u9ed8\u8ba4\u9009\u9879\u5feb\u901f\u542f\u52a8\u96c6\u7fa4\u3002\u5b89\u88c5\u90e8\u5206\u66f4\u8be6\u7ec6\u5730\u4ecb\u7ecd\u4e86\u5982\u4f55\u8bbe\u7f6e K3s\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/zh/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/quick-start.md",tags:[],version:"current",lastUpdatedAt:171256656e4,frontMatter:{title:"\u5feb\u901f\u5165\u95e8\u6307\u5357",weight:10},sidebar:"mySidebar",previous:{title:"K3s - \u8f7b\u91cf\u7ea7 Kubernetes",permalink:"/zh/"},next:{title:"Installation",permalink:"/zh/installation/"}},o={},d=[{value:"\u5b89\u88c5\u811a\u672c",id:"\u5b89\u88c5\u811a\u672c",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u672c\u6307\u5357\u5e2e\u52a9\u4f60\u4f7f\u7528\u9ed8\u8ba4\u9009\u9879\u5feb\u901f\u542f\u52a8\u96c6\u7fa4\u3002",(0,t.jsx)(n.a,{href:"/zh/installation/",children:"\u5b89\u88c5\u90e8\u5206"}),"\u66f4\u8be6\u7ec6\u5730\u4ecb\u7ecd\u4e86\u5982\u4f55\u8bbe\u7f6e K3s\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u5173 K3s \u7ec4\u4ef6\u5982\u4f55\u534f\u540c\u5de5\u4f5c\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,t.jsx)(n.a,{href:"/zh/architecture",children:"\u67b6\u6784"}),"\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Kubernetes \u65b0\u624b\uff1fKubernetes \u5b98\u65b9\u6587\u6863\u4ecb\u7ecd\u4e86\u4e00\u4e9b\u5f88\u597d\u7684",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/",children:"\u57fa\u7840\u77e5\u8bc6\u6559\u7a0b"}),"\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5\u811a\u672c",children:"\u5b89\u88c5\u811a\u672c"}),"\n",(0,t.jsxs)(n.p,{children:["K3s \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5b89\u88c5\u811a\u672c\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5c06\u5176\u4f5c\u4e3a\u670d\u52a1\u5b89\u88c5\u5728\u57fa\u4e8e systemd \u6216 openrc \u7684\u7cfb\u7edf\u4e0a\u3002\u8be5\u811a\u672c\u53ef\u5728 ",(0,t.jsx)(n.a,{href:"https://get.k3s.io",children:"https://get.k3s.io"})," \u83b7\u5f97\u3002\u8981\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\u5b89\u88c5 K3s\uff0c\u53ea\u9700\u8fd0\u884c\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | sh -\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"\u4e2d\u56fd\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u52a0\u901f\u5b89\u88c5\uff1a"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn sh -\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"\u8fd0\u884c\u6b64\u5b89\u88c5\u540e\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"K3s \u670d\u52a1\u5c06\u88ab\u914d\u7f6e\u4e3a\u5728\u8282\u70b9\u91cd\u542f\u540e\u6216\u8fdb\u7a0b\u5d29\u6e83\u6216\u88ab\u6740\u6b7b\u65f6\u81ea\u52a8\u91cd\u542f\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u5c06\u5b89\u88c5\u5176\u4ed6\u5b9e\u7528\u7a0b\u5e8f\uff0c\u5305\u62ec ",(0,t.jsx)(n.code,{children:"kubectl"}),"\u3001",(0,t.jsx)(n.code,{children:"crictl"}),"\u3001",(0,t.jsx)(n.code,{children:"ctr"}),"\u3001",(0,t.jsx)(n.code,{children:"k3s-killall.sh"})," \u548c ",(0,t.jsx)(n.code,{children:"k3s-uninstall.sh"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/",children:"kubeconfig"})," \u6587\u4ef6\u5c06\u5199\u5165\u5230 ",(0,t.jsx)(n.code,{children:"/etc/rancher/k3s/k3s.yaml"}),"\uff0c\u7531 K3s \u5b89\u88c5\u7684 kubectl \u5c06\u81ea\u52a8\u4f7f\u7528\u8be5\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5355\u8282\u70b9 Server \u5b89\u88c5\u662f\u4e00\u4e2a\u529f\u80fd\u9f50\u5168\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5b83\u5305\u62ec\u4e86\u6258\u7ba1\u5de5\u4f5c\u8d1f\u8f7d pod \u6240\u9700\u7684\u6240\u6709\u6570\u636e\u5b58\u50a8\u3001control plane\u3001kubelet \u548c\u5bb9\u5668\u8fd0\u884c\u65f6\u7ec4\u4ef6\u3002\u9664\u975e\u4f60\u5e0c\u671b\u5411\u96c6\u7fa4\u6dfb\u52a0\u5bb9\u91cf\u6216\u5197\u4f59\uff0c\u5426\u5219\u6ca1\u6709\u5fc5\u8981\u6dfb\u52a0\u989d\u5916\u7684 Server \u6216 Agent \u8282\u70b9\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u5b89\u88c5\u5176\u4ed6 Agent \u8282\u70b9\u5e76\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230\u96c6\u7fa4\uff0c\u8bf7\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"K3S_URL"})," \u548c ",(0,t.jsx)(n.code,{children:"K3S_TOKEN"})," \u73af\u5883\u53d8\u91cf\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u3002\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u6dfb\u52a0 Agent \u8282\u70b9\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"\u4e2d\u56fd\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u52a0\u901f\u5b89\u88c5\uff1a"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -sfL https://rancher-mirror.rancher.cn/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -\n"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"K3S_URL"})," \u53c2\u6570\u4f1a\u5bfc\u81f4\u5b89\u88c5\u7a0b\u5e8f\u5c06 K3s \u914d\u7f6e\u4e3a Agent \u800c\u4e0d\u662f Server\u3002K3s Agent \u5c06\u6ce8\u518c\u5230\u5728 URL \u4e0a\u76d1\u542c\u7684 K3s Server\u3002",(0,t.jsx)(n.code,{children:"K3S_TOKEN"})," \u4f7f\u7528\u7684\u503c\u5b58\u50a8\u5728 Server \u8282\u70b9\u4e0a\u7684 ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/k3s/server/node-token"})," \u4e2d\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u6bcf\u53f0\u4e3b\u673a\u5fc5\u987b\u5177\u6709\u552f\u4e00\u7684\u4e3b\u673a\u540d\u3002\u5982\u679c\u4f60\u7684\u8ba1\u7b97\u673a\u6ca1\u6709\u552f\u4e00\u7684\u4e3b\u673a\u540d\uff0c\u8bf7\u4f20\u9012 ",(0,t.jsx)(n.code,{children:"K3S_NODE_NAME"})," \u73af\u5883\u53d8\u91cf\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u8282\u70b9\u63d0\u4f9b\u4e00\u4e2a\u6709\u6548\u4e14\u552f\u4e00\u7684\u4e3b\u673a\u540d\u3002"]})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(7294);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);