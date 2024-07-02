import SimpsonsCard from "../../components/SimpsonsCard/SimpsonsCard";
import Button from "../../components/Button/Button";
import "./styles.css";

function Lesson03() {
  const homer = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "NSI",
    hobby: "Drinking",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No job",
    hobby: "cooking",
    avatar: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };

  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "Skating",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };
// ---------------------------------------------свойства передем по отдельности

  // return (
  //   <div className="lesson03-wrapper">
  //     <SimpsonsCard
  //       avatar={homer.avatar}
  //       firstName={homer.firstName}
  //       lastName={homer.lastName}
  //       hobby={homer.hobby}
  //       job={homer.job}
  //     />
  //     <SimpsonsCard
  //       avatar={margeSimpson.avatar}
  //       firstName={margeSimpson.firstName}
  //       lastName={margeSimpson.lastName}
  //       hobby={margeSimpson.hobby}
  //       job={margeSimpson.job}
  //     />
  //     <SimpsonsCard
  //       avatar={bartSimpson.avatar}
  //       firstName={bartSimpson.firstName}
  //       lastName={bartSimpson.lastName}
  //       hobby={bartSimpson.hobby}
  //       job={bartSimpson.job}
  //     />
  //   </div>
  // );

// ---------------------------------------------------------------свойства передаем обьектом 
return (
  <div className="lesson03-wrapper">
    <SimpsonsCard userData = {homer}/>
    <SimpsonsCard userData = {margeSimpson}/>
    <SimpsonsCard userData = {bartSimpson}/>

   {/* Класический подход */}
    {/* <Button buttonName={"Send info"}/>
    <Button buttonName={"Delete"}/>
    <Button buttonName={"Update"}/> */}

  {/* Через CHILDREN */}
  <Button>Send info</Button>
  <Button/>
  <Button buttonName={"Update"}/>

  </div>
);
}


export default Lesson03;
