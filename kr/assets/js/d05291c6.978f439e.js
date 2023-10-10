"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(3117),i=(n(7294),n(3905));const r={title:"Network Options",weight:25},o=void 0,l={unversionedId:"installation/network-options",id:"installation/network-options",title:"Network Options",description:"This page describes K3s network configuration options, including configuration or replacement of Flannel, and configuring IPv6.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/installation/network-options.md",sourceDirName:"installation",slug:"/installation/network-options",permalink:"/kr/installation/network-options",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/network-options.md",tags:[],version:"current",lastUpdatedAt:1696930826,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{title:"Network Options",weight:25},sidebar:"mySidebar",previous:{title:"Configuration Options",permalink:"/kr/installation/configuration"},next:{title:"Private Registry Configuration",permalink:"/kr/installation/private-registry"}},s={},d=[{value:"Flannel Options",id:"flannel-options",level:2},{value:"Migrating from <code>wireguard</code> or <code>ipsec</code> to <code>wireguard-native</code>",id:"migrating-from-wireguard-or-ipsec-to-wireguard-native",level:3},{value:"Custom CNI",id:"custom-cni",level:2},{value:"Control-Plane Egress Selector configuration",id:"control-plane-egress-selector-configuration",level:2},{value:"Dual-stack (IPv4 + IPv6) Networking",id:"dual-stack-ipv4--ipv6-networking",level:2},{value:"Single-stack IPv6 Networking",id:"single-stack-ipv6-networking",level:2},{value:"Distributed hybrid or multicloud cluster",id:"distributed-hybrid-or-multicloud-cluster",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=p("Tabs"),u=p("TabItem"),m={toc:d};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page describes K3s network configuration options, including configuration or replacement of Flannel, and configuring IPv6."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Please reference the ",(0,i.kt)("a",{parentName:"p",href:"/kr/networking/"},"Networking")," page for information about CoreDNS, Traefik, and the Service LB.")),(0,i.kt)("h2",{id:"flannel-options"},"Flannel Options"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/flannel-io/flannel/blob/master/README.md"},"Flannel")," is a lightweight provider of layer 3 network fabric that implements the Kubernetes Container Network Interface (CNI). It is what is commonly referred to as a CNI Plugin."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flannel options can only be set on server nodes, and must be identical on all servers in the cluster."),(0,i.kt)("li",{parentName:"ul"},"The default backend for Flannel is ",(0,i.kt)("inlineCode",{parentName:"li"},"vxlan"),". To enable encryption, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"wireguard-native")," backend."),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"vxlan")," on Rasperry Pi with recent versions of Ubuntu requires ",(0,i.kt)("a",{parentName:"li",href:"/kr/advanced/#raspberry-pi"},"additional preparation"),"."),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"wireguard-native")," as the Flannel backend may require additional modules on some Linux distributions. Please see the ",(0,i.kt)("a",{parentName:"li",href:"https://www.wireguard.com/install/"},"WireGuard Install Guide")," for details.\nThe WireGuard install steps will ensure the appropriate kernel modules are installed for your operating system.\nYou must ensure that WireGuard kernel modules are available on every node, both servers and agents, before attempting to use the WireGuard Flannel backend.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CLI Flag and Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-ipv6-masq")),(0,i.kt)("td",{parentName:"tr",align:null},"Apply masquerading rules to IPv6 traffic (default for IPv4). Only applies on dual-stack or IPv6-only clusters. Compatible with any Flannel backend other than ",(0,i.kt)("inlineCode",{parentName:"td"},"none"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-external-ip")),(0,i.kt)("td",{parentName:"tr",align:null},"Use node external IP addresses as the destination for Flannel traffic, instead of internal IPs. Only applies when --node-external-ip is set on a node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=vxlan")),(0,i.kt)("td",{parentName:"tr",align:null},"Use VXLAN to encapsulate the packets. May require additional kernel modules on Raspberry Pi.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=host-gw")),(0,i.kt)("td",{parentName:"tr",align:null},"Use IP routes to pod subnets via node IPs. Requires direct layer 2 connectivity between all nodes in the cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=wireguard-native")),(0,i.kt)("td",{parentName:"tr",align:null},"Use WireGuard to encapsulate and encrypt network traffic. May require additional kernel modules.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=ipsec")),(0,i.kt)("td",{parentName:"tr",align:null},"Use strongSwan IPSec via the ",(0,i.kt)("inlineCode",{parentName:"td"},"swanctl")," binary to encrypt network traffic. (Deprecated; will be removed in v1.27.0)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=wireguard")),(0,i.kt)("td",{parentName:"tr",align:null},"Use WireGuard via the ",(0,i.kt)("inlineCode",{parentName:"td"},"wg")," binary to encrypt network traffic. May require additional kernel modules and configuration. (Deprecated; will be removed in v1.26.0)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--flannel-backend=none")),(0,i.kt)("td",{parentName:"tr",align:null},"Disable Flannel entirely.")))),(0,i.kt)("admonition",{title:"Version Gate",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"K3s no longer includes strongSwan ",(0,i.kt)("inlineCode",{parentName:"p"},"swanctl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"charon")," binaries starting with the 2022-12 releases (v1.26.0+k3s1, v1.25.5+k3s1, v1.24.9+k3s1, v1.23.15+k3s1). Please install the correct packages on your node before upgrading to or installing these releases if you want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ipsec")," backend.")),(0,i.kt)("h3",{id:"migrating-from-wireguard-or-ipsec-to-wireguard-native"},"Migrating from ",(0,i.kt)("inlineCode",{parentName:"h3"},"wireguard")," or ",(0,i.kt)("inlineCode",{parentName:"h3"},"ipsec")," to ",(0,i.kt)("inlineCode",{parentName:"h3"},"wireguard-native")),(0,i.kt)("p",null,"The legacy ",(0,i.kt)("inlineCode",{parentName:"p"},"wireguard")," backend requires installation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"wg")," tool on the host. This backend will be removed in K3s v1.26, in favor of ",(0,i.kt)("inlineCode",{parentName:"p"},"wireguard-native")," backend, which directly interfaces with the kernel."),(0,i.kt)("p",null,"The legacy ",(0,i.kt)("inlineCode",{parentName:"p"},"ipsec")," backend requires installation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"swanctl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"charon")," binaries on the host. This backend will be removed in K3s v1.27, in favor of the ",(0,i.kt)("inlineCode",{parentName:"p"},"wireguard-native")," backend."),(0,i.kt)("p",null,"We recommend that users migrate to the new backend as soon as possible. The migration requires a short period of downtime while nodes come up with the new configuration. You should follow these two steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update the K3s config on all server nodes. If using config files, the ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/config.yaml")," should include ",(0,i.kt)("inlineCode",{parentName:"li"},"flannel-backend: wireguard-native")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"flannel-backend: wireguard")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"flannel-backend: ipsec"),". If you are configuring K3s via CLI flags in the systemd unit, the equivalent flags should be changed."),(0,i.kt)("li",{parentName:"ol"},"Reboot all nodes, starting with the servers.")),(0,i.kt)("h2",{id:"custom-cni"},"Custom CNI"),(0,i.kt)("p",null,"Start K3s with ",(0,i.kt)("inlineCode",{parentName:"p"},"--flannel-backend=none")," and install your CNI of choice. Most CNI plugins come with their own network policy engine, so it is recommended to set ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-network-policy")," as well to avoid conflicts. IP Forwarding should be enabled for Canal and Calico; please reference the steps below."),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(u,{value:"Canal",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.tigera.io/calico/"},"Project Calico Docs")," website. Follow the steps to install Canal. Modify the Canal YAML so that IP forwarding is allowed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"container_settings")," section, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n  "allow_ip_forwarding": true\n}\n')),(0,i.kt)("p",null,"Apply the Canal YAML."),(0,i.kt)("p",null,"Ensure the settings were applied by running the following command on the host:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-canal.conflist\n")),(0,i.kt)("p",null,"You should see that IP forwarding is set to true.")),(0,i.kt)(u,{value:"Calico",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.tigera.io/calico/latest/reference/configure-cni-plugins"},"Calico CNI Plugins Guide"),". Modify the Calico YAML so that IP forwarding is allowed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"container_settings")," section, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'"container_settings": {\n  "allow_ip_forwarding": true\n}\n')),(0,i.kt)("p",null,"Apply the Calico YAML."),(0,i.kt)("p",null,"Ensure the settings were applied by running the following command on the host:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat /etc/cni/net.d/10-calico.conflist\n")),(0,i.kt)("p",null,"You should see that IP forwarding is set to true."))),(0,i.kt)("h2",{id:"control-plane-egress-selector-configuration"},"Control-Plane Egress Selector configuration"),(0,i.kt)("p",null,"K3s agents and servers maintain websocket tunnels between nodes that are used to encapsulate bidirectional communication between the control-plane (apiserver) and agent (kubelet and containerd) components.\nThis allows agents to operate without exposing the kubelet and container runtime streaming ports to incoming connections, and for the control-plane to connect to cluster services when operating with the agent disabled.\nThis functionality is equivalent to the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/setup-konnectivity/"},"Konnectivity")," service commonly used on other Kubernetes distributions, and is managed via the apiserver's egress selector configuration."),(0,i.kt)("p",null,"The egress selector mode may be configured on servers via the ",(0,i.kt)("inlineCode",{parentName:"p"},"--egress-selector-mode")," flag, and offers four modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disabled"),": The apiserver does not use agent tunnels to communicate with kubelets or cluster endpoints.\nThis mode requires that servers run the kubelet, CNI, and kube-proxy, and have direct connectivity to agents, or the apiserver will not be able to access service endpoints or perform ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl exec")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl logs"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"agent")," (default): The apiserver uses agent tunnels to communicate with kubelets.\nThis is mode requires that servers also run the kubelet, CNI, and kube-proxy, or the apiserver will not be able to access service endpoints."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pod"),": The apiserver uses agent tunnels to communicate with kubelets and service endpoints, routing endpoint connections to the correct agent by watching Nodes.\n",(0,i.kt)("strong",{parentName:"li"},"NOTE"),": This will not work when using a CNI that uses its own IPAM and does not respect the node's PodCIDR allocation. ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"agent")," should be used with these CNIs instead."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster"),": The apiserver uses agent tunnels to communicate with kubelets and service endpoints, routing endpoint connections to the correct agent by watching Endpoints.")),(0,i.kt)("h2",{id:"dual-stack-ipv4--ipv6-networking"},"Dual-stack (IPv4 + IPv6) Networking"),(0,i.kt)("admonition",{title:"Version Gate",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Experimental support is available as of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.0%2Bk3s1"},"v1.21.0+k3s1"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Stable support is available as of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.23.7%2Bk3s1"},"v1.23.7+k3s1"),". ")),(0,i.kt)("admonition",{title:"Known Issue ",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Kubernetes v1.24 and v1.25 include ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/111695"},"an issue")," that ignores the node IPv6 addresses if you have a dual-stack environment and you are not using the primary network interface for cluster traffic. To avoid this bug, add the following flag to both K3s servers and agents:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'--kubelet-arg="node-ip=0.0.0.0" # To proritize IPv4 traffic\n#OR\n--kubelet-arg="node-ip=::" # To proritize IPv6 traffic\n'))),(0,i.kt)("p",null,"Dual-stack networking must be configured when the cluster is first created. It cannot be enabled on an existing cluster once it has been started as IPv4-only."),(0,i.kt)("p",null,"To enable dual-stack in K3s, you must provide valid dual-stack ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"service-cidr")," on all server nodes. This is an example of a valid configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--cluster-cidr=10.42.0.0/16,2001:cafe:42:0::/56 --service-cidr=10.43.0.0/16,2001:cafe:42:1::/112\n")),(0,i.kt)("p",null,"Note that you may configure any valid ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"service-cidr")," values, but the above masks are recommended. If you change the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-cidr")," mask, you should also change the ",(0,i.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size-ipv4")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size-ipv6")," values to match the planned pods per node and total node count. The largest supported ",(0,i.kt)("inlineCode",{parentName:"p"},"service-cidr")," mask is /12 for IPv4, and /112 for IPv6. Remember to allow ipv6 traffic if you are deploying in a public cloud."),(0,i.kt)("p",null,"If you are using a custom CNI plugin, i.e. a CNI plugin other than Flannel, the additional configuration may be required. Please consult your plugin's dual-stack documentation and verify if network policies can be enabled."),(0,i.kt)("h2",{id:"single-stack-ipv6-networking"},"Single-stack IPv6 Networking"),(0,i.kt)("admonition",{title:"Version Gate",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Available as of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.22.9%2Bk3s1"},"v1.22.9+k3s1"))),(0,i.kt)("admonition",{title:"Known Issue",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If your IPv6 default route is set by a router advertisement (RA), you will need to set the sysctl ",(0,i.kt)("inlineCode",{parentName:"p"},"net.ipv6.conf.all.accept_ra=2"),"; otherwise, the node will drop the default route once it expires. Be aware that accepting RAs could increase the risk of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/91507"},"man-in-the-middle attacks"),".")),(0,i.kt)("p",null,"Single-stack IPv6 clusters (clusters without IPv4) are supported on K3s using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--cluster-cidr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--service-cidr")," flags. This is an example of a valid configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"--cluster-cidr=2001:cafe:42:0::/56 --service-cidr=2001:cafe:42:1::/112\n")),(0,i.kt)("h2",{id:"distributed-hybrid-or-multicloud-cluster"},"Distributed hybrid or multicloud cluster"),(0,i.kt)("p",null,"A K3s cluster can still be deployed on nodes which use different private networks and are not directly connected (e.g. nodes in different public clouds). To achieve this, K3s sets a mesh of tunnels that become a VPN mesh. These nodes must have have an assigned IP through which they can be reached (e.g. a public IP). The server traffic will use a websocket tunnel and the data-plane traffic will use a wireguard tunnel."),(0,i.kt)("p",null,"To enable this type of deployment, you must add the following parameters on servers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"--node-external-ip=<SERVER_EXTERNAL_IP> --flannel-backend=wireguard-native --flannel-external-ip\n")),(0,i.kt)("p",null,"and on agents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"--node-external-ip=<AGENT_EXTERNAL_IP>\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," is the IP through which we can reach the server node and ",(0,i.kt)("inlineCode",{parentName:"p"},"AGENT_EXTERNAL_IP")," is the IP through which we can reach the agent/worker node. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_URL")," config parameter in the agent/worker should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," to be able to connect to it. Remember to check the ",(0,i.kt)("a",{parentName:"p",href:"/kr/installation/requirements#networking"},"Networking Requirements")," and allow access to the listed ports on both internal and external addresses."),(0,i.kt)("p",null,"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"SERVER_EXTERNAL_IP")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AGENT_EXTERNAL_IP")," must have connectivity between them and are normally public IPs."),(0,i.kt)("admonition",{title:"Dynamic IPs",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If nodes are assigned dynamic IPs and the IP changes (e.g. in AWS), you must modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"--node-external-ip")," parameter to reflect the new IP. If running k3s as a service, you must modify ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/k3s.service")," then run:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl restart k3s\n"))),(0,i.kt)("admonition",{title:"Warning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The latency between nodes will increase as external connectivity requires more hops. This will reduce the network performance and could also impact the health of the cluster if latency is too high.")),(0,i.kt)("admonition",{title:"Warning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Embedded etcd will not use external IPs for communication. If using embedded etcd; all server nodes must be reachable to each other via their private IPs.")))}k.isMDXComponent=!0}}]);