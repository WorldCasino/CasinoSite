function CMain(a){var c,b=0,d=0,f,e;this.initContainer=function(){s_oDrawCanvas=document.getElementById("draw_canvas");s_oDrawStage=new createjs.Stage(s_oDrawCanvas);s_oCanvas=document.getElementById("canvas");s_oStage=new createjs.Stage(s_oCanvas);s_oInteractiveCanvas=document.getElementById("interactivecanvas");s_oInteractiveStage=new createjs.Stage(s_oInteractiveCanvas);createjs.Touch.enable(s_oInteractiveStage);s_bMobile=jQuery.browser.mobile;!1===s_bMobile&&(s_oStage.enableMouseOver(24),$("body").on("contextmenu",
"#canvas",function(a){return!1}));s_iPrevTime=(new Date).getTime();createjs.Ticker.addEventListener("tick",this._update);createjs.Ticker.setFPS(24);navigator.userAgent.match(/Windows Phone/i)&&(DISABLE_SOUND_MOBILE=!0);s_oSpriteLibrary=new CSpriteLibrary;e=new CPreloader};this.preloaderReady=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||this._initSounds();this._loadImages();c=!0};this.soundLoaded=function(){b++;e.refreshLoader(Math.floor(b/d*100));if(b===d){e.unload();if(!1===DISABLE_SOUND_MOBILE||
!1===s_bMobile)s_oSoundtrack=createjs.Sound.play("soundtrack",{loop:-1});this.gotoMenu()}};this._initSounds=function(){createjs.Sound.initializeDefaultPlugins()&&(0<navigator.userAgent.indexOf("Opera")||0<navigator.userAgent.indexOf("OPR")?(createjs.Sound.alternateExtensions=["mp3"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/soundtrack.ogg","soundtrack"),createjs.Sound.registerSound("./sounds/press_button.ogg","click")):
(createjs.Sound.alternateExtensions=["ogg"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/soundtrack.mp3","soundtrack"),createjs.Sound.registerSound("./sounds/press_button.mp3","click")),d+=2)};this._loadImages=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("bg_modemenu",
"./sprites/bg_modemenu.jpg");s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");s_oSpriteLibrary.addSprite("but_save","./sprites/but_save.png");s_oSpriteLibrary.addSprite("but_print","./sprites/but_print.png");s_oSpriteLibrary.addSprite("but_restart","./sprites/but_restart.png");s_oSpriteLibrary.addSprite("eraser","./sprites/eraser.png");s_oSpriteLibrary.addSprite("sliderbox",
"./sprites/sliderbox.png");s_oSpriteLibrary.addSprite("slider","./sprites/slider.png");s_oSpriteLibrary.addSprite("pen","./sprites/pen.png");s_oSpriteLibrary.addSprite("canvas_drawing","./sprites/drawcanvas.jpg");s_oSpriteLibrary.addSprite("drawcanvas_frame","./sprites/drawcanvas_frame.png");s_oSpriteLibrary.addSprite("image1","./sprites/image1.png");s_oSpriteLibrary.addSprite("image2","./sprites/image2.png");s_oSpriteLibrary.addSprite("image3","./sprites/image3.png");s_oSpriteLibrary.addSprite("image4",
"./sprites/image4.png");s_oSpriteLibrary.addSprite("image5","./sprites/image5.png");s_oSpriteLibrary.addSprite("image6","./sprites/image6.png");d+=s_oSpriteLibrary.getNumSprites();s_oSpriteLibrary.loadSprites()};this._onImagesLoaded=function(){b++;e.refreshLoader(Math.floor(b/d*100));if(b===d){e.unload();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundtrack=createjs.Sound.play("soundtrack",{loop:-1});this.gotoMenu()}};this._onAllImagesLoaded=function(){};this.onAllPreloaderImagesLoaded=function(){this._loadImages()};
this.gotoMenu=function(){new CMenu};this.gotoModeMenu=function(){new CModeMenu};this.gotoGame=function(a){s_szCurDraw=a;new CGame(f);$(s_oMain).trigger("game_start")};this.gotoHelp=function(){new CHelp};this.stopUpdate=function(){c=!1};this.startUpdate=function(){c=!0};this._update=function(){if(!1!==c){var a=(new Date).getTime();s_iTimeElaps=a-s_iPrevTime;s_iCntTime+=s_iTimeElaps;s_iCntFps++;s_iPrevTime=a;1E3<=s_iCntTime&&(s_iCurFps=s_iCntFps,s_iCntTime-=1E3,s_iCntFps=0)}};s_oMain=this;f=a;this.initContainer()}
var s_bMobile,s_bAudioActive=!0,s_iCntTime=0,s_iTimeElaps=0,s_iPrevTime=0,s_iCntFps=0,s_iCurFps=0,s_szCurDraw,s_oStage,s_oMain,s_oSpriteLibrary,s_oSoundTrack,s_oCanvas,s_oDrawCanvas,s_oDrawStage,s_oInteractiveCanvas,s_oInteractiveStage;TEXT_PLAY="PLAY";TEXT_HELP1="PLEASE, PICK A COLOR";TEXT_CHOOSE="SELECT THE PICTURE YOU WANT TO PAINT";
function CInterface(){var a,c,b,d,f,e,g,h,m,n,q,t,k,l,p,r,z,y,A=null,x,w,v,B;this._init=function(){t=q=null;var u=s_oSpriteLibrary.getSprite("but_exit");m=CANVAS_WIDTH-u.height/2-20;n=u.height/2+10;p=new CGfxButton(m,n,u,!0);p.addEventListener(ON_MOUSE_UP,this._onExit,this);g=CANVAS_WIDTH-u.width/2-20;h=250;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)u=s_oSpriteLibrary.getSprite("audio_icon"),l=new CToggle(g,h,u,s_bAudioActive),l.addEventListener(ON_MOUSE_UP,this._onAudioToggle,this);u=s_oSpriteLibrary.getSprite("but_save");
f=u.height/2+20;e=u.height/2+10;r=new CGfxButton(f,e,u,!0);r.addEventListener(ON_MOUSE_UP,this._onSaveAsImg,this);u=s_oSpriteLibrary.getSprite("but_print");b=u.height/2+20;d=250;z=new CGfxButton(b,d,u,!0);z.addEventListener(ON_MOUSE_UP,this._onPrinteAsImg,this);u=s_oSpriteLibrary.getSprite("but_restart");a=u.height/2+20;c=415;y=new CGfxButton(a,c,u,!0);y.addEventListener(ON_MOUSE_UP,this._onButRestartRelease,this);x=new createjs.Container;u=1E3-EDGEBOARD_Y;x.x=CANVAS_WIDTH/2;x.y=u;k=[];for(u=0;u<
COLORS.length;u++)k[u]=new CPen(50*u,0,COLORS[u],u,x);s_oInteractiveStage.addChild(x);k[COLORS.length]=new CPen(-100,0,"eraser",COLORS.length,x);w=new createjs.Container;w.x=1600;w.y=1E3;s_oInteractiveStage.addChild(w);u=s_oSpriteLibrary.getSprite("slider");v=new CSlider(0,-125,u,MIN_STROKE,MAX_STROKE,w);u=s_oSpriteLibrary.getSprite("sliderbox");B=new CSliderBox(0,0,u,w);u=x.getBounds();x.regX=(u.width-100)/2;this.refreshButtonPos(s_iOffsetX,s_iOffsetY);s_oInteractiveStage.update()};this.unload=function(){if(!1===
DISABLE_SOUND_MOBILE||!1===s_bMobile)l.unload(),l=null;for(var a=0;a<k.length;a++)k[a].unload();p.unload();r.unload();z.unload();y.unload();v.unload();B.unload();s_oInterface=null};this.disableStroke=function(){s_oGame.deleteStroke(!1)};this.restartStroke=function(){s_oGame.setColor(q)};this.setStroke=function(a){s_oGame.setStroke(a)};this.getStroke=function(){return v.getValue()};this.setActivePen=function(a,b){this.setSliderVisible(!1);s_oGame.setColor(a);s_oGame.colorAdvice(!1);q=a;null!==t&&k[t].setActive(!1);
t=b};this.setCircleImage=function(a){B.setCircleSize(a)};this.setSliderVisible=function(a){v.setVisible(a);B.setSliderVisible(a)};this.getSliderVisible=function(){return v.getVisible()};this._onSaveAsImg=function(){s_oGame.saveImg()};this._onPrinteAsImg=function(){s_oGame.printImg()};this.refreshButtonPos=function(k,q){p.setPosition(m-k,q+n);!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||l.setPosition(g-k,q+h);r.setPosition(f+k,q+e);z.setPosition(b+k,q+d);y.setPosition(a+k,q+c);s_oInteractiveStage.update()};
this._onButHelpRelease=function(){A=new CHelpPanel};this._onButRestartRelease=function(){s_oGame.restartGame()};this.onExitFromHelp=function(){A.unload()};this._onAudioToggle=function(){createjs.Sound.setMute(s_bAudioActive);s_bAudioActive=!s_bAudioActive};this._onExit=function(){s_oGame.onExit()};s_oInterface=this;this._init();return this}var s_oInterface=null;
function CGfxButton(a,c,b){var d,f,e;this._init=function(a,b,c){d=[];f=[];e=createBitmap(c);e.x=a;e.y=b;e.regX=c.width/2;e.regY=c.height/2;s_oInteractiveStage.addChild(e);s_oInteractiveStage.update();this._initListener()};this.unload=function(){e.off("mousedown",this.buttonDown);e.off("pressup",this.buttonRelease);s_oInteractiveStage.removeChild(e)};this.setVisible=function(a){e.visible=a};this._initListener=function(){e.on("mousedown",this.buttonDown);e.on("pressup",this.buttonRelease)};this.addEventListener=
function(a,b,c){d[a]=b;f[a]=c};this.buttonRelease=function(){e.scaleX=1;e.scaleY=1;d[ON_MOUSE_UP]&&d[ON_MOUSE_UP].call(f[ON_MOUSE_UP]);s_oInteractiveStage.update()};this.buttonDown=function(){e.scaleX=.9;e.scaleY=.9;d[ON_MOUSE_DOWN]&&d[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN]);s_oInteractiveStage.update()};this.setPosition=function(a,b){e.x=a;e.y=b};this.setX=function(a){e.x=a};this.setY=function(a){e.y=a};this.getButtonImage=function(){return e};this.getX=function(){return e.x};this.getY=function(){return e.y};
this._init(a,c,b);return this}
function CGame(a){var c,b,d,f,e,g,h,m,n,q,t,k,l,p,r,z,y,A,x,w,v,B=s_oDrawStage.canvas.getContext("2d");this._init=function(){h=10;e=null;k=createBitmap(s_oSpriteLibrary.getSprite("bg_game"));s_oDrawStage.addChild(k);z=new createjs.Container;z.x=CANVAS_WIDTH/2;z.y=CANVAS_HEIGHT/2;s_oDrawStage.addChild(z);var a=s_oSpriteLibrary.getSprite("canvas_drawing");m=a.width;n=a.height;p=createBitmap(a);z.addChild(p);z.regX=m/2;z.regY=n/2;c=CANVAS_WIDTH/2-m/2+.5*h;b=CANVAS_HEIGHT/2-n/2+.5*h;d=m+CANVAS_WIDTH/
2-m/2-.5*h;f=n+CANVAS_HEIGHT/2-n/2-.5*h;l=new createjs.Shape;l.graphics.setStrokeStyle(h,"round","round");A=new createjs.Container;s_oStage.addChild(A);a=s_oSpriteLibrary.getSprite(s_szCurDraw);y=createBitmap(a);y.x=CANVAS_WIDTH/2;y.y=CANVAS_HEIGHT/2;y.regX=a.width/2;y.regY=a.height/2;s_oInteractiveStage.addChild(y);A.addChild(l);a=s_oSpriteLibrary.getSprite("drawcanvas_frame");r=createBitmap(a);r.x=CANVAS_WIDTH/2;r.y=CANVAS_HEIGHT/2;r.regX=a.width/2;r.regY=a.height/2;s_oInteractiveStage.addChild(r);
w=new createjs.Text(TEXT_HELP1,"bold 60px walibi","#eedc20");w.x=CANVAS_WIDTH/2;w.y=CANVAS_HEIGHT/2;w.textAlign="center";w.textBaseline="alphabetic";w.lineWidth=800;w.visible=!1;v=new createjs.Text(TEXT_HELP1,"bold 60px walibi","#ff4200");v.x=CANVAS_WIDTH/2;v.y=CANVAS_HEIGHT/2;v.textAlign="center";v.textBaseline="alphabetic";v.lineWidth=800;v.outline=10;v.visible=!1;s_oInteractiveStage.addChild(v,w);x=new createjs.Shape;x.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(-580,-410,1160,820);x.x=
CANVAS_WIDTH/2;x.y=CANVAS_HEIGHT/2;x.on("mousedown",this._setAdvice);s_oInteractiveStage.addChild(x);s_bMobile?(window.navigator.msPointerEnabled&&(_iContTouchMS=0),s_oInteractiveStage.addEventListener("stagemousedown",this.onMouseStart,!1),s_oInteractiveStage.addEventListener("stagemouseup",this.onMouseEnd,!1)):(s_oInteractiveStage.addEventListener("stagemousedown",this.onMouseStart),s_oInteractiveStage.addEventListener("stagemouseup",this.onMouseEnd));q=new CInterface;s_oDrawStage.update();s_oInteractiveStage.update()};
this.printImg=function(){var a=s_oSpriteLibrary.getSprite(s_szCurDraw),b=s_oSpriteLibrary.getSprite(s_szCurDraw),b=createBitmap(a);b.x=CANVAS_WIDTH/2;b.y=CANVAS_HEIGHT/2;b.regX=a.width/2;b.regY=a.height/2;y.visible=!1;s_oDrawStage.addChild(b);k.visible=!1;s_oDrawStage.update();var a=document.getElementById("draw_canvas").toDataURL(),a="<!DOCTYPE html><html>"+('<img src="'+a+'">'),a=a+"</html>",c=window.open("","","width=1920,height=1080");c.document.open();c.document.write(a);c.document.close();c.focus();
c.print();c.close();s_oDrawStage.removeChild(b);y.visible=!0;k.visible=!0;s_oDrawStage.update()};this.saveImg=function(){var a=s_oSpriteLibrary.getSprite(s_szCurDraw),b=s_oSpriteLibrary.getSprite(s_szCurDraw),b=createBitmap(a);b.x=CANVAS_WIDTH/2;b.y=CANVAS_HEIGHT/2;b.regX=a.width/2;b.regY=a.height/2;y.visible=!1;s_oDrawStage.addChild(b);k.visible=!1;s_oDrawStage.update();a=document.createElement("a");document.body.appendChild(a);var c=s_szCurDraw+pad(Math.round(1E3*Math.random()),4);a.download=c;
a.href=s_oDrawCanvas.toDataURL("image/png");a.click();s_oDrawStage.removeChild(b);y.visible=!0;k.visible=!0;s_oDrawStage.update()};this.sliderMoving=function(a){};this.setColor=function(a){e=a};this.getColor=function(){return e};this.saveTempColor=function(){g=e};this.setTempColor=function(){e=g};this.setStroke=function(a){h=a;c=CANVAS_WIDTH/2-m/2+.5*h;b=CANVAS_HEIGHT/2-n/2+.5*h;d=m+CANVAS_WIDTH/2-m/2-.5*h;f=n+CANVAS_HEIGHT/2-n/2-.5*h};this.deleteStroke=function(a){e=a?"#ffffff":null};this.initStroke=
function(){l=new createjs.Shape;l.graphics.setStrokeStyle(h,"round","round");l.graphics.beginStroke(e);A.addChild(l)};this.onMouseStart=function(a){a=a||window.event;!a.primary||s_oInteractiveStage.mouseX<c||s_oInteractiveStage.mouseX>d||s_oInteractiveStage.mouseY<b||s_oInteractiveStage.mouseY>f||(s_oGame.initStroke(),l.graphics.moveTo(s_oInteractiveStage.mouseX,s_oInteractiveStage.mouseY),s_oInteractiveStage.addEventListener("stagemousemove",t.onMouseMove))};this.onMouseMove=function(a){!a.primary||
s_oInteractiveStage.mouseX<c||s_oInteractiveStage.mouseX>d||s_oInteractiveStage.mouseY<b||s_oInteractiveStage.mouseY>f||(l.graphics.lineTo(s_oInteractiveStage.mouseX,s_oInteractiveStage.mouseY),checkIfiOS()?l.draw(B):s_oStage.update())};this.onMouseEnd=function(a){a.primary&&(s_oDrawStage.addChild(l),l.graphics.endStroke(),s_oStage.removeChild(l),s_oDrawStage.update(),s_oInteractiveStage.removeEventListener("stagemousemove",t.onMouseMove))};this.restartGame=function(){s_oDrawStage.removeAllChildren();
l.graphics.clear();s_oDrawStage.addChild(k);s_oDrawStage.addChild(z);var a=s_oSpriteLibrary.getSprite("canvas_drawing");m=a.width;n=a.height;p=createBitmap(a);z.addChild(p);s_oDrawStage.update();s_oStage.update()};this.unload=function(){q.unload();x.off("mousedown",this._setAdvice);createjs.Tween.removeAllTweens();s_oStage.removeAllChildren();s_oStage.update()};this.onExit=function(){this.unload();s_oMain.gotoMenu();$(s_oMain).trigger("restart")};this._setAdvice=function(){null!==e||q.getSliderVisible()||
t.colorAdvice(!0)};this.colorAdvice=function(a){w.visible=a;v.visible=a;s_oInteractiveStage.update()};this.update=function(){};s_oGame=this;COLORS=a.colors;MIN_STROKE=a.min_stroke_size;MAX_STROKE=a.max_stroke_size;t=this;this._init()}var s_oGame;
function CSpriteLibrary(){var a,c,b,d,f,e;this.init=function(g,h,m){b=c=0;d=g;f=h;e=m;a={}};this.addSprite=function(b,d){a.hasOwnProperty(b)||(a[b]={szPath:d,oSprite:new Image},c++)};this.getSprite=function(b){return a.hasOwnProperty(b)?a[b].oSprite:null};this._onSpritesLoaded=function(){f.call(e)};this._onSpriteLoaded=function(){d.call(e);++b==c&&this._onSpritesLoaded()};this.loadSprites=function(){for(var b in a)a[b].oSprite.oSpriteLibrary=this,a[b].oSprite.onload=function(){this.oSpriteLibrary._onSpriteLoaded()},
a[b].oSprite.src=a[b].szPath};this.getNumSprites=function(){return c}}var CANVAS_WIDTH=1920,CANVAS_HEIGHT=1080,EDGEBOARD_X=200,EDGEBOARD_Y=35,FPS_TIME=1E3/24,DISABLE_SOUND_MOBILE=!1,STATE_LOADING=0,STATE_MENU=1,STATE_HELP=1,STATE_GAME=3,ON_MOUSE_DOWN=0,ON_MOUSE_UP=1,ON_MOUSE_OVER=2,ON_MOUSE_OUT=3,ON_DRAG_START=4,ON_DRAG_END=5,COLORS=[],MIN_STROKE,MAX_STROKE;
function CToggle(a,c,b,d){var f,e,g,h;this._init=function(a,b,c,d){e=[];g=[];var k=new createjs.SpriteSheet({images:[c],frames:{width:c.width/2,height:c.height,regX:c.width/2/2,regY:c.height/2},animations:{state_true:[0],state_false:[1]}});f=d;h=createSprite(k,"state_"+f,c.width/2/2,c.height/2,c.width/2,c.height);h.x=a;h.y=b;h.stop();s_oInteractiveStage.addChild(h);this._initListener()};this.unload=function(){h.off("mousedown",this.buttonDown);h.off("pressup",this.buttonRelease);s_oInteractiveStage.removeChild(h)};
this._initListener=function(){h.on("mousedown",this.buttonDown);h.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,c){e[a]=b;g[a]=c};this.setActive=function(a){f=a;h.gotoAndStop("state_"+f)};this.buttonRelease=function(){h.scaleX=1;h.scaleY=1;!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("click");f=!f;h.gotoAndStop("state_"+f);e[ON_MOUSE_UP]&&e[ON_MOUSE_UP].call(g[ON_MOUSE_UP],f);s_oInteractiveStage.update()};this.buttonDown=function(){h.scaleX=.9;h.scaleY=.9;
e[ON_MOUSE_DOWN]&&e[ON_MOUSE_DOWN].call(g[ON_MOUSE_DOWN]);s_oInteractiveStage.update()};this.setPosition=function(a,b){h.x=a;h.y=b};this._init(a,c,b,d)}var s_iScaleFactor=1,s_oCanvasLeft,s_oCanvasTop;
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
4))})(navigator.userAgent||navigator.vendor||window.opera);$(window).resize(function(){sizeHandler()});function trace(a){console.log(a)}function hexToRgb(a){return(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function checkIfiOS(){return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?!0:!1}
function getSize(a){var c=a.toLowerCase(),b=window.document,d=b.documentElement;if(void 0===window["inner"+a])a=d["client"+a];else if(window["inner"+a]!=d["client"+a]){var f=b.createElement("body");f.id="vpw-test-b";f.style.cssText="overflow:scroll";var e=b.createElement("div");e.id="vpw-test-d";e.style.cssText="position:absolute;top:-1000px";e.innerHTML="<style>@media("+c+":"+d["client"+a]+"px){body#vpw-test-b div#vpw-test-d{"+c+":7px!important}}</style>";f.appendChild(e);d.insertBefore(f,b.head);
a=7==e["offset"+a]?d["client"+a]:window["inner"+a];d.removeChild(f)}else a=window["inner"+a];return a}$(window).ready(function(){sizeHandler()});window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){window.matchMedia("(orientation: portrait)").matches&&sizeHandler();window.matchMedia("(orientation: landscape)").matches&&sizeHandler()}function getIOSWindowHeight(){return document.documentElement.clientWidth/window.innerWidth*window.innerHeight}
function getHeightOfIOSToolbars(){var a=(0===window.orientation?screen.height:screen.width)-getIOSWindowHeight();return 1<a?a:0}
function sizeHandler(){window.scrollTo(0,1);if($("#canvas")){var a;a=navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?getIOSWindowHeight():getSize("Height");var c=getSize("Width"),b=Math.min(a/CANVAS_HEIGHT,c/CANVAS_WIDTH),d=CANVAS_WIDTH*b,b=CANVAS_HEIGHT*b,f=0;b<a?(f=a-b,b+=f,d+=CANVAS_WIDTH/CANVAS_HEIGHT*f):d<c&&(f=c-d,d+=f,b+=CANVAS_HEIGHT/CANVAS_WIDTH*f);var f=a/2-b/2,e=c/2-d/2,g=CANVAS_WIDTH/d;if(e*g<-EDGEBOARD_X||f*g<-EDGEBOARD_Y)b=Math.min(a/(CANVAS_HEIGHT-2*EDGEBOARD_Y),c/(CANVAS_WIDTH-2*
EDGEBOARD_X)),d=CANVAS_WIDTH*b,b*=CANVAS_HEIGHT,f=(a-b)/2,e=(c-d)/2,g=CANVAS_WIDTH/d;s_iOffsetX=-1*e*g;s_iOffsetY=-1*f*g;0<=f&&(s_iOffsetY=0);0<=e&&(s_iOffsetX=0);null!==s_oInterface&&s_oInterface.refreshButtonPos(s_iOffsetX,s_iOffsetY);null!==s_oMenu&&s_oMenu.refreshButtonPos(s_iOffsetX,s_iOffsetY);null!==s_oModeMenu&&s_oModeMenu.refreshButtonPos(s_iOffsetX,s_iOffsetY);$("#canvas").css("width",d+"px");$("#canvas").css("height",b+"px");0>f?$("#canvas").css("top",f+"px"):$("#canvas").css("top","0px");
$("#canvas").css("left",e+"px");$("#draw_canvas").css("width",d+"px");$("#draw_canvas").css("height",b+"px");0>f?$("#draw_canvas").css("top",f+"px"):$("#draw_canvas").css("top","0px");$("#draw_canvas").css("left",e+"px");$("#interactivecanvas").css("width",d+"px");$("#interactivecanvas").css("height",b+"px");0>f?$("#interactivecanvas").css("top",f+"px"):$("#interactivecanvas").css("top","0px");$("#interactivecanvas").css("left",e+"px");s_oCanvasLeft=$("#canvas").offset().left;s_oCanvasTop=$("#canvas").offset().top}}
function createBitmap(a,c,b){var d=new createjs.Bitmap(a),f=new createjs.Graphics;c&&b?f.beginFill("#fff").drawRect(0,0,c,b):f.beginFill("#ff0").drawRect(0,0,a.width,a.height);a=new createjs.Shape(f);d.hitArea=a;return d}function createSprite(a,c,b,d,f,e){a=null!==c?new createjs.Sprite(a,c):new createjs.Sprite(a);c=new createjs.Graphics;c.beginFill("#000000").drawRect(-b,-d,f,e);b=new createjs.Shape(c);a.hitArea=b;return a}
function pad(a,c,b){a+="";return a.length>=c?a:Array(c-a.length+1).join(b||"0")+a}function randomFloatBetween(a,c,b){"undefined"===typeof b&&(b=2);return parseFloat(Math.min(a+Math.random()*(c-a),c).toFixed(b))}function rotateVector2D(a,c){var b=c.getX()*Math.cos(a)+c.getY()*Math.sin(a),d=c.getX()*-Math.sin(a)+c.getY()*Math.cos(a);c.set(b,d)}function tweenVectorsOnX(a,c,b){return a+b*(c-a)}
function shuffle(a){for(var c=a.length,b,d;0!==c;)d=Math.floor(Math.random()*c),--c,b=a[c],a[c]=a[d],a[d]=b;return a}function bubbleSort(a){var c;do{c=!1;for(var b=0;b<a.length-1;b++)a[b]>a[b+1]&&(c=a[b],a[b]=a[b+1],a[b+1]=c,c=!0)}while(c)}function compare(a,c){return a.index>c.index?-1:a.index<c.index?1:0}function easeLinear(a,c,b,d){return b*a/d+c}function easeInQuad(a,c,b,d){return b*(a/=d)*a+c}function easeInSine(a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c}
function easeInCubic(a,c,b,d){return b*(a/=d)*a*a+c}function getTrajectoryPoint(a,c){var b=new createjs.Point,d=(1-a)*(1-a),f=a*a;b.x=d*c.start.x+2*(1-a)*a*c.traj.x+f*c.end.x;b.y=d*c.start.y+2*(1-a)*a*c.traj.y+f*c.end.y;return b}function formatTime(a){a/=1E3;var c=Math.floor(a/60);a=parseFloat(a-60*c).toFixed(1);var b="",b=10>c?b+("0"+c+":"):b+(c+":");return b=10>a?b+("0"+a):b+a}function degreesToRadians(a){return a*Math.PI/180}
function checkRectCollision(a,c){var b,d;b=getBounds(a,.9);d=getBounds(c,.98);return calculateIntersection(b,d)}function calculateIntersection(a,c){var b,d,f,e,g,h,m,n;b=a.x+(f=a.width/2);d=a.y+(e=a.height/2);g=c.x+(h=c.width/2);m=c.y+(n=c.height/2);b=Math.abs(b-g)-(f+h);d=Math.abs(d-m)-(e+n);return 0>b&&0>d?(b=Math.min(Math.min(a.width,c.width),-b),d=Math.min(Math.min(a.height,c.height),-d),{x:Math.max(a.x,c.x),y:Math.max(a.y,c.y),width:b,height:d,rect1:a,rect2:c}):null}
function getBounds(a,c){var b={x:Infinity,y:Infinity,width:0,height:0};if(a instanceof createjs.Container){b.x2=-Infinity;b.y2=-Infinity;var d=a.children,f=d.length,e,g;for(g=0;g<f;g++)e=getBounds(d[g],1),e.x<b.x&&(b.x=e.x),e.y<b.y&&(b.y=e.y),e.x+e.width>b.x2&&(b.x2=e.x+e.width),e.y+e.height>b.y2&&(b.y2=e.y+e.height);Infinity==b.x&&(b.x=0);Infinity==b.y&&(b.y=0);Infinity==b.x2&&(b.x2=0);Infinity==b.y2&&(b.y2=0);b.width=b.x2-b.x;b.height=b.y2-b.y;delete b.x2;delete b.y2}else{var h,m;a instanceof createjs.Bitmap?
(f=a.sourceRect||a.image,g=f.width*c,h=f.height*c):a instanceof createjs.Sprite?a.spriteSheet._frames&&a.spriteSheet._frames[a.currentFrame]&&a.spriteSheet._frames[a.currentFrame].image?(f=a.spriteSheet.getFrame(a.currentFrame),g=f.rect.width,h=f.rect.height,d=f.regX,m=f.regY):(b.x=a.x||0,b.y=a.y||0):(b.x=a.x||0,b.y=a.y||0);d=d||0;g=g||0;m=m||0;h=h||0;b.regX=d;b.regY=m;f=a.localToGlobal(0-d,0-m);e=a.localToGlobal(g-d,h-m);g=a.localToGlobal(g-d,0-m);d=a.localToGlobal(0-d,h-m);b.x=Math.min(Math.min(Math.min(f.x,
e.x),g.x),d.x);b.y=Math.min(Math.min(Math.min(f.y,e.y),g.y),d.y);b.width=Math.max(Math.max(Math.max(f.x,e.x),g.x),d.x)-b.x;b.height=Math.max(Math.max(Math.max(f.y,e.y),g.y),d.y)-b.y}return b}function NoClickDelay(a){this.element=a;window.Touch&&this.element.addEventListener("touchstart",this,!1)}
NoClickDelay.prototype={handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a)}},onTouchStart:function(a){a.preventDefault();this.moved=!1;this.element.addEventListener("touchmove",this,!1);this.element.addEventListener("touchend",this,!1)},onTouchMove:function(a){this.moved=!0},onTouchEnd:function(a){this.element.removeEventListener("touchmove",this,!1);this.element.removeEventListener("touchend",
this,!1);if(!this.moved){a=document.elementFromPoint(a.changedTouches[0].clientX,a.changedTouches[0].clientY);3==a.nodeType&&(a=a.parentNode);var c=document.createEvent("MouseEvents");c.initEvent("click",!0,!0);a.dispatchEvent(c)}}};
(function(){function a(a){var d={focus:"visible",focusin:"visible",pageshow:"visible",blur:"hidden",focusout:"hidden",pagehide:"hidden"};a=a||window.event;a.type in d?document.body.className=d[a.type]:(document.body.className=this[c]?"hidden":"visible","hidden"===document.body.className?s_oMain.stopUpdate():s_oMain.startUpdate())}var c="hidden";c in document?document.addEventListener("visibilitychange",a):(c="mozHidden")in document?document.addEventListener("mozvisibilitychange",a):(c="webkitHidden")in
document?document.addEventListener("webkitvisibilitychange",a):(c="msHidden")in document?document.addEventListener("msvisibilitychange",a):"onfocusin"in document?document.onfocusin=document.onfocusout=a:window.onpageshow=window.onpagehide=window.onfocus=window.onblur=a})();
function CTextButton(a,c,b,d,f,e,g){var h,m,n,q,t;this._init=function(a,b,c,d,e,f,g){h=[];m=[];var x=createBitmap(c),w=Math.ceil(g/20);t=new createjs.Text(d,"bold "+g+"px "+e,"#ff4200");t.textAlign="center";t.textBaseline="alphabetic";var v=t.getBounds();t.x=c.width/2+w;t.y=Math.floor(c.height/2)+v.height/3+w;q=new createjs.Text(d,"bold "+g+"px "+e,f);q.textAlign="center";q.textBaseline="alphabetic";v=q.getBounds();q.x=c.width/2;q.y=Math.floor(c.height/2)+v.height/3;n=new createjs.Container;n.x=a;
n.y=b;n.regX=c.width/2;n.regY=c.height/2;n.addChild(x,t,q);s_oInteractiveStage.addChild(n);s_oInteractiveStage.update();this._initListener()};this.unload=function(){n.off("mousedown");n.off("pressup");s_oInteractiveStage.removeChild(n)};this.setVisible=function(a){n.visible=a};this._initListener=function(){n.on("mousedown",this.buttonDown);n.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,c){h[a]=b;m[a]=c};this.buttonRelease=function(){n.scaleX=1;n.scaleY=1;h[ON_MOUSE_UP]&&h[ON_MOUSE_UP].call(m[ON_MOUSE_UP]);
s_oInteractiveStage.update()};this.buttonDown=function(){n.scaleX=.9;n.scaleY=.9;h[ON_MOUSE_DOWN]&&h[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN]);s_oInteractiveStage.update()};this.setTextPosition=function(a){q.y=a;t.y=a+2};this.setPosition=function(a,b){n.x=a;n.y=b};this.setX=function(a){n.x=a};this.setY=function(a){n.y=a};this.getButtonImage=function(){return n};this.getX=function(){return n.x};this.getY=function(){return n.y};this._init(a,c,b,d,f,e,g);return this}
function CSliderBox(a,c,b,d){var f,e=!1,g,h,m;this._init=function(a,b,c,d){f=!1;g=new createjs.Container;g.x=a;g.y=b;d.addChild(g);a=new createjs.SpriteSheet({images:[c],frames:{width:c.width/2,height:c.height,regX:c.width/2/2,regY:c.height/2},animations:{state_true:[0],state_false:[1]}});h=createSprite(a,"state_"+e,c.width/2/2,c.height/2,c.width/2,c.height);m=new createjs.Shape;m.graphics.beginFill("white").drawCircle(0,0,.5*s_oInterface.getStroke());g.addChild(h,m);this._initListener()};this.unload=
function(){g.off("mousedown",this.buttonDown);g.off("pressup",this.buttonRelease);d.removeChild(g)};this.setVisible=function(a){g.visible=a};this.setSliderVisible=function(a){f=a};this.setCircleSize=function(a){m.graphics.clear();m.graphics.beginFill("white").drawCircle(0,0,.5*a)};this._initListener=function(){g.on("mousedown",this.buttonDown);g.on("pressup",this.buttonRelease)};this.buttonRelease=function(){g.scaleX=1;g.scaleY=1;f=!f;s_oInterface.setSliderVisible(f);f||s_oGame.setTempColor();e=!e;
h.gotoAndStop("state_"+e);s_oInteractiveStage.update()};this.buttonDown=function(){g.scaleX=.9;g.scaleY=.9;f||s_oGame.saveTempColor();s_oInterface.disableStroke();s_oInteractiveStage.update()};this.setPosition=function(a,b){g.x=a;g.y=b};this.setX=function(a){g.x=a};this.setY=function(a){g.y=a};this.getButtonImage=function(){return g};this.getX=function(){return g.x};this.getY=function(){return g.y};this._init(a,c,b,d);return this}
function CSlider(a,c,b,d,f,e){var g,h,m,n,q,t,k,l,p;this._init=function(a,b,c,d,e,f){g=Math.round((e-d)/2);p=new createjs.Container;p.x=a;p.y=b;f.addChild(p);a=new createjs.SpriteSheet({images:[c],frames:{width:c.width/3,height:c.height,regX:c.width/3/2,regY:c.height/2},animations:{pointer:[0],bar:[1],label:[2]}});t=createSprite(a,"bar",c.width/3/2,c.height/2,c.width/3,c.height);t.stop();p.addChild(t);k=createSprite(a,"label",c.width/3/2,c.height/2,c.width/3,c.height);k.stop();k.y=-c.height/2-c.width/
3/2;p.addChild(k);l=new createjs.Text(g,"bold 30px Arial","#ffffff");l.y=-c.height/2-c.width/3/2;l.textAlign="center";l.textBaseline="middle";l.lineWidth=280;p.addChild(l);q=createSprite(a,"pointer",c.width/3/2,c.height/2,c.width/3,c.height);q.stop();p.addChild(q);m=c.height/2-c.width/3/2;h=-c.height/2+c.width/3/2;p.visible=!1;this._initListener()};this.unload=function(){q.off("pressmove",this.buttonDown);q.off("pressup",this.buttonRelease);e.removeChild(p)};this._initListener=function(){q.on("pressmove",
this.buttonDown);q.on("pressup",this.buttonRelease)};this.buttonRelease=function(){s_oGame.sliderMoving(!1);s_oInterface.setSliderVisible(!1);s_oInterface.setStroke(g);s_oInterface.restartStroke();s_oInteractiveStage.update()};this.buttonDown=function(a){s_oGame.sliderMoving(!0);a=p.globalToLocal(a.stageX,a.stageY);q.y=a.y;a.y>m?q.y=m:a.y<h&&(q.y=h);n.setValue();l.text=g;s_oInterface.setCircleImage(g);s_oInteractiveStage.update()};this.setValue=function(){g=(q.y-m)/(h-m)*(f-d)+d;g=Math.round(g)};
this.getValue=function(){return g};this.setLabel=function(){};this.setPosition=function(a,b){q.x=a;q.y=b};this.setVisible=function(a){p.visible=a;s_oInteractiveStage.update()};this.getVisible=function(){return p.visible};n=this;this._init(a,c,b,d,f,e)}
function CPreloader(){var a,c,b,d,f,e,g;this._init=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("progress_bar","./sprites/progress_bar.png");s_oSpriteLibrary.loadSprites();g=new createjs.Container;s_oStage.addChild(g)};this.unload=function(){g.removeAllChildren()};this.hide=function(){var a=this;setTimeout(function(){createjs.Tween.get(e).to({alpha:1},500).call(function(){a.unload();
s_oMain.gotoMenu()})},1E3)};this._onImagesLoaded=function(){};this._onAllImagesLoaded=function(){this.attachSprites();s_oMain.preloaderReady()};this.attachSprites=function(){var h=createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));g.addChild(h);h=s_oSpriteLibrary.getSprite("progress_bar");d=createBitmap(h);d.x=CANVAS_WIDTH/2-h.width/2;d.y=CANVAS_HEIGHT-170;g.addChild(d);a=h.width;c=h.height;f=new createjs.Shape;f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x,d.y,1,c);g.addChild(f);d.mask=
f;b=new createjs.Text("","30px Arial","#fff");b.x=CANVAS_WIDTH/2;b.y=CANVAS_HEIGHT-125;b.shadow=new createjs.Shadow("#000",2,2,2);b.textBaseline="alphabetic";b.textAlign="center";g.addChild(b);e=new createjs.Shape;e.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);e.alpha=0;g.addChild(e)};this.refreshLoader=function(e){b.text=e+"%";f.graphics.clear();e=Math.floor(e*a/100);f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x,d.y,e,c)};this._init()}
function CPen(a,c,b,d,f){var e,g,h,m,n;this._init=function(a,b,c,d,f){e=50;g=d;n=f;"eraser"===c?(d=s_oSpriteLibrary.getSprite("eraser"),h=createBitmap(d),h.x=a,h.y=b,h.cache(0,0,100,200),h.on("mousedown",this._setEraser)):(d=s_oSpriteLibrary.getSprite("pen"),h=createBitmap(d),h.x=a,h.y=b,a=hexToRgb(c).r,b=hexToRgb(c).g,c=hexToRgb(c).b,c=new createjs.ColorFilter(a/255,b/255,c/255,1),h.filters=[c],h.cache(0,0,50,200),h.on("mousedown",this._setColor));n.addChild(h)};this.unload=function(){h.off("mousedown",
this._setColor);n.removeChild(h)};this._setColor=function(){s_oInterface.setActivePen(b,g);m.setActive(!0)};this._setEraser=function(){s_oInterface.setActivePen("#FFFFFF",g);m.setActive(!0)};this.setActive=function(a){h.y=a?c-e:c;h.updateCache();s_oInteractiveStage.update()};m=this;this._init(a,c,b,d,f)}
function CModeMenu(){var a,c,b,d,f,e,g,h,m,n,q,t;this._init=function(){b=createBitmap(s_oSpriteLibrary.getSprite("bg_modemenu"));f=new createjs.Text(TEXT_CHOOSE,"bold 60px walibi","#ff4200");f.x=CANVAS_WIDTH/2;f.y=CANVAS_HEIGHT/2+30;f.textAlign="center";f.textBaseline="middle";f.lineWidth=1700;f.outline=10;d=new createjs.Text(TEXT_CHOOSE,"bold 60px walibi","#eedc20");d.x=CANVAS_WIDTH/2;d.y=CANVAS_HEIGHT/2+30;d.textAlign="center";d.textBaseline="middle";d.lineWidth=1700;g=new createjs.Container;g.x=
CANVAS_WIDTH/2-500;g.y=CANVAS_HEIGHT/2-190;g.scaleX=.3;g.scaleY=.3;g.on("click",this._onImageClicked,this,!1,"image1");var k=s_oSpriteLibrary.getSprite("image1"),l=k.width,p=k.height,r=new createjs.Shape;r.graphics.beginFill("#ffffff").drawRect(-l/2,-p/2,l,p);g.addChild(r);k=createBitmap(k);k.regX=l/2;k.regY=p/2;g.addChild(k);r=new createjs.Shape;r.graphics.beginStroke("#000000").setStrokeStyle(10).drawRect(-l/2,-p/2,l,p);g.addChild(r);h=new createjs.Container;h.x=CANVAS_WIDTH/2;h.y=CANVAS_HEIGHT/
2-190;h.scaleX=.3;h.scaleY=.3;h.on("click",this._onImageClicked,this,!1,"image2");k=s_oSpriteLibrary.getSprite("image2");l=k.width;p=k.height;r=new createjs.Shape;r.graphics.beginFill("#ffffff").drawRect(-l/2,-p/2,l,p);h.addChild(r);k=createBitmap(k);k.regX=l/2;k.regY=p/2;h.addChild(k);r=new createjs.Shape;r.graphics.beginStroke("#000000").setStrokeStyle(10).drawRect(-l/2,-p/2,l,p);h.addChild(r);m=new createjs.Container;m.x=CANVAS_WIDTH/2+500;m.y=CANVAS_HEIGHT/2-190;m.scaleX=.3;m.scaleY=.3;m.on("click",
this._onImageClicked,this,!1,"image3");k=s_oSpriteLibrary.getSprite("image3");l=k.width;p=k.height;r=new createjs.Shape;r.graphics.beginFill("#ffffff").drawRect(-l/2,-p/2,l,p);m.addChild(r);k=createBitmap(k);k.regX=l/2;k.regY=p/2;m.addChild(k);r=new createjs.Shape;r.graphics.beginStroke("#000000").setStrokeStyle(10).drawRect(-l/2,-p/2,l,p);m.addChild(r);n=new createjs.Container;n.x=CANVAS_WIDTH/2-500;n.y=CANVAS_HEIGHT/2+230;n.scaleX=.3;n.scaleY=.3;n.on("click",this._onImageClicked,this,!1,"image4");
k=s_oSpriteLibrary.getSprite("image4");l=k.width;p=k.height;r=new createjs.Shape;r.graphics.beginFill("#ffffff").drawRect(-l/2,-p/2,l,p);n.addChild(r);k=createBitmap(k);k.regX=l/2;k.regY=p/2;n.addChild(k);r=new createjs.Shape;r.graphics.beginStroke("#000000").setStrokeStyle(10).drawRect(-l/2,-p/2,l,p);n.addChild(r);q=new createjs.Container;q.x=CANVAS_WIDTH/2;q.y=CANVAS_HEIGHT/2+230;q.scaleX=.3;q.scaleY=.3;q.on("click",this._onImageClicked,this,!1,"image5");k=s_oSpriteLibrary.getSprite("image5");l=
k.width;p=k.height;r=new createjs.Shape;r.graphics.beginFill("#ffffff").drawRect(-l/2,-p/2,l,p);q.addChild(r);k=createBitmap(k);k.regX=l/2;k.regY=p/2;q.addChild(k);r=new createjs.Shape;r.graphics.beginStroke("#000000").setStrokeStyle(10).drawRect(-l/2,-p/2,l,p);q.addChild(r);t=new createjs.Container;t.x=CANVAS_WIDTH/2+500;t.y=CANVAS_HEIGHT/2+230;t.scaleX=.3;t.scaleY=.3;t.on("click",this._onImageClicked,this,!1,"image6");k=s_oSpriteLibrary.getSprite("image6");l=k.width;p=k.height;r=new createjs.Shape;
r.graphics.beginFill("#ffffff").drawRect(-l/2,-p/2,l,p);t.addChild(r);k=createBitmap(k);k.regX=l/2;k.regY=p/2;t.addChild(k);r=new createjs.Shape;r.graphics.beginStroke("#000000").setStrokeStyle(10).drawRect(-l/2,-p/2,l,p);t.addChild(r);s_oInteractiveStage.addChild(b,f,d,g,h,m,n,q,t);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)k=s_oSpriteLibrary.getSprite("audio_icon"),a=CANVAS_WIDTH-k.height/2-10,c=k.height/2+10,e=new CToggle(a,c,k,s_bAudioActive),e.addEventListener(ON_MOUSE_UP,this._onAudioToggle,
this);this.refreshButtonPos(s_iOffsetX,s_iOffsetY)};this.unload=function(){if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)e.unload(),e=null;s_oInteractiveStage.removeAllChildren();g.off("click",this._onImageClicked,this,!1,"image1");h.off("click",this._onImageClicked,this,!1,"image2");m.off("click",this._onImageClicked,this,!1,"image3");n.off("click",this._onImageClicked,this,!1,"image4");q.off("click",this._onImageClicked,this,!1,"image5");q.off("click",this._onImageClicked,this,!1,"image6");s_oModeMenu=
null;s_oInteractiveStage.update()};this.refreshButtonPos=function(b,d){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||e.setPosition(a-b,d+c);s_oInteractiveStage.update()};this._onAudioToggle=function(){createjs.Sound.setMute(s_bAudioActive);s_bAudioActive=!s_bAudioActive};this._onImageClicked=function(a,b){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("click");this.unload();s_oMain.gotoGame(b)};s_oModeMenu=this;this._init()}var s_oModeMenu=null;
function CMenu(){var a,c,b,d,f;this._init=function(){b=createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));s_oInteractiveStage.addChild(b);var e=s_oSpriteLibrary.getSprite("but_play");d=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT-200,e,TEXT_PLAY,"walibi","#eedc20",80);d.addEventListener(ON_MOUSE_UP,this._onButPlayRelease,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)e=s_oSpriteLibrary.getSprite("audio_icon"),a=CANVAS_WIDTH-e.height/2-10,c=e.height/2+10,f=new CToggle(a,c,e,s_bAudioActive),f.addEventListener(ON_MOUSE_UP,
this._onAudioToggle,this);this.refreshButtonPos(s_iOffsetX,s_iOffsetY)};this.unload=function(){d.unload();d=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)f.unload(),f=null;s_oInteractiveStage.removeChild(b);s_oMenu=b=null};this.refreshButtonPos=function(b,d){f.setPosition(a-b,d+c);setTimeout(function(){s_oInteractiveStage.update()},300)};this._onAudioToggle=function(){createjs.Sound.setMute(s_bAudioActive);s_bAudioActive=!s_bAudioActive};this._onButPlayRelease=function(){this.unload();!1!==DISABLE_SOUND_MOBILE&&
!1!==s_bMobile||createjs.Sound.play("click");s_oMain.gotoModeMenu()};s_oMenu=this;this._init()}var s_oMenu=null;