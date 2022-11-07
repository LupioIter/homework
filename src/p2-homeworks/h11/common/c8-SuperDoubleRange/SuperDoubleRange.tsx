import React, {ChangeEvent, useCallback, useEffect, useRef} from 'react'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChange?: (value: [number, number]) => void
    min: number
    max: number
    value: any
    setValue1: (value: number) => void
    setValue2: (value: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value,
        min, max,
        setValue1, setValue2
    }
) => {
    // сделать самому, можно подключать библиотеки
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback((value: number) =>
        Math.round(((value - min) / (max - min)) * 100), [min, max])

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(value[0]);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [value[0], getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(value[1]);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [value[1], getPercent]);

    return (
        <>
            <span className={s.container}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value[0]}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const val = Math.min(Number(event.target.value), value[1] - 1);
                        setValue1(val);
                        minValRef.current = val;
                    }}
                    className={`${s.thumb} ${s.thumbLeft}`}
                    style={{ zIndex: value[0] > max - 100 ? "5" : ''}}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value[1]}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const val = Math.max(Number(event.target.value), value[0] + 1);
                        setValue2(val);
                        maxValRef.current = val;
                    }}
                    className={`${s.thumb} ${s.thumbRight}`}
                />

                <div className={s.slider}>
                    <div className={s.sliderTrack}></div>
                    <div ref={range} className={s.sliderRange}></div>
                    <div className={s.sliderLeftValue}>{value[0]}</div>
                    <div className={s.sliderRightValue}>{value[1]}</div>
                </div>
            </span>
        </>
    )
}

export default SuperDoubleRange
