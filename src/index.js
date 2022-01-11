import React from "react";
import ReactDOM from "react-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import Search from "./components/searchDestination/searchDestination";
import CurrentLocation from "./components/currentLocation/currentLocation";
import Map from "./components/map/map";

const libraries = ["places"];

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

      <CurrentLocation panTo={panTo} />
      {isLoaded && <Search panTo={panTo.bind(this)} />}
      {isLoaded && <Map onMapLoad={onMapLoad}></Map>}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
