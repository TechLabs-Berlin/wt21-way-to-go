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
            updateValueBuble();
        }, [value]);

        const changeCallback = e => {
            setSliderVal(e.target.value);
            onChange(e.target.value);
            updateValueBuble();
        };

        const updateValueBuble = () => {
            const range = document.getElementById('range')
            const rangeV = document.getElementById('rangeV')
            const newValue = Number((range.value - range.min) * 100 / (range.max - range.min))
            const newPosition = 10 - (newValue * 0.2);
            rangeV.innerHTML = `<span>${range.value}</span>`;
            rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
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
                <div class="range-wrap">
                    <div class="range-value" id="rangeV" />
                    <input
                        id="range"
                        class="rangeSlider"
                        type="range"
                        value={sliderVal}
                        {...sliderProps}
                        // className={`slider ${classes}`}
                        // id="myRange"
                        onChange={changeCallback}
                    />
                </div>
                <div class="displayValues">
                    <span>0'min</span>
                    <span>120'min</span>
                </div>
            </div>

        );
    }
    ;

export default RangeSlider