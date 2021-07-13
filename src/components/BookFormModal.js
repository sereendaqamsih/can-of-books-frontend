import React, { Component } from 'react';
import { Modal,Button,Form } from 'react-bootstrap';

export class BookFormModal extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add your Book!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
              <Form
              onSubmit={this.props.addBook}
              >
        <Form.Label></Form.Label>
        <Form.Control size="lg" type="text" placeholder="Book Title" name='addTitle'/> 
       <Form.Control size="lg" type="text" placeholder="Book Description" name='addDescription'/>
        <Form.Control size="lg" type="text" placeholder="Book Image" name='addLink'/>
        <Form.Control size="lg" type="text" placeholder="Book status" name='addStatus'/> 
            <input type="submit" value="Submit" />
           
       {/* // <input type="text" name='addTitle' />
        // <input type="text" name='addDescription' />
        // <input type="text" name='addLink' />
        // <input type="text" name='addStatus' /> */}

        {/* <Form.Control  as='select' name='add status' >
            <option >Recomended</option>
            <option>Best buy</option>
            <option >Want to read</option>
            <option >Read</option>
            </Form.Control> */}
            {/* <label>
                Title       
                   <input
            name="numberOfGuests"
            type="text"
            value={this.props.name}
             />

        </label>
        <label>
                Description       
                   <input
            name="numberOfGuests"
            type="text"
            value={this.props.description}
             />
             
        </label>
        <label>
        Status       
                   <input
            name="numberOfGuests"
            type="text"
            value={this.props.status}
             />
             
        </label>
        <label>
        Image link       
                   <input
            name="numberOfGuests"
            type="text"
            value={this.props.img}
             />
             
        </label>
        <input type="submit" value="Submit" /> */}

           
      </Form>             
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.handleClose} variant="secondary">
                close
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}
export default BookFormModal;