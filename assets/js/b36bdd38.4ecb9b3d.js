"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6895],{5475:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var n=t(5893),r=t(1151);const d={title:"High Availability Embedded etcd",weight:40},a=void 0,i={id:"datastore/ha-embedded",title:"High Availability Embedded etcd",description:"Embedded etcd (HA) may have performance issues on slower disks such as Raspberry Pis running with SD cards.",source:"@site/docs/datastore/ha-embedded.md",sourceDirName:"datastore",slug:"/datastore/ha-embedded",permalink:"/datastore/ha-embedded",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/ha-embedded.md",tags:[],version:"current",lastUpdatedAt:1701751080,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{title:"High Availability Embedded etcd",weight:40},sidebar:"mySidebar",previous:{title:"Backup and Restore",permalink:"/datastore/backup-restore"},next:{title:"High Availability External DB",permalink:"/datastore/ha"}},o={},l=[{value:"Existing single-node clusters",id:"existing-single-node-clusters",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:"Embedded etcd (HA) may have performance issues on slower disks such as Raspberry Pis running with SD cards."})}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"HA embedded etcd cluster must be comprised of an odd number of server nodes for etcd to maintain quorum. For a cluster with n servers, quorum is (n/2)+1. For any odd-sized cluster, adding one node will always increase the number of nodes necessary for quorum. Although adding a node to an odd-sized cluster appears better since there are more machines, the fault tolerance is worse since exactly the same number of nodes may fail without losing quorum but there are more nodes that can fail."})}),"\n",(0,n.jsx)(s.p,{children:"An HA K3s cluster with embedded etcd is composed of:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Three or more ",(0,n.jsx)(s.strong,{children:"server nodes"})," that will serve the Kubernetes API and run other control plane services, as well as host the embedded etcd datastore."]}),"\n",(0,n.jsxs)(s.li,{children:["Optional: Zero or more ",(0,n.jsx)(s.strong,{children:"agent nodes"})," that are designated to run your apps and services"]}),"\n",(0,n.jsxs)(s.li,{children:["Optional: A ",(0,n.jsx)(s.strong,{children:"fixed registration address"})," for agent nodes to register with the cluster"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["To get started, first launch a server node with the ",(0,n.jsx)(s.code,{children:"cluster-init"})," flag to enable clustering and a token that will be used as a shared secret to join additional servers to the cluster."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET sh -s - server \\\n    --cluster-init \\\n    --tls-san=<FIXED_IP> # Optional, needed if using a fixed registration address\n"})}),"\n",(0,n.jsx)(s.p,{children:"After launching the first server, join the second and third servers to the cluster using the shared secret:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET sh -s - server \\\n    --server https://<ip or hostname of server1>:6443 \\\n    --tls-san=<FIXED_IP> # Optional, needed if using a fixed registration address\n"})}),"\n",(0,n.jsx)(s.p,{children:"Check to see that the second and third servers are now part of the cluster:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME        STATUS   ROLES                       AGE   VERSION\nserver1     Ready    control-plane,etcd,master   28m   vX.Y.Z\nserver2     Ready    control-plane,etcd,master   13m   vX.Y.Z\nserver3     Ready    control-plane,etcd,master   10m   vX.Y.Z\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Now you have a highly available control plane. Any successfully clustered servers can be used in the ",(0,n.jsx)(s.code,{children:"--server"})," argument to join additional server and agent nodes. Joining additional agent nodes to the cluster follows the same procedure as servers:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET sh -s - agent --server https://<ip or hostname of server>:6443\n"})}),"\n",(0,n.jsx)(s.p,{children:"There are a few config flags that must be the same in all server nodes:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Network related flags: ",(0,n.jsx)(s.code,{children:"--cluster-dns"}),", ",(0,n.jsx)(s.code,{children:"--cluster-domain"}),", ",(0,n.jsx)(s.code,{children:"--cluster-cidr"}),", ",(0,n.jsx)(s.code,{children:"--service-cidr"})]}),"\n",(0,n.jsxs)(s.li,{children:["Flags controlling the deployment of certain components: ",(0,n.jsx)(s.code,{children:"--disable-helm-controller"}),", ",(0,n.jsx)(s.code,{children:"--disable-kube-proxy"}),", ",(0,n.jsx)(s.code,{children:"--disable-network-policy"})," and any component passed to ",(0,n.jsx)(s.code,{children:"--disable"})]}),"\n",(0,n.jsxs)(s.li,{children:["Feature related flags: ",(0,n.jsx)(s.code,{children:"--secrets-encryption"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"existing-single-node-clusters",children:"Existing single-node clusters"}),"\n",(0,n.jsx)(s.admonition,{title:"Version Gate",type:"info",children:(0,n.jsxs)(s.p,{children:["Available as of ",(0,n.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.22.2%2Bk3s1",children:"v1.22.2+k3s1"})]})}),"\n",(0,n.jsxs)(s.p,{children:["If you have an existing cluster using the default embedded SQLite database, you can convert it to etcd by simply restarting your K3s server with the ",(0,n.jsx)(s.code,{children:"--cluster-init"})," flag. Once you've done that, you'll be able to add additional instances as described above."]}),"\n",(0,n.jsxs)(s.p,{children:["If an etcd datastore is found on disk either because that node has either initialized or joined a cluster already, the datastore arguments (",(0,n.jsx)(s.code,{children:"--cluster-init"}),", ",(0,n.jsx)(s.code,{children:"--server"}),", ",(0,n.jsx)(s.code,{children:"--datastore-endpoint"}),", etc) are ignored."]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>a});var n=t(7294);const r={},d=n.createContext(r);function a(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);