"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9184],{1964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=t(5893),d=t(1151);const l={title:"agent"},i="k3s agent",s={id:"cli/agent",title:"agent",description:"In this section, you'll learn how to configure the K3s agent.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/cli/agent.md",sourceDirName:"cli",slug:"/cli/agent",permalink:"/kr/cli/agent",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/agent.md",tags:[],version:"current",lastUpdatedAt:171502279e4,frontMatter:{title:"agent"},sidebar:"mySidebar",previous:{title:"server",permalink:"/kr/cli/server"},next:{title:"certificate",permalink:"/kr/cli/certificate"}},a={},o=[{value:"Logging",id:"logging",level:3},{value:"Cluster Options",id:"cluster-options",level:3},{value:"Data",id:"data",level:3},{value:"Node",id:"node",level:3},{value:"Runtime",id:"runtime",level:3},{value:"Networking",id:"networking",level:3},{value:"Customized Flags",id:"customized-flags",level:3},{value:"Experimental",id:"experimental",level:3},{value:"Deprecated",id:"deprecated",level:3},{value:"Node Labels and Taints for Agents",id:"node-labels-and-taints-for-agents",level:3},{value:"K3s Agent CLI Help",id:"k3s-agent-cli-help",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"k3s-agent",children:"k3s agent"}),"\n",(0,r.jsx)(n.p,{children:"In this section, you'll learn how to configure the K3s agent."}),"\n",(0,r.jsx)(n.p,{children:"Note that servers also run an agent, so all flags listed on this page are also valid for use on servers."}),"\n",(0,r.jsxs)(n.p,{children:["Options are documented on this page as CLI flags, but can also be passed as configuration file options. See the ",(0,r.jsx)(n.a,{href:"/kr/installation/configuration#configuration-file",children:"Configuration File"})," documentation for more information on using YAML configuration files."]}),"\n",(0,r.jsx)(n.h3,{id:"logging",children:"Logging"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Flag"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"-v"})," value"]}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Number for the log level verbosity"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--vmodule"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Comma-separated list of FILE_PATTERN=LOG_LEVEL settings for file-filtered logging"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--log value, -l"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Log to file"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--alsologtostderr"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Log to standard error as well as file (if set)"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"cluster-options",children:"Cluster Options"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Flag"}),(0,r.jsx)(n.th,{children:"Environment Variable"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--token value, -t"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_TOKEN"})}),(0,r.jsx)(n.td,{children:"Token to use for authentication"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--token-file"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_TOKEN_FILE"})}),(0,r.jsx)(n.td,{children:"Token file to use for authentication"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--server value, -s"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_URL"})}),(0,r.jsx)(n.td,{children:"Server to connect to"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Flag"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--data-dir value, -d"})," value"]}),(0,r.jsx)(n.td,{children:'"/var/lib/rancher/k3s"'}),(0,r.jsx)(n.td,{children:"Folder to hold state"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"node",children:"Node"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Flag"}),(0,r.jsx)(n.th,{children:"Environment Variable"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--node-name"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_NODE_NAME"})}),(0,r.jsx)(n.td,{children:"Node name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--with-node-id"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Append id to node name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--node-label"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Registering and starting kubelet with set of labels"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--node-taint"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Registering kubelet with set of taints"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--protect-kernel-defaults"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Kernel tuning behavior. If set, error if kernel tunables are different from kubelet defaults."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--selinux"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_SELINUX"})}),(0,r.jsx)(n.td,{children:"Enable SELinux in containerd"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--lb-server-port"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_LB_SERVER_PORT"})}),(0,r.jsx)(n.td,{children:"Local port for supervisor client load-balancer. If the supervisor and apiserver are not colocated an additional port 1 less than this port will also be used for the apiserver client load-balancer. (default: 6444)"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"runtime",children:"Runtime"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Flag"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--container-runtime-endpoint"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Disable embedded containerd and use the CRI socket at the given path; when used with --docker this sets the cri-docker socket path"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--pause-image"})," value"]}),(0,r.jsx)(n.td,{children:'"docker.io/rancher/pause:3.1"'}),(0,r.jsx)(n.td,{children:"Customized pause image for containerd or docker sandbox"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--private-registry"})," value"]}),(0,r.jsx)(n.td,{children:'"/etc/rancher/k3s/registries.yaml"'}),(0,r.jsx)(n.td,{children:"Private registry configuration file"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"networking",children:"Networking"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Flag"}),(0,r.jsx)(n.th,{children:"Environment Variable"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--node-ip value, -i"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"IP address to advertise for node"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--node-external-ip"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"External IP address to advertise for node"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--resolv-conf"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_RESOLV_CONF"})}),(0,r.jsx)(n.td,{children:"Kubelet resolv.conf file"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--flannel-iface"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Override default flannel interface"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--flannel-conf"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Override default flannel config file"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--flannel-cni-conf"})," value"]}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsx)(n.td,{children:"Override default flannel cni config file"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"customized-flags",children:"Customized Flags"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Flag"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--kubelet-arg"})," value"]}),(0,r.jsx)(n.td,{children:"Customized flag for kubelet process"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--kube-proxy-arg"})," value"]}),(0,r.jsx)(n.td,{children:"Customized flag for kube-proxy process"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"experimental",children:"Experimental"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Flag"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--rootless"})}),(0,r.jsx)(n.td,{children:"Run rootless"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--docker"})}),(0,r.jsx)(n.td,{children:"Use cri-dockerd instead of containerd"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--prefer-bundled-bin"})}),(0,r.jsx)(n.td,{children:"Prefer bundled userspace binaries over host binaries"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"deprecated",children:"Deprecated"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Flag"}),(0,r.jsx)(n.th,{children:"Environment Variable"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--no-flannel"})}),(0,r.jsx)(n.td,{children:"N/A"}),(0,r.jsxs)(n.td,{children:["Use ",(0,r.jsx)(n.code,{children:"--flannel-backend=none"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"--cluster-secret"})," value"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"K3S_CLUSTER_SECRET"})}),(0,r.jsxs)(n.td,{children:["Use ",(0,r.jsx)(n.code,{children:"--token"})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"node-labels-and-taints-for-agents",children:"Node Labels and Taints for Agents"}),"\n",(0,r.jsxs)(n.p,{children:["K3s agents can be configured with the options ",(0,r.jsx)(n.code,{children:"--node-label"})," and ",(0,r.jsx)(n.code,{children:"--node-taint"})," which adds a label and taint to the kubelet. The two options only add labels and/or taints at registration time, so they can only be added once and not changed after that again by running K3s commands."]}),"\n",(0,r.jsx)(n.p,{children:"Below is an example showing how to add labels and a taint:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"     --node-label foo=bar \\\n     --node-label hello=world \\\n     --node-taint key1=value1:NoExecute\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you want to change node labels and taints after node registration you should use ",(0,r.jsx)(n.code,{children:"kubectl"}),". Refer to the official Kubernetes documentation for details on how to add ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/",children:"taints"})," and ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/#add-a-label-to-a-node",children:"node labels."})]}),"\n",(0,r.jsx)(n.h3,{id:"k3s-agent-cli-help",children:"K3s Agent CLI Help"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If an option appears in brackets below, for example ",(0,r.jsx)(n.code,{children:"[$K3S_URL]"}),", it means that the option can be passed in as an environment variable of that name."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'NAME:\n   k3s agent - Run node agent\n\nUSAGE:\n   k3s agent [OPTIONS]\n\nOPTIONS:\n   --config FILE, -c FILE                     (config) Load configuration from FILE (default: "/etc/rancher/k3s/config.yaml") [$K3S_CONFIG_FILE]\n   --debug                                    (logging) Turn on debug logs [$K3S_DEBUG]\n   -v value                                   (logging) Number for the log level verbosity (default: 0)\n   --vmodule value                            (logging) Comma-separated list of FILE_PATTERN=LOG_LEVEL settings for file-filtered logging\n   --log value, -l value                      (logging) Log to file\n   --alsologtostderr                          (logging) Log to standard error as well as file (if set)\n   --token value, -t value                    (cluster) Token to use for authentication [$K3S_TOKEN]\n   --token-file value                         (cluster) Token file to use for authentication [$K3S_TOKEN_FILE]\n   --server value, -s value                   (cluster) Server to connect to [$K3S_URL]\n   --data-dir value, -d value                 (agent/data) Folder to hold state (default: "/var/lib/rancher/k3s")\n   --node-name value                          (agent/node) Node name [$K3S_NODE_NAME]\n   --with-node-id                             (agent/node) Append id to node name\n   --node-label value                         (agent/node) Registering and starting kubelet with set of labels\n   --node-taint value                         (agent/node) Registering kubelet with set of taints\n   --image-credential-provider-bin-dir value  (agent/node) The path to the directory where credential provider plugin binaries are located (default: "/var/lib/rancher/credentialprovider/bin")\n   --image-credential-provider-config value   (agent/node) The path to the credential provider plugin config file (default: "/var/lib/rancher/credentialprovider/config.yaml")\n   --selinux                                  (agent/node) Enable SELinux in containerd [$K3S_SELINUX]\n   --lb-server-port value                     (agent/node) Local port for supervisor client load-balancer. If the supervisor and apiserver are not colocated an additional port 1 less than this port will also be used for the apiserver client load-balancer. (default: 6444) [$K3S_LB_SERVER_PORT]\n   --protect-kernel-defaults                  (agent/node) Kernel tuning behavior. If set, error if kernel tunables are different than kubelet defaults.\n   --container-runtime-endpoint value         (agent/runtime) Disable embedded containerd and use the CRI socket at the given path; when used with --docker this sets the docker socket path\n   --pause-image value                        (agent/runtime) Customized pause image for containerd or docker sandbox (default: "rancher/mirrored-pause:3.6")\n   --snapshotter value                        (agent/runtime) Override default containerd snapshotter (default: "overlayfs")\n   --private-registry value                   (agent/runtime) Private registry configuration file (default: "/etc/rancher/k3s/registries.yaml")\n   --node-ip value, -i value                  (agent/networking) IPv4/IPv6 addresses to advertise for node\n   --node-external-ip value                   (agent/networking) IPv4/IPv6 external IP addresses to advertise for node\n   --resolv-conf value                        (agent/networking) Kubelet resolv.conf file [$K3S_RESOLV_CONF]\n   --flannel-iface value                      (agent/networking) Override default flannel interface\n   --flannel-conf value                       (agent/networking) Override default flannel config file\n   --flannel-cni-conf value                   (agent/networking) Override default flannel cni config file\n   --kubelet-arg value                        (agent/flags) Customized flag for kubelet process\n   --kube-proxy-arg value                     (agent/flags) Customized flag for kube-proxy process\n   --rootless                                 (experimental) Run rootless\n   --prefer-bundled-bin                       (experimental) Prefer bundled userspace binaries over host binaries\n   --docker                                   (agent/runtime) (experimental) Use cri-dockerd instead of containerd\n'})})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const d={},l=r.createContext(d);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);