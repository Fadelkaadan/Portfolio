import * as React from 'react'
import { Component } from 'react'
import MapGL, { Popup } from 'react-map-gl'

import Pins from './Pins'
import CityInfo from './CityInfo'

import 'mapbox-gl/dist/mapbox-gl.css'
import './style/Map.css'

import CITIES from './data/cities.json'
const TOKEN = 'pk.eyJ1IjoiZmFkZWxldXMiLCJhIjoiY2s5c2diNTJmMDFuczNlcDg0Z2h6NXJ4biJ9.qiTEmy01tD357-vgOxZxxQ'

class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				latitude: 42.7339,
				longitude: 25.4858,
				scrollZoom: false,
				zoom: 3,
				dragPan: false,
				touchAction: "pan-y",
				// bearing: 0,
				pitch: 10
			},
			popupInfo: null
		}
	}

	_onClickMarker = city => {
		this.setState({popupInfo: city})
	}

	_renderPopup() {
		const {popupInfo} = this.state

		return (
			popupInfo && (
				<Popup
					tipSize={5}
					anchor="top"
					offset="10px 10px"
					longitude={popupInfo.longitude}
					latitude={popupInfo.latitude}
					closeOnClick={true}
					onClose={() => this.setState({popupInfo: null})}>
					<CityInfo info={popupInfo}/>
				</Popup>
			)
		)
	}

	componentDidMount() {
		if (window.innerWidth <= 500) {
			this.setState({ viewport: {
				latitude: 44.0165,
				longitude: 21.0059,
				zoom: 2.6,
				bearing: 0,
				pitch: 0
			}})
		}
	}

	render() {
		const { viewport } = this.state;

		return (
			<div className="map">
			<div className="overlay"></div>
				<MapGL
					{...viewport}
					width="100%"
					height="100%"
					mapStyle="mapbox://styles/mapbox/dark-v9"
					mapboxApiAccessToken={TOKEN}
				>
					<Pins data={CITIES} onClick={this._onClickMarker} />

					{this._renderPopup()}
				</MapGL>
			</div>
		)
	}
}

export default Map