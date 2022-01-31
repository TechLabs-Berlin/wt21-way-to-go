import React from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import mapStyle from "./mapStyle";

const containerStyle = {
    width: "100%",
    height: "600px",
};

const center = {
    lat: 52.520008,
    lng: 13.404954,
};

const options = {
    styles: mapStyle,
};

function Map({ onMapLoad, routeResponse }) {
    console.log(routeResponse)
    return (
        <GoogleMap
            className="map"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            options={options}
            onLoad={onMapLoad}
        >
            {routeResponse && (
                <DirectionsRenderer
                    options={{
                        directions: routeResponse,
                    }}
                />
            )}
        </GoogleMap>
    );
}

export default Map