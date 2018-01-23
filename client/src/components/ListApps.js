import React, { Component } from 'react';
import './ListApps.css';
import Modal from 'react-modal';
import { Button, Form, Grid, Image, Message, Segment, Card, Icon } from 'semantic-ui-react';

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

        <Card.Group itemsPerRow={4}>

          <Card>
            <Image src='/img/appicon-sample.png' />
            <Card.Content>
              <Card.Header>App Name#1</Card.Header>
              <Card.Meta>Last updated yesterday</Card.Meta>
              <Card.Description>This App is a lorem ipsum in sit amet.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='browser' />
                13 Posts
              </a>
              <a>
                <Icon name='edit' />
                2 Drafts
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src='/img/appicon-sample.png' />
            <Card.Content>
              <Card.Header>App Name#2</Card.Header>
              <Card.Meta>Last updated yesterday</Card.Meta>
              <Card.Description>This App is a lorem ipsum in sit amet.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='browser' />
                13 Posts
              </a>
              <a>
                <Icon name='edit' />
                2 Drafts
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src='/img/appicon-sample.png' />
            <Card.Content>
              <Card.Header>App Name#3</Card.Header>
              <Card.Meta>Last updated yesterday</Card.Meta>
              <Card.Description>This App is a lorem ipsum in sit amet.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='browser' />
                13 Posts
              </a>
              <a>
                <Icon name='edit' />
                2 Drafts
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src='/img/appicon-sample.png' />
            <Card.Content>
              <Card.Header>App Name#4</Card.Header>
              <Card.Meta>Last updated yesterday</Card.Meta>
              <Card.Description>This App is a lorem ipsum in sit amet.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='browser' />
                13 Posts
              </a>
              <a>
                <Icon name='edit' />
                2 Drafts
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src='/img/appicon-sample.png' />
            <Card.Content>
              <Card.Header>App Name#5</Card.Header>
              <Card.Meta>Last updated yesterday</Card.Meta>
              <Card.Description>This App is a lorem ipsum in sit amet.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='browser' />
                13 Posts
              </a>
              <a>
                <Icon name='edit' />
                2 Drafts
              </a>
            </Card.Content>
          </Card>

        </Card.Group>


          <Button primary circular icon="plus" className="button-addApp" onClick={this.openModal} />

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

                <Button.Group widths='2'>
                  <Button primary>Create</Button>
                  <Button secondary onClick={this.closeModal}>Cancel</Button>
                </Button.Group>

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
