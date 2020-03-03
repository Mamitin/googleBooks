import React from "react";

function Book({ title, authors, description, link, Button, image }) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-2 col-sm-7 col-xs-2">
                        <img src={image} alt="bookImage" />
                    </div>
                    <div className="col-lg-7 col-sm-11 col-xs-9">
                        <h2>{title}</h2>
                        <p>{authors}</p>
                        <p>{description}</p>
                        <Button/>
                         <button><a className="viewButton" href={link} target="_blank" rel="noopener noreferrer">View</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Book;