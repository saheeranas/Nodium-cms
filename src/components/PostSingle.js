import React, { Component } from 'react';
import './PostSingle.css';
import AppIcon from '../img/appicon-sample.png';
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

          <div className="dash-left">
            <div className="dash-left-in">
              <div className="as-icon-wrp">
                <img src={AppIcon} alt="" />
              </div>
              <ul className="dash-menu">
                <li>Settings</li>
                <li>API Details</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
              </ul>
            </div>
          </div>

          <div className="dash-right">
            <div className="dash-right-in">

            <form onSubmit={this.handleSubmit}>

             <div className="ps-row">
               <input type="text" placeholder="Title" className="ps-field" />
             </div>

             <div className="ps-row">
                <ReactQuill theme="snow" value={this.state.text}
                    onChange={this.handleChange} />
             </div>

             <input type="submit" value="Post" />

            </form>


            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default PostSingle;
