import React, { Component } from "react";
import Container from "./../components/Container";
import SavedList from "./../components/savedList";
import API from "../utils/API";

class Saved extends Component {
    state = { bookData: [] };

    componentDidMount() {
        API.getBooks()
            .then(res => {
                this.setState({ bookData: res.data })
                console.log(this.state.bookData);
            })
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
                    <SavedList bookData={this.state.bookData} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </div>
        );
    }
}

export default Saved;