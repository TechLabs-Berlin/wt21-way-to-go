import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import SearchFormContainer from "../components/search/searchFormContainer";
import Map from "../components/map/map";
import HowItWorks from "./../components/howitworks/HowItWorks";
import CardsHome from "../components/cardsHome/CardsHome";
import BackgroundImage from "../images/landingBackground.jpeg"
import "./Home.css"
import MapLoadMenu from "../components/map/mapLoadMenu";

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

  const [routeResponse, setRouteResponse] = useState();
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      {!routeResponse && (
        <div>
          <SearchFormContainer
            routeResponse={routeResponse}
            setRouteResponse={setRouteResponse}
          />
          <CardsHome expand="md" />
          <HowItWorks expand="md" />
        </div>
      )}
>>>>>>> main
=======
>>>>>>> main
      {!routeResponse && <div>
        <div className="homeText">
          <p>WELCOME</p>
          <p>TO</p>
          <p>BERLIN</p>
        </div>
        <SearchFormContainer
          routeResponse={routeResponse}
          setRouteResponse={setRouteResponse}
          setFrom={setFrom}
          setTo={setTo}
          from={from}
          to={to}
        />
        <img className="backgroundHomeImage" src={BackgroundImage} alt="berlinImage" />
        <CardsHome expand="md" />
        <HowItWorks expand="md" />
      </div>
      }

      {isLoaded && routeResponse && (<div>
        <MapLoadMenu from={from} to={to} setRouteResponse={setRouteResponse} />
        <Map onMapLoad={onMapLoad} routeResponse={routeResponse} />
      </div>
      )}
    </div>
  );
}

export default Home;
