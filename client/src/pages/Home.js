import React, { Component } from "react";
import List from "./../components/List";
import Container from "../components/Container";
import Form from "../components/Form"
import API from "../utils/API";
import Book from "../components/Book";

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
                    var results = [{
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
                    var books = results.map(result => {
                        var book = {
                            id: result.id,
                            title: result.volumeInfo.title,
                            authors: result.volumeInfo.authors,
                            description: result.volumeInfo.description === undefined ? "No description" : result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks === undefined ? "NoImage.jpg" : result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink,
                        }
                        return book;
                    })
                    this.setState({ books: books });
                }
            })
            .catch(err => console.log(err));
    };

    handleSavedButton = id => {
        // event.preventDefault();
        var bookData = this.state.books.find(book => book.id === id);

        API.saveBook({
            bookId: bookData.id,
            title: bookData.title,
            subtitle: bookData.subtitle,
            link: bookData.infoLink,
            authors: bookData.authors,
            description: bookData.description,
            image: bookData.image
        }).then(() => console.log("Testing"))
        
    };

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
                    {/* <List books={this.state.books} handleSavedButton={this.handleSavedButton}></List> */}
                    <List>
                        {this.state.books.map(book =>
                            <Book
                                key={book.id}
                                title={book.title}
                                subtitle={book.subtitle}
                                link={book.link}
                                authors={book.authors}
                                description={book.description}
                                image={book.image}
                                Button={() => (
                                    <button className="saveButton" onClick={() => this.handleSavedButton(book.id)}>Save</button>
                                )}
                            />
                        )}
                    </List>
                </div>
            </div>
        );
    }
}

export default Home;