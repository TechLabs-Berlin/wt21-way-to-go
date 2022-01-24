import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Search from "../components/search/searchInput";
// import Map from "../components/map/map"
import RangeSlider from "../components/search/timeRangeSlider";
import SearchButton from "../components/search/searchButton";
import Categories from "../components/search/categories";
import CategoryA from "./../images/CategoryA.png"
import CategoryB from "./../images/CategoryB.png"
import CategoryC from "./../images/CategoryC.png"
import CategoryD from "./../images/CategoryD.png"
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
  const [selectedCategory, setSelectedCategory] = useState();

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
            <Categories className={'Berliner_Restaurant'} src={CategoryA} setSelectedCategory={setSelectedCategory} />
            <Categories className={'Eiscafe'} src={CategoryB} setSelectedCategory={setSelectedCategory} />
            <Categories className={'categoryC'} src={CategoryC} setSelectedCategory={setSelectedCategory} />
            <Categories className={'categoryD'} src={CategoryD} setSelectedCategory={setSelectedCategory} />
            <Categories className={'categoryE'} src={CategoryA} setSelectedCategory={setSelectedCategory} />
          </div>
          <p class="whiteBg">How much time do you have? {time}' min</p>
          <div class="form-group">
            <RangeSlider onChange={setTime} />
          </div>

          <div class="searchDirectionButton">
            {isLoaded && <SearchButton
              to={to}
              from={from}
              routeResponse={routeResponse}
              setRouteResponse={setRouteResponse}
              selectedCategory={selectedCategory}
            />}
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