"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var MobileMenu_1 = require("./modules/MobileMenu");
var RevealOnScroll_1 = require("./modules/RevealOnScroll");
var StickyHeader_1 = require("./modules/StickyHeader");
var Modal_1 = require("./modules/Modal");
var mobileMenu = new MobileMenu_1.MobileMenu();
var revealOnScrollFeatureItem = new RevealOnScroll_1.RevealOnScroll(jquery_1.default(".feature-item"), '85%');
var revealOnScrollTestimonial = new RevealOnScroll_1.RevealOnScroll(jquery_1.default(".testimonial"), '60%');
var stickyHeader = new StickyHeader_1.StickyHeader();
var modal = new Modal_1.Modal();
