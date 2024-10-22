"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7626],{6050:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=o(5893),t=o(1151);const i={title:"Flag Deprecation"},s=void 0,a={id:"reference/flag-deprecation",title:"Flag Deprecation",description:"K3s is a fast-moving project, and as such, we need a way to deprecate flags and configuration options. This page outlines the process for deprecating flags and configuration options. In order to ensure that users are not surprised by the removal of flags, the process is similar to the Kubernetes Deprecation Policy.",source:"@site/docs/reference/flag-deprecation.md",sourceDirName:"reference",slug:"/reference/flag-deprecation",permalink:"/reference/flag-deprecation",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/reference/flag-deprecation.md",tags:[],version:"current",lastUpdatedAt:172958706e4,frontMatter:{title:"Flag Deprecation"},sidebar:"mySidebar",previous:{title:"Environment Variables",permalink:"/reference/env-variables"},next:{title:"Resource Profiling",permalink:"/reference/resource-profiling"}},l={},c=[{value:"Process",id:"process",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["K3s is a fast-moving project, and as such, we need a way to deprecate flags and configuration options. This page outlines the process for deprecating flags and configuration options. In order to ensure that users are not surprised by the removal of flags, the process is similar to the ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/using-api/deprecation-policy/",children:"Kubernetes Deprecation Policy"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"process",children:"Process"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:'Flags can be declared as "To Be Deprecated" at any time.'}),"\n",(0,r.jsx)(n.li,{children:'Flags that are "To Be Deprecated" must be labeled as such on the next patch of all currently supported releases. Additionally, the flag will begin to warn users that it is going to be deprecated in the next minor release.'}),"\n",(0,r.jsx)(n.li,{children:"On the next minor release, a flag will be marked as deprecated in the documentation and converted to a hidden flag in code. The flag will continue to operate and give warnings to users."}),"\n",(0,r.jsx)(n.li,{children:'In the following minor release branch, deprecated flags will become "nonoperational", causing a fatal error if used. This error must explain to the user any new flags or configuration that replace this flag.'}),"\n",(0,r.jsx)(n.li,{children:"In the next minor release, the nonoperational flags will be removed from documentation and code."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"An example of the process:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--foo"})," exists in v1.22.14, v1.23.10, and v1.24.2."]}),"\n",(0,r.jsxs)(n.li,{children:["After the v1.24.2 release, it is decided to deprecate ",(0,r.jsx)(n.code,{children:"--foo"})," in favor of ",(0,r.jsx)(n.code,{children:"--new-foo"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["In v1.22.15, v1.23.11, and v1.24.3, ",(0,r.jsx)(n.code,{children:"--foo"})," continues to exist, but will warn users:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[Warning] --foo will be deprecated in v1.25.0, use `--new-foo` instead\n"})}),"\n",(0,r.jsx)(n.code,{children:"--foo"})," will continue to exist as an operational flag for the life of v1.22, v1.23 and v1.24."]}),"\n",(0,r.jsxs)(n.li,{children:["In v1.25.0, ",(0,r.jsx)(n.code,{children:"--foo"})," is marked as deprecated in documentation and will be hidden in code. It will continue to work and warn users to move to ",(0,r.jsx)(n.code,{children:"--new-foo"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["In v1.26.0, ",(0,r.jsx)(n.code,{children:"--foo"})," will cause a fatal error if used. The error message will say:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[Fatal] exit 1: --foo is no longer supported, use --new-foo instead\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["In v1.27.0, ",(0,r.jsx)(n.code,{children:"--foo"})," will be removed completely from all code and documentation."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var r=o(7294);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);