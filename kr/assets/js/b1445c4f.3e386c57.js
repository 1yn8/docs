"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[547],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(k,s(s({ref:t},d),{},{components:a})):n.createElement(k,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(3117),r=a(7294),l=a(6010),s=a(2466),o=a(6775),i=a(1980),p=a(7392),d=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,p]=k({queryString:a,groupId:n}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=i??u;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),h(e)}),[p,h,l]),tabValues:l}}var b=a(2389);const N="tabList__CuJ",f="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==o&&(u(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},s,{className:(0,l.Z)("tabs__item",f,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function S(e){const t=(0,b.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},1650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(3117),r=(a(7294),a(3905)),l=a(4866),s=a(5162);const o={title:"etcd-snapshot"},i="k3s etcd-snapshot",p={unversionedId:"cli/etcd-snapshot",id:"cli/etcd-snapshot",title:"etcd-snapshot",description:"Available as of v1.19.1+k3s1",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/cli/etcd-snapshot.md",sourceDirName:"cli",slug:"/cli/etcd-snapshot",permalink:"/kr/cli/etcd-snapshot",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/etcd-snapshot.md",tags:[],version:"current",lastUpdatedAt:1680884392,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{title:"etcd-snapshot"},sidebar:"mySidebar",previous:{title:"certificate",permalink:"/kr/cli/certificate"},next:{title:"secrets-encrypt",permalink:"/kr/cli/secrets-encrypt"}},d={},u=[{value:"Creating Snapshots",id:"creating-snapshots",level:4},{value:"Restoring a Cluster from a Snapshot",id:"restoring-a-cluster-from-a-snapshot",level:4},{value:"Options",id:"options",level:4},{value:"S3 Compatible API Support",id:"s3-compatible-api-support",level:4},{value:"Etcd Snapshot and Restore Subcommands",id:"etcd-snapshot-and-restore-subcommands",level:4}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"k3s-etcd-snapshot"},"k3s etcd-snapshot"),(0,r.kt)("admonition",{title:"Version Gate",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Available as of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/k3s/releases/tag/v1.19.1%2Bk3s1"},"v1.19.1+k3s1"))),(0,r.kt)("p",null,"In this section, you'll learn how to create backups of the K3s embedded etcd datastore, and to restore the cluster from backup."),(0,r.kt)("h4",{id:"creating-snapshots"},"Creating Snapshots"),(0,r.kt)("p",null,"Snapshots are enabled by default, at 00:00 and 12:00 system time, with 5 snapshots retained. To configure the snapshot interval or the number of retained snapshots, refer to the ",(0,r.kt)("a",{parentName:"p",href:"#options"},"options"),"."),(0,r.kt)("p",null,"The snapshot directory defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"${data-dir}/server/db/snapshots"),". The data-dir value defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s")," and can be changed by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"--data-dir")," flag."),(0,r.kt)("h4",{id:"restoring-a-cluster-from-a-snapshot"},"Restoring a Cluster from a Snapshot"),(0,r.kt)("p",null,"When K3s is restored from backup, the old data directory will be moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"${data-dir}/server/db/etcd-old/"),". Then K3s will attempt to restore the snapshot by creating a new data directory, then starting etcd with a new K3s cluster with one etcd member."),(0,r.kt)("p",null,"To restore the cluster from backup:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Single Server",mdxType:"TabItem"},(0,r.kt)("p",null,"Run K3s with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-reset")," option, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-reset-restore-path")," also given:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," A message in the logs says that K3s can be restarted without the flags. Start k3s again and should run successfully and be restored from the specified snapshot.")),(0,r.kt)(s.Z,{value:"High Availability",mdxType:"TabItem"},(0,r.kt)("p",null,"In this example there are 3 servers, ",(0,r.kt)("inlineCode",{parentName:"p"},"S1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"S2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"S3"),". The snapshot is located on ",(0,r.kt)("inlineCode",{parentName:"p"},"S1"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On S1, start K3s with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-reset")," option, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-reset-restore-path")," also given:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Result:")," A message in the logs says that K3s can be restarted without the flags.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On S2 and S3, stop K3s. Then delete the data directory, ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/db/"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop k3s\nrm -rf /var/lib/rancher/k3s/server/db/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On S1, start K3s again:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start k3s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On S2 and S3, start K3s again to join the restored cluster:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start k3s\n")))))),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("p",null,"These options can be passed in with the command line, or in the ",(0,r.kt)("a",{parentName:"p",href:"/kr/installation/configuration#configuration-file"},"configuration file,")," which may be easier to use."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-disable-snapshots")),(0,r.kt)("td",{parentName:"tr",align:null},"Disable automatic etcd snapshots")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-schedule-cron")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Snapshot interval time in cron spec. eg. every 5 hours ",(0,r.kt)("inlineCode",{parentName:"td"},"0 */5 * * *"),"(default: ",(0,r.kt)("inlineCode",{parentName:"td"},"0 */12 * * *"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-retention")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of snapshots to retain (default: 5)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-snapshot-dir")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory to save db snapshots. (Default location: ",(0,r.kt)("inlineCode",{parentName:"td"},"${data-dir}/db/snapshots"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--cluster-reset")),(0,r.kt)("td",{parentName:"tr",align:null},"Forget all peers and become sole member of a new cluster. This can also be set with the environment variable ",(0,r.kt)("inlineCode",{parentName:"td"},"[$K3S_CLUSTER_RESET]"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--cluster-reset-restore-path")," value"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to snapshot file to be restored")))),(0,r.kt)("h4",{id:"s3-compatible-api-support"},"S3 Compatible API Support"),(0,r.kt)("p",null,"K3s supports writing etcd snapshots to and restoring etcd snapshots from systems with S3-compatible APIs. S3 support is available for both on-demand and scheduled snapshots."),(0,r.kt)("p",null,"The arguments below have been added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," subcommand. These flags exist for the ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," subcommand as well however the ",(0,r.kt)("inlineCode",{parentName:"p"},"--etcd-s3")," portion is removed to avoid redundancy."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable backup to S3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 endpoint url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint-ca")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 custom CA cert to connect to S3 endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-skip-ssl-verify")),(0,r.kt)("td",{parentName:"tr",align:null},"Disables S3 SSL certificate validation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-access-key")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 access key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-secret-key")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 secret key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-bucket")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 bucket name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-region")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 region / bucket location (optional). defaults to us-east-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--etcd-s3-folder")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 folder")))),(0,r.kt)("p",null,"To perform an on-demand etcd snapshot and save it to S3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot \\\n  --s3 \\\n  --s3-bucket=<S3-BUCKET-NAME> \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY>\n")),(0,r.kt)("p",null,"To perform an on-demand etcd snapshot restore from S3, first make sure that K3s isn't running. Then run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s server \\\n  --cluster-init \\\n  --cluster-reset \\\n  --etcd-s3 \\\n  --cluster-reset-restore-path=<SNAPSHOT-NAME> \\\n  --etcd-s3-bucket=<S3-BUCKET-NAME> \\\n  --etcd-s3-access-key=<S3-ACCESS-KEY> \\\n  --etcd-s3-secret-key=<S3-SECRET-KEY>\n")),(0,r.kt)("h4",{id:"etcd-snapshot-and-restore-subcommands"},"Etcd Snapshot and Restore Subcommands"),(0,r.kt)("p",null,"k3s supports a set of subcommands for working with your etcd snapshots."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subcommand"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete given snapshot(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ls, list, l"),(0,r.kt)("td",{parentName:"tr",align:null},"List snapshots")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prune"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove snapshots that exceed the configured retention count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"save"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger an immediate etcd snapshot")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," subcommand is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s etcd-snapshot"),". The latter will eventually be deprecated in favor of the former.")),(0,r.kt)("p",null,"These commands will perform as expected whether the etcd snapshots are stored locally or in an S3 compatible object store."),(0,r.kt)("p",null,"For additional information on the etcd snapshot subcommands, run ",(0,r.kt)("inlineCode",{parentName:"p"},"k3s etcd-snapshot"),"."),(0,r.kt)("p",null,"Delete a snapshot from S3."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot delete          \\\n  --s3                            \\\n  --s3-bucket=<S3-BUCKET-NAME>    \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY> \\\n  <SNAPSHOT-NAME>\n")),(0,r.kt)("p",null,"Prune local snapshots with the default retention policy (5). The ",(0,r.kt)("inlineCode",{parentName:"p"},"prune")," subcommand takes an additional flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--snapshot-retention")," that allows for overriding the default retention policy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot prune\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"k3s etcd-snapshot prune --snapshot-retention 10\n")))}m.isMDXComponent=!0}}]);