"use strict";(globalThis["webpackChunktwitter_stats_display"]=globalThis["webpackChunktwitter_stats_display"]||[]).push([[362],{6362:(e,t,s)=>{s.r(t),s.d(t,{default:()=>he});var a=s(9835),l=s(6970);const o={class:"col-xs-12 col-sm-12 col-md-12"},r={class:"row q-mt-md text-h5"},n={class:"row q-mt-md q-gutter-sm"},i={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},m={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},u={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},d={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},c={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},g={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},p={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},w={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},b={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},T={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},v={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},y={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},q={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},h={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},f={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},_={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},x={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},S={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"};function N(e,t,s,N,C,B){const D=(0,a.up)("NavBar"),k=(0,a.up)("TagSelector"),W=(0,a.up)("NumberWithBarAndDeltaTable"),L=(0,a.up)("SingleTagsContributors"),P=(0,a.up)("TopTweetsBySingleTag"),Z=(0,a.up)("TweetByTimeOfDay"),V=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(V,{class:"row q-pl-md q-pr-md q-pb-lg"},{default:(0,a.w5)((()=>[(0,a._)("div",o,[(0,a._)("div",r," Performance by Tag for "+(0,l.zw)(N.dateRangeFromString)+" to "+(0,l.zw)(N.dateRangeToString),1),(0,a.Wm)(D,{handleReportRequested:N.handleReportRequested},null,8,["handleReportRequested"]),(0,a._)("div",n,[(0,a.Wm)(k,{tags:N.tags,onSelectedTagsChanged:N.handleSelectedTagsChanged},null,8,["tags","onSelectedTagsChanged"])]),(0,a._)("div",i,[(0,a._)("div",m,[(0,a.Wm)(W,{series:N.viewsDeltas,title:"Views by Tag",nameColumnLabel:"Tag",numberColumnLabel:"Views"},null,8,["series"])])]),(0,a._)("div",u,[(0,a._)("div",d,[(0,a.Wm)(W,{series:N.likesDeltas,title:"Likes by Tag",nameColumnLabel:"Tag",numberColumnLabel:"Likes"},null,8,["series"])])]),(0,a._)("div",c,[(0,a._)("div",g,[(0,a.Wm)(W,{series:N.tweetsDeltas,title:"Tweets by Tag",nameColumnLabel:"Tag",numberColumnLabel:"Tweets"},null,8,["series"])])]),(0,a._)("div",p,[(0,a._)("div",w,[(0,a.Wm)(W,{series:N.likesPerViewDeltas,title:"Likes per View by Tag",nameColumnLabel:"Tag",numberColumnLabel:"Likes per Views"},null,8,["series"])])]),(0,a._)("div",b,[(0,a._)("div",T,[(0,a.Wm)(L,{contributionByTag:N.userContributionsByTag,fieldName:"viewsSum",fieldDisplayName:"Views",tags:N.selectedTags},null,8,["contributionByTag","tags"])])]),(0,a._)("div",v,[(0,a._)("div",y,[(0,a.Wm)(L,{contributionByTag:N.userContributionsByTag,fieldName:"likesSum",fieldDisplayName:"Likes",tags:N.selectedTags},null,8,["contributionByTag","tags"])])]),(0,a._)("div",q,[(0,a._)("div",h,[(0,a.Wm)(L,{contributionByTag:N.userContributionsByTag,fieldName:"likesPerView",fieldDisplayName:"Likes per View",tags:N.selectedTags},null,8,["contributionByTag","tags"])])]),(0,a._)("div",f,[(0,a._)("div",_,[(0,a.Wm)(P,{topTweetsByTag:N.topTweetsByTag,tags:N.tags},null,8,["topTweetsByTag","tags"])])]),(0,a._)("div",x,[(0,a._)("div",S,[(0,a.Wm)(Z,{series:N.tweetTimes},null,8,["series"])])])])])),_:1})}s(6727),s(9665);var C=s(499),B=s(289),D=s(6226),k=s(7210);const W={class:"text-h6"},L={class:"row col-12 q-gutter-sm justify-between"},P={class:"col"},Z={class:"row col-12 q-gutter-sm justify-between"},V={class:"col"};function R(e,t,s,o,r,n){const i=(0,a.up)("q-select"),m=(0,a.up)("apexchart"),u=(0,a.up)("q-card-section"),d=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a._)("div",W,"Who Generates "+(0,l.zw)(s.fieldDisplayName),1),(0,a._)("div",L,[(0,a._)("div",P,[(0,a.Wm)(i,{modelValue:o.tag,"onUpdate:modelValue":t[0]||(t[0]=e=>o.tag=e),options:s.tags,label:"Select a Tag"},null,8,["modelValue","options"])])]),(0,a._)("div",Z,[(0,a._)("div",V,[(0,a.Wm)(m,{ref:"singleTagsVocabulary",id:"singleTagVocabulary",type:"bar",height:"500",series:o.contributors,options:o.options},null,8,["series","options"])])])])),_:1})])),_:1})}var H=s(796),O=s(7092),F=s.n(O);const Q={components:{apexchart:F()},props:{tags:{required:!0},contributionByTag:{required:!0},fieldName:{required:!0},fieldDisplayName:{required:!0}},setup(e){const t=(0,H.Z)(),s=(0,C.iH)(""),l=(0,a.Fl)((()=>{if(""==s.value)return[];const t=[];return e.contributionByTag[s.value].forEach((s=>{t.push({x:s.name,y:Number(s[e.fieldName])})})),t.sort((function(e,t){return t.y-e.y})),[{data:t.slice(0,30)}]}));(0,a.YP)((()=>e.tags),(t=>{e.tags.includes(s.value)||(s.value="")})),(0,a.YP)(s,((a,l)=>{ApexCharts.exec(t,"updateOptions",{xaxis:{title:{text:e.fieldDisplayName+" for tag: "+s.value}}})}));const o={chart:{id:t,stacked:!0},dataLabels:{enabled:!1},plotOptions:{bar:{horizontal:!0}},xaxis:{title:{text:e.fieldDisplayName+" for Tag"},type:"numeric"},yaxis:{title:{text:"Contributor"}}};return{tag:s,contributors:l,options:o}}};var j=s(1639),E=s(4458),z=s(3190),I=s(7887),Y=s(9984),A=s.n(Y);const G=(0,j.Z)(Q,[["render",R]]),M=G;A()(Q,"components",{QCard:E.Z,QCardSection:z.Z,QSelect:I.Z});const U={class:"row q-col-gutter-md q-mt-md q-mr-md q-ml-md"},K={class:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},$={class:"row"},J={class:"twitter-tweet"},X=["href"];function ee(e,t,s,l,o,r){const n=(0,a.up)("q-select"),i=(0,a.up)("q-card-section"),m=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n,{modelValue:l.tag,"onUpdate:modelValue":[t[0]||(t[0]=e=>l.tag=e),t[1]||(t[1]=e=>l.selectionChanged())],options:s.tags,label:"Select a Tag"},null,8,["modelValue","options"])])),_:1}),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a._)("div",U,[(0,a._)("div",K,[(0,a._)("div",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.tweets,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.tweetId,class:"q-pa-sm col-xs-3"},[(0,a._)("blockquote",J,[(0,a._)("a",{href:`https://twitter.com/x/status/${e.tweetId}`},null,8,X)])])))),128))])])])])),_:1})])),_:1})}var te=s(8339);const se={components:{},props:{tags:{required:!0},topTweetsByTag:{required:!0}},setup(e){(0,te.tv)();const t=(0,C.iH)({}),s=(0,C.iH)([]);(0,a.YP)(e,(a=>{t.value=e.tags[0],s.value=e.topTweetsByTag[t.value],window.twttr.widgets&&window.twttr.widgets.load()})),(0,a.ic)((()=>{window.twttr.widgets&&window.twttr.widgets.load()}));const l=a=>{s.value=e.topTweetsByTag[t.value],window.twttr.widgets&&window.twttr.widgets.load()};return{tag:t,tweets:s,selectionChanged:l}}},ae=(0,j.Z)(se,[["render",ee],["__scopeId","data-v-09fe123e"]]),le=ae;A()(se,"components",{QCard:E.Z,QCardSection:z.Z,QSelect:I.Z});const oe={class:""};function re(e,t,s,o,r,n){const i=(0,a.up)("q-td"),m=(0,a.up)("q-table");return(0,a.wg)(),(0,a.iD)("div",oe,[(0,a.Wm)(m,{title:s.title,rows:o.rows,columns:o.columns,pagination:o.pagination,"row-key":"name",dense:"","binary-state-sort":""},{"body-cell-numberGraphic":(0,a.w5)((e=>[(0,a.Wm)(i,{props:e},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"bg-primary",style:(0,l.j5)({paddingTop:"12px",width:e.row.numberPixelWidth+"px"})},null,4)])),_:2},1032,["props"])])),_:1},8,["title","rows","columns","pagination"])])}const ne={props:{series:{required:!0,type:Object},title:{required:!0,type:String},nameColumnLabel:{required:!0,type:String},numberColumnLabel:{required:!0,type:String}},setup(e){const t={rowsPerPage:100,sortBy:"number",descending:!0},s=new Intl.NumberFormat,l=[{name:"name",label:e.nameColumnLabel,field:"name",sortable:!0,align:"left"},{name:"number",label:e.numberColumnLabel,field:"number",sortable:!0,sort:(e,t,s,a)=>Number(e)-Number(t),format:(e,t)=>s.format(e)},{name:"numberDelta",label:"Change",field:"delta",sortable:!0,sort:(e,t,s,a)=>Number(e)-Number(t),format:(e,t)=>e>0?e+"%⬆":e<0?e+"%⬇":e,style:e=>e.delta>=0?"color: green;":"color: red;"},{name:"numberGraphic",label:e.numberColumnLabel,field:"numberPixelWidth",sortable:!1,align:"left"}],o=(0,a.Fl)((()=>{const t=[],s=Math.max(...e.series.map((e=>Number(e.number)))),a=Math.min(...e.series.map((e=>Number(e.number)))),l=250/(s-a+1e-17);return e.series.forEach((e=>{const s={...e};s["numberPixelWidth"]=Number(s.number)*l,t.push(s)})),t}));return{columns:l,rows:o,pagination:t}}};var ie=s(4356),me=s(7220);const ue=(0,j.Z)(ne,[["render",re]]),de=ue;A()(ne,"components",{QTable:ie.Z,QTd:me.Z});var ce=s(3622);const ge=(0,a._)("div",{class:"text-h6"},"Tweets by Time of Day",-1);function pe(e,t,s,l,o,r){const n=(0,a.up)("apexchart");return(0,a.wg)(),(0,a.iD)("div",null,[ge,(0,a.Wm)(n,{type:"heatmap",series:s.series,options:l.options,height:"300px"},null,8,["series","options"])])}const we={components:{apexchart:F()},props:{series:{required:!0,type:Object}},setup(e){const t={chart:{toolbar:{show:!1}},tooltip:{onDatasetHover:{highlightDataSeries:!0}},dataLabels:{enabled:!1},xaxis:{show:!1,labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}}};return{options:t}}},be=(0,j.Z)(we,[["render",pe]]),Te=be,ve={components:{NavBar:k.Z,TagSelector:D.Z,SingleTagsContributors:M,TopTweetsBySingleTag:le,NumberWithBarAndDeltaTable:de,TweetByTimeOfDay:Te},setup(){const e=new B.Z,t=(0,C.iH)([]),s=(0,C.iH)([]),a=(0,C.iH)([]),l=(0,C.iH)([]),o=(0,C.iH)([]),r=(0,C.iH)({}),n=(0,C.iH)([]),i=(0,C.iH)([]);var m=(0,C.iH)([]);const u=(e,t)=>{const s=Number(e),a=Number(t),l=1e-16,o=100*(s-a),r=a+l;return Math.round(o/r)},d=(d,c)=>{var g=t.value.filter((e=>!m.value.includes(e)));const p=c-d,w=d-p,b=d-1;e.prepareDataForPeriod(g,w,c);const T=e.getTags();t.value=T;const v=e.getTimeOfDayDataByTagForPeriod(d,c),y=[];m.value.forEach((e=>{if(!v.hasOwnProperty(e))return;const t={name:e,data:[]},s=v[e];for(var a=0;a<24;a++){const e=s.find((e=>Number(e.timeOfDay)===a));null==e?t.data.push({x:a,y:0}):t.data.push({x:Number(e.timeOfDay),y:e.tweetsSum})}y.push(t)})),i.value=y;const q=e.getUsersContributionByTag(d,c);r.value=q,n.value=e.getTopTweetsByTag(d,c);const h={},f={},_={},x={},S=[],N=[],C=[],B=[],D=e.getEngagementDataByTagForPeriod(w,b);D.forEach((e=>{h[e.tag]=Number(e.viewsSum),f[e.tag]=Number(e.likesSum),_[e.tag]=Number(e.tweetsSum),x[e.tag]=Number(e.likesPerTweet)}));const k=e.getEngagementDataByTagForPeriod(d,c);k.forEach((e=>{const t=e.tag;h.hasOwnProperty(t)||(h[t]=0,f[t]=0,_[t]=0,x[t]=0),S.push({name:t,number:e.viewsSum,previousNumber:h[t],delta:u(e.viewsSum,h[t])}),N.push({name:t,number:e.likesSum,previousNumber:f[t],delta:u(e.likesSum,f[t])}),B.push({name:t,number:e.tweetsSum,previousNumber:_[t],delta:u(e.tweetsSum,_[t])});const s=Number(e.likesSum)/(Number(e.viewsSum)+1e-9),a=f[t]/(h[t]+1e-9);C.push({name:t,number:s,previousNumber:a,delta:u(s,a)})})),s.value=S,l.value=N,o.value=B,a.value=C},c=e=>{m.value=e.selectedTags,d(w.value,b.value)},{dateRangeFromString:g,dateRangeToString:p,fromTimestamp:w,endTimestamp:b,handleReportRequested:T}=(0,ce.Z)(d,e);return{tags:t,selectedTags:m,dateRangeFromString:g,dateRangeToString:p,viewsDeltas:s,likesDeltas:l,tweetsDeltas:o,likesPerViewDeltas:a,userContributionsByTag:r,topTweetsByTag:n,tweetTimes:i,handleReportRequested:T,handleSelectedTagsChanged:c}}};var ye=s(9885);const qe=(0,j.Z)(ve,[["render",N]]),he=qe;A()(ve,"components",{QPage:ye.Z})}}]);