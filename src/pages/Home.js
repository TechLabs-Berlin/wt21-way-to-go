import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import CategoryCoffee from "./../images/CategoryCoffee.png"
import Search from "../components/search/searchInput";
import Map from "../components/map/map"
import RangeSlider from "../components/search/timeRangeSlider";
import SearchButton from "../components/search/searchButton";
import "./Home.css";

const libraries = ["places"];

function Home() {
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
  const [routeResponse, setRouteResponse] = useState();

  function selectCategory(element) {
    element.onclick = function () {
      var selected = document.getElementsByClassName('selected')[0];
      if (typeof selected !== 'undefined') { selected.classList.remove('selected'); }
      if (element !== selected) { element.classList.add('selected'); }
    }
  }
  Array.from(document.getElementsByClassName('categoryCoffee')).forEach(selectCategory);

  return (
    <div>
      <div className="searchFormContainer">
        <form className="searchForm">
          <div class="form-row inputContainer">
            <div class="col-md-5 whiteBg">
              {isLoaded && <Search className="TiconFrom" onChange={setFrom} panTo={panTo.bind(this)} placeholder={'FROM...'} />}
              {/* <CurrentLocation panTo={panTo} /> */}
            </div>
            <div class="col-md-5 whiteBg">
              {isLoaded && <Search onChange={setTo} panTo={panTo.bind(this)} placeholder={'TO...'} />}
            </div>
          </div>

          Tell us about your mood today...
          <div className="categoryImages">
            <div className="categoryA">
              <figure><img
                src={CategoryCoffee}
                title="CategoryA"
                className="categoryCoffee"
                alt="categoryCoffee"
                onClick={() => {
                  console.log('bananas')
                }}
              /></figure>
            </div>
            <div className="categoryB">
              <figure><img
                src={CategoryCoffee}
                title="CategoryB"
                className="categoryCoffee"
                alt="categoryRestaurant"
                onClick={() => {
                  console.log('jogurt')
                }}
              /></figure>
            </div>
            <div className="categoryC">
              <figure><img
                src={CategoryCoffee}
                title="CategoryC"
                className="categoryCoffee"
                alt="categoryCoffee" /></figure>
            </div>
            <div className="categoryD">
              <figure><img
                src={CategoryCoffee}
                title="CategoryD"
                className="categoryCoffee"
                alt="categoryCoffee" /></figure>
            </div>
            <div className="categoryE">
              <figure><img
                src={CategoryCoffee}
                title="CategoryE"
                className="categoryCoffee"
                alt="categoryCoffee" /></figure>
            </div>
          </div>
          <p class="whiteBg">How much time do you have? {time}' min</p>
          <div class="form-group">
            <RangeSlider onChange={setTime} />
          </div>

          <div class="searchDirectionButton">
            {isLoaded && <SearchButton to={to} from={from} routeResponse={routeResponse} setRouteResponse={setRouteResponse} />}
          </div>

        </form>
      </div >
      {isLoaded && <div>
        {/* <Map onMapLoad={onMapLoad} routeResponse={routeResponse}></Map> */}
      </div>
      }
    </div >
  );
}

export default Home;