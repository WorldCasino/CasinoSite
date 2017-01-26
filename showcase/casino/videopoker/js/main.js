function CSpriteLibrary(){var a,b,c,d,f,g;this.init=function(k,q,p){c=b=0;d=k;f=q;g=p;a={}};this.addSprite=function(c,d){a.hasOwnProperty(c)||(a[c]={szPath:d,oSprite:new Image},b++)};this.getSprite=function(c){return a.hasOwnProperty(c)?a[c].oSprite:null};this._onSpritesLoaded=function(){f.call(g)};this._onSpriteLoaded=function(){d.call(g);++c===b&&this._onSpritesLoaded()};this.loadSprites=function(){for(var c in a)a[c].oSprite.oSpriteLibrary=this,a[c].oSprite.onload=function(){this.oSpriteLibrary._onSpriteLoaded()},
a[c].oSprite.src=a[c].szPath};this.getNumSprites=function(){return b}}
var CANVAS_WIDTH=1024,CANVAS_HEIGHT=768,FPS_TIME=1E3/24,DISABLE_SOUND_MOBILE=!1,STATE_LOADING=0,STATE_MENU=1,STATE_HELP=1,STATE_GAME=3,STATE_GAME_WAITING_FOR_BET=0,STATE_GAME_DEAL=1,STATE_GAME_CHOOSE_HOLD=2,STATE_GAME_DRAW=3,STATE_GAME_EVALUATE=4,ON_CARD_SHOWN="ON_CARD_SHOWN",ON_CARD_HIDE="ON_CARD_HIDE",ON_MOUSE_DOWN=0,ON_MOUSE_UP=1,ON_MOUSE_OVER=2,ON_MOUSE_OUT=3,ON_DRAG_START=4,ON_DRAG_END=5,ROYAL_FLUSH=0,STRAIGHT_FLUSH=1,FOUR_OF_A_KIND=2,FULL_HOUSE=3,FLUSH=4,STRAIGHT=5,THREE_OF_A_KIND=6,TWO_PAIR=
7,JACKS_OR_BETTER=8,HIGH_CARD=9,CARD_TWO=2,CARD_THREE=3,CARD_FOUR=4,CARD_FIVE=5,CARD_SIX=6,CARD_SEVEN=7,CARD_EIGHT=8,CARD_NINE=9,CARD_TEN=10,CARD_JACK=11,CARD_QUEEN=12,CARD_KING=13,CARD_ACE=14,SUIT_HEARTS=0,SUIT_DIAMONDS=1,SUIT_CLUBS=2,SUIT_SPADES=3,CARD_WIDTH=154,CARD_HEIGHT=240,BET_TYPE,TOTAL_MONEY,NUM_BETS=5,WIN_COMBINATIONS=9,COMBO_PRIZES,AUTOMATIC_RECHARGE;
function CToggle(a,b,c){var d,f,g;this._init=function(a,c,b){d=[];f=[];var h=new createjs.SpriteSheet({images:[b],frames:{width:b.width/2,height:b.height,regX:b.width/2/2,regY:b.height/2},animations:{on:[0,1],off:[1,2]}});g=s_bAudioActive?createSprite(h,"on",b.width/2/2,b.height/2,b.width/2,b.height):createSprite(h,"off",b.width/2/2,b.height/2,b.width/2,b.height);g.x=a;g.y=c;g.stop();s_oStage.addChild(g);this._initListener()};this.unload=function(){g.off("mousedown",this.buttonDown);g.off("pressup",
this.buttonRelease);s_oStage.removeChild(g)};this._initListener=function(){g.on("mousedown",this.buttonDown);g.on("pressup",this.buttonRelease)};this.addEventListener=function(a,c,b){d[a]=c;f[a]=b};this.buttonRelease=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but");g.scaleX=1;g.scaleY=1;(s_bAudioActive=!s_bAudioActive)?g.gotoAndStop("on"):g.gotoAndStop("off");d[ON_MOUSE_UP]&&d[ON_MOUSE_UP].call(f[ON_MOUSE_UP])};this.buttonDown=function(){g.scaleX=.9;g.scaleY=
.9;d[ON_MOUSE_DOWN]&&d[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])};this._init(a,b,c)}
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||
navigator.vendor||window.opera);$(window).resize(function(){sizeHandler()});function trace(a){console.log(a)}$(window).ready(function(){sizeHandler()});window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){window.matchMedia("(orientation: portrait)").matches&&sizeHandler();window.matchMedia("(orientation: landscape)").matches&&sizeHandler()}

function sizeHandler(){window.scrollTo(0,1);if($("#canvas")){var a=CANVAS_WIDTH,b=CANVAS_HEIGHT,c,d;!0===inIframe()&&"ios"==getMobileOperatingSystem()?top.location.href=document.location.href:(c=window.innerWidth,d=window.innerHeight,console.log("h: "+d),multiplier=Math.min(d/b,c/a),a*=multiplier,b*=multiplier,$("#canvas").css("width",a+"px"),$("#canvas").css("height",b+"px"),$("#canvas").css("left",c/2-a/2+"px"))}}
function getMobileOperatingSystem(){var a=navigator.userAgent||navigator.vendor||window.opera;return a.match(/iPad/i)||a.match(/iPhone/i)||a.match(/iPod/i)?"ios":a.match(/Android/i)?"android":"unknown"}function inIframe(){try{return window.self!==window.top}catch(a){return!0}};

function createBitmap(a,b,c){var d=new createjs.Bitmap(a),f=new createjs.Shape;b&&c?f.graphics.beginFill("#fff").drawRect(0,0,b,c):f.graphics.beginFill("#ff0").drawRect(0,0,a.width,a.height);d.hitArea=f;return d}function createSprite(a,b,c,d,f,g){a=null!==b?new createjs.Sprite(a,b):new createjs.Sprite(a);b=new createjs.Shape;b.graphics.beginFill("#000000").drawRect(-c,-d,f,g);a.hitArea=b;return a}
function randomFloatBetween(a,b,c){"undefined"===typeof c&&(c=2);return parseFloat(Math.min(a+Math.random()*(b-a),b).toFixed(c))}function shuffle(a){for(var b=a.length,c,d;0!==b;)d=Math.floor(Math.random()*b),--b,c=a[b],a[b]=a[d],a[d]=c;return a}function formatTime(a){a/=1E3;var b=Math.floor(a/60);a=parseFloat(a-60*b).toFixed(1);var c="",c=10>b?c+("0"+b+":"):c+(b+":");return c=10>a?c+("0"+a):c+a}
Array.prototype.sortOn=function(){var a=this.slice();if(!arguments.length)return a.sort();var b=Array.prototype.slice.call(arguments);return a.sort(function(a,d){for(var f=b.slice(),g=f.shift();a[g]==d[g]&&f.length;)g=f.shift();return a[g]==d[g]?0:a[g]>d[g]?1:-1})};function roundDecimal(a,b){var c=Math.pow(10,b);return Math.round(c*a)/c}function tweenVectors(a,b,c,d){d.set(a.getX()+c*(b.getX()-a.getX()),a.getY()+c*(b.getY()-a.getY()));return d}
function NoClickDelay(a){this.element=a;window.Touch&&this.element.addEventListener("touchstart",this,!1)}
NoClickDelay.prototype={handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a)}},onTouchStart:function(a){a.preventDefault();this.moved=!1;this.element.addEventListener("touchmove",this,!1);this.element.addEventListener("touchend",this,!1)},onTouchMove:function(a){this.moved=!0},onTouchEnd:function(a){this.element.removeEventListener("touchmove",this,!1);this.element.removeEventListener("touchend",
this,!1);if(!this.moved){a=document.elementFromPoint(a.changedTouches[0].clientX,a.changedTouches[0].clientY);3===a.nodeType&&(a=a.parentNode);var b=document.createEvent("MouseEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}}};
function CTextButton(a,b,c,d,f,g,k,q){var p,h,n,r,m,l,s,t,e,u;this._init=function(a,c,b,d,g,f,k,q){p=!1;r=[];m=[];u=q;s=createBitmap(b);h=b.width;n=b.height;q=Math.ceil(k/20);t=new createjs.Text(d,"bold "+k+"px "+g,"#000000");var v=t.getBounds();t.textAlign="center";t.textBaseline="alphabetic";t.x=b.width/2+q;t.y=Math.floor(b.height/2)+v.height/3+q;e=new createjs.Text(d,"bold "+k+"px "+g,f);e.textAlign="center";e.textBaseline="alphabetic";e.x=b.width/2;e.y=Math.floor(b.height/2)+v.height/3;l=new createjs.Container;
l.x=a;l.y=c;l.regX=b.width/2;l.regY=b.height/2;l.addChild(s,t,e);u.addChild(l);this._initListener()};this.unload=function(){l.off("mousedown");l.off("pressup");u.removeChild(l)};this.setVisible=function(a){l.visible=a};this.enable=function(){p=!1;s.filters=[];s.cache(0,0,h,n)};this.disable=function(){p=!0;var a=(new createjs.ColorMatrix).adjustSaturation(-100);s.filters=[new createjs.ColorMatrixFilter(a)];s.cache(0,0,h,n)};this._initListener=function(){oParent=this;l.on("mousedown",this.buttonDown);
l.on("pressup",this.buttonRelease)};this.addEventListener=function(a,c,b){r[a]=c;m[a]=b};this.buttonRelease=function(){p||(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but"),l.scaleX=1,l.scaleY=1,r[ON_MOUSE_UP]&&r[ON_MOUSE_UP].call(m[ON_MOUSE_UP]))};this.buttonDown=function(){p||(l.scaleX=.9,l.scaleY=.9,r[ON_MOUSE_DOWN]&&r[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN]))};this.setPosition=function(a,c){l.x=a;l.y=c};this.changeText=function(a){e.text=a;t.text=a};this.setX=function(a){l.x=
a};this.setY=function(a){l.y=a};this.getButtonImage=function(){return l};this.getX=function(){return l.x};this.getY=function(){return l.y};this._init(a,b,c,d,f,g,k,q);return this}
function CPreloader(){var a,b,c,d,f;this._init=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("bg_preloader","./sprites/bg_preloader.jpg");s_oSpriteLibrary.addSprite("progress_bar","./sprites/progress_bar.png");s_oSpriteLibrary.loadSprites();f=new createjs.Container;s_oStage.addChild(f)};this.unload=function(){f.removeAllChildren()};this._onImagesLoaded=function(){};this._onAllImagesLoaded=function(){this.attachSprites();s_oMain.preloaderReady()};
this.attachSprites=function(){var g=createBitmap(s_oSpriteLibrary.getSprite("bg_preloader"));f.addChild(g);c=createBitmap(s_oSpriteLibrary.getSprite("progress_bar"));c.x=261;c.y=CANVAS_HEIGHT-99;f.addChild(c);a=476;d=new createjs.Shape;d.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(261,CANVAS_HEIGHT-99,1,30);f.addChild(d);c.mask=d;b=new createjs.Text("0%","30px OpenSans-BoldItalic","#fff");b.x=300;b.y=CANVAS_HEIGHT-105;b.textAlign="center";b.textBaseline="middle";f.addChild(b)};this.refreshLoader=
function(c){b.text=c+"%";c=Math.floor(c*a/100);d.graphics.clear();d.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(261,CANVAS_HEIGHT-99,c,30)};this._init()}function CPayTableSettings(){var a;this._init=function(){a=[];for(var b=0;b<NUM_BETS;b++){a[b]=[];for(var c=0;c<WIN_COMBINATIONS;c++)a[b][c]=COMBO_PRIZES[c]*(b+1)}};this.getWin=function(b,c){return a[b][c]};this._init()}
function CPayTable(a,b){var c,d,f,g,k;this._init=function(a,b){c=0;k=new createjs.Container;k.x=a;k.y=b;s_oStage.addChild(k);var h=createBitmap(s_oSpriteLibrary.getSprite("paytable"));k.addChild(h);var h=278,n=4;d=[];for(var r=0;r<NUM_BETS;r++){var m=createBitmap(s_oSpriteLibrary.getSprite("selection"));m.visible=!1;m.x=h;m.y=n;k.addChild(m);d.push(m);h+=100}h=275;n=27;g=[];for(r=0;r<WIN_COMBINATIONS;r++)m=new createjs.Text(TEXT_COMBO[r],"bold 22px Arial","#fff000"),m.x=h,m.y=n,m.textAlign="right",
m.textBaseline="middle",k.addChild(m),n+=22,g[r]=m;h=375;f=[];for(r=0;r<NUM_BETS;r++){n=27;f[r]=[];for(m=0;m<WIN_COMBINATIONS;m++){var l=new createjs.Text(s_oPayTableSettings.getWin(r,m),"bold 22px Arial","#fff000");l.x=h;l.y=n;l.textAlign="right";l.textBaseline="middle";k.addChild(l);n+=22;f[r][m]=l}h+=100}};this.resetHand=function(){createjs.Tween.removeAllTweens();for(var a=0;a<NUM_BETS;a++)for(var c=0;c<WIN_COMBINATIONS;c++)f[a][c].alpha=1;for(a=0;a<WIN_COMBINATIONS;a++)g[a].alpha=1};this.setCreditColumn=
function(a){for(var c=0;c<NUM_BETS;c++)d[c].visible=!1;d[a].visible=!0};this.showWinAnim=function(a,b){var d=this;createjs.Tween.get(f[a][b]).to({alpha:c},100).call(function(){d.showWinAnim(a,b)});createjs.Tween.get(g[b]).to({alpha:c},100);c=1===c?0:1};this._init(a,b)}
function CMenu(){var a,b,c,d;this._init=function(){a=createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));s_oStage.addChild(a);var f=s_oSpriteLibrary.getSprite("but_menu_bg");b=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT-164,f,TEXT_PLAY,"Arial","#ffffff",40,s_oStage);b.addEventListener(ON_MOUSE_UP,this._onButPlayRelease,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)f=s_oSpriteLibrary.getSprite("audio_icon"),c=new CToggle(CANVAS_WIDTH-f.width/2+20,f.height/2+20,f),c.addEventListener(ON_MOUSE_UP,
this._onAudioToggle,this);d=new createjs.Shape;d.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);s_oStage.addChild(d);createjs.Tween.get(d).to({alpha:0},500).call(function(){d.visible=!1});s_oSoundTrack.setVolume(1)};this.unload=function(){b.unload();b=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)c.unload(),c=null;s_oStage.removeChild(a);a=null;s_oStage.removeChild(d);d=null};this._onButPlayRelease=function(){this.unload();s_oMain.gotoGame()};this._onAudioToggle=function(){createjs.Sound.setMute(!s_bAudioActive)};
this._init()}
function CMain(a){var b=0,c=0,d=STATE_LOADING,f,g,k;this.initContainer=function(){var a=document.getElementById("canvas");s_oStage=new createjs.Stage(a);createjs.Touch.enable(s_oStage);s_bMobile=jQuery.browser.mobile;!1===s_bMobile&&s_oStage.enableMouseOver(20);s_iPrevTime=(new Date).getTime();createjs.Ticker.setFPS(30);createjs.Ticker.addEventListener("tick",this._update);s_oSpriteLibrary=new CSpriteLibrary;g=new CPreloader};this.soundLoaded=function(){b++;g.refreshLoader(Math.floor(b/c*100));b===
c&&this.removePreloader()};this._initSounds=function(){createjs.Sound.initializeDefaultPlugins()&&(0<navigator.userAgent.indexOf("Opera")||0<navigator.userAgent.indexOf("OPR")?(createjs.Sound.alternateExtensions=["mp3"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/soundtrack.ogg","soundtrack"),createjs.Sound.registerSound("./sounds/card.ogg","card"),createjs.Sound.registerSound("./sounds/press_but.ogg","press_but"),createjs.Sound.registerSound("./sounds/win.ogg",
"win"),createjs.Sound.registerSound("./sounds/lose.ogg","lose"),createjs.Sound.registerSound("./sounds/press_hold.ogg","press_hold")):(createjs.Sound.alternateExtensions=["ogg"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/soundtrack.mp3","soundtrack"),createjs.Sound.registerSound("./sounds/card.mp3","card"),createjs.Sound.registerSound("./sounds/press_but.mp3","press_but"),createjs.Sound.registerSound("./sounds/win.mp3",
"win"),createjs.Sound.registerSound("./sounds/lose.mp3","lose"),createjs.Sound.registerSound("./sounds/press_hold.mp3","press_hold")),c+=6)};this._loadImages=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("but_menu_bg","./sprites/but_menu_bg.png");s_oSpriteLibrary.addSprite("but_game_bg","./sprites/but_game_bg.png");s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");
s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");s_oSpriteLibrary.addSprite("card_spritesheet","./sprites/card_spritesheet.png");s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");s_oSpriteLibrary.addSprite("but_left","./sprites/but_left.png");s_oSpriteLibrary.addSprite("but_right","./sprites/but_right.png");s_oSpriteLibrary.addSprite("hold","./sprites/hold.png");s_oSpriteLibrary.addSprite("logo_game","./sprites/logo_game.png");
s_oSpriteLibrary.addSprite("paytable","./sprites/paytable.png");s_oSpriteLibrary.addSprite("display_bg","./sprites/display_bg.png");s_oSpriteLibrary.addSprite("big_display","./sprites/big_display.png");s_oSpriteLibrary.addSprite("selection","./sprites/selection.png");s_oSpriteLibrary.addSprite("card_selection","./sprites/card_selection.png");c+=s_oSpriteLibrary.getNumSprites();s_oSpriteLibrary.loadSprites()};this._onImagesLoaded=function(){b++;g.refreshLoader(Math.floor(b/c*100));b===c&&this.removePreloader()};
this.preloaderReady=function(){this._loadImages();!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||this._initSounds()};this.removePreloader=function(){g.unload();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundTrack=createjs.Sound.play("soundtrack",{loop:-1});this.gotoMenu()};this._onAllImagesLoaded=function(){};this.onAllPreloaderImagesLoaded=function(){this._loadImages()};this.gotoMenu=function(){new CMenu;d=STATE_MENU};this.gotoGame=function(){k=new CGame(f);d=STATE_GAME;$(s_oMain).trigger("game_start")};
this.gotoHelp=function(){new CHelp;d=STATE_HELP};this._update=function(a){var c=(new Date).getTime();s_iTimeElaps=c-s_iPrevTime;s_iCntTime+=s_iTimeElaps;s_iCntFps++;s_iPrevTime=c;1E3<=s_iCntTime&&(s_iCurFps=s_iCntFps,s_iCntTime-=1E3,s_iCntFps=0);d===STATE_GAME&&k.update();s_oStage.update(a)};s_oMain=this;f=a;this.initContainer()}var s_bMobile,s_bAudioActive=!0,s_iCntTime=0,s_iTimeElaps=0,s_iPrevTime=0,s_iCntFps=0,s_iCurFps=0,s_oDrawLayer,s_oStage,s_oMain,s_oSpriteLibrary,s_oSoundTrack;
TEXT_GAMEOVER="GAME OVER";TEXT_PLAY="PLAY";TEXT_BET="BET";TEXT_WIN="WIN";TEXT_MONEY="MONEY";TEXT_DEAL="DEAL";TEXT_BET_ONE="BET ONE";TEXT_MAX_BET="BET MAX";TEXT_RECHARGE="RECHARGE";TEXT_EXIT="EXIT";TEXT_DRAW="DRAW";TEXT_NO_WIN="NO WIN";TEXT_CURRENCY="$";TEXT_COMBO="Royal Flush;Straight Flush;Four of a Kind;Full House;Flush;Straight;Three of a Kind;Two Pairs;Jacks or Better".split(";");
function CInterface(a,b){var c,d,f,g,k,q,p,h,n,r,m,l;this._init=function(a,b){var e=s_oSpriteLibrary.getSprite("but_exit");c=new CGfxButton(CANVAS_WIDTH-e.width/2-15,e.height/2+15,e,s_oStage);c.addEventListener(ON_MOUSE_UP,this._onExit,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)p=new CToggle(c.getX()-e.width,e.height/2+15,s_oSpriteLibrary.getSprite("audio_icon")),p.addEventListener(ON_MOUSE_UP,this._onAudioToggle,this);e=createBitmap(s_oSpriteLibrary.getSprite("display_bg"));e.x=39;e.y=25;
s_oStage.addChild(e);e=new createjs.Text(TEXT_WIN,"21px OpenSans-BoldItalic","#fff");e.x=50;e.y=32;e.textAlign="center";e.textBaseline="middle";s_oStage.addChild(e);e=createBitmap(s_oSpriteLibrary.getSprite("display_bg"));e.x=39;e.y=93;s_oStage.addChild(e);e=new createjs.Text(TEXT_BET,"21px OpenSans-BoldItalic","#fff");e.x=50;e.y=100;e.textAlign="center";e.textBaseline="middle";s_oStage.addChild(e);e=createBitmap(s_oSpriteLibrary.getSprite("display_bg"));e.x=39;e.y=687;s_oStage.addChild(e);e=new createjs.Text(TEXT_MONEY,
"21px OpenSans-BoldItalic","#fff");e.x=50;e.y=695;e.textAlign="center";e.textBaseline="middle";s_oStage.addChild(e);h=new createjs.Text(a.toFixed(2)+TEXT_CURRENCY,"bold 29px Digital-7","#ffde00");h.x=150;h.y=CANVAS_HEIGHT-65;h.textAlign="center";s_oStage.addChild(h);r=new createjs.Text("0"+TEXT_CURRENCY,"bold 29px Digital-7","#ffde00");r.x=150;r.y=110;r.textAlign="center";s_oStage.addChild(r);n=new createjs.Text("0"+TEXT_CURRENCY,"bold 29px Digital-7","#ffde00");n.x=150;n.y=40;n.textAlign="center";
s_oStage.addChild(n);e=createBitmap(s_oSpriteLibrary.getSprite("big_display"));e.x=348;e.y=686;s_oStage.addChild(e);m=new createjs.Text(b.toFixed(2)+TEXT_CURRENCY,"bold 40px Digital-7","#ffde00");m.x=414;m.y=700;m.textAlign="center";s_oStage.addChild(m);e=createBitmap(s_oSpriteLibrary.getSprite("logo_game"));e.x=348;e.y=17;s_oStage.addChild(e);e=s_oSpriteLibrary.getSprite("but_left");d=new CGfxButton(315,722,e,s_oStage);d.addEventListener(ON_MOUSE_UP,this._onButLeftRelease,this);e=s_oSpriteLibrary.getSprite("but_right");
f=new CGfxButton(515,722,e,s_oStage);f.addEventListener(ON_MOUSE_UP,this._onButRightRelease,this);e=s_oSpriteLibrary.getSprite("but_game_bg");g=new CTextButton(624,716,e,TEXT_BET_ONE,"OpenSans-BoldItalic","#ffffff",23,s_oStage);g.addEventListener(ON_MOUSE_UP,this._onButBetOneRelease,this);k=new CTextButton(774,716,e,TEXT_MAX_BET,"OpenSans-BoldItalic","#ffffff",23,s_oStage);k.addEventListener(ON_MOUSE_UP,this._onButBetMaxRelease,this);q=new CTextButton(924,716,e,TEXT_DEAL,"OpenSans-BoldItalic","#ffffff",
30,s_oStage);q.addEventListener(ON_MOUSE_UP,this._onButDealRelease,this);l=new createjs.Container;l.visible=!1;l.x=260;l.y=500;s_oStage.addChild(l);e=new createjs.Shape;e.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0,0,500,100);l.addChild(e);e=new createjs.Text(TEXT_NO_WIN,"50px OpenSans-BoldItalic","#fff");e.x=250;e.y=30;e.textAlign="center";l.addChild(e)};this.unload=function(){c.unload();d.unload();f.unload();g.unload();k.unload();q.unload();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)p.unload(),
p=null};this.setState=function(a){switch(a){case STATE_GAME_CHOOSE_HOLD:q.changeText(TEXT_DRAW);break;case STATE_GAME_EVALUATE:q.changeText(TEXT_DEAL)}};this.resetHand=function(){this.refreshWin(0);l.visible=!1};this.refreshMoney=function(a,c){h.text=a.toFixed(2)+TEXT_CURRENCY;r.text=c.toFixed(2)+TEXT_CURRENCY};this.refreshWin=function(a){n.text=a.toFixed(2)+TEXT_CURRENCY};this.refreshBet=function(a){m.text=a.toFixed(2)+TEXT_CURRENCY};this.showLosePanel=function(){l.visible=!0};this._onButLeftRelease=
function(){s_oGame._onButLeftRelease()};this._onButRightRelease=function(){s_oGame._onButRightRelease()};this._onButBetOneRelease=function(){s_oGame._onButBetOneRelease()};this._onButBetMaxRelease=function(){s_oGame._onButBetMaxRelease()};this._onButDealRelease=function(){s_oGame._onButDealRelease()};this._onExit=function(){s_oGame.onExit()};this._onAudioToggle=function(){createjs.Sound.setMute(!s_bAudioActive)};s_oInterface=this;this._init(a,b);return this}var s_oInterface;
function CHandEvaluator(){var a,b;this.evaluate=function(c){a=[];for(var d=0;d<c.length;d++)a[d]={rank:c[d].getRank(),suit:c[d].getSuit()};a.sort(this.compareRank);b=[0,1,2,3,4];return this.rankHand()};this.rankHand=function(){if(this._checkForRoyalFlush())return ROYAL_FLUSH;if(this._checkForStraightFlush())return STRAIGHT_FLUSH;if(this._checkForFourOfAKind())return FOUR_OF_A_KIND;if(this._checkForFullHouse())return FULL_HOUSE;if(this._checkForFlush())return FLUSH;if(this._checkForStraight())return STRAIGHT;
if(this._checkForThreeOfAKind())return THREE_OF_A_KIND;if(this._checkForTwoPair())return TWO_PAIR;if(this._checkForOnePair())return JACKS_OR_BETTER;this._identifyHighCard();return HIGH_CARD};this._checkForRoyalFlush=function(){return this._isRoyalStraight()&&this._isFlush()?!0:!1};this._checkForStraightFlush=function(){return this._isStraight()&&this._isFlush()?!0:!1};this._checkForFourOfAKind=function(){return a[0].rank===a[3].rank?(a.splice(4,1),b.splice(4,1),!0):a[1].rank===a[4].rank?(a.splice(0,
1),b.splice(0,1),!0):!1};this._checkForFullHouse=function(){return a[0].rank===a[1].rank&&a[2].rank===a[4].rank||a[0].rank===a[2].rank&&a[3].rank===a[4].rank?!0:!1};this._checkForFlush=function(){return this._isFlush()?!0:!1};this._checkForStraight=function(){return this._isStraight()?!0:!1};this._checkForThreeOfAKind=function(){return a[0].rank===a[1].rank&&a[0].rank===a[2].rank?(a.splice(3,1),a.splice(3,1),b.splice(3,1),b.splice(3,1),!0):a[1].rank===a[2].rank&&a[1].rank===a[3].rank?(a.splice(0,
1),a.splice(3,1),b.splice(0,1),b.splice(3,1),!0):a[2].rank===a[3].rank&&a[2].rank===a[4].rank?(a.splice(0,1),a.splice(0,1),b.splice(0,1),b.splice(0,1),!0):!1};this._checkForTwoPair=function(){return a[0].rank===a[1].rank&&a[2].rank===a[3].rank?(a.splice(4,1),b.splice(4,1),!0):a[1].rank===a[2].rank&&a[3].rank===a[4].rank?(a.splice(0,1),b.splice(0,1),!0):a[0].rank===a[1].rank&&a[3].rank===a[4].rank?(a.splice(2,1),b.splice(2,1),!0):!1};this._checkForOnePair=function(){for(var c=0;4>c;c++)if(a[c].rank===
a[c+1].rank&&a[c].rank>CARD_TEN){var d=a[c],f=a[c+1];a=[];a.push(d);a.push(f);b=[c,c+1];return!0}return!1};this._identifyHighCard=function(){for(var c=0;4>c;c++)a.splice(0,1)};this._isFlush=function(){return a[0].suit===a[1].suit&&a[0].suit===a[2].suit&&a[0].suit===a[3].suit&&a[0].suit===a[4].suit?!0:!1};this._isRoyalStraight=function(){return a[0].rank===CARD_TEN&&a[1].rank===CARD_JACK&&a[2].rank===CARD_QUEEN&&a[3].rank===CARD_KING&&a[4].rank===CARD_ACE?!0:!1};this._isStraight=function(){var c=a[0].rank+
1===a[1].rank&&a[1].rank+1===a[2].rank&&a[2].rank+1===a[3].rank;return c&&a[0].rank===CARD_TWO&&a[4].rank===CARD_ACE?!0:c&&a[3].rank+1===a[4].rank?!0:!1};this.compareRank=function(a,b){return a.rank<b.rank?-1:a.rank>b.rank?1:0};this.getSortedHand=function(){return a};this.getCardIndexInCombo=function(){return b}}
function CGfxButton(a,b,c){var d,f,g,k,q,p=[],h;this._init=function(a,c,b){d=!1;k=[];q=[];f=b.width;g=b.height;h=createBitmap(b);h.x=a;h.y=c;h.regX=b.width/2;h.regY=b.height/2;s_oStage.addChild(h);this._initListener()};this.unload=function(){h.off("mousedown",this.buttonDown);h.off("pressup",this.buttonRelease);s_oStage.removeChild(h)};this.setVisible=function(a){h.visible=a};this._initListener=function(){h.on("mousedown",this.buttonDown);h.on("pressup",this.buttonRelease)};this.addEventListener=
function(a,c,b){k[a]=c;q[a]=b};this.addEventListenerWithParams=function(a,c,b,d){k[a]=c;q[a]=b;p=d};this.buttonRelease=function(){d||(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but"),h.scaleX=1,h.scaleY=1,k[ON_MOUSE_UP]&&k[ON_MOUSE_UP].call(q[ON_MOUSE_UP],p))};this.buttonDown=function(){d||(h.scaleX=.9,h.scaleY=.9,k[ON_MOUSE_DOWN]&&k[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN],p))};this.setPosition=function(a,c){h.x=a;h.y=c};this.setX=function(a){h.x=a};this.setY=function(a){h.y=
a};this.enable=function(){d=!1;h.filters=[];h.cache(0,0,f,g)};this.disable=function(){d=!0;var a=(new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);h.filters=[new createjs.ColorMatrixFilter(a)];h.cache(0,0,f,g)};this.getButtonImage=function(){return h};this.getX=function(){return h.x};this.getY=function(){return h.y};this._init(a,b,c);return this}
function CGameSettings(){var a,b;this._init=function(){var c=-1;a=[];for(var b=0;52>b;b++){var f=(b+1)%13;1===f?(f=14,c++):0===f&&(f=13);a.push({fotogram:b,rank:f,suit:c})}};this.timeToString=function(a){a=Math.round(a/1E3);var b=Math.floor(a/60);a-=60*b;var f="",f=10>b?f+("0"+b+":"):f+(b+":");return 10>a?f+("0"+a):f+a};this.getShuffledCardDeck=function(){for(var c=[],d=0;d<a.length;d++)c[d]=a[d];for(b=[];0<c.length;)b.push(c.splice(Math.round(Math.random()*(c.length-1)),1)[0]);return b};this.getCardValue=
function(a){return(void 0)[a]};this._init()}
function CGameOver(){var a,b,c,d;this._init=function(){d=new createjs.Container;s_oStage.addChild(d);var f=createBitmap(s_oSpriteLibrary.getSprite("msg_box"));d.addChild(f);a=new createjs.Text(TEXT_GAMEOVER,"bold 32px Arial","#fff");a.textAlign="center";a.x=CANVAS_WIDTH/2;a.y=290;a.shadow=new createjs.Shadow("#000000",2,2,2);d.addChild(a);b=new CTextButton(CANVAS_WIDTH/2-100,450,s_oSpriteLibrary.getSprite("but_game_bg"),TEXT_RECHARGE,"Arial","#fff",14,d);b.addEventListener(ON_MOUSE_UP,this._onRecharge,
this);c=new CTextButton(CANVAS_WIDTH/2+100,450,s_oSpriteLibrary.getSprite("but_game_bg"),TEXT_EXIT,"Arial","#fff",14,d);c.addEventListener(ON_MOUSE_UP,this._onExit,this);this.hide()};this.unload=function(){b.unload();c.unload()};this.show=function(){d.visible=!0};this.hide=function(){d.visible=!1};this._onRecharge=function(){AUTOMATIC_RECHARGE&&s_oGame.recharge();$(s_oMain).trigger("recharge")};this._onExit=function(){s_oGame.onExit()};this._init()}
function CGame(a){var b,c,d,f,g,k,q,p,h,n,r,m,l,s,t,e,u;this._init=function(){s_oPayTableSettings=new CPayTableSettings;c=TOTAL_MONEY;l=createBitmap(s_oSpriteLibrary.getSprite("bg_game"));s_oStage.addChild(l);u=new createjs.Container;u.x=150;u.y=530;s_oStage.addChild(u);t=new CPayTable(120,149);b=!1;f=k=g=0;d=parseFloat(BET_TYPE[g]*(k+1));t.setCreditColumn(k);p=STATE_GAME_WAITING_FOR_BET;s=new CInterface(c,BET_TYPE[g]);e=new CGameOver;r=new CGameSettings;m=new CHandEvaluator;q=0;n=[];n=r.getShuffledCardDeck();
this.placeFakeCardForStarting();!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||s_oSoundTrack.setVolume(.5)};this.unload=function(){s.unload();e.unload();s_oStage.removeAllChildren()};this.resetHand=function(){q=f=0;n=[];n=r.getShuffledCardDeck();for(var a=0;a<h.length;a++)h[a].reset();s.resetHand();t.resetHand();this.checkMoney();b=!1;p=STATE_GAME_WAITING_FOR_BET};this.checkMoney=function(){c<d&&(k=g=0,d=parseFloat(BET_TYPE[g]*(k+1)),c<d?this._gameOver():(s.refreshMoney(c,d),s.refreshBet(BET_TYPE[g])))};
this.changeState=function(a){};this.placeFakeCardForStarting=function(){for(var a={images:[s_oSpriteLibrary.getSprite("card_spritesheet")],frames:{width:CARD_WIDTH,height:CARD_HEIGHT,regX:CARD_WIDTH/2,regY:CARD_HEIGHT/2},animations:{card_1_1:[0],card_1_2:[1],card_1_3:[2],card_1_4:[3],card_1_5:[4],card_1_6:[5],card_1_7:[6],card_1_8:[7],card_1_9:[8],card_1_10:[9],card_1_J:[10],card_1_Q:[11],card_1_K:[12],card_2_1:[13],card_2_2:[14],card_2_3:[15],card_2_4:[16],card_2_5:[17],card_2_6:[18],card_2_7:[19],
card_2_8:[20],card_2_9:[21],card_2_10:[22],card_2_J:[23],card_2_Q:[24],card_2_K:[25],card_3_1:[26],card_3_2:[27],card_3_3:[28],card_3_4:[29],card_3_5:[30],card_3_6:[31],card_3_7:[32],card_3_8:[33],card_3_9:[34],card_3_10:[35],card_3_J:[36],card_3_Q:[37],card_3_K:[38],card_4_1:[39],card_4_2:[40],card_4_3:[41],card_4_4:[42],card_4_5:[43],card_4_6:[44],card_4_7:[45],card_4_8:[46],card_4_9:[47],card_4_10:[48],card_4_J:[49],card_4_Q:[50],card_4_K:[51],back:[52]}},c=0,b=0;5>b;b++){var d=new createjs.SpriteSheet(a),
d=createSprite(d,"back",CARD_WIDTH/2,CARD_HEIGHT/2,CARD_WIDTH,CARD_HEIGHT);d.x=c;d.y=0;d.shadow=new createjs.Shadow("#000000",5,5,5);u.addChild(d);c+=180}};this.dealCards=function(){if(!(b||0>=c)){b=!0;u.removeAllChildren();var a=0;h=[];for(var e=0;5>e;e++){var f=new CCard(a,0,u,n[q].fotogram,n[q].rank,n[q].suit);f.addEventListener(ON_CARD_SHOWN,this._onCardShown);f.addEventListener(ON_CARD_HIDE,this._onCardHide);h.push(f);q++;a+=180;f.showCard()}c-=d;c=parseFloat(c.toFixed(2));s.refreshMoney(c,d);
!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("card");p=STATE_GAME_DEAL}};this.drawCards=function(){if(!b){b=!0;!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("card");for(var a=h.length,c=0;c<h.length;c++)!1===h[c].isHold()&&(h[c].hideCard(),a--);a===h.length&&(p=STATE_GAME_DRAW,this._onCardShown())}};this.assignWin=function(a){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("win");for(var b=m.getSortedHand(),e=0;e<h.length;e++)for(var g=0;g<b.length;g++)if(b[g].rank===
h[e].getRank()&&b[g].suit===h[e].getSuit()){h[e].highlight();break}t.showWinAnim(k,a);f=s_oPayTableSettings.getWin(k,a)*d;c+=f;c=parseFloat(c.toFixed(2));s.refreshWin(f);s.refreshMoney(c,d)};this.recharge=function(){c=TOTAL_MONEY;t.setCreditColumn(k);this.checkMoney();s.refreshMoney(c,d);s.refreshBet(BET_TYPE[g]);e.hide()};this._gameOver=function(){e.show()};this.onCardSelected=function(a){p===STATE_GAME_CHOOSE_HOLD&&a.toggleHold()};this._onCardShown=function(){if(p!==STATE_GAME_CHOOSE_HOLD){switch(p){case STATE_GAME_DEAL:p=
STATE_GAME_CHOOSE_HOLD;s.setState(p);break;case STATE_GAME_DRAW:var a=m.evaluate(h);s.setState(p);a!==HIGH_CARD?s_oGame.assignWin(a):(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("lose"),s.showLosePanel());$(s_oMain).trigger("end_hand",[c,f]);p=STATE_GAME_EVALUATE;break;case STATE_GAME_EVALUATE:s.setState(p)}b=!1}};this._onCardHide=function(){if(p!==STATE_GAME_DRAW){p=STATE_GAME_DRAW;for(var a=0;5>a;a++)!1===h[a].isHold()?(h[a].changeInfo(n[q].fotogram,n[q].rank,n[q].suit),h[a].showCard(),
q++):h[a].setHold(!1)}};this._onButDealRelease=function(){switch(p){case STATE_GAME_WAITING_FOR_BET:this.dealCards();break;case STATE_GAME_CHOOSE_HOLD:this.drawCards();break;case STATE_GAME_EVALUATE:this.resetHand(),this.dealCards()}};this._onButLeftRelease=function(){if(0!==g&&!b){g--;var a=parseFloat(BET_TYPE[g]*(k+1));c<a||(d=a,s.refreshMoney(c,d),s.refreshBet(BET_TYPE[g]))}};this._onButRightRelease=function(){if(g!==BET_TYPE.length-1&&!b){g++;var a=parseFloat(BET_TYPE[g]*(k+1));c<a||(d=a,s.refreshMoney(c,
d),s.refreshBet(BET_TYPE[g]))}};this._onButBetOneRelease=function(){if(!b){k++;k===NUM_BETS&&(k=0);var a=parseFloat(BET_TYPE[g]*(k+1));c<a||(d=a,s.refreshMoney(c,d),t.setCreditColumn(k))}};this._onButBetMaxRelease=function(){if(!b&&p===STATE_GAME_EVALUATE){b=!0;k=NUM_BETS-1;var a=parseFloat(BET_TYPE[g]*(k+1));c<a?this._gameOver():(d=a,s.refreshMoney(c,d),t.setCreditColumn(k),this.resetHand(),this.dealCards())}};this.onExit=function(){this.unload();s_oMain.gotoMenu();$(s_oMain).trigger("restart")};
this.update=function(){};s_oGame=this;BET_TYPE=a.bets;COMBO_PRIZES=a.combo_prizes;TOTAL_MONEY=a.money;AUTOMATIC_RECHARGE=a.recharge;this._init()}var s_oGame,s_oPayTableSettings;
function CCard(a,b,c,d,f,g){var k,q,p,h,n,r,m,l,s,t,e,u;this._init=function(a,c,b,d,f,g){k=!1;e=b;q=d;p=f;h=g;b=s_oSpriteLibrary.getSprite("card_spritesheet");b=new createjs.SpriteSheet({images:[b],frames:{width:CARD_WIDTH,height:CARD_HEIGHT,regX:CARD_WIDTH/2,regY:CARD_HEIGHT/2},animations:{card_1_1:[0],card_1_2:[1],card_1_3:[2],card_1_4:[3],card_1_5:[4],card_1_6:[5],card_1_7:[6],card_1_8:[7],card_1_9:[8],card_1_10:[9],card_1_J:[10],card_1_Q:[11],card_1_K:[12],card_2_1:[13],card_2_2:[14],card_2_3:[15],
card_2_4:[16],card_2_5:[17],card_2_6:[18],card_2_7:[19],card_2_8:[20],card_2_9:[21],card_2_10:[22],card_2_J:[23],card_2_Q:[24],card_2_K:[25],card_3_1:[26],card_3_2:[27],card_3_3:[28],card_3_4:[29],card_3_5:[30],card_3_6:[31],card_3_7:[32],card_3_8:[33],card_3_9:[34],card_3_10:[35],card_3_J:[36],card_3_Q:[37],card_3_K:[38],card_4_1:[39],card_4_2:[40],card_4_3:[41],card_4_4:[42],card_4_5:[43],card_4_6:[44],card_4_7:[45],card_4_8:[46],card_4_9:[47],card_4_10:[48],card_4_J:[49],card_4_Q:[50],card_4_K:[51],
back:[52]}});m=createSprite(b,"back",CARD_WIDTH/2,CARD_HEIGHT/2,CARD_WIDTH,CARD_HEIGHT);m.x=a;m.y=c;m.stop();m.shadow=new createjs.Shadow("#000000",5,5,5);e.addChild(m);b=s_oSpriteLibrary.getSprite("hold");l=createBitmap(b);l.regX=b.width/2;l.x=a;l.y=c+76;l.visible=!1;e.addChild(l);b=s_oSpriteLibrary.getSprite("card_selection");t=createBitmap(b);t.x=a;t.y=c;t.regX=b.width/2;t.regY=b.height/2;t.visible=!1;e.addChild(t);s=new createjs.Shape;s.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(a-
CARD_WIDTH/2,c-CARD_HEIGHT/2,CARD_WIDTH,CARD_HEIGHT);s.on("click",this._onSelected);e.addChild(s);n=[];r=[]};this.unload=function(){e.removeChild(m)};this.reset=function(){k=!1;t.visible=!1;m.shadow=new createjs.Shadow("#000000",5,5,5)};this.addEventListener=function(a,b,c){n[a]=b;r[a]=c};this.changeInfo=function(a,b,c){q=a;p=b;h=c};this.setValue=function(){m.gotoAndStop(q);var a=this;createjs.Tween.get(m).to({scaleX:1},200).call(function(){a.cardShown()})};this.setHold=function(a){k=a;l.visible=
k};this.toggleHold=function(){k=!k;l.visible=k;!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_hold")};this.showCard=function(){var a=this;createjs.Tween.get(m).to({scaleX:.1},200).call(function(){a.setValue()})};this.hideCard=function(){var a=this;createjs.Tween.get(m).to({scaleX:.1},200).call(function(){a.setBack()})};this.setBack=function(){m.gotoAndStop("back");var a=this;createjs.Tween.get(m).to({scaleX:1},200).call(function(){a.cardHidden()})};this.cardShown=function(){n[ON_CARD_SHOWN]&&
n[ON_CARD_SHOWN].call(r[ON_CARD_SHOWN])};this.cardHidden=function(){n[ON_CARD_HIDE]&&n[ON_CARD_HIDE].call(r[ON_CARD_HIDE],this)};this.highlight=function(){m.shadow=new createjs.Shadow("#fff000",0,0,15);t.visible=!0};this._onSelected=function(){s_oGame.onCardSelected(u)};this.getRank=function(){return p};this.getSuit=function(){return h};this.getFotogram=function(){return q};this.isHold=function(){return k};u=this;this._init(a,b,c,d,f,g)};