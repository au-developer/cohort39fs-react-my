// ------------------------------------------------------Consultation_01
// import "./styles.css";

// function Button({buttonName}) {
// //   const buttonName = "Send";
//   // 2 способ задания класса через функцию
//   // const getButtonClass = () => {
//   //   return buttonName === "Delete"
//   //     ? "button-component delete-button"
//   //     : "button-component main-button";
//   // };

//   // 2 способ задания класса через функцию
//   // return <button className={getButtonClass()}>{buttonName}</button>;

//   // 3 способ - альтернатива через функцию и if-else
//   // const getButtonClass = () => {
//   //   if (buttonName === "Delete") {
//   //     return "button-component delete-button";
//   //   } else {
//   //     return "button-component main-button";
//   //   }
//   // };
//   // 3 способ - альтернатива через функцию и if-else
//   //return <button className={getButtonClass()}>{buttonName}</button>;

//   // 4 способ - добавляем тернарный оператор в переменную
//   // const buttonClass =
//   //   buttonName === "Delete"
//   //     ? "button-component delete-button"
//   //     : "button-component main-button";

//        // 4 способ - добавляем тернарный оператор в переменную
//       //return <button className={buttonClass}>{buttonName}</button>;

// // 4 способ -оптимизирован
// // const buttonClass =
// //     buttonName === "Delete"
// //       ? "delete-button"
// //       : "main-button";

// // 4 способ -оптимизирован
//       //return <button className={`button-component ${buttonClass}`}>{buttonName}</button>;

//       return <button className="button-component main-button">Send</button>;
// }

// export default Button;

// import "./styles.css";

// function Button({ children, type, buttonName = "Send" }) {
//   const buttonClass = type === "Delete" ? "delete-button" : "main-button";

//   return (
//     <button className={`button-component ${buttonClass}`}>
//       {/* Children example */}
//       {/* {children} */}
//       {buttonName}
//     </button>
//   );
// }

// export default Button;

// -------------------------------------------------------------Lesson_03 props
// import "./styles.css";

// function Button({buttonName}) {
//   console.log(buttonName);
//   return <button className={`button-component main-button`}>{buttonName}</button>;
// }

// export default Button;

// -------------------------------------------------------------Lesson_03 children

// import "./styles.css";

// function Button({children, buttonName = "example default"}) {
  
//   return <button className={`button-component main-button`}>{children} {buttonName}</button>;
// }

// export default Button;


// -------------------------------------------------------Homework03t
import "./styles.css";

function Button({ type = "button", name = "Send", onClick }) {  
  return (
    <button onClick={onClick} type={type} className="button-component">
      {name}
    </button>
  );
}

export default Button;