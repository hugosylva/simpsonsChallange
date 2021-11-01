import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";
import DisplayCharacter from "./DisplayCharacter";

//import DisplayCharacter from './DisplayCharacter';

function App() {
  const [quote, setQuote] = useState("Get your Simpson's daily wisdom dose");

  function getApi() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => {
        //console.log(response)
        return response.data[0];
      })
      .then((data) => {
        // console.log(data)
        //setQuote(data.quote)
        setQuote(data);
      });
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="App">
      <h1>The Simpsons</h1>
      <DisplayCharacter allInfo={getApi} quote={quote} />
    </div>
  );
}

export default App;
