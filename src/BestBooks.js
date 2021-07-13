import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'
import { Card, Col, Container, Row } from 'react-bootstrap';
import BookFormModal from './components/BookFormModal';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bestBooks: [],
      show: false,
      showModal: false,
      server: process.env.REACT_APP_BOOK_DATA,

    }
  }
  handleModal = () => {
    this.setState({

      showModal: true,
    }

    )
  }
  handleClose = () => {
    this.setState({

      showModal: false,
    }

    )
  }
    // http://localhost:3001/books?userEmail=sereen.aldaqamsih@gmail.com

  componentDidMount = async () => {

    const { user } = this.props.auth0;

    let bestBooks = await axios.get(`${process.env.REACT_APP_BOOK_DATA}/books?userEmail=${user.email}`)
    await this.setState({
      bestBooks: bestBooks.data,
      show: true
    })
    console.log(bestBooks.data);
  }
  // http://localhost:3001/book?userEmail=sereen.aldaqamsih@gmail.com

//   
addBook = async (event) => {
  event.preventDefault();
  const { user } = this.props.auth0;
  let addTitle = event.target.addTitle.value;
  let addDescription= event.target.addDescription.value;
  let addLink=event.target.addLink.value;
  let addStatus= event.target.addStatus;
  let email = user.email
  
 const addBookForm = {
  addTitle : event.target.addTitle.value,
  addDescription: event.target.addDescription.value,
  addLink:event.target.addLink.value,
  addStatus: event.target.addStatus.value,
  email : user.email,
 }
console.log(addBookForm);
  let bestBooks = await axios.post(`${process.env.REACT_APP_BOOK_DATA}/book`,addBookForm)
  this.setState({
    bestBooks : bestBooks.data,
  })
    console.log(bestBooks.data);
}

deleteBook = async(index) =>{
  const { user } = this.props.auth0;

  // console.log(index);
  let paramsObj = {
    email:user.email
  }
  let booksData = await axios.delete(`${this.state.server}/deleteBook/${index}`,{params:paramsObj})
  this.setState({
    bestBooks:booksData.data,
  })


}



  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <Button onClick={this.handleModal} variant="primary" size="lg">
          Add Books
        </Button>
        {this.state.show &&
          this.state.bestBooks.map((book,index) => {
            return (
              <Container>
                <Row>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={book.img} />
                      <Card.Body>
                        <Card.Title>{book.name}</Card.Title>
                        <Card.Text>
                          {book.description}
                        </Card.Text>
                        <Card.Text>
                          {book.status}
                        </Card.Text>
                        <Button onClick={()=>this.deleteBook(index)} variant="primary" size="lg">
                        Delete
                      </Button>
                      </Card.Body>
                      
                    </Card>
                  </Col>
                </Row>
              </Container>
            )
          })
        }
        <BookFormModal addBook={this.addBook} 
          handleClose={this.handleClose} handleModal={this.handleModal} showModal={this.state.showModal} />
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);