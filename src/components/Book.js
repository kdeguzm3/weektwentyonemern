import React from 'react';

export default ({title, authors, description, infoLink, thumbnail}) => {

    return (
        <div className = 'book' style = {{backgroundColor: 'gray', margin: "3px"}}>
            <h1 >< a href = {infoLink}> {title} </a></h1>
            <p style = {{fontSize: '14px'}}> ( {authors} ) </p> 
            <img src = {thumbnail} alt = 'Book Cover' />
            <p>{description}</p>
        </div>
    )
}