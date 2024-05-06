"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8776],{2518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var s=a(5893),r=a(1151);const n={title:"Backup and Restore"},o=void 0,d={id:"datastore/backup-restore",title:"Backup and Restore",description:"The way K3s is backed up and restored depends on which type of datastore is used.",source:"@site/docs/datastore/backup-restore.md",sourceDirName:"datastore",slug:"/datastore/backup-restore",permalink:"/datastore/backup-restore",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/backup-restore.md",tags:[],version:"current",lastUpdatedAt:171502279e4,frontMatter:{title:"Backup and Restore"},sidebar:"mySidebar",previous:{title:"Cluster Datastore",permalink:"/datastore/"},next:{title:"High Availability Embedded etcd",permalink:"/datastore/ha-embedded"}},i={},c=[{value:"Backup and Restore with SQLite",id:"backup-and-restore-with-sqlite",level:2},{value:"Backup and Restore with External Datastore",id:"backup-and-restore-with-external-datastore",level:2},{value:"Backup and Restore with Embedded etcd Datastore",id:"backup-and-restore-with-embedded-etcd-datastore",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The way K3s is backed up and restored depends on which type of datastore is used."}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["In addition to backing up the datastore itself, you must also back up the server token file at ",(0,s.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/token"}),".\nYou must restore this file, or pass its value into the ",(0,s.jsx)(t.code,{children:"--token"})," option, when restoring from backup.\nIf you do not use the same token value when restoring, the snapshot will be unusable, as the token is used to encrypt confidential data within the datastore itself."]})}),"\n",(0,s.jsx)(t.h2,{id:"backup-and-restore-with-sqlite",children:"Backup and Restore with SQLite"}),"\n",(0,s.jsx)(t.p,{children:"No special commands are required to back up or restore the SQLite datastore."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["To back up the SQLite datastore, take a copy of ",(0,s.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/db/"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["To restore the SQLite datastore, restore the contents of ",(0,s.jsx)(t.code,{children:"/var/lib/rancher/k3s/server/db"})," (and the token, as discussed above)."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"backup-and-restore-with-external-datastore",children:"Backup and Restore with External Datastore"}),"\n",(0,s.jsx)(t.p,{children:"When an external datastore is used, backup and restore operations are handled outside of K3s. The database administrator will need to back up the external database, or restore it from a snapshot or dump."}),"\n",(0,s.jsx)(t.p,{children:"We recommend configuring the database to take recurring snapshots."}),"\n",(0,s.jsx)(t.p,{children:"For details on taking database snapshots and restoring your database from them, refer to the official database documentation:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/replication-snapshot-method.html",children:"Official MySQL documentation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.postgresql.org/docs/8.3/backup-dump.html",children:"Official PostgreSQL documentation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://etcd.io/docs/latest/op-guide/recovery/",children:"Official etcd documentation"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"backup-and-restore-with-embedded-etcd-datastore",children:"Backup and Restore with Embedded etcd Datastore"}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsxs)(t.a,{href:"/cli/etcd-snapshot",children:[(0,s.jsx)(t.code,{children:"k3s etcd-snapshot"})," command documentation"]})," for information on performing backup and restore operations on the embedded etcd datastore."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>d,a:()=>o});var s=a(7294);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);