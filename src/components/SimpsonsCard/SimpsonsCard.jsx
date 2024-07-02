// --------------------------------Код для Homework02t--------------------------------------------
// import "./styles.css";
// function SimpsonsCard() {
//   const homer = {
//     firstName: "Homer",
//     lasrName: "Simpson",
//     job: "NSI",
//     hobby: "Drinking",
//     avatar:
//       "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
//   };
// const fullName = `${homer.firstName} ${homer.lasrName}`;
//   return (
//     <div className="card-wrapper">
//       <img
//         className="avatar"
//         src={homer.avatar}
//         alt="avatar"
//       />
//       <p className="card-item"> Full name: {fullName}</p>
//       <p className="card-item">Job: {homer.job}</p>
//       <p className="card-item">Hobby: {homer.hobby} </p>
//     </div>
//   );
// }

//export default SimpsonsCard;

// ----------------------------------------------------Код для Lesson03-------------------------------------------

import "./styles.css";
// когда нужно вытаскивать свойства раздельно
// function SimpsonsCard({avatar, firstName, lastName, job, hobby}) {

// когда нужно вытаскивать свойства сразу обьектом props
function SimpsonsCard({ userData }) {
  const { avatar, firstName, lastName, job, hobby } = userData;

  return (
    <div className="card-wrapper">
      <img className="avatar" src={avatar} alt="avatar" />
      <p className="card-item"> Full name: {`${firstName} ${lastName}`}</p>
      <p className="card-item">Job: {job} </p>
      <p className="card-item">Hobby: {hobby}</p>
    </div>
  );
}

export default SimpsonsCard;
