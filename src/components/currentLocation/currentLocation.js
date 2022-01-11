import React from "react";

function CurrentLocation({ panTo }) {
    return (
        <button
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
        >
            Current Location
        </button>
    );
}

export default CurrentLocation;
