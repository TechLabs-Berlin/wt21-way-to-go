import React from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import axios from "axios";

const doDirectionRequest = (startLocation, destination) => {
    const requestBody = {
        startLocation: startLocation,
        destination: destination,
    }

    axios
        .post("http://localhost:5000/direction",
            requestBody
        )
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function SearchButton() {
    return (
        <button
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        getGeocode({ address: "" }).then((response) =>
                            getLatLng(response[0]).then((destinationCoordinates) => {
                                doDirectionRequest({
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude,
                                }, destinationCoordinates)
                            })
                        );
                    },
                    () => null
                );
            }}
        >
            Show Direction
        </button>
    )
}

export default SearchButton


