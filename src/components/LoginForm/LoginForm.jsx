// Homework03t
// import "./styles.css";
// import Button from "../Button/Button";
// import Input from "../Input/Input";

// function LoginForm() {
//   return (
//     <form className="login-form-container">
//       <p className="title">Login form</p>
//      <div className="inputs-container">
//       <Input  id="email-id"
//           name="email"
//           type="email"
//           placeholder="Enter your email"
//           label="Email"/>
//       <Input  id="password-id"
//           name="password"
//           type="password"
//           placeholder="Enter your password"
//           label="Password"/>
//       </div>
//       <Button name="Login" type="Submit"/>
//     </form>
//   );
// }

// export default LoginForm;

// Lesson04 - события
import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  {
    /* Пример работы с тригером clickOnMe*/
  }
  //const BUTTON_CLICK = document.querySelector(".button-click");
  // const clickOnMe = (event,someArg) => {
  //   console.log(event);
  //   console.log(someArg);
  //   console.log("Triger on button works, button is  clicked");
  // };

  const loginUser = (event) => {
    event.prevenDefault();
    console.log("Loging succesfully");
  };

  return (
    <form className="login-form-container">
      <p className="title">Login form</p>
      <div className="inputs-container">
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </div>
      <Button name="Login" type="submit" />
      <Button onClick ={loginUser} name="Login" type="submit" />
      <Button onClick ={()=>{console.log("Loging succesfully")}} name="Login" type="submit" />
      <Button onClick ={()=>{console.log("Loging UNsuccesfully")}} name="Login" type="submit" />

      {/* Пример работы с тригером clickOnMe*/}
      {/* <button onClick = {(event)=>clickOnMe(event,"Some message")} className="button-click" type="button">
        Click me!!!
      </button> */}
    </form>
  );
}

export default LoginForm;
