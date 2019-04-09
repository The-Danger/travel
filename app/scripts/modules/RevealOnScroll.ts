import $ from 'jquery';
//import {Waypoint} from '../../node_modules/waypoints/lib/noframework.waypoints';
var Waypoint = require('../../node_modules/waypoints/lib/noframework.waypoints');

// note: (1) added node types via npm i @types/node and (2) added require() in this file and (3) added module.exports = Waypoint in noframework.waypoints.js 
// to deal with Systemjs 'Waypoint is not a constructor' error


export class RevealOnScroll {

    revealableItems;

    constructor() {
        this.revealableItems = $('.feature-item');
        this.HideItems();
        this.CreateWaypoints();
    }

    HideItems() {
        this.revealableItems.addClass('revealable-item');

    }

    CreateWaypoints() {
        this.revealableItems.each(function () {
            var curritem = this;
            new Waypoint({
                element: curritem,
                handler: function () {
                    $(curritem).addClass('revealable-item--is-visible');
                }
            });
        });
    }


}
