import { h, Component, render } from 'preact';

import Slider from './slider';
import './slider.css';

import IMAGES from './images.json';

render(<Slider images={IMAGES} startImage={2} />, document.body)




