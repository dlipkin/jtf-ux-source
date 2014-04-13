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
                id: 'factSelection-jtf',
                display: 'none',
                type: 'image',
                rect: ['0', '0','302px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/factSelection-jtf.svg','0px','0px']
            },
            {
                id: 'factSelection-mailchimp',
                display: 'none',
                type: 'image',
                rect: ['0', '0','302px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/factSelection-mailchimp.svg','0px','0px']
            },
            {
                id: 'factSelection-mailchimp-overlay',
                display: 'none',
                type: 'image',
                rect: ['0', '0','302px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/factSelection-mailchimp-overlay.svg','0px','0px']
            },
            {
                id: 'factSelection-twitter',
                display: 'none',
                type: 'image',
                rect: ['0', '0','302px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/factSelection-twitter.svg','0px','0px']
            },
            {
                id: 'factSelection-twitter-overlay',
                display: 'none',
                type: 'image',
                rect: ['0', '0','302px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/factSelection-twitter-overlay.svg','0px','0px']
            },
            {
                id: 'factSelection-google',
                type: 'image',
                rect: ['0', '0','302px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/factSelection-google.svg','0px','0px']
            },
            {
                id: 'factSelection-google-overlay',
                type: 'image',
                rect: ['0', '0','302px','346px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/factSelection-google-overlay.svg','0px','0px']
            },
            {
                id: 'factSelection-fact-google',
                display: 'none',
                type: 'image',
                rect: ['114px', '103px','257px','42px','auto', 'auto'],
                autoOrient: false,
                fill: ["rgba(0,0,0,0)",'assets/factSelection-fact-google.svg','0px','0px']
            },
            {
                id: 'factSelection-fact-twitter',
                display: 'none',
                type: 'image',
                rect: ['283px', '113px','257px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/factSelection-fact-twitter.svg','0px','0px']
            },
            {
                id: 'factSelection-fact-mailchimp',
                display: 'none',
                type: 'image',
                rect: ['9px', '239px','257px','42px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/factSelection-fact-mailchimp.svg','0px','0px']
            },
            {
                id: 'Rectangle',
                display: 'none',
                type: 'rect',
                rect: ['114px', '101px','257px','42px','auto', 'auto'],
                fill: ["rgba(60,204,236,0.99)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle2',
                display: 'none',
                type: 'rect',
                rect: ['436px', '118px','39px','30px','auto', 'auto'],
                fill: ["rgba(60,204,236,0.9922)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle4',
                display: 'none',
                type: 'rect',
                rect: ['81px', '233px','52px','54px','auto', 'auto'],
                fill: ["rgba(60,204,236,0.9961)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'factSelection-checkmark',
                display: 'block',
                type: 'image',
                rect: ['234px', '124px','17px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/factSelection-checkmark.svg','0px','0px']
            },
            {
                id: 'factSelection-cursor',
                type: 'image',
                rect: ['456px', '173px','21px','33px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'assets/factSelection-cursor.svg','0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '65px'],
                ["style", "display", 'none'],
                ["color", "background-color", 'rgba(60,204,236,0.99)'],
                ["style", "height", '95px'],
                ["style", "opacity", '1'],
                ["style", "left", '187px'],
                ["style", "width", '106px']
            ],
            "${_Rectangle2}": [
                ["style", "top", '119px'],
                ["style", "display", 'none'],
                ["style", "height", '30px'],
                ["style", "opacity", '1'],
                ["style", "left", '437px'],
                ["style", "width", '39px']
            ],
            "${_factSelection-twitter}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '248px'],
                ["style", "display", 'none']
            ],
            "${_factSelection-fact-mailchimp}": [
                ["style", "display", 'none'],
                ["motion", "location", '137.5px 260px']
            ],
            "${_factSelection-fact-twitter}": [
                ["motion", "location", '411.5px 134px'],
                ["style", "display", 'none']
            ],
            "${_factSelection-mailchimp}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '0']
            ],
            "${_factSelection-google-overlay}": [
                ["style", "opacity", '0.000000']
            ],
            "${_factSelection-checkmark}": [
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "left", '234px'],
                ["style", "top", '124px']
            ],
            "${_factSelection-fact-google}": [
                ["motion", "location", '242.5px 124px'],
                ["style", "display", 'none']
            ],
            "${_factSelection-jtf}": [
                ["style", "top", '27px'],
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '124px']
            ],
            "${_factSelection-cursor}": [
                ["transform", "scaleY", '1'],
                ["motion", "location", '466.5px 189.5px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0']
            ],
            "${_factSelection-google}": [
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '0']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(44,47,53,1.00)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_factSelection-mailchimp-overlay}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px']
            ],
            "${_Rectangle4}": [
                ["style", "top", '234px'],
                ["style", "display", 'none'],
                ["style", "height", '54px'],
                ["style", "opacity", '1'],
                ["style", "left", '81px'],
                ["style", "width", '52px']
            ],
            "${_factSelection-twitter-overlay}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '248px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 11000,
            autoPlay: true,
            timeline: [
                { id: "eid146", tween: [ "style", "${_factSelection-twitter-overlay}", "left", '248px', { fromValue: '248px'}], position: 4697, duration: 0, easing: "easeInQuad" },
                { id: "eid140", tween: [ "transform", "${_factSelection-twitter}", "scaleY", '1', { fromValue: '0'}], position: 3115, duration: 1000, easing: "easeOutBounce" },
                { id: "eid104", tween: [ "style", "${_factSelection-checkmark}", "opacity", '0', { fromValue: '1'}], position: 2721, duration: 132, easing: "easeOutBounce" },
                { id: "eid168", tween: [ "style", "${_factSelection-checkmark}", "opacity", '1', { fromValue: '0'}], position: 5272, duration: 0, easing: "easeOutBounce" },
                { id: "eid157", tween: [ "style", "${_factSelection-checkmark}", "opacity", '0', { fromValue: '1'}], position: 5514, duration: 279 },
                { id: "eid243", tween: [ "style", "${_factSelection-checkmark}", "opacity", '1', { fromValue: '0'}], position: 8119, duration: 0 },
                { id: "eid272", tween: [ "style", "${_factSelection-checkmark}", "opacity", '0', { fromValue: '1'}], position: 8582, duration: 279 },
                { id: "eid216", tween: [ "style", "${_factSelection-mailchimp}", "top", '0px', { fromValue: '0px'}], position: 5514, duration: 0, easing: "easeOutBounce" },
                { id: "eid90", tween: [ "style", "${_Rectangle}", "width", '257px', { fromValue: '106px'}], position: 2721, duration: 279 },
                { id: "eid138", tween: [ "style", "${_factSelection-twitter}", "top", '0px', { fromValue: '0px'}], position: 3115, duration: 0, easing: "easeOutBounce" },
                { id: "eid261", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 8119, duration: 0 },
                { id: "eid118", tween: [ "style", "${_factSelection-fact-twitter}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid210", tween: [ "style", "${_factSelection-fact-twitter}", "display", 'block', { fromValue: 'none'}], position: 5418, duration: 0, easing: "easeOutBounce" },
                { id: "eid220", tween: [ "transform", "${_factSelection-mailchimp}", "scaleX", '1', { fromValue: '0'}], position: 5514, duration: 1000, easing: "easeOutBounce" },
                { id: "eid13", tween: [ "style", "${_factSelection-cursor}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250, easing: "easeInQuad" },
                { id: "eid331", tween: [ "style", "${_factSelection-cursor}", "opacity", '0', { fromValue: '1'}], position: 8582, duration: 279 },
                { id: "eid203", tween: [ "style", "${_Rectangle2}", "height", '42px', { fromValue: '30px'}], position: 5272, duration: 146 },
                { id: "eid89", tween: [ "style", "${_Rectangle}", "left", '114px', { fromValue: '187px'}], position: 2721, duration: 279 },
                { id: "eid120", tween: [ "style", "${_Rectangle}", "left", '114px', { fromValue: '114px'}], position: 3115, duration: 0, easing: "easeOutBounce" },
                { id: "eid61", tween: [ "style", "${_factSelection-checkmark}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid62", tween: [ "style", "${_factSelection-checkmark}", "display", 'block', { fromValue: 'none'}], position: 2611, duration: 0, easing: "easeInQuad" },
                { id: "eid154", tween: [ "style", "${_factSelection-checkmark}", "display", 'none', { fromValue: 'block'}], position: 2853, duration: 0, easing: "easeOutBounce" },
                { id: "eid155", tween: [ "style", "${_factSelection-checkmark}", "display", 'block', { fromValue: 'none'}], position: 5272, duration: 0, easing: "easeInQuad" },
                { id: "eid156", tween: [ "style", "${_factSelection-checkmark}", "display", 'none', { fromValue: 'block'}], position: 5793, duration: 0, easing: "easeOutBounce" },
                { id: "eid240", tween: [ "style", "${_factSelection-checkmark}", "display", 'block', { fromValue: 'none'}], position: 8119, duration: 0 },
                { id: "eid289", tween: [ "style", "${_factSelection-jtf}", "left", '124px', { fromValue: '124px'}], position: 10520, duration: 0, easing: "easeOutQuart" },
                { id: "eid5", tween: [ "transform", "${_factSelection-google}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid117", tween: [ "style", "${_factSelection-jtf}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid278", tween: [ "style", "${_factSelection-jtf}", "display", 'block', { fromValue: 'none'}], position: 9000, duration: 0, easing: "easeOutQuart" },
                { id: "eid205", tween: [ "style", "${_Rectangle2}", "top", '113px', { fromValue: '119px'}], position: 5272, duration: 146 },
                { id: "eid114", tween: [ "style", "${_factSelection-mailchimp}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid106", tween: [ "style", "${_factSelection-mailchimp}", "display", 'block', { fromValue: 'none'}], position: 5514, duration: 0, easing: "easeOutBounce" },
                { id: "eid330", tween: [ "style", "${_factSelection-jtf}", "top", '27px', { fromValue: '27px'}], position: 10088, duration: 0, easing: "easeOutQuart" },
                { id: "eid52", tween: [ "transform", "${_factSelection-cursor}", "scaleY", '1', { fromValue: '1'}], position: 2205, duration: 0, easing: "easeInQuad" },
                { id: "eid58", tween: [ "transform", "${_factSelection-cursor}", "scaleY", '0.9', { fromValue: '1'}], position: 2477, duration: 0, easing: "easeInQuad" },
                { id: "eid182", tween: [ "transform", "${_factSelection-cursor}", "scaleY", '1', { fromValue: '0.9'}], position: 2721, duration: 0, easing: "easeInQuad" },
                { id: "eid152", tween: [ "transform", "${_factSelection-cursor}", "scaleY", '1', { fromValue: '1'}], position: 5000, duration: 0, easing: "easeInQuad" },
                { id: "eid153", tween: [ "transform", "${_factSelection-cursor}", "scaleY", '0.9', { fromValue: '1'}], position: 5272, duration: 0, easing: "easeInQuad" },
                { id: "eid180", tween: [ "transform", "${_factSelection-cursor}", "scaleY", '1', { fromValue: '0.9'}], position: 5516, duration: 0, easing: "easeInQuad" },
                { id: "eid237", tween: [ "transform", "${_factSelection-cursor}", "scaleY", '1', { fromValue: '1'}], position: 7847, duration: 0, easing: "easeInQuad" },
                { id: "eid238", tween: [ "transform", "${_factSelection-cursor}", "scaleY", '0.9', { fromValue: '1'}], position: 8119, duration: 0, easing: "easeInQuad" },
                { id: "eid239", tween: [ "transform", "${_factSelection-cursor}", "scaleY", '1', { fromValue: '0.9'}], position: 8363, duration: 0, easing: "easeInQuad" },
                { id: "eid10", tween: [ "style", "${_factSelection-google-overlay}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 500, easing: "easeInQuad" },
                { id: "eid92", tween: [ "style", "${_factSelection-google-overlay}", "opacity", '0', { fromValue: '1'}], position: 2721, duration: 279 },
                { id: "eid214", tween: [ "motion", "${_factSelection-fact-twitter}", [[411.5, 134, 0, 0],[365.29, 229.73, -106.42, 12.46, -158.91, 18.6],[240.78, 278.44, -86.32, 142.33, -57.71, 95.16],[276.5, 335, 0, 0]]], position: 5533, duration: 1649, easing: "easeOutSine" },
                { id: "eid304", tween: [ "motion", "${_factSelection-fact-twitter}", [[276.5, 335, 0, 0],[276.5, 263, 0, 0]]], position: 9624, duration: 386, easing: "easeInOutQuad" },
                { id: "eid265", tween: [ "style", "${_Rectangle4}", "opacity", '0', { fromValue: '1'}], position: 8409, duration: 173 },
                { id: "eid137", tween: [ "style", "${_factSelection-twitter}", "left", '248px', { fromValue: '248px'}], position: 3115, duration: 0, easing: "easeOutBounce" },
                { id: "eid112", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 115, easing: "easeOutBounce" },
                { id: "eid257", tween: [ "style", "${_Rectangle4}", "left", '9px', { fromValue: '81px'}], position: 8263, duration: 146 },
                { id: "eid277", tween: [ "motion", "${_factSelection-fact-mailchimp}", [[137.5, 260, 0, 0],[162.64, 285.64, 111.95, 24.16, 95.18, 20.54],[276.5, 291, 0, 0]]], position: 8582, duration: 1042, easing: "easeOutQuart" },
                { id: "eid295", tween: [ "motion", "${_factSelection-fact-mailchimp}", [[276.5, 291, 0, 0],[276.5, 210, 0, 0]]], position: 9625, duration: 386, easing: "easeInOutQuad" },
                { id: "eid186", tween: [ "style", "${_factSelection-twitter}", "opacity", '0', { fromValue: '1'}], position: 5514, duration: 279 },
                { id: "eid285", tween: [ "style", "${_factSelection-jtf}", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 1000 },
                { id: "eid115", tween: [ "style", "${_factSelection-twitter-overlay}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid145", tween: [ "style", "${_factSelection-twitter-overlay}", "display", 'block', { fromValue: 'none'}], position: 4197, duration: 0, easing: "easeInQuad" },
                { id: "eid204", tween: [ "style", "${_Rectangle2}", "width", '257px', { fromValue: '39px'}], position: 5272, duration: 146 },
                { id: "eid132", tween: [ "motion", "${_factSelection-fact-google}", [[242.5, 124, 0, 0],[223.44, 226.93, -46.97, 41.68, -135.36, 120.12],[153.23, 293.88, -41.53, 169.51, -27.93, 114.01],[253.09, 376.2, 41.52, 6.64, 118.42, 18.95],[276.5, 379.01, 0, 0]]], position: 3115, duration: 1885, easing: "easeOutSine" },
                { id: "eid307", tween: [ "motion", "${_factSelection-fact-google}", [[276.5, 379.01, 0, 0],[276.5, 317, 0, 0]]], position: 9624, duration: 386, easing: "easeInOutQuad" },
                { id: "eid206", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 2611, duration: 0, easing: "easeOutBounce" },
                { id: "eid207", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 5272, duration: 0, easing: "easeOutBounce" },
                { id: "eid271", tween: [ "style", "${_factSelection-mailchimp}", "opacity", '0', { fromValue: '1'}], position: 8582, duration: 279 },
                { id: "eid119", tween: [ "style", "${_factSelection-fact-mailchimp}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid260", tween: [ "style", "${_factSelection-fact-mailchimp}", "display", 'block', { fromValue: 'none'}], position: 8409, duration: 0 },
                { id: "eid144", tween: [ "style", "${_factSelection-twitter-overlay}", "opacity", '1', { fromValue: '0.000000'}], position: 4197, duration: 500, easing: "easeInQuad" },
                { id: "eid185", tween: [ "style", "${_factSelection-twitter-overlay}", "opacity", '0', { fromValue: '1'}], position: 5514, duration: 279 },
                { id: "eid51", tween: [ "transform", "${_factSelection-cursor}", "scaleX", '1', { fromValue: '1'}], position: 2205, duration: 0, easing: "easeInQuad" },
                { id: "eid57", tween: [ "transform", "${_factSelection-cursor}", "scaleX", '0.9', { fromValue: '1'}], position: 2477, duration: 0, easing: "easeInQuad" },
                { id: "eid181", tween: [ "transform", "${_factSelection-cursor}", "scaleX", '1', { fromValue: '0.9'}], position: 2721, duration: 0, easing: "easeInQuad" },
                { id: "eid150", tween: [ "transform", "${_factSelection-cursor}", "scaleX", '1', { fromValue: '1'}], position: 5000, duration: 0, easing: "easeInQuad" },
                { id: "eid151", tween: [ "transform", "${_factSelection-cursor}", "scaleX", '0.9', { fromValue: '1'}], position: 5272, duration: 0, easing: "easeInQuad" },
                { id: "eid179", tween: [ "transform", "${_factSelection-cursor}", "scaleX", '1', { fromValue: '0.9'}], position: 5516, duration: 0, easing: "easeInQuad" },
                { id: "eid234", tween: [ "transform", "${_factSelection-cursor}", "scaleX", '1', { fromValue: '1'}], position: 7847, duration: 0, easing: "easeInQuad" },
                { id: "eid235", tween: [ "transform", "${_factSelection-cursor}", "scaleX", '0.9', { fromValue: '1'}], position: 8119, duration: 0, easing: "easeInQuad" },
                { id: "eid236", tween: [ "transform", "${_factSelection-cursor}", "scaleX", '1', { fromValue: '0.9'}], position: 8363, duration: 0, easing: "easeInQuad" },
                { id: "eid6", tween: [ "transform", "${_factSelection-google}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBounce" },
                { id: "eid177", tween: [ "style", "${_factSelection-checkmark}", "left", '234px', { fromValue: '234px'}], position: 2611, duration: 0, easing: "easeOutBounce" },
                { id: "eid183", tween: [ "style", "${_factSelection-checkmark}", "left", '447px', { fromValue: '234px'}], position: 5272, duration: 0, easing: "easeOutBounce" },
                { id: "eid241", tween: [ "style", "${_factSelection-checkmark}", "left", '99px', { fromValue: '447px'}], position: 8119, duration: 0 },
                { id: "eid217", tween: [ "transform", "${_factSelection-mailchimp}", "scaleY", '1', { fromValue: '0'}], position: 5514, duration: 1000, easing: "easeOutBounce" },
                { id: "eid95", tween: [ "style", "${_factSelection-google}", "opacity", '0', { fromValue: '1'}], position: 2721, duration: 279, easing: "easeOutBounce" },
                { id: "eid116", tween: [ "style", "${_factSelection-twitter}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid108", tween: [ "style", "${_factSelection-twitter}", "display", 'block', { fromValue: 'none'}], position: 3115, duration: 0, easing: "easeOutBounce" },
                { id: "eid139", tween: [ "transform", "${_factSelection-twitter}", "scaleX", '1', { fromValue: '0'}], position: 3115, duration: 1000, easing: "easeOutBounce" },
                { id: "eid178", tween: [ "style", "${_factSelection-checkmark}", "top", '124px', { fromValue: '124px'}], position: 2611, duration: 0, easing: "easeOutBounce" },
                { id: "eid184", tween: [ "style", "${_factSelection-checkmark}", "top", '161px', { fromValue: '124px'}], position: 5272, duration: 0, easing: "easeOutBounce" },
                { id: "eid242", tween: [ "style", "${_factSelection-checkmark}", "top", '200px', { fromValue: '161px'}], position: 8119, duration: 0 },
                { id: "eid253", tween: [ "style", "${_Rectangle4}", "width", '257px', { fromValue: '52px'}], position: 8263, duration: 146 },
                { id: "eid262", tween: [ "style", "${_Rectangle4}", "top", '239px', { fromValue: '234px'}], position: 8263, duration: 146 },
                { id: "eid254", tween: [ "style", "${_Rectangle4}", "height", '42px', { fromValue: '54px'}], position: 8263, duration: 146 },
                { id: "eid87", tween: [ "style", "${_Rectangle}", "height", '42px', { fromValue: '95px'}], position: 2721, duration: 279 },
                { id: "eid199", tween: [ "style", "${_Rectangle2}", "left", '283px', { fromValue: '437px'}], position: 5272, duration: 146 },
                { id: "eid113", tween: [ "style", "${_factSelection-mailchimp-overlay}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutBounce" },
                { id: "eid105", tween: [ "style", "${_factSelection-mailchimp-overlay}", "display", 'block', { fromValue: 'none'}], position: 6850, duration: 0, easing: "easeOutBounce" },
                { id: "eid109", tween: [ "style", "${_factSelection-fact-google}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeOutBounce" },
                { id: "eid209", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '1'}], position: 5418, duration: 115, easing: "easeOutBounce" },
                { id: "eid229", tween: [ "style", "${_factSelection-mailchimp-overlay}", "opacity", '1', { fromValue: '0.000000'}], position: 6850, duration: 500, easing: "easeInQuad" },
                { id: "eid270", tween: [ "style", "${_factSelection-mailchimp-overlay}", "opacity", '0', { fromValue: '1'}], position: 8582, duration: 279 },
                { id: "eid88", tween: [ "style", "${_Rectangle}", "top", '103px', { fromValue: '65px'}], position: 2721, duration: 279 },
                { id: "eid15", tween: [ "motion", "${_factSelection-cursor}", [[466.5, 189.5, 0, 0],[418.02, 255.03, -47.14, -8.95, -138.2, -26.22],[245.06, 277.78, -54.97, -31.01, -58.1, -32.78],[222.17, 241.55, -0.67, -116.68, -0.32, -55.98],[193.28, 182.55, 0, 0]]], position: 1250, duration: 500, easing: "easeInOutSine" },
                { id: "eid19", tween: [ "motion", "${_factSelection-cursor}", [[193.28, 182.55, 0, 0],[251.02, 149.02, 0, 0]]], position: 1750, duration: 313, easing: "easeInOutSine" },
                { id: "eid143", tween: [ "motion", "${_factSelection-cursor}", [[251.02, 149.02, 0, 0],[242.92, 62.68, 65.46, 0.44, 118.61, 0.79],[359.21, 83.9, 27.83, 10.69, 103.26, 39.67],[415.8, 119.08, 91.55, 20, 39.66, 8.66],[498.68, 115.49, 45.35, 44.91, 26.22, 25.97],[505.5, 166.39, 0, 0]]], position: 3858, duration: 861, easing: "easeInOutSine" },
                { id: "eid147", tween: [ "motion", "${_factSelection-cursor}", [[505.5, 166.39, 0, 0],[464.38, 183.5, 0, 0]]], position: 4719, duration: 281, easing: "easeInQuad" },
                { id: "eid224", tween: [ "motion", "${_factSelection-cursor}", [[464.38, 183.5, 0, 0],[386.61, 261.5, -83.51, 29.27, -68.62, 24.05],[274.64, 257.58, -212.85, 22.23, -98.12, 10.25],[154.1, 283.95, 0, 0]]], position: 6514, duration: 814, easing: "easeInOutSine" },
                { id: "eid226", tween: [ "motion", "${_factSelection-cursor}", [[154.1, 283.95, 0, 0],[158.48, 245.5, 27.31, -30.04, 66.7, -73.36],[149.02, 227.4, -49.19, -23.77, -17.93, -8.66],[117.64, 225.2, 0, 0]]], position: 7328, duration: 519, easing: "easeInOutSine" }            ]
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
})(jQuery, AdobeEdge, "factSelection");
