import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Search from "./components/search/searchInput";
// import CurrentLocation from "./components/currentLocation/currentLocation";
// import Map from "./components/map/map";
import RangeSlider from "./components/search/timeRangeSlider";
import SearchButton from "./components/search/searchButton";
import "./app.css";

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
  const [time, setTime] = useState("");

  return (
    <div>
      <h1>WayToGo</h1>
      <div className="searchFormContainer">
        <form className="searchForm">
          {/* <CurrentLocation panTo={panTo} /> */}
          <div class="form-row inputContainer">
            <div class="col-md-5 whiteBg">
              {isLoaded && <Search onChange={setFrom} panTo={panTo.bind(this)} placeholder={'From'} />}
            </div>
            <div class="col-md-5 whiteBg">
              {isLoaded && <Search onChange={setTo} panTo={panTo.bind(this)} placeholder={'To'} />}
            </div>
          </div>
          <RangeSlider onChange={setTime} />
          {isLoaded && <SearchButton to={to} from={from} />}
        </form>
      </div>
      {/* {isLoaded && <Map onMapLoad={onMapLoad}></Map>} */}
    </div >
  );
};

export default App