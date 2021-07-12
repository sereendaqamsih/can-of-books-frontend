import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class MyBooks extends Component {
    render() {
        return (

                    this.props.bestBooks.map((book, index) => {
                        return (
                            <>
                            <Card  key={index}>
                                <Card.Img  src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.name}</Card.Title>
                                    <Card.Text>     {book.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Text></Card.Text>
                            </Card>
                            </>
                        )
                    })
                

            
        )
    }
}

export default MyBooks;