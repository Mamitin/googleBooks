import React, { Component } from "react";
import Container from "./../components/savedList";
import savedList from "./../components/savedList";
import API from "../utils/API";

class Saved extends Component {
    state = { bookData: [] };

    componentDidMount() {
        API.getBook()
            .then(res => this.setState({ bookData: res.data }))
            .catch(err => console.log(err))
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Container>
                    <h1>Google Book Search</h1>
                    <h2>Saved Books</h2>
                </Container>
                <div className="container">
                    <savedList bookData={this.state.bookData} handleDeleteButton={this.handleDeleteButton} />
                </div>
            </div>
        );
    }
}

export default Saved;