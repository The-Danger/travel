"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
//import {Waypoint} from '../../node_modules/waypoints/lib/noframework.waypoints';
var Waypoint = require('../../node_modules/waypoints/lib/noframework.waypoints');
// note: (1) added node types via npm i @types/node and (2) added require() in this file and (3) added module.exports = Waypoint in noframework.waypoints.js 
// to deal with Systemjs 'Waypoint is not a constructor' error
var RevealOnScroll = /** @class */ (function () {
    function RevealOnScroll(domSelectorToRevealOnScroll, waypointOffsetPercentage) {
        this._domSelectorToRevealOnScroll = domSelectorToRevealOnScroll;
        this._waypointOffsetPercentage = waypointOffsetPercentage;
        //this.revealableItems = $('.feature-item');
        this.revealableItems = this._domSelectorToRevealOnScroll;
        this.HideItems();
        this.CreateWaypoints();
    }
    RevealOnScroll.prototype.HideItems = function () {
        this.revealableItems.addClass('revealable-item');
    };
    // CreateWaypoints() {
    //     this.revealableItems.each(function () {
    //         var curritem = this;
    //         new Waypoint({
    //             element: curritem,
    //             handler: function () {
    //                 $(curritem).addClass('revealable-item--is-visible');
    //             },
    //             offset: "85%"
    //         });
    //     });
    // }
    RevealOnScroll.prototype.CreateWaypoints = function () {
        var that = this;
        this.revealableItems.each(function () {
            var curritem = this;
            new Waypoint({
                element: curritem,
                handler: function () {
                    jquery_1.default(curritem).addClass('revealable-item--is-visible');
                },
                offset: that._waypointOffsetPercentage
            });
        });
    };
    return RevealOnScroll;
}());
exports.RevealOnScroll = RevealOnScroll;
