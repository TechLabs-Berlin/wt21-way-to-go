import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Search from "./components/search/searchInput";
import CurrentLocation from "./components/currentLocation/currentLocation";
import Map from "./components/map/map";
import SearchButton from "./components/search/searchButton";

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
      {isLoaded && <Search panTo={panTo.bind(this)} />}
      {isLoaded && <SearchButton />}
      {isLoaded && <Map onMapLoad={onMapLoad}></Map>}
    </div>
  );
};

export default App
