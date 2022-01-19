import React, {
    useState,
    useMemo,
    useEffect,
} from "react";
import "./search.css";

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

        const sliderProps = useMemo(
            () => ({
                min: 0,
                max: 120,
                step: 5,
            }),
            []
        );

        return (
            <div class="rangeSliderContainer">
                <input
                    class="rangeSlider"
                    type="range"
                    value={sliderVal}
                    {...sliderProps}
                    // className={`slider ${classes}`}
                    // id="myRange"
                    onChange={changeCallback}
                // style={width: 200}
                />
            </div>
        );
    }
    ;

export default RangeSlider