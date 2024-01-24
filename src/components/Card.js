import React from "react";
import { Image, Card as Card_, CardBody, Box, CardHeader, Heading, Button } from "@chakra-ui/react";


const Card = ({ title, price, description, imageSrc }) => {
  return (
    <Card_>
      <img src={imageSrc} alt="" className="photo" style={{borderRadius:'5% 5% 0 0'}}/>
      <CardBody style={{padding:'12px', backgroundColor:'#EEEEEE'}}>

        <h4 style={{fontWeight:"bold", float:'left'}}>{title}</h4>
        <h4 style={{fontWeight:"bold", float:'right', color:'#EE9972'}}>{price}</h4>
        <p style={{color:"#5E5E5E", padding:'14px 0', fontSize:'17px', clear: 'left'}}>{description}</p>
        <div style={{padding:'10px'}}>
          <button style={{width:'100%', alignItems:'center', borderRadius:'20px'}}>Add to Basket </button>
        </div>

      </CardBody>
    </Card_>

  );
};

export default Card;

