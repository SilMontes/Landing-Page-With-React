import React from "react";
import firstImage from "https://previews.123rf.com/images/bigmouse/bigmouse1708/bigmouse170800008/83250142-fondo-de-patr%C3%B3n-de-hojas-verdes-vector.jpg";
import secondImage from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCW4SqupJQM8Hca7V9dL5qemNJzCIpgcg0lQ&usqp=CAU";
import thirdImage from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnTRxxilxG00zRtkSONqEgLhRMbzHWj6jTQ&usqp=CAU";
import fourthImage from "https://i.pinimg.com/736x/5f/90/c8/5f90c8057779dc12858a3905c6279550.jpg";

export function Cartas(){
const imageStyle={
    width:"250px",
    height: "300px"
}
    return(
        <div classname="row mt-4">
        <div className="card col-3 mr-1" style="width: 18rem;">
  <img className="card-img-top" src={firstImage} style={imageStyle} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Leaf</h5>
    <p className="card-text">{props.firstParagraph}</p>
    <a href="#" className="btn btn-primary">Find out More</a>
  </div>
</div>
<div className="card col-3 mr-1" style="width: 18rem;">
  <img className="card-img-top" src={secondImage} style={imageStyle} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Flower</h5>
<p className="card-text">{props.secondParagraph}</p>
    <a href="#" className="btn btn-primary">Find out More</a>
  </div>
</div>
<div className="card col-3 mr-1" style="width: 18rem;">
  <img className="card-img-top" src={thirdImage} style={imageStyle} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Sunflower</h5>
    <p className="card-text">{props.thirdParagraph}</p>
    <a href="#" className="btn btn-primary">Find out More</a>
  </div>
</div>
<div className="card col-3 mr-1 ml-1" style="width: 18rem;">
  <img className="card-img-top" src={fourthImage} style={imageStyle} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Ermine</h5>
    <p className="card-text">{props.secondParagraph}</p>
    <a href="#" className="btn btn-primary">Find out More</a>
  </div>
</div>
</div>
    );
}
Cartas.propTypes={
    firstParagraph: PropType.string,
    secondParagraph: PropType.string,
    thirdParagraph: PropType.string,
    fourthParagraph: PropType.string

}