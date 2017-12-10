import React, { Component } from 'react';
import './ListApps.css';
import Modal from 'react-modal';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ListApps extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    this.props.history.push('/app-single');
  }

  render() {
    return(
      <div className="listAppWrp">
        <div className="wrapper">
          <ul className="la-grid-wrp">
            <li>
              <Image src='/img/appicon-sample.png' />
              <h3>App name</h3>
              <p>13 Posts</p>
              <p>2 Drafts</p>
            </li>
            <li>
              <Image src='/img/appicon-sample.png' />
              <h3>App name</h3>
              <p>13 Posts</p>
              <p>2 Drafts</p>
            </li>
            <li>
              <Image src='/img/appicon-sample.png' />
              <h3>App name</h3>
              <p>13 Posts</p>
              <p>2 Drafts</p>
            </li>
            <li>
              <Image src='/img/appicon-sample.png' />
              <h3>App name</h3>
              <p>13 Posts</p>
              <p>2 Drafts</p>
            </li>
          </ul>


          <button className="button-addApp" onClick={this.openModal}>+</button>

          <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <div className="listModal-inner">

            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='write'
                  iconPosition='left'
                  placeholder='App Name'
                />
                <Form.TextArea
                  iconPosition='left'
                  placeholder='Description..'
                />
                <Button primary>Create</Button>
                <Button secondary onClick={this.closeModal}>Cancel</Button>
                </Segment>
            </Form>

          </div>
        </Modal>

        </div>
      </div>
    );
  }
}

export default ListApps;
