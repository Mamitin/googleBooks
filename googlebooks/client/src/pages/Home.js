import React, { Component } from "react";
import List from "./../components/List";
import Container from "../components/Container";
import Form from "../components/Form"
import API from "../utils/API";

class Home extends Component {
    state = {
        search: "",
        books: [],
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchBooks(String(this.state.search))
            .then(res => {
                if (res.data.status === "error") {
                    var result = [{
                        id: "",
                        title: "",
                        author: [],
                        description: "",
                        image: "",
                        link: "",
                    }]
                    this.setState({ books: results })
                }
                else {
                    var results = res.data.items
                    results = results.map(result => {
                        results = {
                            id: result.id,
                            title: result.volumeInfo.title,
                            authors: result.volumeInfo.authors,
                            description: result.volumeInfo.description === underfined ? "No description" : result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks === undefined ? "NoImage.jpg" : result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink,
                        }
                        return result;
                    })
                    this.setState({ books: results });
                }
            })
            .catch(err => console.log(err));
    };

    handleSavedButton = event => {
        event.preventDefault();
        var bookData = this.state.books.filter(book => book.id === event.target.id);
        bookData = bookData[0];
        API.saveBook(bookData)
            .then(function (data) {
                alert("Saved!");
            });
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Google Book Search</h1>
                    <h2>Search for books</h2>
                </Container>
                <div className="container">
                    <Form
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    ></Form>
                    <List books={this.state.books} handleSavedButton={this.handleSavedButton}></List>
                </div>
            </div>
        );
    }
}