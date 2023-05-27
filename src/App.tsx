import React, { useState, useEffect } from "react";

import List from "./List";

function App() {
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    try {
      fetch(
        "https://my-json-server.typicode.com/MeshachArinze/space_x_clone/name"
      )
        .then((res: { json: () => any; }) => res.json())
        .then((json: React.SetStateAction<never[]>) => {
          setdatas(json);
        });
    } catch (error) {
      console.log(error)
    }
  }, [datas]);
  
  return (
    <main>
      <section className="container">
        <h3>{datas.length} birthdays today</h3>
        
        <List datas={datas} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
function fetch(arg0: string) {
  throw new Error("Function not implemented.");
}

