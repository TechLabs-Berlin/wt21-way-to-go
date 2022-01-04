import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapStyle from './mapStyle';

const containerStyle = {
  width: '1000px',
  height: '600px'
};

const center = {
  lat: 52.520008,
  lng: 13.404954
};

const options = {
  styles: mapStyle,
}

const App = function () {
    return <div>WayToGo

        <Search />
        <Map></Map>
    </div>
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}
      >
      </GoogleMap>
  ) : <></>
}

ReactDOM.render(
    <App />,
	document.querySelector('#root')
)