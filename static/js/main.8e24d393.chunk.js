(this.webpackJsonpbulindutestu=this.webpackJsonpbulindutestu||[]).push([[0],{155:function(e,t,i){},156:function(e,t,i){},176:function(e,t,i){"use strict";i.r(t);var a=i(4),s=i(0),n=i.n(s),o=i(53),r=i.n(o),d=(i(155),i(156),i(157),i(121)),l=i(198),c=i(196),m=i(189),u=i(80),h=i(194),f=i(35),p=i(32),g=i(60),y=i(61),j=i(72),b=i(70),T=i(87),w=i(197),O=i(192),x=i(187),v=i(188),C=i(190),S=function(e){Object(j.a)(i,e);var t=Object(b.a)(i);function i(e){var a;return Object(g.a)(this,i),(a=t.call(this,e)).opts={width:"100%",playerVars:{autoplay:0,controls:0,showinfo:0}},a.player=null,a._onReady=function(e){console.log("_onReady"),a.setState({ytplayer:e.target}),e.target.seekTo(a.state.data.from,!0),e.target.playVideo()},a._onStateChange=function(e){switch(console.log("_onStateChange"),console.log("Youtube player state: "+e.data),e.data){case 1:a.startRound();break;case 3:case 5:e.target.seekTo(a.state.data.from,!0),e.target.playVideo()}},a.selectData=function(){console.log("selectData"),console.log(a.props.allData.allData);var e=null,t=a.props.allData.allData;if(-1!==t.map((function(e){return e.done})).indexOf(!1)){for(;null===e||!0===e.done;)e=t[Math.floor(Math.random()*t.length)];a.setState({data:e,timer:e.time,answerTimer:e.answerTime,loading:!0,start:!1}),a.props.allData.allData[a.props.allData.allData.indexOf(e)].done=!0}else a.setState({modalError:!0})},a.prepareNextRound=function(){console.log("prepareNextRound"),a.selectData(),a.setState({visible:!1,fields:{title:"",titleMatch:!1,artist:"",artistMatch:!1},checked:!1})},a.startRound=function(){console.log("startRound"),a.setState({start:!0,loading:!1});var e=setInterval((function(){a.state.timer<=0&&a.state.ytplayer.pauseVideo(),a.state.answerTimer<=0?(clearInterval(e),a.endRound()):!1===a.state.start?clearInterval(e):a.setState({timer:a.state.timer-1,answerTimer:a.state.answerTimer-1})}),1e3)},a.endRound=function(){a.setState({start:!1,visible:!0})},a.checkValues=function(){console.log(a.state.fields);var e="artist"in a.state.data===!1||a.state.fields.artist.toLowerCase()===a.state.data.artist.toLowerCase(),t="title"in a.state.data===!1||a.state.fields.title.toLowerCase()===a.state.data.title.toLowerCase(),i="origin"in a.state.data===!1||a.state.fields.origin.toLowerCase()===a.state.data.origin.toLowerCase(),s={artist:a.state.fields.artist,artistMatch:e,title:a.state.fields.title,titleMatch:t,origin:a.state.fields.origin,originMatch:i};a.setState({checked:!0,fields:s},a.postCheck)},a.postCheck=function(){a.state.fields.artistMatch&&a.state.fields.titleMatch&&a.state.fields.originMatch&&a.setState({modal:!0})},a.handleChange=function(e){console.log("handleChange");var t=e.target.value,i=a.state.fields;i=Object(p.a)(Object(p.a)({},i),{},Object(f.a)({},e.target.name,t)),console.log(i),a.setState({fields:i})},a.state={visible:!1,data:null,timer:0,answerTimer:0,fields:{title:"",titleMatch:!1,artist:"",artistMatch:!1,origin:"",originMatch:""},checked:!1,start:!1,ytplayer:null,loading:!1,modal:!1,modalError:!1},a}return Object(y.a)(i,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(c.a,{children:[Object(a.jsx)(w.a,{as:"h3",children:"Video"}),Object(a.jsxs)(c.a,{basic:!0,children:[Object(a.jsx)(h.a,{secondary:!0,onClick:function(t){return e.setState({visible:!e.state.visible})},children:"Reveal"}),null===this.state.data&&Object(a.jsx)(h.a,{secondary:!0,onClick:this.prepareNextRound,disabled:this.state.loading,children:"Start"}),null!==this.state.data&&Object(a.jsx)(h.a,{secondary:!0,onClick:this.prepareNextRound,disabled:this.state.loading,children:"Next"}),Object(a.jsxs)(c.a,{textAlign:"center",children:[null!=this.state.data&&Object(a.jsx)(O.a,{progress:"value",indicating:!0,value:this.state.answerTimer,total:this.state.data.answerTime}),this.state.loading&&Object(a.jsx)(x.a,{active:!0}),Object(a.jsxs)(c.a,{basic:!0,children:[null!=this.state.data&&!1===this.state.visible&&Object(a.jsx)("div",{style:{height:"70px",width:"calc(100% - 2em)",backgroundColor:"black",position:"absolute",top:"1em"}}),null!=this.state.data&&Object(a.jsx)(T.a,{name:"ytplayer",videoId:null===this.state.data?"dummy":this.state.data.id,opts:this.opts,onReady:this._onReady,onStateChange:this._onStateChange,style:{position:"absolute",top:"0",zIndex:"10"}})]})]}),Object(a.jsxs)(v.a,{children:[Object(a.jsxs)(v.a.Group,{widths:"equal",children:[null!=this.state.data&&null!=this.state.data.title&&Object(a.jsx)(v.a.Input,{fluid:!0,name:"title",label:"Title",placeholder:"Title",value:this.state.fields.title,onChange:this.handleChange,error:!this.state.fields.titleMatch&&this.state.checked,disabled:this.state.fields.titleMatch&&this.state.checked}),null!=this.state.data&&null!=this.state.data.artist&&Object(a.jsx)(v.a.Input,{fluid:!0,name:"artist",label:"Artist",placeholder:"Artist",value:this.state.fields.artist,onChange:this.handleChange,error:!this.state.fields.artistMatch&&this.state.checked,disabled:this.state.fields.artistMatch&&this.state.checked}),null!=this.state.data&&null!=this.state.data.origin&&Object(a.jsx)(v.a.Input,{fluid:!0,name:"origin",label:"Origin",placeholder:"Origin",value:this.state.fields.origin,onChange:this.handleChange,error:!this.state.fields.originMatch&&this.state.checked,disabled:this.state.fields.originMatch&&this.state.checked})]}),Object(a.jsx)(v.a.Button,{onClick:this.checkValues,disabled:!this.state.start,children:"Check"})]})]}),Object(a.jsxs)(C.a,{onClose:function(){return e.setState({modal:!1})},onOpen:function(){return e.setState({modal:!0})},open:this.state.modal,children:[Object(a.jsx)(C.a.Header,{children:"Congratulations"}),Object(a.jsx)(C.a.Content,{children:Object(a.jsx)(C.a.Description,{children:Object(a.jsx)(w.a,{children:"You have successfully found all the fields for this question !"})})}),Object(a.jsx)(C.a.Actions,{children:Object(a.jsx)(h.a,{content:"Got it !",labelPosition:"right",icon:"checkmark",onClick:function(){return e.setState({modal:!1})},positive:!0})})]}),Object(a.jsxs)(C.a,{onClose:function(){return e.setState({modalError:!1})},onOpen:function(){return e.setState({modalError:!0})},open:this.state.modalError,children:[Object(a.jsx)(C.a.Header,{children:"That's all folks"}),Object(a.jsx)(C.a.Content,{children:Object(a.jsx)(C.a.Description,{children:Object(a.jsx)(w.a,{children:"Sorry but you have done all the items of this category, try addind some more to keep playing"})})}),Object(a.jsx)(C.a.Actions,{children:Object(a.jsx)(h.a,{content:"Okay",labelPosition:"right",icon:"close",onClick:function(){return e.setState({modalError:!1})},negative:!0})})]})]})}}]),i}(n.a.Component),k=function(e){Object(j.a)(i,e);var t=Object(b.a)(i);function i(e){var a;return Object(g.a)(this,i),(a=t.call(this,e)).opts={width:"100%",playerVars:{autoplay:0,controls:0,showinfo:0}},a.player=null,a._onReady=function(e){console.log("_onReady"),a.setState({ytplayer:e.target}),e.target.seekTo(a.state.data.from,!0),e.target.playVideo()},a._onStateChange=function(e){switch(console.log("_onStateChange"),console.log("Youtube player state: "+e.data),e.data){case 1:a.startRound();break;case 3:case 5:e.target.seekTo(a.state.data.from,!0),e.target.playVideo()}},a.selectData=function(){console.log("selectData"),console.log(a.props.allData.allData);var e=null,t=a.props.allData.allData;if(-1!==t.map((function(e){return e.done})).indexOf(!1)){for(;null===e||!0===e.done;)e=t[Math.floor(Math.random()*t.length)];a.setState({data:e,timer:e.time,answerTimer:e.answerTime,loading:!0,start:!1}),a.props.allData.allData[a.props.allData.allData.indexOf(e)].done=!0}else a.setState({modalError:!0})},a.prepareNextRound=function(){console.log("prepareNextRound"),a.selectData(),a.setState({visible:!1,fields:{title:"",titleMatch:!1,artist:"",artistMatch:!1},checked:!1})},a.startRound=function(){console.log("startRound"),a.setState({start:!0,loading:!1});var e=setInterval((function(){a.state.timer<=0&&a.state.ytplayer.pauseVideo(),a.state.answerTimer<=0?(clearInterval(e),a.endRound()):!1===a.state.start?clearInterval(e):a.setState({timer:a.state.timer-1,answerTimer:a.state.answerTimer-1})}),1e3)},a.endRound=function(){a.setState({start:!1,visible:!0})},a.checkValues=function(){console.log(a.state.fields);var e="artist"in a.state.data===!1||a.state.fields.artist.toLowerCase()===a.state.data.artist.toLowerCase(),t="title"in a.state.data===!1||a.state.fields.title.toLowerCase()===a.state.data.title.toLowerCase(),i="origin"in a.state.data===!1||a.state.fields.origin.toLowerCase()===a.state.data.origin.toLowerCase(),s={artist:a.state.fields.artist,artistMatch:e,title:a.state.fields.title,titleMatch:t,origin:a.state.fields.origin,originMatch:i};a.setState({checked:!0,fields:s},a.postCheck)},a.postCheck=function(){a.state.fields.artistMatch&&a.state.fields.titleMatch&&a.state.fields.originMatch&&a.setState({modal:!0})},a.handleChange=function(e){console.log("handleChange");var t=e.target.value,i=a.state.fields;i=Object(p.a)(Object(p.a)({},i),{},Object(f.a)({},e.target.name,t)),console.log(i),a.setState({fields:i})},a.state={visible:!1,data:null,timer:0,answerTimer:0,fields:{title:"",titleMatch:!1,artist:"",artistMatch:!1,origin:"",originMatch:""},checked:!1,start:!1,ytplayer:null,loading:!1,modal:!1,modalError:!1},a}return Object(y.a)(i,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(c.a,{children:[Object(a.jsx)(w.a,{as:"h3",children:"Audio"}),Object(a.jsxs)(c.a,{basic:!0,children:[Object(a.jsx)(h.a,{secondary:!0,onClick:function(t){return e.setState({visible:!e.state.visible})},children:"Reveal"}),null===this.state.data&&Object(a.jsx)(h.a,{secondary:!0,onClick:this.prepareNextRound,disabled:this.state.loading,children:"Start"}),null!==this.state.data&&Object(a.jsx)(h.a,{secondary:!0,onClick:this.prepareNextRound,disabled:this.state.loading,children:"Next"}),Object(a.jsxs)(c.a,{textAlign:"center",children:[null!=this.state.data&&Object(a.jsx)(O.a,{progress:"value",indicating:!0,value:this.state.answerTimer,total:this.state.data.answerTime}),this.state.loading&&Object(a.jsx)(x.a,{active:!0}),Object(a.jsx)(c.a,{basic:!0,style:{display:this.state.visible?"block":"none"},children:null!=this.state.data&&Object(a.jsx)(T.a,{name:"ytplayer",videoId:null===this.state.data?"dummy":this.state.data.id,opts:this.opts,onReady:this._onReady,onStateChange:this._onStateChange,style:{position:"absolute",top:"0",zIndex:"10"}})})]}),Object(a.jsxs)(v.a,{children:[Object(a.jsxs)(v.a.Group,{widths:"equal",children:[null!=this.state.data&&null!=this.state.data.title&&Object(a.jsx)(v.a.Input,{fluid:!0,name:"title",label:"Title",placeholder:"Title",value:this.state.fields.title,onChange:this.handleChange,error:!this.state.fields.titleMatch&&this.state.checked,disabled:this.state.fields.titleMatch&&this.state.checked}),null!=this.state.data&&null!=this.state.data.artist&&Object(a.jsx)(v.a.Input,{fluid:!0,name:"artist",label:"Artist",placeholder:"Artist",value:this.state.fields.artist,onChange:this.handleChange,error:!this.state.fields.artistMatch&&this.state.checked,disabled:this.state.fields.artistMatch&&this.state.checked}),null!=this.state.data&&null!=this.state.data.origin&&Object(a.jsx)(v.a.Input,{fluid:!0,name:"origin",label:"Origin",placeholder:"Origin",value:this.state.fields.origin,onChange:this.handleChange,error:!this.state.fields.originMatch&&this.state.checked,disabled:this.state.fields.originMatch&&this.state.checked})]}),Object(a.jsx)(v.a.Button,{onClick:this.checkValues,disabled:!this.state.start,children:"Check"})]})]}),Object(a.jsxs)(C.a,{onClose:function(){return e.setState({modal:!1})},onOpen:function(){return e.setState({modal:!0})},open:this.state.modal,children:[Object(a.jsx)(C.a.Header,{children:"Congratulations"}),Object(a.jsx)(C.a.Content,{children:Object(a.jsx)(C.a.Description,{children:Object(a.jsx)(w.a,{children:"You have successfully found all the fields for this question !"})})}),Object(a.jsx)(C.a.Actions,{children:Object(a.jsx)(h.a,{content:"Got it !",labelPosition:"right",icon:"checkmark",onClick:function(){return e.setState({modal:!1})},positive:!0})})]}),Object(a.jsxs)(C.a,{onClose:function(){return e.setState({modalError:!1})},onOpen:function(){return e.setState({modalError:!0})},open:this.state.modalError,children:[Object(a.jsx)(C.a.Header,{children:"That's all folks"}),Object(a.jsx)(C.a.Content,{children:Object(a.jsx)(C.a.Description,{children:Object(a.jsx)(w.a,{children:"Sorry but you have done all the items of this category, try addind some more to keep playing"})})}),Object(a.jsx)(C.a.Actions,{children:Object(a.jsx)(h.a,{content:"Okay",labelPosition:"right",icon:"close",onClick:function(){return e.setState({modalError:!1})},negative:!0})})]})]})}}]),i}(n.a.Component),M=i(191),A=i(193),D=[{key:"a",text:"Audio",value:"audio"},{key:"v",text:"Video",value:"video"}],I=function(e){Object(j.a)(i,e);var t=Object(b.a)(i);function i(e){var a;return Object(g.a)(this,i),(a=t.call(this,e)).addItem=function(){if(""===a.state.fields.title&&""===a.state.fields.artist&&""===a.state.fields.origin)a.setState({error:!0,errorMsg:"You need to fill at least one of the fields above."});else if(""===a.state.fields.type)a.setState({error:!0,errorMsg:"You need to select a type of item."});else{if(-1!==a.props.allData.allData.map((function(e){return{type:e.type,id:e.id}})).indexOf({type:a.state.fields.type,id:a.state.fields.id}))a.setState({error:!0,errorMsg:"This video is already referenced for this type of item"});else{var e={};""!==a.state.fields.title&&(e.title=a.state.fields.title),""!==a.state.fields.artist&&(e.artist=a.state.fields.artist),""!==a.state.fields.origin&&(e.origin=a.state.fields.origin),e.type=a.state.fields.type,e.id=a.state.fields.id,e.done=!1,e.from=a.state.fields.from,e.time=a.state.fields.to-a.state.fields.from,e.answerTime=a.state.fields.answer,a.props.allData.allData.push(e),a.setState({success:!0})}}},a.importJSON=function(){JSON.parse(a.state.fields.json).forEach((function(e){"id"in e&&("title"in e||"artist"in e||"origin"in e)&&"from"in e&&"time"in e&&e&&(e.done=!1,-1===a.props.allData.allData.map((function(e){return{type:e.type,id:e.id}})).indexOf({type:e.type,id:e.id})&&a.props.allData.allData.push(e))}))},a.handleChange=function(e){var t=e.target.value,i=a.state.fields;i=Object(p.a)(Object(p.a)({},i),{},Object(f.a)({},e.target.name,t)),a.setState({fields:i})},a.handleChangeSelect=function(e,t){var i=a.state.fields;i=Object(p.a)(Object(p.a)({},i),{},Object(f.a)({},t.name,t.value)),a.setState({fields:i})},a.handleClick=function(e,t){var i=t.index,s=a.state.activeIndex===i?-1:i;a.setState({activeIndex:s})},a.state={fields:{id:"",title:"",artist:"",origin:"",type:"",from:0,to:30,answer:30},error:!1,success:!1,errorMsg:"",activeIndex:0},a}return Object(y.a)(i,[{key:"render",value:function(){return Object(a.jsxs)(M.a,{styled:!0,fluid:!0,style:{marginTop:"1rem"},children:[Object(a.jsxs)(M.a.Title,{active:0===this.state.activeIndex,index:0,onClick:this.handleClick,children:[Object(a.jsx)(u.a,{name:"dropdown"}),"Add Item"]}),Object(a.jsx)(M.a.Content,{active:0===this.state.activeIndex,children:Object(a.jsxs)(v.a,{error:this.state.error,success:this.state.success,children:[Object(a.jsxs)(v.a.Group,{widths:"equal",children:[Object(a.jsx)(v.a.Input,{fluid:!0,name:"id",label:"Youtube ID",placeholder:"Ex: MqDWL0MgAtc",value:this.state.fields.id,onChange:this.handleChange}),Object(a.jsx)(v.a.Input,{fluid:!0,name:"title",label:"Title",placeholder:"Title",value:this.state.fields.title,onChange:this.handleChange}),Object(a.jsx)(v.a.Input,{fluid:!0,name:"artist",label:"Artist",placeholder:"Artist",value:this.state.fields.artist,onChange:this.handleChange}),Object(a.jsx)(v.a.Input,{fluid:!0,name:"origin",label:"Origin",placeholder:"Origin",value:this.state.fields.origin,onChange:this.handleChange})]}),Object(a.jsxs)(v.a.Group,{widths:"equal",children:[Object(a.jsx)(v.a.Select,{required:!0,fluid:!0,name:"type",options:D,label:"Type",placeholder:"Type",value:this.state.fields.type,onChange:this.handleChangeSelect}),Object(a.jsx)(v.a.Input,{required:!0,fluid:!0,type:"number",name:"from",label:"Starting From (sec)",placeholder:"0",value:this.state.fields.from,onChange:this.handleChange}),Object(a.jsx)(v.a.Input,{required:!0,fluid:!0,type:"number",name:"to",label:"Up to (sec)",placeholder:"30",value:this.state.fields.to,onChange:this.handleChange}),Object(a.jsx)(v.a.Input,{required:!0,fluid:!0,type:"number",name:"answer",label:"Answering Time (sec)",placeholder:"30",value:this.state.fields.answer,onChange:this.handleChange})]}),Object(a.jsx)(A.a,{error:!0,header:"Fields Missing",content:this.state.errorMsg}),Object(a.jsx)(A.a,{success:!0,header:"Sucess",content:"Item added successfully."}),Object(a.jsx)(v.a.Button,{onClick:this.addItem,children:"Add"})]})}),Object(a.jsxs)(M.a.Title,{active:1===this.state.activeIndex,index:1,onClick:this.handleClick,children:[Object(a.jsx)(u.a,{name:"dropdown"}),"Advanced Import"]}),Object(a.jsx)(M.a.Content,{active:1===this.state.activeIndex,children:Object(a.jsxs)(v.a,{error:this.state.error,success:this.state.success,children:[Object(a.jsx)(v.a.TextArea,{name:"json",rows:10,label:"JSON Import",value:this.state.fields.json,onChange:this.handleChange}),Object(a.jsx)(v.a.Button,{onClick:this.importJSON,children:"Import"})]})})]})}}]),i}(n.a.Component),L=function(e){var t=n.a.useState(!1),i=Object(d.a)(t,2),s=i[0],o=i[1],r=n.a.useState("home"),f=Object(d.a)(r,2),p=f[0],g=f[1];return Object(a.jsxs)(l.a.Pushable,{as:c.a,basic:!0,style:{height:"100vh"},children:[Object(a.jsxs)(l.a,{as:m.a,animation:"overlay",icon:"labeled",inverted:!0,onHide:function(){return o(!1)},vertical:!0,visible:s,width:"thin",children:[Object(a.jsxs)(m.a.Item,{as:"a",onClick:function(e){return g("home")},children:[Object(a.jsx)(u.a,{name:"home"}),"Home"]}),Object(a.jsxs)(m.a.Item,{as:"a",onClick:function(e){return g("audio")},children:[Object(a.jsx)(u.a,{name:"sound"}),"Audio"]}),Object(a.jsxs)(m.a.Item,{as:"a",onClick:function(e){return g("video")},children:[Object(a.jsx)(u.a,{name:"video"}),"Video"]}),Object(a.jsxs)(m.a.Item,{as:"a",onClick:function(e){return g("items")},children:[Object(a.jsx)(u.a,{name:"add"}),"Add"]})]}),Object(a.jsx)(l.a.Pusher,{dimmed:s,children:Object(a.jsxs)(c.a,{basic:!0,children:[Object(a.jsx)(h.a,{secondary:!0,onClick:function(e){return o(!0)},children:"Menu"}),"video"===p&&Object(a.jsx)(S,{allData:e}),"audio"===p&&Object(a.jsx)(k,{allData:e}),"items"===p&&Object(a.jsx)(I,{allData:e})]})})]})},R=[{done:!1,type:"audio",origin:"Dragon Ball Z",id:"pYnLO7MVKno",title:"Cha La Head Cha La",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Pokemon",id:"JuYeHPFR3f0",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Code Lyoko",id:"GvY-yWWlpgw",title:"Un Monde Sans Danger",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Totally Spies",id:"7-h8CEZPvBM",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Olive et Tom",id:"D9vEj5z_hD4",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Titeuf",id:"LRwA3Y5xiRU",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Marcelino Pan Y Vino",id:"_Pi8vDNpeRY",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Titi et Grosminet menent l'enquete",id:"iteNiJUYhvg",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Les Ratz",id:"sBfimllcI7Q",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Oggy et les Cafards",id:"2apJXX46ce0",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Bonne Nuit Les Petits",id:"4UNkj-AsZRs",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Les Aventures de Tintin",id:"zb-9TIr31i0",time:30,from:0,answerTime:30},{artist:"Priscilla",done:!1,type:"audio",origin:"Kim Possible",id:"9zru1EMVLKI",title:"Mission Kim Possible",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Les Nouvelles Aventures de Lucky Luke",id:"pxH9ejIYAlg",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"La Panthere Rose",id:"9OPc7MRm4Y8",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Avatar le Dernier Maitre de l'Air",id:"BGycFj-V3x4",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Franklin",id:"nlqyE-lWqCE",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Princesse Sarah",id:"IVpcoJxOBIc",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Les Mysterieuses Cites d'Or",id:"9w_zn3uRwPU",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Capitaine Flam",id:"m4-89PqmsOU",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Jayce et les Conquerants de la Lumiere",id:"l-2nVUzNdRQ",time:60,from:0,answerTime:30},{done:!1,type:"audio",origin:"Il etait une fois... L'Homme",id:"7QmtVq1FLlw",title:"Toccata and Fugue",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Les Razmokets",id:"DUBudt7vQFc",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Teletubbies",id:"5ZCgbGgA-_8",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Power Rangers",id:"9-bqOz9WriQ",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Beyblade",id:"N74cnBa_Bmc",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Marsupilami",id:"xQ7MoJG8GJQ",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Saint Seiya",id:"ofwE8oaS5QY",title:"Pegasus Fantasy",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Naruto",id:"y2juBsz78gw",title:"Kanashimi Wo Yasashisa Ni",time:30,from:0,answerTime:30},{artist:"The All-American Rejects",done:!1,type:"audio",id:"uxUATkpMQ8A",title:"Gives You Hell",time:30,from:0,answerTime:30},{artist:"Britney Spears",done:!1,type:"audio",id:"LOZuxwVk7TU",title:"Toxic",time:30,from:0,answerTime:30},{artist:"Coolio",done:!1,type:"audio",id:"fPO76Jlnz6c",title:"Gangsta's Paradise",time:30,from:0,answerTime:30},{artist:"Adele",done:!1,type:"audio",id:"rYEDA3JcQqw",title:"Rolling in the Deep",time:30,from:0,answerTime:30},{artist:"Miley Cyrus",done:!1,type:"audio",id:"M11SvDtPBhA",title:"Party In The U.S.A",time:30,from:0,answerTime:30},{artist:"Basshunter",done:!1,type:"audio",id:"IgFwiCApH7E",title:"Now You're Gone",time:30,from:0,answerTime:30},{artist:"Taio Cruz",done:!1,type:"audio",id:"Vysgv7qVYTo",title:"Dynamite",time:30,from:0,answerTime:30},{artist:"Bon Jovi",done:!1,type:"audio",id:"vx2u5uUu3DE",title:"It's My Life",time:30,from:0,answerTime:30},{artist:"Europe",done:!1,type:"audio",id:"9jK-NcRmVcw",title:"The Final Countdown",time:30,from:0,answerTime:30},{artist:"AC/DC",done:!1,type:"audio",id:"l482T0yNkeo",title:"Highway To Hell",time:30,from:0,answerTime:30},{artist:"Hoobastank",done:!1,type:"audio",id:"fV4DiAyExN0",title:"The Reason",time:30,from:0,answerTime:30},{artist:"Queen",done:!1,type:"audio",id:"t99KH0TR-J4",title:"The Show Must Go On",time:30,from:0,answerTime:30},{artist:"Joan Jett and The Blackhearts",done:!1,type:"audio",id:"xL5spALs-eA",title:"I Love Rock n' Roll",time:30,from:0,answerTime:30},{artist:"Twisted Sister",done:!1,type:"audio",id:"SRwrg0db_zY",title:"I wanna Rock",time:30,from:0,answerTime:30},{artist:"KISS",done:!1,type:"audio",id:"zlSFmotba2I",title:"I Was Made For Loving You",time:30,from:0,answerTime:30},{artist:"Deep Purple",done:!1,type:"audio",id:"zUwEIt9ez7M",title:"Smoke On The Water",time:30,from:0,answerTime:30},{artist:"John Newman",done:!1,type:"audio",id:"CfihYWRWRTQ",title:"Love Me Again",time:30,from:0,answerTime:30},{artist:"Calvin Harris",done:!1,type:"audio",id:"ebXbLfLACGM",title:"Summer",time:30,from:0,answerTime:30},{artist:"Snoop Dogg ft. the Doors",done:!1,type:"audio",id:"y_z-adsJjmE",title:"Riders On The Storm",time:30,from:0,answerTime:30},{artist:"Bonnie Tyler",done:!1,type:"audio",id:"OBwS66EBUcY",title:"I Need A Hero",time:30,from:0,answerTime:30},{artist:"Joe Esposito",done:!1,type:"audio",id:"3jYcW1nEsGk",title:"You're The Best Around",time:30,from:0,answerTime:30},{artist:"Kim Wilde",done:!1,type:"audio",id:"r_GH6M7cUq4",title:"Kids In America",time:30,from:0,answerTime:30},{artist:"U2",done:!1,type:"audio",id:"ftjEcrrf7r0",title:"One",time:30,from:0,answerTime:30},{artist:"I'm So Excited",done:!1,type:"audio",id:"rQqwG_rQx7A",title:"The Pointer Sisters",time:30,from:0,answerTime:30},{artist:"50 Cent",done:!1,type:"audio",id:"5qm8PH4xAss",title:"In Da Club",time:30,from:0,answerTime:30},{artist:"Maroon 5",done:!1,type:"audio",id:"iEPTlhBmwRg",title:"Moves Like Jagger",time:90,from:0,answerTime:30},{artist:"Pitbull ft. Chris Brown",done:!1,type:"audio",id:"CdXesX6mYUE",title:"International Love",time:30,from:0,answerTime:30},{artist:"Inna",done:!1,type:"audio",id:"YjSUSPzJiAU",title:"Sun is Up",time:30,from:0,answerTime:30},{artist:"K'NAAN",done:!1,type:"audio",id:"WTJSt4wP2ME",title:"Wavin' Flag",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Indianna Jones",id:"-bTpp8PQSog",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Rocky",id:"I33u_EHLI3w",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Austin Powers",id:"90h2gLgTz5g",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Castlevania 2",id:"e2oZtvjg5oA",title:"Bloody Tears",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Final Fantasy VI",id:"jjgwVSDAmP4",title:"Terra",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"The Legend of Zelda",id:"cGufy1PAeTU",title:"Main Theme",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Super Metroid",id:"6o4N-vNt1MQ",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Sonic",id:"y-78CMKME4o",title:"Green Hill Zone",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Mario Kart 64",id:"G2vA6Dngzhs",title:"Rainbow Road",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Super Mario Galaxy",id:"49pOiyZYWBQ",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Portal",id:"Y6ljFaKRTrI",title:"Still Alive",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Super Street Fighter 2",id:"jLJLyneZGKc",title:"Guile's Stage",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"GTA : Vice City",id:"F2_pg8xd1To",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Goldeneye 007",id:"OQ0nDBHPUfQ",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Mortal Kombat",id:"EAwWPadFsOA",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Star Fox 64",id:"-GjdmkjOI7w",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Final Fantasy VII",id:"t7wJ8pE2qKU",title:"One Winged Angel",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Final Fantasy X",id:"CVfLTGgDem0",title:"Otherworld",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Okami",id:"ya3yxTbkh5s",title:"The Sun Rises",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Tetris",id:"9Fv5cuYZFC0",title:"Type A",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Street of Rage",link:"Empty",title:"Stage 1",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"F-Zero",id:"XBuXfcFKAlo",title:"Mute City",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Doom",id:"j05hzwQf8pA",title:"At Doom's Gate",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Wathammer 40k : Dawn of War",id:"BG42F-5AVOE",title:"Space Marine Theme",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"HearthStone",id:"yF7gWy4N54E",title:"Duel Theme",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Super Meat Boy",id:"6aZSwE3_vz0",title:"Hospital Theme",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Tomb Raider",id:"QWQ4U3vG7n8",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Need for Speed : Underground 2",id:"0VAF-4Er7_A",title:"Riders on the Storm",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"American Beauty",id:"al21Vtlsg4A",time:30,from:0,answerTime:30},{artist:"Luz Casal",done:!1,type:"audio",origin:"Talons Aiguilles",id:"8qcSJcvKrxc",title:"Piensa en me",time:30,from:0,answerTime:30},{done:!1,type:"audio",origin:"Les Demoiselles De Rochefort",id:"uopjMuYY3F8&list=PL75CED282AF0B14EA",time:30,from:0,answerTime:30},{artist:"Trust",done:!1,type:"audio",id:"WfD8Dnh2xho",title:"Antisocial",time:30,from:0,answerTime:30},{artist:"Notre Dame de Paris",done:!1,type:"audio",id:"-XB7aftz6zY",title:"Belle",time:30,from:0,answerTime:30},{artist:"Debut de Soiree",done:!1,type:"audio",id:"JLNb0JthJ6Q",title:"Nuit de Folie",time:30,from:0,answerTime:30},{artist:"Francky Vincent",done:!1,type:"audio",id:"E9xE7UfYeac",title:"Alice ca Glisse",time:30,from:0,answerTime:30},{artist:"Khaled",done:!1,type:"audio",id:"5dWeeUIZFgA",title:"C'est La Vie",time:30,from:0,answerTime:30},{artist:"Yelle",done:!1,type:"audio",id:"Y99UqvgCmE8",title:"Je Veux Te Voir",time:30,from:0,answerTime:30},{artist:"Lagaf'",done:!1,type:"audio",id:"mKSk-3yiVx0",title:"Bo le Lavabo",time:30,from:0,answerTime:30},{artist:"IAM",done:!1,type:"audio",id:"7ceNf9qJjgc",title:"Je Danse Le Mia",time:30,from:0,answerTime:30},{artist:"Alizee",done:!1,type:"audio",id:"P3uhPQZpjFg",title:"Moi Lolita",time:30,from:0,answerTime:30},{artist:"Chimene Badi",done:!1,type:"audio",id:"-kDSn9-1GDw",title:"Je Viens Du Sud",time:30,from:0,answerTime:30},{artist:"LAAM",done:!1,type:"audio",id:"qyTZLkDsFpY",title:"Je Veux Chanter Pour Ceux",time:30,from:0,answerTime:30},{artist:"Johnny Hallyday",done:!1,type:"audio",id:"s3O1Xro7oAI",title:"Allumer le Feu",time:30,from:0,answerTime:30},{artist:"Sheryfa Luna",done:!1,type:"audio",id:"vGxOs9OrLYk",title:"Il Avait Les Mots",time:30,from:0,answerTime:30},{artist:"Jena Lee",done:!1,type:"audio",id:"_T2cU0TA9hE",title:"J'aimerais Tellement",time:30,from:0,answerTime:30},{artist:"BB Brunes",done:!1,type:"audio",id:"X3VNRVo7irM",title:"Dis-Moi",time:30,from:0,answerTime:30},{artist:"Zazie",done:!1,type:"audio",id:"tB-zasOL29Y",title:"Je Suis un Homme",time:30,from:0,answerTime:30},{artist:"Mickey 3D",done:!1,type:"audio",id:"Iwb6u1Jo1Mc",title:"Respire",time:30,from:0,answerTime:30},{artist:"Casseurs Flowters",done:!1,type:"audio",id:"yBwtAySu7Mg",title:"Des Histoires A Raconter",time:30,from:0,answerTime:30},{artist:"Renaud",done:!1,type:"audio",id:"uv37yxc51bE",title:"Toujours Debout",time:30,from:0,answerTime:30},{artist:"Jacques Dutronc",done:!1,type:"audio",id:"L_ADZYCUkDA",title:"L'Opportuniste",time:30,from:0,answerTime:30},{artist:"Garou - Celine Dion",done:!1,type:"audio",id:"PCuJguybz5Y",title:"Sous le vent",time:30,from:0,answerTime:30},{artist:"Vanessa Paradis",done:!1,type:"audio",id:"9Z-NbQvhzKM",title:"La Seine",time:30,from:0,answerTime:30},{artist:"Liza Monet",done:!1,type:"audio",id:"qUXaUtYrDpE",title:"My Best Plan",time:30,from:0,answerTime:30},{artist:"Helene Segara",done:!1,type:"audio",id:"6Pes0BQgQNY",title:"On n'oublie jamais rien, on vit avec",time:30,from:0,answerTime:30},{artist:"Niagara",done:!1,type:"audio",id:"lSQ-6xU8mPA",title:"Je dois m'en aller",time:30,from:0,answerTime:30},{artist:"Francis Cabrel",done:!1,type:"audio",id:"m1ET6SEtwbc",title:"La corrida",time:30,from:0,answerTime:30}];var E=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(L,{allData:R})})},P=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,200)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;i(e),a(e),s(e),n(e),o(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),P()}},[[176,1,2]]]);
//# sourceMappingURL=main.8e24d393.chunk.js.map