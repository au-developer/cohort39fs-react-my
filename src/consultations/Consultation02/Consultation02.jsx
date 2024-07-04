import "./styles.css"

function Consultation02() {
  const sayHi = (event, userName) => {
    console.log(event);
    event.preventDefault();
    console.log(`Hello! ${userName}`);
  };

  //sayHi();
const user ={
    
}

  const sayHi2 =(event)=>{
    console.log(event);
  }
  return (
    <div className="page-wrapper">
      {/* <form>
        <button onClick={sayHi} type="submit">
          Click me!
        </button>
      </form> */}
      <button onClick={(event)=>{sayHi (event, "Andrey")}} type="button">
          Click me!
        </button>
        <a onClick={(event)=>{
            event.preventDefault();
        }} href="https://www.google.co.uk/">Link to google</a>
    </div>
  );





}
export default Consultation02;
