import React, { Component } from "react";
import Games from "./data.json";

const GameData = Games.map(

    (Games) =>
    {
        return(
            <div className="col-4" key={Games.id}>
                <div className="card shadow-sm">
                    <img src={Games.image} />
                    <div className="card-body">
                        <p className="card-text">{Games.description}</p>
                        <small className="text-muted">Price: ${Games.price}</small>
                    </div>
                </div>
            </div>
        );
    }

);

class Content extends Component
{
    render()
    {
        return(
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-sm-2 cols-md-3 g-3">
                    {GameData}
                    </div>
                
                </div>
            </div>
           
        );
    }
}

export default Content;