import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import MyBooks from './components/MyBooks';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bestBooks:[],
    }
  }
  async componentDidMount() 
  {

    let url =`http://${process.env.REACT_APP_BOOK_DATA}/book?userEmail=${this.props.auth0.user.email}`;
    let bestBooks = await axios.get(url);
    await this.setState({
      bestBooks: bestBooks.data,
    })
    // console.log(bestBooks.data);

  }
  render() {
    return(
    
 <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <MyBooks
          bestBooks={this.state.bestBooks}
           />
      </Jumbotron>    
      )
//     this.state.bestBooks.data.map(data => {
//     return(
//       <Jumbotron>
// <Card>
// <Card.Body>
//   <Card.Title>{data.name}</Card.Title>
//   <Card.Text>
//     {data.description}
//   </Card.Text>
//   <Card.Text>
//     {data.status}
//   </Card.Text>
// </Card.Body>
// </Card>
//       </Jumbotron>
//     )
  // })
}}


export default withAuth0(MyFavoriteBooks);