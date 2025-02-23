import { useState } from "react";

export default function Forms() {
  let [formData, setFormData] = useState({
    username: "",
    comment: "",
    rating: "",
  });

  function handleInput(event) {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log(formData);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          name="username"
          placeholder="enter username"
          value={formData.username}
          onChange={handleInput}
        ></input>
        <br></br>
        <input
          name="comment"
          placeholder="enter comment"
          value={formData.comment}
          onChange={handleInput}
        ></input>
        <br></br>
        <input
          name="rating"
          placeholder="enter rating"
          value={formData.rating}
          onChange={handleInput}
        ></input>
        <br></br>
        <button>Submit</button>
      </form>
    </>
  );
}
