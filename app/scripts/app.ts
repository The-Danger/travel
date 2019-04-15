
import $ from 'jquery';

import {MobileMenu} from './modules/MobileMenu';
import { RevealOnScroll } from './modules/RevealOnScroll'; 
import { StickyHeader } from './modules/StickyHeader';



const mobileMenu = new MobileMenu();
const revealOnScrollFeatureItem = new RevealOnScroll($(".feature-item"), '85%');
const revealOnScrollTestimonial = new RevealOnScroll($(".testimonial"), '60%');
const stickyHeader = new StickyHeader();



