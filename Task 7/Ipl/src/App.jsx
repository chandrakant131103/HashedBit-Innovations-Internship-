import { useEffect, useState } from "react";
import "./App.css";
import IPLTable from "./components/IPLTable";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
    )
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => a.NRR - b.NRR
        );

        setTeams(sortedData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>IPL Season 2022 Points</h1>

      <IPLTable teams={teams} />
    </div>
  );
}

export default App;