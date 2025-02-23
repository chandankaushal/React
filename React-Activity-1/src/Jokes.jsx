import { useState, useEffect } from "react";

export default function Jokes() {
  let URL = "https://official-joke-api.appspot.com/random_joke";
  let [joke, setJoke] = useState({});
  async function callApi() {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
  }

  useEffect(() => {
    async function firstCallApi() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    }
    firstCallApi();
  }, []);

  return (
    <>
      <h2>Jokes</h2>
      <h3>{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      <button onClick={callApi}>Call</button>
    </>
  );
}
