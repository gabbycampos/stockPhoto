import React, { Component } from 'react'
import './main.css'
import Photo from '../Photo';

// import desk from "../../images/desk.jpg"
// import sitting from "../../images/sitting.jpg"

export default class PhotoGallery extends Component {
	constructor() {
		super()

		this.state = {
			images: []
		}
	}

	componentDidMount() {
		fetch('./data.json')
			.then(res => res.json())
			.then(data => {
				this.setState({
					images: data
				})
			})
	}

	render() {
		return (
			<div>
				<div className="container-photo">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12 text-center">
								<p>Photos</p>
								<p>fashion | office work | food</p>
							</div>
						</div>
						<div className="row">
							<div className="card-columns">
								{this.state.images.map(photo => (
									<Photo photo={photo} key={photo.id} style={{"width": "100%"}} />
								))}
							</div>
{/* 	 						<div className="column">
										<img src={back} alt="nike back" style={{"width": "100%"}} />
										<img src={box} alt="box" style={{"width": "100%"}} />
								</div>
								<div className="column">
										<img src={jacket} alt="nike jacket" style={{"width": "100%"}} />
										<img src={wood} alt="wood" style={{"width": "100%"}} />
								</div>
								<div className="column">
										<img src={office} alt="office view" style={{"width": "100%"}} />
										<img src={zipper} alt="nike zipper" style={{"width": "100%"}} />
								</div>
								<div className="column">
										<img src={pringles} alt="pringles" style={{"width": "100%"}} />
										<img src="" alt="standing desk" style={{"width": "100%"}} />
										<img src="" alt="nike sitting" style={{"width": "100%"}} />
								</div>  */}
						</div> 
					</div>
				</div>
			</div>
		)
	}
}
 