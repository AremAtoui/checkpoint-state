import React from 'react';
import Figure from 'react-bootstrap/Figure';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './fullName.css';
function FullName(props) {
  return (
    <div>
        <div className="Tools">
  <Card >
      <Card.Img variant="top" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/338719087_796572664637485_184924822229231999_n.jpg?stp=dst-jpg_s526x296&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=BCJNhwc7ucUAX8VQVMW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRz4NiXttmz0NB7O393w186_P_-RrZ8gzuQIxLVD1A8ZA&oe=6458CBE4" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        {/* <Card.Text>{props.age}</Card.Text> */}
        <Card.Text>
        <p>{props.age} 
        </p>
        <p>{props.specialite}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Figure>
    <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://scontent.ftun2-2.fna.fbcdn.net/v/t1.15752-9/338736030_2520623441418295_5451100839575113394_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=4rihDljhA-4AX_Z7f6V&_nc_ht=scontent.ftun2-2.fna&oh=03_AdTyeHLDmxFOGie_YUdcc3WWUdAbYhOLoL4gSOscaeQPCA&oe=6457F938"
      />          
                    <Figure.Caption>
                        <h4>Développeuse-FullStack-js </h4>
                        <h6>{props.email} </h6>
                       
                        {/* <p>Salut tous le monde, je m'appelle {props.name} Atoui j'ai {props.age} ans je suis une fille très charmante, avec des joues rondes et des yeux vertes. je suis très gentille avec tout le monde. Je suis toujours avec mes amis pour ses supporter et pour ses montrer la meilleure solution quand ils ont des problèmes. Ce que j'aime à mes amies c'est l'honnêteté.</p> */}
                        <div className="preference">
<label for="cheese">Competances</label>
<select id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">HTML</option>
    <option value="cat">Javascript</option>
    <option value="hamster">Php</option>
    <option value="parrot">React-js</option>
    <option value="spider">Angular</option>
    <option value="goldfish">SpringBOOT</option>
</select>
    </div>

                    </Figure.Caption>
                </Figure>
                </div>

    </div>
  )
}

export default FullName;
