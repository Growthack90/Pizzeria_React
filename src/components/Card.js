import React, { Component } from "react";
import margherita from "../images/margherita.jpg";

class Card extends Component {
    render() {
    return (
        <div className="col">
            <div className="card" style={{width: "18rem", textAlign: "center"}}>
                <img src={margherita} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Margherita</h5>
                    <p className="card-text"> 4.00 $</p>
                    <button className="btn btn-outline-danger">Elimina</button>
                </div>
            </div>
        </div>
    );
}
}

export default Card;