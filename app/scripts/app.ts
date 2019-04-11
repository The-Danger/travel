
import $ from 'jquery';
import {MobileMenu} from './modules/MobileMenu';
import { RevealOnScroll } from './modules/RevealOnScroll'; 

const mobileMenu = new MobileMenu();
const revealOnScrollFeatureItem = new RevealOnScroll($(".feature-item"), '85%');
const revealOnScrollTestimonial = new RevealOnScroll($(".testimonial"), '60%');


