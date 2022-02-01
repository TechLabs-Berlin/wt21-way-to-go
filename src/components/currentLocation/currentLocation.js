import React from "react";
import CurrentLocationIcon from "./CurrentLocationIcon.png";
import "./currentLocation.css";

function CurrentLocation({ panTo }) {
    return (
        <img
            src={CurrentLocationIcon}
            className="CurrentLocationIcon"
            alt="CurrentLocationIcon"
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
        />
    );
}

export default CurrentLocation;
