import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import SearchFormContainer from "../components/search/searchFormContainer";
import Map from "../components/map/map";
import HowItWorks from "./../components/howitworks/HowItWorks";

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

  return (
    <div>
      {!routeResponse && (
        <div>
          <SearchFormContainer
            routeResponse={routeResponse}
            setRouteResponse={setRouteResponse}
          />
          <HowItWorks expand="md" />
        </div>
      )}

      {isLoaded && routeResponse && (
        <Map onMapLoad={onMapLoad} routeResponse={routeResponse} />
      )}
    </div>
  );
}

export default Home;
