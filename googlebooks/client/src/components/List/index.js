import React from "react";
import "./style.css"

function List(props) {
    return (
        props.books.map(book => {
            return (
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-2 col-sm-7 col-xs-2">
                                <img src={book.image} alr="bookImage" />
                            </div>
                            <div className="col-lg-7 col-sm-11 col-xs-9">
                                <h2>{book.title}</h2>
                                <p>{book.authors}</p>
                                <p>{book.description}</p>
                                <Button className="saveButton" key={book.id} id={book.id} onClick={(event) => props.handleSavedButton(event)}>Save</Button>
                                <Button><a className="viewButton" href={book.link} target="_blank" rel="noopener noreferrer">View</a></Button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    );
}

export default List;