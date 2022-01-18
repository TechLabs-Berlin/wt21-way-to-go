import React, {
    useState,
    useEffect,
} from "react";

const RangeSlider =
    ({ onChange, value }) => {
        const [sliderVal, setSliderVal] = useState(0);

        useEffect(() => {
            setSliderVal(value);
        }, [value]);

        const changeCallback = e => {
            setSliderVal(e.target.value);
            onChange(e.target.value);
        };

        return (
            <div className="range-slider">
                <p>How much time do you have?</p>
                <p>value: {sliderVal}</p>
                <input
                    type="range"
                    value={sliderVal}
                    // className={`slider ${classes}`}
                    // id="myRange"
                    onChange={changeCallback}
                />
            </div>
        );
    }
    ;

export default RangeSlider