import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapStyle from './mapStyle';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  }  from "use-places-autocomplete";

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

  const mapRef = React.useRef();

  const panTo = React.useCallback(({ lat, lng }) => {
  }, []);

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

function Search() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 52.520008, lng: () => 13.404954 },
      radius: 50 * 1000,
    },
  });

  const handleSelect = async (address) => {
  try {
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
  } catch (error) {
    console.log("Error: ", error);
  }
};

  return (
    <div>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter an Address"
      />
      <div>
        <div>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <input onClick={() => handleSelect(description)} key={id} value={description} />
            ))}
        </div>
      </div>
    </div>
);
}

ReactDOM.render(
    <App />,
	document.querySelector('#root')
)