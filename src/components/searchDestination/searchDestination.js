import React from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import axios from "axios";

function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 52.520008, lng: () => 13.404954 },
            radius: 50 * 1000,
        },
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
        } catch (error) {
            console.log("Error: ", error);
        }
    };

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

    return (
        <div>
            <input
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Destination"
            />
            <div>
                <div>
                    {status === "OK" &&
                        data.map(({ id, description }) => (
                            <input
                                onClick={() => handleSelect(description)}
                                key={Math.random()}
                                defaultValue={description}
                            />
                        ))}
                </div>
            </div>

            <button
                onClick={() => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            getGeocode({ address: value }).then((response) =>
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
        </div>
    );
}

export default Search

