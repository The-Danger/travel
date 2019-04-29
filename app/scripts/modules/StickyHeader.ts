import $ from 'jquery';
var Waypoint = require('../../node_modules/waypoints/lib/noframework.waypoints');



export class StickyHeader {
    

    private _headerClassSelector;
    private _headerTriggerElement;
  
    private _pageSections: JQuery<HTMLElement>; 
    private _headerLinks: JQuery<HTMLElement>;
    private _lazyImages: JQuery<HTMLElement>;
   

    constructor() {

        this._headerClassSelector = $('.site-header');
        this._headerTriggerElement= $('.large-hero__title');

        this._pageSections = $('.page-section');

        this._headerLinks = $('.primary-nav a')

        this._lazyImages = $('.lazyload');
       

        this.CreateHeaderWaypoint ();

        this.createPageSectionWayPoints ();

        this.RefreshWaypoints();

     
       
    }

    RefreshWaypoints() {
        this._lazyImages.on('load', function() {
            Waypoint.refreshAll();
        })
    }

    CreateHeaderWaypoint () {
        let that = this;
        
        let _waypoint = new Waypoint({
            // waypoint is expecting native dom element, but, in the following, _headerTriggerElement is a jquery selector. To get a native dom element from a jquery selector,
            // select the first item, i.e., "that._headerTriggerElement[0]", which is native dom element
            element: that._headerTriggerElement[0],
            handler: function (direction) {
                if (direction == "down") {
                    that._headerClassSelector.addClass('site-header--dark')
                }
                else {
                    that._headerClassSelector.removeClass('site-header--dark')
                }
            }
        });
    }

    createPageSectionWayPoints () {
        let that = this;
        this._pageSections.each(function() {
            let currentPageSection = this;
            
            
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "down") {
                        let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        that._headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');  
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "up") {
                        let matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
                        that._headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');  
                    }
                },
                offset: "-40%"
            });
        });
    }


}