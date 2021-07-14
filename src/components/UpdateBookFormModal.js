import React, { Component } from 'react';
import { Modal,Button,Form } from 'react-bootstrap';

export class UpdateBookFormModal extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update your Book!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
              <Form
              onSubmit={this.props.updateBook}
              >
        <Form.Label></Form.Label>
        <Form.Control size="lg" type="text" name='updateTitle' defaultValue={this.props.updateTitle}/> 
       <Form.Control size="lg" type="text" name='updateDescription' defaultValue={this.props.updateDescription}/>
        <Form.Control size="lg" type="text" name='updateLink' defaultValue={this.props.updateLink}/>
        <Form.Control size="lg" type="text" name='updateStatus' defaultValue={this.props.updateStatus}/> 
            <input type="submit" value="Submit" />
           
                  
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
export default UpdateBookFormModal;