import React, {
    useState,
    useEffect,
} from "react";

const RangeSlider =
    ({ classes, label, onChange, value, ...sliderProps }) => {
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
                <p>{label}</p>
                <h3>value: {sliderVal}</h3>
                <p>How much time do you have?</p>
                <input
                    type="range"
                    value={sliderVal}
                    {...sliderProps}
                    className={`slider ${classes}`}
                    id="myRange"
                    onChange={changeCallback}
                />
            </div>
        );
    }
    ;

export default RangeSlider