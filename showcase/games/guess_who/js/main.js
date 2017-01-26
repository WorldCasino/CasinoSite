function CGfxButton(a,c,b){var f,e,d;this._init=function(a,b,c){f=[];e=[];d=new createjs.Bitmap(c);d.x=a;d.y=b;d.regX=c.width/2;d.regY=c.height/2;s_oStage.addChild(d);this._initListener()};this.unload=function(){d.off("mousedown",this.buttonDown);d.off("pressup",this.buttonRelease);s_oStage.removeChild(d)};this.setVisible=function(a){d.visible=a};this._initListener=function(){d.on("mousedown",this.buttonDown);d.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,d){f[a]=b;e[a]=d};
this.buttonRelease=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("click");d.scaleX=1;d.scaleY=1;f[ON_MOUSE_UP]&&f[ON_MOUSE_UP].call(e[ON_MOUSE_UP])};this.buttonDown=function(){d.scaleX=.9;d.scaleY=.9;f[ON_MOUSE_DOWN]&&f[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN])};this.setPosition=function(a,b){d.x=a;d.y=b};this.setX=function(a){d.x=a};this.setY=function(a){d.y=a};this.getButtonImage=function(){return d};this.getX=function(){return d.x};this.getY=function(){return d.y};this._init(a,
c,b);return this}
function CGame(a){var c,b,f,e,d,h,g,k,m,l,n,p=null;this._init=function(){c=0;l=new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_game"));s_oStage.addChild(l);this._initCharacters();n=new CInterface;d=[];h=[];for(var a=0;a<s_oGuessSettings.getNumQuestions();a++)d[a]={question:s_oGuessSettings.getQuestion(a),index:a},h[a]={question:s_oGuessSettings.getQuestion(a),index:a};m=[]};this.unload=function(){for(var a=0;a<g.length;a++)g[a].unload();p&&p.unload();n.unload();s_oStage.removeAllChildren()};this._initCharacters=
function(){g=[];for(var a,b=13,d=12,c=0;c<NUM_CHARACTER;c++)a=new CCharacter(b,d,c,s_oGuessSettings.getCharacterName(c)),a.addEventListener(ON_MOUSE_UP,this._onCharacterRelease,this),g[c]=a,0===(c+1)%6?(b=13,d+=165):b+=127;k=[];a=s_oSpriteLibrary.getSprite("character_mini");for(var b=new createjs.SpriteSheet({images:[a],frames:{width:a.width/2,height:a.height,regX:a.width/4,regY:a.height/2},animations:{enable:[0],disable:[1]}}),d=820,e=640,c=0;c<NUM_CHARACTER;c++)a=new createjs.Sprite(b,"enable"),
a.x=d,a.y=e,s_oStage.addChild(a),k[c]=a,0===(c+1)%6?(d=820,e+=32):d+=32};this.checkIfCharacterInArray=function(a,b){for(var d=0;d<b.length;d++)if(a===b[d])return!0;return!1};this.findDeselectedCharacter=function(){for(var a=0,b=0;b<NUM_CHARACTER;b++)!1===g[b].isUnselectable()&&a++;return a};this.playerAskQuestion=function(a,b){var e=s_oGuessSettings.getCharacterLinked(b),h=this.checkIfCharacterInArray(f,e),k=this.findDeselectedCharacter(),l=0;if(h)for(h=0;h<g.length;h++)!1===this.checkIfCharacterInArray(h,
e)&&!1===g[h].isUnselectable()&&(g[h].unselect(),l++);else for(h=0;h<e.length;h++)!1===g[e[h]].isUnselectable()&&(g[e[h]].unselect(),l++);e=100*l/k;60<e?(n.showEncouragement(TEXT_ENCOURAGEMENT_3),c+=100):40<e?(n.showEncouragement(TEXT_ENCOURAGEMENT_2),c+=40):26<e&&(n.showEncouragement(TEXT_ENCOURAGEMENT_1),c+=10);n.refreshScore(c);d.splice(a,1);if(this.checkIfPlayerWins())this._win();else{var m=this;setTimeout(function(){m.cpuAskQuestion()},TIME_CPU_QUESTION)}};this.cpuAskQuestion=function(){var a;
do a=Math.floor(Math.random()*k.length);while("disable"===k[a].currentAnimation);a=s_oGuessSettings.getQuestionsRelatedToCharacter(a);for(var b=[],d=0;d<a.length;d++){for(var c=!1,f=0;f<m.length;f++)if(a[d]===m[f]){c=!0;break}!1===c&&b.push(a[d])}a=Math.floor(Math.random()*b.length);e=h[b[a]].index;n.showCpuPanel(h[b[a]].question);m.push(e)};this.checkIfPlayerReplyIsCorrect=function(a){var d=s_oGuessSettings.getCharacterLinked(e),c=this.checkIfCharacterInArray(b,d);if(c!==a)n.showWrongReply();else{if(c)for(a=
0;a<k.length;a++)!1===this.checkIfCharacterInArray(a,d)&&k[a].gotoAndStop("disable");else for(a=0;a<d.length;a++)k[d[a]].gotoAndStop("disable");n.hideCpuPanel();this.checkIfCpuWins()?this._gameOver():n.enableQuestionGUI()}};this.disableCharacter=function(){for(var a=0;a<NUM_CHARACTER;a++)g[a].disable()};this.enableCharacter=function(){for(var a=0;a<NUM_CHARACTER;a++)g[a].enable()};this.checkIfPlayerWins=function(){for(var a=0,b=0;b<NUM_CHARACTER;b++)!1===g[b].isUnselectable()&&a++;return 1===a?!0:
!1};this.checkIfCpuWins=function(){for(var a=0,b=0;b<NUM_CHARACTER;b++)"disable"!==k[b].currentAnimation&&a++;return 1===a?!0:!1};this._gameOver=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("gameover");p=CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));p.show(TEXT_LOSE,TEXT_YOUR_CHARACTER,b,c)};this._win=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("win");c+=500;n.refreshScore(c);p=CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));p.show(TEXT_WIN,
TEXT_CPU_CHARACTER,f,c)};this.chooseCharactersToGuess=function(a){b=a;f=Math.floor(Math.random()*(NUM_CHARACTER-1));n.setCharacters(b);this.disableCharacter();};this._onCharacterRelease=function(a){this.chooseCharactersToGuess(a);n.showMsgBox(TEXT_PLAYER_TURN);n.enableQuestionGUI()};this.onExit=function(){this.unload();s_oMain.gotoMenu();$(s_oMain).trigger("restart")};this.getPlayerQuestions=function(a){return d[a]};this.getNumPlayerQuestions=function(){return d.length};s_oGame=
this;TIME_CPU_QUESTION=a.time_cpu_question;this._init()}var s_oGame;
function CEndPanel(a){var c,b,f,e,d;this._init=function(a){c=new createjs.Bitmap(a);c.x=0;c.y=0;f=new createjs.Text("","bold 60px latin_xcn_btregular","#ffffff");f.x=CANVAS_WIDTH/2;f.y=CANVAS_HEIGHT/2-132;f.textAlign="center";b=new createjs.Text("","bold 40px latin_xcn_btregular","#ffffff");b.x=CANVAS_WIDTH/2-60;b.y=CANVAS_HEIGHT/2+30;b.textAlign="center";b.lineHeight=40;e=new createjs.Text("","bold 40px latin_xcn_btregular","#ffffff");e.x=CANVAS_WIDTH/2;e.y=CANVAS_HEIGHT/2-50;e.textAlign="center";
d=new createjs.Container;d.alpha=0;d.visible=!1;d.addChild(c,b,f,e);s_oStage.addChild(d)};this.unload=function(){d.off("mousedown",this._onExit)};this._initListener=function(){d.on("mousedown",this._onExit)};this.show=function(a,c,k,m){f.text=a;b.text=c;e.text=TEXT_FINAL_SCORE+" "+m;a=s_oSpriteLibrary.getSprite("character_"+k);a=new createjs.Bitmap(a);a.x=CANVAS_WIDTH/2+20;a.y=CANVAS_HEIGHT/2;d.addChild(a);d.visible=!0;var l=this;createjs.Tween.get(d).to({alpha:1},500).call(function(){l._initListener()});
$(s_oMain).trigger("save_score",m)};this._onExit=function(){d.off("mousedown",this._onExit);s_oStage.removeChild(d);s_oGame.onExit()};this._init(a);return this}
function CEncouragement(a,c){var b,f,e;this._init=function(a,c){e=new createjs.Container;e.x=a;e.y=c;s_oStage.addChild(e);var g=s_oSpriteLibrary.getSprite("encouragment"),k=new createjs.Bitmap(g);e.addChild(k);f=new createjs.Text("","70px latin_xcn_btregular","#000");f.x=g.width/2+2;f.y=72;f.textAlign="center";f.textBaseline="alphabetic";e.addChild(f);b=new createjs.Text("","70px latin_xcn_btregular","#FFCC00");b.x=g.width/2;b.y=70;b.textAlign="center";b.textBaseline="alphabetic";e.addChild(b)};this.show=
function(a){f.text=a;b.text=a;var c=this;createjs.Tween.get(e).to({y:50},500,createjs.Ease.quartOut).call(function(){setTimeout(function(){c.hide()},1E3)})};this.hide=function(){createjs.Tween.get(e).to({y:-200},1E3,createjs.Ease.quartOut)};this._init(a,c)}
function CCpuPanel(){var a,c,b,f,e,d;this._init=function(){d=new createjs.Container;d.visible=!1;d.alpha=0;s_oStage.addChild(d);var h=new createjs.Bitmap(s_oSpriteLibrary.getSprite("msg_box"));d.addChild(h);e=new createjs.Bitmap(s_oSpriteLibrary.getSprite("wrong_answer"));e.x=150;e.y=410;e.alpha=0;d.addChild(e);a=new createjs.Text(TEXT_CPU_PANEL_TITLE,"60px latin_xcn_btregular","#FF6699");a.textAlign="center";a.x=CANVAS_WIDTH/2;a.y=250;d.addChild(a);c=new createjs.Text("","50px latin_xcn_btregular",
"#fff");c.textAlign="center";c.lineHeight=65;c.x=CANVAS_WIDTH/2;c.y=350;d.addChild(c);b=new CGfxSpriteButton(CANVAS_WIDTH/2+220,CANVAS_HEIGHT/2+124,s_oSpriteLibrary.getSprite("but_ok"),!1);b.addEventListener(ON_MOUSE_UP,this._onYesRelease,this);d.addChild(b.getSprite());f=new CGfxSpriteButton(CANVAS_WIDTH/2+140,CANVAS_HEIGHT/2+124,s_oSpriteLibrary.getSprite("but_no"),!1);f.addEventListener(ON_MOUSE_UP,this._onNoRelease,this);d.addChild(f.getSprite())};this.show=function(a){var b=Math.floor(a.length/
2),e=b;if(" "!==a.charAt(e))for(e=b+1;" "!==a.charAt(e);)e++;a=a.substring(0,e)+"\n"+a.substr(e);c.text=a;d.visible=!0;createjs.Tween.get(d).to({alpha:1},400)};this.hide=function(){d.visible=!1;d.alpha=0};this.showWrongReply=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("alert");var a=this;createjs.Tween.get(e).to({alpha:1},200).call(function(){setTimeout(function(){a.hideWrongReply()},1E3)})};this.hideWrongReply=function(){createjs.Tween.get(e).to({alpha:0},200)};this._onYesRelease=
function(){s_oGame.checkIfPlayerReplyIsCorrect(!0)};this._onNoRelease=function(){s_oGame.checkIfPlayerReplyIsCorrect(!1)};this._init()}
function CCharacter(a,c,b,f){var e=!1,d,h,g,k,m,l,n,p,r,s;this._init=function(a,b,c,e){d=c;p=new createjs.Container;p.x=a;p.y=b;s_oStage.addChild(p);a=s_oSpriteLibrary.getSprite("character_"+c);m=new createjs.Bitmap(a);p.addChild(m);h=a.width;g=a.height;l=new createjs.Text(e,"37px latin_xcn_btregular","#fff");l.x=a.width/2;l.y=a.height+30;l.textAlign="center";l.textBaseline="alphabetic";p.addChild(l);k=new createjs.Bitmap(s_oSpriteLibrary.getSprite("disable_character"));k.visible=!1;p.addChild(k);
n=new createjs.Bitmap(s_oSpriteLibrary.getSprite("character_over"));n.visible=!1;p.addChild(n);r=[];s=[];this._initListener()};this.unload=function(){m.off("mousedown",this.buttonDown);m.off("pressup",this.buttonRelease);!1===s_bMobile&&(m.off("rollover",this.mouseOver),m.off("rollout",this.mouseOut))};this.enable=function(){e=!1};this.disable=function(){e=!0;n.visible=!1};this.unselect=function(){e=!0;var a=(new createjs.ColorMatrix).adjustBrightness(-40);m.filters=[new createjs.ColorMatrixFilter(a)];
m.cache(0,0,h,g);k.visible=!0};this.restore=function(){e=!1;var a=(new createjs.ColorMatrix).adjustBrightness(0);m.filters=[new createjs.ColorMatrixFilter(a)];m.cache(0,0,h,g);k.visible=!1};this._initListener=function(){m.on("mousedown",this.buttonDown);m.on("pressup",this.buttonRelease);!1===s_bMobile&&(m.on("rollover",this.mouseOver),m.on("rollout",this.mouseOut))};this.addEventListener=function(a,b,d){r[a]=b;s[a]=d};this.buttonRelease=function(){e||(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("select_character"),
r[ON_MOUSE_UP]&&r[ON_MOUSE_UP].call(s[ON_MOUSE_UP],d))};this.buttonDown=function(){e||r[ON_MOUSE_DOWN]&&r[ON_MOUSE_DOWN].call(s[ON_MOUSE_DOWN])};this.mouseOver=function(){e||(n.visible=!0,r[ON_MOUSE_OVER]&&r[ON_MOUSE_OVER].call(s[ON_MOUSE_OVER],_oParams))};this.mouseOut=function(){e||(n.visible=!1,r[ON_MOUSE_OUT]&&r[ON_MOUSE_OUT].call(s[ON_MOUSE_OUT],_oParams))};this.isUnselectable=function(){return k.visible};this._init(a,c,b,f)}
function CSpriteLibrary(){var a,c,b,f,e,d;this.init=function(h,g,k){b=c=0;f=h;e=g;d=k;a={}};this.addSprite=function(b,d){a.hasOwnProperty(b)||(a[b]={szPath:d,oSprite:new Image},c++)};this.getSprite=function(b){return a.hasOwnProperty(b)?a[b].oSprite:null};this._onSpritesLoaded=function(){e.call(d)};this._onSpriteLoaded=function(){f.call(d);++b==c&&this._onSpritesLoaded()};this.loadSprites=function(){for(var b in a)a[b].oSprite.oSpriteLibrary=this,a[b].oSprite.onload=function(){this.oSpriteLibrary._onSpriteLoaded()},
a[b].oSprite.src=a[b].szPath};this.getNumSprites=function(){return c}}var CANVAS_WIDTH=1024,CANVAS_HEIGHT=768,DISABLE_SOUND_MOBILE=!0,FPS_TIME=1E3/24,STATE_LOADING=0,STATE_MENU=1,STATE_HELP=1,STATE_GAME=3,ON_MOUSE_DOWN=0,ON_MOUSE_UP=1,ON_MOUSE_OVER=2,ON_MOUSE_OUT=3,ON_DRAG_START=4,ON_DRAG_END=5,NUM_CHARACTER=24,TIME_CPU_QUESTION;
function CToggle(a,c,b,f){var e,d,h,g;this._init=function(a,b,c,f){d=[];h=[];c=new createjs.SpriteSheet({images:[c],frames:{width:c.width/2,height:c.height,regX:c.width/2/2,regY:c.height/2},animations:{state_true:[0],state_false:[1]}});e=f;g=new createjs.Sprite(c,"state_"+e);g.x=a;g.y=b;g.stop();s_oStage.addChild(g);this._initListener()};this.unload=function(){g.off("mousedown",this.buttonDown);g.off("pressup",this.buttonRelease);s_oStage.removeChild(g)};this._initListener=function(){g.on("mousedown",
this.buttonDown);g.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,c){d[a]=b;h[a]=c};this.setActive=function(a){e=a;g.gotoAndStop("state_"+e)};this.buttonRelease=function(){g.scaleX=1;g.scaleY=1;!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("click");e=!e;g.gotoAndStop("state_"+e);d[ON_MOUSE_UP]&&d[ON_MOUSE_UP].call(h[ON_MOUSE_UP],e)};this.buttonDown=function(){g.scaleX=.9;g.scaleY=.9;d[ON_MOUSE_DOWN]&&d[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN])};this._init(a,c,b,
f)}
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||
navigator.vendor||window.opera);$(window).resize(function(){sizeHandler()});function trace(a){console.log(a)}$(window).ready(function(){sizeHandler()});window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){window.matchMedia("(orientation: portrait)").matches&&sizeHandler();window.matchMedia("(orientation: landscape)").matches&&sizeHandler()}

function sizeHandler(){window.scrollTo(0,1);if($("#canvas")){var a=CANVAS_WIDTH,b=CANVAS_HEIGHT,c,d;!0===inIframe()&&"ios"==getMobileOperatingSystem()?top.location.href=document.location.href:(c=window.innerWidth,d=window.innerHeight,console.log("h: "+d),multiplier=Math.min(d/b,c/a),a*=multiplier,b*=multiplier,$("#canvas").css("width",a+"px"),$("#canvas").css("height",b+"px"),$("#canvas").css("left",c/2-a/2+"px"))}}
function getMobileOperatingSystem(){var a=navigator.userAgent||navigator.vendor||window.opera;return a.match(/iPad/i)||a.match(/iPhone/i)||a.match(/iPod/i)?"ios":a.match(/Android/i)?"android":"unknown"}function inIframe(){try{return window.self!==window.top}catch(a){return!0}};

function randomFloatBetween(a,c,b){"undefined"===typeof b&&(b=2);return parseFloat(Math.min(a+Math.random()*(c-a),c).toFixed(b))}
function shuffle(a){for(var c=a.length,b,f;0!==c;)f=Math.floor(Math.random()*c),c-=1,b=a[c],a[c]=a[f],a[f]=b;return a}function formatTime(a){a/=1E3;var c=Math.floor(a/60);a=parseFloat(a-60*c).toFixed(1);var b="",b=10>c?b+("0"+c+":"):b+(c+":");return b=10>a?b+("0"+a):b+a}function degreesToRadians(a){return a*Math.PI/180}function checkRectCollision(a,c){var b,f;b=getBounds(a,.9);f=getBounds(c,.98);return calculateIntersection(b,f)}
function calculateIntersection(a,c){var b,f,e,d,h,g,k,m;b=a.x+(e=a.width/2);f=a.y+(d=a.height/2);h=c.x+(g=c.width/2);k=c.y+(m=c.height/2);b=Math.abs(b-h)-(e+g);f=Math.abs(f-k)-(d+m);return 0>b&&0>f?(b=Math.min(Math.min(a.width,c.width),-b),f=Math.min(Math.min(a.height,c.height),-f),{x:Math.max(a.x,c.x),y:Math.max(a.y,c.y),width:b,height:f,rect1:a,rect2:c}):null}
function getBounds(a,c){var b={x:Infinity,y:Infinity,width:0,height:0};if(a instanceof createjs.Container){b.x2=-Infinity;b.y2=-Infinity;var f=a.children,e=f.length,d,h;for(h=0;h<e;h++)d=getBounds(f[h],1),d.x<b.x&&(b.x=d.x),d.y<b.y&&(b.y=d.y),d.x+d.width>b.x2&&(b.x2=d.x+d.width),d.y+d.height>b.y2&&(b.y2=d.y+d.height);Infinity==b.x&&(b.x=0);Infinity==b.y&&(b.y=0);Infinity==b.x2&&(b.x2=0);Infinity==b.y2&&(b.y2=0);b.width=b.x2-b.x;b.height=b.y2-b.y;delete b.x2;delete b.y2}else{var g,k;a instanceof createjs.Bitmap?
(e=a.sourceRect||a.image,h=e.width*c,g=e.height*c):a instanceof createjs.Sprite?a.spriteSheet._frames&&a.spriteSheet._frames[a.currentFrame]&&a.spriteSheet._frames[a.currentFrame].image?(e=a.spriteSheet.getFrame(a.currentFrame),h=e.rect.width,g=e.rect.height,f=e.regX,k=e.regY):(b.x=a.x||0,b.y=a.y||0):(b.x=a.x||0,b.y=a.y||0);f=f||0;h=h||0;k=k||0;g=g||0;b.regX=f;b.regY=k;e=a.localToGlobal(0-f,0-k);d=a.localToGlobal(h-f,g-k);h=a.localToGlobal(h-f,0-k);f=a.localToGlobal(0-f,g-k);b.x=Math.min(Math.min(Math.min(e.x,
d.x),h.x),f.x);b.y=Math.min(Math.min(Math.min(e.y,d.y),h.y),f.y);b.width=Math.max(Math.max(Math.max(e.x,d.x),h.x),f.x)-b.x;b.height=Math.max(Math.max(Math.max(e.y,d.y),h.y),f.y)-b.y}return b}function NoClickDelay(a){this.element=a;window.Touch&&this.element.addEventListener("touchstart",this,!1)}
NoClickDelay.prototype={handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a)}},onTouchStart:function(a){a.preventDefault();this.moved=!1;this.element.addEventListener("touchmove",this,!1);this.element.addEventListener("touchend",this,!1)},onTouchMove:function(a){this.moved=!0},onTouchEnd:function(a){this.element.removeEventListener("touchmove",this,!1);this.element.removeEventListener("touchend",
this,!1);if(!this.moved){a=document.elementFromPoint(a.changedTouches[0].clientX,a.changedTouches[0].clientY);3==a.nodeType&&(a=a.parentNode);var c=document.createEvent("MouseEvents");c.initEvent("click",!0,!0);a.dispatchEvent(c)}}};
(function(){function a(a){var f={focus:"visible",focusin:"visible",pageshow:"visible",blur:"hidden",focusout:"hidden",pagehide:"hidden"};a=a||window.event;a.type in f?document.body.className=f[a.type]:(document.body.className=this[c]?"hidden":"visible","hidden"===document.body.className?s_oMain.stopUpdate():s_oMain.startUpdate())}var c="hidden";c in document?document.addEventListener("visibilitychange",a):(c="mozHidden")in document?document.addEventListener("mozvisibilitychange",a):(c="webkitHidden")in
document?document.addEventListener("webkitvisibilitychange",a):(c="msHidden")in document?document.addEventListener("msvisibilitychange",a):"onfocusin"in document?document.onfocusin=document.onfocusout=a:window.onpageshow=window.onpagehide=window.onfocus=window.onblur=a})();
function CTextButton(a,c,b,f,e,d,h,g){var k,m,l;this._init=function(a,b,d,c,e,f,g,h){k=[];m=[];var z=new createjs.Bitmap(d),y=Math.ceil(g/30),t=new createjs.Text(c,g+"px "+e,"#000000");t.textAlign="center";t.textBaseline="middle";t.lineHeight=1;var w=t.getBounds();t.x=d.width/2+y;t.y=Math.floor(d.height/2)+w.height/3+y;c=new createjs.Text(c,g+"px "+e,f);c.textAlign="center";c.textBaseline="middle";c.lineHeight=1;w=c.getBounds();c.x=d.width/2;c.y=Math.floor(d.height/2)+w.height/3;l=new createjs.Container;
l.x=a;l.y=b;l.regX=d.width/2;l.regY=d.height/2;l.addChild(z,t,c);!1!==h&&s_oStage.addChild(l);this._initListener()};this.unload=function(){l.off("mousedown");l.off("pressup");s_oStage.removeChild(l)};this.setVisible=function(a){l.visible=a};this._initListener=function(){oParent=this;l.on("mousedown",this.buttonDown);l.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,d){k[a]=b;m[a]=d};this.buttonRelease=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("click");
l.scaleX=1;l.scaleY=1;k[ON_MOUSE_UP]&&k[ON_MOUSE_UP].call(m[ON_MOUSE_UP])};this.buttonDown=function(){l.scaleX=.9;l.scaleY=.9;k[ON_MOUSE_DOWN]&&k[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN])};this.setPosition=function(a,b){l.x=a;l.y=b};this.setX=function(a){l.x=a};this.setY=function(a){l.y=a};this.getButtonImage=function(){return l};this.getX=function(){return l.x};this.getY=function(){return l.y};this.getSprite=function(){return l};this._init(a,c,b,f,e,d,h,g);return this}
function CQuestionAnim(a,c,b,f){var e,d,h,g,k,m;this._init=function(a,b,c,f){m=new createjs.Container;m.x=a;m.y=b;s_oStage.addChild(m);k=new createjs.Container;m.addChild(k);d=new createjs.Text(c,"40px latin_xcn_btregular","#FFCC00");d.textAlign="center";d.textBaseline="middle";d.lineHeight=1;d.maxWidth=510;d.y=15;k.addChild(d);h=new createjs.Text(f,"40px latin_xcn_btregular","#FFCC00");h.textAlign="center";h.x=530;h.textBaseline="middle";h.lineHeight=1;h.maxWidth=510;h.y=15;k.addChild(h);e=new createjs.Text("",
"40px latin_xcn_btregular","#FFCC00");e.textAlign="center";e.textBaseline="middle";e.lineHeight=1;e.x=-530;e.maxWidth=510;e.y=15;k.addChild(e);g=new createjs.Shape;g.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(-267,-10,528,50);m.addChild(g);k.mask=g};this.moveRight=function(a,b){createjs.Tween.hasActiveTweens(k)||(e.text=a,d.text=b,createjs.Tween.get(k).to({x:530},1E3,createjs.Ease.quartOut).call(function(){d.text=a;k.x=0}))};this.moveLeft=function(a,b){createjs.Tween.hasActiveTweens(k)||(d.text=
a,h.text=b,createjs.Tween.get(k).to({x:-530},1E3,createjs.Ease.quartOut).call(function(){d.text=b;k.x=0}))};this.hideQuestion=function(){d.text=""};this.showQuestion=function(a){d.text=a};this._init(a,c,b,f)}
function CPreloader(){var a,c;this._init=function(){c=new createjs.Container;s_oStage.addChild(c);a=new createjs.Text("","bold 22px latin_xcn_btregular center","#ffffff");a.x=CANVAS_WIDTH/2-40;a.y=CANVAS_HEIGHT/2+200;c.addChild(a)};this.unload=function(){c.removeAllChildren()};this.refreshLoader=function(b){a.text=b+"%"};this._init()}
function CMsgBox(){var a,c,b;this._init=function(){b=new createjs.Container;b.alpha=0;b.visible=!1;s_oStage.addChild(b);var f=new createjs.Bitmap(s_oSpriteLibrary.getSprite("msg_box"));b.addChild(f);a=new createjs.Text(TEXT_SCORE,"64px latin_xcn_btregular","#FF6699");a.x=CANVAS_WIDTH/2;a.y=250;a.lineHeight=65;a.textAlign="center";b.addChild(a);c=new CTextButton(CANVAS_WIDTH/2,500,s_oSpriteLibrary.getSprite("but_play"),TEXT_OK,"latin_xcn_btregular","#fff",50,!1);c.addEventListener(ON_MOUSE_UP,this._onOk,
this);b.addChild(c.getSprite())};this.show=function(c){a.text=c;b.visible=!0;createjs.Tween.get(b).to({alpha:1},400)};this.hide=function(){b.visible=!1;b.alpha=0};this._onOk=function(){this.hide()};this._init()}
function CMenu(){var a,c,b,f;this._init=function(){a=new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_menu"));s_oStage.addChild(a);var e=s_oSpriteLibrary.getSprite("but_play");c=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT-80,e,TEXT_PLAY,"latin_xcn_btregular","#ffffff",62);c.addEventListener(ON_MOUSE_UP,this._onButPlayRelease,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)e=s_oSpriteLibrary.getSprite("audio_icon"),f=new CToggle(CANVAS_WIDTH-e.height/2-10,e.height/2+10,e,s_bAudioActive),f.addEventListener(ON_MOUSE_UP,
this._onAudioToggle,this);b=new createjs.Shape;b.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);s_oStage.addChild(b);createjs.Tween.get(b).to({alpha:0},1E3).call(function(){b.visible=!1})};this.unload=function(){c.unload();c=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)f.unload(),f=null;s_oStage.removeChild(a);a=null};this._onAudioToggle=function(){createjs.Sound.setMute(s_bAudioActive);s_bAudioActive=!s_bAudioActive};this._onButPlayRelease=function(){this.unload();s_oMain.gotoGame()};
this._init()}
function CMain(a){var c,b=0,f=0,e,d;this.initContainer=function(){var a=document.getElementById("canvas");s_oStage=new createjs.Stage(a);createjs.Touch.enable(s_oStage);s_bMobile=jQuery.browser.mobile;!1===s_bMobile&&(s_oStage.enableMouseOver(20),$("body").on("contextmenu","#canvas",function(a){return!1}));s_iPrevTime=(new Date).getTime();createjs.Ticker.addEventListener("tick",this._update);createjs.Ticker.setFPS(30);!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||this._initSounds();s_oSpriteLibrary=new CSpriteLibrary;
d=new CPreloader;this._loadImages();c=!0};this.soundLoaded=function(){b++;if(b===f){d.unload();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundtrack=createjs.Sound.play("soundtrack",{loop:100,volume:.5});s_oGuessSettings=new CGuessSettings;this.gotoMenu()}};this._initSounds=function(){createjs.Sound.initializeDefaultPlugins()&&(0<navigator.userAgent.indexOf("Opera")||0<navigator.userAgent.indexOf("OPR")?(createjs.Sound.alternateExtensions=["mp3"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,
this)),createjs.Sound.registerSound("./sounds/click.ogg","click"),createjs.Sound.registerSound("./sounds/alert.ogg","alert"),createjs.Sound.registerSound("./sounds/gameover.ogg","gameover"),createjs.Sound.registerSound("./sounds/select_character.ogg","select_character"),createjs.Sound.registerSound("./sounds/win.ogg","win"),createjs.Sound.registerSound("./sounds/soundtrack.ogg","soundtrack")):(createjs.Sound.alternateExtensions=["ogg"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,
this)),createjs.Sound.registerSound("./sounds/click.mp3","click"),createjs.Sound.registerSound("./sounds/alert.mp3","alert"),createjs.Sound.registerSound("./sounds/gameover.mp3","gameover"),createjs.Sound.registerSound("./sounds/select_character.mp3","select_character"),createjs.Sound.registerSound("./sounds/win.mp3","win"),createjs.Sound.registerSound("./sounds/soundtrack.mp3","soundtrack")),f+=6)};this._loadImages=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);
s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");s_oSpriteLibrary.addSprite("right_but","./sprites/right_but.png");s_oSpriteLibrary.addSprite("left_but","./sprites/left_but.png");
s_oSpriteLibrary.addSprite("but_ok","./sprites/but_ok.png");s_oSpriteLibrary.addSprite("but_no","./sprites/but_no.png");s_oSpriteLibrary.addSprite("disable_character","./sprites/disable_character.png");s_oSpriteLibrary.addSprite("character_over","./sprites/character_over.png");s_oSpriteLibrary.addSprite("character_hidden","./sprites/character_hidden.png");s_oSpriteLibrary.addSprite("player_icon","./sprites/player_icon.png");s_oSpriteLibrary.addSprite("cpu_icon","./sprites/cpu_icon.png");s_oSpriteLibrary.addSprite("character_mini",
"./sprites/character_mini.png");s_oSpriteLibrary.addSprite("wrong_answer","./sprites/wrong_answer.png");s_oSpriteLibrary.addSprite("encouragment","./sprites/encouragment.png");s_oSpriteLibrary.addSprite("blink_question","./sprites/blink_question.png");for(var a=0;a<NUM_CHARACTER;a++)s_oSpriteLibrary.addSprite("character_"+a,"./sprites/characters/character_"+a+".png");f+=s_oSpriteLibrary.getNumSprites();s_oSpriteLibrary.loadSprites()};this._onImagesLoaded=function(){b++;d.refreshLoader(Math.floor(b/
f*100));if(b===f){d.unload();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundtrack=createjs.Sound.play("soundtrack",{loop:100,volume:.5});s_oGuessSettings=new CGuessSettings;this.gotoMenu()}};this._onAllImagesLoaded=function(){};this.onAllPreloaderImagesLoaded=function(){this._loadImages()};this.gotoMenu=function(){new CMenu};this.gotoGame=function(){new CGame(e);$(s_oMain).trigger("game_start")};this.gotoHelp=function(){new CHelp};this.stopUpdate=function(){c=!1};this.startUpdate=function(){c=
!0};this._update=function(a){if(!1!==c){var b=(new Date).getTime();s_iTimeElaps=b-s_iPrevTime;s_iCntTime+=s_iTimeElaps;s_iCntFps++;s_iPrevTime=b;1E3<=s_iCntTime&&(s_iCurFps=s_iCntFps,s_iCntTime-=1E3,s_iCntFps=0);s_oStage.update(a)}};s_oMain=this;e=a;this.initContainer()}var s_bMobile,s_bAudioActive=!0,s_iCntTime=0,s_iTimeElaps=0,s_iPrevTime=0,s_iCntFps=0,s_iCurFps=0,s_oGuessSettings,s_oDrawLayer,s_oStage,s_oMain,s_oSpriteLibrary,s_oSoundTrack;TEXT_LOSE="GAME OVER";TEXT_WIN="CONGRATULATIONS!!!";
TEXT_YOUR_CHARACTER="YOUR\nCHARACTER";TEXT_CPU_CHARACTER="CPU\nCHARACTER";TEXT_SCORE="SCORE";TEXT_FINAL_SCORE="FINAL SCORE";TEXT_PLAY="PLAY";TEXT_OK="OK";TEXT_CHOOSE_CHARACTER="PLEASE CHOOSE YOUR\nCHARACTER TO GUESS!!";TEXT_PLAYER_TURN="IT'S YOUR TURN!\nCHOOSE A QUESTION IN\nTHE BOX BELOW!";TEXT_CPU_TURN="CPU IS ELABORATING\nTHE QUESTION...";TEXT_CPU_PANEL_TITLE="CPU TURN";TEXT_ENCOURAGEMENT_1="GOOD!";TEXT_ENCOURAGEMENT_2="GREAT!!";TEXT_ENCOURAGEMENT_3="AMAZING!!!";TEXT_QUESTION_1="Is your character a male?";
TEXT_QUESTION_2="Is your character wearing glasses?";TEXT_QUESTION_3="Does your character have a moustache?";TEXT_QUESTION_4="Is your character wearing bunny ears?";TEXT_QUESTION_5="Is your character bald?";TEXT_QUESTION_6="Does your character have blonde hair?";TEXT_QUESTION_7="Does your character have black hair?";TEXT_QUESTION_8="Does your character have brown hair?";TEXT_QUESTION_9="Does your character have a beard?";TEXT_QUESTION_10="Is your character wearing a bandana?";TEXT_QUESTION_11="Is your character wearing a band in the hair?";
TEXT_QUESTION_12="Is your character wearing earrings?";TEXT_QUESTION_13="Is your character wearing a tie?";TEXT_QUESTION_14="Is your character wearing a necklace?";TEXT_QUESTION_15="Does your character have mouth open?";
function CInterface(){var a,c,b,f,e,d,h,g,k,m=null,l=null,n,p,r,s,x,u,v;this._init=function(){c=a=0;f=new createjs.Text(TEXT_SCORE,"54px latin_xcn_btregular","#FF6699");f.x=862;f.y=166;f.textAlign="center";f.textBaseline="alphabetic";s_oStage.addChild(f);e=new createjs.Text("0","54px latin_xcn_btregular","#FFCC00");e.x=930;e.y=166;e.textAlign="left";e.textBaseline="alphabetic";s_oStage.addChild(e);d=new CQuestionAnim(340,CANVAS_HEIGHT-58,s_oGuessSettings.getQuestion(0).question,s_oGuessSettings.getQuestion(1).question);
h=new CGfxSpriteButton(34,CANVAS_HEIGHT-40,s_oSpriteLibrary.getSprite("left_but"));h.addEventListener(ON_MOUSE_UP,this._onLeftRelease,this);g=new CGfxSpriteButton(650,CANVAS_HEIGHT-40,s_oSpriteLibrary.getSprite("right_but"));g.addEventListener(ON_MOUSE_UP,this._onRightRelease,this);k=new CGfxSpriteButton(738,CANVAS_HEIGHT-40,s_oSpriteLibrary.getSprite("but_ok"));k.addEventListener(ON_MOUSE_UP,this._onOkRelease,this);m=new createjs.Container;m.x=824;m.y=184;s_oStage.addChild(m);l=new createjs.Container;
l.x=828;l.y=426;s_oStage.addChild(l);n=new createjs.Text("","37px latin_xcn_btregular","#fff");n.x=m.x+80;n.y=m.y+190;n.textAlign="center";n.textBaseline="alphabetic";s_oStage.addChild(n);p=new createjs.Text("","37px latin_xcn_btregular","#fff");p.x=l.x+76;p.y=l.y+180;p.textAlign="center";p.textBaseline="alphabetic";s_oStage.addChild(p);var q=new createjs.Bitmap(s_oSpriteLibrary.getSprite("player_icon"));q.x=805;q.y=168;s_oStage.addChild(q);q=new createjs.Bitmap(s_oSpriteLibrary.getSprite("cpu_icon"));
q.x=805;q.y=402;s_oStage.addChild(q);q=s_oSpriteLibrary.getSprite("blink_question");q=new createjs.SpriteSheet({framerate:3,images:[q],frames:{width:q.width,height:q.height/2},animations:{idle:[0],blink:[0,1]}});u=new createjs.Sprite(q,"idle");u.x=74;u.y=694;s_oStage.addChild(u);x=new CEncouragement(4,-200);q=s_oSpriteLibrary.getSprite("but_exit");b=new CGfxButton(CANVAS_WIDTH-q.height/2-10,10+q.height/2,q,!0);b.addEventListener(ON_MOUSE_UP,this._onExit,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)q=
s_oSpriteLibrary.getSprite("audio_icon"),v=new CToggle(CANVAS_WIDTH-q.height/2-10,q.height/2+60,q,s_bAudioActive),v.addEventListener(ON_MOUSE_UP,this._onAudioToggle,this);s=new CCpuPanel;r=new CMsgBox;r.show(TEXT_CHOOSE_CHARACTER);this.disableQuestionGUI()};this.unload=function(){b.unload();b=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)v.unload(),v=null};this.refreshScore=function(a){e.text=""+a};this.disableQuestionGUI=function(){h.disable();g.disable();k.disable()};this.enableQuestionGUI=
function(){h.enable();g.enable();k.enable();d.showQuestion(s_oGame.getPlayerQuestions(0).question);this.blinkQuestion(!0)};this.blinkQuestion=function(a){a?u.gotoAndPlay("blink"):u.gotoAndStop("idle")};this.setCharacters=function(a){0<m.getNumChildren()&&(m.removeAllChildren(),n.text="");0<l.getNumChildren()&&(l.removeAllChildren(),p.text="");var b=new createjs.Bitmap(s_oSpriteLibrary.getSprite("character_"+a));b.scaleX=b.scaleY=1.2;m.addChild(b);n.text=s_oGuessSettings.getCharacterName(a);b=new createjs.Bitmap(s_oSpriteLibrary.getSprite("character_hidden"));
l.addChild(b);p.text="?????"};this.showMsgBox=function(a){r.show(a)};this.showCpuPanel=function(a){s.show(a)};this.hideCpuPanel=function(){s.hide()};this.showWrongReply=function(){s.showWrongReply()};this.showEncouragement=function(a){x.show(a)};this._onRightRelease=function(){this.blinkQuestion(!1);a===s_oGame.getNumPlayerQuestions()-1?(d.moveLeft(s_oGame.getPlayerQuestions(a).question,s_oGame.getPlayerQuestions(0).question),c=s_oGame.getPlayerQuestions(0).index,a=0):(d.moveLeft(s_oGame.getPlayerQuestions(a).question,
s_oGame.getPlayerQuestions(a+1).question),c=s_oGame.getPlayerQuestions(a+1).index,a++)};this._onLeftRelease=function(){this.blinkQuestion(!1);0===a?(d.moveRight(s_oGame.getPlayerQuestions(s_oGame.getNumPlayerQuestions()-1).question,s_oGame.getPlayerQuestions(a).question),c=s_oGame.getPlayerQuestions(s_oGame.getNumPlayerQuestions()-1).index,a=s_oGame.getNumPlayerQuestions()-1):(d.moveRight(s_oGame.getPlayerQuestions(a-1).question,s_oGame.getPlayerQuestions(a).question),c=s_oGame.getPlayerQuestions(a-
1).index,a--)};this._onOkRelease=function(){this.blinkQuestion(!1);this.disableQuestionGUI();d.hideQuestion();s_oGame.playerAskQuestion(a,c);a=0;c=s_oGame.getPlayerQuestions(a).index};this._onAudioToggle=function(){createjs.Sound.setMute(s_bAudioActive);s_bAudioActive=!s_bAudioActive};this._onExit=function(){s_oGame.onExit()};this._init();return this}
function CGuessSettings(){var a,c,b;this._init=function(){this._initQuestions();this._initLinks();this._initNames()};this._initQuestions=function(){a=[];a[0]=TEXT_QUESTION_1;a[1]=TEXT_QUESTION_2;a[2]=TEXT_QUESTION_3;a[3]=TEXT_QUESTION_4;a[4]=TEXT_QUESTION_5;a[5]=TEXT_QUESTION_6;a[6]=TEXT_QUESTION_7;a[7]=TEXT_QUESTION_8;a[8]=TEXT_QUESTION_9;a[9]=TEXT_QUESTION_10;a[10]=TEXT_QUESTION_11;a[11]=TEXT_QUESTION_12;a[12]=TEXT_QUESTION_13;a[13]=TEXT_QUESTION_14;a[14]=TEXT_QUESTION_15};this._initLinks=function(){c=
[[1,2,3,4,5,7,10,11,12,13,18,19,20,21,22,23],[0,7,9,10,12,13,15,17,20],[1,4,5,7,10,11,18,19],[1,3,22],[1,7,13,23],[2,3,10,16,19,21],[5,8,12],[0,6,11,15],[3,13,23],[4,16],[5,8,18],[0,5,6,8,9,13,14,15,16,17,21],[2,9,10,21,22],[0,6,14,16],[0,2,5,6,18,22]]};this._initNames=function(){b="CHANTAL ERIC ALEX BOB PAUL FRANK ZOE JOE BUBA RITA RICK ANTOINE JOHN CHAP EVELYN LADY SAMANTHA JENNY JAVIER EVAN MATHIAS MICHAEL HANK VITO".split(" ")};this.getQuestionsRelatedToCharacter=function(a){for(var b=[],d=0;d<
c.length;d++)for(var h=c[d],g=0;g<h.length;g++)if(h[g]===a){b.push(d);break}return b};this.getQuestion=function(b){return a[b]};this.getCharacterLinked=function(a){return c[a]};this.getCharacterName=function(a){return b[a]};this.getNumQuestions=function(){return a.length};this.getQuestions=function(){return a};this._init()}
function CGfxSpriteButton(a,c,b,f){var e=!1,d,h,g;this._init=function(a,b,c,e){var f=c.width/4;c=new createjs.SpriteSheet({images:[c],frames:{width:f,height:c.height,regX:f/2,regY:c.height/2},animations:{start:[0],over:[1],press:[2],disable:[3]}});g=new createjs.Sprite(c,"start");g.x=a;g.y=b;g.stop();!1!==e&&s_oStage.addChild(g);d=[];h=[];this._initListener()};this.unload=function(){g.off("mousedown",this.buttonDown);g.off("pressup",this.buttonRelease);!1===s_bMobile&&(g.off("rollover",this.mouseOver),
g.off("rollout",this.mouseOut));s_oStage.removeChild(g)};this._initListener=function(){g.on("mousedown",this.buttonDown);g.on("pressup",this.buttonRelease);!1===s_bMobile&&(g.on("rollover",this.mouseOver),g.on("rollout",this.mouseOut))};this.setVisible=function(a){g.visible=a};this.disable=function(){e=!0;g.gotoAndStop("disable")};this.enable=function(){e=!1;g.gotoAndStop("start")};this.addEventListener=function(a,b,c){d[a]=b;h[a]=c};this.buttonRelease=function(){e||(!1!==DISABLE_SOUND_MOBILE&&!1!==
s_bMobile||createjs.Sound.play("click"),g.gotoAndStop("start"),d[ON_MOUSE_UP]&&d[ON_MOUSE_UP].call(h[ON_MOUSE_UP]))};this.buttonDown=function(){e||(g.gotoAndStop("press"),d[ON_MOUSE_DOWN]&&d[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN]))};this.mouseOver=function(){e||(g.gotoAndStop("over"),d[ON_MOUSE_OVER]&&d[ON_MOUSE_OVER].call(h[ON_MOUSE_OVER],_oParams))};this.mouseOut=function(){e||(g.gotoAndStop("start"),d[ON_MOUSE_OUT]&&d[ON_MOUSE_OUT].call(h[ON_MOUSE_OUT],_oParams))};this.setPosition=function(a,b){g.x=
a;g.y=b};this.setX=function(a){g.x=a};this.setY=function(a){g.y=a};this.getButtonImage=function(){return g};this.getSprite=function(){return g};this.getX=function(){return g.x};this.getY=function(){return g.y};this._init(a,c,b,f);return this};