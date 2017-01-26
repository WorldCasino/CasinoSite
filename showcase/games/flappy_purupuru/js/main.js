TEXT_GAMEOVER="GAME OVER";TEXT_CONGRATS="CONGRATULATIONS";TEXT_SCORE="SCORE";TEXT_BEST_SCORE="BEST SCORE";TEXT_TIME="TIME";TEXT_PLAY="PLAY";TEXT_HELP="TAP THE SCREEN TO JUMP AND AVOID THE OBSTACLES";
function CInterface(){var a,d,b,c,f,e;this._init=function(){var h=this;c=new createjs.Text(TEXT_SCORE+": 0","bold 42px chewyregular","#000000");c.y=42;s_oStage.addChild(c);f=new createjs.Text(TEXT_SCORE+": 0","bold 42px chewyregular","#fd82d9");f.y=40;s_oStage.addChild(f);c.x=CANVAS_WIDTH/2+2;f.x=CANVAS_WIDTH/2;c.textAlign="center";f.textAlign="center";e=new CHelpPanel(0,0,s_oSpriteLibrary.getSprite("bg_help"));b=new createjs.Shape;b.graphics.beginFill("white").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
b.alpha=.01;s_oStage.addChild(b);b.on("pressup",function(){h._onTapScreen()});var g=s_oSpriteLibrary.getSprite("but_exit");a=new CGfxButton(CANVAS_WIDTH-g.width/2-10,10+g.height/2,g,!0);a.addEventListener(ON_MOUSE_UP,this._onExit,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)d=new CToggle(CANVAS_WIDTH-140,10+g.height/2,s_oSpriteLibrary.getSprite("audio_icon"),s_bAudioActive),d.addEventListener(ON_MOUSE_UP,this._onAudioToggle,this)};this.unload=function(){a.unload();a=null;s_oStage.removeChild(c);
s_oStage.removeChild(f);!1===s_bMobile&&(d.unload(),d=null);var h=this;b.off("pressup",function(){h._onTapScreen()});s_oStage.removeChild(b);e.unload()};this.refreshScore=function(a){c.text=TEXT_SCORE+": "+a;f.text=TEXT_SCORE+": "+a};this._onTapScreen=function(){e.unload();s_oGame.tapScreen()};this._onExit=function(){s_oGame.onExit()};this._onAudioToggle=function(){createjs.Sound.setMute(s_bAudioActive);s_bAudioActive=!s_bAudioActive};this._init();return this}
function CHero(a,d){var b,c,f,e,h,g;this._init=function(a,d){e=0;b=!0;var n=s_oSpriteLibrary.getSprite("hero"),m=new createjs.SpriteSheet({framerate:8,images:[n],frames:{width:115,height:82,regX:57,regY:41},animations:{jump:[0,1],idle:[1,4],hurt:[4,8,"loop_hurt"],loop_hurt:[5,8]}});g=createSprite(m,"idle",57,41,115,82);g.x=c=a;g.y=f=d;s_oStage.addChild(g);h=n.height/2;this.idle(20)};this.unload=function(){s_oStage.removeChild(g)};this.reset=function(){e=0;b=!0;g.x=c;g.y=f;g.gotoAndPlay("idle");this.idle(20)};
this.idle=function(a){var b=this;createjs.Tween.get(g).to({y:g.y+a},450,createjs.Ease.cubicOut).call(function(){b.idle(-1*a)})};this.start=function(){createjs.Tween.removeTweens(g);this.moveUp()};this.moveUp=function(){createjs.Tween.removeTweens(g);e=8*-HERO_DOWN_ACCELLERATION;g.gotoAndStop("jump");b=!1};this.hurt=function(){g.gotoAndPlay("hurt")};this.getBottom=function(){return g.y+h};this.getX=function(){return g.x};this.getY=function(){return g.y};this.getRadius=function(){return g.width/2};
this.getSprite=function(){return g};this.update=function(a){e+=HERO_DOWN_ACCELLERATION;-100>g.y&&(g.y=-100);0<e&&!1===b&&(b=!0,g.gotoAndPlay("idle"));g.y+h+e>a?(g.y=a-h,s_oGame._gameOver()):g.y+=e};this._init(a,d)}
function CHelpPanel(a,d,b){var c,f,e,h;this._init=function(a,b,d){e=createBitmap(d);f=new createjs.Text(TEXT_HELP,"bold 36px chewyregular","#000000");f.textAlign="left";f.lineWidth=300;f.lineHeight=40;f.x=142;f.y=442;c=new createjs.Text(TEXT_HELP,"bold 36px chewyregular","#fd82d9");c.textAlign="left";c.lineWidth=300;c.lineHeight=40;c.x=140;c.y=440;h=new createjs.Container;h.x=a;h.y=b;h.addChild(e,f,c);s_oStage.addChild(h)};this.unload=function(){s_oStage.removeChild(h)};this._onExitHelp=function(){this.unload();
s_oGame._onExitHelp()};this._init(a,d,b)}
function CGfxButton(a,d,b){var c,f,e;this._init=function(a,b,d){c=[];f=[];e=createBitmap(d);e.x=a;e.y=b;e.regX=d.width/2;e.regY=d.height/2;s_oStage.addChild(e);this._initListener()};this.unload=function(){e.off("mousedown",this.buttonDown);e.off("pressup",this.buttonRelease);s_oStage.removeChild(e)};this.setVisible=function(a){e.visible=a};this._initListener=function(){e.on("mousedown",this.buttonDown);e.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,e){c[a]=b;f[a]=e};this.buttonRelease=
function(){e.scaleX=1;e.scaleY=1;c[ON_MOUSE_UP]&&c[ON_MOUSE_UP].call(f[ON_MOUSE_UP])};this.buttonDown=function(){e.scaleX=.9;e.scaleY=.9;c[ON_MOUSE_DOWN]&&c[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])};this.setPosition=function(a,b){e.x=a;e.y=b};this.setX=function(a){e.x=a};this.setY=function(a){e.y=a};this.getButtonImage=function(){return e};this.getX=function(){return e.x};this.getY=function(){return e.y};this._init(a,d,b);return this}
function CGame(a){var d=!0,b=-1,c,f,e,h,g,l,k,n,m;this._init=function(){f=c=0;h=createBitmap(s_oSpriteLibrary.getSprite("bg_game"));s_oStage.addChild(h);k=new CObstacle(s_oSpriteLibrary.getSprite("obstacle"));l=new CScrollingBg(s_oSpriteLibrary.getSprite("bg_scroll"));g=new CHero(HERO_START_X,HERO_START_Y);n=new CInterface;b=GAME_STATE_BEFORE_START};this.unload=function(){s_oStage.removeChild(h);l.unload();k.unload();g.unload();m&&m.unload();n.unload()};this.tapScreen=function(){b!==GAME_STATE_GAME_OVER&&
(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("tap"),d?(d=!1,g.start(),e=0,b=GAME_STATE_TRAINING):g.moveUp())};this._resetLevel=function(){c=0;n.refreshScore(c);g.reset();k.restartLevel();d=!0;b=GAME_STATE_BEFORE_START};this.collisionFound=function(){b=GAME_STATE_GAME_OVER};this.increaseScore=function(){c++;n.refreshScore(c)};this._gameOver=function(){b=-1;g.hurt();c>f&&(f=c);m=CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));m.show(c,f)};this.onRestartGame=function(){this._resetLevel()};
this.onExit=function(){this.unload();s_oMain.gotoMenu();$(s_oMain).trigger("restart")};this.update=function(){switch(b){case GAME_STATE_BEFORE_START:l.update(BG_SPEED);break;case GAME_STATE_TRAINING:e+=s_iTimeElaps;e>TIME_TRAINING?(e=0,b=GAME_STATE_START):(g.update(CANVAS_HEIGHT-l.getHeight()),l.update(BG_SPEED));break;case GAME_STATE_START:g.update(CANVAS_HEIGHT-l.getHeight());l.update(BG_SPEED);k.update(g.getSprite(),BG_SPEED);break;case GAME_STATE_GAME_OVER:g.update(CANVAS_HEIGHT-l.getHeight())}};
s_oGame=this;HERO_START_X=a.hero_x;HERO_START_Y=a.hero_y;HERO_DOWN_ACCELLERATION=a.hero_down_speed;BG_SPEED=a.bg_speed;TIME_TRAINING=a.time_training;DIST_AMONG_OBSTACLES=a.dist_among_obst;OBSTACLE_HEIGHT_DIST=a.obst_height_dist;this._init()}var s_oGame;
function CEndPanel(a){var d,b,c,f,e,h,g,l;this._init=function(a){d=createBitmap(a);g=new createjs.Text("","bold 70px chewyregular","#000");g.x=CANVAS_WIDTH/2+2;g.y=CANVAS_HEIGHT/2-140;g.textAlign="center";h=new createjs.Text("","bold 70px chewyregular","#fd82d9");h.x=CANVAS_WIDTH/2;h.y=CANVAS_HEIGHT/2-142;h.textAlign="center";b=new createjs.Text("","bold 52px chewyregular","#000");b.x=CANVAS_WIDTH/2+1;b.y=CANVAS_HEIGHT/2-18;b.textAlign="center";c=new createjs.Text("","bold 52px chewyregular","#fd82d9");
c.x=CANVAS_WIDTH/2;c.y=CANVAS_HEIGHT/2-20;c.textAlign="center";f=new createjs.Text("","bold 42px chewyregular","#000");f.x=CANVAS_WIDTH/2+1;f.y=CANVAS_HEIGHT/2+102;f.textAlign="center";e=new createjs.Text("","bold 42px chewyregular","#fd82d9");e.x=CANVAS_WIDTH/2;e.y=CANVAS_HEIGHT/2+100;e.textAlign="center";l=new createjs.Container;l.alpha=0;l.visible=!1;l.addChild(d,b,c,f,e,g,h);s_oStage.addChild(l)};this.unload=function(){l.off("mousedown",this._onExit);s_oStage.removeChild(l)};this._initListener=
function(){l.on("mousedown",this._onExit)};this.show=function(a,d){if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundTrackSnd.pause(),createjs.Sound.play("game_over").addEventListener("complete",this._onCompleteGameOverSfx);g.text=TEXT_GAMEOVER;h.text=TEXT_GAMEOVER;b.text=TEXT_SCORE+": "+a;c.text=TEXT_SCORE+": "+a;f.text=TEXT_BEST_SCORE+": "+d;e.text=TEXT_BEST_SCORE+": "+d;l.visible=!0;var m=this;createjs.Tween.get(l).to({alpha:1},500).call(function(){m._initListener()});$(s_oMain).trigger("save_score",
a,d)};this._onCompleteGameOverSfx=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||s_oSoundTrackSnd.resume()};this._onExit=function(){l.off("mousedown",this._onExit);s_oStage.removeChild(l);s_oGame.onRestartGame()};this._init(a);return this}
function CSpriteLibrary(){var a,d,b,c,f,e;this.init=function(h,g,l){b=d=0;c=h;f=g;e=l;a={}};this.addSprite=function(b,g){a.hasOwnProperty(b)||(a[b]={szPath:g,oSprite:new Image},d++)};this.getSprite=function(b){return a.hasOwnProperty(b)?a[b].oSprite:null};this._onSpritesLoaded=function(){f.call(e)};this._onSpriteLoaded=function(){c.call(e);++b==d&&this._onSpritesLoaded()};this.loadSprites=function(){for(var b in a)a[b].oSprite.oSpriteLibrary=this,a[b].oSprite.onload=function(){this.oSpriteLibrary._onSpriteLoaded()},
a[b].oSprite.src=a[b].szPath};this.getNumSprites=function(){return d}}
var CANVAS_WIDTH=768,CANVAS_HEIGHT=1024,DISABLE_SOUND_MOBILE=!1,FPS_TIME=1E3/24,STATE_LOADING=0,STATE_MENU=1,STATE_HELP=1,STATE_GAME=3,ON_MOUSE_DOWN=0,ON_MOUSE_UP=1,ON_MOUSE_OVER=2,ON_MOUSE_OUT=3,ON_DRAG_START=4,ON_DRAG_END=5,GAME_STATE_BEFORE_START=0,GAME_STATE_TRAINING=1,GAME_STATE_START=2,GAME_STATE_GAME_OVER=3,HERO_START_X,HERO_START_Y,HERO_DOWN_ACCELLERATION,BG_SPEED,TIME_TRAINING,DIST_AMONG_OBSTACLES,OBSTACLE_HEIGHT_DIST,TOLERANCE_NEXT_OBST_HEIGHT=100;
function CToggle(a,d,b,c){var f,e,h,g;this._init=function(a,b,c,d){e=[];h=[];var t=new createjs.SpriteSheet({images:[c],frames:{width:c.width/2,height:c.height,regX:c.width/2/2,regY:c.height/2},animations:{state_false:[0,1],state_true:[1,2]}});f=d;g=createSprite(t,"state_"+f,c.width/2/2,c.height/2,c.width/2,c.height);g.x=a;g.y=b;g.stop();s_oStage.addChild(g);this._initListener()};this.unload=function(){g.off("mousedown",this.buttonDown);g.off("pressup",this.buttonRelease);s_oStage.removeChild(g)};
this._initListener=function(){g.on("mousedown",this.buttonDown);g.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,g){e[a]=b;h[a]=g};this.buttonRelease=function(){g.scaleX=1;g.scaleY=1;f=!f;g.gotoAndStop("state_"+f);e[ON_MOUSE_UP]&&e[ON_MOUSE_UP].call(h[ON_MOUSE_UP],f)};this.buttonDown=function(){g.scaleX=.9;g.scaleY=.9;e[ON_MOUSE_DOWN]&&e[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN])};this._init(a,d,b,c)}
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
4))})(navigator.userAgent||navigator.vendor||window.opera);$(window).resize(function(){sizeHandler()});function trace(a){console.log(a)}$(window).ready(function(){sizeHandler()});window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){window.matchMedia("(orientation: portrait)").matches&&sizeHandler();window.matchMedia("(orientation: landscape)").matches&&sizeHandler()}
function sizeHandler(){window.scrollTo(0,1);if($("#canvas")){var a=CANVAS_WIDTH,d=CANVAS_HEIGHT,b=window.innerWidth;multiplier=Math.min(window.innerHeight/d,b/a);a*=multiplier;d*=multiplier;$("#canvas").css("width",a+"px");$("#canvas").css("height",d+"px");$("#canvas").css("left",b/2-a/2+"px")}}
function createBitmap(a,d,b){var c=new createjs.Bitmap(a),f=new createjs.Shape;d&&b?f.graphics.beginFill("#fff").drawRect(0,0,d,b):f.graphics.beginFill("#ff0").drawRect(0,0,a.width,a.height);c.hitArea=f;return c}function createSprite(a,d,b,c,f,e){a=null!==d?new createjs.Sprite(a,d):new createjs.Sprite(a);d=new createjs.Shape;d.graphics.beginFill("#000000").drawRect(-b,-c,f,e);a.hitArea=d;return a}
function randomFloatBetween(a,d,b){"undefined"===typeof b&&(b=2);return parseFloat(Math.min(a+Math.random()*(d-a),d).toFixed(b))}function shuffle(a){for(var d=a.length,b,c;0!==d;)c=Math.floor(Math.random()*d),--d,b=a[d],a[d]=a[c],a[c]=b;return a}function formatTime(a){a/=1E3;var d=Math.floor(a/60);a=parseFloat(a-60*d).toFixed(1);var b="",b=10>d?b+("0"+d+":"):b+(d+":");return b=10>a?b+("0"+a):b+a}
function checkRectCollision(a,d){var b,c;b=getBounds(a,.9);c=getBounds(d,.98);return calculateIntersection(b,c)}function calculateIntersection(a,d){var b,c,f,e,h,g,l,k;b=a.x+(f=a.width/2);c=a.y+(e=a.height/2);h=d.x+(g=d.width/2);l=d.y+(k=d.height/2);b=Math.abs(b-h)-(f+g);c=Math.abs(c-l)-(e+k);return 0>b&&0>c?(b=Math.min(Math.min(a.width,d.width),-b),c=Math.min(Math.min(a.height,d.height),-c),{x:Math.max(a.x,d.x),y:Math.max(a.y,d.y),width:b,height:c,rect1:a,rect2:d}):null}
function getBounds(a,d){var b={x:Infinity,y:Infinity,width:0,height:0};if(a instanceof createjs.Container){b.x2=-Infinity;b.y2=-Infinity;var c=a.children,f=c.length,e,h;for(h=0;h<f;h++)e=getBounds(c[h],1),e.x<b.x&&(b.x=e.x),e.y<b.y&&(b.y=e.y),e.x+e.width>b.x2&&(b.x2=e.x+e.width),e.y+e.height>b.y2&&(b.y2=e.y+e.height);Infinity==b.x&&(b.x=0);Infinity==b.y&&(b.y=0);Infinity==b.x2&&(b.x2=0);Infinity==b.y2&&(b.y2=0);b.width=b.x2-b.x;b.height=b.y2-b.y;delete b.x2;delete b.y2}else{var g,l;a instanceof createjs.Bitmap?
(f=a.sourceRect||a.image,h=f.width*d,g=f.height*d):a instanceof createjs.Sprite?a.spriteSheet._frames&&a.spriteSheet._frames[a.currentFrame]&&a.spriteSheet._frames[a.currentFrame].image?(f=a.spriteSheet.getFrame(a.currentFrame),h=f.rect.width,g=f.rect.height,c=f.regX,l=f.regY):(b.x=a.x||0,b.y=a.y||0):(b.x=a.x||0,b.y=a.y||0);c=c||0;h=h||0;l=l||0;g=g||0;b.regX=c;b.regY=l;f=a.localToGlobal(0-c,0-l);e=a.localToGlobal(h-c,g-l);h=a.localToGlobal(h-c,0-l);c=a.localToGlobal(0-c,g-l);b.x=Math.min(Math.min(Math.min(f.x,
e.x),h.x),c.x);b.y=Math.min(Math.min(Math.min(f.y,e.y),h.y),c.y);b.width=Math.max(Math.max(Math.max(f.x,e.x),h.x),c.x)-b.x;b.height=Math.max(Math.max(Math.max(f.y,e.y),h.y),c.y)-b.y}return b}function NoClickDelay(a){this.element=a;window.Touch&&this.element.addEventListener("touchstart",this,!1)}
NoClickDelay.prototype={handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a)}},onTouchStart:function(a){a.preventDefault();this.moved=!1;this.element.addEventListener("touchmove",this,!1);this.element.addEventListener("touchend",this,!1)},onTouchMove:function(a){this.moved=!0},onTouchEnd:function(a){this.element.removeEventListener("touchmove",this,!1);this.element.removeEventListener("touchend",
this,!1);if(!this.moved){a=document.elementFromPoint(a.changedTouches[0].clientX,a.changedTouches[0].clientY);3==a.nodeType&&(a=a.parentNode);var d=document.createEvent("MouseEvents");d.initEvent("click",!0,!0);a.dispatchEvent(d)}}};
function CTextButton(a,d,b,c,f,e,h){var g,l,k;this._init=function(a,b,c,e,d,h,f){g=[];l=[];var u=createBitmap(c),r=Math.ceil(f/20),p=new createjs.Text(e,"bold "+f+"px "+d,"#000000");p.textAlign="center";p.textBaseline="alphabetic";var q=p.getBounds();p.x=c.width/2+r;p.y=Math.floor(c.height/2)+q.height/3+r;e=new createjs.Text(e,"bold "+f+"px "+d,h);e.textAlign="center";e.textBaseline="alphabetic";q=e.getBounds();e.x=c.width/2;e.y=Math.floor(c.height/2)+q.height/3;k=new createjs.Container;k.x=a;k.y=
b;k.regX=c.width/2;k.regY=c.height/2;k.addChild(u,p,e);s_oStage.addChild(k);this._initListener()};this.unload=function(){k.off("mousedown");k.off("pressup");s_oStage.removeChild(k)};this.setVisible=function(a){k.visible=a};this._initListener=function(){oParent=this;k.on("mousedown",this.buttonDown);k.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,c){g[a]=b;l[a]=c};this.buttonRelease=function(){k.scaleX=1;k.scaleY=1;g[ON_MOUSE_UP]&&g[ON_MOUSE_UP].call(l[ON_MOUSE_UP])};this.buttonDown=
function(){k.scaleX=.9;k.scaleY=.9;g[ON_MOUSE_DOWN]&&g[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN])};this.setPosition=function(a,b){k.x=a;k.y=b};this.setX=function(a){k.x=a};this.setY=function(a){k.y=a};this.getButtonImage=function(){return k};this.getX=function(){return k.x};this.getY=function(){return k.y};this._init(a,d,b,c,f,e,h);return this}
function CScrollingBg(a){var d,b,c,f;this._init=function(a){f=a;b=a.width;c=[];for(var h=0;h<CANVAS_WIDTH+b;){var g=createBitmap(a);g.x=h;g.y=CANVAS_HEIGHT-a.height;h+=a.width;c.push(g);s_oStage.addChild(g)}d=c.length-1};this.unload=function(){for(var a=0;a<c.length;a++)s_oStage.removeChild(c[a])};this.getHeight=function(){return f.height};this.update=function(a){for(var f=-1,g=0;g<c.length;g++)c[g].x-=a,c[g].x<-b&&(f=g);-1!==f&&(c[f].x=c[d].x+b,d=f)};this._init(a)}
function CPreloader(){var a,d,b,c,f;this._init=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("bg_preloader","./sprites/bg_preloader.jpg");s_oSpriteLibrary.addSprite("progress_bar","./sprites/progress_bar.png");s_oSpriteLibrary.loadSprites();f=new createjs.Container;s_oStage.addChild(f)};this.unload=function(){f.removeAllChildren()};this._onImagesLoaded=function(){};this._onAllImagesLoaded=function(){this.attachSprites();s_oMain.preloaderReady()};
this.attachSprites=function(){var e=createBitmap(s_oSpriteLibrary.getSprite("bg_preloader"));f.addChild(e);b=createBitmap(s_oSpriteLibrary.getSprite("progress_bar"));b.x=161;b.y=CANVAS_HEIGHT-99;f.addChild(b);a=476;c=new createjs.Shape;c.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(161,CANVAS_HEIGHT-99,1,30);f.addChild(c);b.mask=c;d=new createjs.Text("0%","30px OpenSans-BoldItalic","#fff");d.x=250;d.y=CANVAS_HEIGHT-105;d.textAlign="center";d.textBaseline="middle";f.addChild(d)};this.refreshLoader=
function(b){d.text=b+"%";b=Math.floor(b*a/100);c.graphics.clear();c.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(161,CANVAS_HEIGHT-99,b,30)};this._init()}
function CObstacle(a){var d,b,c,f,e,h;this._init=function(a){d=-Math.floor(a.height/5);b=Math.floor(a.height/5);c=a.width/2;this._initLevel()};this.unload=function(){for(var a=0;a<h;a++)s_oStage.addChild(h[a])};this._initLevel=function(){var c=CANVAS_WIDTH+a.width,l=Math.floor(randomFloatBetween(d,b));for(h=[];c<2*CANVAS_WIDTH+a.width;){var k=createBitmap(a);k.x=c;k.y=l;k.regX=a.width/2;k.regY=a.height/2;s_oStage.addChild(k);h.push(k);k=createBitmap(a);k.x=c;k.y=l+a.height+OBSTACLE_HEIGHT_DIST;k.regX=
a.width/2;k.regY=a.height/2;k.scaleY=-1;s_oStage.addChild(k);h.push(k);c+=DIST_AMONG_OBSTACLES;l=this.assignNextHeight(l)}f=h.length-1;e=-1};this.restartLevel=function(){for(var c=CANVAS_WIDTH+a.width,l=Math.floor(randomFloatBetween(d,b)),k=0;k<h.length;k+=2)h[k].x=c,h[k].y=l,h[k+1].x=c,h[k+1].y=l+a.height+OBSTACLE_HEIGHT_DIST,c+=DIST_AMONG_OBSTACLES,l=this.assignNextHeight(l);f=h.length-1;e=-1};this.assignNextHeight=function(a){var c=a-TOLERANCE_NEXT_OBST_HEIGHT;c<d&&(c=d);a+=TOLERANCE_NEXT_OBST_HEIGHT;
a>b&&(a=b);return Math.floor(randomFloatBetween(c,a))};this._checkCollision=function(a,b){return checkRectCollision(a,h[b])};this.update=function(b,d){for(var k=0;k<h.length;k+=2){h[k].x<-c&&(h[k].x=h[f].x+c+DIST_AMONG_OBSTACLES,h[k+1].x=h[f].x+c+DIST_AMONG_OBSTACLES,h[k].y=this.assignNextHeight(h[f].y),h[k+1].y=h[k].y+a.height+OBSTACLE_HEIGHT_DIST,f=k);h[k].x-=d;h[k+1].x-=d;if(this._checkCollision(b,k)||this._checkCollision(b,k+1)){s_oGame.collisionFound();break}e!==k&&h[k].x<HERO_START_X&&(e=k,
s_oGame.increaseScore())}};this._init(a)}
function CMenu(){var a,d,b,c;this._init=function(){a=createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));s_oStage.addChild(a);var f=s_oSpriteLibrary.getSprite("but_play");d=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT-150,f,TEXT_PLAY,"chewyregular","#ffffff",50);d.addEventListener(ON_MOUSE_UP,this._onButPlayRelease,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)b=new CToggle(CANVAS_WIDTH-60,60,s_oSpriteLibrary.getSprite("audio_icon"),s_bAudioActive),b.addEventListener(ON_MOUSE_UP,this._onAudioToggle,
this);c=new createjs.Shape;c.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);s_oStage.addChild(c);createjs.Tween.get(c).to({alpha:0},1E3).call(function(){c.visible=!1})};this.unload=function(){d.unload();d=null;!1===s_bMobile&&(b.unload(),b=null);s_oStage.removeChild(a);a=null};this._onButPlayRelease=function(){this.unload();s_oMain.gotoGame()};this._onAudioToggle=function(){createjs.Sound.setMute(s_bAudioActive);s_bAudioActive=!s_bAudioActive};this._init()}
function CMain(a){var d=0,b=0,c=STATE_LOADING,f,e,h;this.initContainer=function(){var a=document.getElementById("canvas");s_oStage=new createjs.Stage(a);createjs.Touch.enable(s_oStage);s_bMobile=jQuery.browser.mobile;!1===s_bMobile&&(s_oStage.enableMouseOver(20),$("body").on("contextmenu","#canvas",function(a){return!1}));s_iPrevTime=(new Date).getTime();createjs.Ticker.addEventListener("tick",this._update);createjs.Ticker.setFPS(30);navigator.userAgent.match(/Windows Phone/i)&&(DISABLE_SOUND_MOBILE=
!0);s_oSpriteLibrary=new CSpriteLibrary;e=new CPreloader};this.preloaderReady=function(){this._loadImages();!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||this._initSounds()};this.soundLoaded=function(){d++;if(d===b){e.unload();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundTrackSnd=createjs.Sound.play("soundtrack",{loop:100});this.gotoMenu()}};this._initSounds=function(){createjs.Sound.initializeDefaultPlugins()&&(createjs.Sound.alternateExtensions=["ogg"],createjs.Sound.addEventListener("fileload",
createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/soundtrack.mp3","soundtrack"),createjs.Sound.registerSound("./sounds/game_over.mp3","game_over"),createjs.Sound.registerSound("./sounds/tap.mp3","tap"),b+=3)};this._loadImages=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");s_oSpriteLibrary.addSprite("bg_menu",
"./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");s_oSpriteLibrary.addSprite("bg_help","./sprites/bg_help.png");s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");s_oSpriteLibrary.addSprite("hero","./sprites/hero.png");s_oSpriteLibrary.addSprite("bg_scroll","./sprites/bg_scroll.jpg");s_oSpriteLibrary.addSprite("obstacle","./sprites/obstacle.png");b+=s_oSpriteLibrary.getNumSprites();
s_oSpriteLibrary.loadSprites()};this._onImagesLoaded=function(){d++;e.refreshLoader(Math.floor(d/b*100));if(d===b){e.unload();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundTrackSnd=createjs.Sound.play("soundtrack",{loop:100});this.gotoMenu()}};this._onAllImagesLoaded=function(){};this.onAllPreloaderImagesLoaded=function(){this._loadImages()};this.gotoMenu=function(){new CMenu;c=STATE_MENU};this.gotoGame=function(){h=new CGame(f);c=STATE_GAME;$(s_oMain).trigger("game_start")};this.gotoHelp=
function(){new CHelp;c=STATE_HELP};this._update=function(a){var b=(new Date).getTime();s_iTimeElaps=b-s_iPrevTime;s_iCntTime+=s_iTimeElaps;s_iCntFps++;s_iPrevTime=b;1E3<=s_iCntTime&&(s_iCurFps=s_iCntFps,s_iCntTime-=1E3,s_iCntFps=0);c===STATE_GAME&&h.update();s_oStage.update(a)};s_oMain=this;f=a;this.initContainer()}var s_bMobile,s_bAudioActive=!0,s_iCntTime=0,s_iTimeElaps=0,s_iPrevTime=0,s_iCntFps=0,s_iCurFps=0,s_oSoundTrackSnd,s_oDrawLayer,s_oStage,s_oMain,s_oSpriteLibrary;