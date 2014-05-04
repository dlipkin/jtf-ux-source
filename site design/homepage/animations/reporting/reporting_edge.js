/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'preloadAudio': false
};
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
                id: 'reporting-grid',
                type: 'image',
                rect: ['0', '0','550px','400px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/reporting-grid.svg','0px','0px']
            },
            {
                id: 'bar6',
                type: 'rect',
                rect: ['auto', 'auto','55px','0px','71px', '59px'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'bar5',
                type: 'rect',
                rect: ['auto', 'auto','55px','0px','139px', '59px'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'bar4',
                type: 'rect',
                rect: ['auto', 'auto','55px','0px','207px', '59px'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'bar3',
                type: 'rect',
                rect: ['auto', 'auto','55px','0px','275px', '59px'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'bar2',
                type: 'rect',
                rect: ['auto', 'auto','55px','0px','344px', '-95px'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'bar1',
                type: 'rect',
                rect: ['auto', 'auto','55px','0px','412px', '59px'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_bar2}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '59px'],
                ["style", "height", '0px'],
                ["style", "right", '344px'],
                ["style", "left", 'auto'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_bar5}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '59px'],
                ["style", "height", '0px'],
                ["style", "right", '139px'],
                ["style", "left", 'auto'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_bar1}": [
                ["style", "top", 'auto'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "bottom", '59px'],
                ["style", "height", '0px'],
                ["style", "right", '412px'],
                ["style", "left", 'auto'],
                ["style", "width", '55px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_bar6}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '59px'],
                ["style", "height", '0px'],
                ["style", "right", '71px'],
                ["style", "left", 'auto'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_bar3}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '59px'],
                ["style", "height", '0px'],
                ["style", "right", '275px'],
                ["style", "left", 'auto'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_bar4}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '59px'],
                ["style", "height", '0px'],
                ["style", "right", '207px'],
                ["style", "left", 'auto'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid11", tween: [ "style", "${_bar3}", "height", '269px', { fromValue: '0px'}], position: 500, duration: 1000, easing: "easeOutBack" },
                { id: "eid17", tween: [ "style", "${_bar5}", "height", '198px', { fromValue: '0px'}], position: 1000, duration: 1000, easing: "easeOutBack" },
                { id: "eid14", tween: [ "style", "${_bar4}", "height", '309px', { fromValue: '0px'}], position: 750, duration: 1000, easing: "easeOutBack" },
                { id: "eid4", tween: [ "style", "${_bar1}", "height", '126px', { fromValue: '0px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid18", tween: [ "style", "${_bar6}", "height", '154px', { fromValue: '0px'}], position: 1250, duration: 1000, easing: "easeOutBack" },
                { id: "eid9", tween: [ "style", "${_bar2}", "height", '226px', { fromValue: '0px'}], position: 250, duration: 1000, easing: "easeOutBack" }            ]
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
})(jQuery, AdobeEdge, "reporting");
