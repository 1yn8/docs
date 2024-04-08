"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7813],{6442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=n(5893),r=n(1151);const c={title:"CLI Tools",weight:1},d=void 0,o={id:"cli/cli",title:"CLI Tools",description:"The K3s binary contains a number of additional tools the help you manage your cluster.",source:"@site/docs/cli/cli.md",sourceDirName:"cli",slug:"/cli/",permalink:"/cli/",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/cli.md",tags:[],version:"current",lastUpdatedAt:171256656e4,frontMatter:{title:"CLI Tools",weight:1},sidebar:"mySidebar",previous:{title:"CIS Self Assessment Guide",permalink:"/security/self-assessment"},next:{title:"server",permalink:"/cli/server"}},i={},l=[];function h(e){const t={a:"a",code:"code",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The K3s binary contains a number of additional tools the help you manage your cluster."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Command"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"k3s server"})}),(0,s.jsxs)(t.td,{children:["Run a K3s server node, which launches the Kubernetes ",(0,s.jsx)(t.code,{children:"apiserver"}),", ",(0,s.jsx)(t.code,{children:"scheduler"}),", ",(0,s.jsx)(t.code,{children:"controller-manager"}),", and ",(0,s.jsx)(t.code,{children:"cloud-controller-manager"})," components, in addition a datastore and the agent components. See the ",(0,s.jsxs)(t.a,{href:"/cli/server",children:[(0,s.jsx)(t.code,{children:"k3s server"})," command documentation"]})," for more information."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"k3s agent"})}),(0,s.jsxs)(t.td,{children:["Run the K3s agent node, which launches ",(0,s.jsx)(t.code,{children:"containerd"}),", ",(0,s.jsx)(t.code,{children:"flannel"}),", ",(0,s.jsx)(t.code,{children:"kube-router"})," network policy controller, and the Kubernetes ",(0,s.jsx)(t.code,{children:"kubelet"})," and ",(0,s.jsx)(t.code,{children:"kube-proxy"})," components. See the ",(0,s.jsxs)(t.a,{href:"/cli/agent",children:[(0,s.jsx)(t.code,{children:"k3s agent"})," command documentation"]})," for more information."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"k3s kubectl"})}),(0,s.jsxs)(t.td,{children:["Run the embedded ",(0,s.jsxs)(t.a,{href:"https://kubernetes.io/docs/reference/kubectl",children:[(0,s.jsx)(t.code,{children:"kubectl"})," command"]}),". This is a CLI for interacting with the Kubernetes apiserver.  If the ",(0,s.jsx)(t.code,{children:"KUBECONFIG"})," environment variable is not set, this will automatically attempt to use the kubeconfig at ",(0,s.jsx)(t.code,{children:"/etc/rancher/k3s/k3s.yaml"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"k3s crictl"})}),(0,s.jsxs)(t.td,{children:["Run the embedded ",(0,s.jsxs)(t.a,{href:"https://github.com/kubernetes-sigs/cri-tools/blob/master/docs/crictl.md",children:[(0,s.jsx)(t.code,{children:"crictl"})," command"]}),". This is a CLI for interacting with Kubernetes's container runtime interface (CRI). Useful for debugging."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"k3s ctr"})}),(0,s.jsxs)(t.td,{children:["Run the embedded ",(0,s.jsxs)(t.a,{href:"https://github.com/projectatomic/containerd/blob/master/docs/cli.md",children:[(0,s.jsx)(t.code,{children:"ctr"})," command"]}),". This is a CLI for containerd, the container daemon used by K3s. Useful for debugging."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"k3s token"})}),(0,s.jsxs)(t.td,{children:["Manage bootstrap tokens. See the ",(0,s.jsxs)(t.a,{href:"/cli/token",children:[(0,s.jsx)(t.code,{children:"k3s token"})," command documentation"]})," for more information."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"k3s etcd-snapshot"})}),(0,s.jsxs)(t.td,{children:["Perform on demand backups of the K3s cluster data and upload to S3. See the ",(0,s.jsxs)(t.a,{href:"/cli/etcd-snapshot",children:[(0,s.jsx)(t.code,{children:"k3s etcd-snapshot"})," command documentation"]})," for more information."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"k3s secrets-encrypt"})}),(0,s.jsxs)(t.td,{children:["Configure K3s to encrypt secrets when storing them in the cluster. See the ",(0,s.jsxs)(t.a,{href:"/cli/secrets-encrypt",children:[(0,s.jsx)(t.code,{children:"k3s secrets-encrypt"})," command documentation"]})," for more information."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"k3s certificate"})}),(0,s.jsxs)(t.td,{children:["Manage K3s certificates. See the ",(0,s.jsxs)(t.a,{href:"/cli/certificate",children:[(0,s.jsx)(t.code,{children:"k3s certificate"})," command documentation"]})," for more information."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"k3s completion"})}),(0,s.jsx)(t.td,{children:"Generate shell completion scripts for k3s"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"k3s help"})}),(0,s.jsx)(t.td,{children:"Shows a list of commands or help for one command"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>d});var s=n(7294);const r={},c=s.createContext(r);function d(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);