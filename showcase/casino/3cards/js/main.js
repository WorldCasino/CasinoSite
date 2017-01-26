function CInterface(){var a,c,b=null,d,f,e,g,h,m,k,p,l,q,n;this._init=function(){var b,r=s_oSpriteLibrary.getSprite("but_exit");c=new CGfxButton(CANVAS_WIDTH-r.height/2-10,r.height/2+10,r,!0);c.addEventListener(ON_MOUSE_UP,this._onExit,this);b=CANVAS_WIDTH-r.width/2-80;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)r=s_oSpriteLibrary.getSprite("audio_icon"),a=new CToggle(b,10+r.height/2,r,s_bAudioActive),a.addEventListener(ON_MOUSE_UP,this._onAudioToggle,this);b=createBitmap(s_oSpriteLibrary.getSprite("score_panel"));
b.x=20;b.y=550;s_oStage.addChild(b);d=new createjs.Text(TEXT_BEST_SCORE,"bold 18px Arial","#000000");d.x=118;d.y=578;d.textAlign="center";d.textBaseline="alphabetic";d.lineWidth=200;s_oStage.addChild(d);f=new createjs.Text(TEXT_BEST_SCORE,"bold 18px Arial","#ffffff");f.x=115;f.y=575;f.textAlign="center";f.textBaseline="alphabetic";f.lineWidth=200;s_oStage.addChild(f);e=new createjs.Text("0","bold 24px Arial","#000000");e.x=120;e.y=614;e.textAlign="center";e.textBaseline="alphabetic";e.lineWidth=200;
s_oStage.addChild(e);g=new createjs.Text("0","bold 24px Arial","#ffffff");g.x=117;g.y=611;g.textAlign="center";g.textBaseline="alphabetic";g.lineWidth=200;s_oStage.addChild(g);b=createBitmap(s_oSpriteLibrary.getSprite("score_panel"));b.x=925;b.y=550;s_oStage.addChild(b);h=new createjs.Text(TEXT_CUR_SCORE,"bold 18px Arial","#000000");h.x=1023;h.y=578;h.textAlign="center";h.textBaseline="alphabetic";h.lineWidth=500;s_oStage.addChild(h);m=new createjs.Text(TEXT_CUR_SCORE,"bold 18px Arial","#ffffff");
m.x=1020;m.y=575;m.textAlign="center";m.textBaseline="alphabetic";m.lineWidth=500;s_oStage.addChild(m);k=new createjs.Text("0","bold 24px Arial","#000000");k.x=1024;k.y=614;k.textAlign="center";k.textBaseline="alphabetic";k.lineWidth=200;s_oStage.addChild(k);p=new createjs.Text("0","bold 24px Arial","#ffffff");p.x=1021;p.y=611;p.textAlign="center";p.textBaseline="alphabetic";p.lineWidth=200;s_oStage.addChild(p);n=new createjs.Container;n.x=CANVAS_WIDTH/2;n.y=60;n.visible=!1;s_oStage.addChild(n);l=
new createjs.Text(TEXT_CHOOSE,"bold 48px Arial","#000000");l.x=4;l.y=4;l.textAlign="center";l.textBaseline="alphabetic";l.lineWidth=700;l.alpha=.6;n.addChild(l);q=new createjs.Text(TEXT_CHOOSE,"bold 48px Arial","#ffffff");q.textAlign="center";q.textBaseline="alphabetic";q.lineWidth=700;n.addChild(q)};this.unload=function(){if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)a.unload(),a=null;c.unload();null!==b&&b.unload()};this.refreshBestScore=function(a){e.text=a;g.text=a};this.refreshCurScore=function(a){k.text=
a;p.text=a};this.showText=function(a,b){n.visible=a;q.text=b;l.text=b};this._onButHelpRelease=function(){b=new CHelpPanel};this._onButRestartRelease=function(){s_oGame.restartGame()};this.onExitFromHelp=function(){b.unload()};this._onAudioToggle=function(){createjs.Sound.setMute(s_bAudioActive);s_bAudioActive=!s_bAudioActive};this._onExit=function(){s_oGame.onExit()};this._init();return this}
function CHelpPanel(){var a,c,b,d,f,e,g;this._init=function(){var g=this;f=createBitmap(s_oSpriteLibrary.getSprite("bg_help"));var m=CANVAS_WIDTH/2,k=CANVAS_HEIGHT/2-150;c=new createjs.Text(TEXT_HELP1,"Bold 30px Arial","#000000");c.x=m+2;c.y=k+2;c.textAlign="center";c.textBaseline="alphabetic";c.lineWidth=500;a=new createjs.Text(TEXT_HELP1,"Bold 30px Arial","#ffffff");a.x=m;a.y=k;a.textAlign="center";a.textBaseline="alphabetic";a.lineWidth=500;m=CANVAS_WIDTH/2;k=CANVAS_HEIGHT/2-40;d=new createjs.Text(TEXT_HELP2,
"Bold 30px Arial","#000000");d.x=m+2;d.y=k+2;d.textAlign="center";d.textBaseline="alphabetic";d.lineWidth=500;b=new createjs.Text(TEXT_HELP2,"Bold 30px Arial","#ffffff");b.x=m;b.y=k;b.textAlign="center";b.textBaseline="alphabetic";b.lineWidth=500;e=new createjs.Container;e.addChild(f,c,a,d,b);e.alpha=0;s_oStage.addChild(e);createjs.Tween.get(e).to({alpha:1},700);e.on("pressup",function(){g._onExitHelp()})};this.unload=function(){s_oStage.removeChild(e);var a=this;e.off("pressup",function(){a._onExitHelp()})};
this._onExitHelp=function(){g.unload();s_oGame._onExitHelp()};g=this;this._init()}
function CGfxButton(a,c,b){var d,f,e;this._init=function(a,b,c){d=[];f=[];e=createBitmap(c);e.x=a;e.y=b;e.regX=c.width/2;e.regY=c.height/2;s_oStage.addChild(e);this._initListener()};this.unload=function(){e.off("mousedown",this.buttonDown);e.off("pressup",this.buttonRelease);s_oStage.removeChild(e)};this.setVisible=function(a){e.visible=a};this._initListener=function(){e.on("mousedown",this.buttonDown);e.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,c){d[a]=b;f[a]=c};this.buttonRelease=
function(){e.scaleX=1;e.scaleY=1;d[ON_MOUSE_UP]&&d[ON_MOUSE_UP].call(f[ON_MOUSE_UP])};this.buttonDown=function(){e.scaleX=.9;e.scaleY=.9;d[ON_MOUSE_DOWN]&&d[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])};this.setPosition=function(a,b){e.x=a;e.y=b};this.setX=function(a){e.x=a};this.setY=function(a){e.y=a};this.getButtonImage=function(){return e};this.getX=function(){return e.x};this.getY=function(){return e.y};this._init(a,c,b);return this}
function CGame(a){var c,b,d,f,e,g,h,m,k,p,l,q,n,t,r=null,u;this._init=function(){b=c=!0;d=!1;k=m=h=g=f=0;p=START_NUM_SHUFFLE;n=[];var a=createBitmap(s_oSpriteLibrary.getSprite("bg_game"));s_oStage.addChild(a);u=new createjs.Container;s_oStage.addChild(u);t=new CInterface;t.refreshBestScore(s_iBestScore);l=[];l[0]={x:CANVAS_WIDTH/2-60-CARD_WIDTH,y:CANVAS_HEIGHT/2};l[1]={x:CANVAS_WIDTH/2,y:CANVAS_HEIGHT/2};l[2]={x:CANVAS_WIDTH/2+60+CARD_WIDTH,y:CANVAS_HEIGHT/2};this._shuffleCards();new CHelpPanel};
this._shuffleCards=function(){q=[];for(var a=0;3>a;a++)q[a]=a;shuffle(q);for(a=0;3>a;a++)n[a]=new CCard(l[q[a]].x,l[q[a]].y,u,q[a],a)};this.updateScore=function(a){f+=a;0>f&&(f=0);t.refreshCurScore(f)};this.unload=function(){c=!1;t.unload();null!==r&&r.unload();for(var a=0;a<n.length;a++)n[a].unload();createjs.Tween.removeAllTweens();s_oStage.removeAllChildren()};this.onExit=function(){this.unload();s_oMain.gotoMenu();$(s_oMain).trigger("restart")};this._onExitHelp=function(){c=!0;e=INFO_PHASE};this.gameOver=
function(a){e=null;for(var b=0;b<n.length;b++)n[b].getLogicPos()!==a.iLogicPos&&n[b].showDelayedCard();r=CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));r.show(f);f>s_iBestScore&&(s_iBestScore=f)};this._infoPhase=function(){g+=s_iTimeElaps;if(g>=INFO_PHASE_DURATION/4&&g<2*INFO_PHASE_DURATION/4&&b){b=!1;d=!0;t.showText(!0,TEXT_INFO);for(var a=0;a<n.length;a++)n[a].getStateTurned()||n[a].showCard()}else if(g>=3*INFO_PHASE_DURATION/4&&g<INFO_PHASE_DURATION&&d)for(d=!1,t.showText(!1,TEXT_INFO),a=0;a<
n.length;a++)n[a].hideCard();else g>=INFO_PHASE_DURATION&&(g=0,d=b=!0,e=null,t.showText(!0,TEXT_SHUFFLE),this._shufflePhase())};this.checkShuffle=function(){m++;2===m&&(m=0,h++,h<p?this._shufflePhase():(h=0,t.showText(!1,TEXT_SHUFFLE),this._choosePhase()))};this._shufflePhase=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("shuffle");shuffle(q);var a=n[q[0]].getLogicPos(),b=n[q[1]].getLogicPos();u.setChildIndex(n[q[2]].getSprite(),0);var c=Math.random(),d,e;u.getChildIndex(n[q[0]].getSprite())>
u.getChildIndex(n[q[1]].getSprite())?(d=1.1,e=1):(d=1,e=1.1);var f=START_TIMESPEED_SHUFFLE+k*DECREASE_TIMESPEED_SHUFFLE;f<MINIMUM_TIMESPEED&&(f=200);var g;g=.5>Math.random()?1:-1;n[q[0]].moveCard(l[b].x,l[b].y,f,b,g,d,c);n[q[1]].moveCard(l[a].x,l[a].y,f,a,-g,e,c)};this._choosePhase=function(){t.showText(!0,TEXT_CHOOSE);for(var a=0;a<n.length;a++)n[a].activeHitArea(!0)};this.checkWin=function(a,b){t.showText(!1,TEXT_CHOOSE);for(var c=0;c<n.length;c++)n[c].getLogicPos()===b.iLogicPos&&n[c].showCard(),
n[c].activeHitArea(!1);"hearts"===b.szCardType?(t.showText(!0,TEXT_WIN),this.updateScore(POINTS_TO_WIN),e=END_PHASE):this.gameOver(b)};this._endPhase=function(){k++;0===k%NUM_LEVEL_TO_INCREASE_NUM_SHUFFLE&&p++;e=INFO_PHASE};this.update=function(){if(c)switch(e){case INFO_PHASE:this._infoPhase();break;case END_PHASE:this._endPhase()}};s_oGame=this;POINTS_TO_LOSE=a.points_to_lose;POINTS_TO_WIN=a.points_to_win;START_NUM_SHUFFLE=a.start_num_shuffle;NUM_LEVEL_TO_INCREASE_NUM_SHUFFLE=a.num_level_to_increase_num_shuffle;
START_TIMESPEED_SHUFFLE=a.start_timespeed_shuffle;DECREASE_TIMESPEED_SHUFFLE=a.decrease_timespeed_shuffle;MINIMUM_TIMESPEED=a.minimum_timespeed;this._init()}var s_oGame;
function CEndPanel(a){var c,b,d,f,e,g,h;this._init=function(a){c=createBitmap(a);c.x=0;c.y=0;var k=s_oSpriteLibrary.getSprite("heart_lose");h=createBitmap(k);h.regX=k.width/2;h.x=a.width/2;h.y=250;d=new createjs.Text("","bold 50px Arial","#000");d.x=CANVAS_WIDTH/2+1;d.y=CANVAS_HEIGHT/2-150;d.textAlign="center";d.textBaseline="alphabetic";d.lineWidth=500;f=new createjs.Text("","bold 50px Arial","#ffffff");f.x=CANVAS_WIDTH/2;f.y=CANVAS_HEIGHT/2-152;f.textAlign="center";f.textBaseline="alphabetic";f.lineWidth=
500;e=new createjs.Text("","bold 40px Arial","#000");e.x=CANVAS_WIDTH/2+1;e.y=CANVAS_HEIGHT/2+150;e.textAlign="center";e.textBaseline="alphabetic";e.lineWidth=500;g=new createjs.Text("","bold 40px Arial","#ffffff");g.x=CANVAS_WIDTH/2;g.y=CANVAS_HEIGHT/2+152;g.textAlign="center";g.textBaseline="alphabetic";g.lineWidth=500;b=new createjs.Container;b.alpha=0;b.visible=!1;b.addChild(c,e,g,d,f,h);s_oStage.addChild(b)};this.unload=function(){b.off("mousedown",this._onExit)};this._initListener=function(){b.on("mousedown",
this._onExit)};this.show=function(a){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("game_over");d.text=TEXT_GAMEOVER;f.text=TEXT_GAMEOVER;e.text=TEXT_SCORE+": "+a;g.text=TEXT_SCORE+": "+a;b.visible=!0;var c=this;createjs.Tween.get(b).wait(2500).to({alpha:1},500).call(function(){c._initListener()});$(s_oMain).trigger("save_score",a)};this._onExit=function(){b.off("mousedown",this._onExit);s_oStage.removeChild(b);s_oGame.onExit()};this._init(a);return this}
function CCard(a,c,b,d,f){var e,g,h,m,k,p,l,q,n;this._init=function(a,b,c,d,f){e=!1;g=0===f?"hearts":1===f?"clubs":"spades";h=d;q=c;l=new createjs.Container;l.x=a;l.y=b;l.regX=CARD_WIDTH/2;l.regY=CARD_HEIGHT/2;q.addChild(l);a=s_oSpriteLibrary.getSprite("card_back");m=createBitmap(a);m.visible=!0;l.addChild(m);a=s_oSpriteLibrary.getSprite(g);k=createBitmap(a);k.visible=!1;l.addChild(k);p=new createjs.Shape};this.unload=function(){p.off("click",s_oGame.checkWin,s_oGame,!1,{szCardType:g,iLogicPos:h});
q.removeChild(l)};this.getStateTurned=function(){return e};this.moveCard=function(a,b,c,d,e,f,g){createjs.Tween.get(l).to({x:a},c,createjs.Ease.linear).call(function(){n.setLogicPos(d);s_oGame.checkShuffle()});.5>g?createjs.Tween.get(l).to({y:b+60*e},.5*c,createjs.Ease.cubicOut).to({y:b},.5*c,createjs.Ease.cubicIn):createjs.Tween.get(l).to({scaleX:f,scaleY:f},.5*c,createjs.Ease.cubicOut).to({scaleX:1,scaleY:1},.5*c,createjs.Ease.cubicIn)};this.showDelayedCard=function(){createjs.Tween.get(l).wait(1E3).to({scaleX:.1},
200).call(function(){n.setValue()}).call(function(){e=!0})};this.showCard=function(){createjs.Tween.get(l).to({scaleX:.1},200).call(function(){n.setValue()}).call(function(){e=!0})};this.setValue=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("card");e=!1;m.visible=!1;k.visible=!0;createjs.Tween.get(l).to({scaleX:1},200)};this.hideCard=function(){createjs.Tween.get(l).to({scaleX:.1},200).call(function(){n.setBack()})};this.setBack=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==
s_bMobile||createjs.Sound.play("card");e=!1;k.visible=!1;m.visible=!0;createjs.Tween.get(l).to({scaleX:1},200)};this.setLogicPos=function(a){h=a};this.getLogicPos=function(){return h};this.getSprite=function(){return l};this.activeHitArea=function(a){a?(p=new createjs.Shape,p.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(0,0,CARD_WIDTH,CARD_HEIGHT),l.addChild(p),p.visible=!0,p.on("click",s_oGame.checkWin,s_oGame,!1,{szCardType:g,iLogicPos:h})):(p.visible=!1,l.removeChild(p),p.off("click",
s_oGame.checkWin,s_oGame,!1,{szCardType:g,iLogicPos:h}))};n=this;this._init(a,c,b,d,f)}
function CSpriteLibrary(){var a,c,b,d,f,e;this.init=function(g,h,m){b=c=0;d=g;f=h;e=m;a={}};this.addSprite=function(b,d){a.hasOwnProperty(b)||(a[b]={szPath:d,oSprite:new Image},c++)};this.getSprite=function(b){return a.hasOwnProperty(b)?a[b].oSprite:null};this._onSpritesLoaded=function(){f.call(e)};this._onSpriteLoaded=function(){d.call(e);++b==c&&this._onSpritesLoaded()};this.loadSprites=function(){for(var b in a)a[b].oSprite.oSpriteLibrary=this,a[b].oSprite.onload=function(){this.oSpriteLibrary._onSpriteLoaded()},
a[b].oSprite.src=a[b].szPath};this.getNumSprites=function(){return c}}var CANVAS_WIDTH=1136,CANVAS_HEIGHT=640,FPS_TIME=1E3/24,DISABLE_SOUND_MOBILE=!1,STATE_LOADING=0,STATE_MENU=1,STATE_HELP=1,STATE_GAME=3,ON_MOUSE_DOWN=0,ON_MOUSE_UP=1,ON_MOUSE_OVER=2,ON_MOUSE_OUT=3,ON_DRAG_START=4,ON_DRAG_END=5,INFO_PHASE=0,END_PHASE=1,INFO_PHASE_DURATION=6E3,START_NUM_SHUFFLE,NUM_LEVEL_TO_INCREASE_NUM_SHUFFLE,START_TIMESPEED_SHUFFLE,DECREASE_TIMESPEED_SHUFFLE,MINIMUM_TIMESPEED,CARD_WIDTH=217,CARD_HEIGHT=330,POINTS_TO_WIN;
function CToggle(a,c,b,d){var f,e,g,h;this._init=function(a,b,c,d){e=[];g=[];var q=new createjs.SpriteSheet({images:[c],frames:{width:c.width/2,height:c.height,regX:c.width/2/2,regY:c.height/2},animations:{state_true:[0],state_false:[1]}});f=d;h=createSprite(q,"state_"+f,c.width/2/2,c.height/2,c.width/2,c.height);h.x=a;h.y=b;h.stop();s_oStage.addChild(h);this._initListener()};this.unload=function(){h.off("mousedown",this.buttonDown);h.off("pressup",this.buttonRelease);s_oStage.removeChild(h)};this._initListener=
function(){h.on("mousedown",this.buttonDown);h.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,c){e[a]=b;g[a]=c};this.setActive=function(a){f=a;h.gotoAndStop("state_"+f)};this.buttonRelease=function(){h.scaleX=1;h.scaleY=1;!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("click");f=!f;h.gotoAndStop("state_"+f);e[ON_MOUSE_UP]&&e[ON_MOUSE_UP].call(g[ON_MOUSE_UP],f)};this.buttonDown=function(){h.scaleX=.9;h.scaleY=.9;e[ON_MOUSE_DOWN]&&e[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN])};
this._init(a,c,b,d)}var s_iScaleFactor=1,s_oCanvasLeft,s_oCanvasTop;
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||
navigator.vendor||window.opera);$(window).resize(function(){sizeHandler()});function trace(a){console.log(a)}
function getSize(a){var c=a.toLowerCase(),b=window.document,d=b.documentElement;if(void 0===window["inner"+a])a=d["client"+a];else if(window["inner"+a]!=d["client"+a]){var f=b.createElement("body");f.id="vpw-test-b";f.style.cssText="overflow:scroll";var e=b.createElement("div");e.id="vpw-test-d";e.style.cssText="position:absolute;top:-1000px";e.innerHTML="<style>@media("+c+":"+d["client"+a]+"px){body#vpw-test-b div#vpw-test-d{"+c+":7px!important}}</style>";f.appendChild(e);d.insertBefore(f,b.head);
a=7==e["offset"+a]?d["client"+a]:window["inner"+a];d.removeChild(f)}else a=window["inner"+a];return a}$(window).ready(function(){sizeHandler()});window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){window.matchMedia("(orientation: portrait)").matches&&sizeHandler();window.matchMedia("(orientation: landscape)").matches&&sizeHandler()}
function sizeHandler(){window.scrollTo(0,1);if($("#canvas")){var a=CANVAS_WIDTH,c=CANVAS_HEIGHT,b=window.innerWidth<document.documentElement.clientWidth?window.innerWidth:document.documentElement.clientWidth,d=window.innerHeight<document.documentElement.clientHeight?window.innerHeight:document.documentElement.clientHeight,b=getSize("Width"),d=getSize("Height");multiplier=s_iScaleFactor=Math.min(d/c,b/a);a*=multiplier;c*=multiplier;$("#canvas").css("width",a+"px");$("#canvas").css("height",c+"px");
$("#canvas").css("left",b/2-a/2+"px");s_oCanvasLeft=$("#canvas").offset().left;s_oCanvasTop=$("#canvas").offset().top}}function createBitmap(a,c,b){var d=new createjs.Bitmap(a),f=new createjs.Shape;c&&b?f.graphics.beginFill("#fff").drawRect(0,0,c,b):f.graphics.beginFill("#ff0").drawRect(0,0,a.width,a.height);d.hitArea=f;return d}
function createSprite(a,c,b,d,f,e){a=null!==c?new createjs.Sprite(a,c):new createjs.Sprite(a);c=new createjs.Shape;c.graphics.beginFill("#000000").drawRect(-b,-d,f,e);a.hitArea=c;return a}function randomFloatBetween(a,c,b){"undefined"===typeof b&&(b=2);return parseFloat(Math.min(a+Math.random()*(c-a),c).toFixed(b))}function tweenVectorsOnX(a,c,b){return a+b*(c-a)}function shuffle(a){for(var c=a.length,b,d;0!==c;)d=Math.floor(Math.random()*c),--c,b=a[c],a[c]=a[d],a[d]=b;return a}
function bubbleSort(a){var c;do{c=!1;for(var b=0;b<a.length-1;b++)a[b]>a[b+1]&&(c=a[b],a[b]=a[b+1],a[b+1]=c,c=!0)}while(c)}function compare(a,c){return a.index>c.index?-1:a.index<c.index?1:0}function easeLinear(a,c,b,d){return b*a/d+c}function easeInQuad(a,c,b,d){return b*(a/=d)*a+c}function easeInSine(a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c}function easeInCubic(a,c,b,d){return b*(a/=d)*a*a+c}
function getTrajectoryPoint(a,c){var b=new createjs.Point,d=(1-a)*(1-a),f=a*a;b.x=d*c.start.x+2*(1-a)*a*c.traj.x+f*c.end.x;b.y=d*c.start.y+2*(1-a)*a*c.traj.y+f*c.end.y;return b}function formatTime(a){a/=1E3;var c=Math.floor(a/60);a=parseFloat(a-60*c).toFixed(1);var b="",b=10>c?b+("0"+c+":"):b+(c+":");return b=10>a?b+("0"+a):b+a}function degreesToRadians(a){return a*Math.PI/180}function checkRectCollision(a,c){var b,d;b=getBounds(a,.9);d=getBounds(c,.98);return calculateIntersection(b,d)}
function calculateIntersection(a,c){var b,d,f,e,g,h,m,k;b=a.x+(f=a.width/2);d=a.y+(e=a.height/2);g=c.x+(h=c.width/2);m=c.y+(k=c.height/2);b=Math.abs(b-g)-(f+h);d=Math.abs(d-m)-(e+k);return 0>b&&0>d?(b=Math.min(Math.min(a.width,c.width),-b),d=Math.min(Math.min(a.height,c.height),-d),{x:Math.max(a.x,c.x),y:Math.max(a.y,c.y),width:b,height:d,rect1:a,rect2:c}):null}
function getBounds(a,c){var b={x:Infinity,y:Infinity,width:0,height:0};if(a instanceof createjs.Container){b.x2=-Infinity;b.y2=-Infinity;var d=a.children,f=d.length,e,g;for(g=0;g<f;g++)e=getBounds(d[g],1),e.x<b.x&&(b.x=e.x),e.y<b.y&&(b.y=e.y),e.x+e.width>b.x2&&(b.x2=e.x+e.width),e.y+e.height>b.y2&&(b.y2=e.y+e.height);Infinity==b.x&&(b.x=0);Infinity==b.y&&(b.y=0);Infinity==b.x2&&(b.x2=0);Infinity==b.y2&&(b.y2=0);b.width=b.x2-b.x;b.height=b.y2-b.y;delete b.x2;delete b.y2}else{var h,m;a instanceof createjs.Bitmap?
(f=a.sourceRect||a.image,g=f.width*c,h=f.height*c):a instanceof createjs.Sprite?a.spriteSheet._frames&&a.spriteSheet._frames[a.currentFrame]&&a.spriteSheet._frames[a.currentFrame].image?(f=a.spriteSheet.getFrame(a.currentFrame),g=f.rect.width,h=f.rect.height,d=f.regX,m=f.regY):(b.x=a.x||0,b.y=a.y||0):(b.x=a.x||0,b.y=a.y||0);d=d||0;g=g||0;m=m||0;h=h||0;b.regX=d;b.regY=m;f=a.localToGlobal(0-d,0-m);e=a.localToGlobal(g-d,h-m);g=a.localToGlobal(g-d,0-m);d=a.localToGlobal(0-d,h-m);b.x=Math.min(Math.min(Math.min(f.x,
e.x),g.x),d.x);b.y=Math.min(Math.min(Math.min(f.y,e.y),g.y),d.y);b.width=Math.max(Math.max(Math.max(f.x,e.x),g.x),d.x)-b.x;b.height=Math.max(Math.max(Math.max(f.y,e.y),g.y),d.y)-b.y}return b}function NoClickDelay(a){this.element=a;window.Touch&&this.element.addEventListener("touchstart",this,!1)}function shuffle(a){for(var c=a.length,b,d;0<c;)d=Math.floor(Math.random()*c),c--,b=a[c],a[c]=a[d],a[d]=b;return a}
NoClickDelay.prototype={handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a)}},onTouchStart:function(a){a.preventDefault();this.moved=!1;this.element.addEventListener("touchmove",this,!1);this.element.addEventListener("touchend",this,!1)},onTouchMove:function(a){this.moved=!0},onTouchEnd:function(a){this.element.removeEventListener("touchmove",this,!1);this.element.removeEventListener("touchend",
this,!1);if(!this.moved){a=document.elementFromPoint(a.changedTouches[0].clientX,a.changedTouches[0].clientY);3==a.nodeType&&(a=a.parentNode);var c=document.createEvent("MouseEvents");c.initEvent("click",!0,!0);a.dispatchEvent(c)}}};
(function(){function a(a){var d={focus:"visible",focusin:"visible",pageshow:"visible",blur:"hidden",focusout:"hidden",pagehide:"hidden"};a=a||window.event;a.type in d?document.body.className=d[a.type]:(document.body.className=this[c]?"hidden":"visible","hidden"===document.body.className?s_oMain.stopUpdate():s_oMain.startUpdate())}var c="hidden";c in document?document.addEventListener("visibilitychange",a):(c="mozHidden")in document?document.addEventListener("mozvisibilitychange",a):(c="webkitHidden")in
document?document.addEventListener("webkitvisibilitychange",a):(c="msHidden")in document?document.addEventListener("msvisibilitychange",a):"onfocusin"in document?document.onfocusin=document.onfocusout=a:window.onpageshow=window.onpagehide=window.onfocus=window.onblur=a})();
function CTextButton(a,c,b,d,f,e,g){var h,m,k,p,l;this._init=function(a,b,c,d,e,f,g){h=[];m=[];var x=createBitmap(c),w=Math.ceil(g/20);l=new createjs.Text(d,"bold "+g+"px "+e,"#000000");l.textAlign="center";l.textBaseline="alphabetic";var v=l.getBounds();l.x=c.width/2+w;l.y=Math.floor(c.height/2)+v.height/3+w-7;p=new createjs.Text(d,"bold "+g+"px "+e,f);p.textAlign="center";p.textBaseline="alphabetic";v=p.getBounds();p.x=c.width/2;p.y=Math.floor(c.height/2)+v.height/3-7;k=new createjs.Container;k.x=
a;k.y=b;k.regX=c.width/2;k.regY=c.height/2;k.addChild(x,l,p);s_oStage.addChild(k);this._initListener()};this.unload=function(){k.off("mousedown");k.off("pressup");s_oStage.removeChild(k)};this.setVisible=function(a){k.visible=a};this._initListener=function(){oParent=this;k.on("mousedown",this.buttonDown);k.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,c){h[a]=b;m[a]=c};this.buttonRelease=function(){k.scaleX=1;k.scaleY=1;h[ON_MOUSE_UP]&&h[ON_MOUSE_UP].call(m[ON_MOUSE_UP])};this.buttonDown=
function(){k.scaleX=.9;k.scaleY=.9;h[ON_MOUSE_DOWN]&&h[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN])};this.setTextPosition=function(a){p.y=a;l.y=a+2};this.setPosition=function(a,b){k.x=a;k.y=b};this.setX=function(a){k.x=a};this.setY=function(a){k.y=a};this.getButtonImage=function(){return k};this.getX=function(){return k.x};this.getY=function(){return k.y};this._init(a,c,b,d,f,e,g);return this}
function CPreloader(){var a,c,b,d,f,e,g;this._init=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("progress_bar","./sprites/progress_bar.png");s_oSpriteLibrary.loadSprites();g=new createjs.Container;s_oStage.addChild(g)};this.unload=function(){g.removeAllChildren()};this.hide=function(){var a=this;setTimeout(function(){createjs.Tween.get(e).to({alpha:1},500).call(function(){a.unload();
s_oMain.gotoMenu()})},1E3)};this._onImagesLoaded=function(){};this._onAllImagesLoaded=function(){this.attachSprites();s_oMain.preloaderReady()};this.attachSprites=function(){var h=createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));g.addChild(h);h=s_oSpriteLibrary.getSprite("progress_bar");d=createBitmap(h);d.x=CANVAS_WIDTH/2-h.width/2;d.y=CANVAS_HEIGHT-170;g.addChild(d);a=h.width;c=h.height;f=new createjs.Shape;f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x,d.y,1,c);g.addChild(f);d.mask=
f;b=new createjs.Text("","30px ZombieA","#fff");b.x=CANVAS_WIDTH/2;b.y=CANVAS_HEIGHT-125;b.shadow=new createjs.Shadow("#000",2,2,2);b.textBaseline="alphabetic";b.textAlign="center";g.addChild(b);e=new createjs.Shape;e.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);e.alpha=0;g.addChild(e)};this.refreshLoader=function(e){b.text=e+"%";f.graphics.clear();e=Math.floor(e*a/100);f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x,d.y,e,c)};this._init()}
function CMenu(){var a,c,b,d;this._init=function(){a=createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));s_oStage.addChild(a);var f=s_oSpriteLibrary.getSprite("but_play");c=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT-80,f,TEXT_PLAY,"Arial","#ffffff",40);c.addEventListener(ON_MOUSE_UP,this._onButPlayRelease,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)f=s_oSpriteLibrary.getSprite("audio_icon"),d=new CToggle(CANVAS_WIDTH-f.height/2-10,f.height/2+10,f,s_bAudioActive),d.addEventListener(ON_MOUSE_UP,
this._onAudioToggle,this);b=new createjs.Shape;b.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);s_oStage.addChild(b);createjs.Tween.get(b).to({alpha:0},1E3).call(function(){b.visible=!1})};this.unload=function(){c.unload();c=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)d.unload(),d=null;s_oStage.removeChild(a);a=null};this._onAudioToggle=function(){createjs.Sound.setMute(s_bAudioActive);s_bAudioActive=!s_bAudioActive};this._onButPlayRelease=function(){this.unload();!1!==
DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("click");s_oMain.gotoGame()};this._init()}
function CMain(a){var c,b=0,d=0,f=STATE_LOADING,e,g,h;this.initContainer=function(){s_oCanvas=document.getElementById("canvas");s_oStage=new createjs.Stage(s_oCanvas);createjs.Touch.enable(s_oStage);s_bMobile=jQuery.browser.mobile;!1===s_bMobile&&(s_oStage.enableMouseOver(20),$("body").on("contextmenu","#canvas",function(a){return!1}));s_iPrevTime=(new Date).getTime();createjs.Ticker.addEventListener("tick",this._update);createjs.Ticker.setFPS(30);navigator.userAgent.match(/Windows Phone/i)&&(DISABLE_SOUND_MOBILE=
!0);s_oSpriteLibrary=new CSpriteLibrary;g=new CPreloader};this.preloaderReady=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||this._initSounds();this._loadImages();c=!0};this.soundLoaded=function(){b++;g.refreshLoader(Math.floor(b/d*100));if(b===d){g.unload();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundtrack=createjs.Sound.play("soundtrack",{loop:-1});this.gotoMenu()}};this._initSounds=function(){createjs.Sound.initializeDefaultPlugins()&&(0<navigator.userAgent.indexOf("Opera")||0<
navigator.userAgent.indexOf("OPR")?(createjs.Sound.alternateExtensions=["m4a"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/soundtrack.ogg","soundtrack"),createjs.Sound.registerSound("./sounds/press_button.ogg","click"),createjs.Sound.registerSound("./sounds/game_over.ogg","game_over"),createjs.Sound.registerSound("./sounds/card.ogg","card"),createjs.Sound.registerSound("./sounds/shuffle.ogg","shuffle")):(createjs.Sound.alternateExtensions=
["ogg"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/soundtrack.mp3","soundtrack"),createjs.Sound.registerSound("./sounds/press_button.m4a","click"),createjs.Sound.registerSound("./sounds/game_over.mp3","game_over"),createjs.Sound.registerSound("./sounds/card.mp3","card"),createjs.Sound.registerSound("./sounds/shuffle.mp3","shuffle")),d+=5)};this._loadImages=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,
this);s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");s_oSpriteLibrary.addSprite("bg_help","./sprites/bg_help.png");s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");s_oSpriteLibrary.addSprite("score_panel","./sprites/score_panel.png");
s_oSpriteLibrary.addSprite("card_back","./sprites/card_back.png");s_oSpriteLibrary.addSprite("hearts","./sprites/hearts.png");s_oSpriteLibrary.addSprite("clubs","./sprites/clubs.png");s_oSpriteLibrary.addSprite("spades","./sprites/spades.png");s_oSpriteLibrary.addSprite("heart_lose","./sprites/heart_lose.png");d+=s_oSpriteLibrary.getNumSprites();s_oSpriteLibrary.loadSprites()};this._onImagesLoaded=function(){b++;g.refreshLoader(Math.floor(b/d*100));if(b===d){g.unload();if(!1===DISABLE_SOUND_MOBILE||
!1===s_bMobile)s_oSoundtrack=createjs.Sound.play("soundtrack",{loop:-1});this.gotoMenu()}};this._onAllImagesLoaded=function(){};this.onAllPreloaderImagesLoaded=function(){this._loadImages()};this.gotoMenu=function(){new CMenu;f=STATE_MENU};this.gotoGame=function(a){s_bEasyMode=a;h=new CGame(e);f=STATE_GAME;$(s_oMain).trigger("game_start")};this.gotoHelp=function(){new CHelp;f=STATE_HELP};this.stopUpdate=function(){c=!1};this.startUpdate=function(){c=!0};this._update=function(a){if(!1!==c){var b=(new Date).getTime();
s_iTimeElaps=b-s_iPrevTime;s_iCntTime+=s_iTimeElaps;s_iCntFps++;s_iPrevTime=b;1E3<=s_iCntTime&&(s_iCurFps=s_iCntFps,s_iCntTime-=1E3,s_iCntFps=0);f===STATE_GAME&&h.update();s_oStage.update(a)}};s_oMain=this;e=a;this.initContainer()}var s_bMobile,s_bEasyMode,s_bAudioActive=!0,s_iCntTime=0,s_iTimeElaps=0,s_iPrevTime=0,s_iCntFps=0,s_iCurFps=0,s_iBestScore=0,s_oDrawLayer,s_oStage,s_oMain,s_oSpriteLibrary,s_oSoundTrack,s_oCanvas;TEXT_GAMEOVER="WRONG CHOICE, YOU'RE OUT!";TEXT_SCORE="SCORE";
TEXT_BEST_SCORE="BEST SCORE";TEXT_CUR_SCORE="CURRENT SCORE";TEXT_PLAY="PLAY";TEXT_RESTART="RESTART";TEXT_CHOOSE="WHERE IS THE ACE OF HEARTS?";TEXT_INFO="FIND THE ACE OF HEARTS!";TEXT_SHUFFLE="SHUFFLING...";TEXT_WIN="WELL DONE!";TEXT_HELP1="GAMES RULES ARE SIMPLE:";TEXT_HELP2="FIND THE ACE OF HEARTS, IF YOU MISS IT, YOU ARE OUT!";