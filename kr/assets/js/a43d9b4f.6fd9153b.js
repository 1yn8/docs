"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3667],{1080:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var r=n(5893),t=n(1151),i=n(9965),c=n(4996);const d={title:"\uc544\ud0a4\ud14d\ucc98"},l=void 0,o={id:"architecture",title:"\uc544\ud0a4\ud14d\ucc98",description:"\uc774 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \uace0\uac00\uc6a9\uc131 K3s \uc11c\ubc84 \ud074\ub7ec\uc2a4\ud130\uc758 \uc544\ud0a4\ud14d\ucc98\uc640 \ub2e8\uc77c \ub178\ub4dc \uc11c\ubc84 \ud074\ub7ec\uc2a4\ud130\uc640\uc758 \ucc28\uc774\uc810\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/kr/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/architecture.md",tags:[],version:"current",lastUpdatedAt:172958706e4,frontMatter:{title:"\uc544\ud0a4\ud14d\ucc98"},sidebar:"mySidebar",previous:{title:"token",permalink:"/kr/cli/token"},next:{title:"\ud074\ub7ec\uc2a4\ud130 \uc811\uadfc",permalink:"/kr/cluster-access"}},a={},h=[{value:"\uc784\ubca0\ub514\ub4dc DB\uac00 \uc788\ub294 \ub2e8\uc77c \uc11c\ubc84 \uc124\uc815",id:"\uc784\ubca0\ub514\ub4dc-db\uac00-\uc788\ub294-\ub2e8\uc77c-\uc11c\ubc84-\uc124\uc815",level:3},{value:"\uc678\ubd80 DB\uac00 \uc788\ub294 \uace0\uac00\uc6a9\uc131 K3s \uc11c\ubc84",id:"\uc678\ubd80-db\uac00-\uc788\ub294-\uace0\uac00\uc6a9\uc131-k3s-\uc11c\ubc84",level:3},{value:"\uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc\ub97c \uc704\ud55c \uace0\uc815 \ub4f1\ub85d \uc8fc\uc18c",id:"\uc5d0\uc774\uc804\ud2b8-\ub178\ub4dc\ub97c-\uc704\ud55c-\uace0\uc815-\ub4f1\ub85d-\uc8fc\uc18c",level:3},{value:"\uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc \ub4f1\ub85d \uc791\ub3d9 \ubc29\uc2dd",id:"\uc5d0\uc774\uc804\ud2b8-\ub178\ub4dc-\ub4f1\ub85d-\uc791\ub3d9-\ubc29\uc2dd",level:3}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\uc774 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \uace0\uac00\uc6a9\uc131 K3s \uc11c\ubc84 \ud074\ub7ec\uc2a4\ud130\uc758 \uc544\ud0a4\ud14d\ucc98\uc640 \ub2e8\uc77c \ub178\ub4dc \uc11c\ubc84 \ud074\ub7ec\uc2a4\ud130\uc640\uc758 \ucc28\uc774\uc810\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(s.p,{children:"\ub610\ud55c \uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc\uac00 K3s \uc11c\ubc84\uc5d0 \ub4f1\ub85d\ub418\ub294 \ubc29\ubc95\ub3c4 \uc124\uba85\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\uc11c\ubc84 \ub178\ub4dc\ub294 ",(0,r.jsx)(s.code,{children:"k3s server"})," \uba85\ub839\uc744 \uc2e4\ud589\ud558\ub294 \ud638\uc2a4\ud2b8\ub85c \uc815\uc758\ub418\uba70, \ucee8\ud2b8\ub864 \ud50c\ub808\uc778 \ubc0f \ub370\uc774\ud130\uc2a4\ud1a0\uc5b4 \uad6c\uc131 \uc694\uc18c\ub294 K3s\uc5d0\uc11c \uad00\ub9ac\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(s.li,{children:["\uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc\ub294 \ub370\uc774\ud130\uc2a4\ud1a0\uc5b4 \ub610\ub294 \ucee8\ud2b8\ub864 \ud50c\ub808\uc778 \uad6c\uc131 \uc694\uc18c \uc5c6\uc774 ",(0,r.jsx)(s.code,{children:"k3s agent"})," \uba85\ub839\uc744 \uc2e4\ud589\ud558\ub294 \ud638\uc2a4\ud2b8\ub85c \uc815\uc758\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(s.li,{children:["\uc11c\ubc84\uc640 \uc5d0\uc774\uc804\ud2b8 \ubaa8\ub450 kubelet, \ucee8\ud14c\uc774\ub108 \ub7f0\ud0c0\uc784 \ubc0f CNI\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc5d0\uc774\uc804\ud2b8 \uc5c6\ub294 \uc11c\ubc84 \uc2e4\ud589\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,r.jsx)(s.a,{href:"/kr/advanced#%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8-%EC%97%86%EB%8A%94-%EC%84%9C%EB%B2%84-%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0%EC%8B%A4%ED%97%98%EC%A0%81",children:"\uace0\uae09 \uc635\uc158"})," \uc124\uba85\uc11c\ub97c \ucc38\uc870\ud558\uc138\uc694."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(4530).Z+"",width:"1562",height:"898"})}),"\n",(0,r.jsx)(s.h3,{id:"\uc784\ubca0\ub514\ub4dc-db\uac00-\uc788\ub294-\ub2e8\uc77c-\uc11c\ubc84-\uc124\uc815",children:"\uc784\ubca0\ub514\ub4dc DB\uac00 \uc788\ub294 \ub2e8\uc77c \uc11c\ubc84 \uc124\uc815"}),"\n",(0,r.jsx)(s.p,{children:"\ub2e4\uc74c \ub2e4\uc774\uc5b4\uadf8\ub7a8\uc740 \uc784\ubca0\ub514\ub4dc SQLite \ub370\uc774\ud130\ubca0\uc774\uc2a4\uac00 \uc788\ub294 \ub2e8\uc77c \ub178\ub4dc K3s \uc11c\ubc84\uac00 \uc788\ub294 \ud074\ub7ec\uc2a4\ud130\uc758 \uc608\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,r.jsx)(s.p,{children:"\uc774 \uad6c\uc131\uc5d0\uc11c \uac01 \uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc\ub294 \ub3d9\uc77c\ud55c \uc11c\ubc84 \ub178\ub4dc\uc5d0 \ub4f1\ub85d\ub429\ub2c8\ub2e4. K3s \uc0ac\uc6a9\uc790\ub294 \uc11c\ubc84 \ub178\ub4dc\uc5d0\uc11c K3s API\ub97c \ud638\ucd9c\ud558\uc5ec \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ub9ac\uc18c\uc2a4\ub97c \uc870\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(i.Z,{alt:"K3s Architecture with a Single Server",sources:{light:(0,c.ZP)("/img/k3s-architecture-single-server.svg"),dark:(0,c.ZP)("/img/k3s-architecture-single-server-dark.svg")}}),"\n",(0,r.jsx)(s.h3,{id:"\uc678\ubd80-db\uac00-\uc788\ub294-\uace0\uac00\uc6a9\uc131-k3s-\uc11c\ubc84",children:"\uc678\ubd80 DB\uac00 \uc788\ub294 \uace0\uac00\uc6a9\uc131 K3s \uc11c\ubc84"}),"\n",(0,r.jsx)(s.p,{children:"\ub2e8\uc77c \uc11c\ubc84 \ud074\ub7ec\uc2a4\ud130\ub294 \ub2e4\uc591\ud55c \uc0ac\uc6a9 \uc0ac\ub840\ub97c \ucda9\uc871\ud560 \uc218 \uc788\uc9c0\ub9cc, Kubernetes \ucee8\ud2b8\ub864 \ud50c\ub808\uc778\uc758 \uac00\ub3d9 \uc2dc\uac04\uc774 \uc911\uc694\ud55c \ud658\uacbd\uc758 \uacbd\uc6b0, HA \uad6c\uc131\uc73c\ub85c K3s\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. HA K3s \ud074\ub7ec\uc2a4\ud130\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uad6c\uc131\ub429\ub2c8\ub2e4:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\ub450 \uac1c \uc774\uc0c1\uc758 ",(0,r.jsx)(s.strong,{children:"\uc11c\ubc84 \ub178\ub4dc"}),"\uac00 Kubernetes API\ub97c \uc81c\uacf5\ud558\uace0 \ub2e4\ub978 \ucee8\ud2b8\ub864 \ud50c\ub808\uc778 \uc11c\ube44\uc2a4\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\uc678\ubd80 \ub370\uc774\ud130\uc2a4\ud1a0\uc5b4"}),"(\ub2e8\uc77c \uc11c\ubc84 \uc124\uc815\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc784\ubca0\ub514\ub4dc SQLite \ub370\uc774\ud130\uc2a4\ud1a0\uc5b4\uc640 \ubc18\ub300)"]}),"\n"]}),"\n",(0,r.jsx)(i.Z,{alt:"K3s Architecture with High-availability Servers",sources:{light:(0,c.ZP)("/img/k3s-architecture-ha-server.svg"),dark:(0,c.ZP)("/img/k3s-architecture-ha-server-dark.svg")}}),"\n",(0,r.jsx)(s.h3,{id:"\uc5d0\uc774\uc804\ud2b8-\ub178\ub4dc\ub97c-\uc704\ud55c-\uace0\uc815-\ub4f1\ub85d-\uc8fc\uc18c",children:"\uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc\ub97c \uc704\ud55c \uace0\uc815 \ub4f1\ub85d \uc8fc\uc18c"}),"\n",(0,r.jsx)(s.p,{children:"\uace0\uac00\uc6a9\uc131 \uc11c\ubc84 \uad6c\uc131\uc5d0\uc11c \uac01 \ub178\ub4dc\ub294 \uc544\ub798 \ub2e4\uc774\uc5b4\uadf8\ub7a8\uacfc \uac19\uc774 \uace0\uc815 \ub4f1\ub85d \uc8fc\uc18c\ub97c \uc0ac\uc6a9\ud558\uc5ec Kubernetes API\uc5d0 \ub4f1\ub85d\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(s.p,{children:"\ub4f1\ub85d \ud6c4 \uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc\ub294 \uc11c\ubc84 \ub178\ub4dc \uc911 \ud558\ub098\uc5d0 \uc9c1\uc811 \uc5f0\uacb0\uc744 \uc124\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(i.Z,{alt:"Agent Registration HA",sources:{light:(0,c.ZP)("/img/k3s-production-setup.svg"),dark:(0,c.ZP)("/img/k3s-production-setup-dark.svg")}}),"\n",(0,r.jsx)(s.h3,{id:"\uc5d0\uc774\uc804\ud2b8-\ub178\ub4dc-\ub4f1\ub85d-\uc791\ub3d9-\ubc29\uc2dd",children:"\uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc \ub4f1\ub85d \uc791\ub3d9 \ubc29\uc2dd"}),"\n",(0,r.jsxs)(s.p,{children:["\uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc\ub294 ",(0,r.jsx)(s.code,{children:"k3s agent"})," \ud504\ub85c\uc138\uc2a4\uc5d0 \uc758\ud574 \uc2dc\uc791\ub41c \uc6f9\uc18c\ucf13 \uc5f0\uacb0\ub85c \ub4f1\ub85d\ub418\uba70, \uc5d0\uc774\uc804\ud2b8 \ud504\ub85c\uc138\uc2a4\uc758 \uc77c\ubd80\ub85c \uc2e4\ud589\ub418\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 \ub85c\ub4dc\ubc38\ub7f0\uc11c\uc5d0 \uc758\ud574 \uc5f0\uacb0\uc774 \uc720\uc9c0\ub429\ub2c8\ub2e4. \uc774 \ub85c\ub4dc \ubc38\ub7f0\uc11c\ub294 \ud074\ub7ec\uc2a4\ud130\uc758 \ubaa8\ub4e0 \uc11c\ubc84\uc5d0 \ub300\ud55c \uc548\uc815\uc801\uc778 \uc5f0\uacb0\uc744 \uc720\uc9c0\ud558\uc5ec \uac1c\ubcc4 \uc11c\ubc84\uc758 \uc911\ub2e8\uc744 \ud5c8\uc6a9\ud558\ub294 \uc5d0\uc774\uc804\uc2dc \uc11c\ubc84\uc5d0 \ub300\ud55c \uc5f0\uacb0\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(s.p,{children:["\uc5d0\uc774\uc804\ud2b8\ub294 \ub178\ub4dc \ud074\ub7ec\uc2a4\ud130 \uc2dc\ud06c\ub9bf\uacfc \ub178\ub4dc\uc5d0 \ub300\ud574 \ubb34\uc791\uc704\ub85c \uc0dd\uc131\ub41c \ube44\ubc00\ubc88\ud638\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc11c\ubc84\uc5d0 \ub4f1\ub85d\ud558\uba70, \uc774 \ube44\ubc00\ubc88\ud638\ub294 ",(0,r.jsx)(s.code,{children:"/etc/rancher/node/password"}),"\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uc11c\ubc84\ub294 \uac1c\ubcc4 \ub178\ub4dc\uc758 \ube44\ubc00\ubc88\ud638\ub97c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc2dc\ud06c\ub9bf\uc73c\ub85c \uc800\uc7a5\ud558\uba70, \uc774\ud6c4 \ubaa8\ub4e0 \uc2dc\ub3c4\ub294 \ub3d9\uc77c\ud55c \ube44\ubc00\ubc88\ud638\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4. \ub178\ub4dc \ud328\uc2a4\uc6cc\ub4dc \uc2dc\ud06c\ub9bf\uc740 ",(0,r.jsx)(s.code,{children:"<host>.node-password.k3s"})," \ud15c\ud50c\ub9bf\uc744 \uc0ac\uc6a9\ud558\ub294 \uc774\ub984\uc73c\ub85c ",(0,r.jsx)(s.code,{children:"kube-system"})," \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uc774\ub294 \ub178\ub4dc ID\uc758 \ubb34\uacb0\uc131\uc744 \ubcf4\ud638\ud558\uae30 \uc704\ud574 \uc218\ud589\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(s.p,{children:["\uc5d0\uc774\uc804\ud2b8\uc758 ",(0,r.jsx)(s.code,{children:"/etc/rancher/node"})," \ub514\ub809\ud130\ub9ac\uac00 \uc81c\uac70\ub418\uac70\ub098 \uae30\uc874 \uc774\ub984\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub178\ub4dc\uc5d0 \ub2e4\uc2dc \uac00\uc785\ud558\ub824\ub294 \uacbd\uc6b0, \ud074\ub7ec\uc2a4\ud130\uc5d0\uc11c \ub178\ub4dc\ub97c \uc0ad\uc81c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uc774\uc804 \ub178\ub4dc \ud56d\ubaa9\uacfc \ub178\ub4dc \ube44\ubc00\ubc88\ud638 \uc2dc\ud06c\ub9bf\uc774 \ubaa8\ub450 \uc815\ub9ac\ub418\uace0 \ub178\ub4dc\uac00 \ud074\ub7ec\uc2a4\ud130\uc5d0 (\uc7ac)\uc870\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["K3s v1.20.2 \uc774\uc804 \uc11c\ubc84\ub294 ",(0,r.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/cred/node-passwd"}),"\uc5d0 \ub514\uc2a4\ud06c\uc5d0 \ube44\ubc00\ubc88\ud638\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."]})}),"\n",(0,r.jsxs)(s.p,{children:["\ud638\uc2a4\ud2b8 \uc774\ub984\uc744 \uc790\uc8fc \uc7ac\uc0ac\uc6a9\ud558\uc9c0\ub9cc \ub178\ub4dc \uc554\ud638 \uc2dc\ud06c\ub9bf\uc744 \uc81c\uac70\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0, ",(0,r.jsx)(s.code,{children:"--with-node-id"})," \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec K3s \uc11c\ubc84 \ub610\ub294 \uc5d0\uc774\uc804\ud2b8\ub97c \uc2dc\uc791\ud558\uba74 \ud638\uc2a4\ud2b8 \uc774\ub984\uc5d0 \uace0\uc720 \ub178\ub4dc ID\ub97c \uc790\ub3d9\uc73c\ub85c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud65c\uc131\ud654\ud558\uba74 \ub178\ub4dc ID\ub294 ",(0,r.jsx)(s.code,{children:"/etc/rancher/node/"}),"\uc5d0\ub3c4 \uc800\uc7a5\ub429\ub2c8\ub2e4."]})]})}function x(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4530:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/how-it-works-k3s-revised-9c025ef482404bca2e53a89a0ba7a3c5.svg"},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>c});var r=n(7294);const t={},i=r.createContext(t);function c(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);