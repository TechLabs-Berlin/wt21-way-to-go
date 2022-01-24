import React, { useState } from "react";
import {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import { DirectionsService } from '@react-google-maps/api';
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

function SearchButton({ to, from, routeResponse, setRouteResponse }) {

    const [route, setRoute] = useState();

    const DirectionsServiceOption = route && {
        destination: route.destination,
        origin: route.startLocation,
        travelMode: "WALKING",
    };

    const directionsCallback = (response) => {
        console.log(response);

        if (response !== null) {
            if (response.status === "OK") {
                console.log("response: ", response);
                setRouteResponse(response)
            } else {
                console.log("response: ", response);
            }
        }
    };

    return (
        <div>
            {DirectionsServiceOption && !routeResponse && <DirectionsService
                options={DirectionsServiceOption}
                callback={directionsCallback}
            />}
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
                                //add here the 3rd point
                            );
                        })
                    )
                }}
            >
                Way To Go
            </button>
        </div>
    )
}

export default SearchButton