import React from "react";
import {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import axios from "axios";

const doDirectionRequest = (startLocation, destination, setRoute) => {
    const requestBody = {
        startLocation: startLocation,
        destination: destination,
    }

    axios
        .post("http://localhost:5000/direction",
            requestBody
        )
        .then(function (response) {
            setRoute(response.data)
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function SearchButton({ to, from, setRoute }) {
    return (
        <button type="button" class="btn btn-outline-danger"
            onClick={() => {
                console.log("from: " + from)
                console.log("to: " + to)
                getGeocode({ address: from }).then((response) =>
                    getLatLng(response[0]).then((startLocation) => {
                        getGeocode({ address: to }).then((response) =>
                            getLatLng(response[0]).then((destinationCoordinates) => {
                                doDirectionRequest(startLocation, destinationCoordinates, setRoute)
                            })
                        );
                    })
                )
            }}
        >
            Way To Go
        </button>
    )
}

export default SearchButton