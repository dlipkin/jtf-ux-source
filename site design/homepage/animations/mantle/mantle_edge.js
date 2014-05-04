/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'mantle-envelope-open-back',
                display: 'block',
                type: 'image',
                rect: ['289px', '162px','150px','138px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/mantle-envelope-open-back.svg','0px','0px']
            },
            {
                id: 'mantle-chart-swoosh',
                display: 'none',
                type: 'image',
                rect: ['92px', '76px','324px','229px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/mantle-chart-swoosh.svg','0px','0px']
            },
            {
                id: 'chartContainer',
                type: 'rect',
                rect: ['52px', '47px','418px','212px','auto', 'auto'],
                clip: ['rect(0px 418px 212px 0px)'],
                fill: ["rgba(191,191,191,0.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                c: [
                {
                    id: 'mantle-chart-pie',
                    display: 'block',
                    type: 'image',
                    rect: ['7px', '133px','79px','58px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",'assets/mantle-chart-pie.svg','0px','0px']
                },
                {
                    id: 'mantle-chart-linegraph',
                    display: 'block',
                    type: 'image',
                    rect: ['291px', '212px','57px','52px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",'assets/mantle-chart-linegraph.svg','0px','0px']
                },
                {
                    id: 'mantle-chart-people',
                    display: 'block',
                    type: 'image',
                    rect: ['280px', '198px','68px','73px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",'assets/mantle-chart-people.svg','0px','0px']
                },
                {
                    id: 'mantle-chart-bar',
                    display: 'block',
                    type: 'image',
                    rect: ['-2px', '148px','91px','62px','auto', 'auto'],
                    autoOrient: false,
                    fill: ["rgba(0,0,0,0)",'assets/mantle-chart-bar.svg','0px','0px']
                }]
            },
            {
                id: 'mantle-envelope-arrow',
                type: 'image',
                rect: ['396px', '148px','131px','119px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/mantle-envelope-arrow.svg','0px','0px']
            },
            {
                id: 'mantle-envelope-open-front',
                display: 'block',
                type: 'image',
                rect: ['289px', '162px','150px','138px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/mantle-envelope-open-front.svg','0px','0px']
            },
            {
                id: 'mantle-envelope-closed',
                display: 'none',
                type: 'image',
                rect: ['289px', '162px','150px','138px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/mantle-envelope-closed.svg','0px','0px']
            },
            {
                id: 'mantle-computer',
                type: 'image',
                rect: ['511px', '162px','172px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/mantle-computer.svg','0px','0px']
            },
            {
                id: 'mantle-computer-envelope',
                display: 'none',
                type: 'image',
                rect: ['528px', '162px','172px','143px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/mantle-computer-envelope.svg','0px','0px']
            },
            {
                id: 'mantle-cloud',
                type: 'image',
                rect: ['0px', '162px','211px','135px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/mantle-cloud.svg','0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_mantle-chart-bar}": [
                ["motion", "location", '43.5px 179px'],
                ["style", "display", 'block']
            ],
            "${_mantle-chart-swoosh}": [
                ["style", "top", '95px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '155px']
            ],
            "${_mantle-computer}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '162px'],
                ["style", "left", '511px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_mantle-chart-linegraph}": [
                ["style", "display", 'block'],
                ["motion", "location", '66.5498046875px 203.1376953125px']
            ],
            "${_mantle-envelope-arrow}": [
                ["style", "top", '148px'],
                ["style", "opacity", '0'],
                ["style", "left", '396px']
            ],
            "${_mantle-chart-pie}": [
                ["motion", "location", '46.47412109375px 161.97607421875px'],
                ["style", "display", 'block']
            ],
            "${_mantle-envelope-open-back}": [
                ["style", "top", '162px'],
                ["style", "opacity", '1'],
                ["style", "left", '289px'],
                ["style", "display", 'block']
            ],
            "${_mantle-computer-envelope}": [
                ["style", "top", '162px'],
                ["transform", "scaleY", '0'],
                ["style", "display", 'none'],
                ["style", "left", '511px'],
                ["transform", "scaleX", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '310px'],
                ["style", "width", '700px']
            ],
            "${_mantle-cloud}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '157px'],
                ["style", "left", '17px'],
                ["transform", "scaleY", '1']
            ],
            "${_mantle-envelope-closed}": [
                ["style", "top", '162px'],
                ["transform", "scaleY", '1'],
                ["motion", "location", '364px 231px'],
                ["transform", "scaleX", '1'],
                ["style", "display", 'none']
            ],
            "${_chartContainer}": [
                ["color", "background-color", 'rgba(191,191,191,0.00)'],
                ["style", "left", '52px'],
                ["style", "clip", [0,418,212,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_mantle-chart-people}": [
                ["motion", "location", '108.25439453125px 215.51879882813px'],
                ["style", "display", 'block']
            ],
            "${_mantle-envelope-open-front}": [
                ["style", "top", '162px'],
                ["style", "opacity", '1'],
                ["style", "left", '289px'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7830,
            autoPlay: true,
            timeline: [
                { id: "eid94", tween: [ "style", "${_mantle-chart-bar}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid97", tween: [ "style", "${_mantle-chart-pie}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid6", tween: [ "motion", "${_mantle-chart-linegraph}", [[66.55, 203.14, 0, 0],[156.76, 67.74, 404.19, -36.27, 308.78, -27.71],[288.94, 190.59, 0, 0]]], position: 1000, duration: 1000 },
                { id: "eid89", tween: [ "motion", "${_mantle-chart-linegraph}", [[288.94, 190.59, 0, 0],[299.38, 169.29, 14.84, -6.15, 18.03, -7.47],[311.06, 181.42, 0, 0]]], position: 2000, duration: 250, easing: "easeOutQuad" },
                { id: "eid92", tween: [ "style", "${_mantle-envelope-closed}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid121", tween: [ "style", "${_mantle-envelope-closed}", "display", 'none', { fromValue: 'block'}], position: 3667, duration: 0, easing: "easeOutQuad" },
                { id: "eid41", tween: [ "transform", "${_mantle-cloud}", "scaleX", '1.1', { fromValue: '1'}], position: 0, duration: 156, easing: "easeOutQuad" },
                { id: "eid44", tween: [ "transform", "${_mantle-cloud}", "scaleX", '1', { fromValue: '1.1'}], position: 156, duration: 344, easing: "easeOutQuad" },
                { id: "eid62", tween: [ "transform", "${_mantle-cloud}", "scaleX", '1.1', { fromValue: '1'}], position: 500, duration: 156, easing: "easeOutQuad" },
                { id: "eid63", tween: [ "transform", "${_mantle-cloud}", "scaleX", '1', { fromValue: '1.1'}], position: 656, duration: 344, easing: "easeOutQuad" },
                { id: "eid66", tween: [ "transform", "${_mantle-cloud}", "scaleX", '1.1', { fromValue: '1'}], position: 1000, duration: 156, easing: "easeOutQuad" },
                { id: "eid67", tween: [ "transform", "${_mantle-cloud}", "scaleX", '1', { fromValue: '1.1'}], position: 1156, duration: 344, easing: "easeOutQuad" },
                { id: "eid70", tween: [ "transform", "${_mantle-cloud}", "scaleX", '1.1', { fromValue: '1'}], position: 1500, duration: 156, easing: "easeOutQuad" },
                { id: "eid71", tween: [ "transform", "${_mantle-cloud}", "scaleX", '1', { fromValue: '1.1'}], position: 1656, duration: 344, easing: "easeOutQuad" },
                { id: "eid95", tween: [ "style", "${_mantle-chart-people}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid371", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 7578, duration: 0 },
                { id: "eid99", tween: [ "style", "${_mantle-envelope-open-front}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid283", tween: [ "style", "${_mantle-envelope-open-front}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "transform", "${_mantle-cloud}", "scaleY", '1.1', { fromValue: '1'}], position: 0, duration: 156, easing: "easeOutQuad" },
                { id: "eid45", tween: [ "transform", "${_mantle-cloud}", "scaleY", '1', { fromValue: '1.1'}], position: 156, duration: 344, easing: "easeOutQuad" },
                { id: "eid64", tween: [ "transform", "${_mantle-cloud}", "scaleY", '1.1', { fromValue: '1'}], position: 500, duration: 156, easing: "easeOutQuad" },
                { id: "eid65", tween: [ "transform", "${_mantle-cloud}", "scaleY", '1', { fromValue: '1.1'}], position: 656, duration: 344, easing: "easeOutQuad" },
                { id: "eid68", tween: [ "transform", "${_mantle-cloud}", "scaleY", '1.1', { fromValue: '1'}], position: 1000, duration: 156, easing: "easeOutQuad" },
                { id: "eid69", tween: [ "transform", "${_mantle-cloud}", "scaleY", '1', { fromValue: '1.1'}], position: 1156, duration: 344, easing: "easeOutQuad" },
                { id: "eid72", tween: [ "transform", "${_mantle-cloud}", "scaleY", '1.1', { fromValue: '1'}], position: 1500, duration: 156, easing: "easeOutQuad" },
                { id: "eid73", tween: [ "transform", "${_mantle-cloud}", "scaleY", '1', { fromValue: '1.1'}], position: 1656, duration: 344, easing: "easeOutQuad" },
                { id: "eid169", tween: [ "style", "${_mantle-envelope-open-back}", "top", '168px', { fromValue: '162px'}], position: 1000, duration: 113, easing: "easeOutQuad" },
                { id: "eid170", tween: [ "style", "${_mantle-envelope-open-back}", "top", '162px', { fromValue: '168px'}], position: 1113, duration: 137, easing: "easeOutQuad" },
                { id: "eid179", tween: [ "style", "${_mantle-envelope-open-back}", "top", '168px', { fromValue: '162px'}], position: 1500, duration: 113, easing: "easeOutQuad" },
                { id: "eid180", tween: [ "style", "${_mantle-envelope-open-back}", "top", '162px', { fromValue: '168px'}], position: 1613, duration: 137, easing: "easeOutQuad" },
                { id: "eid181", tween: [ "style", "${_mantle-envelope-open-back}", "top", '168px', { fromValue: '162px'}], position: 2000, duration: 113, easing: "easeOutQuad" },
                { id: "eid182", tween: [ "style", "${_mantle-envelope-open-back}", "top", '162px', { fromValue: '168px'}], position: 2113, duration: 137, easing: "easeOutQuad" },
                { id: "eid183", tween: [ "style", "${_mantle-envelope-open-back}", "top", '168px', { fromValue: '162px'}], position: 2500, duration: 113, easing: "easeOutQuad" },
                { id: "eid184", tween: [ "style", "${_mantle-envelope-open-back}", "top", '162px', { fromValue: '168px'}], position: 2613, duration: 137, easing: "easeOutQuad" },
                { id: "eid136", tween: [ "transform", "${_mantle-computer-envelope}", "scaleY", '1', { fromValue: '0'}], position: 3742, duration: 528, easing: "easeOutBounce" },
                { id: "eid80", tween: [ "motion", "${_mantle-chart-people}", [[108.25, 215.52, 0, 0],[222.42, 66.44, 299.19, 12.24, 353.12, 14.45],[307.01, 191.51, 0, 0]]], position: 500, duration: 1000 },
                { id: "eid87", tween: [ "motion", "${_mantle-chart-people}", [[307.01, 191.51, 0, 0],[318.77, 171.55, 15.57, -1.35, 19.75, -1.71],[334.43, 185.78, 0, 0]]], position: 1500, duration: 250, easing: "easeOutQuad" },
                { id: "eid135", tween: [ "transform", "${_mantle-computer-envelope}", "scaleX", '1', { fromValue: '0'}], position: 3742, duration: 528, easing: "easeOutBounce" },
                { id: "eid127", tween: [ "transform", "${_mantle-computer}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 3667, duration: 75, easing: "easeOutQuad" },
                { id: "eid129", tween: [ "transform", "${_mantle-computer}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 3742, duration: 544, easing: "easeOutBounce" },
                { id: "eid120", tween: [ "transform", "${_mantle-envelope-closed}", "scaleY", '0.5', { fromValue: '1'}], position: 3250, duration: 417, easing: "easeOutQuad" },
                { id: "eid167", tween: [ "style", "${_mantle-envelope-open-front}", "top", '168px', { fromValue: '162px'}], position: 1000, duration: 113, easing: "easeOutQuad" },
                { id: "eid168", tween: [ "style", "${_mantle-envelope-open-front}", "top", '162px', { fromValue: '168px'}], position: 1113, duration: 137, easing: "easeOutQuad" },
                { id: "eid172", tween: [ "style", "${_mantle-envelope-open-front}", "top", '168px', { fromValue: '162px'}], position: 1500, duration: 113, easing: "easeOutQuad" },
                { id: "eid173", tween: [ "style", "${_mantle-envelope-open-front}", "top", '162px', { fromValue: '168px'}], position: 1613, duration: 137, easing: "easeOutQuad" },
                { id: "eid175", tween: [ "style", "${_mantle-envelope-open-front}", "top", '168px', { fromValue: '162px'}], position: 2000, duration: 113, easing: "easeOutQuad" },
                { id: "eid176", tween: [ "style", "${_mantle-envelope-open-front}", "top", '162px', { fromValue: '168px'}], position: 2113, duration: 137, easing: "easeOutQuad" },
                { id: "eid177", tween: [ "style", "${_mantle-envelope-open-front}", "top", '168px', { fromValue: '162px'}], position: 2500, duration: 113, easing: "easeOutQuad" },
                { id: "eid178", tween: [ "style", "${_mantle-envelope-open-front}", "top", '162px', { fromValue: '168px'}], position: 2613, duration: 137, easing: "easeOutQuad" },
                { id: "eid93", tween: [ "style", "${_mantle-computer-envelope}", "display", 'block', { fromValue: 'none'}], position: 3743, duration: 0, easing: "easeOutQuad" },
                { id: "eid298", tween: [ "style", "${_mantle-envelope-open-front}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid287", tween: [ "style", "${_mantle-envelope-open-front}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 1214, easing: "easeOutQuad" },
                { id: "eid468", tween: [ "style", "${_mantle-chart-swoosh}", "left", '155px', { fromValue: '155px'}], position: 6750, duration: 0 },
                { id: "eid313", tween: [ "style", "${_mantle-envelope-arrow}", "opacity", '1', { fromValue: '0'}], position: 6364, duration: 1214, easing: "easeOutQuad" },
                { id: "eid281", tween: [ "style", "${_mantle-chart-swoosh}", "display", 'block', { fromValue: 'none'}], position: 6365, duration: 0, easing: "easeOutQuad" },
                { id: "eid130", tween: [ "style", "${_mantle-computer}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3667, duration: 0, easing: "easeOutQuad" },
                { id: "eid474", tween: [ "style", "${_mantle-computer}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3667, duration: 0, easing: "easeOutQuad" },
                { id: "eid475", tween: [ "style", "${_mantle-computer}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3667, duration: 0, easing: "easeOutQuad" },
                { id: "eid476", tween: [ "style", "${_mantle-computer}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3667, duration: 0, easing: "easeOutQuad" },
                { id: "eid477", tween: [ "style", "${_mantle-computer}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 3667, duration: 0, easing: "easeOutQuad" },
                { id: "eid469", tween: [ "style", "${_mantle-chart-swoosh}", "top", '95px', { fromValue: '95px'}], position: 6750, duration: 0 },
                { id: "eid115", tween: [ "transform", "${_mantle-envelope-closed}", "scaleX", '0.5', { fromValue: '1'}], position: 3250, duration: 417, easing: "easeOutQuad" },
                { id: "eid98", tween: [ "style", "${_mantle-envelope-open-back}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid282", tween: [ "style", "${_mantle-envelope-open-back}", "display", 'block', { fromValue: 'none'}], position: 6036, duration: 0, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "motion", "${_mantle-chart-bar}", [[43.5, 179, 0, 0],[180.21, 62.58, 425.12, -1.95, 322.27, -1.48],[308.71, 191.24, 0, 0]]], position: 0, duration: 1000 },
                { id: "eid85", tween: [ "motion", "${_mantle-chart-bar}", [[308.71, 191.24, 0, 0],[318.44, 174.46, 11.01, -3.03, 16.14, -4.44],[333.87, 186.03, 0, 0]]], position: 1000, duration: 250, easing: "easeOutQuad" },
                { id: "eid291", tween: [ "style", "${_mantle-chart-swoosh}", "opacity", '1', { fromValue: '0'}], position: 6364, duration: 1214, easing: "easeOutQuad" },
                { id: "eid295", tween: [ "style", "${_mantle-envelope-open-back}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid303", tween: [ "style", "${_mantle-envelope-open-back}", "opacity", '1', { fromValue: '0'}], position: 6036, duration: 1214, easing: "easeOutQuad" },
                { id: "eid96", tween: [ "style", "${_mantle-chart-linegraph}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "easeOutQuad" },
                { id: "eid83", tween: [ "motion", "${_mantle-chart-pie}", [[46.47, 161.98, 0, 0],[158.24, 50.58, 350.91, 5.36, 280.04, 4.28],[298.5, 182, 0, 0]]], position: 1500, duration: 1000 },
                { id: "eid91", tween: [ "motion", "${_mantle-chart-pie}", [[298.5, 182, 0, 0],[308.16, 166.94, 13.2, -6.25, 15.27, -7.23],[317.58, 172.97, 0, 0]]], position: 2500, duration: 250, easing: "easeOutQuad" },
                { id: "eid455", tween: [ "style", "${_Stage}", "height", '310px', { fromValue: '310px'}], position: 7830, duration: 0 },
                { id: "eid106", tween: [ "motion", "${_mantle-envelope-closed}", [[364, 231, 0, 0],[464.73, 206.88, 199.08, -21.82, 139.66, -15.31],[597, 205.47, 0, 0]]], position: 3250, duration: 417, easing: "easeInBack" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "mantle-animation");
