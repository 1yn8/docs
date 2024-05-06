"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3217],{506:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=n(5893),t=n(1151);const i={title:"Resource Profiling"},l=void 0,d={id:"reference/resource-profiling",title:"Resource Profiling",description:"This section captures the results of tests to determine minimum resource requirements for K3s.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/reference/resource-profiling.md",sourceDirName:"reference",slug:"/reference/resource-profiling",permalink:"/kr/reference/resource-profiling",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/reference/resource-profiling.md",tags:[],version:"current",lastUpdatedAt:171502279e4,frontMatter:{title:"Resource Profiling"},sidebar:"mySidebar",previous:{title:"Flag Deprecation",permalink:"/kr/reference/flag-deprecation"},next:{title:"v1.29.X",permalink:"/kr/release-notes/v1.29.X"}},o={},a=[{value:"Scope of Resource Testing",id:"scope-of-resource-testing",level:2},{value:"Components Included for Baseline Measurements",id:"components-included-for-baseline-measurements",level:2},{value:"Methodology",id:"methodology",level:2},{value:"Environment",id:"environment",level:2},{value:"Baseline Resource Requirements",id:"baseline-resource-requirements",level:2},{value:"K3s Server with a Workload",id:"k3s-server-with-a-workload",level:3},{value:"K3s Cluster with a Single Agent",id:"k3s-cluster-with-a-single-agent",level:3},{value:"K3s Agent",id:"k3s-agent",level:3},{value:"Analysis",id:"analysis",level:2},{value:"Primary Resource Utilization Drivers",id:"primary-resource-utilization-drivers",level:3},{value:"Preventing Agents and Workloads from Interfering with the Cluster Datastore",id:"preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore",level:3}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"This section captures the results of tests to determine minimum resource requirements for K3s."}),"\n",(0,s.jsx)(r.p,{children:"The results are summarized as follows:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Components"}),(0,s.jsx)(r.th,{children:"Processor"}),(0,s.jsx)(r.th,{children:"Min CPU"}),(0,s.jsx)(r.th,{children:"Min RAM with Kine/SQLite"}),(0,s.jsx)(r.th,{children:"Min RAM with Embedded etcd"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"K3s server with a workload"}),(0,s.jsx)(r.td,{children:"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz"}),(0,s.jsx)(r.td,{children:"10% of a core"}),(0,s.jsx)(r.td,{children:"768 M"}),(0,s.jsx)(r.td,{children:"896 M"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"K3s cluster with a single agent"}),(0,s.jsx)(r.td,{children:"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz"}),(0,s.jsx)(r.td,{children:"10% of a core"}),(0,s.jsx)(r.td,{children:"512 M"}),(0,s.jsx)(r.td,{children:"768 M"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"K3s agent"}),(0,s.jsx)(r.td,{children:"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz"}),(0,s.jsx)(r.td,{children:"5% of a core"}),(0,s.jsx)(r.td,{children:"256 M"}),(0,s.jsx)(r.td,{children:"256 M"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"K3s server with a workload"}),(0,s.jsx)(r.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,s.jsx)(r.td,{children:"20% of a core"}),(0,s.jsx)(r.td,{children:"768 M"}),(0,s.jsx)(r.td,{children:"896 M"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"K3s cluster with a single agent"}),(0,s.jsx)(r.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,s.jsx)(r.td,{children:"20% of a core"}),(0,s.jsx)(r.td,{children:"512 M"}),(0,s.jsx)(r.td,{children:"768 M"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"K3s agent"}),(0,s.jsx)(r.td,{children:"Pi4B BCM2711, 1.50 GHz"}),(0,s.jsx)(r.td,{children:"10% of a core"}),(0,s.jsx)(r.td,{children:"256 M"}),(0,s.jsx)(r.td,{children:"256 M"})]})]})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#scope-of-resource-testing",children:"Scope of Resource Testing"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#components-included-for-baseline-measurements",children:"Components Included for Baseline Measurements"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#methodology",children:"Methodology"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#environment",children:"Environment"})}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#baseline-resource-requirements",children:"Baseline Resource Requirements"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#k3s-server-with-a-workload",children:"K3s Server with a Workload"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#k3s-cluster-with-a-single-agent",children:"K3s Cluster with a Single Agent"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#k3s-agent",children:"K3s Agent"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#analysis",children:"Analysis"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#primary-resource-utilization-drivers",children:"Primary Resource Utilization Drivers"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore",children:"Preventing Agents and Workloads from Interfering with the Cluster Datastore"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"scope-of-resource-testing",children:"Scope of Resource Testing"}),"\n",(0,s.jsx)(r.p,{children:"The resource tests were intended to address the following problem statements:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"On a single-node cluster, determine the legitimate minimum amount of CPU, memory, and IOPs that should be set aside to run the entire K3s stack server stack, assuming that a real workload will be deployed on the cluster."}),"\n",(0,s.jsx)(r.li,{children:"On an agent (worker) node, determine the legitimate minimum amount of CPU, memory, and IOPs that should be set aside for the Kubernetes and K3s control plane components (the kubelet and k3s agent)."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"components-included-for-baseline-measurements",children:"Components Included for Baseline Measurements"}),"\n",(0,s.jsx)(r.p,{children:"The tested components are:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"K3s 1.19.2 with all packaged components enabled"}),"\n",(0,s.jsx)(r.li,{children:"Prometheus + Grafana monitoring stack"}),"\n",(0,s.jsx)(r.li,{children:"Kubernetes Example PHP Guestbook app"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"These are baseline figures for a stable system using only K3s packaged components (Traefik Ingress, Klipper lb, local-path storage) running a standard monitoring stack (Prometheus and Grafana) and the Guestbook example app."}),"\n",(0,s.jsx)(r.p,{children:"Resource figures including IOPS are for the Kubernetes datastore and control plane only, and do not include overhead for system-level management agents or logging, container image management, or any workload-specific requirements."}),"\n",(0,s.jsx)(r.h2,{id:"methodology",children:"Methodology"}),"\n",(0,s.jsxs)(r.p,{children:["A standalone instance of Prometheus v2.21.0 was used to collect host CPU, memory, and disk IO statistics using ",(0,s.jsx)(r.code,{children:"prometheus-node-exporter"})," installed via apt."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"systemd-cgtop"})," was used to spot-check systemd cgroup-level CPU and memory utilization. ",(0,s.jsx)(r.code,{children:"system.slice/k3s.service"})," tracks resource utilization for both K3s and containerd, while individual pods are under the ",(0,s.jsx)(r.code,{children:"kubepods"})," hierarchy."]}),"\n",(0,s.jsxs)(r.p,{children:["Additional detailed K3s memory utilization data was collected from the ",(0,s.jsx)(r.code,{children:"process_resident_memory_bytes"})," and ",(0,s.jsx)(r.code,{children:"go_memstats_alloc_bytes"})," metrics using the kubelet exporter integrated into the server and agent processes."]}),"\n",(0,s.jsx)(r.p,{children:"Utilization figures were based on 95th percentile readings from steady state operation on nodes running the described workloads."}),"\n",(0,s.jsx)(r.h2,{id:"environment",children:"Environment"}),"\n",(0,s.jsx)(r.p,{children:"OS: Ubuntu 20.04 x86_64, aarch64"}),"\n",(0,s.jsx)(r.p,{children:"Hardware:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"AWS c5d.xlarge - 4 core, 8 GB RAM, NVME SSD"}),"\n",(0,s.jsx)(r.li,{children:"Raspberry Pi 4 Model B - 4 core, 8 GB RAM, Class 10 SDHC"}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"baseline-resource-requirements",children:"Baseline Resource Requirements"}),"\n",(0,s.jsx)(r.p,{children:"This section captures the results of tests to determine minimum resource requirements for the K3s agent, the K3s server with a workload, and the K3s server with one agent."}),"\n",(0,s.jsx)(r.h3,{id:"k3s-server-with-a-workload",children:"K3s Server with a Workload"}),"\n",(0,s.jsx)(r.p,{children:"These are the requirements for a single-node cluster in which the K3s server shares resources with a workload."}),"\n",(0,s.jsx)(r.p,{children:"The CPU requirements are:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Resource Requirement"}),(0,s.jsx)(r.th,{children:"Tested Processor"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10% of a core"}),(0,s.jsx)(r.td,{children:"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"20% of a core"}),(0,s.jsx)(r.td,{children:"Low-power processor such as Pi4B BCM2711, 1.50 GHz"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"The IOPS and memory requirements are:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Tested Datastore"}),(0,s.jsx)(r.th,{children:"IOPS"}),(0,s.jsx)(r.th,{children:"KiB/sec"}),(0,s.jsx)(r.th,{children:"Latency"}),(0,s.jsx)(r.th,{children:"RAM"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Kine/SQLite"}),(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"500"}),(0,s.jsx)(r.td,{children:"< 10 ms"}),(0,s.jsx)(r.td,{children:"768 M"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Embedded etcd"}),(0,s.jsx)(r.td,{children:"50"}),(0,s.jsx)(r.td,{children:"250"}),(0,s.jsx)(r.td,{children:"< 5 ms"}),(0,s.jsx)(r.td,{children:"896 M"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"k3s-cluster-with-a-single-agent",children:"K3s Cluster with a Single Agent"}),"\n",(0,s.jsx)(r.p,{children:"These are the baseline requirements for a K3s cluster with a K3s server node and a K3s agent, but no workload."}),"\n",(0,s.jsx)(r.p,{children:"The CPU requirements are:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Resource Requirement"}),(0,s.jsx)(r.th,{children:"Tested Processor"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10% of a core"}),(0,s.jsx)(r.td,{children:"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"20% of a core"}),(0,s.jsx)(r.td,{children:"Pi4B BCM2711, 1.50 GHz"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"The IOPS and memory requirements are:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Datastore"}),(0,s.jsx)(r.th,{children:"IOPS"}),(0,s.jsx)(r.th,{children:"KiB/sec"}),(0,s.jsx)(r.th,{children:"Latency"}),(0,s.jsx)(r.th,{children:"RAM"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Kine/SQLite"}),(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"500"}),(0,s.jsx)(r.td,{children:"< 10 ms"}),(0,s.jsx)(r.td,{children:"512 M"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Embedded etcd"}),(0,s.jsx)(r.td,{children:"50"}),(0,s.jsx)(r.td,{children:"250"}),(0,s.jsx)(r.td,{children:"< 5 ms"}),(0,s.jsx)(r.td,{children:"768 M"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"k3s-agent",children:"K3s Agent"}),"\n",(0,s.jsx)(r.p,{children:"The CPU requirements are:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Resource Requirement"}),(0,s.jsx)(r.th,{children:"Tested Processor"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"5% of a core"}),(0,s.jsx)(r.td,{children:"Intel(R) Xeon(R) Platinum 8124M CPU, 3.00 GHz"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10% of a core"}),(0,s.jsx)(r.td,{children:"Pi4B BCM2711, 1.50 GHz"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"256 M of RAM is required."}),"\n",(0,s.jsx)(r.h2,{id:"analysis",children:"Analysis"}),"\n",(0,s.jsx)(r.p,{children:"This section captures what has the biggest impact on K3s server and agent utilization, and how the cluster datastore can be protected from interference from agents and workloads."}),"\n",(0,s.jsx)(r.h3,{id:"primary-resource-utilization-drivers",children:"Primary Resource Utilization Drivers"}),"\n",(0,s.jsx)(r.p,{children:"K3s server utilization figures are primarily driven by support of the Kubernetes datastore (kine or etcd), API Server, Controller-Manager, and Scheduler control loops, as well as any management tasks necessary to effect changes to the state of the system. Operations that place additional load on the Kubernetes control plane, such as creating/modifying/deleting resources, will cause temporary spikes in utilization. Using operators or apps that make extensive use of the Kubernetes datastore (such as Rancher or other Operator-type applications) will increase the server's resource requirements. Scaling up the cluster by adding additional nodes or creating many cluster resources will increase the server's resource requirements."}),"\n",(0,s.jsx)(r.p,{children:"K3s agent utilization figures are primarily driven by support of container lifecycle management control loops. Operations that involve managing images, provisioning storage, or creating/destroying containers will cause temporary spikes in utilization. Image pulls in particular are typically highly CPU and IO bound, as they involve decompressing image content to disk. If possible, workload storage (pod ephemeral storage and volumes) should be isolated from the agent components (/var/lib/rancher/k3s/agent) to ensure that there are no resource conflicts."}),"\n",(0,s.jsx)(r.h3,{id:"preventing-agents-and-workloads-from-interfering-with-the-cluster-datastore",children:"Preventing Agents and Workloads from Interfering with the Cluster Datastore"}),"\n",(0,s.jsx)(r.p,{children:"When running in an environment where the server is also hosting workload pods, care should be taken to ensure that agent and workload IOPS do not interfere with the datastore."}),"\n",(0,s.jsx)(r.p,{children:"This can be best accomplished by placing the server components (/var/lib/rancher/k3s/server) on a different storage medium than the agent components (/var/lib/rancher/k3s/agent), which include the containerd image store."}),"\n",(0,s.jsx)(r.p,{children:"Workload storage (pod ephemeral storage and volumes) should also be isolated from the datastore."}),"\n",(0,s.jsx)(r.p,{children:"Failure to meet datastore throughput and latency requirements may result in delayed response from the control plane and/or failure of the control plane to maintain system state."})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>l});var s=n(7294);const t={},i=s.createContext(t);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);