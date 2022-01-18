import React, {
    useState,
    useMemo,
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

        const sliderProps = useMemo(
            () => ({
                min: 0,
                max: 120,
                step: 5,
            }),
            []
        );

        return (
            <div className="range-slider">
                <input
                    type="range"
                    value={sliderVal}
                    {...sliderProps}
                    // className={`slider ${classes}`}
                    // id="myRange"
                    onChange={changeCallback}
                />
            </div>
        );
    }
    ;

export default RangeSlider