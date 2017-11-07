import { h, Component } from 'preact';
import Arrow from  './arrow';


export default class Slider extends Component {
	constructor(props) {
		super(props);
		const start = this.props.startImage ? this.props.startImage : 0;
		console.log('start:', start);
		this.state = { currentImage: start };
	}

	onNext = () => {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	onPrev = () => {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}

	onClickImage = () => {
		if (this.state.currentImage === this.props.images.length - 1) 
			return;
		this.onNext();
	}

	renderArrowPrev = () => {
		if (this.state.currentImage === 0) 
			return null;
		return ( <Arrow icon="arrowLeft" onClick={this.onPrev} type="button" class="slider_arrow slider_arrow_left" /> ); 
	}
	renderArrowNext = () => {
		if (this.state.currentImage === (this.props.images.length - 1)) 
			return null;
		return ( <Arrow icon="arrowRight" onClick={this.onNext} type="button" class="slider_arrow slider_arrow_right" /> ); 
	}

	render({images, ...props}) {
		if (!images) 
			return (<span />);

		const im = images[this.state.currentImage];

		return (
			<div class="slider" {...props}>
				<img src={im.thumbnail} class="slider_image" onClick={(e) => this.onClickImage(this.state.currentImage, e)} /> 
				{this.renderArrowPrev()}
				{this.renderArrowNext()}
			</div>
		)
	}
}


