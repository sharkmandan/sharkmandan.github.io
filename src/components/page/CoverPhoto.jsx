import React, {Component} from 'react'

class CoverPhoto extends Component {
	render() {
		let url = null;
		let bg = null;
		let photo = this.props.photo;
		let ext = this.props.ext || '.jpg';
		if(!photo) { photo = null; }

		if(photo) {
			url = `build/img/${photo}${ext}`;
		}
		else {
			bg = this.props.bg || '#666';
		}
		
		var style = {};
		if(url) {
			style.backgroundImage = `url('${url}')`;
		}
		if(bg) {
			style.backgroundColor = bg;
		}
		
		return (
			<div className='cover-photo-bg'>
				<div className={'cover-photo ' + (style.backgroundImage ? 'blur' : '')} style={style}>
				</div>
			</div>
		);
	}
}

export default CoverPhoto;