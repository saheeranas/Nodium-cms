import React, { Component } from 'react';
import './PostSingle.css';
import { Menu, Button, Input } from 'semantic-ui-react'
import MenuExampleVertical from './VerticalMenu';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class PostSingle extends Component {

  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
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

          <MenuExampleVertical />

          <div className="dash-right">
            <div className="dash-right-in">

            <form onSubmit={this.handleSubmit}>

             <div className="ps-row">
               <Input placeholder="Title" className="ps-field" />
             </div>

             <div className="ps-row">
                <ReactQuill theme="snow" value={this.state.text}
                    onChange={this.handleChange} />
             </div>

             <Button.Group floated='right'>
              <Button>Cancel</Button>
              <Button positive>Post</Button>
            </Button.Group>

            </form>


            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default PostSingle;
