import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapStyle from './mapStyle';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  }  from "use-places-autocomplete";

const libraries = ["places"];
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

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

    return <div>WayToGo

        <Locate panTo={panTo} />
        { isLoaded && <Search panTo={panTo.bind(this)} />}
        { isLoaded && <Map onMapLoad={onMapLoad} ></Map> }
    </div>
};

function Map({onMapLoad}) {

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={options}
      onLoad={onMapLoad}
    />
  )
}

function Locate({ panTo }) {
  return (
    <button
    onClick={() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
        },
        () => null
      );
    }}
    >
    </button>
  );
}

function Search({panTo}) {
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

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

  try {
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    panTo({ lat, lng });
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