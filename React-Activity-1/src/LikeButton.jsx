import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let [count, setCount] = useState(0);
  function isClicked() {
    setIsLiked(!isLiked);
    setCount(count + 1);
    console.log(isLiked);
  }

  let styles = { color: "red" };
  return (
    <>
      <div>
        <p>Times Clicked:{count}</p>
        <p onClick={isClicked}>
          {isLiked ? (
            <i className="fa-solid fa-heart" style={styles}></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </p>
      </div>
    </>
  );
}
