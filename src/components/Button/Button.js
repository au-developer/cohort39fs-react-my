import "./styles.css";

function Button() {
  const buttonName = "Send";
  // 2 способ задания класса через функцию
  // const getButtonClass = () => {
  //   return buttonName === "Delete"
  //     ? "button-component delete-button"
  //     : "button-component main-button";
  // };

  // 2 способ задания класса через функцию
  // return <button className={getButtonClass()}>{buttonName}</button>;

  // 3 способ - альтернатива через функцию и if-else
  // const getButtonClass = () => {
  //   if (buttonName === "Delete") {
  //     return "button-component delete-button";
  //   } else {
  //     return "button-component main-button";
  //   }
  // };
  // 3 способ - альтернатива через функцию и if-else
  //return <button className={getButtonClass()}>{buttonName}</button>;

  // 4 способ - добавляем тернарный оператор в переменную
  // const buttonClass =
  //   buttonName === "Delete"
  //     ? "button-component delete-button"
  //     : "button-component main-button";

       // 4 способ - добавляем тернарный оператор в переменную
      //return <button className={buttonClass}>{buttonName}</button>;

// 4 способ -оптимизирован 
const buttonClass = 
    buttonName === "Delete"
      ? "delete-button"
      : "main-button";

// 4 способ -оптимизирован 
      return <button className={`button-component ${buttonClass}`}>{buttonName}</button>;


}

export default Button;
