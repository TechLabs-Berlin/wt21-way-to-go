import React from 'react';
import Search from "../search/searchInput";


const MapLoadMenu = ({ from, to }) => {

    return (
        <div>
            <div className="searchFormContainer">
                <form className="searchForm">
                    <div class="form-row inputContainer">
                        <div class="col-md-5 whiteBg">
                            <Search placeholder={from} disabled={true} />
                        </div>
                        <div class="col-md-5 whiteBg">
                            <Search placeholder={to} disabled={true} />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default MapLoadMenu;