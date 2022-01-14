import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Search from "./components/search/searchInput";
import CurrentLocation from "./components/currentLocation/currentLocation";
import Map from "./components/map/map";
import SearchButton from "./components/search/searchButton";
import './components/search/search.css'

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

  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  return (
    <div>
      <h1>WayToGo</h1>

      <CurrentLocation panTo={panTo} />
      <div className="searchInputContainer">
        {isLoaded && <Search onChange={setFrom} panTo={panTo.bind(this)} placeholder={'From'} />}
        {isLoaded && <Search onChange={setTo} panTo={panTo.bind(this)} placeholder={'To'} />}
      </div>
      {isLoaded && <SearchButton to={to} from={from} />}
      {isLoaded && <Map onMapLoad={onMapLoad}></Map>}
    </div>
  );
};

export default App
