import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AppSingle.css';
import AppIcon from '../img/appicon-sample.png';






class AppSingle extends Component {
  render() {
    return(
      <div>
        <div className="wrapper">

          <div className="dash-left">
            <div className="as-icon-wrp">
              <img src={AppIcon} />
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

          <div className="dash-right">
            <div className="dash-right-in">

              <div className="wrapper">
                <ul className="as-appname">
                  <li>App</li>
                  <li>App_Name_lorem</li>
                </ul>
              </div>

              <div className="asTabs-wrp">

              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AppSingle;
