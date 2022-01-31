import React from 'react';
import Search from "../search/searchInput";
import "./mapLoadMenu.css"
import ArrowBack from "../../images/ArrowBack.png"


const MapLoadMenu = ({ from, to, setRouteResponse }) => {

    return (
        <div>
            <div className="searchFormMapContainer">
                <form className="searchMapForm">
                    <div class="form-row inputMapContainer">
                        <img
                            className="arrowBack"
                            src={ArrowBack}
                            alt="ArrowBack"
                            onClick={() => {
                                setRouteResponse(false)
                            }}
                        />
                        <div class="col-md-10 whiteBg">
                            <Search placeholder={from} disabled={true} />
                            <Search placeholder={to} disabled={true} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MapLoadMenu;