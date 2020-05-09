import * as React from 'react'
import { Component } from 'react'
import MapGL, { Popup, NavigationControl, FullscreenControl, ScaleControl } from 'react-map-gl'

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
				latitude: 44.0165,
				longitude: 21.0059,
				zoom: 3,
				bearing: 0,
				pitch: 0
			},
			popupInfo: null
		}
	}

	_updateViewport = viewport => {
		this.setState({viewport})
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
					longitude={popupInfo.longitude}
					latitude={popupInfo.latitude}
					closeOnClick={false}
					onClose={() => this.setState({popupInfo: null})}
				>
				<CityInfo info={popupInfo} />
				</Popup>
			)
		)
	}

	render() {
		const { viewport } = this.state;

		return (
			<div className="map">
				<MapGL
					{...viewport}
					width="100%"
					height="100%"
					mapStyle="mapbox://styles/mapbox/dark-v9"
					onViewportChange={this._updateViewport}
					mapboxApiAccessToken={TOKEN}
				>
					<Pins data={CITIES} onClick={this._onClickMarker} />

					{this._renderPopup()}

					<div className="fullscreenControlStyle">
					<FullscreenControl />
					</div>
					<div className="navStyle">
					<NavigationControl />
					</div>
					<div className="scaleControlStyle">
					<ScaleControl />
					</div>
				</MapGL>
			</div>
		)
	}
}

export default Map