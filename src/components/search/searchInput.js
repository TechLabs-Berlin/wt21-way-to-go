import React from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

function Search({ panTo, placeholder, onChange }) {

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
        onChange(e.target.value)
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            onChange(address);
            panTo({ lat, lng });
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <div>
            <div class="form-group">
                <input
                    class="form-control"
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder={placeholder}
                />
            </div>
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
        </div>
    );
}

export default Search