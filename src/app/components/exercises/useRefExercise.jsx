import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const someRef = useRef(null);
    const textRef = useRef("Блок");
    const handleClick = () => {
        someRef.current.style.width = "80px";
        someRef.current.style.height = "150px";
        textRef.current.textContent = "text";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={someRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={textRef}>{textRef.current}</small>
            </div>
            <button
                className="btn btn-outline-secondary mt-2"
                onClick={handleClick}
            >
                Изменить свойства блока
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
