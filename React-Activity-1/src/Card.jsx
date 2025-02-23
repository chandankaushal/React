import "./Card.css";

function Card({
  itemName = "None",
  features = [],
  oldPrice = 0,
  newPrice = 0,
}) {
  return (
    <>
      <div className="Card">
        <h3>{itemName}</h3>
        <ul>
          {features.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
        <div className="price">
          <p className="oldPrice">{oldPrice}</p>
          <p className="newPrice">{newPrice}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
