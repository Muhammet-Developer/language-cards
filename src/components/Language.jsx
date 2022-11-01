import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
const Language = ({name,img,options}) => {
  const[showDesc,setShowDesc]=useState(true);

  return <Container style={{background:"peachpuff"}} 
  className="p-5 mb-4 rounded-2 " onClick={()=>setShowDesc(!showDesc)}>

   {showDesc && (<Container >
    <Image src={img} width="70%" className="lang-logos" ></Image>
    <h3 className="display-6">{name}</h3>
    </Container>)}

    {!showDesc && (<ul className="h-100 lang-card">
      {options.map((item) =>{
        return(
          <li className="h5 text-start">{item}</li>
        )
      })}
    </ul>)}

    
  </Container>
}

export default Language;