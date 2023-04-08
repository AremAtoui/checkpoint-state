import './App.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FullName from './Components/FullName';
import Bio from './Components/Bio';
import Prefession from './Components/Prefession';
function App() {
  const object =
  {
    nom: "Arem Atoui",
    age: 26,
    email: "arem.atoui@isimg.tn",
    specialité:"Master-Recherche"
  }
  const handlealert = (x) => alert(x);

  const [name, setName] = useState("Arem");
  const [nom, setNom] = useState("Soufien");
  return (
    <div>

      <div className="Global">
        <img src="https://i.imgur.com/xkXOj02.gif"></img>
        <div className="First">
          <h3>The Full-Stack Javascript Bootcamp</h3>
          <div className="Naa">
            <img src="https://gomycodelearndev.blob.core.windows.net/profiles/1c2d053f-15d3-486f-9d88-e59fbbcda5c0-133246410762318954.jpg" />
            <h6>Fatma Ben Aissa FT</h6>
            <p>InStrUctOr</p>
            <Button className="primary">Resume Course</Button>{' '}
          </div>
        </div>
      </div>
      <button onClick={() => handlealert("Comment-allez vous ?")}> All action </button>
      <div className="Bag">
        <h1>The students</h1>

        <h3>{name}</h3>
        <button onClick={() => setName("Ameni")}>Change name</button>
        <h3>{nom}</h3>
        <button onClick={() => setNom("Wissam")}>Change name</button>
      </div>
      {/* <button onClick={() => setName("Abir")}>on click to change name</button>
      <button onClick={() => setName("Oussama")}>on click to change name</button>
      <button onClick={() => setName("Hassen")}>on click to change name</button>
      <button onClick={() => setName("Hiba")}>on click to change name</button>
      <button onClick={() => setName("Aicha")}>on click to change name</button> */}



      <FullName name={object.nom} age={object.age} specialite={object.specialité} email={object.email} handlealert={handlealert} />
      <Bio />
      <Prefession />

    </div>
  );
}

export default App;
