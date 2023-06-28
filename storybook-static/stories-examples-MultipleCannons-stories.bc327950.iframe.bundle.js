"use strict";(self.webpackChunkconfetti_cannon=self.webpackChunkconfetti_cannon||[]).push([[186],{"./src/stories/examples/MultipleCannons.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),uuid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),_Utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/Utils.ts"),_Stories_module_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/Stories.module.css"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FALLING_CHARACTER_SPRITES=[{src:__webpack_require__("./src/stories/images/duck.svg"),colorize:!1}],FALLING_CHARACTER_COLORS=[],SPRITES=[__webpack_require__("./src/stories/images/square.svg"),__webpack_require__("./src/stories/images/circle.svg")],COLORS=["#FF73FA","#FFC0FF","#FFD836","#FF9A15","#A5F7DE","#51BC9D","#AEC7FF","#3E70DD"],FALLING_CHARACTER_CONFETTI_CONFIG={velocity:{type:"static-random",minValue:{x:-5,y:0},maxValue:{x:-2,y:0}},rotation:{type:"oscillating-random",minValue:{x:0,y:0,z:-20},maxValue:{x:0,y:0,z:20},minStart:{x:0,y:0,z:-20},maxStart:{x:0,y:0,z:-10},minFinal:{x:0,y:0,z:10},maxFinal:{x:0,y:0,z:20},minDuration:{x:0,y:0,z:5},maxDuration:{x:0,y:0,z:8},minDirection:{x:1,y:1,z:-1},maxDirection:{x:1,y:1,z:1},easingFunctions:[___WEBPACK_IMPORTED_MODULE_2__.easeInOutQuad]},size:{type:"static",value:80},dragCoefficient:{type:"static",value:{x:.001,y:.05}}},CONFETTI_CONFETTI_CONFIG={size:{type:"static-random",minValue:20,maxValue:40},velocity:{type:"static-random",minValue:{x:-25,y:-75},maxValue:{x:25,y:-50}},rotation:{type:"linear-random",minValue:0,maxValue:360,minAddValue:5,maxAddValue:10}};const __WEBPACK_DEFAULT_EXPORT__={title:"Examples/MultipleCannons",component:function MultipleCannonsStory(){const confettiCanvas=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),confettiSpriteCanvas=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),fallingCharacterSpriteCanvas=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),environment=react__WEBPACK_IMPORTED_MODULE_1__.useMemo((()=>new ___WEBPACK_IMPORTED_MODULE_2__.Environment({wind:-5})),[]),fallingCharacterCannon=(0,___WEBPACK_IMPORTED_MODULE_2__.useConfettiCannon)(confettiCanvas,fallingCharacterSpriteCanvas),confettiCannon=(0,___WEBPACK_IMPORTED_MODULE_2__.useConfettiCannon)(confettiCanvas,confettiSpriteCanvas),addConfetti=react__WEBPACK_IMPORTED_MODULE_1__.useCallback(((x,y)=>{const createConfettiArgs={...CONFETTI_CONFETTI_CONFIG,position:{type:"static-random",minValue:{x:x-5,y:y-5},maxValue:{x:x+5,y:y+5}}};confettiCannon.createMultipleConfetti(createConfettiArgs,5)}),[confettiCannon]),addFallingCharacter=react__WEBPACK_IMPORTED_MODULE_1__.useCallback(((x,y)=>{const createConfettiArgs={id:`FALLING_CHARACTER-${(0,uuid__WEBPACK_IMPORTED_MODULE_5__.Z)()}`,...FALLING_CHARACTER_CONFETTI_CONFIG,position:{type:"static",value:{x,y}}};return fallingCharacterCannon.createConfetti(createConfettiArgs)}),[fallingCharacterCannon]),handleClickFallingCharacter=react__WEBPACK_IMPORTED_MODULE_1__.useCallback((confetti=>{const direction=confetti.rotation.z-confetti.rotation.previewUpdate(.1).z>0?-1:1;confetti.rotation=(0,___WEBPACK_IMPORTED_MODULE_2__.getUpdatableValueVector3)({type:"linear-random",minValue:confetti.rotation,maxValue:confetti.rotation,minAddValue:{x:0,y:0,z:5*direction},maxAddValue:{x:0,y:0,z:10*direction}}),confetti.dragCoefficient=(0,___WEBPACK_IMPORTED_MODULE_2__.getUpdatableValueVector2)({type:"static",value:.001}),confetti.addForce({x:0,y:-100}),addConfetti(confetti.position.x+confetti.width/2,confetti.position.y+confetti.height/2)}),[addConfetti]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.SpriteCanvas,{ref:fallingCharacterSpriteCanvas,sprites:FALLING_CHARACTER_SPRITES,colors:FALLING_CHARACTER_COLORS,spriteWidth:80,spriteHeight:80}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.SpriteCanvas,{ref:confettiSpriteCanvas,sprites:SPRITES,colors:COLORS,spriteWidth:40,spriteHeight:40}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.ConfettiCanvas,{ref:confettiCanvas,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(_Stories_module_css__WEBPACK_IMPORTED_MODULE_3__.Z.bordered,_Stories_module_css__WEBPACK_IMPORTED_MODULE_3__.Z.sizedLarge),onClick:(e,confetti)=>{if(null!=confetti&&confetti.id.startsWith("FALLING_CHARACTER"))return handleClickFallingCharacter(confetti);const{x,y}=(0,_Utils__WEBPACK_IMPORTED_MODULE_6__.PV)(e,confettiCanvas.current?.getCanvas());addFallingCharacter(x,y)},environment})]})}},Example={};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{}",...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"]},"./src/stories/images/circle.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/circle.3b544da9.svg"},"./src/stories/images/duck.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/duck.8ece8edb.svg"},"./src/stories/images/square.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/square.6347e216.svg"}}]);