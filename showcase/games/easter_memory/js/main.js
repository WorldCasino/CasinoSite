function CGfxButton(a,c,b){var e,f,d,k,h,n=[],l;this._init=function(a,c,b){e=!1;k=[];h=[];f=b.width;d=b.height;l=createBitmap(b);l.x=a;l.y=c;l.regX=b.width/2;l.regY=b.height/2;s_oStage.addChild(l);this._initListener()};this.unload=function(){l.off("mousedown",this.buttonDown);l.off("pressup",this.buttonRelease);s_oStage.removeChild(l)};this.setVisible=function(a){l.visible=a};this._initListener=function(){l.on("mousedown",this.buttonDown);l.on("pressup",this.buttonRelease)};this.addEventListener=
function(a,c,b){k[a]=c;h[a]=b};this.addEventListenerWithParams=function(a,c,b,e){k[a]=c;h[a]=b;n=e};this.buttonRelease=function(){e||(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but"),l.scaleX=1,l.scaleY=1,k[ON_MOUSE_UP]&&k[ON_MOUSE_UP].call(h[ON_MOUSE_UP],n))};this.buttonDown=function(){e||(l.scaleX=.9,l.scaleY=.9,k[ON_MOUSE_DOWN]&&k[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN],n))};this.setPosition=function(a,c){l.x=a;l.y=c};this.setX=function(a){l.x=a};this.setY=function(a){l.y=
a};this.enable=function(){e=!1;l.filters=[];l.cache(0,0,f,d)};this.disable=function(){e=!0;var a=(new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);l.filters=[new createjs.ColorMatrixFilter(a)];l.cache(0,0,f,d)};this.getButtonImage=function(){return l};this.getX=function(){return l.x};this.getY=function(){return l.y};this._init(a,c,b);return this}
function CGameOver(){var a,c,b,e;this._init=function(){e=new createjs.Container;e.alpha=0;e.visible=!1;s_oStage.addChild(e);var f=createBitmap(s_oSpriteLibrary.getSprite("msg_box"));f.x=0;f.y=0;a=new createjs.Text(TEXT_GAMEOVER,"50px walibi0615bold","#fff");a.x=CANVAS_WIDTH/2;a.y=CANVAS_HEIGHT/2-80;a.textBaseline="alphabetic";a.textAlign="center";a.shadow=new createjs.Shadow("#000000",3,3,2);c=new createjs.Text(TEXT_TOTALSCORE+" 0","48px walibi0615bold","#fff");c.x=CANVAS_WIDTH/2;c.y=CANVAS_HEIGHT/
2+50;c.textAlign="center";c.textBaseline="alphabetic";c.shadow=new createjs.Shadow("#000000",2,2,2);e.addChild(f,a,c);b=new CTextButton(CANVAS_WIDTH/2,580,s_oSpriteLibrary.getSprite("but_menu_bg"),TEXT_PLAY_AGAIN,"walibi0615bold","White","24",e);b.addEventListener(ON_MOUSE_UP,this.unload,this)};this.display=function(a){c.text=TEXT_TOTALSCORE+" "+a;e.visible=!0;createjs.Tween.get(e).to({alpha:1},250);$(s_oMain).trigger("save_score",a)};this.unload=function(){b.unload();s_oStage.removeChild(e);s_oGame.unload()};
this._init()}
function CGame(a){var c=!0,b=4,e=0,f=0,d,k,h=0,n,l=0,p=0,g=[],q,m,u,r,t,v;this._init=function(){var a={images:[s_oSpriteLibrary.getSprite("card_spritesheet")],frames:{width:CARD_WIDTH,height:CARD_HEIGHT,regX:CARD_WIDTH/2,regY:CARD_HEIGHT/2},animations:{card0:[0],card1:[1],card2:[2],card3:[3],card4:[4],card5:[5],card6:[6],card7:[7],card8:[9],card9:[10],card10:[11],card11:[12],card12:[13],card13:[14],card14:[15],card15:[16],back:[17]}};this.spriteSheet=new createjs.SpriteSheet(a);q=new createjs.Container;s_oStage.addChild(q);
v=new createjs.Container;s_oStage.addChild(v);m=new CInterface(formatTime(d));u=new CNextLevel;r=new CGameOver;t=new CVictory;this.nextLevel()};this.unload=function(){for(var a=0;a<g.length;a++)g[a].unload();s_oStage.removeAllChildren();m.unload();s_oMain.gotoMenu();$(s_oMain).trigger("restart")};this.cardClicked=function(a,b){!0===a.isFolded()&&!1===c&&2>f&&a.flipCard()};this.addFlippedCard=function(){f++;2===f&&!1===c&&this.checkMatching()};this.checkMatching=function(){for(var a=[],d=[],w=0;w<
b;w++)!1===g[w].isFolded()&&(d.push(g[w].getType()),a.push(w));if(d[0]===d[1]){if(d=1,k<TIME_FOR_MATCH_MULT?(k=0,m.showMultiplier(n),d=n,n++):(n=2,k=0),!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("right"),g[a[0]].eliminateCard(),g[a[1]].eliminateCard(),g.splice(a[0],1),g.splice(a[1]-1,1),b-=2,h+=SCORE_MATCH_CARD*d,l+=SCORE_MATCH_CARD*d,m.refreshScore(h),0===b&&e<=s_aCardsPerLevel.length){c=!0;var p=this;setTimeout(function(){p.checkVictory()},1E3)}}else g[a[0]].flipCard(),g[a[0]].clickListener(),
g[a[1]].flipCard(),g[a[1]].clickListener();f=0};this.checkVictory=function(){c=!0;p=Math.round(d/1E3*SCORE_TIME_LEFT_MULT);h+=p;m.refreshScore(h);e<s_aCardsPerLevel.length?(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("next_level"),u.display(l,p,l+p,h,e)):(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("win"),t.display(h))};this.nextLevel=function(){e++;q.removeAllChildren();var a=createBitmap(s_oSpriteLibrary.getSprite("bg_"+(Math.floor(Math.random()*NUM_BACKGROUNDS)+
1)));q.addChild(a);a=CLevels(e);b=a.cardsNum;d=a.timeAllotted;k=TIME_FOR_MATCH_MULT;for(var f=[],h=0;h<b/2;h++)f[h]=h,f[h+b/2]=h;for(h=0;h<b;h++){var m=Math.floor(Math.random()*f.length);g[h]=new CCard(a.cardsPos[h][0],a.cardsPos[h][1],"card"+f[m],a.cardZoomFactor,v);f.splice(m,1)}_iGameOverScore=p=l=0;n=2;c=!1};this.suspendUpdates=function(){c=!0};this.restartUpdates=function(){0<b&&(c=!1)};this.update=function(){c||(d-=s_iTimeElaps,k+=s_iTimeElaps,0>d?(c=!0,d=0,!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||
createjs.Sound.play("game_over"),r.display(h),e=1,h=0):m.update(formatTime(d)))};this.spriteSheet={};s_oGame=this;SCORE_MATCH_CARD=a.score_match_card;SCORE_TIME_LEFT_MULT=a.score_time_left_mult;TIME_FOR_MATCH_MULT=a.time_match_mult;s_aCardsPerLevel=a.card_per_level;s_aSecsPerLevel=a.time_level;TIME_SHOW_CARDS=1E3*a.show_cards;this._init()}var s_aCardsPerLevel,s_aSecsPerLevel,s_oGame;
function CCard(a,c,b,e,f){var d=!1,k,h,n,l,p,g,q,m;this._init=function(a,c,b,e,f){n=a;l=c;_bEliminated=!1;k=!0;h=b;m=f;g=createSprite(s_oGame.spriteSheet,"back",CARD_WIDTH/2,CARD_HEIGHT/2,CARD_WIDTH,CARD_HEIGHT);g.x=n<CANVAS_WIDTH/2?n-CANVAS_WIDTH:CANVAS_WIDTH+n;g.y=l+Math.floor(0*(Math.random()-.5));p=e;g.scaleX=g.scaleY=p;q=this;g.on("click",function(){this.clicked()},q);d=!0;s_oGame.suspendUpdates();m.addChild(g);var y=this;createjs.Tween.get(g).to({alpha:1,x:n,y:l},500).call(function(){d=!1;s_oGame.restartUpdates();
0<TIME_SHOW_CARDS&&y.showCardFirstTime()})};this.unload=function(){m.removeChild(g)};this.update=function(){};this.clicked=function(){!1===d&&k&&(s_oGame.cardClicked(this,h),!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("card"),this.clickListener())};this.showCardFirstTime=function(){d=!0;createjs.Tween.get(g).to({scaleX:.1},100).call(function(){m.removeChild(g);g=createSprite(s_oGame.spriteSheet,h,CARD_WIDTH/2,CARD_HEIGHT/2,CARD_WIDTH,CARD_HEIGHT);g.x=n;g.y=l;g.scaleX=g.scaleY=p;
m.addChild(g);createjs.Tween.get(g).wait(TIME_SHOW_CARDS).to({scaleX:p},100).call(function(){k=d=!1;q.clickListener();q.flipCard()},q)})};this.flipCard=function(){!0===k?(d=!0,createjs.Tween.get(g).to({scaleX:.1},100).call(function(){m.removeChild(g);g=createSprite(s_oGame.spriteSheet,h,CARD_WIDTH/2,CARD_HEIGHT/2,CARD_WIDTH,CARD_HEIGHT);g.x=n;g.y=l;g.scaleX=g.scaleY=p;m.addChild(g);createjs.Tween.get(g).to({scaleX:p},100).call(function(){k=d=!1;s_oGame.addFlippedCard();q.clickListener()},q)})):(!1!==
DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("card"),d=!0,createjs.Tween.get(g).to({scaleX:.1},100).call(function(){m.removeChild(g);g=createSprite(s_oGame.spriteSheet,"back",CARD_WIDTH/2,CARD_HEIGHT/2,CARD_WIDTH,CARD_HEIGHT);g.x=n;g.y=l;g.scaleX=g.scaleY=p;m.addChild(g);createjs.Tween.get(g).to({scaleX:p},100).call(function(){d=!1;s_oGame.restartUpdates();k=!0;q.clickListener();return!0},q)}))};this.clickListener=function(){if(!1===d)g.on("click",function(){this.clicked()},q)};this.display=
function(){};this.isFolded=function(){return k};this.getType=function(){return h};this.eliminateCard=function(){d=!0;s_oGame.suspendUpdates();g.alpha=1;createjs.Tween.get(g).to({alpha:0},400).call(function(){m.removeChild(g);d=!1;s_oGame.restartUpdates()})};this._init(a,c,b,e,f)}
function CSpriteLibrary(){var a,c,b,e,f,d;this.init=function(k,h,n){b=c=0;e=k;f=h;d=n;a={}};this.addSprite=function(b,d){a.hasOwnProperty(b)||(a[b]={szPath:d,oSprite:new Image},c++)};this.getSprite=function(c){return a.hasOwnProperty(c)?a[c].oSprite:null};this._onSpritesLoaded=function(){f.call(d)};this._onSpriteLoaded=function(){e.call(d);++b===c&&this._onSpritesLoaded()};this.loadSprites=function(){for(var c in a)a[c].oSprite.oSpriteLibrary=this,a[c].oSprite.onload=function(){this.oSpriteLibrary._onSpriteLoaded()},
a[c].oSprite.src=a[c].szPath};this.getNumSprites=function(){return c}}var CANVAS_WIDTH=1136,CANVAS_HEIGHT=640,DISABLE_SOUND_MOBILE=!0,STATE_LOADING=0,STATE_MENU=1,STATE_HELP=1,STATE_GAME=3,ON_MOUSE_DOWN=0,ON_MOUSE_UP=1,ON_MOUSE_OVER=2,ON_MOUSE_OUT=3,ON_DRAG_START=4,ON_DRAG_END=5,CARD_WIDTH=160,CARD_HEIGHT=252,MAX_CARDS=32,SCORE_MATCH_CARD,SCORE_TIME_LEFT_MULT,TIME_FOR_MATCH_MULT,NUM_BACKGROUNDS=4,TIME_SHOW_CARDS;
function CVictory(){var a,c,b,e;this._init=function(){e=new createjs.Container;e.alpha=0;e.visible=!1;s_oStage.addChild(e);var f=createBitmap(s_oSpriteLibrary.getSprite("msg_box"));c=new createjs.Text(TEXT_VICTORY,"bold 38px walibi0615bold","#fff");c.x=CANVAS_WIDTH/2;c.y=CANVAS_HEIGHT/2-80;c.textBaseline="alphabetic";c.textAlign="center";c.shadow=new createjs.Shadow("#000000",3,3,2);b=new createjs.Text(TEXT_TOTALSCORE,"italic bold 48px walibi0615bold","Pink");b.x=CANVAS_WIDTH/2+2;b.y=CANVAS_HEIGHT/
2+50;b.textAlign="center";b.textBaseline="alphabetic";b.shadow=new createjs.Shadow("#000000",2,2,2);e.addChild(f,c,b);a=new CTextButton(500,600,s_oSpriteLibrary.getSprite("but_menu_bg"),TEXT_PLAY_AGAIN,"walibi0615bold","White","24",e);a.addEventListener(ON_MOUSE_DOWN,this.unload,this)};this.display=function(a){b.text=TEXT_TOTALSCORE+"\n"+a;e.visible=!0;createjs.Tween.get(e).to({alpha:1},250);$(s_oMain).trigger("save_score",a)};this.unload=function(){a.unload();s_oStage.removeChild(e);s_oGame.unload()};
this._init()}
function CToggle(a,c,b){var e,f,d;this._init=function(a,c,b){e=[];f=[];var l=new createjs.SpriteSheet({images:[b],frames:{width:b.width/2,height:b.height,regX:b.width/2/2,regY:b.height/2},animations:{on:[0,1],off:[1,2]}});d=s_bAudioActive?createSprite(l,"on",b.width/2/2,b.height/2,b.width/2,b.height):createSprite(l,"off",b.width/2/2,b.height/2,b.width/2,b.height);d.x=a;d.y=c;d.stop();s_oStage.addChild(d);this._initListener()};this.unload=function(){d.off("mousedown",this.buttonDown);d.off("pressup",
this.buttonRelease);s_oStage.removeChild(d)};this._initListener=function(){d.on("mousedown",this.buttonDown);d.on("pressup",this.buttonRelease)};this.addEventListener=function(a,c,b){e[a]=c;f[a]=b};this.buttonRelease=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but");d.scaleX=1;d.scaleY=1;(s_bAudioActive=!s_bAudioActive)?d.gotoAndStop("on"):d.gotoAndStop("off");e[ON_MOUSE_UP]&&e[ON_MOUSE_UP].call(f[ON_MOUSE_UP])};this.buttonDown=function(){d.scaleX=.9;d.scaleY=
.9;e[ON_MOUSE_DOWN]&&e[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])};this._init(a,c,b)}
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||
navigator.vendor||window.opera);$(window).resize(function(){sizeHandler()});function trace(a){console.log(a)}$(window).ready(function(){sizeHandler()});window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){window.matchMedia("(orientation: portrait)").matches&&sizeHandler();window.matchMedia("(orientation: landscape)").matches&&sizeHandler()}
function sizeHandler(){window.scrollTo(0,1);if($("#canvas")){var a=CANVAS_WIDTH,c=CANVAS_HEIGHT,b=window.innerWidth;multiplier=Math.min(window.innerHeight/c,b/a);a*=multiplier;c*=multiplier;$("#canvas").css("width",a+"px");$("#canvas").css("height",c+"px");$("#canvas").css("left",b/2-a/2+"px")}}
function createBitmap(a,c,b){var e=new createjs.Bitmap(a),f=new createjs.Shape;c&&b?f.graphics.beginFill("#fff").drawRect(0,0,c,b):f.graphics.beginFill("#ff0").drawRect(0,0,a.width,a.height);e.hitArea=f;return e}function createSprite(a,c,b,e,f,d){a=null!==c?new createjs.Sprite(a,c):new createjs.Sprite(a);c=new createjs.Shape;c.graphics.beginFill("#000000").drawRect(-b,-e,f,d);a.hitArea=c;return a}
function randomFloatBetween(a,c,b){"undefined"===typeof b&&(b=2);return parseFloat(Math.min(a+Math.random()*(c-a),c).toFixed(b))}function shuffle(a){for(var c=a.length,b,e;0!==c;)e=Math.floor(Math.random()*c),--c,b=a[c],a[c]=a[e],a[e]=b;return a}function formatTime(a){a/=1E3;var c=Math.floor(a/60);a=Math.floor(a-60*c);var b="",b=10>c?b+("0"+c+":"):b+(c+":");return b=10>a?b+("0"+a):b+a}
Array.prototype.sortOn=function(){var a=this.slice();if(!arguments.length)return a.sort();var c=Array.prototype.slice.call(arguments);return a.sort(function(a,e){for(var f=c.slice(),d=f.shift();a[d]==e[d]&&f.length;)d=f.shift();return a[d]==e[d]?0:a[d]>e[d]?1:-1})};function roundDecimal(a,c){var b=Math.pow(10,c);return Math.round(b*a)/b}function tweenVectors(a,c,b,e){e.set(a.getX()+b*(c.getX()-a.getX()),a.getY()+b*(c.getY()-a.getY()));return e}
function NoClickDelay(a){this.element=a;window.Touch&&this.element.addEventListener("touchstart",this,!1)}
NoClickDelay.prototype={handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a)}},onTouchStart:function(a){a.preventDefault();this.moved=!1;this.element.addEventListener("touchmove",this,!1);this.element.addEventListener("touchend",this,!1)},onTouchMove:function(a){this.moved=!0},onTouchEnd:function(a){this.element.removeEventListener("touchmove",this,!1);this.element.removeEventListener("touchend",
this,!1);if(!this.moved){a=document.elementFromPoint(a.changedTouches[0].clientX,a.changedTouches[0].clientY);3===a.nodeType&&(a=a.parentNode);var c=document.createEvent("MouseEvents");c.initEvent("click",!0,!0);a.dispatchEvent(c)}}};
function CTextButton(a,c,b,e,f,d,k,h){var n,l,p,g,q,m,u,r,t,v;this._init=function(a,c,b,d,e,k,f,h){n=!1;g=[];q=[];v=h;u=createBitmap(b);l=b.width;p=b.height;h=Math.ceil(f/20);r=new createjs.Text(d,"bold "+f+"px "+e,"#000000");var x=r.getBounds();r.textAlign="center";r.textBaseline="alphabetic";r.x=b.width/2+h;r.y=Math.floor(b.height/2)+x.height/3+h;t=new createjs.Text(d,"bold "+f+"px "+e,k);t.textAlign="center";t.textBaseline="alphabetic";t.x=b.width/2;t.y=Math.floor(b.height/2)+x.height/3;m=new createjs.Container;
m.x=a;m.y=c;m.regX=b.width/2;m.regY=b.height/2;m.addChild(u,r,t);v.addChild(m);this._initListener()};this.unload=function(){m.off("mousedown");m.off("pressup");v.removeChild(m)};this.setVisible=function(a){m.visible=a};this.enable=function(){n=!1;u.filters=[];u.cache(0,0,l,p)};this.disable=function(){n=!0;var a=(new createjs.ColorMatrix).adjustSaturation(-100);u.filters=[new createjs.ColorMatrixFilter(a)];u.cache(0,0,l,p)};this._initListener=function(){oParent=this;m.on("mousedown",this.buttonDown);
m.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,c){g[a]=b;q[a]=c};this.buttonRelease=function(){n||(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but"),m.scaleX=1,m.scaleY=1,g[ON_MOUSE_UP]&&g[ON_MOUSE_UP].call(q[ON_MOUSE_UP]))};this.buttonDown=function(){n||(m.scaleX=.9,m.scaleY=.9,g[ON_MOUSE_DOWN]&&g[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN]))};this.setPosition=function(a,b){m.x=a;m.y=b};this.changeText=function(a){t.text=a;r.text=a};this.setX=function(a){m.x=
a};this.setY=function(a){m.y=a};this.getButtonImage=function(){return m};this.getX=function(){return m.x};this.getY=function(){return m.y};this._init(a,c,b,e,f,d,k,h);return this}
function CPreloader(){var a;this._init=function(){this._onAllPreloaderImagesLoaded()};this._onPreloaderImagesLoaded=function(){};this._onAllPreloaderImagesLoaded=function(){a=new createjs.Text("","bold 22px Arial center","#ffffff");a.x=CANVAS_WIDTH/2-40;a.y=CANVAS_HEIGHT/2;s_oStage.addChild(a)};this.unload=function(){s_oStage.removeChild(a)};this.refreshLoader=function(c){a.text=c+"%"};this._init()}
function CNextLevel(){var a,c,b,e,f,d;this._init=function(){d=new createjs.Container;d.alpha=0;d.visible=!1;s_oStage.addChild(d);var k=createBitmap(s_oSpriteLibrary.getSprite("msg_box"));k.x=0;k.y=0;a=new createjs.Text(TEXT_LEVELCOMPLETED,"48px walibi0615bold","#fff");a.x=CANVAS_WIDTH/2;a.y=CANVAS_HEIGHT/2-80;a.textBaseline="alphabetic";a.textAlign="center";a.shadow=new createjs.Shadow("#000000",3,3,2);c=new createjs.Text(TEXT_MATCH_SCORE,"30px walibi0615bold","#fff");c.x=CANVAS_WIDTH/2;c.y=CANVAS_HEIGHT/
2-20;c.textAlign="center";c.textBaseline="alphabetic";c.shadow=new createjs.Shadow("#000000",2,2,2);b=new createjs.Text(TEXT_TIMEBONUS,"30px walibi0615bold","#fff");b.x=CANVAS_WIDTH/2;b.y=CANVAS_HEIGHT/2+14;b.textAlign="center";b.textBaseline="alphabetic";b.shadow=new createjs.Shadow("#000000",2,2,2);_oMsgLevelScore=new createjs.Text(TEXT_LEVEL_SCORE,"34px walibi0615bold","#fff");_oMsgLevelScore.x=CANVAS_WIDTH/2;_oMsgLevelScore.y=CANVAS_HEIGHT/2+50;_oMsgLevelScore.textAlign="center";_oMsgLevelScore.textBaseline=
"alphabetic";_oMsgLevelScore.shadow=new createjs.Shadow("#000000",2,2,2);e=new createjs.Text(TEXT_TOTALSCORE,"48px walibi0615bold","#fff");e.x=CANVAS_WIDTH/2;e.y=CANVAS_HEIGHT/2+120;e.textAlign="center";e.textBaseline="alphabetic";e.shadow=new createjs.Shadow("#000000",2,2,2);d.addChild(k,a,c,b,_oMsgLevelScore,e);f=new CTextButton(CANVAS_WIDTH/2,580,s_oSpriteLibrary.getSprite("but_menu_bg"),"CONTINUE","walibi0615bold","White","24",d);f.addEventListener(ON_MOUSE_UP,this.hide,this)};this.display=function(a,
f,n,l,p){c.text=TEXT_MATCH_SCORE+" = "+a;b.text=TEXT_TIMEBONUS+" = "+f;_oMsgLevelScore.text=TEXT_LEVEL_SCORE+" = "+n;e.text=TEXT_TOTALSCORE+" "+l;d.visible=!0;createjs.Tween.get(d).to({alpha:1},250);$(s_oMain).trigger("end_level",[p,n,l])};this.hide=function(){d.alpha=0;d.visible=!1;s_oGame.nextLevel()};this.unload=function(){f.unload();s_oStage.removeChild(d)};this._init()}
function CMenu(){var a,c,b,e;this._init=function(){a=createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));s_oStage.addChild(a);var f=s_oSpriteLibrary.getSprite("but_menu_bg");c=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT-75,f,TEXT_PLAY,"walibi0615bold","#ffffff",30,s_oStage);c.addEventListener(ON_MOUSE_UP,this._onButPlayRelease,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)f=s_oSpriteLibrary.getSprite("audio_icon"),b=new CToggle(CANVAS_WIDTH-f.width/2+5,f.height/2+20,f),b.addEventListener(ON_MOUSE_UP,
this._onAudioToggle,this);e=new createjs.Shape;e.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);s_oStage.addChild(e);createjs.Tween.get(e).to({alpha:0},1E3).call(function(){e.visible=!1})};this.unload=function(){c.unload();c=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)b.unload(),b=null;s_oStage.removeAllChildren()};this._onButPlayRelease=function(){this.unload();s_oMain.gotoGame()};this._onAudioToggle=function(){createjs.Sound.setMute(!s_bAudioActive)};this._init()}
function CMain(a){var c=0,b=0,e=STATE_LOADING,f,d,k;this.initContainer=function(){s_oStage=new createjs.Stage("canvas");createjs.Touch.enable(s_oStage);s_bMobile=jQuery.browser.mobile;!1===s_bMobile&&s_oStage.enableMouseOver(20);s_iPrevTime=(new Date).getTime();createjs.Ticker.setFPS(30);createjs.Ticker.addEventListener("tick",this._update);navigator.userAgent.match(/Windows Phone/i)&&(DISABLE_SOUND_MOBILE=!0);!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||this._initSounds();s_oSpriteLibrary=new CSpriteLibrary;
d=new CPreloader;this._loadImages()};this.soundLoaded=function(){c++;c===b&&(d.unload(),this.gotoMenu())};this._initSounds=function(){createjs.Sound.initializeDefaultPlugins()&&(0<navigator.userAgent.indexOf("Opera")||0<navigator.userAgent.indexOf("OPR")?(createjs.Sound.alternateExtensions=["mp3"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/card.ogg","card"),createjs.Sound.registerSound("./sounds/win.ogg","win"),createjs.Sound.registerSound("./sounds/game_over.ogg",
"game_over"),createjs.Sound.registerSound("./sounds/next_level.ogg","next_level"),createjs.Sound.registerSound("./sounds/right.ogg","right")):(createjs.Sound.alternateExtensions=["ogg"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/card.mp3","card"),createjs.Sound.registerSound("./sounds/win.mp3","win"),createjs.Sound.registerSound("./sounds/game_over.mp3","game_over"),createjs.Sound.registerSound("./sounds/next_level.mp3",
"next_level"),createjs.Sound.registerSound("./sounds/right.mp3","right")),b+=5)};this._loadImages=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("but_menu_bg","./sprites/but_menu_bg.png");s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");s_oSpriteLibrary.addSprite("bg_1","./sprites/bg_1.jpg");
s_oSpriteLibrary.addSprite("bg_2","./sprites/bg_2.jpg");s_oSpriteLibrary.addSprite("bg_3","./sprites/bg_3.jpg");s_oSpriteLibrary.addSprite("bg_4","./sprites/bg_4.jpg");s_oSpriteLibrary.addSprite("card_spritesheet","./sprites/card_spritesheet.png");s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");b+=s_oSpriteLibrary.getNumSprites();s_oSpriteLibrary.loadSprites()};this._onImagesLoaded=function(){c++;d.refreshLoader(Math.floor(c/b*100));c===b&&(d.unload(),this.gotoMenu())};this._onAllImagesLoaded=
function(){};this.onAllPreloaderImagesLoaded=function(){this._loadImages()};this.gotoMenu=function(){new CMenu;e=STATE_MENU};this.gotoGame=function(){k=new CGame(f);e=STATE_GAME;$(s_oMain).trigger("game_start")};this.gotoHelp=function(){new CHelp;e=STATE_HELP};this._update=function(a){var b=(new Date).getTime();s_iTimeElaps=b-s_iPrevTime;s_iCntTime+=s_iTimeElaps;s_iCntFps++;s_iPrevTime=b;1E3<=s_iCntTime&&(s_iCurFps=s_iCntFps,s_iCntTime-=1E3,s_iCntFps=0);e===STATE_GAME&&k.update();s_oStage.update(a)};
s_oMain=this;f=a;this.initContainer()}
var s_bMobile,s_bAudioActive=!0,s_iCntTime=0,s_iTimeElaps=0,s_iPrevTime=0,s_iCntFps=0,s_iCurFps=0,s_oDrawLayer,s_oStage,s_oMain,s_oSpriteLibrary,s_oGameSettings,CLevels=function(){var a=CARD_HEIGHT/2+.1*CANVAS_HEIGHT,c=CANVAS_WIDTH/2,b=(CANVAS_HEIGHT-a)/2+a,e=CANVAS_HEIGHT-a;trace("_iEffectiveCanvasHeight: "+e);return function(f){var d=s_aCardsPerLevel[f-1];d>MAX_CARDS&&(d=MAX_CARDS);f={cardZoomFactor:1,cardsNum:d,cardsPos:[],timeAllotted:1E3*s_aSecsPerLevel[f-1]};for(var k=1;.1<=k;k-=.01)for(var h=
2;6>=h;h+=1){var n=Math.floor(d/h);if(n*(CARD_WIDTH*k+30*k)<=CANVAS_WIDTH&&h*(CARD_HEIGHT*k+30*k)<=e&&0===d%h){for(var d=c-(n-1)*(CARD_WIDTH*k+30*k)*.5,l=b-(a+.5*((CARD_HEIGHT*k+30*k)*(h-1)+a)),p=0;p<h;p++)for(var g=0;g<n;g++)f.cardsPos[p*n+g]=[d+(CARD_WIDTH*k+30*k)*g,l+a+(CARD_HEIGHT*k+30*k)*p];f.cardZoomFactor=k;return f}}}}();TEXT_GAMEOVER="GAME OVER";TEXT_PLAY="PLAY";TEXT_LEVEL_SCORE="LEVEL SCORE";TEXT_LEVELCOMPLETED="STAGE CLEARED!";TEXT_TIMELEFT="Time ";TEXT_SCORE="Score ";
TEXT_MATCH_SCORE="SCORE MATCHING";TEXT_TIMEBONUS="TIME BONUS";TEXT_TOTALSCORE="TOTAL SCORE";TEXT_VICTORY="CONGRATULATIONS!!";TEXT_PLAY_AGAIN="PLAY AGAIN";
function CInterface(a){var c,b,e,f,d;this._init=function(a){f=TEXT_TIMELEFT+a;c=new createjs.Text(f,"36px walibi0615bold","#fff");c.x=30;c.y=75;c.textBaseline="alphabetic";c.shadow=new createjs.Shadow("#000000",2,2,2);s_oStage.addChild(c);_szScore=TEXT_SCORE+0;b=new createjs.Text(_szScore,"36px walibi0615bold","#fff");b.x=CANVAS_WIDTH/2;b.y=75;b.textAlign="center";b.textBaseline="alphabetic";b.shadow=new createjs.Shadow("#000000",2,2,2);s_oStage.addChild(b);_oScoreMultText=new createjs.Text("X2",
"150px walibi0615bold","#fff");_oScoreMultText.textAlign="center";_oScoreMultText.textBaseline="alphabetic";_oScoreMultText.x=CANVAS_WIDTH/2;_oScoreMultText.y=CANVAS_HEIGHT/2;_oScoreMultText.shadow=new createjs.Shadow("#000000",2,2,2);_oScoreMultText.scaleX=_oScoreMultText.scaleY=.1;_oScoreMultText.visible=!1;s_oStage.addChild(_oScoreMultText);a=s_oSpriteLibrary.getSprite("but_exit");d=new CGfxButton(CANVAS_WIDTH-a.width/2-20,a.height/2+30,a,s_oStage);d.addEventListener(ON_MOUSE_UP,this._onExit,this);
if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)a=s_oSpriteLibrary.getSprite("audio_icon"),e=new CToggle(CANVAS_WIDTH-a.width/2*2-10,a.height/2+30,a),e.addEventListener(ON_MOUSE_UP,this._onAudioToggle,this)};this.unload=function(){e.unload();d.unload();s_oStage.removeChild(c);s_oStage.removeChild(b)};this.refreshScore=function(a){b.text=TEXT_SCORE+a};this.showMultiplier=function(a){_oScoreMultText.text="X"+a;_oScoreMultText.visible=!0;createjs.Tween.get(_oScoreMultText).to({scaleX:1,scaleY:1},300,createjs.Ease.cubicOut).call(function(){createjs.Tween.get(_oScoreMultText).to({scaleX:.1,
scaleY:.1},300,createjs.Ease.cubicIn).call(function(){_oScoreMultText.visible=!1})})};this.update=function(a){c.text=TEXT_TIMELEFT+a};this._onExit=function(){s_oGame.unload()};this._onAudioToggle=function(){createjs.Sound.setMute(!s_bAudioActive)};s_oInterface=this;this._init(a);return this}var s_oInterface;