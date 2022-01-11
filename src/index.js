import React from "react";
import ReactDOM from "react-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import mapStyle from "./mapStyle";
import Search from "./components/searchDestination/searchDestination";

const libraries = ["places"];
const containerStyle = {
  width: "1000px",
  height: "600px",
};

const center = {
  lat: 52.520008,
  lng: 13.404954,
};

const options = {
  styles: mapStyle,
};

const App = function () {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  return (
    <div>
      <h1>WayToGo</h1>

      <Locate panTo={panTo} />
      {isLoaded && <Search panTo={panTo.bind(this)} />}
      {isLoaded && <Map onMapLoad={onMapLoad}></Map>}
    </div>
  );
};

function Map({ onMapLoad }) {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      options={options}
      onLoad={onMapLoad}
    />
  );
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
      Current Location
    </button>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
