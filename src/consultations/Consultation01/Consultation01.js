import "./styles.css";
import avatar from "../../assets/pexels-vectors-icon-355704-968308.jpg"
import Button from "../../components/Button/Button";
import {userData} from "./data"
function Consultation01() {
  const showButton = true;
       

  return (
    <div className="consultation01-components">
       {/* Пример работы оператора условного рендеринга && */}
      

      {showButton && <Button/>}
      {/* 1 способ контроля размера картинки через создание класса тегу  img*/}
      <img className="avatar-img" src={avatar} alt = "user avatar"/>
       {/* 2 способ контроля размера картинки через добавление оббертки*/}
       <div>{userData.userName}</div>
       <div className="example-img-container">
      <img id="example-img" src={userData.avatar} alt = "user avatar"/>
      </div>
    </div>
  );
}

export default Consultation01;

