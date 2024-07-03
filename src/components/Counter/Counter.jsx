import "./styles.css";
import {useState} from "react";
import Button from "../Button/Button";

function Counter() {
 const [count, setCount] = useState(0);

 // Функция-хук useSate() возвращает массив из 2 элементов
  // - 1 элемент - это переменная сотояния
  // - 2 элемент - функция, которая меняет это состояние
  // По умолчанию count = undefined, если мы ничего не передадим в качестве аргумента в функцию useState()
  const onPlus = () => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  };

  const onMinus = () => {
    setCount((prevValue) => {
      return prevValue - 1;
    });
  };




  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>

      <p className="count">{count}</p>

      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
