import React, { Component } from 'react';
import { Modal, ButtonToolbar, Button } from 'react-bootstrap';
import StudentCompare from '../Student/StudentCompare'
import style from '../../Courses.module.css'

class CompareModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" className={style['compare-button']}onClick={this.handleShow}>
          Compare Selected Students
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
          className={style['modal-compare']}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              {this.props.coursename} 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Comparison</h4>
            <div>
              {this.props.students.map((student, index)=> {return <StudentCompare key={index} student={student}/>})}
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default CompareModal;