import React, { Component } from 'react';
import './ListApps.css';
import AppIcon from '../img/appicon-sample.png';
import Modal from 'react-modal';

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
      <div>
        <div className="wrapper">
          <ul className="la-grid-wrp">
            <li>
              <img src={AppIcon} alt="" />
              <h3>App name</h3>
              <p>13 Posts</p>
              <p>2 Drafts</p>
            </li>
            <li>
              <img src={AppIcon} alt="" />
              <h3>App name</h3>
              <p>13 Posts</p>
              <p>2 Drafts</p>
            </li>
            <li>
              <img src={AppIcon} alt="" />
              <h3>App name</h3>
              <p>13 Posts</p>
              <p>2 Drafts</p>
            </li>
            <li>
              <img src={AppIcon} alt="" />
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

          <button className="rmodal-close" onClick={this.closeModal}>close</button>
          <div className="listModal-inner">
            <form onSubmit={this.handleSubmit}>
              <input type="text" className="text-field" placeholder="Your App Name" />
              <textarea className="text-area" placeholder="Small description about your App"></textarea>
              <input type="submit" className="button-submit" value="create" />
            </form>
          </div>
        </Modal>

        </div>
      </div>
    );
  }
}

export default ListApps;
