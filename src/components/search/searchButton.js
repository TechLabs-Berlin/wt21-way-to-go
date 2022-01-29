import React, { useState } from "react";
import {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import { DirectionsService } from '@react-google-maps/api';
import axios from "axios";

const doDirectionRequest = (startLocation, destination, setRoute, selectedCategory) => {
    console.log(startLocation)
    const requestBody = {
        startLocation: startLocation,
        destination: destination,
    }

    axios
        .get("http://127.0.0.1:5000/routes/?route_id=" + selectedCategory)
        .then(function (response) {
            setRoute({
                startLocation: startLocation,
                destination: destination,
                waypts: [{
                    location: {
                        lat: parseFloat(response.data[0].lat),
                        lng: parseFloat(response.data[0].lon),
                    },
                    stopover: true,
                }]
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}


function SearchButton({ to, from, routeResponse, setRouteResponse, selectedCategory }) {

    const [route, setRoute] = useState();
    console.log(route)

    const DirectionsServiceOption = route && {
        destination: route.destination,
        origin: route.startLocation,
        waypoints: route.waypts,
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
                                    doDirectionRequest(startLocation, destinationCoordinates, setRoute, selectedCategory)
                                })
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