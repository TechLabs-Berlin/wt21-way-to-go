import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Search from "./searchInput";
import RangeSlider from "./timeRangeSlider";
import SearchButton from "./searchButton";
import Categories from "./categories";
import CategoryA from "./../../images/CategoryA.png"
import CategoryB from "./../../images/CategoryB.png"
import CategoryC from "./../../images/CategoryC.png"
import CategoryD from "./../../images/CategoryD.png"
import CategoryRandom from "./../../images/CategoryRandom.png"
import "./searchFormContainer.css";

const libraries = ["places"];

function SearchFormContainer({ routeResponse, setRouteResponse, setTo, setFrom, from, to }) {

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const mapRef = React.useRef();

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(16);
    }, []);

    const [time, setTime] = useState("");
    const [selectedCategory, setSelectedCategory] = useState();

    return (
        <div>
            <div className="searchFormContainer">
                <form className="searchForm">
                    <div class="form-row inputContainer">
                        <div class="col-md-5 whiteBg">
                            {isLoaded && <Search onChange={setFrom} panTo={panTo.bind(this)} placeholder={'FROM...'} />}
                            {/* <CurrentLocation panTo={panTo} /> */}
                        </div>
                        <div class="col-md-5 whiteBg">
                            {isLoaded && <Search onChange={setTo} panTo={panTo.bind(this)} placeholder={'TO...'} />}
                        </div>
                    </div>

                    <p>Tell us about your mood today...</p>
                    <div className="categoryImages">
                        <Categories className={'Marienkirche'} src={CategoryA} setSelectedCategory={setSelectedCategory} />
                        <Categories className={"L'Osteria"} src={CategoryB} setSelectedCategory={setSelectedCategory} />
                        <Categories className={'Viktoriapark'} src={CategoryC} setSelectedCategory={setSelectedCategory} />
                        <Categories className={'Pergamonmuseum'} src={CategoryD} setSelectedCategory={setSelectedCategory} />
                        <Categories className={'categoryE'} src={CategoryRandom} setSelectedCategory={setSelectedCategory} />
                    </div>
                    <div>
                        <p class="whiteBg">How much time do you have? {time}' min</p>
                        <div class="form-group slideRanger">
                            <RangeSlider onChange={setTime} />
                        </div>
                    </div>

                    <div class="searchDirectionButton">
                        {isLoaded && <SearchButton
                            to={to}
                            from={from}
                            routeResponse={routeResponse}
                            setRouteResponse={setRouteResponse}
                            selectedCategory={selectedCategory}
                        />}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchFormContainer;