"use strict";(globalThis["webpackChunktwitter_stats_display"]=globalThis["webpackChunktwitter_stats_display"]||[]).push([[954],{9954:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var o=a(9835),s=a(6970);const r={class:"col-xs-12 col-sm-12 col-md-12"},n={class:"row q-mt-md text-h5"},i={class:"row q-mt-md q-gutter-sm"},l={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},m={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"};function f(e,t,a,f,u,g){const c=(0,o.up)("q-btn"),d=(0,o.up)("ReportPeriodSelector"),D=(0,o.up)("DiffOfAggregateStatsByTag"),p=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(p,{class:"row q-pl-md q-pr-md q-pb-lg"},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o._)("div",n," Twitter Statistics for "+(0,s.zw)(f.dateRange.from)+" to "+(0,s.zw)(f.dateRange.to)+" vs. "+(0,s.zw)(f.dateRange.previousFrom)+" to "+(0,s.zw)(f.dateRange.previousTo),1),(0,o._)("div",i,[(0,o.Wm)(c,{type:"a",href:"./#/",label:"< Main Report",push:""}),(0,o.Wm)(d,{from:f.dateRange.from,to:f.dateRange.to,onReportRequested:f.handleReportRequested},null,8,["from","to","onReportRequested"])]),(0,o._)("div",l,[(0,o._)("div",m,[(0,o.Wm)(D,{series:f.diffOfAggregateStatsByTag},null,8,["series"])])])])])),_:1})}a(9665);var u=a(499),g=a(4170),c=a(3703),d=a(1446),D=a(1168);const p={class:""};function w(e,t,a,s,r,n){const i=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)(i,{title:"Percentage Increase/Decrese for Aggregate Stats Over Period by Tag",rows:a.series,columns:s.columns,pagination:s.pagination,"row-key":"tag",dense:"","binary-state-sort":""},null,8,["rows","columns","pagination"])])}const Y={props:{series:{required:!0,type:Object}},setup(e){const t={rowsPerPage:100,sortBy:"interactionsDiff",descending:!0},a=[{name:"tag",label:"Tag",field:"tag",sortable:!0,align:"left"},{name:"interactionsDiff",label:"Interactions",field:"interactionsDiff",sortable:!0,align:"left"},{name:"uniqueCommentorsDiff",label:"Unique Repliers",field:"uniqueCommentorsDiff",sortable:!0,align:"left"},{name:"tweetsDiff",label:"Num. Tweets",field:"tweetsDiff",sortable:!0,sort:(e,t,a,o)=>parseInt(e,10)-parseInt(t,10),align:"left"},{name:"likesDiff",label:"Num. Likes",field:"likesDiff",sortable:!0,align:"left"},{name:"quotesDiff",label:"Num. Quote Tweets",field:"quotesDiff",sortable:!0,align:"left"},{name:"retweetsDiff",label:"Num. Retweets",field:"retweetsDiff",sortable:!0,align:"left"},{name:"repliesDiff",label:"Num. Replies",field:"repliesDiff",sortable:!0,align:"left"}];return{columns:a,pagination:t}}};var b=a(1639),M=a(4356),v=a(9984),q=a.n(v);const T=(0,b.Z)(Y,[["render",w]]),Z=T;q()(Y,"components",{QTable:M.Z});var S=a(289);const{subtractFromDate:P,formatDate:R}=g.ZP,y={components:{ReportPeriodSelector:D.Z,DiffOfAggregateStatsByTag:Z},setup(){const e=new S.Z,t=(0,u.iH)([]),a=(0,u.iH)([]),o=Date.now(),s=P(o,{days:7});var r=R(o,"MMM DD, YYYY"),n=R(s,"MMM DD, YYYY");const i=(0,u.iH)({from:n,to:r,previousFrom:"???",previousTo:"???"}),l=c.Z.getItem("dateSelection"),m=c.Z.getItem("password");null!=l&&l["saved"]>=o-864e5&&(n=R(l["from"],"MMM DD, YYYY"),r=R(l["to"],"MMM DD, YYYY"),i.value={from:n,to:r});const f=t=>{g.ZP.extractDate(i.value.from,"MMM DD, YYYY").getTime(),g.ZP.extractDate(i.value.to,"MMM DD, YYYY").getTime();Y();e.getTags()},D=e=>{i.value.from=R(e.from,"MMM DD, YYYY"),i.value.to=R(e.to,"MMM DD, YYYY");const t=g.ZP.extractDate(e.from,"YYYY/MM/DD"),a=g.ZP.extractDate(e.to,"YYYY/MM/DD"),o=Date.now(),s={from:t.getTime(),to:a.getTime(),saved:o};c.Z.set("dateSelection",s),Y()},p=(e,t)=>{const a=1e-6,o=100*Number(e-t),s=Number(t)+a;return Math.round(o/s)},w=(e,t)=>{const a=[];return console.log(e),console.log(t),t.forEach((t=>{const o=t.tag,s=e.find((e=>e.tag===o));if(null==s)console.log(o+" is a new tag");else{const e=p(t.interactionsSum,s.interactionsSum),r=p(t.numTweets,s.numTweets),n=p(t.likesSum,s.likesSum),i=p(t.quoteSum,s.quoteSum),l=p(t.retweetSum,s.retweetSum),m=p(t.replySum,s.replySum),f=p(t.uniqueCommentorsSum,s.uniqueCommentorsSum),u={tag:o,interactionsDiff:e,tweetsDiff:r,likesDiff:n,quotesDiff:i,retweetsDiff:l,repliesDiff:m,uniqueCommentorsDiff:f};a.push(u)}})),a},Y=()=>{const o=i.value,s="MMM DD, YYYY",r=g.ZP.extractDate(o.from,s).getTime()/1e3,n=g.ZP.addToDate(g.ZP.extractDate(o.to,s),{days:1}).getTime()/1e3,l=n-r,m=r-1,f=m-l;o["previousFrom"]=R(1e3*f,s),o["previousTo"]=R(1e3*m,s);const u=e.getDataForPeriod([],r,n),c=e.getDataForPeriod([],f,m);a.value=w(c["engagementDataByTagForPeriod"],u["engagementDataByTagForPeriod"]),t.value=e.getUsers()};if(null==m){const t=(0,d.Z)();t.dialog({title:"Prompt",message:"Password?",prompt:{model:"",type:"password"},cancel:!0,persistent:!0}).onOk((t=>{e.loadDatabase(t).then((e=>{e?(c.Z.set("password",t),f()):c.Z.remove("password")}))}))}else{const t=c.Z.getItem("password");e.loadDatabase(t).then((e=>{e?f():c.Z.remove("password")}))}return{dateRange:i,users:t,diffOfAggregateStatsByTag:a,handleReportRequested:D}}};var h=a(9885),k=a(4455);const _=(0,b.Z)(y,[["render",f]]),x=_;q()(y,"components",{QPage:h.Z,QBtn:k.Z})}}]);