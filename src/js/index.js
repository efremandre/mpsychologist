import * as testWebP from './modules/function.js';
import { _questions } from './modules/_questions.js';
import { _burger } from './modules/_burger.js';
import {_headerAnimation} from "./modules/_header-animation.js";
import {_feedbackSlider} from "./modules/_feedback-slider.js";
import {_feedbackButton} from "./modules/_feedback-button.js";

testWebP.isWebp();
_headerAnimation();
_questions();
_feedbackSlider();
_feedbackButton();
_burger();
