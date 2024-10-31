"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4126],{2364:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=i(5893),t=i(1151);const a={title:"Configuration Options"},o=void 0,r={id:"installation/configuration",title:"Configuration Options",description:"This page focuses on the options that are commonly used when setting up K3s for the first time. Refer to the documentation on Advanced Options and Configuration and the server and agent command documentation for more in-depth coverage.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/configuration.md",sourceDirName:"installation",slug:"/installation/configuration",permalink:"/zh/installation/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/configuration.md",tags:[],version:"current",lastUpdatedAt:173039206e4,frontMatter:{title:"Configuration Options"},sidebar:"mySidebar",previous:{title:"Requirements",permalink:"/zh/installation/requirements"},next:{title:"Private Registry Configuration",permalink:"/zh/installation/private-registry"}},l={},c=[{value:"Configuration with install script",id:"configuration-with-install-script",level:2},{value:"Configuration with binary",id:"configuration-with-binary",level:2},{value:"Configuration File",id:"configuration-file",level:2},{value:"Multiple Config Files",id:"multiple-config-files",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This page focuses on the options that are commonly used when setting up K3s for the first time. Refer to the documentation on ",(0,s.jsx)(n.a,{href:"/zh/advanced",children:"Advanced Options and Configuration"})," and the ",(0,s.jsx)(n.a,{href:"/zh/cli/server",children:"server"})," and ",(0,s.jsx)(n.a,{href:"/zh/cli/agent",children:"agent"})," command documentation for more in-depth coverage."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-with-install-script",children:"Configuration with install script"}),"\n",(0,s.jsxs)(n.p,{children:["As mentioned in the ",(0,s.jsx)(n.a,{href:"/zh/quick-start",children:"Quick-Start Guide"}),", you can use the installation script available at ",(0,s.jsx)(n.a,{href:"https://get.k3s.io",children:"https://get.k3s.io"})," to install K3s as a service on systemd and openrc based systems."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use a combination of ",(0,s.jsx)(n.code,{children:"INSTALL_K3S_EXEC"}),", ",(0,s.jsx)(n.code,{children:"K3S_"})," environment variables, and command flags to pass configuration to the service configuration.\nThe prefixed environment variables, ",(0,s.jsx)(n.code,{children:"INSTALL_K3S_EXEC"})," value, and trailing shell arguments are all persisted into the service configuration.\nAfter installation, configuration may be altered by editing the environment file, editing the service configuration, or simply re-running the installer with new options."]}),"\n",(0,s.jsx)(n.p,{children:"To illustrate this, the following commands all result in the same behavior of registering a server without flannel and with a token:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server" sh -s - --flannel-backend none --token 12345\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="server --flannel-backend none" K3S_TOKEN=12345 sh -s -\ncurl -sfL https://get.k3s.io | K3S_TOKEN=12345 sh -s - server --flannel-backend none\n# server is assumed below because there is no K3S_URL\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--flannel-backend none --token 12345" sh -s - \ncurl -sfL https://get.k3s.io | sh -s - --flannel-backend none --token 12345\n'})}),"\n",(0,s.jsx)(n.p,{children:"When registering an agent, the following commands all result in the same behavior:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="agent --server https://k3s.example.com --token mypassword" sh -s -\ncurl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="agent" K3S_TOKEN="mypassword" sh -s - --server https://k3s.example.com\ncurl -sfL https://get.k3s.io | K3S_URL=https://k3s.example.com sh -s - agent --token mypassword\ncurl -sfL https://get.k3s.io | K3S_URL=https://k3s.example.com K3S_TOKEN=mypassword sh -s - # agent is assumed because of K3S_URL\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For details on all environment variables, see ",(0,s.jsx)(n.a,{href:"/zh/reference/env-variables",children:"Environment Variables."})]}),"\n",(0,s.jsxs)(n.admonition,{title:"Note",type:"info",children:[(0,s.jsx)(n.p,{children:"If you set configuration when running the install script, but do not set it again when re-running the install script, the original values will be lost."}),(0,s.jsxs)(n.p,{children:["The contents of the ",(0,s.jsx)(n.a,{href:"#configuration-file",children:"configuration file"})," are not managed by the install script.\nIf you want your configuration to be independent from the install script, you should use a configuration file instead of passing environment variables or arguments to the install script."]})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-with-binary",children:"Configuration with binary"}),"\n",(0,s.jsxs)(n.p,{children:["As stated, the installation script is primarily concerned with configuring K3s to run as a service.",(0,s.jsx)(n.br,{}),"\n","If you choose to not use the script, you can run K3s simply by downloading the binary from our ",(0,s.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/latest",children:"release page"}),", placing it on your path, and executing it. This is not particularly useful for permanent installations, but may be useful when performing quick tests that do not merit managing K3s as a system service."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -Lo /usr/local/bin/k3s https://github.com/k3s-io/k3s/releases/download/v1.26.5+k3s1/k3s; chmod a+x /usr/local/bin/k3s\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can pass configuration by setting ",(0,s.jsx)(n.code,{children:"K3S_"})," environment variables:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'K3S_KUBECONFIG_MODE="644" k3s server\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or command flags:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"k3s server --write-kubeconfig-mode=644\n"})}),"\n",(0,s.jsx)(n.p,{children:"The k3s agent can also be configured this way:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"k3s agent --server https://k3s.example.com --token mypassword\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For details on configuring the K3s server, see the ",(0,s.jsxs)(n.a,{href:"/zh/cli/server",children:[(0,s.jsx)(n.code,{children:"k3s server"})," documentation"]}),".",(0,s.jsx)(n.br,{}),"\n","For details on configuring the K3s agent, see the ",(0,s.jsxs)(n.a,{href:"/zh/cli/agent",children:[(0,s.jsx)(n.code,{children:"k3s agent"})," documentation"]}),".",(0,s.jsx)(n.br,{}),"\n","You can also use the ",(0,s.jsx)(n.code,{children:"--help"})," flag to see a list of all available options, and their corresponding environment variables."]}),"\n",(0,s.jsx)(n.admonition,{title:"Matching Flags",type:"info",children:(0,s.jsxs)(n.p,{children:["It is important to match critical flags on your server nodes. For example, if you use the flag\n",(0,s.jsx)(n.code,{children:"--disable servicelb"})," or ",(0,s.jsx)(n.code,{children:"--cluster-cidr=10.200.0.0/16"})," on your master node, but don't set it on other server nodes, the nodes will fail to join. They will print errors such as:\n",(0,s.jsx)(n.code,{children:"failed to validate server configuration: critical configuration value mismatch."}),"\nSee the Server Configuration documentation (linked above) for more information on which flags must be set identically on server nodes."]})}),"\n",(0,s.jsx)(n.h2,{id:"configuration-file",children:"Configuration File"}),"\n",(0,s.jsx)(n.admonition,{title:"Version Gate",type:"info",children:(0,s.jsxs)(n.p,{children:["Available as of ",(0,s.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1",children:"v1.19.1+k3s1"})]})}),"\n",(0,s.jsx)(n.p,{children:"In addition to configuring K3s with environment variables and CLI arguments, K3s can also use a config file."}),"\n",(0,s.jsxs)(n.p,{children:["By default, values present in a YAML file located at ",(0,s.jsx)(n.code,{children:"/etc/rancher/k3s/config.yaml"})," will be used on install."]}),"\n",(0,s.jsxs)(n.p,{children:["An example of a basic ",(0,s.jsx)(n.code,{children:"server"})," config file is below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'write-kubeconfig-mode: "0644"\ntls-san:\n  - "foo.local"\nnode-label:\n  - "foo=bar"\n  - "something=amazing"\ncluster-init: true\n'})}),"\n",(0,s.jsx)(n.p,{children:"This is equivalent to the following CLI arguments:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'k3s server \\\n  --write-kubeconfig-mode "0644"    \\\n  --tls-san "foo.local"             \\\n  --node-label "foo=bar"            \\\n  --node-label "something=amazing"  \\\n  --cluster-init\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In general, CLI arguments map to their respective YAML key, with repeatable CLI arguments being represented as YAML lists. Boolean flags are represented as ",(0,s.jsx)(n.code,{children:"true"})," or ",(0,s.jsx)(n.code,{children:"false"})," in the YAML file."]}),"\n",(0,s.jsxs)(n.p,{children:["It is also possible to use both a configuration file and CLI arguments. In these situations, values will be loaded from both sources, but CLI arguments will take precedence. For repeatable arguments such as ",(0,s.jsx)(n.code,{children:"--node-label"}),", the CLI arguments will overwrite all values in the list."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, the location of the config file can be changed either through the CLI argument ",(0,s.jsx)(n.code,{children:"--config FILE, -c FILE"}),", or the environment variable ",(0,s.jsx)(n.code,{children:"$K3S_CONFIG_FILE"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"multiple-config-files",children:"Multiple Config Files"}),"\n",(0,s.jsx)(n.admonition,{title:"Version Gate",type:"info",children:(0,s.jsxs)(n.p,{children:["Available as of ",(0,s.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.0%2Bk3s1",children:"v1.21.0+k3s1"})]})}),"\n",(0,s.jsxs)(n.p,{children:["Multiple configuration files are supported. By default, configuration files are read from ",(0,s.jsx)(n.code,{children:"/etc/rancher/k3s/config.yaml"})," and ",(0,s.jsx)(n.code,{children:"/etc/rancher/k3s/config.yaml.d/*.yaml"})," in alphabetical order."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the last value found for a given key will be used. A ",(0,s.jsx)(n.code,{children:"+"})," can be appended to the key to append the value to the existing string or slice, instead of replacing it. All occurrences of this key in subsequent files will also require a ",(0,s.jsx)(n.code,{children:"+"})," to prevent overwriting the accumulated value."]}),"\n",(0,s.jsx)(n.p,{children:"An example of multiple config files is below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# config.yaml\ntoken: boop\nnode-label:\n  - foo=bar\n  - bar=baz\n\n\n# config.yaml.d/test1.yaml\nwrite-kubeconfig-mode: 600\nnode-taint:\n  - alice=bob:NoExecute\n\n# config.yaml.d/test2.yaml\nwrite-kubeconfig-mode: 777\nnode-label:\n  - other=what\n  - foo=three\nnode-taint+:\n  - charlie=delta:NoSchedule\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"This results in a final configuration of:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"write-kubeconfig-mode: 777\ntoken: boop\nnode-label:\n  - other=what\n  - foo=three\nnode-taint:\n  - alice=bob:NoExecute\n  - charlie=delta:NoSchedule\n"})}),"\n",(0,s.jsx)(n.h2,{id:"putting-it-all-together",children:"Putting it all together"}),"\n",(0,s.jsx)(n.p,{children:"All of the above options can be combined into a single example."}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"config.yaml"})," file is created at ",(0,s.jsx)(n.code,{children:"/etc/rancher/k3s/config.yaml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'token: "secret"\ndebug: true\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then the installation script is run with a combination of environment variables and flags:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | K3S_KUBECONFIG_MODE="644" INSTALL_K3S_EXEC="server" sh -s - --flannel-backend none\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or if you have already installed the K3s Binary:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'K3S_KUBECONFIG_MODE="644" k3s server --flannel-backend none\n'})}),"\n",(0,s.jsx)(n.p,{children:"This results in a server with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A kubeconfig file with permissions ",(0,s.jsx)(n.code,{children:"644"})]}),"\n",(0,s.jsxs)(n.li,{children:["Flannel backend set to ",(0,s.jsx)(n.code,{children:"none"})]}),"\n",(0,s.jsxs)(n.li,{children:["The token set to ",(0,s.jsx)(n.code,{children:"secret"})]}),"\n",(0,s.jsx)(n.li,{children:"Debug logging enabled"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var s=i(7294);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);