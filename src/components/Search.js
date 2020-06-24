import React, {useState, useEffect} from 'react';
import Book from './Book';
import {Link}from'react-router-dom';

export default () => {

    const [ searchText, setSearchText] = useState("");
    const [ books, setBooks] = useState([]);
    let bookRender = "";

    function handleSubmit (query) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxresults=10&key=AIzaSyAaW9vYV9B8m82CeWrLDO4tq5OybdGexWE`)
        .then( res => res.json())
        .then(data => {
            console.log(data.items);
            bookRender = data.items.map(({volumeInfo: {title, authors, description, infoLink, imageLinks}}) => {
                return (
                    <Book title = {title} authors = {authors} key = {title} description = {description} infoLink = {infoLink} thumbnail = {imageLinks.thumbnail}/>
                )
            })
            setBooks(bookRender);
        });
    }
    

    return (
        <div className = 'results' >
            <p><Link to = "/saved" >See Saved Books</Link></p>
            
            <input id = 'searchText' type = 'text' placeholder = 'Search Google Books' value = {searchText} onChange = {(e) => setSearchText(e.target.value)} /> 
            <button onClick = {() => handleSubmit(searchText)}> Submit </button> 
            <div id = 'resultsDiv' > 
            {books}
            </div>
        </div>
    )
}