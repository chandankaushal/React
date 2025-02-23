import "./CardHolder.css";

import Card from "./Card";
import CardHeading from "./CardHeading";

function CardHolder() {
  return (
    <>
      <CardHeading />
      <div className="cardHolder">
        <Card
          itemName="Logitech MX Master"
          features={["8000DPI", "5 Programmable Buttons"]}
          oldPrice={1000}
          newPrice={500}
        />
        <Card
          itemName="Apple Pencil (2nd Gen)"
          features={["Works on iPad", "Draw"]}
          oldPrice={169}
          newPrice={139}
        />
        <Card
          itemName="Zebronics"
          features={["Works on iPad", "Draw"]}
          oldPrice={169}
          newPrice={139}
        />
        <Card
          itemName="Petronics Toad"
          features={["Works on iPad", "Draw"]}
          oldPrice={169}
          newPrice={139}
        />
      </div>
    </>
  );
}

export default CardHolder;
