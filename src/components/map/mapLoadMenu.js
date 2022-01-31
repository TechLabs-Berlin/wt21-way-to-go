import React from 'react';
import Search from "../search/searchInput";


const MapLoadMenu = () => {

    return (
        <div>
            <div className="searchFormContainer">
                <form className="searchForm">
                    <div class="form-row inputContainer">
                        <div class="col-md-5 whiteBg">
                            <Search />
                        </div>
                        <div class="col-md-5 whiteBg">
                            <Search />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default MapLoadMenu;