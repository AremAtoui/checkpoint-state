import React, { useState } from 'react';
import './bio.css';

function Bio() {
    const [prix, setprix] = useState(1230);
    const [phone, setphone] = useState("iphone-12-pro-max");

const object = {RAM:" 6 Go ",
Version : "Bluetooth 5.0",
systéme:"iOS 14",
}
const [person, setpesrson]=useState({
    name:"Arem",
    age:"26",
    email:"arem.atoui@isimg.tn"
})
    
    return (
        <div>
            <div className="Too">
                <img className="Img" src="iphone-12-pro-max.jpg" />
                <div className="pho">
                    <h4>{phone}</h4>
                    <button onClick={() => setphone("Apple iPhone 12 Pro Max")}>Change name</button>
                    <h6>{object.RAM}</h6>
                    <h6>{object.Version }</h6>
                    <h6>{object.systéme}</h6>
                    <h4>{prix}</h4>
                    <button onClick={() => setprix(prix + 1)}>+</button>
                    <button onClick={() => setprix(prix - 1)}>-</button>
                   
            </div>
            <div className="shopping">
<h5 style={{fontSize:"17px"}}>{person.name} </h5>
<input type="text" onChange={(e)=>setpesrson({...person, name:e.target.value})} />
<h5 style={{fontSize:"17px"}}>{person.email}</h5>
<input type="text" onChange={(e)=>setpesrson({...person, email:e.target.value})} />
<br></br>
<fieldset>
    <h4 style={{fontSize:"17px"}}>Choose your marital status: </h4>

    <div>
      <input type="checkbox" id="single" name="single" checked/>
      <label for="single">single</label>
    </div>

    <div>
      <input type="checkbox" id="married" name="married"/>
      <label for="married">married</label>
    </div>
</fieldset>
</div>
        </div>



       </div>
    )
}

export default Bio