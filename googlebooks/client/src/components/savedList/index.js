import React from "react";
// import "./style.css";

function savedList(props) {
    return(
        props.bookData.map(bookData => {
            return (
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-2 col-sm-7 col-xs-2">
                                <img src={bookData.image} alt="bookImage"/>
                            </div>
                            <div className="col-lg-7 col-sm-11 col-xs-9">
                                <h2>{bookData.title}</h2>
                                <p>{bookData.authors}</p>
                                <p>{bookData.description}</p>
                                <button className="deleteButton" key={bookData.id} id={bookData._id} onClick={(event) => props.handleDeleteButton(bookData._id)}>Delete</button>
                                <button><a className="viewButton" href={bookData.link} target="_blank" rel="noopener noreferrer">View</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    );
}

export default savedList;