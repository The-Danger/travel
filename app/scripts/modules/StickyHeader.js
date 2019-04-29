"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var Waypoint = require('../../node_modules/waypoints/lib/noframework.waypoints');
var StickyHeader = /** @class */ (function () {
    function StickyHeader() {
        this._headerClassSelector = jquery_1.default('.site-header');
        this._headerTriggerElement = jquery_1.default('.large-hero__title');
        this._pageSections = jquery_1.default('.page-section');
        this._headerLinks = jquery_1.default('.primary-nav a');
        this._lazyImages = jquery_1.default('lazyload');
        this.CreateHeaderWaypoint();
        this.createPageSectionWayPoints();
        this.RefreshWaypoints();
    }
    StickyHeader.prototype.RefreshWaypoints = function () {
        this._lazyImages.on('load', function () {
            Waypoint.refreshAll();
        });
    };
    StickyHeader.prototype.CreateHeaderWaypoint = function () {
        var that = this;
        var _waypoint = new Waypoint({
            // waypoint is expecting native dom element, but, in the following, _headerTriggerElement is a jquery selector. To get a native dom element from a jquery selector,
            // select the first item, i.e., "that._headerTriggerElement[0]", which is native dom element
            element: that._headerTriggerElement[0],
            handler: function (direction) {
                if (direction == "down") {
                    that._headerClassSelector.addClass('site-header--dark');
                }
                else {
                    that._headerClassSelector.removeClass('site-header--dark');
                }
            }
        });
    };
    StickyHeader.prototype.createPageSectionWayPoints = function () {
        var that = this;
        this._pageSections.each(function () {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        that._headerLinks.removeClass('is-current-link');
                        jquery_1.default(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: "18%"
            });
            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        that._headerLinks.removeClass('is-current-link');
                        jquery_1.default(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: "-40%"
            });
        });
    };
    return StickyHeader;
}());
exports.StickyHeader = StickyHeader;
