(function(e){function t(t){for(var o,i,r=t[0],c=t[1],l=t[2],d=0,u=[];d<r.length;d++)i=r[d],a[i]&&u.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12f0":function(e,t,n){e.exports=n.p+"img/Shino_p1.61d559ad.png"},1380:function(e,t,n){e.exports=n.p+"img/Guy_Sensei.0da60532.png"},"13a5":function(e,t,n){"use strict";var o=n("1472"),a=n.n(o);a.a},1472:function(e,t,n){},"14b6":function(e,t,n){e.exports=n.p+"img/human_boulder.b75d9db1.png"},"16bd":function(e,t,n){e.exports=n.p+"img/Kurenai_full.4f14e72c.png"},1913:function(e,t,n){e.exports=n.p+"img/Gaara_first_Part_I.13607a65.png"},"198e":function(e,t,n){e.exports=n.p+"img/hide.8e40f09d.png"},"1f01":function(e,t,n){e.exports=n.p+"img/Hinata_p1_render.1e340fc4.png"},2742:function(e,t,n){e.exports=n.p+"img/Sasuke_Part_I.c27f663f.png"},"2f64":function(e,t,n){e.exports=n.p+"img/Kiba_p1.56609dbe.png"},"37ba":function(e,t,n){e.exports=n.p+"img/inner_resolve.ef2fbad8.png"},"3b25":function(e,t,n){e.exports=n.p+"img/butterfly.24806343.png"},"3cb0":function(e,t,n){e.exports=n.p+"img/heavy_straight.05f0564f.png"},4290:function(e,t,n){e.exports=n.p+"img/snack.6327e912.png"},4836:function(e,t,n){e.exports=n.p+"img/Kakashi_full.dacaabd6.png"},"4fe7":function(e){e.exports={folderName:"kankuro",facepics:["base"],name:{base:"Kankuro"},description:{base:"Kankuro is a prodigy of puppet ninjustu. He uses his puppets, Crow and Black Ant, to corner and assassinate his enemies. He is a genin of the Hidden Sand Village."},moves:{base:[{name:"Crow: Hidden Dagger",description:'This skill deals 15 damage to 1 opponent, and 5 affliction damage on the following turn. On the following turn, "Black Ant: Capture" will last an additional turn',cost:20,cooldown:1},{name:"Black Ant: Capture",description:'1 opponent becomes invulnerable to their allies\' skills for 1 turn. On the following turn, "Crow" skills will deal an additional 5 damage to that enemy.',cost:15,cooldown:1},{name:"Crow: Poison Smoke Bomb",description:'All opponents take 5 affliction damage. Those opponents will deal 5 less damage for 1 turn. On the following turn, "Black Ant: Capture" will ignore invulnerability',cost:10,cooldown:2},{name:"Machine One Shot",description:'This skill executes 1 opponent with 30 or less health. This skill cna only be used on an enemy affected by "Black Ant: Capture"',cost:25,cooldown:4},{name:"Hide",description:"This skill makes Kankruo invulnerable for 1 turn.",cost:15,cooldown:4}]}}},"524e":function(e,t,n){e.exports=n.p+"img/base.2882f8cd.png"},"52fe":function(e,t,n){e.exports=n.p+"img/Rock_Lee.f4dddb48.png"},"55b8":function(e,t,n){e.exports=n.p+"img/280px-Iruka_Umino.e115deea.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"site-content"},[n("character-picker",{attrs:{selectedCharacter:e.selectedCharacter},on:{characterSelected:e.characterSelected}}),n("character",{ref:"character"}),n("div",{staticClass:"character-display__backline",staticStyle:{position:"relative",width:"100%",left:"0","margin-top":"40px"}}),n("discord")],1)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-title"},[n("h1",{staticClass:"site__header"},[e._v("Shinobi Arena")]),n("small",{staticClass:"site__tagline"},[e._v("Fight. Survive. Thrive.")])])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"discord-wrapper"},[n("small",[e._v("To stay up to date with our game, join our discord server!")]),n("div",{staticClass:"discord"},[n("a",{staticClass:"discord-link",attrs:{href:"https://discord.gg/TpQtcAR"}},[n("span",{staticClass:"discord-title"},[e._v("Shinobi Arena")]),n("span",{staticClass:"discord-text"},[e._v("Click To Join")]),n("svg",{attrs:{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 272.1",fill:"#FFFFFF"}},[n("path",{attrs:{d:"M142.8 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11s-4.6-11-10.2-11zM106.3 120.1c-5.7 0-10.2 4.9-10.2 11s4.6 11 10.2 11c5.7 0 10.2-4.9 10.2-11 .1-6.1-4.5-11-10.2-11z"}}),n("path",{staticClass:"st0",attrs:{d:"M191.4 36.9h-134c-11.3 0-20.5 9.2-20.5 20.5v134c0 11.3 9.2 20.5 20.5 20.5h113.4l-5.3-18.3 12.8 11.8 12.1 11.1 21.6 18.7V57.4c-.1-11.3-9.3-20.5-20.6-20.5zm-38.6 129.5s-3.6-4.3-6.6-8c13.1-3.7 18.1-11.8 18.1-11.8-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.4-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.6-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.2-1.8-1-2.8-1.7-2.8-1.7s4.8 7.9 17.5 11.7c-3 3.8-6.7 8.2-6.7 8.2-22.1-.7-30.5-15.1-30.5-15.1 0-31.9 14.4-57.8 14.4-57.8 14.4-10.7 28-10.4 28-10.4l1 1.2c-18 5.1-26.2 13-26.2 13s2.2-1.2 5.9-2.8c10.7-4.7 19.2-5.9 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.5 0 0-7.9-7.5-24.9-12.6l1.4-1.6s13.7-.3 28 10.4c0 0 14.4 25.9 14.4 57.8 0-.1-8.4 14.3-30.5 15zM303.8 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1h33.2c17.8.1 34.5-8.8 34.5-29.2v-29.8c.1-20.8-16.6-29.9-34.4-29.9zm174 59.7v-30.6c0-11 19.8-13.5 25.8-2.5l18.3-7.4c-7.2-15.8-20.3-20.4-31.2-20.4-17.8 0-35.4 10.3-35.4 30.3v30.6c0 20.2 17.6 30.3 35 30.3 11.2 0 24.6-5.5 32-19.9l-19.6-9c-4.8 12.3-24.9 9.3-24.9-1.4zM417.3 113c-6.9-1.5-11.5-4-11.8-8.3.4-10.3 16.3-10.7 25.6-.8l14.7-11.3c-9.2-11.2-19.6-14.2-30.3-14.2-16.3 0-32.1 9.2-32.1 26.6 0 16.9 13 26 27.3 28.2 7.3 1 15.4 3.9 15.2 8.9-.6 9.5-20.2 9-29.1-1.8l-14.2 13.3c8.3 10.7 19.6 16.1 30.2 16.1 16.3 0 34.4-9.4 35.1-26.6 1-21.7-14.8-27.2-30.6-30.1zm-67 55.5h22.4V79.7h-22.4v88.8zM728 79.7h-33.2V117l22.1 19.9v-36.2h11.8c7.5 0 11.2 3.6 11.2 9.4v27.7c0 5.8-3.5 9.7-11.2 9.7h-34v21.1H728c17.8.1 34.5-8.8 34.5-29.2v-29.8c0-20.8-16.7-29.9-34.5-29.9zm-162.9-1.2c-18.4 0-36.7 10-36.7 30.5v30.3c0 20.3 18.4 30.5 36.9 30.5 18.4 0 36.7-10.2 36.7-30.5V109c0-20.4-18.5-30.5-36.9-30.5zm14.4 60.8c0 6.4-7.2 9.7-14.3 9.7-7.2 0-14.4-3.1-14.4-9.7V109c0-6.5 7-10 14-10 7.3 0 14.7 3.1 14.7 10v30.3zM682.4 109c-.5-20.8-14.7-29.2-33-29.2h-35.5v88.8h22.7v-28.2h4l20.6 28.2h28L665 138.1c10.7-3.4 17.4-12.7 17.4-29.1zm-32.6 12h-13.2v-20.3h13.2c14.1 0 14.1 20.3 0 20.3z"}})])])])])},r=[],c={},l=c,p=n("2877"),d=Object(p["a"])(l,i,r,!1,null,null,null);d.options.__file="Discord.vue";var u=d.exports,h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"character-display"},[o("div",{staticClass:"character-display__backline"}),e._l(e.characters,function(t){return o("div",{key:t.folderName,staticClass:"character-full",class:["character-full--"+t.folderName,{"character-full--selected":e.isSelected(t)}],on:{click:function(n){e.selectCharacter(t)},mouseover:function(n){e.setHover(t)},mouseout:function(t){e.mouseOut()}}},[o("span",{staticClass:"character-full__border"},[o("img",{staticClass:"character-full__image",attrs:{src:n("ee32")("./"+t.folderName+"/large.png")}})])])})],2)},f=[],m=n("d6b3"),g=n("4fe7"),v=n("c042"),_={choji:m,kankuro:g,ino:v},b={props:{selectedCharacter:{required:!1,type:Object}},data:function(){return{characters:_,hoveredCharacter:!1}},methods:{selectCharacter:function(e){if(this.selectedCharacter===e)return this.$emit("characterSelected",{});this.$emit("characterSelected",e)},setHover:function(e){this.hoveredCharacter=e},mouseOut:function(){this.hoveredCharacter=!1},isSelected:function(e){return this.hoveredCharacter===e||!this.hoveredCharacter&&this.selectedCharacter===e}}},k=b,C=Object(p["a"])(k,h,f,!1,null,null,null);C.options.__file="CharacterPicker.vue";var w=C.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"fade-down"}},[e.showCharacter?o("div",{staticClass:"character"},[o("div",{staticClass:"character__details"},[o("div",{staticClass:"character__face-pictures"},e._l(e.facepics,function(t){return o("div",{key:t,staticClass:"character__face-picture",class:{"character__face-picture--selected":e.selectedFace===t},on:{click:function(n){e.setState(t)}}},[o("img",{attrs:{src:n("b967")("./"+e.folderName+"/"+t+".png")}})])})),o("div",{staticClass:"character__information"},[o("div",{staticClass:"character__name"},[e._v(" "+e._s(e.name[e.state])+" ")]),o("div",{staticClass:"character__description"},[e._v(" "+e._s(e.description[e.state])+" ")])])]),o("div",{staticClass:"character__moves"},[o("transition-group",{staticClass:"character__move__selection",attrs:{tag:"div",name:"fade"}},e._l(e.moveset,function(t){return o("div",{key:t.name,staticClass:"character__move",class:{"character__move--selected":e.selectedMove===t},on:{click:function(n){e.setSelectedMove(t)}}},[o("img",{attrs:{src:n("b967")("./"+e.folderName+"/moves/"+e.state+"/"+t.name.toLowerCase().replace(/[: ]+/g,"_")+".png")}})])})),o("div",{staticClass:"character-display__backline"}),o("div",{staticClass:"character__move__display"},[e.selectedMove.alternatives?o("div",{staticClass:"character__move__display__alt-moves"},[o("div",{key:e.selectedMove.name},[o("div",{staticClass:"character-display__backline"}),o("div",{staticClass:"character__move",class:{"character__move--selected":e.selectedAltMove===e.selectedMove},on:{click:function(t){e.setAlternativeMove(e.selectedMove)}}},[o("img",{attrs:{src:n("b967")("./"+e.folderName+"/moves/"+e.state+"/"+e.selectedMove.name.toLowerCase().replace(/ /g,"_")+".png")}})]),e._l(e.selectedMove.alternatives,function(t){return o("div",{key:t.name,staticClass:"character__move",class:{"character__move--selected":e.selectedAltMove===t},on:{click:function(n){e.setAlternativeMove(t)}}},[o("img",{attrs:{src:n("b967")("./"+e.folderName+"/moves/"+e.state+"/"+t.name.toLowerCase().replace(/ /g,"_")+".png")}})])})],2)]):e._e(),o("transition-group",{staticClass:"character__move__display__information",attrs:{tag:"div",name:"slide-fade"}},[o("div",{key:e.selectedMoveName,staticClass:"character__move__top-bar"},[o("div",{staticClass:"move__name"},[e._v(" "+e._s(e.selectedMoveName)+" ")]),o("div",{staticClass:"move__information"},[o("div",{staticClass:"move__pill move__cost"},[e._v("Chakra: "+e._s(e.selectedMoveCost)+" ")]),o("div",{staticClass:"move__pill move__cooldown"},[e._v("Cooldown: "+e._s(e.selectedMoveCooldown)+" ")])])]),o("div",{key:e.selectedMoveDescription,staticClass:"move__description"},[e._v(" "+e._s(e.selectedMoveDescription)+" ")])])],1)],1)]):e._e()])},x=[],M=(n("ac6a"),n("456d"),n("7f7f"),{data:function(){return{facepics:[],folderName:"",name:{},description:{},moves:{},state:"base",moveset:[],selectedFace:"",selectedMove:[],selectedAltMove:{}}},computed:{showCharacter:function(){return""!==this.folderName},selectedMoveName:function(){return this.selectedAltMove?this.selectedAltMove.name:this.selectedMove.name},selectedMoveCost:function(){return this.selectedAltMove?this.selectedAltMove.cost:this.selectedMove.cost},selectedMoveCooldown:function(){return this.selectedAltMove?this.selectedAltMove.cooldown:this.selectedMove.cooldown},selectedMoveDescription:function(){return this.selectedAltMove?this.selectedAltMove.description:this.selectedMove.description}},methods:{setup:function(e){if(0===Object.keys(e).length)return this.reset();this.facepics=e.facepics,this.folderName=e.folderName,this.name=e.name,this.description=e.description,this.moves=e.moves,this.setState("base")},reset:function(){this.facepics=[],this.folderName="",this.name={},this.description={},this.moves={},this.state="base",this.moveset=[],this.selectedFace="",this.selectedMove=[],this.selectedAltMove={}},setState:function(e){this.state=e,this.setSelectedFace(),this.setMoveSet(),this.setSelectedMove(this.moveset[0])},setSelectedFace:function(){this.selectedFace=this.state},setMoveSet:function(){this.moveset=this.moves[this.state]},setSelectedMove:function(e){this.selectedMove=e,this.setAlternativeMove(!1),e.alternatives&&this.setAlternativeMove(this.selectedMove)},setAlternativeMove:function(e){this.selectedAltMove=e}},mounted:function(){}}),j=M,T=Object(p["a"])(j,y,x,!1,null,null,null);T.options.__file="Character.vue";var S=T.exports,A={name:"app",data:function(){return{selectedCharacter:{}}},methods:{characterSelected:function(e){this.selectedCharacter=e,this.$refs.character&&this.$refs.character.setup(e)}},components:{Discord:u,CharacterPicker:w,Character:S}},O=A,N=(n("13a5"),Object(p["a"])(O,a,s,!1,null,null,null));N.options.__file="App.vue";var I=N.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(I)}}).$mount("#app")},6935:function(e,t,n){e.exports=n.p+"img/chakra_pill.edede525.png"},"6c8c":function(e,t,n){e.exports=n.p+"img/black_ant_capture.df2e820e.png"},"6d93":function(e,t,n){e.exports=n.p+"img/partial_expansion_throw.b6ef00f6.png"},"71c8":function(e,t,n){e.exports=n.p+"img/crow_poison_smoke_bomb.86633fcb.png"},7547:function(e,t,n){e.exports=n.p+"img/ino_block.d82c0523.png"},"79b7":function(e,t,n){e.exports=n.p+"img/Naruto.93473b96.png"},"79e3":function(e,t,n){e.exports=n.p+"img/Temari_Part_1.055e716a.png"},"80b5":function(e,t,n){e.exports=n.p+"img/chyaaah.f4a20d68.png"},8259:function(e,t,n){e.exports=n.p+"img/butterfly_convergence.98a52956.png"},"84f0":function(e,t,n){e.exports=n.p+"img/base.b991da92.png"},"8b16":function(e,t,n){e.exports=n.p+"img/Sakura_Part_I.a8df97aa.png"},9040:function(e,t,n){e.exports=n.p+"img/mind_destruction_jutsu.dda577b8.png"},9078:function(e,t,n){e.exports=n.p+"img/img_card_00123.14b6e647.png"},"9ce3":function(e,t,n){e.exports=n.p+"img/roar.891a897f.png"},"9e55":function(e,t,n){e.exports=n.p+"img/human_balloon.58dd50c1.png"},a005:function(e,t,n){e.exports=n.p+"img/img_card_00015.b5594c8d.png"},a267:function(e,t,n){e.exports=n.p+"img/crow_hidden_dagger.65ba2159.png"},a601:function(e,t,n){e.exports=n.p+"img/large.bf98034c.png"},ac3b:function(e,t,n){e.exports=n.p+"img/Neji_body.8d1ab9a2.png"},b69e:function(e,t,n){e.exports=n.p+"img/chakra_hair_trap.a7e9d673.png"},b967:function(e,t,n){var o={"./184a02e3333a326e6cce6fde6a8c3978-d6qkq1b.png":"f07d","./280px-Iruka_Umino.png":"55b8","./Asuma_full.png":"eef4","./Gaara_first_Part_I.png":"1913","./Guy_Sensei.png":"1380","./Hinata_p1_render.png":"1f01","./Kakashi_full.png":"4836","./Kiba_p1.png":"2f64","./Kurenai_full.png":"16bd","./Naruto.png":"79b7","./Neji_body.png":"ac3b","./Rock_Lee.png":"52fe","./Sakura_Part_I.png":"8b16","./Sasuke_Part_I.png":"2742","./Shikamaru_genin.png":"ed6b","./Shino_p1.png":"12f0","./Temari_Part_1.png":"79e3","./Tenten_Part_I.png":"c71d","./choji/base.png":"84f0","./choji/butterfly.png":"3b25","./choji/large.png":"a601","./choji/moves/base/chakra_pill.png":"6935","./choji/moves/base/human_balloon.png":"9e55","./choji/moves/base/human_boulder.png":"14b6","./choji/moves/base/partial_expansion_throw.png":"6d93","./choji/moves/base/snack.png":"4290","./choji/moves/butterfly/butterfly_bomber.png":"e796","./choji/moves/butterfly/butterfly_convergence.png":"8259","./choji/moves/butterfly/effortless_counter.png":"f263","./choji/moves/butterfly/heavy_straight.png":"3cb0","./choji/moves/butterfly/roar.png":"9ce3","./img_card_00015.png":"a005","./img_card_00123.png":"9078","./ino/base.png":"524e","./ino/large.png":"f754","./ino/moves/base/amateur_heal.png":"e079","./ino/moves/base/chakra_hair_trap.png":"b69e","./ino/moves/base/chyaaah.png":"80b5","./ino/moves/base/inner_resolve.png":"37ba","./ino/moves/base/ino_block.png":"7547","./ino/moves/base/mind_destruction_jutsu.png":"9040","./ino/moves/base/mind_transfer_jutsu.png":"bd31","./kankuro/base.png":"d10e","./kankuro/large.png":"c75b","./kankuro/moves/base/black_ant_capture.png":"6c8c","./kankuro/moves/base/crow_hidden_dagger.png":"a267","./kankuro/moves/base/crow_poison_smoke_bomb.png":"71c8","./kankuro/moves/base/hide.png":"198e","./kankuro/moves/base/machine_one_shot.png":"ed3c"};function a(e){var t=s(e);return n(t)}function s(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id="b967"},bd31:function(e,t,n){e.exports=n.p+"img/mind_transfer_jutsu.337b20b7.png"},c042:function(e){e.exports={folderName:"ino",facepics:["base"],name:{base:"Ino Yamanaka"},description:{base:"Ino Yamanaka is the kunoichi of the Ino-Shika-Cho trio. Her clan abilities allow her to take possession of her enemies, or to alter their mind and have them attack their allies."},moves:{base:[{name:"Chakra Hair Trap",description:'Target opponent cannot go invulnerable for 1 turn. Then, for the following 2 turns, whenever Ino or one of her allies uses a skill on that opponent, that opponent cannot go invulnerable for 1 turn. This skill becomes "Mind Transfer Jutsu" while active.',cost:10,cooldown:3,alternatives:[{name:"Mind Transfer Jutsu",description:'Target opponent\'s skillset is replaced with "Inner Resolve" for 4 turns. This skill ends if that opponent uses "Inner Resolve".',cost:30,cooldown:5},{name:"Inner Resolve",description:'This skill ends "Mind Transfer Jutsu".',cost:25,cooldown:0}]},{name:"Mind Destruction Jutsu",description:"Ino targets 2 opponents. For 1 turn, if either of them use a skill on Ino, it is reflected to the other one. This skill is invisible and ends after it reflects a skill",cost:35,cooldown:3},{name:"Chyaaah",description:"1 opponent takes 15 damage. Chyaaah! will deal 5 more damage to that opponent the following turn.",cost:15,cooldown:0},{name:"Amateur Heal",description:"This skill heals 1 ally for 10 health",cost:5,cooldown:1},{name:"Ino Block",description:"This skill makes Ino Yamanaka invulnerable for 1 turn.",cost:15,cooldown:4}]}}},c71d:function(e,t,n){e.exports=n.p+"img/Tenten_Part_I.0693da2a.png"},c75b:function(e,t,n){e.exports=n.p+"img/large.a4f22fb3.png"},d10e:function(e,t,n){e.exports=n.p+"img/base.3a91d1a1.png"},d6b3:function(e){e.exports={folderName:"choji",facepics:["base","butterfly"],name:{base:"Choji Akimichi",butterfly:"Butterfly Choji"},description:{base:"Choji is the size-controlling genin of Team 10, and the strength behind the Ino Shika Cho Trio. He's quick to get angry, so don't call him fat!",butterfly:"Choji is the size-controlling genin of Team 10, and the strength behind the Ino Shika Cho Trio. He's quick to get angry, so don't call him fat!"},moves:{base:[{name:"Chakra Pill",description:"Choji gains 10 chakra and takes 5 affliction damage. On each use, the chakra gained and affliction damage taken increase by 5 each. After 3 uses, Choji transforms into Butterfly Choji.",cost:0,cooldown:1},{name:"Human Boulder",description:"Choji deals 20 damage to 1 opponent. Then, for 2 turns Choji has 5 points of damage reduction.",cost:20,cooldown:1},{name:"Partial Expansion Throw",description:"This skill stuns 1 opponent for 1 turn. On the following turn, that opponent takes 15 damage. This skill ends if Choji is stunned.",cost:25,cooldown:3},{name:"Snack",description:"Choji recovers 15 health. Target opponent is taunted for 1 turn.",cost:10,cooldown:2},{name:"Human Balloon",description:"This skill makes Choji invulnerable for 1 turn.",cost:15,cooldown:4}],butterfly:[{name:"Butterfly Convergence",description:"Choji gains 10 damage reduction and deals 10 more damage for 3 turns.",cost:10,cooldown:5},{name:"Effortless Counter",description:'This skill counters the first skill target opponent uses. If countered this way, the chakra cost of "Butterfly Bomber" is reduced by 10 for 1 turn, and that opponent takes 10 damage',cost:15,cooldown:3},{name:"Heavy Straight",description:"This skill deals 20 damage to one opponent. The opponent cannot reduce damage or become invulnerable for 1 turn.",cost:15,cooldown:0},{name:"Butterfly Bomber",description:"This skill deals 5 damage to one opponent. If that opponent's health falls to 35 or below, that opponent is executed.",cost:30,cooldown:2},{name:"Roar",description:"This skill makes Butterfly Choji invulnerable for 1 turn.",cost:15,cooldown:4}]}}},e079:function(e,t,n){e.exports=n.p+"img/amateur_heal.f9ba0e8d.png"},e796:function(e,t,n){e.exports=n.p+"img/butterfly_bomber.4fd5296d.png"},ed3c:function(e,t,n){e.exports=n.p+"img/machine_one_shot.7dfd4424.png"},ed6b:function(e,t,n){e.exports=n.p+"img/Shikamaru_genin.055f3c78.png"},ee32:function(e,t,n){var o={"./choji/large.png":"a601","./ino/large.png":"f754","./kankuro/large.png":"c75b"};function a(e){var t=s(e);return n(t)}function s(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id="ee32"},eef4:function(e,t,n){e.exports=n.p+"img/Asuma_full.e8779fd9.png"},f07d:function(e,t,n){e.exports=n.p+"img/184a02e3333a326e6cce6fde6a8c3978-d6qkq1b.c1afa5c5.png"},f263:function(e,t,n){e.exports=n.p+"img/effortless_counter.b142d2bc.png"},f754:function(e,t,n){e.exports=n.p+"img/large.254cbacf.png"}});
//# sourceMappingURL=app.61e09823.js.map