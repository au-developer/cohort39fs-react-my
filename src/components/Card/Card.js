import "./styles.css";

function Card() {
  const homer = {
    photo: (
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE7n03AXMn7LXZSl4G3g2PHlAoo82AtPXCfg&s" />
    ),
    name: "Homer Simpson",
    work: "Drink and Sleep",
    hobby: "Troubleshooting",
  };
  return (
    <div className="card-component">
      <p>{homer.photo}</p>
      <p>Name: {homer.name}</p>
      <p>Work: {homer.work}</p>
      <p>Hobby: {homer.hobby}</p>
    </div>
  );
}

export default Card;