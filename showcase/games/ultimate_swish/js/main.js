function CBall(a,b,e,f,k,g){var c=[[-1.324419465111331,.07007920010441403,.1938814229049522,.1928501356834461,-.2649754991389736,-.29199768911624474,-.9738954395935614,-.9687151293457442,.00813866187260608,1.8973661726282403,-.15703993365948804,-.1562046123872247,172.14460555118495,-57.92280926049329,268.64013255353115,275.1899143092173],[-1.0311847252524577,-.17599844916970192,-.6427545415461143,-.6393356242752912,.8719967238119737,-.26330126009450605,-.7552979557156582,-.7512804014885001,.025392432048756682,
1.8946950915444967,-.16466751447142178,-.16379162084052554,74.75179565415395,-37.2124724898568,323.023333753347,329.2838423047125],[-.04192064711782405,-.28804391554765474,-.9934914290013894,-.9882068844583713,1.3500256223076117,-.017671886269370676,-.030155903522676906,-.02999549930503738,.006203995474932445,1.8991816460801592,-.15096085318711913,-.15015786754513807,6.84660099873786,-40.15800737796026,335.8181997013088,342.0106502533296],[1.0287322954933102,-.20296283656350578,-.6427545605150148,
-.6393356431432929,.8752566449130996,.2404296293623392,.7552979421456383,.7512803879906613,-8.671184282911734E-4,1.895038730402846,-.1646675026722602,-.16379160910412566,-75.22073485514608,-35.249324074836075,323.0233348288672,329.2838433745118],[1.3232711036898168,-.00901517234163781,.201487851298251,.20041610423131065,-.2666922478682122,.28881907281462693,.9738954354986644,.9687151252726287,.04684016896142928,1.8991247445227672,-.14715365255419113,-.14637091803943836,-176.51195787275645,-53.18780012690175,
267.37304986600344,273.9295714431983]],m=!1,d=!1,h=!1,t=!1,u=0,v=[0,new CANNON.Vec3(97,150,86),new CANNON.Vec3(178,80,86),new CANNON.Vec3(195,-26,86),new CANNON.Vec3(130,-110,86),new CANNON.Vec3(112,-150,87)],p=[0,new CANNON.Vec3(97,150,78.5),new CANNON.Vec3(178,80,78.5),new CANNON.Vec3(195,-26,78.5),new CANNON.Vec3(130,-110,78.5),new CANNON.Vec3(112,-150,79.5)],n=[0,new CANNON.Vec3(-1292.5,-5287.5,6697.5),new CANNON.Vec3(-3995,-2702.5,6697.5),new CANNON.Vec3(-4935,940,6580),new CANNON.Vec3(-2398.5,
4036.5,6552),new CANNON.Vec3(-1755,5206.5,6669)],l=g.x-BALL_SIZE;g=g.y-.4*CANVAS_HEIGHT;var r={x:0,y:0},q=0;this._oSphereBody;this._oStandBody;this._oSprite;this._oSpriteShadow;this._oContainer=void 0;this._v2SlideDestination={x:0,y:0};var A=new CANNON.Sphere(7);this._oSphereBody=new CANNON.Body({mass:1,material:b});this._oSphereBody.position.copy(v[f]);this._oSphereBody.addShape(A);b=new CANNON.Box(new CANNON.Vec3(2.5,2.5,.5));this._oStandBody=new CANNON.Body({mass:0,material:e});this._oStandBody.position.copy(p[f]);
this._oStandBody.addShape(b);this._oSpriteShadow=createBitmap(s_oSpriteLibrary.getSprite("shadow"));this._oSpriteShadow.regX=52;this._oSpriteShadow.regY=22;this._oSpriteShadow.visible=!1;this._oSprite=createBitmap(s_oSpriteLibrary.getSprite(0===k?"ball_2":"ball_1"));this._oSprite.regX=BALL_SIZE/2;this._oSprite.regY=BALL_SIZE/2;this._oSprite.x=5>f?l-k*BALL_SIZE*.75:l+(k-(NUM_SHOT_PER_SCENE-1))*BALL_SIZE*.75;this._oSprite.y=g;this._oContainer=new createjs.Container;this._oContainer.addChild(this._oSprite,
this._oSpriteShadow);s_oStage.addChildAt(this._oContainer,CART_DEPTH_INDEX+1);this.unload=function(){a.remove(this._oSphereBody);a.remove(this._oStandBody);s_oStage.removeChild(this._oContainer)};this.update=function(){if(!h){a.step(1/30);q=r.x;r=this._projCoordScaling(this._oSphereBody.position);var c=r.x-q,b=r.diam/BALL_SIZE;1<b&&(b=1);this._oSprite.x=r.x;this._oSprite.y=r.y;this._oSprite.scaleY=this._oSprite.scaleX=b;u+=c*BALL_ROTATION_SPEED;this._oSprite.rotation=u;this._oSpriteShadow.visible=
!0;this._oSpriteShadow.x=r.shadowX;this._oSpriteShadow.y=r.shadowY;this._oSpriteShadow.scaleX=this._oSpriteShadow.x.scaleY=.75*b;this._oSpriteShadow.alpha=this._oSprite.y/CANVAS_HEIGHT*.66+.33}};this.grab=function(a){m||(m=!0,createjs.Tween.removeTweens(this._oSprite),5>f?createjs.Tween.get(this._oSprite).to({x:a.x,y:a.y},80,createjs.Ease.cubicIn):createjs.Tween.get(this._oSprite).to({x:a.x+100,y:a.y},80,createjs.Ease.cubicIn))};this.slide=function(){u-=75;5>f?createjs.Tween.get(this._oSprite).to({x:this._oSprite.x-
.8*BALL_SIZE,rotation:u},500,createjs.Ease.linear):createjs.Tween.get(this._oSprite).to({x:this._oSprite.x+.8*BALL_SIZE,rotation:u},500,createjs.Ease.linear)};this.waitToThrow=function(){if(!d&&!h){d=!0;var a=this;createjs.Tween.get(this._oSprite).to({y:this._oSprite.y+7},450,createjs.Ease.linear).call(function(){createjs.Tween.get(a._oSprite).to({y:a._oSprite.y-7},450,createjs.Ease.linear).call(function(){d=!1})},a)}};this._projCoord=function(a){var b=a.x,d=a.y,e=b;a=a.z;var h=c[f-1],g=1/(h[3]*e+
h[7]*d+h[11]*a+h[15]),b=(h[0]*e+h[4]*d+h[8]*a+h[12])*g,d=(h[1]*e+h[5]*d+h[9]*a+h[13])*g,b=(b+1)*CANVAS_WIDTH/2,d=(-d+1)*CANVAS_HEIGHT/2;return{x:b,y:d}};this._projCoordScaling=function(a){var c=this._projCoord(new CANNON.Vec3(a.x,a.y,a.z+7)),b=this._projCoord(new CANNON.Vec3(a.x,a.y,a.z-7));a=this._projCoord(new CANNON.Vec3(a.x,a.y,0));var d=Math.abs(c.y-b.y);return{x:(c.x+b.x)/2,y:(c.y+b.y)/2,diam:d,shadowX:a.x,shadowY:a.y}};this.throwingBall=function(c,b,d){var e,g=this;e=5>f?c.x-40:c.x+145;c=c.y-
172;h||(h=!0,createjs.Tween.removeTweens(this._oSprite),createjs.Tween.get(this._oSprite).to({x:e,y:c},100,createjs.Ease.linear).call(function(){var c;1===f?c=new CANNON.Vec3(n[1].x-b.x*ERROR_MULT,n[1].y+b.y*ERROR_MULT,n[1].z):2===f?c=new CANNON.Vec3(n[2].x-b.x*ERROR_MULT,n[2].y+b.y*ERROR_MULT,n[2].z):3===f?c=new CANNON.Vec3(n[3].x+b.y*ERROR_MULT,n[3].y+b.x*ERROR_MULT,n[3].z):4===f?c=new CANNON.Vec3(n[4].x+b.x*ERROR_MULT,n[4].y-b.y*ERROR_MULT,n[4].z):5===f&&(c=new CANNON.Vec3(n[5].x+b.x*ERROR_MULT,
n[5].y-b.y*ERROR_MULT,n[5].z));a.add(d._oSphereBody);a.add(d._oStandBody);g._oSphereBody.applyForce(c,g._oSphereBody.position)},g),g.update(),h=!1)};this.touchGround=function(){var a=this;7.01>=this._oSphereBody.position.z&&!1===t&&(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("us_bounce"),t=!0,createjs.Tween.get(a._oContainer).to({alpha:0},1E3,createjs.Ease.circIn).call(function(){a.unload()},a))};this.touchedGround=function(){return t};this.getPosition=function(){return this._oSphereBody.position};
this.getCartPosition=function(){return k}}
function CSpriteLibrary(){var a,b,e,f,k,g;this.init=function(c,m,d){e=b=0;f=c;k=m;g=d;a={}};this.addSprite=function(c,e){a.hasOwnProperty(c)||(a[c]={szPath:e,oSprite:new Image},b++)};this.getSprite=function(c){return a.hasOwnProperty(c)?a[c].oSprite:null};this._onSpritesLoaded=function(){k.call(g)};this._onSpriteLoaded=function(){f.call(g);++e===b&&this._onSpritesLoaded()};this.loadSprites=function(){for(var c in a)a[c].oSprite.oSpriteLibrary=this,a[c].oSprite.onload=function(){this.oSpriteLibrary._onSpriteLoaded()},
a[c].oSprite.src=a[c].szPath};this.getNumSprites=function(){return b}}
var CANVAS_WIDTH=1024,CANVAS_HEIGHT=768,DISABLE_SOUND_MOBILE=!1,STATE_LOADING=0,STATE_MENU=1,STATE_HELP=1,STATE_GAME=3,ON_MOUSE_DOWN=0,ON_MOUSE_UP=1,ON_MOUSE_OVER=2,ON_MOUSE_OUT=3,ON_DRAG_START=4,ON_DRAG_END=5,TOTAL_SCENES=5,BALL_SIZE=73,BALL_ROTATION_SPEED=3,CAM_DISTANCE=1,PLAYER_HEIGHT=768,PLAYER_WIDTH=408,CART_HEIGHT=329,CART_WIDTH=356,SHOTGUI_SIZE=229,SHOTBALL_SIZE=48,CART_DEPTH_INDEX,ERROR_MULT,TIME_AVAILABLE,NUM_SHOT_PER_SCENE=5,SELECTOR_SPEED,POINT_FOR_BALL,POINT_FOR_SPECIAL_BALL;
function CToggle(a,b,e){var f,k,g;this._init=function(a,b,d){f=[];k=[];var e=new createjs.SpriteSheet({images:[d],frames:{width:d.width/2,height:d.height,regX:d.width/2/2,regY:d.height/2},animations:{on:[0,1],off:[1,2]}});g=s_bAudioActive?createSprite(e,"on",d.width/2/2,d.height/2,d.width/2,d.height):createSprite(e,"off",d.width/2/2,d.height/2,d.width/2,d.height);g.x=a;g.y=b;g.stop();s_oStage.addChild(g);this._initListener()};this.unload=function(){g.off("mousedown",this.buttonDown);g.off("pressup",
this.buttonRelease);s_oStage.removeChild(g)};this._initListener=function(){g.on("mousedown",this.buttonDown);g.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,d){f[a]=b;k[a]=d};this.buttonRelease=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but");g.scaleX=1;g.scaleY=1;(s_bAudioActive=!s_bAudioActive)?g.gotoAndStop("on"):g.gotoAndStop("off");f[ON_MOUSE_UP]&&f[ON_MOUSE_UP].call(k[ON_MOUSE_UP])};this.buttonDown=function(){g.scaleX=.9;g.scaleY=
.9;f[ON_MOUSE_DOWN]&&f[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])};this._init(a,b,e)}
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||
navigator.vendor||window.opera);$(window).resize(function(){sizeHandler()});function trace(a){console.log(a)}$(window).ready(function(){sizeHandler()});window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){window.matchMedia("(orientation: portrait)").matches&&sizeHandler();window.matchMedia("(orientation: landscape)").matches&&sizeHandler()}

function sizeHandler(){window.scrollTo(0,1);if($("#canvas")){var a=CANVAS_WIDTH,b=CANVAS_HEIGHT,c,d;!0===inIframe()&&"ios"==getMobileOperatingSystem()?top.location.href=document.location.href:(c=window.innerWidth,d=window.innerHeight,console.log("h: "+d),multiplier=Math.min(d/b,c/a),a*=multiplier,b*=multiplier,$("#canvas").css("width",a+"px"),$("#canvas").css("height",b+"px"),$("#canvas").css("left",c/2-a/2+"px"))}}
function getMobileOperatingSystem(){var a=navigator.userAgent||navigator.vendor||window.opera;return a.match(/iPad/i)||a.match(/iPhone/i)||a.match(/iPod/i)?"ios":a.match(/Android/i)?"android":"unknown"}function inIframe(){try{return window.self!==window.top}catch(a){return!0}};

function createBitmap(a,b,e){var f=new createjs.Bitmap(a),k=new createjs.Shape;b&&e?k.graphics.beginFill("#fff").drawRect(0,0,b,e):k.graphics.beginFill("#ff0").drawRect(0,0,a.width,a.height);f.hitArea=k;return f}function createSprite(a,b,e,f,k,g){a=null!==b?new createjs.Sprite(a,b):new createjs.Sprite(a);b=new createjs.Shape;b.graphics.beginFill("#000000").drawRect(-e,-f,k,g);a.hitArea=b;return a}
function randomFloatBetween(a,b,e){"undefined"===typeof e&&(e=2);return parseFloat(Math.min(a+Math.random()*(b-a),b).toFixed(e))}function shuffle(a){for(var b=a.length,e,f;0!==b;)f=Math.floor(Math.random()*b),--b,e=a[b],a[b]=a[f],a[f]=e;return a}function formatTime(a){a/=1E3;var b=Math.floor(a/60);a=Math.floor(a-60*b);var e="",e=10>b?e+("0"+b+":"):e+(b+":");return e=10>a?e+("0"+a):e+a}
Array.prototype.sortOn=function(){var a=this.slice();if(!arguments.length)return a.sort();var b=Array.prototype.slice.call(arguments);return a.sort(function(a,f){for(var k=b.slice(),g=k.shift();a[g]==f[g]&&k.length;)g=k.shift();return a[g]==f[g]?0:a[g]>f[g]?1:-1})};function roundDecimal(a,b){var e=Math.pow(10,b);return Math.round(e*a)/e}function tweenVectors(a,b,e,f){f.set(a.getX()+e*(b.getX()-a.getX()),a.getY()+e*(b.getY()-a.getY()));return f}
function NoClickDelay(a){this.element=a;window.Touch&&this.element.addEventListener("touchstart",this,!1)}
NoClickDelay.prototype={handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a)}},onTouchStart:function(a){a.preventDefault();this.moved=!1;this.element.addEventListener("touchmove",this,!1);this.element.addEventListener("touchend",this,!1)},onTouchMove:function(a){this.moved=!0},onTouchEnd:function(a){this.element.removeEventListener("touchmove",this,!1);this.element.removeEventListener("touchend",
this,!1);if(!this.moved){a=document.elementFromPoint(a.changedTouches[0].clientX,a.changedTouches[0].clientY);3===a.nodeType&&(a=a.parentNode);var b=document.createEvent("MouseEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}}};
function CTextButton(a,b,e,f,k,g,c,m){var d,h,t,u,v,p,n,l,r,q;this._init=function(a,c,b,e,f,g,k,m){d=!1;u=[];v=[];q=m;n=createBitmap(b);h=b.width;t=b.height;m=Math.ceil(k/20);l=new createjs.Text(e,"bold "+k+"px "+f,"#000000");var D=l.getBounds();l.textAlign="center";l.textBaseline="alphabetic";l.x=b.width/2+m;l.y=Math.floor(b.height/2)+D.height/2+m;r=new createjs.Text(e,"bold "+k+"px "+f,g);r.textAlign="center";r.textBaseline="alphabetic";r.x=b.width/2;r.y=Math.floor(b.height/2)+D.height/2;p=new createjs.Container;
p.x=a;p.y=c;p.regX=b.width/2;p.regY=b.height/2;p.addChild(n,l,r);q.addChild(p);this._initListener()};this.unload=function(){p.off("mousedown");p.off("pressup");q.removeChild(p)};this.setVisible=function(a){p.visible=a};this.enable=function(){d=!1;n.filters=[];n.cache(0,0,h,t)};this.disable=function(){d=!0;var a=(new createjs.ColorMatrix).adjustSaturation(-100);n.filters=[new createjs.ColorMatrixFilter(a)];n.cache(0,0,h,t)};this._initListener=function(){oParent=this;p.on("mousedown",this.buttonDown);
p.on("pressup",this.buttonRelease)};this.addEventListener=function(a,c,b){u[a]=c;v[a]=b};this.buttonRelease=function(){d||(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but"),p.scaleX=1,p.scaleY=1,u[ON_MOUSE_UP]&&u[ON_MOUSE_UP].call(v[ON_MOUSE_UP]))};this.buttonDown=function(){d||(p.scaleX=.9,p.scaleY=.9,u[ON_MOUSE_DOWN]&&u[ON_MOUSE_DOWN].call(v[ON_MOUSE_DOWN]))};this.setPosition=function(a,c){p.x=a;p.y=c};this.changeText=function(a){r.text=a;l.text=a};this.setX=function(a){p.x=
a};this.setY=function(a){p.y=a};this.getButtonImage=function(){return p};this.getX=function(){return p.x};this.getY=function(){return p.y};this._init(a,b,e,f,k,g,c,m);return this}
function CSceneStatic(a,b,e,f){var k=!0,g=!0,c=!1,m=0,d=b,h=[],t=[{},{x:.648*CANVAS_WIDTH,y:.88*CANVAS_HEIGHT/5},{x:.504*CANVAS_WIDTH,y:.79*CANVAS_HEIGHT/5},{x:2.39/5*CANVAS_WIDTH,y:.81*CANVAS_HEIGHT/5},{x:.442*CANVAS_WIDTH,y:.79*CANVAS_HEIGHT/5},{x:.292*CANVAS_WIDTH,y:.88*CANVAS_HEIGHT/5}],u=[{},{x:850,y:720},{x:700,y:720},{x:700,y:720},{x:700,y:720},{x:280,y:720}],v,p,n,l;v=createBitmap(s_oSpriteLibrary.getSprite("field_camera_1"));v.scaleX=-1;v.x=CANVAS_WIDTH;s_oStage.addChild(v);l=new createjs.Text("",
"bold 27px Digital-7","Red");l.visible=!1;l.x=541;l.y=22;l.textBaseline="alphabetic";l.textAlign="center";s_oStage.addChild(l);p=createBitmap(s_oSpriteLibrary.getSprite("cart_back"));s_oStage.addChild(p);n=createBitmap(s_oSpriteLibrary.getSprite("cart_front"));s_oStage.addChild(n);CART_DEPTH_INDEX=s_oStage.getChildIndex(p);p.regX=n.regX=CART_WIDTH/2;p.regY=n.regY=CART_HEIGHT/2;p.x=n.x=u[1].x;p.y=n.y=u[1].y;b=new CANNON.Box(new CANNON.Vec3(.5,36,21));e=new CANNON.Body({mass:0,position:new CANNON.Vec3(48,
0,120),material:e});e.addShape(b);a.add(e);b=new CANNON.Box(new CANNON.Vec3(11,.5,.5));e=new CANNON.Body({mass:0,position:new CANNON.Vec3(59,11,120),material:f});e.addShape(b);a.add(e);var r=new CANNON.Box(new CANNON.Vec3(11,.5,.5));b=new CANNON.Body({mass:0,position:new CANNON.Vec3(59,-11,120),material:f});b.addShape(r);a.add(b);var r=new CANNON.Box(new CANNON.Vec3(.5,11,.5)),q=new CANNON.Body({mass:0,position:new CANNON.Vec3(70,0,120),material:f});q.addShape(r);a.add(q);e.addEventListener("collide",
function(a){c=!0});b.addEventListener("collide",function(a){c=!0});q.addEventListener("collide",function(a){c=!0});e=new CANNON.Box(new CANNON.Vec3(8,.5,.5));b=new CANNON.Body({mass:0,position:new CANNON.Vec3(59,8,113),material:f});b.addShape(e);a.add(b);e=new CANNON.Box(new CANNON.Vec3(8,.5,.5));b=new CANNON.Body({mass:0,position:new CANNON.Vec3(59,-8,113),material:f});b.addShape(e);a.add(b);e=new CANNON.Box(new CANNON.Vec3(.5,8,.5));f=new CANNON.Body({mass:0,position:new CANNON.Vec3(67,0,113),material:f});
f.addShape(e);a.add(f);for(a=0;36>a;a++)h.push(createBitmap(s_oSpriteLibrary.getSprite("bsk"+(a+1)))),h[a].visible=!1,h[a].x=t[1].x,h[a].y=t[1].y,h[a].scaleX=1.2,h[a].scaleY=1.2,s_oStage.addChild(h[a]);h[0].visible=!0;this.nextScene=function(){d++;this.loadBg(d);for(var a=0;36>a;a++)h[a].x=t[d].x,h[a].y=t[d].y;p.x=n.x=u[d].x;p.y=n.y=u[d].y;5===d&&(p.scaleX=n.scaleX=-1);switch(d){case 2:l.visible=!0;l.x=590;l.y=46;l.setTransform(l.x,l.y,1,1,0,0,-15);break;case 3:l.visible=!0;l.x=525;l.y=50;l.setTransform(l.x,
l.y,1.2,1.2,0,0,0);break;case 4:l.visible=!0;l.x=437;l.y=46;l.setTransform(l.x,l.y,1,1,0,0,15);break;case 5:l.visible=!1}};this.updateTime=function(a){l.text=formatTime(a)};this.updateBasket=function(a){if(k){if(113<a.z&&120>a.z&&48<a.x&&67>a.x&&-8<a.y&&8>a.y)return k=!1,!0;if(!0===c&&!0===k)return c=!1}};this.scored=function(){if(14>m||28<=m&&35>=m)return this.playFrames(0,14,!1),!0;h[m].visible=!1;h[0].visible=!0;m=0;return!1};this.rimCollision=function(){if(35>m)return this.playFrames(28,35,!1),
!0;h[m].visible=!1;h[0].visible=!0;m=0;return!1};this.newBall=function(){c=!1;k=!0;m=0};this.getCartCoords=function(){return{x:n.x+CART_WIDTH/2,y:n.y+CART_HEIGHT/2}};this.loadBg=function(a){var c;c=3>=a?"field_camera_"+a:4===a?"field_camera_2":"field_camera_1";var b=s_oStage.getChildIndex(v);v=createBitmap(s_oSpriteLibrary.getSprite(c));3>a&&(v.scaleX=-1,v.x=CANVAS_WIDTH);s_oStage.removeChildAt(b);s_oStage.addChildAt(v,b)};this.playFrames=function(a,c,b){m<a||m>c||void 0===m?(h[m]&&(h[m].visible=
!1),m=a,g=h[m].visible=!0):(h[m].visible=!1,m===a&&!1===g?(g=!0,m+=1):m===c?!0===b?m=a:(g=!1,m--):g?m++:m--,h[m].visible=!0)}}
function CPreloader(){var a,b,e,f,k,g;this._init=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("bg_preloader","./sprites/bg_preloader.jpg");s_oSpriteLibrary.addSprite("progress_bar","./sprites/progress_bar.png");s_oSpriteLibrary.addSprite("preloader_anim","./sprites/preloader_anim.png");s_oSpriteLibrary.loadSprites();g=new createjs.Container;s_oStage.addChild(g)};this.unload=function(){g.removeAllChildren()};this._onImagesLoaded=function(){};
this._onAllImagesLoaded=function(){this.attachSprites();s_oMain.preloaderReady()};this.attachSprites=function(){var c=createBitmap(s_oSpriteLibrary.getSprite("bg_preloader"));g.addChild(c);e=createBitmap(s_oSpriteLibrary.getSprite("progress_bar"));e.x=501;e.y=CANVAS_HEIGHT-49;g.addChild(e);a=706;k=new createjs.Shape;k.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(501,CANVAS_HEIGHT-49,1,30);g.addChild(k);e.mask=k;b=new createjs.Text("0%","30px impactregular","#fff");b.x=560;b.y=CANVAS_HEIGHT-55;
b.textAlign="center";b.textBaseline="middle";g.addChild(b);c={images:[s_oSpriteLibrary.getSprite("preloader_anim")],frames:{width:100,height:100},animations:{anim:[0,21]}};c=new createjs.SpriteSheet(c);f=createSprite(c,"anim",0,0,100,100);f.x=440;f.y=CANVAS_HEIGHT-110;g.addChild(f)};this.refreshLoader=function(c){b.text=c+"%";c=Math.floor(c*a/100);k.graphics.clear();k.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(501,CANVAS_HEIGHT-49,c,30)};this._init()}
function CPlayer(a,b){var e=!1,f=!1,k=!1,g=!0,c=void 0,m=1,d=[];this.init=function(a){for(var c=0;131>=c;c++)d.push(createBitmap(s_oSpriteLibrary.getSprite("pl"+c))),d[c].visible=!1,d[c].regX=PLAYER_WIDTH/2,d[c].regY=PLAYER_HEIGHT/2,d[c].x=a.x-PLAYER_WIDTH,d[c].y=a.y-.55*PLAYER_HEIGHT,s_oStage.addChild(d[c])};this.nextScene=function(a){m++;this.newBall();if(5>m)for(var c=0;131>=c;c++)d[c].x=a.x-PLAYER_WIDTH,d[c].y=a.y-.55*PLAYER_HEIGHT;else for(c=0;131>=c;c++)d[c].x=a.x+.05*PLAYER_WIDTH,d[c].y=a.y-
.55*PLAYER_HEIGHT,d[c].scaleX=-1};this.idle1=function(){this.playFrames(0,15,!1)};this.grab1=function(){15>c?this.playFrames(0,15,!0):38>=c?(35===c&&(e=!0),this.playFrames(16,39,!0)):39===c&&!1===f&&(f=!0,a.ballWaitToThrow(),createjs.Tween.get(d[c]).to({scaleY:.98,y:b.y-.55*PLAYER_HEIGHT+5},450,createjs.Ease.linear).call(function(){createjs.Tween.get(d[c]).to({scaleY:1,y:b.y-.55*PLAYER_HEIGHT},450,createjs.Ease.linear).call(function(){f=!1})}))};this.grab2=function(){!e||!0===e&&61>c?(this.playFrames(44,
61,!0),57===c&&(e=!0)):!0===e&&61<=c&&!1===f&&(f=!0,a.ballWaitToThrow(),createjs.Tween.removeTweens(d[c]),createjs.Tween.get(d[c]).to({scaleY:.98,y:b.y-.55*PLAYER_HEIGHT+5},450,createjs.Ease.linear).call(function(){createjs.Tween.get(d[c]).to({scaleY:1,y:b.y-.55*PLAYER_HEIGHT},450,createjs.Ease.linear).call(function(){f=!1})}))};this.throwing=function(){if(43>c)this.playFrames(40,43,!0);else return!0};this.endTurn=function(){k?this.idle1():(this.playFrames(86,131,!0),131===c&&(k=!0))};this.playFrames=
function(a,b,e){c<a||c>b||void 0===c?(d[c]&&(d[c].visible=!1),c=a,g=d[c].visible=!0):(d[c].visible=!1,c===a&&!1===g?(g=!0,c+=1):c===b?!0===e?c=a:(g=!1,c--):g?c++:c--,d[c].visible=!0)};this.getPlCoords=function(){return{x:d[39].x-PLAYER_WIDTH/8,y:d[39].y-PLAYER_HEIGHT/10-BALL_SIZE/2}};this.isBallGrabbed=function(){return e};this.newBall=function(){k=f=e=!1};this.init(b)}
function CMenu(){var a,b,e,f;this._init=function(){a=createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));s_oStage.addChild(a);var k=s_oSpriteLibrary.getSprite("but_play");b=new CTextButton(CANVAS_WIDTH-240,CANVAS_HEIGHT/2+50,k,TEXT_PLAY,"impactregular","#ffffff",60,s_oStage);b.addEventListener(ON_MOUSE_UP,this._onButPlay,this,!1);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)k=s_oSpriteLibrary.getSprite("audio_icon"),e=new CToggle(CANVAS_WIDTH-k.width/2+5,k.height/2+20,k),e.addEventListener(ON_MOUSE_UP,
this._onAudioToggle,this),null===s_oSoundTrack&&(s_oSoundTrack=createjs.Sound.play("soundtrack",{loop:-1}));f=new createjs.Shape;f.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);s_oStage.addChild(f);createjs.Tween.get(f).to({alpha:0},1E3).call(function(){f.visible=!1})};this.unload=function(){b.unload();b=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)e.unload(),e=null;s_oStage.removeAllChildren()};this._onButPlay=function(){this.unload();s_oMain.gotoGame()};this._onAudioToggle=
function(){createjs.Sound.setMute(!s_bAudioActive)};this._init()}
function CMain(a){ERROR_MULT=a.errorMultiplier;TIME_AVAILABLE=a.timeAvailable;SELECTOR_SPEED=a.selectorSpeed;POINT_FOR_BALL=a.point_per_ball;POINT_FOR_SPECIAL_BALL=a.point_per_special_ball;var b=0,e=0,f=STATE_LOADING,k,g;this.initContainer=function(){s_oStage=new createjs.Stage("canvas");createjs.Touch.enable(s_oStage);s_bMobile=jQuery.browser.mobile;!1===s_bMobile&&s_oStage.enableMouseOver(20);s_iPrevTime=(new Date).getTime();createjs.Ticker.setFPS(30);createjs.Ticker.addEventListener("tick",this._update);
navigator.userAgent.match(/Windows Phone/i)&&(DISABLE_SOUND_MOBILE=!0);s_oSpriteLibrary=new CSpriteLibrary;k=new CPreloader};this.soundLoaded=function(){b++;k.refreshLoader(Math.floor(b/e*100));b===e&&this.removePreloader()};this._initSounds=function(){createjs.Sound.initializeDefaultPlugins()&&(0<navigator.userAgent.indexOf("Opera")||0<navigator.userAgent.indexOf("OPR")?(createjs.Sound.alternateExtensions=["m4a"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/us_bounce.ogg",
"us_bounce"),createjs.Sound.registerSound("./sounds/us_buzzer.ogg","us_buzzer"),createjs.Sound.registerSound("./sounds/us_cheer.ogg","us_cheer"),createjs.Sound.registerSound("./sounds/us_crowd.ogg","us_crowd"),createjs.Sound.registerSound("./sounds/us_press_but.ogg","press_but"),createjs.Sound.registerSound("./sounds/soundtrack.ogg","soundtrack")):(createjs.Sound.alternateExtensions=["ogg"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/us_bounce.m4a",
"us_bounce"),createjs.Sound.registerSound("./sounds/us_buzzer.m4a","us_buzzer"),createjs.Sound.registerSound("./sounds/us_cheer.m4a","us_cheer"),createjs.Sound.registerSound("./sounds/us_crowd.m4a","us_crowd"),createjs.Sound.registerSound("./sounds/us_press_but.m4a","press_but"),createjs.Sound.registerSound("./sounds/soundtrack.m4a","soundtrack")),e+=6)};this._loadImages=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");
s_oSpriteLibrary.addSprite("ball_1","./sprites/ball_1.png");s_oSpriteLibrary.addSprite("ball_2","./sprites/ball_2.png");s_oSpriteLibrary.addSprite("bg_help","./sprites/bg_help.png");s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");s_oSpriteLibrary.addSprite("cart_back","./sprites/cart_back.png");s_oSpriteLibrary.addSprite("cart_front","./sprites/cart_front.png");
s_oSpriteLibrary.addSprite("field_camera_1","./sprites/field_camera_1.jpg");s_oSpriteLibrary.addSprite("field_camera_2","./sprites/field_camera_2.jpg");s_oSpriteLibrary.addSprite("field_camera_3","./sprites/field_camera_3.jpg");s_oSpriteLibrary.addSprite("msg_box","./sprites/msg_box.png");s_oSpriteLibrary.addSprite("shot_ball","./sprites/shot_ball.png");s_oSpriteLibrary.addSprite("shot_gui","./sprites/shot_gui.png");s_oSpriteLibrary.addSprite("time_panel","./sprites/time_panel.png");s_oSpriteLibrary.addSprite("shadow",
"./sprites/shadow.png");for(var a=0;131>=a;a++){var b;b=9>=a?"00"+a:99>=a?"0"+a:a;var d="pl"+a;b="./sprites/player_frames/new_player_0000"+b+".png";s_oSpriteLibrary.addSprite(d,b)}for(a=1;36>=a;a++)b=9>=a?"00"+a:99>=a?"0"+a:a,d="bsk"+a,b="./sprites/basket/basket_0"+b+".png",s_oSpriteLibrary.addSprite(d,b);e+=s_oSpriteLibrary.getNumSprites();s_oSpriteLibrary.loadSprites()};this._onImagesLoaded=function(){b++;k.refreshLoader(Math.floor(b/e*100));b===e&&this.removePreloader()};this._onAllImagesLoaded=
function(){};this.preloaderReady=function(){this._loadImages();!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||this._initSounds()};this.removePreloader=function(){k.unload();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundTrack=createjs.Sound.play("soundtrack",{loop:-1});this.gotoMenu()};this.gotoMenu=function(){new CMenu;f=STATE_MENU};this.gotoGame=function(){g=new CGame;f=STATE_GAME;$(s_oMain).trigger("restart")};this.gotoHelp=function(){_oHelp=new CHelp;f=STATE_HELP};this._update=function(a){var b=
(new Date).getTime();s_iTimeElaps=b-s_iPrevTime;s_iCntTime+=s_iTimeElaps;s_iCntFps++;s_iPrevTime=b;1E3<=s_iCntTime&&(s_iCurFps=s_iCntFps,s_iCntTime-=1E3,s_iCntFps=0);f===STATE_GAME&&g.update(b);s_oStage.update(a)};s_oMain=this;_oData=a;this.initContainer()}var s_bMobile,s_bAudioActive=!0,s_iCntTime=0,s_iTimeElaps=0,s_iPrevTime=0,s_iCntFps=0,s_iCurFps=0,s_oDrawLayer,s_oStage,s_oMain,s_oSpriteLibrary,s_oGameSettings,s_oSoundTrack;TEXT_PLAY="PLAY";TEXT_PLAYAGAIN="PLAY AGAIN";TEXT_POINT="POINT";
TEXT_POINTS="POINTS";TEXT_TIME_LEFT="TIME";TEXT_SCORE="POINTS";TEXT_SHOTS="SHOTS";TEXT_HELP="CLICK THE SCREEN OR PRESS SPACEBAR TO STOP THE BALL INDICATORS AND SHOT THE BALL";TEXT_HELP_MOBILE="CLICK THE SCREEN TO STOP THE BALL INDICATORS AND SHOT THE BALL";TEXT_FINALSCORE="FINAL SCORE";TEXT_FINALSHOTS="SHOTS MADE";TEXT_FINALTIME="TIME LEFT";TEXT_FINALSUCCESSPERC="SUCCESS RATE";
function CInterface(a){var b=!0,e=!1,f=!1,k=!1,g=!1,c=!1,m=void 0,d=void 0,h=SHOTGUI_SIZE/3,t=.85*CANVAS_WIDTH,u=.45*CANVAS_HEIGHT,v,p,n,l,r,q,A,y,w,z,x;this.init=function(a){v=a;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)a=s_oSpriteLibrary.getSprite("audio_icon"),A=new CToggle(CANVAS_WIDTH-a.width/2+5,a.height/2+20,a),A.addEventListener(ON_MOUSE_UP,this._onAudioToggle,this);a=s_oSpriteLibrary.getSprite("but_exit");y=new CGfxButton(CANVAS_WIDTH-a.width/2-95,a.height/2+20,a);y.addEventListener(ON_MOUSE_UP,
this._onExit,this);a=s_oSpriteLibrary.getSprite("shot_gui");r=createBitmap(a);r.regX=SHOTGUI_SIZE/2;r.regY=SHOTGUI_SIZE/2;r.x=t;r.y=u;s_oStage.addChild(r);q=createBitmap(s_oSpriteLibrary.getSprite("time_panel"));q.regX=89;q.regY=70;q.x=150;q.y=70;s_oStage.addChild(q);w=new createjs.Text(TEXT_TIME_LEFT+" "+formatTime(TIME_AVAILABLE),"bold 24px Digital-7","#ffde00");w.x=q.x;w.y=q.y-9;w.textBaseline="alphabetic";w.textAlign="center";w.shadow=new createjs.Shadow("#000000",3,3,4);s_oStage.addChild(w);
z=new createjs.Text(TEXT_SCORE+" 0","bold 30px Digital-7","#ffde00");z.x=q.x;z.y=q.y+22;z.textBaseline="alphabetic";z.textAlign="center";z.shadow=new createjs.Shadow("#000000",3,3,4);s_oStage.addChild(z);x=new createjs.Text(TEXT_SHOTS+" 0","bold 30px Digital-7","#ffde00");x.x=q.x;x.y=q.y+54;x.textBaseline="alphabetic";x.textAlign="center";x.shadow=new createjs.Shadow("#000000",3,3,4);s_oStage.addChild(x);n=createBitmap(s_oSpriteLibrary.getSprite("shot_ball"));n.regX=SHOTBALL_SIZE/2;n.regY=SHOTBALL_SIZE/
2;n.x=t-100;n.y=u;s_oStage.addChild(n);l=createBitmap(s_oSpriteLibrary.getSprite("shot_ball"));l.regX=SHOTBALL_SIZE/2;l.regY=SHOTBALL_SIZE/2;l.x=t;l.y=u-100;l.visible=!1;s_oStage.addChild(l);p=new createjs.Shape;p.graphics.beginFill("Black").drawRect(0,75,CANVAS_WIDTH,CANVAS_HEIGHT-75);p.alpha=.01;s_oStage.addChild(p);p.on("mousedown",this._handleClick,this);!1===s_bMobile&&(document.onkeydown=this.onKeyDown)};this.unload=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||A.unload();y.unload()};
this.updateTime=function(a){a=TEXT_TIME_LEFT+" "+formatTime(a);w.text=a};this.updateScore=function(a){z.text=TEXT_SCORE+" "+a};this.updateShots=function(a){x.text=TEXT_SHOTS+" "+a};this._handleClick=function(a){if(!b){if(!0===f)return f=!1,k=!0,m=Math.floor((n.x-t)/h*100)/100,l.visible=!0;!0===k&&(k=!1,d=Math.floor((l.y-u)/h*100)/100,e=!0)}};this.onKeyDown=function(a){a||(a=window.event);switch(a.keyCode){case 32:s_oInterface._handleClick()}};this.listenForClick=function(){b=!1;e||(!1===f&&!1===k&&
(f=!0),this._animateShotBall());return!0};this._animateShotBall=function(){f?g?(n.x-=SELECTOR_SPEED,n.x<.85*CANVAS_WIDTH-h&&(g=!1)):(n.x+=SELECTOR_SPEED,n.x>.85*CANVAS_WIDTH+h&&(g=!0)):k&&(c?(l.y-=SELECTOR_SPEED,l.y<.45*CANVAS_HEIGHT-h&&(c=!1)):(l.y+=SELECTOR_SPEED,l.y>.45*CANVAS_HEIGHT+h&&(c=!0)))};this.isVectorAquired=function(){return{state:e,vector:{x:m,y:d}}};this.newBall=function(){b=!0;c=g=k=f=e=!1;n.x=t-100;n.y=u;l.x=t;l.y=u-100;l.visible=!1};this._onAudioToggle=function(){createjs.Sound.setMute(!s_bAudioActive)};
this._onExit=function(){v.unload()};s_oInterface=this;this.init(a)}var s_oInterface;
function CHelpPanel(){var a,b,e,f;this._init=function(){b=new createBitmap(s_oSpriteLibrary.getSprite("bg_help"));a=new createjs.Text(s_bMobile?TEXT_HELP_MOBILE:TEXT_HELP,"48px impactregular","#FFCC00");a.x=CANVAS_WIDTH/2;a.y=260;a.textAlign="center";a.textBaseline="alphabetic";a.lineWidth=550;a.shadow=new createjs.Shadow("#000",2,2,2);var k=new createjs.Text("1 "+TEXT_POINT,"28px impactregular","#FFCC00");k.x=325;k.y=520;k.textAlign="center";k.textBaseline="alphabetic";k.shadow=new createjs.Shadow("#000",
2,2,2);var g=new createjs.Text("2 "+TEXT_POINTS,"28px impactregular","#FFCC00");g.x=475;g.y=520;g.textAlign="center";g.textBaseline="alphabetic";g.shadow=new createjs.Shadow("#000",2,2,2);var c=s_oSpriteLibrary.getSprite("but_play");e=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT-140,c,TEXT_PLAY,"impactregular","#fff",60,s_oStage);e.addEventListener(ON_MOUSE_UP,this._onExit,this);f=new createjs.Container;f.addChild(b,a,e.getButtonImage(),k,g);s_oStage.addChild(f)};this.unload=function(){e.unload();
f.removeAllChildren()};this._onExit=function(){this.unload();s_oGame.exitFromHelp()};this._init()}
function CGfxButton(a,b,e){var f,k,g,c,m,d=[],h;this._init=function(a,b,d){f=!1;c=[];m=[];k=d.width;g=d.height;h=createBitmap(d);h.x=a;h.y=b;h.regX=d.width/2;h.regY=d.height/2;s_oStage.addChild(h);this._initListener()};this.unload=function(){h.off("mousedown",this.buttonDown);h.off("pressup",this.buttonRelease);s_oStage.removeChild(h)};this.setVisible=function(a){h.visible=a};this._initListener=function(){h.on("mousedown",this.buttonDown);h.on("pressup",this.buttonRelease)};this.addEventListener=
function(a,b,d){c[a]=b;m[a]=d};this.addEventListenerWithParams=function(a,b,e,f){c[a]=b;m[a]=e;d=f};this.buttonRelease=function(){f||(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("press_but"),h.scaleX=1,h.scaleY=1,c[ON_MOUSE_UP]&&c[ON_MOUSE_UP].call(m[ON_MOUSE_UP],d))};this.buttonDown=function(){f||(h.scaleX=.9,h.scaleY=.9,c[ON_MOUSE_DOWN]&&c[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN],d))};this.setPosition=function(a,b){h.x=a;h.y=b};this.setX=function(a){h.x=a};this.setY=function(a){h.y=
a};this.enable=function(){f=!1;h.filters=[];h.cache(0,0,k,g)};this.disable=function(){f=!0;var a=(new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);h.filters=[new createjs.ColorMatrixFilter(a)];h.cache(0,0,k,g)};this.getButtonImage=function(){return h};this.getX=function(){return h.x};this.getY=function(){return h.y};this._init(a,b,e);return this}
function CGame(){var a=!1,b=!1,e=!1,f=!0,k=!1,g=!1,c,m,d,h=0,t=0,u=0,v,p,n=[],l,r,q,A=null,y,w,z,x,B,C;this._init=function(){c=0;m=1;d=NUM_SHOT_PER_SCENE;p=TIME_AVAILABLE;l=new CANNON.World;l.gravity.set(0,0,-400);l.broadphase=new CANNON.NaiveBroadphase;l.solver.iterations=5;x=new CANNON.Material;B=new CANNON.Material;C=new CANNON.Material;var a=new CANNON.ContactMaterial(x,x,{friction:.2,restitution:.55}),b=new CANNON.ContactMaterial(B,x,{friction:.05,restitution:.35}),e=new CANNON.ContactMaterial(B,
C,{friction:.25,restitution:.5});l.addContactMaterial(a);l.addContactMaterial(b);l.addContactMaterial(e);a=new CANNON.Plane;b=new CANNON.Body({mass:0,material:x});b.addShape(a);l.add(b);w=new CSceneStatic(l,m,x,C);a=w.getCartCoords();y=new CPlayer(this,a);for(b=0;b<d;b++)n.push(new CBall(l,x,x,m,b,a));r=new CInterface(this);q=new CHelpPanel;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundTrack.stop(),s_oSoundTrack=null,z=createjs.Sound.play("us_crowd",{loop:-1})};this.unload=function(){!1!==
DISABLE_SOUND_MOBILE&&!1!==s_bMobile||z.stop();for(var a=l.bodies.length,b=0;b<a;b++)l.remove(l.bodies[0]);l=null;createjs.Tween.removeAllTweens();s_oStage.removeAllEventListeners();s_oStage.removeAllChildren();r.unload();null!==A&&A.unload();s_oMain.gotoMenu();$(s_oMain).trigger("game_start")};this.exitFromHelp=function(){q.unload();c=1};this.getState=function(){return _oGameStates[void 0]};this.ballWaitToThrow=function(){0<d&&n[d-1].waitToThrow()};this.update=function(q){1<c&&(void 0===v?v=q:(p=
Math.floor(TIME_AVAILABLE-(q-v)),0<=p?(r.updateTime(p),w.updateTime(p)):(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("us_buzzer"),A=new CEndPanel(p,h,t,this),c=-1)));1===c&&(u++,y.idle1(),30<u&&(c=2));if(2===c){r.listenForClick();y.grab1();if(y.isBallGrabbed()&&!e)for(e=!0,n[d-1].grab(y.getPlCoords()),q=0;q<d-1;q++)n[q].slide();r.isVectorAquired().state&&(c=3)}3===c&&(a||(a=!0,n[d-1].throwingBall(y.getPlCoords(),r.isVectorAquired().vector,n[d-1]),n[d-1].update()),y.throwing(m)&&
(c=4,f=!0,g=k=a=!1));if(4===c){f&&(e=f=!1,y.newBall(),w.newBall(),d--,t++,r.updateShots(t));n[d].update();q=w.updateBasket(n[d].getPosition());!0===q?(k=!0,h=0===n[d].getCartPosition()?h+POINT_FOR_SPECIAL_BALL:h+POINT_FOR_BALL,r.updateScore(h),!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("us_cheer")):!1===q&&!1===k&&(g=!0);!0===k?(k=w.scored(),g=!1):g&&(g=w.rimCollision());n[d].touchGround();if(0<d){if(y.grab2(),y.isBallGrabbed()&&!e)for(e=!0,n[d-1].grab(y.getPlCoords()),q=0;q<d-
1;q++)n[q].slide()}else y.endTurn();n[d].touchedGround()&&(b||(r.newBall(),b=!0),0<d?(r.listenForClick(),r.isVectorAquired().state&&(c=3,b=!1)):0===d&&(b=!1,c=5))}if(5===c)if(m++,5>=m){d=NUM_SHOT_PER_SCENE;y.endTurn();w.nextScene();y.nextScene(w.getCartCoords());for(q=0;q<d;q++)n[q].unload(),n[q]=new CBall(l,x,x,m,q,w.getCartCoords());c=1}else A=new CEndPanel(p,h,t,this),c=-1};s_oGame=this;this._init()}var s_oGame;
function CEndPanel(a,b,e,f){var k,g,c,m,d,h,t;this._init=function(a,b,e,f){k=f;g=createBitmap(s_oSpriteLibrary.getSprite("msg_box"));s_oStage.addChild(g);c=new createjs.Text(TEXT_FINALSCORE+" "+b,"bold 52px impactregular","#FFCC00");c.x=CANVAS_WIDTH/2;c.y=225;c.alpha=0;c.textBaseline="alphabetic";c.textAlign="center";c.shadow=new createjs.Shadow("#000000",4,4,3);createjs.Tween.get(c).to({x:CANVAS_WIDTH/2,y:CANVAS_HEIGHT/2-110,alpha:1},1600,createjs.Ease.quadOut);m=new createjs.Text(TEXT_FINALSHOTS+
" "+e,"bold 36px impactregular","#FFCC00");m.x=CANVAS_WIDTH/2-150;m.y=CANVAS_HEIGHT/2-49;m.alpha=0;m.textBaseline="alphabetic";m.textAlign="center";m.shadow=new createjs.Shadow("#000000",3,3,3);createjs.Tween.get(m).wait(500).to({x:CANVAS_WIDTH/2,y:CANVAS_HEIGHT/2-49,alpha:1},500,createjs.Ease.quadOut);a=0>=a?0:formatTime(a);d=new createjs.Text(TEXT_FINALTIME+" "+a,"bold 36px impactregular","#FFCC00");d.x=CANVAS_WIDTH/2+150;d.y=CANVAS_HEIGHT/2-7;d.alpha=0;d.textBaseline="alphabetic";d.textAlign="center";
d.shadow=new createjs.Shadow("#000000",3,3,3);createjs.Tween.get(d).wait(750).to({x:CANVAS_WIDTH/2,y:CANVAS_HEIGHT/2-7,alpha:1},500,createjs.Ease.quadOut);a=0===e?0:(b/e*100).toFixed(1);h=new createjs.Text(TEXT_FINALSUCCESSPERC+" "+a+"%","bold 36px impactregular","#FFCC00");h.x=CANVAS_WIDTH/2-150;h.y=CANVAS_HEIGHT/2+32;h.alpha=0;h.textBaseline="alphabetic";h.textAlign="center";h.shadow=new createjs.Shadow("#000000",3,3,3);var l=this;createjs.Tween.get(h).wait(1E3).to({x:CANVAS_WIDTH/2,y:CANVAS_HEIGHT/
2+32,alpha:1},500,createjs.Ease.quadOut).call(function(){var a=s_oSpriteLibrary.getSprite("but_play");t=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT/2+105,a,TEXT_PLAYAGAIN,"impactregular","#ffffff",30,s_oStage);t.addEventListener(ON_MOUSE_UP,l._onButPlayAgain,l)},l);s_oStage.addChild(c,m,d,h);$(s_oMain).trigger("save_score",[b])};this.unload=function(){t.unload();t=null};this._onButPlayAgain=function(){k.unload()};this._init(a,b,e,f)};