import React from 'react';
import Search from "../search/searchInput";
import "./mapLoadMenu.css"


const MapLoadMenu = ({ from, to }) => {

    return (
        <div>
            <div className="searchFormMapContainer">
                <form className="searchMapForm">
                    <div class="form-row inputMapContainer">
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