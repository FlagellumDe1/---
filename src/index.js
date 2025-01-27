import {containerSwitch} from "./js/containerSwitch";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Swiper from 'swiper';
import 'swiper/css';
import {comments} from "./js/comments";

containerSwitch();
Fancybox.bind("[data-fancybox]", {});
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',


    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: 'true',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
comments();
