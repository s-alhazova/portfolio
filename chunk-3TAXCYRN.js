import{a as _}from"./chunk-3QQJRSJR.js";import{e as O}from"./chunk-6FZWJG5M.js";import{k as P}from"./chunk-CWW3VPIJ.js";import{Cb as d,Db as C,Fa as c,Ia as e,Ya as m,aa as l,ab as n,ea as a,fb as i,gb as p,hb as f,yb as s,zb as g}from"./chunk-XW7IL6ES.js";var u=o=>["/portfolio",o];function v(o,r){if(o&1&&(i(0,"div",2)(1,"a",3),f(2,"img",4),i(3,"p"),s(4),p()()()),o&2){let t=r.$implicit;e(),n("routerLink",C(4,u,t.id)),e(),n("src",t.images[0],c)("alt",t.title),e(2),g(t.title)}}var M=class o{portfolioItems=[];portfolioService=l(_);ngOnInit(){this.portfolioItems=this.portfolioService.getAllItems().slice().reverse()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=a({type:o,selectors:[["app-portfolio"]],standalone:!0,features:[d],decls:2,vars:1,consts:[[1,"portfolio"],["class","portfolio-item",4,"ngFor","ngForOf"],[1,"portfolio-item"],[3,"routerLink"],["draggable","false",3,"src","alt"]],template:function(t,x){t&1&&(i(0,"section",0),m(1,v,5,6,"div",1),p()),t&2&&(e(),n("ngForOf",x.portfolioItems))},dependencies:[O,P],styles:[".portfolio[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;justify-content:center;padding:50px}.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]{text-align:center;border-radius:8px;transition:filter .3s ease}.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]:hover{filter:brightness(.8)}.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;height:300px;object-fit:cover;object-position:center;border-radius:6px;margin-bottom:10px}.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5em;margin:10px auto;color:#444;text-wrap:pretty;width:80%}@media (max-width: 600px){.portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2em}}@media (max-width: 420px){.portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:300px}.portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1em}}"],changeDetection:0})};export{M as PortfolioComponent};
