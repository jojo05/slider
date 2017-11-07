# Preact Photo Slider

A simple photo slider component, built using `preact-cli`.

[Demo](https://jojo05.github.com/slider/)


## Goals 

The goal would be to encourage preact-only components with public domain license
that anybody can use to get started quickly.

This component goals are:

* preact-only: do not use `preact-compat`
* no dependencies
* use as starting point to add more functionality


## Getting Started

Copy src files to your `preact-cli` project.

```
import { h, Component, render } from 'preact';

import Slider from './slider';
import './slider.css';

import IMAGES from './images.json';

render(<Slider images={IMAGES} startImage={2} />, document.body)
```

or use codesandbox:

https://codesandbox.io/s/v22rp2zy0

> the SVG icons for this project don't render properly in codesanbox. Help!


## License

Public domain


## Acknowledgments

* Public domain photos from Flickr

