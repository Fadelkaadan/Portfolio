import React, { Component } from 'react'
import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl';

import './MyMap.css'

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZmFkZWxldXMiLCJhIjoiY2s5c2diNTJmMDFuczNlcDg0Z2h6NXJ4biJ9.qiTEmy01tD357-vgOxZxxQ';

const initialViewState = {
    longitude: 9.17702,
    latitude: 48.78232,
    zoom: 13,
    pitch: 0,
    bearing: 0
  };

  // Data to be used by the LineLayer

class MyMap extends Component {
    render() {
        return (
            <DeckGL className="map"
                initialViewState={initialViewState}
                controller={false}>
                <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
            </DeckGL>
        );
      }
}

export default MyMap